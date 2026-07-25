import React, { useState, useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { type Galerie } from '@/types/types'

export default function GalerieFSI() {
  const [albums, setAlbums] = useState<Galerie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [filter, setFilter] = useState('Tous')
  const [selectedAlbum, setSelectedAlbum] = useState<Galerie | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const [isLoggedIn] = useState(false)

  const promotionsFilterList = [
    'Tous',
    'L1',
    'L2',
    'L3',
    'M1 Réseau',
    'M2 Réseau',
    'M1 Conception',
    'M2 Conception',
  ]

  // --- CHARGEMENT DYNAMIQUE DEPUIS L'API ---
  useEffect(() => {
    const fetchGalerie = async () => {
      try {
        setLoading(true)
        // Remplace par l'URL de ton serveur API Laravel (ex: http://127.0.0.1:8000/api/galerie-famille)
        const response = await fetch('http://127.0.0.1:8000/api/galerie-site')
        const json = await response.json()

        if (json.success) {
          setAlbums(json.data)
        } else {
          setError('Erreur lors de la récupération des données')
        }
      } catch (err) {
        console.error(err)
        setError('Impossible de se connecter au serveur.')
      } finally {
        setLoading(false)
      }
    }

    fetchGalerie()
  }, [])

  const filteredData =
    filter === 'Tous'
      ? albums
      : albums.filter(item => item.promotion === filter)

  // --- SUITE DE TA LOGIQUE (Téléchargement, Modals, etc.) ---
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const autoDownloadUrl = queryParams.get('downloadUrl')

    if (isLoggedIn && autoDownloadUrl) {
      triggerDownload(autoDownloadUrl)
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [isLoggedIn])

  const openModal = (album: Galerie) => {
    setSelectedAlbum(album)
    setCurrentImgIndex(0)
  }

  const closeModal = () => setSelectedAlbum(null)

  const nextImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (selectedAlbum) {
      setCurrentImgIndex(prev => (prev + 1) % selectedAlbum.images.length)
    }
  }

  const prevImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (selectedAlbum) {
      setCurrentImgIndex(
        prev => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length
      )
    }
  }

  const triggerDownload = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `FSI-UCC-Famille.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      window.open(imageUrl, '_blank')
    }
  }

  const handleDownloadClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    e.preventDefault()
    if (isLoggedIn) {
      triggerDownload(imageUrl)
    } else {
      const currentPath = window.location.pathname
      const redirectUrl = `/login?redirect=${encodeURIComponent(currentPath)}&downloadUrl=${encodeURIComponent(imageUrl)}`
      window.location.href = redirectUrl
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 flex flex-col justify-center">
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
            Galerie photo
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Les visages de la <span className="text-blue-600">FSI</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Immortalisons ensemble les moments forts de notre faculté.
            Connectez-vous pour pouvoir télécharger les souvenirs de famille.
          </p>
          <div className="flex gap-4">
            <a
              href="#albums"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg flex items-center gap-2 w-fit"
            >
              <span>Voir les albums de famille</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Image du Hero protégée contre le clic droit et l'appui long */}
        <div className="md:col-span-7 relative h-87.5 md:h-125">
          <div className="absolute inset-0 bg-[#0D3B66]/10 rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] transform translate-x-4 translate-y-4 -z-10"></div>
          <div className="w-full h-full overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] border-4 border-white shadow-2xl shadow-blue-600/20">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Promotion FSI UCC"
              onContextMenu={e => e.preventDefault()}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700 select-none pointer-events-none"
              style={{ WebkitTouchCallout: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* BARRE DE FILTRAGE */}
      <section id="albums" className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Albums par Promotion</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {promotionsFilterList.map(promo => (
                <button
                  key={promo}
                  onClick={() => setFilter(promo)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    filter === promo
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {promo}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRILLE D'ALBUMS AVEC ÉTAT DE CHARGEMENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center text-gray-500 py-10">Aucun album trouvé pour cette catégorie.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map(album => (
              <div
                key={album.id}
                onClick={() => openModal(album)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer border border-gray-100 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={album.mainImage}
                    alt={album.displayName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 select-none"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-[#0D3B66] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase">
                    {album.images.length} photos
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-[#0D3B66] bg-blue-50 px-2.5 py-1 rounded">
                    {album.displayName}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">{album.evenement}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mt-1">{album.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-50 bg-black/50 text-white rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="md:col-span-7 relative bg-black flex items-center justify-center min-h-75">
              <img
                src={selectedAlbum.images[currentImgIndex]?.url}
                alt="Zoom Galerie"
                className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 bg-white/20 text-white p-3 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 bg-white/20 text-white p-3 rounded-full"
              >
                ›
              </button>
            </div>

            <div className="md:col-span-5 p-8 flex flex-col justify-between bg-white">
              <div>
                <span className="text-xs font-bold uppercase text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full">
                  {selectedAlbum.displayName}
                </span>

                <h2 className="text-xl font-bold text-gray-900 my-4">
                  {selectedAlbum.images[currentImgIndex]?.title}
                </h2>

                {/*<button
                  onClick={e =>
                    handleDownloadClick(e, selectedAlbum.images[currentImgIndex]?.url)
                  }
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm mb-6"
                >
                  {isLoggedIn ? 'Télécharger la photo' : 'Se connecter pour télécharger'}
                </button>*/}

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Contexte :</h4>
                  <p className="text-gray-600 text-sm">
                    {selectedAlbum.descriptions[currentImgIndex]?.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
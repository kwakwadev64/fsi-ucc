import React, { useState, useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { albumsFamille } from '@/data/galeries'
import { type Galerie } from '@/types/types'

// Structure de données optimisée pour des albums de famille

export default function GalerieFSI() {
  const [filter, setFilter] = useState('Tous')
  const [selectedAlbum, setSelectedAlbum] = useState<Galerie | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  // --- CONFIGURATION SIMPLIFIÉE DE L'AUTHENTIFICATION ---
  // Remplace ceci par ton vrai state global/context d'authentification (ex: const { user } = useAuth())
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

  const filteredData =
    filter === 'Tous'
      ? albumsFamille
      : albumsFamille.filter(item => item.promotion === filter)

  // Détection d'un téléchargement automatique post-connexion (optionnel mais ultra-pro)
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const autoDownloadUrl = queryParams.get('downloadUrl')

    if (isLoggedIn && autoDownloadUrl) {
      triggerDownload(autoDownloadUrl)
      // Nettoyer l'URL après téléchargement
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [isLoggedIn])

  const openModal = (album: Galerie) => {
    setSelectedAlbum(album)
    setCurrentImgIndex(0)
  }

  const closeModal = () => {
    setSelectedAlbum(null)
  }

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
        prev =>
          (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length
      )
    }
  }

  // --- LOGIQUE DE TÉLÉCHARGEMENT SÉCURISÉ ---
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
      console.error(
        'Échec de la récupération directe. Ouverture dans un nouvel onglet.',
        error
      )
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
      // Encode l'URL de l'image et l'URL de retour pour que la page login.tsx sache quoi faire après connexion
      const currentPath = window.location.pathname
      const redirectUrl = `/login?redirect=${encodeURIComponent(currentPath)}&downloadUrl=${encodeURIComponent(imageUrl)}`

      // Redirection vers login.tsx
      window.location.href = redirectUrl
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 flex flex-col justify-center">
          <span className="text-sm font-bold tracking-widest text-[#0D3B66] uppercase mb-4">
            Galerie photo
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Les visages de la <span className="text-[#0D3B66]">FSI</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Immortalisons ensemble les moments forts de notre faculté.
            Connectez-vous pour pouvoir télécharger les souvenirs de famille.
          </p>
          <div className="flex gap-4">
            <a
              href="#albums"
              className="bg-[#0D3B66] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg flex items-center gap-2 w-fit"
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
          <div className="w-full h-full overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] border-4 border-white shadow-2xl">
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

      {/* 2. BARRE DE FILTRAGE DES PROMOTIONS */}
      <section id="albums" className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Albums par Promotion
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Choisissez une promotion pour cibler ses clichés de famille
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {promotionsFilterList.map(promo => (
                <button
                  key={promo}
                  onClick={() => setFilter(promo)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    filter === promo
                      ? 'bg-[#0D3B66] text-white shadow-md'
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

      {/* 3. GRILLE D'ALBUMS DE FAMILLE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map(album => (
            <div
              key={album.id}
              onClick={() => openModal(album)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer border border-gray-100 transition-all duration-300"
            >
              {/* Conteneur Image avec Hover Overlay et Protection */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={album.mainImage}
                  alt={album.displayName}
                  onContextMenu={e => e.preventDefault()}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 select-none"
                  style={{ WebkitTouchCallout: 'none' }}
                />

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <span className="bg-white p-3 rounded-full text-[#0D3B66] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                  <span className="text-white text-sm font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    VOIR PLUS DE CLICHÉS
                  </span>
                </div>

                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0D3B66] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                  {album.images.length} photos
                </span>
              </div>

              {/* Infos Basiques */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#0D3B66] bg-blue-50 px-2.5 py-1 rounded">
                    {album.displayName}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0D3B66] transition mb-1">
                  {album.evenement}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2">
                  {album.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LE MODAL INTERACTIF (DIAPORAMA / CAROUSEL) */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Partie Gauche : Image zoomée sécurisée + commandes de navigation */}
            <div className="md:col-span-7 relative bg-black flex items-center justify-center min-h-75 md:h-full">
              <img
                src={selectedAlbum.images[currentImgIndex].url}
                alt="Zoom Galerie"
                onContextMenu={e => e.preventDefault()}
                className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain select-none pointer-events-none"
                style={{ WebkitTouchCallout: 'none' }}
              />

              {/* Navigation Flèches */}
              <button
                onClick={prevImage}
                className="absolute left-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                {currentImgIndex + 1} / {selectedAlbum.images.length}
              </div>
            </div>

            {/* Partie Droite : Légende, Promotion, Contexte, Téléchargement */}
            <div className="md:col-span-5 p-8 flex flex-col justify-between bg-white overflow-y-auto h-full">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full">
                    {selectedAlbum.displayName}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {selectedAlbum.images[currentImgIndex].legende}
                </h2>

                <p className="text-xs text-gray-400 mb-4 font-medium uppercase">
                  {selectedAlbum.evenement}
                </p>

                <hr className="border-gray-100 my-4" />

                {/* BOUTON TÉLÉCHARGER REDIRIGEANT VERS LOGIN */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold mb-3 text-gray-400 uppercase tracking-wide">
                    Téléchargement sécurisé :
                  </h4>
                  <button
                    onClick={e =>
                      handleDownloadClick(
                        e,
                        selectedAlbum.images[currentImgIndex].url
                      )
                    }
                    className="bg-[#0D3B66] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg flex items-center gap-2 w-fit text-sm"
                  >
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>
                      {isLoggedIn
                        ? 'Télécharger la photo'
                        : 'Se connecter pour télécharger'}
                    </span>
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Contexte de l'événement :
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedAlbum.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center text-xs text-gray-400 font-semibold">
                <span>Faculté de Science Informatique UCC</span>
                <span>© 2026</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

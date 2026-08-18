import { useState } from 'react'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import { useGalerieAlbums } from './hooks/useGalerieAlbums'
import { useAlbumModal } from './hooks/useAlbumModal'
import { useAutoDownload } from './hooks/useAutoDownload'
import GalerieHero from './components/GalerieHero'
import PromotionFilterBar from './components/PromotionFilterBar'
import AlbumsGrid from './components/AlbumsGrid'
import AlbumModal from './components/AlbumModal'

export default function GaleriePage() {
  const [isLoggedIn] = useState(false)

  const { loading, error, filter, setFilter, filteredData } = useGalerieAlbums()
  const {
    selectedAlbum,
    currentImgIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage,
  } = useAlbumModal()

  // handleDownloadClick n'est plus utilisé tant que le bouton de téléchargement
  // reste commenté dans AlbumModal — conservé ici prêt à être rebranché.
  useAutoDownload(isLoggedIn)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <GalerieHero />

      <PromotionFilterBar filter={filter} onFilterChange={setFilter} />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <AlbumsGrid
          loading={loading}
          error={error}
          albums={filteredData}
          onAlbumClick={openModal}
        />
      </section>

      {selectedAlbum && (
        <AlbumModal
          album={selectedAlbum}
          currentImgIndex={currentImgIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      <Footer />
    </div>
  )
}

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import { useGalerieAlbums } from './hooks/useGalerieAlbums'
import { useAutoDownload } from './hooks/useAutoDownload'
import GalerieHero from './components/GalerieHero'
import PromotionFilterBar from './components/PromotionFilterBar'
import AlbumsGrid from './components/AlbumsGrid'
import AlbumPhotoGrid from './components/AlbumPhotoGrid'
import type { Galerie } from './types/types'

export default function GaleriePage() {
  const [isLoggedIn] = useState(false)
  const [openAlbum, setOpenAlbum] = useState<Galerie | null>(null)

  const { loading, error, filter, setFilter, filteredData } = useGalerieAlbums()

  useAutoDownload(isLoggedIn)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <GalerieHero albums={filteredData} />

      <PromotionFilterBar filter={filter} onFilterChange={setFilter} />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <AlbumsGrid
          loading={loading}
          error={error}
          albums={filteredData}
          onAlbumClick={setOpenAlbum}
        />
      </section>

      <AnimatePresence>
        {openAlbum && (
          <AlbumPhotoGrid
            album={openAlbum}
            onClose={() => setOpenAlbum(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

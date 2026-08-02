import { useState } from 'react'
import type { Galerie } from '@/types/types'

export function useAlbumModal() {
  const [selectedAlbum, setSelectedAlbum] = useState<Galerie | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

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
        prev =>
          (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length
      )
    }
  }

  return {
    selectedAlbum,
    currentImgIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage,
  }
}

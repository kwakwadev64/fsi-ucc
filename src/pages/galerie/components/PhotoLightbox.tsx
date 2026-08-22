// PhotoLightbox.tsx
import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react'
import type { ImageType } from '../types/types'

interface PhotoLightboxProps {
  images: ImageType[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
  title?: string
}

export default function PhotoLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
  title,
}: PhotoLightboxProps) {
  const isOpen = activeIndex !== null
  const activeImage = activeIndex !== null ? images[activeIndex] : null

  const goPrev = useCallback(() => {
    if (activeIndex === null) return
    onNavigate(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }, [activeIndex, images.length, onNavigate])

  const goNext = useCallback(() => {
    if (activeIndex === null) return
    onNavigate(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
  }, [activeIndex, images.length, onNavigate])

  // Navigation clavier — Échap, flèches gauche/droite
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, goPrev, goNext])

  // Empêche le scroll de la page derrière la lightbox
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!activeImage) return
    const link = document.createElement('a')
    link.href = activeImage.url
    link.download =
      activeImage.title || `${title ?? 'photo'}-${(activeIndex ?? 0) + 1}`
    link.target = '_blank'
    link.rel = 'noreferrer'
    link.click()
  }

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex flex-col"
        >
          {/* Barre du haut — titre, compteur, actions */}
          <div
            onClick={e => e.stopPropagation()}
            className="flex items-center justify-between px-4 sm:px-6 py-4 shrink-0"
          >
            <div className="text-white/70 text-sm font-medium">
              {title && (
                <span className="text-white font-bold mr-2">{title}</span>
              )}
              {activeIndex + 1} / {images.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownload}
                title="Télécharger"
                className="flex h-9 w-9 items-center justify-center rounded-full
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-white hover:bg-white/20 transition-colors"
              >
                <Download size={16} />
              </button>
              <button
                type="button"
                onClick={onClose}
                title="Fermer"
                className="flex h-9 w-9 items-center justify-center rounded-full
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Zone image principale */}
          <div
            onClick={e => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center px-2 sm:px-16 pb-2 min-h-0"
          >
            {/* Flèche précédente */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={goPrev}
                title="Précédent"
                className="absolute left-2 sm:left-4 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-white hover:bg-white/25 hover:scale-105 transition-all"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Image active — animée à chaque changement */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={activeImage.url}
                alt={activeImage.title || ''}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none"
              />
            </AnimatePresence>

            {/* Flèche suivante */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={goNext}
                title="Suivant"
                className="absolute right-2 sm:right-4 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-white hover:bg-white/25 hover:scale-105 transition-all"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Légende — sous l'image, si disponible */}
          {activeImage.legende && (
            <div
              onClick={e => e.stopPropagation()}
              className="shrink-0 text-center px-6 pb-3"
            >
              <p className="text-white/70 text-xs sm:text-sm italic">
                {activeImage.legende}
              </p>
            </div>
          )}

          {/* Filmstrip de vignettes en bas */}
          {images.length > 1 && (
            <div
              onClick={e => e.stopPropagation()}
              className="shrink-0 flex gap-2 px-4 sm:px-6 pb-4 overflow-x-auto"
            >
              {images.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => onNavigate(i)}
                  className={`relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-lg overflow-hidden
                              border-2 transition-all duration-200
                              ${
                                i === activeIndex
                                  ? 'border-white opacity-100 scale-100'
                                  : 'border-transparent opacity-50 hover:opacity-80'
                              }`}
                >
                  <img
                    src={img.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

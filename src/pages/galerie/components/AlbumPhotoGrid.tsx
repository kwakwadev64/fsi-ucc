// AlbumPhotoGrid.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/motionVariants'
import type { Galerie } from '../types/types'
import PhotoLightbox from './PhotoLightbox'

interface AlbumPhotoGridProps {
  album: Galerie
  onClose: () => void
}

export default function AlbumPhotoGrid({
  album,
  onClose,
}: AlbumPhotoGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
        className="relative bg-white w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[85vh]
                   rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* En-tête */}
        <div className="shrink-0 flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <span className="inline-block text-[11px] font-bold text-[#0D3B66] bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
              {album?.displayName}
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-2 leading-snug">
              {album?.evenement}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full
                       bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900
                       transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Grille de vignettes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 min-h-0 overflow-y-auto p-6
                     grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {album.images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              variants={itemVariants}
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100
               border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <img
                src={img.url}
                alt={img.title || ''}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors" />
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Visionneuse plein écran — s'ouvre par-dessus la grille */}
      <PhotoLightbox
        images={album.images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
        title={album.evenement}
      />
    </motion.div>
  )
}

// AlbumPhotoGrid.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { containerVariants, itemVariants } from '@/shared/lib/motionVariants'
import type { Galerie } from '@/entities/galerie/model'
import PhotoLightbox from '@/features/galerie-lightbox/components/PhotoLightbox'

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border border-slate-200 bg-white shadow-xl"
      >
        {/* En-tête */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <div>
            <span className="inline-block border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0D3B66]">
              {album?.displayName}
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-2 leading-snug">
              {album?.evenement}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-slate-300 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
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
          className="grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto p-4 sm:grid-cols-3 sm:p-5 md:grid-cols-4"
        >
          {album.images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              variants={itemVariants}
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-square overflow-hidden border border-slate-200 bg-slate-100 transition-colors hover:border-blue-300"
            >
              <img
                src={img.url}
                alt={img.title || ''}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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

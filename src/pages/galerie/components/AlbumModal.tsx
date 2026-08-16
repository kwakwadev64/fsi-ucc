import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Galerie } from '@/types/types'

interface AlbumModalProps {
  album: Galerie
  currentImgIndex: number
  onClose: () => void
  onNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onPrev: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function AlbumModal({
  album,
  currentImgIndex,
  onClose,
  onNext,
  onPrev,
}: AlbumModalProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-end sm:items-center justify-center sm:p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-white sm:rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[95vh] sm:max-h-[90vh] rounded-t-3xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="md:col-span-7 relative bg-black flex items-center justify-center h-[55vh] sm:h-[65vh] md:h-auto md:min-h-75">
          <img
            src={album.images[currentImgIndex]?.url}
            alt={album.images[currentImgIndex]?.title || 'Zoom Galerie'}
            className="max-w-full max-h-[55vh] sm:max-h-[65vh] md:max-h-[80vh] object-contain"
          />

          <button
            onClick={onPrev}
            aria-label="Photo précédente"
            className="absolute left-2 sm:left-4 bg-white/20 hover:bg-white/30 active:scale-95 text-white p-2.5 sm:p-3 rounded-full transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNext}
            aria-label="Photo suivante"
            className="absolute right-2 sm:right-4 bg-white/20 hover:bg-white/30 active:scale-95 text-white p-2.5 sm:p-3 rounded-full transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicateur de position, utile sur mobile où le compteur n'est pas ailleurs */}
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {currentImgIndex + 1} / {album.images.length}
          </span>
        </div>

        {/* Description : visible partout désormais, scrollable sur mobile */}
        <div className="md:col-span-5 flex flex-col justify-between bg-white p-5 sm:p-6 md:p-8 max-h-[40vh] sm:max-h-[25vh] md:max-h-none overflow-y-auto">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full tracking-wide">
              {album.displayName}
            </span>

            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-3 mb-3 sm:my-4 leading-snug">
              {album.images[currentImgIndex]?.title}
            </h2>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wide">
                Contexte :
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {album.descriptions[currentImgIndex]?.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

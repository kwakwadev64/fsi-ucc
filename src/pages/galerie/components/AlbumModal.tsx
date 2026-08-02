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
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-50 bg-black/50 text-white rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="md:col-span-7 relative bg-black flex items-center justify-center min-h-75">
          <img
            src={album.images[currentImgIndex]?.url}
            alt="Zoom Galerie"
            className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain"
          />

          <button
            onClick={onPrev}
            className="absolute left-4 bg-white/20 text-white p-3 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 bg-white/20 text-white p-3 rounded-full"
          >
            ›
          </button>
        </div>

        <div className="md:col-span-5 p-8 flex flex-col justify-between bg-white">
          <div>
            <span className="text-xs font-bold uppercase text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full">
              {album.displayName}
            </span>

            <h2 className="text-xl font-bold text-gray-900 my-4">
              {album.images[currentImgIndex]?.title}
            </h2>

            {/* Bouton téléchargement désactivé — décommenter avec handleDownloadClick si réactivé
            <button
              onClick={e => handleDownloadClick(e, album.images[currentImgIndex]?.url)}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm mb-6"
            >
              {isLoggedIn ? 'Télécharger la photo' : 'Se connecter pour télécharger'}
            </button>
            */}

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">
                Contexte :
              </h4>
              <p className="text-gray-600 text-sm">
                {album.descriptions[currentImgIndex]?.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

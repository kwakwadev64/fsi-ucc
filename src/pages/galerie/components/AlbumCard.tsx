import type { Galerie } from '@/types/types'

interface AlbumCardProps {
  album: Galerie
  onClick: () => void
}

export default function AlbumCard({ album, onClick }: AlbumCardProps) {
  return (
    <div
      onClick={onClick}
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
        <h3 className="text-lg font-bold text-gray-900 mt-2">
          {album.evenement}
        </h3>
      </div>
    </div>
  )
}

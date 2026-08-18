import { Images } from 'lucide-react'
import type { Galerie } from '../types/types'

interface AlbumCardProps {
  album: Galerie
  onClick: () => void
}

export default function AlbumCard({ album, onClick }: AlbumCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={album.mainImage}
          alt={album.displayName}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 select-none"
        />
        {/* Dégradé pour la lisibilité et l'ambiance */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#0D3B66] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          <Images size={13} />
          {album.images.length} photos
        </span>
      </div>

      <div className="p-6">
        <span className="inline-block text-[11px] font-bold text-[#0D3B66] bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
          {album.displayName}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mt-3 leading-snug group-hover:text-[#0D3B66] transition-colors duration-300">
          {album.evenement}
        </h3>
      </div>
    </div>
  )
}

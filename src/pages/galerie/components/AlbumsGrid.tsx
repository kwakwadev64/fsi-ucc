import type { Galerie } from '@/entities/galerie/model'
import AlbumCard from './AlbumCard'

interface AlbumsGridProps {
  loading: boolean
  error: string | null
  albums: Galerie[]
  onAlbumClick: (album: Galerie) => void
}

export default function AlbumsGrid({
  loading,
  error,
  albums,
  onAlbumClick,
}: AlbumsGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20" aria-label="Chargement des albums">
        <div className="h-10 w-10 animate-spin border-2 border-slate-200 border-t-blue-700"></div>
      </div>
    )
  }

  if (error) {
    return <div className="border-y border-slate-200 bg-white py-10 text-center text-sm text-red-600">{error}</div>
  }

  if (albums.length === 0) {
    return (
      <div className="border-y border-slate-200 bg-white py-10 text-center text-sm text-slate-600">
        Aucun album trouvé pour cette catégorie.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {albums.map(album => (
        <AlbumCard
          key={album.id}
          album={album}
          onClick={() => onAlbumClick(album)}
        />
      ))}
    </div>
  )
}

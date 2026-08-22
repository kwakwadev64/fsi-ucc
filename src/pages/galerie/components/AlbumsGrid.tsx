import type { Galerie } from '../types/types'
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
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>
  }

  if (albums.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Aucun album trouvé pour cette catégorie.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

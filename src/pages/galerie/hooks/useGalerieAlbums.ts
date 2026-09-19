import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getGaleries } from '@/entities/galerie/api'

export function useGalerieAlbums() {
  const [filter, setFilter] = useState('Tous')
  const { data: albums = [], isLoading: loading, isError } = useQuery({
    queryKey: ['galeries'],
    queryFn: getGaleries,
    staleTime: 5 * 60 * 1000,
  })

  const filteredData = useMemo(
    () => filter === 'Tous' ? albums : albums.filter(album => album.promotion === filter),
    [albums, filter]
  )

  return {
    loading,
    error: isError ? 'Impossible de se connecter au serveur.' : null,
    filter,
    setFilter,
    filteredData,
  }
}

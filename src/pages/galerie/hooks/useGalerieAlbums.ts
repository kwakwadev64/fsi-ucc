import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Galerie } from '../types/types'
import { env } from '@/config/env'

type GalerieResponse = {
  success: boolean
  data: Galerie[]
}

async function fetchGalerie(): Promise<Galerie[]> {
  const { data } = await axios.get<GalerieResponse>(
    `${env.VITE_API_URL}/galerie-site`
  )

  if (!data.success) {
    throw new Error('Erreur lors de la récupération des données')
  }

  return data.data
}

export function useGalerieAlbums() {
  const [filter, setFilter] = useState('Tous')

  const {
    data: albums = [],
    isLoading: loading,
    isError,
  } = useQuery({
    queryKey: ['galerie-site'],
    queryFn: fetchGalerie,
    staleTime: 5 * 60 * 1000,
  })

  const error = isError ? 'Impossible de se connecter au serveur.' : null

  const filteredData = useMemo(
    () =>
      filter === 'Tous'
        ? albums
        : albums.filter(item => item.promotion === filter),
    [albums, filter]
  )

  return { loading, error, filter, setFilter, filteredData }
}

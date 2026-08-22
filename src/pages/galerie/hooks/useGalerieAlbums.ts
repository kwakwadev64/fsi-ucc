import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Galerie } from '../types/types'
import { env } from '@/config/env'

// Formes brutes telles que renvoyées par l'API — distinctes du type Galerie
// utilisé côté front, qui attend `legende` fusionnée dans chaque image.
interface RawImage {
  id: number
  url: string
  title: string
}

interface RawDescription {
  desc: string
}

interface RawGalerie {
  id: string
  promotion: string
  displayName: string
  mainImage: string
  evenement: string
  desc: string
  images: RawImage[]
  descriptions: RawDescription[]
}

type GalerieResponse = {
  success: boolean
  data: RawGalerie[]
}

// Fusionne images[] et descriptions[] (tableaux parallèles côté API)
// en un seul tableau ImageType[] avec `legende` intégrée.
function normalizeAlbum(raw: RawGalerie): Galerie {
  return {
    id: raw.id,
    promotion: raw.promotion,
    displayName: raw.displayName,
    mainImage: raw.mainImage,
    evenement: raw.evenement,
    desc: raw.desc,
    images: raw.images.map((img, i) => ({
      id: img.id,
      url: img.url,
      title: img.title,
      legende: raw.descriptions?.[i]?.desc ?? '',
    })),
  }
}

async function fetchGalerie(): Promise<Galerie[]> {
  const { data } = await axios.get<GalerieResponse>(
    `${env.VITE_API_URL}/galerie-site`
  )

  if (!data.success) {
    throw new Error('Erreur lors de la récupération des données')
  }

  return data.data.map(normalizeAlbum)
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

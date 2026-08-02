import { useState, useEffect, useMemo } from 'react'
import type { Galerie } from '@/types/types'

export function useGalerieAlbums() {
  const [albums, setAlbums] = useState<Galerie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('Tous')

  useEffect(() => {
    const fetchGalerie = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://frnagrmi.fsiucc.com/api/galerie-site'
        )
        const json = await response.json()

        if (json.success) {
          setAlbums(json.data)
        } else {
          setError('Erreur lors de la récupération des données')
        }
      } catch (err) {
        console.error(err)
        setError('Impossible de se connecter au serveur.')
      } finally {
        setLoading(false)
      }
    }

    fetchGalerie()
  }, [])

  const filteredData = useMemo(
    () =>
      filter === 'Tous'
        ? albums
        : albums.filter(item => item.promotion === filter),
    [albums, filter]
  )

  return { loading, error, filter, setFilter, filteredData }
}

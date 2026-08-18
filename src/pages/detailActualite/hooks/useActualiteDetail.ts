import { useEffect, useState } from 'react'
import axios from 'axios'
import type { ActualiteDetail } from '../types/types'
import { ACTUALITES_API_URL } from '../constants/constant'

interface UseActualiteDetailResult {
  actualite: ActualiteDetail | null
  loading: boolean
  error: string | null
}

function getErrorMessage(status?: number): string {
  if (status === 401) {
    return 'Vous devez être connecté pour consulter cette actualité.'
  }
  if (status === 404) {
    return 'Cette actualité n\u2019existe pas ou a été retirée.'
  }
  return 'Impossible de charger l\u2019actualité.'
}

export function useActualiteDetail(id?: string): UseActualiteDetailResult {
  const [actualite, setActualite] = useState<ActualiteDetail | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const controller = new AbortController()

    async function fetchActualite() {
      setLoading(true)
      setError(null)

      try {
        const token = localStorage.getItem('auth_token')
        const response = await axios.get(`${ACTUALITES_API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
          signal: controller.signal,
        })
        setActualite(response.data.data)
      } catch (err) {
        if (axios.isCancel(err)) return
        console.error('Erreur lors du chargement :', err)
        const status = axios.isAxiosError(err)
          ? err.response?.status
          : undefined
        setError(getErrorMessage(status))
      } finally {
        setLoading(false)
      }
    }

    fetchActualite()
    return () => controller.abort()
  }, [id])

  return { actualite, loading, error }
}

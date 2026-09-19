import { useEffect, useState } from 'react'
import axios from 'axios'
import type { ActualiteDetail } from '@/entities/actualite/model'
import { getActualite } from '@/entities/actualite/api'

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
    const actualiteId = id

    const controller = new AbortController()

    async function fetchActualite() {
      setLoading(true)
      setError(null)

      try {
        const token = localStorage.getItem('auth_token')
        const actualiteData = await getActualite(actualiteId, token ?? undefined)
        if (!controller.signal.aborted) setActualite(actualiteData)
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

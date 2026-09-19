import { apiClient } from '@/shared/api/client'
import type { ActualiteDetail, HomeData } from './model'

export async function getHomeData(): Promise<HomeData> {
  const { data } = await apiClient.get<HomeData>('/accueil-site')
  if (!data) throw new Error("Impossible de charger les données d'accueil.")
  return data
}

export async function getActualite(id: string, token?: string): Promise<ActualiteDetail> {
  const { data } = await apiClient.get<{ data: ActualiteDetail }>(`/actualites/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  })
  return data.data
}

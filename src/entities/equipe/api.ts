import type { SectionEquipe } from './model'
import { apiClient } from '@/shared/api/client'

export type TeamsResponse = {
  success: boolean
  annees: string[]
  donnees: Record<string, SectionEquipe[]>
}

export async function getTeams(): Promise<TeamsResponse> {
  const { data } = await apiClient.get<TeamsResponse>('/equipes-site')
  return data
}

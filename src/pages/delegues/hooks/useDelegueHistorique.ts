import { historiqueDelegueData } from '@/pages/delegues/data/equipeDate'

export function useDelegueHistorique() {
  const delegues = [...historiqueDelegueData].sort((a, b) =>
    b.annee.localeCompare(a.annee)
  )

  return {
    delegues,
    loading: false,
    aucuneDonnee: delegues.length === 0,
  }
}

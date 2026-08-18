import { historiqueDelegueData } from '@/pages/delegue/data/equipeDate'

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

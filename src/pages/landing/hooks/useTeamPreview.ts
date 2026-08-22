import axios from 'axios'
import { env } from '@/config/env'
import { useFetchData } from '@/hooks/useQuery'
// ⚠️ Ajuste ce chemin selon l'emplacement réel du type SectionEquipe dans ton projet
import type { SectionEquipe } from '@/pages/equipe/types/types'

type MembreEquipe = SectionEquipe['membres'][number]

type EquipesResponse = {
  success: boolean
  annees: string[]
  donnees: Record<string, SectionEquipe[]>
}

async function fetchEquipesData(): Promise<EquipesResponse> {
  const { data } = await axios.get<EquipesResponse>(
    `${env.VITE_API_URL}/equipes-site`
  )
  return data
}

// Même logique de déduplication que useEquipeSelection : un membre peut
// apparaître dans plusieurs sections (CP, délégué...) mais ne doit être
// affiché qu'une seule fois dans l'aperçu.
function cleUniqueMembre(membre: MembreEquipe): string {
  const nomComplet = (membre as { nom?: string }).nom ?? ''
  return nomComplet.trim().toLowerCase().replace(/\s+/g, ' ')
}

function dedupliquerMembres(membres: MembreEquipe[]): MembreEquipe[] {
  const vus = new Set<string>()
  const resultat: MembreEquipe[] = []
  for (const membre of membres) {
    const cle = cleUniqueMembre(membre)
    if (!vus.has(cle)) {
      vus.add(cle)
      resultat.push(membre)
    }
  }
  return resultat
}

/**
 * Aperçu léger de l'équipe pour la page d'accueil : réutilise le même
 * endpoint /equipes-site et la même queryKey (['equipes-site']) que la
 * page Équipe complète, pour profiter du cache React Query si l'utilisateur
 * navigue ensuite vers /equipe.
 */
export function useTeamPreview(limit = 8) {
  const { data, isLoading, isError, error } = useFetchData(
    ['equipes-site'],
    fetchEquipesData,
    { staleTime: 5 * 60 * 1000 }
  )

  const annees = data?.annees ?? []
  const derniereAnnee = annees[0]
  const sections = derniereAnnee ? (data?.donnees[derniereAnnee] ?? []) : []

  const membresBruts = sections.flatMap(section => section.membres ?? [])
  const membres = dedupliquerMembres(membresBruts).slice(0, limit)

  // 🔎 Debug temporaire — retire ce bloc une fois le problème identifié.
  if (import.meta.env.DEV) {
    console.debug('[useTeamPreview]', {
      isLoading,
      isError,
      error,
      annees,
      derniereAnnee,
      cleDonneesDisponibles: data ? Object.keys(data.donnees) : [],
      nbSections: sections.length,
      nbMembresBruts: membresBruts.length,
      nbMembresApresDedup: membres.length,
      premierMembreBrut: membresBruts[0],
    })
  }

  return { membres, isLoading, isError }
}

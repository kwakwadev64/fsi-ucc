import { useState, useEffect } from 'react'
import type { SectionEquipe } from '@/types/types'
import { env } from '@/config/env'

// Ordre de priorité des niveaux
const ORDRE_NIVEAU = ['L1', 'L2', 'L3', 'M1', 'M2']
// Pour les niveaux Master, ordre des filières (CSI avant RX)
const ORDRE_FILIERE = ['CSI', 'RX']
// CP avant CPA
const ORDRE_TYPE = ['CP', 'CPA']

function parserRole(role: string) {
  // Exemple de role : "CP - L1 FSI" ou "CPA - M2 RX"
  const match = role.match(/^(CP|CPA)\s*-\s*(L\d|M\d)\s*(CSI|RX)?/i)

  if (!match) {
    return { type: '', niveau: '', filiere: '' }
  }

  const [, type, niveau, filiere] = match
  return {
    type: type.toUpperCase(),
    niveau: niveau.toUpperCase(),
    filiere: filiere ? filiere.toUpperCase() : '',
  }
}

function comparerMembresCpCpa(
  a: { role: string },
  b: { role: string }
): number {
  const roleA = parserRole(a.role)
  const roleB = parserRole(b.role)

  // 1. Comparer par niveau (L1 < L2 < L3 < M1 < M2)
  const indexNiveauA = ORDRE_NIVEAU.indexOf(roleA.niveau)
  const indexNiveauB = ORDRE_NIVEAU.indexOf(roleB.niveau)
  if (indexNiveauA !== indexNiveauB) {
    return indexNiveauA - indexNiveauB
  }

  // 2. Si même niveau (M1 ou M2), comparer par filière (CSI < RX)
  const indexFiliereA = ORDRE_FILIERE.indexOf(roleA.filiere)
  const indexFiliereB = ORDRE_FILIERE.indexOf(roleB.filiere)
  if (indexFiliereA !== indexFiliereB) {
    return indexFiliereA - indexFiliereB
  }

  // 3. Enfin, CP avant CPA
  const indexTypeA = ORDRE_TYPE.indexOf(roleA.type)
  const indexTypeB = ORDRE_TYPE.indexOf(roleB.type)
  return indexTypeA - indexTypeB
}

export function useEquipeSelection() {
  const [anneesDisponibles, setAnneesDisponibles] = useState<string[]>([])
  const [equipesData, setEquipesData] = useState<
    Record<string, SectionEquipe[]>
  >({})
  const [selectedAnnee, setSelectedAnnee] = useState<string>('')
  const [selectedSectionId, setSelectedSectionId] =
    useState<string>('developpeurs')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(`${env.VITE_API_URL}/equipes-site`)
      .then(res => res.json())
      .then(data => {
        setAnneesDisponibles(data.annees)
        setEquipesData(data.donnees)
        if (data.annees.length > 0) {
          setSelectedAnnee(data.annees[0])
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Erreur chargement équipe:', err)
        setLoading(false)
      })
  }, [])

  const sectionsCombinees = selectedAnnee
    ? equipesData[selectedAnnee] || []
    : []
  const currentSectionBrute = sectionsCombinees.find(
    s => s.id === selectedSectionId
  )

  // Pour la section CP/CPA, on trie les membres par niveau (L1 -> L2 -> L3 -> M1 -> M2)
  // Pour les autres sections, on garde l'ordre tel quel
  const currentSection =
    currentSectionBrute && currentSectionBrute.id === 'cp_cpa'
      ? {
          ...currentSectionBrute,
          membres: [...currentSectionBrute.membres].sort(comparerMembresCpCpa),
        }
      : currentSectionBrute

  const aucuneDonneeAnnee = sectionsCombinees.length === 0

  return {
    loading,
    anneesDisponibles,
    selectedAnnee,
    setSelectedAnnee,
    selectedSectionId,
    setSelectedSectionId,
    sectionsCombinees,
    currentSection,
    aucuneDonneeAnnee,
  }
}

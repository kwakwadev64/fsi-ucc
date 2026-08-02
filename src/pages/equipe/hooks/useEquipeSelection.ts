import { useState, useMemo, useEffect } from 'react'
import { equipeData } from '@/data/equipeDate'

const ANNEES_ACADEMIQUES = ['2026-2027', '2025-2026']

export function useEquipeSelection() {
  // Liste des années académiques disponibles (config + données)
  const anneesDisponibles = useMemo(() => {
    const anneesData = equipeData.sections.map(s => s.annee)
    const toutesAnnees = new Set([...ANNEES_ACADEMIQUES, ...anneesData])
    return Array.from(toutesAnnees).sort().reverse() // plus récent en premier
  }, [])

  const [selectedAnnee, setSelectedAnnee] = useState<string>(
    anneesDisponibles[0]
  )
  const [selectedSectionId, setSelectedSectionId] = useState<string>('equipe')

  // Sections correspondant à l'année sélectionnée
  const sectionsAnnee = useMemo(
    () => equipeData.sections.filter(s => s.annee === selectedAnnee),
    [selectedAnnee]
  )

  // Génération dynamique de l'Équipe Facultaire (regroupement sans doublons)
  // Cas gérés : aucune autre section pour l'année -> "faculte" reste vide ;
  // section "faculte" absente dans les données -> on la construit nous-mêmes
  // pour qu'elle soit toujours disponible en premier onglet.
  const sectionsCombinees = useMemo(() => {
    const autresSections = sectionsAnnee.filter(s => s.id !== 'equipe')
    const tousLesMembres = autresSections.flatMap(s => s.membres)
    const membresUniques = tousLesMembres.filter(
      (membre, idx, self) => self.findIndex(m => m.nom === membre.nom) === idx
    )

    const sectionFaculteExistante = sectionsAnnee.find(s => s.id === 'equipe')
    const sectionFaculte = {
      ...(sectionFaculteExistante ?? {
        id: 'equipe',
        titre: 'faculté',
        annee: selectedAnnee,
        description:
          "L'ensemble des forces vives de notre faculté : membres du gouvernement étudiant, chefs de promotion et équipe de développement.",
      }),
      membres: membresUniques,
    }

    // "faculte" toujours en tête, suivie des autres sections dans leur ordre
    return [sectionFaculte, ...autresSections]
  }, [sectionsAnnee])

  // Si l'onglet sélectionné n'existe plus pour l'année choisie (ex: une
  // catégorie n'a pas de données cette année-là), on retombe proprement
  // sur "faculte" plutôt que de laisser l'UI sans onglet actif.
  useEffect(() => {
    const existeEncore = sectionsCombinees.some(s => s.id === selectedSectionId)
    if (!existeEncore) {
      setSelectedSectionId('faculte')
    }
  }, [sectionsCombinees, selectedSectionId])

  const currentSection =
    sectionsCombinees.find(s => s.id === selectedSectionId) ??
    sectionsCombinees[0]

  const aucuneDonneeAnnee = sectionsCombinees.every(s => s.membres.length === 0)

  return {
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

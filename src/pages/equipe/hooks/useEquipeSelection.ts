import { useState, useMemo, useEffect } from 'react'
import { equipeData } from '@/data/equipeDate'

function getAnneeAcademiqueActuelle(): string {
  const maintenant = new Date()
  const moisActuel = maintenant.getMonth() + 1
  const anneeActuelle = maintenant.getFullYear()
  const anneeDebut = moisActuel >= 9 ? anneeActuelle : anneeActuelle - 1
  return `${anneeDebut}-${anneeDebut + 1}`
}
// Sections toujours visibles comme onglets à part, indépendamment de l'année
const SECTIONS_PERSISTANTES = ['faculte', 'developpeurs']

export function useEquipeSelection() {
  const anneesDisponibles = useMemo(() => {
    const anneeActuelle = getAnneeAcademiqueActuelle()
    const anneesData = equipeData.sections.map(s => s.annee)
    // On combine : année en cours (calculée) + toutes les années présentes
    // dans les données, même anciennes -> plus jamais besoin d'y toucher
    const toutesAnnees = new Set([anneeActuelle, ...anneesData])
    return Array.from(toutesAnnees).sort().reverse()
  }, [])

  const [selectedAnnee, setSelectedAnnee] = useState<string>(
    anneesDisponibles[0]
  )
  const [selectedSectionId, setSelectedSectionId] = useState<string>('equipe')

  // Sections qui dépendent strictement de l'année (gouvernement, cp_cpa...)
  const sectionsAnnee = useMemo(
    () =>
      equipeData.sections.filter(
        s => s.annee === selectedAnnee && !SECTIONS_PERSISTANTES.includes(s.id)
      ),
    [selectedAnnee]
  )

  // Sections persistantes : version de l'année en cours si elle existe,
  // sinon la plus récente disponible pour cet id — garde faculte/developpeurs
  // toujours visibles, même sans donnée pour l'année sélectionnée.
  const sectionsFixes = useMemo(() => {
    return SECTIONS_PERSISTANTES.map(id => {
      const versions = equipeData.sections
        .filter(s => s.id === id)
        .sort((a, b) => b.annee.localeCompare(a.annee))

      return (
        versions.find(s => s.annee === selectedAnnee) ?? versions[0] ?? null
      )
    }).filter((s): s is NonNullable<typeof s> => s !== null)
  }, [selectedAnnee])

  // Onglet "equipe" = fusion dynamique de TOUTES les sections actuellement
  // affichées (année + persistantes), sans distinction — c'est l'onglet
  // par défaut à l'arrivée sur le site.
  const sectionsCombinees = useMemo(() => {
    const toutesLesSections = [...sectionsFixes, ...sectionsAnnee]
    const tousLesMembres = toutesLesSections.flatMap(s => s.membres)
    const membresUniques = tousLesMembres.filter(
      (membre, idx, self) => self.findIndex(m => m.nom === membre.nom) === idx
    )

    const sectionEquipe = {
      id: 'equipe',
      titre: 'Équipe',
      annee: selectedAnnee,
      description:
        "L'ensemble des forces vives de notre faculté : autorités facultaires, gouvernement étudiant, chefs de promotion et équipe de développement.",
      membres: membresUniques,
    }

    return [sectionEquipe, ...sectionsFixes, ...sectionsAnnee]
  }, [sectionsAnnee, sectionsFixes, selectedAnnee])

  useEffect(() => {
    const existeEncore = sectionsCombinees.some(s => s.id === selectedSectionId)
    if (!existeEncore) {
      setSelectedSectionId('equipe')
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

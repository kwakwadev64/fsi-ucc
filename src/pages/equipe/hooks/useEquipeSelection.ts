import { useState, useEffect } from 'react'
import type { SectionEquipe } from '@/types/types'
import { env } from '@/config/env'

export function useEquipeSelection() {
  const [anneesDisponibles, setAnneesDisponibles] = useState<string[]>([])
  const [equipesData, setEquipesData] = useState<Record<string, SectionEquipe[]>>({})
  const [selectedAnnee, setSelectedAnnee] = useState<string>('')
  const [selectedSectionId, setSelectedSectionId] = useState<string>('developpeurs')
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

  const sectionsCombinees = selectedAnnee ? equipesData[selectedAnnee] || [] : []
  const currentSection = sectionsCombinees.find(s => s.id === selectedSectionId)
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
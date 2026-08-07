import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { SectionEquipe } from '@/types/types'
import { env } from '@/config/env'

// Ordre de priorité des niveaux
const ORDRE_NIVEAU = ['L1', 'L2', 'L3', 'M1', 'M2']
// Pour les niveaux Master, ordre des filières (CSI avant RX)
const ORDRE_FILIERE = ['CSI', 'RX']
// CP avant CPA
const ORDRE_TYPE = ['CP', 'CPA']

// Id + libellé de la section virtuelle qui regroupe tout le monde
const ID_TOUTES_EQUIPES = 'toutes'
const TITRE_TOUTES_EQUIPES = 'Toutes les équipes'

type EquipesResponse = {
  annees: string[]
  donnees: Record<string, SectionEquipe[]>
}

function parserRole(role: string) {
  // Exemple de role : "CP - L1 FSI", "CPA - M2 RX",
  // ou un role combiné comme "Ministre de l'Économie & Finances et CP - M2 CSI"
  // → on cherche le motif n'importe où dans la chaîne (pas seulement au début),
  //   et "CPA" est testé avant "CP" pour éviter de matcher "CP" à l'intérieur de "CPA"
  const match = role.match(/(CPA|CP)\s*-\s*(L\d|M\d)\s*(CSI|RX)?/i)

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

  const indexNiveauA = ORDRE_NIVEAU.indexOf(roleA.niveau)
  const indexNiveauB = ORDRE_NIVEAU.indexOf(roleB.niveau)
  if (indexNiveauA !== indexNiveauB) {
    return indexNiveauA - indexNiveauB
  }

  const indexFiliereA = ORDRE_FILIERE.indexOf(roleA.filiere)
  const indexFiliereB = ORDRE_FILIERE.indexOf(roleB.filiere)
  if (indexFiliereA !== indexFiliereB) {
    return indexFiliereA - indexFiliereB
  }

  const indexTypeA = ORDRE_TYPE.indexOf(roleA.type)
  const indexTypeB = ORDRE_TYPE.indexOf(roleB.type)
  return indexTypeA - indexTypeB
}

async function fetchEquipesData(): Promise<EquipesResponse> {
  const { data } = await axios.get<EquipesResponse>(
    `${env.VITE_API_URL}/equipes-site`
  )
  return data
}

export function useEquipeSelection() {
  const [selectedAnnee, setSelectedAnnee] = useState<string>('')
  const [selectedSectionId, setSelectedSectionId] =
    useState<string>('developpeurs')

  const {
    data,
    isLoading: loading,
    isError,
    error,
  } = useQuery({
    queryKey: ['equipes-site'],
    queryFn: fetchEquipesData,
    staleTime: 5 * 60 * 1000,
    select: result => {
      if (!selectedAnnee && result.annees.length > 0) {
        setSelectedAnnee(result.annees[0])
      }
      return result
    },
  })

  const anneesDisponibles = data?.annees ?? []
  const equipesData = data?.donnees ?? {}

  const sectionsBrutes = selectedAnnee ? equipesData[selectedAnnee] || [] : []

  // Section virtuelle qui regroupe tous les membres de toutes les sections de l'année,
  // triés (CP/CPA en premier via comparerMembresCpCpa si le role matche, sinon ordre d'origine)
  const sectionToutesEquipes: SectionEquipe | null =
    sectionsBrutes.length > 0
      ? {
          id: ID_TOUTES_EQUIPES,
          annee: selectedAnnee,
          titre: TITRE_TOUTES_EQUIPES,
          description:
            'Vue d’ensemble de tous les membres, toutes sections confondues, pour l’année sélectionnée.',
          membres: sectionsBrutes.flatMap(section => section.membres),
        }
      : null

  // On ajoute la section "Toutes les équipes" en tête de la liste des onglets
  const sectionsCombinees = sectionToutesEquipes
    ? [sectionToutesEquipes, ...sectionsBrutes]
    : sectionsBrutes

  const currentSectionBrute = sectionsCombinees.find(
    s => s.id === selectedSectionId
  )

  // Pour la section CP/CPA (et pour "Toutes les équipes", qui peut contenir des CP/CPA
  // mélangés à d'autres rôles), on trie les membres reconnus comme CP/CPA par niveau ;
  // les autres membres gardent leur position relative d'origine
  const currentSection =
    currentSectionBrute &&
    (currentSectionBrute.id === 'cp_cpa' ||
      currentSectionBrute.id === ID_TOUTES_EQUIPES)
      ? {
          ...currentSectionBrute,
          membres: [...currentSectionBrute.membres].sort(comparerMembresCpCpa),
        }
      : currentSectionBrute

  const aucuneDonneeAnnee = sectionsBrutes.length === 0

  return {
    loading,
    isError,
    error,
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

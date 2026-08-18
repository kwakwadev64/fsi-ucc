import { useState } from 'react'
import axios from 'axios'
import type { SectionEquipe } from '../types/types'
import { env } from '@/config/env'
import { useFetchData } from '@/hooks/useQuery'

type MembreEquipe = SectionEquipe['membres'][number]

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
  success: boolean
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

/**
 * Clé unique d'un membre.
 *
 *  On dédupliquait avant par `id`, mais un même membre peut correspondre
 * à plusieurs lignes en base (une par section : CP, délégué, etc.), donc
 * avec des id différents pour la même personne. On se base donc sur le nom
 * complet (champ `nom`), normalisé (minuscule + espaces superflus retirés),
 * qui identifie la vraie personne.
 *
 *  Adapte le nom du champ ci-dessous si ce n'est pas `nom` dans
 * SectionEquipe['membres'][number] (ex: nomComplet, fullName...).
 */
function cleUniqueMembre(membre: MembreEquipe): string {
  const nomComplet = (membre as { nom?: string }).nom ?? ''
  return nomComplet.trim().toLowerCase().replace(/\s+/g, ' ')
}

/**
 * Supprime les doublons d'une liste de membres en gardant la première
 * occurrence rencontrée (donc l'ordre d'origine renvoyé par le back/DB
 * est préservé).
 */
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

async function fetchEquipesData(): Promise<EquipesResponse> {
  const { data } = await axios.get<EquipesResponse>(
    `${env.VITE_API_URL}/equipes-site`
  )
  if (!data.success) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return data || []
}

export function useEquipeSelection() {
  const [selectedAnnee, setSelectedAnnee] = useState<string>('')
  const [selectedSectionId, setSelectedSectionId] =
    useState<string>(ID_TOUTES_EQUIPES)

  const {
    data,
    isLoading: loading,
    isError,
    error,
  } = useFetchData(['equipes-site'], fetchEquipesData, {
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

  const sectionsBrutesInitiales = selectedAnnee
    ? equipesData[selectedAnnee] || []
    : []

  // Chaque section garde son propre ordre (donc le classement tel qu'envoyé
  // par le back), mais on retire les doublons internes à la section :
  // un même membre présent deux fois dans la même section ne s'affichera
  // qu'une seule fois dans cette section.
  const sectionsBrutes: SectionEquipe[] = sectionsBrutesInitiales.map(
    section => ({
      ...section,
      membres: dedupliquerMembres(section.membres),
    })
  )

  // Section virtuelle qui regroupe tous les membres de toutes les sections
  // de l'année. Un membre présent dans plusieurs sections (ex: CP ET délégué)
  // n'apparaît ici qu'une seule fois, en gardant l'ordre des sections (donc
  // l'ordre de la DB) pour déterminer quelle occurrence est conservée.
  const sectionToutesEquipes: SectionEquipe | null =
    sectionsBrutes.length > 0
      ? {
          id: ID_TOUTES_EQUIPES,
          annee: selectedAnnee,
          titre: TITRE_TOUTES_EQUIPES,
          description:
            'Vue d’ensemble de tous les membres, toutes sections confondues, pour l’année sélectionnée.',
          membres: dedupliquerMembres(
            sectionsBrutes.flatMap(section => section.membres)
          ),
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

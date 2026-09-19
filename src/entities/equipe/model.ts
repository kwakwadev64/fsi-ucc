export interface Lien {
  label: string
  url: string
}

export interface Membre {
  nom: string
  role: string
  description: string
  photo?: string
  avatarUrl?: string
  sujetMemoire?: string
  annee?: string
  github?: string
  linkedin?: string
  portfolio?: string
  sources?: Lien[]
}

// Interface pour une section d'équipe
export interface SectionEquipe {
  id: 'faculte' | 'gouvernement' | 'cp_cpa' | 'developpeurs' | string
  annee: string
  titre: string
  description: string
  membres: Membre[]
}

// Interface principale pour la structure globale de equipeData
export interface EquipeData {
  sections: SectionEquipe[]
}

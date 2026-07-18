// contact form
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface Galerie {
  id: number
  promotion: string
  displayName: string
  mainImage: string
  evenement: string
  desc: string
  images: ImageType[]
}

interface ImageType {
  url: string
  legende: string
}

// Interface pour encapsuler la réponse globale de ton API
export interface HomeData {
  actualites: Actualite[]
  cours_count: number
  photos_count: number
  bats_count: number
}

// interface d'actualité
export interface Actualite {
  id: number
  titre: string
  location: string
  description: string
  image_url: string
  rating: string
  filter_type: string
  is_published: boolean
  created_at: string
  updated_at: string
}

//historique
export interface Evenement {
  annee: string
  titre: string
  description: string
}

export interface Epoque {
  id: string
  periode: string
  titre: string
  description: string
  evenements: Evenement[]
}

export interface HistoriqueData {
  epoques: Epoque[]
}

// équipe
export interface MembreEquipe {
  nom: string
  role: string
  description: string
  sujetMemoire?: string
  avatarUrl?: string // URL de l'image (si non fournie, le composant génère un fallback premium avec initiales)
  github?: string
  linkedin?: string
  portfolio?: string
}

export interface SectionEquipe {
  id: string
  titre: string
  description: string
  membres: MembreEquipe[]
}

export interface EquipeData {
  sections: SectionEquipe[]
}

import type { LucideIcon } from 'lucide-react'

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

//slide

export interface Slide {
  id: string
  layout: 'logo' | 'photo'
  image?: string // requis si layout === 'photo'
  logo?: string // requis si layout === 'logo'
  badgeIcon?: LucideIcon
  badgeLabel?: string
  titleTop: string
  titleHighlight: string
  subtitle?: string
  primaryBtn: {
    label: string
    to: string
    external?: boolean
    icon: LucideIcon
  }
  secondaryBtn?: {
    label: string
    to: string
    external?: boolean
    icon: LucideIcon
  }
}

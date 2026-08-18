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

export interface Galerie {
  id: string
  promotion: string
  displayName: string
  mainImage: string
  evenement: string
  desc: string
  images: ImageType[]
}

export interface ImageType {
  id: number
  url: string
  title: string
  legende: string
}

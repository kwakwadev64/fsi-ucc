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
  title: string
  legende: string
}

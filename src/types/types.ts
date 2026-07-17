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

import { apiClient } from '@/shared/api/client'
import type { Galerie } from './model'

interface RawImage { id: number; url: string; title: string }
interface RawDescription { desc: string }
interface RawGalerie {
  id: string; promotion: string; displayName: string; mainImage: string
  evenement: string; desc: string; images: RawImage[]; descriptions: RawDescription[]
}

export async function getGaleries(): Promise<Galerie[]> {
  const { data } = await apiClient.get<{ success: boolean; data: RawGalerie[] }>('/galerie-site')
  if (!data.success) throw new Error('Impossible de charger la galerie.')
  return data.data.map(album => ({
    ...album,
    images: album.images.map((image, index) => ({
      ...image,
      legende: album.descriptions[index]?.desc ?? '',
    })),
  }))
}

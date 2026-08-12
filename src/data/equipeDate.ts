import type { Membre } from '@/types/types'

export interface DelegueHistorique extends Membre {
  annee: string
}

export const historiqueDelegueData: DelegueHistorique[] = [
  {
    nom: 'Andy BIMI SIELA',
    role: 'Délégué Facultaire',
    annee: '2025-2026',
    description:
      'Représentant principal des étudiants de la Faculté des Sciences Informatiques (FSI) 2025-2026.',
    photo: '/andi.jpeg',
    linkedin: 'https://www.linkedin.com/in/andy-bimi-250449370/',
  },
  {
    nom: 'Grâce MIBULUMUKINI',
    role: 'Délégué Facultaire',
    annee: '2024-2025',
    description:
      'Représentant principal des étudiants de la Faculté des Sciences Informatiques (FSI) 2024-2025.',
    photo: '/del.jpg',
  },
  {
    nom: 'Cindy Tatiana Tshidibi tezo',
    role: 'Délégué Facultaire',
    annee: '2022-2024',
    description:
      'Représentant principal des étudiants de la Faculté des Sciences Informatiques (FSI) 2022-2024.',
    photo: '/cyndy.jpeg',
  },
]

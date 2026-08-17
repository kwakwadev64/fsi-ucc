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
    role: 'Déléguée Facultaire',
    annee: '2023-2025',
    description:
      'Représentant principal des étudiants de la Faculté des Sciences Informatiques (FSI) 2023-2025.',
    photo: '/del.jpg',
  },
  {
    nom: 'Cindy Tatiana TSHIDIBI TEZO',
    role: 'Déléguée Facultaire',
    annee: '2022-2023',
    description:
      'Représentant principal des étudiants de la Faculté des Sciences Informatiques (FSI) 2022-2023.',
    photo: '/cyndy.jpeg',
  },
]

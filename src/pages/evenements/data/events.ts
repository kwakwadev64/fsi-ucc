export interface StaticEvent {
  id: string
  title: string
  category: string
  date: string
  time: string
  location: string
  description: string
}

export const upcomingEvents: StaticEvent[] = [
  {
    id: 'atelier-reseaux',
    title: 'Atelier pratique : réseaux et sécurité',
    category: 'Atelier',
    date: '2026-11-12',
    time: '09h00',
    location: 'Campus de l’UCC',
    description: 'Une séance de découverte autour de la configuration réseau et des bonnes pratiques de sécurité informatique.',
  },
  {
    id: 'projets-etudiants',
    title: 'Présentation des projets étudiants',
    category: 'Vie facultaire',
    date: '2026-11-26',
    time: '10h00',
    location: 'Faculté des Sciences Informatiques',
    description: 'Les étudiants présentent leurs travaux et échangent autour de leurs projets de conception logicielle.',
  },
  {
    id: 'rencontre-numerique',
    title: 'Rencontre autour des métiers du numérique',
    category: 'Conférence',
    date: '2026-12-10',
    time: '14h00',
    location: 'Campus de l’UCC',
    description: 'Un temps d’échange consacré aux parcours professionnels dans les réseaux, les télécommunications et le génie logiciel.',
  },
]

export const pastEvents: StaticEvent[] = [
  {
    id: 'rentree-fsi',
    title: 'Accueil de la communauté facultaire',
    category: 'Vie facultaire',
    date: '2026-10-15',
    time: '09h00',
    location: 'Campus de l’UCC',
    description: 'Rencontre de rentrée entre les étudiants, les enseignants et les responsables de la faculté.',
  },
]

export function formatEventDate(date: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export function getEventDateParts(date: string) {
  const parsed = new Date(`${date}T12:00:00`)
  return {
    day: new Intl.DateTimeFormat('fr-FR', { day: '2-digit' }).format(parsed),
    month: new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(parsed).replace('.', ''),
  }
}

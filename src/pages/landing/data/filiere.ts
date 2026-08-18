import reseau from '@/assets/reseau.png'
import logiciel from '@/assets/conception.png'
import { Network, Code } from 'lucide-react'

export const filieresData = [
  {
    id: 'reseau',
    title: 'Réseaux & Télécommunications',
    icon: Network,
    shortDesc:
      'Devenez expert dans l’architecture, la sécurisation et l’administration des infrastructures réseaux modernes.',
    details: [
      'Administration Système & Cloud',
      'Cybersécurité & Défense des données',
      'Téléphonie sur IP & Infrastructures Critiques',
      'Configuration Cisco, Huawei & Linux server',
    ],
    image: reseau,
  },
  {
    id: 'conception',
    title: 'Conception & Génie Logiciel',
    icon: Code,
    shortDesc:
      'Maîtrisez l’ensemble du cycle de vie des applications : de l’architecture de la base de données au design UI/UX.',
    details: [
      'Développement Web & Mobile Full-Stack',
      'Modélisation et Bases de données (SQL, NoSQL)',
      'Méthodologies Agiles & Architecture Logicielle',
      'Design d’interfaces interactives (UI/UX)',
    ],
    image: logiciel,
  },
]

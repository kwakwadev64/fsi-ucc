import { BookOpen, FileText, History, Image, Phone } from 'lucide-react'
import type { Slide } from '../types/types'

export const slides: Slide[] = [
  {
    id: 'welcome',
    layout: 'photo',
    image: '/DJI_0349-1536x864.jpg',
    imagePosition: 'center center',
    badgeLabel: 'Faculté des Sciences Informatiques · UCC',
    titleTop: 'Bienvenue à la Faculté des',
    titleHighlight: 'Sciences Informatiques',
    subtitle:
      'Deux filières d’excellence, un encadrement de qualité et une communauté qui innove.',
    primaryBtn: { label: 'Accéder aux cours', to: '/etude', icon: BookOpen },
    secondaryBtn: {
      label: 'Voir mes résultats',
      to: 'https://e-acade.ucc.ac.cd/',
      external: true,
      icon: FileText,
    },
  },
  {
    id: 'doyenne',
    layout: 'photo',
    image: '/doyenne.jpeg',
    imagePosition: 'center 21%',
    badgeLabel: 'La doyenne',
    titleTop: '',
    titleHighlight: 'Professeure Odette SANGUPAMBA',
    subtitle:
      'Une doyenne engagée au service de l’excellence académique et du succès des étudiants.',
    primaryBtn: {
      label: 'Voir tous vos cours',
      to: '/etude',
      external: false,
      icon: FileText,
    },
  },
  {
    id: 'delegue',
    layout: 'photo',
    image: '/andi.jpeg',
    imagePosition: 'center 20%',
    badgeLabel: 'Délégué facultaire',
    titleTop: 'Actuel',
    titleHighlight: ' délégué facultaire Andy Bimi',
    subtitle:
      'Un représentant proche des étudiants et engagé pour leur réussite et leur voix.',
    primaryBtn: {
      label: "Voir l'historique",
      to: '/historique',
      icon: History,
    },
  },
  {
    id: 'fsi-group',
    layout: 'photo',
    image: '/l1.jpeg',
    imagePosition: 'center 17%',
    badgeLabel: 'FSI en image',
    titleTop: 'Des visages,',
    titleHighlight: 'une énergie collective',
    subtitle:
      'Des étudiants et enseignants engagés dans un esprit de créativité et d’excellence.',
    primaryBtn: {
      label: 'Notre Galerie',
      to: '/galerie',
      icon: Image,
    },
  },
  {
    id: 'fsi-students',
    layout: 'photo',
    image: '/l3.jpeg',
    imagePosition: 'center 14%',
    badgeLabel: 'Visages de la FSI',
    titleTop: 'La FSI en',
    titleHighlight: 'portrait',
    subtitle:
      'Des profils inspirants, une dynamique positive et une communauté tournée vers l’avenir.',
    primaryBtn: {
      label: 'Nous contacter',
      to: '/contact',
      icon: Phone,
    },
  },
]

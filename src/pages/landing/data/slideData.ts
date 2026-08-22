import { BookOpen, FileText, GraduationCap, Phone, Users } from 'lucide-react'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'
import fsi2 from '@/assets/DJI_0349-1536x864.jpg'
import fsi3 from '@/assets/DJI_0349-1536x864.jpg'
import type { Slide } from '../types/types'

export const slides: Slide[] = [
  {
    id: 'slide-1',
    layout: 'logo',
    logo: LogoFsiUcc,
    titleTop: 'Bienvenue à la Faculté des',
    titleHighlight: 'Sciences Informatiques',
    subtitle: 'Formons ensemble les ingénieurs et informaticiens de demain.',
    primaryBtn: { label: 'Accéder aux cours', to: '/etude', icon: BookOpen },
    secondaryBtn: {
      label: 'Voir mes résultats',
      to: 'http://e-acade.ucc.ac.cd/',
      external: true,
      icon: FileText,
    },
  },
  {
    id: 'slide-2',
    layout: 'photo',
    image: fsi2,
    badgeLabel: 'Équipe & Programmes',
    titleTop: 'Découvrez notre',
    titleHighlight: 'Équipe & nos Programmes',
    subtitle:
      'La délégation facultaire et le corps enseignant qui composent la faculté, ainsi que les programmes de cours de la Licence 1 au Master 2.',
    primaryBtn: { label: "Voir l'équipe", to: '/equipe', icon: Users },
    secondaryBtn: {
      label: 'Nos programmes',
      to: '/etude',
      icon: GraduationCap,
    },
  },
  {
    id: 'slide-3',
    layout: 'photo',
    image: fsi3,
    badgeLabel: 'Contact',
    titleTop: 'Une question,',
    titleHighlight: 'un projet à discuter?',
    subtitle:
      "Contactez la faculté pour toute demande d'information, d'inscription ou de collaboration.",
    primaryBtn: { label: 'Nous contacter', to: '/contact', icon: Phone },
  },
]

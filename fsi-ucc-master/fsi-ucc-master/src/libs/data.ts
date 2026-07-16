import {
  GraduationCap,
  Archive,
  Layers,
  ImageIcon,
  BookOpen,
  Calendar,
  UserCheck,
} from 'lucide-react'
export const stats = [
  {
    icon: GraduationCap,
    count: '0',
    label: 'Notes de cours',
  },
  {
    icon: Archive,
    count: '0',
    label: 'Annales',
  },
  {
    icon: Layers,
    count: '5',
    label: 'Promotions',
  },
  {
    icon: ImageIcon,
    count: '0',
    label: 'Photos',
  },
]

export const accesRapide = [
  {
    icon: BookOpen,
    title: 'Notes de cours',
    desc: 'Téléchargez les supports de cours par promotion en un clic.',
  },
  {
    icon: Archive,
    title: 'Annales',
    desc: 'Consultez et préparez vos examens avec les sessions précédentes.',
  },
  {
    icon: Calendar,
    title: 'Horaires',
    desc: "Suivez en temps réel l'évolution des emplois du temps.",
  },
  {
    icon: UserCheck,
    title: 'Délégués',
    desc: 'Restez en contact permanent avec vos représentants de promotion.',
  },
]

export const faqData = [
  {
    question: "Comment s'inscrire à la Faculté des Sciences Informatiques ?",
    answer:
      "Les inscriptions s'effectuent conformément au calendrier académique de l'UCC. Vous devez soumettre votre dossier complet au secrétariat de la faculté ou via la plateforme d'inscription en ligne.",
  },
  {
    question: 'Quelles sont les filières disponibles au sein de la FSI ?',
    answer:
      "La FSI propose des spécialisations adaptées aux exigences technologiques modernes, notamment le Génie Logiciel, l'Administration des Réseaux & Systèmes, et l'Intelligence Artificielle.",
  },
  {
    question: "Où puis-je retrouver les annales et ressources d'examen ?",
    answer:
      "Les annales et supports de cours sont accessibles directement depuis notre espace numérique en cliquant sur le bouton dédié de la section d'accueil ou via l'accès rapide.",
  },
]

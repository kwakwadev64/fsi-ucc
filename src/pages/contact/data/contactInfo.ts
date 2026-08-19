import { Phone, Mail, MapPin, Clock, type LucideIcon } from 'lucide-react'

export interface ContactInfoItem {
  icon: LucideIcon
  title: string
  details: string[]
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: 'Téléphone',
    details: ['+243 (0) 81 509 0910'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@fsiucc.com', 'infosupport@fsiucc.com'],
  },
  {
    icon: MapPin,
    title: 'Adresse',
    details: [
      'Université Catholique du Congo',
      'Faculté des Sciences Informatiques',
      'Kinshasa, RDC',
    ],
  },
  {
    icon: Clock,
    title: 'Horaires',
    details: ['Lun - Ven : 8h00 - 16h00', 'Samedi : 8h00 - 12h00'],
  },
]

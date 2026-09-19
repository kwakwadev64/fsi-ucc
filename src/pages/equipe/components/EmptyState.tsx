import { UsersRound } from 'lucide-react'
import IconeSection from './IconeSection'
import SharedEmptyState from '@/shared/ui/EmptyState'

interface EmptyStateProps {
  variant: 'annee' | 'section'
  selectedAnnee: string
  sectionId?: string
  sectionTitre?: string
}

export default function EmptyState({
  variant,
  selectedAnnee,
  sectionId,
  sectionTitre,
}: EmptyStateProps) {
  if (variant === 'annee') {
    return (
      <SharedEmptyState
        icon={<UsersRound className="h-7 w-7 text-slate-400" />}
        title={`Aucune équipe enregistrée pour l'année ${selectedAnnee}.`}
        description="Essayez de sélectionner une autre année académique."
      />
    )
  }

  return (
    <SharedEmptyState
      icon={<IconeSection id={sectionId ?? ''} />}
      title={`Aucun membre enregistré dans « ${sectionTitre} » pour ${selectedAnnee}.`}
    />
  )
}

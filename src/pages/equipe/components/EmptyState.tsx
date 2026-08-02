import { UsersRound } from 'lucide-react'
import IconeSection from './IconeSection'

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
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
          <UsersRound className="w-7 h-7 text-slate-400" />
        </div>
        <p className="text-slate-500 font-medium">
          Aucune équipe enregistrée pour l'année {selectedAnnee}.
        </p>
        <p className="text-slate-400 text-sm mt-1">
          Essayez de sélectionner une autre année académique.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        <IconeSection id={sectionId ?? ''} />
      </div>
      <p className="text-slate-500 font-medium">
        Aucun membre enregistré dans « {sectionTitre} » pour {selectedAnnee}.
      </p>
    </div>
  )
}

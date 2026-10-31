import { useState } from 'react'
import { ArrowRight, Award, Building2, GraduationCap, UserRound, UsersRound } from 'lucide-react'
import type { Evenement } from '../types/types'
import EvenementModal from './EvenementModal'

interface EvenementCardProps {
  evenement: Evenement
  index: number
}

export default function EvenementCard({ evenement, index }: EvenementCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const icons = [GraduationCap, UsersRound, Building2, UserRound, Award]
  const Icon = icons[index % icons.length]

  return (
    <>
      <article className="flex h-full gap-4 border-t border-slate-300 bg-white py-5 sm:gap-5">
        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-[#0D3B66]">
          <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">{evenement.annee}</p>
          <h3 className="mt-1 text-base font-bold leading-snug text-slate-950 sm:text-lg">{evenement.titre}</h3>
          <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">{evenement.description}</p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-4 inline-flex items-center gap-2 border-b border-blue-700 pb-1 text-xs font-semibold text-[#0D3B66] hover:text-blue-700"
          >
            En savoir plus
            <ArrowRight size={14} aria-hidden="true" />
          </button>
        </div>
      </article>

      <EvenementModal evenement={evenement} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

import { Calendar } from 'lucide-react'
import type { Epoque } from '../types/types'

interface EpoqueFilterNavProps {
  epoques: Epoque[]
  activeEpoque: string
  onSelect: (id: string) => void
}

export default function EpoqueFilterNav({ epoques, activeEpoque, onSelect }: EpoqueFilterNavProps) {
  return (
    <div className="sticky top-0 z-40 mb-8 border-y border-slate-300 bg-white">
      <div className="flex gap-5 overflow-x-auto px-2 sm:gap-8 sm:px-4">
        {epoques.map(epoque => {
          const selected = activeEpoque === epoque.id
          return (
            <button
              key={epoque.id}
              type="button"
              onClick={() => onSelect(epoque.id)}
              aria-pressed={selected}
              className={`flex shrink-0 items-center gap-2 border-b-2 px-1 py-3 text-xs font-semibold transition-colors sm:text-sm ${
                selected
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-950'
              }`}
            >
              <Calendar size={14} aria-hidden="true" />
              {epoque.titre}
            </button>
          )
        })}
      </div>
    </div>
  )
}

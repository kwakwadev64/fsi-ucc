import { Calendar } from 'lucide-react'
import type { Epoque } from '@/types/types'

interface EpoqueFilterNavProps {
  epoques: Epoque[]
  activeEpoque: string
  onSelect: (id: string) => void
}

export default function EpoqueFilterNav({
  epoques,
  activeEpoque,
  onSelect,
}: EpoqueFilterNavProps) {
  return (
    <div className="relative w-full mb-12 md:mb-16 sticky top-4 z-40">
      <div className="flex gap-2 justify-start md:justify-center items-center bg-white/90 p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-sm overflow-x-auto select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden backdrop-blur-md snap-x px-4 md:px-2">
        {epoques.map(epoque => {
          const isSelected = activeEpoque === epoque.id
          return (
            <button
              key={epoque.id}
              onClick={() => onSelect(epoque.id)}
              className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 shrink-0 snap-center ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <Calendar size={14} className="shrink-0" />
              {epoque.titre}
            </button>
          )
        })}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-r from-transparent to-slate-50 pointer-events-none md:hidden rounded-r-2xl" />
    </div>
  )
}

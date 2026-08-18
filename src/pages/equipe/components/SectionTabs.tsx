import IconeSection from './IconeSection'
import type { SectionEquipe } from '../types/types'

interface SectionTabsProps {
  sections: SectionEquipe[]
  selectedSectionId: string
  onSelect: (id: string) => void
}

export default function SectionTabs({
  sections,
  selectedSectionId,
  onSelect,
}: SectionTabsProps) {
  return (
    <div className="relative w-full mb-8">
      <div className="flex gap-2 justify-start items-center bg-white p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-sm overflow-x-auto select-none scrollbar-none [&::-webkit-scrollbar]:hidden snap-x snap-mandatory px-4 md:px-2">
        {sections.map(section => {
          const isSelected = selectedSectionId === section.id
          const nbMembres = section.membres.length
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              disabled={nbMembres === 0}
              className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 shrink-0 snap-center active:scale-98 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : nbMembres === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              <IconeSection id={section.id} />
              <span>{section.titre}</span>
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {nbMembres}
              </span>
            </button>
          )
        })}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-r from-transparent to-slate-50 pointer-events-none md:hidden rounded-r-2xl" />
    </div>
  )
}

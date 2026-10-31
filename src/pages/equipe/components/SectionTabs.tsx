import IconeSection from './IconeSection'
import type { SectionEquipe } from '@/entities/equipe/model'

interface SectionTabsProps {
  sections: SectionEquipe[]
  selectedSectionId: string
  onSelect: (id: string) => void
}

export default function SectionTabs({ sections, selectedSectionId, onSelect }: SectionTabsProps) {
  return (
    <div role="tablist" aria-label="Sections de l’équipe" className="mb-8 flex gap-5 overflow-x-auto border-b border-slate-300">
      {sections.map(section => {
        const selected = selectedSectionId === section.id
        const count = section.membres.length
        return (
          <button
            key={section.id}
            type="button"
            role="tab"
            aria-selected={selected}
            disabled={count === 0}
            onClick={() => onSelect(section.id)}
            className={`flex shrink-0 items-center gap-2 border-b-2 px-1 py-3 text-xs font-semibold transition-colors sm:text-sm ${
              selected
                ? 'border-blue-700 text-blue-700'
                : count === 0
                  ? 'border-transparent text-slate-300'
                  : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-950'
            }`}
          >
            <IconeSection id={section.id} />
            {section.titre}
            <span className={`border-l border-current pl-2 text-[10px] ${selected ? 'text-blue-700' : 'text-slate-400'}`}>
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}

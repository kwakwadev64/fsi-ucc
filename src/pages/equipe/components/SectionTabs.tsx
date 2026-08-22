import { motion } from 'framer-motion'
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
      <div
        className="flex gap-1.5 justify-start md:justify-center items-center
                  bg-slate-100/80 backdrop-blur-sm py-1.5  rounded-2xl md:rounded-full
                  border border-slate-200/70
                  overflow-x-auto select-none scrollbar-none [&::-webkit-scrollbar]:hidden
                  snap-x snap-mandatory px-4 md:px-4"
      >
        {sections.map(section => {
          const isSelected = selectedSectionId === section.id
          const nbMembres = section.membres.length
          const isDisabled = nbMembres === 0

          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              disabled={isDisabled}
              className={`relative px-4 py-2.5 md:px-5 rounded-xl md:rounded-full text-xs md:text-sm
                        font-semibold whitespace-nowrap flex items-center gap-2 shrink-0
                        snap-center active:scale-[0.97] transition-colors duration-200 ${
                          isDisabled
                            ? 'text-slate-300 cursor-not-allowed'
                            : isSelected
                              ? 'text-white cursor-pointer'
                              : 'text-slate-500 hover:text-slate-900 cursor-pointer'
                        }`}
            >
              {/* Fond animé — glisse d'un onglet à l'autre via layoutId */}
              {isSelected && (
                <motion.span
                  layoutId="section-tabs-active-pill"
                  className="absolute inset-0 bg-blue-600 rounded-xl md:rounded-full shadow-md shadow-blue-600/25"
                  transition={{ type: 'spring', stiffness: 500, damping: 34 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                <IconeSection id={section.id} />
                <span>{section.titre}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors duration-200 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : isDisabled
                        ? 'bg-slate-100 text-slate-300'
                        : 'bg-slate-200/70 text-slate-500'
                  }`}
                >
                  {nbMembres}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Voiles de dégradé aux deux bords pour indiquer le scroll horizontal (mobile) */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-slate-50 to-transparent pointer-events-none md:hidden rounded-l-2xl" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-slate-50 to-transparent pointer-events-none md:hidden rounded-r-2xl" />
    </div>
  )
}

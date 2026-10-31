interface Promotion {
  nom: string
}

interface PromotionTabsProps {
  promotions: Promotion[]
  selectedIndex: number
  onSelect: (index: number) => void
}

export default function PromotionTabs({ promotions, selectedIndex, onSelect }: PromotionTabsProps) {
  return (
    <div className="mb-8 overflow-x-auto border-b border-slate-300 md:mb-10">
      <div className="flex min-w-max gap-5 sm:gap-8">
        {promotions.map((promo, index) => {
          const selected = selectedIndex === index
          return (
            <button
              key={promo.nom}
              type="button"
              onClick={() => onSelect(index)}
              aria-pressed={selected}
              className={`border-b-2 px-1 py-3 text-sm font-semibold transition-colors ${
                selected
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {promo.nom}
            </button>
          )
        })}
      </div>
    </div>
  )
}

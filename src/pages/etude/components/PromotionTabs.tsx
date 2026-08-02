interface Promotion {
  nom: string
}

interface PromotionTabsProps {
  promotions: Promotion[]
  selectedIndex: number
  onSelect: (index: number) => void
}

export default function PromotionTabs({
  promotions,
  selectedIndex,
  onSelect,
}: PromotionTabsProps) {
  return (
    <div className="flex gap-2 justify-start bg-white p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-xs mb-8 md:mb-12 overflow-x-auto scrollbar-none snap-x custom-scrollbar">
      {promotions.map((promo, index) => {
        const isSelected = selectedIndex === index
        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`px-5 py-2.5 rounded-xl md:rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap snap-mt-2 ${
              isSelected
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            {promo.nom}
          </button>
        )
      })}
    </div>
  )
}

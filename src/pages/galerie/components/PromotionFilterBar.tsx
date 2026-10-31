const PROMOTIONS_FILTER_LIST = [
  'Tous',
  'L1',
  'L2',
  'L3',
  'M1 Réseau',
  'M2 Réseau',
  'M1 Conception',
  'M2 Conception',
]

interface PromotionFilterBarProps {
  filter: string
  onFilterChange: (promo: string) => void
}

export default function PromotionFilterBar({ filter, onFilterChange }: PromotionFilterBarProps) {
  return (
    <section id="albums" className="border-y border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">Archives photo</p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">Albums par promotion</h2>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {PROMOTIONS_FILTER_LIST.map(promo => (
            <button
              key={promo}
              type="button"
              onClick={() => onFilterChange(promo)}
              aria-pressed={filter === promo}
              className={`shrink-0 border px-3 py-2 text-xs font-semibold transition ${
                filter === promo
                  ? 'border-[#0D3B66] bg-[#0D3B66] text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-blue-700 hover:text-blue-700'
              }`}
            >
              {promo}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

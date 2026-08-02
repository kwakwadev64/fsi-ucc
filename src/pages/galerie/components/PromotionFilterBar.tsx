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

export default function PromotionFilterBar({
  filter,
  onFilterChange,
}: PromotionFilterBarProps) {
  return (
    <section id="albums" className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Albums par Promotion
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROMOTIONS_FILTER_LIST.map(promo => (
              <button
                key={promo}
                onClick={() => onFilterChange(promo)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  filter === promo
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {promo}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

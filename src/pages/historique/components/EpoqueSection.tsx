import EvenementCard from './EvenementCard'
import type { Epoque } from '../types/types'

interface EpoqueSectionProps {
  epoque: Epoque
  index: number
}

export default function EpoqueSection({ epoque, index }: EpoqueSectionProps) {
  return (
    <section
      id={epoque.id}
      className={`-mx-4 mb-0 scroll-mt-32 border-b border-slate-200 px-4 py-12 sm:-mx-6 sm:px-6 md:py-16 lg:-mx-8 lg:px-8 ${
        index % 2 === 1 ? 'bg-slate-100' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
          Période · {epoque.periode}
        </span>
        <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-slate-950 md:text-3xl">
          {epoque.titre}
        </h2>
        <p className="mt-2 max-w-xl text-xs leading-6 text-slate-600 sm:text-sm">
          {epoque.description}
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-x-8 sm:mt-8 sm:grid-cols-2">
        {epoque.evenements.map((evenement, evIndex) => (
          <EvenementCard key={evIndex} evenement={evenement} index={evIndex} />
        ))}
      </div>
    </section>
  )
}

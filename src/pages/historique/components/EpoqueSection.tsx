import { motion } from 'framer-motion'
import { containerVariants } from '@/shared/lib/motionVariants'
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
      className={`-mx-4 mb-0 scroll-mt-32 px-4 py-14 sm:-mx-6 sm:px-6 md:py-20 lg:-mx-8 lg:px-8 ${
        index % 2 === 1 ? 'bg-[#eef1f8]' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-2 inline-block text-[9px] font-bold uppercase tracking-[0.12em] text-blue-500">
          ~ Période : {epoque.periode} ~
        </span>
        <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight tracking-tight text-slate-950 md:text-3xl">
          {epoque.titre}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-[11px] leading-relaxed text-slate-600 sm:text-xs">
          {epoque.description}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4"
      >
        {epoque.evenements.map((evenement, evIndex) => (
          <EvenementCard key={evIndex} evenement={evenement} index={evIndex} />
        ))}
      </motion.div>
    </section>
  )
}

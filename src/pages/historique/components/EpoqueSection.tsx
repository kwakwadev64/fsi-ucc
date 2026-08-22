import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motionVariants'
import EvenementCard from './EvenementCard'
import type { Epoque } from '../types/types'

export default function EpoqueSection({ epoque }: { epoque: Epoque }) {
  return (
    <div id={epoque.id} className="mb-16 md:mb-20 last:mb-0 scroll-mt-32">
      {/* Titre de l'Époque avec indicateur */}
      <div className="flex flex-col items-start lg:items-center text-left lg:text-center pl-10 lg:pl-0 mb-8 md:mb-10">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
          Période : {epoque.periode}
        </span>
        <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">
          {epoque.titre}
        </h2>
        <p className="text-slate-500 text-xs md:text-sm max-w-xl mt-1 font-light">
          {epoque.description}
        </p>
      </div>

      {/* Cartes d'événements */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative pl-10 lg:pl-0"
      >
        {/* Rail mobile — ligne verticale continue dans la gouttière pl-10 */}
        <div className="lg:hidden absolute left-4 top-1 bottom-1 w-px bg-linear-to-b from-blue-200 via-blue-100 to-transparent -z-10" />

        {/* Colonne vertébrale desktop — ligne verticale centrale */}
        <div className="hidden lg:block absolute left-1/2 top-1 bottom-1 w-px bg-linear-to-b from-blue-200 via-blue-100 to-transparent -translate-x-1/2 -z-10" />

        {epoque.evenements.map((evenement, evIndex) => (
          <EvenementCard
            key={evIndex}
            evenement={evenement}
            isEven={evIndex % 2 === 0}
          />
        ))}
      </motion.div>
    </div>
  )
}

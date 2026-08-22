import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { itemVariants } from '@/lib/motionVariants'
import type { Evenement } from '../types/types'
import EvenementModal from './EvenementModal'

interface EvenementCardProps {
  evenement: Evenement
  isEven: boolean
}

export default function EvenementCard({
  evenement,
  isEven,
}: EvenementCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        variants={itemVariants}
        className={`relative ${
          isEven
            ? 'lg:col-start-1 lg:flex lg:justify-end'
            : 'lg:col-start-2 lg:flex lg:justify-start'
        }`}
      >
        {/* Point sur le rail mobile — aligné avec la ligne verticale de gauche */}
        <div className="lg:hidden absolute -left-6 top-7 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 z-10" />

        {/* Trait connecteur horizontal desktop, vers la colonne vertébrale centrale */}
        <div
          className={`hidden lg:block absolute top-8 w-8 h-px bg-blue-200 ${
            isEven ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
          }`}
        />
        {/* Point sur la colonne vertébrale desktop */}
        <div
          className={`hidden lg:block absolute top-8 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 z-10 ${
            isEven
              ? 'right-0 translate-x-[2.55rem]'
              : 'left-0 translate-x-[-2.55rem]'
          }`}
        />

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="group relative w-full lg:max-w-md bg-white rounded-2xl border border-slate-100
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)]
                    transition-all duration-300 overflow-hidden"
        >
          <div className="p-6 md:p-7">
            {/* Année — grand format, ancre visuelle de la carte */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl md:text-4xl font-black text-blue-600 tabular-nums tracking-tight">
                {evenement.annee}
              </span>
              <span className="h-px flex-1 bg-slate-100" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
              {evenement.titre}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {evenement.description}
            </p>

            <div className="mt-5 pt-4 border-t border-slate-50">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors cursor-pointer"
              >
                En savoir plus
                <ArrowRight
                  size={13}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <EvenementModal
        evenement={evenement}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

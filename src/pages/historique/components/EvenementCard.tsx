import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { itemVariants } from '@/lib/motionVariants'
import type { Evenement } from '@/types/types'
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
        whileHover={{ y: -4 }}
        className={`bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group relative ${
          isEven ? 'lg:text-right lg:items-end' : 'lg:col-start-2'
        }`}
      >
        <div
          className={`hidden lg:block absolute top-7 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 transition-transform duration-300 group-hover:scale-125 ${
            isEven ? '-right-8.5' : '-left-8.5'
          }`}
        />

        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-base md:text-lg font-black text-blue-600 bg-blue-50/70 px-3 py-0.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 ${
              isEven ? 'lg:order-last' : ''
            }`}
          >
            {evenement.annee}
          </span>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {evenement.titre}
          </h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
            {evenement.description}
          </p>
        </div>

        <div
          className={`mt-4 pt-4 border-t border-slate-50 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-500 transition-colors w-full ${
            isEven ? 'lg:justify-end' : 'justify-start'
          }`}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 cursor-pointer"
          >
            En savoir plus
            <ArrowRight
              size={12}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </motion.div>

      <EvenementModal
        evenement={evenement}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

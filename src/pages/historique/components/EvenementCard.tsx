import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Building2,
  GraduationCap,
  UserRound,
  UsersRound,
} from 'lucide-react'
import { itemVariants } from '@/shared/lib/motionVariants'
import type { Evenement } from '../types/types'
import EvenementModal from './EvenementModal'

interface EvenementCardProps {
  evenement: Evenement
  index: number
}

export default function EvenementCard({
  evenement,
  index,
}: EvenementCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const icons = [GraduationCap, UsersRound, Building2, UserRound, Award]
  const Icon = icons[index % icons.length]

  return (
    <>
      <motion.div variants={itemVariants} className="h-full">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="group flex h-full min-h-52 flex-col overflow-hidden rounded-lg border border-slate-300/80 bg-slate-50/80 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]"
        >
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-sm border border-dashed border-sky-400 bg-sky-50 text-blue-600">
              <Icon size={16} strokeWidth={1.6} />
            </div>

            <span className="mb-1 text-[10px] font-medium text-blue-600">
              {evenement.annee}
            </span>

            <h3 className="mb-2 text-lg font-bold leading-tight text-slate-950 transition-colors group-hover:text-blue-700 sm:text-xl">
              {evenement.titre}
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600 sm:text-xs">
              {evenement.description}
            </p>

            <div className="mt-auto pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex cursor-pointer items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 transition-colors group-hover:text-blue-600"
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

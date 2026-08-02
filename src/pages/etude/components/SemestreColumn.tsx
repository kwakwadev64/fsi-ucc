import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { containerVariants } from '@/lib/motionVariants'
import CoursItem from './CoursItem'

interface SemestreInfo {
  semestre: string
  total_cours: number
  cours: string[]
}

interface SemestreColumnProps {
  semestreInfo: SemestreInfo
  animationKey: string
}

export default function SemestreColumn({
  semestreInfo,
  animationKey,
}: SemestreColumnProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Entête du Semestre */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Calendar size={20} />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-slate-900 wrap-break-word">
            {semestreInfo.semestre}
          </h2>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 shrink-0 whitespace-nowrap">
          {semestreInfo.total_cours} cours
        </span>
      </div>

      {/* Liste des cours animée */}
      <motion.div
        key={animationKey}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3"
      >
        {semestreInfo.cours.map((coursNom, coursIndex) => (
          <CoursItem key={coursIndex} nom={coursNom} />
        ))}
      </motion.div>
    </div>
  )
}

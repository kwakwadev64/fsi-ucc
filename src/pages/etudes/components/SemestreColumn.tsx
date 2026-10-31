import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { containerVariants } from '@/shared/lib/motionVariants'
import CoursItem from './CoursItem'

interface CoursInfo {
  nom: string
  professeur: string
  description: string
}

interface SemestreInfo {
  semestre: string
  total_cours: number
  cours: CoursInfo[]
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
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue-50 text-blue-700">
            <Calendar size={20} />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-slate-900 wrap-break-word">
            {semestreInfo.semestre}
          </h2>
        </div>
        <span className="shrink-0 whitespace-nowrap border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
          {semestreInfo.total_cours} cours
        </span>
      </div>

      <motion.div
        key={animationKey}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3"
      >
        {semestreInfo.cours.map((cours, coursIndex) => (
          <CoursItem
            key={coursIndex}
            nom={cours.nom}
            professeur={cours.professeur}
            description={cours.description}
          />
        ))}
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { itemVariants } from '@/lib/motionVariants'

export default function CoursItem({ nom }: { nom: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 4 }}
      className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:border-blue-100 transition-all duration-200 flex items-center justify-between group gap-4"
    >
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors shrink-0"></div>
        <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors truncate-3-lines">
          {nom}
        </span>
      </div>
      <div className="text-slate-300 group-hover:text-blue-500 transition-colors pl-2 shrink-0">
        <BookOpen size={16} />
      </div>
    </motion.div>
  )
}

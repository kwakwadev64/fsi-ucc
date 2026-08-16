import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, User, ChevronDown } from 'lucide-react'
import { itemVariants } from '@/lib/motionVariants'

interface CoursItemProps {
  nom: string
  professeur: string
  description: string
}

export default function CoursItem({
  nom,
  professeur,
  description,
}: CoursItemProps) {
  const [ouvert, setOuvert] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 4 }}
      onClick={() => setOuvert(prev => !prev)}
      className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:border-blue-100 transition-all duration-200 group cursor-pointer"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors shrink-0"></div>
          <div className="min-w-0">
            <span className="block text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors truncate-3-lines">
              {nom}
            </span>
            {professeur && (
              <span className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">
                <User size={11} className="shrink-0" />
                {professeur}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pl-2">
          <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
            <BookOpen size={16} />
          </div>
          {description && (
            <motion.div
              animate={{ rotate: ouvert ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-slate-300 group-hover:text-blue-500 transition-colors"
            >
              <ChevronDown size={16} />
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {ouvert && description && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-[22px] md:pl-[26px]">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

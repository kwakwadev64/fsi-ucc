import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, User, ChevronDown, Download } from 'lucide-react'
import { itemVariants } from '@/lib/motionVariants'
import MobileOnlyPopup from '@/pages/landing/components/MobileOnlyPoppup'

interface CoursItemProps {
  nom: string
  professeur: string
  description: string
  fichierUrl?: string
}

export default function CoursItem({
  nom,
  professeur,
  description,
  fichierUrl,
}: CoursItemProps) {
  const [ouvert, setOuvert] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const hasDescription = Boolean(description)

  return (
    <>
      <motion.div
        variants={itemVariants}
        onClick={() => hasDescription && setOuvert(prev => !prev)}
        className={`group bg-white rounded-2xl border border-slate-100
          shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)]
          hover:border-blue-100 transition-all duration-300
          ${hasDescription ? 'cursor-pointer' : ''}`}
      >
        <div className="flex items-start sm:items-center gap-4 p-4 sm:p-5 flex-wrap sm:flex-nowrap">
          {/* Pastille document */}
          <div
            className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl
              bg-blue-50 text-blue-600
              group-hover:bg-blue-600 group-hover:text-white
              transition-colors duration-300"
          >
            <FileText size={19} strokeWidth={2} />
          </div>

          {/* Titre + enseignant */}
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
              {nom}
            </h3>
            {professeur && (
              <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                <User size={12} className="shrink-0" />
                <span className="truncate">{professeur}</span>
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0 ml-auto sm:ml-0">
            {fichierUrl && (
              <a
                href={fichierUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => {
                  e.stopPropagation()
                  setIsVisible(true)
                }}
                aria-label={`Télécharger le support de ${nom}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full
                  bg-blue-50 text-blue-600 text-xs font-semibold
                  hover:bg-blue-600 hover:text-white
                  transition-colors duration-200"
              >
                <Download size={14} />
                <span className="hidden sm:inline">Télécharger le cours</span>
                <span className="sm:hidden">Télécharger</span>
              </a>
            )}

            {hasDescription && (
              <motion.div
                animate={{ rotate: ouvert ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 group-hover:text-blue-500 transition-colors"
              >
                <ChevronDown size={17} />
              </motion.div>
            )}
          </div>
        </div>

        {/* Description dépliable */}
        <AnimatePresence initial={false}>
          {ouvert && hasDescription && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[3.75rem] sm:pl-[4.25rem]">
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                  {description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <MobileOnlyPopup isOpen={isVisible} onClose={() => setIsVisible(false)} />
    </>
  )
}

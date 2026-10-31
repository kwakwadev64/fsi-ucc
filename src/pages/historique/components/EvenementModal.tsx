import { AnimatePresence, motion } from 'framer-motion'
import { X, Calendar } from 'lucide-react'
import type { Evenement } from '../types/types'

interface EvenementModalProps {
  evenement: Evenement | null
  isOpen: boolean
  onClose: () => void
}

export default function EvenementModal({
  evenement,
  isOpen,
  onClose,
}: EvenementModalProps) {
  return (
    <AnimatePresence>
      {isOpen && evenement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4"
          onClick={onClose}
        >
          {/* Overlay */}
          {/* Contenu du modal */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-lg border border-slate-200 bg-white p-6 shadow-xl md:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-[#0D3B66]">
                <Calendar size={14} />
                {evenement.annee}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              {evenement.titre}
            </h3>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
              {evenement.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

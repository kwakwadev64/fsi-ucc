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
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

          {/* Contenu du modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-black text-blue-600 bg-blue-50/70 px-3 py-1 rounded-lg">
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

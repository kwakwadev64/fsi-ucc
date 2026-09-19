import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, X } from 'lucide-react'

interface MobileOnlyPopupProps {
  isOpen: boolean
  onClose: () => void
  storeLink?: string
}

export default function MobileOnlyPopup({
  isOpen,
  onClose,
  storeLink,
}: MobileOnlyPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 shadow-inner">
                <Smartphone size={28} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Fonctionnalité mobile uniquement
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Oups ! Cette fonctionnalité est réservée à l'application mobile
                de la faculté. Téléchargez-la pour en profiter pleinement.
              </p>

              <div className="flex flex-col w-full gap-2">
                <a
                  href={storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 text-center cursor-pointer"
                  onClick={() =>
                    alert('application en maintenace revenez plus tard')
                  }
                >
                  Télécharger l'application
                </a>

                <button
                  onClick={onClose}
                  className="w-full px-5 py-2.5 rounded-xl bg-slate-50 text-slate-600 text-sm font-semibold hover:bg-slate-100 transition-colors duration-300 cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

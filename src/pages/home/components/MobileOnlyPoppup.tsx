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
            className="fixed inset-0 z-50 bg-slate-900/55"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center border border-blue-100 bg-blue-50 text-blue-700">
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
                  className="w-full cursor-pointer border border-blue-600 bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
                  onClick={() =>
                    alert('application en maintenace revenez plus tard')
                  }
                >
                  Télécharger l'application
                </a>

                <button
                  onClick={onClose}
                  className="w-full cursor-pointer border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:bg-slate-50"
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

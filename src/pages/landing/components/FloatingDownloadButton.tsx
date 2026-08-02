import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const APP_DOWNLOAD_URL = '#' // Play Store / App Store / APK

export default function FloatingDownloadButton() {
  return (
    <motion.button
      disabled={true}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-2 sm:gap-3 pl-4 pr-5 py-3.5 sm:pl-5 sm:pr-6 sm:py-4 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white font-bold shadow-2xl shadow-blue-600/40 cursor-not-allowed"
      onClick={() => alert("application n'est pas disponible")}
    >
      <span className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0">
        <motion.span
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-white/40"
        />
        <span className="relative flex items-center justify-center w-full h-full rounded-full bg-white/15 backdrop-blur-sm">
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Download size={18} />
          </motion.span>
        </span>
      </span>

      <span className="text-xs sm:text-sm leading-tight text-left">
        <span className="block text-[10px] sm:text-[11px] font-medium text-blue-100">
          Disponible maintenant
        </span>
        <span className="block">Télécharger l'app</span>
      </span>
    </motion.button>
  )
}

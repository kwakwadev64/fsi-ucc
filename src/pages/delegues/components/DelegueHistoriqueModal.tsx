import { motion, AnimatePresence } from 'framer-motion'
import { X, CalendarDays } from 'lucide-react'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import type { DelegueHistorique } from '@/pages/delegues/data/equipeDate'

export default function DelegueHistoriqueModal({
  delegue,
  onClose,
}: {
  delegue: DelegueHistorique | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {delegue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-slate-200 bg-white shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-50 flex h-9 w-9 items-center justify-center border border-white/50 bg-slate-950/60 text-white transition-colors hover:bg-slate-950"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full h-64 sm:h-80 bg-slate-100 relative">
              {delegue.photo || delegue.avatarUrl ? (
                <img
                  src={delegue.photo || delegue.avatarUrl}
                  alt={delegue.nom}
                  className="w-full h-full object-cover object-[center_10%]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 text-slate-500 font-bold text-5xl">
                  {delegue.nom
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
              )}

              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 border border-white/60 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700">
                <CalendarDays className="w-3.5 h-3.5 text-blue-500" />
                {delegue.annee}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {delegue.nom}
                </h2>
                <p className="text-sm font-semibold text-blue-600 mt-1">
                  {delegue.role}
                </p>
              </div>

              {delegue.description && (
                <p className="text-sm text-slate-600 leading-relaxed text-left sm:text-center">
                  {delegue.description}
                </p>
              )}

              {(delegue.portfolio || delegue.github || delegue.linkedin) && (
                <div className="flex items-center justify-center gap-4 text-slate-400 pt-2 border-t border-slate-100 flex-wrap">
                  {delegue.portfolio && (
                    <a
                      href={delegue.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm transition-colors hover:text-cyan-700"
                    >
                      <LuGlobe className="w-4 h-4" />
                      Portfolio
                    </a>
                  )}
                  {delegue.github && (
                    <a
                      href={delegue.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm hover:text-slate-900 transition-colors"
                    >
                      <LuGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {delegue.linkedin && (
                    <a
                      href={delegue.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm hover:text-blue-600 transition-colors"
                    >
                      <LuLinkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

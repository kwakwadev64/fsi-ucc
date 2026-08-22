import { AnimatePresence, motion } from 'framer-motion'
import { X, Link2, ExternalLink, BookOpen } from 'lucide-react'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import type { Membre } from '../types/types'

interface MembreModalProps {
  membre: Membre
  isOpen: boolean
  onClose: () => void
}

export const MembreModal = ({ membre, isOpen, onClose }: MembreModalProps) => {
  const initiales = membre.nom
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)

  const hasSocials = membre.portfolio || membre.github || membre.linkedin
  const description = membre.description ?? ''
  const photoSrc = membre.photo || membre.avatarUrl

  return (
    <>
      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-slate-100 shadow-sm transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* PHOTO */}
              <div className="w-full h-80 sm:h-96 overflow-hidden bg-slate-100">
                {photoSrc ? (
                  <img
                    src={photoSrc}
                    alt={membre.nom}
                    className="w-full h-full object-cover object-[center_10%]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 text-slate-500 font-bold text-4xl">
                    {initiales}
                  </div>
                )}
              </div>

              {/* CONTENU */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {membre.nom}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-1">
                    {membre.role}
                  </p>
                </div>

                {description && (
                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                )}

                {membre.sources && membre.sources.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                      <Link2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>Sources</span>
                    </div>
                    <ul className="space-y-1.5 flex gap-3 flex-wrap ">
                      {membre.sources.map((source, index) => (
                        <li key={index}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 shrink-0" />
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {membre.sujetMemoire && (
                  <div className="pt-3 border-t border-slate-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                      <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>Mémoire soutenu</span>
                    </div>
                    <p className="text-xs text-slate-600 italic leading-snug">
                      "{membre.sujetMemoire}"
                    </p>
                  </div>
                )}

                {hasSocials && (
                  <div className="pt-2 flex items-center gap-3 text-slate-400">
                    {membre.portfolio && (
                      <a
                        href={membre.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-600 transition-colors"
                        title="Portfolio"
                      >
                        <LuGlobe className="w-4 h-4" />
                      </a>
                    )}
                    {membre.github && (
                      <a
                        href={membre.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-slate-900 transition-colors"
                        title="GitHub"
                      >
                        <LuGithub className="w-4 h-4" />
                      </a>
                    )}
                    {membre.linkedin && (
                      <a
                        href={membre.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 transition-colors"
                        title="LinkedIn"
                      >
                        <LuLinkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MembreModal

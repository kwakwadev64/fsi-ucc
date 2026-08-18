import { motion } from 'framer-motion'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import { CalendarDays } from 'lucide-react'
import { itemVariants } from '@/lib/motionVariants'
import type { DelegueHistorique } from '@/pages/delegue/data/equipeDate'

export default function DelegueHistoriqueCard({
  delegue,
  onLireLaSuite,
}: {
  delegue: DelegueHistorique
  onLireLaSuite: (delegue: DelegueHistorique) => void
}) {
  const initiales = delegue.nom
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)

  const hasSocials = delegue.portfolio || delegue.github || delegue.linkedin
  const photoSrc = delegue.photo || delegue.avatarUrl

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col group"
    >
      <div className="w-full aspect-4/5 overflow-hidden bg-slate-100 relative">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={delegue.nom}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 text-slate-500 font-bold text-3xl">
            {initiales}
          </div>
        )}

        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-slate-700 shadow-sm">
          <CalendarDays className="w-3 h-3 text-blue-500" />
          {delegue.annee}
        </div>
      </div>

      <div className="p-5 space-y-2 flex-1 flex flex-col">
        <div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
            {delegue.nom}
          </h3>
          <p className="text-xs font-semibold text-blue-600 mt-1">
            {delegue.role}
          </p>
        </div>

        {delegue.description && (
          <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
            {delegue.description}
          </p>
        )}

        <button
          onClick={() => onLireLaSuite(delegue)}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline text-left w-fit transition-colors"
        >
          Lire la suite
        </button>

        {hasSocials && (
          <div className="flex items-center gap-3 text-slate-400 pt-2 mt-auto">
            {delegue.portfolio && (
              <a
                href={delegue.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-600 transition-colors"
                title="Portfolio"
              >
                <LuGlobe className="w-4 h-4" />
              </a>
            )}
            {delegue.github && (
              <a
                href={delegue.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
                title="GitHub"
              >
                <LuGithub className="w-4 h-4" />
              </a>
            )}
            {delegue.linkedin && (
              <a
                href={delegue.linkedin}
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
  )
}

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
      onClick={() => onLireLaSuite(delegue)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onLireLaSuite(delegue)}
      className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* PHOTO OU INITIALES (plein cadre) */}
      {photoSrc ? (
        <img
          src={photoSrc}
          alt={delegue.nom}
          className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 text-slate-500 font-bold text-4xl">
          {initiales}
        </div>
      )}

      {/* Voile dégradé pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

      {/* Badge année — en haut à gauche */}
      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-slate-700 shadow-sm">
        <CalendarDays className="w-3 h-3 text-blue-500" />
        {delegue.annee}
      </div>

      {/* Icônes réseaux — pilule flottante en haut à droite */}
      {hasSocials && (
        <div className="absolute top-3 right-3 z-10 flex flex-col items-center gap-2">
          {delegue.portfolio && (
            <a
              href={delegue.portfolio}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-emerald-500 hover:border-emerald-500 transition-colors"
              title="Portfolio"
            >
              <LuGlobe className="w-3.5 h-3.5" />
            </a>
          )}
          {delegue.github && (
            <a
              href={delegue.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-slate-900 hover:border-slate-900 transition-colors"
              title="GitHub"
            >
              <LuGithub className="w-3.5 h-3.5" />
            </a>
          )}
          {delegue.linkedin && (
            <a
              href={delegue.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-blue-600 hover:border-blue-600 transition-colors"
              title="LinkedIn"
            >
              <LuLinkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      )}

      {/* Nom, rôle & aperçu — en bas de la photo */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
          {delegue.nom}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-blue-300 mt-0.5">
          {delegue.role}
        </p>

        {delegue.description && (
          <p className="text-xs text-slate-200/90 leading-relaxed font-normal line-clamp-2 mt-2">
            {delegue.description}
          </p>
        )}

        <span className="inline-block mt-2 text-xs font-semibold text-blue-300 group-hover:text-blue-200 group-hover:underline transition-colors">
          Lire la suite
        </span>
      </div>
    </motion.div>
  )
}

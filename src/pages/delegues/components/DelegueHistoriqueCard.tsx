import { motion } from 'framer-motion'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import { CalendarDays } from 'lucide-react'
import { itemVariants } from '@/shared/lib/motionVariants'
import type { DelegueHistorique } from '@/pages/delegues/data/equipeDate'

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
      className="group relative aspect-[3/4] sm:aspect-[4/5] w-full cursor-pointer overflow-hidden border border-slate-200 transition-colors duration-300 hover:border-blue-300"
    >
      {/* PHOTO OU INITIALES (plein cadre) */}
      {photoSrc ? (
        <img
          src={photoSrc}
          alt={delegue.nom}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
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
      <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 border border-white/60 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-slate-700">
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
              className="flex h-8 w-8 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-cyan-600 hover:border-cyan-600"
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
              className="flex h-8 w-8 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-slate-900 hover:border-slate-900"
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
              className="flex h-8 w-8 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-blue-600 hover:border-blue-600"
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

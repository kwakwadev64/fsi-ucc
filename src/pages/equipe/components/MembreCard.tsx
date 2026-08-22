import { useState } from 'react'
import { motion } from 'framer-motion'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import { itemVariants } from '@/lib/motionVariants'
import type { Membre } from '../types/types'
import MembreModal from './MembreModal'

export default function MembreCard({ membre }: { membre: Membre }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const initiales = membre.nom
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)

  const hasSocials = membre.portfolio || membre.github || membre.linkedin

  const photoSrc = membre.photo || membre.avatarUrl

  // Icônes réseaux sociaux — flottantes sur la photo, couleurs conservées
  const Socials = ({ className = '' }: { className?: string }) =>
    hasSocials ? (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        {membre.portfolio && (
          <a
            href={membre.portfolio}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-emerald-500 hover:border-emerald-500 transition-colors"
            title="Portfolio"
          >
            <LuGlobe className="w-3.5 h-3.5" />
          </a>
        )}
        {membre.github && (
          <a
            href={membre.github}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-slate-900 hover:border-slate-900 transition-colors"
            title="GitHub"
          >
            <LuGithub className="w-3.5 h-3.5" />
          </a>
        )}
        {membre.linkedin && (
          <a
            href={membre.linkedin}
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
    ) : null

  return (
    <>
      {/* -------- CARTE : photo plein cadre + texte/icônes en overlay -------- */}
      <motion.div
        variants={itemVariants}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setIsModalOpen(true)}
        className="group relative aspect-3/4 sm:aspect-4/5 w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        {/* PHOTO OU INITIALES (plein cadre) */}
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={membre.nom}
            className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 text-slate-500 font-bold text-4xl">
            {initiales}
          </div>
        )}

        {/* Voile dégradé pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

        {/* Icônes réseaux — pilule flottante en haut à droite */}
        {hasSocials && <Socials className="absolute top-3 right-3 z-10" />}

        {/* Nom & rôle — en bas de la photo */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
            {membre.nom}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-blue-300 mt-0.5">
            {membre.role}
          </p>
        </div>
      </motion.div>

      {/* MODAL — inchangée, avec les détails complets */}
      <MembreModal
        membre={membre}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

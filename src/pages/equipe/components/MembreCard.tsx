import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import { itemVariants } from '@/lib/motionVariants'
import type { Membre } from '@/types/types'

export default function MembreCard({ membre }: { membre: Membre }) {
  const initiales = membre.nom
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)

  const hasSocials = membre.portfolio || membre.github || membre.linkedin

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
    >
      <div>
        {/* PHOTO OU INITIALES */}
        <div className="w-full aspect-4/5 sm:h-72 overflow-hidden bg-slate-100 relative">
          {membre.photo || membre.avatarUrl ? (
            <img
              src={membre.photo || membre.avatarUrl}
              alt={membre.nom}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 text-slate-500 font-bold text-3xl">
              {initiales}
            </div>
          )}
        </div>

        {/* TEXTE & INFOS */}
        <div className="p-5 space-y-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
              {membre.nom}
            </h3>
            <p className="text-xs font-semibold text-blue-600 mt-1">
              {membre.role}
            </p>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed font-normal">
            {membre.description}
          </p>

          {membre.sujetMemoire && (
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Mémoire soutenu</span>
              </div>
              <p className="text-[11px] text-slate-600 italic leading-snug">
                "{membre.sujetMemoire}"
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER : RÉSEAUX SOCIAUX */}
      {hasSocials && (
        <div className="px-5 pb-5 pt-2 flex items-center gap-3 text-slate-400">
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
    </motion.div>
  )
}

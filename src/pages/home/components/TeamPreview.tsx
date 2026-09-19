import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiLinkedin } from 'react-icons/fi'
import type { SectionEquipe } from '@/entities/equipe/model'
import { containerVariants, itemVariants } from '@/shared/lib/motionVariants'
import { useTeamPreview } from '@/features/equipe-selection/useTeamPreview'

type Membre = SectionEquipe['membres'][number]

function TeamCard({ membre }: { membre: Membre }) {
  const initials = membre.nom
    .split(' ')
    .map(name => name[0])
    .join('')
    .slice(0, 2)
  const image = membre.photo || membre.avatarUrl

  return (
    <article className="min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={membre.nom}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-3xl font-bold text-slate-400">
            {initials}
          </div>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.88),rgba(2,6,23,0.08)_58%,transparent)]" />

        {membre.linkedin && (
          <a
            href={membre.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`LinkedIn de ${membre.nom}`}
            className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:h-9 sm:w-9"
          >
            <FiLinkedin size={16} />
          </a>
        )}

        <div className="absolute inset-x-4 bottom-4 text-white sm:inset-x-5 sm:bottom-5">
          <h3 className="m-0 text-base font-bold leading-[1.15] text-white sm:text-lg">
            {membre.nom}
          </h3>
          <p className="mt-2 text-[11px] font-semibold leading-[1.3] text-blue-300 sm:text-sm">
            {membre.role}
          </p>
        </div>
      </div>
    </article>
  )
}

interface TeamPreviewProps {
  membres?: Membre[]
  limit?: number
}

export default function TeamPreview({
  membres: providedMembers,
  limit = 8,
}: TeamPreviewProps) {
  const { membres: apiMembers, isLoading, isError } = useTeamPreview(limit)
  const members = providedMembers ?? apiMembers

  if (isError) return null

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[2.2rem]">
            Notre équipe facultaire
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
            Des enseignants-chercheurs et responsables engagés pour votre
            réussite.
          </p>
        </header>

        {isLoading && !providedMembers ? (
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: limit }, (_, index) => (
              <div
                key={index}
                className="aspect-[4/5] animate-pulse rounded-[18px] bg-slate-100"
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
          >
            {members.slice(0, limit).map(member => (
              <motion.div variants={itemVariants} key={member.nom}>
                <TeamCard membre={member} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mx-auto mt-8 max-w-lg text-center sm:mt-10">
          <h3 className="text-lg font-bold text-slate-950 sm:text-[1.3rem]">
            Découvrez toute l’équipe facultaire
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
            Une communauté d’enseignants-chercheurs, de secrétaires et
            d’assistants engagés pour votre réussite.
          </p>
          <Link
            to="/equipe"
            className="mt-4 inline-flex rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600 sm:px-5"
          >
            Voir toute l’équipe
          </Link>
        </div>
      </div>
    </section>
  )
}

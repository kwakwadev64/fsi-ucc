import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motionVariants'
// ⚠️ Ajuste ce chemin selon l'emplacement réel de MembreCard et du type SectionEquipe
import MembreCard from '@/pages/equipe/components/MembreCard'
import type { SectionEquipe } from '@/pages/equipe/types/types'
import { useTeamPreview } from '../hooks/useTeamPreview'

type Membre = SectionEquipe['membres'][number]

interface TeamPreviewProps {
  // Optionnel : surcharge manuelle. Si absent, les membres sont récupérés
  // automatiquement via /equipes-site (hook useTeamPreview).
  membres?: Membre[]
  viewAllHref?: string
  limit?: number
}

function TeamPreviewSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="aspect-3/4 sm:aspect-4/5 w-full rounded-2xl bg-slate-100 animate-pulse"
        />
      ))}
    </div>
  )
}

export default function TeamPreview({
  membres: membresProp,
  viewAllHref = '/equipe',
  limit = 8,
}: TeamPreviewProps) {
  const { membres: membresApi, isLoading, isError } = useTeamPreview(limit)
  const membres = membresProp ?? membresApi

  if (isError) return null

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Notre équipe facultaire
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Des enseignants-chercheurs et responsables engagés pour votre
            réussite.
          </p>
        </div>

        {isLoading && !membresProp ? (
          <TeamPreviewSkeleton />
        ) : membres.length === 0 ? (
          <p className="text-center text-slate-400 text-sm">
            Aucun membre à afficher pour le moment.
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial=""
            animate="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {membres.slice(0, limit).map(membre => (
              <MembreCard key={membre.nom} membre={membre} />
            ))}
          </motion.div>
        )}

        {membres.length > 0 && (
          <div className="text-center mt-10">
            <a
              href={viewAllHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Voir toute l'équipe
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

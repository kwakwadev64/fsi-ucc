import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, MapPin, Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'
import { containerVariants, itemVariants } from '@/shared/lib/motionVariants'
import type { HomeData } from '@/entities/actualite/model'
import { storageUrl } from '@/shared/lib/media'

interface ActualitesSectionProps {
  data?: HomeData
  isError: boolean
  loading: boolean
}

export default function ActualitesSection({ data, isError, loading }: ActualitesSectionProps) {
  const articles = data?.actualites ?? []

  return (
    <section id="actualites" className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-xs">
              Restez informés
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Actualités de la faculté
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Retrouvez les annonces, les activités et les temps forts de la communauté FSI.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">
            <Newspaper size={15} className="text-blue-700" aria-hidden="true" />
            Infos & vie académique
          </span>
        </header>

        {loading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="Chargement des actualités">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="overflow-hidden border border-slate-200">
                <div className="h-48 animate-pulse bg-slate-100" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-1/3 animate-pulse rounded bg-slate-100" />
                  <div className="h-5 w-4/5 animate-pulse rounded bg-slate-100" />
                  <div className="h-12 animate-pulse rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        ) : isError || articles.length === 0 ? (
          <div className="flex flex-col items-center border-y border-slate-200 bg-slate-50 px-5 py-12 text-center sm:py-14">
            <span className="grid h-12 w-12 place-items-center border border-slate-200 bg-white text-blue-700">
              <Newspaper size={21} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">
              Les nouvelles de la FSI arrivent ici
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
              Consultez les informations disponibles sur les études ou contactez la faculté pour toute question.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
            >
              Contacter la faculté
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles.slice(0, 3).map(article => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-colors hover:border-blue-300"
              >
                <Link to={`/actualites/${article.id}`} className="relative block h-48 overflow-hidden bg-slate-100">
                  <img
                    src={storageUrl(article.image_url)}
                    alt={article.titre}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#0D3B66]">
                    {article.filter_type}
                  </span>
                </Link>

                <div className="flex grow flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} className="text-blue-700" aria-hidden="true" />
                      {new Date(article.created_at).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    {article.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} className="text-blue-700" aria-hidden="true" />
                        {article.location}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 line-clamp-2 text-base font-bold leading-snug text-slate-950 transition group-hover:text-blue-700 sm:text-lg">
                    {article.titre}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-6 text-slate-600 sm:text-sm">
                    {article.description}
                  </p>
                  <Link
                    to={`/actualites/${article.id}`}
                    className="mt-auto inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-blue-700 transition hover:text-blue-900 sm:mt-5 sm:text-sm"
                  >
                    Lire l’article
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

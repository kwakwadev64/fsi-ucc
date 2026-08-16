import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/motionVariants'
import type { HomeData } from '@/types/types'
import SectionTitle from './SectionTitle'

interface ActualitesSectionProps {
  data?: HomeData
  isError: boolean
}

export default function ActualitesSection({
  data,
  isError,
}: ActualitesSectionProps) {
  // const annoncesAffichees = filtrerAnnoncesRecentes(data, 'createdAt')
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 mb-8">
      <SectionTitle
        title="Dernières Actualités"
        subtitle="Restez informé sur les événements majeurs, les hackathons et la vie académique au sein de la FSI."
      />

      {isError ? (
        <div className="text-center py-8 text-red-500 font-medium text-sm sm:text-base">
          Impossible de charger les dernières actualités.
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {data?.actualites.map(actu => (
            <motion.div
              key={actu.id}
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md text-[#0D3B66] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xs uppercase tracking-wider">
                  {actu.filter_type}
                </span>
                <img
                  src={`https://frnagrmi.fsiucc.com/storage/${actu.image_url}`}
                  alt={actu.titre}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow justify-between">
                <div>
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(actu.created_at).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {actu.location}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-3">
                    {actu.titre}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium line-clamp-3 leading-relaxed mb-6">
                    {actu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50">
                  <a
                    href={`/actualites/${actu.id}`}
                    className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#0D3B66] group-hover:text-blue-600 transition-colors uppercase tracking-wider"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight
                      size={12}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  )
}

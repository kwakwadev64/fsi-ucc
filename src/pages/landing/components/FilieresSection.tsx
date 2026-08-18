import { motion } from 'framer-motion'
import { itemVariants } from '@/lib/motionVariants'
import { filieresData } from '@/pages/landing/data/filiere'
import SectionTitle from './SectionTitle'

export default function FilieresSection() {
  return (
    <section className="bg-slate-100/60 py-16 sm:py-20 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos Filières d'Excellence"
          subtitle="Deux spécialisations majeures adaptées aux exigences technologiques mondiales pour propulser votre carrière."
        />

        <div className="flex flex-col gap-12 sm:gap-16">
          {filieresData.map((filiere, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={filiere.id}
                variants={itemVariants}
                className={`bg-white rounded-3xl overflow-hidden shadow-xs flex flex-col md:flex-row ${
                  !isEven ? 'md:flex-row-reverse' : ''
                } gap-6 lg:gap-12 p-5 sm:p-6 md:p-8 items-center group hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden rounded-2xl shrink-0">
                  <img
                    src={filiere.image}
                    alt={filiere.title}
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center py-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    {filiere.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mb-6">
                    {filiere.shortDesc}
                  </p>

                  <ul className="space-y-3">
                    {filiere.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-700 text-xs font-semibold"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></span>
                        <span className="leading-tight">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

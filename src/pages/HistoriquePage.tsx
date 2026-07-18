import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { History, Calendar, ArrowRight, ShieldCheck, Award } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { historiqueData } from '@/data/HistoriqueData'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

export default function HistoriquePage() {
  const [activeEpoque, setActiveEpoque] = useState<string>(
    historiqueData.epoques[0].id
  )

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const lineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  }

  const scrollToSection = (id: string) => {
    setActiveEpoque(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="px-4 py-16 md:py-0 md:px-20 w-full min-h-96 md:h-112.5 flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${uccbatiment})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-400 text-sm font-medium mb-4 mx-auto md:mx-0">
            <History size={16} />
            Notre Héritage Institutionnel
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Histoire de la <span className="text-blue-400">Faculté</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light mx-auto md:mx-0">
            Parcourez les grandes étapes, les réalisations majeures et les
            évolutions pédagogiques qui ont forgé l'excellence de notre
            établissement au fil des décennies.
          </p>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* FILTRE / NAVIGATION CHRONOLOGIQUE DYNAMIQUE */}
        <div className="relative w-full mb-12 md:mb-16 sticky top-4 z-40">
          <div className="flex gap-2 justify-start md:justify-center items-center bg-white/90 p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-sm overflow-x-auto select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden backdrop-blur-md snap-x px-4 md:px-2">
            {historiqueData.epoques.map(epoque => {
              const isSelected = activeEpoque === epoque.id
              return (
                <button
                  key={epoque.id}
                  onClick={() => scrollToSection(epoque.id)}
                  className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 shrink-0 snap-center ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <Calendar size={14} className="shrink-0" />
                  {epoque.titre}
                </button>
              )
            })}
          </div>
          {/* Effet fade visuel pour le scroll mobile */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-r from-transparent to-slate-50 pointer-events-none md:hidden rounded-r-2xl" />
        </div>

        {/* TIMELINE */}
        <div className="relative px-2 sm:px-4 lg:px-0">
          {/* Ligne verticale : à gauche sur mobile, centrée sur grand écran */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-slate-200 to-blue-600 origin-top transform lg:-translate-x-1/2"
          />

          {/* Boucle sur les Grandes Époques */}
          {historiqueData.epoques.map(epoque => (
            <div
              id={epoque.id}
              key={epoque.id}
              className="mb-16 md:mb-20 last:mb-0 scroll-mt-32"
            >
              {/* Titre de l'Époque avec indicateur */}
              <div className="flex flex-col items-start lg:items-center text-left lg:text-center pl-10 lg:pl-0 mb-8 md:mb-10">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
                  Période : {epoque.periode}
                </span>
                <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">
                  {epoque.titre}
                </h2>
                <p className="text-slate-500 text-xs md:text-sm max-w-xl mt-1 font-light">
                  {epoque.description}
                </p>
              </div>

              {/* Cartes d'événements */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative pl-10 lg:pl-0"
              >
                {epoque.evenements.map((evenement, evIndex) => {
                  const isEven = evIndex % 2 === 0

                  return (
                    <motion.div
                      key={evIndex}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      className={`bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group relative ${
                        isEven ? 'lg:text-right lg:items-end' : 'lg:col-start-2'
                      }`}
                    >
                      {/* Pastille Point d'ancrage sur la ligne (Uniquement visible sur grand écran) */}
                      <div
                        className={`hidden lg:block absolute top-7 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 transition-transform duration-300 group-hover:scale-125 ${
                          isEven ? '-right-8.5' : '-left-8.5'
                        }`}
                      />

                      {/* Pastille Année Design */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`text-base md:text-lg font-black text-blue-600 bg-blue-50/70 px-3 py-0.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 ${
                            isEven ? 'lg:order-last' : ''
                          }`}
                        >
                          {evenement.annee}
                        </span>
                        <Award
                          size={18}
                          className={`text-blue-500 shrink-0 ${isEven ? 'lg:order-first' : ''}`}
                        />
                      </div>

                      {/* Contenu textuel */}
                      <div className="space-y-1.5">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {evenement.titre}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                          {evenement.description}
                        </p>
                      </div>

                      {/* Lien d'action */}
                      <div
                        className={`mt-4 pt-4 border-t border-slate-50 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-500 transition-colors w-full ${
                          isEven ? 'lg:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="flex items-center gap-1 cursor-pointer">
                          En savoir plus
                          <ArrowRight
                            size={12}
                            className="transform group-hover:translate-x-1 transition-transform"
                          />
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* SECTION FOOTNOTE */}
        <div className="mt-16 md:mt-20 bg-linear-to-br from-slate-900 to-blue-950 rounded-3xl p-6 md:p-12 text-center relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          <div className="relative max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-blue-400 mx-auto">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white">
              Prêt pour les défis de demain
            </h3>
            <p className="text-xs md:text-base text-slate-300 font-light leading-relaxed">
              Forte de son passé riche, la Faculté des Sciences Informatiques
              continue d'innover pour former les leaders technologiques du
              continent.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

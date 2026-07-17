import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { BookOpen, GraduationCap, Calendar } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import programmeData from '@/data/programme-fsi.json'

export default function EtudePage() {
  // Par défaut, on sélectionne la première promotion du JSON (L1)
  const [selectedPromoIndex, setSelectedPromoIndex] = useState<number>(0)

  const currentPromo = programmeData.promotions[selectedPromoIndex]

  // Tes variantes Framer Motion pour garder l'effet de fondu séquentiel
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* NAVBAR */}
      <Navbar />

      {/* MINI HERO SECTION (Style Bleu Nuit Assorti) */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#0B132B]">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-blue-800/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-400 text-sm font-medium mb-4">
            <GraduationCap size={16} />
            Cursus Académique LMD
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Programme des <span className="text-blue-400">Études</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light">
            Découvrez la grille horaire et la répartition des enseignements par
            semestre pour chaque promotion de la Faculté des Sciences
            Informatiques.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* SÉLECTEUR DE PROMOTION (ONGLETS DE NAVIGATION) */}
        <div className="flex flex-wrap gap-2 justify-center bg-white p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-xs mb-12 overflow-x-auto">
          {programmeData.promotions.map((promo, index) => {
            const isSelected = selectedPromoIndex === index
            return (
              <button
                key={index}
                onClick={() => setSelectedPromoIndex(index)}
                className={`px-5 py-2.5 rounded-xl md:rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {promo.nom}
              </button>
            )
          })}
        </div>

        {/* AFFICHAGE DES SEMESTRES (Conteneur Dynamique) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {currentPromo.semestres.map((semestreInfo, semIndex) => (
            <div key={semIndex} className="space-y-6">
              {/* Entête du Semestre */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Calendar size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {semestreInfo.semestre}
                  </h2>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                  {semestreInfo.total_cours} cours
                </span>
              </div>

              {/* Liste des cours animée */}
              <motion.div
                key={`${selectedPromoIndex}-${semIndex}`} // Force le re-render de l'animation au changement d'onglet
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-3"
              >
                {semestreInfo.cours.map((coursNom, coursIndex) => (
                  <motion.div
                    key={coursIndex}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:border-blue-100 transition-all duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors shrink-0"></div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                        {coursNom}
                      </span>
                    </div>
                    <div className="text-slate-300 group-hover:text-blue-500 transition-colors pl-2">
                      <BookOpen size={16} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

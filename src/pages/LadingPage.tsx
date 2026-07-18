import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  BookOpen,
  FileText,
  ChevronDown,
  ArrowRight,
  Calendar,
  User,
  Loader2,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'
import { accesRapide, faqData } from '@/data/data'
import type { HomeData } from '@/types/types'
import { filieresData } from '@/data/filiere'
import { useFetchData } from '@/hooks/useQuery'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
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

const fetchHomeData = async (): Promise<HomeData> => {
  const response = await fetch(`${import.meta.env.VITE_URL_API}/accueil-site`)
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return response.json()
}

export default function LadingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const { data, isLoading, isError } = useFetchData(['actualite'], () =>
    fetchHomeData()
  )

  // Reconstruction dynamique du tableau des statistiques à partir de l'API
  const dynamicStats = data
    ? [
        { count: data.cours_count, label: 'Cours Disponibles', icon: BookOpen },
        {
          count: data.actualites.length,
          label: 'Actualités à la une',
          icon: FileText,
        },
        { count: data.photos_count, label: 'Photos de Famille', icon: User },
        { count: data.bats_count, label: 'Horaires Examens', icon: Calendar },
      ]
    : []

  // Écran de chargement pendant la récupération des données de l'API
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B132B] flex flex-col items-center justify-center text-white font-sans px-4">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin mb-4" />
        <p className="text-base sm:text-lg font-light tracking-wide text-center animate-pulse">
          Chargement de la plateforme...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-36 lg:pt-36 lg:pb-48 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[#0B132B]">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-blue-800/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              FSI-UCC Officiel
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Bienvenue à la Faculté des <br className="hidden md:block" />
              <span className="text-blue-400">Sciences Informatiques</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 font-light">
              Formons ensemble les ingénieurs et informaticiens de demain.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
              <button className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base">
                <BookOpen size={18} />
                Accéder aux cours
              </button>
              <button className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base">
                <FileText size={18} />
                Voir les annales
              </button>
            </div>
          </motion.div>

          {/* Logo optimisé pour le responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[320px] max-sm:hidden lg:max-w-125 aspect-square flex items-center justify-center"
          >
            <img
              src={LogoFsiUcc}
              alt="logo-fsi-ucc"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS OVERLAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 lg:-mt-24 mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {dynamicStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 sm:gap-5 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <stat.icon className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900">
                  {stat.count}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ACCÈS RAPIDES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 inline-block relative">
            Accès rapides
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {accesRapide.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white px-6 py-8 sm:py-10 rounded-3xl shadow-xs border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <card.icon size={28} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION FILIÈRES */}
      <section className="bg-slate-100/60 py-16 sm:py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 inline-block relative">
              Nos Filières d'Excellence
              <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
              <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-300"></div>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-5 max-w-md mx-auto px-2">
              Deux spécialisations majeures adaptées aux exigences
              technologiques mondiales pour propulser votre carrière.
            </p>
          </div>

          {/* Liste des filières alternées */}
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
                  {/* Bloc Image d'illustration */}
                  <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:h-64 overflow-hidden rounded-2xl shrink-0">
                    <img
                      src={filiere.image}
                      alt={filiere.title}
                      className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Bloc Texte */}
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

      {/* SECTION DERNIÈRES ACTUALITÉS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 mb-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 inline-block relative">
            Dernières Actualités
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-5 max-w-md mx-auto px-2">
            Restez informé sur les événements majeurs, les hackathons et la vie
            académique au sein de la FSI.
          </p>
        </div>

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
                {/* Image d'illustration */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                  <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md text-[#0D3B66] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xs uppercase tracking-wider">
                    {actu.filter_type}
                  </span>
                  <img
                    src={`http://127.0.0.1:8000/storage/${actu.image_url}`}
                    alt={actu.titre}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Corps textuel */}
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

                  {/* BOUTON LIRE LA SUITE */}
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

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 inline-block relative">
            Questions fréquemment posées
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium border-t border-slate-50 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

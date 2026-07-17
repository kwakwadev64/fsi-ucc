import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { BookOpen, FileText, ChevronDown, Network, Code, ArrowRight, Calendar, User } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'
import reseau from '@/assets/reseau.png';
import logiciel from '@/assets/conception.png';
import { accesRapide, faqData, stats } from '@/libs/data'

// Données locales pour les Filières (Réseau et Conception)
const filieresData = [
  {
    id: 'reseau',
    title: 'Réseaux & Télécommunications',
    icon: Network,
    shortDesc: 'Devenez expert dans l’architecture, la sécurisation et l’administration des infrastructures réseaux modernes.',
    details: [
      'Administration Système & Cloud',
      'Cybersécurité & Défense des données',
      'Téléphonie sur IP & Infrastructures Critiques',
      'Configuration Cisco, Huawei & Linux server'
    ],
    image : reseau
  },
  {
    id: 'conception',
    title: 'Conception & Génie Logiciel',
    icon: Code,
    shortDesc: 'Maîtrisez l’ensemble du cycle de vie des applications : de l’architecture de la base de données au design UI/UX.',
    details: [
      'Développement Web & Mobile Full-Stack',
      'Modélisation et Bases de données (SQL, NoSQL)',
      'Méthodologies Agiles & Architecture Logicielle',
      'Design d’interfaces interactives (UI/UX)'
    ],
    image: logiciel
  }
];

// Données locales pour les Dernières Actualités
const actualitesData = [
  {
    id: 1,
    title: 'Hackathon FSI Édition 2026 : Le sprint numérique de 48h est lancé',
    slug: 'hackathon-fsi-2026',
    category: 'Événement',
    date: '15 Juil 2026',
    author: 'Décanat FSI',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    desc: 'Les étudiants de la faculté s’affrontent pendant deux jours pour concevoir des solutions applicatives innovantes répondant aux défis locaux.'
  },
  {
    id: 2,
    title: 'Visite technique guidée au cœur de l’infrastructure d’un partenaire Télécom',
    slug: 'visite-technique-telecom',
    category: 'Excursion',
    date: '02 Juil 2026',
    author: 'Prof. Réseaux',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    desc: 'Immersion pratique pour nos étudiants de Master dans l’administration des datacenters et la gestion des cœurs de réseaux mobiles.'
  },
  {
    id: 3,
    title: 'Lancement de la phase de dépôt des sujets de projets de fin de cycle',
    slug: 'depot-sujets-projets-2026',
    category: 'Académique',
    date: '24 Juin 2026',
    author: 'Secrétariat FSI',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    desc: 'Les directives officielles concernant l’analyse, la modélisation et le prototypage des applications de gestion pour les finalistes.'
  }
];

export default function LadingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

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

  return (
    <div className="min-h-screen bg-slate-50 font-['Poppins',sans-serif] text-slate-900">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[#0B132B]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-800/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              FSI-UCC Officiel
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Bienvenue à la Faculté des <br className="hidden md:block" />
              <span className="text-blue-400">Sciences Informatiques</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light">
              Formons ensemble les ingénieurs et informaticiens de demain.
            </p>

            <div className="flex flex-row justify-left gap-4">
              <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer">
                <BookOpen size={20} />
                Accéder aux cours
              </button>
              <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 cursor-pointer">
                <FileText size={20} />
                Voir les annales
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex w-150 h-125"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 lg:-mt-24 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <stat.icon className="text-blue-600" size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {stat.count}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ACCÈS RAPIDES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {accesRapide.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white px-6 py-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <card.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/*SECTION FILIÈRES (NOUVEAU) */}
      <section className="bg-slate-100/60 py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête de section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
              Nos Filières d'Excellence
              <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
              <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-300"></div>
            </h2>
            <p className="text-slate-500 text-sm mt-5 max-w-md mx-auto">
              Deux spécialisations majeures adaptées aux exigences technologiques mondiales pour propulser votre carrière.
            </p>
          </div>

          {/* Liste des filières alternées */}
          <div className="flex flex-col gap-16"
          >
            {filieresData.map((filiere, index) => {
              // Alterne l'ordre : index pair = Image à gauche / index impair = Image à droite (inversé)
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={filiere.id}
                  variants={itemVariants}
                  className={`overflow-hidden shadow-sm  flex flex-col md:flex-row ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 lg:gap-12 p-6 md:p-8 items-center group hover:shadow-xl transition-all duration-300`}
                >
                  {/* Bloc Image d'illustration */}
                  <div className="w-full md:w-1/2 overflow-hidden shrink-0 ">
                    <img
                      src={filiere.image} // Remplace par filiere.image dans tes data
                      alt={filiere.title}
                      className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Bloc Texte */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center py-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {filiere.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                      {filiere.shortDesc}
                    </p>

                    <ul className="space-y-3">
                      {filiere.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION DERNIÈRES ACTUALITÉS (NOUVEAU) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
            Dernières Actualités
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
          </h2>
          <p className="text-slate-500 text-sm mt-5 max-w-md mx-auto">
            Restez informé sur les événements majeurs, les hackathons et la vie académique au sein de la FSI.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {actualitesData.map((actu) => (
            <motion.div
              key={actu.id}
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image d'illustration de l'actu */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md text-[#0D3B66] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xs uppercase tracking-wider">
                  {actu.category}
                </span>
                <img 
                  src={actu.image} 
                  alt={actu.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Corps textuel de l'actu */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Métadonnées */}
                  <div className="flex items-center gap-4 text-slate-400 text-[11px] font-bold uppercase tracking-wide mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {actu.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={13} />
                      {actu.author}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-3">
                    {actu.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 font-medium line-clamp-3 leading-relaxed mb-6">
                    {actu.desc}
                  </p>
                </div>

                {/* BOUTON LIRE LA SUITE */}
                <div className="pt-4 border-t border-slate-50">
                  <a 
                    href={`/actualites/${actu.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3B66] group-hover:text-blue-600 transition-colors uppercase tracking-wider"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
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
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 shrink-0 ml-4"
                  >
                    <ChevronDown size={20} />
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
                      <div className="px-6 pb-5 text-sm leading-relaxed text-slate-500 font-medium border-t border-slate-50 pt-2">
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
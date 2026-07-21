import { useState, useMemo } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  Users,
  GraduationCap,
  Code,
  BookOpen,
  Building2,
  UserCheck,
} from 'lucide-react'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { equipeData } from '@/data/equipeDate'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

export default function EquipePage() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('faculte')

  // Génération dynamique de l'Équipe Facultaire (Regroupement sans doublons)
  const sectionsCombinees = useMemo(() => {
    return equipeData.sections.map(section => {
      if (section.id === 'faculte') {
        const tousLesMembres = equipeData.sections
          .filter(s => s.id !== 'faculte')
          .flatMap(s => s.membres)

        const membresUniques = tousLesMembres.filter(
          (membre, idx, self) =>
            self.findIndex(m => m.nom === membre.nom) === idx
        )

        return {
          ...section,
          membres: membresUniques,
        }
      }
      return section
    })
  }, [])

  // Trouver la section sélectionnée
  const currentSection = useMemo(() => {
    return (
      sectionsCombinees.find(s => s.id === selectedSectionId) ||
      sectionsCombinees[0]
    )
  }, [selectedSectionId, sectionsCombinees])

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
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="px-4 md:px-20 w-full h-112.5 flex flex-col items-center justify-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${uccbatiment})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-400 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Membres & Collaborateurs
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Notre <span className="text-blue-400">Équipe</span> & Lauréats
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light">
            Découvrez la délégation facultaire, les chefs de promotion ainsi que
            l'équipe technique derrière la plateforme.
          </p>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* SÉLECTEUR DE SECTIONS (ONGLETS) */}
        <div className="relative w-full mb-8">
          <div className="flex md:flex-wrap gap-2 justify-start md:justify-center items-center bg-white p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-sm overflow-x-auto md:overflow-x-visible select-none scrollbar-none [&::-webkit-scrollbar]:hidden snap-x snap-mandatory px-4 md:px-2">
            {sectionsCombinees.map(section => {
              const isSelected = selectedSectionId === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-semibold transition-transform duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 shrink-0 snap-center active:scale-98 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {section.id === 'faculte' && (
                    <Users className="w-4 h-4 shrink-0" />
                  )}
                  {section.id === 'gouvernement' && (
                    <Building2 className="w-4 h-4 shrink-0" />
                  )}
                  {section.id === 'cp_cpa' && (
                    <UserCheck className="w-4 h-4 shrink-0" />
                  )}
                  {section.id === 'developpeurs' && (
                    <Code className="w-4 h-4 shrink-0" />
                  )}
                  {section.id !== 'faculte' &&
                    section.id !== 'gouvernement' &&
                    section.id !== 'cp_cpa' &&
                    section.id !== 'developpeurs' && (
                      <GraduationCap className="w-4 h-4 shrink-0" />
                    )}
                  <span>{section.titre}</span>
                </button>
              )
            })}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-r from-transparent to-slate-50 pointer-events-none md:hidden rounded-r-2xl" />
        </div>

        {/* DESCRIPTION DE LA SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
            {currentSection.description}
          </p>
        </div>

        {/* GRILLE DES MEMBRES */}
        <motion.div
          key={selectedSectionId}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentSection.membres.map((membre, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
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
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500 font-bold text-3xl">
                      {membre.nom
                        .split(' ')
                        .map(n => n[0])
                        .join('')
                        .slice(0, 2)}
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
              {(membre.portfolio || membre.github || membre.linkedin) && (
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
          ))}
        </motion.div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

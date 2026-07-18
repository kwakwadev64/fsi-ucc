import { useState, useMemo } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Users, GraduationCap, Code, BookOpen } from 'lucide-react'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { equipeData } from '@/data/equipeDate'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

export default function EquipePage() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('faculte')

  // Génération dynamique de l'Équipe Facultaire complète (Développeurs + Licence + Master sans doublons de noms)
  const sectionsCombinees = useMemo(() => {
    return equipeData.sections.map(section => {
      if (section.id === 'faculte') {
        // Collecte tous les membres des autres sections
        const tousLesMembres = equipeData.sections
          .filter(s => s.id !== 'faculte')
          .flatMap(s => s.membres)

        // Filtrer les doublons éventuels au cas où un membre est dans deux groupes
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

  // Trouver la section courante sélectionnée
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

      {/* HERO SECTION COMPATIBLE DESIGN FSI */}
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
            Découvrez nos ressortissants d’exception ayant soutenu leurs
            mémoires de fin d'études ainsi que la cellule technique derrière la
            plateforme.
          </p>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* SÉLECTEUR DE SECTIONS (ONGLETS DE NAVIGATION) */}
        <div className="relative w-full mb-8">
          {/* Conteneur avec défilement horizontal fluide sur mobile, centré et wrappé sur desktop */}
          <div className="flex md:flex-wrap gap-2 justify-start md:justify-center items-center bg-white p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-sm overflow-x-auto md:overflow-x-visible select-none scrollbar-none [&::-webkit-scrollbar]:hidden snap-x snap-mandatory px-4 md:px-2">
            {sectionsCombinees.map(section => {
              const isSelected = selectedSectionId === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-semibold transition-transform duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 shrink-0 snap-center  active:scale-98 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {section.id === 'developpeurs' && (
                    <Code className="w-4 h-4 shrink-0" />
                  )}
                  {section.id === 'faculte' && (
                    <Users className="w-4 h-4 shrink-0" />
                  )}
                  {section.id !== 'developpeurs' &&
                    section.id !== 'faculte' && (
                      <GraduationCap className="w-4 h-4 shrink-0" />
                    )}
                  <span>{section.titre}</span>
                </button>
              )
            })}
          </div>

          {/* L'effet de fondu visuel (Gradient Fade) exclusif au mobile pour indiquer le scroll restant */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-r from-transparent to-slate-50 pointer-events-none md:hidden rounded-r-2xl" />
        </div>

        {/* DESCRIPTION DE LA SECTION COURANTE */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
            {currentSection.description}
          </p>
        </div>

        {/* GRILLE DES MEMBRES ANIMÉE */}
        <motion.div
          key={selectedSectionId}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {currentSection.membres.map((membre, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    {membre.avatarUrl ? (
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-100 shadow-inner shrink-0 bg-slate-100">
                        <img
                          src={membre.avatarUrl}
                          alt={membre.nom}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0 text-lg">
                        {membre.nom
                          .split(' ')
                          .map(n => n[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                    )}

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                        {membre.nom}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 bg-blue-50/50 inline-block px-2 py-0.5 rounded-md mt-1">
                        {membre.role}
                      </p>
                    </div>
                  </div>

                  {/* LIENS RÉSEAUX ET PORTFOLIO */}
                  <div className="flex items-center gap-1 text-slate-400">
                    {membre.portfolio && (
                      <a
                        href={membre.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-600 p-1.5 transition-colors duration-200"
                        title="Voir le portfolio"
                      >
                        <LuGlobe className="w-4 h-4" />
                      </a>
                    )}
                    {membre.github && (
                      <a
                        href={membre.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-slate-900 p-1.5 transition-colors duration-200"
                      >
                        <LuGithub className="w-4 h-4" />
                      </a>
                    )}
                    {membre.linkedin && (
                      <a
                        href={membre.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 p-1.5 transition-colors duration-200"
                      >
                        <LuLinkedin className="w-4 h-4" />
                      </a>
                    )}
                    {!membre.github &&
                      !membre.linkedin &&
                      !membre.portfolio && (
                        <div className="text-slate-300 group-hover:text-blue-500 transition-colors p-1.5">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                      )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  {membre.description}
                </p>

                {membre.sujetMemoire && (
                  <div className="bg-slate-50/60 border border-slate-100 p-3.5 rounded-xl space-y-1 group-hover:bg-blue-50/20 group-hover:border-blue-100/40 transition-colors duration-300">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                      <BookOpen className="w-3 h-3" />
                      <span>Sujet de Mémoire soutenu</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic font-light">
                      "{membre.sujetMemoire}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

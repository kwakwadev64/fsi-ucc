import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  Users,
  GraduationCap,
  Code,
  BookOpen,
  Building2,
  UserCheck,
  ChevronDown,
  UsersRound,
} from 'lucide-react'
import { LuLinkedin, LuGithub, LuGlobe } from 'react-icons/lu'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { equipeData } from '@/data/equipeDate'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

// ---------------------------------------------------------------------
// CONFIG : ANNÉES ACADÉMIQUES DISPONIBLES (pour le sélecteur)
// ---------------------------------------------------------------------
const ANNEES_ACADEMIQUES = ['2026-2027', '2025-2026']

// ---------------------------------------------------------------------
// CONFIG : ICÔNES PAR SECTION
// ---------------------------------------------------------------------
function IconeSection({ id }: { id: string }) {
  switch (id) {
    case 'faculte':
      return <Users className="w-4 h-4 shrink-0" />
    case 'gouvernement':
      return <Building2 className="w-4 h-4 shrink-0" />
    case 'cp_cpa':
      return <UserCheck className="w-4 h-4 shrink-0" />
    case 'developpeurs':
      return <Code className="w-4 h-4 shrink-0" />
    default:
      return <GraduationCap className="w-4 h-4 shrink-0" />
  }
}

export default function EquipePage() {
  // Liste des années académiques disponibles (config + données)
  const anneesDisponibles = useMemo(() => {
    const anneesData = equipeData.sections.map(s => s.annee)
    const toutesAnnees = new Set([...ANNEES_ACADEMIQUES, ...anneesData])
    return Array.from(toutesAnnees).sort().reverse() // plus récent en premier
  }, [])

  const [selectedAnnee, setSelectedAnnee] = useState<string>(
    anneesDisponibles[0]
  )
  const [selectedSectionId, setSelectedSectionId] = useState<string>('faculte')

  // Sections correspondant à l'année sélectionnée
  const sectionsAnnee = useMemo(
    () => equipeData.sections.filter(s => s.annee === selectedAnnee),
    [selectedAnnee]
  )

  // Génération dynamique de l'Équipe Facultaire (regroupement sans doublons)
  // Cas gérés : aucune autre section pour l'année -> "faculte" reste vide ;
  // section "faculte" absente dans les données -> on la construit nous-mêmes
  // pour qu'elle soit toujours disponible en premier onglet.
  const sectionsCombinees = useMemo(() => {
    const autresSections = sectionsAnnee.filter(s => s.id !== 'equipe')
    const tousLesMembres = autresSections.flatMap(s => s.membres)
    const membresUniques = tousLesMembres.filter(
      (membre, idx, self) => self.findIndex(m => m.nom === membre.nom) === idx
    )

    const sectionFaculteExistante = sectionsAnnee.find(s => s.id === 'equipe')
    const sectionFaculte = {
      ...(sectionFaculteExistante ?? {
        id: 'equipe',
        titre: 'faculté',
        description:
          "L'ensemble des forces vives de notre faculté : membres du gouvernement étudiant, chefs de promotion et équipe de développement.",
      }),
      membres: membresUniques,
    }

    // "faculte" toujours en tête, suivie des autres sections dans leur ordre
    return [sectionFaculte, ...autresSections]
  }, [sectionsAnnee])

  // Si l'onglet sélectionné n'existe plus pour l'année choisie (ex: une
  // catégorie n'a pas de données cette année-là), on retombe proprement
  // sur "faculte" plutôt que de laisser l'UI sans onglet actif.
  useEffect(() => {
    const existeEncore = sectionsCombinees.some(s => s.id === selectedSectionId)
    if (!existeEncore) {
      setSelectedSectionId('faculte')
    }
  }, [sectionsCombinees, selectedSectionId])

  const currentSection =
    sectionsCombinees.find(s => s.id === selectedSectionId) ??
    sectionsCombinees[0]

  const aucuneDonneeAnnee = sectionsCombinees.every(s => s.membres.length === 0)

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-center">
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
        {/* SÉLECTEUR D'ANNÉE ACADÉMIQUE */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <label
            htmlFor="annee-select"
            className="text-sm font-semibold text-slate-500"
          >
            Année académique
          </label>
          <div className="relative">
            <select
              id="annee-select"
              value={selectedAnnee}
              onChange={e => setSelectedAnnee(e.target.value)}
              className="appearance-none pl-5 pr-10 py-2.5 rounded-full text-sm font-semibold bg-white border border-slate-200 shadow-sm text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/30 hover:border-blue-300 transition-colors"
            >
              {anneesDisponibles.map(annee => (
                <option key={annee} value={annee}>
                  {annee}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-blue-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* SÉLECTEUR DE SECTIONS (ONGLETS) */}
        <div className="relative w-full mb-8">
          <div className="flex  gap-2 justify-start  items-center bg-white p-2 rounded-2xl md:rounded-full border border-slate-100 shadow-sm overflow-x-auto md:overflow-x-auto select-none scrollbar-none [&::-webkit-scrollbar]:hidden snap-x snap-mandatory px-4 md:px-2">
            {sectionsCombinees.map(section => {
              const isSelected = selectedSectionId === section.id
              const nbMembres = section.membres.length
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  disabled={nbMembres === 0}
                  className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 shrink-0 snap-center active:scale-98 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : nbMembres === 0
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 cursor-pointer'
                  }`}
                >
                  <IconeSection id={section.id} />
                  <span>{section.titre}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {nbMembres}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-r from-transparent to-slate-50 pointer-events-none md:hidden rounded-r-2xl" />
        </div>

        {/* DESCRIPTION DE LA SECTION */}
        {currentSection?.description && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
              {currentSection.description}
            </p>
          </div>
        )}

        {/* ÉTAT VIDE GLOBAL : aucune donnée pour l'année sélectionnée */}
        {aucuneDonneeAnnee ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <UsersRound className="w-7 h-7 text-slate-400" />
            </div>
            <p className="text-slate-500 font-medium">
              Aucune équipe enregistrée pour l'année {selectedAnnee}.
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Essayez de sélectionner une autre année académique.
            </p>
          </div>
        ) : currentSection && currentSection.membres.length === 0 ? (
          /* ÉTAT VIDE PAR SECTION : la catégorie existe mais n'a pas de membres */
          <div className="flex flex-col items-center justify-center text-center py-20 px-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <IconeSection id={currentSection.id} />
            </div>
            <p className="text-slate-500 font-medium">
              Aucun membre enregistré dans « {currentSection.titre} » pour{' '}
              {selectedAnnee}.
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {/* GRILLE DES MEMBRES */}
            <motion.div
              key={`${selectedAnnee}-${selectedSectionId}`}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {currentSection?.membres.map((membre, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
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
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 text-slate-500 font-bold text-3xl">
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
          </AnimatePresence>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

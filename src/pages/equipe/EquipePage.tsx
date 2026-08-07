import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useEquipeSelection } from '@/pages/equipe/hooks/useEquipeSelection'
import EquipeHero from './components/EquipeHero'
import AnneeSelector from './components/AnneeSelector'
import SectionTabs from './components/SectionTabs'
import EmptyState from './components/EmptyState'
import MembresGrid from './components/MembresGrid'

export default function EquipePage() {
  const {
    loading,
    anneesDisponibles,
    selectedAnnee,
    setSelectedAnnee,
    selectedSectionId,
    setSelectedSectionId,
    sectionsCombinees,
    currentSection,
    aucuneDonneeAnnee,
  } = useEquipeSelection()

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <EquipeHero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
            <p className="mt-4 text-sm text-slate-500 font-light">
              Chargement de l&apos;équipe...
            </p>
          </div>
        ) : (
          <>
            <AnneeSelector
              anneesDisponibles={anneesDisponibles}
              selectedAnnee={selectedAnnee}
              onChange={setSelectedAnnee}
            />

            <SectionTabs
              sections={sectionsCombinees}
              selectedSectionId={selectedSectionId}
              onSelect={setSelectedSectionId}
            />

            {currentSection?.description && (
              <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
                  {currentSection.description}
                </p>
              </div>
            )}

            {aucuneDonneeAnnee ? (
              <EmptyState variant="annee" selectedAnnee={selectedAnnee} />
            ) : currentSection && currentSection.membres.length === 0 ? (
              <EmptyState
                variant="section"
                selectedAnnee={selectedAnnee}
                sectionId={currentSection.id}
                sectionTitre={currentSection.titre}
              />
            ) : (
              currentSection && (
                <MembresGrid
                  membres={currentSection.membres}
                  animationKey={`${selectedAnnee}-${selectedSectionId}`}
                />
              )
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

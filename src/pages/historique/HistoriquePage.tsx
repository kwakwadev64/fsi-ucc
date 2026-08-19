import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import { historiqueData } from '@/pages/historique/data/HistoriqueData'
import { useEpoqueNavigation } from './hooks/useEpoqueNavigation'
import HistoriqueHero from './components/HistoriqueHero'
import EpoqueFilterNav from './components/EpoqueFilterNav'
import EpoqueSection from './components/EpoqueSection'
import CtaFootnote from './components/CtaFootnote'

export default function HistoriquePage() {
  const { activeEpoque, scrollToSection } = useEpoqueNavigation()

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <HistoriqueHero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <EpoqueFilterNav
          epoques={historiqueData.epoques}
          activeEpoque={activeEpoque}
          onSelect={scrollToSection}
        />

        <div className="relative px-2 sm:px-4 lg:px-0">
          {historiqueData.epoques.map(epoque => (
            <EpoqueSection key={epoque.id} epoque={epoque} />
          ))}
        </div>

        <CtaFootnote />
      </main>

      <Footer />
    </div>
  )
}

//ok

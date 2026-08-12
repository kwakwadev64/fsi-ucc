import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useDelegueHistorique } from './hooks/useDelegueHistorique'
import HistoriqueHero from './components/HistoriqueHero'
import EmptyState from './components/EmptyState'
import DelegueHistoriqueGrid from './components/DelegueHistoriqueGrid'

export default function HistoriqueDeleguePage() {
  const { delegues, loading, aucuneDonnee } = useDelegueHistorique()

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <HistoriqueHero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
            <p className="mt-4 text-sm text-slate-500 font-light">
              Chargement de l&apos;historique...
            </p>
          </div>
        ) : aucuneDonnee ? (
          <EmptyState />
        ) : (
          <DelegueHistoriqueGrid delegues={delegues} />
        )}
      </main>

      <Footer />
    </div>
  )
}

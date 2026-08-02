import { Loader2 } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/pages/landing/components/HeroSection'
import FloatingDownloadButton from '@/pages/landing/components/FloatingDownloadButton'
import StatsSection from '@/pages/landing/components/StatsSection'
import QuickAccessSection from '@/pages/landing/components/QuickAccessSection'
import FilieresSection from '@/pages/landing/components/FilieresSection'
import ActualitesSection from '@/pages/landing/components/ActualitesSection'
import FaqSection from '@/pages/landing/components/FaqSection'
import type { HomeData } from '@/types/types'
import { useFetchData } from '@/hooks/useQuery'
import { env } from '@/config/env'

const fetchHomeData = async (): Promise<HomeData> => {
  const response = await fetch(`${env.VITE_API_URL}/accueil-site`)
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return response.json()
}

export default function LandingPage() {
  const { data, isLoading, isError } = useFetchData(
    ['actualite'],
    fetchHomeData
  )

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
      <Navbar />
      <FloatingDownloadButton />
      <HeroSection />
      {data && <StatsSection data={data} />}
      <QuickAccessSection />
      <FilieresSection />
      <ActualitesSection data={data} isError={isError} />
      <FaqSection />
      <Footer />
    </div>
  )
}

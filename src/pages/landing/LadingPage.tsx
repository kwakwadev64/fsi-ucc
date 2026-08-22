import axios from 'axios'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import HeroSection from '@/pages/landing/components/HeroSection'
import FloatingDownloadButton from '@/pages/landing/components/FloatingDownloadButton'
import StatsSection from '@/pages/landing/components/StatsSection'
import QuickAccessSection from '@/pages/landing/components/QuickAccessSection'
import FilieresSection from '@/pages/landing/components/FilieresSection'
import ActualitesSection from '@/pages/landing/components/ActualitesSection'
import FaqSection from '@/pages/landing/components/FaqSection'
import type { HomeData } from './types/types'
import { useFetchData } from '@/hooks/useQuery'
import { env } from '@/config/env'
import TeamPreview from './components/TeamPreview'
import CareerOutcomes from './components/CareerOutcomes'
import Testimonials from './components/Testimonials'
import { testimonials } from './data/testamonial'
import PartnersStrip from './components/PartnersStrip'

const fetchHomeData = async (): Promise<HomeData> => {
  const { data } = await axios.get<HomeData>(`${env.VITE_API_URL}/accueil-site`)

  if (!data) {
    throw new Error('Erreur lors de la récupération des données')
  }

  return data || []
}

export default function LandingPage() {
  const { data, isLoading, isError } = useFetchData(
    ['actualite'],
    fetchHomeData
  )

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <FloatingDownloadButton />
      <HeroSection />
      {data && <StatsSection data={data} />}
      <QuickAccessSection />
      <FilieresSection />
      <TeamPreview />
      {/* CareerOutcomes et PartnersStrip restent masqués tant qu'aucune donnée réelle n'est fournie */}
      <CareerOutcomes />
      <ActualitesSection data={data} isError={isError} loading={isLoading} />
      <Testimonials testimonials={testimonials} />
      <PartnersStrip />
      <FaqSection />
      <Footer />
    </div>
  )
}

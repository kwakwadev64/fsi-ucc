import { getHomeData } from '@/entities/actualite/api'
import { useFetchData } from '@/shared/api/query'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import QuickAccessSection from './components/QuickAccessSection'
import FilieresSection from './components/FilieresSection'
import TeamPreview from './components/TeamPreview'
import ActualitesSection from './components/ActualitesSection'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import HomeCta from './components/HomeCta'
import { testimonials } from './data/testamonial'

export default function LandingPage() {
  const { data, isLoading, isError } = useFetchData(['home'], getHomeData)

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-950">
      <main>
        <HeroSection />
        <StatsSection />
        <QuickAccessSection />
        <FilieresSection />
        <TeamPreview limit={8} />
        <ActualitesSection data={data} isError={isError} loading={isLoading} />
        <Testimonials testimonials={testimonials} />
        <FaqSection />
        <HomeCta />
      </main>
    </div>
  )
}

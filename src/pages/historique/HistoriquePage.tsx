import { motion, type Variants } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { historiqueData } from '@/data/HistoriqueData'
import { useEpoqueNavigation } from './hooks/useEpoqueNavigation'
import HistoriqueHero from './components/HistoriqueHero'
import EpoqueFilterNav from './components/EpoqueFilterNav'
import EpoqueSection from './components/EpoqueSection'
import CtaFootnote from './components/CtaFootnote'

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
}

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
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-slate-200 to-blue-600 origin-top transform lg:-translate-x-1/2"
          />

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

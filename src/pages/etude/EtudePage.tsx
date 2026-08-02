import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import programmeData from '@/data/programme-fsi.json'
import EtudeHero from './components/EtudeHero'
import PromotionTabs from './components/PromotionTabs'
import SemestreColumn from './components/SemestreColumn'

export default function EtudePage() {
  // Par défaut, on sélectionne la première promotion du JSON (L1)
  const [selectedPromoIndex, setSelectedPromoIndex] = useState<number>(0)

  const currentPromo = programmeData.promotions[selectedPromoIndex]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <EtudeHero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <PromotionTabs
          promotions={programmeData.promotions}
          selectedIndex={selectedPromoIndex}
          onSelect={setSelectedPromoIndex}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {currentPromo.semestres.map((semestreInfo, semIndex) => (
            <SemestreColumn
              key={semIndex}
              semestreInfo={semestreInfo}
              animationKey={`${selectedPromoIndex}-${semIndex}`}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

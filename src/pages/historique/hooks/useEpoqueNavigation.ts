import { useState } from 'react'
import { historiqueData } from '@/pages/historique/data/HistoriqueData'

export function useEpoqueNavigation() {
  const [activeEpoque, setActiveEpoque] = useState<string>(
    historiqueData.epoques[0].id
  )

  const scrollToSection = (id: string) => {
    setActiveEpoque(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return { activeEpoque, scrollToSection }
}

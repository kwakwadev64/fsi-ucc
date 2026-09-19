import { Route, Routes } from 'react-router-dom'
import PublicLayout from '@/app/layouts/PublicLayout'
import LandingPage from '@/pages/home/LadingPage'
import ContactPage from '@/pages/contact/contactPage'
import EtudesPage from '@/pages/etudes/EtudePage'
import GaleriePage from '@/pages/galerie/galeriePage'
import HistoriquePage from '@/pages/historique/HistoriquePage'
import EquipePage from '@/pages/equipe/EquipePage'
import NewsDetailPage from '@/pages/actualites/NewsDetailPage'
import DeleguesPage from '@/pages/delegues/DeleguePage'

function NotFound() {
  return <main className="flex min-h-[60vh] items-center justify-center text-xl font-semibold">Page introuvable</main>
}

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="actualites/:id" element={<NewsDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="etude" element={<EtudesPage />} />
        <Route path="equipe" element={<EquipePage />} />
        <Route path="historique" element={<HistoriquePage />} />
        <Route path="galerie" element={<GaleriePage />} />
        <Route path="delegue" element={<DeleguesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

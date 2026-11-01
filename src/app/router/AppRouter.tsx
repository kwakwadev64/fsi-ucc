import { Link, Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '@/app/layouts/PublicLayout'
import LandingPage from '@/pages/home/LadingPage'
import ContactPage from '@/pages/contact/contactPage'
import EtudesPage from '@/pages/etudes/EtudePage'
import GaleriePage from '@/pages/galerie/galeriePage'
import HistoriquePage from '@/pages/historique/HistoriquePage'
import EquipePage from '@/pages/equipe/EquipePage'
import NewsDetailPage from '@/pages/actualites/NewsDetailPage'
import DeleguesPage from '@/pages/delegues/DeleguePage'
import FormationsPage from '@/pages/formations/FormationsPage'

function NotFound() {
  return (
    <main className="flex min-h-[55vh] flex-col items-center justify-center bg-slate-50 px-5 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Erreur 404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950">Page introuvable</h1>
      <Link to="/" className="mt-5 border border-blue-700 bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800">
        Retour à l’accueil
      </Link>
    </main>
  )
}

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="actualites/:id" element={<NewsDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="formations" element={<FormationsPage />} />
        <Route path="formation" element={<FormationsPage />} />
        <Route path="evenements" element={<Navigate to="/formations" replace />} />
        <Route path="evenement" element={<Navigate to="/formations" replace />} />
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

import { Routes, Route, Link } from 'react-router-dom'
import LadingPage from '@/pages/landing/LadingPage'
import ContactPage from '@/pages/contact/contactPage'
import EtudePage from '@/pages/etude/EtudePage'
import GalerieFSI from '@/pages/galerie/galeriePage'
import LoginPage from '@/pages/forms/login'
import RegisterPage from './pages/forms/RegisterPage'
import { Toaster } from 'sonner'
import HistoriquePage from './pages/historique/HistoriquePage'
import EquipePage from './pages/equipe/EquipePage'
import NewsDetailPage from './pages/NewsDetailsPage'
import DeleguePage from './pages/delegue/DeleguePage'

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page introuvable
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      <Routes>
        <Route path="/" element={<LadingPage />} />{' '}
        <Route path="/actualites/:id" element={<NewsDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/etude" element={<EtudePage />} />
        <Route path="/equipe" element={<EquipePage />} />
        <Route path="/historique" element={<HistoriquePage />} />
        <Route path="/galerie" element={<GalerieFSI />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/delegue" element={<DeleguePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

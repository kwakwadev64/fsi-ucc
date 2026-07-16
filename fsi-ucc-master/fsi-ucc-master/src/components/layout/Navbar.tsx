import {
  Home,
  GraduationCap,
  ChevronDown,
  Users,
  Clock,
  ImageIcon,
  Mail,
} from 'lucide-react'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'
import { Link, useLocation } from 'react-router-dom' // 1. Ajout de useLocation pour gérer l'état actif

const Navbar = () => {
  const location = useLocation() // Permet de savoir sur quelle page on se trouve

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={LogoFsiUcc} alt="logo-fsi-ucc" className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-slate-900 tracking-tight">
                FSI-UCC
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Faculté des Sciences Informatiques
              </span>
            </div>
          </Link>

          {/* Menu Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
            {/* Lien Accueil */}
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600 hover:text-blue-700' 
                  : 'hover:text-blue-600'
              }`}
            >
              <Home size={18} /> Accueil
            </Link>

            {/* Lien Études - Redirige maintenant vers /etude */}
            <Link
              to="/etude"
              className={`flex items-center gap-1 transition-colors ${
                location.pathname === '/etude' 
                  ? 'text-blue-600 hover:text-blue-700' 
                  : 'hover:text-blue-600'
              }`}
            >
              <GraduationCap size={18} /> Études
            </Link>

            {/* Reste des liens inchangés (en attendant la création de leurs pages) */}
            <a
              href="#"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Users size={18} /> Équipe
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Clock size={18} /> Historique
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <ImageIcon size={18} /> Galerie
            </a>
            
            {/* Lien Contact */}
            <Link
              to="/contact"
              className={`flex items-center gap-2 transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-blue-600 hover:text-blue-700' 
                  : 'hover:text-blue-600'
              }`}
            >
              <Mail size={18} /> Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
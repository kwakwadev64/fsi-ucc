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
import { Link } from 'react-router-dom'

const Navbar = () => {
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
            <a
              href="#"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Home size={18} /> Accueil
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <GraduationCap size={18} /> Études{' '}
              <ChevronDown size={14} className="mt-0.5" />
            </a>
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
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
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

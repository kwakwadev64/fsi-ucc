import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  GraduationCap,
  Users,
  Clock,
  ImageIcon,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation() // Permet de savoir quel onglet est actif dynamiquement

  const navLinks = [
    { to: '/', label: 'Accueil', icon: Home },
    { to: '/etude', label: 'Études', icon: GraduationCap },
    { to: '/equipe', label: 'Équipe', icon: Users },
    { to: '/historique', label: 'Historique', icon: Clock },
    { to: '/galerie', label: 'Galerie', icon: ImageIcon },
    { to: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO & BRANDING */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0 z-50"
          >
            <img
              src={LogoFsiUcc}
              alt="logo-fsi-ucc"
              className="w-12 h-12 sm:w-16 sm:h-16 shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-lg sm:text-xl leading-tight text-slate-900 tracking-tight">
                FSI-UCC
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">
                Faculté des Sciences Informatiques
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION (Visible uniquement sur les écrans larges) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium">
            {navLinks.map(link => {
              const Icon = link.icon
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 py-2 px-1 relative transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* MOBILE MENU BUTTON (Visible uniquement sur mobile/tablette) */}
          <div className="flex lg:hidden items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-50 focus:outline-hidden transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map(link => {
                const Icon = link.icon
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)} // Ferme le menu au clic
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isActive ? 'text-blue-600' : 'text-slate-400'}
                    />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

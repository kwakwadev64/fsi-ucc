import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoFsiUcc from '@/shared/assets/logo_fsi_tranparent.png'

const navigation = [
  { to: '/', label: 'Accueil' },
  { to: '/formations', label: 'Formations' },
  { to: '/etude', label: 'Espace étudiant' },
  { to: '/evenements', label: 'Événements' },
  { to: '/historique', label: 'La faculté' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
]

const admissionUrl = 'https://e-acade.ucc.ac.cd/registration/program'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="border-b border-white/10 bg-[#102D4D] text-white">
        <div className="mx-auto flex min-h-9 max-w-[90rem] items-center justify-between gap-4 px-4 text-[11px] sm:px-6 lg:px-10">
          <span className="truncate font-medium text-blue-100">
            Université Catholique du Congo <span className="mx-1 text-cyan-300">/</span> Faculté des Sciences Informatiques
          </span>
          <div className="hidden shrink-0 items-center gap-6 sm:flex">
            <Link to="/contact" className="text-blue-100 transition hover:text-white">
              Demande d’information
            </Link>
            <a href="https://e-acade.ucc.ac.cd/" target="_blank" rel="noopener noreferrer" className="text-blue-100 transition hover:text-white">
              Espace étudiant
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-[78px] max-w-[90rem] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <img src={LogoFsiUcc} alt="Logo de la Faculté des Sciences Informatiques" className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14" />
          <span className="min-w-0">
            <span className="block text-base font-bold leading-tight tracking-tight text-slate-950 sm:text-lg">FSI-UCC</span>
            <span className="mt-1 hidden max-w-52 text-[11px] leading-tight text-slate-600 sm:block">
              Faculté des Sciences Informatiques
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-3 xl:flex 2xl:gap-4">
          {navigation.map(item => {
            const active = isActive(item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={`relative whitespace-nowrap py-3 text-[11px] font-semibold transition-colors 2xl:text-xs ${
                  active ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                {item.label}
                {active && <span className="absolute inset-x-0 -bottom-px h-[2px] bg-cyan-500" />}
              </Link>
            )
          })}
        </nav>

        <a
          href={admissionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 shrink-0 items-center justify-center border border-blue-700 bg-blue-700 px-4 text-xs font-semibold text-white transition hover:border-blue-800 hover:bg-blue-800 2xl:inline-flex"
        >
          Candidater
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(open => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border border-slate-300 text-slate-800 transition hover:border-blue-700 hover:text-blue-700 xl:hidden"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" aria-label="Navigation mobile" className="border-t border-slate-200 bg-white px-4 py-3 xl:hidden">
          <div className="mx-auto grid max-w-[90rem] sm:grid-cols-2">
            {navigation.map(item => {
              const active = isActive(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b border-slate-100 px-2 py-3 text-sm font-semibold transition-colors ${
                    active ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <a href={admissionUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 w-fit items-center border border-blue-700 bg-blue-700 px-4 text-sm font-semibold text-white sm:col-span-2">
              Candidater
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

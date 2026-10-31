import { Clock3, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import LogoFsiUcc from '@/shared/assets/logo_fsi_tranparent.png'

const pages = [
  { to: '/formations', label: 'Formations' },
  { to: '/etude', label: 'Cours et promotions' },
  { to: '/evenements', label: 'Événements' },
  { to: '/equipe', label: 'Équipe facultaire' },
  { to: '/historique', label: 'Historique' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t-4 border-cyan-500 bg-[#102D4D] text-blue-100">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-12 sm:px-8 sm:py-14 md:grid-cols-[1.1fr_0.8fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <img src={LogoFsiUcc} alt="" className="h-12 w-12 object-contain" />
            <span>
              <span className="block text-base font-bold">FSI-UCC</span>
              <span className="mt-1 block text-[11px] text-blue-200">Université Catholique du Congo</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/75">
            La Faculté des Sciences Informatiques forme les futurs professionnels du numérique au sein de l’Université Catholique du Congo.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://web.facebook.com/profile.php?id=61592770722242"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de la FSI-UCC"
              className="flex h-10 w-10 items-center justify-center border border-white/25 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-white/10"
            >
              f
            </a>
            <a
              href="https://www.linkedin.com/company/facult%C3%A9-des-sciences-informatique-ucc/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de la FSI-UCC"
              className="flex h-10 w-10 items-center justify-center border border-white/25 text-xs font-bold text-white transition hover:border-cyan-300 hover:bg-white/10"
            >
              in
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Explorer le site</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-blue-100/75 sm:grid-cols-1">
            {pages.map(page => (
              <li key={page.to}>
                <Link to={page.to} className="transition hover:text-white">{page.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Nous trouver</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-blue-100/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-cyan-300" size={17} aria-hidden="true" />
              <span>2 Avenue de l’Université, Kinshasa, RDC</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 shrink-0 text-cyan-300" size={17} aria-hidden="true" />
              <span>contact@fsiucc.com<br />infosupport@fsiucc.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock3 className="mt-0.5 shrink-0 text-cyan-300" size={17} aria-hidden="true" />
              <span>Lun. – Ven. : 08h00 – 16h00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-2 px-5 py-5 text-[11px] leading-5 text-blue-100/60 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 FSI-UCC. Tous droits réservés.</p>
          <p>Conçu et développé par le Département d’Informatique – UCC</p>
        </div>
      </div>
    </footer>
  )
}

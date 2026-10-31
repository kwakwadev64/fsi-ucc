import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Choisir une filière',
    description: 'Consultez les parcours en Réseaux & Télécommunications ou en Génie logiciel.',
    href: '/formations',
    label: 'Voir les formations',
    external: false,
  },
  {
    number: '02',
    title: 'Vérifier les démarches',
    description: 'Retrouvez les informations d’inscription sur la plateforme officielle de l’UCC.',
    href: 'https://e-acade.ucc.ac.cd/registration/program',
    label: 'Ouvrir la plateforme',
    external: true,
  },
  {
    number: '03',
    title: 'Poser une question',
    description: 'L’équipe facultaire peut vous orienter sur les études et la vie à la FSI.',
    href: '/contact',
    label: 'Contacter la faculté',
    external: false,
  },
]

export default function AdmissionsSection() {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">Admission</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Préparer son inscription</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-slate-600">
            Parcourez les formations, consultez les démarches de l’UCC et contactez la faculté si besoin.
          </p>
        </div>

        <ol className="grid border-l border-t border-slate-200 md:grid-cols-3">
          {steps.map(step => (
            <li key={step.number} className="flex min-h-48 flex-col border-b border-r border-slate-200 px-5 py-5 sm:px-6">
              <span className="text-xs font-bold text-blue-700">{step.number}</span>
              <h3 className="mt-3 text-base font-bold text-slate-950">{step.title}</h3>
              <p className="mt-2 max-w-sm text-xs leading-6 text-slate-600 sm:text-sm">{step.description}</p>
              {step.external ? (
                <a href={step.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-xs font-bold text-[#0D3B66] hover:text-blue-700">
                  {step.label}<ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : (
                <Link to={step.href} className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-xs font-bold text-[#0D3B66] hover:text-blue-700">
                  {step.label}<ArrowRight size={14} aria-hidden="true" />
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

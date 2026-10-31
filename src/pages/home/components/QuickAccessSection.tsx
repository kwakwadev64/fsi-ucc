import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { accesRapide } from '../data/accesRapide'

export default function QuickAccessSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">
              Espace étudiant
            </p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              Accès rapides
            </h2>
          </div>
          <p className="max-w-lg text-xs leading-6 text-slate-600 sm:text-sm">
            Les ressources de cours et les informations utiles à votre promotion.
          </p>
        </div>

        <div className="grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {accesRapide.map(card => {
            const Icon = card.icon
            const to = card.link === '/archive' || card.link === '/Calendar' ? '/etude' : card.link
            return (
              <Link
                key={card.title}
                to={to}
                className="group flex min-h-32 items-start gap-4 border-b border-r border-slate-200 bg-white px-4 py-5 transition-colors hover:bg-slate-50 sm:px-5"
              >
                <Icon size={20} className="mt-0.5 shrink-0 text-blue-700" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    {card.title}
                    <ArrowRight size={14} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" aria-hidden="true" />
                  </span>
                  <span className="mt-2 block text-xs leading-5 text-slate-600">{card.desc}</span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

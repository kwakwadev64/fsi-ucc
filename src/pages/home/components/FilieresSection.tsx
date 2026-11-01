import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { filieresData } from '../data/filiere'

export default function FilieresSection() {
  return (
    <section id="filieres" className="scroll-mt-32 bg-slate-50 px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">Filières</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
              Choisir sa filière
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Les deux filières principales de la Faculté des Sciences Informatiques.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filieresData.map(filiere => {
            const Icon = filiere.icon
            return (
              <article key={filiere.id} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-56 bg-slate-200 sm:min-h-full">
                  <img src={filiere.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-white text-blue-700">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold leading-snug text-slate-950 sm:text-xl">{filiere.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm">{filiere.shortDesc}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                    {filiere.details.slice(0, 3).map(detail => (
                      <li key={detail} className="flex items-start gap-2 text-xs leading-5 text-slate-700">
                        <Check size={14} className="mt-0.5 shrink-0 text-blue-700" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-7 text-right">
          <Link to="/formations" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
            Parcourir les formations
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

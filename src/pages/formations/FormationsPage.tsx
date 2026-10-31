import { useMemo, useState } from 'react'
import { ArrowRight, BookOpen, Check, Search } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '@/shared/ui/PageHero'
import { filieresData } from '@/pages/home/data/filiere'

const filters = [
  { id: 'toutes', label: 'Toutes les filières' },
  { id: 'reseau', label: 'Réseaux & Télécommunications' },
  { id: 'conception', label: 'Conception & Génie Logiciel' },
]

const levels = ['L1', 'L2', 'L3', 'M1', 'M2']

export default function FormationsPage() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('recherche') ?? '')
  const [activeFilter, setActiveFilter] = useState(() => {
    const filiere = searchParams.get('filiere')
    return filiere && filieresData.some(item => item.id === filiere) ? filiere : 'toutes'
  })

  const visiblePrograms = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('fr')
    return filieresData.filter(program => {
      const matchesFilter = activeFilter === 'toutes' || program.id === activeFilter
      const searchableText = [program.title, program.shortDesc, ...program.details].join(' ').toLocaleLowerCase('fr')
      return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [activeFilter, query])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <PageHero
        image="/DJI_0349-1536x864.jpg"
        eyebrow="Catalogue académique"
        title="Formations en informatique"
        subtitle="Découvrez les deux filières de la Faculté des Sciences Informatiques et les domaines abordés au cours de votre parcours."
      />

      <main>
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-5 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">Le catalogue</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Choisir un parcours</h2>
              </div>
              <label className="flex min-h-11 w-full items-center border border-slate-300 bg-white px-3 lg:max-w-sm">
                <Search size={17} className="shrink-0 text-slate-500" aria-hidden="true" />
                <span className="sr-only">Rechercher dans les formations</span>
                <input
                  type="search"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Rechercher une formation"
                  className="ml-2 min-w-0 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400 focus:ring-0"
                />
              </label>
            </div>

            <div className="mt-5 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrer les filières">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={activeFilter === filter.id}
                  className={`shrink-0 border px-3 py-2 text-xs font-semibold transition sm:px-4 ${
                    activeFilter === filter.id
                      ? 'border-[#0D3B66] bg-[#0D3B66] text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-blue-700 hover:text-blue-700'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {visiblePrograms.length > 0 ? (
              <div className="mt-7 grid gap-5 lg:grid-cols-2">
                {visiblePrograms.map((program, index) => {
                  const Icon = program.icon
                  return (
                    <article key={program.id} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[0.8fr_1.2fr]">
                      <div className="relative min-h-56 bg-slate-100 sm:min-h-full">
                        <img src={program.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                        <span className="absolute bottom-4 left-4 bg-[#0D3B66] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white">Filière 0{index + 1}</span>
                      </div>
                      <div className="flex flex-col p-5 sm:p-6">
                        <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                          <Icon size={15} aria-hidden="true" />
                          Licence · Master
                        </p>
                        <h3 className="mt-2 text-xl font-bold leading-snug text-slate-950">{program.title}</h3>
                        <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm">{program.shortDesc}</p>
                        <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                          {program.details.map(detail => (
                            <li key={detail} className="flex items-start gap-2 text-xs leading-5 text-slate-700">
                              <Check size={14} className="mt-0.5 shrink-0 text-blue-700" aria-hidden="true" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <Link to="/etude" className="mt-5 inline-flex items-center gap-2 border-t border-slate-200 pt-4 text-xs font-bold text-[#0D3B66] transition hover:text-blue-700 sm:mt-auto">
                          Voir les cours et promotions
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="mt-7 border border-slate-200 bg-slate-50 px-5 py-10 text-center">
                <BookOpen size={22} className="mx-auto text-blue-700" aria-hidden="true" />
                <h3 className="mt-3 text-base font-bold text-slate-900">Aucune formation trouvée</h3>
                <p className="mt-1 text-sm text-slate-600">Essayez un autre terme ou choisissez toutes les filières.</p>
                <button type="button" onClick={() => { setQuery(''); setActiveFilter('toutes') }} className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-900">
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 px-5 py-11 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">Parcours LMD</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Du premier cycle au master</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">Les niveaux de formation de la FSI, de la première année de licence à la deuxième année de master.</p>
            </div>
            <ol className="grid grid-cols-5 border-l border-t border-slate-300 bg-white">
              {levels.map((level, index) => (
                <li key={level} className="border-b border-r border-slate-300 px-2 py-4 text-center sm:px-4 sm:py-5">
                  <span className="block text-base font-bold text-slate-950 sm:text-lg">{level}</span>
                  <span className="mt-1 block text-[9px] font-medium text-slate-500 sm:text-[10px]">{index < 3 ? 'Licence' : 'Master'}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Déjà étudiant à la FSI ?</h2>
              <p className="mt-1 text-sm text-slate-600">Consultez les cours et les ressources de votre promotion.</p>
            </div>
            <Link to="/etude" className="inline-flex w-fit items-center gap-2 border border-[#0D3B66] px-4 py-3 text-sm font-semibold text-[#0D3B66] transition hover:bg-[#0D3B66] hover:text-white">
              Accéder aux cours
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

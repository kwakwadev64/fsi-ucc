import { useState, type FormEvent } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ProgramFinder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = query.trim()
    navigate(value ? `/formations?recherche=${encodeURIComponent(value)}` : '/formations')
  }

  return (
    <section className="border-b border-slate-200 bg-slate-50 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">
            Catalogue des formations
          </p>
          <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Trouver un programme
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex min-h-12 border border-slate-300 bg-white">
          <label className="sr-only" htmlFor="programme-search">Rechercher une formation</label>
          <span className="flex items-center pl-4 text-slate-500">
            <Search size={18} aria-hidden="true" />
          </span>
          <input
            id="programme-search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            type="search"
            placeholder="Cybersécurité, IA, web, IoT…"
            className="min-w-0 flex-1 border-0 bg-transparent px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0"
          />
          <button
            type="submit"
            className="m-1 inline-flex shrink-0 items-center gap-2 bg-[#0D3B66] px-4 text-xs font-semibold text-white transition hover:bg-[#0a2d4a] sm:px-5 sm:text-sm"
          >
            Rechercher
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

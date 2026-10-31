import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatEventDate, upcomingEvents } from '@/pages/evenements/data/events'

export default function EventsPreviewSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">Agenda</p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Événements à venir</h2>
          </div>
          <Link to="/evenements" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-900 sm:text-sm">
            Voir l’agenda
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white">
          {upcomingEvents.slice(0, 3).map(event => (
            <article key={event.id} className="grid gap-3 px-4 py-4 sm:grid-cols-[170px_1fr_110px] sm:items-center sm:px-5">
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CalendarDays size={15} className="text-blue-700" aria-hidden="true" />
                {formatEventDate(event.date)}
              </p>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-blue-700">{event.category}</p>
                <h3 className="mt-1 text-sm font-bold text-slate-950 sm:text-base">{event.title}</h3>
              </div>
              <p className="flex items-center gap-2 text-xs text-slate-500 sm:justify-end">
                <Clock3 size={14} className="text-blue-700" aria-hidden="true" />
                {event.time}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-3 text-[10px] leading-5 text-slate-500">Programmation statique · les dates sont à confirmer auprès de la faculté.</p>
      </div>
    </section>
  )
}

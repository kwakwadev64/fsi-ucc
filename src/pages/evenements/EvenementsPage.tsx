import { useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, Clock3, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/shared/ui/PageHero'
import { formatEventDate, getEventDateParts, pastEvents, upcomingEvents } from './data/events'

const categories = ['Tous', ...new Set(upcomingEvents.map(event => event.category))]

export default function EvenementsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const filteredEvents = useMemo(
    () => activeCategory === 'Tous'
      ? upcomingEvents
      : upcomingEvents.filter(event => event.category === activeCategory),
    [activeCategory],
  )
  const featuredEvent = filteredEvents[0]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <PageHero
        image="/DJI_0349-1536x864.jpg"
        eyebrow="Agenda de la faculté"
        title="Événements FSI"
        subtitle="Ateliers, présentations et rencontres : retrouvez les rendez-vous de la Faculté des Sciences Informatiques."
      />

      <main>
        <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">À venir</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Les prochains rendez-vous</h2>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filtrer les événements par catégorie">
                {categories.map(category => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                    className={`border px-3 py-2 text-xs font-semibold transition ${
                      activeCategory === category
                        ? 'border-[#0D3B66] bg-[#0D3B66] text-white'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-blue-700 hover:text-blue-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {featuredEvent ? (
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                <article className="border-t-2 border-[#0D3B66] bg-slate-50 p-5 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">Prochain rendez-vous</p>
                  <div className="mt-5 flex items-start gap-4">
                    <EventDate date={featuredEvent.date} />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{featuredEvent.category}</p>
                      <h3 className="mt-1 text-xl font-bold leading-snug text-slate-950 sm:text-2xl">{featuredEvent.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{featuredEvent.description}</p>
                  <EventMeta event={featuredEvent} />
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-blue-700 pb-1.5 text-sm font-semibold text-[#0D3B66] hover:text-blue-700">
                    Demander des informations
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>

                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {filteredEvents.slice(1).map(event => (
                    <article key={event.id} className="grid gap-4 py-5 sm:grid-cols-[76px_1fr] sm:gap-6 sm:py-6">
                      <EventDate date={event.date} compact />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">{event.category}</p>
                        <h3 className="mt-1 text-lg font-bold leading-snug text-slate-950">{event.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{event.description}</p>
                        <EventMeta event={event} compact />
                      </div>
                    </article>
                  ))}
                  {filteredEvents.length === 1 && (
                    <p className="py-6 text-sm text-slate-600">D’autres rendez-vous seront annoncés prochainement.</p>
                  )}
                </div>
              </div>
            ) : (
              <p className="border border-slate-200 bg-slate-50 px-5 py-8 text-sm text-slate-600">
                Aucun événement n’est prévu dans cette catégorie pour le moment.
              </p>
            )}

            <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <CalendarDays size={15} className="mt-0.5 shrink-0 text-blue-700" aria-hidden="true" />
              Les dates et horaires affichés sont indicatifs. Contactez la faculté pour confirmer les modalités.
            </p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">Archives</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Événements passés</h2>
            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 bg-white">
              {pastEvents.map(event => (
                <article key={event.id} className="grid gap-4 px-4 py-5 sm:grid-cols-[150px_1fr] sm:px-6">
                  <p className="text-xs font-semibold text-slate-500">{formatEventDate(event.date)}</p>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">{event.category}</p>
                    <h3 className="mt-1 text-base font-bold text-slate-950">{event.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function EventDate({ date, compact = false }: { date: string; compact?: boolean }) {
  const parts = getEventDateParts(date)
  return (
    <time dateTime={date} className={`flex shrink-0 flex-col items-center justify-center border border-slate-300 bg-white text-[#0D3B66] ${compact ? 'h-[62px] w-[68px]' : 'h-[78px] w-[76px]'}`}>
      <span className={`font-bold leading-none ${compact ? 'text-xl' : 'text-2xl'}`}>{parts.day}</span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-wide">{parts.month}</span>
    </time>
  )
}

function EventMeta({ event, compact = false }: { event: (typeof upcomingEvents)[number]; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 ${compact ? 'mt-3' : 'mt-5 border-t border-slate-200 pt-4'}`}>
      <span className="inline-flex items-center gap-1.5"><Clock3 size={14} className="text-blue-700" aria-hidden="true" />{event.time}</span>
      <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-blue-700" aria-hidden="true" />{event.location}</span>
    </div>
  )
}

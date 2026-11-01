import { ArrowRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import RegistrationNotice from '@/shared/ui/RegistrationNotice'
import { getProgramStatusLabel, programmesData } from '@/pages/formations/data/programmes'

export default function FormationsPreviewSection() {
  const ongoingProgram = programmesData.find(program => program.status === 'ongoing')
  const upcomingPrograms = programmesData.filter(program => program.status === 'upcoming')

  return (
    <section className="border-y border-slate-200 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold text-blue-700">Formations</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
              Les parcours annoncés
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Consultez les domaines de formation et leur disponibilité actuelle.
          </p>
        </div>

        {ongoingProgram && (
          <article className="grid overflow-hidden border border-[#17477D]/20 bg-white sm:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col items-start p-5 sm:p-7 lg:p-8">
              <p className="inline-flex items-center gap-2 bg-cyan-50 px-2.5 py-1.5 text-[11px] font-semibold text-[#0F6E91]">
                <span className="h-2 w-2 rounded-full bg-cyan-600" aria-hidden="true" />
                {getProgramStatusLabel(ongoingProgram.status)}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">{ongoingProgram.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{ongoingProgram.announcement}</p>
              <RegistrationNotice formationName={ongoingProgram.title} className="mt-5 w-fit" />
            </div>
            <div className="relative min-h-48 bg-slate-100 sm:min-h-full">
              <img src={ongoingProgram.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </article>
        )}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {upcomingPrograms.map(program => {
            const Icon = program.icon
            return (
              <article key={program.id} className="overflow-hidden border border-slate-200 bg-white">
                <div className="relative aspect-[16/9] bg-slate-100">
                  <img src={program.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-blue-50 text-[#17477D]">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-700">
                      <Clock3 size={12} aria-hidden="true" />
                      {getProgramStatusLabel(program.status)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-slate-950">{program.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{program.announcement}</p>
                  <RegistrationNotice formationName={program.title} variant="outline" className="mt-5 w-full" />
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-7 text-right">
          <Link to="/formations" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
            Voir toutes les formations
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

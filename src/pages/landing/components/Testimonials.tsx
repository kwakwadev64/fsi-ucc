import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export interface Testimonial {
  name: string
  cohort: string // ex: "Promotion 2024 — Génie Logiciel"
  quote: string
  photoUrl?: string
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

/**
 * Carrousel de témoignages d'anciens étudiants (alumni).
 * Passe `testimonials` avec de vrais retours collectés (accord de publication requis) —
 * tant que ce n'est pas fait, le composant ne rend rien.
 */
export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
  const [index, setIndex] = useState(0)

  if (!testimonials || testimonials.length === 0) return null

  const current = testimonials[index]
  const next = () => setIndex(i => (i + 1) % testimonials.length)
  const prev = () =>
    setIndex(i => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Ce que disent nos anciens
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm">
          <Quote className="text-blue-600 mb-3 sm:mb-4 shrink-0" size={28} />
          <p className="text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed min-h-[4.5rem] sm:min-h-24">
            {current.quote}
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {current.photoUrl ? (
              <img
                src={current.photoUrl}
                alt={current.name}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                {current.name.charAt(0)}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-slate-900 font-semibold text-sm sm:text-base truncate">
                {current.name}
              </p>
              <p className="text-slate-500 text-xs sm:text-sm truncate">
                {current.cohort}
              </p>
            </div>
          </div>
        </div>

        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              aria-label="Témoignage précédent"
              className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-100 active:bg-slate-200 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2 flex-wrap justify-center">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Témoignage suivant"
              className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-100 active:bg-slate-200 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

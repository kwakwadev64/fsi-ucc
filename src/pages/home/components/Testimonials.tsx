import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export interface Testimonial {
  name: string
  cohort: string
  quote: string
  photoUrl?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (testimonials.length <= 1) return

    const id = window.setInterval(() => {
      setIndex(current => (current + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(id)
  }, [testimonials.length])

  const current = testimonials[index]
  if (!current) return null

  const goTo = (nextIndex: number) =>
    setIndex((nextIndex + testimonials.length) % testimonials.length)
  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  return (
    <section className="border-y border-blue-900 bg-[#17477D] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100">
          Témoignages
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Ce que disent nos anciens
        </h2>

        <div className="mt-7 grid items-center gap-6 md:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-100">
            {current.photoUrl ? (
              <img
                src={current.photoUrl}
                alt={current.name}
                className="h-full w-full object-cover"
              />
            ) : null}

            {testimonials.length > 1 && (
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Témoignage précédent"
                  className="ml-3 flex h-10 w-10 items-center justify-center border border-slate-300 bg-white/95 text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
                >
                  <ArrowLeft size={18} />
                </button>
              </div>
            )}

            {testimonials.length > 1 && (
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Témoignage suivant"
                  className="mr-3 flex h-10 w-10 items-center justify-center border border-slate-300 bg-white/95 text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>

          <div className="min-h-[320px]">
            <blockquote>
              <p className="max-w-[760px] text-base font-medium leading-relaxed text-white/95 sm:text-lg lg:text-xl lg:leading-[1.7]">
                {current.quote}
              </p>

              <footer className="mt-6 flex items-center gap-3">
                {current.photoUrl && (
                  <img
                    src={current.photoUrl}
                    alt=""
                    className="h-11 w-11 border border-slate-300 object-cover"
                  />
                )}

                <div>
                  <p className="text-sm font-bold text-white sm:text-base">
                    {current.name}
                  </p>
                  <p className="text-xs text-blue-100 sm:text-sm">
                    {current.cohort}
                  </p>
                </div>
              </footer>
            </blockquote>

            {testimonials.length > 1 && (
              <div className="mt-8 flex items-center gap-3">
                {testimonials.map((item, itemIndex) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => goTo(itemIndex)}
                    aria-label={`Afficher le témoignage de ${item.name}`}
                    className={`h-2.5 rounded-full transition-all ${
                      itemIndex === index
                        ? 'w-7 bg-white'
                        : 'w-2.5 bg-blue-200/60 hover:bg-blue-100'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

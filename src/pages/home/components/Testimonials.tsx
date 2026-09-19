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
    <section className="bg-[#41698d] px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
          Témoignages
        </p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          Ce que disent nos anciens
        </h2>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#d8d2a4] shadow-[0_18px_40px_rgba(11,28,40,0.18)]">
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
                  className="ml-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
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
                  className="mr-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>

          <div className="min-h-[320px]">
            <blockquote>
              <p className="max-w-[640px] text-base font-semibold leading-relaxed text-white/95 sm:text-[1.15rem] lg:text-[1.5rem] lg:leading-[1.7]">
                {current.quote}
              </p>

              <footer className="mt-6 flex items-center gap-3">
                {current.photoUrl && (
                  <img
                    src={current.photoUrl}
                    alt=""
                    className="h-10 w-10 rounded-full border border-white/30 object-cover"
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

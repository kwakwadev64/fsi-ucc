import { useCallback, useEffect, useState, type FocusEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import computerLab from '@/shared/assets/conception.jpg'

export interface CampusSlide {
  src: string
  alt: string
  caption: string
}

export const campusSlides: CampusSlide[] = [
  {
    src: '/DJI_0349-1536x864.jpg',
    alt: 'Vue aérienne du campus de l’Université Catholique du Congo',
    caption: 'Le campus de l’Université Catholique du Congo',
  },
  {
    src: computerLab,
    alt: 'Étudiants de la FSI en salle informatique',
    caption: 'Les apprentissages en informatique',
  },
  {
    src: '/l1.jpeg',
    alt: 'Étudiantes et étudiants de la FSI devant un bâtiment du campus',
    caption: 'La vie étudiante à la FSI',
  },
  {
    src: '/l3.jpeg',
    alt: 'Étudiantes et étudiants de la FSI réunis sur le campus',
    caption: 'La communauté de la faculté',
  },
]

interface CampusImageSliderProps {
  slides?: CampusSlide[]
  className?: string
}

export default function CampusImageSlider({
  slides = campusSlides,
  className = '',
}: CampusImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const activeSlide = slides[activeIndex] ?? slides[0]

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + slides.length) % slides.length)
  }, [slides.length])

  const goNext = useCallback(() => {
    setActiveIndex(index => (index + 1) % slides.length)
  }, [slides.length])

  const goPrevious = useCallback(() => {
    setActiveIndex(index => (index - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (shouldReduceMotion || isHovered || hasFocus || slides.length < 2) return

    const timer = window.setInterval(goNext, 6000)
    return () => window.clearInterval(timer)
  }, [goNext, hasFocus, isHovered, shouldReduceMotion, slides.length])

  function handleBlurCapture(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setHasFocus(false)
    }
  }

  if (!activeSlide) return null

  return (
    <figure
      className={`campus-slider ${className}`}
      aria-label="Images de la Faculté des Sciences Informatiques"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={handleBlurCapture}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={activeSlide.src}
          src={activeSlide.src}
          alt={activeSlide.alt}
          className="campus-slider__image"
          fetchPriority="high"
          loading="eager"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.995 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: 'easeInOut' }}
          draggable={false}
        />
      </AnimatePresence>
      <div className="campus-slider__shade" aria-hidden="true" />

      <figcaption className="campus-slider__caption">{activeSlide.caption}</figcaption>

      {slides.length > 1 && (
        <div className="campus-slider__controls">
          <div className="campus-slider__dots" role="group" aria-label="Choisir une image">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Afficher l’image ${index + 1} sur ${slides.length}`}
                aria-pressed={index === activeIndex}
                onClick={() => goTo(index)}
                className={`campus-slider__dot ${index === activeIndex ? 'is-active' : ''}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="campus-slider__arrow"
            aria-label="Image précédente"
            onClick={goPrevious}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="campus-slider__arrow"
            aria-label="Image suivante"
            onClick={goNext}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </figure>
  )
}

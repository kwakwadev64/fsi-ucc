import { useHeroSlide } from '../hooks/useHeroSilde'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const PrevNextButton = () => {
  const { next, prev } = useHeroSlide()
  return (
    <>
      <button
        onClick={prev}
        aria-label="Slide précédent"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/10"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Slide suivant"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/10"
      >
        <ChevronRight size={18} />
      </button>
    </>
  )
}

export default PrevNextButton

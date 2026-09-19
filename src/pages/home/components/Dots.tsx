import { slides } from '../data/slideData'
import { useHeroSlide } from '../hooks/useHeroSilde'

const Dots = () => {
  const { index, setIndex } = useHeroSlide()
  return (
    <>
      <div className="absolute bottom-7 lg:mb-6  left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Aller au slide ${i + 1}`}
            className={`h-2 mb-19 rounded-full transition-all ${
              i === index
                ? 'w-8 bg-blue-400'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </>
  )
}

export default Dots

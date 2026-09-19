import { AnimatePresence, motion } from 'framer-motion'
import { useHeroSlide } from '../hooks/useHeroSilde'
import PrevNextButton from './PrevNextButton'
import { HeroPhotoSlide } from './HeroPhotoSlide'
import HeroLogoSlide from './HeroLogoSlide'
import Dots from './Dots'
import { slides } from '../data/slideData'

export default function HeroSlider() {
  const { setIsPaused, slide } = useHeroSlide()

  return (
    <section
      className="relative h-[520px] w-full overflow-hidden bg-[#0B132B] sm:h-[620px] lg:h-[720px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={`${slide.id}-bg`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {slide.layout === 'photo' ? (
            <>
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: slide.imagePosition ?? 'center' }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[#0B132B]" />
              <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-blue-800/20" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* -------- Contenu -------- */}
      <AnimatePresence mode="wait">
        {slide.layout === 'photo' ? (
          //  LAYOUT "photo" : contenu centré
          <HeroPhotoSlide slide={slide} />
        ) : (
          // LAYOUT logo : texte à gauche + logo à droite (ancien hero)
          <HeroLogoSlide />
        )}
      </AnimatePresence>

      {/* -------- Flèches précédent / suivant -------- */}
      {slides.length > 1 && <PrevNextButton />}

      {/* -------- Indicateurs (dots) -------- */}
      {slides.length > 1 && <Dots />}
    </section>
  )
}

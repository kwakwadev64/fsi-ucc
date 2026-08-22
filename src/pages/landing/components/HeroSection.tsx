import { AnimatePresence, motion } from 'framer-motion'
import { useHeroSlide } from '../hooks/useHeroSilde'
import PrevNextButton from './PrevNextButton'
import { HeroPhotoSlide } from './HeroPhotoSlide'
import HeroLogoSlide from './HeroLogoSlide'
import Dots from './Dots'

export default function HeroSlider() {
  const { setIsPaused, slide } = useHeroSlide()

  return (
    <section
      className="relative h-150 sm:h-150 lg:h-155 w-full overflow-hidden bg-[#0B132B]"
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
              />
              {/* voile uniforme léger : laisse voir l'image, juste assez pour lire le texte */}
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
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
      <PrevNextButton />

      {/* -------- Indicateurs (dots) -------- */}
      <Dots />
    </section>
  )
}

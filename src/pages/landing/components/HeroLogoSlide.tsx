import { motion } from 'framer-motion'
import { useHeroSlide } from '../hooks/useHeroSilde'
import { SlideButtons } from './SlideButtons'

export const HeroLogoSlide = () => {
  const { slide } = useHeroSlide()
  return (
    <>
      <motion.div
        key={`${slide.id}-content`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex h-full max-w-7xl mx-auto items-center justify-between gap-12 px-6 py-16 sm:px-10 lg:px-8"
      >
        <div className="text-center lg:text-left max-w-2xl ">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-5 tracking-tight leading-tight">
            {slide.titleTop} <br className="hidden md:block" />
            <span className="text-blue-400">{slide.titleHighlight}</span>
          </h1>

          {slide.subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 font-light">
              {slide.subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
            <SlideButtons slide={slide} />
          </div>
        </div>

        {slide.logo && (
          <div className="w-full max-w-55 lg:max-w-70 max-sm:hidden aspect-square flex items-center justify-center shrink-0">
            <img
              src={slide.logo}
              alt="Logo"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        )}
      </motion.div>
    </>
  )
}

export default HeroLogoSlide

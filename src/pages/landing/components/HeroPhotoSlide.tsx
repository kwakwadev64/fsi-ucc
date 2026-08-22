import { motion } from 'framer-motion'
import type { Slide } from '../types/types'
import { SlideButtons } from './SlideButtons'

export const HeroPhotoSlide = ({ slide }: { slide: Slide }) => {
  return (
    <motion.div
      key={`${slide.id}-content`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-10 flex h-full max-w-4xl mx-auto flex-col items-center justify-center text-center px-6 sm:px-10"
    >
      {slide.badgeLabel && (
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="h-px w-6 bg-blue-400" />
          <span className="text-[11px] sm:text-xs text-blue-300 font-semibold uppercase tracking-[0.2em]">
            {slide.badgeLabel}
          </span>
          <span className="h-px w-6 bg-blue-400" />
        </div>
      )}

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mt-4">
        {slide.titleTop}{' '}
        <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
          {slide.titleHighlight}
        </span>
      </h1>

      {slide.subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mb-8">
          {slide.subtitle}
        </p>
      )}

      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-1 max-w-md mx-auto lg:mx-0">
        <SlideButtons slide={slide} />
      </div>
    </motion.div>
  )
}

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
      className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-start px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-100/90 sm:text-[10px]">
          <span className="h-px w-6 bg-blue-300/80" />
          <span>{slide.badgeLabel}</span>
          <span className="h-px w-6 bg-blue-300/80" />
        </div>

        <h1 className="text-[1.2rem] font-medium leading-[0.98] tracking-[-0.04em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.16)] sm:text-[2.5rem] lg:text-[3.7rem]">
          {slide.titleTop}{' '}
          <span className="bg-linear-to-r from-blue-200 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(96,165,250,0.35)]">
            {slide.titleHighlight}
          </span>
        </h1>

        {slide.subtitle && (
          <p className="mt-4 max-w-lg text-[0.7rem] leading-relaxed text-slate-100/90 drop-shadow-[0_2px_10px_rgba(15,23,42,0.45)] sm:text-[0.8rem] lg:text-[0.9rem]">
            {slide.subtitle}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <SlideButtons slide={slide} />
        </div>
      </div>
    </motion.div>
  )
}

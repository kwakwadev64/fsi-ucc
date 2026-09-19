import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageHeroProps {
  image: string
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative h-130 w-full overflow-hidden bg-[#0B132B] sm:h-155 lg:h-180">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/8" />
      <div className="absolute inset-0 bg-linear-to-r from-black/35 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-16"
      >
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-100/90 sm:text-[10px]">
            <span className="h-px w-6 bg-blue-300/80" />
            <span>{eyebrow}</span>
            <span className="h-px w-6 bg-blue-300/80" />
          </div>

          <h1 className="text-[1.8rem] font-medium leading-[0.98] tracking-[-0.04em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.16)] sm:text-[2.5rem] lg:text-[3.7rem]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-lg text-[0.75rem] leading-relaxed text-slate-100/90 drop-shadow-[0_2px_10px_rgba(15,23,42,0.45)] sm:text-[0.85rem] lg:text-[0.95rem]">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="mt-6 flex flex-wrap gap-3">{children}</div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import type { Slide } from '../types/types'

export function SlideButtons({ slide }: { slide: Slide }) {
  return (
    <>
      {slide.primaryBtn.external ? (
        <a
          href={slide.primaryBtn.to}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 px-2 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
        >
          <slide.primaryBtn.icon size={18} />
          {slide.primaryBtn.label}
        </a>
      ) : (
        <Link
          to={slide.primaryBtn.to}
          className="inline-flex justify-center items-center gap-2 px-3 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
        >
          <slide.primaryBtn.icon size={18} />

          {slide.primaryBtn.label}
        </Link>
      )}

      {slide.secondaryBtn &&
        (slide.secondaryBtn.external ? (
          <a
            href={slide.secondaryBtn.to}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5"
          >
            <slide.secondaryBtn.icon size={18} />
            {slide.secondaryBtn.label}
          </a>
        ) : (
          <Link
            to={slide.secondaryBtn.to}
            className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5"
          >
            <slide.secondaryBtn.icon size={18} />
            {slide.secondaryBtn.label}
          </Link>
        ))}
    </>
  )
}

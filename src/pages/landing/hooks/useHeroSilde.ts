import { useCallback, useEffect, useState } from 'react'
import { slides } from '../data/slideData'

export const useHeroSlide = () => {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const AUTOPLAY_DELAY = 4000

  const next = useCallback(() => {
    setIndex(i => (i + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(next, AUTOPLAY_DELAY)
    return () => clearInterval(t)
  }, [isPaused, next])

  const slide = slides[index]

  return { prev, next, isPaused, setIsPaused, slide, index, setIndex }
}

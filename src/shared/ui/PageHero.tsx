import type { ReactNode } from 'react'
import CampusImageSlider, { campusSlides } from '@/shared/ui/CampusImageSlider'

interface PageHeroProps {
  image: string
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({ image, eyebrow, title, subtitle, children }: PageHeroProps) {
  const slides = image.includes('DJI_0349-1536x864')
    ? campusSlides
    : [
        {
          src: image,
          alt: 'Photo de la vie de la Faculté des Sciences Informatiques',
          caption: 'La vie de la Faculté des Sciences Informatiques',
        },
        ...campusSlides,
      ].slice(0, 4)

  return (
    <section className="page-hero">
      <div className="page-hero__layout">
        <div className="page-hero__copy">
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
          {children && <div className="page-hero__children">{children}</div>}
        </div>

        <CampusImageSlider slides={slides} className="page-hero__figure" />
      </div>
    </section>
  )
}

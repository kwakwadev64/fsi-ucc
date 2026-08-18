import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ActualiteDetail } from '../types/types'

interface NewsDetailHeroProps {
  actualite: ActualiteDetail
}

export default function NewsDetailHero({ actualite }: NewsDetailHeroProps) {
  const { image_url, titre, filter_type, location, created_at } = actualite

  return (
    <div className="relative w-full h-85 sm:h-110 lg:h-130 overflow-hidden bg-linear-to-br from-[#0B2545] to-[#123A6B]">
      {image_url && (
        <img
          src={image_url}
          alt={titre}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-[#0B2545] via-[#0B2545]/60 to-[#0B2545]/10" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 font-medium transition w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2A93B] text-[#0B2545] text-xs font-bold rounded-full uppercase tracking-wide">
            <Tag className="w-3.5 h-3.5" />
            {filter_type}
          </span>
          {location && (
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              {location}
            </span>
          )}
        </div>

        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
          {titre}
        </h1>

        <span className="inline-flex items-center gap-1.5 text-xs text-white/70 mt-4">
          <Calendar className="w-3.5 h-3.5" />
          {created_at}
        </span>
      </div>
    </div>
  )
}

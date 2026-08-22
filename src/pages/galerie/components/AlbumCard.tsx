import { Images, Download } from 'lucide-react'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import type { Galerie } from '../types/types'

interface AlbumCardProps {
  album: Galerie
  onClick: () => void
}

export default function AlbumCard({ album, onClick }: AlbumCardProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation()
    const link = document.createElement('a')
    link.href = album.mainImage
    link.download = album.evenement || 'photo'
    link.target = '_blank'
    link.rel = 'noreferrer'
    link.click()
  }

  const handleLinkedin = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'noreferrer'
    )
  }

  const handleFacebook = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'noreferrer'
    )
  }

  // Photos secondaires pour l'effet pile — celles qui dépassent derrière la photo principale
  const backPhoto1 = album.images?.[1]?.url ?? album.mainImage
  const backPhoto2 = album.images?.[2]?.url ?? album.mainImage

  return (
    <div onClick={onClick} className="group relative cursor-pointer pb-2">
      {/* ---- PILE : cartes fantômes derrière, façon dossier photo ---- */}
      <div
        className="absolute inset-x-3 top-3 h-64 rounded-2xl bg-white border border-gray-100 shadow-md
                  -rotate-3 origin-bottom
                  transition-transform duration-500 ease-out
                  group-hover:-rotate-6 group-hover:-translate-x-1.5"
      >
        <img
          src={backPhoto2}
          alt=""
          aria-hidden
          className="w-full h-full object-cover rounded-2xl opacity-70"
        />
      </div>
      <div
        className="absolute inset-x-1.5 top-1.5 h-64 rounded-2xl bg-white border border-gray-100 shadow-md
                  rotate-2 origin-bottom
                  transition-transform duration-500 ease-out
                  group-hover:rotate-4 group-hover:translate-x-1.5"
      >
        <img
          src={backPhoto1}
          alt=""
          aria-hidden
          className="w-full h-full object-cover rounded-2xl opacity-85"
        />
      </div>

      {/* ---- CARTE PRINCIPALE : photo plein cadre + infos en overlay ---- */}
      <div
        className="relative h-64 overflow-hidden rounded-2xl bg-slate-100
                  shadow-xl shadow-slate-300/40 border border-white
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-1"
      >
        <img
          src={album.mainImage}
          alt={album.displayName}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-500 select-none"
        />

        {/* Voile dégradé — lisibilité du texte, cohérent avec MembreCard */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

        {/* Badge nombre de photos — coin haut gauche */}
        <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#0D3B66] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
          <Images size={13} />
          {album.images.length} photos
        </span>

        {/* Actions flottantes — verre, apparaissent au hover */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
          <button
            type="button"
            onClick={handleDownload}
            title="Télécharger"
            className="flex h-9 w-9 items-center justify-center rounded-full
                      bg-white/20 backdrop-blur-md border border-white/30
                      text-white shadow-sm
                      hover:bg-[#0D3B66] hover:border-[#0D3B66] hover:scale-110
                      transition-all duration-200"
          >
            <Download size={15} />
          </button>

          <button
            type="button"
            onClick={handleLinkedin}
            title="Partager sur LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full
                      bg-white/20 backdrop-blur-md border border-white/30
                      text-white shadow-sm
                      hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110
                      transition-all duration-200"
          >
            <FiLinkedin size={15} />
          </button>

          <button
            type="button"
            onClick={handleFacebook}
            title="Partager sur Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full
                      bg-white/20 backdrop-blur-md border border-white/30
                      text-white shadow-sm
                      hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110
                      transition-all duration-200"
          >
            <FiFacebook size={15} />
          </button>
        </div>

        {/* Titre & évènement — en bas de la photo, style identique à MembreCard */}
        <div className="absolute inset-x-0 bottom-0 p-5 z-10">
          <span className="inline-block text-[10px] font-bold text-white bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 py-1 rounded-full uppercase tracking-wide mb-2">
            {album.displayName}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
            {album.evenement}
          </h3>
        </div>
      </div>
    </div>
  )
}

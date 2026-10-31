import type { MouseEvent } from 'react'
import { Download, Images } from 'lucide-react'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import type { Galerie } from '@/entities/galerie/model'

interface AlbumCardProps {
  album: Galerie
  onClick: () => void
}

export default function AlbumCard({ album, onClick }: AlbumCardProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleDownload = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    const link = document.createElement('a')
    link.href = album.mainImage
    link.download = album.evenement || 'photo'
    link.target = '_blank'
    link.rel = 'noreferrer'
    link.click()
  }

  const share = (event: MouseEvent<HTMLButtonElement>, network: 'facebook' | 'linkedin') => {
    event.stopPropagation()
    const url = network === 'facebook'
      ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
      : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="group border border-slate-200 bg-white transition-colors hover:border-blue-300">
      <div className="relative">
        <button
          type="button"
          onClick={onClick}
          aria-label={`Ouvrir l’album ${album.evenement}`}
          className="block w-full text-left"
        >
          <div className="aspect-[4/3] overflow-hidden bg-slate-100">
            <img
              src={album.mainImage}
              alt={album.displayName}
              loading="lazy"
              onContextMenu={event => event.preventDefault()}
              className="h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ WebkitTouchCallout: 'none' }}
            />
          </div>
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 bg-white px-2.5 py-1.5 text-[10px] font-bold text-[#0D3B66]">
            <Images size={13} aria-hidden="true" />
            {album.images.length} photos
          </span>
          <div className="border-t border-slate-200 px-4 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">{album.displayName}</p>
            <h3 className="mt-1 text-base font-bold leading-snug text-slate-950 group-hover:text-blue-700">{album.evenement}</h3>
          </div>
        </button>

        <div className="absolute right-3 top-3 flex gap-1.5">
          <button type="button" onClick={handleDownload} title="Télécharger l’album" aria-label="Télécharger l’album" className="flex h-8 w-8 items-center justify-center border border-white/70 bg-white/90 text-[#0D3B66] transition hover:bg-[#0D3B66] hover:text-white">
            <Download size={14} aria-hidden="true" />
          </button>
          <button type="button" onClick={event => share(event, 'linkedin')} title="Partager sur LinkedIn" aria-label="Partager sur LinkedIn" className="flex h-8 w-8 items-center justify-center border border-white/70 bg-white/90 text-[#0D3B66] transition hover:bg-[#0A66C2] hover:text-white">
            <FiLinkedin size={14} />
          </button>
          <button type="button" onClick={event => share(event, 'facebook')} title="Partager sur Facebook" aria-label="Partager sur Facebook" className="flex h-8 w-8 items-center justify-center border border-white/70 bg-white/90 text-[#0D3B66] transition hover:bg-[#1877F2] hover:text-white">
            <FiFacebook size={14} />
          </button>
        </div>
      </div>
    </article>
  )
}

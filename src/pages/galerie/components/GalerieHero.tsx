import type { Galerie } from '@/entities/galerie/model'
import PageHero from '@/shared/ui/PageHero'

interface GalerieHeroProps {
  albums: Galerie[]
}

export default function GalerieHero({ albums }: GalerieHeroProps) {
  const totalPhotos = albums.reduce((sum, album) => sum + album.images.length, 0)
  const totalPromotions = albums.length
  const featured = [...albums].sort((a, b) => b.images.length - a.images.length)[0]

  return (
    <PageHero
      image={featured?.mainImage ?? '/DJI_0349-1536x864.jpg'}
      eyebrow="Galerie photographique"
      title="Les visages de la FSI"
      subtitle="Retrouvez les photos des promotions et les moments forts de la Faculté des Sciences Informatiques. Connectez-vous pour télécharger vos souvenirs."
    >
      <div className="flex items-center gap-6 border-y border-slate-200 py-3 pr-5">
        <div>
          <p className="text-lg font-bold text-slate-950">{totalPromotions}</p>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Promotions</p>
        </div>
        <span className="h-9 w-px bg-slate-300" aria-hidden="true" />
        <div>
          <p className="text-lg font-bold text-slate-950">{totalPhotos}</p>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Photos</p>
        </div>
      </div>
      <a href="#albums" className="inline-flex items-center border border-[#0D3B66] bg-[#0D3B66] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0a2d4a]">
        Voir les albums
      </a>
    </PageHero>
  )
}

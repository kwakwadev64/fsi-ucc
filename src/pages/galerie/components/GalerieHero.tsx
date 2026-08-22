import type { Galerie } from '../types/types'

interface GalerieHeroProps {
  albums: Galerie[]
}

export default function GalerieHero({ albums }: GalerieHeroProps) {
  const totalPhotos = albums.reduce((sum, a) => sum + a.images.length, 0)
  const totalPromotions = albums.length

  // Les 3 albums avec le plus de photos, pour un collage représentatif
  const featured = [...albums]
    .sort((a, b) => b.images.length - a.images.length)
    .slice(0, 3)

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5 flex flex-col justify-center">
        <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
          Galerie photo
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
          Les visages de la <span className="text-blue-600">FSI</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Immortalisons ensemble les moments forts de notre faculté.
          Connectez-vous pour pouvoir télécharger les souvenirs de famille.
        </p>

        {/* Stats réelles calculées depuis les albums */}
        {totalPromotions > 0 && (
          <div className="flex items-center gap-6 mb-8">
            <div>
              <div className="text-2xl font-extrabold text-gray-900">
                {totalPromotions}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Promotions
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-extrabold text-gray-900">
                {totalPhotos}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Photos de famille
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <a
            href="#albums"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg flex items-center gap-2 w-fit"
          >
            <span>Voir les albums de famille</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Collage des vraies photos de promotions — protégé contre le clic droit */}
      <div className="md:col-span-7 relative h-87.5 md:h-125">
        <div className="absolute inset-0 bg-[#0D3B66]/10 rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] transform translate-x-4 translate-y-4 -z-10" />

        {featured.length > 0 ? (
          <div className="relative w-full h-full">
            {/* Photo principale — la promotion la plus fournie en photos */}
            <div className="absolute inset-0 overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] border-4 border-white shadow-2xl shadow-blue-600/20">
              <img
                src={featured[0].mainImage}
                alt={featured[0].evenement}
                onContextMenu={e => e.preventDefault()}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700 select-none pointer-events-none"
                style={{ WebkitTouchCallout: 'none' }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent p-6 pt-16">
                <span className="inline-block text-[11px] font-bold text-white bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 py-1 rounded-full uppercase tracking-wide mb-2">
                  {featured[0].displayName}
                </span>
                <p className="text-white font-bold text-sm leading-snug line-clamp-2">
                  {featured[0].evenement}
                </p>
              </div>
            </div>

            {/* Vignette secondaire flottante — 2e promotion, en médaillon */}
            {featured[1] && (
              <div className="hidden sm:block absolute -left-6 top-8 w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-slate-100 rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src={featured[1].mainImage}
                  alt={featured[1].evenement}
                  onContextMenu={e => e.preventDefault()}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  style={{ WebkitTouchCallout: 'none' }}
                />
              </div>
            )}

            {/* Vignette secondaire flottante — 3e promotion, en médaillon */}
            {featured[2] && (
              <div className="hidden sm:block absolute -right-4 bottom-10 w-28 h-28 md:w-36 md:h-36 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-slate-100 rotate-[5deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src={featured[2].mainImage}
                  alt={featured[2].evenement}
                  onContextMenu={e => e.preventDefault()}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  style={{ WebkitTouchCallout: 'none' }}
                />
              </div>
            )}
          </div>
        ) : (
          // État de chargement — placeholder tant que les albums arrivent
          <div className="w-full h-full rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] border-4 border-white shadow-2xl shadow-blue-600/20 bg-slate-100 animate-pulse" />
        )}
      </div>
    </section>
  )
}

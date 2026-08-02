import fsi from '@/assets/image-info.webp'

export default function GalerieHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5 flex flex-col justify-center">
        <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
          Galerie photo
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Les visages de la <span className="text-blue-600">FSI</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Immortalisons ensemble les moments forts de notre faculté.
          Connectez-vous pour pouvoir télécharger les souvenirs de famille.
        </p>
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

      {/* Image du Hero protégée contre le clic droit et l'appui long */}
      <div className="md:col-span-7 relative h-87.5 md:h-125">
        <div className="absolute inset-0 bg-[#0D3B66]/10 rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] transform translate-x-4 translate-y-4 -z-10"></div>
        <div className="w-full h-full overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] rounded-tr-[50px] border-4 border-white shadow-2xl shadow-blue-600/20">
          <img
            src={fsi}
            alt="Promotion FSI UCC"
            onContextMenu={e => e.preventDefault()}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-700 select-none pointer-events-none"
            style={{ WebkitTouchCallout: 'none' }}
          />
        </div>
      </div>
    </section>
  )
}

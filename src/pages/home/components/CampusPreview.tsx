import { ArrowRight, Images } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CampusPreview() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center lg:gap-14">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">Vie à la faculté</p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            La FSI en images
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Retrouvez les photos des promotions et les moments partagés sur le campus.
          </p>
          <Link
            to="/galerie"
            className="mt-6 inline-flex items-center gap-2 border-b border-blue-700 pb-1.5 text-sm font-semibold text-[#0D3B66] transition hover:text-blue-700"
          >
            <Images size={16} aria-hidden="true" />
            Toute la galerie
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-[1.35fr_0.85fr] items-end gap-3 sm:gap-5">
          <Link to="/galerie" className="group relative block aspect-[1.12/1] overflow-hidden bg-slate-200">
            <img src="/l3.jpeg" alt="Étudiantes et étudiants de la FSI réunis sur le campus" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/70 to-transparent px-4 pb-3 pt-12 text-xs font-semibold text-white sm:px-5 sm:pb-4">
              La communauté FSI
            </span>
          </Link>
          <Link to="/galerie" className="group relative mb-8 block aspect-[0.8/1] overflow-hidden bg-slate-200 sm:mb-12">
            <img src="/l1.jpeg" alt="Étudiantes et étudiants de la FSI devant un bâtiment du campus" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/70 to-transparent px-3 pb-3 pt-10 text-[10px] font-semibold text-white sm:px-4 sm:pb-4 sm:text-xs">
              Les promotions
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

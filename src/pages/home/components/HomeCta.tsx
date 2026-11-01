import { Link } from 'react-router-dom'
import { ADMISSION_URL } from '@/shared/config/admissions'

export default function HomeCta() {
  return (
    <section className="bg-[#102D4D] px-6 py-16 text-center text-white sm:py-20">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-200">
        Rejoignez-nous
      </p>
      <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
        Prêt à écrire votre avenir dans le numérique ?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
        Rejoignez la Faculté des Sciences Informatiques et construisez les
        compétences qui feront votre différence.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={ADMISSION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white bg-white px-5 py-3 text-sm font-semibold text-[#0D3B66] transition hover:bg-slate-100"
        >
          Préparer mon inscription
        </a>
        <Link
          to="/etude"
          className="border border-white/50 px-5 py-3 text-sm font-semibold transition hover:border-white hover:bg-white/10"
        >
          Explorer les études
        </Link>
      </div>
    </section>
  )
}

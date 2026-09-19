import { Link } from 'react-router-dom'

export default function HomeCta() {
  return (
    <section className="bg-[#050b18] px-6 py-20 text-center text-white sm:py-24">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-400">
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
          href="https://e-acade.ucc.ac.cd/registration/program"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold hover:bg-blue-400"
        >
          Préparer mon inscription
        </a>
        <Link
          to="/etude"
          className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold hover:border-slate-400"
        >
          Explorer les études
        </Link>
      </div>
    </section>
  )
}

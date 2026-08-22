import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

export default function HistoriqueHero() {
  return (
    <div
      className="px-4 md:px-20 w-full h-112.5 flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${uccbatiment})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-center">
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="h-px w-6 bg-blue-400" />
          <span className="text-[11px] sm:text-xs text-blue-300 font-semibold uppercase tracking-[0.2em]">
            Historique
          </span>
          <span className="h-px w-6 bg-blue-400" />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
          Historique des <span className="text-blue-400">Délégués</span>
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light">
          Retour sur les délégué(e)s facultaires qui se sont succédé à la tête
          de la Faculté des Sciences Informatiques au fil des années.
        </p>
      </div>
    </div>
  )
}

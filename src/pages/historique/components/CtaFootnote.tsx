import { ShieldCheck } from 'lucide-react'

export default function CtaFootnote() {
  return (
    <div className="mt-16 md:mt-20 bg-linear-to-br from-slate-900 to-blue-950 rounded-3xl p-6 md:p-12 text-center relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="relative max-w-2xl mx-auto space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-blue-400 mx-auto">
          <ShieldCheck size={24} />
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-white">
          Prêt pour les défis de demain
        </h3>
        <p className="text-xs md:text-base text-slate-300 font-light leading-relaxed">
          Forte de son passé riche, la Faculté des Sciences Informatiques
          continue d'innover pour former les leaders technologiques du
          continent.
        </p>
      </div>
    </div>
  )
}

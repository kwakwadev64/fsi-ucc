import { History } from 'lucide-react'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

export default function HistoriqueHero() {
  return (
    <div
      className="px-4 py-16 md:py-0 md:px-20 w-full min-h-96 md:h-112.5 flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${uccbatiment})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-400 text-sm font-medium mb-4 mx-auto md:mx-0">
          <History size={16} />
          Notre Héritage Institutionnel
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          Histoire de la <span className="text-blue-400">Faculté</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light mx-auto md:mx-0 text-center">
          Parcourez les grandes étapes, les réalisations majeures et les
          évolutions pédagogiques qui ont forgé l'excellence de notre
          établissement au fil des décennies.
        </p>
      </div>
    </div>
  )
}

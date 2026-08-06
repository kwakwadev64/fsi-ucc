import { Users } from 'lucide-react'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

export default function EquipeHero() {
  return (
    <div
      className="px-4 md:px-20 w-full h-112.5 flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${uccbatiment})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-400 text-sm font-medium mb-4">
          <Users className="w-4 h-4" />
          Membres & Collaborateurs 
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          Notre <span className="text-blue-400">Équipe</span> & Lauréats
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light">
          Découvrez la délégation facultaire, les chefs de promotion ainsi que
          l'équipe technique derrière la plateforme.
        </p>
      </div>
    </div>
  )
}

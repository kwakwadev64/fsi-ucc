import { UsersRound } from 'lucide-react'

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        <UsersRound className="w-7 h-7 text-slate-400" />
      </div>
      <p className="text-slate-500 font-medium">
        Aucun délégué enregistré pour le moment.
      </p>
      <p className="text-slate-400 text-sm mt-1">
        L'historique sera mis à jour au fil des années académiques.
      </p>
    </div>
  )
}

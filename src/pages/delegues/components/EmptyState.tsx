import { Inbox } from 'lucide-react'
import SharedEmptyState from '@/shared/ui/EmptyState'

export default function EmptyState() {
  return (
    <SharedEmptyState
      icon={<Inbox className="h-7 w-7 text-slate-400" />}
      title="Aucun délégué enregistré pour le moment."
      description="L'historique sera mis à jour au fil des années académiques."
    />
  )
}

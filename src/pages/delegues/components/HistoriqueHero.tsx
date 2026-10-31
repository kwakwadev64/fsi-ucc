import uccbatiment from '@/shared/assets/DJI_0349-1536x864.jpg'
import PageHero from '@/shared/ui/PageHero'

export default function HistoriqueHero() {
  return (
    <PageHero
      image={uccbatiment}
      eyebrow="Historique"
      title="Historique des Délégués"
      subtitle="Retour sur les délégué(e)s facultaires qui se sont succédé à la tête de la Faculté des Sciences Informatiques au fil des années."
    />
  )
}

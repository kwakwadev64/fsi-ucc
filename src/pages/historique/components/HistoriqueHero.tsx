import uccbatiment from '@/shared/assets/DJI_0349-1536x864.jpg'
import PageHero from '@/shared/ui/PageHero'

export default function HistoriqueHero() {
  return (
    <PageHero
      image={uccbatiment}
      eyebrow="Notre Héritage Institutionnel"
      title={
        <>
          Histoire de la{' '}
          <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Faculté
          </span>
        </>
      }
      subtitle="Parcourez les grandes étapes, les réalisations majeures et les évolutions pédagogiques qui ont forgé l'excellence de notre établissement au fil des décennies."
    />
  )
}

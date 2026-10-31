import uccbatiment from '@/shared/assets/DJI_0349-1536x864.jpg'
import PageHero from '@/shared/ui/PageHero'

export default function EquipeHero() {
  return (
    <PageHero
      image={uccbatiment}
      eyebrow="Membres & Collaborateurs"
      title="Notre Équipe & Lauréats"
      subtitle="Découvrez la délégation facultaire, les chefs de promotion ainsi que l'équipe technique derrière la plateforme."
    />
  )
}

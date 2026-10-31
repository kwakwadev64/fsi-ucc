import uccbatiment from '@/shared/assets/DJI_0349-1536x864.jpg'
import PageHero from '@/shared/ui/PageHero'

export default function EtudeHero() {
  return (
    <PageHero
      image={uccbatiment}
      eyebrow="Cursus Académique LMD"
      title="Programme des Études"
      subtitle="Découvrez la grille horaire et la répartition des enseignements par semestre pour chaque promotion de la Faculté des Sciences Informatiques."
    />
  )
}

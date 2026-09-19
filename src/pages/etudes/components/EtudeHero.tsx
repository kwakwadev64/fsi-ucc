import uccbatiment from '@/shared/assets/DJI_0349-1536x864.jpg'
import PageHero from '@/shared/ui/PageHero'

export default function EtudeHero() {
  return (
    <PageHero
      image={uccbatiment}
      eyebrow="Cursus Académique LMD"
      title={
        <>
          Programme des{' '}
          <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Études
          </span>
        </>
      }
      subtitle="Découvrez la grille horaire et la répartition des enseignements par semestre pour chaque promotion de la Faculté des Sciences Informatiques."
    />
  )
}

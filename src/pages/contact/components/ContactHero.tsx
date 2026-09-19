import uccbatiment from '@/shared/assets/DJI_0349-1536x864.jpg'
import PageHero from '@/shared/ui/PageHero'

export default function ContactHero() {
  return (
    <PageHero
      image={uccbatiment}
      eyebrow="Nous contacter"
      title={
        <>
          Contactez-{' '}
          <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            nous
          </span>
        </>
      }
      subtitle="Faculté des Sciences Informatiques - UCC. Envoyez vos requêtes administratives ou académiques."
    />
  )
}

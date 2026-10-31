import uccbatiment from '@/shared/assets/DJI_0349-1536x864.jpg'
import PageHero from '@/shared/ui/PageHero'

export default function ContactHero() {
  return (
    <PageHero
      image={uccbatiment}
      eyebrow="Nous contacter"
      title="Contactez-nous"
      subtitle="Faculté des Sciences Informatiques - UCC. Envoyez vos requêtes administratives ou académiques."
    />
  )
}

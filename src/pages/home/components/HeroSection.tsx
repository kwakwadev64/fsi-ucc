import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import CampusImageSlider, { campusSlides } from '@/shared/ui/CampusImageSlider'

const admissionUrl = 'https://e-acade.ucc.ac.cd/registration/program'

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero__frame">
        <motion.div
          className="home-hero__copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="home-hero__eyebrow">
            <span className="home-hero__mark" aria-hidden="true" />
            Université Catholique du Congo
          </p>
          <h1 className="home-hero__title">
            Faculté des <span>Sciences Informatiques</span>
          </h1>
          <p className="home-hero__description">
            Deux filières d’excellence, un encadrement de qualité et une communauté qui innove.
          </p>

          <div className="home-hero__actions">
            <Link to="/formations" className="home-hero__primary">
              Voir les formations
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href={admissionUrl} target="_blank" rel="noopener noreferrer" className="home-hero__secondary">
              Candidater
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <p className="home-hero__location">
            <MapPin size={15} aria-hidden="true" />
            Faculté des Sciences Informatiques · UCC
          </p>
        </motion.div>

        <CampusImageSlider slides={campusSlides} className="home-hero__image" />
      </div>
    </section>
  )
}

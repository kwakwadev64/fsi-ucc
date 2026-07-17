import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Send, Loader2 } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'
import type { ContactFormData } from '@/types/types'

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // URL de ton API Laravel (s'adapte à ton .env ou utilise l'adresse locale par défaut)
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Appel réel à ton API Laravel
      const response = await fetch(`${API_BASE_URL}/contact-site`, {
        method: 'POST', // Utilisation de POST pour l'envoi des données
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status}`)
      }

      const data = await response.json()
      console.log("Réponse de l'API Laravel :", data)
      
      alert('Votre message a été envoyé avec succès !')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire à Laravel :", error)
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+243 (0) 81 234 5678', '+243 (0) 99 876 5432'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@fsi-ucc.org', 'info@ucc-rdc.org'],
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Université Catholique du Congo',
        'Faculté des Sciences Informatiques',
        'Kinshasa, RDC',
      ],
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven : 8h00 - 16h00', 'Samedi : 8h00 - 12h00'],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative mb-10 overflow-hidden">
        <div
          className="px-4 md:px-20 w-full h-112.5 flex flex-col items-center justify-center text-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${uccbatiment})` }}
        >
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/20">
                Nous contacter
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contactez-nous
              </h1>
              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis voluptates nisi necessitatibus a commodi saepe nam
                facere quia quasi aut amet dolor perferendis, accusamus
                molestias quaerat est adipisci. Id, officia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARTES D'INFORMATIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-6 h-6 text-[#0D3B66]" />
              </div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-slate-700 text-sm leading-relaxed">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION FORMULAIRE + CARTE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        {/* Ajout de la grille principale pour gérer le 3/5 et 2/5 proprement */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* FORMULAIRE - 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Envoyez-nous un message
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jean Dupont"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Objet de votre message"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                  value={formData.subject}
                  onChange={e =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Décrivez votre demande en détail..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200 resize-none"
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl text-sm font-bold tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-[#0D3B66] hover:bg-[#0a2d4a] hover:shadow-lg hover:shadow-[#0D3B66]/25 active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* CARTE - 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 h-full"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-100 flex flex-col">
              <div className="p-6 pb-4">
                <h3 className="text-black font-bold text-lg">
                  Notre localisation
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Université Catholique du Congo
                </p>
              </div>
              <div className="grow w-full bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5085603417757!2d15.36398917586561!3d-4.391151695582963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a36fa33c644d5%3A0xe103ee5071197771!2sUniversit%C3%A9%20Catholique%20du%20Congo!5e0!3m2!1sfr!2scd!4v1710000000000!5m2!1sfr!2scd"
                  className="w-full h-full border-0 min-h-87.5"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation de l'UCC"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
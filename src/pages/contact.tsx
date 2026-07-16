import { motion } from 'framer-motion'
import {Phone, MapPin, Clock, Mail, Send } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log("Données envoyées :", formData);
      alert("Votre message a été envoyé avec succès !");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+243 (0) 81 234 5678", "+243 (0) 99 876 5432"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@fsi-ucc.org", "info@ucc-rdc.org"],
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Université Catholique du Congo", "Faculté des Sciences Informatiques", "Kinshasa, RDC"],
      
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven : 8h00 - 16h00", "Samedi : 8h00 - 12h00"],
    }
  ];

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative mb-10 overflow-hidden">
        
        <div 
          className="pl-4 pr-4 md:pl-20 md:pr-20 w-full h-[450px] flex flex-col items-center justify-center text-center bg-cover bg-center relative" 
          style={{ backgroundImage: "url('"+uccbatiment +"')" }}
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contactez-nous</h1>
              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
              <p className='text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptates nisi necessitatibus a commodi saepe nam facere quia quasi aut amet dolor perferendis, accusamus molestias quaerat est adipisci. Id, officia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARTES D'INFORMATIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`w-12 h-12 text-gray-800 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-6 h-6 text-gray-800" />
              </div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-slate-700 text-sm leading-relaxed">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION FORMULAIRE + CARTE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-8">
          
          {/* FORMULAIRE - 3/5 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Envoyez-nous un message</h2>
              <p className="text-slate-500 text-sm mt-1">Nous vous répondrons dans les plus brefs délais</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Jean Dupont" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="jean.dupont@email.com" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Objet de votre message" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  placeholder="Décrivez votre demande en détail..." 
                  rows="5" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
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
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          
        </div>
        {/* CARTE - 2/5 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
            <div className="p-2">
              <h3 className="text-black font-bold text-lg px-4">Notre localisation</h3>
              <p className="text-gray-700 text-sm px-4">Université Catholique du Congo</p>
            </div>
            <div className="h-[400px] w-full bg-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5085603417757!2d15.36398917586561!3d-4.391151695582963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a36fa33c644d5%3A0xe103ee5071197771!2sUniversit%C3%A9%20Catholique%20du%20Congo!5e0!3m2!1sfr!2scd!4v1710000000000!5m2!1sfr!2scd" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte UCC"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
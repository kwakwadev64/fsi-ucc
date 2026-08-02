import { motion } from 'framer-motion'

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="lg:col-span-2 h-full"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-100 flex flex-col">
        <div className="p-6 pb-4">
          <h3 className="text-black font-bold text-lg">Notre localisation</h3>
          <p className="text-gray-500 text-sm mt-1">
            Université Catholique du Congo
          </p>
        </div>
        <div className="grow w-full bg-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5085603417757!2d15.36398917586561!3d-4.391151695582963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a36fa33c644d5%3A0xe103ee5071197771!2sUniversit%C3%A9%20Catholique%20du%20Congo!5e0!3m2!1sfr!2scd!4v1710000000000!5m2!1sfr!2scd"
            className="w-full h-full border-0 min-h-87.5"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de localisation de l'UCC"
          ></iframe>
        </div>
      </div>
    </motion.div>
  )
}

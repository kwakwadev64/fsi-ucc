import { motion } from 'framer-motion'
import uccbatiment from '@/assets/DJI_0349-1536x864.jpg'

export default function ContactHero() {
  return (
    <section className="relative mb-10 overflow-hidden">
      <div
        className="px-4 md:px-20 w-full h-112.5 flex flex-col items-center justify-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${uccbatiment})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-400 text-sm font-medium mb-4">
              Nous contacter
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez- <span className="text-blue-400">nous</span>
            </h1>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Faculté des Sciences Informatiques - UCC. Envoyez vos requêtes
              administratives ou académiques.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

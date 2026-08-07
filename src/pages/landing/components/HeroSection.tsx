import { motion } from 'framer-motion'
import { BookOpen, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-36 lg:pt-36 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B132B]">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-blue-800/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Bienvenue à la Faculté des <br className="hidden md:block" />
            <span className="text-blue-400">Sciences Informatiques</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 font-light">
            Formons ensemble les ingénieurs et informaticiens de demain.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
            <Link
              to="/etude"
              className="inline-flex justify-center items-center gap-2 px-4 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <BookOpen size={18} />
              Accéder aux cours
            </Link>

            <a
              href="http://e-acade.ucc.ac.cd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-4 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <FileText size={18} />
              Voir mes résultats
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[320px] max-sm:hidden lg:max-w-125 aspect-square flex items-center justify-center"
        >
          <img
            src={LogoFsiUcc}
            alt="logo-fsi-ucc"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}

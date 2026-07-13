import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { BookOpen, FileText, ChevronDown } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'
import { accesRapide, faqData, stats } from '@/libs/data'

export default function LadingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[#0B132B]">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-blue-800/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              FSI-UCC Officiel
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Bienvenue à la Faculté des <br className="hidden md:block" />
              <span className="text-blue-400">Sciences Informatiques</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light">
              Formons ensemble les ingénieurs et informaticiens de demain.
            </p>

            <div className="flex flex-row justify-left gap-4">
              <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer">
                <BookOpen size={20} />
                Accéder aux cours
              </button>
              <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 cursor-pointer">
                <FileText size={20} />
                Voir les annales
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex w-150 h-125"
          >
            <img
              src={LogoFsiUcc}
              alt="logo-fsi-ucc"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS OVERLAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 lg:-mt-24 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <stat.icon className="text-blue-600" size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {stat.count}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ACCÈS RAPIDES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
            Accès rapides
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {accesRapide.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white px-6 py-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <card.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
            Questions fréquemment posées
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 shrink-0 ml-4"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-slate-500 font-medium border-t border-slate-50 pt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

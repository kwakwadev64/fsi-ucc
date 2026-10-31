import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, CircleHelp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqData } from '../data/faqData'

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div className="max-w-md">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-xs">
            <CircleHelp size={15} aria-hidden="true" />
            Besoin d’aide ?
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            Questions fréquentes
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Les réponses aux premières questions sur les formations, les inscriptions et les ressources de la faculté.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
          >
            Poser une question
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white">
          {faqData.map((faq, index) => {
            const isOpen = openFaqIndex === index
            const answerId = `home-faq-answer-${index}`

            return (
              <div key={faq.question} className="px-4 sm:px-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-slate-900 transition hover:text-blue-700 sm:py-6 sm:text-base"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid h-8 w-8 shrink-0 place-items-center border border-slate-200 bg-white text-slate-500"
                  >
                    <ChevronDown size={17} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-5 pr-10 text-xs leading-6 text-slate-600 sm:pb-6 sm:text-sm sm:leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

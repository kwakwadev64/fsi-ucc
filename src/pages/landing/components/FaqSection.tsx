import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqData } from '@/data/data'
import SectionTitle from './SectionTitle'

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 mb-20">
      <SectionTitle title="Questions fréquemment posées" />

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
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span className="pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400 shrink-0"
                >
                  <ChevronDown size={18} />
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
                    <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium border-t border-slate-50 pt-3">
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
  )
}

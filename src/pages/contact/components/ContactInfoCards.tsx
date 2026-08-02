import { motion } from 'framer-motion'
import { contactInfo } from '../data/contactInfo'

export default function ContactInfoCards() {
  return (
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
  )
}

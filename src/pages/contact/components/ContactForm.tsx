import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Send, Loader2 } from 'lucide-react'
import { contactSchema } from '@/pages/contact/schemas/contactSchema'
import type { ContactFormData } from '../types/types'

interface ContactFormProps {
  initialValues: ContactFormData
  isPending: boolean
  onSubmit: (values: ContactFormData, resetForm: () => void) => void
}

export default function ContactForm({
  initialValues,
  isPending,
  onSubmit,
}: ContactFormProps) {
  return (
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

      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(contactSchema)}
        onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
      >
        {() => (
          <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-xs text-red-500 mt-1 block"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jean.dupont@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-xs text-red-500 mt-1 block"
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
              <Field
                id="subject"
                name="subject"
                type="text"
                placeholder="Objet de votre message"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200"
              />
              <ErrorMessage
                name="subject"
                component="span"
                className="text-xs text-red-500 mt-1 block"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Décrivez votre demande en détail..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-all duration-200 resize-none"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="text-xs text-red-500 mt-1 block"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className={`w-full py-4 px-6 rounded-xl text-sm font-bold tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                isPending
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-[#0D3B66] hover:bg-[#0a2d4a] hover:shadow-lg hover:shadow-[#0D3B66]/25 active:scale-[0.98]'
              }`}
            >
              {isPending ? (
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
          </Form>
        )}
      </Formik>
    </motion.div>
  )
}

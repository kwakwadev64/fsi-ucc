import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Send, Loader2 } from 'lucide-react'
import { contactSchema } from '@/features/contact-form/contactSchema'
import type { ContactFormData } from '@/features/contact-form/types'

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
    <section className="lg:col-span-3 border border-slate-200 bg-white p-5 sm:p-7 md:p-9">
      <div className="mb-7 border-b border-slate-200 pb-5">
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
                  className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#0D3B66] focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
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
                  className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#0D3B66] focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
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
                className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#0D3B66] focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
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
                className="w-full resize-y border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#0D3B66] focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
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
              className={`flex w-full items-center justify-center gap-3 border border-[#0D3B66] px-6 py-4 text-sm font-bold tracking-wide text-white transition-colors ${
                isPending
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-[#0D3B66] hover:bg-[#0a2d4a]'
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
    </section>
  )
}

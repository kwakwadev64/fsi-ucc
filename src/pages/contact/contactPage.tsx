import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import { useContactForm } from './hooks/useContactForm'
import ContactHero from './components/ContactHero'
import ContactInfoCards from './components/ContactInfoCards'
import ContactForm from './components/ContactForm'
import LocationMap from './components/LocationMap'

export default function ContactPage() {
  const { initialValues, isPending, submitForm } = useContactForm()

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <ContactHero />
      <ContactInfoCards />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <ContactForm
            initialValues={initialValues}
            isPending={isPending}
            onSubmit={submitForm}
          />
          <LocationMap />
        </div>
      </div>

      <Footer />
    </div>
  )
}

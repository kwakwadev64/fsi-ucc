import { toast } from 'sonner'
import { useMutateData } from '@/hooks/useQuery'
import type { ContactFormData } from '../types/types'

const initialValues: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function useContactForm() {
  const { mutate, isPending } = useMutateData<unknown, Error, ContactFormData>(
    async formData => {
      // Transformation des données en URLSearchParams pour contourner le
      // Preflight CORS (OPTIONS) — appel natif fetch en "Requête Simple"
      const params = new URLSearchParams()
      params.append('name', formData.name)
      params.append('nom', formData.name)
      params.append('email', formData.email)
      params.append('subject', formData.subject)
      params.append('sujet', formData.subject)
      params.append('message', formData.message)

      const response = await fetch(
        'https://frnagrmi.fsiucc.com/api/contact-site',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
          body: params.toString(),
        }
      )

      // fetch ne throw pas automatiquement sur 4xx/5xx
      if (!response.ok) {
        let errorMessage = `Erreur serveur (${response.status})`
        try {
          const errorData = await response.json()
          errorMessage = errorData.message || errorData.error || errorMessage
        } catch {
          // Réponse non-JSON, on garde le message par défaut
        }
        throw new Error(errorMessage)
      }

      return await response.json()
    }
  )

  const submitForm = (values: ContactFormData, resetForm: () => void) => {
    mutate(values, {
      onSuccess: () => {
        toast.success('Votre message a été envoyé avec succès !')
        resetForm()
      },
      onError: (error: Error) => {
        toast.error(error.message || 'Une erreur est survenue.')
      },
    })
  }

  return { initialValues, isPending, submitForm }
}

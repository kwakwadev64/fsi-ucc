import { toast } from 'sonner'
import { apiClient } from '@/shared/api/client'
import { useMutateData } from '@/shared/api/query'
import type { ContactFormData } from './types'

const initialValues: ContactFormData = { name: '', email: '', subject: '', message: '' }

export function useContactForm() {
  const { mutate, isPending } = useMutateData<unknown, Error, ContactFormData>(
    async formData => {
      const body = new URLSearchParams({
        name: formData.name,
        nom: formData.name,
        email: formData.email,
        subject: formData.subject,
        sujet: formData.subject,
        message: formData.message,
      })
      const { data } = await apiClient.post('/contact-site', body, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      return data
    }
  )

  const submitForm = (values: ContactFormData, resetForm: () => void) => {
    mutate(values, {
      onSuccess: () => { toast.success('Votre message a été envoyé avec succès !'); resetForm() },
      onError: error => toast.error(error.message || 'Une erreur est survenue.'),
    })
  }

  return { initialValues, isPending, submitForm }
}

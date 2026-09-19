import axios from 'axios'
import { env } from '@/shared/config/env'

/** Client HTTP unique pour les ressources publiques de la FSI. */
export const apiClient = axios.create({
  baseURL: env.VITE_API_URL,
  headers: { Accept: 'application/json' },
})

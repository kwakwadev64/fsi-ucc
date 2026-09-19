import { env } from '@/shared/config/env'

export function storageUrl(path: string): string {
  const origin = new URL(env.VITE_API_URL).origin
  return `${origin}/storage/${path.replace(/^\//, '')}`
}

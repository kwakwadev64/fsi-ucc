import axios from 'axios'
import { apiClient } from '@/shared/api/client'

type PublicChatbotResponse = {
  success: boolean
  data?: {
    message?: string
  }
}

export async function sendPublicChatbotMessage(message: string): Promise<string> {
  const { data } = await apiClient.post<PublicChatbotResponse>(
    '/public/chatbot/message',
    { message },
  )

  const answer = data.data?.message?.trim()

  if (!data.success || !answer) {
    throw new Error('La réponse du chatbot est indisponible.')
  }

  return answer
}

export function getPublicChatbotErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error) && error.response?.status === 429) {
    return 'Le chatbot est très sollicité. Réessayez dans quelques instants.'
  }

  return 'Le chatbot est momentanément indisponible. Réessayez plus tard.'
}


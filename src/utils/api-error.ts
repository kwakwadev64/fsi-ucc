import axios from 'axios'

/**
 * Extrait le véritable message d'erreur d'une exception Axios
 * @param error L'erreur capturée par l'application
 * @default "Une erreur réseau inattendue est survenue."
 */
export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    // Si le serveur a répondu avec un code d'erreur
    if (error.response) {
      return (
        error.response.data?.message ||
        `Erreur serveur (${error.response.status})`
      )
    }
    // Si la requête a été faite mais aucune réponse n'a été reçue (problème de réseau)
    if (error.request) {
      return 'Le serveur ne répond pas. Veuillez vérifier votre connexion.'
    }
  }

  // Si c'est une erreur JavaScript classique ou autre
  if (error instanceof Error) {
    return error.message
  }

  return 'Une erreur réseau inattendue est survenue.'
}

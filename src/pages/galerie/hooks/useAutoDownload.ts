import { useEffect } from 'react'

export function useAutoDownload(isLoggedIn: boolean) {
  const triggerDownload = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `FSI-UCC-Famille.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      window.open(imageUrl, '_blank')
    }
  }

  // Déclenchement automatique du téléchargement après redirection login
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const autoDownloadUrl = queryParams.get('downloadUrl')

    if (isLoggedIn && autoDownloadUrl) {
      triggerDownload(autoDownloadUrl)
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [isLoggedIn])

  const handleDownloadClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    e.preventDefault()
    if (isLoggedIn) {
      triggerDownload(imageUrl)
    } else {
      const currentPath = window.location.pathname
      const redirectUrl = `/login?redirect=${encodeURIComponent(currentPath)}&downloadUrl=${encodeURIComponent(imageUrl)}`
      window.location.href = redirectUrl
    }
  }

  return { handleDownloadClick }
}

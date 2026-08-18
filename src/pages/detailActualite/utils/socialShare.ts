export function getTwitterShareUrl(title: string, url: string): string {
  const params = new URLSearchParams({ url, text: title })
  return `https://twitter.com/intent/tweet?${params.toString()}`
}

export async function shareOrCopyLink(
  title: string,
  url: string
): Promise<'shared' | 'copied'> {
  if (navigator.share) {
    await navigator.share({ title, url })
    return 'shared'
  }
  await navigator.clipboard.writeText(url)
  return 'copied'
}

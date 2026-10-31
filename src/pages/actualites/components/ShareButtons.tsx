import { Link2 } from 'lucide-react'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { FSI_FACEBOOK_URL, FSI_LINKEDIN_URL } from '@/shared/config/social'
import { getTwitterShareUrl } from '../utils/socialShare'

interface ShareButtonsProps {
  title: string
  url: string
  onCopyLink: () => void
}

export default function ShareButtons({
  title,
  url,
  onCopyLink,
}: ShareButtonsProps) {
  return (
    <div className="border border-slate-200 bg-white p-5">
      <h3 className="border-b border-slate-200 pb-3 text-sm font-bold text-slate-900">
        Partager cette actualité
      </h3>
      <div className="flex items-center gap-2">
        <a
          href={FSI_FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:bg-blue-800 hover:text-white"
          aria-label="Partager sur Facebook"
        >
          <FiFacebook className="w-4 h-4" />
        </a>
        <a
          href={getTwitterShareUrl(title, url)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:bg-blue-800 hover:text-white"
          aria-label="Partager sur X"
        >
          <FiTwitter className="w-4 h-4" />
        </a>
        <a
          href={FSI_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:bg-blue-800 hover:text-white"
          aria-label="Partager sur LinkedIn"
        >
          <FiLinkedin className="w-4 h-4" />
        </a>
        <button
          onClick={onCopyLink}
          className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:bg-cyan-200 hover:text-blue-900"
          aria-label="Copier le lien"
        >
          <Link2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

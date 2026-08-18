import { Link2 } from 'lucide-react'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { FSI_FACEBOOK_URL, FSI_LINKEDIN_URL } from '../constants/constant'
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
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-bold text-slate-900 mb-4">
        Partager cette actualité
      </h3>
      <div className="flex items-center gap-2">
        <a
          href={FSI_FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#0B2545] hover:text-white transition"
          aria-label="Partager sur Facebook"
        >
          <FiFacebook className="w-4 h-4" />
        </a>
        <a
          href={getTwitterShareUrl(title, url)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#0B2545] hover:text-white transition"
          aria-label="Partager sur X"
        >
          <FiTwitter className="w-4 h-4" />
        </a>
        <a
          href={FSI_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#0B2545] hover:text-white transition"
          aria-label="Partager sur LinkedIn"
        >
          <FiLinkedin className="w-4 h-4" />
        </a>
        <button
          onClick={onCopyLink}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#F2A93B] hover:text-[#0B2545] transition"
          aria-label="Copier le lien"
        >
          <Link2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

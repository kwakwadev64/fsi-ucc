import NoticeButton from './NoticeButton'

interface RegistrationNoticeProps {
  formationName: string
  variant?: 'primary' | 'outline'
  className?: string
}

export default function RegistrationNotice({
  formationName,
  variant = 'primary',
  className = '',
}: RegistrationNoticeProps) {
  return (
    <NoticeButton
      buttonLabel="S’inscrire à la formation"
      buttonAriaLabel={`S’inscrire à la formation ${formationName}`}
      dialogTitle="Inscription indisponible"
      message={`Le formulaire d’enregistrement pour la formation ${formationName} est actuellement indisponible. Merci de réessayer plus tard.`}
      variant={variant}
      className={className}
    />
  )
}

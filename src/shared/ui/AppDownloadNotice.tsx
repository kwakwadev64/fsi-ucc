import { Download } from "lucide-react";
import NoticeButton from "./NoticeButton";

interface AppDownloadNoticeProps {
  className?: string;
  variant?: "primary" | "outline" | "light";
}

export default function AppDownloadNotice({
  className = "",
  variant = "light",
}: AppDownloadNoticeProps) {
  return (
    <NoticeButton
      buttonLabel="Télécharger l’application"
      dialogTitle="Application bientôt disponible"
      message="L’application FSI-UCC sera disponible dans peu de temps. Revenez bientôt pour la télécharger."
      variant={variant}
      className={className}
      icon={Download}
    />
  );
}

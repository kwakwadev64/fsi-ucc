interface ReadingProgressBarProps {
  progress: number
}

export default function ReadingProgressBar({
  progress,
}: ReadingProgressBarProps) {
  return (
    <div className="fixed top-0 inset-x-0 h-1 z-40 bg-transparent">
      <div
        className="h-full bg-[#F2A93B] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default function NewsDetailLoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F8FB]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-[#0B2545]/15 border-t-[#0B2545] rounded-full animate-spin" />
        <p className="text-slate-500 font-medium text-sm">
          Chargement de l&apos;actualité...
        </p>
      </div>
    </div>
  )
}

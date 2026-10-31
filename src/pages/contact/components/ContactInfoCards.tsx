import { contactInfo } from '../data/contactInfo'

export default function ContactInfoCards() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map(info => (
          <article key={info.title} className="border-b border-r border-slate-200 bg-white px-5 py-5">
            <div className="flex items-center gap-3">
              <info.icon className="h-5 w-5 shrink-0 text-[#0D3B66]" aria-hidden="true" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{info.title}</h2>
            </div>
            <div className="mt-3 space-y-1 pl-8">
              {info.details.map((detail, index) => (
                <p key={`${info.title}-${index}`} className="text-sm leading-6 text-slate-800">{detail}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

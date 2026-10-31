export default function LocationMap() {
  return (
    <section className="lg:col-span-2 flex h-full min-h-100 flex-col border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-5">
        <h3 className="text-lg font-bold text-black">Notre localisation</h3>
        <p className="mt-1 text-sm text-gray-500">Université Catholique du Congo</p>
      </div>
      <div className="w-full grow bg-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5085603417757!2d15.36398917586561!3d-4.391151695582963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a36fa33c644d5%3A0xe103ee5071197771!2sUniversit%C3%A9%20Catholique%20du%20Congo!5e0!3m2!1sfr!2scd!4v1710000000000!5m2!1sfr!2scd"
          className="h-full min-h-87.5 w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de localisation de l'UCC"
        />
      </div>
    </section>
  )
}

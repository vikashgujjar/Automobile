export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden text-white text-center px-6 py-24 md:py-28">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-stone-700 to-stone-900">
        <img
          src="./ServicesImg/66.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-deep/90 to-ink/85"></div>
      <div className="relative z-20 max-w-[680px] mx-auto">
        <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-white bg-white/15 border border-white/40 px-3.5 py-1.5 rounded-lg">
          <span className="w-1.5 h-1.5 rounded-sm bg-white rotate-45"></span>Ready when you are
        </span>
        <h2 className="font-display font-bold tracking-tight text-[2.1rem] md:text-[3.5rem] mt-5 mb-4">
          Book your car service today
        </h2>
        <p className="text-[1.14rem] opacity-95 mb-8">
          Get expert service, transparent pricing and guaranteed satisfaction — backed by a written warranty.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-ink bg-white hover:-translate-y-0.5 transition-transform"
          >
            Book Service
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white border-[1.5px] border-white/60 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+917899129529"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white border-[1.5px] border-white/60 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

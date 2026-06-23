export default function ServiceShowcase() {
  return (
    <section id="showcase" className="bg-stone-950 py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand bg-brand/15 border border-brand/40 px-3.5 py-1.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45"></span>Our work
            </span>
            <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3rem] mt-5 text-white">
              Services that <span className="text-brand">make a difference</span>
            </h2>
            <p className="text-stone-400 text-[1.05rem] mt-3 max-w-[520px]">
              From a simple wash to a full body restoration — every job handled with the same precision and care.
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            View all 14 services
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Bento image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 grid-rows-[auto] gap-3">

          {/* 1. Car Wash — tall left hero (spans 4 cols, 2 rows) */}
          <a
            href="#book"
            className="group relative col-span-2 md:col-span-1 lg:col-span-4 lg:row-span-2 rounded-2xl overflow-hidden bg-stone-800 min-h-[260px] md:min-h-[340px] lg:min-h-[500px]"
          >
            <img
              src="./ServicesImg/45.png"
              alt="Car Wash & Detailing"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block font-mono text-[.6rem] font-bold tracking-widest text-brand uppercase mb-2">From &#x20B9;250</span>
              <h3 className="font-display font-bold text-xl text-white mb-1">Car Wash &amp; Detailing</h3>
              <p className="text-[.8rem] text-white/65 leading-snug mb-3">Foam wash, interior clean &amp; full exterior shine.</p>
              <span className="inline-flex items-center gap-1.5 text-[.75rem] font-semibold text-white bg-brand px-3 py-1.5 rounded-full group-hover:bg-brand-deep transition-colors">
                Book now{' '}
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>

          {/* 2. Denting & Painting — top centre (spans 4 cols) */}
          <a
            href="#book"
            className="group relative lg:col-span-4 rounded-2xl overflow-hidden bg-stone-800 min-h-[200px] md:min-h-[240px]"
          >
            <img
              src="./ServicesImg/13.png"
              alt="Denting & Painting"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block font-mono text-[.58rem] font-bold tracking-widest text-rose-400 uppercase mb-1">From &#x20B9;1,000</span>
              <h3 className="font-display font-bold text-[1.05rem] text-white">Denting &amp; Painting</h3>
              <p className="text-[.75rem] text-white/60 mt-0.5">Scratch removal &amp; colour-matched panel repair.</p>
            </div>
          </a>

          {/* 3. Periodic Servicing — top right (spans 4 cols) */}
          <a
            href="#book"
            className="group relative lg:col-span-4 rounded-2xl overflow-hidden bg-stone-800 min-h-[200px] md:min-h-[240px]"
          >
            <img
              src="./ServicesImg/5.png"
              alt="Periodic Servicing"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block font-mono text-[.58rem] font-bold tracking-widest text-emerald-400 uppercase mb-1">From &#x20B9;1,000</span>
              <h3 className="font-display font-bold text-[1.05rem] text-white">Periodic Servicing</h3>
              <p className="text-[.75rem] text-white/60 mt-0.5">Oil change, filters &amp; full multi-point inspection.</p>
            </div>
          </a>

          {/* 4. AC Repair — bottom centre (spans 4 cols) */}
          <a
            href="#book"
            className="group relative lg:col-span-4 rounded-2xl overflow-hidden bg-stone-800 min-h-[200px] md:min-h-[240px]"
          >
            <img
              src="./ServicesImg/96.png"
              alt="AC Repair"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block font-mono text-[.58rem] font-bold tracking-widest text-indigo-400 uppercase mb-1">From &#x20B9;1,000</span>
              <h3 className="font-display font-bold text-[1.05rem] text-white">AC Repair &amp; Gas Refilling</h3>
              <p className="text-[.75rem] text-white/60 mt-0.5">Compressor check, gas refill &amp; cooling restore.</p>
            </div>
          </a>

          {/* 5. Tyre & Wheel — bottom right (spans 4 cols) */}
          <a
            href="#book"
            className="group relative lg:col-span-4 rounded-2xl overflow-hidden bg-stone-800 min-h-[200px] md:min-h-[240px]"
          >
            <img
              src="./ServicesImg/50.png"
              alt="Tyre & Wheel Balancing"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block font-mono text-[.58rem] font-bold tracking-widest text-blue-400 uppercase mb-1">From &#x20B9;300</span>
              <h3 className="font-display font-bold text-[1.05rem] text-white">Tyre &amp; Wheel Balancing</h3>
              <p className="text-[.75rem] text-white/60 mt-0.5">New tyre fitting, balancing &amp; alignment check.</p>
            </div>
          </a>

        </div>
        {/* end grid */}

        {/* bottom trust row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[.82rem] text-stone-500">
          <span className="flex items-center gap-2 text-stone-400">
            <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All brands serviced
          </span>
          <span className="w-px h-4 bg-stone-700 hidden sm:block"></span>
          <span className="flex items-center gap-2 text-stone-400">
            <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Genuine parts guaranteed
          </span>
          <span className="w-px h-4 bg-stone-700 hidden sm:block"></span>
          <span className="flex items-center gap-2 text-stone-400">
            <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Free pickup &amp; drop
          </span>
          <span className="w-px h-4 bg-stone-700 hidden sm:block"></span>
          <span className="flex items-center gap-2 text-stone-400">
            <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Written warranty on every job
          </span>
        </div>

      </div>
    </section>
  );
}

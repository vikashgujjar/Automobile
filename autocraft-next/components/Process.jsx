export default function Process() {
  return (
    <section id="process" className="bg-orange-50 py-20 md:py-28 overflow-hidden">

      {/* faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(0,0,0,.04) 1px,transparent 1px)', backgroundSize: '28px 28px' }}
      ></div>

      <div className="max-w-[1240px] mx-auto px-6 relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16">
          <div className="max-w-[580px]">
            <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45"></span>How it works
            </span>
            <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3rem] mt-5 mb-3 leading-[1.1]">
              Six steps from <span className="text-brand">drop-off to delivery</span>
            </h2>
            <p className="text-stone-500 text-[1.05rem]">
              A transparent journey at every stage — no surprises, no hidden work, no delays.
            </p>
          </div>
          {/* step counter strip */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <span className="w-8 h-8 rounded-lg bg-brand text-white font-display font-bold text-sm grid place-items-center">1</span>
            <span className="w-5 h-px bg-stone-300 hidden sm:block"></span>
            <span className="w-8 h-8 rounded-lg bg-blue-500 text-white font-display font-bold text-sm grid place-items-center">2</span>
            <span className="w-5 h-px bg-stone-300 hidden sm:block"></span>
            <span className="w-8 h-8 rounded-lg bg-violet-500 text-white font-display font-bold text-sm grid place-items-center">3</span>
            <span className="w-5 h-px bg-stone-300 hidden sm:block"></span>
            <span className="w-8 h-8 rounded-lg bg-rose-500 text-white font-display font-bold text-sm grid place-items-center">4</span>
            <span className="w-5 h-px bg-stone-300 hidden sm:block"></span>
            <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white font-display font-bold text-sm grid place-items-center">5</span>
            <span className="w-5 h-px bg-stone-300 hidden sm:block"></span>
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-white font-display font-bold text-sm grid place-items-center">6</span>
          </div>
        </div>

        {/* 3×2 card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* 01 Inspection — brand/orange */}
          <div className="group relative bg-orange-50 border border-orange-100 rounded-3xl p-6 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 cursor-default">
            <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-display font-extrabold text-[7rem] leading-none text-brand/10 group-hover:text-brand/18 transition-colors select-none -ml-2 -mt-3">01</div>
            <div className="w-12 h-12 rounded-2xl bg-brand/15 text-brand grid place-items-center -mt-7 mb-4 relative z-10 group-hover:bg-brand group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.7" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[.6rem] font-bold tracking-[.12em] text-brand uppercase bg-brand/10 px-2 py-0.5 rounded">Step 01</span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink mb-2">Inspection</h4>
            <p className="text-[.88rem] text-stone-500 leading-relaxed">Full visual walk-around &amp; road-test check on arrival to map every issue.</p>
          </div>

          {/* 02 Diagnosis — blue */}
          <div className="group relative bg-blue-50 border border-blue-100 rounded-3xl p-6 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 cursor-default">
            <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-display font-extrabold text-[7rem] leading-none text-blue-400/12 group-hover:text-blue-400/20 transition-colors select-none -ml-2 -mt-3">02</div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-600 grid place-items-center -mt-7 mb-4 relative z-10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[.6rem] font-bold tracking-[.12em] text-blue-600 uppercase bg-blue-500/10 px-2 py-0.5 rounded">Step 02</span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink mb-2">Diagnosis</h4>
            <p className="text-[.88rem] text-stone-500 leading-relaxed">Dealer-level ECU scan pinpoints every fault code — nothing gets missed.</p>
          </div>

          {/* 03 Approval — violet */}
          <div className="group relative bg-violet-50 border border-violet-100 rounded-3xl p-6 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300 cursor-default">
            <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5 text-violet-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-display font-extrabold text-[7rem] leading-none text-violet-400/12 group-hover:text-violet-400/20 transition-colors select-none -ml-2 -mt-3">03</div>
            <div className="w-12 h-12 rounded-2xl bg-violet-500/15 text-violet-600 grid place-items-center -mt-7 mb-4 relative z-10 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="m9 14 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[.6rem] font-bold tracking-[.12em] text-violet-600 uppercase bg-violet-500/10 px-2 py-0.5 rounded">Step 03</span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink mb-2">Approval</h4>
            <p className="text-[.88rem] text-stone-500 leading-relaxed">Itemised estimate sent to you — work only begins after your go-ahead.</p>
          </div>

          {/* 04 Repair — rose */}
          <div className="group relative bg-rose-50 border border-rose-100 rounded-3xl p-6 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 cursor-default">
            <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-display font-extrabold text-[7rem] leading-none text-rose-400/12 group-hover:text-rose-400/20 transition-colors select-none -ml-2 -mt-3">04</div>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-600 grid place-items-center -mt-7 mb-4 relative z-10 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.3-.6-.6-2.3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[.6rem] font-bold tracking-[.12em] text-rose-600 uppercase bg-rose-500/10 px-2 py-0.5 rounded">Step 04</span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink mb-2">Repair</h4>
            <p className="text-[.88rem] text-stone-500 leading-relaxed">Certified technicians use genuine parts — no shortcuts, no cheap substitutes.</p>
          </div>

          {/* 05 Quality Check — emerald */}
          <div className="group relative bg-emerald-50 border border-emerald-100 rounded-3xl p-6 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300 cursor-default">
            <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-display font-extrabold text-[7rem] leading-none text-emerald-400/12 group-hover:text-emerald-400/20 transition-colors select-none -ml-2 -mt-3">05</div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 grid place-items-center -mt-7 mb-4 relative z-10 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" />
                <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[.6rem] font-bold tracking-[.12em] text-emerald-600 uppercase bg-emerald-500/10 px-2 py-0.5 rounded">Step 05</span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink mb-2">Quality Check</h4>
            <p className="text-[.88rem] text-stone-500 leading-relaxed">30-point QC inspection and a final road test before we call you.</p>
          </div>

          {/* 06 Delivery — amber */}
          <div className="group relative bg-amber-50 border border-amber-100 rounded-3xl p-6 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 cursor-default">
            <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-display font-extrabold text-[7rem] leading-none text-amber-400/12 group-hover:text-amber-400/20 transition-colors select-none -ml-2 -mt-3">06</div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 grid place-items-center -mt-7 mb-4 relative z-10 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 11l8 8M16 16l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[.6rem] font-bold tracking-[.12em] text-amber-600 uppercase bg-amber-500/10 px-2 py-0.5 rounded">Step 06</span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink mb-2">Delivery</h4>
            <p className="text-[.88rem] text-stone-500 leading-relaxed">Washed, ready and handed back with a written warranty on all work done.</p>
          </div>

        </div>
        {/* end grid */}

        {/* bottom trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[.82rem] text-stone-400 font-medium">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No work without approval
          </span>
          <span className="w-px h-4 bg-stone-200 hidden sm:block"></span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Real-time updates via WhatsApp
          </span>
          <span className="w-px h-4 bg-stone-200 hidden sm:block"></span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Written warranty on every job
          </span>
          <span className="w-px h-4 bg-stone-200 hidden sm:block"></span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Free pickup &amp; drop
          </span>
        </div>

      </div>
    </section>
  );
}

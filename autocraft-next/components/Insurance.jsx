const CheckIcon = ({ color = 'text-brand' }) => (
  <svg className={`w-4 h-4 ${color} shrink-0`} viewBox="0 0 24 24" fill="none">
    <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Insurance() {
  return (
    <section id="insurance" className="bg-white py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-[580px]">
            <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45"></span>Insurance services
            </span>
            <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3rem] mt-5 mb-3 leading-[1.1]">
              We handle your <span className="text-brand">insurance too</span>
            </h2>
            <p className="text-stone-500 text-[1.05rem]">
              From buying a new policy to renewing it on time and settling claims — we guide you through every step so you never feel lost.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm text-white bg-brand hover:bg-brand-deep hover:-translate-y-0.5 transition-all shadow-lg shadow-brand/30"
          >
            Get insurance help
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1: New Insurance */}
          <div className="group relative rounded-3xl border border-stone-200 bg-gradient-to-br from-blue-50 to-white p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-blue-500 to-sky-400"></div>
            <div className="absolute right-4 bottom-4 font-display font-extrabold text-[5.5rem] leading-none text-blue-400/8 select-none">01</div>
            <div className="w-14 h-14 rounded-2xl bg-blue-100 group-hover:bg-blue-500 transition-all duration-300 grid place-items-center text-blue-600 group-hover:text-white mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-[1.25rem] text-ink mb-3">New Insurance</h3>
            <p className="text-[.9rem] text-stone-500 leading-relaxed mb-5">
              We help you choose the right car insurance plan — comprehensive or third-party — compare quotes from top insurers and get covered instantly.
            </p>
            <ul className="space-y-2 mb-7">
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-blue-500" />Comprehensive &amp; third-party plans</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-blue-500" />Compare multiple insurers</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-blue-500" />Zero paperwork hassle</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-blue-500" />Instant policy issuance</li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[.83rem] font-semibold bg-blue-100 text-blue-700 group-hover:bg-blue-500 group-hover:text-white transition-all">
              Get new policy <ArrowIcon />
            </a>
          </div>

          {/* Card 2: Insurance Renewal */}
          <div className="group relative rounded-3xl border border-stone-200 bg-gradient-to-br from-emerald-50 to-white p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-emerald-500 to-teal-400"></div>
            <div className="absolute right-4 bottom-4 font-display font-extrabold text-[5.5rem] leading-none text-emerald-400/8 select-none">02</div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 group-hover:bg-emerald-500 transition-all duration-300 grid place-items-center text-emerald-600 group-hover:text-white mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M21 12a9 9 0 1 1-6.22-8.56" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M21 3v5h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-[1.25rem] text-ink mb-3">Insurance Renewal</h3>
            <p className="text-[.9rem] text-stone-500 leading-relaxed mb-5">
              Don&apos;t let your policy lapse. We remind you before expiry, compare renewal quotes and renew your insurance quickly — keeping your car protected without a break.
            </p>
            <ul className="space-y-2 mb-7">
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-emerald-500" />Timely renewal reminders</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-emerald-500" />Best renewal rates guaranteed</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-emerald-500" />No break-in coverage</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-emerald-500" />NCB (No Claim Bonus) preserved</li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[.83rem] font-semibold bg-emerald-100 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              Renew policy <ArrowIcon />
            </a>
          </div>

          {/* Card 3: Claims Assistance */}
          <div className="group relative rounded-3xl border border-stone-200 bg-gradient-to-br from-orange-50 to-white p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-brand to-amber-400"></div>
            <div className="absolute right-4 bottom-4 font-display font-extrabold text-[5.5rem] leading-none text-brand/8 select-none">03</div>
            <div className="w-14 h-14 rounded-2xl bg-orange-100 group-hover:bg-brand transition-all duration-300 grid place-items-center text-brand group-hover:text-white mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-[1.25rem] text-ink mb-3">Claims Assistance</h3>
            <p className="text-[.9rem] text-stone-500 leading-relaxed mb-5">
              Accident or damage? We handle the entire insurance claim process on your behalf — from photo documentation and surveyor visits to repair approval and cashless settlement.
            </p>
            <ul className="space-y-2 mb-7">
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-brand" />End-to-end claim filing</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-brand" />Cashless repair at our garage</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-brand" />Surveyor coordination</li>
              <li className="flex items-center gap-2.5 text-[.84rem] text-stone-600"><CheckIcon color="text-brand" />Fast settlement support</li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[.83rem] font-semibold bg-orange-100 text-brand group-hover:bg-brand group-hover:text-white transition-all">
              File a claim <ArrowIcon />
            </a>
          </div>

        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-ink to-stone-800 text-white px-8 py-6 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand grid place-items-center shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="font-display font-bold text-lg">Need insurance help right now?</div>
              <div className="text-stone-400 text-sm mt-0.5">Call or WhatsApp us — we&apos;ll guide you in minutes.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+917899129529"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/917899129529?text=Hi%20AutoCraft%2C%20I%20need%20insurance%20assistance"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-[#25d366] hover:bg-[#1fba5a] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

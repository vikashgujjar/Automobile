export default function Footer() {
  return (
    <footer className="bg-ink text-stone-300 pt-[74px] pb-8">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 mb-12">

          {/* Brand column */}
          <div>
            <a href="#top" className="flex items-center gap-3 font-display font-extrabold text-[1.18rem] text-white">
              <img src="/logo.png" className="w-28 h-auto filter brightness-0 invert" alt="AutoCraft logo" />
            </a>
            <p className="my-5 text-sm text-stone-400 max-w-sm">
              Multi-brand car service &amp; auto body shop in Karnataka. Certified technicians, genuine parts and dealer-level diagnostics for everyday and luxury vehicles.
            </p>
            <div className="flex gap-2.5">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl grid place-items-center border border-white/10 bg-white/5 hover:border-brand hover:bg-brand/15 hover:-translate-y-0.5 transition-all">
                <svg className="w-[19px] h-[19px] text-white" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-xl grid place-items-center border border-white/10 bg-white/5 hover:border-brand hover:bg-brand/15 hover:-translate-y-0.5 transition-all">
                <svg className="w-[19px] h-[19px] text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-xl grid place-items-center border border-white/10 bg-white/5 hover:border-brand hover:bg-brand/15 hover:-translate-y-0.5 transition-all">
                <svg className="w-[19px] h-[19px] text-white" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M11 9.5v5l4-2.5z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://wa.me/917899129529" aria-label="WhatsApp" className="w-10 h-10 rounded-xl grid place-items-center border border-white/10 bg-white/5 hover:border-brand hover:bg-brand/15 hover:-translate-y-0.5 transition-all">
                <svg className="w-[19px] h-[19px] text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h5 className="font-mono text-[.72rem] tracking-[.16em] uppercase text-brand mb-5">Services</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-brand transition-colors">Periodic Car Service</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Denting &amp; Painting</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Ceramic Coating</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Car Diagnostics</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Key Programming</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Battery &amp; Breakdown</a></li>
            </ul>
          </div>

          {/* Hours + Quick Links column */}
          <div>
            <h5 className="font-mono text-[.72rem] tracking-[.16em] uppercase text-brand mb-5">Working Hours</h5>
            <ul className="space-y-2.5 text-sm">
              <li>Mon – Sat · 9 AM – 8 PM</li>
              <li>Sunday · 10 AM – 4 PM</li>
              <li className="text-brand">Roadside help · 24×7</li>
            </ul>
            <h5 className="font-mono text-[.72rem] tracking-[.16em] uppercase text-brand mt-6 mb-5">Quick Links</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#showcase" className="hover:text-brand transition-colors">Our Work</a></li>
              <li><a href="#reviews" className="hover:text-brand transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-brand transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h5 className="font-mono text-[.72rem] tracking-[.16em] uppercase text-brand mb-5">Get in touch</h5>
            <div className="flex gap-3 items-start mb-3.5 text-sm">
              <svg className="w-[17px] h-[17px] text-brand shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              No. 1, D B Suresh Complex, Dhasarahalli Main Road, Hebbal, Bangalore &#x2013; 560024
            </div>
            <div className="flex gap-3 items-start mb-3.5 text-sm">
              <svg className="w-[17px] h-[17px] text-brand shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span>
                <a href="tel:07947133420" className="block hover:text-brand transition-colors">079 4713 3420</a>
                <a href="tel:+917899129529" className="block hover:text-brand transition-colors">+91 78991 29529</a>
              </span>
            </div>
            <a
              href="https://wa.me/917899129529"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-white bg-brand hover:bg-brand-deep hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-4 text-[.82rem] font-mono text-stone-500">
          <span>© 2026 High Gear Motors. All rights reserved.| Designed & Developed by <a href="https://www.futuretouch.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Future IT Touch Pvt. Ltd.</a></span>
        </div>
      </div>
    </footer>
  );
}

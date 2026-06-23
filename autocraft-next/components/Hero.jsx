'use client';
import { useState, useEffect } from 'react';

const SLIDES = [
  { src: '/ServicesImg/92.png', alt: 'Luxury car workshop' },
  { src: '/ServicesImg/5.png',  alt: 'Mechanic at work' },
  { src: '/ServicesImg/10.png', alt: 'Car detailing' },
  { src: '/ServicesImg/16.png', alt: 'Premium car' },
];

const BRANDS = ['', 'Audi', 'BMW', 'Mercedes-Benz', 'Toyota', 'Honda', 'Hyundai', 'Kia', 'Volkswagen', 'Skoda', 'Mahindra', 'Tata', 'Volvo', 'Jaguar', 'Land Rover', 'Porsche', 'Maruti Suzuki', 'Ford', 'Lexus', 'Jeep', 'Other'];
const SERVICES = ['', 'Car Wash Service', 'Periodic / General Service', 'Premium / Luxury Car Service', 'Denting & Painting', 'Detailing & Ceramic Coating', 'Interior Deep Cleaning', 'Diagnostics & Electrical', 'Key Programming', 'Windshield & Glass', 'Battery & Breakdown', 'Accessories & Seat Covers'];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', brand: '', date: '', service: '' });
  const [note, setNote] = useState('We reply within minutes during working hours.');

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Hi AutoCraft,\nName: ${form.name}\nPhone: ${form.phone}\nCar Brand: ${form.brand || '-'}\nDate: ${form.date || '-'}\nService: ${form.service || '-'}`;
    window.open(`https://wa.me/917899129529?text=${encodeURIComponent(msg)}`, '_blank');
    setNote('Opening WhatsApp… we\'ll get back to you shortly!');
  }

  return (
    <>
      <section id="book" className="relative min-h-screen flex items-center pt-[78px] overflow-hidden bg-ink">
        {/* background slides */}
        <div className="absolute inset-0 z-0">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-[1200ms]"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <img src={s.src} className={`w-full h-full object-cover ${i === 0 ? 'animate-kenburns' : ''}`} alt={s.alt} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/60 to-ink/40" />

        <div className="relative z-20 w-full max-w-[1240px] mx-auto px-6 py-16 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          {/* left copy */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand bg-brand/15 border border-brand/40 px-3.5 py-1.5 rounded-lg backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Multi-brand workshop · Est. 2010
            </span>
            <h1 className="font-display font-extrabold tracking-[-.035em] leading-[1.03] text-[2.7rem] sm:text-5xl xl:text-[3rem] mt-6">
              Your trusted multi-brand <span className="text-brand">car service</span>&nbsp;&amp;&nbsp;auto body shop
            </h1>
            <p className="text-white/75 text-[1.16rem] mt-6 mb-8 max-w-[540px]">
              Premium servicing, diagnostics, denting &amp; painting, detailing, battery replacement and luxury car care — all under one roof, by certified technicians.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-9">
              <a href="#book" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-brand hover:bg-brand-deep hover:-translate-y-0.5 transition-all shadow-lg shadow-brand/40">
                Book Service
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="tel:+917899129529" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all backdrop-blur">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                Call Now
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
              {[['text-emerald-400', 'Certified Technicians'], ['text-sky-400', 'Genuine Parts'], ['text-violet-400', 'Transparent Pricing']].map(([color, label]) => (
                <li key={label} className="flex items-center gap-2">
                  <svg className={`w-[18px] h-[18px] ${color}`} viewBox="0 0 24 24" fill="none">
                    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  {label}
                </li>
              ))}
            </ul>
            {/* dots */}
            <div className="flex gap-2 mt-9">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-brand w-6' : 'bg-white/40'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* right: booking form */}
          <div>
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 shadow-card border border-white/40">
              <div className="flex items-center gap-3 mb-1">
                <span className="w-10 h-10 rounded-xl bg-brand grid place-items-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M8 2v3M16 2v3M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold leading-none text-ink">Book your service</h2>
                  <p className="text-xs text-stone-500 mt-1">Free quote in minutes · No obligation</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1">Name</label>
                    <input name="name" required placeholder="Your name" value={form.name} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl bg-paper border border-stone-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-ink" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1">Phone</label>
                    <input name="phone" required type="tel" placeholder="Mobile number" value={form.phone} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl bg-paper border border-stone-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-ink" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1">Car brand</label>
                    <select name="brand" value={form.brand} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl bg-paper border border-stone-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-ink">
                      {BRANDS.map((b) => <option key={b} value={b}>{b || 'Select brand'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1">Date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl bg-paper border border-stone-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-ink" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">Service needed</label>
                  <select name="service" value={form.service} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl bg-paper border border-stone-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-ink">
                    {SERVICES.map((s) => <option key={s} value={s}>{s || 'Select a service'}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-brand hover:bg-brand-deep transition-all shadow-lg shadow-brand/30">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21z" fill="currentColor" />
                  </svg>
                  Book on WhatsApp
                </button>
                <p className="text-center text-xs text-stone-400">{note}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* keyword marquee strip */}
      <div className="bg-brand text-white py-3.5 overflow-hidden">
        <div className="flex gap-8 w-max animate-marquee font-display font-semibold text-sm uppercase tracking-wide whitespace-nowrap">
          {['Multi-Brand Service', 'Denting & Painting', '3M Ceramic Coating', 'Car Detailing', 'Computer Scanning', 'Key Programming', 'Windshield Replacement', 'Battery & Roadside', 'Luxury Car Repair'].flatMap((t, i, a) => [
            ...a,
          ]).slice(0, 18).map((t, i) => (
            <span key={i}>★ {t}</span>
          ))}
        </div>
      </div>
    </>
  );
}

'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', car: '', service: '', message: '' });
  const [note, setNote] = useState('');

  function handle(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    const msg = `Hi AutoCraft,\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car || '-'}\nService: ${form.service || '-'}\nMessage: ${form.message || '-'}`;
    window.open(`https://wa.me/917899129529?text=${encodeURIComponent(msg)}`, '_blank');
    setNote('Opening WhatsApp… we\'ll get back to you shortly.');
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all';

  return (
    <section id="contact" className="bg-orange-50 py-20 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6">

        <div className="max-w-[600px] mb-14">
          <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45" />
            Get in touch
          </span>
          <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3rem] mt-5 mb-3">
            Visit us or <span className="text-brand">drop a message</span>
          </h2>
          <p className="text-stone-500 text-[1.05rem]">Our team is ready to help — walk in, call, or fill the form and we'll get back to you promptly.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 xl:gap-14">

          {/* LEFT: Info cards */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 grid place-items-center text-brand shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-ink mb-1.5">Workshop Address</div>
                <div className="text-[.9rem] text-stone-500 leading-relaxed">
                  No. 1, D B Suresh Complex,<br />Near Shoba Moon Stone Apartments,<br />Dhasarahalli Main Road, Hebbal,<br />Bangalore &#x2013; 560024, Karnataka
                </div>
                <a href="https://maps.google.com/?q=Dhasarahalli+Main+Road+Hebbal+Bangalore" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-3 text-[.8rem] font-semibold text-brand hover:underline">
                  Open in Google Maps
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <path d="M18 13v6H6V7h6M15 3h6v6M10 14 21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 grid place-items-center text-brand shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-ink mb-1.5">Call Us</div>
                <a href="tel:07947133420" className="flex items-center gap-2 text-[.9rem] text-stone-500 hover:text-brand transition-colors mb-1.5">
                  <span className="font-mono text-[.65rem] bg-stone-100 text-stone-400 px-1.5 py-0.5 rounded">Landline</span>079 4713 3420
                </a>
                <a href="tel:+917899129529" className="flex items-center gap-2 text-[.9rem] text-stone-500 hover:text-brand transition-colors">
                  <span className="font-mono text-[.65rem] bg-brand/10 text-brand px-1.5 py-0.5 rounded">Mobile</span>+91 78991 29529
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 grid place-items-center text-brand shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-ink mb-1.5">Working Hours</div>
                <div className="text-[.9rem] text-stone-500 mb-0.5">Mon &#x2013; Sat &nbsp;&#x00B7;&nbsp; 9:00 AM &#x2013; 8:00 PM</div>
                <div className="text-[.9rem] text-stone-500 mb-0.5">Sunday &nbsp;&#x00B7;&nbsp; 10:00 AM &#x2013; 4:00 PM</div>
                <div className="text-[.9rem] text-brand font-semibold">Roadside Assistance &#x00B7; 24 &#x00D7; 7</div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/917899129529" className="flex items-center gap-3 p-5 rounded-2xl bg-[#25d366] text-white hover:bg-[#1fba5a] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#25d366]/30">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <div>
                <div className="font-semibold text-[.95rem]">Chat on WhatsApp</div>
                <div className="text-[.8rem] text-white/80">Quick replies &#x00B7; Share photos of your car</div>
              </div>
              <svg className="w-4 h-4 ml-auto shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Contact form */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8 md:p-10">
            <h3 className="font-display font-bold text-2xl text-ink mb-1">Send us a message</h3>
            <p className="text-sm text-stone-400 mb-7">We reply within a few hours during working hours.</p>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1.5">Your Name *</label>
                  <input name="name" type="text" required placeholder="Rahul Sharma" value={form.name} onChange={handle} className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1.5">Phone Number *</label>
                  <input name="phone" type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={handle} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1.5">Car Make &amp; Model</label>
                <input name="car" type="text" placeholder="e.g. Hyundai Creta 2022, Maruti Swift" value={form.car} onChange={handle} className={inputCls} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1.5">Service Required</label>
                <select name="service" value={form.service} onChange={handle} className={inputCls + ' text-stone-600'}>
                  <option value="">Select a service&#x2026;</option>
                  {['Car Wash & Detailing', 'Denting & Painting', 'Battery Repair & Replacement', 'Mechanical Repair', 'AC Repair & Gas Refilling', 'Clutch & Body Parts Repair', 'Lights & Electrical Fittings', 'Periodic Servicing', 'Suspension & Fitment', 'Tyre Replacement & Balancing', 'Polishing & Paint Protection', 'Vehicle Inspection & Diagnostics', 'Accident Vehicle Towing', 'Car Tinkering & Body Repair', 'Other / Not sure'].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1.5">Message</label>
                <textarea name="message" rows={3} placeholder="Describe your issue or any additional details…" value={form.message} onChange={handle} className={inputCls + ' resize-none'} />
              </div>
              <button type="submit" className="w-full inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-brand hover:bg-brand-deep transition-all shadow-lg shadow-brand/30">
                Send Message via WhatsApp
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </button>
              {note && <p className="text-center text-xs text-emerald-600 font-semibold">{note}</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

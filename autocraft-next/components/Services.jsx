const ArrowRight = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SERVICES = [
  {
    num: '01', color: 'cyan', img: '/ServicesImg/45.png', alt: 'Car Wash',
    name: 'Car Wash & Detailing',
    desc: 'Thorough exterior cleaning, foam wash, tyre & rim cleaning, hand dry and window wipe.',
    tags: ['Foam wash & rinse', 'Tyre & rim cleaning', 'Window wipe'],
    icon: <path d="M5 12c0-1 1.5-4 7-4s7 3 7 4M8 16c1 1 6 1 8 0M12 4v2M8 5l1 1.5M16 5l-1 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    num: '02', color: 'rose', img: '/ServicesImg/13.png', alt: 'Denting Painting',
    name: 'Car Denting & Painting',
    desc: 'Scratch removal, panel repair & full-body colour-matched painting to restore your car\'s original look.',
    tags: ['Scratch & dent restoration', 'Panel alignment', 'Colour matching'],
    icon: <path d="M19 3H9v12h10zM12 6h2M9 11h10M3 20c0-1.1.9-2 2-2h3v3H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    num: '03', color: 'red', img: '/ServicesImg/33.png', alt: 'Car Battery',
    name: 'Car Battery Repair & Replacement',
    desc: 'New battery supply, fitting & testing to ensure reliable starting power and prevent unexpected breakdowns.',
    tags: ['Health check & testing', 'Battery supply & fitting', 'Jump-start rescue'],
    icon: <><rect x="3" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M19 11h2v4h-2M7 6v2M14 6v2M9 13h4M11 11v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  },
  {
    num: '04', color: 'orange', img: '/ServicesImg/95.png', alt: 'Mechanical Repair',
    name: 'Car Mechanical Repair Services',
    desc: 'Complete mechanical repairs covering engine, brakes, transmission & all moving parts for any car make.',
    tags: ['Engine & transmission', 'Brake system', 'All components'],
    icon: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.3-.6-.6-2.3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  },
  {
    num: '05', color: 'indigo', img: '/ServicesImg/96.png', alt: 'Car AC',
    name: 'Car AC Repair & Gas Refilling',
    desc: 'Full AC service including refrigerant refill, compressor check & cooling performance restoration.',
    tags: ['Gas refill & leak check', 'Compressor service', 'Cooling test'],
    icon: <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    num: '06', color: 'violet', img: '/ServicesImg/47.png', alt: 'Clutch Repair',
    name: 'Clutch & Auto Body Parts Repair',
    desc: 'Clutch plate, pressure plate & body panel replacement with genuine parts and expert fitment.',
    tags: ['Clutch plate & pressure plate', 'Body panel', 'Genuine parts'],
    icon: <><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.6" /></>,
  },
  {
    num: '07', color: 'amber', img: '/ServicesImg/64.png', alt: 'Car Lights',
    name: 'Car Lights & Electrical Fittings',
    desc: 'Headlight, taillight, indicator & full electrical system repair and fitting for all car models.',
    tags: ['Headlight & taillight', 'Fog lamp repair', 'Wiring check'],
    icon: <><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
  },
  {
    num: '08', color: 'emerald', img: '/ServicesImg/5.png', alt: 'Periodic Servicing',
    name: 'Periodic Car Servicing',
    desc: 'Scheduled oil change, filter replacement, fluid top-up & multi-point inspection to keep your car running perfectly.',
    tags: ['Oil & filter change', 'Fluid top-up', 'Multi-point inspection'],
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M8 15h.01M12 15h.01M16 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
  },
  {
    num: '09', color: 'teal', img: '/ServicesImg/47.png', alt: 'Suspension',
    name: 'Suspension & Fitment Services',
    desc: 'Shock absorber, spring & wheel alignment for a smooth, stable and safe driving experience.',
    tags: ['Shock absorber', 'Wheel alignment', 'Spring & bushings'],
    icon: <><circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" /><path d="M2 18h3M15 18h2M19 18h3M5 18V9M8 9H4M19 18V9M16 9h4M8 9l4-5 4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></>,
  },
  {
    num: '10', color: 'blue', img: '/ServicesImg/50.png', alt: 'Tyre Balancing',
    name: 'Tyre Replacement & Wheel Balancing',
    desc: 'New tyre fitting, wheel balancing & alignment for optimal grip, even wear and maximum road safety.',
    tags: ['Tyre supply & fitting', 'Wheel balancing', 'Pressure check'],
    icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
  },
  {
    num: '11', color: 'sky', img: '/ServicesImg/92.png', alt: 'Car Polishing',
    name: 'Car Polishing & Paint Protection',
    desc: 'Machine polishing, scratch & swirl removal and protective coating for a lasting showroom shine.',
    tags: ['Machine polishing', 'Scratch removal', 'Paint protection coat'],
    icon: <><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M18 16v4M16 18h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  },
  {
    num: '12', color: 'fuchsia', img: '/ServicesImg/82.png', alt: 'Diagnostics',
    name: 'Vehicle Inspection & Diagnostics',
    desc: 'Full vehicle health check with OBD scanning, safety audit & detailed inspection report for peace of mind.',
    tags: ['OBD scanning', 'Safety audit', 'Inspection report'],
    icon: <><rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
  },
  {
    num: '13', color: 'brand', img: '/ServicesImg/31.png', alt: 'Towing',
    name: 'Accident Vehicle Towing',
    desc: '24×7 accident & breakdown towing service to the nearest garage or any location of your choice.',
    tags: ['24×7 emergency', 'Insured towing', 'Any location'],
    icon: <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3M9 21h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  },
  {
    num: '14', color: 'brand', img: '/ServicesImg/52.png', alt: 'Body Repair',
    name: 'Car Tinkering & Body Repair',
    desc: 'Minor & major body repair, panel beating & restoration for accident-damaged or worn vehicle bodies.',
    tags: ['Panel beating', 'Accident restoration', 'Welding & alignment'],
    isLast: true,
    icon: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.3-.6-.6-2.3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" /></>,
  },
];

const COLOR = {
  cyan:    { hover: 'hover:bg-cyan-50',    bar: 'bg-cyan-400',    numHover: 'group-hover:text-cyan-200',    iconBg: 'bg-cyan-100 group-hover:bg-cyan-200 text-cyan-600',    tagBg: 'bg-cyan-100 text-cyan-700',    btn: 'border-cyan-200 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500',    imgBg: 'bg-cyan-100' },
  rose:    { hover: 'hover:bg-rose-50',    bar: 'bg-rose-400',    numHover: 'group-hover:text-rose-200',    iconBg: 'bg-rose-100 group-hover:bg-rose-200 text-rose-600',    tagBg: 'bg-rose-100 text-rose-700',    btn: 'border-rose-200 text-rose-600 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500',    imgBg: 'bg-rose-100' },
  red:     { hover: 'hover:bg-red-50',     bar: 'bg-red-400',     numHover: 'group-hover:text-red-200',     iconBg: 'bg-red-100 group-hover:bg-red-200 text-red-600',     tagBg: 'bg-red-100 text-red-700',     btn: 'border-red-200 text-red-600 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500',     imgBg: 'bg-red-100' },
  orange:  { hover: 'hover:bg-orange-50',  bar: 'bg-orange-400',  numHover: 'group-hover:text-orange-200',  iconBg: 'bg-orange-100 group-hover:bg-orange-200 text-orange-600',  tagBg: 'bg-orange-100 text-orange-700',  btn: 'border-orange-200 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500',  imgBg: 'bg-orange-100' },
  indigo:  { hover: 'hover:bg-indigo-50',  bar: 'bg-indigo-400',  numHover: 'group-hover:text-indigo-200',  iconBg: 'bg-indigo-100 group-hover:bg-indigo-200 text-indigo-600',  tagBg: 'bg-indigo-100 text-indigo-700',  btn: 'border-indigo-200 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500',  imgBg: 'bg-indigo-100' },
  violet:  { hover: 'hover:bg-violet-50',  bar: 'bg-violet-400',  numHover: 'group-hover:text-violet-200',  iconBg: 'bg-violet-100 group-hover:bg-violet-200 text-violet-600',  tagBg: 'bg-violet-100 text-violet-700',  btn: 'border-violet-200 text-violet-600 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500',  imgBg: 'bg-violet-100' },
  amber:   { hover: 'hover:bg-amber-50',   bar: 'bg-amber-400',   numHover: 'group-hover:text-amber-200',   iconBg: 'bg-amber-100 group-hover:bg-amber-200 text-amber-600',   tagBg: 'bg-amber-100 text-amber-700',   btn: 'border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500',   imgBg: 'bg-amber-100' },
  emerald: { hover: 'hover:bg-emerald-50', bar: 'bg-emerald-400', numHover: 'group-hover:text-emerald-200', iconBg: 'bg-emerald-100 group-hover:bg-emerald-200 text-emerald-600', tagBg: 'bg-emerald-100 text-emerald-700', btn: 'border-emerald-200 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500', imgBg: 'bg-emerald-100' },
  teal:    { hover: 'hover:bg-teal-50',    bar: 'bg-teal-400',    numHover: 'group-hover:text-teal-200',    iconBg: 'bg-teal-100 group-hover:bg-teal-200 text-teal-600',    tagBg: 'bg-teal-100 text-teal-700',    btn: 'border-teal-200 text-teal-600 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500',    imgBg: 'bg-teal-100' },
  blue:    { hover: 'hover:bg-blue-50',    bar: 'bg-blue-400',    numHover: 'group-hover:text-blue-200',    iconBg: 'bg-blue-100 group-hover:bg-blue-200 text-blue-600',    tagBg: 'bg-blue-100 text-blue-700',    btn: 'border-blue-200 text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500',    imgBg: 'bg-blue-100' },
  sky:     { hover: 'hover:bg-sky-50',     bar: 'bg-sky-400',     numHover: 'group-hover:text-sky-200',     iconBg: 'bg-sky-100 group-hover:bg-sky-200 text-sky-600',     tagBg: 'bg-sky-100 text-sky-700',     btn: 'border-sky-200 text-sky-600 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500',     imgBg: 'bg-sky-100' },
  fuchsia: { hover: 'hover:bg-fuchsia-50', bar: 'bg-fuchsia-400', numHover: 'group-hover:text-fuchsia-200', iconBg: 'bg-fuchsia-100 group-hover:bg-fuchsia-200 text-fuchsia-600', tagBg: 'bg-fuchsia-100 text-fuchsia-700', btn: 'border-fuchsia-200 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white group-hover:border-fuchsia-500', imgBg: 'bg-fuchsia-100' },
  brand:   { hover: 'hover:bg-orange-50',  bar: 'bg-brand',       numHover: 'group-hover:text-orange-200',  iconBg: 'bg-orange-100 group-hover:bg-orange-200 text-brand',  tagBg: 'bg-orange-100 text-orange-700',  btn: 'border-orange-200 text-brand group-hover:bg-brand group-hover:text-white group-hover:border-brand',  imgBg: 'bg-orange-100' },
};

export default function Services() {
  return (
    <section id="services" className="bg-orange-50 py-20 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-[600px]">
            <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45" />
              What we do
            </span>
            <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3.2rem] mt-5 mb-3 leading-[1.1]">
              One workshop for <span className="text-brand">every car need</span>
            </h2>
            <p className="text-stone-500 text-[1.05rem]">Fourteen complete services — from a routine wash to diagnostics, towing and full body repair.</p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            {[['14', 'Services'], ['All', 'Brands'], ['1', 'Workshop']].map(([val, lbl], i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-10 bg-stone-200" />}
                <div className="text-center">
                  <span className="font-display font-extrabold text-3xl text-ink block">{val}</span>
                  <span className="text-[.65rem] font-mono text-stone-400 tracking-widest uppercase">{lbl}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
          {SERVICES.map((s) => {
            const c = COLOR[s.color];
            return (
              <div key={s.num} className={`group relative flex flex-wrap md:flex-nowrap items-center gap-4 px-5 md:px-7 py-4 bg-white ${c.hover} transition-colors duration-200 ${s.isLast ? '' : 'border-b border-stone-100'}`}>
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${c.bar} opacity-0 group-hover:opacity-100 transition-opacity rounded-r-full`} />
                <div className={`hidden md:block w-28 h-[72px] rounded-xl overflow-hidden shrink-0 ${c.imgBg}`}>
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto md:min-w-[160px]">
                  <span className={`font-display font-extrabold text-[2rem] leading-none text-stone-200 ${c.numHover} transition-colors w-10 text-center shrink-0`}>{s.num}</span>
                  <div className={`w-10 h-10 rounded-2xl ${c.iconBg} transition-colors grid place-items-center shrink-0`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
                  </div>
                  <div className="md:hidden flex-1">
                    <div className="font-display font-bold text-[.95rem] text-ink">{s.name}</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="hidden md:block font-display font-bold text-[1.02rem] text-ink mb-1">{s.name}</div>
                  <p className="text-[.8rem] text-stone-500 mb-2">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className={`text-[.7rem] ${c.tagBg} px-2.5 py-0.5 rounded-full font-medium`}>{t}</span>
                    ))}
                  </div>
                </div>
                <a href="#book" className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[.79rem] font-semibold border-2 ${c.btn} transition-all`}>
                  Book <ArrowRight />
                </a>
              </div>
            );
          })}
        </div>

        {/* city banner */}
        <div className="mt-8 rounded-2xl p-7 md:p-8 bg-gradient-to-r from-ink to-stone-800 text-white flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-brand grid place-items-center shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <div>
              <h3 className="font-display text-xl font-bold">Car service in <span className="text-brand">Karnataka</span></h3>
              <p className="text-sm text-stone-300">Trusted multi-brand garage near you — free pickup &amp; drop.</p>
            </div>
          </div>
          <a href="#book" className="inline-flex justify-center items-center px-7 py-3.5 rounded-full font-semibold text-ink bg-white hover:-translate-y-0.5 transition-transform whitespace-nowrap">
            Book in Karnataka
          </a>
        </div>

      </div>
    </section>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  {
    count: 14, suffix: '+', label: 'Brands serviced', bar: 70,
    gradient: 'from-brand to-amber-400', bg: 'from-orange-50 to-white', iconBg: 'bg-orange-100 border-orange-200 text-brand', barBg: 'bg-orange-100', accent: 'from-brand to-amber-400',
    icon: <path d="M12 2l3 6.5L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7-.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
    hover: 'hover:shadow-orange-100', suffixClass: 'text-brand',
  },
  {
    count: 40, suffix: 'k', label: 'Cars repaired', bar: 85,
    bg: 'from-violet-50 to-white', iconBg: 'bg-violet-100 border-violet-200 text-violet-600', barBg: 'bg-violet-100', accent: 'from-violet-600 to-purple-400',
    icon: <><path d="M7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-2h6l2 2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="1.6" /></>,
    hover: 'hover:shadow-violet-100', suffixClass: 'text-violet-600', topGrad: 'from-violet-500 to-purple-400',
  },
  {
    count: 15, suffix: ' yrs', label: 'Years on the floor', bar: 75,
    bg: 'from-emerald-50 to-white', iconBg: 'bg-emerald-100 border-emerald-200 text-emerald-600', barBg: 'bg-emerald-100', accent: 'from-emerald-600 to-teal-400',
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    hover: 'hover:shadow-emerald-100', suffixClass: 'text-emerald-600', topGrad: 'from-emerald-500 to-teal-400',
  },
  {
    count: 98, suffix: '%', label: 'On-time delivery', bar: 98,
    bg: 'from-sky-50 to-white', iconBg: 'bg-sky-100 border-sky-200 text-sky-600', barBg: 'bg-sky-100', accent: 'from-sky-600 to-cyan-400',
    icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></>,
    hover: 'hover:shadow-sky-100', suffixClass: 'text-sky-600', topGrad: 'from-sky-500 to-cyan-400',
  },
];

function Counter({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1400;
        const start = performance.now();
        function tick(now) {
          const t = Math.min((now - start) / dur, 1);
          setVal(Math.round(t * target));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{val}</span>;
}

export default function Stats() {
  return (
    <section className="relative bg-white py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {STATS.map((s, i) => (
            <div key={i} className={`relative flex-1 rounded-2xl border border-stone-100 bg-gradient-to-br ${s.bg} p-7 flex flex-row items-center gap-5 group hover:shadow-xl ${s.hover} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
              <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${s.topGrad || s.accent}`} />
              <div className={`w-14 h-14 rounded-2xl border ${s.iconBg} grid place-items-center shrink-0`}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-none tracking-tight">
                  <Counter target={s.count} />
                  <span className={s.suffixClass}>{s.suffix}</span>
                </div>
                <p className="text-stone-500 text-sm mt-1 font-medium">{s.label}</p>
                <div className={`mt-3 h-1.5 w-full ${s.barBg} rounded-full overflow-hidden`}>
                  <div className={`h-full bg-gradient-to-r ${s.accent} rounded-full`} style={{ width: `${s.bar}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

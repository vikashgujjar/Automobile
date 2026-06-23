const gallery = [
  ['./ServicesImg/0.png', 'Service Bay'],
  ['./ServicesImg/1.png', 'Paint Booth'],
  ['./ServicesImg/2.png', 'Car Detailing'],
  ['./ServicesImg/3.png', 'Diagnostics'],
  ['./ServicesImg/4.png', 'Alloy Care'],
  ['./ServicesImg/5.png', 'Interior Spa'],
  ['./ServicesImg/6.png', 'Body Work'],
  ['./ServicesImg/7.png', 'Engine Bay'],
  ['./ServicesImg/8.png', 'Suspension'],
  ['./ServicesImg/9.png', 'Car Wash'],
  ['./ServicesImg/10.png', 'Wheel Fitment'],
  ['./ServicesImg/11.png', 'Electrical Work'],
];

function GalleryItem({ src, label }) {
  return (
    <div className="relative w-[340px] h-[230px] rounded-[18px] overflow-hidden shrink-0 bg-gradient-to-br from-stone-700 to-stone-900">
      <img src={src} alt={label} className="w-full h-full object-cover" />
      <span className="absolute left-3.5 bottom-3.5 font-mono text-[.7rem] font-bold text-white bg-ink/65 px-2.5 py-1 rounded-md backdrop-blur">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-white py-24 md:py-28 overflow-hidden group">
      <div className="max-w-[1240px] mx-auto px-6 text-center mb-11">
        <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
          <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45"></span>Inside the workshop
        </span>
        <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3rem] mt-5">
          Where the <span className="text-brand">work happens</span>
        </h2>
      </div>
      <div className="flex gap-4 w-max animate-marquee2">
        {gallery.map(([src, label]) => (
          <GalleryItem key={label + '-1'} src={src} label={label} />
        ))}
        {gallery.map(([src, label]) => (
          <GalleryItem key={label + '-2'} src={src} label={label} />
        ))}
      </div>
    </section>
  );
}

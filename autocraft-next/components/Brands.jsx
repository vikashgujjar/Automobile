const brands = [
  'Audi', 'BMW', 'Mercedes-Benz', 'Toyota', 'Honda',
  'Hyundai', 'Kia', 'Volkswagen', 'Skoda', 'Mahindra',
  'Tata', 'Volvo', 'Jaguar', 'Land Rover', 'Porsche',
  'Maruti Suzuki', 'Ford', 'Lexus', 'Jeep','Renault'
];

export default function Brands() {
  return (
    <section id="brands" className="bg-paper2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-11">
          <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45"></span>Multi-brand expertise
          </span>
          <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3rem] mt-5">
            Premium brands we <span className="text-brand">service daily</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white border border-stone-200 hover:border-brand hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              <span className="w-9 h-9 rounded-full border-[1.5px] border-brand grid place-items-center font-display font-extrabold text-sm text-brand-deep shrink-0">
                {brand[0]}
              </span>
              <div className="min-w-0">
                <span className="block font-display font-bold text-[.98rem]">{brand}</span>
                <small className="block font-mono text-[.58rem] text-stone-400 tracking-wide">SERVICE · REPAIR</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

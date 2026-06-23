const reviews = [
  {
    name: 'Rahul Mehta',
    sub: 'BMW 3 Series · Service',
    rating: 5,
    text: 'Took my BMW here after a frustrating dealer experience. Honest diagnosis, fair price and they actually explained what was wrong. Runs like new.',
  },
  {
    name: 'Anita Sharma',
    sub: 'Hyundai Creta · Detailing',
    rating: 5,
    text: 'The ceramic coating is stunning — water just rolls off now. Spotless interior deep clean too. Worth every rupee.',
  },
  {
    name: 'Karan Singh',
    sub: 'Audi Q5 · Denting & Paint',
    rating: 5,
    text: 'A bad parking dent looked impossible to fix. You genuinely cannot tell it ever happened. Colour match is perfect.',
  },
  {
    name: 'Priya Nair',
    sub: 'Honda City · Periodic Service',
    rating: 5,
    text: 'Free pickup and drop, transparent bill, and they sent photos of the work. This is how a workshop should run.',
  },
  {
    name: 'Vikram Patel',
    sub: 'Mercedes GLC · Diagnostics',
    rating: 4,
    text: 'A warning light three other garages could not crack — sorted in one visit with proper scanning tools.',
  },
  {
    name: 'Sneha Reddy',
    sub: 'Kia Seltos · Battery & Key',
    rating: 5,
    text: 'Battery died on a Sunday, roadside team reached in 30 minutes and reprogrammed my smart key. Lifesavers.',
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-1 mb-3.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          className={`w-[17px] h-[17px] ${i < rating ? 'text-amber-400' : 'text-stone-300'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20l1.2-6.5L2.5 8.9 9.1 8z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, sub, rating, text }) {
  return (
    <article className="relative bg-white rounded-2xl border border-stone-200 p-7 hover:-translate-y-1.5 hover:shadow-card transition-all">
      <span className="absolute top-5 right-6 font-display text-5xl text-brand-soft leading-none">&rdquo;</span>
      <Stars rating={rating} />
      <p className="text-[.95rem] text-inksoft mb-5 line-clamp-6">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-brand grid place-items-center font-display font-bold text-white shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <b className="block text-[.92rem]">{name}</b>
          <small className="font-mono text-[.78rem] text-stone-500">{sub}</small>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45"></span>Customer reviews
            </span>
            <h2 className="font-display font-bold leading-[1.2] tracking-tight text-4xl md:text-[3.3rem] mt-5 mb-3">
              Owners who came back <span className="text-brand">— and sent friends</span>
            </h2>
            <p className="inline-flex items-center gap-2 text-sm text-stone-500">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.6a4.8 4.8 0 0 1-2.1 3.1v2.6h3.4C20.8 18 22 15.4 22 12.2z" />
                <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
                <path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9z" />
                <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.8A10 10 0 0 0 3.1 7.4l3.3 2.6C7.2 7.7 9.4 6 12 6z" />
              </svg>
              Rated <span className="font-semibold text-ink mx-1">4.9</span> / 5 across{' '}
              <span className="font-semibold text-ink mx-1">1,200+</span> Google reviews
            </p>
          </div>
          <a
            href="https://search.google/local/writereview?placeid=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white border border-stone-200 hover:border-brand hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0"
          >
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20l1.2-6.5L2.5 8.9 9.1 8z" />
            </svg>
            Write a review
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

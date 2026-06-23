'use client';

import { useState } from 'react';

const faqs = [
  [
    'How much does periodic servicing cost?',
    'Every job starts with a clear, itemised estimate you approve before we begin — no surprises. Share your car details for an exact quote.',
  ],
  [
    'What is ceramic coating?',
    'A liquid polymer that bonds to your paint, adding a hard, glossy, hydrophobic layer that protects against UV, scratches and grime and keeps your car showroom-fresh for years.',
  ],
  [
    'Do you use genuine parts?',
    'Yes. We use genuine or OEM-grade parts as standard and tell you upfront which is being fitted.',
  ],
  [
    'How long does denting and painting take?',
    'A single panel scratch or dent is often same-day. Full-body paint typically takes 2–5 days. We give a firm timeline at approval.',
  ],
  [
    'Do you service luxury cars?',
    'Absolutely — dealer-level tooling and specialists for Audi, BMW, Mercedes, Jaguar, Land Rover, Volvo and more, at workshop prices.',
  ],
  [
    'Do you provide pickup & drop?',
    'Yes, free pickup and drop across Karnataka and nearby areas, plus 24×7 roadside and breakdown assistance.',
  ],
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`bg-white border rounded-2xl mb-3 overflow-hidden transition-all ${
        isOpen ? 'border-brand shadow-soft' : 'border-stone-200'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-display font-bold text-[1.04rem]"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        <span
          className={`w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-all ${
            isOpen ? 'bg-brand rotate-45' : 'bg-brand-soft'
          }`}
        >
          <svg
            className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-brand-deep'}`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '400px' : '0px' }}
      >
        <p className="px-6 pb-5 text-[.95rem] text-stone-500">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="bg-orange py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-11">
          <span className="inline-flex items-center gap-2 font-mono text-[.7rem] font-bold tracking-[.14em] uppercase text-brand-deep bg-brand-soft border border-dashed border-brand px-3.5 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45"></span>Good to know
          </span>
          <h2 className="font-display font-bold tracking-tight text-4xl md:text-[3rem] mt-5">
            Frequently asked <span className="text-brand">questions</span>
          </h2>
        </div>
        <div className="max-w-[840px] mx-auto">
          {faqs.map(([question, answer], i) => (
            <FAQItem
              key={i}
              question={question}
              answer={answer}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

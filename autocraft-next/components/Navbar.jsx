'use client';
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { id: 'home', href: '#top', label: 'Home' },
  { id: 'services', href: '#services', label: 'Services' },
  { id: 'showcase', href: '#showcase', label: 'Work' },
  { id: 'process', href: '#process', label: 'Process' },
  { id: 'reviews', href: '#reviews', label: 'Reviews' },
  { id: 'faq', href: '#faq', label: 'FAQ' },
  { id: 'insurance', href: '#insurance', label: 'Insurance' },
  { id: 'contact', href: '#contact', label: 'Contact' },
];

const SECTION_IDS = ['services', 'showcase', 'process', 'reviews', 'faq', 'insurance', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      let active = 'home';
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) active = id;
      });
      setActiveNav(active);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  const barCls = `block w-5 h-0.5 transition-transform ${scrolled || menuOpen ? 'bg-ink' : 'bg-white'}`;

  return (
    <>
      <header
        id="nav"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-paper/90 backdrop-blur-md  text-ink ' : ' text-white'
          }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 h-auto py-2 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 font-display font-extrabold text-[1.18rem] tracking-tight">
            <img src="/logo.png" className={`w-28 h-auto ${scrolled || menuOpen ? 'filter-none' : 'filter brightness-0 invert'}`} alt="AutoCraft logo" onError={(e) => (e.target.style.display = 'none')} />
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-[.92rem] font-medium" id="desktopNav">
            {NAV_LINKS.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`nav-link relative transition ${isActive ? 'text-brand opacity-100' : 'opacity-90 hover:opacity-100 hover:text-brand'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+917899129529" className="hidden md:flex items-center gap-2 font-mono text-[.85rem]">
              <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              +91 78991 29529
            </a>
            <a href="#book" className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-brand hover:bg-brand-deep hover:-translate-y-0.5 transition-all shadow-lg shadow-brand/40">
              Book Service
            </a>
            <button
              id="burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={`lg:hidden w-11 h-11 rounded-xl border-[1.5px] grid place-items-center py-2 ${scrolled || menuOpen ? 'border-ink/40' : 'border-white'}`}
            >
              {[0, 1, 2].map((i) => <span key={i} className={barCls} />)}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-0 bottom-0 z-40 bg-paper/90 backdrop-blur-md pt-32 px-6 py-8 transition-all duration-300 lg:hidden text-ink overflow-y-auto ${menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-3'
          }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={closeMenu}
            className="block font-display text-2xl font-bold py-4 border-b border-white/10 hover:text-brand transition-colors"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-8 space-y-3">
          <a
            href="#book"
            onClick={closeMenu}
            className="w-full inline-flex justify-center items-center gap-2.5 px-6 py-4 rounded-2xl font-display font-bold text-lg text-white bg-brand hover:bg-brand-deep transition-colors shadow-lg shadow-brand/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M8 2v3M16 2v3M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            Book Service
          </a>
          <a
            href="tel:+917899129529"
            className="w-full inline-flex justify-center items-center gap-2.5 px-6 py-4 rounded-2xl font-display font-bold text-lg text-ink border border-white/20 hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            +91 78991 29529
          </a>
        </div>
      </div>
      <span id="top" />
    </>
  );
}

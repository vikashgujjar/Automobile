import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import ServiceShowcase from '@/components/ServiceShowcase';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Brands from '@/components/Brands';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Insurance from '@/components/Insurance';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ServiceShowcase />
        <Process />
        <Gallery />
        <Brands />
        <Reviews />
        <FAQ />
        <Insurance />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />

      {/* WhatsApp float */}
      <a
        href="https://wa.me/917899129529"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#1fba5a] shadow-xl shadow-[#25d366]/40 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      </a>
    </>
  );
}

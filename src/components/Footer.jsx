import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MarqueeStrip from './MarqueeStrip';
import MagneticButton from './MagneticButton';

export const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Kerala / IST time formatting
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0E0E10] text-[#F3EFEA] pt-12 pb-10 overflow-hidden border-t border-[#222226]">
      {/* Large Infinite Running Marquee Text Strip */}
      <div className="mb-14 overflow-hidden border-y border-[#26262B] py-4 bg-[#141417]">
        <div className="flex w-max animate-marquee text-[#F3EFEA]/80 font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider select-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mx-6">
              <span>FIDHA</span>
              <span className="text-accent text-3xl">✦</span>
              <span>THEJUS ENGINEERING COLLEGE</span>
              <span className="text-accent text-3xl">✦</span>
              <span>CREATIVE DEVELOPER</span>
              <span className="text-accent text-3xl">✦</span>
              <span>EDITORIAL GRAPHIC DESIGN</span>
              <span className="text-accent text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#222226]">
          {/* Col 1: Identity & Monogram */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-serif italic font-bold text-2xl text-accent">
                {portfolioData.brand.monogramLetter}
              </div>
              <span className="font-sans font-black text-sm tracking-widest uppercase">
                {portfolioData.personal.fullName}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#8E8B87] max-w-sm leading-relaxed">
              Engineering student at Thejus Engineering College blending rigorous computer science with high-concept editorial graphic design.
            </p>
            <div className="font-mono text-xs text-[#8E8B87]">
              Thrissur, Kerala, India • Class of 2026
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-4">
              INDEX DIRECTORY
            </span>
            <ul className="space-y-2.5 font-sans text-xs uppercase tracking-wider text-[#A5A29E]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  00 / HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  01 / ABOUT FIDHA
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  02 / SELECTED WORKS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03 / CAPABILITIES
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-white transition-colors">
                  04 / THEJUS TIMELINE
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  05 / CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Local Time */}
          <div className="md:col-span-4 flex flex-col justify-between h-full gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-4">
                LOCAL TIME IN KERALA
              </span>
              <div className="p-4 rounded-2xl bg-[#17171C] border border-[#2A2A30] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>THRISSUR, IN (IST)</span>
                </div>
                <span className="font-bold text-accent">{time || '02:45 PM'}</span>
              </div>
            </div>

            {/* Back to top magnetic button */}
            <div className="flex justify-end">
              <MagneticButton>
                <button
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1C1C22] border border-[#33333C] hover:border-accent hover:bg-accent hover:text-white text-xs font-mono tracking-wider uppercase transition-all duration-300"
                >
                  <span>RETURN TO TOP</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E6B67]">
          <div>
            © {new Date().getFullYear()} Fidha. Built with React, Tailwind, Framer Motion & GSAP.
          </div>
          <div className="flex items-center gap-2">
            <span>Thejus Engineering College</span>
            <span>•</span>
            <span className="text-accent">Edition 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


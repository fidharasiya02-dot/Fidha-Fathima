import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERTISE', href: '#services' },
    { name: 'JOURNEY', href: '#timeline' },
    { name: 'BLOG', href: '#blog' },
  ];

  // Scroll detection to hide/show navbar and add glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-canvas-light/85 dark:bg-canvas-dark/85 backdrop-blur-md border-b border-borderMuted-light/60 dark:border-borderMuted-dark/60 py-3 shadow-sm'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: Monogram & Name */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="group flex items-center gap-3 select-none"
              aria-label="Fidha Portfolio Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-ink-light/20 dark:border-ink-dark/20 group-hover:border-accent group-hover:scale-105 transition-all duration-300">
                <span className="font-serif italic font-bold text-xl sm:text-2xl text-ink-light dark:text-ink-dark group-hover:text-accent transition-colors">
                  {portfolioData.brand.monogramLetter}
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xs tracking-widest text-ink-light dark:text-ink-dark uppercase group-hover:text-accent transition-colors">
                  {portfolioData.personal.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted dark:text-ink-darkMuted">
                  Thejus Eng.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative font-sans text-xs font-bold tracking-widest uppercase text-ink-light/80 dark:text-ink-dark/80 hover:text-accent dark:hover:text-accent transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions: Theme Toggle & Contact Button */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 sm:p-2.5 rounded-full border border-ink-light/20 dark:border-ink-dark/20 hover:border-accent text-ink-light dark:text-ink-dark hover:text-accent transition-all duration-200"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* Black Rounded Contact Button (as in editorial reference design) */}
              <MagneticButton>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-ink-light dark:bg-ink-dark text-canvas-light dark:text-canvas-dark font-sans text-xs font-bold uppercase tracking-widest hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm active:scale-95"
                >
                  <span>CONTACT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden p-2 rounded-full border border-ink-light/20 dark:border-ink-dark/20 text-ink-light dark:text-ink-dark hover:border-accent"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-canvas-light dark:bg-canvas-dark flex flex-col justify-between p-6 sm:p-10 pt-24"
          >
            {/* College & Edition marker */}
            <div className="border-b border-borderMuted-light dark:border-borderMuted-dark pb-4 flex justify-between items-center text-xs font-mono uppercase text-ink-muted">
              <span>{portfolioData.personal.college}</span>
              <span className="text-accent font-bold">PORTFOLIO '25</span>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06 }}
                  className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-ink-light dark:text-ink-dark hover:text-accent transition-colors flex items-center justify-between border-b border-borderMuted-light/40 dark:border-borderMuted-dark/40 pb-2"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-ink-muted">0{idx + 1}</span>
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-4 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-accent text-white font-sans text-sm font-bold uppercase tracking-widest text-center"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Bottom info & socials */}
            <div className="border-t border-borderMuted-light dark:border-borderMuted-dark pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono text-ink-muted">
              <div>{portfolioData.personal.email}</div>
              <div>Thrissur, Kerala, India</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


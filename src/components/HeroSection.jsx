import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Instagram, Palette, ArrowDown, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export const HeroSection = ({ isLoaded = true }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax scroll effects
  const textY = useTransform(scrollY, [0, 600], [0, 100]);
  const portraitY = useTransform(scrollY, [0, 600], [0, 50]);
  const scriptY = useTransform(scrollY, [0, 600], [0, 30]);

  // Subtle mouse move parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) / 45;
    const y = (clientY - centerY) / 45;
    setMousePos({ x, y });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'behance':
        return <Palette className="w-4 h-4" />;
      default:
        return <Palette className="w-4 h-4" />;
    }
  };

  const headlineLetters = portfolioData.brand.heroBigHeadline.split('');

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none"
    >
      {/* Editorial Grain Overlay */}
      <div className="absolute inset-0 paper-grain pointer-events-none opacity-40 z-0" />

      {/* Top Bar Details (Reference design exact matches) */}
      <div className="relative z-10 w-full flex items-start justify-between">
        {/* NEW Style Badge (from reference image top-left) */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <div className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-1.5 bg-[#3730A3] text-white font-sans font-black text-xs sm:text-sm tracking-widest uppercase shadow-md rounded-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            {portfolioData.brand.badgeText}
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] tracking-wider text-ink-muted uppercase">
            {portfolioData.brand.badgeYear}
          </span>
        </motion.div>

        {/* Top-Right Monogram Seal / Identity Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-right"
        >
          <div className="flex items-center justify-end gap-2 text-ink-light dark:text-ink-dark">
            <span className="font-serif italic font-bold text-lg sm:text-xl">
              {portfolioData.brand.monogramLetter}
            </span>
            <div className="h-3 w-[1px] bg-ink-light/30 dark:bg-ink-dark/30" />
            <span className="font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase">
              {portfolioData.personal.fullName}
            </span>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-wider text-ink-muted mt-0.5">
            {portfolioData.personal.college}
          </div>
        </motion.div>
      </div>

      {/* Centerpiece Hero Graphic (Headline + Cutout Portrait + Script Word) */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6 sm:py-10">
        {/* Editorial Sub-badge overlapping top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-2 sm:mb-4 px-4 py-1 sm:px-6 sm:py-1.5 rounded-full bg-canvas-light/90 dark:bg-canvas-dark/90 border border-ink-light/15 dark:border-ink-dark/20 backdrop-blur-sm shadow-sm flex items-center gap-2 z-20"
        >
          <span className="font-script text-xl sm:text-2xl text-accent font-bold">
            Engineering &
          </span>
          <span className="font-sans font-black text-xs sm:text-sm tracking-wider uppercase text-ink-light dark:text-ink-dark">
            Graphic Portfolio
          </span>
        </motion.div>

        {/* The Layered Visual Composition */}
        <div className="relative w-full max-w-5xl flex items-center justify-center">
          {/* LAYER 1: Massive Bold Headline Background (FIDHA) */}
          <motion.div
            style={{ y: textY }}
            animate={{
              x: mousePos.x * 0.3,
              y: mousePos.y * 0.3,
            }}
            transition={{ type: 'spring', damping: 40, stiffness: 200 }}
            className="w-full flex justify-between sm:justify-around items-center select-none font-display font-black text-[22vw] sm:text-[20vw] md:text-[18vw] leading-none tracking-tight text-ink-light dark:text-ink-dark"
          >
            {headlineLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + idx * 0.08,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-block transform-gpu transition-colors duration-300 hover:text-accent"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* LAYER 2: Circular Cutout Portrait Overlapping Center */}
          <motion.div
            style={{ y: portraitY }}
            animate={{
              x: mousePos.x * -0.6,
              y: mousePos.y * -0.6,
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 180 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            {/* The circular portrait container */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -4 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
              className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-accent/30 via-transparent to-accent/40 shadow-2xl backdrop-blur-sm group"
            >
              {/* Inner Circle Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-canvas-light dark:border-canvas-dark bg-canvas-light dark:bg-card-dark shadow-inner">
                <img
                  src={portfolioData.personal.portraitImage}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to high quality unsplash editorial portrait if local file issues
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                {/* Subtle vignette/sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative College Pin Badge */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-2 bg-ink-light dark:bg-ink-dark text-canvas-light dark:text-canvas-dark rounded-full p-2 shadow-lg flex items-center justify-center border border-white/20">
                <Sparkles className="w-4 h-4 text-accent fill-accent" />
              </div>
            </motion.div>
          </motion.div>

          {/* LAYER 3: Curving & Slanted Script Word ("Developer" / "Designer") */}
          <motion.div
            style={{ y: scriptY }}
            animate={{
              x: mousePos.x * -0.9,
              y: mousePos.y * -0.9,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mt-16 sm:mt-24 md:mt-32 -rotate-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ink-light dark:text-white drop-shadow-md select-none tracking-wide"
            >
              {portfolioData.brand.heroScriptWord}
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Tagline / Student Degree Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 sm:mt-10 max-w-xl text-center px-4"
        >
          <p className="font-sans text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted leading-relaxed">
            <span className="font-semibold text-ink-light dark:text-ink-dark">
              {portfolioData.personal.degree}
            </span>{' '}
            at{' '}
            <span className="font-semibold text-accent">
              {portfolioData.personal.college}
            </span>
            . Designing & developing editorial grade digital systems with high visual rhythm.
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar: Social Icons (Left) & Email / Scroll (Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60 text-xs"
      >
        {/* Social Icons (GitHub, LinkedIn, Instagram, Behance) */}
        <div className="flex items-center gap-3">
          {portfolioData.socials.map((social) => (
            <MagneticButton key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                aria-label={social.name}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-ink-light/20 dark:border-ink-dark/20 text-ink-light dark:text-ink-dark hover:border-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                {getSocialIcon(social.name)}
              </a>
            </MagneticButton>
          ))}
          <span className="text-[11px] font-mono text-ink-muted ml-2 hidden sm:inline-block">
            CONNECT / FOLLOW
          </span>
        </div>

        {/* Center Scroll Indicator */}
        <a
          href="#about"
          className="hidden md:flex items-center gap-2 text-ink-muted hover:text-accent font-mono text-[11px] uppercase tracking-widest transition-colors group"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent" />
        </a>

        {/* Direct Email Address on the Right (as in reference image) */}
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-accent" />
          <a
            href={`mailto:${portfolioData.personal.email}`}
            data-cursor="hover"
            className="font-mono text-xs text-ink-light dark:text-ink-dark hover:text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-all duration-200"
          >
            {portfolioData.personal.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


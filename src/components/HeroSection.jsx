import React, { useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import {
  Github,
  Linkedin,
  Instagram,
  Palette,
  ArrowDown,
  Mail,
  Sparkles,
  GraduationCap,
  MapPin,
  Code2,
  Sliders,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export const HeroSection = ({ isLoaded = true }) => {
  const [overlayStyle, setOverlayStyle] = useState('glass');
  const { scrollY } = useScroll();

  const textScrollY = useTransform(scrollY, [0, 600], [0, 100]);
  const portraitScrollY = useTransform(scrollY, [0, 600], [0, 50]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const headlineMouseX = useTransform(smoothMouseX, (val) => val * 0.3);
  const portraitMouseX = useTransform(smoothMouseX, (val) => val * -0.6);

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set((e.clientX - centerX) / 45);
    mouseY.set((e.clientY - centerY) / 45);
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'instagram': return <Instagram className="w-4 h-4" />;
      case 'behance': return <Palette className="w-4 h-4" />;
      default: return <Palette className="w-4 h-4" />;
    }
  };

  const headlineLetters = portfolioData.brand.heroBigHeadline.split('');

  /* ─── Overlay badge content (shared between mobile + desktop) ─── */
  const GlassOverlay = () => (
    <>
      {/* Status — top right */}
      <div className="absolute -top-4 -right-2 sm:-top-3 sm:-right-5 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#141418]/95 backdrop-blur-md border border-white/80 dark:border-white/15 shadow-xl text-ink-light dark:text-white whitespace-nowrap">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">Available for Hire</span>
      </div>

      {/* Campus — bottom left */}
      <div className="absolute -bottom-4 -left-2 sm:-bottom-3 sm:-left-5 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#141418]/95 backdrop-blur-md border border-white/80 dark:border-white/15 shadow-xl text-ink-light dark:text-white whitespace-nowrap">
        <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0" />
        <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">Thejus CSE &apos;26</span>
      </div>

      {/* Script ribbon — below circle, fully outside */}
      <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 z-40 -rotate-3 whitespace-nowrap">
        <div className="flex items-center gap-2.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/95 dark:bg-[#121217]/95 backdrop-blur-xl border border-white/80 dark:border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse shrink-0" />
          <span className="font-script text-2xl sm:text-3xl md:text-4xl text-accent dark:text-indigo-400 font-bold tracking-wide select-none">
            {portfolioData.brand.heroScriptWord}
          </span>
          <div className="h-4 w-[1px] bg-ink-light/20 dark:bg-white/20" />
          <span className="font-mono text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-accent/10 text-accent dark:bg-accent/25 dark:text-indigo-300">
            UI / UX
          </span>
        </div>
      </div>
    </>
  );

  const EditorialOverlay = () => (
    <>
      <div className="absolute -top-4 -left-2 sm:-top-3 sm:-left-4 z-30 px-3 py-1 bg-ink-light text-canvas-light dark:bg-ink-dark dark:text-ink-light font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
        VOL. 2026 // THEJUS
      </div>
      <div className="absolute -top-4 -right-2 sm:-top-3 sm:-right-4 z-30 flex items-center gap-1.5 px-3 py-1 bg-accent text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
        <span>EDITION №1</span>
      </div>
      <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap">
        <div className="flex items-center gap-3 px-5 py-2 bg-canvas-light/95 dark:bg-canvas-dark/95 border-2 border-ink-light dark:border-ink-dark shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#FFFFFF] -rotate-1">
          <span className="font-serif italic font-black text-xl sm:text-2xl text-ink-light dark:text-ink-dark tracking-tight">
            {portfolioData.brand.heroScriptWord}
          </span>
          <div className="h-4 w-[1px] bg-ink-light dark:bg-ink-dark" />
          <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 bg-ink-light text-canvas-light dark:bg-canvas-light dark:text-ink-light font-extrabold">
            EST. 2026
          </span>
        </div>
      </div>
    </>
  );

  const BentoOverlay = () => (
    <>
      <div className="absolute -top-4 -left-2 sm:-top-3 sm:-left-5 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#16161A]/95 backdrop-blur-md border border-ink-light/10 dark:border-white/15 shadow-lg text-ink-light dark:text-white whitespace-nowrap">
        <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-wider">Kerala, IN</span>
      </div>
      <div className="absolute -top-4 -right-2 sm:-top-3 sm:-right-5 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#16161A]/95 backdrop-blur-md border border-ink-light/10 dark:border-white/15 shadow-lg text-ink-light dark:text-white whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-wider">Open To Work</span>
      </div>
      <div className="absolute -bottom-4 -right-2 sm:-bottom-3 sm:-right-5 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#16161A]/95 backdrop-blur-md border border-ink-light/10 dark:border-white/15 shadow-lg text-ink-light dark:text-white whitespace-nowrap">
        <Code2 className="w-3 h-3 text-accent shrink-0" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-wider">React • GSAP</span>
      </div>
      <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap">
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent via-indigo-600 to-purple-600 text-white border border-white/30 shadow-[0_12px_30px_rgba(55,48,163,0.35)]">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span className="font-sans font-black text-xs uppercase tracking-wider">Creative Engineer</span>
        </div>
      </div>
    </>
  );

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none"
    >
      {/* Grain */}
      <div className="absolute inset-0 paper-grain pointer-events-none opacity-40 z-0" />

      {/* ── Top Bar ── */}
      <div className="relative z-10 w-full flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <div className="inline-flex items-center px-3.5 py-1.5 bg-[#3730A3] text-white font-sans font-black text-xs tracking-widest uppercase shadow-md rounded-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            {portfolioData.brand.badgeText}
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] tracking-wider text-ink-muted uppercase">
            {portfolioData.brand.badgeYear}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-right"
        >
          <div className="flex items-center justify-end gap-2 text-ink-light dark:text-ink-dark">
            <span className="font-serif italic font-bold text-lg sm:text-xl">{portfolioData.brand.monogramLetter}</span>
            <div className="h-3 w-[1px] bg-ink-light/30 dark:bg-ink-dark/30" />
            <span className="font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase">{portfolioData.personal.fullName}</span>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-wider text-ink-muted mt-0.5">{portfolioData.personal.college}</div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT  (< md)  — stacked cleanly
         ══════════════════════════════════════════ */}
      <div className="md:hidden relative z-10 flex flex-col items-center gap-6 mt-6 mb-4">

        {/* Portfolio badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-5 py-1.5 rounded-full bg-canvas-light/90 dark:bg-canvas-dark/90 border border-ink-light/15 dark:border-ink-dark/20 backdrop-blur-sm shadow-sm flex items-center gap-2"
        >
          <span className="font-script text-xl text-accent font-bold">Engineering &</span>
          <span className="font-sans font-black text-xs tracking-wider uppercase text-ink-light dark:text-ink-dark">Graphic Portfolio</span>
        </motion.div>

        {/* Name as large text — not overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display font-black text-[18vw] leading-none tracking-tight text-ink-light dark:text-ink-dark text-center"
        >
          {portfolioData.brand.heroBigHeadline}
        </motion.div>

        {/* Portrait — dedicated block, nothing overlapping text */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="relative mt-2"
        >
          {/* Aura glow */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/30 via-indigo-500/15 to-purple-500/25 blur-2xl opacity-70 pointer-events-none" />

          {/* Orbital ring */}
          <div className="absolute -inset-4 rounded-full border border-dashed border-accent/30 dark:border-white/20 pointer-events-none animate-[spin_50s_linear_infinite]">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#3730A3]" />
          </div>

          {/* Circle portrait */}
          <div className="relative w-44 h-44 rounded-full p-2 bg-gradient-to-b from-white/90 via-white/30 to-black/10 dark:from-white/25 dark:via-white/5 dark:to-black/40 shadow-2xl backdrop-blur-md group">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-canvas-light dark:border-[#1F1F24] shadow-inner">
              <img
                src={portfolioData.personal.portraitImage}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
            </div>

            {/* Overlay badges — only the small corner ones on mobile */}
            {overlayStyle === 'glass' && (
              <>
                <div className="absolute -top-3 -right-2 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#141418]/95 backdrop-blur-md border border-white/80 dark:border-white/15 shadow-lg text-ink-light dark:text-white whitespace-nowrap">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[8px] font-bold tracking-wider uppercase">Available</span>
                </div>
                <div className="absolute -bottom-3 -left-2 z-30 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#141418]/95 backdrop-blur-md border border-white/80 dark:border-white/15 shadow-lg text-ink-light dark:text-white whitespace-nowrap">
                  <GraduationCap className="w-3 h-3 text-accent shrink-0" />
                  <span className="font-mono text-[8px] font-bold tracking-wider uppercase">CSE '26</span>
                </div>
              </>
            )}
            {overlayStyle === 'editorial' && (
              <>
                <div className="absolute -top-3 -left-2 z-30 px-2.5 py-0.5 bg-ink-light text-canvas-light dark:bg-ink-dark dark:text-ink-light font-mono text-[8px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
                  VOL. 2026
                </div>
                <div className="absolute -top-3 -right-2 z-30 px-2.5 py-0.5 bg-accent text-white font-mono text-[8px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
                  ED. №1
                </div>
              </>
            )}
            {overlayStyle === 'bento' && (
              <>
                <div className="absolute -top-3 -right-2 z-30 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#16161A]/95 backdrop-blur-md border border-ink-light/10 dark:border-white/15 shadow-lg text-ink-light dark:text-white whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="font-mono text-[8px] font-bold uppercase tracking-wider">Open</span>
                </div>
                <div className="absolute -bottom-3 -left-2 z-30 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#16161A]/95 backdrop-blur-md border border-ink-light/10 dark:border-white/15 shadow-lg text-ink-light dark:text-white whitespace-nowrap">
                  <Code2 className="w-2.5 h-2.5 text-accent shrink-0" />
                  <span className="font-mono text-[8px] font-bold uppercase tracking-wider">React</span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Script role word — clearly below portrait */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 dark:bg-[#121217]/90 backdrop-blur-md border border-white/80 dark:border-white/20 shadow-lg -rotate-2"
        >
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span className="font-script text-3xl text-accent dark:text-indigo-400 font-bold tracking-wide select-none">
            {portfolioData.brand.heroScriptWord}
          </span>
          <div className="h-4 w-[1px] bg-ink-light/20 dark:bg-white/20" />
          <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent dark:bg-accent/25 dark:text-indigo-300">
            UI / UX
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center font-sans text-xs text-ink-muted dark:text-ink-darkMuted leading-relaxed max-w-xs px-2"
        >
          <span className="font-semibold text-ink-light dark:text-ink-dark">{portfolioData.personal.degree}</span>{' '}
          at <span className="font-semibold text-accent">{portfolioData.personal.college}</span>.
          Designing &amp; developing editorial grade digital systems.
        </motion.p>

        {/* Overlay style switcher — mobile friendly, compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-1 p-1 rounded-full bg-white/80 dark:bg-[#17171C]/80 backdrop-blur-md border border-ink-light/10 dark:border-white/10 shadow-sm"
        >
          <span className="pl-2 pr-0.5">
            <Sliders className="w-3 h-3 text-accent" />
          </span>
          {[
            { id: 'glass', label: 'Glass' },
            { id: 'editorial', label: 'Editorial' },
            { id: 'bento', label: 'Bento' },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setOverlayStyle(s.id)}
              className={`px-3 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider transition-all duration-300 ${overlayStyle === s.id
                  ? 'bg-accent text-white font-bold shadow-sm'
                  : 'text-ink-muted hover:text-ink-light dark:hover:text-ink-dark'
                }`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT  (md+)  — layered editorial
         ══════════════════════════════════════════ */}
      <div className="hidden md:block relative z-10 my-auto py-10">
        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <div className="px-6 py-1.5 rounded-full bg-canvas-light/90 dark:bg-canvas-dark/90 border border-ink-light/15 dark:border-ink-dark/20 backdrop-blur-sm shadow-sm flex items-center gap-2 z-20">
            <span className="font-script text-2xl text-accent font-bold">Engineering &</span>
            <span className="font-sans font-black text-sm tracking-wider uppercase text-ink-light dark:text-ink-dark">Graphic Portfolio</span>
          </div>
        </motion.div>

        {/* Layered composition */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          {/* LAYER 1: Headline */}
          <motion.div
            style={{ y: textScrollY, x: headlineMouseX }}
            className="w-full flex justify-between sm:justify-around items-center select-none font-display font-black text-[20vw] md:text-[18vw] leading-none tracking-tight text-ink-light dark:text-ink-dark"
          >
            {headlineLetters.map((letter, idx) => (
              <span key={idx} className="inline-block transform-gpu transition-colors duration-300 hover:text-accent">
                {letter}
              </span>
            ))}
          </motion.div>

          {/* LAYER 2: Portrait + overlays */}
          <motion.div
            style={{ y: portraitScrollY, x: portraitMouseX }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
          >
            {/* Aura halo */}
            <div className="absolute -inset-12 rounded-full bg-gradient-to-tr from-accent/35 via-indigo-500/20 to-purple-600/30 blur-3xl opacity-80 dark:opacity-60 pointer-events-none animate-pulse-glow" />

            {/* Orbital ring */}
            <div className="absolute -inset-7 rounded-full border border-dashed border-accent/30 dark:border-white/20 pointer-events-none animate-[spin_50s_linear_infinite]">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_#3730A3]" />
            </div>

            {/* Circle frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2.5 bg-gradient-to-b from-white/90 via-white/30 to-black/10 dark:from-white/25 dark:via-white/5 dark:to-black/40 shadow-2xl backdrop-blur-md group">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-canvas-light dark:border-[#1F1F24] shadow-inner">
                <img
                  src={portfolioData.personal.portraitImage}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-white/15 pointer-events-none" />
              </div>

              {/* Overlay badges */}
              {overlayStyle === 'glass' && <GlassOverlay />}
              {overlayStyle === 'editorial' && <EditorialOverlay />}
              {overlayStyle === 'bento' && <BentoOverlay />}
            </div>
          </motion.div>
        </div>

        {/* Overlay switcher + tagline */}
        <div className="flex flex-col items-center gap-5 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-1.5 p-1 rounded-full bg-white/80 dark:bg-[#17171C]/80 backdrop-blur-md border border-ink-light/10 dark:border-white/10 shadow-sm"
          >
            <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted pl-2.5 pr-1 font-semibold">
              <Sliders className="w-3 h-3 text-accent" />
              <span>Overlay Style:</span>
            </span>
            {[
              { id: 'glass', label: 'Glass HUD' },
              { id: 'editorial', label: 'Swiss Editorial' },
              { id: 'bento', label: 'Creative Bento' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setOverlayStyle(s.id)}
                className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${overlayStyle === s.id
                    ? 'bg-accent text-white font-bold shadow-sm'
                    : 'text-ink-muted hover:text-ink-light dark:hover:text-ink-dark hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                {s.label}
              </button>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-sans text-sm text-ink-muted dark:text-ink-darkMuted leading-relaxed text-center max-w-xl px-4"
          >
            <span className="font-semibold text-ink-light dark:text-ink-dark">{portfolioData.personal.degree}</span>{' '}
            at <span className="font-semibold text-accent">{portfolioData.personal.college}</span>.
            Designing &amp; developing editorial grade digital systems with high visual rhythm.
          </motion.p>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60 text-xs"
      >
        {/* Social icons */}
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
          <span className="text-[11px] font-mono text-ink-muted ml-2 hidden sm:inline-block">CONNECT / FOLLOW</span>
        </div>

        {/* Scroll hint */}
        <a
          href="#about"
          className="hidden md:flex items-center gap-2 text-ink-muted hover:text-accent font-mono text-[11px] uppercase tracking-widest transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent" />
        </a>

        {/* Email */}
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

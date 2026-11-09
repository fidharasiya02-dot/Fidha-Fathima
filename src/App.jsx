import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsServicesSection from './components/SkillsServicesSection';
import TimelineSection from './components/TimelineSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { portfolioData } from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Initialize Lenis smooth scroll and GSAP ScrollTrigger synchronization
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-canvas-light text-ink-light dark:bg-canvas-dark dark:text-ink-dark transition-colors duration-300 font-sans">
        {/* Editorial Noise & Grain overlay */}
        <div className="paper-grain fixed inset-0 pointer-events-none z-[1] opacity-30" />

        {/* Custom Physics Follower Cursor */}
        <CustomCursor />

        {/* Name Reveal Editorial Preloader */}
        <Preloader onComplete={() => setPreloaderDone(true)} />

        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">
          {/* HERO SECTION matching reference design */}
          <HeroSection isLoaded={preloaderDone} />

          {/* Infinite Running Marquee Strip */}
          <MarqueeStrip
            items={[
              'THEJUS ENGINEERING COLLEGE',
              'EDITORIAL GRAPHIC PORTFOLIO',
              'CREATIVE WEB DEVELOPMENT',
              'REACT & NEXT.JS',
              'SWISS TYPOGRAPHY',
              'FULLSTACK ENGINEERING',
            ]}
          />

          {/* 01 / ABOUT SECTION */}
          <AboutSection />

          {/* 02 / SELECTED WORKS (PROJECTS) */}
          <ProjectsSection />

          {/* Reversed Marquee Strip */}
          <MarqueeStrip
            dark={true}
            reverse={true}
            items={[
              'DESIGN SYSTEMS',
              'ALGORITHMIC EFFICIENCY',
              'SMOOTH INTERACTION',
              'INTERACTIVE PROTOTYPING',
              'HIGH CONTRAST EDITORIAL',
              'THOUGHTFUL CRAFT',
            ]}
          />

          {/* 03 / SKILLS & SERVICES */}
          <SkillsServicesSection />

          {/* 04 / EDUCATION & EXPERIENCE TIMELINE */}
          <TimelineSection />

          {/* 05 / EDITORIAL BLOG / WRITINGS */}
          <BlogSection />

          {/* 06 / CONTACT SECTION */}
          <ContactSection />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


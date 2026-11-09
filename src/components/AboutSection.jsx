import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Terminal, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Number & Header */}
        <div className="flex items-baseline justify-between border-b border-borderMuted-light dark:border-borderMuted-dark pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-accent font-bold">01</span>
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted">
              ABOUT THE CREATOR
            </span>
          </div>
          <span className="font-mono text-xs uppercase text-ink-muted tracking-wider hidden sm:inline-block">
            {portfolioData.personal.college}
          </span>
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Statement & Education Card */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-ink-light dark:text-ink-dark uppercase"
            >
              ENGINEERING RIGOR. <br />
              <span className="text-stroke-dark dark:text-stroke-thick">EDITORIAL</span>{' '}
              <span className="text-accent italic font-serif lowercase">flair.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-sans text-lg sm:text-xl text-ink-light/90 dark:text-ink-dark/90 leading-relaxed font-normal"
            >
              {portfolioData.personal.bioLong}
            </motion.p>

            {/* Academic Institution Spotlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="p-6 sm:p-8 rounded-2xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-24 h-24 text-accent" />
              </div>

              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest font-bold mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>

              <h3 className="font-sans font-extrabold text-2xl text-ink-light dark:text-ink-dark mb-1">
                {portfolioData.personal.college}
              </h3>
              <p className="font-sans font-semibold text-sm text-ink-muted dark:text-ink-darkMuted mb-4">
                {portfolioData.personal.degree} • {portfolioData.personal.batch}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60 pt-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-accent" />
                  <span>APJ Abdul Kalam Tech. University</span>
                </div>
              </div>
            </motion.div>

            {/* Resume / Contact CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-ink-light dark:bg-ink-dark text-canvas-light dark:text-canvas-dark font-sans font-bold text-xs tracking-widest uppercase hover:bg-accent dark:hover:bg-accent hover:text-white transition-all shadow-md"
                >
                  <span>LET'S TALK OPPORTUNITIES</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink-light/20 dark:border-ink-dark/20 text-ink-light dark:text-ink-dark font-sans font-bold text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-colors"
                >
                  <span>EMAIL FIDHA</span>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Stats & Animated Skills */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark flex flex-col justify-between"
                >
                  <span className="font-display font-black text-4xl sm:text-5xl text-accent">
                    {stat.value}
                    <span className="text-2xl text-ink-light dark:text-ink-dark">{stat.suffix}</span>
                  </span>
                  <span className="font-sans font-bold text-xs tracking-wider uppercase text-ink-muted mt-2">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Core Competency Tag Cloud */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4">
                <Terminal className="w-4 h-4" />
                <span>CORE TECHNOLOGIES & TOOLS</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.technologiesList.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="px-3 py-1.5 rounded-lg bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light/80 dark:border-borderMuted-dark/80 font-sans text-xs font-semibold text-ink-light dark:text-ink-dark hover:border-accent hover:text-accent transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Engineering & Design Philosophy Callout */}
            <div className="border-l-2 border-accent pl-5 py-2">
              <p className="font-serif italic text-lg text-ink-light dark:text-ink-dark leading-snug">
                "Code without aesthetics feels dry and utilitarian; aesthetics without code remains a static concept. Bringing both together is where the magic happens."
              </p>
              <span className="font-mono text-xs text-accent mt-2 block font-bold uppercase tracking-wider">
                — FIDHA / 2025 PHILOSOPHY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


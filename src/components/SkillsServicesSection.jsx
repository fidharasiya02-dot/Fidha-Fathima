import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Code2, Layout, Cpu, PenTool, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsServicesSection = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  const getServiceIcon = (index) => {
    switch (index) {
      case 0:
        return <Code2 className="w-6 h-6 text-accent" />;
      case 1:
        return <Layout className="w-6 h-6 text-accent" />;
      case 2:
        return <Cpu className="w-6 h-6 text-accent" />;
      case 3:
        return <PenTool className="w-6 h-6 text-accent" />;
      default:
        return <Sparkles className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-canvas-light dark:bg-canvas-dark border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-borderMuted-light dark:border-borderMuted-dark pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-accent font-bold">03</span>
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted">
              EXPERTISE & SERVICES
            </span>
          </div>
          <span className="font-mono text-xs uppercase text-ink-muted tracking-wider hidden sm:inline-block">
            CAPABILITIES MATRIX
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-ink-light dark:text-ink-dark">
            WHAT I <span className="text-accent italic font-serif lowercase">craft.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-darkMuted max-w-2xl mt-4">
            Combining rigorous software engineering methodologies with bespoke editorial graphic craftsmanship to build memorable digital products.
          </p>
        </div>

        {/* 4 Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {portfolioData.services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark hover:border-accent dark:hover:border-accent transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-4xl font-bold text-accent">
                    {service.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark group-hover:scale-110 transition-transform">
                    {getServiceIcon(idx)}
                  </div>
                </div>

                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-ink-light dark:text-ink-dark mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-ink-muted dark:text-ink-darkMuted leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-accent font-bold mb-3">
                  DELIVERABLES INCLUDE
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans font-semibold text-ink-light/80 dark:text-ink-dark/80">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Skill Progress Bars Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderMuted-light/60 dark:border-borderMuted-dark/60 pb-6 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-1">
                PROFICIENCY INDEX
              </span>
              <h3 className="font-sans font-extrabold text-2xl text-ink-light dark:text-ink-dark">
                Technical Mastery & Craft Depth
              </h3>
            </div>

            {/* Sub-tabs */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark">
              <button
                onClick={() => setActiveTab('engineering')}
                className={`px-3 py-1.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'engineering'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink-light dark:hover:text-white'
                }`}
              >
                Engineering
              </button>
              <button
                onClick={() => setActiveTab('creativeTech')}
                className={`px-3 py-1.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'creativeTech'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink-light dark:hover:text-white'
                }`}
              >
                Creative Code
              </button>
              <button
                onClick={() => setActiveTab('designEditorial')}
                className={`px-3 py-1.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'designEditorial'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink-light dark:hover:text-white'
                }`}
              >
                Editorial & UI
              </button>
            </div>
          </div>

          {/* Progress Lines */}
          <div className="space-y-6">
            {portfolioData.skills[activeTab].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2 font-sans text-xs sm:text-sm">
                  <span className="font-bold text-ink-light dark:text-ink-dark">
                    {skill.name}
                  </span>
                  <span className="font-mono font-bold text-accent">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-canvas-light dark:bg-canvas-dark overflow-hidden border border-borderMuted-light/50 dark:border-borderMuted-dark/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.08, ease: 'easeOut' }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsServicesSection;


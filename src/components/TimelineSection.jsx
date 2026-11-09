import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TimelineSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const getTimelineIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-accent" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-accent" />;
      case 'leadership':
        return <Award className="w-5 h-5 text-accent" />;
      default:
        return <Calendar className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-canvas-light dark:bg-canvas-dark border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-borderMuted-light dark:border-borderMuted-dark pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-accent font-bold">04</span>
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted">
              ACADEMIC & WORK TRAJECTORY
            </span>
          </div>
          <span className="font-mono text-xs uppercase text-ink-muted tracking-wider hidden sm:inline-block">
            EXPERIENCE TIMELINE
          </span>
        </div>

        <div className="mb-20">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-ink-light dark:text-ink-dark">
            THE <span className="text-accent italic font-serif lowercase">journey.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-darkMuted max-w-2xl mt-4">
            From algorithmic principles at Thejus Engineering College to hands-on web development internships and creative design leadership.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative">
          {/* Animated SVG / CSS Drawn Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-borderMuted-light dark:bg-borderMuted-dark -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent origin-top transition-all"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {portfolioData.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-canvas-light dark:bg-canvas-dark border-2 border-accent flex items-center justify-center shadow-md">
                    {getTimelineIcon(item.type)}
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`ml-12 sm:ml-0 ${
                      isEven ? 'sm:pr-14' : 'sm:pl-14'
                    } w-full sm:w-1/2`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark hover:border-accent dark:hover:border-accent transition-all duration-300 shadow-sm group">
                      {/* Year & Type Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-canvas-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark text-ink-muted">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-ink-light dark:text-ink-dark mb-1 group-hover:text-accent transition-colors">
                        {item.role}
                      </h3>

                      <div className="font-sans font-semibold text-sm text-ink-muted dark:text-ink-darkMuted mb-3 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span>{item.institution} • {item.location}</span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-ink-light/80 dark:text-ink-dark/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono text-accent font-semibold"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;


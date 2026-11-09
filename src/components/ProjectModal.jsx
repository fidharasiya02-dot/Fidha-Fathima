import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Calendar, User, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

export const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-canvas-light dark:bg-card-dark text-ink-light dark:text-ink-dark border border-borderMuted-light dark:border-borderMuted-dark shadow-2xl z-10 custom-scrollbar"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-canvas-light/90 dark:bg-card-dark/90 backdrop-blur-md border-b border-borderMuted-light/60 dark:border-borderMuted-dark/60">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="font-mono text-xs text-ink-muted">
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              data-cursor="hover"
              aria-label="Close Project Modal"
              className="p-2 rounded-full border border-ink-light/20 dark:border-ink-dark/20 hover:border-accent hover:bg-accent hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10">
            {/* Project Title & Subtitle */}
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-ink-light dark:text-ink-dark mb-2">
              {project.title}
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-accent mb-6">
              {project.subtitle}
            </p>

            {/* Cover Image */}
            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 border border-borderMuted-light dark:border-borderMuted-dark shadow-md">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-card-light dark:bg-canvas-dark border border-borderMuted-light/70 dark:border-borderMuted-dark/70 mb-8 font-sans">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  Client / Context
                </span>
                <span className="font-bold text-xs sm:text-sm text-ink-light dark:text-ink-dark">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  My Role
                </span>
                <span className="font-bold text-xs sm:text-sm text-ink-light dark:text-ink-dark">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  Timeline
                </span>
                <span className="font-bold text-xs sm:text-sm text-ink-light dark:text-ink-dark">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  Category
                </span>
                <span className="font-bold text-xs sm:text-sm text-accent">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-8">
              <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted mb-3">
                OVERVIEW & PROBLEM STATEMENT
              </h3>
              <p className="font-sans text-base sm:text-lg text-ink-light/90 dark:text-ink-dark/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Engineering & Design Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-8 p-6 rounded-2xl bg-card-light dark:bg-canvas-dark border border-borderMuted-light/70 dark:border-borderMuted-dark/70">
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  KEY DELIVERABLES & TECHNICAL HIGHLIGHTS
                </h3>
                <ul className="space-y-3 font-sans text-sm sm:text-base text-ink-light/90 dark:text-ink-dark/90">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Applied */}
            <div className="mb-10">
              <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted mb-3">
                TECH STACK & METHODS
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-lg bg-card-light dark:bg-canvas-dark border border-borderMuted-light dark:border-borderMuted-dark font-mono text-xs font-semibold text-ink-light dark:text-ink-dark"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-borderMuted-light dark:border-borderMuted-dark">
              {project.liveUrl && (
                <MagneticButton>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-accent-light transition-all shadow-md"
                  >
                    <span>LAUNCH LIVE PREVIEW</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </MagneticButton>
              )}

              {project.githubUrl && (
                <MagneticButton>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-ink-light/20 dark:border-ink-dark/20 text-ink-light dark:text-ink-dark font-sans font-bold text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW REPOSITORY</span>
                  </a>
                </MagneticButton>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;


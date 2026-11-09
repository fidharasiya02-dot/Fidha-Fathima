import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import MagneticButton from './MagneticButton';

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Engineering & Web Dev', 'Creative Development', 'Graphic Design & Branding'];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 8))
        );

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = portfolioData.projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % portfolioData.projects.length;
    setSelectedProject(portfolioData.projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = portfolioData.projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length;
    setSelectedProject(portfolioData.projects[prevIndex]);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-canvas-light dark:bg-canvas-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderMuted-light dark:border-borderMuted-dark pb-6 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm tracking-widest text-accent font-bold">02</span>
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted">
                PORTFOLIO ARCHIVE
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-ink-light dark:text-ink-dark">
              SELECTED <span className="text-accent italic font-serif lowercase">works.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ink-light dark:bg-ink-dark text-canvas-light dark:text-canvas-dark shadow-sm'
                    : 'bg-card-light dark:bg-card-dark text-ink-muted hover:text-ink-light dark:hover:text-ink-dark border border-borderMuted-light dark:border-borderMuted-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => handleOpenProject(project)}
                data-cursor="project"
                data-cursor-text="VIEW"
                className="group relative cursor-pointer flex flex-col justify-between rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark p-6 sm:p-8 hover:border-accent dark:hover:border-accent transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                {/* Card Top: Number & Category */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-bold text-ink-muted/50 group-hover:text-accent transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-canvas-light dark:bg-canvas-dark text-ink-light dark:text-ink-dark border border-borderMuted-light dark:border-borderMuted-dark">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Image with Hover Zoom & Vignette */}
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-borderMuted-light dark:bg-borderMuted-dark">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-ink-light dark:text-ink-dark group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="font-serif italic text-sm text-accent mb-4">
                    {project.subtitle}
                  </p>
                  <p className="font-sans text-sm text-ink-muted dark:text-ink-darkMuted line-clamp-2 mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-ink-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProject}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

export default ProjectsSection;


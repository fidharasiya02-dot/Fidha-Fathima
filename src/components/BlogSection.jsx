import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock, Calendar, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-canvas-light dark:bg-canvas-dark border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-borderMuted-light dark:border-borderMuted-dark pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-accent font-bold">05</span>
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-ink-muted">
              EDITORIAL ESSAYS & THOUGHTS
            </span>
          </div>
          <span className="font-mono text-xs uppercase text-ink-muted tracking-wider hidden sm:inline-block">
            PUBLICATIONS
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-ink-light dark:text-ink-dark">
            WRITINGS & <span className="text-accent italic font-serif lowercase">notes.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-darkMuted max-w-2xl mt-4">
            Observations on creative technology, typography systems, and the bridge between engineering logic and artistic expression.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              data-cursor="hover"
              className="cursor-pointer p-8 rounded-3xl bg-card-light dark:bg-card-dark border border-borderMuted-light dark:border-borderMuted-dark hover:border-accent dark:hover:border-accent transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent font-bold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-ink-light dark:text-ink-dark group-hover:text-accent transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="flex items-center justify-between pt-4 border-t border-borderMuted-light/60 dark:border-borderMuted-dark/60 font-sans text-xs font-bold text-accent group-hover:translate-x-1 transition-transform">
                <span>READ ARTICLE</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-canvas-light dark:bg-card-dark text-ink-light dark:text-ink-dark rounded-3xl p-6 sm:p-10 border border-borderMuted-light dark:border-borderMuted-dark shadow-2xl z-10"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="font-sans font-black text-2xl sm:text-3xl text-ink-light dark:text-ink-dark mb-4">
                {selectedArticle.title}
              </h2>

              <p className="font-sans text-base text-ink-light/90 dark:text-ink-dark/90 leading-relaxed mb-6">
                {selectedArticle.excerpt}
              </p>

              <div className="p-4 rounded-xl bg-card-light dark:bg-canvas-dark border border-borderMuted-light/60 dark:border-borderMuted-dark/60 text-xs font-mono text-ink-muted">
                Note: This is an editorial preview from Fidha's academic & creative portfolio at Thejus Engineering College. Full text will be synced with Hashnode/Substack.
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="mt-6 w-full py-3 rounded-full bg-accent text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-accent-light"
              >
                CLOSE ESSAY
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;


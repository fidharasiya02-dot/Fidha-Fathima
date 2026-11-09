import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 700);
          }, 300);
          return 100;
        }
        // Organic acceleration
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col justify-between p-6 md:p-12 bg-canvas-light text-ink-light select-none overflow-hidden"
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Top metadata */}
          <div className="flex justify-between items-start text-xs uppercase tracking-widest font-mono text-ink-muted">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
              <span>INITIALIZING PORTFOLIO</span>
            </div>
            <div>VOL. 2025 / THEJUS ED.</div>
          </div>

          {/* Center Brand Typography */}
          <div className="my-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-ink-light"
            >
              FIDHA
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-script text-3xl sm:text-4xl text-accent -mt-4 sm:-mt-6 tracking-wide"
            >
              Creative Developer & Designer
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-ink-muted font-sans mt-3"
            >
              Thejus Engineering College • Kerala
            </motion.p>
          </div>

          {/* Bottom Progress & Counter */}
          <div className="w-full">
            <div className="flex justify-between items-end mb-3 font-mono text-sm">
              <span className="text-xs tracking-wider uppercase text-ink-muted">
                Crafting digital experience
              </span>
              <span className="font-display text-4xl sm:text-5xl font-black text-ink-light">
                {String(progress).padStart(3, '0')}%
              </span>
            </div>

            {/* Progress bar track */}
            <div className="w-full h-1.5 bg-borderMuted-light/50 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;


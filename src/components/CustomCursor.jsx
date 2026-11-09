import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has pointer (not touch only)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor], a, button, [role="button"]');
      if (target) {
        const customCursor = target.getAttribute('data-cursor');
        if (customCursor) {
          setCursorVariant(customCursor);
          setCursorText(target.getAttribute('data-cursor-text') || '');
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: 'rgba(55, 48, 163, 0.75)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(55, 48, 163, 0.25)',
      borderColor: 'rgba(55, 48, 163, 0.9)',
      borderWidth: '2px',
      scale: 1.15,
    },
    project: {
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      width: 90,
      height: 90,
      backgroundColor: '#111111',
      color: '#FFFFFF',
      scale: 1,
    },
    text: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: 70,
      height: 70,
      backgroundColor: '#3730A3',
      color: '#FFFFFF',
    }
  };

  return (
    <>
      {/* Outer Cursor follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-sans text-[11px] font-bold tracking-widest uppercase transition-opacity duration-150 backdrop-blur-[1px]"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.2,
        }}
      >
        {cursorText && (
          <span className="text-white select-none px-1 text-center leading-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny inner dot for pinpoint precision */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 rounded-full bg-accent dark:bg-white"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: cursorVariant === 'default' ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 800,
          mass: 0.05,
        }}
      />
    </>
  );
};

export default CustomCursor;


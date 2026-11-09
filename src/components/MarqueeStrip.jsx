import React from 'react';

export const MarqueeStrip = ({
  text,
  items,
  reverse = false,
  className = '',
  speedClass = 'animate-marquee',
  dark = false,
}) => {
  const content = items || (text ? [text] : []);

  return (
    <div
      className={`relative w-full overflow-hidden whitespace-nowrap py-3.5 select-none ${
        dark
          ? 'bg-ink-light text-canvas-light dark:bg-card-dark dark:text-white'
          : 'bg-accent text-white'
      } ${className}`}
    >
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : speedClass}`}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            {content.map((item, idx) => (
              <span
                key={idx}
                className="font-display uppercase text-lg sm:text-2xl tracking-wider flex items-center gap-6"
              >
                <span>{item}</span>
                <span className="inline-block w-2 h-2 rounded-full bg-current opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;


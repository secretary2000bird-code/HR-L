/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { LIVE_FOOTPRINTS } from '../data';
import { Language } from '../types';

interface LiveFootprintBarProps {
  lang: Language;
}

export default function LiveFootprintBar({ lang }: LiveFootprintBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % LIVE_FOOTPRINTS.length);
        setAnimate(true);
      }, 300); // match transition speed
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#013E75] text-[#E1E6EB] text-xs tracking-wider py-4 px-6 border-y border-[#F5B70A]/20 overflow-hidden relative shadow-inner">
      <div className="max-w-[1400px] mx-auto flex items-center space-x-4">
        
        {/* Status indicator badge */}
        <div className="flex items-center space-x-2 shrink-0 select-none bg-[#051524]/40 px-2.5 py-1 border border-[#F5B70A]/15 font-mono text-[10px] text-[#F5B70A] tracking-[0.1em] font-medium rounded-sm">
          <span className="inline-flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B70A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5B70A]"></span>
          </span>
          <span>{lang === 'zh' ? '交付动态' : 'LIVE FEED'}</span>
        </div>
        
        {/* Animated text content */}
        <div className="flex-1 overflow-hidden min-w-0">
          <p 
            className={`font-light truncate transition-all duration-300 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
            }`}
            id="live-ticker-text"
          >
            {/* Bold dynamic tag highlight prefix */}
            <span className="text-[#F5B70A] font-medium mr-2">
              {lang === 'zh' ? '【全球交付实况】' : '[CARGO DISPATCH]'}
            </span>
            {LIVE_FOOTPRINTS[currentIndex][lang]}
          </p>
        </div>

        {/* Bullet page count indicator */}
        <div className="hidden lg:flex items-center space-x-1 px-2">
          {LIVE_FOOTPRINTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setAnimate(true);
                }, 100);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-4 bg-[#F5B70A]' : 'w-1.5 bg-[#E1E6EB]/30 hover:bg-[#E1E6EB]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}

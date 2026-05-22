/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FOOTER_CONTENT } from '../data';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navySurface text-paperSilver py-16 px-6 lg:px-16 border-t border-white/5 text-xs">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Brand Area */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a
            href="#hero"
            onClick={handleScrollToTop}
            className="font-serif text-lg tracking-widest font-semibold text-ivory hover:text-versace transition-colors focus:outline-none"
            id="footer-logo-link"
          >
            YUEJIE BESPOKE
          </a>
          <p className="text-stoneWarm text-[11px] font-light text-center md:text-left tracking-wide">
            {FOOTER_CONTENT.copyright[lang]}
          </p>
        </div>
        
        {/* Right Nav / Policy Area */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] tracking-wider text-stoneWarm font-light">
          {FOOTER_CONTENT.links.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-white/10 hidden sm:inline">|</span>}
              <a
                href={link.url}
                onClick={handleScrollToTop}
                className="hover:text-versace transition-colors duration-200"
                id={`footer-link-${index}`}
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </footer>
  );
}

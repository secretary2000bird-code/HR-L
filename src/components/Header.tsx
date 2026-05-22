/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { NAV_ITEMS, APP_NAME } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenConsultation: () => void;
  currentView: 'home' | 'advantages' | 'segments' | 'portfolio' | 'about';
  setCurrentView: (view: 'home' | 'advantages' | 'segments' | 'portfolio' | 'about') => void;
}

export default function Header({ lang, setLang, onOpenConsultation, currentView, setCurrentView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (id === '#advantages') {
      setCurrentView('advantages');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      return;
    }

    if (id === '#segments') {
      setCurrentView('segments');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      return;
    }

    if (id === '#portfolio') {
      setCurrentView('portfolio');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      return;
    }

    if (id === '#about') {
      setCurrentView('about');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
    } else {
      const element = document.querySelector(id);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6E4C8]/90 backdrop-blur-md border-b border-[#013E75]/10 px-6 lg:px-16 py-5 flex items-center justify-between">
      {/* Brand logo */}
      <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex flex-col group focus:outline-none">
        <span className="font-serif text-2xl lg:text-3xl tracking-wider font-semibold text-prussian transition-all duration-300 group-hover:text-versace">
          YUEJIE
        </span>
        <span className="text-[10px] tracking-[0.18rem] uppercase text-indigoMuted font-medium mt-0.5 whitespace-nowrap">
          {lang === 'zh' ? '悦捷企业服务' : 'BESPOKE SERVICES'}
        </span>
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
        {NAV_ITEMS.map((item) => {
          const isSelected = 
            (item.id === '#advantages' && currentView === 'advantages') || 
            (item.id === '#segments' && currentView === 'segments') || 
            (item.id === '#portfolio' && currentView === 'portfolio') ||
            (item.id === '#about' && currentView === 'about') ||
            (item.id === '#hero' && currentView === 'home');
            
          return (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`${
                isSelected 
                  ? 'text-versace font-bold border-b border-versace pb-0.5' 
                  : 'text-prussian hover:text-versace font-normal'
              } transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-versace after:transition-all after:duration-300 hover:after:w-full font-sans text-[13px] tracking-widest`}
              id={`nav-link-${item.id.replace('#', '')}`}
            >
              {item.label[lang]}
            </a>
          );
        })}
      </nav>

      {/* Language Toggle and CTAs */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest">
          <Globe className="w-3.5 h-3.5 text-prussian opacity-70" />
          <button
            id="btn-zh"
            onClick={() => setLang('zh')}
            className={`pb-0.5 focus:outline-none transition-all cursor-pointer ${
              lang === 'zh'
                ? 'text-prussian border-b-2 border-versace font-bold'
                : 'text-indigoMuted hover:text-prussian font-normal'
            }`}
          >
            ZH
          </button>
          <span className="text-stoneWarm">|</span>
          <button
            id="btn-en"
            onClick={() => setLang('en')}
            className={`pb-0.5 focus:outline-none transition-all cursor-pointer ${
              lang === 'en'
                ? 'text-prussian border-b-2 border-versace font-bold'
                : 'text-indigoMuted hover:text-prussian font-normal'
            }`}
          >
            EN
          </button>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenConsultation}
          className="hidden sm:inline-block bg-prussian text-ivory text-xs uppercase tracking-widest font-semibold py-3 px-6 hover:bg-versace hover:text-pblack transition-all duration-300 border border-transparent hover:border-versace cursor-pointer font-sans"
          id="btn-consult-header"
        >
          {lang === 'zh' ? '预约定制' : 'Consultation'}
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-prussian p-1 focus:outline-none focus:ring-1 focus:ring-prussian/20"
          aria-label="Toggle menu"
          id="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[74px] left-0 right-0 bottom-0 bg-[#F6E4C8] z-40 border-t border-[#013E75]/10 flex flex-col justify-between p-8 animate-fade-in">
          <nav className="flex flex-col space-y-6 text-lg font-medium tracking-wide">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="text-prussian hover:text-versace transition-colors border-b border-prussian/5 py-2"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>
          
          <div className="space-y-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-prussian text-ivory text-sm uppercase tracking-widest font-semibold py-4 px-6 text-center block hover:bg-versace hover:text-pblack transition-colors"
            >
              {lang === 'zh' ? '预约定制方案' : 'Request Consultation'}
            </button>
            <div className="text-center text-[11px] text-indigoMuted font-mono">
              FOSHAN YUEJIE BESPOKE SERVICES
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

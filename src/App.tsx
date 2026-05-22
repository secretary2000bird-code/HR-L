/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import { 
  NAV_ITEMS, 
  HERO_CONTENT, 
  SEC2_CONTENT, 
  ADVANTAGES, 
  SEC3_CONTENT, 
  SEGMENTS, 
  SEC4_CONTENT, 
  PORTFOLIO, 
  SEC5_CONTENT, 
  ROADMAP_STEPS, 
  INVITATION_CONTENT, 
  CONTACT_CONTENT 
} from './data';

// Import our modular components
import Header from './components/Header';
import Footer from './components/Footer';
import LiveFootprintBar from './components/LiveFootprintBar';
import InquiryForm from './components/InquiryForm';
import AdvantagesView from './components/AdvantagesView';
import SegmentsView from './components/SegmentsView';
import PortfolioView from './components/PortfolioView';
import AboutView from './components/AboutView';
import NotFoundView from './components/NotFoundView';

// Import Lucide icons for elite corporate details
import { 
  ArrowUpRight, 
  MapPin, 
  Compass, 
  UserPlus, 
  ShieldCheck, 
  Calendar, 
  Briefcase, 
  Grid,
  FileText,
  Mail,
  Home as HomeIcon,
  Phone,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<'home' | 'advantages' | 'segments' | 'portfolio' | 'about' | '404'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Trigger form focus and smooth scroll when consultation is requested
  const handleOpenConsultation = () => {
    if (currentView !== 'about') {
      setCurrentView('about');
    }
    
    setTimeout(() => {
      const element = document.getElementById('contact') || document.getElementById('input-name');
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Autofocus the name field
        setTimeout(() => {
          const nameField = document.getElementById('input-name');
          if (nameField) {
            nameField.focus();
          }
        }, 600);
      }
    }, currentView !== 'about' ? 150 : 0);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
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
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-[#F6E4C8] text-[#051524] relative font-sans selection:bg-versace selection:text-pblack">
      
      {/* 0. STICKY NAVIGATION HEADER */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onOpenConsultation={handleOpenConsultation}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-1 flex flex-col"
        >
          {currentView === 'home' ? (
            <>
              {/* 1. MANIFESTO & HERO SECTION (CHAPTER 01) */}
          <section id="hero" className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Hero Copy */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 border border-prussian/20 bg-ivory/50 px-3.5 py-1.5 text-[10px] tracking-[0.18rem] uppercase text-prussian font-semibold rounded-sm">
            <Sparkles className="w-3.5 h-3.5 text-versace animate-pulse" />
            <span>{HERO_CONTENT.badge[lang]}</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-prussian leading-[1.12] tracking-tight">
            <span className="block">{HERO_CONTENT.title1[lang]}</span>
            <span className="block mt-2 font-light italic">{HERO_CONTENT.title2[lang]}</span>
          </h1>
          
          <p className="text-base sm:text-lg text-indigoMuted max-w-xl leading-relaxed font-light">
            {HERO_CONTENT.description[lang]}
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <button 
              onClick={handleOpenConsultation}
              className="bg-versace text-pblack text-xs font-semibold uppercase tracking-widest py-4 bg-amber-400 px-8 border border-versace hover:bg-prussian hover:text-ivory hover:border-prussian transition-all duration-300 shadow-sm cursor-pointer flex items-center gap-2 font-sans rounded-none"
              id="hero-primary-action"
            >
              <span>{HERO_CONTENT.primaryBtn[lang]}</span>
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
            
            <a 
              href="#portfolio"
              onClick={(e) => handleScrollToSection(e, '#portfolio')}
              className="border border-prussian text-prussian text-xs font-semibold uppercase tracking-widest py-4 px-8 hover:bg-ivory transition-all duration-300 flex items-center gap-2 font-sans rounded-none"
              id="hero-secondary-action"
            >
              <span>{HERO_CONTENT.secondaryBtn[lang]}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>

        {/* Hero Showcase Image Frame */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="border border-prussian/10 p-2.5 bg-ivory shadow-lg relative group">
            
            {/* Real aesthetic image element mirroring top high contrast guidelines */}
            <div 
              onClick={() => {
                setSelectedProjectId('CASE-01');
                setCurrentView('portfolio');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="aspect-[4/5] w-full bg-stone-900 overflow-hidden relative cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Yuejie Bespoke Ultra Premium Villa Design" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Frame Accent Overlays */}
              <div className="absolute top-4 left-4 border-t border-l border-white/50 w-8 h-8"></div>
              <div className="absolute bottom-4 right-4 border-b border-r border-white/50 w-8 h-8"></div>
              
              {/* Embedded Project journal banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-pblack/90 p-5 text-ivory border-t border-versace shadow-2xl backdrop-blur-sm">
                <p className="text-[9px] tracking-widest uppercase text-versace font-semibold mb-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  <span>{HERO_CONTENT.manifestTag[lang]}</span>
                </p>
                <div className="flex justify-between items-center gap-2">
                  <h4 className="font-serif text-base sm:text-lg font-medium tracking-wide">
                    {HERO_CONTENT.manifestTitle[lang]}
                  </h4>
                  <div className="bg-[#013E75] p-1.5 hover:bg-[#F5B70A] hover:text-pblack transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white hover:text-pblack" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Absolute Geometric Golden Accent line */}
          <div className="hidden lg:block absolute -left-16 bottom-12 w-32 h-[1px] bg-versace"></div>
        </div>

      </section>

      {/* 2. DYNAMIC LIVE DISPATCH TICKER */}
      <LiveFootprintBar lang={lang} />

      {/* 3. CORE ADVANTAGES (CHAPTER 02) */}
      <section id="advantages" className="w-full bg-ivory border-b border-prussian/10 py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          
          {/* Section Heading */}
          <div className="max-w-3xl space-y-4 mb-16 lg:mb-24">
            <span className="text-xs tracking-[0.25em] uppercase text-stoneWarm font-bold block flex items-center gap-2">
              <Compass className="w-4 h-4 text-prussian" />
              <span>{SEC2_CONTENT.sectionLabel}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-prussian leading-[1.15] tracking-tight">
              {SEC2_CONTENT.title[lang]}
            </h2>
            <div className="w-16 h-[2.5px] bg-versace mt-4"></div>
          </div>

          {/* Core Advantages Matrix Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {ADVANTAGES.map((adv, index) => (
              <div 
                key={index} 
                className="border-t border-versace pt-6 space-y-4 flex flex-col justify-between h-full group"
                id={`advantage-card-${index}`}
              >
                <div className="space-y-4">
                  <span className="font-serif text-sm italic text-stoneWarm font-semibold block transition-colors group-hover:text-prussian">
                    {adv.num}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-prussian tracking-wide flex items-center gap-1.5">
                    {adv.title[lang]}
                  </h3>
                  
                  <p className="text-sm text-indigoMuted leading-relaxed font-light text-justify">
                    {adv.description[lang]}
                  </p>
                </div>
                
                {/* Visual Accent Indicator */}
                <div className="w-0 h-[1.5px] bg-prussian transition-all duration-300 group-hover:w-full mt-4"></div>
              </div>
            ))}
          </div>

          {/* Deep-dive link leading to detailed advantages view */}
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                setCurrentView('advantages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border-b-2 border-prussian hover:border-versace text-prussian hover:text-versace text-sm font-semibold tracking-widest pb-1.5 transition-all duration-300 font-sans cursor-pointer uppercase"
              id="btn-goto-advantages-deep"
            >
              <span>{lang === 'zh' ? '前往拆解：三道严苛质检与 1:1 精密深化方案' : 'Deep-Dive: Comprehensive 3-Tier QA & 1:1 Shop Drawing Specs'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          
        </div>
      </section>

      {/* 4. BUSINESS SEGMENTS GRID (CHAPTER 03) */}
      <section id="segments" className="w-full py-24 lg:py-36 bg-pblack text-ivory border-b border-versace/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          
          {/* Asymmetrical introductory flex */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-end">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs tracking-[0.25em] uppercase text-versace font-bold block flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-versace" />
                <span>{SEC3_CONTENT.sectionLabel}</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-paperSilver leading-[1.15]">
                {SEC3_CONTENT.title[lang]}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-stoneWarm leading-relaxed font-light pb-1">
                {SEC3_CONTENT.sub[lang]}
              </p>
            </div>
          </div>

          {/* Two-Column Heavy High-Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SEGMENTS.map((seg, idx) => (
              <div 
                key={idx}
                className="bg-navySurface border border-white/5 p-8 lg:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden group shadow-lg"
                id={`segment-card-${idx}`}
              >
                {/* Visual geometric color block background decorative highlight on hover */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#013E75]/10 translate-x-12 translate-y-12 rotate-45 group-hover:bg-[#013E75]/20 group-hover:scale-110 transition-all duration-500"></div>

                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-[1px] bg-versace transition-all duration-500 group-hover:w-20"></div>
                  
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-ivory tracking-wide leading-snug">
                    <span className="text-versace font-mono text-sm mr-2.5 font-bold">{seg.num}/</span>
                    {seg.title[lang]}
                  </h3>
                  
                  <p className="text-sm text-stoneWarm leading-relaxed font-light text-justify">
                    {seg.description[lang]}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4 text-[11px] font-mono tracking-widest text-versace relative z-10">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 opacity-80" />
                    <span>[{seg.specLabel[lang]}]</span>
                  </div>
                  <div className="text-right">
                    <span>[{seg.specValue[lang]}]</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded premium banner CTA card - Main representation for business segments */}
          <div className="mt-16 max-w-4xl mx-auto">
            <button
              onClick={() => {
                setCurrentView('segments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left bg-gradient-to-r from-[#013E75] to-[#0A2E50] border-2 border-versace p-8 md:p-12 relative overflow-hidden shadow-2xl group transition-all duration-500 hover:scale-[1.02] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-none"
              id="btn-goto-segments-deep"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-versace/10 rounded-full blur-3xl group-hover:bg-versace/20 transition-all duration-700"></div>
              
              <div className="space-y-4 max-w-2xl relative z-10">
                <span className="text-xs font-mono text-versace tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {lang === 'zh' ? '深度精细化一站式整装系统已启动' : 'GLOBAL DEEP MULTI-VERTICAL CONSOLIDATION ACTIVE'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white leading-snug">
                  {lang === 'zh' ? (
                    <>
                      <span>四大单项制造巨头，</span>
                      <span className="block font-serif font-normal text-versace mt-1">
                        亦可一站式全能设计发运。点此进入主专篇 ──
                      </span>
                    </>
                  ) : (
                    'Discover 4 Core Specialized Manufacturing Divisions & 1-Stop Shipments.'
                  )}
                </h3>
                <p className="text-xs text-stoneWarm font-light leading-relaxed">
                  {lang === 'zh'
                    ? '自备万平分集配平数智仓，由 Sandy 团队全周期报单；涵盖重型抗飓风航空门窗、10米挑高实木固装、理石3D光谱对花等极限指标。'
                    : 'Analyze specialized woodwork specifications, air-infiltration glazing thresholds, 3-tier inspection protocols, and dockets pre-checked by manager Sandy.'}
                </p>
              </div>
              
              <div className="shrink-0 relative z-10">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-none border border-versace flex items-center justify-center bg-ivory/10 text-versace group-hover:bg-versace group-hover:text-pblack transition-all duration-500 shadow-lg">
                  <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* 5. SELECTED MASTERPIECES / PORTFOLIO (CHAPTER 04) */}
      <section id="portfolio" className="w-full py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          
          {/* Header area */}
          <div className="max-w-2xl space-y-4 mb-16 lg:mb-24">
            <span className="text-xs tracking-[0.25em] uppercase text-stoneWarm font-bold block flex items-center gap-2">
              <Grid className="w-4 h-4 text-prussian" />
              <span>{SEC4_CONTENT.sectionLabel}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-prussian tracking-tight">
              {SEC4_CONTENT.title[lang]}
            </h2>
            <div className="w-16 h-[2.5px] bg-versace mt-4"></div>
          </div>

          {/* Three-Column Portfolio Matrix with High-Definition specs table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  const normalizedId = item.caseId.replace(' ', '-');
                  setSelectedProjectId(normalizedId);
                  setCurrentView('portfolio');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="bg-ivory border border-prussian/5 sharp-card flex flex-col justify-between group overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-all hover:border-versace duration-300"
                id={`portfolio-item-${idx}`}
              >
                <div>
                  
                  {/* Photo area with grayscale reveal */}
                  <div className="aspect-[16/10] bg-stone-200 overflow-hidden relative border-b border-prussian/5">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title[lang]} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Visual Tag */}
                    <span className="absolute top-4 left-4 text-[9px] tracking-widest font-mono text-versace bg-prussian px-3 py-1 font-semibold rounded-none">
                      {item.tag[lang]}
                    </span>
                  </div>

                  {/* Portfolio Details */}
                  <div className="p-6 lg:p-8 space-y-4 bg-white">
                    <span className="text-[10px] tracking-widest font-mono text-indigoMuted bg-stone-100 px-2.5 py-0.5 inline-block font-semibold border-l-2 border-versace">
                      {item.caseId}
                    </span>
                    
                    <h3 className="font-serif text-xl font-medium text-prussian group-hover:text-versace transition-colors tracking-wide leading-snug">
                      {item.title[lang]}
                    </h3>
                    
                    <p className="text-xs text-indigoMuted font-light leading-relaxed text-justify">
                      {item.description[lang]}
                    </p>
                  </div>

                </div>

                {/* Highly structured technical data spec table */}
                <div className="p-6 lg:p-8 bg-pblack/5 border-t border-prussian/5 font-mono">
                  <table className="w-full text-[11px] text-indigoMuted">
                    <tbody>
                      {item.specs.map((spec, specIdx) => (
                        <tr key={specIdx} className="border-b border-prussian/5 last:border-0">
                          <td className="py-2 text-stoneWarm uppercase font-medium">{spec.label[lang]}:</td>
                          <td className="py-2 text-right text-pblack font-semibold">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            ))}
          </div>

          {/* Expanded premium banner CTA card - Main representation for portfolio deep-dive */}
          <div className="mt-16 max-w-4xl mx-auto">
            <button
              onClick={() => {
                setCurrentView('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left bg-gradient-to-r from-[#013E75] to-[#0A2E50] border-2 border-versace p-8 md:p-12 relative overflow-hidden shadow-2xl group transition-all duration-500 hover:scale-[1.02] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-none animate-once"
              id="btn-goto-portfolio-deep"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-versace/10 rounded-full blur-3xl group-hover:bg-versace/20 transition-all duration-700"></div>
              
              <div className="space-y-4 max-w-2xl relative z-10">
                <span className="text-xs font-mono text-versace tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {lang === 'zh' ? '全球跨境材料通关与瀑布流案例系统已同步' : 'GLOBAL PORTFOLIO & CUSTOMS DEEP INDEX SYNCHRONIZED'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white leading-snug">
                  {lang === 'zh' ? (
                    <>
                      <span>进入第四卷：高定出海案例，</span>
                      <span className="block font-serif font-normal text-versace mt-1">
                        探索全案大成瀑布流与全球履约地图 ──
                      </span>
                    </>
                  ) : (
                    'Discover Volume IV: Interactive Case Waterfall & Logistical Geodesic Map.'
                  )}
                </h3>
                <p className="text-xs text-stoneWarm font-light leading-relaxed">
                  {lang === 'zh'
                    ? '包含温哥华平墅、迈阿密海景别墅、迪拜及摩纳哥顶级整屋拼接方案；可一键多科室检索，点击世界节点直观评判跨境关检阻力。'
                    : 'Analyze custom impact glazings, premium bookmatched marbles, marine carpentries, and trace logistics clearances directly on coordinate nodes.'}
                </p>
              </div>
              
              <div className="shrink-0 relative z-10">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-none border border-versace flex items-center justify-center bg-ivory/10 text-versace group-hover:bg-versace group-hover:text-pblack transition-all duration-500 shadow-lg">
                  <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* 6. FIVE-STEP INDUSTRIAL ROADMAP (CHAPTER 05) */}
      <section id="roadmap" className="w-full py-24 lg:py-36 bg-ivory border-t border-b border-prussian/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          
          {/* Header */}
          <div className="max-w-2xl space-y-4 mb-16 lg:mb-24">
            <span className="text-xs tracking-[0.25em] uppercase text-stoneWarm font-bold block flex items-center gap-2">
              <Calendar className="w-4 h-4 text-prussian" />
              <span>{SEC5_CONTENT.sectionLabel}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-prussian tracking-tight">
              {SEC5_CONTENT.title[lang]}
            </h2>
            <div className="w-16 h-[2.5px] bg-versace mt-4"></div>
          </div>

          {/* Interactive, readable horizontal/vertical layout timeline */}
          <div className="space-y-6">
            {ROADMAP_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="bg-beige/45 hover:bg-beige/60 p-6 lg:p-8 border-l-4 border-prussian grid grid-cols-1 md:grid-cols-12 gap-6 items-center transition-all duration-300 shadow-sm"
                id={`roadmap-step-${idx}`}
              >
                <div className="md:col-span-2 font-serif text-lg font-bold text-prussian tracking-widest flex items-center gap-2">
                  <span className="text-[#013E75]">{step.phase}</span>
                </div>
                
                <div className="md:col-span-3 font-serif text-xl font-medium text-pblack tracking-wide">
                  {step.title[lang]}
                </div>
                
                <div className="md:col-span-7 text-xs sm:text-sm text-indigoMuted font-light leading-relaxed text-justify md:pl-4 md:border-l border-prussian/10">
                  {step.description[lang]}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAIR INVITATION BANNER (JULY 2026) */}
      <section className="w-full bg-[#013E75] text-ivory py-16 px-6 lg:px-16 text-center border-b border-[#F5B70A]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-5 z-10 relative">
          <span className="text-xs tracking-[0.35em] uppercase text-versace font-bold block">
            {INVITATION_CONTENT.badge}
          </span>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory tracking-wide leading-snug">
            {INVITATION_CONTENT.title[lang]}
          </h3>
          
          <p className="text-xs sm:text-sm text-paperSilver max-w-2xl mx-auto font-light leading-relaxed">
            {INVITATION_CONTENT.description[lang]}
          </p>
        </div>

        {/* Bauhaus geometric design elements */}
        <div className="absolute right-0 top-0 w-64 h-[1px] bg-versace/25 transform rotate-45 translate-x-12 translate-y-12"></div>
        <div className="absolute left-0 bottom-0 w-48 h-[1px] bg-versace/20 transform rotate-45 -translate-x-12 translate-y-12"></div>
      </section>

      {/* 8. CONTACT & REGISTRATION FORM (CHAPTER 06) */}
      <section id="contact" className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-24 lg:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Contact info details */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
          <span className="text-xs tracking-[0.25em] uppercase text-stoneWarm font-bold block flex items-center gap-2">
            <Mail className="w-4 h-4 text-prussian" />
            <span>{CONTACT_CONTENT.sectionLabel}</span>
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-prussian leading-[1.18] tracking-tight">
            {CONTACT_CONTENT.title[lang]}
          </h2>
          
          <p className="text-sm text-indigoMuted leading-relaxed font-light text-justify">
            {CONTACT_CONTENT.description[lang]}
          </p>
          
          <div className="pt-6 space-y-4 text-xs sm:text-sm text-pblack font-medium border-t border-prussian/10">
            
            <div className="flex items-center space-x-3.5 group">
              <span className="w-2.5 h-2.5 bg-versace shrink-0 group-hover:scale-125 transition-transform"></span>
              <a href={`mailto:${CONTACT_CONTENT.infoEmail}`} className="hover:text-[#013E75] hover:underline font-mono">
                Email: {CONTACT_CONTENT.infoEmail}
              </a>
            </div>
            
            <div className="flex items-start space-x-3.5">
              <span className="w-2.5 h-2.5 bg-versace shrink-0 mt-1.5"></span>
              <span className="leading-tight text-indigoMuted">
                {CONTACT_CONTENT.infoAddr[lang]}
              </span>
            </div>
            
          </div>
        </div>

        {/* Interactive Booking and Assessment Form Container */}
        <InquiryForm lang={lang} />

      </section>
        </>
      ) : currentView === 'advantages' ? (
        <AdvantagesView lang={lang} onOpenConsultation={handleOpenConsultation} />
      ) : currentView === 'segments' ? (
        <SegmentsView lang={lang} onOpenConsultation={handleOpenConsultation} />
      ) : currentView === 'portfolio' ? (
        <PortfolioView 
          lang={lang} 
          onOpenConsultation={handleOpenConsultation} 
          initialProjectId={selectedProjectId}
          onClearInitialProject={() => setSelectedProjectId(null)}
        />
      ) : currentView === 'about' ? (
        <AboutView lang={lang} onOpenConsultation={handleOpenConsultation} />
      ) : (
        <NotFoundView 
          lang={lang} 
          onReturnHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }} 
        />
      )}
        </motion.div>
      </AnimatePresence>

      {/* 9. THE FOOTER */}
      <Footer lang={lang} />

    </div>
  );
}

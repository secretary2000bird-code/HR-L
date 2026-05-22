/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState, useRef } from 'react';
import { Language } from '../types';
import { ROADMAP_STEPS, CONTACT_CONTENT } from '../data';
import InquiryForm from './InquiryForm';
import { 
  Activity, 
  Users, 
  Globe, 
  ShieldCheck, 
  Clock, 
  Building2,
  Anchor,
  Workflow,
  ChevronLeft,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface AboutViewProps {
  lang: Language;
  onOpenConsultation?: () => void;
}

interface StaffMember {
  id: string;
  name: { zh: string; en: string };
  role: { zh: string; en: string };
  avatar: string;
  badges: string[];
  signatureQuote: { zh: string; en: string };
  specs: { zh: string; en: string }[];
}

const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'DEPUTY-01',
    name: { zh: '陈雪莉 Sandy', en: 'Sandy Chen' },
    role: { zh: '首席跨境海运转舱与申报专家', en: 'Chief Cargo & Customs Officer' },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    badges: ['12年海关配载专研', '零查验一千标箱重货调度经验'],
    signatureQuote: {
      zh: '“单证和配载没有万一。每一张Sandy校验的装箱单，都比海水更稳、比黄金更准。”',
      en: '"There is no margin for error in manifest reconciliation. A Sandy sign-off means absolute port passage."'
    },
    specs: [
      { zh: '报检公文配合精准度：100%', en: 'Manifest Accuracy: 100%' },
      { zh: '集货称重平衡配合率：100%', en: 'Cargo Weight Balance: 100%' },
      { zh: '主配港清：纽约 / 杰贝阿里', en: 'Active Hubs: New York / Jebel Ali' }
    ]
  },
  {
    id: 'DEPUTY-02',
    name: { zh: '林国荣 James', en: 'James Lin' },
    role: { zh: '3D奢石大板深化与对纹拼接大师', en: 'Director of Stone Veining' },
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    badges: ['意/巴西矿区直采选线', '豪宅干挂对纹排版140套高定大成'],
    signatureQuote: {
      zh: '“大理石板在山中沉眠千万年。我所做的，是用3D光影算法让原纹在全球豪宅无语缝对齐。”',
      en: '"Marbles sleep in cliffs for eons. My passion is reviving their continuous grain in modern estates."'
    },
    specs: [
      { zh: '拼缝水刀微米公差：≤ 0.15mm', en: 'Waterjet Joints Margin: ≤ 0.15mm' },
      { zh: '红外纹理光谱还原率：99.8%', en: 'Spectral Vein Match: 99.8%' },
      { zh: '主理矿种：宝格丽紫 / 皇家翡翠', en: 'Minerals: Calacatta Viola / Emerald' }
    ]
  },
  {
    id: 'DEPUTY-03',
    name: { zh: '张绍坤 Marcus', en: 'Marcus Zhang' },
    role: { zh: '极地抗压系统窗与防砸玻璃设计师', en: 'Principal Fenestration Designer' },
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    badges: ['美标AAMA/欧标EN极性验证', '1.52MM超大厚度高刚性SGP胶片智检'],
    signatureQuote: {
      zh: '“幕墙是豪宅与风暴的第一次握手。在12级飓风前，它必须坚不可摧。”',
      en: '"The envelope is the skin of luxury. Against coastal storms, it must stand as an impermeable shield."'
    },
    specs: [
      { zh: '系统压抗风抗冲击极限：9.0 kPa', en: 'Windload Stress: 9.0 kPa Extreme' },
      { zh: '气密声学阻噪系数：≥ 42 dB', en: 'Acoustic Barrier Rate: ≥ 42 dB' },
      { zh: '全胶防紫外线反射：99.9%', en: 'SGP UV Shielding: 99.9%' }
    ]
  },
  {
    id: 'DEPUTY-04',
    name: { zh: '吴芊芊 Sophie', en: 'Sophie Wu' },
    role: { zh: '整木全案美学工艺与饰物高级顾问', en: 'Senior Carpentry Consultant' },
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    badges: ['意式经典整木深化工艺质验', '防潮抗热缩高精度平衡水准'],
    signatureQuote: {
      zh: '“木作在吸收阳光后，具有独特的体温。我们将物理含水率锁死，让优雅不惧海运考验。”',
      en: '"Timber radiates biological warmth. We protect it against extreme moisture so beauty endures eons."'
    },
    specs: [
      { zh: '木质甲醛平均释放量：≤ 0.02 mg/m³', en: 'Emission Index: ≤ 0.02 mg/m³' },
      { zh: '原装外筒阻燃等级：Class A级', en: 'Fire Retardancy: Class A Standard' },
      { zh: '树脂平衡抗潮湿抽检率：100%', en: 'Moisture Balance QA: 100%' }
    ]
  }
];

const ROADMAP_IMAGES = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', // Phase 1: Blueprints / Designs
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', // Phase 2: Engineering Drawings
  'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80', // Phase 3: QA & Production inspection 
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80', // Phase 4: Logistics loading
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'  // Phase 5: Installation layout support
];

export default function AboutView({ lang }: AboutViewProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Brand Stats representing premium architectural indices
  const stats = useMemo(() => [
    {
      val: '10,000㎡',
      label: { zh: '数字化集货配载中心', en: 'Digital Consolidation Hub' },
      detail: { zh: '自营重型木箱重力底托加固，支持多工厂大拼箱秒级通关。', en: 'Heavy-duty seismic reinforcement. Multi-factory export packing.' }
    },
    {
      val: '100%',
      label: { zh: '出厂实物预拼装抽检率', en: 'QA Pre-Assembly Rate' },
      detail: { zh: '现场实机拼接拍照，确认拼合切缘、木饰面对纹间隙无差错。', en: 'Full-scale physical trial fit checking before seaport clearance.' }
    },
    {
      val: 'U-Value ≤ 1.1',
      label: { zh: '幕墙传热比气密系数', en: 'Thermal Glazing Coefficient' },
      detail: { zh: '全系美标/欧标三层中空Low-E安全夹胶防砸防爆标准。', en: 'Tri-pane vacuum insulated glass standard against desert/ocean load.' }
    },
    {
      val: '0% Delay',
      label: { zh: '通关核对无暇单证率', en: 'Zero Error Port Clearance' },
      detail: { zh: 'Sandy 督查，海关一次免查通过率傲视同侪。', en: 'Zero documents mismatch under expert Sandy’s dispatch dockets.' }
    }
  ], []);

  // Elite Corporate Core Values
  const coreValues = useMemo(() => [
    {
      icon: ShieldCheck,
      title: { zh: '地缘气候与高耐候材质定向调谐', en: 'Geomapping Weatherproof Adaptation' },
      desc: { 
        zh: '不局限于大宗集货。我们深度对齐加勒比暴风、中东55℃强紫外线与加拿大雪级。校准壁厚、氧化膜微米厚度，确保整体材质极致耐候。',
        en: 'Overriding simple buying. We calibrate structural joints, aluminum profiles, SGP-interlayers and water-repellent woodwork for any sub-zero, cyclone-ridden, or ultra-UV terrain.'
      }
    },
    {
      icon: Users,
      title: { zh: '驻厂设计师 1:1 精确 CAD 对口深化', en: 'Elite 1:1 Technical Blueprint Translation' },
      desc: {
        zh: '驻厂设计师直接对口海外建筑设计院原始图样，还原干挂受力点及拼缝。无缝输出双语节点详图，实现“海外图纸 · 佛山精准造”。',
        en: 'Our engineering office works directly on raw layout models to construct clean Shop Drawings (MTO), aligning marble seams and load coordinates to remove custom delivery mismatches.'
      }
    }
  ], []);

  // Interactive Carousel Scroll
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const cardWidth = clientWidth > 768 ? clientWidth / 3 : clientWidth * 0.85;
      const amount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({
        left: amount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#051524] select-none font-sans pb-24 relative overflow-hidden">
      
      {/* Visual Design Elements: Subtle Grid Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#013E75_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>

      {/* ==========================================================
          HEADER SECTION: BRAND DOSSIER ENTITLED "ABOUT US"
          - Coordinates adjusted perfectly with the left timeline thread plane
          ========================================================== */}
      <section className="w-full border-b border-[#013E75]/10 py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#F6E4C8]/50 to-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 lg:pr-16 relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#013E75]/20 bg-white/80 px-4 py-1.5 shadow-xs">
            <Globe className="w-4 h-4 text-[#F5B70A] animate-spin" style={{ animationDuration: '40s' }} />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#013E75]/85">
              {lang === 'zh' ? '关于我们 · 领衔服务全栈集成与跨国交付' : 'ABOUT US · PREMIUM SERVICE INTEGRATION & GLOBAL LOGISTICS'}
            </span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#013E75] leading-[1.12] tracking-tight">
            {lang === 'zh' ? (
              <>
                <span>大国匠作，无界必达。</span>
                <span className="block font-serif font-normal italic text-[#F5B70A] mt-2">
                  您值得托付的海运大宗整屋高定集成枢纽。
                </span>
              </>
            ) : (
              <span>Your Sovereign High-End Residential Construction & Global Fulfillment Hub.</span>
            )}
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base text-[#465768] font-light leading-relaxed max-w-3xl text-justify">
            {lang === 'zh' ? (
              '佛山南海悦捷，作为全球高端住宅的专属主材集成服务商，打通了空间美学、全案定制与跨洋重型物流的断层。我们依托雄厚的本土制造势能，以极其严苛的材质调谐、驻厂深化与安全合规质检，让每一块奢石、每一樘门窗都在万海之外无差错还原，铸就极致温润人居。'
            ) : (
              'Foshan Nanhai Yuejie is a premier spatial realization partner. Seamlessly blending aesthetic blueprint precision with heavy industrial production and flawless port customs operations, we resolve global shipment complexities to make elite housing concepts stand timeless.'
            )}
          </p>

          <div className="w-24 h-[3px] bg-[#F5B70A]"></div>
        </div>
      </section>

      {/* ====================================================================================================
          CORE CONTINUITY VECTOR: THE FADED TIMELINE THREAD RUNNING PRECISSLEY ON THE LEFT GUTTER
          ==================================================================================================== */}
      <div className="max-w-[1400px] mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 lg:pr-16 relative">
        
        {/* Faded Left Margin Style Connection Line (THE SPATIAL CONTINUITY thread) */}
        <div className="absolute left-6 sm:left-8 md:left-10 lg:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#013E75]/5 via-[#F5B70A]/20 to-[#013E75]/5 pointer-events-none z-0">
          {/* Extremely subtle, dimmed silver dot indicator */}
          <div className="sticky top-1/3 w-2.5 h-2.5 -left-[4.5px] bg-[#013E75]/15 border border-white/50 rounded-full"></div>
        </div>

        {/* =========================================================
            BLOCK 1: 品牌溯源 (THE BRAND PROFILE & TECHNICAL STATS GRID)
            ========================================================= */}
        <div id="brand-heritage" className="relative z-10 py-16 lg:py-24 space-y-16">
          
          {/* Section Marker with Connective Node */}
          <div className="flex items-center gap-4 relative">
            {/* Visual connector overlay onto the left vertical line */}
            <div className="absolute left-[-30px] sm:left-[38px] md:left-[46px] lg:left-[-54px] top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#FAF8F5] border border-stone-300 flex items-center justify-center z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B70A] opacity-60"></span>
            </div>

            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-none border border-[#013E75]/10 bg-white flex items-center justify-center text-[#013E75] relative shadow-xs shrink-0">
              <span className="absolute inset-0 border border-[#F5B70A]/10 scale-90"></span>
              <Building2 className="w-5 h-5 text-[#013E75]" />
            </div>
            
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold block">// CHAPTER 01 // HERITAGE</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#013E75] uppercase">
                {lang === 'zh' ? '品牌溯源与智造实力' : 'Brand Heritage & Manufacture Scale'}
              </h2>
            </div>
          </div>

          {/* Asymmetrical Profile Cover Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium Narrative */}
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6">
              <div className="space-y-4">
                <span className="font-serif text-lg italic text-[#F5B70A] font-semibold block">
                  {lang === 'zh' ? '大湾区顶级智产轴心的工艺对账' : 'Foshan’s Master Craftsman Legacy Meets Global Scale'}
                </span>
                <p className="text-sm text-[#465768] leading-relaxed text-justify font-light">
                  {lang === 'zh' ? (
                    '在跨洋精装交付中，最让人头疼的并非草图构想，而是万里运距下的公差变形与材质失效。由于海外现场改制代价高昂，悦捷重构了定制链路──全品类原装大板、抗海岛暴风幕墙、高定整木墙板，全部在佛山高端制造基地精密深化生产。出厂前硬性落实实物全拼合拍片，依托1:1 shopdrawings 图集原件检验，确保护送达现场那一刻即是极简合缝的国匠级大成。'
                  ) : (
                    'In maritime high-end architecture, dimensional drift is catastrophic. Yuejie mitigates risks: every single raw stone bookmatch, hurricane-grade window curtain, or massive solid timber woodwork is processed under Foshan\'s master manufacturing guidelines. We dry-lay and trial-assemble components to secure a literal 100% gapless tolerance before heavy cargo loading.'
                  )}
                </p>
              </div>

              {/* Core Values Staggered Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="bg-white border border-stone-200/80 p-6 relative hover:shadow-md transition-shadow group">
                    <div className="absolute top-0 left-0 w-12 h-[2.5px] bg-[#013E75] group-hover:bg-[#F5B70A] transition-colors"></div>
                    <div className="flex items-center gap-3 mb-3">
                      <val.icon className="w-5 h-5 text-[#F5B70A]" />
                      <h4 className="font-serif text-sm font-bold text-[#013E75]">{val.title[lang]}</h4>
                    </div>
                    <p className="text-xs text-[#5C6E7F] text-justify leading-relaxed font-light">{val.desc[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: High Contrast Graphic Frame & Embedded Quality Stats */}
            <div className="lg:col-span-5 flex-1 w-full">
              <div className="border border-stone-200 p-3 bg-white shadow-xl relative group">
                <div className="aspect-square w-full bg-stone-900 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" 
                    alt="Yuejie Production Quality Inspection Center" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 bg-[#F5B70A] text-[#051524] text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 border border-white/10 shadow-md">
                    QA-STAGE CERTIFIED
                  </span>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] font-mono text-[#F5B70A] tracking-wider uppercase">// MANUFACTURING HUB</span>
                    <h4 className="font-serif text-base sm:text-lg font-bold">大湾区大宗高定集成系统检验中心</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Premium Industrial Stats Grid Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {stats.map((st, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-stone-200 p-6 shadow-xs flex flex-col justify-between group hover:border-[#013E75] hover:shadow-md transition-all relative"
              >
                <div className="absolute top-0 right-0 w-3 h-3 bg-stone-100 group-hover:bg-[#F5B70A] transition-colors border-l border-b border-stone-200"></div>
                <div className="space-y-2">
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#013E75] tracking-tight">{st.val}</div>
                  <div className="font-serif text-xs font-bold text-[#051524] tracking-wide">{st.label[lang]}</div>
                  <p className="text-xs text-[#8A96A3] font-light leading-relaxed pt-1 text-justify">{st.detail[lang]}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================
            BLOCK 2: 全球项目专家团队 (ELITE SERVICE TEAM CAROUSEL)
            - Redesigned to be highly image-centric with text-overlays
            ========================================================= */}
        <div id="service-team" className="relative z-10 py-20 lg:py-28 space-y-12">
          
          {/* Section Marker with Connective Node */}
          <div className="flex items-center gap-4 relative">
            <div className="absolute left-[-30px] sm:left-[-38px] md:left-[-46px] lg:left-[-54px] top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#FAF8F5] border border-stone-300 flex items-center justify-center z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B70A] opacity-60"></span>
            </div>

            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-none border border-[#013E75]/10 bg-white flex items-center justify-center text-[#013E75] relative shadow-xs shrink-0">
              <span className="absolute inset-0 border border-[#F5B70A]/10 scale-90"></span>
              <Users className="w-5 h-5 text-[#013E75]" />
            </div>
            
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold block">// CHAPTER 02 // MASTER CLASS DIRECTORY</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#013E75] uppercase">
                {lang === 'zh' ? '悦捷服务专家天团' : 'The Elite Specialist Directory'}
              </h2>
            </div>
          </div>

          {/* Introductory Paragraph with Integrated Navigations */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2">
            <p className="text-xs sm:text-sm text-[#465768] font-light leading-relaxed max-w-2xl text-justify">
              {lang === 'zh' ? (
                '从接收初始图纸，直至重力配重、大板纹理连续排布及最后的拼装出海，每一道核心关卡都由专项领域的资深专家亲自把关。卓越的人选，筑就极致无差错的大宗远洋全案交付。'
              ) : (
                'From physical cargo weight balancing to 3D continuous stone vein mapping, Yuejie appoints individual domain masters to command critical pipeline milestones. Precision starts with personnel.'
              )}
            </p>

            {/* Premium Sliding Navigation Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 border border-[#013E75]/20 bg-white/80 flex items-center justify-center text-[#013E75] hover:bg-[#F5B70A] hover:text-[#013E75] hover:border-transparent transition-all shadow-sm group duration-300"
                aria-label="Previous service specialist"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 border border-[#013E75]/20 bg-white/80 flex items-center justify-center text-[#013E75] hover:bg-[#F5B70A] hover:text-[#013E75] hover:border-transparent transition-all shadow-sm group duration-300"
                aria-label="Next service specialist"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Card Container - Now extremely image-centric, sleek aspect cards */}
          <div 
            ref={carouselRef}
            className="w-full flex gap-6 overflow-x-auto select-none snap-x snap-mandatory scroll-smooth pb-6 scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin' }}
          >
            {STAFF_MEMBERS.map((staff) => (
              <div 
                key={staff.id}
                className="min-w-[85%] md:min-w-[46%] lg:min-w-[32%] h-[460px] sm:h-[510px] bg-stone-900 border border-stone-800/10 overflow-hidden hover:shadow-2xl transition-all duration-500 snap-start relative group"
              >
                
                {/* 1. Full Image Background Coverage */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={staff.avatar} 
                    alt={staff.name[lang]} 
                    className="w-full h-full object-cover grayscale opacity-65 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Prussian Blue Gradient overlay mirroring deep oceanic atmosphere */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051524] via-[#051524]/40 to-transparent"></div>
                </div>

                {/* 2. Low-Profile ID Stamp */}
                <span className="absolute top-4 right-4 text-[9px] font-mono text-white/50 tracking-[0.12em] border border-white/20 px-2 py-0.5 bg-black/40 z-10">
                  {staff.id}
                </span>

                {/* 3. Elegantly Layered Minimalist Details inside visual card frame */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end h-5/6 space-y-4 text-white z-10 transition-transform duration-300">
                  
                  {/* Subtle, beautiful floating quote block (with golden trace line) */}
                  <p className="font-serif text-xs sm:text-sm italic text-stone-200/95 leading-relaxed text-justify border-l border-[#F5B70A] pl-3 py-1">
                    {staff.signatureQuote[lang]}
                  </p>

                  <div className="space-y-0.5 pt-2">
                    <span className="text-[9px] font-mono text-[#F5B70A] tracking-[0.18em] uppercase font-bold block">
                      {staff.role[lang]}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-light tracking-wide text-white">
                      {staff.name[lang]}
                    </h3>
                  </div>

                  {/* Quantitative verified KPI metrics presented in sleek columns */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-justify">
                    {staff.specs.map((spec, sIdx) => {
                      const specText = spec[lang];
                      const colonIdx = specText.indexOf('：') !== -1 ? specText.indexOf('：') : specText.indexOf(':');
                      const kpiLabel = colonIdx !== -1 ? specText.substring(0, colonIdx) : specText;
                      const kpiVal = colonIdx !== -1 ? specText.substring(colonIdx + 1) : '';
                      return (
                        <div key={sIdx} className="flex flex-col min-w-[100px]">
                          <span className="text-[8px] font-mono uppercase tracking-wider text-stone-400">{kpiLabel}</span>
                          <span className="text-[11px] font-mono font-bold text-[#F5B70A]">{kpiVal}</span>
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ===================================================
            BLOCK 3: 服务流程 (THE 5-STEP CORE FULFILLMENT AXIS)
            - Reconfigured to be immensely visual of editorial horizontal split grid
            =================================================== */}
        <div id="service-roadmap" className="relative z-10 py-20 lg:py-28 space-y-16">
          
          {/* Section Marker with Connective Node */}
          <div className="flex items-center gap-4 relative">
            <div className="absolute left-[-30px] sm:left-[-38px] md:left-[-46px] lg:left-[-54px] top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#FAF8F5] border border-stone-300 flex items-center justify-center z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#013E75]"></span>
            </div>

            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-none border border-[#013E75]/10 bg-white flex items-center justify-center text-[#013E75] relative shadow-xs shrink-0">
              <span className="absolute inset-0 border border-[#F5B70A]/10 scale-90"></span>
              <Workflow className="w-5 h-5 text-[#013E75]" />
            </div>
            
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold block">// CHAPTER 03 // SEQUENCE</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#013E75] uppercase">
                {lang === 'zh' ? '出海一站式履约闭环' : 'Integrated Global Fulfillment Axis'}
              </h2>
            </div>
          </div>

          <div className="max-w-3xl text-justify pb-2">
            <p className="text-xs sm:text-sm text-[#465768] font-light leading-relaxed">
              {lang === 'zh' ? (
                '从初始规划对接，至跨洋整箱载运、申报放行、以及最后远程多视角音视频安装指导，我们将重型建材出海的冗长非标工况，固化为五大物理卡点指标，助您无忧筑造心中杰作。'
              ) : (
                'From original engineering alignment to safe container payload balance, customs declaration, and real-time remote physical assembly direction, Yuejie establishes five absolute check points.'
              )}
            </p>
          </div>

          {/* Connected timeline cards - Structured with gorgeous illustrative process frames */}
          <div className="space-y-10 relative">
            {ROADMAP_STEPS.map((step, idx) => {
              const stepIconNumber = `0${idx + 1}`;
              
              return (
                <div 
                  key={idx}
                  id={`about-roadmap-node-${idx}`}
                  className="bg-white border border-stone-250/60 hover:border-[#013E75] shadow-xs hover:shadow-xl relative group transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-2 bg-[#F5B70A] z-10"></div>
                  
                  {/* Sleek Connective Pin snapping onto the left timeline */}
                  <div className="absolute left-[-29px] sm:left-[-37px] md:left-[-45px] lg:left-[-53px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border border-stone-300 flex items-center justify-center z-30 group-hover:border-[#F5B70A] group-hover:scale-110 transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#013E75]/25 group-hover:bg-[#F5B70A] transition-colors"></div>
                  </div>

                  {/* Asymmetrical 2-Column Split: Image 50% vs Text 50% */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[190px] items-stretch">
                    
                    {/* Left Panel: Dominant Illustrative Frame (以图像为主) */}
                    <div className="lg:col-span-5 h-[160px] sm:h-[180px] lg:h-auto overflow-hidden relative bg-stone-900 border-b lg:border-b-0 lg:border-r border-stone-100 shrink-0">
                      <img 
                        src={ROADMAP_IMAGES[idx]} 
                        alt={step.title[lang]} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      {/* Atmospheric gradient blocking */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 lg:to-transparent"></div>
                      
                      {/* Horizontal progress stamp */}
                      <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-white/95 backdrop-blur-xs px-3 py-1 shadow-sm border border-[#013E75]/10">
                        <span className="font-mono text-base font-black text-[#013E75]">{stepIconNumber}</span>
                        <div className="h-4 w-[1px] bg-[#013E75]/10"></div>
                        <span className="text-[9px] font-mono font-bold text-[#F5B70A] tracking-wider uppercase">{step.phase}</span>
                      </div>
                    </div>

                    {/* Right Panel: Supplementary Analytical Description */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-3">
                      <div className="space-y-0.5">
                        <span className="text-[8px] font-mono text-stone-400 tracking-widest block uppercase">// CERTIFIED BLUEPRINT CRITERIA</span>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#013E75] leading-snug">
                          {step.title[lang]}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#465768] font-light leading-relaxed text-justify">
                        {step.description[lang]}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Continuous Design Detail Quote Block in middle */}
          <div className="bg-[#FAF8F5]/80 border border-dashed border-stone-350 p-8 text-center max-w-4xl mx-auto space-y-4 shadow-xs relative">
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#F5B70A] uppercase font-bold flex items-center justify-center gap-1.5 animate-pulse">
              <Clock className="w-4 h-4 text-[#F5B70A]" />
              {lang === 'zh' ? '全链路合规通配审计：24小时连续装船保障' : '24-HOUR CONSTANT CARGO FITTING & LOGISTICS INSPECTION AUDIT'}
            </span>
            <p className="font-serif text-[#013E75] text-sm sm:text-base italic leading-relaxed max-w-2xl mx-auto">
              {lang === 'zh' ? (
                '“从佛山南海大本营集装，直至您的海外私属庄园港清。每一个箱柜、每一道拼块都记录在3D光谱对账图集。用千分之二的严丝合缝，确保极致高定的精准合围。”'
              ) : (
                '“From Foshan manufacturing depot directly to your waterfront boundary. Every single consignment, joinery seam, and profile thickness is archived inside spectral digital reports to warrant seamless structural assembly.”'
              )}
            </p>
            <div className="text-[10px] font-mono text-[#5C6E7F] uppercase tracking-widest font-bold">
              -- DEPUTED BY LOGISTICS EXPERT SANDY & YUEJIE GLOBAL DEPLOYMENT BRANCH
            </div>
          </div>

        </div>

        {/* ========================================================
            BLOCK 4: 联系我们 (THE SECURED REGISTRATION & CONTACT FORM)
            - Seamlessly connected via final timeline termination node
            ======================================================== */}
        <div id="service-contact" className="relative z-10 py-20 lg:py-28">
          
          {/* Section Marker with Connective Node */}
          <div className="flex items-center gap-4 relative mb-16">
            <div className="absolute left-[-30px] sm:left-[-38px] md:left-[-46px] lg:left-[-54px] top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#FAF8F5] border border-stone-300 flex items-center justify-center z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#013E75]"></span>
            </div>

            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-none border border-[#013E75]/10 bg-white flex items-center justify-center text-[#013E75] relative shadow-xs shrink-0">
              <span className="absolute inset-0 border border-[#F5B70A]/10 scale-90"></span>
              <Anchor className="w-5 h-5 text-[#013E75]" />
            </div>
            
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold block">// CHAPTER 04 // PROJECT REGISTRY</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#013E75] uppercase">
                {lang === 'zh' ? '项目精细申报与联络方式' : 'Project Registry & Contact Center'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Heavy Corporate Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white border border-stone-200/80 p-8 lg:p-10 shadow-xs relative">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#013E75]"></div>
              
              <div className="space-y-6">
                <span className="text-xs font-mono tracking-widest text-[#F5B70A] uppercase font-bold flex items-center gap-1.5 border-b border-stone-100 pb-4">
                  <Activity className="w-4 h-4 text-[#F5B70A]" />
                  {lang === 'zh' ? '海运大宗高定一站式立项申报' : 'SECURE RECOGNIZED PIPELINE SUBMISSION'}
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#013E75] leading-snug">
                  {CONTACT_CONTENT.title[lang]}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#465768] leading-relaxed text-justify font-light">
                  {CONTACT_CONTENT.description[lang]}
                </p>

                {/* Direct info items connected to matching visual symbols */}
                <div className="space-y-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-justify">
                  
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                    <div className="h-2.5 w-2.5 bg-[#F5B70A] shrink-0"></div>
                    <span className="text-[#051524] font-mono font-bold">
                      Email: <a href={`mailto:${CONTACT_CONTENT.infoEmail}`} className="hover:text-[#013E75] hover:underline font-mono">{CONTACT_CONTENT.infoEmail}</a>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-2.5 w-2.5 bg-[#F5B70A] shrink-0 mt-1"></div>
                    <span className="text-[#465768] font-light leading-snug">
                      {CONTACT_CONTENT.infoAddr[lang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 bg-[#F5B70A] shrink-0"></div>
                    <span className="text-[#465768] font-light font-mono">
                      {lang === 'zh' ? '大宗特约协调热线: +86 (757) 8556-xxxx' : 'Key Direct Hotline: +86 (757) 8556-xxxx'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 bg-[#F5B70A] shrink-0"></div>
                    <span className="text-[#4AD694] font-semibold flex items-center gap-1.5 bg-[#4AD694]/5 px-2 py-0.5 rounded-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4AD694]"></span>
                      {lang === 'zh' ? '通关及货力配载统筹主管: 陈雪莉 Sandy' : 'Logistics Supervisor In-Charge: Sandy Chen'}
                    </span>
                  </div>

                </div>
              </div>

              {/* Verified Badge seal */}
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-[10px] font-mono text-[#8A96A3]">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{lang === 'zh' ? '中南海外直通供应链在线' : 'Foshan-Global Direct Connected'}</span>
                </div>
                <span>FOSHAN SECURED PIPELINE 2026</span>
              </div>

            </div>

            {/* Right Column: Inquiry Input Form Container */}
            <InquiryForm lang={lang} />

          </div>

        </div>

      </div>

    </div>
  );
}

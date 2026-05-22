/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { 
  FileText, 
  Sparkles, 
  Layers, 
  Ruler, 
  ShieldCheck, 
  Wind, 
  Compass, 
  Anchor, 
  ArrowUpRight,
  Boxes,
  Activity,
  CheckCircle2,
  Lock,
  ChevronRight,
  FolderLock
} from 'lucide-react';

interface SegmentsViewProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export default function SegmentsView({ lang, onOpenConsultation }: SegmentsViewProps) {
  // --- SEPARATED HOVER CARDS TRACKERS FOR PRECISION ---
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredVertical, setHoveredVertical] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all-in-one' | 'verticals'>('all-in-one');

  // Business Divisions Data with advanced specification metrics used for mouse hovers
  const services = [
    {
      id: 1,
      num: '01',
      tag: { zh: '固装定制', en: 'MILLWORK' },
      title: { zh: '固装定制木作空间', en: 'Bespoke Interior Woodwork' },
      intro: {
        zh: '十米挑高连续全对称排板，手工“对花”，攻坚热带海岛极端温湿度。',
        en: 'Continuous 10m high-altitude natural panels with symmetrical seamless grain alignment.'
      },
      specs: [
        { label: { zh: '基材等级', en: 'Core Category' }, val: 'E0 Grade-A Marine Multiplying' },
        { label: { zh: '拼接公差', en: 'Tolerance' }, val: '≤ 0.3mm High Precision' },
        { label: { zh: '饰面板式', en: 'Veneer Match' }, val: 'Symmetrical Bookmatched' }
      ],
      advancedSpecs: {
        zh: [
          '★ 3D 激光红外毫米级全向现场复刻测算',
          '★ 高纯度除湿烘干抗扭变开裂护墙核心工艺',
          '★ 24 小时内柔性出具整宅实木定制图及细部节点图'
        ],
        en: [
          '★ 3D Laser infrared millimeter-level site replication',
          '★ High-purity kiln-dehumidified anti-twisting woodwork core',
          '★ Complete carpentry shop-drawings generated in 24 hours'
        ]
      },
      photo: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      badge: { zh: '手工拼贴', en: 'Handcrafted' }
    },
    {
      id: 2,
      num: '02',
      tag: { zh: '隔音幕墙', en: 'SYSTEM GLAZING' },
      title: { zh: '重型自适应隔音中空门窗', en: 'Heavy-Spec Hurricane Proof Facades' },
      intro: {
        zh: '6063-T6 工业航空超厚断桥，杜邦 SGP 重型防腐夹胶，抗17级超强台风。',
        en: 'Structural 6063-T6 aluminum extrusion with 1.52mm DuPont SGP dynamic interlayers.'
      },
      specs: [
        { label: { zh: '抗风剪切', en: 'Wind Defense' }, val: '9.0 kPa Extreme Load' },
        { label: { zh: '透能传热值', en: 'U-Value Std' }, val: '≤ 1.2 W/㎡·K Certified' },
        { label: { zh: '多腔消音', en: 'Acoustic Rate' }, val: '-45 dB Noise Silencing' }
      ],
      advancedSpecs: {
        zh: [
          '★ 顺畅通过美标 ASTM/AAMA 极端抗气压抗风暴双重验证',
          '★ 顶配 Low-E 钢化双中空充氩气自阻热声学障壁阻绝',
          '★ 佛山最强数数控机械轴零焊接缝四角严防密封成型'
        ],
        en: [
          '★ Passed rigorous ASTM/AAMA air-infiltration & storm-loading tests',
          '★ Argon-filled Low-E acoustic double-glazing thermal breaks',
          '★ Automated robotic 45-degree seamless weld structural rigidity'
        ]
      },
      photo: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      badge: { zh: '气密一级', en: 'AAMA Certified' }
    },
    {
      id: 3,
      num: '03',
      tag: { zh: '奢石拼花', en: 'NATURAL STONE' },
      title: { zh: '奢石岩板对纹定制中心', en: 'Bespoke Luxury Marble Slabs' },
      intro: {
        zh: '直采意大利卡拉卡塔，3D光谱相机像素及建模对纹，严控公差0.2mm。',
        en: 'Direct Italian quarry blocks mapped digitally to perform laser-cut symmetries.'
      },
      specs: [
        { label: { zh: '层硬测定', en: 'Mohs Grade' }, val: 'Mohs Scratch-Proof 7.2' },
        { label: { zh: '疏水阻污', en: 'Penetration' }, val: '≤ 0.05% Impervious Seal' },
        { label: { zh: '切缝公差', en: 'Joint Margin' }, val: '± 0.2mm Waterjet Sized' }
      ],
      advancedSpecs: {
        zh: [
          '★ 进口意大利高精五轴超高压水刀柔性拼花切合技术',
          '★ 德国高渗无气痕级专用石材密封树脂防渗处理',
          '★ 光谱智能对纹相机动态模拟实景拼接，杜绝肉眼纹理断档'
        ],
        en: [
          '★ Italian 5-axis ultra-pressure precise stone waterjet system',
          '★ German vacuum-grade non-porous anti-soil stone resin treatment',
          '★ Color-spectrum dynamic matching camera scans for continuous veins'
        ]
      },
      photo: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      badge: { zh: '光谱对花', en: 'Slab CAD Match' }
    },
    {
      id: 4,
      num: '04',
      tag: { zh: '拼柜通关', en: 'BULK LOGISTICS' },
      title: { zh: '多厂联运集运与Sandy清关', en: 'Consolidation & Sandy Customs' },
      intro: {
        zh: '10,000㎡ 中控集集分拨站，Sandy 团队核审全单，彻底规避滞码查验。',
        en: 'Moisture-controlled cargo stacking overseen by Sandy for airtight global clearances.'
      },
      specs: [
        { label: { zh: '集备通关', en: 'Seaport Cleared' }, val: '99.8% Express Route' },
        { label: { zh: '专属保障', en: 'Expert Lead' }, val: 'Sandy Export Team double audit' },
        { label: { zh: '包装抗暴', en: 'Structure' }, val: 'Anti-Vibration Timber Crates' }
      ],
      advancedSpecs: {
        zh: [
          '★ Sandy 总监独立核查两层海运 HS 商品编码合规分类',
          '★ 佛山集港自建模流体力学重力防挤压物理重心预平衡',
          '★ 清关率优于 99.8% 绿色通道秒过极速放行口岸保障'
        ],
        en: [
          '★ Sandy supervised dual billing dockets for immaculate HS matching',
          '★ Dynamic heavy stowage gravity balance analysis to shield fragile cargo',
          '★ Premium maritime quarantine pass rate exceeding 99.8%'
        ]
      },
      photo: 'https://images.unsplash.com/photo-1620067687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      badge: { zh: 'Sandy 领衔', en: 'Sandy Verified' }
    }
  ];

  // One stop highlights cards with on-hover deep expand bullet points
  const integrationSteps = [
    {
      step: 'Step 01',
      title: { zh: '1:1 方案对敲与图纸分单', en: '1:1 Blueprint Verification & Splicing MTO' },
      desc: {
        zh: '海外设计师给出的图样不合中式厂配算力？悦捷首创CAD全图拆单对线，将全套建筑图微缩深化，保证物理公差精密落地。',
        en: 'We convert non-standard architectural designs into precise manufacturing blueprints (MTOs) to eliminate misalignment before cutting.'
      },
      bullets: {
        zh: [
          '图纸双向深化：CAD/BIM多图层碰撞分析',
          '精密公差保障：厂备精磨误差控制在≤0.3mm',
          '无间隙多厂对插：提前打好物理榫眼与五金定位'
        ],
        en: [
          'Dual detailed review: deep CAD/BIM interference scans',
          'Physical clearance standard: precision limits ≤0.3mm',
          'Plug-and-play fittings: pre-drilled joint-pins and anchors'
        ]
      }
    },
    {
      step: 'Step 02',
      title: { zh: '高定全系整色与材料对板', en: 'Global Tone Harmonization & Finishes' },
      desc: {
        zh: '木作饰面、门窗断桥、奢石拼缝等拼成整宅后色差太大？我们将各大工厂首样集中汇集，进行一站式联合色域锁死。',
        en: 'We gather master finishes from different specialized workshops to block tone-shifts, keeping materials synchronized globally.'
      },
      bullets: {
        zh: [
          '光谱联合标校：Delta E色分相差硬锁在1.0以下',
          '全建材色域适配：木饰、大理石与窗框断桥三合一配色',
          '出厂对光验证：多照度高显指还原海岛现场实况光影'
        ],
        en: [
          'Color match strict thresholds: Delta E offset <1.0 guaranteed',
          'Cross-product shade lock: unifying timber tone, stone & aluminum',
          'Multi-lux custom test: simulator matching targeted site lighting'
        ]
      }
    },
    {
      step: 'Step 03',
      title: { zh: '多厂全能合围集运拼装', en: 'Multi-Factory Structural Consolidation' },
      desc: {
        zh: '拒绝毫无物理防护的散装拼货。在自备的 10,000㎡ 广州佛山基地，科学配平码重比及抽湿气压，防护重构，杜绝中途碎碎划死。',
        en: 'Bypass messy freight forwarding. Our 10,000㎡ central depot structures internal shipping weights, preventing compression damage.'
      },
      bullets: {
        zh: [
          '重型免熏蒸包装：超厚夹板防冲撞多重抗裂钢带缠绕',
          '真空防霉除湿：密层包裹保证大洋海运30天微干环境',
          '现代化数字分配：万平中枢集散堆场，重力科学防压堆码'
        ],
        en: [
          'Heavy export crating: robust plywood reinforced with steel frames',
          'Desiccant climate protection: vacuum-sealed dry chamber shield',
          'Optimized container stowage: digital center-of-gravity balancing'
        ]
      }
    },
    {
      step: 'Step 04',
      title: { zh: 'Sandy 团队全单无缺合规通关', en: 'Sandy Compliance Lead Port Clearances' },
      desc: {
        zh: '通关阻力在于单证HS不符。Sandy 团队亲理装箱发票，精细对锁 FDA 植物检疫、AQIS 澳洲绿色准入，把控查验率于万分之一以下。',
        en: 'Logistics manager Sandy customizes commercial invoices to pass rigid FDA botanical rules and AQIS Australia quarantine checks safely.'
      },
      bullets: {
        zh: [
          'HS编码双重审定：完全杜绝因分类归宿偏差产生扣港代价',
          '专家报单无间穿梭：Sandy 亲自核对FDA林业准入技术合规单证',
          '跨国联包直达：通关率优于 99.8%，让重型大卡直达您海外工地'
        ],
        en: [
          'Calibrated HS catalog audits: zero wharf holdbacks risk',
          'Airtight certificates: direct FDA foliage and AQIS biosecurity clearance',
          'Seamless local dunnage: priority customs for rapid truck dispatch'
        ]
      }
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#051524] select-none font-sans pb-24">
      
      {/* 1. ARCHITECTURAL DUAL-TRACK COVER (Refined, Modern Header) */}
      <section className="w-full bg-[#FAF8F5] border-b border-[#013E75]/10 py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle decorative grid backing */}
        <div className="absolute inset-0 bg-[radial-gradient(#013E75_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 space-y-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="space-y-6 max-w-4xl">
              <div className="inline-flex items-center gap-2 border-[1.5px] border-[#013E75]/20 bg-[#FAF8F5] px-4.5 py-1.5 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#F5B70A] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#013E75]/85">
                  {lang === 'zh' ? '第三卷：悦捷一站式与多线深度定制体系' : 'Volume III: Bespoke Specialized Verticals & One-Stop Delivery'}
                </span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#013E75] leading-[1.12] tracking-tight">
                {lang === 'zh' ? (
                  <>
                    <span>四大单项专业制造巨头。</span>
                    <span className="block font-serif font-normal italic text-[#F5B70A] mt-2">
                      亦可聚合一站式全案设计发运服务。
                    </span>
                  </>
                ) : (
                  <span>Dynamic Specialized Divisions, Harmonized Under One-Stop Custom Delivery.</span>
                )}
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-[#4A5B6D] font-light leading-relaxed max-w-3xl text-justify">
                {lang === 'zh' ? (
                  '大宗高奢建材出海，绝非无序的工厂碎件拼凑。悦捷华南工厂兼备“单个生产模块的极高工艺壁垒”与“全套建材的一站式设计配对深化”双轨能力。从木饰连贯对花、钛铝抗飓风门窗，到奢石数智拼版、Sandy 专家海运报关，我们通过精密的卡片卡位式工程指标，为您消融跨国采购的地缘不确定性。'
                ) : (
                  'Elite structural design operates across complex layers. Yuejie commands world-class manufacturing divisions in custom woodwork, hurricane-spec windows, and luxury marbles, while wrapping everything under an unbroken, one-stop design-to-shipment supply workflow.'
                )}
              </p>
            </div>
          </div>

          {/* =========================================================================
              ENLARGED FLAGSHIP TOGGLE SELECTORS - MAJOR BANNER PRESENTATION
              ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-4 relative">
            
            {/* Banner button A: 一站式设计交付 */}
            <button
              onClick={() => {
                setActiveTab('all-in-one');
                // Reset hovers when switching tabs
                setHoveredStep(null);
                setHoveredVertical(null);
              }}
              className={`text-left p-6 sm:p-8 transition-all duration-500 cursor-pointer border relative overflow-hidden select-none outline-none group rounded-none ${
                activeTab === 'all-in-one'
                  ? 'bg-[#051524] text-white border-[#F5B70A] shadow-xl ring-4 ring-[#F5B70A]/10 scale-[1.01]'
                  : 'bg-white text-[#051524] border-stone-200/80 hover:border-[#013E75] hover:shadow-lg'
              }`}
            >
              {/* Active Golden Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 ${
                activeTab === 'all-in-one' ? 'bg-[#F5B70A]' : 'bg-transparent group-hover:bg-[#013E75]/40'
              }`}></div>

              {/* Decorative radial background for active status */}
              <div className={`absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none transition-opacity duration-500 ${
                activeTab === 'all-in-one' ? 'opacity-100' : 'opacity-0'
              }`}></div>

              <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                <div className={`h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center border transition-all duration-500 rounded-none ${
                  activeTab === 'all-in-one' ? 'bg-[#F5B70A] text-[#051524] border-[#F5B70A]' : 'bg-[#FAF8F5] text-[#013E75] border-stone-200'
                }`}>
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                      activeTab === 'all-in-one' ? 'text-[#F5B70A]' : 'text-[#8A96A3]'
                    }`}>
                      FLAGSHIP RECOMMENDED CORE
                    </span>
                    <span className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 text-[9px] font-mono uppercase font-bold border border-emerald-500/20">
                      {lang === 'zh' ? '一站全案' : 'INTEGRATED'}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                    {lang === 'zh' ? '一站式大师设计交付系统' : 'One-Stop Design & Supply Curation'}
                  </h3>
                  
                  <p className={`text-xs font-light leading-relaxed text-justify ${
                    activeTab === 'all-in-one' ? 'text-stoneWarm' : 'text-[#4A5B6D]'
                  }`}>
                    {lang === 'zh'
                      ? '解构海外图纸物理公差，全系色谱对敲Delta E锁死，10,000㎡自建分集中转，Sandy专家精算无瑕疵单证顺利通关。'
                      : 'Comprehensive synchronization: 1:1 shop dockets, color-swatch alignment, consolidated shipping weight balancing and airtight customs.'}
                  </p>
                </div>
              </div>
            </button>

            {/* Banner button B: 四大纵向系统门窗制造 */}
            <button
              onClick={() => {
                setActiveTab('verticals');
                // Reset hovers when switching tabs
                setHoveredStep(null);
                setHoveredVertical(null);
              }}
              className={`text-left p-6 sm:p-8 transition-all duration-500 cursor-pointer border relative overflow-hidden select-none outline-none group rounded-none ${
                activeTab === 'verticals'
                  ? 'bg-[#051524] text-white border-[#F5B70A] shadow-xl ring-4 ring-[#F5B70A]/10 scale-[1.01]'
                  : 'bg-white text-[#051524] border-stone-200/80 hover:border-[#013E75] hover:shadow-lg'
              }`}
            >
              {/* Active Golden Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 ${
                activeTab === 'verticals' ? 'bg-[#F5B70A]' : 'bg-transparent group-hover:bg-[#013E75]/40'
              }`}></div>

              {/* Decorative radial background for active status */}
              <div className={`absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none transition-opacity duration-500 ${
                activeTab === 'verticals' ? 'opacity-100' : 'opacity-0'
              }`}></div>

              <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                <div className={`h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center border transition-all duration-500 rounded-none ${
                  activeTab === 'verticals' ? 'bg-[#F5B70A] text-[#051524] border-[#F5B70A]' : 'bg-[#FAF8F5] text-[#013E75] border-stone-200'
                }`}>
                  <Boxes className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                      activeTab === 'verticals' ? 'text-[#F5B70A]' : 'text-[#8A96A3]'
                    }`}>
                      HIGH-WALL MANUFACTURING WING
                    </span>
                    <span className="bg-[#013E75]/10 text-[#013E75] dark:bg-white/10 dark:text-white px-2 py-0.5 text-[9px] font-mono uppercase font-bold border border-current">
                      {lang === 'zh' ? '制造纵向' : '4 VERTICALS'}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                    {lang === 'zh' ? '三大硬核大厂科室 + 自营海关分集港' : '4 Core Specialized Production Giants'}
                  </h3>
                  
                  <p className={`text-xs font-light leading-relaxed text-justify ${
                    activeTab === 'verticals' ? 'text-stoneWarm' : 'text-[#4A5B6D]'
                  }`}>
                    {lang === 'zh'
                      ? '对位极其严苛的手工拼贴高定木作，抗17级飓风航空德系铝框隔音大面，硬度7.2摩氏意大利高端理石及自营清关中转航运。'
                      : 'Heavy structural carpentry woodwork, custom heavy windproof curtain grids, laser-cut quarries stone design, and specialized compliance dispatching.'}
                  </p>
                </div>
              </div>
            </button>
            
          </div>

        </div>
      </section>

      {/* ================= 2. ALL-IN-ONE ONE-STOP DELIVERY SYSTEM (Elegant Cards with HOVER EXPANSIONS) ================= */}
      {activeTab === 'all-in-one' && (
        <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-12 lg:py-16 space-y-16 animate-fade-in">
          
          {/* Section banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#013E75]/10 pb-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold">
                [ ALL_IN_ONE INTEGRATED DELIVERIES ]
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#013E75]">
                {lang === 'zh' ? '一体化统合：多厂定制如何无缝拼图、无偏差落地？' : 'The One-Stop Architecture: Seamless Integration, Frictionless Flow.'}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs text-[#8A96A3] font-mono">
                COOPERATIVE INTEGRATION // SYSTEM VER. 2026
              </p>
            </div>
          </div>

          {/* Cards Grid with Dynamic Expansion Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {integrationSteps.map((item, idx) => {
              const isHovered = hoveredStep === idx;
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`bg-white border transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between relative shadow-xs rounded-none overflow-hidden ${
                    isHovered 
                      ? 'border-[#013E75] ring-2 ring-[#013E75]/10 -translate-y-2.5 shadow-xl scale-[1.03] z-20' 
                      : 'border-stone-200/80 grayscale-[30%]'
                  }`}
                  style={{ minHeight: isHovered ? '380px' : '310px' }}
                >
                  {/* Backdrop glowing accent for hovering */}
                  <div className={`absolute -right-12 -bottom-12 w-32 h-32 bg-[#F5B70A]/5 rounded-full blur-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  {/* Visual Accent Number */}
                  <div className={`absolute top-6 right-6 font-mono text-3xl font-light transition-all duration-500 ${
                    isHovered ? 'text-[#F5B70A] opacity-60 scale-110' : 'text-[#F5B70A]/20'
                  }`}>
                    {item.step}
                  </div>

                  <div className="space-y-5">
                    {/* Icon indicator */}
                    <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-500 ${
                      isHovered ? 'bg-[#013E75] border-[#013E75] text-white rotate-6 scale-110' : 'bg-[#FAF8F5] border-stone-200/80 text-[#013E75]'
                    }`}>
                      {idx === 0 && <FileText className="w-4 h-4" />}
                      {idx === 1 && <Ruler className="w-4 h-4" />}
                      {idx === 2 && <Boxes className="w-4 h-4" />}
                      {idx === 3 && <Anchor className="w-4 h-4" />}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#013E75] tracking-tight leading-snug">
                        {item.title[lang]}
                      </h3>
                      <p className="text-[12px] text-[#4A5B6D] font-light leading-relaxed text-justify">
                        {item.desc[lang]}
                      </p>
                    </div>

                    {/* MOUSE HOVER EXPAND CONTENT AREA */}
                    <div className={`overflow-hidden transition-all duration-500 ease-out flex flex-col space-y-1.5 pt-4 border-t border-dashed border-stone-200 ${
                      isHovered ? 'max-h-56 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'
                    }`}>
                      <span className="text-[9px] font-mono font-bold text-[#F5B70A] tracking-wider uppercase">
                        {lang === 'zh' ? '» 一体化特规技术保障：' : '» ADVANCED INTEGRATION AUDIT:'}
                      </span>
                      <ul className="space-y-1">
                        {item.bullets[lang].map((bul, bulIdx) => (
                          <li key={bulIdx} className="text-[11px] text-[#55697D] font-mono leading-relaxed flex items-start gap-1.5">
                            <span className="text-[#013E75] font-bold shrink-0">✓</span>
                            <span>{bul}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-stone-100 mt-6 flex items-center justify-between text-[11px] font-mono text-[#8A96A3]">
                    <span>{lang === 'zh' ? '阶段保障' : 'STAGE ASSURANCE'}</span>
                    <CheckCircle2 className={`w-4.5 h-4.5 transition-all duration-300 ${
                      isHovered ? 'text-emerald-500 scale-110 rotate-12' : 'text-stone-300'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centralized Hub banner card */}
          <div className="bg-[#051524] text-white p-8 sm:p-12 relative overflow-hidden shadow-lg border border-white/5">
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-[0.06] select-none pointer-events-none hidden lg:block bg-no-repeat bg-right bg-contain" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620067687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80')` }}></div>
            <div className="absolute top-0 right-0 w-24 h-[3px] bg-[#F5B70A]"></div>
            
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5B70A] tracking-wider font-bold">
                <Activity className="w-4.5 h-4.5 text-[#F5B70A] animate-pulse" />
                <span>[ SOUTH CHINA CONSOLIDATED DIGITAL TERMINAL ]</span>
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-normal">
                {lang === 'zh' ? (
                  '为什么海外业主与总机工务一律首选悦捷整装服务？'
                ) : (
                  'Why International Architects Standardize Under Yuejie Shipping?'
                )}
              </h3>
              
              <p className="text-xs sm:text-sm text-stoneWarm leading-relaxed font-light text-justify">
                {lang === 'zh' ? (
                  '因为建材出海，任何工厂的“小微瑕疵”出国后就会变成“不可承受的返工返砂费用”。我们将分散在南海、佛山的顶级定制窗口、高精阻燃木作线与奢石切割场统合。由统一深化图核审、全系列整装色校、物理拼柜堆叠与 Sandy 报单保障，彻底杜绝单品拼大宗的多缝撕裂割裂。'
                ) : (
                  'Because in transnational shipping, minor factory misalignments multiply into catastrophic site remodel expenses. Our centralized terminal brings custom items under standard structural rules—controlling texture scales, locking color swatches, balancing weights, and checking trade dockets beforehand.'
                )}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono">
                <div className="bg-[#0B1E30] px-4.5 py-2.5 border border-white/5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>{lang === 'zh' ? '100% 实木抗扭加工' : '100% Anti-Tension Core'}</span>
                </div>
                <div className="bg-[#0B1E30] px-4.5 py-2.5 border border-white/5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>{lang === 'zh' ? '统一整宅色谱配对' : 'Omni Color Matching'}</span>
                </div>
                <div className="bg-[#0B1E30] px-4.5 py-2.5 border border-white/5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F5B70A] animate-ping"></span>
                  <span>{lang === 'zh' ? 'Sandy 团队专线报关保障' : 'Sandy Custom Docket Pre-Check'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CTA button */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 bg-[#013E75] hover:bg-[#F5B70A] text-white hover:text-[#051524] text-xs font-bold tracking-widest uppercase px-10 py-5 transition-all duration-300 shadow-md cursor-pointer rounded-none"
            >
              <span>{lang === 'zh' ? '立即发起一站式全案设计咨询' : 'Initiate Integrated One-Stop Inquiry'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </section>
      )}

      {/* ================= 3. FOUR CORE VERTICALS BUSINESS CARDS GRID (WITH ON HOVER ZOOM & SPEC EXPANSION) ================= */}
      {activeTab === 'verticals' && (
        <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-12 lg:py-16 animate-fade-in space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#013E75]/10 pb-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold">
                [ CORE VERTICAL PRODUCTION SEGMENTS ]
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#013E75]">
                {lang === 'zh' ? '专业单项细分卡片：四大核心科室的硬核指标' : 'Artisanal Substructures: Engineering Sinks & Specifications.'}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs text-[#8A96A3] font-mono">
                DIVISIONS CLASSIFICATION // 2026 MATRIX
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((serv, index) => {
              const isHovered = hoveredVertical === index;
              return (
                <div 
                  key={serv.id}
                  onMouseEnter={() => setHoveredVertical(index)}
                  onMouseLeave={() => setHoveredVertical(null)}
                  className={`bg-white border transition-all duration-700 shadow-xs rounded-none flex flex-col sm:flex-row overflow-hidden relative group ${
                    isHovered 
                      ? 'border-[#013E75] ring-2 ring-[#013E75]/10 scale-[1.02] shadow-xl z-20' 
                      : 'border-stone-200/80 grayscale-[20%]'
                  }`}
                >
                  {/* Floating Category Number Tag */}
                  <div className={`absolute top-4 left-4 text-white font-mono text-[9px] font-bold py-1 px-2.5 z-10 shadow-xs uppercase tracking-wider transition-all duration-500 ${
                    isHovered ? 'bg-[#F5B70A] text-[#051524]' : 'bg-[#051524]'
                  }`}>
                    DEP / {serv.num} — {serv.tag[lang]}
                  </div>

                  {/* Left Block: Photo (Adjusted with dynamic hover scaling) */}
                  <div className="w-full sm:w-2/5 h-52 sm:h-auto bg-stone-900 relative overflow-hidden shrink-0">
                    <img 
                      src={serv.photo} 
                      alt={serv.title[lang]} 
                      className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                        isHovered ? 'grayscale-0 scale-110' : 'grayscale opacity-70'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                    
                    {/* Interactive Ribbon on photo */}
                    <div className="absolute bottom-4 left-4 bg-[#F5B70A] text-[#051524] text-[9px] font-mono font-bold px-2 py-0.5 shadow-sm uppercase">
                      ★ {serv.badge[lang]}
                    </div>
                  </div>

                  {/* Right Block: Content Details */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2.5">
                      <span className="text-[10px] text-[#8A96A3] font-mono block tracking-widest uppercase">// DIVISION REGISTER</span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#013E75] leading-snug">
                        {serv.title[lang]}
                      </h3>
                      <p className="text-[12px] text-[#4A5B6D] font-light leading-relaxed text-justify">
                        {serv.intro[lang]}
                      </p>
                    </div>

                    {/* Classic Spec List */}
                    <div className="bg-[#FAF8F5] p-4.5 space-y-2 border-t-[1.5px] border-[#F5B70A]/30">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#0D233A] tracking-wider uppercase mb-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#F5B70A]" />
                        <span>{lang === 'zh' ? '基本质检参数' : 'BASIC INSPECTION DATA'}</span>
                      </div>
                      
                      <div className="space-y-1.5 text-[11px] font-mono text-indigoMuted">
                        {serv.specs.map((item, id) => (
                          <div key={id} className="flex justify-between border-b border-stone-200/50 pb-0.5 last:border-0 last:pb-0">
                            <span className="text-[#8A96A3] text-[10px]">{item.label[lang]}:</span>
                            <span className="text-[#051524] font-bold text-right text-[10px]">{item.val}</span>
                          </div>
                        ))}
                      </div>

                      {/* MOUSE HOVER EXPAND ADVANCED METRICS COVER */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col pt-3.5 mt-2 border-t border-stone-200/50 ${
                        isHovered ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}>
                        <span className="text-[9px] font-mono font-bold text-[#013E75] tracking-widest uppercase mb-1.5">
                          {lang === 'zh' ? '» 驻厂级高精技术保障：' : '» EMBEDDED QA UPGRADES:'}
                        </span>
                        <ul className="space-y-1">
                          {serv.advancedSpecs[lang].map((aSpec, aIdx) => (
                            <li key={aIdx} className="text-[11px] text-[#4A5B6D] font-mono leading-relaxed list-none pl-1 text-justify">
                              {aSpec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sincere Compliance Sandy Highlight card (Card-based design) */}
          <div className="bg-white border-2 border-dashed border-[#FAF8F5] p-6 sm:p-10 relative shadow-sm rounded-none max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start bg-[#F6E4C8]/10">
            <div className="bg-[#013E75] text-[#F5B70A] p-3 shadow-md shrink-0">
              <FolderLock className="w-6 h-6" />
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#8A96A3] uppercase block font-bold">// Sandy's Compliance Assurance</span>
              <h4 className="font-serif text-lg font-bold text-[#013E75]">
                {lang === 'zh' ? 'Sandy 进出口总监：全品类单证合规把关人' : 'Sandy: Global Export Compliance & Document Director'}
              </h4>
              <p className="text-xs text-[#4A5B6D] leading-relaxed text-left text-justify">
                {lang === 'zh' 
                  ? '为什么高档拼装发货离不开 Sandy 团队统筹？因为木制护墙面临美国 FDA 严格检意准入，超大外景窗必须符合 ASTM 抗冲击标准，大理石多厂通关必须进行HS商品品类归属。Sandy 资深技术组对装箱单、发票提单多重对锁，确保清关流程天衣无缝，防范发生万级美元的海扣滞箱代价。'
                  : 'Managing various high-tier items calls for unified bureaucracy templates. Custom woodwork must trace plant guidelines under US FDA, dual vacuum glazing must sustain ASTM structural loads, and luxury stones must match HS catalog values. Sandy guarantees seamless dockets to eliminate wharf penalties.'}
              </p>
              
              <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-[#8A96A3]">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>{lang === 'zh' ? 'Sandy 技术团队双重检核 · 全生命周期保障已启动' : 'Sandy lead-supervised export dockets completely integrated.'}</span>
              </div>
            </div>
          </div>

        </section>
      )}

      {/* ================= 4. SOLEMN CLOSURE & GLOBAL BLUEPRINT SIGN-OFF (Vibrant Slate Bottom) ================= */}
      <section className="w-full bg-[#0D233A] text-white py-24 px-6 lg:px-16 text-center border-t border-[#F5B70A]/20 relative">
        <div className="absolute inset-0 bg-[#051524]/60 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] select-none pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="inline-block bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-mono tracking-[0.25em] text-[#F5B70A] uppercase">
            [ SECURE CUSTOMIZED GLOBAL MANUFACTURING ]
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-snug">
            {lang === 'zh' ? (
              <>
                专业分工，<span className="font-serif italic font-normal text-[#F5B70A]">一站设计。</span><br />
                悦捷全链品质为您护送靠岸。
              </>
            ) : (
              <span>Structured Divisions, Unified Under One Flawless Delivery.</span>
            )}
          </h3>
          
          <p className="text-xs sm:text-sm text-stoneWarm/90 max-w-2xl mx-auto font-light leading-relaxed text-justify md:text-center">
            {lang === 'zh' ? (
              '无论是海外重度潮湿盐雾海岛度假墅宇、大规模商业门窗采光，或者是对双语深化拆单、多厂拼配有着极高要求的跨境进口采购主体——我们都能在24小时内为您出具专项排产深化方案。彻底阻断木饰开裂翘动、奢石对纹断层与海关停船扣货梦魇。'
            ) : (
              'Yuejie coordinates customized CAD blueprints, continuous hardwood sequencies, cyclone glazing, and seaport compliance under direct supervision of logistics manager Sandy. Initiate the proposal portal to obtain structural estimates in 24 hours.'
            )}
          </p>

          <div className="pt-6">
            <button 
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#F5B70A] text-[#051524] text-xs font-semibold uppercase tracking-widest py-4.5 px-12 hover:bg-white hover:text-pblack transition-all duration-300 shadow-md cursor-pointer font-sans rounded-none"
            >
              <span>{lang === 'zh' ? '点此即刻规划您的专属高定出海方案' : 'Initiate Integrated Custom Proposal'}</span>
              <ArrowUpRight className="w-4 h-4 text-pblack" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

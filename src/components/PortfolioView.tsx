/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Language } from '../types';
import CaseDetailView from './CaseDetailView';
import { 
  Search, 
  MapPin, 
  Globe, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  SlidersHorizontal,
  FolderOpen,
  CheckCircle2,
  Calendar,
  Compass,
  FileText,
  Activity,
  ZoomIn,
  Building,
  Home,
  Boxes,
  Map,
  X
} from 'lucide-react';

interface PortfolioViewProps {
  lang: Language;
  onOpenConsultation: () => void;
  initialProjectId?: string | null;
  onClearInitialProject?: () => void;
}

interface CaseItem {
  id: string;
  category: 'villa' | 'facade' | 'millwork' | 'all-in-one';
  title: { zh: string; en: string };
  region: { zh: string; en: string };
  desc: { zh: string; en: string };
  imgUrl: string;
  specs: { label: { zh: string; en: string }; val: string }[];
  accentColor: string;
  heightClass: string; // for masonry visual dynamics
  mapCoords: { x: number; y: number }; // Percentage from top-left for SVG world alignment
  creationYear: string;
}

export default function PortfolioView({ 
  lang, 
  onOpenConsultation, 
  initialProjectId, 
  onClearInitialProject 
}: PortfolioViewProps) {
  // States for search and interactive filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'villa' | 'facade' | 'millwork' | 'all-in-one'>('all');
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);
  const [selectedMapPoint, setSelectedMapPoint] = useState<string | null>('CASE-01');
  const [showDetailModal, setShowDetailModal] = useState<CaseItem | null>(null);

  // Elite Case Master Data
  const projectsData: CaseItem[] = useMemo(() => [
    {
      id: 'CASE-01',
      category: 'all-in-one',
      title: {
        zh: '马来西亚兰卡威 1500㎡ 独栋暖奢海景庄园全案',
        en: 'The Langkawi Terradisi Oceanfront Estate Full Custom'
      },
      region: { zh: '东南亚 · 兰卡威', en: 'Southeast Asia, Langkawi' },
      desc: {
        zh: '现代热带木作与大面玻璃窗的完美交融。悦捷提供350㎡超高防风压系统断桥门窗，520㎡全对花卡拉卡塔天然奢石墙地岩板，以及防潮型原木高定墙板固装，在长年极端海岛高盐雾工况下确保极佳性能。',
        en: 'A perfect integration of modern tropical joinery and expansive structural glazing. Yuejie supplied 350㎡ windproof systemic glaze, 520㎡ bookmatched Italian marble tile matrices, and custom-cured woodwork panels certified against maritime elements.'
      },
      imgUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      accentColor: '#F5B70A',
      heightClass: 'h-[440px]',
      mapCoords: { x: 74, y: 62 }, // Malaysia Langkawi area on custom stylized world map representation
      creationYear: '2026',
      specs: [
        { label: { zh: '全案总配', en: 'Project Scale' }, val: '1,500㎡ Custom' },
        { label: { zh: '隔音抗台风', en: 'Glazing Std' }, val: 'ASTM Hurricane Proof 9.0kPa' },
        { label: { zh: '奢石精准度', en: 'Stone Margins' }, val: '0.2mm Waterjet Spliced' },
        { label: { zh: '货柜清关', en: 'Logistics Clear' }, val: 'Sandy lead pre-checked' }
      ]
    },
    {
      id: 'CASE-02',
      category: 'facade',
      title: {
        zh: '美国迈阿密 1200㎡ 现代主义极简海岸豪墅工程',
        en: 'The Miami Modernist Waterfront 1200㎡ Mansion'
      },
      region: { zh: '北美洲 · 迈阿密', en: 'North America, Miami' },
      desc: {
        zh: '高能通透的极简建筑大作。悦捷深化设计师全案精准排布，高标准批量出口全屋美标抗飓风1.52 SGP动力防冲撞夹胶玻璃窗系统，极度严寒和台风环境完美承载，并搭配沙滩级外遮阳隐形门合页。',
        en: 'Maximized transparency and monolithic massing. Yuejie’s structural detail engineers mapped high-specification US impact-rated window matrices with 1.52mm SGP composite sheets, coupled with extreme salt-mist proof hinges.'
      },
      imgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      accentColor: '#3B82F6',
      heightClass: 'h-[360px]',
      mapCoords: { x: 26, y: 44 }, // Florida/Miami representation
      creationYear: '2025',
      specs: [
        { label: { zh: '建筑体量', en: 'Total Size' }, val: '1,200㎡ Seafront' },
        { label: { zh: '防爆等级', en: 'Impact Rating' }, val: 'Miami-Dade NOA Approved' },
        { label: { zh: '出海拼箱', en: 'Packing Spec' }, val: '52 Plywood Crates' },
        { label: { zh: '色差判定', en: 'Color Delta' }, val: 'Delta E ≤ 1.0 Uniform' }
      ]
    },
    {
      id: 'CASE-03',
      category: 'facade',
      title: {
        zh: '迪拜朱美拉 2200㎡ 极简大宅外挂陶板与幕墙大成',
        en: 'Dubai Jumeirah 2200㎡ Architectural Glazing Facade'
      },
      region: { zh: '中东 · 迪拜', en: 'Middle East, Dubai Jumeirah' },
      desc: {
        zh: '在中东沙漠极端严酷温差及强紫外线下，高标准供应干挂通体岩板、三玻两腔气密Low-E中空系统幕墙及超高硬度铝材。产品经驻厂多流程合规检验，货品全单于Jebel Ali港无差错结关顺利送达。',
        en: 'Engineered against sandstorms and hyperthermal thermal stresses. Supplied custom dry-hang sintered tile matrices, triple-glazed vacuum Low-E structural curtain frame modules, and ultra-high-extrude 6063-T6. Completed customs smoothly at Jebel Ali.'
      },
      imgUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      accentColor: '#F5AF0A',
      heightClass: 'h-[380px]',
      mapCoords: { x: 61, y: 48 }, // Middle East Dubai region
      creationYear: '2026',
      specs: [
        { label: { zh: '干挂面积', en: 'Facade Area' }, val: '1,800㎡ Sintered Stone' },
        { label: { zh: '耐温界限', en: 'Temp Range' }, val: '-10℃ to +75℃ Structural' },
        { label: { zh: '隔热传系数', en: 'U-Value Std' }, val: '≤ 1.1 W/㎡·K certified' },
        { label: { zh: '海关放行', en: 'Port Clearance' }, val: '100% Express Clearance' }
      ]
    },
    {
      id: 'CASE-04',
      category: 'millwork',
      title: {
        zh: '摩纳哥山脊 800㎡ 悬崖墅苑名贵整屋固装木作',
        en: 'Monaco Cliffside 800㎡ Premium Bespoke Woodwork'
      },
      region: { zh: '南欧 · 摩纳哥', en: 'Southern Europe, Monaco' },
      desc: {
        zh: '古典欧式美学与现代高定硬核工艺的化学反应。采用E0级航海级高防潮多层板为基材，表面覆贴意大利黑大理石饰纹、手工“对纹拼贴”古典黑胡桃拼接护墙。出厂前在佛山基地进行100%预预先实物拼装检核。',
        en: 'Elite classical detail fuses with contemporary physical durability specifications. Formulated with premium marine-grade multiplywood cores, laminated under continuous matched Mediterranean burlwood sheets. 100% site pre-fit test in China.'
      },
      imgUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      accentColor: '#EF4444',
      heightClass: 'h-[420px]',
      mapCoords: { x: 50, y: 39 }, // Monaco/Europe area
      creationYear: '2026',
      specs: [
        { label: { zh: '固装体量', en: 'Carpentry Scale' }, val: '800㎡ Double-Floor' },
        { label: { zh: '基板等级', en: 'Core Formaldehyde' }, val: 'E0 Super Eco Certified' },
        { label: { zh: '切缘公差', en: 'Joint Margin' }, val: '≤ 0.15mm Symmetrical' },
        { label: { zh: '预拼检测', en: 'Pre-assembly' }, val: '100% Verified in Factory' }
      ]
    },
    {
      id: 'CASE-05',
      category: 'millwork',
      title: {
        zh: '澳洲悉尼 950㎡ 海湾陡壁全案艺术大理石拼花工程',
        en: 'Sydney Harbour Cliffside 950㎡ Luxury Slabs'
      },
      region: { zh: '大洋洲 · 悉尼', en: 'Oceania, Sydney Harbour' },
      desc: {
        zh: '陡壁悬崖上极其尊荣的私人宅邸。悦捷通过3D像素光谱成像建模系统，远距离精确锁定进口天然海原蓝、意大利白色理石脉络走向。水刀拼接合缝，配合严苛澳洲AQIS绿色生态林林木阻燃木箱安全通检。',
        en: 'A legendary masterwork clinging to raw ocean cliffs. Captured via yuejie’s proprietary 3D digital camera scanning software to balance continuous blue stone marble veins. Shipped across AQIS criteria in heavy wood structures.'
      },
      imgUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      accentColor: '#10B981',
      heightClass: 'h-[400px]',
      mapCoords: { x: 86, y: 81 }, // Sydney/Australia region
      creationYear: '2025',
      specs: [
        { label: { zh: '奢理拼板', en: 'Slab Layout' }, val: '550㎡ Seamless Vector' },
        { label: { zh: '中港检备', en: 'Quarantine Pass' }, val: 'AQIS Biosecurity Approved' },
        { label: { zh: '硬度级别', en: 'Mohs Index' }, val: 'Grade 7.0 Surface Scratchless' },
        { label: { zh: '配货仓储', en: 'Depot Stowage' }, val: 'Foshan Nanhai 10,000㎡' }
      ]
    },
    {
      id: 'CASE-06',
      category: 'all-in-one',
      title: {
        zh: '加拿大温哥华 780㎡ 原始雨林秘境抗震岩板平墅',
        en: 'Vancouver Rainforest Retreat 780㎡ Monolithic Villa'
      },
      region: { zh: '北美洲 · 温哥华', en: 'North America, Vancouver' },
      desc: {
        zh: '落基高山深林秘境，高度要求全隐形金属五金、航空阻烟重防腐。集成出海包括超低导热值重型三层门窗和自复位静音系统。在佛山中转仓库实施多厂货品气密集中配重拼装，安抵海外森林工地。',
        en: 'Nestled deep in cedar forest hills. Prescribed heavy dual therm-break window configurations, self-closing pivot structures, and low thermal bridge cladding tiles. Multi-item items synchronized at Nanhai center.'
      },
      imgUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      accentColor: '#8B5CF6',
      heightClass: 'h-[370px]',
      mapCoords: { x: 16, y: 28 }, // Vancouver region
      creationYear: '2026',
      specs: [
        { label: { zh: '建筑能效', en: 'Thermal Standard' }, val: 'U-Value ≤ 1.0 W/㎡K' },
        { label: { zh: '防震合规', en: 'Seismic Index' }, val: 'Structural Class-A Standard' },
        { label: { zh: '物流分件', en: 'Package Pieces' }, val: '28 Heavy Timber Cases' },
        { label: { zh: '设计周期', en: 'MTO Drafting' }, val: '14 Days Elite Detail Completion' }
      ]
    }
  ], []);

  // Filter and search computation
  const filteredProjects = useMemo(() => {
    return projectsData.filter(proj => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
      
      // Search query filter (matches title, region, desc, id)
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        proj.title.zh.toLowerCase().includes(query) ||
        proj.title.en.toLowerCase().includes(query) ||
        proj.region.zh.toLowerCase().includes(query) ||
        proj.region.en.toLowerCase().includes(query) ||
        proj.desc.zh.toLowerCase().includes(query) ||
        proj.desc.en.toLowerCase().includes(query) ||
        proj.id.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, projectsData]);

  // Synchronize clicked map point with selected case details for interactive bottom map
  const activeMapProject = useMemo(() => {
    return projectsData.find(p => p.id === selectedMapPoint) || projectsData[0];
  }, [selectedMapPoint, projectsData]);

  // Handle map point click: sets active, filters above or focuses
  const handleMapPointSelect = (id: string) => {
    setSelectedMapPoint(id);
    
    // Auto populate search bar or focus
    const targetProj = projectsData.find(p => p.id === id);
    if (targetProj) {
      // Optional: scroll smoothly to the case card if it exists in the top grid list
      const element = document.getElementById(`case-card-${id}`);
      if (element) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (initialProjectId) {
      const found = projectsData.find(p => p.id === initialProjectId);
      if (found) {
        setShowDetailModal(found);
      }
    }
  }, [initialProjectId, projectsData]);

  if (showDetailModal) {
    return (
      <CaseDetailView
        lang={lang}
        project={showDetailModal}
        onBackToList={() => {
          const backToId = showDetailModal.id;
          setShowDetailModal(null);
          if (onClearInitialProject) {
            onClearInitialProject();
          }
          setTimeout(() => {
            const element = document.getElementById(`case-card-${backToId}`);
            if (element) {
              const offset = 120;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = element.getBoundingClientRect().top;
              const elementPosition = elementRect - bodyRect;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 100);
        }}
        onOpenConsultation={onOpenConsultation}
      />
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] text-[#051524] select-none font-sans pb-24">
      
      {/* ==========================================
          1. HEADER BANNER SECTION
          ========================================== */}
      <section className="w-full border-b border-[#013E75]/10 py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#F6E4C8]/50 to-[#FAF8F5]">
        <div className="absolute inset-0 bg-[radial-gradient(#013E75_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 space-y-8">
          
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 border-[1.5px] border-[#013E75]/20 bg-white/70 px-4 py-1.5 shadow-xs">
              <Compass className="w-4 h-4 text-[#F5B70A] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#013E75]/85">
                {lang === 'zh' ? '第四卷：全球实绩与跨境工程案例汇卷' : 'Volume IV: Empirical Cross-Border Delivery Logs'}
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#013E75] leading-[1.12] tracking-tight">
              {lang === 'zh' ? (
                <>
                  <span>名家设计，大宗领航。</span>
                  <span className="block font-serif font-normal italic text-[#F5B70A] mt-2">
                    全球顶奢墅邸工程的一站式落地大成。
                  </span>
                </>
              ) : (
                <span>Global High-End Architectural Estates, Executed with Unbeatable Splicing Precision.</span>
              )}
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-[#4A5B6D] font-light leading-relaxed max-w-3xl text-justify">
              {lang === 'zh' ? (
                '出海交付，物理实证是检验承诺的最高天秤。悦捷在多洋海岸跨国地缘政治与极寒/高盐雾环境压力下，统筹全案设计师转化1:1深化CAD，协同佛山高定木作和航空级隔音幕墙，配合Sandy专家报单，让奢华建筑从图样化作坚实的实体堡垒。以下收录悦捷全球核心现役/已交付案卷，均支持参数可考。'
              ) : (
                'Physical evidence represents our supreme contract. Across hostile storm loads and rigid foreign trade barriers, Yuejie translates master sketches into flawless realities. View our verified residential projects ledger with fully open structural data parameters.'
              )}
            </p>
          </div>

          {/* ==========================================
              INTERACTIVE FILTER & SEARCH SYSTEM
              ========================================== */}
          <div className="bg-white border border-stone-200 p-6 md:p-8 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative">
            <div className="absolute top-0 left-0 w-24 h-[3px] bg-[#F5B70A]"></div>
            
            {/* Search Input bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#8A96A3]" />
              <input 
                type="text" 
                placeholder={lang === 'zh' ? '搜索案卷名、区域、高端货品或技术参数...' : 'Query case titles, cities, components or specs...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF8F5] text-sm text-[#051524] pl-11 pr-4 py-3 border border-stone-200 focus:border-[#013E75] focus:outline-none transition-all placeholder:text-[#8A96A3] font-sans rounded-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A96A3] hover:text-[#051524] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Functional Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-[#8A96A3] uppercase mr-2 flex items-center gap-1.5 font-bold">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#013E75]" />
                {lang === 'zh' ? '按科室过滤:' : 'DEP SELECTION:'}
              </span>
              
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', zh: '全部案卷', en: 'All Ledger' },
                  { key: 'all-in-one', zh: '一站全案', en: '1-Stop All-In-One' },
                  { key: 'villa', zh: '私属庄园', en: 'Villa Estates' },
                  { key: 'facade', zh: '系统幕墙', en: 'Glazing Facades' },
                  { key: 'millwork', zh: '高定木作', en: 'Bespoke Joinery' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setSelectedCategory(tab.key as any)}
                    className={`px-4 py-2.5 text-xs font-mono tracking-wider transition-all duration-300 border cursor-pointer rounded-none ${
                      selectedCategory === tab.key
                        ? 'bg-[#013E75] text-white border-[#013E75] font-bold shadow-xs'
                        : 'bg-[#FAF8F5] text-[#4A5B6D] border-stone-200/80 hover:bg-stone-100 hover:text-[#051524]'
                    }`}
                  >
                    {lang === 'zh' ? tab.zh : tab.en}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          2. THE WATERFALL MASONRY CASE CONTAINER (AESTHETIC GRID)
          ========================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-16">
        
        {/* Dynamic header of counting */}
        <div className="flex items-center justify-between border-b border-[#013E75]/10 pb-6 mb-12">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold">// ARCHITECTURAL DATABASE ACCESS</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <h2 className="font-serif text-lg sm:text-xl font-normal text-[#013E75]">
                {lang === 'zh' ? (
                  <>符合查考条件的奢华案卷共 <span className="font-mono font-bold text-[#F5B70A]">{filteredProjects.length}</span> 套</>
                ) : (
                  <>Ledger Match: <span className="font-mono font-bold text-[#F5B70A]">{filteredProjects.length}</span> Verified Splicing Files</>
                )}
              </h2>
            </div>
          </div>
          <span className="text-xs text-[#8A96A3] font-mono hidden sm:inline-block">YUEJIE CORE REGISTER V.2026 // SECURE</span>
        </div>

        {filteredProjects.length === 0 ? (
          /* Empty Search results logic */
          <div className="text-center py-24 bg-white border border-dashed border-stone-200/80 p-8">
            <FolderOpen className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <h3 className="font-serif text-lg text-stone-500 mb-1">
              {lang === 'zh' ? '暂无匹配的顶奢高定工程案卷' : 'No Architectural Case Records Match Your Parameters'}
            </h3>
            <p className="text-xs text-[#8A96A3] mb-6">
              {lang === 'zh' ? '请尝试重置过滤条件，或键入更简洁的词汇。' : 'Try refining keywords or utilizing yuejie’s generic division tags.'}
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="bg-[#013E75] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#F5B70A] hover:text-[#051524] transition-all cursor-pointer rounded-none"
            >
              {lang === 'zh' ? '重置全案检索' : 'Reset Material Search'}
            </button>
          </div>
        ) : (
          /* Real High-End Waterfall Masonry */
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:balance]">
            {filteredProjects.map((proj) => {
              const isHovered = hoveredCase === proj.id;
              const isMapSelected = selectedMapPoint === proj.id;
              
              return (
                <div 
                  key={proj.id}
                  id={`case-card-${proj.id}`}
                  onMouseEnter={() => setHoveredCase(proj.id)}
                  onMouseLeave={() => setHoveredCase(null)}
                  onClick={() => setShowDetailModal(proj)}
                  className={`break-inside-avoid bg-white border transition-all duration-700 overflow-hidden relative group cursor-pointer flex flex-col rounded-none mb-8 ${
                    isHovered 
                      ? 'border-[#013E75] ring-2 ring-[#013E75]/10 shadow-xl -translate-y-2' 
                      : 'border-stone-200/80 shadow-xs'
                  } ${isMapSelected ? 'ring-4 ring-[#F5B70A]/30 border-[#F5B70A]' : ''}`}
                >
                  {/* Category Stamp on cards */}
                  <div className="absolute top-4 right-4 bg-[#051524]/90 backdrop-blur-md text-white font-mono text-[9px] font-bold py-1 px-3 z-10 border border-white/10 uppercase tracking-widest shadow-xs">
                    {proj.category.toUpperCase()} / {proj.creationYear}
                  </div>

                  {/* Progressive image overlay with zoom and custom gradient */}
                  <div className="relative w-full overflow-hidden shrink-0 group-hover:bg-black text-stone-900">
                    <img 
                      src={proj.imgUrl} 
                      alt={proj.title[lang]} 
                      className={`w-full object-cover transition-all duration-1000 ease-out ${
                        isHovered ? 'scale-105 grayscale-0 opacity-100' : 'grayscale opacity-80'
                      }`}
                      style={{ maxHeight: proj.heightClass === 'h-[440px]' ? '440px' : proj.heightClass === 'h-[420px]' ? '360px' : '300px' }}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark aesthetic overlay cover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

                    {/* Left overlay badge */}
                    <span className="absolute bottom-4 left-4 text-[9px] tracking-widest font-mono text-[#F5B70A] bg-[#051524] px-3 py-1 font-semibold uppercase border border-white/5 shadow-xs flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#F5B70A]" />
                      {proj.region[lang]}
                    </span>

                    {/* Floating Zoom Action Indicator */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="bg-white/95 text-[#051524] border border-stone-200 p-3 shadow-2xl flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase">
                        <ZoomIn className="w-4 h-4 text-[#013E75]" />
                        <span>{lang === 'zh' ? '入卷拆解' : 'DEEP SPEC SHEET'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Summary specifications */}
                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      <span className="text-[10px] tracking-widest font-mono text-indigoMuted bg-stone-100 px-3 py-1 inline-block font-semibold border-l-2 border-[#FAF8F5] group-hover:border-[#F5B70A] transition-colors shadow-xs">
                        {proj.id} // VERIFIED BLUEPRINT DATA
                      </span>
                      
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#013E75] group-hover:text-[#F5B70A] transition-colors leading-snug tracking-tight">
                        {proj.title[lang]}
                      </h3>
                      
                      <p className="text-xs text-[#4A5B6D] font-light leading-relaxed text-justify">
                        {proj.desc[lang]}
                      </p>
                    </div>

                    {/* Explicit technical data specifications table */}
                    <div className="bg-[#FAF8F5] p-4.5 border-t-[1.5px] border-[#F5B70A]/30 space-y-3.5 font-mono">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#0D233A] tracking-wider uppercase">
                        <FileText className="w-3.5 h-3.5 text-[#F5B70A]" />
                        <span>{lang === 'zh' ? '本案核录合规检测数据' : 'VERIFIED COMPLIANCE METRICS'}</span>
                      </div>
                      
                      <div className="space-y-1.5 text-[11px]">
                        {proj.specs.map((item, specIdx) => (
                          <div key={specIdx} className="flex justify-between border-b border-stone-200/50 pb-1.5 last:border-0 last:pb-0">
                            <span className="text-[#8A96A3] text-[10px] uppercase">{item.label[lang]}:</span>
                            <span className="text-[#051524] font-bold text-right text-[10px]">{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full details action */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDetailModal(proj);
                      }}
                      className="w-full text-center border border-[#013E75]/20 bg-white/50 py-3.5 text-[11px] font-mono tracking-widest text-[#013E75] hover:bg-[#013E75] hover:text-white hover:border-[#013E75] transition-all cursor-pointer font-bold uppercase rounded-none"
                    >
                      {lang === 'zh' ? '阅看驻厂核审检测图' : 'VIEW FULL QUALITY SIGN-OFF DOCUMENT'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* =========================================================================================
          3. INTERACTIVE BOTTOM MAP / COORDINATES PROJECTOR (MAPPED ON REFINED GRAPHIC WORLD VIEW)
          ========================================================================================= */}
      <section className="w-full bg-[#051524] text-white py-20 border-t border-b border-[#F5B70A]/20 relative overflow-hidden">
        
        {/* Futuristic layout overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#013E75]/15 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#F5B70A]/5 rounded-full blur-3xl"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 space-y-12 relative z-10">
          
          {/* Map Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-8">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono text-[#F5B70A] tracking-[0.25em] uppercase font-bold flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#F5B70A]" />
                {lang === 'zh' ? '地理定位：全球墅式材料通关配平地图' : 'COORDINATES PROJECTION: GLOBAL LOGISTICS BALANCE MAP'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                {lang === 'zh' ? (
                  <>点击世界港口节点 ── <span className="text-[#F5B70A] font-serif italic font-light">锁定您项目对应的出海通阻指数</span></>
                ) : (
                  <>Click Maritime Coordinates to Unlock Local Customs Safety Logs</>
                )}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs text-[#8A96A3] font-mono">
                REAL-TIME EXPORT TRACKER // DEPLOYED 2026
              </p>
            </div>
          </div>

          {/* Dual Column Map Interaction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* World Coordinates Plane (Left Column/12 Cols layout) */}
            <div className="lg:col-span-7 bg-[#0B1E30] border border-white/10 relative p-4 flex flex-col justify-center min-h-[380px] sm:min-h-[440px] shadow-2xl">
              
              {/* Stylized world grid blueprint container */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-stoneWarm/40 tracking-widest">
                PROJECTED WORLD GEODESIC MATRIX MAP
              </div>
              
              {/* Graphic Blueprint background lines */}
              <div className="absolute inset-8 border border-white/5 flex items-center justify-between opacity-50 select-none pointer-events-none">
                <div className="h-full w-[1px] bg-white/5 border-dashed"></div>
                <div className="h-full w-[1px] bg-white/5 border-dashed"></div>
                <div className="h-full w-[1px] bg-white/5 border-dashed"></div>
              </div>
              <div className="absolute inset-8 border border-white/5 flex flex-col justify-between opacity-50 select-none pointer-events-none">
                <div className="w-full h-[1px] bg-white/5 border-dashed"></div>
                <div className="w-full h-[1px] bg-white/5 border-dashed"></div>
              </div>

              {/* World outline simulated map background */}
              <div className="w-full aspect-[16/9] relative z-10 py-6">
                
                {/* Simulated geographic silhouette backing (SVG style map polygons representing continents) */}
                <svg className="absolute inset-0 w-full h-full text-stoneWarm/[0.045] pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* North America */}
                  <path d="M 10 25 L 28 25 L 30 38 L 22 45 L 14 35 Z" fill="currentColor" />
                  {/* South America */}
                  <path d="M 24 50 L 32 55 L 28 85 L 24 85 Z" fill="currentColor" />
                  {/* Europe */}
                  <path d="M 44 25 L 56 25 L 53 42 L 44 42 L 42 35 Z" fill="currentColor" />
                  {/* Africa */}
                  <path d="M 43 45 L 52 45 L 58 60 L 53 78 L 47 70 Z" fill="currentColor" />
                  {/* Asia/Siberia */}
                  <path d="M 58 20 L 88 18 L 84 55 L 68 58 L 56 45 Z" fill="currentColor" />
                  {/* Australia */}
                  <path d="M 76 68 L 88 68 L 86 85 L 75 80 Z" fill="currentColor" />
                </svg>

                {/* Draw connecting lines from Foshan (Central hub) to global endpoints */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                  {projectsData.map((proj) => {
                    const foshanX = 70; // Map coordinate for South China (Foshan)
                    const foshanY = 56;
                    const isActive = selectedMapPoint === proj.id;
                    return (
                      <path 
                        key={`line-${proj.id}`}
                        d={`M ${foshanX}% ${foshanY}% Q ${(foshanX + proj.mapCoords.x) / 2}% ${(foshanY + proj.mapCoords.y) / 2 - 12}% ${proj.mapCoords.x}% ${proj.mapCoords.y}%`}
                        fill="none"
                        stroke={isActive ? '#F5B70A' : 'rgba(255,255,255,0.08)'}
                        strokeWidth={isActive ? '1.5' : '0.75'}
                        strokeDasharray={isActive ? '4' : 'none'}
                        className="transition-all duration-700"
                      />
                    );
                  })}
                  
                  {/* Foshan Central Hub point indicator */}
                  <g transform={`translate(${70 * 10} ${56 * 10})`}>
                    {/* Handled layout via absolute position below to preserve scalability */}
                  </g>
                </svg>

                {/* Absolute element overlays for pinpoint precision */}
                <div 
                  className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 flex flex-col items-center select-all cursor-crosshair" 
                  style={{ left: '70%', top: '56%' }}
                >
                  <span className="absolute h-9 w-9 rounded-full bg-emerald-500/10 border border-emerald-500/40 animate-ping"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-400 border-2 border-white relative z-30"></span>
                  <span className="mt-1.5 px-2 py-0.5 bg-[#051524] text-[8px] font-mono font-bold text-white tracking-widest border border-white/10 uppercase">
                    FOSHAN HUB
                  </span>
                </div>

                {/* Active Projects hot nodes on map */}
                {projectsData.map((proj) => {
                  const isActive = selectedMapPoint === proj.id;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => handleMapPointSelect(proj.id)}
                      className="absolute z-20 focus:outline-none -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: `${proj.mapCoords.x}%`, top: `${proj.mapCoords.y}%` }}
                    >
                      {/* Ripply pulse indicator */}
                      <span className={`absolute -inset-4.5 rounded-full border transition-all duration-700 ${
                        isActive 
                          ? 'bg-[#F5B70A]/10 border-[#F5B70A]/50 scale-100 animate-ping' 
                          : 'bg-[#FAF8F5]/5 border-[#FAF8F5]/20 scale-75 group-hover:scale-100 group-hover:bg-[#FAF8F5]/10 group-hover:border-[#F5B70A]/30'
                      }`}></span>

                      {/* Hard Point */}
                      <span className={`h-3 w-3 rounded-full border-2 transition-all duration-500 block relative z-30 ${
                        isActive 
                          ? 'bg-[#F5B70A] border-white scale-110 shadow-lg' 
                          : 'bg-[#4A5B6D] border-[#0B1E30] group-hover:bg-white group-hover:scale-110'
                      }`}></span>

                      {/* Mini Tag name */}
                      <span className={`absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[8px] font-mono tracking-widest border transition-all whitespace-nowrap z-20 ${
                        isActive 
                          ? 'bg-[#F5B70A] text-[#051524] border-[#F5B70A] font-bold shadow-md scale-105' 
                          : 'bg-[#051524] text-[#8A96A3] border-white/10 group-hover:text-white group-hover:border-white/20'
                      }`}>
                        {proj.id} // {proj.region[lang].split(' · ')[1] || proj.region[lang].split(', ')[1]}
                      </span>
                    </button>
                  );
                })}

              </div>

              {/* Mini Footnote */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#8A96A3]">
                <span>WGS84 COORDINATES DESCRIPTOR CORE</span>
                <span>FOSHAN HARBOUR FREIGHT RADIUS: ~18,000 KM</span>
              </div>
            </div>

            {/* Selected Coordinates Project Ledger Card details (Right Column/5 Columns layout) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 border border-white/10 p-6 sm:p-8 relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#F5B70A]"></div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] bg-white/5 border border-white/10 px-3 py-1 font-bold">
                    [ CONTAINS ACTIVE LOGISTICS COMPLIANCE ]
                  </span>
                  
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{lang === 'zh' ? '查检通关就绪' : 'Docket Audited'}</span>
                  </div>
                </div>

                {/* Main projection card text */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#F5B70A] shrink-0" />
                    <span className="text-xs font-mono tracking-wider text-stoneWarm">{activeMapProject.region[lang]}</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold tracking-tight text-white leading-snug">
                    {activeMapProject.title[lang]}
                  </h3>
                  
                  <p className="text-xs text-stoneWarm font-light leading-relaxed text-justify">
                    {activeMapProject.desc[lang]}
                  </p>
                </div>

                {/* Fast specification stats from projected map node */}
                <div className="space-y-2.5 bg-white/[0.03] border border-white/5 p-4.5 font-mono">
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#F5B70A] tracking-wider uppercase mb-1">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>{lang === 'zh' ? '口岸放行验证参数' : 'SEAPORT DISPATCH DOCKET'}</span>
                  </div>
                  
                  <div className="space-y-1.5 text-[11px] text-[#8A96A3]">
                    {activeMapProject.specs.map((item, specIdx) => (
                      <div key={specIdx} className="flex justify-between border-b border-white/5 pb-1 last:border-0 last:pb-0">
                        <span>{item.label[lang]}:</span>
                        <span className="text-white font-bold">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call-to-action alignment with coordinates map project focus */}
              <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowDetailModal(activeMapProject)}
                  className="flex-1 bg-white text-[#051524] text-xs font-bold uppercase tracking-widest py-3.5 hover:bg-[#F5B70A] hover:text-[#051524] hover:shadow-lg transition-all rounded-none cursor-pointer text-center"
                >
                  {lang === 'zh' ? '点击查看技术深化总件' : 'Open Complete PDF Specs'}
                </button>
                <button
                  onClick={() => handleMapPointSelect(activeMapProject.id)}
                  className="px-5 border border-white/10 hover:border-white text-xs font-mono tracking-widest text-[#8A96A3] hover:text-white transition-all py-3.5 text-center flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#F5B70A]" />
                  <span>{lang === 'zh' ? '在上面定位' : 'LOCATE'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          4. PROMPTING PROPOSAL SIGN-OFF BOTTOM
          ========================================== */}
      <section className="w-full bg-[#FAF8F5] py-24 px-6 lg:px-16 text-center relative border-t border-stone-200">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="inline-block bg-[#051524] border border-[#013E75]/10 px-4.5 py-1.5 text-[10px] font-mono tracking-[0.25em] text-[#F5B70A] uppercase font-bold">
            [ ESTABLISH SECURED BLUEPRINT INTEGRITY ]
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-snug text-[#013E75]">
            {lang === 'zh' ? (
              <>
                极质筑造，<span className="font-serif italic font-normal text-[#F5B70A]">安全交付。</span><br />
                为您在全球任何海角重塑人居线条。
              </>
            ) : (
              <span>Your Architectural Concept, Translated and Delivered to Whichever Seaport Perfectly.</span>
            )}
          </h3>
          
          <p className="text-xs sm:text-sm text-[#4A5B6D] max-w-2xl mx-auto font-light leading-relaxed text-justify md:text-center">
            {lang === 'zh' ? (
              '无论是跨国私人业主、总图工程经理、还是海外高端定制店合伙人，悦捷都可以向您输出完整的全套建材对账深化预算单。我们的深度驻厂质检组和 Sandy 报关团队，为您牢牢掐死返工和毁货的万分之概率。'
            ) : (
              'Yuejie coordinates customized CAD blueprints, continuous hardwood sequencies, cyclone glazing, and seaport compliance under direct supervision of logistics manager Sandy. Initiate the proposal portal to obtain structural estimates in 24 hours.'
            )}
          </p>

          <div className="pt-6">
            <button 
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#013E75] text-white text-xs font-semibold uppercase tracking-widest py-4.5 px-12 hover:bg-[#F5B70A] hover:text-[#051524] transition-all duration-300 shadow-md cursor-pointer font-sans rounded-none"
            >
              <span>{lang === 'zh' ? '启动您的专属项目技术深化评测' : 'INQUIRY FOR BESPOKE FEASIBILITY REPORT'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Language } from '../types';
import { 
  X, 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  Boxes, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  ChevronRight, 
  Compass, 
  Layers, 
  Hammer, 
  Anchor, 
  Workflow,
  Sparkles,
  FileCheck,
  Award
} from 'lucide-react';

interface CaseItem {
  id: string;
  category: 'villa' | 'facade' | 'millwork' | 'all-in-one';
  title: { zh: string; en: string };
  region: { zh: string; en: string };
  desc: { zh: string; en: string };
  imgUrl: string;
  specs: { label: { zh: string; en: string }; val: string }[];
  accentColor: string;
  heightClass: string;
  mapCoords: { x: number; y: number };
  creationYear: string;
}

interface CaseDetailViewProps {
  lang: Language;
  project: CaseItem;
  onBackToList: () => void;
  onOpenConsultation: () => void;
}

export default function CaseDetailView({ lang, project, onBackToList, onOpenConsultation }: CaseDetailViewProps) {
  // Tab selector for the interactive technical blueprint viewer
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<'blueprint' | 'material' | 'stowage' | 'installation'>('blueprint');

  // Lightbox for factory physical photos
  const [previewImage, setPreviewImage] = useState<null | { url: string; title: { zh: string; en: string }; desc: { zh: string; en: string } }>(null);

  // Realistic mock data maps based on project category to populate immersive tabs dynamically
  const tabDetails = useMemo(() => {
    const isMillwork = project.category === 'millwork';
    const isFacade = project.category === 'facade';
    const isAllInOne = project.category === 'all-in-one';

    return {
      blueprint: {
        title: { zh: '1:1 驻厂 CAD 几何深度对账图件', en: '1:1 Embedded Shop Drawings & CAD Coordinates' },
        tag: 'CAD_RECONCILIATION_MAP',
        rows: [
          { label: { zh: '图纸对齐标准', en: 'Blueprint Code Compatibility' }, val: { zh: '完全兼容美标 AAMA / 欧标 EN 建筑规范', en: '100% compliant with US AAMA & EU EN layout standards' } },
          { label: { zh: '水刀拼合公差', en: 'Dimension Joinery Tolerances' }, val: { zh: '微米级公差控制 ≤ 0.15mm 无缝拼合', en: 'High-precision micro-limits controlled ≤ 0.15mm' } },
          { label: { zh: '拼面平衡校验', en: 'Veining Alignment Validation' }, val: { zh: '3D 激光对焦测绘，天然对花纹理偏移率 ≤ 0.5%', en: '3D laser scanning matches stone panels with ≤ 0.5% drift' } },
          { label: { zh: '五金埋点工艺', en: 'Hardware Pre-drilled Cavities' }, val: { zh: '全自动 CNC 系统精准埋入式开孔', en: 'Automated CNC machinery locks hidden pivot nodes' } }
        ],
        graphicDesc: {
          zh: '图纸深化由悦捷工程院在佛山总部完成，直接衔接海外买方事务所，确认包括拼花边缘、幕墙节点挂耳及重载胶带的所有微观属性。',
          en: 'Our dedicated engineering hub translates overseas master blueprints into granular, manufacturer-level shop dockets, leaving absolute zero dimensional error.'
        }
      },
      material: {
        title: { zh: '顶级耐候物理抗压属性规格书', en: 'Hyper-Resistant Physical Construction Specifications' },
        tag: 'MATERIAL_PERFORMANCE_TESTS',
        rows: [
          { label: { zh: '玻璃系统/木质饰面', en: 'Glazing/Timber Composition' }, val: { zh: isFacade || isAllInOne ? '三玻两腔 Low-E 钢化中空玻璃' : '高分子阻碳多层防水底板 + 意式黑大理石饰纹面', en: isFacade || isAllInOne ? 'Triple-glazed Argon Vacuum Low-E laminated' : 'E0 Marine-grade anti-humidity multi-ply walnut' } },
          { label: { zh: '抗压抗震等级', en: 'Windload / Seismic Rating' }, val: { zh: isMillwork ? 'E0 级超环保耐拉伸阻燃材质' : '风载极限耐压 9.0 kPa（抵御15级飓风）', en: isMillwork ? 'E0 Class-A absolute fire retardant & warp resistant' : 'Windload Stress 9.0 kPa (resists Category 5 typhoons)' } },
          { label: { zh: '防腐盐雾指数', en: 'Anti-Corrosion Salt Mist Index' }, val: { zh: '5000小时重度酸性盐雾表面不腐蚀级别', en: '5,000 hrs intensive acid mist verified (coastal endurance)' } },
          { label: { zh: '表面硬度等级', en: 'Surface Mohs Scratch Index' }, val: { zh: '天然莫氏 7.0 级耐磨、超级抗紫外线反射', en: 'Bespoke Grade 7 Mohs scratchless & 99.9% UV-Shield' } }
        ],
        graphicDesc: {
          zh: '材质直接针对海外施工现场的极端气候（如中东55℃超高紫外线、加勒比台风、加拿大极寒融雪）进行氧化膜和防水层定向微米厚度加筑。',
          en: 'Materials are calibrated to withstand specific regional climates—be it Gulf extreme UV desert heat, North Sea salt fogs, or sub-zero Siberian freeze.'
        }
      },
      stowage: {
        title: { 'zh': 'Sandy 监督重装物流货柜及装箱单件', 'en': 'Sandy’s Heavy Marine Stowage & Flawless Packing List' },
        tag: 'SECURED_CONTAINER_STOWAGE',
        rows: [
          { label: { zh: '装柜木箱规格', en: 'Crating Standard' }, val: { zh: '出口级高刚性重型免熏蒸胶合木箱（超强防撞）', en: 'Heavy-duty seismic-reinforced fumigation-free plywood boxes' } },
          { label: { zh: '装载重心校准', en: 'Stowage Center Alignment' }, val: { zh: '三轴力学平衡堆垛，大理石立式斜抱防裂底托', en: 'Tri-axial weight distribution prevents loading fracture' } },
          { label: { zh: '单证无偏差率', en: 'Manifest Mismatch Margin' }, val: { zh: '100% 货证一致（海关一次无查验顺利通过率）', en: '100% manifest accuracy (direct seaport green passage)' } },
          { label: { zh: '主理通航港口', en: 'Active Hub Dispatch' }, val: { zh: '南沙港 / 盐田港 / 香港国际港口枢纽', en: 'Nansha Port / Shekou Port / Hong Kong Global Terminal' } }
        ],
        graphicDesc: {
          zh: '由大宗物流专家 Sandy Chen 领衔配载，每个装箱内部加筑重力重载阻阻尼，提供货柜全周期传感器防潮和防倾侧监控保障。',
          en: 'Supervised directly by director Sandy Chen. Crates are padded with high-density anti-shock polymers and moisture desiccants to prevent damage during long Pacific/Atlantic transits.'
        }
      },
      installation: {
        title: { zh: '5D 远程实时数智微缩安装指导图册', en: '5D Step-by-Step Remote Assembly Direction & Manuals' },
        tag: 'REMOTE_ASSEMBLY_DOCKET',
        rows: [
          { label: { zh: '图册深度级别', en: 'Documentation Granularity' }, val: { zh: '节点级拼装图 + 精确数字标签对照', en: 'Millimeter-grade CAD location tags matching physically numbered crates' } },
          { label: { zh: '音视频对口服务', en: 'Audiovisual Direct Support' }, val: { zh: '全天候双语高级工程师多屏在线会议对口剖析', en: '24/7 dual-language senior structural engineer video hotline' } },
          { label: { zh: '配件冗余比例', en: 'Spare Accessory Margin' }, val: { zh: '核心密封条、防砸结构胶、异形不锈钢扣件 10% 备用余量', en: '10% critical hardware buffers (sealants, custom clips) free' } },
          { label: { zh: '质保合规年限', en: 'Structural Life Span' }, val: { zh: '产品整机提供出海 15 年大宗结构耐用物理承载质保', en: '15-year physical stability guarantee against climate decay' } }
        ],
        graphicDesc: {
          zh: '极大地解决了海外当地劳动力高工时、安装精度差的问题。客户工人仅需对照货品物理钢印的“1 to 1 数标”即可实现严丝合缝拼接。',
          en: 'Resolves high overseas labor costs completely. Local handymen simply follow our clear CAD numbering matching laser stamps on the materials.'
        }
      }
    };
  }, [project]);

  // Selected lead expert for this project to humanize craftsmanship
  const assignedExpert = useMemo(() => {
    switch (project.category) {
      case 'facade':
        return {
          name: { zh: '张绍坤 Marcus', en: 'Marcus Zhang' },
          role: { zh: '极地抗压系统窗与防砸玻璃设计师', en: 'Principal Fenestration Designer' },
          badge: { zh: '极性压抗风极限性能把关人', en: 'Windload limits authority' },
          quote: { zh: '“幕墙是豪宅与风暴的第一次握手，我们必须做到绝对不气妥，守卫海湾风浪。”', en: '"Against coastal cyclones, the architectural envelope must remain impenetrable. Absolute durability is our code."' }
        };
      case 'millwork':
        return {
          name: { zh: '林国荣 James / 吴芊芊', en: 'James Lin & Sophie Wu' },
          role: { zh: '3D奢石大板与名贵整木深化团队经理', en: 'Bespoke Stonework & Carpentry Directors' },
          badge: { zh: '微米切缘公差合缝监督官', en: 'Zero-mismatch alignment supervisors' },
          quote: { zh: '“大理石和名贵木作是大自然千万年的赐予，我们用3D算法在佛山精准合缝，万里送达。”', en: '"Timber and marbles carry planetary life. We secure their continuous grain with micrometric waterjet precision."' }
        };
      case 'all-in-one':
      default:
        return {
          name: { zh: '陈雪莉 Sandy', en: 'Sandy Chen' },
          role: { zh: '首席跨境海运转舱与装运总监', en: 'Chief Cargo Stowage & Custom Director' },
          badge: { zh: '12年零查验零货损记录保持', en: 'Perfect harbor customs pass track record' },
          quote: { zh: '“单证和仓配是没有万一的。每一个箱体加固，都饱含对客户重托的诚敬与誓言。”', en: '"A meticulous packing manifest ensures perfect seaport passage. Custom delivery is resolved in details."' }
        };
    }
  }, [project]);

  return (
    <div className="w-full bg-[#FAF8F5] text-[#051524] select-none font-sans relative">
      
      {/* Dynamic Background Element Check */}
      <div className="absolute inset-0 bg-[radial-gradient(#013E75_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none"></div>

      {/* ==============================================================
          1. ELEGANT HEADER NAVIGATION ROADMAP BAR
          ============================================================== */}
      <section className="w-full border-b border-[#013E75]/10 bg-white/90 backdrop-blur-md sticky top-[90px] z-30 transition-all">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 h-14 flex items-center justify-between">
          
          {/* Back Action button trigger standard transition */}
          <button 
            onClick={onBackToList}
            className="inline-flex items-center gap-2 group text-xs font-mono font-bold uppercase tracking-wider text-[#013E75] hover:text-[#F5B70A] transition-all cursor-pointer"
            id="back-to-ledger-btn"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            <span>{lang === 'zh' ? '返回全案案例卷' : 'Back to Works Ledger'}</span>
          </button>

          {/* Document indicator */}
          <div className="flex items-center gap-3 text-xs font-mono text-[#8A96A3] sm:flex">
            <span>{project.id} // DETAILED COMPLIANCE ENVELOPE</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>

        </div>
      </section>

      {/* ==============================================================
          2. ATMOSPHERIC INDUSTRIAL HERO GRAPHIC COVER
          ============================================================== */}
      <section className="w-full relative min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden bg-stone-950">
        
        {/* Parallax structure image backdrop */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.imgUrl} 
            alt={project.title[lang]} 
            className="w-full h-full object-cover grayscale opacity-65 scale-102 hover:scale-105 duration-[4000ms] transition-transform ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Prussian oceanic atmospheric masking */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051524] via-[#051524]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#051524]/80 via-transparent to-black/40"></div>
        </div>

        {/* Hero details container */}
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-12 md:py-20 relative z-10 space-y-6 text-white text-justify">
          
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#F5B70A]/50 bg-[#051524]/90 px-3.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[#F5B70A] font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>GEO-LOCATION: {project.region[lang]}</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <span className="text-[10px] font-mono tracking-widest text-[#8A96A3] block uppercase">
              // VERIFIED PORT EXECUTION YEAR: {project.creationYear} // CAPABILITY CATEGORY: {project.category.toUpperCase()}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-white">
              {project.title[lang]}
            </h1>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-stone-200/90 leading-relaxed font-light max-w-3xl">
            {project.desc[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'zh' ? '佛山高规格质检测讫' : 'Foshan Rigorous QA Passed'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Boxes className="w-4 h-4 text-[#F5B70A]" />
              <span>{lang === 'zh' ? '多厂大宗集中配载' : 'Unified Consolidated Cargo Stowage'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F5B70A]" />
              <span>{lang === 'zh' ? '海外 15 年结构耐候认证' : '15-Year Weatherproof Structural Life'}</span>
            </div>
          </div>

        </div>

      </section>

      {/* ==============================================================
          3. MAIN COGNITIVE GRID: SPEC SHEETS,Blueprints Checkers,Expert dockets
          ============================================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* LEFT COLUMN: TECHNICAL SPECIFICATION FACT SHEET (7 Cols layout) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Subsection title */}
          <div className="space-y-2 border-b border-[#013E75]/10 pb-4">
            <span className="text-[9px] font-mono tracking-widest text-[#F5B70A] uppercase font-bold block">// SECURED ENGINEERING SPEC SHEET</span>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#013E75]" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#013E75] uppercase">
                {lang === 'zh' ? '主案大宗主材合规物理指标参数' : 'Structural & Physical Compliance metrics'}
              </h2>
            </div>
          </div>

          {/* Main Specifications Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.specs.map((spec, specIdx) => (
              <div 
                key={specIdx} 
                className="bg-white border border-stone-200 p-6 shadow-xs relative hover:shadow-md hover:border-[#013E75] transition-all group"
              >
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-stone-100 group-hover:bg-[#F5B70A] transition-colors border-l border-b border-stone-200"></div>
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono text-[#8A96A3] tracking-wider uppercase block">// COMPLIANCE KEY</span>
                  <div className="text-xs font-serif font-bold text-[#051524]">{spec.label[lang]}</div>
                  <div className="font-mono text-sm sm:text-base font-extrabold text-[#013E75]">{spec.val}</div>
                </div>
              </div>
            ))}

            {/* Standard Extra Compliance Attributes to ensure absolute data fidelity */}
            <div className="bg-white border border-stone-200 p-6 shadow-xs relative group">
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-[#8A96A3] tracking-wider uppercase block">// ENVIRONMENTAL STABIL</span>
                <div className="text-xs font-serif font-bold text-[#051524]">{lang === 'zh' ? '底板防潮抗霉变指数' : 'Substrate Anti-Mold Standard'}</div>
                <div className="font-mono text-sm sm:text-base font-extrabold text-[#013E75]">{lang === 'zh' ? '0级最高抗霉变（高盐湿不松张）' : 'Grade 0 (High Humidity Immune)'}</div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 p-6 shadow-xs relative group">
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-[#8A96A3] tracking-wider uppercase block">// EMISSION REGULATION</span>
                <div className="text-xs font-serif font-bold text-[#051524]">{lang === 'zh' ? '环保甲醛物理释放限量' : 'Formaldehyde Release Standard'}</div>
                <div className="font-mono text-sm sm:text-base font-extrabold text-[#013E75]">≤ 0.02 mg/m³ (Super ENF-grade)</div>
              </div>
            </div>
          </div>

          {/* Interactive Document Checker (Tabs inside base system) */}
          <div className="bg-white border border-stone-200 shadow-md overflow-hidden relative">
            
            {/* Tiny gold accent border top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5B70A]"></div>

            {/* Interactive Section Header of Tabs */}
            <div className="bg-[#051524] p-4 text-white border-b border-white/5">
              <span className="text-[9px] font-mono tracking-widest text-[#F5B70A] uppercase block font-bold mb-2">// 5D DIGITAL INTERACTIVE DOUBLE-CHECK DOSSIERS</span>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                {[
                  { key: 'blueprint', zh: '1. CAD 几何对账', en: '1. CAD Outlining' },
                  { key: 'material', zh: '2. 物理耐候规格', en: '2. Material Specs' },
                  { key: 'stowage', zh: '3. 重力装载单件', en: '3. Custom Stowage' },
                  { key: 'installation', zh: '4. 远程装配指导', en: '4. Inst Manuals' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveAnalysisTab(tab.key as any)}
                    className={`cursor-pointer px-3.5 py-1.5 transition-all uppercase font-bold tracking-wider ${
                      activeAnalysisTab === tab.key
                        ? 'bg-[#013E75] text-[#FAF8F5] border border-[#013E75] shadow-xs'
                        : 'bg-white/5 text-stone-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {lang === 'zh' ? tab.zh : tab.en}
                  </button>
                ))}
              </div>
            </div>

            {/* Render selected analytical view */}
            <div className="p-6 sm:p-8 space-y-6 text-justify">
              
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-[#F5B70A] bg-[#051524] px-2.5 py-0.5 inline-block font-bold tracking-widest uppercase">
                  DOCKET_DRAFT_TAG: {tabDetails[activeAnalysisTab].tag}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#013E75]">
                  {tabDetails[activeAnalysisTab].title[lang]}
                </h4>
              </div>

              {/* Rows inside specific analytical view */}
              <div className="space-y-3 font-mono text-xs text-[#051524]">
                {tabDetails[activeAnalysisTab].rows.map((row, rIdx) => (
                  <div key={rIdx} className="flex flex-col sm:flex-row justify-between border-b border-stone-100 pb-2.5 last:border-0 last:pb-0 gap-1.5">
                    <span className="text-[#8A96A3] font-medium uppercase shrink-0">{row.label[lang]} :</span>
                    <span className="font-bold text-left sm:text-right text-[#013E75]">{row.val[lang]}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#55697D] leading-relaxed pt-2.5 border-t border-stone-100 italic">
                {tabDetails[activeAnalysisTab].graphicDesc[lang]}
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: LEAD ARCHITECT DOCKET, PROGRESS STEPS PROFILE (5 Cols layout) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          
          {/* Assigned Elite Expert Card */}
          <div className="bg-[#051524] text-white p-6 sm:p-8 relative overflow-hidden shadow-xl">
            {/* Aesthetic coordinate watermark */}
            <div className="absolute right-0 bottom-0 text-[120px] font-mono font-black text-white/[0.025] select-none translate-x-12 translate-y-12 pointer-events-none">
              QA
            </div>
            
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#F5B70A]"></div>

            <div className="space-y-6 relative z-10">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-[9px] font-mono text-[#F5B70A] tracking-widest block uppercase font-bold">// ASSIGNED DOMAIN COMMANDER</span>
                <h3 className="font-serif text-lg font-bold text-white">
                  {lang === 'zh' ? '立项审核负责人签字' : 'Assigned Case Superintendent'}
                </h3>
              </div>

              {/* Personal narrative block */}
              <p className="font-serif text-xs sm:text-sm italic text-stone-200 leading-relaxed text-left border-l-[1.5px] border-[#F5B70A] pl-3">
                {assignedExpert.quote[lang]}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="h-12 w-12 rounded-none bg-stone-800 border border-white/10 flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-[#F5B70A] animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">{assignedExpert.name[lang]}</h4>
                  <span className="text-[10px] font-mono text-[#8A96A3] tracking-wide uppercase block">{assignedExpert.role[lang]}</span>
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-400/5 px-2 py-0.5 rounded-xs mt-1 inline-block">{assignedExpert.badge[lang]}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Project-specific Execution Workflow Milestones */}
          <div className="bg-white border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs relative">
            <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#013E75]"></div>

            <div className="border-b border-stone-100 pb-3">
              <span className="text-[9px] font-mono text-[#F5B70A] tracking-widest block font-bold uppercase">// MILESTONES TO DATE</span>
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#013E75]">
                {lang === 'zh' ? '本案出海五个物理卡点校验轨迹' : 'Project Splicing & Cargo Tracks'}
              </h3>
            </div>

            {/* Compact timeline milestones vertical */}
            <div className="space-y-4">
              {[
                { phase: 'PHASE 01', label: { zh: '客户图纸解构对齐', en: 'Original Blueprint Audit' }, status: 'PASS' },
                { phase: 'PHASE 02', label: { zh: '佛山CAD MTO 深化制图', en: 'Deep CAD & Material Takeoffs' }, status: 'PASS' },
                { phase: 'PHASE 03', label: { zh: '入驻大厂监造与 100% 拼接', en: 'Trial assembly & Multi-QA check' }, status: 'PASS' },
                { phase: 'PHASE 04', label: { zh: 'Sandy 督查单证重置出清', en: 'Seaport clearance & packing' }, status: 'PASS' },
                { phase: 'PHASE 05', label: { zh: '运抵现场远程/高级工人指导', en: 'Site structural install guiding' }, status: 'ACTIVE' }
              ].map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-start justify-between gap-4 text-xs font-mono">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[9px] text-[#8A96A3] leading-none bg-stone-100 px-1.5 py-0.5 uppercase">{step.phase}</span>
                    <div className="space-y-0.5">
                      <span className="font-serif text-stone-900 font-bold block leading-snug">{step.label[lang]}</span>
                    </div>
                  </div>
                  <span className={`text-[8px] font-mono font-bold tracking-widest px-2 py-0.5 shrink-0 ${
                    step.status === 'PASS' 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                      : 'bg-amber-50 text-[#F5B70A] border border-[#F5B70A]/30 animate-pulse'
                  }`}>
                    {step.status}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Action Estimate Engagement Widget Box */}
          <div className="bg-[#FAF8F5] border-[1.5px] border-dashed border-[#013E75]/20 p-6 text-center space-y-4 shadow-sm">
            <span className="text-[9px] font-mono tracking-widest text-[#F5B70A] uppercase block font-bold flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {lang === 'zh' ? '本案物料深化预算 24 小时报价保障' : '24HR SIMILAR SPEC ESTIMATION ASSURED'}
            </span>
            <p className="text-xs text-[#5C6E7F] leading-relaxed">
              {lang === 'zh' 
                ? '我们可针对本庄园级别主件、幕墙或是墙面板阻燃木作参数直接应用到您的图纸，协助您进行抗台风/耐候可行性预先核估。' 
                : 'Yuejie can immediately parse these structural specifications matching weather indices against your concept blueprint models.'}
            </p>
            <button 
              onClick={onOpenConsultation}
              className="w-full bg-[#013E75] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest py-3.5 hover:bg-[#F5B70A] hover:text-[#051524] transition-all cursor-pointer rounded-none animate-bounce"
            >
              {lang === 'zh' ? '申请类似案例可行性精细深度评估' : 'Inquire This Project Specifications'}
            </button>
          </div>

        </div>

      </section>

      {/* ==============================================================
          3.5 FACTORY PRE-ASSEMBLY & DUST-FREE SPECS SHOWCASE (BENTO GALLERY)
          ============================================================== */}
      <section className="w-full bg-[#FAF8F5] border-t border-stone-200 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 space-y-12">
          
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#F5B70A] bg-[#051524] px-3 py-1 inline-block font-bold uppercase">
              // EMPIRICAL PORT-RECORDS & FACTORY IMAGES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#013E75]">
              {lang === 'zh' ? (
                <>佛山总部实景预拼装、精磨切缘与大宗集配出海记录</>
              ) : (
                <>Foshan Trial Assembly, Advanced Joinery, & Seaport Packing Live Logbooks</>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-[#55697D] max-w-3xl leading-relaxed">
              {lang === 'zh' 
                ? '每一件材料在进入海运装载序列前，均在佛山超级工厂大板对账车间进行100%全比例空贴、试装、物理重载打压及100小时高浓度盐雾检测。下面为本案类似合规物料的实地品质追溯日志，可点击图像阅看技术注释。'
                : 'Prior to sea container dispatch, every custom element is laid flat and double-checked under strict laser positioning meters in Foshan. Click any real-life factory catalog image to check technical blueprints.'}
            </p>
          </div>

          {/* Bento Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'IMG-01',
                url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                title: { zh: '1:1 数码奢石大板水刀预拼套图', en: '1:1 CNC Luxury Slabs Vector Dry-lay Layout' },
                desc: { zh: '出厂物理大理石试贴校验，通过3D像素对账消除99%的大理石拼接色差，板材缝隙锁死在 0.15mm 以下。', en: 'Physical marble slabs dry-laying. Adjusts stone grains seamlessly to eradicate standard color variances.' }
              },
              {
                id: 'IMG-02',
                url: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=800&q=80',
                title: { zh: '名贵木作抗潮高强多层拼缝加工', en: 'Bespoke Premium Timber Joint Inspection' },
                desc: { zh: '采用全自动气密热弯机进行边线包边封存，木器接缝零间隙，具有海外高湿地区的超长耐候抗形变保证。', en: 'Edge band vacuum lock. Ensures anti-humidity properties appropriate for Caribbean or coastal estates.' }
              },
              {
                id: 'IMG-03',
                url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
                title: { zh: '系统隔音多腔门窗高刚性框合测验', en: 'Fenestration Windload Chamber Testing' },
                desc: { zh: '航空级阻气低辐射不锈钢五金埋入，经过15级强台风级压力箱密封性严苛测试，保证风沙海水无法向室内沁湿。', en: 'Heavy multi-chamber vacuum structure windows tested inside simulated windload stress rooms to defy offshore hurricanes.' }
              },
              {
                id: 'IMG-04',
                url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
                title: { zh: '重型港口集装箱免熏蒸重力配载防碎装卸', en: 'Secured Marine Container Stowage' },
                desc: { zh: '由 Sandy Chen 关务总监直接监督重心防震锚固，采用重载高震能木架配合进口发泡缓冲，实现20天海运零破碎记录。', en: 'Supervised by Sandy. Solid anti-shock timber framing locks elements to secure direct freight transits without fracture.' }
              }
            ].map((imgItem) => (
              <div 
                key={imgItem.id}
                onClick={() => setPreviewImage(imgItem)}
                className="bg-white border border-stone-200 p-3 shadow-xs overflow-hidden group cursor-pointer hover:border-[#013E75] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden shrink-0">
                  <img 
                    src={imgItem.url} 
                    alt={imgItem.title[lang]} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  
                  <span className="absolute bottom-3 left-3 text-[9px] font-mono text-[#F5B70A] bg-[#051524] px-2.5 py-0.5 border border-white/5 uppercase">
                    {imgItem.id} // VERIFIED QA
                  </span>
                </div>

                <div className="p-4 pt-5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-xs font-bold text-[#013E75] group-hover:text-[#F5B70A] transition-colors leading-snug">
                      {imgItem.title[lang]}
                    </h4>
                    <p className="text-[10px] text-[#55697D] leading-relaxed text-justify line-clamp-3">
                      {imgItem.desc[lang]}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-[#013E75] font-bold uppercase pt-2.5 border-t border-stone-100 flex items-center gap-1.5 self-start group-hover:text-[#F5B70A]">
                    <span>{lang === 'zh' ? '查看技术注释' : 'VIEW DETAIL NOTES'}</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==============================================================
          3.6 LIGHTBOX DIALOG OVERLAY (IF SELECTED)
          ============================================================== */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-[#051524]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="bg-[#FAF8F5] border border-white/10 w-full max-w-2xl overflow-hidden relative text-[#051524] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 bg-[#051524] text-white hover:bg-[#F5B70A] hover:text-[#051524] p-2 transition-all z-20 cursor-pointer shadow-md rounded-none border-0"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Exp Image wrapper */}
            <div className="w-full aspect-[16/10] bg-stone-900 relative">
              <img 
                src={previewImage.url} 
                alt={previewImage.title[lang]} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051524]/90 via-black/10 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1.5 text-white">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#F5B70A] font-bold">
                  // REAL REGISTER FIELD PHOTOGRAPHY
                </span>
                <h3 className="font-serif text-base sm:text-lg font-normal text-white">
                  {previewImage.title[lang]}
                </h3>
              </div>
            </div>

            {/* Notes */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="text-[10px] font-mono text-[#8A96A3] tracking-widest uppercase">
                  DOCKET REGISTER: ID-QA_{previewImage.id}
                </span>
                <span className="text-[9px] font-mono bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 font-bold uppercase">
                  PHYSICAL QUALITY APPROVED
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4A5B6D] leading-relaxed text-justify">
                {previewImage.desc[lang]}
              </p>

              <div className="pt-4 flex justify-end">
                <button 
                  onClick={() => setPreviewImage(null)}
                  className="bg-[#013E75] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest py-3 px-6 hover:bg-[#F5B70A] hover:text-[#051524] transition-all cursor-pointer rounded-none border-0"
                >
                  {lang === 'zh' ? '关闭检视' : 'CLOSE SPECIFICATION'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ==============================================================
          4. RECOVERY NAVIGATION GATEWAY FOOTNOTE BANNER
          ============================================================== */}
      <section className="w-full bg-[#051524] text-white py-16 border-t border-[#F5B70A]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-justify md:text-left">
            <span className="text-[9px] font-mono text-[#F5B70A] tracking-wider block">// ESCAPE REDIRECT</span>
            <h4 className="font-serif text-lg font-light leading-snug">
              {lang === 'zh' ? '探索更多顶奢豪宅与外贸大宗交付日志' : 'Explore Yuejie’s Complementary Empirical Project Records'}
            </h4>
          </div>
          
          <button
            onClick={onBackToList}
            className="border border-[#FAF8F5]/30 hover:border-white text-xs font-mono tracking-widest text-white transition-all py-3.5 px-8 flex items-center justify-center gap-2 rounded-none cursor-pointer hover:bg-white/5 shrink-0"
          >
            <span>{lang === 'zh' ? '返回全案案例卷' : 'Return to Works List'}</span>
            <ChevronRight className="w-4 h-4 text-[#F5B70A]" />
          </button>
        </div>
      </section>

    </div>
  );
}

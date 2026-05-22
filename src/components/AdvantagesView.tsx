/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { ArrowUpRight, Sparkles, FileText, CheckCircle2, ShieldAlert, Award, Package, Anchor, HelpCircle } from 'lucide-react';

interface AdvantagesViewProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export default function AdvantagesView({ lang, onOpenConsultation }: AdvantagesViewProps) {
  return (
    <div className="animate-fade-in w-full">
      {/* 1. HERO MANIFESTO Banner */}
      <section className="w-full bg-ivory border-b border-prussian/10 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 border border-prussian/20 bg-[#F6E4C8]/50 px-3.5 py-1.5 text-[10px] tracking-[0.25em] uppercase text-prussian font-semibold rounded-sm">
              <Award className="w-4 h-4 text-versace" />
              <span>{lang === 'zh' ? '悦捷高定质量宣言' : 'YUEJIE FULFILLMENT PROMISE'}</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-prussian leading-[1.12]">
              {lang === 'zh' ? (
                <>
                  <span className="block">以佛山数智矩阵</span>
                  <span className="block mt-2 text-versace font-light italic">重塑全球大宗高定规范。</span>
                </>
              ) : (
                <span className="block">Foshan Intelligent Sourcing: Redefining Ultra-Luxury Standards.</span>
              )}
            </h1>
            
            <p className="text-base sm:text-lg text-indigoMuted font-light leading-relaxed max-w-3xl">
              {lang === 'zh' ? (
                '悦捷不只是采购商，更是全球空间设计师在亚太区的建筑主材落地总署。我们完美整合大湾区最为严苛的工业制造集群，以数字化CAD深化、三道实物审查闸口与双语清关保障，消除地缘错位，保障零失误交付。'
              ) : (
                'Yuejie stands not merely as a buyer, but as the supreme architectural fulfillment agency in the Asia-Pacific. We converge primary Chinese industrial cluster dynamics with bespoke structural engineering audits to secure frictionless global millwork delivery.'
              )}
            </p>
          </div>

          {/* Quick Metrics Panel */}
          <div className="lg:col-span-4 bg-[#0D233A] text-ivory p-8 border border-white/5 relative shadow-lg">
            <div className="absolute top-0 right-0 w-16 h-[2.5px] bg-versace"></div>
            <div className="space-y-6">
              <h3 className="font-serif text-sm font-semibold tracking-widest text-versace uppercase font-mono">
                [ SERVICE LEVEL METRICS ]
              </h3>
              
              <div className="space-y-4 font-mono text-xs text-stoneWarm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>MTO STRUCTURAL ERROR</span>
                  <span className="text-white font-medium">&lt;0.5mm</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>PRE-SHIP ASSEMBLY RATE</span>
                  <span className="text-white font-medium">100% SECURED</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>CUSTOMS CLEARANCE RATIO</span>
                  <span className="text-white font-medium">99.8% FLUSH</span>
                </div>
                <div className="flex justify-between">
                  <span>GLOBAL LOG SUPPLY AXIS</span>
                  <span className="text-white font-medium">SHENZHEN / HK / GZ</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. THREE COMPREHENSIVE INDUSTRIAL DATA BLOCKS */}
      <main className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-24 space-y-32">
        
        {/* DATA BLOCK 01: 1:1 Precision Material Matching and CAD Shop Drawings */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          <div className="lg:col-span-1 border-t-2 border-prussian pt-3 font-serif text-[18px] font-bold text-prussian tracking-widest font-mono">
            01/
          </div>
          
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-stoneWarm block">
                [ DETAILED BLUEPRINT CONSOLIDATION ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-prussian leading-tight tracking-tight">
                {lang === 'zh' ? (
                  '1:1 精准选材与深化设计，将概念落地为严丝合缝的物理奇迹。'
                ) : (
                  'Bespoke 1:1 Spatial Engineering: Translating Global Blueprints into Flawless Structural Realism.'
                )}
              </h2>
              <div className="w-12 h-[2px] bg-versace"></div>
            </div>

            <div className="text-sm text-indigoMuted font-light space-y-6 leading-relaxed text-justify">
              <p>
                {lang === 'zh' ? (
                  '悦捷坚信，优秀的全球豪宅设计不应因地理区隔而在最终呈现上打折扣。我们派驻经验极其丰富的建筑结构深化工程师，无缝对接海外客户或其当地合作设计事务所的原始创意渲染图。通过高精细度CAD建模与全品类材质对应验证，将原始建筑图纸精准重构为极长跨度的断桥系统铝合金门窗剖面图，以及精确到毫米级的三维固装家私节点施工图。'
                ) : (
                  'At Yuejie, we believe outstanding spatial aesthetics should never suffer from geographical dilution. Our in-house technical directors rigorously decode original architectural renderings submitted by global design practices, restructuring raw outlines into granular shop drawings and extremely exhaustive 1:1 millwork construction templates.'
                )}
              </p>
              
              <p>
                {lang === 'zh' ? (
                  <>
                    我们的核心优势在于精准输出<strong>材料配置工程量清单（MTO）</strong>。悦捷将繁杂的别墅立面主材、岩板纹路拼花、卫浴五金配置完全结构化，锁定每项产品的工业工艺代码、饰面漆面编号以及防潮等级。这种将“深化方案”与“排产数据”打通的精细化模式，从源头确保佛山顶级大厂出产的主材能100%适配原址工地，让海内外建筑物理公差无限逼近于零。
                  </>
                ) : (
                  'Our competitive edge rests on producing a highly scientific, structured Material Take-Off (MTO). This digital log registers premium veneer catalog numbers, high-wind load glazing tolerances, water-sealing thresholds, and custom stone book-matching vectors to ensure an absolute cross-border match with zero dimensional discrepancy.'
                )}
              </p>
            </div>

            {/* Custom Interactive specifications sub-table */}
            <div className="bg-ivory border border-prussian/10 p-6 space-y-4">
              <h4 className="font-serif text-sm font-semibold text-prussian tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-versace" />
                <span>{lang === 'zh' ? '【1:1 深化工具链与材料数据库】' : '[Shop Drawing & Material Database Specs]'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-indigoMuted">
                <div className="space-y-1">
                  <span className="font-bold text-pblack block">CAD Engine:</span>
                  <span>AutoCAD Pro / SolidWorks Heavy Custom</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-pblack block">Precision Metric:</span>
                  <span>Global Architectural Tolerance ≤0.5mm</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-pblack block">Stone Tracking:</span>
                  <span>High-Res Digital Slabs Matching Matrix</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-pblack block">Glazing Loads:</span>
                  <span>Heavy-Spec AS-2047 & US-AAMA Standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Graphic Showcase Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="border border-prussian/10 p-2 bg-ivory shadow-lg relative group">
              <div className="aspect-[4/5] bg-stone-900 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
                  alt="Yuejie Bespoke CAD Material Calibration" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-out"
                  referrerPolicy="referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-pblack/90 p-4 text-ivory text-xs border-l-2 border-versace font-mono">
                  <p className="text-versace font-bold">[ PHYSICAL ACCREDITATION ]</p>
                  <p className="font-sans text-stoneWarm text-[10px] mt-0.5">
                    {lang === 'zh' ? '1:1 原生建筑三维节点校准校验' : '1:1 Architectural node coordinates validation'}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-versace/20 z-[-1]"></div>
          </div>

        </section>

        {/* DATA BLOCK 02: Triple-Tier Quality Assurance Framework */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative pt-12 border-t border-prussian/10">
          
          <div className="lg:col-span-1 border-t-2 border-prussian pt-3 font-serif text-[18px] font-bold text-prussian tracking-widest font-mono">
            02/
          </div>

          {/* Left illustration graphic on large screens */}
          <div className="lg:col-span-5 relative order-last lg:order-none mt-6 lg:mt-0">
            <div className="border border-prussian/10 p-2 bg-ivory shadow-lg relative group">
              <div className="aspect-[4/5] bg-stone-900 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" 
                  alt="QA Engineering Team Embedment" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-out"
                  referrerPolicy="referrer"
                />
                <div className="absolute top-4 right-4 bg-prussian text-versace px-3 py-1 text-[9px] tracking-widest font-mono font-bold">
                  QA CRITICAL REPORT SECURED
                </div>
              </div>
            </div>
            <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-prussian/10 z-[-1]"></div>
          </div>
          
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-stoneWarm block">
                [ SYSTEMATIC AUDITING AND VERIFICATION FLOWS ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-prussian leading-tight tracking-tight">
                {lang === 'zh' ? (
                  '三道严苛质检体系，以独立的非工厂主权审核隔离交付风险。'
                ) : (
                  'Triple-Tier Quality Assurance Architecture: Enforcing Independent Sourcing Integrity.'
                )}
              </h2>
              <div className="w-12 h-[2px] bg-versace"></div>
            </div>

            <div className="text-sm text-indigoMuted font-light space-y-6 leading-relaxed text-justify">
              <p>
                {lang === 'zh' ? (
                  '大湾区的生产大厂虽然设备先进，但往往在出口高标准服务意识上存在局限。为此，悦捷建立了一支完全独立于工厂质检部门之外的悦捷督战QA团队，建立了严格的三阶段数智化审校流程：'
                ) : (
                  'While manufacturing firms in Foshan possess heavy industrial capacity, they frequently fall short of premium service awareness. Yuejie bridges this by maintaining a fully autonomous, factory-independent, embedded QA agency applying three rigorous checkpoints:'
                )}
              </p>
              
              {/* Process Cards with custom index counters */}
              <div className="space-y-4 font-sans text-xs">
                
                <div className="bg-[#FAF8F5] p-5 border-l-2 border-[#013E75] hover:bg-beige/30 transition-colors">
                  <div className="flex justify-between items-center text-pblack font-semibold mb-1">
                    <span>STAGE 01: {lang === 'zh' ? '原材级高标含水防裂初检' : 'Raw Materials Grading'}</span>
                    <span className="text-stoneWarm font-mono text-[10px] bg-white/60 px-1.5 border border-prussian/5">[MTO START]</span>
                  </div>
                  <p className="text-indigoMuted font-light">
                    {lang === 'zh' 
                      ? '在工厂排产前，QA专家亲临生产库房，采用高精超声波无损测厚仪和含水分红线红外测试仪，深度测试大板、实木条以及断桥铝板配方硬度，直接从上游拉闸，剔除不合规散料。' 
                      : 'Before production, physical timber moisture levels, alloy hardness indices, and stone internal micro-cracks are analyzed via ultrasonic scanning, terminating sub-standard batches.'}
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-5 border-l-2 border-[#013E75] hover:bg-beige/30 transition-colors">
                  <div className="flex justify-between items-center text-pblack font-semibold mb-1">
                    <span>STAGE 02: {lang === 'zh' ? '中段全周期精细化拼接抽格' : 'Mid-Stage Joinery Validation'}</span>
                    <span className="text-stoneWarm font-mono text-[10px] bg-white/60 px-1.5 border border-prussian/5">[MILL WORK]</span>
                  </div>
                  <p className="text-indigoMuted font-light">
                    {lang === 'zh' 
                      ? '在开槽、拼花、岩板背网贴膜等关键工艺中段，对材料拼接物理公差进行全面咬合，进行重压受载模拟及防水密封断桥模拟，预防海外极端工况下的渗漏。' 
                      : 'During milling, routering, and surface lacquering, we enforce physical load simulator checks and weather-resistance tests to counter tropical leaks or desert sandstorms.'}
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-5 border-l-2 border-[#013E75] hover:bg-beige/30 transition-colors">
                  <div className="flex justify-between items-center text-pblack font-semibold mb-1">
                    <span>STAGE 03: {lang === 'zh' ? '出货前 100% 物理拼装与视讯报告' : '100% Pre-Shipping Mock Build'}</span>
                    <span className="text-[#F5B70A] font-mono text-[10px] bg-[#051524] px-1.5 font-bold">[QA EXCEL]</span>
                  </div>
                  <p className="text-indigoMuted font-light">
                    {lang === 'zh' 
                      ? '在集货装载前，所有定制家私柜门、高端护墙、门窗，均送达悦捷中转仓库进行 1:1 完全实拼。校准合页开角、抽屉推拉回弹，拍摄带有精密角度量度的高清视频提供给尊属客户。' 
                      : 'Every customized millwork casing, walnuted panel grid, and grand structural door is fully test-erected at our terminal. We measure hinge alignments and issue high-definition visual reports before packing.'}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* DATA BLOCK 03: Elite Global Packing & Customs Compliance */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative pt-12 border-t border-prussian/10">
          
          <div className="lg:col-span-1 border-t-2 border-prussian pt-3 font-serif text-[18px] font-bold text-prussian tracking-widest font-mono">
            03/
          </div>
          
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-stoneWarm block">
                [ SHIPMENT COMPLIANCE & INTERNATIONAL LOGISTICS ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-prussian leading-tight tracking-tight">
                {lang === 'zh' ? (
                  '重型重防震加固装箱与敏捷清关，Sandy 团队保障全球顺畅秒通关。'
                ) : (
                  'Elite Global Packing & Fulfillment Compliance: Frictionless Ports Customs Clearance.'
                )}
              </h2>
              <div className="w-12 h-[2px] bg-versace"></div>
            </div>

            <div className="text-sm text-indigoMuted font-light space-y-6 leading-relaxed text-justify">
              <p>
                {lang === 'zh' ? (
                  '名贵奢石铺贴材料和特种低辐射幕墙玻璃属于极易破碎的贵金属部件，最忌海运的频繁受震颠簸。悦捷严格遵守全球免重熏蒸重型钢边木箱封闭包装要求完成护垫加塞。我们在 10,000㎡ 广州与佛山两大集货总署，对各分散大厂输出的橱柜、奢石岩板、系统窗散货进行集中。根据轻货在上、多级地重在底的严密的重心规则，统一编制集装箱拼合配平方案。'
                ) : (
                  'Fragile masonry elements and heavy sliding glass frameworks demand immaculate logistical security before enduring sea voyages. Yuejie executes custom engineered heavy timber crating featuring internal shock cushioning to counter motion friction. Product pallets compile inside our 10,000㎡ terminal, managed via dynamic QR asset codes ensuring ideal loading stacking logic.'
                )}
              </p>
              
              <p>
                {lang === 'zh' ? (
                  <>
                    除此之外，跨境大宗建材查验率居高不下的主因是HS税则归类不清。为此，悦捷国际贸易团队由<strong>拥有十余年进出口资深履约大咖 Sandy 领衔</strong>。对海运通函、提单（B/L）、装箱货柜单（Packing List）、国际商会发票进行层层对齐。无缝满足美标、中东SASO、欧标化学防虫规范，帮您避开冗长低效的地方进口抽检、规避仓储滞退成本，保障货物快速放行进入工地。
                  </>
                ) : (
                  'Furthermore (spearheaded by international trade expert Sandy), we construct flawless customs-compliant manifest matrices and HS-code alignments matching individual destination ports in the Americas, Middle East, Australia, and ASEAN. This meticulous compilation guarantees zero administrative hold-ups and rapid container discharge directly to your local jobsite.'
                )}
              </p>
            </div>

            {/* Custom Logistical Specifications table */}
            <div className="bg-[#0D233A] text-paperSilver p-6 space-y-3 font-mono text-xs border border-white/5 shadow-inner">
              <p className="text-versace font-bold flex items-center gap-1">
                <Anchor className="w-4 h-4 text-versace" />
                <span>[ LOGISTICAL DEPLOYMENT AUDITING SQUAD ]</span>
              </p>
              <ul className="space-y-2 text-[11px] text-stoneWarm leading-relaxed list-none pl-0">
                <li className="flex gap-2">
                  <span className="text-white">▪ Cargo Crating:</span> 
                  <span>Structural zero-sag steel-edge timber boxes + 20mm high-density inner foam wrapping.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white">▪ Hub Efficiency:</span> 
                  <span>Digital barcode aggregation across our 10,000㎡ transit terminals.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white">▪ Lead Compliance:</span> 
                  <span>Direct US FDA forestry certificate mapping, AUD AQIS biosealing, clean HS database mapping.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white">▪ Dispatch Routes:</span>
                  <span>Direct container lines loading from Shenzhen, Guangzhou, and Hong Kong Deep Ports.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right image frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="border border-prussian/10 p-2 bg-ivory shadow-lg relative group">
              <div className="aspect-[4/5] bg-stone-900 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
                  alt="Yuejie Container Ocean Freight Logistics" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-out"
                  referrerPolicy="referrer"
                />
                <div className="absolute bottom-4 right-4 left-4 bg-pblack/90 p-4 text-ivory text-xs border-r-2 border-versace font-mono">
                  <p className="text-versace font-bold">[ SHIPPED TO MASTERPORTS ]</p>
                  <p className="font-sans text-stoneWarm text-[10px] mt-0.5">
                    {lang === 'zh' ? '多国集港海运中 · 实时跟单状态已联云端' : 'Multi-port consignments dispatching - Live status active'}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-versace/20 z-[-1]"></div>
          </div>

        </section>

      </main>

      {/* 3. IMPECCABLE CALL-TO-ACTION BLOCK */}
      <section className="w-full bg-[#0D233A] text-ivory py-20 px-6 lg:px-16 text-center border-t border-b border-versace/20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-48 h-48 bg-prussian/5 rounded-full -translate-x-24 -translate-y-24"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs tracking-[0.3em] uppercase text-versace font-bold block">
            [ SECURE COMPREHENSIVE LANDING BLUEPRINTS ]
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide">
            {lang === 'zh' ? '预约悦捷，体验完美的全案主材交付之旅。' : 'Experience Flawless Transnational Project Commissioning.'}
          </h3>
          <p className="text-xs sm:text-sm text-stoneWarm max-w-2xl mx-auto font-light leading-relaxed">
            {lang === 'zh' ? (
              '无论是私人庄园业主、商业楼宇工务团队，还是海外建材批发进口商，我们都将在24小时内配置对应的中英双语技术经理，为您一键锁定深化方案。'
            ) : (
              'Whether you represent an UHNW private villa project, a commercial real estate group, or a specialized merchant importer, Yuejie assigns a bilingual technician, delivering deep estimations within a 24-Hour window.'
            )}
          </p>
          <div className="pt-6">
            <button 
              onClick={onOpenConsultation}
              className="inline-block bg-versace text-pblack text-xs font-semibold uppercase tracking-widest py-4 px-10 hover:bg-white hover:text-pblack transition-all duration-300 shadow-md cursor-pointer font-sans rounded-none"
            >
              <strong>
                {lang === 'zh' ? '点此进入方案定制中心' : 'Initialize Proposal Document Now'}
              </strong>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

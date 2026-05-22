/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavItem, AdvantageItem, SegmentItem, PortfolioItem, RoadmapStep, LocalizedString } from './types';

export const APP_NAME: LocalizedString = {
  zh: 'YUEJIE BESPOKE 悦捷企业服务',
  en: 'YUEJIE BESPOKE SERVICES'
};

export const NAV_ITEMS: NavItem[] = [
  { id: '#hero', label: { zh: '首页', en: 'Home' } },
  { id: '#advantages', label: { zh: '核心优势', en: 'Advantages' } },
  { id: '#segments', label: { zh: '业务模块', en: 'Segments' } },
  { id: '#portfolio', label: { zh: '案例展示', en: 'Works' } },
  { id: '#about', label: { zh: '关于我们', en: 'About' } }
];

export const HERO_CONTENT = {
  badge: {
    zh: '墅式人居 · 全案大成',
    en: 'Ultra-Luxury Villa Integration'
  },
  title1: {
    zh: '悦捷高定：重塑全球',
    en: 'YUEJIE BESPOKE: Redefining'
  },
  title2: {
    zh: '墅式人居的线条美学。',
    en: 'Architectural Aesthetics of Global Luxury Living.'
  },
  description: {
    zh: '立足中国全品类建材之都佛山，我们打通了高端私人空间全案深化设计、极致私属定制家具，与工业级大宗顶级建材集成出口的完整供应链闭环。',
    en: 'Rooted in Foshan\'s world-class architectural manufacturing hub, we orchestrate an elite ecosystem seamlessly blending high-end spatial design, hyper-customized millwork, and full-scale premium export consolidation.'
  },
  primaryBtn: {
    zh: '预约尊荣全案方案',
    en: 'Initiate Bespoke Project'
  },
  secondaryBtn: {
    zh: '浏览外贸交付通函',
    en: 'Review Project Portfolio'
  },
  manifestTag: {
    zh: 'Current Manifest',
    en: 'Current Manifest'
  },
  manifestTitle: {
    zh: '马来西亚兰卡威 1500㎡ 顶奢庄园',
    en: 'The Langkawi 1500㎡ Terradisi Estate'
  }
};

export const LIVE_FOOTPRINTS: LocalizedString[] = [
  {
    zh: '【交付足迹】 马来西亚兰卡威 1500㎡ 顶奢独栋度假别墅主材精细化集货装运中 | 美国迈阿密海景别业高定岩板与幕墙系统海运清关完成。',
    en: '[LIVE TRACKING] Langkawi, Malaysia: 1,500㎡ Oceanfront Villa structural material consolidation active in Foshan. | Miami, USA: Bespoke stone matrix & facade frameworks successfully cleared custom port.'
  },
  {
    zh: '【清关动态】 迪拜朱美拉 2200㎡ 极简豪宅外墙干挂陶板与Low-E幕墙系统于杰贝阿里港顺利结关放行，进入现场精细化定位安装阶段。',
    en: '[CLEARANCE UPDATE] Jumeirah, Dubai: 2,200㎡ minimalist mansion facade system has completed clearance at Jebel Ali Port, physical site alignment active.'
  },
  {
    zh: '【装运就绪】 澳大利亚墨尔本 850㎡ 森林平墅高定全屋胡桃木饰面板及静音隐形门系统，已于佛山悦捷10,000㎡集货仓完成第二轮QA拼装抽检。',
    en: '[SHIPPING DISPATCH] Melbourne, Australia: 850㎡ forest estate luxury walnut joinery and silent hidden doors secured 100% QA checks at Foshan depot.'
  }
];

export const SEC2_CONTENT = {
  sectionLabel: '01 / CAPABILITIES',
  title: {
    zh: '打破地缘壁垒，铸就完美交付。',
    en: 'Bridging Borders with Flawless Execution.'
  }
};

export const ADVANTAGES: AdvantageItem[] = [
  {
    num: '01.',
    title: {
      zh: '1:1 精准选材与深化设计',
      en: '1:1 Spatial Materialization'
    },
    description: {
      zh: '悦捷拒绝流水线式的外贸拼凑。我们派驻资深建筑设计师精准对接海外原始图纸，将概念转化为1:1节点施工图与高精细度材料配置单（MTO），确保佛山工厂定制出产的尺寸与海外现场100%严丝合缝。',
      en: 'We reject generic procurement. Our senior architectural consultants transform cross-border conceptual blueprints into 1:1 millwork construction details and highly meticulous Material Take-Offs (MTO), ensuring zero dimensional error upon field arrival.'
    }
  },
  {
    num: '02.',
    title: {
      zh: '三道严苛数智化质检体系',
      en: 'Triple-Tier Quality Assurance'
    },
    description: {
      zh: '依托佛山顶级大厂供应链，我们建立独立于工厂之外的悦捷QA督战队。实施原材料初检、中段精细化组装抽检、以及出厂前100%实物预拼装全检。每批货品均配有一套包含高清影像的高端技术合规质检报告。',
      en: 'Leveraging the elite apex of Foshan’s tier-1 manufacturing, our independent QA division enforces automated raw material grading, mid-stage assembly metrics, and a full 100% pre-shipping trial assembly, complete with digital transparency reports.'
    }
  },
  {
    num: '03.',
    title: {
      zh: '顶级外贸装箱与单证履约',
      en: 'Compliant Global Logistics'
    },
    description: {
      zh: '针对大宗高端定制建材与名贵家具，全面采用国际重型免熏蒸木箱进行多重加固包装。由履约专家 Sandy 领衔精准编制无瑕疵的合规装箱清单（Packing List）与清关文件，保障全球任意母港顺畅秒清关。',
      en: 'For vulnerable, high-value custom items, we apply heavily reinforced sea-freight timber crating. Orchestrated by our logistics specialist Sandy, highly calibrated Packing Lists and multi-national custom document matrixes guarantee friction-free clearance.'
    }
  }
];

export const SEC3_CONTENT = {
  sectionLabel: '02 / CORE OPERATIONS',
  title: {
    zh: '全案双引擎：大师级空间方案与顶奢材料枢纽',
    en: 'Dual Engines: Masterful Spatial Curation & Luxury Material Supply Hub'
  },
  sub: {
    zh: '悦捷完美融合了“尖端事务所的设计美学”与“国际大宗贸易的供应链体量”，为全球顶级地产提供高难度的一站式落地保障。',
    en: 'Yuejie bridges the architectural nuance of an elite studio with the massive bulk infrastructure of a multinational trading powerhouse.'
  }
};

export const SEGMENTS: SegmentItem[] = [
  {
    num: '01',
    title: {
      zh: '私属空间整体规划与固装木作定制',
      en: 'Bespoke Interior Design & High-End Custom Millwork'
    },
    description: {
      zh: '我们专注于超大平层、独栋别墅的硬装线条美学重构与软装整体光影搭配。通过极具张力的几何色块与细实线条平衡空间，定制覆盖全屋艺术大理石拼花、天然高档木饰面板、隐形门系统以及高端固装橱柜衣翼。每一件产品均是根据主人的生活方式量身定制的孤品。',
      en: 'We engineer high-end millwork, structural paneling, artisan stonework, and soft-furnishing ambiances. Embracing linear geometry and tone contrast, we turn raw concepts into master-level fixed furniture and layout ecosystems matching the owner’s custom lifestyle.'
    },
    specLabel: { zh: 'SPEC: BESPOKE CARPENTRY', en: 'SPEC: BESPOKE CARPENTRY' },
    specValue: { zh: 'MATERIAL: WALNUT/STONE', en: 'MATERIAL: WALNUT/STONE' }
  },
  {
    num: '02',
    title: {
      zh: '顶奢工程建材一站式集成出口供应链',
      en: 'Premium Architectural Materials Integration & Global Export'
    },
    description: {
      zh: '整合大湾区最为严苛的建材工业供应链，为海内外地产工程提供全品类全供应链主材一站式打包交付。涵盖超大门幅高防风压断桥铝系统门窗、顶奢奢石岩板、高档卫浴五金、全屋定制陶瓷。依托悦捷 10,000㎡ 数字化现代化集货中转仓，实现多工厂零散货品统一拼柜、统一出厂全检、统一申报出口，极大缩减客户海外周期及沟通成本。',
      en: 'Consolidating the peak of China’s building asset clusters, we supply heavy-spec thermal-break aluminum glazing systems, custom luxury sintering tile matrices, and premium sanitary lines. Managed within our 10,000㎡ digital consolidation hub, multi-factory orders are centralized, audited, and shipped as one unified cargo asset.'
    },
    specLabel: { zh: 'PORT: FOSHAN SUPPLY', en: 'PORT: FOSHAN SUPPLY' },
    specValue: { zh: 'LOGISTICS: GLOBAL CONTAINER', en: 'LOGISTICS: GLOBAL CONTAINER' }
  }
];

export const SEC4_CONTENT = {
  sectionLabel: '03 / REALIZED PORTFOLIO',
  title: {
    zh: '全球墅式回响 · 真实工程日志',
    en: 'Global Resonance: Empirical Project Journals'
  }
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    caseId: 'CASE 01',
    tag: { zh: 'LIVE / 现场集货中', en: 'LIVE / CONSOLIDATING' },
    title: {
      zh: '马来西亚兰卡威 1500㎡ 独栋海景庄园全案定制',
      en: 'The Langkawi Terradisi Oceanfront Estate Full Customization'
    },
    description: {
      zh: '现代热带建筑美学，采用悦捷超大跨度特高防风压系统断桥门窗（350㎡），全客餐厅对花天然奢石岩板（520㎡），以及定制全防潮高定整装固装木作系统。',
      en: 'Modern tropical aesthetics featuring Yuejie heavy thermal-break glazing (350㎡), bespoke bookmatched luxury sintered slabs (520㎡), and absolute humidity-resistant luxury millwork systems.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: { zh: '建筑面积 / 风格', en: 'Area / Style' }, value: '1,500㎡ / Minimalist Tropical' },
      { label: { zh: '货品拼合装箱', en: 'Consodilation Duration' }, value: '45 Days Yuejie Depot' }
    ]
  },
  {
    caseId: 'CASE 02',
    tag: { zh: 'COMPLETED / 交付交付', en: 'COMPLETED / DELIVERED' },
    title: {
      zh: '美国迈阿密 1200㎡ 现代主义海岸别业全屋建材出口',
      en: 'The Miami Waterfront 1200㎡ Estate Full-Scale Export'
    },
    description: {
      zh: '极致开放式高留白光影空间。悦捷深化设计团队输出大板拼花技术方案，高标准供应全屋抗飓风美标认证门窗五金、定制无拉手极简固装柜体。',
      en: 'Maximized lookbook breathing room. Yuejie\'s engineering division produced complex stone layouts, supplying heavy US-certified impact-resistant window systems and seamless hidden handle storage.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: { zh: '建筑面积 / 风格', en: 'Area / Style' }, value: '1,200㎡ / Contemporary Monolith' },
      { label: { zh: '海运与出关履约', en: 'Custom / Ocean Freight' }, value: '50 Days Ocean Transit FWD' }
    ]
  },
  {
    caseId: 'CASE 03',
    tag: { zh: 'ARCHIVED / 典藏足迹', en: 'ARCHIVED / HISTORIC' },
    title: {
      zh: '阿联酋迪拜 朱美拉极简豪宅外墙干挂与幕墙集成',
      en: 'Dubai Jumeirah Minimalist Mansion Structural Facade Hub'
    },
    description: {
      zh: '应对严酷极端高温多沙工况。高标准集成出口超高硬度全瓷质外墙干挂陶板、顶级高耐候耐紫外线五金系统及断桥LOW-E中空玻璃幕墙。',
      en: 'Designed for extreme thermal and sand stresses. Engineered and packed ultra-high density exterior architectural cladding panels, hyper UV-resistant hardware sets, and complex Low-E glass grids.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: { zh: '建筑面积 / 风格', en: 'Area / Style' }, value: '2,200㎡ / Sand-Resist Avant-Garde' },
      { label: { zh: '智造/集运工期', en: 'Lead Time' }, value: '35 Days Lean Manufacturing Control' }
    ]
  }
];

export const SEC5_CONTENT = {
  sectionLabel: '04 / WORKFLOW TIMELINE',
  title: {
    zh: '全链路交付轴：从概念深化到远程交付',
    en: 'End-to-End Fulfillment Timeline: Concept to Delivery'
  }
};

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    phase: 'PHASE 01',
    title: {
      zh: '原始图纸解构与需求对齐',
      en: 'Blueprint Deconstruction'
    },
    description: {
      zh: '与海外客户或其当地设计事务所深度无缝对接，剖析建筑空间的每一个立面、剖面，将别墅主人的生活细节、美学主张和特定区域政策完全拆解录入。',
      en: 'Engage directly with foreign clients or local architectural studios. Completely break down every wall elevation and structural outline to match the target lifestyle and regional custom regulations.'
    }
  },
  {
    phase: 'PHASE 02',
    title: {
      zh: '深化方案设计与精细化 MTO',
      en: 'Bespoke Materialization (MTO)'
    },
    description: {
      zh: '将方案具象化，输出针对大理石对花、整屋固装、断桥铝拼幅门窗的精确施工图。提供全面详尽的代码级材料配置工程量清单（MTO），锁定精准报价，杜绝隐形加价。',
      en: 'Draft explicit architectural shop-drawings for bookmatched masonry, fixed millwork, and glazing profiles. Generate a definitive multi-item Material Take-Off (MTO) to guarantee fixed cost bounds.'
    }
  },
  {
    phase: 'PHASE 03',
    title: {
      zh: '大厂供应链排产与三道质检',
      en: 'Lean Production Sourcing & QA Review'
    },
    description: {
      zh: '由悦捷直接向佛山及大湾区各品类一线大厂统一下达生产指令。在生产的关键时间节点派遣专属督战QA团队进行驻厂跟踪、100%全实物预组装调试，确保物理公差趋近于零。',
      en: 'Deploy explicit order vectors to tier-1 manufacturing clusters. Dispatch embedded QA engineers for raw testing and a absolute 100% full-scale trial assembly to force physical alignment tolerances close to zero.'
    }
  },
  {
    phase: 'PHASE 04',
    title: {
      zh: '重型加固装箱与合规清关海运',
      en: 'Smart Packing & Custom Clearance'
    },
    description: {
      zh: '货品进驻 10,000㎡ 悦捷集货仓。采用高强免熏蒸重型木箱分门别类加固封装。由专家 Sandy 编制完美对应的数字化装箱清单（Packing List），多厂零散建材统一拼柜发运，保障海外无阻通关。',
      en: 'Centralize items inside our 10,000㎡ depot. Package goods into individual ultra-heavy heavy timber crates. Spearheaded by our specialist Sandy, an absolute error-free digital packing list is prepared to guarantee clear, immediate port entry.'
    }
  },
  {
    phase: 'PHASE 05',
    title: {
      zh: '全球远程技术交付与安装指导',
      en: 'Global Remote Engineering Support'
    },
    description: {
      zh: '货物安全抵达客户工地后，悦捷提供图纸级、全天候高清晰度音视频远程安装指导指导。针对高端系统窗、复杂的墙面木饰板干挂，派遣高级工程人员提供全航线技术护航。',
      en: 'Upon container arrival at the site, Yuejie provides deep diagrammatic audio-visual installation guides. For ultra-complex masonry dry-hang systems or massive architectural glazing, technical masters oversee the process remotely.'
    }
  }
];

export const INVITATION_CONTENT = {
  badge: '[ THE ANNOUNCEMENT ]',
  title: {
    zh: '【盛会邀约】诚邀莅临 2026 年 7 月中国（广州）国际建筑装饰博览会',
    en: 'Join Us at China (Guangzhou) International Building Decoration Fair — July 2026'
  },
  description: {
    zh: '悦捷企业服务将在博览会设立奢华定制贵宾专厅，现场展示最新的空间设计美学方案与大宗出口建材硬核质检标准，期待与您共话极致人居。',
    en: 'Yuejie Bespoke will host an exclusive luxury pavilion showcasing our elite structural materials, custom millwork engineering, and automated QA framework. We welcome your global presence.'
  }
};

export const CONTACT_CONTENT = {
  sectionLabel: '05 / INQUIRY MASTER',
  title: {
    zh: '启动您的奢华高定私属项目。',
    en: 'Commission Your Global Bespoke Asset.'
  },
  description: {
    zh: '无论是跨国别墅业主的私属定制，还是高端建材进口商的大宗综合集采，悦捷全链路专家团队均将在24小时内给您最专业的深化答复。',
    en: 'Whether you are an ultra-high-net-worth estate owner or an elite global architectural materials importer, our comprehensive fulfillment division will respond with a completed analysis within 24 hours.'
  },
  infoEmail: 'business@yuejie.com',
  infoAddr: {
    zh: 'HQ Address: 中国 · 广东 · 佛山南海建材工业枢纽',
    en: 'HQ Address: China · Guangdong · Foshan Nanhai Architectural Hub'
  }
};

export const FOOTER_CONTENT = {
  copyright: {
    zh: '© 2026 佛山南海悦捷企业服务有限公司。保留所有权利。',
    en: '© 2026 Foshan Nanhai Yuejie Enterprise Service Co., Ltd. All Rights Reserved.'
  },
  links: [
    { label: 'Privacy Clause', url: '#hero' },
    { label: 'Engineering Standards', url: '#hero' },
    { label: 'Foshan Global Supply Axis', url: '#hero' }
  ]
};

const DEFAULT_VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const DISCOVERY_SORTER_LIVE_VIDEO_URL = '/videos/discovery-sorter-live-demo.mp4';
const DISCOVERY_SORTER_STABILITY_VIDEO_URL = '/videos/discovery-sorter-stability-demo.mp4';
const AI_VISION_PACKAGING_LINE_VIDEO_URL = '/videos/ai-vision-packaging-line.mp4';
const PRODUCTION_LINE_AI_VISION_EQUIPMENT_VIDEO_URL = '/videos/production-line-ai-vision-equipment.mp4';
const NEW_YELLOW_RIVER_VISION_SORTER_INTERVIEW_VIDEO_URL = '/videos/new-yellow-river-vision-sorter-interview.mp4';
const ARTICLE_PAGE_SIZE = 3;

const paginateArticleSections = (sections, pageSize = ARTICLE_PAGE_SIZE) =>
  sections.reduce((pages, section, index) => {
    const pageIndex = Math.floor(index / pageSize);

    if (!pages[pageIndex]) {
      pages[pageIndex] = {
        id: `page-${pageIndex + 1}`,
        title: `第 ${pageIndex + 1} 页`,
        sections: [],
      };
    }

    pages[pageIndex].sections.push(section);
    return pages;
  }, []);

const buildArticleSections = (paragraphs = [], bullets = []) => {
  const sections = [];

  if (paragraphs.length > 0) {
    sections.push({
      title: '核心看点',
      paragraphs,
    });
  }

  if (bullets.length > 0) {
    sections.push({
      title: '你可以重点关注',
      bullets,
    });
  }

  return sections;
};

export const discoveryCategories = [
  { id: 'all', name: '全部', icon: '🎬' },
  { id: 'review', name: '设备测评', icon: '⭐' },
  { id: 'vlog', name: '实拍Vlog', icon: '📹' },
  { id: 'tutorial', name: '使用教程', icon: '📚' },
  { id: 'trading', name: '设备买卖', icon: '💰' },
  { id: 'analysis', name: '行业分析', icon: '📊' },
];

export const discoverySortOptions = [
  { id: 'hot', name: '综合排序' },
  { id: 'latest', name: '最新发布' },
  { id: 'popular', name: '最多播放' },
  { id: 'liked', name: '最多点赞' },
];

const localDiscoveryEntries = [
  {
    id: 50,
    title: '2026AI视觉筛选系统厂家推荐：CCD工业视觉检测系统厂家精选',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '民崛资料库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=0F766E&color=fff',
    views: 188000,
    likes: 6200,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'analysis',
    tags: ['AI视觉', '厂家推荐', '选型参考'],
    comments: 318,
    type: 'article',
    readTime: '9分钟阅读',
    featured: true,
    summary: '围绕检测精度、处理速度和自学习能力梳理AI视觉筛选系统选型标准，适合作为方案初筛资料。',
    description: '文档从检测精度与稳定性、部署效率与易用性、场景适应性与算法积累三条主线，梳理2026年AI视觉筛选系统厂商选型的关键判断指标。',
    sections: buildArticleSections(
      [
        '资料指出，优秀AI视觉系统对划痕、缺料、异色等关键缺陷的检出率可达99.95%以上，误判率可控制在0.5%以下。',
        '面向高速产线，单次图像处理时间需要稳定在20-50毫秒以内，才能支撑每分钟数百件的在线检测节拍。',
      ],
      ['检测精度与稳定性', '处理速度与系统延迟', '少样本学习和换型迭代效率']
    ),
  },
  {
    id: 49,
    title: '机器视觉分拣机器人：食品工业的“火眼金睛”正加速普及',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '视频机械设备网',
    avatar: 'https://ui-avatars.com/api/?name=SP&background=DC2626&color=fff',
    views: 162000,
    likes: 5100,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'analysis',
    tags: ['食品分拣', '机器视觉', '机器人'],
    comments: 242,
    type: 'article',
    readTime: '8分钟阅读',
    featured: true,
    summary: '从食品分拣场景切入，解释机器视觉分拣机器人为何正在成为中央厨房、果蔬加工和预制菜产线的标配。',
    description: '文章聚焦食品工业中的机器视觉分拣机器人，覆盖高速识别、精准分流、数据追溯和产业链升级等多个维度。',
    sections: buildArticleSections(
      [
        '文中提到，新一代系统结合高速摄像、AI识别和多轴机械臂执行机构，可在毫秒级完成识别、判定和分拣全流程。',
        '多光谱成像、深度学习和高动态范围识别能力，让果蔬、坚果和肉类等不同食品场景的分级和异物检测更稳定。',
      ],
      ['食品加工线全检替代抽检', '高帧率工业相机和AI芯片需求增长', '算法+硬件+服务的一体化交付模式']
    ),
  },
  {
    id: 48,
    title: 'X射线检测与AI视觉复合，重构木片分选逻辑',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '中科光电',
    avatar: 'https://ui-avatars.com/api/?name=GK&background=1D4ED8&color=fff',
    views: 136000,
    likes: 4200,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'analysis',
    tags: ['X射线', 'AI视觉', '木片分选'],
    comments: 205,
    type: 'article',
    readTime: '7分钟阅读',
    featured: true,
    summary: '通过高低双能X射线与AI视觉融合方案，说明复杂杂质分选如何把橡胶、塑料、金属和石子识别精度拉到更高水平。',
    description: '资料面向人造板和木料加工场景，重点说明X射线检测与AI视觉复合方案在复杂杂质剔除中的工程价值。',
    sections: buildArticleSections(
      [
        '方案把高低双能X射线用于密度特征提取，再叠加高分辨率CCD和AI视觉进行表面形貌分析，通过多模态融合提升综合检出率。',
        '在10-60mm粒径和10-60t/h处理量范围内，设备通过带式布料结构和高速剔除设计兼顾了分选精度与产线吞吐量。',
      ],
      ['高低双能X射线检测体系', 'AI视觉与密度特征融合', '高速分选结构和定制化操作系统']
    ),
  },
  {
    id: 47,
    title: 'AI视觉检测机：赋能智能制造，铸就精准质检新标杆',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '新思鹿科技',
    avatar: 'https://ui-avatars.com/api/?name=XS&background=059669&color=fff',
    views: 118000,
    likes: 3900,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'tutorial',
    tags: ['AI检测', '质检自动化', '智能制造'],
    comments: 178,
    type: 'article',
    readTime: '10分钟阅读',
    featured: true,
    summary: '从采集、传输、分析到决策四个环节拆开讲清AI视觉检测机的工作链路，适合做入门型方案说明。',
    description: '文章系统介绍AI视觉检测机的原理、核心算法路径和质检效率提升逻辑，适合作为对外讲解资料。',
    sections: buildArticleSections(
      [
        '文档把AI视觉检测机拆成采集、传输、分析、决策四步闭环，强调工业相机、图像处理和AI算法的协同作用。',
        '边缘学习与深度学习两条技术路径分别适合轻量训练和复杂缺陷识别，方便按预算和场景选择方案。',
      ],
      ['图像采集与预处理链路', '边缘学习和深度学习的适配场景', '检测、分拣、追溯的一体化闭环']
    ),
  },
  {
    id: 46,
    title: '视觉筛选机的主要技术有哪些？',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '民崛资料库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=7C3AED&color=fff',
    views: 96000,
    likes: 3200,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'tutorial',
    tags: ['高光谱成像', 'AI算法', '精密传动'],
    comments: 144,
    type: 'article',
    readTime: '6分钟阅读',
    featured: true,
    summary: '围绕成像系统、算法模型、精密传动和多维控制四块技术底座，解释视觉筛选机为什么能在电子元件场景稳定工作。',
    description: '资料用较通俗的方式讲清了视觉筛选机内部几大关键模块，适合作为技术介绍和销售培训材料。',
    sections: buildArticleSections(
      [
        '文中将高光谱成像系统比作设备的“视网膜”，强调线阵相机、多波段光源和景深控制对微小瑕疵检测的重要性。',
        'AI缺陷识别算法之外，真空吸附传送、伺服定位和工业以太网联动也是设备稳定性和节拍能力的基础。',
      ],
      ['成像系统与多波段光源', '深度学习缺陷识别', '精密传动与多维度协同控制']
    ),
  },
  {
    id: 45,
    title: '名德智能分选机：矿山深处的“AI眼”与“慧眼”',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '行业观察',
    avatar: 'https://ui-avatars.com/api/?name=HY&background=F97316&color=fff',
    views: 88000,
    likes: 2800,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'analysis',
    tags: ['矿石分选', 'AI分选机', '行业案例'],
    comments: 131,
    type: 'article',
    readTime: '6分钟阅读',
    featured: true,
    summary: '通过煤矿分选案例展示AI设备如何把传统人工选矿升级成更高吞吐、更强学习能力的智能分选流程。',
    description: '文章从煤矿分选场景切入，讲述了AI分选机在矿石识别、训练迭代和现场个性化部署中的价值。',
    sections: buildArticleSections(
      [
        '资料对比了人工分选与AI分选机的处理效率差异，突出其在持续作业、识别一致性和个性化训练上的优势。',
        '系统可通过工程师纠正错误样本持续优化模型，逐步适应不同矿山的矿石纹理、颜色和光泽特征。',
      ],
      ['矿石分选吞吐量提升', 'AI系统自主学习能力', '矿山场景的个性化部署']
    ),
  },
  {
    id: 44,
    title: '色选机：从“人工分拣”到“智能筛选”，重新定义品质分拣效率',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '民崛资料库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=0D8ABC&color=fff',
    views: 126000,
    likes: 4100,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'analysis',
    tags: ['色选机', '智能筛选', '降本增效'],
    comments: 196,
    type: 'article',
    readTime: '7分钟阅读',
    summary: '从粮食、茶叶和矿石等典型行业出发，量化色选机在效率、精度和人工成本上的优势。',
    description: '文章总结了色选机替代人工分拣的三大原因，并列出典型精度、吞吐量和成本改善指标，适合作为客户沟通材料。',
    sections: buildArticleSections(
      [
        '资料强调，一台中型色选机的日均处理量可达30-50吨，能够显著缓解人工分拣的效率瓶颈和一致性问题。',
        '结合500万像素工业相机与AI算法，色选机可把优质品误判率压到0.1%以下，覆盖粮食、食品和矿石等多类来料。',
      ],
      ['人工分拣效率与成本痛点', '视觉识别与高速气动分拣', '粮食、食品、矿石等跨行业适配']
    ),
  },
  {
    id: 43,
    title: '新黄河采访：服贸会青岛展区的CCD光学筛选设备',
    cover: '/products/article-cover-1.svg',
    thumbnail: '/products/article-cover-1.svg',
    author: '新黄河',
    avatar: 'https://ui-avatars.com/api/?name=XH&background=EF4444&color=fff',
    views: 72000,
    likes: 2300,
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'analysis',
    tags: ['服贸会', '青岛展区', 'CCD光学筛选'],
    comments: 98,
    type: 'article',
    readTime: '5分钟阅读',
    summary: '记录了服贸会青岛展区视觉筛选设备的现场采访内容，可作为展会传播和品牌背书资料。',
    description: '报道围绕青岛星科瑞升的CCD光学筛选设备展开，介绍了其AI视觉检测算法、降本增效表现和展会曝光情况。',
    sections: buildArticleSections(
      [
        '采访提到，这套CCD光学筛选设备面向工业产品外观缺陷和目标测量项，重点解决传统人工质检效率低和一致性差的问题。',
        '设备已投入市场一年多，现场受访内容强调了高精度、高时效和较高客户复购率带来的示范效应。',
      ],
      ['服贸会展会传播素材', 'CCD外观检测与AI平台化', '青岛本地智造企业案例']
    ),
  },
  {
    id: 42,
    title: '新黄河-视觉筛选机采访',
    cover: '/videos/video-1-cover.jpg',
    author: '新黄河',
    avatar: 'https://ui-avatars.com/api/?name=XH&background=EF4444&color=fff',
    views: 92000,
    likes: 2810,
    duration: '采访实录',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'vlog',
    tags: ['服贸会', '青岛展区', '视觉筛选机'],
    comments: 164,
    rating: 4.8,
    type: 'video',
    featured: true,
    summary: '服贸会现场采访实录，适合用于展示视觉筛选设备在展会场景下的传播效果和客户关注点。',
    videoUrl: NEW_YELLOW_RIVER_VISION_SORTER_INTERVIEW_VIDEO_URL,
  },
  {
    id: 41,
    title: '机器视觉在食品行业中的使用',
    cover: '/videos/video-2-cover.jpg',
    author: '行业视频库',
    avatar: 'https://ui-avatars.com/api/?name=HY&background=0F766E&color=fff',
    views: 98000,
    likes: 2940,
    duration: '行业演示',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'tutorial',
    tags: ['食品检测', '机器视觉', '应用案例'],
    comments: 156,
    rating: 4.7,
    type: 'video',
    videoUrl: '/videos/machine-vision-food-industry.mp4',
  },
  {
    id: 40,
    title: '气门芯壳体视觉检测',
    cover: '/Picture/R-C.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=2563EB&color=fff',
    views: 84000,
    likes: 2580,
    duration: '现场实拍',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['壳体检测', '气门芯', '视觉检测'],
    comments: 142,
    rating: 4.8,
    type: 'video',
    videoUrl: '/videos/valve-core-vision-inspection.mp4',
  },
  {
    id: 39,
    title: '汽车螺栓AI全检机',
    cover: '/videos/video-1-cover.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=1D4ED8&color=fff',
    views: 106000,
    likes: 3360,
    duration: '设备演示',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['螺栓全检', '汽车零件', 'AI检测'],
    comments: 188,
    rating: 4.9,
    type: 'video',
    videoUrl: '/videos/auto-bolt-ai-inspector.mp4',
  },
  {
    id: 38,
    title: '全自动泡障板检测机',
    cover: '/videos/video-2-cover.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=0891B2&color=fff',
    views: 73000,
    likes: 2180,
    duration: '现场实拍',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['板材检测', '自动化质检', '设备实拍'],
    comments: 120,
    rating: 4.6,
    type: 'video',
    videoUrl: '/videos/auto-foam-barrier-inspector.mp4',
  },
  {
    id: 37,
    title: '缺陷检测',
    cover: '/Picture/5f45ca8db560b.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=DC2626&color=fff',
    views: 91000,
    likes: 2710,
    duration: '检测演示',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['缺陷识别', '视觉检测', '产线质检'],
    comments: 137,
    rating: 4.7,
    type: 'video',
    videoUrl: '/videos/defect-detection.mp4',
  },
  {
    id: 36,
    title: '人工智能视觉检测与自动化包装',
    cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=F59E0B&color=fff',
    views: 114000,
    likes: 3520,
    duration: '产线实拍',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'tutorial',
    tags: ['自动化包装', 'AI视觉', '方案集成'],
    comments: 203,
    rating: 4.8,
    type: 'video',
    videoUrl: AI_VISION_PACKAGING_LINE_VIDEO_URL,
  },
  {
    id: 35,
    title: '升恒科技视觉瑕疵检测',
    cover: '/Picture/OIP-C.webp',
    author: '行业视频库',
    avatar: 'https://ui-avatars.com/api/?name=SH&background=7C3AED&color=fff',
    views: 86000,
    likes: 2480,
    duration: '设备演示',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['瑕疵检测', '视觉检测', '工业质检'],
    comments: 128,
    rating: 4.7,
    type: 'video',
    videoUrl: '/videos/shengheng-vision-defect.mp4',
  },
  {
    id: 34,
    title: '生产线上的AI视觉检测设备',
    cover: '/videos/video-1-cover.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=059669&color=fff',
    views: 121000,
    likes: 3680,
    duration: '产线实拍',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'vlog',
    tags: ['生产线', 'AI检测', '设备联机'],
    comments: 216,
    rating: 4.9,
    type: 'video',
    videoUrl: PRODUCTION_LINE_AI_VISION_EQUIPMENT_VIDEO_URL,
  },
  {
    id: 33,
    title: '视觉检测使用',
    cover: '/Picture/R-C.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=EA580C&color=fff',
    views: 76000,
    likes: 2210,
    duration: '使用讲解',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'tutorial',
    tags: ['使用教学', '视觉检测', '现场操作'],
    comments: 109,
    rating: 4.6,
    type: 'video',
    videoUrl: '/videos/vision-inspection-usage.mp4',
  },
  {
    id: 32,
    title: '视觉小百科',
    cover: '/Picture/OIP-C.webp',
    author: '视觉知识库',
    avatar: 'https://ui-avatars.com/api/?name=VK&background=9333EA&color=fff',
    views: 69000,
    likes: 2050,
    duration: '知识速览',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'tutorial',
    tags: ['视觉百科', '基础知识', '快速入门'],
    comments: 102,
    rating: 4.6,
    type: 'video',
    videoUrl: '/videos/vision-mini百科.mp4',
  },
  {
    id: 31,
    title: '图灵AI桌面视觉检测',
    cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
    author: '行业视频库',
    avatar: 'https://ui-avatars.com/api/?name=TL&background=0EA5E9&color=fff',
    views: 88000,
    likes: 2660,
    duration: '桌面设备',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['桌面检测', 'AI视觉', '小型设备'],
    comments: 133,
    rating: 4.8,
    type: 'video',
    videoUrl: '/videos/turing-ai-desktop-vision.mp4',
  },
  {
    id: 30,
    title: '桌面流水线筛选机',
    cover: '/videos/video-2-cover.jpg',
    author: '行业视频库',
    avatar: 'https://ui-avatars.com/api/?name=ZD&background=2563EB&color=fff',
    views: 82000,
    likes: 2440,
    duration: '设备演示',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['桌面流水线', '筛选机', '视觉分拣'],
    comments: 126,
    rating: 4.7,
    type: 'video',
    videoUrl: '/videos/desktop-line-sorter.mp4',
  },
  {
    id: 29,
    title: 'AI视觉＋机械臂',
    cover: '/videos/video-1-cover.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=16A34A&color=fff',
    views: 97000,
    likes: 3010,
    duration: '协同演示',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'tutorial',
    tags: ['机械臂', 'AI视觉', '协同分拣'],
    comments: 167,
    rating: 4.8,
    type: 'video',
    videoUrl: '/videos/ai-vision-robot-arm.mp4',
  },
  {
    id: 28,
    title: 'AI自动化生产线',
    cover: '/Picture/5f45ca8db560b.jpg',
    author: '民崛视频库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=0284C7&color=fff',
    views: 124000,
    likes: 3790,
    duration: '产线实拍',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'vlog',
    tags: ['自动化产线', 'AI视觉', '整线方案'],
    comments: 224,
    rating: 4.9,
    type: 'video',
    videoUrl: '/videos/ai-auto-production-line.mp4',
  },
  {
    id: 27,
    title: 'CCD视觉检测',
    cover: '/Picture/R-C.jpg',
    author: '行业视频库',
    avatar: 'https://ui-avatars.com/api/?name=CCD&background=4338CA&color=fff',
    views: 79000,
    likes: 2310,
    duration: '现场演示',
    uploadTime: '今日新增',
    publishDate: '2026-05-25',
    category: 'review',
    tags: ['CCD检测', '外观检测', '工业视觉'],
    comments: 117,
    rating: 4.7,
    type: 'video',
    videoUrl: '/videos/ccd-vision-inspection.mp4',
  },
];

const localArticleDetails = {
  50: {
    description: '文档围绕 AI 视觉筛选系统的选型逻辑展开，从检测精度、处理延迟、模型自学习能力到供应商工程服务，把“买什么、怎么测、怎么落地”拆成可执行的决策步骤。',
    sections: [
      {
        title: '行业选型基准：先看性能，再谈概念',
        paragraphs: [
          '资料指出，AI视觉筛选系统的价值评估必须回到可量化指标。对划痕、缺料、异色等关键缺陷的检出率要看 Recall，优秀系统可达99.95%以上；误判率则要尽量压到0.5%以下，才能避免大量误杀良品带来的生产损失。',
          '除了精度，处理速度和系统延迟直接决定产线节拍。对于1000x1000像素图像和多类缺陷分析任务，单次处理时间要稳定在20-50毫秒内，系统总延迟还要小于单个生产节拍时间，才能真正用于高速在线检测。',
          '文档还把“自学习与场景适应性”列为关键指标。面对新缺陷或新产品换型，先进系统应支持少样本学习和在线增量学习，最好在少于50个标注样本、30分钟内就能完成一次模型迭代与重新部署。',
        ],
      },
      {
        title: '三类代表厂商：平台型、行业纵深型、云端创新型',
        paragraphs: [
          '资料把厂商能力分成三条典型路径。平台型代表强调模块化、低代码和标准化部署，重点是降低AI视觉应用门槛，适合多行业、多SKU和客户自身算法能力不足的场景。',
          '行业纵深型厂商更强调在3C电子、半导体等高精度行业的工程沉淀。文档以复杂零部件检测、微米级划伤识别和头部客户案例为例，说明这种供应商的价值在于工艺理解深、项目风险低、上线成功率高。',
          '云端创新型则把模型训练、标注和应用生成搬到浏览器和云平台中，首套部署周期可以缩短到小时级，更适合检测点位分散、预算有限但又需要快速复制AI能力的长尾工业场景。',
        ],
        bullets: ['平台型：低代码和软硬一体', '行业纵深型：精度极限与头部客户验证', '云端创新型：小时级部署与长尾场景普惠化'],
      },
      {
        title: '实施路径建议：一定要做 POC 与全生命周期核算',
        paragraphs: [
          '文档建议，选型第一步不是问供应商要报价，而是先定义检测需求与 ROI 目标：缺陷类型、产线节拍、容忍的误判与漏判率，以及当前人工质检成本，都应该在立项前写清楚。',
          '第二步是使用真实产品做1-2周的 POC 概念验证。测试结果必须覆盖检出率、误判率、速度，以及复杂边缘案例的处理表现，这比任何宣传页更能证明系统真实能力。',
          '最后还要评估全生命周期成本与开放性，包括维护费、云服务订阅费、模型持续优化费用，以及是否能对接现有 MES、ERP 和数据中台。文档特别强调，AI视觉项目“三分靠算法，七分靠实施”，工程服务能力往往决定项目成败。',
        ],
      },
    ],
  },
  49: {
    description: '这份文档用食品工业为例，把机器视觉分拣机器人从“替代人工挑拣”讲到“重构食品质量与追溯体系”，正文信息量远比摘要丰富。',
    sections: [
      {
        title: '为什么食品分拣最先爆发',
        paragraphs: [
          '文章把食品分拣定义为制造业里典型的“劳动密集型灰色地带”。人工长期依赖目测挑拣，效率低、主观误差大，还会随着疲劳导致品质波动，这些痛点恰好是机器视觉最容易创造直接价值的地方。',
          '文中援引了市场数据：2024年全球机器视觉食品分拣机器人市场收入约4.64亿美元，到2031年预计达到7.8亿美元，年复合增长率8.9%。这说明它已经不只是展示型技术，而是明确进入规模化采购周期。',
        ],
      },
      {
        title: '核心技术栈：从高速摄像到多光谱感知',
        paragraphs: [
          '文档强调，机器视觉分拣机器人真正的竞争力在于“眼、脑、手”的一体化协同。高速摄像负责捕捉来料状态，AI图像识别算法负责判定，多轴机械臂或执行机构负责完成最终的抓取与分拣动作。',
          '在果蔬分级、坚果筛选、谷物分选等场景中，多光谱成像、深度学习和高动态范围识别技术已经能捕捉到极其细微的差异。例如表皮缺陷、颜色偏差、纹理异常，甚至肉类和海产品中的异物与骨刺，都能借助红外与X射线视觉系统完成高精度识别。',
        ],
        bullets: ['多光谱成像', '深度学习识别', '红外/X射线异物检测', '机械臂或执行机构联动'],
      },
      {
        title: '从单机设备到食品工业的数字前端',
        paragraphs: [
          '文章认为，机器视觉分拣机器人正在从单一设备演化为数字化生产的前端传感器。每次识别产生的缺陷图像、批次编号和分级结果，都可以实时上传到后端追溯系统，推动食品质量从抽检转向全检。',
          '这种变化还会带动上游高帧率工业相机、光源、AI芯片、伺服控制器等环节同步升级，并催生“算法+硬件+服务”的整体交付模式。企业购买的不再只是设备，而是一套可以持续学习和持续优化的生产能力。',
          '文末把这件事落到更长期的行业趋势上：机器视觉分拣机器人不仅提升效率，也在减少原料浪费、增强供应链透明度和应对劳动力短缺方面发挥更大作用。',
        ],
      },
    ],
  },
  48: {
    description: '这份文章不是泛泛而谈的方案介绍，而是围绕木片分选场景展开了完整的痛点、技术路线、设备结构和落地案例说明。',
    sections: [
      {
        title: '木片分选为什么必须做复合检测',
        paragraphs: [
          '文档先描述了人造板行业的现实压力。随着中国人造板生产能力扩大到3.62亿立方米，木片原料中的树皮、橡胶、塑料、金属块和石子等杂质，会直接拉低产品质量，并加剧后续设备磨损与客户索赔风险。',
          '单一检测手段已经难以应对这种复杂来料。X射线对金属等密度差异显著的杂质识别效果较好，但橡胶和木质材料的密度区间存在重叠，因此需要AI视觉补足表面颜色、纹理和形状层面的判断能力。',
        ],
      },
      {
        title: '高低双能 X 射线 + AI 视觉的技术体系',
        paragraphs: [
          '资料介绍的核心方案，是用高低双能 X 射线模块提取密度特征，再由高分辨率 CCD 相机对物料表面颜色、纹理和形貌做扫描分析，最后通过特征级数据融合算法给出综合判断。',
          '这种多模态方案直接改善了单一检测方式的上限。文档给出了一组非常具体的数据：橡胶塑料检出率可达97.2%，金属碎片识别精度97.1%，石头剔除率95.6%，已经具备在连续化木片产线中作为主力方案部署的条件。',
        ],
        bullets: ['双能X射线负责密度特征', 'CCD视觉负责表面形貌', '特征级融合提升综合检出率'],
      },
      {
        title: '设备结构、典型案例与产线价值',
        paragraphs: [
          '文章还补充了分选结构设计。设备采用带式布料结构与自研信号探测技术，皮带速度可达4m/s，剔除点执行速度超过5m/s，面对10-60mm粒径和10-60t/h处理量的不同工况都能保持稳定运行。',
          '在山东某人造板企业案例中，引入中科光电 ZXV24 型木片色选机后，铁钉剔除率达到97.09%，石头剔除率95.60%，橡胶塑料剔除率95%，产品合格率提升到90%以上，并保持42t/h稳定产能。',
          '文末进一步把这套能力上升到产业升级逻辑：复合检测不仅解决当前杂质问题，也是在为循环经济、人造板高质量发展和智能化木材加工建立新的基础设施。',
        ],
      },
    ],
  },
  47: {
    description: '文档把 AI 视觉检测机从原理、算法、应用行业到服务落地都讲得很全，适合作为发现页里的长文型内容，而不只是宣传摘要。',
    sections: [
      {
        title: '核心原理：采集、传输、分析、决策四步闭环',
        paragraphs: [
          '文章把 AI 视觉检测机定义为“工业相机 + 智能光源 + 图像处理系统 + AI算法”的组合体，核心是通过模拟人类视觉并叠加自学习分析能力，实现无接触、高精度的自动检测。',
          '正文把检测过程拆成四个环节。图像采集阶段依赖 CCD/CMOS 工业相机获取高分辨率图像；传输与预处理阶段进行去噪、增强、二值化等操作；分析阶段用特征提取与 AI 模型判断缺陷；决策阶段触发分拣并同步记录可追溯数据。',
          '文中还给出精度指标：对极小缺陷的识别能力可做到头发丝四分之一量级，误检率可控制在0.02%以内，说明其目标场景并不局限于普通外观件。',
        ],
      },
      {
        title: '双路径算法：边缘学习与深度学习并行',
        paragraphs: [
          '资料特别强调，两条算法路径适用于不同复杂度的业务。一类是边缘学习，用5-10张样本就能快速训练出模型，适合标准简单、需要快速部署的轻量场景。',
          '另一类是深度学习，通过 GPU 算力和海量样本训练复杂神经网络，更适合细微、多变、规则难以穷举的缺陷识别。与传统基于规则的视觉系统相比，这种方案的优势在于能够随着使用持续优化，并更好地兼容产品的自然波动。',
        ],
        bullets: ['边缘学习：快速上线、低门槛', '深度学习：复杂缺陷识别能力更强', '持续优化：使用越久模型越稳'],
      },
      {
        title: '应用场景与供应商服务能力',
        paragraphs: [
          '在应用层面，文档列举了 3C 电子、汽车制造、无人机与智能装备、新能源电池、食品包装等多个行业。检测对象既包括 PCB 焊点、引脚变形、镜片划痕，也包括发动机部件裂纹、轴承瑕疵与包装异物。',
          '文章后半段集中介绍了新思鹿科技的交付能力：硬件采用远心镜头与高分辨率工业相机，重复精度可达0.1μm；软件端通过自主深度学习算法解决透明件、反光件等难题；服务端则提供现场诊断、方案设计、安装调试、培训和维护的一站式流程。',
          '这让文章不只是技术科普，也带有明显的落地指引价值，适合采购、方案顾问和制造企业负责人把它当成“视觉检测机到底怎么买、怎么上线”的参考材料。',
        ],
      },
    ],
  },
  46: {
    description: '这篇文章围绕视觉筛选机的技术底座展开，不再只停留在“用AI检测”这种泛化说法，而是把设备真正能做成什么讲清楚了。',
    sections: [
      {
        title: '成像系统：决定你到底能不能看见问题',
        paragraphs: [
          '文档认为，高光谱成像系统是视觉筛选机的“视网膜”。工业级设备通常会使用4K线阵相机配合多波段光源，同时采集可见光、红外和紫外波段信息，以便把肉眼难以区分的缺陷完整拉出来。',
          '针对芯片引脚、PCB线路等不同对象，系统可以切换环形低角度光或同轴光，以突出变形、抑制反光。资料还提到，某品牌设备的镜头景深控制在0.02毫米内，0.01毫米的锡珠也能清晰成像。',
        ],
      },
      {
        title: '算法与传动：让识别能力真正可重复',
        paragraphs: [
          '在识别端，文章把 AI 缺陷识别算法称为“大脑中枢”。它通过百万级缺陷样本训练后，可判断电容针脚歪斜、电阻色环错印等复杂问题，并支持在新瑕疵出现后，用50个样本在2小时内更新模型。',
          '但视觉筛选机不只是算法机器。文档强调，精密传动与定位技术是稳定运行的“骨骼”：真空吸附传送带需把振动控制在5微米以内，配合同步带轮和伺服电机，确保元器件在检测区域停留时间误差不超过1毫秒。',
        ],
        bullets: ['百万级缺陷样本训练', '50样本/2小时模型更新', '5微米振动控制', '1毫秒停留误差控制'],
      },
      {
        title: '协同控制与数据上云',
        paragraphs: [
          '最后一层能力，是多维度协同控制系统。它需要同步成像节奏与传送带速度，并在识别到缺陷后于0.05秒内触发气动剔除装置，这决定了设备能否在高速节拍下保持稳定良率。',
          '文档还提到，通过工业以太网与 MES 系统互联，设备每小时可以上传500万组检测数据并生成缺陷分布热力图。也就是说，视觉筛选机的价值不只是“剔掉不良品”，更在于把整个工厂的缺陷认知和工艺优化闭环建立起来。',
        ],
      },
    ],
  },
  45: {
    description: '文章用矿山分选的真实叙事，把 AI 分选机从“会识别”写到了“会学习、能迁移、能创造三升三降价值”，阅读体验比普通设备介绍更完整。',
    sections: [
      {
        title: '从人眼到 AI 眼：为什么传统选矿顶不住了',
        paragraphs: [
          '文档从煤矿现场切入，描述了人工分选长期存在的局限。老师傅依赖经验和肉眼，每小时最多处理1-2吨矿石，而且随着连续作业时间增加，准确率会自然下降。',
          '这种模式不仅吞吐量低，也无法满足现代矿山对精细分选和个性化分选的要求。正是在这种背景下，名德光电推出了人工智能分选机，被文章形容为一双“永不疲倦的慧眼”。',
        ],
      },
      {
        title: '它如何思考：自主学习、模块化与小样本迁移',
        paragraphs: [
          '正文对设备“大脑”的描述很具体。系统通过大量矿石样本学习颜色、纹理和光泽等特征，而不是死记几种矿石的外观。当新矿石经过时，AI 会把实时特征与“记忆库”比对，在极短时间内完成判断。',
          '如果出现错误，工程师可以纠正样本，系统会把这次纠错吸收进模型中，下一次判断更准。这让设备可以逐步适应不同矿山、不同矿石的差异，实现真正的个性化分选。',
          '文章还强调了模块化设计和迁移学习技术：同一台设备可以切换识别模型服务不同矿种，而对稀有矿石，则通过“先学常见矿石、再迁移到稀有矿石”的办法用少量样本完成有效训练。',
        ],
      },
      {
        title: '实战效果：三升三降与更聪明的矿山',
        paragraphs: [
          '文档列出了多个案例。在江西钨矿，设备每小时处理量可达50吨，并从尾矿中重新回收高价值矿物；在湖北磷矿，原矿品位从18%提升到26%，抛废率超过50%，同时显著减少尾矿排放。',
          '文章把价值总结为“三升三降”：效益提升、效率提升、资源利用率提升；成本降低、尾矿排放降低、环境影响降低。其中处理量最高可达150吨/小时，是人工分选的百倍，能耗还可以减少80%。',
          '最后，文档把这套能力延伸到未来矿山智能化：低品位矿和尾矿重新获得开发价值，智能分选技术有望让全球可采资源量扩大约30%，这使文章兼具行业观察和技术前瞻性。',
        ],
      },
    ],
  },
  44: {
    description: '这篇长文把色选机从“替代人工的设备”写成了一套跨粮食、食品、矿石行业的标准化分选基础设施，信息量明显高于当前摘要。',
    sections: [
      {
        title: '为什么色选机能替代大规模人工分拣',
        paragraphs: [
          '文章开头直接量化了人工分拣的三大痛点：效率低、误差大、成本高。一名熟练工人日均分拣量不足1吨，杂质剔除率不足85%，优质品误判率超10%，而10人团队年成本就可能超过72万元。',
          '相比之下，色选机通过“视觉识别 - 数据分析 - 精准分拣”的自动化闭环，把日处理量提升到30-50吨，优质品误判率压到0.1%以下，还能在8-10年使用寿命内把综合运维成本大幅摊薄。',
        ],
        bullets: ['效率跃升30倍', '识别精度稳定在99.9%', '综合成本降低约60%'],
      },
      {
        title: '行业渗透：从粮食到食品深加工',
        paragraphs: [
          '文档用粮食行业举了很具体的案例：双通道大米色选机把杂质剔除率从82%拉到99.8%，并通过精米、普米、碎米自动分级，让企业获得更高的售价和更低的人力成本。',
          '在茶叶、坚果和果蔬等食品深加工领域，色选机不只是去杂，更承担标准化分级任务。以茶叶为例，分级精度可以达到98%，而单台设备的日分拣效率可从人工200斤/天拉升到8000斤/天。',
          '文章还提到色选机对“隐性缺陷”的识别价值，例如黄变米、霉变小麦、虫蛀坚果和空壳坚果等，这些过去很依赖经验判断的对象，现在可以通过光谱和综合色泽识别自动完成筛除。',
        ],
      },
      {
        title: '新一代色选机的升级方向',
        paragraphs: [
          '后半部分总结了四项关键升级。第一是 AI 深度学习，让设备通过样本训练快速适配新品类和新批次来料；第二是多光谱识别，解决“同色不同质”和肉眼不可见霉变等问题。',
          '第三是节能与降噪，文档给出能耗下降20%、噪音控制在70分贝以下的指标；第四是智能化运维，借助物联网模块和手机 App 做远程监控、故障预警和远程协助，把轻微故障的停机时间压缩到1小时以内。',
          '这些内容让文章不仅能解释“色选机是什么”，还能回答“现在的色选机比上一代强在哪里、值不值得换”。',
        ],
      },
    ],
  },
  43: {
    description: '这份采访稿虽短，但信息密度不低，能为发现页补上一个更贴近展会传播和企业背书的内容角度。',
    sections: [
      {
        title: '展会现场：视觉筛选设备为什么会被围观',
        paragraphs: [
          '文章记录的是2024年服贸会青岛展区现场。记者注意到，一台持续发出拍照声的设备吸引了大量观众驻足，这种叙事天然适合作为发现页里的“现场感内容”。',
          '受访工程师介绍，这是一套 CCD 光学筛选机 - 玻璃转盘筛选设备，核心依赖自主研发的 AI 视觉检测算法，用于产品外观缺陷和目标测量项的高效高精度质检。',
        ],
      },
      {
        title: '企业表达的核心卖点',
        paragraphs: [
          '采访稿非常明确地总结了卖点：解决工业生产中不良品质量检测难的问题，帮助客户实现半自动和全自动化，人工成本可降低80%以上。',
          '设备背后是100多人的研发团队，核心技术既包括图像处理创新，也包括人工智能技术引入与样本积累。受访者还强调，设备已经投入市场一年多时间，在节省成本、提升效率和客户复购上给出了正反馈。',
        ],
        bullets: ['外观缺陷检测', '目标测量项识别', '人工成本下降80%以上', '客户复购率高'],
      },
      {
        title: '品牌背书与传播价值',
        paragraphs: [
          '文章最后补充了企业背景：青岛星科瑞升成立于山东科技大学国家级大学科技园，专注 CCD 外观检测和 AI 平台研发，提供智能六面外观检测设备与解决方案。',
          '同时它还拥有山东省科技进步一等奖等荣誉，并入选青岛市高企上市培育库。也就是说，这篇内容不仅能作为设备介绍，也能被用作供应商背书和展会传播素材。',
        ],
      },
    ],
  },
};

const AI_VISION_FOLDER_ARTICLE_SECTIONS = [
  {
    title: '市场总览：AI视觉筛选机为什么持续升温',
    paragraphs: [
      '基于视觉的智能分拣机市场仍处于高速扩张通道。资料指出，全球市场规模正从2025年的23.8亿美元增长到2026年的26.7亿美元，并有望在2032年达到56.8亿美元。这背后反映的，不只是设备销量增加，而是制造业把“在线全检、稳定质控、柔性换型”当成基础能力来建设。',
      '另一份厂家推荐资料进一步补充了买方视角：消费电子、精密五金、半导体封装、食品医药等行业，对检测精度、处理速度和复杂缺陷自适应学习能力的要求同时上升，推动AI视觉系统从传统机器视觉向更智能的“感知 + 判断 + 决策”平台演进。',
    ],
  },
  {
    title: '选型抓手：精度、延迟、自学习与工程实施',
    paragraphs: [
      '专题资料把选型逻辑拆得很清楚。首先要看缺陷检出率和误判率，优秀方案对划痕、缺料、异色等关键缺陷的检出率可达99.95%以上，误判率应尽量压到0.5%以下；其次要看速度，1000x1000像素图像下多类缺陷分析最好能稳定在20-50毫秒内，保证真正跑在线节拍。',
      '除了算法本身，少样本学习和换型效率也被反复强调。面对新缺陷或新品类，先进系统应能用较少标注样本在较短时间内完成模型迭代。资料还建议客户务必做真实产线的 POC 验证，并从维护费、云服务、MES/ERP 对接与现场工程服务能力来评估全生命周期成本。',
    ],
    bullets: ['检出率与误判率', '单次处理延迟', '少样本学习与换型效率', 'POC 概念验证与工程实施能力'],
  },
  {
    title: '场景扩展：从食品分拣到色选、木片复合检测',
    paragraphs: [
      '机器视觉分拣机器人资料把食品工业作为典型场景展开，说明视觉分拣系统如何从“辅助挑拣”变成“数字生产前端”。从果蔬、坚果、谷物到肉类和海产品，系统已经能借助多光谱成像、深度学习、红外与X射线视觉，在毫秒级完成识别、判定和分拣。',
      '色选机长文则把这种能力延伸到粮食、茶叶、坚果和矿石行业。它不只是去杂，还承担标准化分级、隐性缺陷识别和降本增效角色。文章给出的量化指标非常直接：中型色选机可把日处理量提升到30-50吨，优质品误判率压到0.1%以下，并显著降低人工团队长期成本。',
      '在木片分选场景里，X射线检测与AI视觉复合方案补上了密度识别与表面形貌识别的双重能力。高低双能X射线负责密度特征，高分辨率CCD负责颜色和纹理分析，特征融合后对橡胶塑料、金属碎片和石头等杂质的剔除率都获得明显提升。',
    ],
  },
  {
    title: '案例与传播：矿山、展会与产业观察都在往同一方向走',
    paragraphs: [
      '名德智能分选机案例展示了AI筛选在矿石行业的价值：设备通过自主学习矿石纹理、颜色和光泽等特征，完成持续进化式分选，并在效率、资源利用率和成本结构上形成“三升三降”的综合收益。',
      '新黄河服贸会采访则给这类设备补上了传播层面的视角。青岛展区的CCD光学筛选设备通过自主AI视觉算法解决外观缺陷与测量项质检难题，现场采访中还给出了人工成本下降80%以上、客户复购率高等信号，说明视觉筛选机已经从技术话题进入品牌传播与采购决策层面。',
      '把这几份资料合在一起看，会得到一个更完整的结论：AI视觉筛选机已经不是单点设备，而是在多个行业中承担质量控制、过程数据化和自动化升级入口角色的基础设施。',
    ],
  },
];

const excludedLocalDiscoveryIds = new Set([50, 49, 48, 44, 43, 42]);

const enrichedLocalDiscoveryEntries = localDiscoveryEntries
  .filter((entry) => !excludedLocalDiscoveryIds.has(entry.id))
  .map((entry) => (
    localArticleDetails[entry.id]
      ? { ...entry, ...localArticleDetails[entry.id] }
      : entry
  ));

export const discoveryVideos = [
  ...enrichedLocalDiscoveryEntries,
  {
    id: 25,
    title: 'AI视觉筛选机专题资料汇编：选型、市场、案例与行业观察',
    cover: '/Picture/OIP-C.webp',
    thumbnail: '/videos/video-1-cover.jpg',
    author: '民崛资料库',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=0F766E&color=fff',
    authorAvatar: 'https://ui-avatars.com/api/?name=MJ&background=0F766E&color=fff',
    views: 628000,
    likes: 19800,
    uploadTime: '专题精选',
    publishDate: '2026-05-25',
    category: 'analysis',
    tags: ['AI视觉筛选机', '专题汇编', '选型与案例'],
    comments: 468,
    type: 'article',
    readTime: '12分钟阅读',
    featured: true,
    summary: '把 AI视觉筛选机 文件夹中的市场趋势、厂家选型、食品分拣、色选机、木片复合检测和展会采访合并成一篇专题长文，顶部同时放入新黄河采访视频。',
    description: '这篇专题把 `资料/资料/AI视觉筛选机` 文件夹里的多份文档内容合并到一个阅读入口中，顶部先看新黄河采访视频，正文再依次看市场规模、选型方法、食品分拣机器人、色选机升级、X 射线复合检测和展会/品牌案例。',
    videoUrl: NEW_YELLOW_RIVER_VISION_SORTER_INTERVIEW_VIDEO_URL,
    sections: AI_VISION_FOLDER_ARTICLE_SECTIONS,
  },
  {
    id: 24,
    title: '民崛智能分拣现场实拍：高速识别与自动分流演示',
    cover: '/videos/discovery-sorter-live-cover.jpg',
    author: '民崛智能',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=1D4ED8&color=fff',
    views: 486000,
    likes: 14200,
    duration: '01:31',
    uploadTime: '刚刚',
    publishDate: '2026-04-07',
    category: 'vlog',
    tags: ['智能分拣', '产线实拍', '自动分流'],
    comments: 618,
    rating: 5.0,
    type: 'video',
    featured: true,
    summary: '聚焦民崛智能现场分拣节拍、识别速度和自动分流动作，让客户在发现页先看到更直观的设备实拍效果。',
    videoUrl: DISCOVERY_SORTER_LIVE_VIDEO_URL,
  },
  {
    id: 23,
    title: '民崛智能方案纪实：复杂来料下的视觉分拣稳定性验证',
    cover: '/videos/discovery-sorter-stability-cover.jpg',
    author: '民崛智能',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=2563EB&color=fff',
    views: 428000,
    likes: 13100,
    duration: '00:31',
    uploadTime: '刚刚',
    publishDate: '2026-04-07',
    category: 'review',
    tags: ['复杂来料', '稳定性验证', '视觉分拣'],
    comments: 472,
    rating: 4.9,
    type: 'video',
    featured: true,
    summary: '补充复杂来料、多规格混流下的识别与分拣稳定性展示，让发现页前排内容更完整地覆盖设备能力与应用场景。',
    videoUrl: DISCOVERY_SORTER_STABILITY_VIDEO_URL,
  },
  {
    id: 1,
    title: '工业视觉检测技术应用演示',
    cover: '/Picture/5f45ca8db560b.jpg',
    author: '民崛智能',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=0D8ABC&color=fff',
    views: 125600,
    likes: 3420,
    duration: '12:35',
    uploadTime: '今天',
    publishDate: '2026-03-25',
    category: 'review',
    tags: ['AI检测', '民崛智能', '产品演示'],
    comments: 234,
    rating: 4.8,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 2,
    title: '自动化生产线智能检测系统',
    cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
    author: '民崛智能',
    avatar: 'https://ui-avatars.com/api/?name=MJ&background=22C55E&color=fff',
    views: 89200,
    likes: 2150,
    duration: '15:20',
    uploadTime: '今天',
    publishDate: '2026-03-25',
    category: 'review',
    tags: ['自动化', '生产线', '智能检测'],
    comments: 187,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 3,
    title: '千元级工业相机选购指南 | 性价比之王终极测试',
    cover: '/Picture/R-C.jpg',
    author: '设备评测室',
    avatar: 'https://ui-avatars.com/api/?name=SB&background=F59E0B&color=fff',
    views: 156000,
    likes: 4230,
    duration: '18:45',
    uploadTime: '1周前',
    publishDate: '2026-03-18',
    category: 'review',
    tags: ['工业相机', '选购指南', '性价比'],
    comments: 456,
    rating: 4.7,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 4,
    title: 'MVTec Halcon vs OpenCV | 机器视觉软件终极对决',
    cover: '/Picture/OIP-C.webp',
    author: '视觉算法工程师',
    avatar: 'https://ui-avatars.com/api/?name=SF&background=EF4444&color=fff',
    views: 67800,
    likes: 1890,
    duration: '25:12',
    uploadTime: '3天前',
    publishDate: '2026-03-22',
    category: 'review',
    tags: ['Halcon', 'OpenCV', '软件对比'],
    comments: 312,
    rating: 4.8,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 5,
    title: '探厂实拍 | 走进深圳AI视觉检测设备制造商',
    cover: '/videos/video-1-cover.jpg',
    author: '工业探厂Vlog',
    avatar: 'https://ui-avatars.com/api/?name=GY&background=8B5CF6&color=fff',
    views: 234000,
    likes: 6780,
    duration: '28:34',
    uploadTime: '2天前',
    publishDate: '2026-03-23',
    category: 'vlog',
    tags: ['探厂', '深圳', 'AI检测'],
    comments: 567,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 6,
    title: '锂电池生产线实拍 | AOI视觉检测设备工作全流程',
    cover: '/videos/video-2-cover.jpg',
    author: '制造业观察者',
    avatar: 'https://ui-avatars.com/api/?name=ZZ&background=06B6D4&color=fff',
    views: 178000,
    likes: 4560,
    duration: '16:45',
    uploadTime: '4天前',
    publishDate: '2026-03-21',
    category: 'vlog',
    tags: ['锂电池', 'AOI检测', '生产线'],
    comments: 345,
    rating: 4.8,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 7,
    title: '老板的一天 | 视觉设备公司日常Vlog',
    cover: '/Picture/5f45ca8db560b.jpg',
    author: '创业者日记',
    avatar: 'https://ui-avatars.com/api/?name=CY&background=F97316&color=fff',
    views: 98500,
    likes: 2340,
    duration: '12:20',
    uploadTime: '1周前',
    publishDate: '2026-03-18',
    category: 'vlog',
    tags: ['创业', '日常', '公司运营'],
    comments: 234,
    rating: 4.6,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 8,
    title: '跟我一起参加机器视觉展会 | VISION CHINA 2024',
    cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
    author: '行业观察',
    avatar: 'https://ui-avatars.com/api/?name=HY&background=84CC16&color=fff',
    views: 145000,
    likes: 3890,
    duration: '32:15',
    uploadTime: '3天前',
    publishDate: '2026-03-22',
    category: 'vlog',
    tags: ['展会', 'VISION', '新品发布'],
    comments: 456,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 9,
    title: 'Halcon机器视觉完整教程 | 从入门到精通(1/50)',
    cover: '/Picture/OIP-C.webp',
    author: '视觉教程大师',
    avatar: 'https://ui-avatars.com/api/?name=JC&background=DC2626&color=fff',
    views: 567000,
    likes: 15600,
    duration: '45:30',
    uploadTime: '1个月前',
    publishDate: '2026-02-25',
    category: 'tutorial',
    tags: ['Halcon', '教程', '入门'],
    comments: 1234,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 10,
    title: '工业相机选型与调试实战教程 | 手把手教学',
    cover: '/Picture/R-C.jpg',
    author: '工程师小李',
    avatar: 'https://ui-avatars.com/api/?name=XL&background=7C3AED&color=fff',
    views: 234000,
    likes: 7890,
    duration: '38:12',
    uploadTime: '2周前',
    publishDate: '2026-03-11',
    category: 'tutorial',
    tags: ['工业相机', '选型', '调试'],
    comments: 678,
    rating: 4.8,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 11,
    title: 'AI缺陷检测项目实战 | 从0搭建完整系统',
    cover: '/videos/video-1-cover.jpg',
    author: 'AI视觉工程师',
    avatar: 'https://ui-avatars.com/api/?name=AI&background=2563EB&color=fff',
    views: 189000,
    likes: 6780,
    duration: '52:45',
    uploadTime: '1周前',
    publishDate: '2026-03-18',
    category: 'tutorial',
    tags: ['AI检测', '项目实战', '深度学习'],
    comments: 892,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 12,
    title: 'PLC与视觉系统通讯教程 | Modbus/TCP协议详解',
    cover: '/videos/video-2-cover.jpg',
    author: '自动化工程师',
    avatar: 'https://ui-avatars.com/api/?name=ZD&background=059669&color=fff',
    views: 123000,
    likes: 4560,
    duration: '28:30',
    uploadTime: '5天前',
    publishDate: '2026-03-20',
    category: 'tutorial',
    tags: ['PLC', '通讯', 'Modbus'],
    comments: 456,
    rating: 4.7,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 13,
    title: '二手设备淘宝记 | 5万元收购一套完整视觉检测系统',
    cover: '/Picture/5f45ca8db560b.jpg',
    author: '设备猎人',
    avatar: 'https://ui-avatars.com/api/?name=SB&background=DC2626&color=fff',
    views: 345000,
    likes: 8900,
    duration: '22:15',
    uploadTime: '3天前',
    publishDate: '2026-03-22',
    category: 'trading',
    tags: ['二手设备', '收购', '性价比'],
    comments: 789,
    rating: 4.8,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 14,
    title: '如何避坑 | 购买工业相机的10个注意事项',
    cover: '/Picture/R-C.jpg',
    author: '采购老司机',
    avatar: 'https://ui-avatars.com/api/?name=CG&background=F59E0B&color=fff',
    views: 267000,
    likes: 7650,
    duration: '18:45',
    uploadTime: '1周前',
    publishDate: '2026-03-18',
    category: 'trading',
    tags: ['避坑指南', '采购', '工业相机'],
    comments: 567,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 15,
    title: '设备置换实录 | 老设备如何卖出好价格',
    cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
    author: '二手市场',
    avatar: 'https://ui-avatars.com/api/?name=ES&background=22C55E&color=fff',
    views: 156000,
    likes: 4230,
    duration: '15:30',
    uploadTime: '4天前',
    publishDate: '2026-03-21',
    category: 'trading',
    tags: ['二手', '置换', '卖设备'],
    comments: 345,
    rating: 4.6,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 16,
    title: '工厂设备拍卖会直击 | 捡漏高端视觉设备',
    cover: '/videos/video-2-cover.jpg',
    author: '拍卖观察',
    avatar: 'https://ui-avatars.com/api/?name=PM&background=8B5CF6&color=fff',
    views: 198000,
    likes: 5670,
    duration: '25:40',
    uploadTime: '2天前',
    publishDate: '2026-03-23',
    category: 'trading',
    tags: ['拍卖', '捡漏', '高端设备'],
    comments: 678,
    rating: 4.7,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 17,
    title: '2024机器视觉行业白皮书解读 | 市场规模突破500亿',
    cover: '/videos/video-1-cover.jpg',
    author: '行业分析师',
    avatar: 'https://ui-avatars.com/api/?name=HY&background=0D8ABC&color=fff',
    views: 456000,
    likes: 12300,
    duration: '35:20',
    uploadTime: '1周前',
    publishDate: '2026-03-18',
    category: 'analysis',
    tags: ['行业报告', '市场分析', '趋势'],
    comments: 1234,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 18,
    title: 'AI视觉检测技术发展趋势 | 深度学习vs传统算法',
    cover: '/Picture/5f45ca8db560b.jpg',
    author: '技术前沿',
    avatar: 'https://ui-avatars.com/api/?name=JS&background=EF4444&color=fff',
    views: 289000,
    likes: 8900,
    duration: '28:15',
    uploadTime: '3天前',
    publishDate: '2026-03-22',
    category: 'analysis',
    tags: ['AI', '技术趋势', '深度学习'],
    comments: 892,
    rating: 4.8,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 19,
    title: '国产vs进口 | 机器视觉设备竞争格局分析',
    cover: '/videos/video-2-cover.jpg',
    author: '产业观察',
    avatar: 'https://ui-avatars.com/api/?name=CY&background=059669&color=fff',
    views: 234000,
    likes: 6780,
    duration: '32:50',
    uploadTime: '5天前',
    publishDate: '2026-03-20',
    category: 'analysis',
    tags: ['国产化', '进口替代', '竞争分析'],
    comments: 678,
    rating: 4.7,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    id: 20,
    title: '新能源行业带来的视觉检测机遇 | 千亿市场解析',
    cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
    author: '投资观察',
    avatar: 'https://ui-avatars.com/api/?name=TZ&background=F97316&color=fff',
    views: 345000,
    likes: 9870,
    duration: '26:30',
    uploadTime: '2天前',
    publishDate: '2026-03-23',
    category: 'analysis',
    tags: ['新能源', '市场机遇', '投资'],
    comments: 1045,
    rating: 4.9,
    type: 'video',
    videoUrl: DEFAULT_VIDEO_URL,
  },
];

export const getDiscoveryVideoById = (id) =>
  discoveryVideos.find((item) => item.id === Number(id)) || null;

const getHotScore = (item) => (item.likes || 0) + (item.views || 0);

export const getDiscoveryVideos = ({ activeCategory = 'all', sortBy = 'hot' } = {}) => {
  const filtered = activeCategory === 'all'
    ? [...discoveryVideos]
    : discoveryVideos.filter((item) => item.category === activeCategory);

  switch (sortBy) {
    case 'latest':
      filtered.sort((a, b) => b.id - a.id);
      break;
    case 'popular':
      filtered.sort((a, b) => b.views - a.views);
      break;
    case 'liked':
      filtered.sort((a, b) => b.likes - a.likes);
      break;
    default:
      filtered.sort((a, b) => {
        if (activeCategory === 'all' && a.featured && !b.featured) return -1;
        if (activeCategory === 'all' && !a.featured && b.featured) return 1;
        if (activeCategory === 'all' && a.featured && b.featured) return b.id - a.id;
        return getHotScore(b) - getHotScore(a);
      });
      break;
  }

  return filtered;
};

export const getRelatedDiscoveryVideos = (id, limit = 3) => {
  const current = getDiscoveryVideoById(id);
  if (!current) return discoveryVideos.slice(0, limit);

  return discoveryVideos
    .filter((item) => item.id !== current.id)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1;
      if (a.category !== current.category && b.category === current.category) return 1;
      return b.likes - a.likes;
    })
    .slice(0, limit);
};

export const buildDiscoveryVideoDetail = (id) => {
  const video = getDiscoveryVideoById(id);
  if (!video) return null;

  const description = video.description || `${video.author}围绕“${video.tags.join(' / ')}”做了一次完整拆解，适合想快速了解工业视觉设备、方案选型和落地经验的采购与供应团队参考。`;
  const sections = Array.isArray(video.sections) && video.sections.length > 0
    ? video.sections
    : [
      {
        title: '这条内容讲了什么',
        paragraphs: [
          `视频围绕 ${video.title} 展开，从设备能力、落地场景到选型建议做了完整串联。`,
          `如果你正在评估 ${video.tags[0]} 相关方案，这条内容能帮你更快抓到关键判断点。`,
        ],
      },
      {
        title: '你可以重点关注',
        bullets: [
          `${video.tags[0]} 的实际适配场景与上线节奏`,
          `采购前需要确认的核心参数与交付边界`,
          `行业内常见踩坑点以及更稳妥的替代方案`,
        ],
      },
      {
        title: '适合谁看',
        paragraphs: [
          '适合采购工程师、设备选型负责人、供应商销售和方案顾问快速补课。',
        ],
      },
    ];

  return {
    ...video,
    thumbnail: video.thumbnail || video.cover,
    authorAvatar: video.authorAvatar || video.avatar,
    description,
    sections,
    articlePages: video.type === 'article' ? paginateArticleSections(sections) : null,
  };
};

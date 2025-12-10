// Mock Data for Search Functionality

// Products Data (from Mall.jsx)
export const products = [
  {
    id: 1,
    name: '海康威视AI视觉检测系统 VIS-2000',
    nameEn: 'Hikvision AI Vision Inspection System VIS-2000',
    price: 28900,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
    category: 'ai-vision',
    rating: 4.9,
    sales: 1245,
    supplier: '深圳智视科技有限公司',
    supplierEn: 'Shenzhen Smart Vision Tech',
    tags: ['AI检测', '高精度', '包邮'],
    description: '2D+3D双模式, 深度学习算法, 0.1mm精度'
  },
  {
    id: 2,
    name: 'Basler ace系列工业相机套装',
    nameEn: 'Basler ace Series Industrial Camera Kit',
    price: 4299,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
    category: 'camera',
    rating: 4.8,
    sales: 2234,
    supplier: '杭州精准视觉设备厂',
    supplierEn: 'Hangzhou Precision Vision Factory',
    tags: ['高性价比', '现货', '包邮'],
    description: '200万像素, GigE接口, 含镜头'
  },
  {
    id: 3,
    name: 'CCS LED环形光源 LDR2-100',
    nameEn: 'CCS LED Ring Light LDR2-100',
    price: 680,
    image: 'https://images.unsplash.com/photo-1581093458791-9d58b3fbbd0d?w=400',
    category: 'lens',
    rating: 4.8,
    sales: 5678,
    supplier: '上海光源智能装备',
    supplierEn: 'Shanghai Light Source Intelligent',
    tags: ['畅销', '质保3年', '包邮'],
    description: '高亮度, 可调光, 多种规格'
  },
  {
    id: 4,
    name: '基恩士3D激光轮廓仪',
    nameEn: 'Keyence 3D Laser Profiler',
    price: 15800,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
    category: 'measure',
    rating: 4.7,
    sales: 567,
    supplier: '北京博视自动化',
    supplierEn: 'Beijing BoShi Automation',
    tags: ['微米级精度', '抗干扰'],
    description: '超高精度3D测量, 适用于各种材质'
  },
  {
    id: 5,
    name: 'ABB工业机器人IRB 1200',
    nameEn: 'ABB Industrial Robot IRB 1200',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
    category: 'robot',
    rating: 4.9,
    sales: 345,
    supplier: '广州机器人技术中心',
    supplierEn: 'Guangzhou Robotics Center',
    tags: ['高速', '紧凑型'],
    description: '5kg/7kg负载, 适用于装配和物料搬运'
  },
  {
    id: 6,
    name: '远心镜头 50mm',
    nameEn: 'Telecentric Lens 50mm',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
    category: 'lens',
    rating: 4.6,
    sales: 890,
    supplier: '苏州光学仪器厂',
    supplierEn: 'Suzhou Optical Instruments',
    tags: ['低畸变', '高分辨率'],
    description: '支持2/3英寸靶面, C接口'
  }
];

// Discovery Content Data (from Discovery.jsx)
export const discoveryContent = [
  {
    id: 1,
    title: '海康威视AI视觉检测系统深度测评',
    titleEn: 'Hikvision AI Vision Inspection System In-depth Review',
    type: 'video',
    cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600',
    author: '工业视觉达人',
    views: 125600,
    category: 'review',
    tags: ['AI检测', '海康威视', '测评']
  },
  {
    id: 2,
    title: '基恩士vs康耐视 | 3D视觉传感器横评',
    titleEn: 'Keyence vs Cognex | 3D Vision Sensor Comparison',
    type: 'video',
    cover: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
    author: '智能制造观察',
    views: 89200,
    category: 'review',
    tags: ['基恩士', '康耐视', '3D视觉']
  },
  {
    id: 3,
    title: '如何选择工业相机？5个关键参数详解',
    titleEn: 'How to Choose Industrial Cameras? 5 Key Parameters',
    type: 'article',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    author: '机器视觉专家',
    views: 8500,
    category: 'tutorial',
    tags: ['工业相机', '选购指南']
  },
  {
    id: 4,
    title: '探厂实拍 | 走进深圳AI视觉检测设备制造商',
    titleEn: 'Factory Tour | Inside Shenzhen AI Vision Equipment Manufacturer',
    type: 'vlog',
    cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600',
    author: '工业探厂Vlog',
    views: 234000,
    category: 'vlog',
    tags: ['探厂', '深圳', '制造业']
  }
];

// Suppliers Data
export const suppliers = [
  { 
    id: 1, 
    name: '深圳智视科技有限公司', 
    nameEn: 'Shenzhen Smart Vision Tech',
    mainProducts: 'AI视觉检测系统', 
    mainProductsEn: 'AI Vision Systems',
    years: 8, 
    certifications: ['ISO9001', '高新技术企业'], 
    certificationsEn: ['ISO9001', 'High-Tech Enterprise'],
    rating: 4.9, 
    orders: 1234, 
    logo: 'https://ui-avatars.com/api/?name=ZS&background=0D8ABC&color=fff',
    description: '专注于工业AI视觉检测解决方案，拥有自主研发的深度学习算法平台。',
    descriptionEn: 'Focusing on industrial AI vision inspection solutions with self-developed deep learning algorithm platform.'
  },
  { 
    id: 2, 
    name: '杭州精准视觉设备厂', 
    nameEn: 'Hangzhou Precision Vision Factory',
    mainProducts: '工业相机及镜头', 
    mainProductsEn: 'Industrial Cameras & Lenses',
    years: 12, 
    certifications: ['CE认证', 'ISO14001'], 
    certificationsEn: ['CE', 'ISO14001'],
    rating: 4.8, 
    orders: 2156, 
    logo: 'https://ui-avatars.com/api/?name=JZ&background=22C55E&color=fff',
    description: '国内领先的工业相机制造商，产品广泛应用于电子、汽车、医药等行业。',
    descriptionEn: 'Leading domestic industrial camera manufacturer, products widely used in electronics, automotive, pharmaceutical industries.'
  },
  { 
    id: 3, 
    name: '上海光源智能装备', 
    nameEn: 'Shanghai Light Source Intelligent',
    mainProducts: '机器视觉光源', 
    mainProductsEn: 'Machine Vision Lighting',
    years: 6, 
    certifications: ['3C认证', '专利20+'], 
    certificationsEn: ['3C', 'Patents 20+'],
    rating: 4.7, 
    orders: 987, 
    logo: 'https://ui-avatars.com/api/?name=GY&background=F59E0B&color=fff',
    description: '专业研发生产机器视觉LED光源，提供定制化光源解决方案。',
    descriptionEn: 'Professional R&D and production of machine vision LED lighting, providing customized lighting solutions.'
  },
  { 
    id: 4, 
    name: '北京博视自动化技术', 
    nameEn: 'Beijing BoShi Automation',
    mainProducts: '自动化检测方案', 
    mainProductsEn: 'Automation Solutions',
    years: 15, 
    certifications: ['ISO9001', '军工资质'], 
    certificationsEn: ['ISO9001', 'Military Qual'],
    rating: 5.0, 
    orders: 3456, 
    logo: 'https://ui-avatars.com/api/?name=BS&background=EF4444&color=fff',
    description: '资深自动化系统集成商，服务于航空航天、军工等高端制造领域。',
    descriptionEn: 'Senior automation system integrator, serving aerospace, military and other high-end manufacturing fields.'
  },
];

// Procurements Data
export const procurements = [
  { 
    id: 1, 
    title: '求购10台2D视觉检测设备用于手机屏幕检测', 
    titleEn: 'Buying 10 units of 2D Vision Inspection for Phone Screens',
    quantity: '10台', 
    quantityEn: '10 Units',
    budget: '15-20万', 
    budgetEn: '150k-200k',
    deadline: '7天', 
    deadlineEn: '7 Days',
    location: '广东深圳', 
    locationEn: 'Shenzhen, GD',
    time: '2小时前',
    timeEn: '2h ago',
    description: '急需采购一批用于手机屏幕表面划痕、坏点检测的2D视觉设备。要求检测精度0.01mm，检测速度<1s/pcs。',
    descriptionEn: 'Urgently need to purchase a batch of 2D vision equipment for phone screen surface scratch and dead pixel detection. Requirement: accuracy 0.01mm, speed <1s/pcs.'
  },
  { 
    id: 2, 
    title: '采购工业相机500万像素GigE接口50套', 
    titleEn: 'Procuring 50 sets of 5MP GigE Industrial Cameras',
    quantity: '50套', 
    quantityEn: '50 Sets',
    budget: '面议', 
    budgetEn: 'Negotiable',
    deadline: '15天', 
    deadlineEn: '15 Days',
    location: '江苏苏州', 
    locationEn: 'Suzhou, JS',
    time: '5小时前',
    timeEn: '5h ago',
    description: '寻找长期合作供应商，采购500万像素全局快门工业相机，GigE接口，兼容Halcon。',
    descriptionEn: 'Looking for long-term suppliers for 5MP global shutter industrial cameras, GigE interface, compatible with Halcon.'
  },
  { 
    id: 3, 
    title: '寻3D激光扫描系统用于汽车零件检测', 
    titleEn: 'Seeking 3D Laser Scanning System for Auto Parts',
    quantity: '3套', 
    quantityEn: '3 Sets',
    budget: '80-100万', 
    budgetEn: '800k-1M',
    deadline: '30天', 
    deadlineEn: '30 Days',
    location: '上海', 
    locationEn: 'Shanghai',
    time: '1天前',
    timeEn: '1d ago',
    description: '汽车零部件工厂，需要3D激光扫描系统检测铸件尺寸偏差。',
    descriptionEn: 'Auto parts factory needs 3D laser scanning system to detect casting dimension deviations.'
  },
  { 
    id: 4, 
    title: '长期采购LED环形光源各种规格', 
    titleEn: 'Long-term Purchase of LED Ring Lights (Various Specs)',
    quantity: '长期', 
    quantityEn: 'Long-term',
    budget: '按批次', 
    budgetEn: 'Per Batch',
    deadline: '长期有效', 
    deadlineEn: 'Ongoing',
    location: '浙江杭州', 
    locationEn: 'Hangzhou, ZJ',
    time: '2天前',
    timeEn: '2d ago',
    description: '视觉集成商，长期采购各种规格LED环形光源，要求稳定性好，性价比高。',
    descriptionEn: 'Vision integrator, long-term purchase of various specs LED ring lights, requiring good stability and high cost-performance.'
  },
  { 
    id: 5, 
    title: '求购OCR字符识别系统及配套软件', 
    titleEn: 'Buying OCR System & Software',
    quantity: '5套', 
    quantityEn: '5 Sets',
    budget: '10-15万', 
    budgetEn: '100k-150k',
    deadline: '10天', 
    deadlineEn: '10 Days',
    location: '湖北武汉', 
    locationEn: 'Wuhan, HB',
    time: '3天前',
    timeEn: '3d ago',
    description: '物流分拣线需要OCR系统识别包裹面单信息，支持高速动态识别。',
    descriptionEn: 'Logistics sorting line needs OCR system to recognize package label info, supporting high-speed dynamic recognition.'
  },
  { 
    id: 6, 
    title: '采购表面缺陷检测系统用于钢板生产线', 
    titleEn: 'Procuring Surface Defect Detection for Steel Line',
    quantity: '2套', 
    quantityEn: '2 Sets',
    budget: '面议', 
    budgetEn: 'Negotiable',
    deadline: '20天', 
    deadlineEn: '20 Days',
    location: '河北唐山', 
    locationEn: 'Tangshan, HB',
    time: '4天前',
    timeEn: '4d ago',
    description: '钢厂冷轧线，需要在线检测钢板表面缺陷（划痕、凹坑、锈斑等）。',
    descriptionEn: 'Steel mill cold rolling line, needs online detection of steel plate surface defects (scratches, pits, rust spots, etc.).'
  },
];

// Search Function
export const searchData = (query, lang = 'zh') => {
  if (!query) return { products: [], content: [] };
  
  const lowerQuery = query.toLowerCase();
  
  const filteredProducts = products.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(lowerQuery);
    const nameEnMatch = item.nameEn.toLowerCase().includes(lowerQuery);
    const descMatch = item.description.toLowerCase().includes(lowerQuery);
    const supplierMatch = item.supplier.toLowerCase().includes(lowerQuery) || item.supplierEn.toLowerCase().includes(lowerQuery);
    const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    
    return nameMatch || nameEnMatch || descMatch || supplierMatch || tagMatch;
  });

  const filteredContent = discoveryContent.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const titleEnMatch = item.titleEn.toLowerCase().includes(lowerQuery);
    const authorMatch = item.author.toLowerCase().includes(lowerQuery);
    const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    
    return titleMatch || titleEnMatch || authorMatch || tagMatch;
  });

  return {
    products: filteredProducts,
    content: filteredContent
  };
};

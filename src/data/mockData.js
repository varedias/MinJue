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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Play, FileText, Eye, ThumbsUp, Star, Building2, ShoppingCart, Clock, ChevronDown, Menu, X } from 'lucide-react';
import { suppliers, procurements, products } from '../data/mockData';
import AIAssistantFloat, { AIAssistantButton } from '../components/AIAssistantFloat';

const Home = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 完整的设备分类数据
  const equipmentCategories = [
    { 
      id: 1,
      name: 'AI视觉检测设备',
      subcategories: [
        { name: '2D视觉检测系统', products: ['平面缺陷检测', '尺寸测量系统', '字符识别OCR', '条码扫描系统', '表面质量检测'] },
        { name: '3D视觉检测系统', products: ['激光三角测量', '结构光扫描', '飞行时间ToF', '双目立体视觉', '线激光轮廓测量'] },
        { name: '智能分拣系统', products: ['视觉引导分拣', 'Delta并联机器人', '颜色识别分拣', '形状识别分拣', '混合物料分拣'] },
        { name: 'AI深度学习检测', products: ['缺陷识别算法', '目标检测系统', '图像分类系统', '语义分割', '实例分割'] },
        { name: '在线检测系统', products: ['高速检测系统', '连续流水线检测', '实时质量监控', '数据追溯系统', 'MES集成'] }
      ]
    },
    { 
      id: 2,
      name: '工业相机',
      subcategories: [
        { name: '面阵相机', products: ['CCD相机', 'CMOS相机', '高分辨率相机', '高速相机', '低照度相机'] },
        { name: '线阵相机', products: ['单线阵相机', '多线阵相机', '彩色线阵', '红外线阵', 'TDI线阵相机'] },
        { name: '智能相机', products: ['嵌入式视觉', '一体化相机', 'AI智能相机', '边缘计算相机', '工业物联网相机'] },
        { name: '特殊相机', products: ['红外热成像', '紫外相机', '高光谱相机', 'X射线相机', '偏振相机'] },
        { name: '3D相机', products: ['TOF相机', '结构光相机', '双目相机', '激光轮廓相机', '光场相机'] }
      ]
    },
    { 
      id: 3,
      name: '镜头与光源',
      subcategories: [
        { name: '工业镜头', products: ['定焦镜头', '变焦镜头', '远心镜头', '鱼眼镜头', '线扫描镜头'] },
        { name: 'LED光源', products: ['环形光源', '条形光源', '背光源', '同轴光源', 'AOI光源'] },
        { name: '特殊光源', products: ['紫外光源', '红外光源', '激光光源', 'X射线光源', '多光谱光源'] },
        { name: '光源控制器', products: ['恒流源控制器', '频闪控制器', '调光控制器', '多通道控制器', 'PWM控制器'] },
        { name: '光学配件', products: ['偏振镜', '滤光片', '扩散板', '光纤导光', '积分球'] }
      ]
    },
    { 
      id: 4,
      name: '图像采集卡',
      subcategories: [
        { name: 'PCIe采集卡', products: ['单路采集卡', '多路采集卡', '高速采集卡', 'GPU采集卡', 'FPGA采集卡'] },
        { name: 'USB采集卡', products: ['USB3.0采集卡', 'USB3.1采集卡', '外置采集盒', '便携式采集', 'USB3.2采集'] },
        { name: '专用接口卡', products: ['Camera Link', 'CoaXPress', 'GigE采集卡', '10GigE采集卡', '25GigE采集卡'] },
        { name: '图像处理卡', products: ['FPGA处理卡', 'GPU处理卡', 'DSP处理卡', 'AI加速卡', 'NPU处理卡'] },
        { name: '视频采集卡', products: ['HDMI采集', 'SDI采集', '模拟信号采集', '4K采集卡', '8K采集卡'] }
      ]
    },
    { 
      id: 5,
      name: '视觉软件',
      subcategories: [
        { name: '图像处理软件', products: ['Halcon', 'VisionPro', 'OpenCV', 'Matlab Vision', 'Labview Vision'] },
        { name: 'AI训练平台', products: ['TensorFlow', 'PyTorch', '深度学习框架', '模型训练工具', 'AutoML平台'] },
        { name: '3D视觉软件', products: ['点云处理', '三维重建', '3D测量软件', 'CAD比对', '逆向工程'] },
        { name: '机器人视觉', products: ['视觉定位', '轨迹规划', '手眼标定', '机器人引导', '抓取规划'] },
        { name: '质量管理系统', products: ['MES系统', 'SPC统计', '追溯系统', '报表分析', 'BI数据看板'] }
      ]
    },
    { 
      id: 6,
      name: '机器人与自动化',
      subcategories: [
        { name: '工业机器人', products: ['六轴机器人', 'SCARA机器人', 'Delta机器人', '协作机器人', 'AGV搬运机器人'] },
        { name: '机械手', products: ['气动机械手', '电动机械手', '伺服机械手', '真空吸盘', '夹爪'] },
        { name: '输送系统', products: ['皮带输送', '链板输送', '滚筒输送', '柔性输送', '螺旋输送'] },
        { name: '定位系统', products: ['精密平移台', '旋转台', 'XYZ平台', '六自由度平台', '音圈电机平台'] },
        { name: '控制系统', products: ['PLC控制器', '运动控制卡', '伺服驱动器', '触摸屏HMI', '工业电脑'] }
      ]
    },
    { 
      id: 7,
      name: '测量仪器',
      subcategories: [
        { name: '激光测量', products: ['激光测距', '激光轮廓', '激光跟踪仪', '激光干涉仪', '激光扫描仪'] },
        { name: '光学测量', products: ['影像测量仪', '光学显微镜', '工具显微镜', '投影仪', '轮廓投影仪'] },
        { name: '接触式测量', products: ['三坐标测量', '轮廓仪', '粗糙度仪', '圆度仪', '硬度计'] },
        { name: '在线测量', products: ['在线测厚', '在线测宽', '在线尺寸', '在线重量', '在线缺陷检测'] },
        { name: '光谱分析', products: ['光谱仪', '色差仪', '光泽度仪', '白度仪', '雾度仪'] }
      ]
    },
    { 
      id: 8,
      name: '工程机械',
      subcategories: [
        { name: '挖掘机械', products: ['大型挖掘机(40-100吨)', '超大型挖掘机(100吨以上)', '中型挖掘机(13-40吨)', '小型挖掘机(13吨以下)', '微型挖掘机'] },
        { name: '铲土运输机械', products: ['推土机', '平地机', '铲运机', '装载机', '滑移装载机'] },
        { name: '起重机械', products: ['汽车起重机', '履带起重机', '塔式起重机', '门式起重机', '桥式起重机'] },
        { name: '压实机械', products: ['压路机', '夯实机', '振动压路机', '轮胎压路机', '冲击压路机'] },
        { name: '筑养路机械', products: ['沥青摊铺机', '混凝土搅拌站', '铣刨机', '灌缝机', '划线机'] }
      ]
    },
    { 
      id: 9,
      name: '酒店用品',
      subcategories: [
        { name: '客房布草', products: ['床单', '被套', '枕套', '毛巾', '浴袍'] },
        { name: '一次性用品', products: ['牙刷', '牙膏', '洗发水', '沐浴露', '拖鞋'] },
        { name: '客房电器', products: ['电水壶', '吹风机', '台灯', '保险箱', '冰箱'] },
        { name: '餐饮设备', products: ['咖啡机', '制冰机', '洗碗机', '消毒柜', '烤箱'] },
        { name: '清洁用品', products: ['吸尘器', '清洁剂', '垃圾桶', '拖把', '抹布'] }
      ]
    },
    { 
      id: 10,
      name: '水工业',
      subcategories: [
        { name: '泵阀管道', products: ['离心泵', '闸阀', '钢管', '塑料管', '球阀'] },
        { name: '水处理设备', products: ['净水器', '纯水机', '消毒设备', '过滤器', '反渗透设备'] },
        { name: '仪器仪表', products: ['流量计', '压力表', '水质分析仪', '液位计', 'PH计'] },
        { name: '水泵系统', products: ['潜水泵', '污水泵', '增压泵', '循环泵', '变频供水设备'] },
        { name: '水处理药剂', products: ['絮凝剂', '消毒剂', '阻垢剂', '除藻剂', 'PH调节剂'] }
      ]
    },
    { 
      id: 11,
      name: '电子元器件',
      subcategories: [
        { name: '被动元件', products: ['电阻', '电容', '电感', '变压器', '晶振'] },
        { name: '主动元件', products: ['二极管', '三极管', 'MOS管', 'IGBT', '集成电路'] },
        { name: '连接器', products: ['排针排母', '接线端子', 'USB连接器', 'HDMI接口', '网络接口'] },
        { name: '传感器', products: ['温度传感器', '压力传感器', '位移传感器', '光电传感器', '加速度传感器'] },
        { name: '显示器件', products: ['LED灯', 'LCD屏', 'OLED屏', '数码管', '点阵屏'] }
      ]
    },
    { 
      id: 12,
      name: '包装设备',
      subcategories: [
        { name: '包装机械', products: ['封口机', '真空包装机', '收缩包装机', '贴标机', '打包机'] },
        { name: '灌装设备', products: ['液体灌装机', '粉剂灌装机', '颗粒灌装机', '膏体灌装机', '自动灌装线'] },
        { name: '包装材料', products: ['塑料膜', '纸箱', '托盘', '缓冲材料', '标签'] },
        { name: '码垛设备', products: ['码垛机器人', '自动码垛机', '拆垛机', '输送系统', '仓储系统'] },
        { name: '检测设备', products: ['金属检测机', 'X光检测机', '重量检测', '视觉检测', '泄漏检测'] }
      ]
    }
  ];

  // 发现推荐内容 - 3页数据
  const allDiscoveryContent = [
    // 第1页
    [
      { id: 1, type: 'video', title: 'AI视觉检测在PCB板检测中的应用案例', author: '智能制造研究院', views: 15200, likes: 892, duration: '12:35', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' },
      { id: 2, type: 'article', title: '如何选择合适的工业相机？5大关键参数详解', author: '机器视觉专家', views: 8500, likes: 456, readTime: '8分钟', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80' },
      { id: 3, type: 'video', title: '3D视觉检测技术突破：亚微米级精度实现', author: '精密检测技术', views: 12800, likes: 723, duration: '15:20', thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80' },
      { id: 4, type: 'article', title: '表面缺陷检测系统部署指南与最佳实践', author: '工业4.0实验室', views: 6700, likes: 334, readTime: '10分钟', thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80' },
      { id: 5, type: 'video', title: 'AI+机器视觉：智能工厂质检革命', author: '智造科技', views: 19500, likes: 1205, duration: '18:45', thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80' },
      { id: 6, type: 'article', title: '光源选型全攻略：让检测精度提升50%', author: '视觉照明专家', views: 5600, likes: 289, readTime: '6分钟', thumbnail: 'https://images.unsplash.com/photo-1581093458791-9d58b3fbbd0d?auto=format&fit=crop&w=400&q=80' },
    ],
    // 第2页
    [
      { id: 7, type: 'article', title: '工业镜头畸变校正技术深度解析', author: '光学工程师', views: 7200, likes: 412, readTime: '12分钟', thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80' },
      { id: 8, type: 'video', title: '实时缺陷检测：深度学习算法训练全流程', author: 'AI视觉算法', views: 22000, likes: 1567, duration: '25:30', thumbnail: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80' },
      { id: 9, type: 'video', title: 'OCR字符识别在生产线上的应用', author: '智能识别技术', views: 9800, likes: 542, duration: '10:15', thumbnail: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=400&q=80' },
      { id: 10, type: 'article', title: '图像采集卡选购指南：接口类型全对比', author: '硬件工程师', views: 4500, likes: 223, readTime: '7分钟', thumbnail: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=400&q=80' },
      { id: 11, type: 'video', title: '汽车零部件智能检测系统完整方案', author: '汽车工业自动化', views: 16700, likes: 934, duration: '20:10', thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80' },
      { id: 12, type: 'article', title: '机器视觉系统ROI计算与投资回报分析', author: '工业咨询顾问', views: 5900, likes: 301, readTime: '9分钟', thumbnail: 'https://images.unsplash.com/photo-1581094798828-37b7cf641a6e?auto=format&fit=crop&w=400&q=80' },
    ],
    // 第3页
    [
      { id: 13, type: 'video', title: '药品包装智能检测：合规性与效率双提升', author: '医药装备技术', views: 11200, likes: 678, duration: '14:25', thumbnail: 'https://images.unsplash.com/photo-1581095949419-fccbf82e3e7d?auto=format&fit=crop&w=400&q=80' },
      { id: 14, type: 'article', title: '工业4.0时代的视觉检测云平台架构', author: '云计算专家', views: 6800, likes: 367, readTime: '11分钟', thumbnail: 'https://images.unsplash.com/photo-1581096723826-c0d7b2f20e9e?auto=format&fit=crop&w=400&q=80' },
      { id: 15, type: 'video', title: '纺织品表面瑕疵检测AI算法实战', author: '纺织智能化', views: 8900, likes: 487, duration: '16:50', thumbnail: 'https://images.unsplash.com/photo-1581097518616-a212e1db7031?auto=format&fit=crop&w=400&q=80' },
      { id: 16, type: 'article', title: '多相机同步技术在360度检测中的应用', author: '系统集成工程师', views: 4100, likes: 198, readTime: '8分钟', thumbnail: 'https://images.unsplash.com/photo-1581098365948-6b5a5b5f9e4f?auto=format&fit=crop&w=400&q=80' },
      { id: 17, type: 'video', title: '食品安全检测：X射线+视觉双重保障', author: '食品安全技术', views: 13500, likes: 801, duration: '13:40', thumbnail: 'https://images.unsplash.com/photo-1581099710419-e5de6c7ce08c?auto=format&fit=crop&w=400&q=80' },
      { id: 18, type: 'article', title: '边缘计算在工业视觉中的最新进展', author: '边缘AI研究', views: 7600, likes: 423, readTime: '10分钟', thumbnail: 'https://images.unsplash.com/photo-1581101215084-0f3a4c9f32e0?auto=format&fit=crop&w=400&q=80' },
    ]
  ];

  // 优选商品数据 - 从mockData获取前6个产品（民崛的产品在前面）
  const featuredProducts = products.slice(0, 6).map(product => ({
    id: product.id,
    name: product.name,
    price: product.price.toLocaleString(),
    unit: '台',
    specs: product.tags.join(' | '),
    sales: product.sales,
    rating: product.rating,
    image: product.image
  }));

  const currentDiscoveryContent = allDiscoveryContent[currentPage - 1] || [];

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* 搜索栏 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="搜索设备分类、产品型号、供应商..."
                className="w-full bg-gray-50 text-gray-900 rounded-lg py-4 pl-12 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
            >
              搜索
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 企业级产品分类模块 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 标题栏 */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-8 py-5 flex items-center justify-between">
            <h2 className="text-white font-bold text-2xl flex items-center gap-3">
              <span className="w-1 h-8 bg-white rounded-full"></span>
              设备分类
            </h2>
            {/* 移动端菜单按钮 */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* 左侧分类侧边栏 */}
            <div className={`
              w-full md:w-72 lg:w-80 border-r border-gray-200 flex-shrink-0 bg-gray-50
              ${isMobileMenuOpen ? 'block' : 'hidden md:block'}
            `}>
              <div className="sticky top-0 max-h-[calc(100vh-200px)] overflow-y-auto">
                {equipmentCategories.map((category, index) => (
                  <div 
                    key={category.id}
                    className={`
                      px-6 py-5 border-b border-gray-200 cursor-pointer transition-all duration-200
                      ${selectedCategory === category.id 
                        ? 'bg-blue-600 text-white border-l-4 border-l-white shadow-md' 
                        : 'hover:bg-white hover:shadow-sm text-gray-700 hover:text-blue-600'
                      }
                    `}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <span className={`
                          w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
                          ${selectedCategory === category.id 
                            ? 'bg-white text-blue-600' 
                            : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                          }
                          transition-colors
                        `}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-semibold text-base">{category.name}</span>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`
                          transition-transform
                          ${selectedCategory === category.id ? 'rotate-180 text-white' : 'text-gray-400 group-hover:text-blue-600'}
                        `} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 右侧内容展示区 */}
            <div className="flex-grow bg-white min-h-[600px]">
              {selectedCategory ? (
                <div className="p-8 animate-fadeIn">
                  {/* 分类标题 */}
                  <div className="mb-8 pb-6 border-b-2 border-gray-200">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {equipmentCategories.find(c => c.id === selectedCategory)?.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      共 {equipmentCategories.find(c => c.id === selectedCategory)?.subcategories.length} 个子分类 · 
                      优质供应商认证 · 全方位技术支持
                    </p>
                  </div>
                  
                  {/* 子分类网格布局 */}
                  <div className="space-y-8">
                    {equipmentCategories.find(c => c.id === selectedCategory)?.subcategories.map((sub, subIdx) => (
                      <div 
                        key={subIdx} 
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                      >
                        {/* 子分类标题 */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                          <h4 className="font-bold text-xl text-gray-900">
                            {sub.name}
                          </h4>
                          <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                            {sub.products.length} 项产品
                          </span>
                        </div>
                        
                        {/* 产品列表 - 水平排列，用竖线分隔 */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                          {sub.products.map((product, pIdx) => (
                            <React.Fragment key={pIdx}>
                              <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer hover:font-medium transition-all px-2 py-1 rounded hover:bg-blue-50">
                                {product}
                              </span>
                              {pIdx < sub.products.length - 1 && (
                                <span className="text-gray-300">|</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[600px] text-gray-400">
                  <div className="w-32 h-32 mb-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                    <Search size={64} className="text-blue-300" />
                  </div>
                  <p className="text-xl font-medium text-gray-500 mb-2">请选择左侧分类</p>
                  <p className="text-sm text-gray-400">点击左侧分类查看详细的子分类和产品信息</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 发现推荐模块 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
              发现推荐
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      w-10 h-10 rounded-lg font-medium transition-all
                      ${currentPage === page 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <a 
                href="/discovery" 
                className="text-blue-600 text-sm hover:text-blue-700 font-medium flex items-center gap-1 group"
              >
                查看更多 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDiscoveryContent.map((item) => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/content/${item.id}`)}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  {item.type === 'video' && (
                    <>
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Play size={28} className="text-blue-600 group-hover:text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                        {item.duration}
                      </div>
                    </>
                  )}
                  {item.type === 'article' && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <FileText size={14} />
                      文章
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-blue-600 min-h-[48px]">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium">{item.author}</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye size={14} /> {item.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp size={14} /> {item.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 优选商品模块 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                优选商品
              </h2>
              <p className="text-sm text-gray-500 mt-2 ml-5">以下价格仅供参考,实际价格请联系供应商议价</p>
            </div>
            <button onClick={() => navigate('/mall')} className="text-blue-600 text-sm hover:text-blue-700 font-medium flex items-center gap-1 group">
              查看更多 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group"
              >
                <div className="h-36 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[40px] group-hover:text-blue-600">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.specs}</p>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-400">已售{product.sales}</span>
                </div>
                <div className="text-red-500 font-bold">
                  ¥<span className="text-lg">{product.price}</span>
                  <span className="text-xs text-gray-500 font-normal">/{product.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 优质供应商模块 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
              优质供应商
            </h2>
            <button onClick={() => navigate('/suppliers')} className="text-blue-600 text-sm hover:text-blue-700 font-medium flex items-center gap-1 group">
              更多供应商 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suppliers.map((supplier) => (
              <div 
                key={supplier.id}
                onClick={() => navigate(`/supplier/${supplier.id}`)}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={supplier.logo} alt={supplier.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600">{supplier.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                      <Building2 size={16} className="text-blue-600" />
                      主营: {supplier.mainProducts}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {supplier.certifications.map((cert, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          ✓ {cert}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span className="flex items-center gap-1 font-medium">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        {supplier.rating}分
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} className="text-gray-400" />
                        {supplier.years}年经验
                      </span>
                      <span className="flex items-center gap-1">
                        <ShoppingCart size={16} className="text-gray-400" />
                        成交{supplier.orders}笔
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 最新采购模块 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
              最新采购
            </h2>
            <button onClick={() => navigate('/suppliers')} className="text-blue-600 text-sm hover:text-blue-700 font-medium flex items-center gap-1 group">
              查看全部 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="space-y-4">
            {procurements.map((procurement) => (
              <div 
                key={procurement.id} 
                className="border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 flex-grow pr-4 group-hover:text-blue-600 text-base">
                    {procurement.title}
                  </h3>
                  <span className="text-xs text-gray-400 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                    {procurement.time}
                  </span>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-2">
                    <span className="text-gray-400">数量:</span>
                    <span className="font-medium text-gray-900">{procurement.quantity}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-gray-400">预算:</span>
                    <span className="font-medium text-orange-600">{procurement.budget}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-gray-400">截止:</span>
                    <span className="font-medium text-red-600">{procurement.deadline}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span className="font-medium">{procurement.location}</span>
                  </span>
                </div>
                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/procurement/${procurement.id}`);
                    }}
                    className="flex-1 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
                  >
                    我要报价
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/procurement/${procurement.id}`);
                    }}
                    className="flex-1 px-5 py-2 border-2 border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  >
                    查看详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI助手悬浮按钮 */}
      {!isAIAssistantOpen && (
        <AIAssistantButton onClick={() => setIsAIAssistantOpen(true)} />
      )}

      {/* AI助手悬浮窗 */}
      <AIAssistantFloat 
        isOpen={isAIAssistantOpen} 
        onClose={() => setIsAIAssistantOpen(false)} 
      />
    </div>
  );
};

export default Home;
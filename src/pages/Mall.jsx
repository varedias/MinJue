import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, MessageCircle, Eye, TrendingUp, Package, Grid3x3, List } from 'lucide-react';
import AIAssistantFloat, { AIAssistantButton } from '../components/AIAssistantFloat';

const Mall = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('hot');
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  // 商品分类
  const categories = [
    { id: 'all', name: '全部商品', count: 48 },
    { id: 'ai-vision', name: 'AI视觉检测', count: 12 },
    { id: 'camera', name: '工业相机', count: 15 },
    { id: 'lens', name: '镜头光源', count: 8 },
    { id: 'robot', name: '机器人', count: 6 },
    { id: 'measure', name: '测量仪器', count: 7 }
  ];

  // 排序选项
  const sortOptions = [
    { id: 'hot', name: '综合排序' },
    { id: 'sales', name: '销量优先' },
    { id: 'price-low', name: '价格从低到高' },
    { id: 'price-high', name: '价格从高到低' },
    { id: 'newest', name: '最新上架' }
  ];

  // 商品数据
  const products = [
    {
      id: 1,
      name: '海康威视AI视觉检测系统 VIS-2000',
      price: 28900,
      originalPrice: 35000,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      category: 'ai-vision',
      rating: 4.9,
      sales: 1245,
      views: 15600,
      tags: ['AI检测', '高精度', '包邮'],
      supplier: {
        id: 1,
        name: '深圳智视科技有限公司',
        logo: 'https://ui-avatars.com/api/?name=ZS&background=0D8ABC&color=fff',
        rating: 4.9,
        years: 8
      },
      specs: ['2D+3D双模式', '深度学习算法', '0.1mm精度'],
      inStock: true,
      freeShipping: true,
      promotion: '限时优惠'
    },
    {
      id: 2,
      name: 'Basler ace系列工业相机套装',
      price: 4299,
      originalPrice: 5200,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
      category: 'camera',
      rating: 4.8,
      sales: 2234,
      views: 28900,
      tags: ['高性价比', '现货', '包邮'],
      supplier: {
        id: 2,
        name: '杭州精准视觉设备厂',
        logo: 'https://ui-avatars.com/api/?name=JZ&background=22C55E&color=fff',
        rating: 4.8,
        years: 12
      },
      specs: ['200万像素', 'GigE接口', '含镜头'],
      inStock: true,
      freeShipping: true,
      promotion: '爆款热卖'
    },
    {
      id: 3,
      name: 'CCS LED环形光源 LDR2-100',
      price: 680,
      originalPrice: 850,
      image: 'https://images.unsplash.com/photo-1581093458791-9d58b3fbbd0d?w=400',
      category: 'lens',
      rating: 4.8,
      sales: 5678,
      views: 45200,
      tags: ['畅销', '质保3年', '包邮'],
      supplier: {
        id: 3,
        name: '上海光源智能装备',
        logo: 'https://ui-avatars.com/api/?name=GY&background=F59E0B&color=fff',
        rating: 4.7,
        years: 6
      },
      specs: ['高亮度', '可调光', '多种规格'],
      inStock: true,
      freeShipping: true,
      promotion: null
    },
    {
      id: 4,
      name: '基恩士激光位移传感器 LK-G5000',
      price: 15800,
      originalPrice: 18500,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      category: 'measure',
      rating: 4.9,
      sales: 867,
      views: 12300,
      tags: ['进口品牌', '高精度', '包邮'],
      supplier: {
        id: 4,
        name: '北京博视自动化技术',
        logo: 'https://ui-avatars.com/api/?name=BS&background=EF4444&color=fff',
        rating: 5.0,
        years: 15
      },
      specs: ['微米级精度', '抗干扰强', '稳定可靠'],
      inStock: true,
      freeShipping: true,
      promotion: '新品上市'
    },
    {
      id: 5,
      name: '大华智能相机 DH-IPC-AI',
      price: 6800,
      originalPrice: 8200,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      category: 'camera',
      rating: 4.9,
      sales: 1567,
      views: 18900,
      tags: ['AI算法', '即插即用', '包邮'],
      supplier: {
        id: 1,
        name: '深圳智视科技有限公司',
        logo: 'https://ui-avatars.com/api/?name=ZS&background=0D8ABC&color=fff',
        rating: 4.9,
        years: 8
      },
      specs: ['AI算法内置', '边缘计算', '即插即用'],
      inStock: true,
      freeShipping: true,
      promotion: null
    },
    {
      id: 6,
      name: 'ABB IRB 1200工业机器人',
      price: 85000,
      originalPrice: 95000,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      category: 'robot',
      rating: 5.0,
      sales: 234,
      views: 8900,
      tags: ['国际品牌', '质保2年', '包安装'],
      supplier: {
        id: 4,
        name: '北京博视自动化技术',
        logo: 'https://ui-avatars.com/api/?name=BS&background=EF4444&color=fff',
        rating: 5.0,
        years: 15
      },
      specs: ['6轴', '负载7kg', '视觉引导'],
      inStock: true,
      freeShipping: true,
      promotion: '企业专享'
    },
    {
      id: 7,
      name: 'MVTec Halcon 机器视觉软件',
      price: 18000,
      originalPrice: 22000,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
      category: 'ai-vision',
      rating: 4.9,
      sales: 2345,
      views: 35600,
      tags: ['正版授权', '终身更新', '技术支持'],
      supplier: {
        id: 2,
        name: '杭州精准视觉设备厂',
        logo: 'https://ui-avatars.com/api/?name=JZ&background=22C55E&color=fff',
        rating: 4.8,
        years: 12
      },
      specs: ['完整版授权', '终身更新', '技术支持'],
      inStock: true,
      freeShipping: false,
      promotion: '年终促销'
    },
    {
      id: 8,
      name: '蔡司三坐标测量机 CONTURA',
      price: 350000,
      originalPrice: 420000,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      category: 'measure',
      rating: 5.0,
      sales: 45,
      views: 5600,
      tags: ['德国进口', '高精度', '包安装'],
      supplier: {
        id: 3,
        name: '上海光源智能装备',
        logo: 'https://ui-avatars.com/api/?name=GY&background=F59E0B&color=fff',
        rating: 4.7,
        years: 6
      },
      specs: ['高精度', '自动化', '软件强大'],
      inStock: true,
      freeShipping: true,
      promotion: null
    },
    {
      id: 9,
      name: '康耐视In-Sight 3D视觉传感器',
      price: 15800,
      originalPrice: 18900,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      category: 'ai-vision',
      rating: 4.8,
      sales: 867,
      views: 13400,
      tags: ['美国进口', 'IP67防护', '包邮'],
      supplier: {
        id: 1,
        name: '深圳智视科技有限公司',
        logo: 'https://ui-avatars.com/api/?name=ZS&background=0D8ABC&color=fff',
        rating: 4.9,
        years: 8
      },
      specs: ['激光三角测量', '微米级精度', 'IP67防护'],
      inStock: true,
      freeShipping: true,
      promotion: null
    },
    {
      id: 10,
      name: '富士能工业镜头 16mm定焦',
      price: 1280,
      originalPrice: 1580,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400',
      category: 'lens',
      rating: 4.7,
      sales: 3456,
      views: 28900,
      tags: ['日本品牌', '低畸变', '包邮'],
      supplier: {
        id: 2,
        name: '杭州精准视觉设备厂',
        logo: 'https://ui-avatars.com/api/?name=JZ&background=22C55E&color=fff',
        rating: 4.8,
        years: 12
      },
      specs: ['C口', '低畸变', '高分辨率'],
      inStock: true,
      freeShipping: true,
      promotion: null
    },
    {
      id: 11,
      name: '爱普生SCARA机器人 T3',
      price: 38000,
      originalPrice: 45000,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
      category: 'robot',
      rating: 4.8,
      sales: 456,
      views: 9800,
      tags: ['日本品牌', '高速精准', '包邮'],
      supplier: {
        id: 4,
        name: '北京博视自动化技术',
        logo: 'https://ui-avatars.com/api/?name=BS&background=EF4444&color=fff',
        rating: 5.0,
        years: 15
      },
      specs: ['4轴', '高速精准', '易集成'],
      inStock: true,
      freeShipping: true,
      promotion: '限时优惠'
    },
    {
      id: 12,
      name: '二次元影像测量仪',
      price: 28000,
      originalPrice: 32000,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      category: 'measure',
      rating: 4.7,
      sales: 678,
      views: 11200,
      tags: ['高性价比', '现货', '包邮'],
      supplier: {
        id: 3,
        name: '上海光源智能装备',
        logo: 'https://ui-avatars.com/api/?name=GY&background=F59E0B&color=fff',
        rating: 4.7,
        years: 6
      },
      specs: ['手动+自动', 'CCD相机', '测量软件'],
      inStock: true,
      freeShipping: true,
      promotion: null
    }
  ];

  // 根据分类筛选商品
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">设备商城</h1>
          <p className="text-blue-100">精选优质工业设备供应商,一站式对接平台</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-blue-100">
            <span className="bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full">💼 B2B专业平台</span>
            <span className="bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full">🤝 直连供应商</span>
            <span className="bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full">💰 议价采购</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="搜索商品名称、型号、品牌..."
                className="w-full bg-gray-50 text-gray-900 rounded-lg py-3 pl-12 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              搜索
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Left Sidebar - Categories */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-20">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Filter size={18} />
                商品分类
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{cat.name}</span>
                      <span className="text-xs text-gray-400">({cat.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Filter Bar */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSortBy(option.id)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        sortBy === option.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    <Grid3x3 size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                viewMode === 'grid' ? (
                  // Grid View
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.promotion && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          {product.promotion}
                        </div>
                      )}
                      {product.freeShipping && (
                        <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          包邮
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-full bg-blue-600 bg-opacity-95 text-white py-2 rounded-lg text-sm font-medium hover:bg-opacity-100">
                          查看详情
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[40px] group-hover:text-blue-600">
                        {product.name}
                      </h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400 fill-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                        <span>|</span>
                        <span>已售{product.sales}</span>
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-red-600 font-bold">
                            <span className="text-xs">¥</span>
                            <span className="text-2xl">{product.price.toLocaleString()}</span>
                          </div>
                          {product.originalPrice && (
                            <div className="text-xs text-gray-400 line-through">
                              ¥{product.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/supplier/${product.supplier.id}`);
                          }}
                          className="text-xs text-blue-600 hover:underline"
                        >
                          {product.supplier.name.slice(0, 6)}...
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden p-4 flex gap-4"
                  >
                    <div className="relative w-48 h-48 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.promotion && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          {product.promotion}
                        </div>
                      )}
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">
                          {product.name}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {product.specs.map((spec, idx) => (
                            <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                              {spec}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Star size={16} className="text-yellow-400 fill-yellow-400" />
                            <span className="font-medium">{product.rating}</span>
                          </div>
                          <span>销量: {product.sales}</span>
                          <span>浏览: {product.views}</span>
                        </div>

                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/supplier/${product.supplier.id}`);
                          }}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
                        >
                          <img src={product.supplier.logo} alt={product.supplier.name} className="w-6 h-6 rounded" />
                          <span>{product.supplier.name}</span>
                        </div>
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-red-600 font-bold">
                            <span className="text-sm">¥</span>
                            <span className="text-3xl">{product.price.toLocaleString()}</span>
                          </div>
                          {product.originalPrice && (
                            <div className="text-sm text-gray-400 line-through">
                              原价 ¥{product.originalPrice.toLocaleString()}
                            </div>
                          )}
                          <div className="text-xs text-gray-500 mt-1">参考价格,实际价格请咨询</div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/supplier/${product.supplier.id}`);
                            }}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2"
                          >
                            <MessageCircle size={18} />
                            联系供应商
                          </button>
                          <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
                            查看详情
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">上一页</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">下一页</button>
              </div>
            </div>
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

export default Mall;

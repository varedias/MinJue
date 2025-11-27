import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Phone, Heart, Share2, Shield, Truck, Clock, MessageCircle, ThumbsUp, ChevronRight, Package, Award, CheckCircle, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('detail');

  // 商品详情数据
  const product = {
    id: parseInt(id),
    name: '海康威视AI视觉检测系统 VIS-2000',
    subtitle: '高精度AI视觉检测,支持深度学习算法,工业级品质保证',
    price: 28900,
    originalPrice: 35000,
    discount: 17,
    rating: 4.9,
    reviewCount: 1245,
    sales: 3456,
    stock: 89,
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'
    ],
    tags: ['AI检测', '高精度', '包邮', '质保2年', '7天无理由退换'],
    supplier: {
      id: 1,
      name: '深圳智视科技有限公司',
      logo: 'https://ui-avatars.com/api/?name=ZS&background=0D8ABC&color=fff',
      rating: 4.9,
      years: 8,
      responseRate: 98,
      responseTime: '2小时内',
      location: '广东深圳',
      description: '专注于工业视觉检测系统研发与制造',
      products: 156,
      followers: 2345
    },
    specs: [
      { label: '品牌', value: '海康威视' },
      { label: '型号', value: 'VIS-2000' },
      { label: '检测模式', value: '2D+3D双模式' },
      { label: '精度', value: '0.1mm' },
      { label: '算法', value: '深度学习AI' },
      { label: '接口', value: 'GigE/USB3.0' },
      { label: '工作环境', value: '0-45℃' },
      { label: '防护等级', value: 'IP54' },
      { label: '电源', value: 'DC 24V' },
      { label: '重量', value: '3.5kg' },
      { label: '保修期', value: '2年' },
      { label: '产地', value: '中国' }
    ],
    features: [
      {
        icon: Shield,
        title: '质量保证',
        desc: '正品保证,支持验货'
      },
      {
        icon: Truck,
        title: '包邮配送',
        desc: '全国包邮,48小时发货'
      },
      {
        icon: Clock,
        title: '售后无忧',
        desc: '7天无理由退换货'
      },
      {
        icon: Award,
        title: '质保2年',
        desc: '厂家质保,全国联保'
      }
    ],
    description: `
      <h3>产品简介</h3>
      <p>海康威视AI视觉检测系统VIS-2000是一款集2D和3D视觉检测于一体的高精度智能检测设备。采用先进的深度学习算法,能够快速准确地完成各种复杂工件的检测任务。</p>
      
      <h3>核心优势</h3>
      <ul>
        <li>高精度检测:精度可达0.1mm,满足高标准工业检测需求</li>
        <li>AI智能算法:内置深度学习算法,可自主学习和优化检测模型</li>
        <li>2D+3D双模式:支持平面和立体检测,应用范围更广</li>
        <li>易于集成:标准化接口设计,可快速集成到现有生产线</li>
        <li>稳定可靠:工业级设计,24小时连续工作无压力</li>
      </ul>

      <h3>应用场景</h3>
      <ul>
        <li>电子元器件外观检测</li>
        <li>汽车零部件尺寸测量</li>
        <li>3C产品表面缺陷检测</li>
        <li>医疗器械质量检验</li>
        <li>食品包装完整性检测</li>
      </ul>

      <h3>技术参数</h3>
      <p>检测速度:≤1秒/件<br>
      误检率:≤0.01%<br>
      漏检率:≤0.005%<br>
      图像分辨率:2048×2048<br>
      光源:LED白光/红外光可选</p>
    `,
    reviews: [
      {
        id: 1,
        user: '张先生',
        avatar: 'https://ui-avatars.com/api/?name=ZS&background=random',
        rating: 5,
        date: '2024-01-15',
        content: '设备非常好用,精度高,检测速度快,售后服务也很到位。已经用了3个月,运行稳定,推荐购买!',
        images: [],
        helpful: 234,
        specs: '2D+3D双模式 | 0.1mm精度'
      },
      {
        id: 2,
        user: '李工',
        avatar: 'https://ui-avatars.com/api/?name=LG&background=random',
        rating: 5,
        date: '2024-01-10',
        content: '公司采购了5台,用于汽车零部件检测,效果非常好。AI算法很智能,可以自动学习新的缺陷类型。厂家的技术支持响应很快,解决问题很专业。',
        images: [
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200',
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200'
        ],
        helpful: 189,
        specs: '2D+3D双模式 | 0.1mm精度'
      },
      {
        id: 3,
        user: '王经理',
        avatar: 'https://ui-avatars.com/api/?name=WJL&background=random',
        rating: 4,
        date: '2024-01-05',
        content: '总体不错,性价比很高。软件界面友好,操作简单。如果能增加更多的自定义功能就更完美了。',
        images: [],
        helpful: 156,
        specs: '2D+3D双模式 | 0.1mm精度'
      }
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Basler ace系列工业相机套装',
      price: 4299,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300',
      rating: 4.8,
      sales: 2234
    },
    {
      id: 3,
      name: 'CCS LED环形光源 LDR2-100',
      price: 680,
      image: 'https://images.unsplash.com/photo-1581093458791-9d58b3fbbd0d?w=300',
      rating: 4.8,
      sales: 5678
    },
    {
      id: 4,
      name: '基恩士激光位移传感器',
      price: 15800,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300',
      rating: 4.9,
      sales: 867
    },
    {
      id: 5,
      name: '大华智能相机 DH-IPC-AI',
      price: 6800,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300',
      rating: 4.9,
      sales: 1567
    }
  ];

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-blue-600">首页</button>
            <ChevronRight size={16} />
            <button onClick={() => navigate('/mall')} className="hover:text-blue-600">商城</button>
            <ChevronRight size={16} />
            <span className="text-gray-900">商品详情</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-4"
        >
          <ArrowLeft size={20} />
          返回
        </button>

        {/* Product Info Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-blue-600' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.subtitle}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
                  ))}
                  <span className="ml-2 text-gray-900 font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{product.reviewCount} 评价</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">已售 {product.sales}</span>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-end gap-3 mb-2">
                  <div className="text-blue-600 font-bold">
                    <span className="text-lg">¥</span>
                    <span className="text-4xl">{product.price.toLocaleString()}</span>
                  </div>
                  {product.originalPrice && (
                    <>
                      <span className="text-gray-400 line-through text-lg">¥{product.originalPrice.toLocaleString()}</span>
                    </>
                  )}
                </div>
                <div className="text-sm text-blue-700 font-medium">💡 参考价格,实际价格请联系供应商议价</div>
                <div className="text-xs text-gray-600 mt-1">支持批量采购优惠、定制服务</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="text-center">
                    <feature.icon className="mx-auto mb-2 text-blue-600" size={24} />
                    <div className="text-sm font-medium text-gray-900">{feature.title}</div>
                    <div className="text-xs text-gray-500">{feature.desc}</div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-600 w-20">数量</span>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-x py-2 focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-500 text-sm">库存:{product.stock}件</span>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => navigate(`/supplier/${product.supplier.id}`)}
                    className="flex-1 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-medium text-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    联系供应商
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-4 rounded-lg hover:bg-blue-50 font-medium text-lg flex items-center justify-center gap-2">
                    <Phone size={20} />
                    电话咨询
                  </button>
                  <button className="border-2 border-gray-300 text-gray-600 p-4 rounded-lg hover:bg-gray-50">
                    <Heart size={20} />
                  </button>
                </div>
              </div>

              {/* Supplier Info */}
              <div className="border-t pt-6">
                <div
                  onClick={() => navigate(`/supplier/${product.supplier.id}`)}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-all"
                >
                  <img src={product.supplier.logo} alt={product.supplier.name} className="w-16 h-16 rounded-lg" />
                  <div className="flex-grow">
                    <div className="font-bold text-gray-900 mb-1">{product.supplier.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{product.supplier.description}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>⭐ {product.supplier.rating}</span>
                      <span>经营{product.supplier.years}年</span>
                      <span>{product.supplier.location}</span>
                    </div>
                  </div>
                  <div className="text-blue-600 flex items-center gap-1">
                    进店逛逛
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="border-b">
            <div className="flex">
              {['detail', 'specs', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 font-medium transition-all ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'detail' && '商品详情'}
                  {tab === 'specs' && '规格参数'}
                  {tab === 'reviews' && `用户评价 (${product.reviewCount})`}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'detail' && (
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex py-3 border-b">
                    <span className="text-gray-600 w-32">{spec.label}</span>
                    <span className="text-gray-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-start gap-4">
                      <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full" />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-medium text-gray-900">{review.user}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">{review.specs}</div>
                        <p className="text-gray-700 mb-3">{review.content}</p>
                        {review.images.length > 0 && (
                          <div className="flex gap-2 mb-3">
                            {review.images.map((img, idx) => (
                              <img key={idx} src={img} alt="" className="w-24 h-24 rounded-lg object-cover" />
                            ))}
                          </div>
                        )}
                        <button className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1">
                          <ThumbsUp size={14} />
                          有用 ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">相关推荐</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="cursor-pointer group"
              >
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold">¥{item.price.toLocaleString()}</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    {item.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Phone, Heart, Share2, Shield, Truck, Clock, MessageCircle, ThumbsUp, ChevronRight, Package, Award, CheckCircle, ArrowLeft } from 'lucide-react';
import { products, suppliers } from '../data/mockData';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('detail');

  // 从mockData获取商品详情
  const productData = useMemo(() => {
    return products.find(p => p.id === parseInt(id));
  }, [id]);

  // 获取供应商信息
  const supplierData = useMemo(() => {
    if (!productData) return null;
    return suppliers.find(s => s.name === productData.supplier);
  }, [productData]);

  // 如果找不到商品，显示404
  if (!productData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">商品不存在</h1>
          <button 
            onClick={() => navigate('/mall')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            返回商城
          </button>
        </div>
      </div>
    );
  }

  // 构建商品详情对象
  const product = {
    id: productData.id,
    name: productData.name,
    subtitle: productData.description,
    price: productData.price,
    originalPrice: Math.round(productData.price * 1.2),
    discount: 17,
    rating: productData.rating,
    reviewCount: productData.sales,
    sales: productData.sales,
    stock: 89,
    images: [
      productData.image,
      productData.parameterImage || productData.image,
      productData.image,
      productData.image,
      productData.image
    ].filter(Boolean),
    tags: [...productData.tags, '质保2年', '7天无理由退换'],
    supplier: {
      id: supplierData?.id || 1,
      name: productData.supplier,
      logo: supplierData?.logo || 'https://ui-avatars.com/api/?name=S&background=0D8ABC&color=fff',
      rating: supplierData?.rating || 4.9,
      years: supplierData?.years || 8,
      responseRate: 98,
      responseTime: '2小时内',
      location: '中国',
      description: supplierData?.description || '专业设备供应商',
      products: 156,
      followers: 2345
    },
    specs: [
      { label: '品牌', value: productData.supplier.split(' ')[0] },
      { label: '型号', value: productData.name.match(/[A-Z0-9-]+$/)?.[0] || 'Standard' },
      { label: '分类', value: productData.category },
      { label: '评分', value: productData.rating + '★' },
      { label: '销量', value: productData.sales + '件' },
      { label: '供应商', value: productData.supplier },
    ],
    features: productData.features || [
      '✓ 高品质保证',
      '✓ 专业技术支持',
      '✓ 完善售后服务',
      '✓ 快速交付',
      '✓ 性价比高'
    ],
    description: productData.description,
    serviceFeatures: [
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
    detailDescription: `
      <h3>产品简介</h3>
      <p>${productData.description}</p>
      
      <h3>核心优势</h3>
      <ul>
        ${productData.features ? productData.features.map(f => `<li>${f}</li>`).join('') : '<li>高品质保证</li>'}
      </ul>

      <h3>应用场景</h3>
      <ul>
        <li>工业自动化检测</li>
        <li>质量控制系统</li>
        <li>生产线集成</li>
        <li>精密测量应用</li>
      </ul>
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
        specs: productData.tags.join(' | ')
      },
      {
        id: 2,
        user: '李工',
        avatar: 'https://ui-avatars.com/api/?name=LG&background=random',
        rating: 5,
        date: '2024-01-10',
        content: '公司采购了多台,效果非常好。技术支持响应很快,解决问题很专业。',
        images: [],
        helpful: 189,
        specs: productData.tags.join(' | ')
      },
      {
        id: 3,
        user: '王经理',
        avatar: 'https://ui-avatars.com/api/?name=WJL&background=random',
        rating: 4,
        date: '2024-01-05',
        content: '总体不错,性价比很高。操作简单,功能实用。',
        images: [],
        helpful: 156,
        specs: productData.tags.join(' | ')
      }
    ]
  };

  const relatedProducts = products.slice(0, 6).filter(p => p.id !== product.id);

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
                {product.serviceFeatures.map((feature, idx) => (
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
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.detailDescription }} />
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

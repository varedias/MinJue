import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Award, Star, Phone, Mail, MessageCircle, Building, Users, Package, TrendingUp, Shield, ChevronRight, Heart, ArrowLeft } from 'lucide-react';

const SupplierDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products');

  // 供应商详细信息
  const supplier = {
    id: parseInt(id),
    name: '深圳智视科技有限公司',
    logo: 'https://ui-avatars.com/api/?name=ZS&background=0D8ABC&color=fff&size=200',
    banner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=300&fit=crop',
    rating: 4.9,
    reviewCount: 2345,
    years: 8,
    location: '广东省深圳市南山区科技园',
    founded: '2016年',
    employees: '200-500人',
    type: '有限责任公司',
    registered: '5000万元',
    responseRate: 98,
    responseTime: '2小时内',
    description: '深圳智视科技有限公司成立于2016年,是一家专注于工业视觉检测系统研发、生产和销售的高新技术企业。公司拥有强大的研发团队和完善的售后服务体系,产品广泛应用于电子、汽车、医疗等行业。',
    certifications: [
      { name: 'ISO9001质量管理体系', image: 'https://via.placeholder.com/150x200?text=ISO9001' },
      { name: 'ISO14001环境管理体系', image: 'https://via.placeholder.com/150x200?text=ISO14001' },
      { name: '高新技术企业证书', image: 'https://via.placeholder.com/150x200?text=High-Tech' },
      { name: 'CE认证证书', image: 'https://via.placeholder.com/150x200?text=CE' }
    ],
    stats: {
      products: 156,
      followers: 12456,
      sales: 45678,
      satisfaction: 99.2
    },
    contact: {
      phone: '400-888-8888',
      mobile: '138****8888',
      email: 'contact@zhishi-tech.com',
      wechat: 'zhishi_tech',
      address: '深圳市南山区科技园南区深圳湾科技生态园10栋A座8楼'
    },
    advantages: [
      {
        icon: Award,
        title: '品质保证',
        desc: '所有产品均通过ISO质量认证'
      },
      {
        icon: Shield,
        title: '售后无忧',
        desc: '7天无理由退换,2年质保'
      },
      {
        icon: TrendingUp,
        title: '技术领先',
        desc: '拥有50+项发明专利'
      },
      {
        icon: Users,
        title: '专业团队',
        desc: '200+专业技术人员'
      }
    ],
    products: [
      {
        id: 1,
        name: '海康威视AI视觉检测系统 VIS-2000',
        price: 28900,
        originalPrice: 35000,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
        rating: 4.9,
        sales: 1245,
        tags: ['热销', '包邮']
      },
      {
        id: 5,
        name: '大华智能相机 DH-IPC-AI',
        price: 6800,
        originalPrice: 8200,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
        rating: 4.9,
        sales: 1567,
        tags: ['新品', '包邮']
      },
      {
        id: 9,
        name: '康耐视In-Sight 3D视觉传感器',
        price: 15800,
        originalPrice: 18900,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
        rating: 4.8,
        sales: 867,
        tags: ['进口', '包邮']
      },
      {
        id: 13,
        name: 'AI缺陷检测软件套装',
        price: 12000,
        originalPrice: 15000,
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
        rating: 4.8,
        sales: 2345,
        tags: ['热销', '正版']
      },
      {
        id: 14,
        name: '工业级3D扫描仪',
        price: 45000,
        originalPrice: 52000,
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400',
        rating: 4.9,
        sales: 456,
        tags: ['高精度', '包邮']
      },
      {
        id: 15,
        name: '智能视觉分拣系统',
        price: 68000,
        originalPrice: 78000,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
        rating: 5.0,
        sales: 234,
        tags: ['定制', '包安装']
      }
    ],
    reviews: [
      {
        id: 1,
        user: '张先生',
        avatar: 'https://ui-avatars.com/api/?name=ZS&background=random',
        rating: 5,
        date: '2024-01-15',
        content: '合作了2年多,产品质量稳定,售后服务响应快,是值得信赖的供应商!',
        product: '海康威视AI视觉检测系统'
      },
      {
        id: 2,
        user: '李工',
        avatar: 'https://ui-avatars.com/api/?name=LG&background=random',
        rating: 5,
        date: '2024-01-10',
        content: '技术团队非常专业,能够根据我们的需求定制解决方案。产品性能稳定,价格合理。',
        product: '智能视觉分拣系统'
      },
      {
        id: 3,
        user: '王经理',
        avatar: 'https://ui-avatars.com/api/?name=WJL&background=random',
        rating: 5,
        date: '2024-01-05',
        content: '公司实力强,产品线丰富,从采购到售后都很专业。已经推荐给同行了。',
        product: '大华智能相机'
      }
    ],
    news: [
      {
        id: 1,
        title: '智视科技发布新一代AI视觉检测系统',
        date: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
        summary: '采用最新深度学习算法,检测精度提升30%...'
      },
      {
        id: 2,
        title: '公司荣获"深圳市专精特新企业"称号',
        date: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
        summary: '凭借在工业视觉领域的技术创新和市场表现...'
      }
    ]
  };

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        <img
          src={supplier.banner}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 py-8 w-full">
            <div className="flex items-end gap-6">
              <img
                src={supplier.logo}
                alt={supplier.name}
                className="w-32 h-32 rounded-xl bg-white p-2 shadow-lg"
              />
              <div className="text-white pb-2">
                <h1 className="text-3xl font-bold mb-2">{supplier.name}</h1>
                <p className="text-blue-100 mb-3">{supplier.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-yellow-400" size={18} />
                    <span className="font-medium">{supplier.rating}</span>
                    <span className="text-blue-200">({supplier.reviewCount}评价)</span>
                  </div>
                  <span className="text-blue-200">|</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>经营{supplier.years}年</span>
                  </div>
                  <span className="text-blue-200">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{supplier.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={20} />
          返回
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">企业数据</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{supplier.stats.products}</div>
                  <div className="text-sm text-gray-600">在售商品</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{supplier.stats.followers.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">关注人数</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{supplier.stats.sales.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">累计销量</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{supplier.stats.satisfaction}%</div>
                  <div className="text-sm text-gray-600">好评率</div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">联系方式</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">联系电话</div>
                    <div className="font-medium">{supplier.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={18} className="text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">电子邮箱</div>
                    <div className="font-medium">{supplier.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MessageCircle size={18} className="text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">微信号</div>
                    <div className="font-medium">{supplier.contact.wechat}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={18} className="text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">公司地址</div>
                    <div className="font-medium">{supplier.contact.address}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  在线咨询
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 font-medium flex items-center justify-center gap-2">
                  <Heart size={18} />
                  关注店铺
                </button>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">企业信息</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">企业类型</span>
                  <span className="text-gray-900 font-medium">{supplier.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">成立时间</span>
                  <span className="text-gray-900 font-medium">{supplier.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">注册资本</span>
                  <span className="text-gray-900 font-medium">{supplier.registered}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">员工人数</span>
                  <span className="text-gray-900 font-medium">{supplier.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">响应率</span>
                  <span className="text-green-600 font-medium">{supplier.responseRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">响应时间</span>
                  <span className="text-green-600 font-medium">{supplier.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">企业优势</h3>
              <div className="space-y-4">
                {supplier.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <adv.icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{adv.title}</div>
                      <div className="text-sm text-gray-600">{adv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="border-b">
                <div className="flex">
                  {[
                    { id: 'products', label: '全部商品', count: supplier.products.length },
                    { id: 'reviews', label: '店铺评价', count: supplier.reviewCount },
                    { id: 'certifications', label: '资质证书', count: supplier.certifications.length },
                    { id: 'news', label: '企业动态', count: supplier.news.length }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-medium transition-all ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* Products Tab */}
                {activeTab === 'products' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supplier.products.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="bg-white border rounded-xl hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
                      >
                        <div className="relative aspect-square bg-gray-100 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3 flex gap-2">
                            {product.tags.map((tag, idx) => (
                              <span key={idx} className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600">
                            {product.name}
                          </h3>
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
                                <span className="text-xl">{product.price.toLocaleString()}</span>
                              </div>
                              {product.originalPrice && (
                                <div className="text-xs text-gray-400 line-through">
                                  ¥{product.originalPrice.toLocaleString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {supplier.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0">
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
                            <div className="text-sm text-blue-600 mb-2">购买商品: {review.product}</div>
                            <p className="text-gray-700">{review.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Certifications Tab */}
                {activeTab === 'certifications' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {supplier.certifications.map((cert, idx) => (
                      <div key={idx} className="text-center">
                        <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                          <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-sm text-gray-900 font-medium">{cert.name}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* News Tab */}
                {activeTab === 'news' && (
                  <div className="space-y-6">
                    {supplier.news.map((news) => (
                      <div key={news.id} className="flex gap-4 border-b pb-6 last:border-b-0">
                        <img src={news.image} alt={news.title} className="w-48 h-32 rounded-lg object-cover" />
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                            {news.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{news.summary}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{news.date}</span>
                            <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                              查看详情
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDetail;

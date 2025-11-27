import React, { useState } from 'react';
import { Search, Filter, ChevronRight, Calendar, TrendingUp, Building2, Award, Clock, Star, FileText } from 'lucide-react';

const Leasing = () => {
  const [activeTab, setActiveTab] = useState('financing'); // financing or operating

  // 融资租赁设备 - 适合长期持有,最终所有权归承租人
  const financingLeasing = [
    { 
      id: 1, 
      name: '海康威视AI视觉检测系统 VIS-2000', 
      monthlyPrice: '2,800', 
      totalPrice: '280,000',
      duration: '36个月', 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', 
      tags: ['AI检测', '设备所有权转移'],
      rating: 4.9,
      leased: 156,
      supplier: '深圳智视科技',
      description: '适合企业长期使用,租期结束后设备归您所有',
      benefits: ['设备所有权转移', '税收优惠', '固定资产管理']
    },
    { 
      id: 2, 
      name: 'Basler ace系列工业相机套装', 
      monthlyPrice: '380', 
      totalPrice: '38,000',
      duration: '24个月', 
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', 
      tags: ['工业相机', '长期租赁'],
      rating: 4.8,
      leased: 234,
      supplier: '杭州精准视觉',
      description: '200万像素,含镜头,适合生产线长期使用',
      benefits: ['分期付款', '减轻资金压力', '设备归属权']
    },
    { 
      id: 3, 
      name: 'ABB IRB 1200工业机器人', 
      monthlyPrice: '7,200', 
      totalPrice: '850,000',
      duration: '48个月', 
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400', 
      tags: ['工业机器人', '融资租赁'],
      rating: 5.0,
      leased: 89,
      supplier: 'ABB授权代理商',
      description: '6轴机器人,负载7kg,适合自动化生产线',
      benefits: ['设备升级选择', '维护服务包含', '产权转移']
    },
    { 
      id: 4, 
      name: '三坐标测量机 高精度版', 
      monthlyPrice: '15,000', 
      totalPrice: '1,800,000',
      duration: '48个月', 
      image: 'https://images.unsplash.com/photo-1581093458791-9d58b3fbbd0d?w=400', 
      tags: ['精密测量', '高端设备'],
      rating: 4.9,
      leased: 45,
      supplier: '上海精密仪器',
      description: '高精度三坐标测量,适合质检部门长期配置',
      benefits: ['技术升级服务', '培训支持', '设备所有权']
    },
    { 
      id: 5, 
      name: 'PCB全自动AOI检测系统', 
      monthlyPrice: '12,000', 
      totalPrice: '1,500,000',
      duration: '48个月', 
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400', 
      tags: ['AOI检测', '电子制造'],
      rating: 4.8,
      leased: 67,
      supplier: '深圳AOI设备厂',
      description: '双面检测,AI算法,适合PCB制造企业',
      benefits: ['软件更新免费', '远程技术支持', '产权归属']
    },
    { 
      id: 6, 
      name: '激光切割机 6000W', 
      monthlyPrice: '18,000', 
      totalPrice: '2,200,000',
      duration: '60个月', 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', 
      tags: ['激光切割', '高功率'],
      rating: 4.9,
      leased: 34,
      supplier: '大族激光',
      description: '6000W光纤激光,切割厚度20mm,适合金属加工',
      benefits: ['设备保险包含', '备件优先供应', '产权转移']
    }
  ];

  // 经营租赁设备 - 适合短期使用,灵活租期
  const operatingLeasing = [
    { 
      id: 7, 
      name: 'AI视觉检测便携式系统', 
      dailyPrice: '200', 
      weeklyPrice: '1,200',
      monthlyPrice: '4,000',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400', 
      tags: ['短期租赁', '灵活使用'],
      rating: 4.7,
      leased: 456,
      supplier: '北京视觉科技',
      description: '适合项目型需求,随租随用,无需长期投入',
      benefits: ['按需租赁', '即租即用', '无设备折旧']
    },
    { 
      id: 8, 
      name: '工业内窥镜检测设备', 
      dailyPrice: '150', 
      weeklyPrice: '900',
      monthlyPrice: '3,000',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400', 
      tags: ['内窥检测', '租期灵活'],
      rating: 4.6,
      leased: 567,
      supplier: '上海检测设备',
      description: '适合临时检测项目,设备维护由出租方负责',
      benefits: ['设备维护免费', '技术指导', '灵活退租']
    },
    { 
      id: 9, 
      name: '红外热成像相机专业版', 
      dailyPrice: '300', 
      weeklyPrice: '1,800',
      monthlyPrice: '6,000',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400', 
      tags: ['热成像', '专业设备'],
      rating: 4.8,
      leased: 234,
      supplier: '福禄克授权商',
      description: '适合短期热成像检测项目,高精度测温',
      benefits: ['专业培训', '技术支持', '即用即还']
    },
    { 
      id: 10, 
      name: '3D扫描仪便携款', 
      dailyPrice: '250', 
      weeklyPrice: '1,500',
      monthlyPrice: '5,000',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400', 
      tags: ['3D扫描', '便携设备'],
      rating: 4.7,
      leased: 345,
      supplier: '三维扫描科技',
      description: '适合逆向工程项目,随用随租',
      benefits: ['软件授权包含', '数据处理支持', '灵活租期']
    },
    { 
      id: 11, 
      name: '超声波探伤仪', 
      dailyPrice: '180', 
      weeklyPrice: '1,000',
      monthlyPrice: '3,500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', 
      tags: ['无损检测', '短租'],
      rating: 4.6,
      leased: 456,
      supplier: '北京无损检测',
      description: '适合焊缝检测项目,按天计费更经济',
      benefits: ['检测报告协助', '技术培训', '押金可退']
    },
    { 
      id: 12, 
      name: '便携式光谱分析仪', 
      dailyPrice: '400', 
      weeklyPrice: '2,400',
      monthlyPrice: '8,000',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400', 
      tags: ['光谱分析', '高端租赁'],
      rating: 4.9,
      leased: 123,
      supplier: '赛默飞授权商',
      description: '材料成分分析,适合临时检测需求',
      benefits: ['校准证书', '专家指导', '快速交付']
    }
  ];

  const currentProducts = activeTab === 'financing' ? financingLeasing : operatingLeasing;

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">设备租赁服务</h1>
          <p className="text-blue-100">专业设备租赁,灵活方案,助力企业降本增效</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-2 flex gap-2">
          <button
            onClick={() => setActiveTab('financing')}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'financing'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingUp size={20} />
              <span>融资租赁</span>
            </div>
            <p className={`text-xs mt-1 ${activeTab === 'financing' ? 'text-blue-100' : 'text-gray-400'}`}>
              长期持有 · 设备归属 · 税收优惠
            </p>
          </button>
          <button
            onClick={() => setActiveTab('operating')}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'operating'
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Calendar size={20} />
              <span>经营租赁</span>
            </div>
            <p className={`text-xs mt-1 ${activeTab === 'operating' ? 'text-green-100' : 'text-gray-400'}`}>
              灵活租期 · 即租即用 · 无需购置
            </p>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={`搜索${activeTab === 'financing' ? '融资' : '经营'}租赁设备...`}
                className="w-full bg-gray-50 text-gray-900 rounded-lg py-3 pl-12 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter size={20} />
              <span className="hidden md:inline">筛选</span>
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {activeTab === 'financing' ? (
            <>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">设备所有权</h3>
                </div>
                <p className="text-sm text-gray-600">租期结束后,设备所有权归您</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <FileText className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">税收优惠</h3>
                </div>
                <p className="text-sm text-gray-600">租金可抵扣,降低企业税负</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">固定资产</h3>
                </div>
                <p className="text-sm text-gray-600">计入固定资产,优化财务结构</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">灵活租期</h3>
                </div>
                <p className="text-sm text-gray-600">按天/周/月租赁,随用随还</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-5 border border-cyan-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">快速交付</h3>
                </div>
                <p className="text-sm text-gray-600">24小时内快速发货配送</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border border-indigo-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Building2 className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">免维护</h3>
                </div>
                <p className="text-sm text-gray-600">设备维护由出租方负责</p>
              </div>
            </>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                  已租{product.leased}次
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base line-clamp-2 flex-grow pr-2 group-hover:text-blue-600">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                  <Building2 size={14} />
                  <span>{product.supplier}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2 py-1 text-xs rounded-full ${
                      activeTab === 'financing' 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'bg-green-50 text-green-700'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {activeTab === 'financing' ? (
                  <div className="border-t pt-4">
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">月租金</p>
                        <div className="text-orange-600 font-bold">
                          <span className="text-2xl">¥{product.monthlyPrice}</span>
                          <span className="text-sm">/月</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">租期</p>
                        <p className="text-sm font-semibold text-gray-700">{product.duration}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      设备总价: ¥{product.totalPrice}
                    </div>
                    <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all">
                      立即租赁
                    </button>
                  </div>
                ) : (
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">日租</p>
                        <p className="text-sm font-bold text-orange-600">¥{product.dailyPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">周租</p>
                        <p className="text-sm font-bold text-orange-600">¥{product.weeklyPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">月租</p>
                        <p className="text-sm font-bold text-orange-600">¥{product.monthlyPrice}</p>
                      </div>
                    </div>
                    <button className="w-full py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all">
                      立即租赁
                    </button>
                  </div>
                )}

                {/* Benefits */}
                <div className="mt-3 pt-3 border-t">
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <span key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="text-green-500">✓</span>
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leasing;

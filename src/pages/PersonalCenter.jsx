import React, { useState } from 'react';
import { Package, Store, MessageSquare, FileText, ShoppingCart, BarChart3, Settings, Plus, Search, Eye, Edit, Trash2 } from 'lucide-react';

const PersonalCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // 模拟数据
  const stats = {
    products: 48,
    orders: 126,
    inquiries: 23,
    quotes: 15,
  };

  const myProducts = [
    { id: 1, name: 'AI视觉检测系统 VIS-2000', status: '在售', stock: 15, price: '28,900', views: 342, orders: 12 },
    { id: 2, name: '工业相机 500万像素', status: '在售', stock: 50, price: '3,599', views: 567, orders: 28 },
    { id: 3, name: '3D激光位移传感器', status: '缺货', stock: 0, price: '15,800', views: 234, orders: 5 },
  ];

  const inquiries = [
    { id: 1, product: 'AI视觉检测系统', customer: '深圳**科技', time: '2小时前', status: '待回复' },
    { id: 2, product: '工业相机套装', customer: '杭州**制造', time: '5小时前', status: '已回复' },
    { id: 3, product: '光源控制器', customer: '苏州**电子', time: '1天前', status: '已回复' },
  ];

  const quotes = [
    { id: 1, title: '10台2D视觉检测设备报价', quantity: '10台', amount: '180,000', status: '待审核', time: '3小时前' },
    { id: 2, title: '工业相机批量采购报价', quantity: '50套', amount: '179,950', status: '已中标', time: '2天前' },
  ];

  const menuItems = [
    { key: 'overview', icon: <BarChart3 size={20} />, label: '数据概览' },
    { key: 'products', icon: <Package size={20} />, label: '商品管理' },
    { key: 'shop', icon: <Store size={20} />, label: '店铺管理' },
    { key: 'inquiries', icon: <MessageSquare size={20} />, label: '询盘管理' },
    { key: 'quotes', icon: <FileText size={20} />, label: '报价管理' },
    { key: 'procurement', icon: <ShoppingCart size={20} />, label: '采购列表' },
    { key: 'settings', icon: <Settings size={20} />, label: '设置' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">数据概览</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <Package size={24} />
                  <span className="text-3xl font-bold">{stats.products}</span>
                </div>
                <p className="text-blue-100">商品总数</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <ShoppingCart size={24} />
                  <span className="text-3xl font-bold">{stats.orders}</span>
                </div>
                <p className="text-green-100">订单总数</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <MessageSquare size={24} />
                  <span className="text-3xl font-bold">{stats.inquiries}</span>
                </div>
                <p className="text-orange-100">待处理询盘</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <FileText size={24} />
                  <span className="text-3xl font-bold">{stats.quotes}</span>
                </div>
                <p className="text-purple-100">待处理报价</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4">近期订单</h3>
                <div className="space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium text-sm">订单 #{2025000 + i}</p>
                        <p className="text-xs text-gray-500">AI视觉检测系统</p>
                      </div>
                      <span className="text-green-600 text-sm font-medium">¥28,900</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4">热销商品</h3>
                <div className="space-y-3">
                  {myProducts.slice(0, 3).map(product => (
                    <div key={product.id} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">销量: {product.orders}件</p>
                      </div>
                      <span className="text-blue-600 text-sm font-medium">¥{product.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'products':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">商品管理</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                <Plus size={18} />
                添加商品
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="搜索商品..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <Search size={18} />
                  </button>
                </div>
              </div>

              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">商品信息</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">库存</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">价格</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">浏览/订单</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {myProducts.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded"></div>
                          <div>
                            <p className="font-medium text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-500">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.status === '在售' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{product.stock}</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">¥{product.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{product.views} / {product.orders}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                            <Eye size={16} />
                          </button>
                          <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'shop':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">店铺管理</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">店铺名称</label>
                <input type="text" defaultValue="智视科技旗舰店" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">店铺简介</label>
                <textarea rows={4} defaultValue="专注AI视觉检测设备研发与销售，提供专业的机器视觉解决方案。" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">联系电话</label>
                <input type="tel" defaultValue="400-123-4567" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">店铺地址</label>
                <input type="text" defaultValue="深圳市南山区科技园" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                保存修改
              </button>
            </div>
          </div>
        );

      case 'inquiries':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">询盘管理</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="divide-y divide-gray-200">
                {inquiries.map(inquiry => (
                  <div key={inquiry.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900 mb-1">{inquiry.product}</h3>
                        <p className="text-sm text-gray-600 mb-2">客户: {inquiry.customer}</p>
                        <span className="text-xs text-gray-400">{inquiry.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${inquiry.status === '待回复' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                          {inquiry.status}
                        </span>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          {inquiry.status === '待回复' ? '立即回复' : '查看详情'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'quotes':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">报价管理</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                <Plus size={18} />
                新建报价
              </button>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="divide-y divide-gray-200">
                {quotes.map(quote => (
                  <div key={quote.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900 mb-2">{quote.title}</h3>
                        <div className="flex gap-4 text-sm text-gray-600 mb-2">
                          <span>数量: {quote.quantity}</span>
                          <span className="text-blue-600 font-medium">报价金额: ¥{quote.amount}</span>
                        </div>
                        <span className="text-xs text-gray-400">{quote.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${quote.status === '待审核' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                          {quote.status}
                        </span>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                          查看详情
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'procurement':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">采购列表</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-gray-600 text-center py-8">暂无采购记录</p>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">设置</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">账户设置</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">用户名</label>
                      <input type="text" defaultValue="techequip_supplier" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">邮箱</label>
                      <input type="email" defaultValue="contact@techequip.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">通知设置</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span className="text-sm text-gray-700">接收新询盘通知</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span className="text-sm text-gray-700">接收订单通知</span>
                    </label>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  保存设置
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* 左侧菜单 */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20">
              <div className="p-4 bg-blue-600 text-white">
                <h2 className="font-bold text-lg">会员中心</h2>
                <p className="text-xs text-blue-100 mt-1">供应商管理平台</p>
              </div>
              <div className="divide-y divide-gray-100">
                {menuItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                      activeTab === item.key
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="flex-grow">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCenter;
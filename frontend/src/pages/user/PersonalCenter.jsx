import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Package, Store, MessageSquare, FileText, ShoppingCart, BarChart3, Settings, Plus, Search, Eye, Edit, Trash2, Heart, Clock, List } from 'lucide-react';

const PersonalCenter = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // 如果未登录，重定向到登录页
  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role === 'ADMIN') {
      // 管理员直接跳转到管理后台
      navigate('/admin/dashboard');
    }
  }, [user, navigate]);

  // 判断是否为供应商
  const isSupplier = user?.role === 'SUPPLIER';

  // ---------------- 供应商模拟数据 ----------------
  const supplierStats = {
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

  const supplierInquiries = [
    { id: 1, product: 'AI视觉检测系统', customer: '深圳**科技', time: '2小时前', status: '待回复' },
    { id: 2, product: '工业相机套装', customer: '杭州**制造', time: '5小时前', status: '已回复' },
  ];

  const quotes = [
    { id: 1, title: '10台2D视觉检测设备报价', quantity: '10台', amount: '180,000', status: '待审核', time: '3小时前' },
  ];

  // ---------------- 采购商(普通用户)模拟数据 ----------------
  const buyerStats = {
    orders: 5,
    favorites: 12,
    inquiries: 3,
    viewed: 28
  };

  const myOrders = [
    { id: 2025001, product: '高性能工业相机', amount: '2,500', status: '待发货', date: '2024-01-20' },
    { id: 2025002, product: '智能视觉传感器', amount: '1,200', status: '已完成', date: '2024-01-15' },
  ];

  const myFavorites = [
    { id: 101, name: '自动化流水线镜头', price: '800', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { id: 102, name: '高端数控机床', price: '5,000/月', image: 'https://images.unsplash.com/photo-1565439399692-7b0076b2eb20?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  ];

  // ---------------- 菜单配置 ----------------
  const supplierMenuItems = [
    { key: 'overview', icon: <BarChart3 size={20} />, label: '数据概览' },
    { key: 'products', icon: <Package size={20} />, label: '商品管理' },
    { key: 'shop', icon: <Store size={20} />, label: '店铺管理' },
    { key: 'inquiries', icon: <MessageSquare size={20} />, label: '询盘管理' },
    { key: 'quotes', icon: <FileText size={20} />, label: '报价管理' },
    { key: 'settings', icon: <Settings size={20} />, label: '设置' },
  ];

  const buyerMenuItems = [
    { key: 'overview', icon: <BarChart3 size={20} />, label: '概览' },
    { key: 'my-orders', icon: <ShoppingCart size={20} />, label: '我的订单' },
    { key: 'my-inquiries', icon: <MessageSquare size={20} />, label: '我的询盘' },
    { key: 'favorites', icon: <Heart size={20} />, label: '我的收藏' },
    { key: 'settings', icon: <Settings size={20} />, label: '个人设置' },
  ];

  const menuItems = isSupplier ? supplierMenuItems : buyerMenuItems;

  // ---------------- 内容渲染 ----------------
  const renderContent = () => {
    switch (activeTab) {
      // === 公共/概览 ===
      case 'overview':
        return isSupplier ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">数据概览</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <Package size={24} />
                  <span className="text-3xl font-bold">{supplierStats.products}</span>
                </div>
                <p className="text-blue-100">商品总数</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <ShoppingCart size={24} />
                  <span className="text-3xl font-bold">{supplierStats.orders}</span>
                </div>
                <p className="text-green-100">订单总数</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <MessageSquare size={24} />
                  <span className="text-3xl font-bold">{supplierStats.inquiries}</span>
                </div>
                <p className="text-orange-100">待处理询盘</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <FileText size={24} />
                  <span className="text-3xl font-bold">{supplierStats.quotes}</span>
                </div>
                <p className="text-purple-100">待处理报价</p>
              </div>
            </div>
            {/* 供应商近期数据... */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4">近期询盘</h3>
              <div className="space-y-3">
                {supplierInquiries.map(item => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium text-sm">{item.product}</p>
                      <p className="text-xs text-gray-500">来自: {item.customer}</p>
                    </div>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">欢迎回来，{user?.nickname || user?.username}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2 text-blue-600">
                  <ShoppingCart size={24} />
                  <span className="text-2xl font-bold text-gray-900">{buyerStats.orders}</span>
                </div>
                <p className="text-gray-500 text-sm">我的订单</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2 text-red-500">
                  <Heart size={24} />
                  <span className="text-2xl font-bold text-gray-900">{buyerStats.favorites}</span>
                </div>
                <p className="text-gray-500 text-sm">收藏商品</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2 text-orange-500">
                  <MessageSquare size={24} />
                  <span className="text-2xl font-bold text-gray-900">{buyerStats.inquiries}</span>
                </div>
                <p className="text-gray-500 text-sm">我的询盘</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2 text-purple-600">
                  <Clock size={24} />
                  <span className="text-2xl font-bold text-gray-900">{buyerStats.viewed}</span>
                </div>
                <p className="text-gray-500 text-sm">最近浏览</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">最新订单</h3>
                  <button className="text-blue-600 text-sm hover:underline" onClick={() => setActiveTab('my-orders')}>查看全部</button>
                </div>
                <div className="space-y-3">
                  {myOrders.map(order => (
                    <div key={order.id} className="flex justify-between items-center py-3 border-b last:border-0 hover:bg-gray-50 p-2 rounded">
                      <div>
                        <p className="font-medium text-sm">订单 #{order.id}</p>
                        <p className="text-xs text-gray-500">{order.product}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-600 text-sm font-medium">¥{order.amount}</p>
                        <p className="text-xs text-gray-400">{order.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">根据您的浏览推荐</h3>
                </div>
                <div className="text-center text-gray-500 py-8 text-sm">暂无推荐数据</div>
              </div>
            </div>
          </div>
        );

      // === 供应商功能 ===
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
            {/* 简化的表格展示 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">商品名称</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">价格</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {myProducts.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{product.status}</span></td>
                      <td className="px-6 py-4 text-sm font-medium">¥{product.price}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <Edit size={16} className="text-blue-600 cursor-pointer" />
                        <Trash2 size={16} className="text-red-600 cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'shop':
        return <div className="p-6 bg-white rounded-xl border border-gray-200">店铺管理功能开发中...</div>;
      case 'quotes':
        return <div className="p-6 bg-white rounded-xl border border-gray-200">报价管理功能开发中...</div>;
      case 'inquiries': // 供应商询盘
        return (
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold mb-4">收到的询盘</h2>
            {/* 复用之前的询盘列表逻辑 */}
            <div className="divide-y">
              {supplierInquiries.map(i => (
                <div key={i.id} className="py-3">
                  <p className="font-medium">{i.product}</p>
                  <p className="text-sm text-gray-500">{i.customer} - {i.time}</p>
                </div>
              ))}
            </div>
          </div>
        );

      // === 采购商功能 ===
      case 'my-orders':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">我的订单</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">订单号</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">商品</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">金额</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">日期</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {myOrders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">#{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{order.product}</td>
                      <td className="px-6 py-4 text-sm font-medium">¥{order.amount}</td>
                      <td className="px-6 py-4 text-sm text-blue-600">{order.status}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'favorites':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">我的收藏</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {myFavorites.map(fav => (
                <div key={fav.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url(${fav.image})` }}></div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 truncate">{fav.name}</h3>
                    <p className="text-blue-600 font-bold mt-2">¥{fav.price}</p>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">立即购买</button>
                      <button className="px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50"><Trash2 size={16} className="text-gray-400" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'my-inquiries':
        return <div className="p-6 bg-white rounded-xl border border-gray-200">此处显示我发出的询盘记录...</div>;


      // === 设置 (通用) ===
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">设置</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">基本信息</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">用户名</label>
                      <input type="text" value={user?.username || ''} disabled className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">昵称</label>
                      <input type="text" defaultValue={user?.nickname || ''} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">保存修改</button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!user) return null; // 防止重定向间隙的闪烁

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* 左侧菜单 */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20">
              <div className={`p-4 ${isSupplier ? 'bg-blue-600' : 'bg-indigo-600'} text-white text-center`}>
                <img
                  src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full border-2 border-white mx-auto mb-2 object-cover bg-white"
                />
                <h2 className="font-bold text-lg">{isSupplier ? '供应中心' : '个人中心'}</h2>
                <p className="text-xs text-white/80 mt-1">{isSupplier ? '供应商管理平台' : '采购管理平台'}</p>
              </div>
              <div className="divide-y divide-gray-100">
                {menuItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${activeTab === item.key
                      ? (isSupplier ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600')
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
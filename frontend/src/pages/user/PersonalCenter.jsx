import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { favoriteApi } from '../../api/interaction';
import { supplierProductApi } from '../../api/product';
import { Package, Store, MessageSquare, FileText, ShoppingCart, BarChart3, Settings, Plus, Search, Eye, Edit, Trash2, Heart, Clock, List } from 'lucide-react';

const PersonalCenter = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [favorites, setFavorites] = useState([]);
  const [favoritesLoading, setFavoritesLoading] = useState(false);
  const [favPage, setFavPage] = useState(1);
  const [favTotalPages, setFavTotalPages] = useState(1);
  const [supplierProducts, setSupplierProducts] = useState([]);
  const [supplierProductsLoading, setSupplierProductsLoading] = useState(false);
  const [supplierProductCount, setSupplierProductCount] = useState(0);

  // 加载收藏列表
  const loadFavorites = async (page = 1) => {
    setFavoritesLoading(true);
    try {
      const res = await favoriteApi.list({ page, size: 9 });
      if (res && res.records) {
        setFavorites(res.records);
        setFavTotalPages(res.pages || 1);
        setFavPage(res.current || page);
      } else if (Array.isArray(res)) {
        setFavorites(res);
      }
    } catch (e) {
      console.error('加载收藏失败:', e);
    } finally {
      setFavoritesLoading(false);
    }
  };

  // 取消收藏
  const handleUnfavorite = async (item) => {
    try {
      await favoriteApi.toggle({
        targetId: item.targetId, targetType: item.targetType,
        targetName: item.targetName || '', targetImage: item.targetImage || ''
      });
      setFavorites(prev => prev.filter(f => f.id !== item.id));
    } catch (e) {
      console.error('取消收藏失败:', e);
    }
  };

  // 当切到收藏 tab 时加载数据
  useEffect(() => {
    if (activeTab === 'favorites' && user) {
      loadFavorites();
    }
    if (activeTab === 'products' && user && isSupplier) {
      loadSupplierProducts();
    }
  }, [activeTab, user]);

  // 加载供应商自己的商品
  const loadSupplierProducts = async () => {
    setSupplierProductsLoading(true);
    try {
      const res = await supplierProductApi.getMyProducts();
      if (res && res.records) {
        setSupplierProducts(res.records);
        setSupplierProductCount(res.total || res.records.length);
      }
    } catch (e) {
      console.error('加载商品列表失败:', e);
    } finally {
      setSupplierProductsLoading(false);
    }
  };

  // 删除商品
  const handleDeleteProduct = async (id) => {
    if (!window.confirm('确定要删除该商品吗？')) return;
    try {
      await supplierProductApi.deleteProduct(id);
      setSupplierProducts(prev => prev.filter(p => p.id !== id));
      setSupplierProductCount(prev => prev - 1);
    } catch (e) {
      console.error('删除商品失败:', e);
      alert('删除失败');
    }
  };

  // 上下架商品
  const handleToggleProductStatus = async (product) => {
    const newStatus = product.status === 1 ? 0 : 1;
    try {
      await supplierProductApi.toggleStatus(product.id, newStatus);
      setSupplierProducts(prev => prev.map(p => p.id === product.id ? { ...p, status: newStatus } : p));
    } catch (e) {
      console.error('操作失败:', e);
      alert('操作失败');
    }
  };

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
                  <span className="text-3xl font-bold">{supplierProductCount || supplierStats.products}</span>
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
              <button onClick={() => navigate('/publish-product')} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                <Plus size={18} />
                添加商品
              </button>
            </div>
            {supplierProductsLoading ? (
              <div className="text-center py-12 text-gray-500">加载中...</div>
            ) : supplierProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 mb-4">暂无商品，发布您的第一个商品吧</p>
                <button onClick={() => navigate('/publish-product')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  发布商品
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">商品名称</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">价格</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">库存</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {supplierProducts.map(product => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.status === 1 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                            {product.status === 1 ? '在售' : '已下架'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">¥{product.price}</td>
                        <td className="px-6 py-4 text-sm">{product.stock ?? '-'}</td>
                        <td className="px-6 py-4 flex gap-3">
                          <button onClick={() => handleToggleProductStatus(product)} title={product.status === 1 ? '下架' : '上架'}>
                            <Eye size={16} className={product.status === 1 ? 'text-yellow-600' : 'text-green-600'} />
                          </button>
                          <button onClick={() => navigate(`/publish-product/${product.id}`)} title="编辑">
                            <Edit size={16} className="text-blue-600" />
                          </button>
                          <button onClick={() => handleDeleteProduct(product.id)} title="删除">
                            <Trash2 size={16} className="text-red-600" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
            {favoritesLoading ? (
              <div className="text-center py-12 text-gray-500">加载中...</div>
            ) : favorites.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Heart size={48} className="mx-auto mb-4 text-gray-300" />
                <p>暂无收藏内容</p>
                <p className="text-sm mt-2">浏览商品或内容时点击收藏按钮即可添加</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {favorites.map(fav => (
                    <div
                      key={fav.id}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => {
                        if (fav.targetType === 'product') navigate(`/product/${fav.targetId}`);
                        else if (fav.targetType === 'content') navigate(`/content/${fav.targetId}`);
                      }}
                    >
                      <div
                        className="h-40 bg-gray-200 bg-cover bg-center"
                        style={{ backgroundImage: fav.targetImage ? `url(${fav.targetImage})` : 'none' }}
                      >
                        {!fav.targetImage && (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <Package size={32} />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 truncate">{fav.targetName || '未命名'}</h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {fav.targetType === 'product' ? '商品' : fav.targetType === 'content' ? '内容' : fav.targetType}
                          {fav.createTime && ` · ${new Date(fav.createTime).toLocaleDateString()}`}
                        </p>
                        <div className="mt-4 flex gap-2">
                          <button
                            className="flex-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (fav.targetType === 'product') navigate(`/product/${fav.targetId}`);
                              else if (fav.targetType === 'content') navigate(`/content/${fav.targetId}`);
                            }}
                          >
                            查看详情
                          </button>
                          <button
                            className="px-3 py-1.5 border border-gray-300 rounded hover:bg-red-50"
                            onClick={(e) => { e.stopPropagation(); handleUnfavorite(fav); }}
                          >
                            <Trash2 size={16} className="text-red-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {favTotalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: favTotalPages }, (_, i) => i + 1).map(p => (
                      <button
                        key={p}
                        onClick={() => loadFavorites(p)}
                        className={`px-3 py-1 rounded text-sm ${p === favPage ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, Phone, Mail, MapPin, Camera, Edit2, Save, X, ShoppingCart, FileText, Heart, Clock, Video, Package, Award } from 'lucide-react';

const UserInfo = () => {
  const { user: authUser } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // 如果未登录，重定向到登录页；如果是管理员，跳转到管理后台
  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    } else if (authUser.role === 'ADMIN') {
      navigate('/admin/dashboard');
    }
  }, [authUser, navigate]);

  // 使用 authUser 初始化本地状态，如果 authUser 为空（未登录或加载中），提供默认空值防止报错
  const [user, setUser] = useState({
    name: authUser?.nickname || authUser?.username || '用户',
    avatar: authUser?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    userType: 'buyer', // 默认身份，后续可根据 role 扩展
    role: authUser?.role === 'ADMIN' ? '管理员' : (authUser?.role === 'SUPPLIER' ? '供应商' : '普通会员'),
    phone: authUser?.phone || '未绑定',
    email: authUser?.email || '未绑定',
    location: '未知', // 数据库暂无此字段
    joinDate: authUser?.createTime ? new Date(authUser.createTime).toLocaleDateString() : '刚刚'
  });

  // 当 authUser 变化时更新 user (处理刷新后的加载)
  useEffect(() => {
    if (authUser) {
      setUser(prev => ({
        ...prev,
        name: authUser.nickname || authUser.username,
        avatar: authUser.avatar || prev.avatar,
        role: authUser.role === 'ADMIN' ? '管理员' : (authUser.role === 'SUPPLIER' ? '供应商' : '普通会员'),
        phone: authUser.phone || prev.phone,
        email: authUser.email || prev.email,
        joinDate: authUser.createTime ? new Date(authUser.createTime).toLocaleDateString() : prev.joinDate
      }));
    }
  }, [authUser]);

  const [editForm, setEditForm] = useState(user);

  const handleEdit = () => {
    setEditForm(user);
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(editForm);
    setIsEditing(false);
    // Here you would typically make an API call to save the data
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // 采购商统计数据
  const buyerStats = {
    orders: 12,
    inquiries: 8,
    favorites: 35,
    recentlyViewed: 24
  };

  // 视频创作者统计数据
  const creatorStats = {
    videos: 23,
    views: 15600,
    likes: 892,
    followers: 340
  };

  // 根据用户类型渲染不同的内容
  const renderUserTypeContent = () => {
    if (user.userType === 'buyer') {
      return (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">采购统计</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
              <ShoppingCart size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{buyerStats.orders}</p>
              <p className="text-sm text-blue-100 mt-1">我的订单</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
              <FileText size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{buyerStats.inquiries}</p>
              <p className="text-sm text-green-100 mt-1">询盘记录</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
              <Heart size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{buyerStats.favorites}</p>
              <p className="text-sm text-red-100 mt-1">收藏商品</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
              <Clock size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{buyerStats.recentlyViewed}</p>
              <p className="text-sm text-purple-100 mt-1">浏览记录</p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">最近订单</h3>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    <div>
                      <p className="font-medium text-gray-900">订单 #{2025000 + i}</p>
                      <p className="text-sm text-gray-500">工业相机套装</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">¥4,299</p>
                    <p className="text-xs text-gray-500">待发货</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      // 视频创作者
      return (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">创作统计</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
              <Video size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{creatorStats.videos}</p>
              <p className="text-sm text-blue-100 mt-1">发布视频</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
              <Package size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{creatorStats.views.toLocaleString()}</p>
              <p className="text-sm text-green-100 mt-1">总播放量</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
              <Heart size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{creatorStats.likes}</p>
              <p className="text-sm text-red-100 mt-1">获赞数</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
              <Award size={32} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">{creatorStats.followers}</p>
              <p className="text-sm text-purple-100 mt-1">粉丝数</p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">最新视频</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-300"></div>
                  <div className="p-3">
                    <p className="font-medium text-gray-900 text-sm line-clamp-2">工业视觉检测技术分享第{i}期</p>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{(Math.random() * 5000).toFixed(0)} 播放</span>
                      <span>2天前</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>

        <div className="px-8 pb-8">
          {/* Profile Header */}
          <div className="relative flex items-end -mt-12 mb-8">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
              />
              <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-blue-600">
                <Camera size={16} />
              </button>
            </div>
            <div className="ml-6 mb-2 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <select
                      value={user.userType}
                      onChange={(e) => setUser({ ...user, userType: e.target.value })}
                      className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="buyer">采购商</option>
                      <option value="creator">视频创作者</option>
                    </select>
                  </div>
                  <p className="text-sm text-gray-500">{user.role} | 加入时间: {user.joinDate}</p>
                </div>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2"
                  >
                    <Edit2 size={16} /> 编辑资料
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 flex items-center gap-2"
                    >
                      <X size={16} /> 取消
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2"
                    >
                      <Save size={16} /> 保存
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {renderUserTypeContent()}

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Basic Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">基本信息</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                    <User size={20} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs text-gray-500">昵称</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mr-4">
                    <Phone size={20} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs text-gray-500">手机号码</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                        className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <p className="text-sm font-medium text-gray-900">{user.phone}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs text-gray-500">电子邮箱</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <p className="text-sm font-medium text-gray-900">{user.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs text-gray-500">所在地区</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <p className="text-sm font-medium text-gray-900">{user.location}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Account Security / Other Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">账号安全</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">登录密码</p>
                    <p className="text-xs text-gray-500 mt-1">建议定期修改密码以保护账号安全</p>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">修改</button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">手机绑定</p>
                    <p className="text-xs text-gray-500 mt-1">已绑定: {user.phone}</p>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">换绑</button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">实名认证</p>
                    <p className="text-xs text-green-600 mt-1">已认证</p>
                  </div>
                  <button className="text-gray-400 text-sm cursor-not-allowed">查看</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

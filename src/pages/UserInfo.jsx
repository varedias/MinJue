import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Camera, Edit2, Save, X } from 'lucide-react';

const UserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: '张三',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    role: '普通会员',
    phone: '138****8888',
    email: 'zhangsan@example.com',
    location: '上海市浦东新区',
    joinDate: '2024-01-01'
  });

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
                  <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
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

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
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
                        onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
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
                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
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
                        onChange={(e) => setEditForm({...editForm, location: e.target.value})}
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

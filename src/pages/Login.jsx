import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, Building2, ShoppingBag, UserCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState('supplier'); // supplier, buyer, guest
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (role === 'guest') {
      navigate('/');
      return;
    }

    const result = login(formData.username, formData.password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-8 tracking-tight">懂视帝</h1>
          <p className="text-3xl font-light tracking-wide">懂制造，更懂你</p>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">欢迎回来</h2>
            <p className="text-gray-500 mt-2">请选择您的身份登录</p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setRole('supplier')}
              className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                role === 'supplier' 
                  ? 'border-blue-600 bg-blue-50 text-blue-600' 
                  : 'border-gray-200 hover:border-blue-300 text-gray-600'
              }`}
            >
              <Building2 size={24} className="mb-2" />
              <span className="text-sm font-medium">供应商</span>
            </button>
            <button
              onClick={() => setRole('buyer')}
              className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                role === 'buyer' 
                  ? 'border-blue-600 bg-blue-50 text-blue-600' 
                  : 'border-gray-200 hover:border-blue-300 text-gray-600'
              }`}
            >
              <ShoppingBag size={24} className="mb-2" />
              <span className="text-sm font-medium">采购方</span>
            </button>
            <button
              onClick={() => setRole('guest')}
              className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                role === 'guest' 
                  ? 'border-blue-600 bg-blue-50 text-blue-600' 
                  : 'border-gray-200 hover:border-blue-300 text-gray-600'
              }`}
            >
              <UserCircle size={24} className="mb-2" />
              <span className="text-sm font-medium">游客</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {role !== 'guest' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">账号</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={role === 'supplier' ? "供应商账号 (supplier)" : "采购方账号 (buyer)"}
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">密码</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="请输入密码 (123456)"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      记住我
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      忘记密码?
                    </a>
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {role === 'guest' ? '游客访问' : '登录'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              还没有账号?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                立即注册
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

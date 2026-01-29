import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, Building2, ShoppingBag, UserCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginEn = () => {
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
      navigate('/en');
      return;
    }

    const result = login(formData.username, formData.password);
    if (result.success) {
      navigate('/en');
    } else {
      // Override Chinese error message
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-8 tracking-tight">DongShiDi</h1>
          <p className="text-3xl font-light tracking-wide">Understand Manufacturing, Understand You</p>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Please select your role to login</p>
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
              <span className="text-sm font-medium">Supplier</span>
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
              <span className="text-sm font-medium">Buyer</span>
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
              <span className="text-sm font-medium">Guest</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {role !== 'guest' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                  </div>
                </div>
              </>
            )}

            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              {role === 'guest' ? 'Guest Access' : 'Login'} 
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEn;

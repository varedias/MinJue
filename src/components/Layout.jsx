import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Search, User, LogIn, UserPlus, Store, Truck, Compass, ShoppingCart } from 'lucide-react';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Bar with Login/Register */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="text-blue-600 hover:underline flex items-center gap-1">
              <LogIn size={12} /> 登录
            </button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-blue-600 flex items-center gap-1">
              <UserPlus size={12} /> 免费注册
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-600">帮助中心</a>
            <a href="#" className="hover:text-blue-600">联系客服</a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 tracking-tighter">TECH-EQUIP</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 font-medium`}>首页</Link>
            <Link to="/discovery" className={`${isActive('/discovery') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 font-medium`}>发现</Link>
            <Link to="/leasing" className={`${isActive('/leasing') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 font-medium`}>租赁</Link>
            <Link to="/mall" className={`${isActive('/mall') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 font-medium`}>商城</Link>
            <button 
              onClick={() => navigate('/profile')}
              className={`${isActive('/profile') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 font-medium`}
            >
              免费开店
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="text-gray-500 hover:text-blue-600 font-medium"
            >
              供应中心
            </button>
            <Link to="/profile" className={`${isActive('/profile') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 font-medium`}>会员中心</Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 z-50">
        <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-blue-600' : 'text-gray-400'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">首页</span>
        </Link>
        <Link to="/discovery" className={`flex flex-col items-center ${isActive('/discovery') ? 'text-blue-600' : 'text-gray-400'}`}>
          <Compass size={24} />
          <span className="text-xs mt-1">发现</span>
        </Link>
        <Link to="/mall" className={`flex flex-col items-center ${isActive('/mall') ? 'text-blue-600' : 'text-gray-400'}`}>
          <ShoppingCart size={24} />
          <span className="text-xs mt-1">商城</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center ${isActive('/profile') ? 'text-blue-600' : 'text-gray-400'}`}>
          <User size={24} />
          <span className="text-xs mt-1">我的</span>
        </Link>
      </nav>
    </div>
  );
};

export default Layout;
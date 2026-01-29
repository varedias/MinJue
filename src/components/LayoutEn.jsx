import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Search, User, LogIn, UserPlus, Store, Truck, Compass, ShoppingCart, LogOut, Globe, Menu, X } from 'lucide-react';
import FooterEn from './FooterEn';
import { useAuth } from '../context/AuthContext';

const LayoutEn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/en/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleProtectedNavigation = (path) => {
    if (!user) {
      navigate('/en/login');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
      {/* International Header Style - Cleaner, Less Cluttered */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/en" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-700 tracking-tight">DongShiDi</span>
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-wider">Global</span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered & Clean */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/en" className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/en') ? 'text-blue-600' : 'text-slate-600'}`}>Home</Link>
              <Link to="/en/mall" className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/en/mall') ? 'text-blue-600' : 'text-slate-600'}`}>Marketplace</Link>
              <Link to="/en/leasing" className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/en/leasing') ? 'text-blue-600' : 'text-slate-600'}`}>Leasing</Link>
              <Link to="/en/discovery" className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/en/discovery') ? 'text-blue-600' : 'text-slate-600'}`}>Insights</Link>
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center relative mx-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-gray-50 border border-gray-200 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-blue-500 w-48 transition-all focus:w-64"
              />
              <button type="submit" className="absolute right-3 text-gray-400 hover:text-blue-600">
                <Search size={16} />
              </button>
            </form>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-slate-500 hover:text-blue-600 flex items-center gap-1 text-sm font-medium">
                <Globe size={16} />
                <span>CN</span>
              </Link>
              
              <div className="h-4 w-px bg-gray-200"></div>

              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-slate-700">{user.name}</span>
                  <button onClick={logout} className="text-sm text-slate-500 hover:text-red-600">Logout</button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/en/login" className="text-sm font-medium text-slate-600 hover:text-blue-600">Sign In</Link>
                  <Link to="/en/login" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-shadow shadow-sm hover:shadow-md">
                    Join Free
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/en" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Home</Link>
              <Link to="/en/mall" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Marketplace</Link>
              <Link to="/en/leasing" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Leasing</Link>
              <Link to="/en/discovery" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Insights</Link>
              <div className="border-t border-gray-100 my-2"></div>
              <Link to="/" className="block px-3 py-3 text-base font-medium text-slate-500 hover:text-blue-600">Switch to Chinese Site</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <FooterEn />
    </div>
  );
};

export default LayoutEn;


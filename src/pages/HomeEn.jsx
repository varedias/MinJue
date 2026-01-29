import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, ShieldCheck, Globe, Truck, CreditCard, Star, ChevronRight } from 'lucide-react';

const HomeEn = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/en/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Simplified Categories for Grid
  const categories = [
    { id: 1, name: 'AI Vision', icon: '👁️', count: '2.5k+ Products' },
    { id: 2, name: 'Industrial Cameras', icon: '📷', count: '1.8k+ Products' },
    { id: 3, name: 'Lenses & Optics', icon: '🔍', count: '3.2k+ Products' },
    { id: 4, name: 'Robotics', icon: '🤖', count: '900+ Products' },
    { id: 5, name: 'Sensors', icon: '📡', count: '4.1k+ Products' },
    { id: 6, name: 'Controllers', icon: '🎛️', count: '1.2k+ Products' },
    { id: 7, name: 'Lighting', icon: '💡', count: '2.1k+ Products' },
    { id: 8, name: 'Software', icon: '💻', count: '500+ Solutions' },
  ];

  // Featured Products (Clean Card Style)
  const featuredProducts = [
    { id: 1, name: 'High-Speed Industrial Camera 5MP', supplier: 'TechVision Global', price: '$450 - $520', moq: '1 Unit', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: '3D Laser Profiler for QC', supplier: 'Precision Optics Ltd', price: '$2,100 - $2,500', moq: '1 Unit', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Automated Sorting Robot Arm', supplier: 'RoboTech Industries', price: '$12,000 - $15,000', moq: '1 Set', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Telecentric Lens 50mm', supplier: 'OptiClear Manufacturing', price: '$280 - $350', moq: '5 Units', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section - International Style (Centered, Big Search) */}
      <div className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Sourcing Industrial Equipment <br className="hidden sm:block" />
            <span className="text-blue-500">Made Simple & Reliable</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Connect with verified manufacturers for AI vision systems, robotics, and automation components. Direct from factory to your facility.
          </p>
          
          {/* Big Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-2 flex shadow-2xl">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What are you looking for? (e.g., '3D Camera', 'Conveyor Belt')" 
                className="w-full h-12 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none rounded-l-md"
              />
            </div>
            <button 
              onClick={handleSearch}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Search
            </button>
          </div>
          
          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-green-500" /> Verified Suppliers</span>
            <span className="flex items-center gap-1"><Globe size={16} className="text-blue-500" /> Global Shipping</span>
            <span className="flex items-center gap-1"><CreditCard size={16} className="text-yellow-500" /> Secure Payment</span>
          </div>
        </div>
      </div>

      {/* Popular Categories - Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Popular Categories</h2>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
            View All Categories <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl hover:border-blue-200 border border-transparent transition-all cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600">{cat.name}</h3>
              <p className="text-sm text-slate-500">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Assurance</h3>
              <p className="text-slate-600">Every supplier is vetted. We ensure products meet international standards (CE, ISO, UL).</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Logistics Solutions</h3>
              <p className="text-slate-600">End-to-end shipping support. From factory floor to your doorstep, anywhere in the world.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Protection</h3>
              <p className="text-slate-600">Secure payment escrow services. Your funds are safe until you confirm receipt.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products - Clean Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-slate-700">
                  Verified
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1 line-clamp-2 h-12 group-hover:text-blue-600">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{product.supplier}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-400">FOB Price</p>
                    <p className="font-bold text-blue-600">{product.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">MOQ</p>
                    <p className="text-sm font-medium text-slate-700">{product.moq}</p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <button className="w-full py-2 border border-blue-600 text-blue-600 rounded font-medium hover:bg-blue-600 hover:text-white transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RFQ Section - Call to Action */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">One Request, Multiple Quotes</h2>
            <p className="text-blue-200 text-lg mb-6">
              Can't find the exact equipment? Submit a Request for Quotation (RFQ) and let suppliers come to you.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold">24h</p>
                <p className="text-sm text-blue-300">Avg. Response Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm text-blue-300">Quotes per Request</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-96">
            <h3 className="font-bold text-slate-900 text-xl mb-4">Post Your Request</h3>
            <input type="text" placeholder="Product Name" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="number" placeholder="Quantity" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            <button className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition-colors">
              Get Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEn;

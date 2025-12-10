import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { suppliers } from '../data/mockData';
import { Building2, Star, Clock, ShoppingCart, ShieldCheck, MapPin } from 'lucide-react';
import AIAssistantFloat, { AIAssistantButton } from '../components/AIAssistantFloat';

const Suppliers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isEnglish ? 'Quality Suppliers' : '优质供应商'}
          </h1>
          <p className="text-gray-500">
            {isEnglish ? 'Verified manufacturers and verified suppliers' : '经过严格认证的优质制造厂商'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {suppliers.map((supplier) => (
            <div 
              key={supplier.id}
              onClick={() => navigate(isEnglish ? `/en/supplier/${supplier.id}` : `/supplier/${supplier.id}`)}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group flex flex-col md:flex-row gap-6"
            >
              <div className="w-full md:w-48 h-48 flex-shrink-0 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden border border-gray-100">
                <img src={supplier.logo} alt={isEnglish ? supplier.nameEn : supplier.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {isEnglish ? supplier.nameEn : supplier.name}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <ShieldCheck size={14} />
                      {isEnglish ? 'Verified' : '已认证'}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {isEnglish ? supplier.descriptionEn : supplier.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 size={16} className="text-blue-500" />
                    <span className="truncate">{isEnglish ? supplier.mainProductsEn : supplier.mainProducts}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span>{supplier.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-gray-400" />
                    <span>{supplier.years} {isEnglish ? 'Years' : '年'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ShoppingCart size={16} className="text-gray-400" />
                    <span>{supplier.orders} {isEnglish ? 'Orders' : '成交'}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(isEnglish ? supplier.certificationsEn : supplier.certifications).map((cert, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 min-w-[140px] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
                  {isEnglish ? 'Contact Now' : '立即联系'}
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  {isEnglish ? 'View Profile' : '查看详情'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI助手悬浮按钮 */}
      {!isAIAssistantOpen && (
        <AIAssistantButton onClick={() => setIsAIAssistantOpen(true)} />
      )}

      {/* AI助手悬浮窗 */}
      <AIAssistantFloat 
        isOpen={isAIAssistantOpen} 
        onClose={() => setIsAIAssistantOpen(false)} 
      />
    </div>
  );
};

export default Suppliers;

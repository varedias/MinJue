import React from 'react';
import { Search, Filter, ChevronRight } from 'lucide-react';

const Leasing = () => {
  const products = [
    { id: 1, name: '大疆 DJI Mavic 3 Pro', price: '299', unit: '天', image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=400&q=80', tags: ['航拍', '4K'] },
    { id: 2, name: '索尼 A7M4 单机身', price: '150', unit: '天', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80', tags: ['全画幅', '微单'] },
    { id: 3, name: 'GoPro Hero 11 Black', price: '50', unit: '天', image: 'https://images.unsplash.com/photo-1564466021188-1e17010c5411?auto=format&fit=crop&w=400&q=80', tags: ['运动相机', '防水'] },
    { id: 4, name: 'HTC VIVE Pro 2', price: '300', unit: '天', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&w=400&q=80', tags: ['VR', '虚拟现实'] },
    { id: 5, name: 'Apple MacBook Pro M2', price: '180', unit: '天', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=400&q=80', tags: ['办公', '高性能'] },
    { id: 6, name: '爱普生投影仪', price: '80', unit: '天', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80', tags: ['会议', '高清'] },
  ];

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-white p-4 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="搜索租赁设备"
              className="w-full bg-gray-100 text-gray-900 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="p-4 grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl p-3 flex gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between flex-grow py-1">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-red-500 font-bold">
                  <span className="text-xs">¥</span>
                  <span className="text-xl">{product.price}</span>
                  <span className="text-xs text-gray-500 font-normal">/{product.unit}</span>
                </div>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  立即租赁
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leasing;
import React, { useState } from 'react';
import { Bot, Sparkles, ChevronRight, Tag } from 'lucide-react';

const SelectEquipment = () => {
  const [activeTab, setActiveTab] = useState('new');

  const categories = [
    { name: '摄影摄像', count: 120 },
    { name: '无人机', count: 45 },
    { name: 'VR/AR', count: 32 },
    { name: '电脑办公', count: 89 },
    { name: '影音娱乐', count: 67 },
    { name: '智能家居', count: 150 },
  ];

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* AI Assistant Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Bot size={28} />
              AI 选机助手
            </h1>
            <p className="text-blue-100 text-sm mb-4 max-w-xs">
              不知道选什么？告诉我您的需求，AI 帮您智能匹配最合适的设备。
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-50 transition-colors flex items-center gap-1">
              <Sparkles size={16} />
              开始智能选机
            </button>
          </div>
          <div className="hidden md:block opacity-20">
            <Bot size={120} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="flex">
          <button
            className={`flex-1 py-4 text-center font-medium text-sm ${activeTab === 'new' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('new')}
          >
            新设备
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium text-sm ${activeTab === 'used' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('used')}
          >
            二手设备
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-bold text-gray-800 mb-4">热门分类</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
              <div>
                <h3 className="font-medium text-gray-900">{cat.name}</h3>
                <span className="text-xs text-gray-400">{cat.count} 款设备</span>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
            </div>
          ))}
        </div>

        <h2 className="font-bold text-gray-800 mt-8 mb-4">精选{activeTab === 'new' ? '新品' : '二手'}</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow-sm flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-gray-900">高性能工作站 {item}号</h3>
                  {activeTab === 'used' && <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs rounded">95新</span>}
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  搭载最新处理器，适合3D渲染、视频剪辑等高负载工作...
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-red-500 font-bold">¥ 12,999</span>
                  <button className="text-blue-600 text-xs font-medium">查看详情</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectEquipment;
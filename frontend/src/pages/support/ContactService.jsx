import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactService = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">联系客服</h1>
        <p className="text-gray-500">我们随时为您提供帮助</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">联系方式</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">客服热线</h3>
                  <p className="text-blue-600 font-bold text-lg mt-1">400-123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">周一至周日 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">电子邮箱</h3>
                  <p className="text-gray-600 mt-1">support@techequip.com</p>
                  <p className="text-gray-500 text-sm mt-1">通常在24小时内回复</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">公司地址</h3>
                  <p className="text-gray-600 mt-1">上海市浦东新区张江高科技园区</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MessageSquare className="text-blue-600" /> 在线留言
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="请输入姓名" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="请输入手机号" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">问题描述</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="请详细描述您遇到的问题..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              提交留言
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactService;

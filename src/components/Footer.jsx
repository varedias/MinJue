import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">TECH-EQUIP</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              专注于AI视觉检测设备领域的专业服务平台，为您提供最优质的设备租赁、买卖及技术咨询服务。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@techequip.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>上海市浦东新区科技园区88号</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">意见反馈</h5>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors w-full">
                提交反馈
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 TECH-EQUIP. All rights reserved. 沪ICP备12345678号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Eye, ThumbsUp, Star, Clock, User, TrendingUp, Calendar, MessageSquare } from 'lucide-react';

const Discovery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('hot');
  
  // 辅助函数：处理图片路径
  const getImagePath = (path) => {
    if (path.startsWith('http')) return path;
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
  };

  // 分类标签
  const categories = [
    { id: 'all', name: '全部', icon: '🎬' },
    { id: 'review', name: '设备测评', icon: '⭐' },
    { id: 'vlog', name: '实拍Vlog', icon: '📹' },
    { id: 'tutorial', name: '使用教程', icon: '📚' },
    { id: 'trading', name: '设备买卖', icon: '💰' },
    { id: 'analysis', name: '行业分析', icon: '📊' }
  ];

  // 排序选项
  const sortOptions = [
    { id: 'hot', name: '综合排序' },
    { id: 'latest', name: '最新发布' },
    { id: 'popular', name: '最多播放' },
    { id: 'liked', name: '最多点赞' }
  ];

  // 视频数据 - 测评类
  const reviewVideos = [
    {
      id: 1,
      title: '工业视觉检测技术应用演示',
      cover: '/Picture/5f45ca8db560b.jpg',
      author: '民崛智能',
      avatar: 'https://ui-avatars.com/api/?name=MJ&background=0D8ABC&color=fff',
      views: 125600,
      likes: 3420,
      duration: '12:35',
      uploadTime: '今天',
      category: 'review',
      tags: ['AI检测', '民崛智能', '产品演示'],
      comments: 234,
      rating: 4.8
    },
    {
      id: 2,
      title: '自动化生产线智能检测系统',
      cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
      author: '民崛智能',
      avatar: 'https://ui-avatars.com/api/?name=MJ&background=22C55E&color=fff',
      views: 89200,
      likes: 2150,
      duration: '15:20',
      uploadTime: '今天',
      category: 'review',
      tags: ['自动化', '生产线', '智能检测'],
      comments: 187,
      rating: 4.9
    },
    {
      id: 3,
      title: '千元级工业相机选购指南 | 性价比之王终极测试',
      cover: '/Picture/R-C.jpg',
      author: '设备评测室',
      avatar: 'https://ui-avatars.com/api/?name=SB&background=F59E0B&color=fff',
      views: 156000,
      likes: 4230,
      duration: '18:45',
      uploadTime: '1周前',
      category: 'review',
      tags: ['工业相机', '选购指南', '性价比'],
      comments: 456,
      rating: 4.7
    },
    {
      id: 4,
      title: 'MVTec Halcon vs OpenCV | 机器视觉软件终极对决',
      cover: '/Picture/OIP-C.webp',
      author: '视觉算法工程师',
      avatar: 'https://ui-avatars.com/api/?name=SF&background=EF4444&color=fff',
      views: 67800,
      likes: 1890,
      duration: '25:12',
      uploadTime: '3天前',
      category: 'review',
      tags: ['Halcon', 'OpenCV', '软件对比'],
      comments: 312,
      rating: 4.8
    }
  ];

  // Vlog类视频
  const vlogVideos = [
    {
      id: 5,
      title: '探厂实拍 | 走进深圳AI视觉检测设备制造商',
      cover: '/videos/video-1-cover.jpg',
      author: '工业探厂Vlog',
      avatar: 'https://ui-avatars.com/api/?name=GY&background=8B5CF6&color=fff',
      views: 234000,
      likes: 6780,
      duration: '28:34',
      uploadTime: '2天前',
      category: 'vlog',
      tags: ['探厂', '深圳', 'AI检测'],
      comments: 567,
      rating: 4.9
    },
    {
      id: 6,
      title: '锂电池生产线实拍 | AOI视觉检测设备工作全流程',
      cover: '/videos/video-2-cover.jpg',
      author: '制造业观察者',
      avatar: 'https://ui-avatars.com/api/?name=ZZ&background=06B6D4&color=fff',
      views: 178000,
      likes: 4560,
      duration: '16:45',
      uploadTime: '4天前',
      category: 'vlog',
      tags: ['锂电池', 'AOI检测', '生产线'],
      comments: 345,
      rating: 4.8
    },
    {
      id: 7,
      title: '老板的一天 | 视觉设备公司日常Vlog',
      cover: '/Picture/5f45ca8db560b.jpg',
      author: '创业者日记',
      avatar: 'https://ui-avatars.com/api/?name=CY&background=F97316&color=fff',
      views: 98500,
      likes: 2340,
      duration: '12:20',
      uploadTime: '1周前',
      category: 'vlog',
      tags: ['创业', '日常', '公司运营'],
      comments: 234,
      rating: 4.6
    },
    {
      id: 8,
      title: '跟我一起参加机器视觉展会 | VISION CHINA 2024',
      cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
      author: '行业观察',
      avatar: 'https://ui-avatars.com/api/?name=HY&background=84CC16&color=fff',
      views: 145000,
      likes: 3890,
      duration: '32:15',
      uploadTime: '3天前',
      category: 'vlog',
      tags: ['展会', 'VISION', '新品发布'],
      comments: 456,
      rating: 4.9
    }
  ];

  // 教程类视频
  const tutorialVideos = [
    {
      id: 9,
      title: 'Halcon机器视觉完整教程 | 从入门到精通(1/50)',
      cover: '/Picture/OIP-C.webp',
      author: '视觉教程大师',
      avatar: 'https://ui-avatars.com/api/?name=JC&background=DC2626&color=fff',
      views: 567000,
      likes: 15600,
      duration: '45:30',
      uploadTime: '1个月前',
      category: 'tutorial',
      tags: ['Halcon', '教程', '入门'],
      comments: 1234,
      rating: 4.9
    },
    {
      id: 10,
      title: '工业相机选型与调试实战教程 | 手把手教学',
      cover: '/Picture/R-C.jpg',
      author: '工程师小李',
      avatar: 'https://ui-avatars.com/api/?name=XL&background=7C3AED&color=fff',
      views: 234000,
      likes: 7890,
      duration: '38:12',
      uploadTime: '2周前',
      category: 'tutorial',
      tags: ['工业相机', '选型', '调试'],
      comments: 678,
      rating: 4.8
    },
    {
      id: 11,
      title: 'AI缺陷检测项目实战 | 从0搭建完整系统',
      cover: '/videos/video-1-cover.jpg',
      author: 'AI视觉工程师',
      avatar: 'https://ui-avatars.com/api/?name=AI&background=2563EB&color=fff',
      views: 189000,
      likes: 6780,
      duration: '52:45',
      uploadTime: '1周前',
      category: 'tutorial',
      tags: ['AI检测', '项目实战', '深度学习'],
      comments: 892,
      rating: 4.9
    },
    {
      id: 12,
      title: 'PLC与视觉系统通讯教程 | Modbus/TCP协议详解',
      cover: '/videos/video-2-cover.jpg',
      author: '自动化工程师',
      avatar: 'https://ui-avatars.com/api/?name=ZD&background=059669&color=fff',
      views: 123000,
      likes: 4560,
      duration: '28:30',
      uploadTime: '5天前',
      category: 'tutorial',
      tags: ['PLC', '通讯', 'Modbus'],
      comments: 456,
      rating: 4.7
    }
  ];

  // 买卖类视频
  const tradingVideos = [
    {
      id: 13,
      title: '二手设备淘宝记 | 5万元收购一套完整视觉检测系统',
      cover: '/Picture/5f45ca8db560b.jpg',
      author: '设备猎人',
      avatar: 'https://ui-avatars.com/api/?name=SB&background=DC2626&color=fff',
      views: 345000,
      likes: 8900,
      duration: '22:15',
      uploadTime: '3天前',
      category: 'trading',
      tags: ['二手设备', '收购', '性价比'],
      comments: 789,
      rating: 4.8
    },
    {
      id: 14,
      title: '如何避坑 | 购买工业相机的10个注意事项',
      cover: '/Picture/R-C.jpg',
      author: '采购老司机',
      avatar: 'https://ui-avatars.com/api/?name=CG&background=F59E0B&color=fff',
      views: 267000,
      likes: 7650,
      duration: '18:45',
      uploadTime: '1周前',
      category: 'trading',
      tags: ['避坑指南', '采购', '工业相机'],
      comments: 567,
      rating: 4.9
    },
    {
      id: 15,
      title: '设备置换实录 | 老设备如何卖出好价格',
      cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
      author: '二手市场',
      avatar: 'https://ui-avatars.com/api/?name=ES&background=22C55E&color=fff',
      views: 156000,
      likes: 4230,
      duration: '15:30',
      uploadTime: '4天前',
      category: 'trading',
      tags: ['二手', '置换', '卖设备'],
      comments: 345,
      rating: 4.6
    },
    {
      id: 16,
      title: '工厂设备拍卖会直击 | 捡漏高端视觉设备',
      cover: '/videos/video-2-cover.jpg',
      author: '拍卖观察',
      avatar: 'https://ui-avatars.com/api/?name=PM&background=8B5CF6&color=fff',
      views: 198000,
      likes: 5670,
      duration: '25:40',
      uploadTime: '2天前',
      category: 'trading',
      tags: ['拍卖', '捡漏', '高端设备'],
      comments: 678,
      rating: 4.7
    }
  ];

  // 行业分析类视频
  const analysisVideos = [
    {
      id: 17,
      title: '2024机器视觉行业白皮书解读 | 市场规模突破500亿',
      cover: '/videos/video-1-cover.jpg',
      author: '行业分析师',
      avatar: 'https://ui-avatars.com/api/?name=HY&background=0D8ABC&color=fff',
      views: 456000,
      likes: 12300,
      duration: '35:20',
      uploadTime: '1周前',
      category: 'analysis',
      tags: ['行业报告', '市场分析', '趋势'],
      comments: 1234,
      rating: 4.9
    },
    {
      id: 18,
      title: 'AI视觉检测技术发展趋势 | 深度学习vs传统算法',
      cover: '/Picture/5f45ca8db560b.jpg',
      author: '技术前沿',
      avatar: 'https://ui-avatars.com/api/?name=JS&background=EF4444&color=fff',
      views: 289000,
      likes: 8900,
      duration: '28:15',
      uploadTime: '3天前',
      category: 'analysis',
      tags: ['AI', '技术趋势', '深度学习'],
      comments: 892,
      rating: 4.8
    },
    {
      id: 19,
      title: '国产vs进口 | 机器视觉设备竞争格局分析',
      cover: '/videos/video-2-cover.jpg',
      author: '产业观察',
      avatar: 'https://ui-avatars.com/api/?name=CY&background=059669&color=fff',
      views: 234000,
      likes: 6780,
      duration: '32:50',
      uploadTime: '5天前',
      category: 'analysis',
      tags: ['国产化', '进口替代', '竞争分析'],
      comments: 678,
      rating: 4.7
    },
    {
      id: 20,
      title: '新能源行业带来的视觉检测机遇 | 千亿市场解析',
      cover: '/Picture/9f1b10429b214030ab65eed8d9217246.jpeg',
      author: '投资观察',
      avatar: 'https://ui-avatars.com/api/?name=TZ&background=F97316&color=fff',
      views: 345000,
      likes: 9870,
      duration: '26:30',
      uploadTime: '2天前',
      category: 'analysis',
      tags: ['新能源', '市场机遇', '投资'],
      comments: 1045,
      rating: 4.9
    }
  ];

  // 合并所有视频
  const allVideos = [
    ...reviewVideos,
    ...vlogVideos,
    ...tutorialVideos,
    ...tradingVideos,
    ...analysisVideos
  ];

  // 过滤和排序视频
  const getFilteredVideos = () => {
    let filtered = activeCategory === 'all' 
      ? allVideos 
      : allVideos.filter(v => v.category === activeCategory);

    // 排序
    switch (sortBy) {
      case 'latest':
        return filtered.sort((a, b) => a.id - b.id);
      case 'popular':
        return filtered.sort((a, b) => b.views - a.views);
      case 'liked':
        return filtered.sort((a, b) => b.likes - a.likes);
      default:
        return filtered;
    }
  };

  const displayVideos = getFilteredVideos();

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* 顶部Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-3">发现推荐</h1>
          <p className="text-blue-100 text-lg">探索工业视觉领域的精彩内容 · 学习 · 交流 · 成长</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 分类导航栏 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 sticky top-0 z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* 分类标签 */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    px-6 py-2.5 rounded-lg font-medium transition-all duration-200
                    ${activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* 排序选项 */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">排序:</span>
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${sortBy === option.id
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 视频列表 - Bilibili风格网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => navigate(`/content/${video.id}`)}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* 视频封面 */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={getImagePath(video.cover)}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    console.error('图片加载失败:', video.cover);
                    console.error('完整URL:', e.target.src);
                  }}
                  onLoad={() => console.log('图片加载成功:', video.cover)}
                />
                {/* 时长标签 */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                {/* 播放按钮 */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <Play size={28} className="text-blue-600" />
                  </div>
                </div>
                {/* 评分标签 */}
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="fill-white" />
                  {video.rating}
                </div>
              </div>

              {/* 视频信息 */}
              <div className="p-4">
                {/* 标题 */}
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-3 min-h-[40px] group-hover:text-blue-600">
                  {video.title}
                </h3>

                {/* 作者信息 */}
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={video.avatar}
                    alt={video.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-xs text-gray-600">{video.author}</span>
                </div>

                {/* 统计信息 */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {(video.views / 10000).toFixed(1)}万
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp size={14} />
                      {video.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={14} />
                      {video.comments}
                    </span>
                  </div>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {video.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 发布时间 */}
                <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {video.uploadTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 加载更多按钮 */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all font-medium">
            加载更多内容
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discovery;

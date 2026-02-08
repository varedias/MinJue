import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Eye, ThumbsUp, Share2, Bookmark, User, FileText } from 'lucide-react';
import { contentApi } from '../../api/index';

const ContentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedContent, setRelatedContent] = useState([]);
  
  // 辅助函数：处理图片和视频路径
  const getImagePath = (path) => {
    if (!path || path.startsWith('http')) return path;
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
  };

  // 加载内容详情
  useEffect(() => {
    loadContent();
  }, [id]);

  const loadContent = async () => {
    try {
      setLoading(true);
      const data = await contentApi.getDetail(id);
      if (data) {
        setContent({
          ...data,
          authorAvatar: data.authorAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.author?.charAt(0) || 'U')}&background=0D8ABC&color=fff`,
          publishDate: formatDate(data.createTime),
          thumbnail: data.cover || data.thumbnail,
          videoUrl: data.videoUrl || '/videos/video-1.mp4',
          likes: data.likes || 0,
        });
      }
      // 加载相关内容
      loadRelatedContent();
    } catch (e) {
      console.error('加载内容失败:', e);
    } finally {
      setLoading(false);
    }
  };

  const loadRelatedContent = async () => {
    try {
      const data = await contentApi.getList({ page: 1, size: 4 });
      if (data && data.records) {
        setRelatedContent(data.records.filter(item => item.id !== parseInt(id)).slice(0, 3));
      }
    } catch (e) {
      console.error('加载相关内容失败:', e);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // 加载中状态
  if (loading) {
    return (
      <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600">
              <ArrowLeft size={20} />
              <span>返回</span>
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="aspect-video bg-gray-200 rounded-xl mb-6"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  // 内容不存在
  if (!content) {
    return (
      <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600">
              <ArrowLeft size={20} />
              <span>返回</span>
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-gray-500">内容不存在或已删除</p>
          <button onClick={() => navigate('/discovery')} className="mt-4 text-blue-600 hover:underline">
            浏览更多内容
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 md:pb-0 bg-gray-50 min-h-screen">
      {/* 返回按钮 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>返回</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 标题区 */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
        
        {/* 作者信息 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src={content.authorAvatar} alt={content.author} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-medium text-gray-900">{content.author}</p>
              <p className="text-sm text-gray-500">{content.publishDate}</p>
            </div>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Eye size={16} />
              {(content.views || 0).toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp size={16} />
              {(content.likes || 0).toLocaleString()}
            </span>
          </div>
        </div>

        {/* 视频/图片区域 */}
        {(content.type === 'video' || content.type === 'vlog') ? (
          <div className="relative bg-black rounded-xl overflow-hidden mb-8 aspect-video">
            {!isPlaying ? (
              <>
                <img 
                  src={getImagePath(content.thumbnail)} 
                  alt={content.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/products/placeholder-content.svg'; }}
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                >
                  <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                    <Play size={48} className="text-blue-600 ml-1" />
                  </div>
                </button>
                {content.duration && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {content.duration}
                  </div>
                )}
              </>
            ) : (
              <video
                src={getImagePath(content.videoUrl)}
                controls
                autoPlay
                className="w-full h-full"
              />
            )}
          </div>
        ) : (
          <div className="relative rounded-xl overflow-hidden mb-8">
            <img 
              src={getImagePath(content.thumbnail)} 
              alt={content.title}
              className="w-full max-h-96 object-cover"
              onError={(e) => { e.target.src = '/products/placeholder-content.svg'; }}
            />
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <FileText size={14} />
              文章
            </div>
          </div>
        )}

        {/* 内容描述 */}
        {content.description && (
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">简介</h3>
            <p className="text-gray-600 leading-relaxed">{content.description}</p>
          </div>
        )}

        {/* 正文内容 */}
        {content.content && (
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div 
              className="prose prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </div>
        )}

        {/* 操作按钮 */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ThumbsUp size={20} />
            点赞
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Bookmark size={20} />
            收藏
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 size={20} />
            分享
          </button>
        </div>

        {/* 相关推荐 */}
        {relatedContent.length > 0 && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">相关推荐</h3>
            <div className="space-y-4">
              {relatedContent.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => navigate(`/content/${item.id}`)}
                  className="flex gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <img 
                    src={getImagePath(item.cover || item.thumbnail)} 
                    alt={item.title}
                    className="w-32 h-20 object-cover rounded-lg"
                    onError={(e) => { e.target.src = '/products/placeholder-content.svg'; }}
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 line-clamp-2 mb-1">{item.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{item.author}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {(item.views || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentDetail;

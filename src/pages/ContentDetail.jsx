import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Eye, ThumbsUp, Share2, Bookmark, User } from 'lucide-react';

const ContentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  // 所有内容数据
  const allContent = {
    1: {
      type: 'video',
      title: '工业视觉检测技术应用演示',
      author: '民崛智能',
      authorAvatar: 'https://ui-avatars.com/api/?name=MJ&background=0D8ABC&color=fff',
      publishDate: '2025-12-14',
      views: 15200,
      likes: 892,
      duration: '12:35',
      thumbnail: '/MinJue/videos/video-1-cover.jpg',
      videoUrl: '/MinJue/videos/video-1.mp4',
      description: '本视频详细展示了工业视觉检测技术在实际生产中的应用，包括产品演示、技术特点和应用案例。',
      content: `
        <h2>视频简介</h2>
        <p>本视频展示了民崛智能工业视觉检测技术的实际应用，包括AI算法、硬件设备、软件系统等核心技术模块的演示。通过实际案例，您可以了解工业视觉检测如何提升生产效率和产品质量。</p>
        
        <h3>主要内容</h3>
        <ul>
          <li><strong>产品介绍</strong>：MJ-VIS-A8等工业视觉检测设备的核心功能</li>
          <li><strong>技术特点</strong>：高精度检测、实时处理、智能分析</li>
          <li><strong>应用场景</strong>：电子制造、汽车零部件、精密加工等行业</li>
          <li><strong>检测流程</strong>：图像采集、特征提取、缺陷识别、结果输出</li>
        </ul>

        <h3>技术优势</h3>
        <p>民崛智能视觉检测系统的核心优势：</p>
        <ul>
          <li>检测精度高达99.9%</li>
          <li>处理速度快，支持实时检测</li>
          <li>易于集成到现有生产线</li>
          <li>支持多种缺陷类型识别</li>
          <li>提供完整的数据追溯功能</li>
        </ul>

        <h3>应用价值</h3>
        <p>通过部署智能视觉检测系统，企业可以显著降低次品率，提高生产效率，减少人工成本。系统投资回报周期通常在6-12个月之间。</p>
      `
    },
    2: {
      type: 'article',
      title: '如何选择合适的工业相机？5大关键参数详解',
      author: '机器视觉专家',
      authorAvatar: 'https://ui-avatars.com/api/?name=JQSJ&background=22C55E&color=fff',
      publishDate: '2025-11-19',
      views: 8500,
      likes: 456,
      readTime: '8分钟',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      content: `
        <h2>视频概述</h2>
        <p>PCB（印刷电路板）作为电子产品的核心部件，其质量直接影响到最终产品的可靠性。传统的人工检测方式不仅效率低下，而且容易出现漏检和误检。AI视觉检测技术的引入，彻底改变了这一现状。</p>
        
        <h3>主要检测项目</h3>
        <ul>
          <li><strong>焊点质量检测</strong>：通过深度学习算法，系统可以自动识别虚焊、漏焊、桥接等常见缺陷</li>
          <li><strong>元器件检测</strong>：验证元器件的型号、位置、方向是否正确</li>
          <li><strong>线路检测</strong>：检查线路是否存在断路、短路等问题</li>
          <li><strong>表面缺陷</strong>：识别划痕、污染、氧化等表面问题</li>
        </ul>

        <h3>技术优势</h3>
        <p>相比传统检测方式，AI视觉检测具有以下显著优势：</p>
        <ul>
          <li>检测速度提升300%以上</li>
          <li>准确率达到99.8%</li>
          <li>24小时不间断工作</li>
          <li>可追溯的检测数据</li>
          <li>降低人工成本60%</li>
        </ul>

        <h3>实施案例</h3>
        <p>某知名电子制造企业引入该系统后，次品率从3.5%降低到0.2%，年节约成本超过500万元。系统投资回报周期仅为8个月。</p>
      `
    },
    2: {
      type: 'article',
      title: '如何选择合适的工业相机？5大关键参数详解',
      author: '机器视觉专家',
      authorAvatar: 'https://ui-avatars.com/api/?name=JQSJ&background=22C55E&color=fff',
      publishDate: '2025-11-19',
      views: 8500,
      likes: 456,
      readTime: '8分钟',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      content: `
        <h2>引言</h2>
        <p>工业相机是机器视觉系统的"眼睛"，其性能直接决定了整个系统的检测精度和效率。面对市场上琳琅满目的产品，如何选择一款适合自己应用场景的工业相机？本文将从5个关键参数入手，为您提供专业的选型指南。</p>

        <h3>1. 分辨率（Resolution）</h3>
        <p><strong>定义：</strong>相机能够分辨的最小单元数量，通常用像素表示，如1920×1080（200万像素）。</p>
        <p><strong>选型建议：</strong></p>
        <ul>
          <li>小目标检测（如电子元件）：建议500万像素以上</li>
          <li>中型目标（如汽车零件）：200-500万像素</li>
          <li>大型目标（如钢板表面）：100-200万像素</li>
          <li>速度优先场景：可适当降低分辨率以提高帧率</li>
        </ul>
        <p><strong>计算公式：</strong>分辨率 = 视野范围 ÷ 最小检测尺寸 × 2（根据奈奎斯特采样定理）</p>

        <h3>2. 帧率（Frame Rate）</h3>
        <p><strong>定义：</strong>相机每秒能够采集的图像数量，单位fps（frames per second）。</p>
        <p><strong>应用场景：</strong></p>
        <ul>
          <li>静态检测：10-30fps</li>
          <li>低速运动物体：30-60fps</li>
          <li>中速运动物体：60-120fps</li>
          <li>高速运动物体：120fps以上</li>
        </ul>
        <p><strong>注意事项：</strong>帧率与分辨率通常成反比关系，需要根据实际需求平衡。</p>

        <h3>3. 传感器类型</h3>
        <p><strong>CCD vs CMOS：</strong></p>
        <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <th style="padding: 10px; background: #f5f5f5;">特性</th>
            <th style="padding: 10px; background: #f5f5f5;">CCD</th>
            <th style="padding: 10px; background: #f5f5f5;">CMOS</th>
          </tr>
          <tr>
            <td style="padding: 10px;">图像质量</td>
            <td style="padding: 10px;">优秀</td>
            <td style="padding: 10px;">良好</td>
          </tr>
          <tr>
            <td style="padding: 10px;">灵敏度</td>
            <td style="padding: 10px;">高</td>
            <td style="padding: 10px;">中等</td>
          </tr>
          <tr>
            <td style="padding: 10px;">速度</td>
            <td style="padding: 10px;">中等</td>
            <td style="padding: 10px;">快</td>
          </tr>
          <tr>
            <td style="padding: 10px;">功耗</td>
            <td style="padding: 10px;">高</td>
            <td style="padding: 10px;">低</td>
          </tr>
          <tr>
            <td style="padding: 10px;">价格</td>
            <td style="padding: 10px;">贵</td>
            <td style="padding: 10px;">便宜</td>
          </tr>
        </table>

        <h3>4. 接口类型</h3>
        <p><strong>常见接口对比：</strong></p>
        <ul>
          <li><strong>GigE（千兆网）：</strong>传输距离长（100米），成本低，适合多相机系统</li>
          <li><strong>USB3.0：</strong>即插即用，适合实验室和简单应用</li>
          <li><strong>Camera Link：</strong>高带宽，适合高分辨率高帧率应用</li>
          <li><strong>CoaXPress：</strong>超高速传输，适合极端应用场景</li>
        </ul>

        <h3>5. 快门类型</h3>
        <p><strong>全局快门 vs 卷帘快门：</strong></p>
        <ul>
          <li><strong>全局快门（Global Shutter）：</strong>所有像素同时曝光，适合运动物体，无果冻效应，价格较高</li>
          <li><strong>卷帘快门（Rolling Shutter）：</strong>逐行曝光，适合静态物体，价格较低，但运动物体会产生变形</li>
        </ul>

        <h3>选型实例</h3>
        <p><strong>案例1：PCB板检测</strong></p>
        <ul>
          <li>推荐配置：500万像素，60fps，CMOS全局快门，GigE接口</li>
          <li>理由：需要高分辨率识别细小缺陷，生产线速度要求60fps，GigE便于多相机组网</li>
        </ul>

        <p><strong>案例2：瓶盖缺陷检测</strong></p>
        <ul>
          <li>推荐配置：200万像素，100fps，CMOS全局快门，USB3.0接口</li>
          <li>理由：高速生产线需要高帧率，目标较大无需超高分辨率，USB接口即插即用</li>
        </ul>

        <h3>结语</h3>
        <p>选择工业相机不能只看参数，更要结合实际应用场景。建议在选型前先进行测试验证，确保相机能够满足项目需求。如果您对选型还有疑问，欢迎咨询我们的技术团队。</p>
      `
    },
    3: {
      type: 'video',
      title: '自动化生产线智能检测系统',
      author: '民崛智能',
      authorAvatar: 'https://ui-avatars.com/api/?name=MJ&background=F59E0B&color=fff',
      publishDate: '2025-12-14',
      views: 12800,
      likes: 723,
      duration: '15:20',
      thumbnail: '/MinJue/videos/video-2-cover.jpg',
      videoUrl: '/MinJue/videos/video-2.mp4',
      description: '深度展示自动化生产线上的智能视觉检测系统，包括系统架构、检测流程和实际应用效果。',
      content: `
        <h2>视频简介</h2>
        <p>本视频详细展示了自动化生产线中智能视觉检测系统的完整解决方案，从系统架构设计到实际应用效果，全方位呈现工业4.0时代的智能制造技术。</p>
        
        <h3>系统架构</h3>
        <ul>
          <li><strong>图像采集模块</strong>：高速工业相机、专业光源系统、精密机械结构</li>
          <li><strong>数据处理单元</strong>：边缘计算设备、AI推理引擎、实时分析系统</li>
          <li><strong>控制系统</strong>：PLC集成、MES对接、自动化控制</li>
          <li><strong>结果输出</strong>：缺陷标记、数据统计、质量追溯</li>
        </ul>

        <h3>检测流程</h3>
        <p>完整的检测流程包括：</p>
        <ul>
          <li>产品进入检测区域，触发相机采集</li>
          <li>高速相机捕获产品图像</li>
          <li>AI算法实时分析，识别缺陷</li>
          <li>系统自动判定合格/不合格</li>
          <li>数据上传至MES系统，生成报告</li>
        </ul>

        <h3>应用案例</h3>
        <p>该系统已成功应用于多个行业：</p>
        <ul>
          <li><strong>电子制造</strong>：PCB板、芯片、连接器质量检测</li>
          <li><strong>汽车行业</strong>：零部件表面缺陷、装配质量检测</li>
          <li><strong>食品包装</strong>：包装完整性、标签识别、异物检测</li>
          <li><strong>纺织服装</strong>：面料缺陷、印花质量检测</li>
        </ul>

        <h3>实施效果</h3>
        <p>部署智能检测系统后，企业获得显著改善：</p>
        <ul>
          <li>检测效率提升5-10倍</li>
          <li>漏检率降低至0.1%以下</li>
          <li>人工成本降低70%</li>
          <li>产品质量稳定性提升</li>
          <li>生产数据可视化、可追溯</li>
        </ul>
      `
    },
    4: {
      type: 'article',
      title: '表面缺陷检测系统部署指南与最佳实践',
      author: '工业4.0实验室',
      authorAvatar: 'https://ui-avatars.com/api/?name=GY40&background=EF4444&color=fff',
      publishDate: '2025-11-17',
      views: 6700,
      likes: 334,
      readTime: '10分钟',
      thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      content: `
        <h2>系统部署概述</h2>
        <p>表面缺陷检测是工业质检中最常见也是最具挑战性的任务之一。本文将从系统设计、硬件选型、软件开发、现场调试等方面，提供完整的部署指南。</p>

        <h3>第一阶段：需求分析</h3>
        <p><strong>关键问题清单：</strong></p>
        <ul>
          <li>检测对象是什么？（材质、尺寸、形状）</li>
          <li>缺陷类型有哪些？（划痕、污点、凹陷、色差等）</li>
          <li>最小缺陷尺寸是多少？</li>
          <li>生产线速度多快？</li>
          <li>环境条件如何？（温度、湿度、振动）</li>
          <li>精度要求是多少？（漏检率、误检率）</li>
        </ul>

        <h3>第二阶段：系统设计</h3>
        <p><strong>硬件架构：</strong></p>
        <ul>
          <li><strong>相机选型：</strong>根据视野和精度要求计算分辨率</li>
          <li><strong>镜头选择：</strong>焦距、光圈、畸变控制</li>
          <li><strong>光源配置：</strong>环形光、条形光、背光、同轴光等</li>
          <li><strong>工控机：</strong>CPU、GPU、内存、存储配置</li>
        </ul>

        <h3>第三阶段：算法开发</h3>
        <p><strong>传统方法 vs 深度学习：</strong></p>
        <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <th style="padding: 10px; background: #f5f5f5;">方法</th>
            <th style="padding: 10px; background: #f5f5f5;">优点</th>
            <th style="padding: 10px; background: #f5f5f5;">缺点</th>
            <th style="padding: 10px; background: #f5f5f5;">适用场景</th>
          </tr>
          <tr>
            <td style="padding: 10px;">传统图像处理</td>
            <td style="padding: 10px;">速度快、可解释性强</td>
            <td style="padding: 10px;">泛化能力弱</td>
            <td style="padding: 10px;">缺陷类型固定</td>
          </tr>
          <tr>
            <td style="padding: 10px;">深度学习</td>
            <td style="padding: 10px;">准确率高、泛化性好</td>
            <td style="padding: 10px;">需要大量数据</td>
            <td style="padding: 10px;">复杂缺陷识别</td>
          </tr>
        </table>

        <h3>第四阶段：现场调试</h3>
        <p><strong>调试步骤：</strong></p>
        <ol>
          <li>光源调试：确保照明均匀、对比度最优</li>
          <li>对焦调试：确保目标区域清晰</li>
          <li>曝光调试：避免过曝或欠曝</li>
          <li>算法优化：根据现场样本调整参数</li>
          <li>速度优化：确保满足生产节拍</li>
        </ol>

        <h3>第五阶段：验收与维护</h3>
        <p><strong>验收标准：</strong></p>
        <ul>
          <li>漏检率 < 0.5%</li>
          <li>误检率 < 2%</li>
          <li>检测速度满足生产要求</li>
          <li>系统稳定运行24小时无故障</li>
        </ul>

        <h3>最佳实践总结</h3>
        <ul>
          <li>✅ 充分的前期调研和需求分析</li>
          <li>✅ 预留一定的性能冗余</li>
          <li>✅ 建立完善的数据标注流程</li>
          <li>✅ 制定详细的维护保养计划</li>
          <li>✅ 培训操作人员</li>
        </ul>

        <h3>常见问题与解决方案</h3>
        <p><strong>问题1：光照不均导致误检</strong></p>
        <p>解决方案：使用图像预处理算法（如均值滤波、直方图均衡化）或更换光源类型</p>

        <p><strong>问题2：检测速度不够</strong></p>
        <p>解决方案：升级GPU、优化算法、降低分辨率、增加相机数量并行检测</p>

        <p><strong>问题3：新缺陷类型识别率低</strong></p>
        <p>解决方案：持续收集样本，定期重新训练模型</p>
      `
    }
  };

  const content = allContent[id] || allContent[1];

  const relatedContent = [
    { id: 5, title: 'AI+机器视觉：智能工厂质检革命', type: 'video' },
    { id: 6, title: '光源选型全攻略：让检测精度提升50%', type: 'article' },
    { id: 7, title: '工业镜头畸变校正技术深度解析', type: 'article' },
  ];

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
              {content.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp size={16} />
              {content.likes}
            </span>
          </div>
        </div>

        {/* 视频/图片区 */}
        <div className="mb-8 rounded-xl overflow-hidden bg-gray-100">
          {content.type === 'video' ? (
            <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full"
                controls
                poster={content.thumbnail}
                preload="metadata"
              >
                <source src={content.videoUrl} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          ) : (
            <img src={content.thumbnail} alt={content.title} className="w-full h-auto" />
          )}
        </div>

        {/* 简介 */}
        {content.description && (
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded-r">
            <p className="text-gray-700">{content.description}</p>
          </div>
        )}

        {/* 正文内容 */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content.content }}
            style={{
              lineHeight: '1.8',
              color: '#333',
            }}
          />
        </div>

        {/* 互动按钮 */}
        <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ThumbsUp size={18} />
              点赞 ({content.likes})
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Bookmark size={18} />
              收藏
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 size={18} />
              分享
            </button>
          </div>
        </div>

        {/* 相关推荐 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">相关推荐</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedContent.map((item) => (
              <div 
                key={item.id}
                onClick={() => navigate(`/content/${item.id}`)}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="h-32 bg-gray-100 rounded mb-3"></div>
                <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{item.title}</h4>
                <span className="text-xs text-blue-600 mt-2 inline-block">
                  {item.type === 'video' ? '视频' : '文章'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
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
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
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
      type: 'video',
      title: 'AOI光学检测在PCB行业的应用 | 精度提升50%',
      author: '质量检测专家',
      authorAvatar: 'https://ui-avatars.com/api/?name=ZL&background=10B981&color=fff',
      publishDate: '2025-12-10',
      views: 12800,
      likes: 678,
      duration: '15:20',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: 'PCB印刷电路板的AOI自动光学检测技术应用，展示如何通过视觉检测提升产品质量。',
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
    3: {
      type: 'video',
      title: '千元级工业相机选购指南 | 性价比之王终极测试',
      author: '设备评测室',
      authorAvatar: 'https://ui-avatars.com/api/?name=SB&background=F59E0B&color=fff',
      publishDate: '2025-12-08',
      views: 156000,
      likes: 4230,
      duration: '18:45',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
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
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
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
    },
    4: {
      type: 'video',
      title: 'MVTec Halcon vs OpenCV | 机器视觉软件终极对决',
      author: '视觉算法工程师',
      authorAvatar: 'https://ui-avatars.com/api/?name=SF&background=EF4444&color=fff',
      publishDate: '2025-12-12',
      views: 67800,
      likes: 1890,
      duration: '25:12',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '深度对比两大主流机器视觉软件Halcon和OpenCV的优劣势，帮助您选择最适合的开发平台。',
      content: `
        <h2>软件对比</h2>
        <p>Halcon和OpenCV是机器视觉领域最流行的两个软件平台，各有优势。本视频从性能、易用性、成本等多个角度进行全面对比。</p>
        <h3>性能对比</h3>
        <p>Halcon在商业应用中表现优异，而OpenCV开源免费更适合研发学习。</p>
      `
    },
    5: {
      type: 'video',
      title: '探厂实拍 | 走进深圳AI视觉检测设备制造商',
      author: '工业探厂Vlog',
      authorAvatar: 'https://ui-avatars.com/api/?name=GY&background=8B5CF6&color=fff',
      publishDate: '2025-12-13',
      views: 234000,
      likes: 6780,
      duration: '28:34',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '实地探访深圳一家专业的AI视觉检测设备制造商，了解从设计到生产的全流程。',
      content: `
        <h2>探厂之旅</h2>
        <p>深入深圳工业区，带您参观现代化的视觉检测设备生产线，感受中国智造的魅力。</p>
        <h3>生产工艺</h3>
        <p>从研发设计、零部件加工、组装调试到质量检验，每个环节都体现了精益制造的理念。</p>
      `
    },
    6: {
      type: 'video',
      title: '锂电池生产线实拍 | AOI视觉检测设备工作全流程',
      author: '制造业观察者',
      authorAvatar: 'https://ui-avatars.com/api/?name=ZZ&background=06B6D4&color=fff',
      publishDate: '2025-12-11',
      views: 178000,
      likes: 4560,
      duration: '16:45',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '锂电池生产线上的AOI视觉检测设备实际工作场景，展示智能制造如何保障产品质量。',
      content: `
        <h2>锂电池检测</h2>
        <p>新能源行业快速发展带动了锂电池生产需求，AOI视觉检测在其中发挥关键作用。</p>
        <h3>检测项目</h3>
        <p>极耳焊接、涂层均匀度、尺寸精度、表面缺陷等全方位检测。</p>
      `
    },
    7: {
      type: 'video',
      title: '老板的一天 | 视觉设备公司日常Vlog',
      author: '创业者日记',
      authorAvatar: 'https://ui-avatars.com/api/?name=CY&background=F97316&color=fff',
      publishDate: '2025-12-08',
      views: 98500,
      likes: 2340,
      duration: '12:20',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '跟随一位视觉设备公司老板，了解创业者的日常工作与挑战。',
      content: `
        <h2>创业日常</h2>
        <p>从早会到客户拜访，从技术讨论到商务谈判，记录视觉设备公司老板真实的一天。</p>
        <h3>经营感悟</h3>
        <p>分享创业经验、管理心得和行业见解。</p>
      `
    },
    8: {
      type: 'video',
      title: '跟我一起参加机器视觉展会 | VISION CHINA 2024',
      author: '行业观察',
      authorAvatar: 'https://ui-avatars.com/api/?name=HY&background=84CC16&color=fff',
      publishDate: '2025-12-12',
      views: 145000,
      likes: 3890,
      duration: '32:15',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '现场直击VISION CHINA 2024机器视觉展会，了解行业最新技术和产品趋势。',
      content: `
        <h2>展会报道</h2>
        <p>VISION CHINA是亚洲最大的机器视觉展会，汇聚了全球顶尖品牌和最新技术。</p>
        <h3>精彩内容</h3>
        <p>新品发布、技术论坛、现场演示，全方位展示机器视觉行业风貌。</p>
      `
    },
    9: {
      type: 'video',
      title: 'Halcon机器视觉完整教程 | 从入门到精通(1/50)',
      author: '视觉教程大师',
      authorAvatar: 'https://ui-avatars.com/api/?name=JC&background=DC2626&color=fff',
      publishDate: '2025-11-15',
      views: 567000,
      likes: 15600,
      duration: '45:30',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '系统学习Halcon机器视觉软件，从基础概念到高级应用，手把手教学。',
      content: `
        <h2>课程介绍</h2>
        <p>这是一套完整的Halcon视觉软件教程，涵盖图像处理、特征提取、模式匹配等核心技术。</p>
        <h3>学习路径</h3>
        <p>从环境搭建开始，逐步深入到实际项目开发，适合零基础学员。</p>
      `
    },
    10: {
      type: 'video',
      title: '工业相机选型与调试实战教程 | 手把手教学',
      author: '工程师小李',
      authorAvatar: 'https://ui-avatars.com/api/?name=XL&background=7C3AED&color=fff',
      publishDate: '2025-12-01',
      views: 234000,
      likes: 7890,
      duration: '38:12',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '详细讲解工业相机的选型原则和调试技巧，包括参数设置、镜头匹配等实战内容。',
      content: `
        <h2>相机选型</h2>
        <p>如何根据应用场景选择合适的工业相机？本教程提供系统性的选型方法论。</p>
        <h3>调试技巧</h3>
        <p>曝光时间、增益、白平衡等参数的优化调整方法。</p>
      `
    },
    11: {
      type: 'video',
      title: 'AI缺陷检测项目实战 | 从0搭建完整系统',
      author: 'AI视觉工程师',
      authorAvatar: 'https://ui-avatars.com/api/?name=AI&background=2563EB&color=fff',
      publishDate: '2025-12-08',
      views: 189000,
      likes: 6780,
      duration: '52:45',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '完整的AI缺陷检测项目开发教程，包括数据采集、模型训练、系统集成全流程。',
      content: `
        <h2>项目概述</h2>
        <p>本教程以实际工业项目为例，展示如何从零开始搭建AI缺陷检测系统。</p>
        <h3>技术栈</h3>
        <p>Python、TensorFlow、OpenCV、Flask等主流技术的综合应用。</p>
      `
    },
    12: {
      type: 'video',
      title: 'PLC与视觉系统通讯教程 | Modbus/TCP协议详解',
      author: '自动化工程师',
      authorAvatar: 'https://ui-avatars.com/api/?name=ZD&background=059669&color=fff',
      publishDate: '2025-12-10',
      views: 123000,
      likes: 4560,
      duration: '28:30',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '详解PLC与视觉系统之间的通讯协议，重点讲解Modbus/TCP的应用。',
      content: `
        <h2>通讯协议</h2>
        <p>工业自动化中，PLC与视觉系统的数据交互至关重要，Modbus/TCP是最常用的协议之一。</p>
        <h3>实战案例</h3>
        <p>演示如何实现PLC控制相机拍照、接收检测结果等功能。</p>
      `
    },
    13: {
      type: 'video',
      title: '二手设备淘宝记 | 5万元收购一套完整视觉检测系统',
      author: '设备猎人',
      authorAvatar: 'https://ui-avatars.com/api/?name=SB&background=DC2626&color=fff',
      publishDate: '2025-12-12',
      views: 345000,
      likes: 8900,
      duration: '22:15',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '记录一次二手设备收购经历，分享如何以高性价比获得工业视觉检测系统。',
      content: `
        <h2>淘宝经验</h2>
        <p>二手设备市场隐藏着不少宝藏，关键是懂行情、会鉴别。本视频分享实战经验。</p>
        <h3>注意事项</h3>
        <p>设备状态检查、价格评估、售后保障等购买要点。</p>
      `
    },
    14: {
      type: 'video',
      title: '如何避坑 | 购买工业相机的10个注意事项',
      author: '采购老司机',
      authorAvatar: 'https://ui-avatars.com/api/?name=CG&background=F59E0B&color=fff',
      publishDate: '2025-12-08',
      views: 267000,
      likes: 7650,
      duration: '18:45',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '总结工业相机采购中的常见陷阱和注意事项，帮助您做出明智选择。',
      content: `
        <h2>避坑指南</h2>
        <p>采购工业相机时，新手常犯哪些错误？资深采购经理倾囊相授。</p>
        <h3>十大要点</h3>
        <p>从参数理解、品牌选择、价格谈判到售后服务，全方位避坑。</p>
      `
    },
    15: {
      type: 'video',
      title: '设备置换实录 | 老设备如何卖出好价格',
      author: '二手市场',
      authorAvatar: 'https://ui-avatars.com/api/?name=ES&background=22C55E&color=fff',
      publishDate: '2025-12-11',
      views: 156000,
      likes: 4230,
      duration: '15:30',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '记录一次设备置换全过程，教您如何让旧设备卖出理想价格。',
      content: `
        <h2>置换技巧</h2>
        <p>企业升级设备时，如何处理旧设备？置换是一个不错的选择。</p>
        <h3>增值方法</h3>
        <p>设备保养、资料整理、市场定价等技巧分享。</p>
      `
    },
    16: {
      type: 'video',
      title: '工厂设备拍卖会直击 | 捡漏高端视觉设备',
      author: '拍卖观察',
      authorAvatar: 'https://ui-avatars.com/api/?name=PM&background=8B5CF6&color=fff',
      publishDate: '2025-12-13',
      views: 198000,
      likes: 5670,
      duration: '25:40',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '现场参加工厂设备拍卖会，见证如何以拍卖价格获得高端视觉检测设备。',
      content: `
        <h2>拍卖现场</h2>
        <p>工厂倒闭或升级时，设备拍卖是捡漏的好机会。本视频记录真实拍卖过程。</p>
        <h3>拍卖策略</h3>
        <p>如何评估设备价值、制定竞拍策略、避免冲动竞价。</p>
      `
    },
    17: {
      type: 'video',
      title: '2024机器视觉行业白皮书解读 | 市场规模突破500亿',
      author: '行业分析师',
      authorAvatar: 'https://ui-avatars.com/api/?name=HY&background=0D8ABC&color=fff',
      publishDate: '2025-12-08',
      views: 456000,
      likes: 12300,
      duration: '35:20',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '深度解读2024年机器视觉行业白皮书，分析市场趋势和投资机会。',
      content: `
        <h2>行业报告</h2>
        <p>2024年中国机器视觉市场规模突破500亿元，年增长率超过20%。</p>
        <h3>关键数据</h3>
        <p>市场规模、应用领域、技术趋势、竞争格局等核心内容解读。</p>
      `
    },
    18: {
      type: 'video',
      title: 'AI视觉检测技术发展趋势 | 深度学习vs传统算法',
      author: '技术前沿',
      authorAvatar: 'https://ui-avatars.com/api/?name=JS&background=EF4444&color=fff',
      publishDate: '2025-12-12',
      views: 289000,
      likes: 8900,
      duration: '28:15',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '分析AI视觉检测技术的发展方向，对比深度学习与传统算法的优劣。',
      content: `
        <h2>技术演进</h2>
        <p>从传统图像处理到深度学习，视觉检测技术经历了怎样的变革？</p>
        <h3>未来趋势</h3>
        <p>边缘计算、3D视觉、多模态融合等前沿技术展望。</p>
      `
    },
    19: {
      type: 'video',
      title: '国产vs进口 | 机器视觉设备竞争格局分析',
      author: '产业观察',
      authorAvatar: 'https://ui-avatars.com/api/?name=CY&background=059669&color=fff',
      publishDate: '2025-12-10',
      views: 234000,
      likes: 6780,
      duration: '32:50',
      thumbnail: '/DongShiDi/videos/video-1-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-1.mp4',
      description: '对比国产与进口机器视觉设备的技术水平和市场占有率，探讨国产替代趋势。',
      content: `
        <h2>竞争分析</h2>
        <p>国产机器视觉设备近年来快速崛起，在某些领域已接近甚至超越进口产品。</p>
        <h3>市场格局</h3>
        <p>分析各细分市场的竞争态势、国产化率、技术差距等。</p>
      `
    },
    20: {
      type: 'video',
      title: '新能源行业带来的视觉检测机遇 | 千亿市场解析',
      author: '投资观察',
      authorAvatar: 'https://ui-avatars.com/api/?name=TZ&background=F97316&color=fff',
      publishDate: '2025-12-13',
      views: 345000,
      likes: 9870,
      duration: '26:30',
      thumbnail: '/DongShiDi/videos/video-2-cover.jpg',
      videoUrl: '/DongShiDi/videos/video-2.mp4',
      description: '分析新能源产业发展为机器视觉检测带来的巨大市场机遇。',
      content: `
        <h2>市场机遇</h2>
        <p>新能源汽车、光伏、储能等行业的快速发展，催生了巨大的视觉检测需求。</p>
        <h3>投资价值</h3>
        <p>市场规模预测、细分领域机会、投资建议等内容分析。</p>
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
                playsInline
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
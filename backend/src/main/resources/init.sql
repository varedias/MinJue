-- ===========================================
-- 民崛平台 数据库初始化脚本
-- 包含: 表结构、用户数据、测试数据
-- ===========================================

-- 创建数据库
CREATE DATABASE IF NOT EXISTS minjue_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE minjue_db;

-- 1. 系统用户表
CREATE TABLE IF NOT EXISTS sys_user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    username VARCHAR(50) NOT NULL COMMENT '用户名',
    password VARCHAR(100) NOT NULL COMMENT '加密密码',
    nickname VARCHAR(50) COMMENT '昵称',
    email VARCHAR(100) COMMENT '邮箱',
    phone VARCHAR(20) COMMENT '手机号',
    avatar VARCHAR(255) COMMENT '头像URL',
    role VARCHAR(20) DEFAULT 'USER' COMMENT '角色: USER-普通用户, SUPPLIER-供应商, ADMIN-管理员',
    status TINYINT DEFAULT 1 COMMENT '状态: 1-正常, 0-禁用',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    UNIQUE KEY uk_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统用户表';

-- 2. 供应商表
CREATE TABLE IF NOT EXISTS oms_supplier (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    name VARCHAR(100) NOT NULL COMMENT '供应商名称',
    logo VARCHAR(255) COMMENT 'Logo图片URL',
    description TEXT COMMENT '企业简介',
    contact_info VARCHAR(255) COMMENT '联系方式(JSON格式)',
    is_verified TINYINT DEFAULT 0 COMMENT '认证状态: 0-待审核, 1-已认证, 2-审核拒绝',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    user_id BIGINT COMMENT '关联用户ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='供应商表';

-- 3. 商品分类表
CREATE TABLE IF NOT EXISTS pms_category (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    name VARCHAR(50) NOT NULL COMMENT '分类名称',
    parent_id BIGINT DEFAULT 0 COMMENT '父分类ID, 0表示顶级分类',
    sort INT DEFAULT 0 COMMENT '排序值',
    icon VARCHAR(255) COMMENT '图标'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品分类表';

-- 4. 商品表
CREATE TABLE IF NOT EXISTS pms_product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    supplier_id BIGINT NOT NULL COMMENT '供应商ID',
    category_id BIGINT NOT NULL COMMENT '分类ID',
    name VARCHAR(200) NOT NULL COMMENT '商品名称',
    price DECIMAL(10, 2) NOT NULL COMMENT '价格',
    original_price DECIMAL(10, 2) COMMENT '原价',
    stock INT DEFAULT 0 COMMENT '库存',
    image VARCHAR(255) COMMENT '主图URL',
    album TEXT COMMENT '相册图片(JSON数组)',
    description TEXT COMMENT '商品描述',
    specs TEXT COMMENT '规格参数(JSON格式)',
    status TINYINT DEFAULT 1 COMMENT '状态: 1-上架, 0-下架',
    sales INT DEFAULT 0 COMMENT '销量',
    views INT DEFAULT 0 COMMENT '浏览量',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品表';

-- 5. 订单表
CREATE TABLE IF NOT EXISTS oms_order (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    order_no VARCHAR(64) NOT NULL COMMENT '订单号',
    user_id BIGINT NOT NULL COMMENT '用户ID',
    total_amount DECIMAL(10, 2) NOT NULL COMMENT '订单总金额',
    status TINYINT DEFAULT 0 COMMENT '订单状态: 0-待付款, 1-待发货, 2-已发货, 3-已完成, 4-已取消',
    pay_time DATETIME COMMENT '支付时间',
    delivery_time DATETIME COMMENT '发货时间',
    finish_time DATETIME COMMENT '完成时间',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    UNIQUE KEY uk_order_no (order_no)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单表';

-- 6. 订单明细表
CREATE TABLE IF NOT EXISTS oms_order_item (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    order_id BIGINT NOT NULL COMMENT '订单ID',
    product_id BIGINT NOT NULL COMMENT '商品ID',
    product_name VARCHAR(200) COMMENT '商品名称快照',
    product_image VARCHAR(255) COMMENT '商品图片快照',
    product_price DECIMAL(10, 2) COMMENT '商品价格快照',
    quantity INT DEFAULT 1 COMMENT '购买数量',
    subtotal DECIMAL(10, 2) COMMENT '小计金额',
    INDEX idx_order_id (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单明细表';

-- 7. 内容/发现表
CREATE TABLE IF NOT EXISTS cms_content (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    title VARCHAR(200) NOT NULL COMMENT '标题',
    title_en VARCHAR(200) COMMENT '英文标题',
    type VARCHAR(20) COMMENT '类型: video-视频, article-文章, vlog-Vlog',
    cover VARCHAR(255) COMMENT '封面图URL',
    content_url TEXT COMMENT '内容URL或正文',
    author VARCHAR(50) COMMENT '作者',
    views INT DEFAULT 0 COMMENT '浏览量',
    category VARCHAR(50) COMMENT '分类: review-测评, tutorial-教程, vlog-Vlog, news-资讯',
    tags TEXT COMMENT '标签(JSON数组)',
    status TINYINT DEFAULT 1 COMMENT '状态: 1-已发布, 0-草稿',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='内容发现表';

-- ===========================================
-- 初始用户数据
-- ===========================================

-- 管理员账号 (密码: 123456)
INSERT INTO sys_user (username, password, nickname, role, status) VALUES 
('admin', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iAt6Z5EH', '系统管理员', 'ADMIN', 1);

-- 供应商测试账号 (密码: 123456)
INSERT INTO sys_user (username, password, nickname, role, status) VALUES 
('supplier', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iAt6Z5EH', '供应商测试账号', 'SUPPLIER', 1);

-- 采购方测试账号 (密码: 123456)
INSERT INTO sys_user (username, password, nickname, role, status) VALUES 
('buyer', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iAt6Z5EH', '采购方测试账号', 'USER', 1);

-- ===========================================
-- 测试数据
-- ===========================================

-- 1. 供应商数据
INSERT INTO oms_supplier (id, name, logo, description, contact_info, is_verified, user_id) VALUES
(1, '民崛智能科技有限公司', 'https://ui-avatars.com/api/?name=MJ&background=6366F1&color=fff', 
   '专注于模具行业智能化解决方案，提供模具视觉监测、缺陷检测等智能装备。', 
   '{"phone":"400-xxx-xxxx","email":"info@min-jue.com","address":"浙江省宁波市"}', 1, NULL),

(2, '牧河自动化设备有限公司', 'https://ui-avatars.com/api/?name=MH&background=10B981&color=fff', 
   '专业自动化上料设备制造商，产品广泛应用于电子、塑料、五金等行业。', 
   '{"phone":"400-xxx-xxxx","email":"contact@muhe-auto.com","address":"江苏省苏州市工业园区"}', 1, NULL),

(3, '深圳智视科技有限公司', 'https://ui-avatars.com/api/?name=ZS&background=0D8ABC&color=fff', 
   '专注于工业AI视觉检测解决方案，拥有自主研发的深度学习算法平台。', 
   '{"phone":"400-888-8888","email":"contact@zhishi-tech.com","address":"深圳市南山区科技园"}', 1, NULL),

(4, '杭州精准视觉设备厂', 'https://ui-avatars.com/api/?name=JZ&background=22C55E&color=fff', 
   '国内领先的工业相机制造商，产品广泛应用于电子、汽车、医药等行业。', 
   '{"phone":"400-xxx-xxxx","email":"sales@jzvision.com","address":"杭州市滨江区"}', 1, NULL),

(5, '上海光源智能装备', 'https://ui-avatars.com/api/?name=GY&background=F59E0B&color=fff', 
   '专业研发生产机器视觉LED光源，提供定制化光源解决方案。', 
   '{"phone":"400-xxx-xxxx","email":"info@gylight.com","address":"上海市浦东新区"}', 1, NULL),

(6, '北京博视自动化技术', 'https://ui-avatars.com/api/?name=BS&background=EF4444&color=fff', 
   '资深自动化系统集成商，服务于航空航天、军工等高端制造领域。', 
   '{"phone":"400-xxx-xxxx","email":"service@boshi-auto.com","address":"北京市海淀区中关村"}', 1, NULL);

-- 2. 商品分类数据
INSERT INTO pms_category (id, name, parent_id, sort, icon) VALUES
(1, 'AI视觉检测', 0, 1, 'eye'),
(2, '自动化设备', 0, 2, 'settings'),
(3, '工业相机', 0, 3, 'camera'),
(4, '光源镜头', 0, 4, 'sun'),
(5, '测量仪器', 0, 5, 'ruler'),
(6, '工业机器人', 0, 6, 'robot');

-- 3. 商品数据
INSERT INTO pms_product (id, supplier_id, category_id, name, price, original_price, stock, image, description, specs, status, sales, views) VALUES
(1, 1, 1, '民崛智能模具视觉监测装置 MJ-VIS-A8', 35800.00, 42000.00, 100, '/products/minjue-product-1.png', 
   '专业模具视觉监测系统，实时监控模具状态，AI智能识别异常，适用于注塑、压铸等行业', 
   '["高清工业相机","智能算法","实时监控","异常报警"]', 1, 856, 12500),

(2, 1, 1, '民崛智能模具保护监视器 MJ-MP-PRO', 28900.00, 35000.00, 80, '/products/minjue-product-2.png', 
   '实时监控模具运行状态，自动检测异常，防止模具损坏，降低生产成本', 
   '["模具保护","实时检测","自动报警","数据记录"]', 1, 1023, 15800),

(3, 1, 1, '民崛智能缺陷检测系统 MJ-QC-3000', 42000.00, 50000.00, 50, '/products/minjue-product-3.png', 
   '采用深度学习算法，精准识别产品表面缺陷，检测精度高达99.5%', 
   '["深度学习","高精度检测","多种缺陷识别","自动分类"]', 1, 645, 9800),

(4, 2, 2, '牧河自动化上料机 MH-FL-200', 18900.00, 22000.00, 200, 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400', 
   '全自动上料系统，适用于各类生产线，提升生产效率', 
   '["自动上料","高效稳定","多规格适配"]', 1, 1234, 18500),

(5, 3, 1, '海康威视AI视觉检测系统 VIS-2000', 28900.00, 35000.00, 60, 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', 
   '2D+3D双模式, 深度学习算法, 0.1mm精度', 
   '["2D+3D双模式","深度学习算法","0.1mm精度"]', 1, 1245, 15600),

(6, 4, 3, 'Basler ace系列工业相机套装', 4299.00, 4999.00, 500, 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', 
   '200万像素, GigE接口, 含镜头', 
   '["200万像素","GigE接口","含镜头"]', 1, 2234, 25000),

(7, 5, 4, 'CCS LED环形光源 LDR2-100', 680.00, 800.00, 1000, 'https://images.unsplash.com/photo-1581093458791-9d58b3fbbd0d?w=400', 
   '高亮度, 可调光, 多种规格', 
   '["高亮度","可调光","多种规格"]', 1, 5678, 35000),

(8, 6, 5, '基恩士3D激光轮廓仪', 15800.00, 18000.00, 30, 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400', 
   '超高精度3D测量, 适用于各种材质', 
   '["微米级精度","抗干扰","多材质适用"]', 1, 567, 8900),

(9, 6, 6, 'ABB工业机器人IRB 1200', 45000.00, 52000.00, 20, 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', 
   '5kg/7kg负载, 适用于装配和物料搬运', 
   '["高速","紧凑型","5kg/7kg负载"]', 1, 345, 6500),

(10, 4, 4, '远心镜头 50mm', 1200.00, 1500.00, 300, 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400', 
   '支持2/3英寸靶面, C接口', 
   '["低畸变","高分辨率","C接口"]', 1, 890, 11200);

-- 4. 内容/发现数据
INSERT INTO cms_content (id, title, title_en, type, cover, author, views, category, tags, status) VALUES
(1, '海康威视AI视觉检测系统深度测评', 'Hikvision AI Vision Inspection System In-depth Review', 
   'video', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600', 
   '工业视觉达人', 125600, 'review', '["AI检测","海康威视","测评"]', 1),

(2, '基恩士vs康耐视 | 3D视觉传感器横评', 'Keyence vs Cognex | 3D Vision Sensor Comparison', 
   'video', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600', 
   '智能制造观察', 89200, 'review', '["基恩士","康耐视","3D视觉"]', 1),

(3, '如何选择工业相机？5个关键参数详解', 'How to Choose Industrial Cameras? 5 Key Parameters', 
   'article', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600', 
   '机器视觉专家', 8500, 'tutorial', '["工业相机","选购指南"]', 1),

(4, '探厂实拍 | 走进深圳AI视觉检测设备制造商', 'Factory Tour | Inside Shenzhen AI Vision Equipment Manufacturer', 
   'vlog', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600', 
   '工业探厂Vlog', 234000, 'vlog', '["探厂","深圳","制造业"]', 1);

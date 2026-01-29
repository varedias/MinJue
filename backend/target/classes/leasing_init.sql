-- ===========================================
-- 租赁设备表 - 新增
-- ===========================================

USE minjue_db;

-- 租赁设备表
CREATE TABLE IF NOT EXISTS oms_leasing (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    name VARCHAR(200) NOT NULL COMMENT '设备名称',
    type VARCHAR(20) NOT NULL COMMENT '租赁类型: financing-融资租赁, operating-经营租赁',
    image VARCHAR(255) COMMENT '设备图片URL',
    description TEXT COMMENT '设备描述',
    supplier VARCHAR(100) COMMENT '供应商名称',
    supplier_id BIGINT COMMENT '供应商ID',
    -- 融资租赁字段
    monthly_price DECIMAL(10, 2) COMMENT '月租金',
    total_price DECIMAL(10, 2) COMMENT '设备总价',
    duration VARCHAR(50) COMMENT '租期(如: 36个月)',
    -- 经营租赁字段
    daily_price DECIMAL(10, 2) COMMENT '日租金',
    weekly_price DECIMAL(10, 2) COMMENT '周租金',
    -- 通用字段
    benefits TEXT COMMENT '服务优势(JSON数组)',
    tags TEXT COMMENT '标签(JSON数组)',
    leased INT DEFAULT 0 COMMENT '已租次数',
    rating DECIMAL(2, 1) DEFAULT 5.0 COMMENT '评分',
    status TINYINT DEFAULT 1 COMMENT '状态: 1-上架, 0-下架',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='租赁设备表';

-- 插入测试数据 - 融资租赁
INSERT INTO oms_leasing (name, type, image, description, supplier, monthly_price, total_price, duration, benefits, tags, leased, rating, status) VALUES
('海康威视AI视觉检测系统 VIS-2000', 'financing', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', 
 '适合企业长期使用,租期结束后设备归您所有', '深圳智视科技', 2800.00, 280000.00, '36个月',
 '["设备所有权转移","税收优惠","固定资产管理"]', '["AI检测","设备所有权转移"]', 156, 4.9, 1),

('Basler ace系列工业相机套装', 'financing', 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
 '200万像素,含镜头,适合生产线长期使用', '杭州精准视觉', 380.00, 38000.00, '24个月',
 '["分期付款","减轻资金压力","设备归属权"]', '["工业相机","长期租赁"]', 234, 4.8, 1),

('ABB IRB 1200工业机器人', 'financing', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
 '6轴机器人,负载7kg,适合自动化生产线', 'ABB授权代理商', 7200.00, 850000.00, '48个月',
 '["设备升级选择","维护服务包含","产权转移"]', '["工业机器人","融资租赁"]', 89, 5.0, 1),

('三坐标测量机 高精度版', 'financing', 'https://images.unsplash.com/photo-1581093458791-9d58b3fbbd0d?w=400',
 '高精度三坐标测量,适合质检部门长期配置', '上海精密仪器', 15000.00, 1800000.00, '48个月',
 '["技术升级服务","培训支持","设备所有权"]', '["精密测量","高端设备"]', 45, 4.9, 1);

-- 插入测试数据 - 经营租赁
INSERT INTO oms_leasing (name, type, image, description, supplier, daily_price, weekly_price, monthly_price, benefits, tags, leased, rating, status) VALUES
('AI视觉检测便携式系统', 'operating', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
 '适合项目型需求,随租随用,无需长期投入', '北京视觉科技', 200.00, 1200.00, 4000.00,
 '["按需租赁","即租即用","无设备折旧"]', '["短期租赁","灵活使用"]', 456, 4.7, 1),

('工业内窥镜检测设备', 'operating', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400',
 '适合临时检测项目,设备维护由出租方负责', '上海检测设备', 150.00, 900.00, 3000.00,
 '["设备维护免费","技术指导","灵活退租"]', '["内窥检测","租期灵活"]', 567, 4.6, 1),

('红外热成像相机专业版', 'operating', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400',
 '适合短期热成像检测项目,高精度测温', '福禄克授权商', 300.00, 1800.00, 6000.00,
 '["专业培训","技术支持","即用即还"]', '["热成像","专业设备"]', 234, 4.8, 1),

('3D扫描仪便携款', 'operating', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
 '适合逆向工程项目,随用随租', '三维扫描科技', 250.00, 1500.00, 5000.00,
 '["软件授权包含","数据处理支持","灵活租期"]', '["3D扫描","便携设备"]', 345, 4.7, 1);

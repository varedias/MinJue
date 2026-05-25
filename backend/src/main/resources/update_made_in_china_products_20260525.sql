-- Made-in-China supplementary suppliers and products for the MinJue catalog.
-- This script is intended for existing databases that were already initialized by init.sql.
-- Source pages were sampled from Made-in-China visual inspection equipment listings on 2026-05-25.

SET NAMES utf8mb4;

START TRANSACTION;

-- Clear the previously inserted Made-in-China batch before re-importing it.
DELETE FROM pms_product
WHERE id BETWEEN 22 AND 27;

DELETE FROM oms_supplier
WHERE id BETWEEN 9 AND 14;

INSERT INTO oms_supplier (id, name, logo, description, contact_info, is_verified, user_id) VALUES
(9, 'Dongguan Anxiang Intelligent Packaging Equipment Co., Ltd.', 'https://ui-avatars.com/api/?name=AX&background=0EA5E9&color=fff',
 '来自 Made-in-China 的视觉检测设备供应商，产品覆盖注塑件外观检测、AI缺陷识别和自动判定场景。',
 '{"name":"Sales","phone":"待补充","email":"待补充","address":"Dongguan, Guangdong"}', 1, NULL),
(10, 'Shenzhen Chuangkewei Visual Technology Co., Ltd.', 'https://ui-avatars.com/api/?name=CKW&background=14B8A6&color=fff',
 '专注于机器视觉检测与分选设备，覆盖 O 型圈、垫圈、密封件等尺寸与表面缺陷自动检测场景。',
 '{"name":"Sales","phone":"待补充","email":"待补充","address":"Shenzhen, Guangdong"}', 1, NULL),
(11, 'Xiamen Openex Mechanical Technology Limited', 'https://ui-avatars.com/api/?name=OX&background=F97316&color=fff',
 '提供紧固件、轴承与汽配件的 AOI 光学分选与视觉检测设备，面向 OK/NG 自动判定场景。',
 '{"name":"Sales","phone":"待补充","email":"待补充","address":"Xiamen, Fujian"}', 1, NULL),
(12, 'Ningbo Lance Import and Export Co., Ltd.', 'https://ui-avatars.com/api/?name=NL&background=6366F1&color=fff',
 '提供 AI CCD 视觉分选与光学检测设备，聚焦金属件、黄铜件与橡胶件的自动化缺陷检测。',
 '{"name":"Sales","phone":"待补充","email":"待补充","address":"Ningbo, Zhejiang"}', 1, NULL),
(13, 'Foshan Mayer Robot Technology Co., Ltd.', 'https://ui-avatars.com/api/?name=MY&background=EF4444&color=fff',
 '专注食品和包装行业的高速视觉检测与缺陷识别设备，覆盖连续化产线质检场景。',
 '{"name":"Sales","phone":"待补充","email":"待补充","address":"Foshan, Guangdong"}', 1, NULL),
(14, 'Chengdu Tongshi Vision Intelligent Technology Co., Ltd.', 'https://ui-avatars.com/api/?name=TS&background=8B5CF6&color=fff',
 '提供工业级机器视觉质检系统与自动检测方案，适合电子元件、五金零件与塑胶件质量控制。',
 '{"name":"Sales","phone":"待补充","email":"待补充","address":"Chengdu, Sichuan"}', 1, NULL);

INSERT INTO pms_product (id, supplier_id, category_id, name, price, original_price, stock, image, album, description, specs, status, sales, views) VALUES
(22, 9, 1, '安翔智能 新一代AI注塑件缺陷视觉检测机', 268000.00, 328000.00, 12, '/products/equipment/equipment-09-ax-pack-molded-injection-vision-inspection.jpg', NULL,
 '对应 Made-in-China 商品页原图，面向注塑件和模塑件外观不良识别、OK/NG自动判定和在线视觉质检场景。',
 '["AI缺陷检测","注塑件外观检测","OK/NG自动判定","Made-in-China参考价：US$35,000-65,000/Set"]', 1, 26, 980),
(23, 10, 2, '创科维 O型圈/垫圈/密封件光学分选视觉检测机', 188000.00, 238000.00, 15, '/products/equipment/equipment-10-ckw-o-ring-optical-sorting.jpg', NULL,
 '对应 Made-in-China 商品页原图，适合 O 型圈、垫圈、密封件、螺丝和盲铆螺母等小件的尺寸与表面缺陷检测。',
 '["O型圈与垫圈检测","密封件表面缺陷识别","光学分选","Made-in-China参考价：US$50,000(1-9 sets) / US$10,000(10+ sets)"]', 1, 31, 1100),
(24, 11, 2, 'Openex AOI紧固件/轴承/汽配件光学分选视觉检测机', 258000.00, 318000.00, 10, '/products/equipment/equipment-11-openex-fastener-bearing-optical-sorting.jpg', NULL,
 '对应 Made-in-China 商品页原图，适合紧固件、轴承和汽配零件的 OK/NG 视觉判定、缺陷筛查和高速分流。',
 '["AOI光学分选","紧固件检测","轴承与汽配件","Made-in-China参考价：US$30,000-55,000/Set"]', 1, 18, 860),
(25, 12, 2, 'Lance AI CCD金属/黄铜/橡胶缺陷光学分选设备', 88000.00, 118000.00, 18, '/products/equipment/equipment-12-lance-ai-ccd-optical-sorting.jpg', NULL,
 '对应 Made-in-China 商品页原图，面向金属件、黄铜件与橡胶件的 AI CCD 光学分选与缺陷识别设备。',
 '["AI CCD视觉系统","金属与黄铜件检测","橡胶缺陷识别","Made-in-China参考价：US$6,550-15,000/Piece"]', 1, 22, 930),
(26, 13, 1, 'Mayer 食品缺陷高速自动视觉检测机', 138000.00, 168000.00, 14, '/products/equipment/equipment-13-mayer-food-defect-visual-inspection.jpg', NULL,
 '对应 Made-in-China 商品页原图，面向食品产线的高速自动视觉检测设备，用于缺陷与异物识别、连续质检和包装前质量复核。',
 '["食品缺陷检测","高速自动视觉检测","连续化产线质检","Made-in-China参考价：US$18,000-28,000/Set"]', 1, 16, 780),
(27, 14, 1, '通视智能 工业级机器视觉质检系统', 28900.00, 48000.00, 20, '/products/equipment/equipment-14-tongshi-quality-control-vision-inspection.jpg', NULL,
 '对应 Made-in-China 商品页原图，适合电子元件、汽车零件、塑胶件与标准件的工业级机器视觉质量控制场景。',
 '["工业级机器视觉质检","6镜头检测","电子元件与五金件质量控制","Made-in-China参考价：US$4,900-90,000/Piece"]', 1, 37, 1260);

COMMIT;

SELECT id, name
FROM oms_supplier
WHERE id BETWEEN 9 AND 14
ORDER BY id;

SELECT id, name, supplier_id, category_id, price, image
FROM pms_product
WHERE id BETWEEN 22 AND 27
ORDER BY id;

# 民崛智能 (MinJue) - 工业智能视觉检测平台

一个专业的工业智能视觉检测设备交易与租赁平台，集商品展示、订单管理、设备租赁、内容发现等功能于一体。

## 🎯 项目概述

民崛智能是一个B2B工业设备交易平台，专注于：
- **AI视觉检测设备** - 懂视帝、康耐视等品牌设备
- **工业相机与光源** - 专业工业视觉系统
- **设备租赁服务** - 融资租赁和经营租赁
- **内容发现** - 行业资讯、产品测评、技术教程

## 🏗️ 技术栈

### 前端 (React 19)
- **框架**: React 19 + React Router v7
- **样式**: Tailwind CSS + Lucide React 图标
- **HTTP**: Axios
- **图表**: ECharts
- **状态管理**: React Context API
- **国际化**: 中英文支持

### 后端 (Spring Boot 3)
- **框架**: Spring Boot 3.1.3
- **ORM**: MyBatis Plus
- **数据库**: MySQL 8.0
- **缓存**: Redis
- **认证**: JWT + Spring Security
- **API文档**: Swagger 3.0

## 📁 项目结构

```
MinJue/
├── backend/                          # Java 后端项目
│   ├── src/main/java/com/minjue/
│   │   ├── config/                  # 配置类 (JWT, Security, CORS等)
│   │   ├── common/                  # 通用工具 (异常处理, 结果包装等)
│   │   └── modules/                 # 业务模块
│   │       ├── system/              # 系统用户管理
│   │       ├── product/             # 商品管理
│   │       ├── order/               # 订单管理
│   │       ├── leasing/             # 租赁设备管理
│   │       ├── supplier/            # 供应商管理
│   │       ├── content/             # 内容管理
│   │       ├── interaction/         # 互动管理 (评论、点赞、收藏、分享)
│   │       └── admin/               # 管理后台接口
│   └── src/main/resources/
│       ├── application.yml          # 应用配置
│       ├── init.sql                 # 数据库初始化脚本
│       └── add_update_time.sql      # 数据库迁移脚本
│
├── frontend/                         # React 前端项目
│   ├── src/
│   │   ├── admin/                   # 管理后台
│   │   │   ├── api/                 # 管理后台 API 调用
│   │   │   ├── components/          # 通用组件 (Table, Pagination等)
│   │   │   ├── context/             # 管理后台上下文
│   │   │   ├── layouts/             # 布局组件
│   │   │   ├── locales/             # 国际化文件
│   │   │   └── pages/               # 管理页面
│   │   ├── api/                     # 用户端 API 调用
│   │   ├── components/              # 通用组件
│   │   ├── context/                 # 全局上下文
│   │   ├── pages/                   # 用户端页面
│   │   ├── App.jsx                  # 主应用
│   │   └── main.jsx                 # 入口文件
│   ├── public/                      # 静态资源
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── documents/                        # 项目文档
```

## 🚀 快速开始

### 前置要求
- Node.js 18+
- Java 17+
- MySQL 8.0+
- Redis 6.0+

### 后端启动

1. **配置数据库**
```bash
# 创建数据库并导入初始化脚本
mysql -u root -p < backend/src/main/resources/init.sql
```

2. **配置 application.yml**
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/minjue_db
    username: root
    password: your_password
  redis:
    host: localhost
    port: 6379
```

3. **启动后端**
```bash
cd backend
mvn spring-boot:run
# 或使用 IDE 直接运行 MinJueApplication.java
```

后端运行在 `http://localhost:8080`

### 前端启动

1. **安装依赖**
```bash
cd frontend
npm install
```

2. **启动开发服务器**
```bash
npm run dev
```

前端运行在 `http://localhost:3002`

## 📚 主要功能

### 用户端功能
- ✅ 用户注册/登录 (支持邮箱验证码)
- ✅ 商品浏览与搜索 (分类、排序、分页)
- ✅ 商品详情查看
- ✅ 设备租赁 (融资租赁/经营租赁)
- ✅ 购物车管理
- ✅ 订单管理 (直接下单、订单查询)
- ✅ 内容发现 (视频、文章、Vlog)
- ✅ 供应商查看
- ✅ 个人中心 (用户信息、订单历史)
- ✅ 互动功能 (评论、点赞、收藏、分享)

### 管理后台功能
- ✅ 用户管理 (查询、编辑、禁用、批量操作)
- ✅ 商品管理 (CRUD、上下架、批量操作)
- ✅ 订单管理 (查询、状态更新、统计)
- ✅ 供应商管理 (审核、编辑)
- ✅ 租赁设备管理 (CRUD、状态管理)
- ✅ 评论管理 (审核、删除)
- ✅ 互动数据管理 (点赞、收藏、分享统计)
- ✅ 仪表盘 (统计数据、图表展示)
- ✅ 国际化支持 (中英文切换)
- ✅ 分页管理 (完整的分页功能)

## 🔐 认证与授权

### 用户角色
- **USER** - 普通用户/采购方
- **SUPPLIER** - 供应商
- **ADMIN** - 管理员 (自动识别，无需单独登录)

### 认证流程
1. 用户登录时需要输入验证码
2. 后端验证成功后返回 JWT Token
3. 前端存储 Token 到 localStorage
4. 后续请求自动在 Authorization header 中携带 Token
5. 刷新页面时自动从 localStorage 恢复用户信息

## 📊 数据库表结构

### 核心表
- `sys_user` - 系统用户表
- `pms_product` - 商品表
- `pms_category` - 商品分类表
- `oms_order` - 订单表
- `oms_order_item` - 订单明细表
- `oms_supplier` - 供应商表
- `oms_leasing` - 租赁设备表
- `cms_content` - 内容表
- `pms_comment` - 商品评论表
- `ums_like` - 用户点赞表
- `ums_favorite` - 用户收藏表
- `ums_share` - 分享记录表

## 🔧 API 文档

### 用户认证
```
POST /api/v1/user/login          - 用户登录
POST /api/v1/user/register       - 用户注册
GET  /api/v1/user/info           - 获取用户信息
POST /api/v1/user/reset-password - 重置密码
```

### 商品相关
```
GET  /api/product/list           - 获取商品列表
GET  /api/product/{id}           - 获取商品详情
GET  /api/category/list          - 获取分类列表
```

### 订单相关
```
POST /api/order/direct           - 直接下单
GET  /api/order/list             - 获取订单列表
GET  /api/order/{id}             - 获取订单详情
POST /api/order/pay/{id}         - 支付订单
```

### 管理后台
```
GET  /api/admin/dashboard/stats           - 获取统计数据
GET  /api/admin/dashboard/recent-users    - 获取最新用户
GET  /api/admin/dashboard/recent-products - 获取最新商品
GET  /api/admin/user/list                 - 用户列表
GET  /api/admin/product/list              - 商品列表
GET  /api/admin/order/list                - 订单列表
GET  /api/admin/interaction/stats         - 互动统计
```

## 🧪 测试账号

### 管理员
- 用户名: `admin`
- 密码: `123456`
- 角色: 自动识别为管理员

### 供应商
- 用户名: `supplier1`
- 密码: `123456`

### 普通用户
- 用户名: `user1`
- 密码: `123456`

## 📝 开发指南

### 添加新的管理页面

1. 创建 API 文件 `frontend/src/admin/api/xxx.js`
2. 创建页面组件 `frontend/src/admin/pages/XxxList.jsx`
3. 在 `frontend/src/admin/layouts/Sidebar.jsx` 中添加菜单项
4. 在 `App.jsx` 中添加路由

### 添加新的后端接口

1. 创建 Entity 类
2. 创建 Mapper 接口
3. 创建 Service 类
4. 创建 Controller 类
5. 在 `init.sql` 中添加表结构

### 国际化支持

- 中文: `frontend/src/admin/locales/zh.js`
- 英文: `frontend/src/admin/locales/en.js`

使用 `AdminI18nContext` 进行国际化切换

## 🐛 常见问题

### 1. 后端启动报错 "Unknown column 'update_time'"
执行迁移脚本:
```bash
mysql -u root -p minjue_db < backend/src/main/resources/add_update_time.sql
```

### 2. 前端 403 错误
确保:
- 后端已重启
- Token 有效且正确传递
- 用户角色为 ADMIN (管理后台)

### 3. 刷新页面自动退出登录
已修复，现在支持:
- 自动从 localStorage 恢复用户信息
- 加载状态等待完成后再检查权限

## 📦 部署

### Docker 部署 (可选)

```bash
# 构建前端
cd frontend
npm run build

# 构建后端
cd ../backend
mvn clean package

# 使用 Docker Compose 部署
docker-compose up -d
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 📞 联系方式

- 项目主页: https://github.com/varedias/MinJue
- 问题反馈: https://github.com/varedias/MinJue/issues

## 🎉 致谢

感谢所有贡献者和使用者的支持！

---

**最后更新**: 2026-01-29
**版本**: 1.0.0

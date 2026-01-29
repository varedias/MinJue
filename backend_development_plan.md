# 民崛智能 (MinJue) 后端开发计划与周期文档

## 1. 项目概述
**目标**：构建一个基于 Java Spring Boot 的高性能、可扩展的后端系统，替代前端 Mock 数据，实现用户认证、商品管理、供应商管理、订单处理及内容发布等核心功能。
**核心原则**：KISS (保持简单), YAGNI (按需开发), SOLID (稳健设计)。

---

## 2. 技术栈选型 (Technology Stack)

| 类别 | 技术组件 | 版本/说明 |
| :--- | :--- | :--- |
| **基础语言** | Java | JDK 17 / 21 (LTS) |
| **核心框架** | Spring Boot | 3.2.x |
| **数据库** | MySQL | 8.0.x |
| **ORM框架** | MyBatis-Plus | 3.5.x (高效开发) |
| **缓存中间件** | Redis | 7.x (会话、热点数据) |
| **安全框架** | Spring Security + JWT | 无状态认证 |
| **API文档** | Knife4j (Swagger 3) | 在线调试与文档 |
| **工具库** | Hutool, Lombok | 简化开发 |
| **构建工具** | Maven / Gradle | 依赖管理 |

---

## 3. 总体架构设计

采用 **单体模块化架构 (Modular Monolith)**，既保证开发效率，又便于未来微服务拆分。

### 3.1 目录结构规划
```text
com.minjue
├── common          // 公共模块 (全局异常、Result封装、工具类)
├── config          // 全局配置 (Swagger, MyBatis, Cors)
├── modules         // 业务模块
│   ├── system      // 系统管理 (用户、角色、权限、登录)
│   ├── product     // 商品中心 (商品、分类、规格、SKU)
│   ├── supplier    // 供应商管理 (入驻、审核、详情)
│   ├── order       // 交易中心 (购物车、订单、支付回调)
│   ├── content     // 内容中心 (发现页、文章、视频)
│   └── inquiry     // 客服咨询 (IM记录)
└── MinJueApplication.java
```

---

## 4. 数据库设计概要 (核心表)

1.  **SysUser (用户表)**: `id`, `username`, `password`, `mobile`, `email`, `avatar`, `role`, `status`
2.  **OmsSupplier (供应商表)**: `id`, `name`, `logo`, `description`, `contact_info`, `is_verified`
3.  **PmsProduct (商品表)**: `id`, `supplier_id`, `category_id`, `name`, `price`, `original_price`, `stock`, `specs (json)`, `detail_html`
4.  **OmsOrder (订单表)**: `id`, `order_no`, `user_id`, `total_amount`, `status` (0待付款 1待发货 2已发货 3已完成)
5.  **CmsContent (内容表)**: `id`, `title`, `type` (video/article), `cover_url`, `content_url`, `author_id`

---

## 5. 开发周期与里程碑 (Development Timeline)

**预估总工期**：10 - 14 天 (按单人全职开发计算)

### 🟢 第一阶段：基础设施搭建 (Day 1 - 2)
*   **Day 1**:
    *   创建 Spring Boot 项目，配置 Maven 依赖。
    *   配置 MySQL 多环境 (dev/prod) 及 Redis 连接。
    *   搭建统一响应结果类 (`Result<T>`) 和 全局异常处理器 (`GlobalExceptionHandler`)。
*   **Day 2**:
    *   集成 MyBatis-Plus 及代码生成器。
    *   集成 Knife4j (Swagger) 接口文档。
    *   集成 Spring Security + JWT，实现基础的 Token 颁发与校验。

### 🟡 第二阶段：核心业务开发 (Day 3 - 9)
*   **Day 3 (系统模块)**:
    *   用户注册、登录 API（含密码加密）。
    *   获取当前用户信息 API。
    *   文件上传接口 (本地存储或 OSS)。
*   **Day 4-5 (供应商与商品)**:
    *   供应商 CRUD 及详情页 API。
    *   商品分类管理。
    *   商品列表（支持分页、搜索、筛选）、商品详情 API。
    *   **数据迁移**: 将前端 `mockData.js` 数据清洗并导入数据库。
*   **Day 6-7 (内容与发现)**:
    *   发现页（视频/文章）列表与详情 API。
    *   基于标签 (Tags) 的推荐算法简易实现。
*   **Day 8-9 (交易核心)**:
    *   购物车功能 (Redis 实现，高性能)。
    *   创建订单、订单列表、订单详情。
    *   模拟支付接口及状态流转。

### 🔵 第三阶段：联调与优化 (Day 10 - 12)
*   **Day 10**:
    *   前端 API 调用对接（替换 Mock）。
    *   修复联调中发现的数据结构不一致问题。
*   **Day 11**:
    *   性能优化（SQL 索引优化、Redis 缓存预热）。
    *   安全审计（API 鉴权、参数校验）。
*   **Day 12**:
    *   编写部署脚本 (Docker Compose / Shell)。
    *   本地或服务器部署测试。

---

## 6. 接口规范 (API Standard)

所有接口统一前缀 `/api/v1`，遵循 RESTful 风格。

*   `GET /api/v1/products?page=1&size=10` - 获取商品列表
*   `GET /api/v1/products/{id}` - 获取商品详情
*   `POST /api/v1/auth/login` - 用户登录
*   `POST /api/v1/orders` - 创建订单

**响应结构**:
```json
{
  "code": 200,
  "message": "success",
  "data": { ... }
}
```

## 7. 下一步行动 (Action Plan)

1.  用户确认此计划无误。
2.  在 `f:\Development\Java\IDEA_Projects` 下新建 `MinJue-Backend` 项目。
3.  开始 **Phase 1** 搭建。

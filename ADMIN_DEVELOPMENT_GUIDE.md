# 📘 MinJue 管理后台开发开发文档

> **项目定位**: 轻量级、嵌入式管理后台。
> **适用版本**: V1.0 (MVP)

本文档按照 **数据库 (Database)**、**后端 (Backend)**、**前端 (Frontend)** 三个维度进行拆分，作为开发实施的标准参考。

---

## 1. 🗄️ 数据库开发 (Database)

**核心策略**: 本阶段 **零新增表**，完全复用现有业务表。

### 1.1 涉及的数据表
| 表名 | 用途 | 关键字段关注点 | 读写权限 |
| :--- | :--- | :--- | :--- |
| `sys_user` | 管理员/用户 | `role`: 判断是否为 'ADMIN'<br>`status`: 1=正常, 0=封禁 | 读+写 (封禁/解封) |
| `oms_supplier` | 供应商信息 | `is_verified`: 0=待审核, 1=已认证<br>`user_id`: 关联的账号ID | 读+写 (审核通过) |
| `pms_product` | 商品信息 | `status`: 1=上架, 0=下架/违规下架 | 读+写 (强制下架) |

### 1.2 SQL 变更 (如有)
*目前无需执行 SQL 变更脚本。*
*注意：未来如需增加“系统配置”或“轮播图”，建议后续再新建 `sys_config` 表。*

---

## 2. ☕ 后端开发 (Backend)

**项目位置**: `backend/` (现有 Spring Boot 项目)
**包路径**: `com.minjue.modules.admin` (新建)

### 2.1 模块结构设计
```text
com.minjue.modules.admin
├── controller
│   ├── AdminAuthController.java      # 管理员登录
│   ├── AdminUserController.java      # 用户管理
│   ├── AdminSupplierController.java  # 供应商审核
│   └── AdminProductController.java   # 商品监管
├── service
│   └── AdminService.java             # (可选) 聚合管理逻辑
└── dto
    ├── AdminLoginDTO.java            # 管理员登录参数
    └── AuditDTO.java                 # 审核操作参数
```

### 2.2 核心 API 定义

#### A. 认证模块 (`AdminAuthController`)
- `POST /api/admin/login`
    - **入参**: `username`, `password`
    - **逻辑**: 复用 `SysUserService.login`，但增加校验：**必须 `admin` 账号或具有 `ADMIN` 角色才允许通过。**
- `GET /api/admin/info`
    - **逻辑**: 获取当前管理员信息。

#### B. 供应商审核 (`AdminSupplierController`)
- `GET /api/admin/supplier/audit/list`
    - **逻辑**: 查询 `oms_supplier` 表中 `is_verified = 0` 的记录。
- `POST /api/admin/supplier/audit`
    - **入参**: `supplierId`, `pass` (boolean), `reason` (string)
    - **逻辑**:
        - 若 `pass=true`: 更新 `oms_supplier.is_verified=1`，并将关联的 `sys_user.role` 更新为 `SUPPLIER`。
        - 若 `pass=false`: 更新 `is_verified=2` (拒绝)，记录拒绝原因。

#### C. 用户管理 (`AdminUserController`)
- `PUT /api/admin/user/{userId}/status`
    - **入参**: `status` (0:封禁, 1:解封)
    - **逻辑**: 直接更新 `sys_user` 表。

#### D. 商品监管 (`AdminProductController`)
- `PUT /api/admin/product/{productId}/off-shelf`
    - **逻辑**: 强制设置 `status=0`，并记录操作日志。

### 2.3 安全配置 (`SecurityConfig.java`)
**变更点**:
需要在现有的 Spring Security 配置链中，增加对 `/api/admin/**` 的权限管控。
```java
.requestMatchers("/api/admin/**").hasRole("ADMIN") // 仅管理员可访问
```

---

## 3. 🎨 前端开发 (Frontend)

**项目位置**: `admin-web/` (在根目录新建，与 `backend`, `frontend` 并列)
**技术栈**: Vue 3 + Vite + Ant Design Vue + Pinia + Vue Router

### 3.1 目录结构
```text
admin-web/
├── src/
│   ├── api/                # 接口封装 (axios)
│   ├── assets/             # 静态资源
│   ├── components/         # 公共组件
│   ├── layout/             # 布局 (Sidebar, Header, Main)
│   ├── router/             # 路由定义
│   ├── stores/             # 状态管理 (UserStore)
│   ├── views/              # 页面文件
│   │   ├── login/          # 登录页
│   │   ├── dashboard/      # 仪表盘
│   │   ├── user/           # 用户列表
│   │   ├── supplier/       # 供应商审核
│   │   └── product/        # 商品管理
│   ├── App.vue
│   └── main.js
├── vite.config.js
└── package.json
```

### 3.2 关键页面开发计划

#### 1. 初始化与登录
- **`Login.vue`**: 简单的卡片式登录页。
- **`request.js`**: 封装 Axios。
    - 请求拦截器: 自动携带 `Authorization: Bearer token`。
    - 响应拦截器: 处理 401 未登录，跳转回登录页。

#### 2. 布局框架 (`Layout`)
- 使用 Ant Design Vue 的 `<a-layout>`。
- **侧边栏 (`Sider`)**:
    - 仪表盘 (Dashboard)
    - 用户管理 (User)
    - 供应商审核 (Supplier Audit)
    - 商品监管 (Product)
- **顶栏 (`Header`)**: 显示管理员头像，退出登录按钮。

#### 3. 业务页面
- **供应商审核页**:
    - 使用 `<a-table>` 展示待审核列表。
    - 点击“详情”弹出 `<a-modal>`，展示企业执照图片。
    - 底部放置“通过”和“拒绝”按钮。
- **用户管理页**:
    - 表格展示。
    - 操作列: “封禁” (使用 `<a-popconfirm>` 二次确认)。

---

## 4. 🚀 开发顺序建议

1.  **Backend**: 先创建 `admin` 包，写好 Login 接口和 Security 配置。
2.  **Frontend**: 初始化 Vite 项目，写好 Login 页面，调通登录流程。
3.  **Backend**: 实现供应商审核 API。
4.  **Frontend**: 实现供应商审核页面并联调。
5.  ...以此类推后续模块。

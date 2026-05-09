# 智能点餐系统前端应用

![Vue](https://img.shields.io/badge/Vue-3.3%2B-green)
![Vite](https://img.shields.io/badge/Vite-5.0%2B-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

智能点餐系统前端应用，基于 Vue 3 + Vite + TypeScript 构建。通过与后端 FastAPI 服务的实时交互，提供智能聊天点餐、菜品搜索、配送查询等功能。

## ✨ 核心功能

- **💬 智能聊天点餐**：自然语言交互，实时多轮对话
- **🔍 菜品搜索**：模糊搜索与向量语义检索结合
- **🚚 配送范围查询**：地理定位与实时配送校验
- **📱 响应式设计**：完美适配桌面、平板、手机
- **🎨 现代化 UI**：基于 Vue 3 Composition API 的组件化设计

## 🚀 快速开始

### 前置要求

- Node.js 16.0+（推荐 18+）
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 环境配置

复制 `.env.example` 为 `.env.local` 并填写后端 API 地址：

```bash
cp .env.example .env.local
```

| 环境变量 | 说明 | 示例 |
|---------|------|------|
| `VITE_API_BASE_URL` | 后端 API 基础 URL | `http://127.0.0.1:8000/smart/menu` |

### 开发模式

```bash
# 启动开发服务器（支持 HMR 热模块更新）
npm run dev
```

访问 `http://localhost:5173` 打开应用

### 生产构建

```bash
# 构建优化后的产物（输出到 dist/）
npm run build

# 本地预览生产构建
npm run preview
```

## 📁 项目结构

```
src/
├── components/            # Vue 组件库
│   ├── ChatBox.vue       # 聊天界面主体
│   ├── MessageList.vue   # 消息列表
│   ├── InputArea.vue     # 输入框区域
│   ├── MenuCard.vue      # 菜品卡片
│   ├── DeliveryInfo.vue  # 配送信息卡片
│   └── common/           # 公共组件
│       ├── Button.vue
│       ├── Modal.vue
│       └── Loading.vue
├── views/                 # 页面视图
│   ├── Home.vue          # 首页/主聊天页面
│   ├── Menu.vue          # 菜单浏览页面
│   └── About.vue         # 关于页面
├── api/                   # API 调用模块
│   ├── client.ts         # HTTP 客户端（axios 封装）
│   ├── menu.ts           # 菜品相关 API
│   ├── chat.ts           # 聊天相关 API
│   └── delivery.ts       # 配送相关 API
├── stores/               # Pinia 状态管理
│   ├── chatStore.ts      # 聊天状态
│   ├── menuStore.ts      # 菜单状态
│   └── userStore.ts      # 用户状态
├── types/                # TypeScript 类型定义
│   ├── chat.ts           # 聊天相关类型
│   ├── menu.ts           # 菜品相关类型
│   └── api.ts            # API 响应类型
├── utils/                # 工具函数
│   ├── formatters.ts     # 格式化工具
│   ├── validators.ts     # 验证工具
│   └── helpers.ts        # 辅助函数
├── styles/               # 全局样式
│   ├── variables.css     # CSS 变量定义
│   ├── base.css          # 基础样式
│   └── responsive.css    # 响应式布局
├── App.vue               # 根组件
├── main.ts               # 应用入口
└── vite-env.d.ts         # Vite 环境类型定义
```

## 🔗 API 集成示例

### 获取菜品列表

```typescript
import { queryMenus } from '@/api/menu'

const menus = await queryMenus('红烧肉')
console.log(menus)
// 输出：[{ id: 1, name: '红烧肉', price: 28.0, description: '...' }]
```

### 发送聊天消息

```typescript
import { sendChatMessage } from '@/api/chat'

const response = await sendChatMessage('我想要一份红烧肉')
console.log(response)
// 输出：{
//   message: '为您找到以下菜品...',
//   menus: [...],
//   deliveryInfo: {...}
// }
```

### 检查配送范围

```typescript
import { checkDelivery } from '@/api/delivery'

const result = await checkDelivery({
  latitude: 39.99,
  longitude: 116.31
})
console.log(result)
// 输出：{ inDeliveryRange: true, distance: 1250 }
```

## 🎨 UI 设计与布局

### 响应式断点

```css
/* 移动设备 */
@media (max-width: 640px) { }

/* 平板 */
@media (min-width: 641px) and (max-width: 1024px) { }

/* 桌面 */
@media (min-width: 1025px) { }
```

### 颜色方案

```typescript
// colors.ts
export const colors = {
  primary: '#2563eb',      // 蓝色（主色）
  secondary: '#64748b',    // 灰色（次色）
  success: '#16a34a',      // 绿色（成功）
  warning: '#ea580c',      // 橙色（警告）
  danger: '#dc2626',       // 红色（危险）
  background: '#f8fafc',   // 浅灰（背景）
}
```

## 📦 依赖项

主要依赖：
- **Vue 3.3+**：渐进式 JavaScript 框架
- **Vite 5.0+**：下一代前端构建工具
- **TypeScript 5.0+**：JavaScript 超集
- **Pinia**：轻量级状态管理库
- **axios**：HTTP 客户端
- **vue-router**：单页应用路由

开发依赖：
- **@vitejs/plugin-vue**：Vue 3 SFC 支持
- **@typescript-eslint**：TypeScript 代码检查
- **prettier**：代码格式化
- **vitest**：单元测试框架

## 🧪 测试

```bash
# 运行单元测试
npm run test

# 运行测试并生成覆盖率报告
npm run test:coverage

# 监听模式运行测试
npm run test:watch
```

## 🐳 Docker 部署

### 构建 Docker 镜像

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

构建和运行：
```bash
docker build -t smart-menu-ui:latest .
docker run -p 80:80 smart-menu-ui:latest
```

### Nginx 配置

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://backend:8000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 🛠️ 开发脚本

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码格式检查
npm run lint

# 代码格式化
npm run format

# 类型检查
npm run type-check

# 删除构建产物和依赖
npm run clean
```

## 🔧 开发指南

### 添加新页面

1. 在 `src/views/` 下创建新的 `.vue` 文件
2. 在 `src/router/index.ts` 中添加路由配置
3. 更新导航菜单

示例：
```typescript
// router/index.ts
{
  path: '/orders',
  component: () => import('@/views/Orders.vue'),
  meta: { title: '订单' }
}
```

### 添加新 API

1. 在 `src/api/` 下创建相应模块
2. 使用 `client.ts` 中的 HTTP 客户端
3. 定义 TypeScript 类型

示例：
```typescript
// api/orders.ts
import { apiClient } from './client'

export interface Order {
  id: number
  items: MenuItem[]
  total: number
}

export async function getOrders(): Promise<Order[]> {
  const response = await apiClient.get('/orders')
  return response.data.data
}
```

### 状态管理（Pinia）

```typescript
// stores/chatStore.ts
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
  const messages = ref<ChatMessage[]>([])
  
  function addMessage(msg: ChatMessage) {
    messages.value.push(msg)
  }
  
  return { messages, addMessage }
})
```

## 🌐 浏览器兼容性

| 浏览器 | 最低版本 |
|--------|--------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 📝 代码规范

- **编码风格**：遵循 ESLint + Prettier 配置
- **提交信息**：使用 Conventional Commits 规范
- **代码注释**：使用 JSDoc 格式
- **类型安全**：100% TypeScript 覆盖

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📜 许可证

MIT License

## 📧 联系方式

- 前端项目：[GitHub](https://github.com/zs2731070169-web/smart_menu_ui)
- 后端项目：[smart_menu](https://github.com/zs2731070169-web/smart_menu)

---

**最后更新**：2026-05-09

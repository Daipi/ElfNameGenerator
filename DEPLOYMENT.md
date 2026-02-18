# 🚀 快速部署指南

## 部署前准备

### ✅ 已完成的安全措施
- API密钥已从前端代码中移除
- 添加了 .gitignore 防止意外提交敏感信息
- 准备好了 Cloudflare Worker 代理代码

### 📋 部署检查清单
- [ ] 1. 部署 Cloudflare Worker（保护API密钥）
- [ ] 2. 更新前端代码中的Worker URL
- [ ] 3. 部署静态网站到托管平台
- [ ] 4. 测试AI生成功能

---

## 第一步：部署 Cloudflare Worker（必需）

### 1.1 注册 Cloudflare

访问 https://dash.cloudflare.com/sign-up
- 完全免费
- 每天10万次请求免费额度

### 1.2 创建 Worker

1. 登录后，点击左侧 **Workers & Pages**
2. 点击 **Create application**
3. 选择 **Create Worker**
4. 命名为：`elf-name-api` （或任何你喜欢的名字）
5. 点击 **Deploy**

### 1.3 配置 Worker

1. 部署后点击 **Edit code**
2. 删除默认代码
3. 复制 `cloudflare-worker.js` 的全部内容
4. 粘贴到编辑器
5. 点击 **Save and Deploy**

### 1.4 设置环境变量（重要！）

1. 返回 Worker 页面
2. 点击 **Settings** → **Variables**
3. 点击 **Add variable**
4. 名称：`HF_API_KEY`
5. 值：`YOUR_HF_TOKEN_HERE`
6. **勾选 Encrypt**（重要）
7. 点击 **Save and Deploy**

### 1.5 修改 Worker 代码使用环境变量

编辑 Worker，找到这行：

```javascript
const HF_API_KEY = 'xxx'
```

改为：

```javascript
const HF_API_KEY = env.HF_API_KEY
```

同时修改函数签名：

```javascript
// 从这个：
async function handleRequest(request) {

// 改为这个：
async function handleRequest(request, env) {
```

然后在顶部事件监听器也要传递 env：

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event.env))
})
```

保存并部署。

### 1.6 获取 Worker URL

部署后，你会看到类似这样的URL：
```
https://elf-name-api.你的子域名.workers.dev
```

**复制这个URL，马上要用！**

---

## 第二步：更新前端配置

### 2.1 修改 ai-generator.js

打开 `js/ai-generator.js`，找到这行：

```javascript
const WORKER_URL = 'YOUR_CLOUDFLARE_WORKER_URL_HERE';
```

替换为你的Worker URL：

```javascript
const WORKER_URL = 'https://elf-name-api.你的子域名.workers.dev';
```

保存文件。

---

## 第三步：选择静态托管平台部署

### 方案 A: GitHub Pages（推荐，最简单）

#### 前置条件
- 有 GitHub 账号
- 项目已推送到 GitHub

#### 部署步骤
1. 进入你的 GitHub 仓库
2. 点击 **Settings**
3. 左侧点击 **Pages**
4. Source 选择 `main` 分支，目录选择 `/`（根目录）
5. 点击 **Save**
6. 等待几分钟，你的网站就会部署到：
   ```
   https://你的用户名.github.io/ElfNameGenerator/
   ```

#### 自定义域名（可选）
1. 在 GitHub Pages 设置中，填入你的域名
2. 在域名提供商处添加 CNAME 记录指向 GitHub Pages

---

### 方案 B: Vercel（推荐，自动部署）

#### 优点
- 自动从 GitHub 部署
- 免费 SSL 证书
- 全球 CDN
- 支持自定义域名

#### 部署步骤
1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 **Add New** → **Project**
4. 选择你的 GitHub 仓库
5. 项目设置保持默认
6. 点击 **Deploy**
7. 等待部署完成，获得 URL：
   ```
   https://你的项目名.vercel.app
   ```

---

### 方案 C: Netlify

#### 优点
- 拖放部署
- 免费 SSL
- 表单处理

#### 部署步骤

**方式1：拖放部署**
1. 访问 https://app.netlify.com/drop
2. 将整个项目文件夹拖放到页面
3. 获得临时URL

**方式2：GitHub集成**
1. 访问 https://app.netlify.com
2. 点击 **Add new site** → **Import an existing project**
3. 选择 GitHub，授权
4. 选择仓库
5. 点击 **Deploy site**

---

### 方案 D: Cloudflare Pages

#### 优点
- 与 Worker 同一平台
- 速度快
- 免费无限带宽

#### 部署步骤
1. 在 Cloudflare 仪表板，点击 **Workers & Pages**
2. 点击 **Create application** → **Pages**
3. 连接 GitHub 仓库
4. 构建设置：
   - Build command: 留空
   - Build output directory: `/`
5. 点击 **Save and Deploy**

---

## 第四步：配置CORS（重要！）

部署后，需要在 Cloudflare Worker 中更新允许的来源。

编辑 Worker，找到：

```javascript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',  // 改这里
  ...
}
```

改为你的域名：

```javascript
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://你的域名.com',
  ...
}
```

如果有多个域名（比如 www 和非 www），可以这样处理：

```javascript
const allowedOrigins = [
  'https://yourdomain.com',
  'https://www.yourdomain.com',
  'https://你的用户名.github.io',
];

const origin = request.headers.get('Origin');
const corsHeaders = {
  'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

---

## 第五步：测试

### 5.1 测试静态网站

访问你的部署URL，确保：
- ✅ 页面正常加载
- ✅ 随机生成功能正常
- ✅ 图标显示正确

### 5.2 测试AI功能

1. 输入角色描述
2. 点击 "Generate with AI"
3. 应该看到加载动画
4. 然后显示生成的名称

### 5.3 检查浏览器控制台

按 F12 打开开发者工具，检查：
- ❌ 没有CORS错误
- ❌ 没有 401/403 错误
- ✅ 看到成功日志

---

## 故障排查

### ❌ CORS 错误
**问题**: `Access to fetch blocked by CORS policy`

**解决**:
1. 检查 Worker 的 CORS 头设置
2. 确保允许了你的域名
3. 在 Worker 中添加 OPTIONS 请求处理

### ❌ 401 Unauthorized
**问题**: API 认证失败

**解决**:
1. 检查 Worker 环境变量 `HF_API_KEY` 是否设置正确
2. 确认 API 密钥没有过期
3. 在 Hugging Face 检查密钥状态

### ❌ Worker URL 404
**问题**: 找不到 Worker

**解决**:
1. 确认 Worker 已成功部署
2. 检查 URL 拼写是否正确
3. 在 Cloudflare 仪表板查看 Worker 状态

### ⚠️ 总是使用本地生成
**问题**: 从不使用 AI API

**解决**:
1. 检查 `js/ai-generator.js` 中的 `WORKER_URL` 是否已更新
2. 确认不是 `YOUR_CLOUDFLARE_WORKER_URL_HERE`
3. 查看浏览器控制台的错误信息

---

## 性能优化

### 启用 Cloudflare 缓存

在 Worker 中添加缓存：

```javascript
// 对相同的请求缓存10分钟
const cacheKey = new Request(url.toString(), request);
const cache = caches.default;

let response = await cache.match(cacheKey);
if (response) {
  return response;
}

// ... 生成响应后
response = new Response(result, {
  headers: {
    ...corsHeaders,
    'Cache-Control': 'public, max-age=600'
  }
});
await cache.put(cacheKey, response.clone());
return response;
```

### 添加 CDN 加速

如果使用自定义域名，在 Cloudflare 中：
1. 添加域名到 Cloudflare
2. 开启 CDN 代理（橙色云朵）
3. 配置缓存规则

---

## 监控和维护

### Cloudflare Analytics

在 Worker 页面查看：
- 请求数量
- 成功率
- 响应时间
- 错误日志

### 定期检查

- 每周检查 API 使用量
- 每月检查 Hugging Face 配额
- 如果超过免费额度，考虑升级或切换模型

---

## 成本估算

### 免费额度（足够个人使用）

| 服务 | 免费额度 | 超出费用 |
|------|----------|----------|
| Cloudflare Workers | 100K 请求/天 | $0.50/百万请求 |
| Hugging Face API | 30K 请求/月 | 付费计划 $9/月 |
| GitHub Pages | 100GB 流量/月 | 免费 |
| Vercel | 100GB 流量/月 | $20/月 Pro |
| Netlify | 100GB 流量/月 | $19/月 Pro |

**预估**: 对于个人项目，完全免费！

---

## 安全检查清单

部署前确认：

- [x] API密钥不在前端代码中
- [x] Cloudflare Worker 使用环境变量
- [x] 环境变量已加密存储
- [x] CORS 配置了域名白名单
- [x] .gitignore 防止提交敏感信息
- [x] 代码中没有硬编码的密钥
- [x] Worker 有速率限制（可选）

---

## 总结

完成以上步骤后，你的项目将：

✅ **安全**: API密钥在服务端，前端看不到
✅ **快速**: 全球CDN加速
✅ **免费**: 免费额度完全够用
✅ **可靠**: 双重策略，AI失败自动降级
✅ **易维护**: Serverless架构，无需管理服务器

现在可以安全地将你的项目分享给全世界了！🎉

---

## 需要帮助？

- Cloudflare 文档: https://developers.cloudflare.com/workers/
- Hugging Face 文档: https://huggingface.co/docs/api-inference/
- 项目问题: 提交 GitHub Issue
- 邮件咨询: dainifei3@gmail.com

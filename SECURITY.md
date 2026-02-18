# 🔐 安全架构说明

## 架构图

```
用户浏览器
    ↓
前端网站 (GitHub Pages/Vercel/Netlify)
    ↓ (不包含 API 密钥)
    ↓
Cloudflare Worker (边缘服务器)
    ↓ (API 密钥存储在这里)
    ↓
Hugging Face API
```

## 为什么这样设计？

### ❌ 不安全的方式（之前）

```javascript
// 前端代码 - 任何人都能看到！
const API_KEY = 'YOUR_HF_TOKEN_HERE'
fetch('https://api-inference.huggingface.co/...', {
  headers: { 'Authorization': `Bearer ${API_KEY}` }
})
```

**问题**：
- ❌ 查看源代码就能看到密钥
- ❌ 别人可以复制密钥滥用
- ❌ 你的免费额度会被耗尽
- ❌ 无法撤销（除非换新密钥）

### ✅ 安全的方式（现在）

```javascript
// 前端代码 - 只有 Worker URL
const WORKER_URL = 'https://elf-name-api.xxx.workers.dev'
fetch(WORKER_URL, {
  method: 'POST',
  body: JSON.stringify({ prompt: '...' })
})
```

```javascript
// Cloudflare Worker - 运行在服务端
async function handleRequest(request, env) {
  const API_KEY = env.HF_API_KEY  // 从加密的环境变量读取
  // 调用 Hugging Face API
}
```

**优势**：
- ✅ 密钥完全不在前端
- ✅ 存储在 Cloudflare 加密环境变量中
- ✅ 可以限制访问来源（CORS）
- ✅ 可以添加速率限制
- ✅ 可以随时更换密钥

## 文件安全检查

### 前端文件（公开，任何人都能看到）

✅ `index.html` - 无敏感信息
✅ `js/generator.js` - 无敏感信息
✅ `js/ai-generator.js` - 只包含 Worker URL（公开）
✅ `css/style.css` - 无敏感信息

### 配置文件（不提交到 Git）

```
.gitignore 已包含：
- .env
- .env.local
- *.key
- config.js (如果创建)
```

### Worker 文件（仅供参考）

⚠️ `cloudflare-worker.js` - 包含示例密钥
- 这个文件只是模板
- 实际部署时，密钥存在 Cloudflare 环境变量中
- 永远不会部署到前端

## 部署后的安全状态

### 1. GitHub 仓库
```
✅ 前端代码（公开）
✅ 文档和指南（公开）
✅ cloudflare-worker.js（模板，公开无妨）
❌ 真实 API 密钥（不在这里）
```

### 2. Cloudflare Workers
```
✅ Worker 代码（你控制访问权限）
✅ 环境变量（加密存储）
❌ 前端无法访问环境变量
```

### 3. 用户浏览器
```
✅ 可以看到：前端代码、Worker URL
❌ 看不到：API 密钥、环境变量
❌ 无法绕过：Worker 是唯一的 API 入口
```

## 额外的安全措施

### 1. CORS 白名单

限制只有你的域名可以调用 Worker：

```javascript
const allowedOrigins = [
  'https://yourdomain.com',
  'https://www.yourdomain.com'
];

if (!allowedOrigins.includes(origin)) {
  return new Response('Forbidden', { status: 403 });
}
```

### 2. 速率限制

防止滥用：

```javascript
// 每个 IP 每分钟最多 10 次请求
const rateLimiter = {
  requests: new Map(),
  limit: 10,
  window: 60000 // 1分钟
};
```

### 3. 请求验证

检查请求内容：

```javascript
// 拒绝过长的请求
if (prompt.length > 500) {
  return new Response('Prompt too long', { status: 400 });
}

// 拒绝可疑内容
if (containsSuspiciousContent(prompt)) {
  return new Response('Invalid request', { status: 400 });
}
```

### 4. 日志监控

在 Cloudflare 中查看：
- 异常请求来源
- 失败率突增
- 可疑的访问模式

## 如果密钥泄露了怎么办？

### 立即行动清单

1. **在 Hugging Face 撤销密钥**
   - 登录 https://huggingface.co/settings/tokens
   - 删除泄露的 Token

2. **生成新密钥**
   - 在同一页面创建新 Token
   - 复制新密钥

3. **更新 Cloudflare 环境变量**
   - 进入 Worker Settings → Variables
   - 更新 `HF_API_KEY` 为新值
   - Save and Deploy

4. **不需要重新部署前端**
   - 前端代码不变
   - 只是 Worker 的环境变量变了

5. **监控使用情况**
   - 检查 Hugging Face 使用量
   - 确认没有异常消耗

## 成本控制

### 设置使用限制

```javascript
// 在 Worker 中记录使用次数
const usageLimit = {
  daily: 1000,
  monthly: 30000
};

// 超过限制后降级到本地生成
if (dailyCount > usageLimit.daily) {
  return localGeneration(prompt);
}
```

### Cloudflare Workers 使用监控

查看 Analytics 了解：
- 每天的请求数
- 成功/失败率
- CPU 使用时间

### Hugging Face 配额监控

在 https://huggingface.co/settings/billing 查看：
- 当前月使用量
- 剩余配额
- 预计何时达到上限

## 最佳实践总结

### ✅ 要做的事

1. **使用环境变量** - 密钥存在 Cloudflare
2. **启用加密** - 环境变量勾选 Encrypt
3. **限制 CORS** - 只允许你的域名
4. **添加速率限制** - 防止滥用
5. **定期轮换密钥** - 每3-6个月换一次
6. **监控使用情况** - 及时发现异常
7. **降级策略** - API失败时用本地生成

### ❌ 不要做的事

1. ❌ 不要在前端代码中硬编码密钥
2. ❌ 不要提交 .env 文件到 Git
3. ❌ 不要在公开的 Issue/PR 中提到密钥
4. ❌ 不要在截图中包含密钥
5. ❌ 不要把密钥发送到聊天工具
6. ❌ 不要使用没有加密的环境变量
7. ❌ 不要忽略异常的使用量增长

## 合规性

### GDPR（欧盟）
- ✅ 不收集用户个人信息
- ✅ 不存储用户输入（可选）
- ✅ 不使用 Cookies

### CCPA（加州）
- ✅ 不出售用户数据
- ✅ 透明的隐私政策

### 服务条款
确保遵守：
- Cloudflare 服务条款
- Hugging Face 使用政策
- 不用于非法用途

## 技术支持

遇到安全问题？

1. **检查文档**：DEPLOYMENT.md 和 CLOUDFLARE_DEPLOY.md
2. **查看日志**：Cloudflare Workers Logs
3. **测试 Worker**：使用 curl 单独测试
4. **联系支持**：
   - Cloudflare: https://support.cloudflare.com
   - Hugging Face: https://huggingface.co/support

## 版本历史

- **v1.0** (2026-02-14): 初始不安全版本（密钥在前端）
- **v2.0** (2026-02-14): 安全架构（使用 Cloudflare Worker）

---

🔒 **记住**：安全是一个持续的过程，不是一次性的任务！定期审查和更新你的安全措施。

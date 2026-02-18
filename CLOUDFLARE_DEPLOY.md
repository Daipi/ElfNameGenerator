# Cloudflare Workers 部署指南

## 为什么使用 Cloudflare Workers？

- ✅ **完全免费**：每天100,000次免费请求
- ✅ **全球CDN**：边缘计算，速度快
- ✅ **保护密钥**：API密钥在服务端，前端看不到
- ✅ **无需服务器**：Serverless架构
- ✅ **简单部署**：几分钟搞定

## 部署步骤

### 1. 注册 Cloudflare 账号

访问 https://dash.cloudflare.com/sign-up 注册免费账号

### 2. 创建 Worker

1. 登录后，点击左侧 **Workers & Pages**
2. 点击 **Create application** → **Create Worker**
3. 给 Worker 命名，比如：`elf-name-generator-api`
4. 点击 **Deploy**

### 3. 配置 Worker 代码

1. 部署后，点击 **Edit code**
2. 删除所有默认代码
3. 复制 `cloudflare-worker.js` 的全部内容粘贴进去
4. 点击右上角 **Save and Deploy**

### 4. 设置环境变量（推荐）

为了更安全，将API密钥设置为环境变量：

1. 返回 Worker 详情页
2. 点击 **Settings** → **Variables**
3. 点击 **Add variable**
4. 变量名：`HF_API_KEY`
5. 值：`YOUR_HF_TOKEN_HERE`
6. 勾选 **Encrypt**（加密存储）
7. 点击 **Save**

然后修改 Worker 代码中的这一行：

```javascript
// 从这个：
const HF_API_KEY = 'xxx'

// 改为这个：
const HF_API_KEY = env.HF_API_KEY
```

同时修改函数签名：
```javascript
async function handleRequest(request, env) {
```

### 5. 获取 Worker URL

部署成功后，你会得到一个URL，类似：
```
https://elf-name-generator-api.YOUR_SUBDOMAIN.workers.dev
```

复制这个URL，稍后会用到。

### 6. 测试 Worker

使用 curl 或 Postman 测试：

```bash
curl -X POST https://elf-name-generator-api.YOUR_SUBDOMAIN.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Create an elf name for a brave warrior"}'
```

如果返回JSON数据，说明部署成功！

### 7. 更新前端代码

现在需要更新 `js/ai-generator.js`，使用你的 Worker URL：

找到 `callHuggingFaceAPI` 函数，将API_URL改为你的Worker地址：

```javascript
async function callHuggingFaceAPI(prompt) {
  // 使用你的 Cloudflare Worker URL
  const API_URL = 'https://elf-name-generator-api.YOUR_SUBDOMAIN.workers.dev';
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt
    })
  });
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status}`);
  }
  
  const data = await response.json();
  const generatedText = data[0]?.generated_text || data.generated_text || '';
  
  return parseAIResponse(generatedText);
}
```

### 8. 限制访问来源（可选但推荐）

为了防止别人滥用你的API，在Worker代码中添加域名白名单：

```javascript
async function handleRequest(request, env) {
  // 检查来源
  const origin = request.headers.get('Origin')
  const allowedOrigins = [
    'https://yourdomain.com',
    'https://www.yourdomain.com',
    'http://localhost:3000', // 本地测试
  ]
  
  if (origin && !allowedOrigins.includes(origin)) {
    return new Response('Forbidden', { status: 403 })
  }
  
  // ... 其余代码
}
```

## 成本说明

### Cloudflare Workers 免费额度：

- ✅ **100,000 请求/天**
- ✅ **10ms CPU时间/请求**
- ✅ **无限制域名绑定**

对于个人项目来说，完全够用！超出后价格也很便宜：$5/月可升级到1000万次请求。

## 备选方案

如果Cloudflare Workers不合适，还可以考虑：

### Vercel Edge Functions
- 免费：100GB带宽/月
- 部署简单，集成GitHub
- https://vercel.com

### Netlify Functions
- 免费：125,000次请求/月
- 自动从GitHub部署
- https://www.netlify.com

### Deno Deploy
- 免费：100,000次请求/天
- 速度快，全球分布
- https://deno.com/deploy

## 故障排查

### CORS错误
确保Worker返回正确的CORS头部，特别是 `Access-Control-Allow-Origin`

### 401 Unauthorized
检查HF_API_KEY是否正确设置

### 504 Gateway Timeout
Hugging Face模型可能正在加载，第一次调用会慢一些，等待10-20秒后重试

### Rate Limit
免费的Hugging Face API有速率限制，考虑添加请求缓存

## 性能优化建议

### 1. 添加缓存
对于相同的prompt，缓存结果：

```javascript
// 使用Cloudflare KV存储缓存
const cached = await env.CACHE.get(promptHash)
if (cached) {
  return new Response(cached, { headers: corsHeaders })
}
```

### 2. 添加速率限制
防止滥用：

```javascript
// 使用 Cloudflare Workers 的速率限制
const { success } = await rateLimiter.limit({ key: clientIP })
if (!success) {
  return new Response('Too many requests', { status: 429 })
}
```

### 3. 监控使用情况
在Cloudflare仪表板中查看：
- 请求数量
- 错误率
- 响应时间

## 安全最佳实践

1. ✅ 使用环境变量存储密钥
2. ✅ 限制CORS来源
3. ✅ 添加速率限制
4. ✅ 验证请求内容
5. ✅ 记录异常访问
6. ✅ 定期更换API密钥

## 总结

使用Cloudflare Workers后：
- ❌ 前端不再包含API密钥
- ✅ 密钥安全存储在云端
- ✅ 完全免费（额度足够）
- ✅ 全球加速访问
- ✅ 简单部署维护

现在你可以安全地将项目部署到任何静态托管服务（GitHub Pages、Netlify、Vercel等）！

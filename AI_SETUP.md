# AI Name Generator Setup Guide

## 功能说明

AI名称生成器允许用户输入角色描述，然后自动生成一个独特的精灵名称，包括：
- 名称（Name）
- 含义（Meaning）
- 背景故事（Background）

## 当前实现

### 1. **免费本地生成（已启用）**
默认情况下，系统会使用本地算法生成名称，完全免费且无需API密钥。

**工作原理：**
- 分析用户输入的关键词
- 使用精灵语音节库组合生成名称
- 根据关键词智能生成含义
- 随机选择背景故事

**优点：**
- ✅ 完全免费
- ✅ 无需网络请求
- ✅ 即时响应
- ✅ 无使用限制

### 2. **Hugging Face API（可选）**
代码中已集成Hugging Face的免费推理API，但默认可能会因为速率限制而失败。

**如何启用完整AI功能：**

1. 访问 https://huggingface.co/
2. 注册免费账号
3. 前往 https://huggingface.co/settings/tokens
4. 创建一个新的访问令牌（Read权限即可）
5. 在 `js/ai-generator.js` 文件中，找到第55行左右的代码：

```javascript
const response = await fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // 添加下面这行，将YOUR_TOKEN替换为你的令牌
    'Authorization': 'Bearer YOUR_HUGGINGFACE_TOKEN_HERE',
  },
  ...
});
```

### 3. **其他免费AI API选项**

#### OpenAI Compatible APIs (免费层级)
- **Together AI**: https://www.together.ai/ (免费$25额度)
- **Groq**: https://groq.com/ (免费，速度快)
- **Deepseek**: https://platform.deepseek.com/ (便宜，高质量)

#### 示例代码（添加到 ai-generator.js）：

```javascript
async function callGroqAPI(prompt) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_GROQ_API_KEY',
    },
    body: JSON.stringify({
      model: 'mixtral-8x7b-32768',
      messages: [
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 200
    })
  });
  
  const data = await response.json();
  return parseAIResponse(data.choices[0].message.content);
}
```

## 提示词模板

当前提示词模板（在 `createPrompt` 函数中）：

```
You are a fantasy name generator. Based on the following character description, 
create ONE unique elf name with its meaning and background story.

Character Description: {用户输入}

Please respond in this EXACT format:
Name: [The elf name]
Meaning: [Brief meaning or translation]
Background: [One sentence background story]

Be creative and make the name sound elvish and fantasy-like.
```

## 自定义配置

### 修改音节库
在 `generateLocalName` 函数中修改这些数组：
```javascript
const prefixes = ['Ael', 'Ara', 'Cal', ...];  // 前缀
const middles = ['and', 'ath', 'dor', ...];   // 中间部分
const suffixes = ['a', 'as', 'el', ...];      // 后缀
```

### 修改背景故事模板
在 `generateLocalName` 函数中修改 `backgrounds` 数组。

## 用户体验优化

### 已实现的功能：
- ✅ 字符计数器（0/500）
- ✅ 加载动画
- ✅ 优雅的结果展示
- ✅ 一键复制名称
- ✅ 响应式设计
- ✅ 错误处理和回退机制
- ✅ Ctrl/Cmd + Enter 快捷键生成

### 建议的增强：
- 保存生成历史
- 导出为图片
- 分享到社交媒体
- 多语言支持

## 成本说明

### 当前方案（本地生成）：
- **成本**: $0
- **限制**: 无限制
- **质量**: 良好（基于规则）

### Hugging Face免费层级：
- **成本**: $0
- **限制**: ~1000次请求/天（无API密钥时）
- **限制**: 30000次请求/月（有免费API密钥时）
- **质量**: 优秀（AI生成）

### 推荐配置：
使用当前的双重策略：
1. 首先尝试AI API（如果配置）
2. 失败时自动降级到本地生成

这样既保证了服务的可用性，又在有条件时提供更好的AI体验。

## 故障排查

### AI生成失败
- 检查网络连接
- 确认API密钥是否正确
- 查看浏览器控制台的错误信息
- 系统会自动降级到本地生成

### 生成结果不理想
- 尝试提供更详细的描述（至少50个字符）
- 包含关键特征：性格、外貌、能力、背景
- 使用描述性的形容词

## 最佳实践

### 好的描述示例：
```
"A brave female elf warrior with silver hair and emerald eyes. 
She is the last guardian of the ancient moonlight forest, 
skilled in archery and nature magic."
```

### 避免的描述：
```
"elf"  // 太简短
"make a name"  // 没有实际描述
```

## 技术栈

- **前端**: 纯JavaScript（无框架）
- **AI**: Hugging Face Inference API / 本地算法
- **模型**: Mistral-7B-Instruct（可选）
- **降级策略**: 规则基础生成器

## 许可和使用

- 本地生成器完全免费，可商用
- 使用外部AI API时请遵守相应服务的条款
- 生成的名称可自由使用，无版权限制

## 支持

如有问题，请联系: dainifei3@gmail.com

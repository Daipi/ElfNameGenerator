#!/bin/bash

# 安全检查脚本
# 在提交代码前运行此脚本，确保没有泄露敏感信息

echo "🔍 正在检查代码安全性..."
echo ""

# 检查是否有硬编码的 API 密钥模式
echo "📋 检查 API 密钥..."
KEYS_FOUND=$(grep -r "hf_[A-Za-z0-9]\{34\}" --exclude-dir=node_modules --exclude-dir=.git --exclude="*.md" --exclude="cloudflare-worker.js" --exclude="security-check.sh" . || true)

if [ -n "$KEYS_FOUND" ]; then
  echo "❌ 发现可能的 API 密钥！"
  echo "$KEYS_FOUND"
  echo ""
  echo "请立即移除这些密钥，并将它们存储在环境变量中。"
  exit 1
else
  echo "✅ 未发现硬编码的 API 密钥"
fi

# 检查是否有 Bearer token
echo ""
echo "📋 检查 Bearer Token..."
BEARER_FOUND=$(grep -r "Bearer [A-Za-z0-9_-]\{20,\}" --exclude-dir=node_modules --exclude-dir=.git --exclude="*.md" --exclude="cloudflare-worker.js" --exclude="security-check.sh" . || true)

if [ -n "$BEARER_FOUND" ]; then
  echo "❌ 发现 Bearer Token！"
  echo "$BEARER_FOUND"
  exit 1
else
  echo "✅ 未发现 Bearer Token"
fi

# 检查 .env 文件是否被忽略
echo ""
echo "📋 检查 .gitignore..."
if grep -q "\.env" .gitignore; then
  echo "✅ .env 文件已在 .gitignore 中"
else
  echo "⚠️  建议在 .gitignore 中添加 .env"
fi

# 检查是否有 .env 文件将被提交
echo ""
echo "📋 检查暂存的 .env 文件..."
if git ls-files | grep -q "\.env"; then
  echo "❌ 发现 .env 文件在 git 中！"
  echo "请执行: git rm --cached .env"
  exit 1
else
  echo "✅ 未发现 .env 文件在 git 中"
fi

# 检查 Worker URL 配置
echo ""
echo "📋 检查 Worker URL 配置..."
if grep -q "YOUR_CLOUDFLARE_WORKER_URL_HERE" js/ai-generator.js; then
  echo "⚠️  Worker URL 尚未配置"
  echo "   部署前请在 js/ai-generator.js 中设置你的 Cloudflare Worker URL"
else
  echo "✅ Worker URL 已配置"
fi

# 检查敏感信息模式
echo ""
echo "📋 检查其他敏感信息..."
PATTERNS=(
  "password.*=.*['\"].*['\"]"
  "secret.*=.*['\"].*['\"]"
  "api_key.*=.*['\"].*['\"]"
  "apikey.*=.*['\"].*['\"]"
)

SENSITIVE_FOUND=0
for pattern in "${PATTERNS[@]}"; do
  FOUND=$(grep -ri "$pattern" --exclude-dir=node_modules --exclude-dir=.git --exclude="*.md" --exclude="security-check.sh" . || true)
  if [ -n "$FOUND" ]; then
    echo "⚠️  发现可能的敏感信息: $pattern"
    echo "$FOUND"
    SENSITIVE_FOUND=1
  fi
done

if [ $SENSITIVE_FOUND -eq 0 ]; then
  echo "✅ 未发现其他敏感信息"
fi

# 总结
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 安全检查完成！"
echo ""
echo "建议的部署前检查清单："
echo "  □ API 密钥已存储在 Cloudflare 环境变量中"
echo "  □ Worker URL 已在 js/ai-generator.js 中配置"
echo "  □ .gitignore 包含所有敏感文件"
echo "  □ 已测试 Worker 功能正常"
echo "  □ CORS 配置了正确的域名"
echo ""
echo "如果一切就绪，可以安全提交代码了！"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

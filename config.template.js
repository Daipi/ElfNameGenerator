# 配置模板
# 复制此文件为 config.js（如果需要本地测试）
# ⚠️ 注意：永远不要将包含真实密钥的 config.js 提交到 Git！

const CONFIG = {
  // Cloudflare Worker URL
  // 部署 Worker 后填入，格式：https://your-worker.your-subdomain.workers.dev
  WORKER_URL: 'YOUR_CLOUDFLARE_WORKER_URL_HERE',
  
  // 是否启用 AI 功能（如果为 false，只使用本地生成）
  ENABLE_AI: true,
  
  // 本地生成配置
  LOCAL_GENERATION: {
    // 音节库 - 可以自定义添加更多
    prefixes: ['Ael', 'Ara', 'Cal', 'Cel', 'Eal', 'Eol', 'Fae', 'Gal', 'Lun', 'Mir'],
    middles: ['and', 'ath', 'dor', 'en', 'il', 'ion', 'or', 'oth', 'riel', 'rin'],
    suffixes: ['a', 'as', 'el', 'en', 'eth', 'ia', 'iel', 'ion', 'is', 'or']
  }
};

// 如果在浏览器环境中，导出到全局
if (typeof window !== 'undefined') {
  window.ELF_CONFIG = CONFIG;
}

// 如果在 Node.js 环境中
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

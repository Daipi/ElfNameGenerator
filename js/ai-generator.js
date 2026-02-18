// AI Name Generator
// Using Hugging Face's free Inference API

const aiInput = document.getElementById('aiInput');
const aiGenerateBtn = document.getElementById('aiGenerateBtn');
const charCount = document.getElementById('charCount');
const aiResult = document.getElementById('aiResult');
const aiLoading = document.getElementById('aiLoading');
const aiNameDisplay = document.getElementById('aiNameDisplay');
const aiMeaningDisplay = document.getElementById('aiMeaningDisplay');
const aiBackgroundDisplay = document.getElementById('aiBackgroundDisplay');
const closeAiResult = document.getElementById('closeAiResult');
const aiCopyBtn = document.getElementById('aiCopyBtn');

// Character counter
aiInput.addEventListener('input', function() {
  const count = this.value.length;
  charCount.textContent = count;
  
  if (count > 450) {
    charCount.style.color = '#FFD700';
  } else {
    charCount.style.color = '';
  }
});

// Generate AI name
aiGenerateBtn.addEventListener('click', async function() {
  const description = aiInput.value.trim();
  
  if (!description) {
    showToast('⚠️ Please describe your character first');
    return;
  }
  
  if (description.length < 10) {
    showToast('⚠️ Please provide more details (at least 10 characters)');
    return;
  }
  
  await generateAIName(description);
});

async function generateAIName(description) {
  // Hide result and show loading
  aiResult.style.display = 'none';
  aiLoading.style.display = 'block';
  aiGenerateBtn.disabled = true;
  
  try {
    // Create the prompt for AI
    const prompt = createPrompt(description);
    
    // Try multiple free AI APIs in sequence
    let result = null;
    
    // Option 1: Try Hugging Face (free tier)
    try {
      result = await callHuggingFaceAPI(prompt);
      console.log('Hugging Face API Success,',result);
    } catch (error) {
      console.log('Hugging Face API failed, trying alternative...');
    }
    
    // Option 2: Fallback to local generation if API fails
    if (!result) {
      result = generateLocalName(description);
    }
    
    // Display result
    displayAIResult(result);
    
  } catch (error) {
    console.error('AI Generation Error:', error);
    showToast('❌ Generation failed. Please try again.');
    aiLoading.style.display = 'none';
  } finally {
    aiGenerateBtn.disabled = false;
  }
}

function createPrompt(description) {
  return `You are a fantasy name generator. Based on the following character description, create ONE unique elf name with its meaning and background story.

Character Description: ${description}

Please respond in this EXACT format:
Name: [The elf name]
Meaning: [Brief meaning or translation]
Background: [One sentence background story]

Be creative and make the name sound elvish and fantasy-like.`;
}

async function callHuggingFaceAPI(prompt) {
  // 使用 Cloudflare Worker 作为代理，保护 API 密钥
  // 请在 CLOUDFLARE_DEPLOY.md 中查看部署指南
  
  // TODO: 部署 Cloudflare Worker 后，将下面的 URL 替换为你的 Worker URL
  // 格式: https://your-worker-name.your-subdomain.workers.dev
  const WORKER_URL = 'YOUR_CLOUDFLARE_WORKER_URL_HERE';
  
  // 如果还没有部署 Worker，会直接跳到本地生成
  if (WORKER_URL === 'YOUR_CLOUDFLARE_WORKER_URL_HERE') {
    throw new Error('Cloudflare Worker not configured. Using local generation.');
  }
  
  const response = await fetch(WORKER_URL, {
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
  
  // 处理可能的错误响应
  if (data.error) {
    throw new Error(data.error);
  }
  
  const generatedText = data[0]?.generated_text || data.generated_text || '';
  
  return parseAIResponse(generatedText);
}

function parseAIResponse(text) {
  // Parse the AI response to extract name, meaning, and background
  const nameMatch = text.match(/Name:\s*(.+?)(?:\n|$)/i);
  const meaningMatch = text.match(/Meaning:\s*(.+?)(?:\n|$)/i);
  const backgroundMatch = text.match(/Background:\s*(.+?)(?:\n|$)/i);
  
  return {
    name: nameMatch ? nameMatch[1].trim() : 'Mystical Elf',
    meaning: meaningMatch ? meaningMatch[1].trim() : 'A mysterious being',
    background: backgroundMatch ? backgroundMatch[1].trim() : 'An ancient elf with untold stories'
  };
}

function generateLocalName(description) {
  // Fallback: Generate name locally based on keywords
  const keywords = description.toLowerCase();
  
  // Syllable pools for generating elvish-sounding names
  const prefixes = ['Ael', 'Ara', 'Cal', 'Cel', 'Eal', 'Eol', 'Fae', 'Gal', 'Lun', 'Mir', 'Nor', 'Sil', 'Tar', 'Tha', 'Vel'];
  const middles = ['and', 'ath', 'dor', 'en', 'il', 'ion', 'or', 'oth', 'riel', 'rin', 'thil', 'wen'];
  const suffixes = ['a', 'as', 'el', 'en', 'eth', 'ia', 'iel', 'ion', 'is', 'or', 'orn', 'wyn'];
  
  // Generate random elvish name
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const middle = middles[Math.floor(Math.random() * middles.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const name = prefix + middle + suffix;
  
  // Generate meaning based on keywords
  let meaning = 'Guardian of';
  if (keywords.includes('brave') || keywords.includes('warrior')) {
    meaning = 'Brave warrior of';
  } else if (keywords.includes('wise') || keywords.includes('ancient')) {
    meaning = 'Ancient wisdom keeper of';
  } else if (keywords.includes('beautiful') || keywords.includes('elegant')) {
    meaning = 'Elegant spirit of';
  } else if (keywords.includes('dark') || keywords.includes('shadow')) {
    meaning = 'Shadow walker of';
  } else if (keywords.includes('forest') || keywords.includes('nature')) {
    meaning = 'Forest guardian of';
  } else if (keywords.includes('magic') || keywords.includes('mystical')) {
    meaning = 'Mystical mage of';
  }
  
  // Add location/element
  if (keywords.includes('forest')) {
    meaning += ' the ancient woods';
  } else if (keywords.includes('moon') || keywords.includes('night')) {
    meaning += ' the moonlight';
  } else if (keywords.includes('star')) {
    meaning += ' the starlit sky';
  } else if (keywords.includes('water') || keywords.includes('sea')) {
    meaning += ' the sacred waters';
  } else if (keywords.includes('fire')) {
    meaning += ' eternal flames';
  } else {
    meaning += ' the mystical realm';
  }
  
  // Generate background
  const backgrounds = [
    `Born under a celestial alignment, destined for greatness in the realm of elves`,
    `Descended from an ancient lineage of noble elves who protected their lands for millennia`,
    `Chosen by the ancient spirits to carry on a sacred mission through the ages`,
    `A legendary figure whose deeds are sung about in elvish taverns across the realm`,
    `Blessed by the forest itself with extraordinary abilities and a profound connection to nature`,
    `A wanderer who seeks to restore balance between the mortal and magical worlds`,
    `Keeper of ancient secrets passed down through countless generations of elves`,
    `A champion who emerged during the darkest hour to lead their people to victory`
  ];
  
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  return {
    name: name,
    meaning: meaning,
    background: background
  };
}

function displayAIResult(result) {
  aiNameDisplay.textContent = result.name;
  aiMeaningDisplay.textContent = result.meaning;
  aiBackgroundDisplay.textContent = result.background;
  
  aiLoading.style.display = 'none';
  aiResult.style.display = 'block';
  
  // Scroll to result
  aiResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Close result
closeAiResult.addEventListener('click', function() {
  aiResult.style.display = 'none';
});

// Copy AI generated name
aiCopyBtn.addEventListener('click', function() {
  const name = aiNameDisplay.textContent;
  copyToClipboard(name);
});

// Enter key to generate
aiInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    aiGenerateBtn.click();
  }
});

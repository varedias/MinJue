/**
 * 智谱AI API 测试脚本
 * 用于验证API Key和连接是否正常
 */

const API_KEY = 'e21edf29f04c47f084b39cd3fc6e1856.G75sS0L7KYfgbHfR';
const API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';

async function testAI() {
  console.log('🚀 开始测试智谱AI连接...\n');

  try {
    console.log('📡 发送测试请求...');
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'glm-4-flash',
        messages: [
          {
            role: 'system',
            content: '你是一个工业设备选型专家'
          },
          {
            role: 'user',
            content: '简单介绍一下工业相机的用途'
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    console.log(`📊 响应状态: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API请求失败:');
      console.error(errorText);
      return;
    }

    const data = await response.json();
    
    console.log('\n✅ API连接成功!\n');
    console.log('📝 AI回复:');
    console.log('─'.repeat(50));
    console.log(data.choices[0].message.content);
    console.log('─'.repeat(50));
    
    console.log('\n📈 使用统计:');
    console.log(`- Token使用: ${data.usage.total_tokens}`);
    console.log(`- 模型: ${data.model}`);
    console.log(`- 请求ID: ${data.id}`);

  } catch (error) {
    console.error('❌ 测试失败:');
    console.error(error.message);
  }
}

// 运行测试
testAI();

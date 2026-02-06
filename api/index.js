export const config = { runtime: 'edge' };

export default async function (request) {
  const url = new URL(request.url);
  
  // 🎯 强制锁定：无论请求什么，都精准导向 Google 的最新模型接口
  url.protocol = "https:";
  url.hostname = 'generativelanguage.googleapis.com';
  url.pathname = '/v1beta/models/gemini-2.5-flash:generateContent';
  
  // 发射请求！
  return fetch(url, request);
}

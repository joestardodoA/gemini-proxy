export const config = {
  runtime: 'edge', // 告诉 Vercel 使用边缘节点（速度最快）
};

export default async function (request) {
  const url = new URL(request.url);
  
  // 核心操作：把请求目的地偷梁换柱改成 Google
  url.hostname = 'generativelanguage.googleapis.com';

  // 发送请求，Vercel 会自动处理美国 IP 问题
  return fetch(url, request);
}

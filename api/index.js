export const config = {
  runtime: 'edge', // 使用边缘节点，速度最快
};

export default async function (request) {
  // 1. 获取原始请求的 URL
  const url = new URL(request.url);

  // 2. 把目标主机名改成 Google
  url.hostname = 'generativelanguage.googleapis.com';

  // 3. 关键修正：把路径开头的 "/api" 去掉
  // 因为 Vercel 的入口是 /api，但 Google 不需要这个前缀
  // 例如：你的请求是 .../api/v1beta/... -> Google 只要 /v1beta/...
  url.pathname = url.pathname.replace(/^\/api/, '');

  // 4. 发送请求给 Google，并把 Google 的回复传回给你
  return fetch(url, request);
}

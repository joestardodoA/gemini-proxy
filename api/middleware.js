export default async function (request) {
  const url = new URL(request.url);

  // 🎯 直接把所有请求的目标改成 Google
  url.hostname = 'generativelanguage.googleapis.com';

  // 🚀 转发！
  return fetch(url, request);
}

self.addEventListener('install', e => {
  console.log('🧶 Service Worker installed');
});

self.addEventListener('fetch', e => {
  // 캐시 기능 필요 없으면 생략 가능
});

self.addEventListener('activate', e => {
  console.log('🧶 Service Worker active');
});
var cacheName = 'ayam-offline-page';
var filesToCache = [
  '/offline.html'
];
self.addEventListener('install', function(e) {
  console.log('/js/app/install.js');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('/offline.html');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
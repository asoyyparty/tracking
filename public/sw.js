self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Network-first strategy to ensure Livewire dynamic data remains realtime
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

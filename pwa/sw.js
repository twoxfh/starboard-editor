const CACHE_NAME = 'habit-tracker-v1';
const ASSETS = ['./', './hm.html', './manifest.json'];

// Install - cache assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching assets');
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then((names) => {
            return Promise.all(names.map((name) => {
                if (name !== CACHE_NAME) return caches.delete(name);
            }));
        }).then(() => self.clients.claim())
    );
});

// Fetch - CACHE FIRST (offline capable)
self.addEventListener('fetch', (event) => {
    const request = event.request;
    
    if (request.method !== 'GET') return;
    
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) {
                console.log('[SW] Cached:', request.url);
                return cached;
            }
            return fetch(request).then((response) => {
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                }
                return response;
            });
        })
    );
});

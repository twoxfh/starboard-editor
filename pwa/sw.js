const CACHE_NAME = 'habit-tracker-v2';
const ASSETS_TO_CACHE = [
    './',
    './hm.html',
    './manifest.json'
];

// Install - cache all assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching assets');
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => {
            console.log('[SW] Installation complete');
            return self.skipWaiting();
        })
    );
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', name);
                        return caches.delete(name);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Activation complete');
            return self.clients.claim();
        })
    );
});

// Fetch - CACHE FIRST strategy (critical for offline!)
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http requests
    if (!url.protocol.startsWith('http')) {
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log('[SW] Serving from cache:', request.url);
                return cachedResponse;
            }
            
            // Not in cache - fetch from network
            console.log('[SW] Fetching from network:', request.url);
            return fetch(request).then((networkResponse) => {
                // Cache the response for next time
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseClone);
                    });
                }
                return networkResponse;
            });
        }).catch((error) => {
            console.log('[SW] Error fetching:', request.url, error);
            // Return offline fallback if available
            if (request.destination === 'document') {
                return caches.match('./hm.html');
            }
            return new Response('Offline - No connection', {
                status: 503,
                headers: { 'Content-Type': 'text/plain' }
            });
        })
    );
});

// Handle background sync (optional)
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);
});

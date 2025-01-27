const CACHE_NAME = "version-1.0";
const urlsToCache = ['index.html', 'offline.html'];

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache and caching files!');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event to handle requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(async (cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          // Fetch from network if not cached
          const networkResponse = await fetch(event.request);
          // Cache the new network response
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        } catch (error) {
          // If network fails, show offline page
          return await caches.match('offline.html');
        }
      })
  );
});

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              // Delete outdated caches
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});

// Uygulamayı güncellediğinde bu numarayı bir artır (v2, v3...)
const VERSION = "v3";
const CACHE = "ev-antrenman-" + VERSION;
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "fonts/Barlow-400-latin-ext.woff2",
  "fonts/Barlow-400-latin.woff2",
  "fonts/Barlow-500-latin-ext.woff2",
  "fonts/Barlow-500-latin.woff2",
  "fonts/Barlow-600-latin-ext.woff2",
  "fonts/Barlow-600-latin.woff2",
  "fonts/BarlowCondensed-500-latin-ext.woff2",
  "fonts/BarlowCondensed-500-latin.woff2",
  "fonts/BarlowCondensed-600-latin-ext.woff2",
  "fonts/BarlowCondensed-600-latin.woff2",
  "fonts/BarlowCondensed-700-latin-ext.woff2",
  "fonts/BarlowCondensed-700-latin.woff2",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("ev-antrenman-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Önce önbellek (çevrimdışı çalışır), arka planda güncelle
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(e.request, { ignoreSearch: true });
      const network = fetch(e.request).then(res => {
        if (res && res.ok && new URL(e.request.url).origin === location.origin) cache.put(e.request, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});

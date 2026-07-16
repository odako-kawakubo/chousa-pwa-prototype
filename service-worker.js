const CACHE_NAME = "chousa-system-v0.13.4";
const APP_FILES = [
  "./index.html",
  "./app.html",
  "./camera.html",
  "./manifest.json",
  "./version.json",
  "./service-worker.js"
];
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).catch(() => undefined));
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const isHtml = event.request.mode === "navigate" || /\.(?:html?)$/i.test(url.pathname);
  const noStore = isHtml || url.pathname.endsWith("version.json") || url.pathname.endsWith("service-worker.js");
  event.respondWith(
    fetch(event.request, noStore ? { cache: "no-store" } : undefined)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

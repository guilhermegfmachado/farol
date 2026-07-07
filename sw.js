// Farol service worker — makes the pocket manual installable and usable offline.
// Strategy: precache the app shell (offline fallback), then cache every page and
// static asset the teacher actually visits, so a card opened once is available
// later with no connection. Bump CACHE_VERSION to invalidate old caches on deploy.
const CACHE_VERSION = 'farol-20260707085222';
const BASE = '/farol/';
const OFFLINE_URL = BASE + 'offline.html';
const PRECACHE = [BASE, OFFLINE_URL, BASE + 'manifest.webmanifest', BASE + 'favicon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;

  // Navigations (pages): network-first so content stays fresh, fall back to the
  // cached page, then to a friendly offline page.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Static assets (fonts, CSS, JS, images): cache-first, they are content-hashed.
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && (res.type === 'basic' || res.type === 'default')) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          }
          return res;
        }).catch(() => hit)
    )
  );
});

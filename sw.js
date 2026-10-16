/* Plan Formy — service worker */
const V = "planformy-1.7.0";
const IMG = "planformy-img-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png", "./apple-touch-icon.png", "./favicon-32.png", "./clips/sidelunge.webp", "./clips/straddle.webp", "./clips/9090.webp", "./clips/cossack.webp", "./clips/wipers.webp", "./clips/cars.webp", "./clips/koci.webp", "./clips/tilt.webp", "./clips/mostek.webp", "./clips/klek.webp", "./clips/stojacy.webp"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("planformy-") && k !== V && k !== IMG).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("message", e => { if (e.data === "skip") self.skipWaiting(); });

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin === location.origin) {
    if (r.mode === "navigate") {
      e.respondWith(caches.match("./index.html").then(m => m || fetch(r)));
      return;
    }
    e.respondWith(caches.match(r, { ignoreSearch: true }).then(m => m || fetch(r)));
    return;
  }
  /* klatki ćwiczeń (free-exercise-db) — zapamiętywane, żeby działały bez zasięgu */
  if (u.hostname === "raw.githubusercontent.com" && /\.(jpe?g|png|webp|gif)$/i.test(u.pathname)) {
    e.respondWith(caches.open(IMG).then(c => c.match(r).then(m => {
      const net = fetch(r).then(res => { if (res && (res.ok || res.type === "opaque")) c.put(r, res.clone()); return res; }).catch(() => m);
      return m || net;
    })));
  }
});

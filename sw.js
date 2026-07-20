// Service worker do Compacta PDF — cache para funcionamento offline.
// Página principal: rede primeiro (atualizações imediatas), cache como reserva offline.
// Demais arquivos: cache primeiro com atualização em segundo plano.
const CACHE = 'compacta-pdf-v21';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(chaves =>
      Promise.all(chaves.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;

  if (req.mode === 'navigate') {
    // documento principal: rede primeiro, cache só quando offline
    event.respondWith(
      caches.open(CACHE).then(async cache => {
        try {
          const resp = await fetch(req);
          if (resp && resp.ok) cache.put(req, resp.clone());
          return resp;
        } catch (e) {
          const emCache = await cache.match(req);
          if (emCache) return emCache;
          throw e;
        }
      })
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE).then(async cache => {
      const emCache = await cache.match(req);
      const daRede = fetch(req).then(resp => {
        if (resp && resp.ok) cache.put(req, resp.clone());
        return resp;
      }).catch(() => emCache);
      return emCache || daRede;
    })
  );
});

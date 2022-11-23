var staticCacheName = 'site-static';
const dynamicCacheName = 'site-dynamic-v1';

var assets = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/images/icons/icon-96x96.png',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css',  
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',  
  'https://code.jquery.com/jquery-1.9.1.min.js',  
  'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js', 
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', 
  'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js',  
  'https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js',  
  'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',
  'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/typeit/4.3.0/typeit.min.js',
  '/manifest.json',
  '/app.js',
  '/dist/build.js',
  '/sw.js'
];

// install event
self.addEventListener('install', evt => {
  // console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(
        keys.filter(key => key !== staticCacheName && key !== dynamicCacheName)
            .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(() => {
      if(evt.request.url.indexOf('.html') > -1){
        return caches.match('/pages/fallback.html');
      } 
    })
  );
});
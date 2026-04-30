var CACHE_NAME = '260330';
var urlsToCache = [
'/min.css',
'/min.js',
// fonts
'/a/fonts/roboto/roboto.woff2',
'/a/fonts/opensans/opensans.woff2',
'/a/fonts/icons.woff2',
'/a/fonts/matrix.woff2',
// favicon
'/img/fav_z3w/192.png',
'/img/fav_z3w/512.png',
// images
];
self.addEventListener('install', function(event) {
event.waitUntil(
caches.open(CACHE_NAME).then(function(cache) {
return cache.addAll(urlsToCache);
})
);
});

const deleteCache = async (key) => {
await caches.delete(key);
};
const deleteOldCaches = async () => {
const cacheKeepList = [CACHE_NAME];
const keyList = await caches.keys();
const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
await Promise.all(cachesToDelete.map(deleteCache));
};
self.addEventListener("activate", (event) => {
event.waitUntil(deleteOldCaches());
});


var siteurl = self.location.hostname;
// function addToCache(cacheName, request, response) {
// caches.open(cacheName)
// .then( cache => cache.put(request, response) );
// }

self.addEventListener('fetch', function(event) {
if (event.request.url.indexOf(siteurl) !== -1) {
event.respondWith(
caches.match(event.request).then(function(response) {
if (response) {
return response;
}
return fetch(event.request).then(function(response) {
// @todo: addToCache default cats images + make 2 caches: for assets and images
// if (event.request.url.indexOf(siteurl+'/images/default/') !== -1) {
// console.log(event.request.url);
// addToCache('img', event.request, response.clone());
// }
return response;
}).catch(function(error) {
console.error('Fetching failed: ', error);
throw error;
});
})
);
}
});

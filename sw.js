var CACHE_NAME = 'v1';
var urlsToCache = [
'/manifest.json',
// '/min.css',
'/_js/min.js',
// additional assets
// fonts
'/_fonts/roboto/roboto.woff2',
'/_fonts/icons.woff2',
// favicon
'/favicon.ico',
'/favicon.png',
'/_img/favicon/favicon32.png',
'/_img/favicon/favicon48.png',
'/_img/favicon/favicon62.png',
'/_img/favicon/favicon72.png',
'/_img/favicon/favicon96.png',
'/_img/favicon/favicon144.png',
'/_img/favicon/favicon152.png',
'/_img/favicon/favicon167.png',
'/_img/favicon/favicon180.png',
'/_img/favicon/favicon192.png',
'/_img/favicon/favicon512.png',
// images
// '/_img/textures/square.png',
// '/_img/logo.svg'
];
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
		);
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

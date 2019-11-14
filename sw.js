importScripts("precache-manifest.6adde45a6e70c6a6b2f4fe3dc6e9166c.js", "workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
workbox.loadModule('workbox-strategies');

const cacheVersion = '20191114v1'
const staticCacheName = 'static' + cacheVersion
const staticAssetsCacheName = '/' + cacheVersion
const vendorCacheName = 'verdor' + cacheVersion
const contentCacheName = 'content' + cacheVersion
const maxEntries = 100

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

if (workbox) {
    console.log(`Workbox is loaded`);
    workbox.precaching.precacheAndRoute(self.__precacheManifest);
}
else {
    console.log(`Workbox didn't load`);
}

// workbox.routing.registerRoute(
//     new RegExp('\\.css$'),
//     workbox.strategies.cacheFirst()
// );

workbox.precaching.precacheAndRoute([]);

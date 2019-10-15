importScripts("precache-manifest.05ab0825515bf99831312a6ef4fe7720.js", "workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});
workbox.loadModule('workbox-strategies');

const cacheVersion = '20191009v1'
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7727f29b54d15138a1604706f88e3c1f",
".git/config": "8b2577c6e1f1d169b5842d128e491379",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "991d792898db5f39e90b0475ed416e91",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "580ecc18a3142774132ff1404e7b6de0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a8c1627eb3b791478324185efbfc72c8",
".git/logs/refs/heads/master": "a8c1627eb3b791478324185efbfc72c8",
".git/logs/refs/remotes/origin/main": "d48705fe6d34d7b0123d82b52fd6334d",
".git/logs/refs/remotes/origin/master": "c778883e82eb6163f7f8b0936702f67b",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/2ebb25a653ce1b997d7c0a504eaa24a223662d": "daf048c7faabadfc8afd54e7443bb3be",
".git/objects/0e/559f6cb706cb87edcacf977a94451d02e6ed03": "c3933a8b6b66ed312c73201cb3e46137",
".git/objects/12/d7e5b721c29f4977e0331b0659ed0dd72ea04d": "08be7669fe623aea2433876c9c4c113d",
".git/objects/18/80d6eade9708dc6dadacadb075bbfbeb2ba4f9": "221879dafa0ffb553042696409a1ee04",
".git/objects/1d/8cf7d888d03a3052ec6d0f97eb12a2a12350be": "58357877c8eae788550f81960a8767a9",
".git/objects/1f/718e6ebf536367019b3ffb688400879f29999b": "6e6e5381e5d1dbf2de997e4e8c40064b",
".git/objects/28/37efaf1f531b46410b4dfc092b0919fd8cd7ad": "edc77d3c202ea69a7e15a8cc46ec8fd7",
".git/objects/2a/46d3d8481f46c428754fd56d6915e2db59ec9d": "8ce238d3e95fe62e0bf341e8f86b5e2b",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/46/2f176be8ab8b52b559c106bf8a64216bfa6bc3": "d40ec2fffdf7ba225f2e79ac49c02976",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/52/a5ee3daeea2c2ea5b1cd9804b40c2e7754d116": "032225e0ba2391480ae720e3a86072a8",
".git/objects/55/9fc0dfe8e1545628efd94b5643d640c6f1b1e7": "049ccd7f3a2391644e4e7451143959c1",
".git/objects/59/7bce07b6009dd77c5d834a6e265b6ae5dc8362": "eef1a2eac4361371ac9cf615d674ece1",
".git/objects/59/f20213ae856e74340ed5a7bf9280ca19f6410c": "a779098619c253524ba21ebaeccc13ad",
".git/objects/5a/b44a7da199063adbe22d61050bca35922e041c": "9762b645893c5a09135e2c401cf428c9",
".git/objects/5b/8a81c0bde8fa112e4c001d08ed3a26e436f921": "5c8e9ee83f347d359df62d86243116cf",
".git/objects/5c/b836bb85dfb509821bd885c2aaf55c9a2be3fe": "d4b36b5c097892b3be313dac16315900",
".git/objects/5c/c517c13bb3ddb10279a25496fa0f2b156523d4": "f13e9b527605da23be1ae0383c1b8845",
".git/objects/60/c60cbcb160b743eb3a5cc01fa656df799c5f66": "c70bed09989c37542d55bd6179d8019f",
".git/objects/63/debb7145330721a3b4c779bccf0e92abfbf817": "5633106df0b563f3dfdd3b1da8783f51",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/74/1001c653690938f6b11e8436df25663c0522c5": "1814fa7a48e0366cd3d322d7abf182ee",
".git/objects/76/78bed8fd642ef2f36a3fbb507f6d286e3465fe": "76eec8cb5eda472d2628107380a7fd8f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/cc88d086986d928ec4f20b47fb2962800d3039": "9486761eb2ebeda21991548b6e2c4566",
".git/objects/8f/24a9e23454d4b54e796446459f3d1816fcb4e5": "8621e8fa6ab4be24ab2b9b5872312c44",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/93/fdc8e47925bf5fc73e72d94df25d7af9717422": "7d182db08c0366d367165f06a0857449",
".git/objects/96/d1f00fbca75b4aee42c8dc512db63d21abb9c3": "c54da5178ad31942bf0a3b30b9217478",
".git/objects/99/1cf3feb4a05c31d12ef87df07c124051548e38": "b972fe58477b4f5541cd675b7208487c",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/145e0966f75513462c2e0c70e8d3922f90f654": "7d2beeb06dcb613919fac69c5ac24a8c",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b4/29dc18ce5f1ca885feaf6bba2f42424b23d47b": "7eca59dd3722701e693507653b7d64b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/5c2036e2064a652cb051d747e1bfa542bf9f76": "d56e95363044e54a4e2b777ca50c0a46",
".git/objects/c1/1e400ecbc75e4ceaed1e7d337e7aa6132833f7": "f82eb6ef0ec9408b078af692657128e1",
".git/objects/c1/616ba6fa942dcf545bfc055956cff281812317": "a86a9228b51c7f68a884362a2fcfbc5b",
".git/objects/c5/276819b27feee382464e271e20bd91955d39f4": "309cffee4111996acecaad46955db024",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/27f60516d6d212944f8a89b6901e0d1bebd098": "c695ef032010e360f20f03cc7d71e4df",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/ffe83ba11a99b1b0bfdb08f9e418aa37ec5495": "4635ce1acea128023e9fbef54a6e2fb8",
".git/objects/f7/7ba3e75f5158284cc368702482ed78545441cd": "37f37536e55bec56f3f4fe8a00bdc993",
".git/objects/fb/7dd82718a482d226f3df79ec5f1b985d0b3a96": "2141056294df30182bd967378ebe9a73",
".git/objects/fe/5a3309332de485d29c9d77c32b93c216d4107a": "d2eaa8d42d0501eabdb35202598872f7",
".git/refs/heads/master": "a34b974b876d39efe23ff48cb95718ce",
".git/refs/remotes/origin/main": "5eb960c16d51c555a74aeaaf8bcbe034",
".git/refs/remotes/origin/master": "a34b974b876d39efe23ff48cb95718ce",
"android-chrome-192x192.png": "3eb71359e8c64506d33fe3dde5653add",
"android-chrome-512x512.png": "79b1dd545a6166a808b573f017876026",
"apple-touch-icon.png": "69b0e93d52b99e4ceeb6a21fd377838e",
"assets/AssetManifest.json": "0e8233eb693c7328f728f451b73c8c73",
"assets/FontManifest.json": "0af83bc750c89e08e927ecb247f2d30f",
"assets/fonts/Domine-VariableFont_wght.ttf": "c8e8b1526bc5a6ba19cbcfeb0934cada",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/image/bkg.jpg": "89520f92902ea28565c5aee9498fc273",
"assets/image/logos.jpg": "8d0868324745273966e74854b9b4f22a",
"assets/image/picp.png": "c2e55e39ff63b22f09f2917d06d233f3",
"assets/image/projs.png": "228770b5acc99986f2b8a2762effef3f",
"assets/image/Screenshot%25202022-02-26%2520081209.png": "8f91b251c097710ba2f8822ff5b6544a",
"assets/loading.gif": "7fc09f7a20685bfbdccd4d80c9acab59",
"assets/NOTICES": "9c5447df85e13ce8dc319be700d4e2f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon-16x16.png": "cd9543b52e0392ad97d7b02ef8a5a4d6",
"favicon-32x32.png": "1e1cec61e8c3250eeba73ab551a2c39d",
"favicon.ico": "da0ffe5920057e8b0a5fb5d0f05cbe4d",
"favicon.png": "f16843aa02a0a0121c8dee719d510100",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1c3f8d0e177c172ad5c5024f41aaac6b",
"/": "1c3f8d0e177c172ad5c5024f41aaac6b",
"main.dart.js": "312aaa9111de0d1596125642f284edb6",
"manifest.json": "1ab67272e548d03cacad77655841ef20",
"site.webmanifest": "39e61c540a590e9f9ccacb9ad4cf8553",
"version.json": "bd7311c147d5a64f924042472ce61cec"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

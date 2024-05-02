'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "79a8cd4add180a38853e9732589f8ad6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "bd2c398c998af0aef150074aaac48cc4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0da13c7837fdfc6a57800f6f308c4df0",
".git/logs/refs/heads/main": "892ba199d68e587e1d2fea69966f4bb6",
".git/logs/refs/remotes/origin/main": "8d15bce4550b7b784d8535b108f4ca42",
".git/objects/03/182daebe0d21827a3291450d0b9172133c6363": "9d2bd72a56539b13cc6cfad3f107e01e",
".git/objects/03/59bd63420c3249bf33db88b23f53c620b85b4e": "53e2af81bd0593e26d4d07600ba7960c",
".git/objects/05/6eb34b98c09892ac36177afd485427f17dc0d8": "d4004f10c2441a207e1d83cf50249e66",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/ff288988034bbe075fe9d61f54671678d2aacb": "25d3c9f3a23e3effbdd8b4de0b24b263",
".git/objects/0a/e752f1e52b8722b92a69330d505fc811823c40": "41ca32caaf838f146b4acebf7378455b",
".git/objects/0b/ae1af3c40e8fd096aa49c00a9041553cb5aeff": "eb4d2e66ddb041147ff542e6a50bbebf",
".git/objects/0e/d46b00e254b54590f2d7907bd27b28e3f95bb3": "9b1467de547d60416c9875a5937b4a0e",
".git/objects/0f/dd6541697f56b406f37546f31567f6072690b6": "2de567a6814191a92aa3f0e0d572e97e",
".git/objects/12/18eed8c17fae1b38929cf46e19055e4366a74d": "fea219625570e519cda1079218dcb65c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/dcfae28d163ab66d7e74fabd75f9ecc74be7b1": "55696df50e9dc3c7dae338d5a23880c4",
".git/objects/1d/09d46b9eece99103dd2e5d364c4d5a0bb92af5": "87a4f775af4df3917e8767df5421d102",
".git/objects/1e/754f76dd1ac75796b5c2cdf2e924cb8f902449": "745eeb4687d04af60f2d468bce129df2",
".git/objects/1f/ca215facf530ddaeee34749430b45fce3ea283": "6783459ed6cfe0fb4363be242a4a70c0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/0e34567763993bc871b111bccb9faaed30986c": "466d1ae00cedd5626d14a265b09a41e9",
".git/objects/23/eded8095b8f0415ee38ced4d25d591db6617d7": "82e1d2a8b638af57c82cbe37f93f24d2",
".git/objects/2d/588cdca8b11cfcedd9bf9993b42336f567fd05": "86db584107e8cee0509df058558ae0ed",
".git/objects/2e/053ca5dda79e7e0663bfb6a70fec6d31d7fc80": "d7ef35de94df7a906d3ba3e18785f718",
".git/objects/2e/e5bba25a530954f7f5d4337d748178ae40772b": "11e027d8e9f1207daeb719d04ac60e5b",
".git/objects/31/652155795099b3201035ae622df7604a864d93": "78a1175c82326475346334753db0808f",
".git/objects/35/5cf3e0b6d8e7a6be7a317f73b72210bdc21a57": "436c05a626997e0a9ecacde53f1c1243",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/41/8c13f81cd1b200e1a1a31d0b6bdcb5be306b33": "c2fc85517c79e6f8c3a08a10a9e88bb5",
".git/objects/49/a3eb56bf4089e9cdbd3f533a8b90c37ae37ca1": "9e3712e2ac4ca40476b1075a2c3c790d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/cf7cfcc3c8c6857c56798ae30ec4a43cd8d414": "44190f38ce37ddb0fe6840242801ecdb",
".git/objects/50/645c3c244f33cff3023c210231b79c3294d5a4": "756074d5d8f96bdf920dba7339025347",
".git/objects/58/7c43af715f9b66fb30d8761ad239099f777661": "b4300eb2e5ec19ad26a9a22a9e4c63ad",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/6b/01da06b8149ff7c666e717f2da1d82387a89a7": "e8daf30351a776a8fd9ebefbde9e9fa7",
".git/objects/6e/b243a6024191f63dd955fd9bffdc870f99cd09": "ddaa48945dabbaa60cd1972d003d662b",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/0b533ee8f3cdf727a9dffda80b3da346b996e3": "d3de6627ef63bac1405fe720388dc04e",
".git/objects/70/8dbc8c262ea81ce7ce3bc1bbf4110fa89542fb": "a82507d543b77103aad168d2af4ce51c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/22392a23ede0a4a16d3d7820701a91660ea6f0": "bed0d2977cd1f42b6779a8481ceee9ad",
".git/objects/79/9f040b471d146a6648f50b662b025606c19c61": "4100418d04bd6cb88fde85edbf47d5fe",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/7c/e1c4f7c0156ae3daa58f4bf71057350231b84e": "4ee21679721d02de124c51faae55a7c5",
".git/objects/86/38b427826011f36bc31f1d609b4acf072d57b5": "b9b2413e1593bf89f5c21c7bb324de16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9db498aec34a47da15f14b3b433d76b628ae25": "5d677538b81e26a79dc5b2db8eb1fdba",
".git/objects/8e/d744be3ae95e158c840b8741cdc37d1855a958": "2c51799c0d6cda990a26d042161f6be9",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/afc560eb2bbcb9c42ddb973a39cface9a06a39": "5747109953b5aac1e1f9c43713dce81e",
".git/objects/a0/3e7aa4520ebdc7f97a18caeb9b7b4fd7223374": "6394fe267b6340b73cfa5d61f2d1b1a6",
".git/objects/ab/0a08790fbe9597dd4906ddbf992157d54e8f37": "bcadba2c1101adc6cbbdef55e35fa821",
".git/objects/ac/ff1772a21da09f1832f3f98ac45fd9a28227dc": "09e4b92c2f06f869dd10d2ada2ce6a6f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/38c5c7eb72a329fb5d39b7bb96ac41cc71fc95": "6aef01dd6498724f073e6a429e7c0813",
".git/objects/b3/54d1d1d4f5997357c329c95b09a773bb2a1def": "01d2d010df0cce76d419fe2333335da2",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9f57e1c6af7d74c7574b66f21a5776ee046499": "7ab0a724375fc0ca821c8130516a7c86",
".git/objects/b8/b86dfbbd5b11049459bfc42ed4a8fbd8c013b8": "dba1291d24d7d50a24494b7be4586444",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/cbbe8525e2230758f28413b18f81824adf1658": "fcee7f9beb4211f7a1575169c4c49db8",
".git/objects/bb/f95d03d65a1ac0c7992a03f1060847ef2ae51f": "7e06fc8fe739caf44407725d663dc0b1",
".git/objects/c1/9fc188d91010cccbcd1aef00fa634b5da8fc52": "8f0bb4763f88391131fc8e979755b555",
".git/objects/c4/4bd463c3a814520a22e852b1698479590b2c56": "a3daa45794ffbda71ee3933e80ec54fc",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3dab03cf84d79241ac523d5d9614bd4b294ce9": "34ae9f7c8db9032d26346f3348378ca7",
".git/objects/e3/74d3511497773b8c16f390b6aac72d4d3ab367": "88a5e3bf9c2b6b7cb329ba080d37f1ce",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/92e24b488aea949d387922e21610ae45deb214": "f0aa02309539284bbc39cbbbd9054b59",
".git/objects/ec/eaf6845037b1268897ce20e7e9acf87cf6e5b0": "0a35184b2ff8f1b1fae7253c560d84be",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/7b5fccc9e73e71d2dd66c95ee1cb26d2b9812f": "bd1a74b8e131c3cd84fa91a866229d7e",
".git/objects/f5/63caf3e7e571bbfdc89aadd1226b7eed295c5e": "0ed0707ec9aa30e914ff8f228af678b3",
".git/refs/heads/main": "762bc2af0d9eb2c670c697819036bc6f",
".git/refs/remotes/origin/main": "762bc2af0d9eb2c670c697819036bc6f",
"assets/AssetManifest.bin": "18311cabc89faf094edf928e29910380",
"assets/AssetManifest.bin.json": "4e669240b5a47b20d01f9d9ce9ee414a",
"assets/AssetManifest.json": "1d6c9f9ac093d892ab8fa2c309850af8",
"assets/assets/img/album-folder.webp": "9fde67fb09fbf77b130a6ebd592dbc6b",
"assets/assets/img/AVT.png": "f90372ee7a21fcf4154ac1f7e463ba75",
"assets/assets/img/background-home.jpg": "02fe5f49b198e2b6a5136f152cedebd9",
"assets/assets/img/background.png": "c77f7972c2c604c2018efb63492f6982",
"assets/assets/img/banner-contact.webp": "791d9206009fcfe0fcc007bec784df58",
"assets/assets/img/banner-edu.webp": "d7b5867153b5724b323b5ddc60e6bd5d",
"assets/assets/img/bg-card.webp": "43371a047a9d8f0a3842112f13d98b65",
"assets/assets/img/burnout.webp": "0cb8c1fdedde09821023e9d88cdc2bee",
"assets/assets/img/bus.webp": "b5eac0844f3f04d2f4c60aad9a6d1a7a",
"assets/assets/img/calendar.webp": "7a6a16d1aa1ea8e2c00787316939a73e",
"assets/assets/img/change-class.webp": "1ae8c6dd56bd9d048fec870d62e6ca04",
"assets/assets/img/cost.webp": "5ad09e3eec320870799850bd30cc427e",
"assets/assets/img/event.webp": "247d204dcd87b883919c33e2dffbf0eb",
"assets/assets/img/feedback.webp": "50ad03b4f29b4f434b6d236157512ac8",
"assets/assets/img/heart.webp": "1cc16f25df8adac98404ce8de951220c",
"assets/assets/img/icgoogle.png": "0312184edb920672fc5afce85140a626",
"assets/assets/img/icongoogle.png": "ef909544443b55a6212def690eccfff9",
"assets/assets/img/logo.png": "5c59645f67265e87a5024be3d65c8bd9",
"assets/assets/img/logoFB.png": "a085f2d4b4da4e5973814ac57ca31d41",
"assets/assets/img/logoGG.png": "9e3c550aec59af1cc9d4b00266bd193d",
"assets/assets/img/logout.png": "3fd60916531ed5e56e8c5ea3d479aafb",
"assets/assets/img/menu.webp": "b5129bedc20d8d913aabc683bf21ce64",
"assets/assets/img/pickup.webp": "23db83029f174b138dcc8bfd241e828e",
"assets/assets/img/pngtree.png": "63af5e53cb6a56c77baa3c2e4dfb4979",
"assets/assets/img/reaction_care.png": "52469990166ffb8836ca83988be484f5",
"assets/assets/img/reaction_haha.png": "4f5cefb0c267b16ebc325fd996854a9e",
"assets/assets/img/reaction_like.png": "06e6a98e8dffff8f5fdfd53f3f77d400",
"assets/assets/img/reaction_love.png": "c655f73248b23d406901294ae849cb3c",
"assets/assets/img/reaction_sad.png": "c1e9581a8742c4196464e37501385c4a",
"assets/assets/img/reaction_wow.png": "c9b5a1e8d1d5c6fb6d5f61a2006ea3f6",
"assets/assets/img/report-study.webp": "231b0f40e570dc761e6a6fb18db1f98f",
"assets/assets/img/review.webp": "62028bf7f938c475513438437c341be0",
"assets/assets/img/schedule.webp": "607819de9c2fcc1a8e78e60c5f1c5254",
"assets/assets/img/session01.png": "858a76317ab36b0af37b1639386b4fef",
"assets/assets/img/session02.png": "68677e3cc2eeee3f1995f10fc7307cc0",
"assets/assets/img/session03.png": "22608bded915b1f82666bd786f0d0993",
"assets/assets/img/telephone.webp": "1b9b3f4ad5a33aff3656af3059754e31",
"assets/assets/img/user_avatar.jpg": "be0e35c86f36ab0f38ce2cf99d2f8259",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "227b32d4591a4b63b8162fb6b477a3bc",
"assets/NOTICES": "a25a5d13c7a8ab805eab7b729e753437",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c63d3cd4b810ad045fdf5e950cff9270",
"/": "c63d3cd4b810ad045fdf5e950cff9270",
"main.dart.js": "604279d86573af384a215cac77fd4f76",
"manifest.json": "4971aed4966c17d5c49b593678b9e2d4",
"version.json": "9b5c560086a95c6a4e8ac6b868d6c1aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

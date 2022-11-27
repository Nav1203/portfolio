'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d2126fde024868c62aafb2076ae370c0",
".git/config": "8b2577c6e1f1d169b5842d128e491379",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6381674565a176686de009ea202cd30e",
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
".git/index": "5539cf5e6d4b02f3e8f40db20e80bcf8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8eacf793367ef4dbe1ce6143301195ac",
".git/logs/refs/heads/master": "8eacf793367ef4dbe1ce6143301195ac",
".git/logs/refs/remotes/origin/main": "cbdb90d1adfd1ca95540d0a977ab0a43",
".git/logs/refs/remotes/origin/master": "d1f3a49fcd479e811ae5d8f8c5cbf7cd",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/2ebb25a653ce1b997d7c0a504eaa24a223662d": "daf048c7faabadfc8afd54e7443bb3be",
".git/objects/06/d87bc107340096928c25ffd22a2089241359c9": "7256591570369d9e725b9c3b48f4a5fb",
".git/objects/08/65b20a2e43c925a9a02abc351a8b54c41b15e6": "ba0e8a9683a0c6c696349ad0c2c67685",
".git/objects/08/fd4bf7bc2626ee5b1bc4d1bdacbaf6c9b6eac6": "49bd5ad59fc0088e52219be2e0c43d2c",
".git/objects/0d/048a12d23252fd9c64d8a68ceded61215172bb": "6e029d38a5eac29252ad23ac7da7da88",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/6b4ef7deed324abafcf104322cfe098f79e9e6": "c67dff0c864d0c7d124933f1c7eacc3a",
".git/objects/0e/559f6cb706cb87edcacf977a94451d02e6ed03": "c3933a8b6b66ed312c73201cb3e46137",
".git/objects/0e/bc6d501fa2bce3b33abff59e52191af3f386a1": "f52578e21814e6dbc2ff5da76916bc6a",
".git/objects/0f/e529b5ffc8334a051da1971990f32135deebc1": "c82cca470a4b2a84c50896a411d2ea6e",
".git/objects/12/d7e5b721c29f4977e0331b0659ed0dd72ea04d": "08be7669fe623aea2433876c9c4c113d",
".git/objects/15/a645cb241210046f7390f489e3af5d725bc930": "b562c4312e84b670204f8b32e01139e1",
".git/objects/18/80d6eade9708dc6dadacadb075bbfbeb2ba4f9": "221879dafa0ffb553042696409a1ee04",
".git/objects/1a/c82d010aea0282e2c0ecee226954b26001444d": "f9ca5a3e8233bdd254a80a258c0f990d",
".git/objects/1d/8cf7d888d03a3052ec6d0f97eb12a2a12350be": "58357877c8eae788550f81960a8767a9",
".git/objects/1f/718e6ebf536367019b3ffb688400879f29999b": "6e6e5381e5d1dbf2de997e4e8c40064b",
".git/objects/20/612b1c58e4113b4298c8b5fa56225a9140a475": "68e6e8e58a87f77a1b26d156e2286230",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/37efaf1f531b46410b4dfc092b0919fd8cd7ad": "edc77d3c202ea69a7e15a8cc46ec8fd7",
".git/objects/2a/136bedac5777f0820313b25c539d78255a378e": "d8cc094be36ff9988820e495a19c4d9e",
".git/objects/2a/46d3d8481f46c428754fd56d6915e2db59ec9d": "8ce238d3e95fe62e0bf341e8f86b5e2b",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2c/3e4cd5482ef94d33b3c1dcd71907b68559e8e9": "c0bbe79cbe63c787f9401b98ddcc7bbb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/be5bd34d72bcae096f0ea6209d8619e7f3dd33": "6c06558f5025dfa37b6bd7ae0e44e2df",
".git/objects/34/cc388fff3fdf41c88888555313c04a44674a72": "3790f5a6bad8ba9b675bdcd07b7e385f",
".git/objects/37/7385b7a7ce00a577c80a3b6d46517fb8024e01": "9e09b5eaa021563a0dea949861d99de1",
".git/objects/38/81371c69cbd494e4fc5164a4bc43d7992f47d8": "df1f4b2e4fa873e8e53388807c9b62e1",
".git/objects/38/f3775badff071cc9a17ee25d438ca90fdde5cd": "818a89cd933ebfc9ca261e7f19b475b0",
".git/objects/3b/1657d6162c00fcc91ed0a368c6b2b53f4fd01d": "408eb2d429729ba053eafa0546293969",
".git/objects/3b/ce5b329e9dff7c2ae2f75b02ef16165804e266": "57321c13ac3f8014c2bcac6fc98b16bd",
".git/objects/3d/acdfe3acc69cc0a43a6e9c707bd0ae75969c7c": "ba360cab717ce7ae23c4bc7ab4b8a4dc",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3f/8b4a57bf5f61baecb6ec04297c2d0ace7b0824": "5d66015ad1b045e7d57b48b3ad8ceb4c",
".git/objects/3f/d2cbfd86bac6d04ee26b8d24a6e1faecde036c": "1c50f7fcf936a2aaee877ac393e73fa9",
".git/objects/40/f08f3e21602c20b7ddf92beb1f4f79cca09b8f": "d100d948630dfdfef794b040b36192e6",
".git/objects/41/af2f2de7c9ce0721c08840f2a88afb0d695372": "090b4a48338cdb98026c24ec90564721",
".git/objects/44/9d29eeff78ff5259cae253a08f4961250d1704": "6dc8306ec7a73586dc0c565117c6c0a1",
".git/objects/46/2f176be8ab8b52b559c106bf8a64216bfa6bc3": "d40ec2fffdf7ba225f2e79ac49c02976",
".git/objects/47/cae0276a397f70f75def41ad3bb5ea3f66b979": "017e308511e4ac4b25211ed9aded66b1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/a5ee3daeea2c2ea5b1cd9804b40c2e7754d116": "032225e0ba2391480ae720e3a86072a8",
".git/objects/53/d9297526fdff53cafa030a5000162935e6b0e7": "35e96e241bf85bbc175f71c558184c3e",
".git/objects/55/9989cc11ae8b4020f2275febfa23b00bfc3bc4": "9d479eec5eaea6766dac85eab8a2ddbd",
".git/objects/55/9fc0dfe8e1545628efd94b5643d640c6f1b1e7": "049ccd7f3a2391644e4e7451143959c1",
".git/objects/59/7bce07b6009dd77c5d834a6e265b6ae5dc8362": "eef1a2eac4361371ac9cf615d674ece1",
".git/objects/59/f20213ae856e74340ed5a7bf9280ca19f6410c": "a779098619c253524ba21ebaeccc13ad",
".git/objects/5a/b44a7da199063adbe22d61050bca35922e041c": "9762b645893c5a09135e2c401cf428c9",
".git/objects/5b/8a81c0bde8fa112e4c001d08ed3a26e436f921": "5c8e9ee83f347d359df62d86243116cf",
".git/objects/5c/b836bb85dfb509821bd885c2aaf55c9a2be3fe": "d4b36b5c097892b3be313dac16315900",
".git/objects/5c/c517c13bb3ddb10279a25496fa0f2b156523d4": "f13e9b527605da23be1ae0383c1b8845",
".git/objects/5d/89cb4c99a1a423055a952c91596b9eb6c465f8": "2fbcb688f4c4ca22920efb246f829913",
".git/objects/60/538e786eec7607b3ec960f7f96a9f01cf0a6f6": "87cc1aa016142e7cf6f4309b209c0d24",
".git/objects/60/c60cbcb160b743eb3a5cc01fa656df799c5f66": "c70bed09989c37542d55bd6179d8019f",
".git/objects/63/debb7145330721a3b4c779bccf0e92abfbf817": "5633106df0b563f3dfdd3b1da8783f51",
".git/objects/64/2f1c9e5438d59915386584c9341e71a4851f33": "650ee054d917da92044cab503ed0946e",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/69/8a0187679b481c99d75d10b8290edc21d1b448": "2913ce5003049edd515e07fd9e3370d7",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/71/5e5489f62b0f8e1a3fda21da4dcd75599935a3": "fb05b25385109ecbb14b71ce82081d35",
".git/objects/74/1001c653690938f6b11e8436df25663c0522c5": "1814fa7a48e0366cd3d322d7abf182ee",
".git/objects/76/78bed8fd642ef2f36a3fbb507f6d286e3465fe": "76eec8cb5eda472d2628107380a7fd8f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/f3784069c5d790f769975c4b4bb00c6f9595e8": "8ae3e3e97dae9ccfdaff1f326ab2d152",
".git/objects/7b/cb5330e39e166c9ac23a35ddb694321783ec40": "6b180691dc67a86fd211f3462c845ddf",
".git/objects/7c/efd4c145c580e5c8c17c0b0a20ff0fc735e987": "e22d842e6a2816bbbc132752cc73c366",
".git/objects/7e/1f3e66423f41de0cef42d88f54e76214c112af": "9b6a219226a11d664106d296c7ab4d55",
".git/objects/82/90de81917adcfcd043ac028d593078bc0cba9c": "bb5953452cd5228a4b3491b0de809ad6",
".git/objects/83/492c2358336e4270593ac44f490fad76fb2da2": "c10cf347b156eacf68903c16cd7b9edd",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/3f8d9bf52a3f3405a522ac09e2e324886e347a": "981ac9e3a0fd0fcc2ed958c853c24c6f",
".git/objects/8b/cc88d086986d928ec4f20b47fb2962800d3039": "9486761eb2ebeda21991548b6e2c4566",
".git/objects/8c/0a5ff34adad16152dda922c061542550beaf24": "2034056abbdd1b68c8ad73aed921f077",
".git/objects/8c/b3c4073c36e35542ceccdc79618635ac9133ef": "e0eb62bbcdd7224e0227277a2b219e74",
".git/objects/8f/033484d249e10bd442c3d8feade32ad5d40e33": "27b0910ab91f6893a27fffbc48d76fa6",
".git/objects/8f/24a9e23454d4b54e796446459f3d1816fcb4e5": "8621e8fa6ab4be24ab2b9b5872312c44",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/1164c6df077e24c7ed45b50f5b2b0f49dee9b3": "20f4d387ec5d4e5791c27795e4062366",
".git/objects/92/8e26e63c96bff9cb5d59d7a1e6154595da88eb": "02351f85d280ba28175df89adbd60bfc",
".git/objects/93/6d73a444dbeb3504da1749f48518174d8120d2": "4741d61a19dff1a9e2692a151efc022a",
".git/objects/93/fdc8e47925bf5fc73e72d94df25d7af9717422": "7d182db08c0366d367165f06a0857449",
".git/objects/94/9acad89a87da1a6bb59650d846a89ed077ffa0": "807777e2a1d8d543b0346f37020e02fd",
".git/objects/96/23e7a79c566cb21fcd9b270b9ba1ab791e098e": "f0686f1abbb3b9351b088e817ef42cef",
".git/objects/96/d1f00fbca75b4aee42c8dc512db63d21abb9c3": "c54da5178ad31942bf0a3b30b9217478",
".git/objects/99/1cf3feb4a05c31d12ef87df07c124051548e38": "b972fe58477b4f5541cd675b7208487c",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9a/4c0331d22ad82fa900348fde21a32c35daaf6a": "c3795d808dbd476a649559bac7cbbe54",
".git/objects/9c/a702a2993e9afb538d2b8a80b62eb7a998800b": "9db4e0fa46c933aff5ba5e6f4e15b5f1",
".git/objects/a1/2f352e65c5d787a352e5dea08ef9867d0e4024": "a57b72eda797f619d5003a2ee89683f7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/145e0966f75513462c2e0c70e8d3922f90f654": "7d2beeb06dcb613919fac69c5ac24a8c",
".git/objects/a6/e600c704e15bddc98dda571779420f6df19bf3": "101fdb83404e9b3fb4971ee571e6e495",
".git/objects/a9/01a1c67556cb85b3278cc5d26405958096aeb0": "e9ae163007dd367a7af279f384b0408e",
".git/objects/ab/5a489b4287b0224827b9adf92ae0d7d0537414": "aacb19c0611de91875de9a6bb3d16cdf",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/ec28f75b59c9cfca90b6d671e04de194de6dc1": "17e951dfb53f6f08d8744c62ee2ab369",
".git/objects/b4/29dc18ce5f1ca885feaf6bba2f42424b23d47b": "7eca59dd3722701e693507653b7d64b2",
".git/objects/b4/fe96f380f7339d50e6c59b90da374dba2afd84": "9f762b1eeef5a79d9c822079816d2b2e",
".git/objects/b5/5024d94c44d3613d2d95857edcc7a6d4fc3f3c": "ce6f4531109966d5dd715c4d8d5112e1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/df86f6ac771651f77e8a6c55965cef74edfcf8": "01ec8410d0230d8d64e91c02c1c4f5c1",
".git/objects/b8/0fc59c88295fd5e5d54345212b7d98cf42593e": "03ece103e09889e3fda211c4efa17aaf",
".git/objects/b8/f0429433154269dc32a771e7fecccf10662f3c": "dc4805a93d8a191f6cf7ee9263821b4c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/5c2036e2064a652cb051d747e1bfa542bf9f76": "d56e95363044e54a4e2b777ca50c0a46",
".git/objects/bd/a014659be80a5a3a937374b5ef9c8d9fe16635": "755ea7dbffd5b9b8b53c6343804beafb",
".git/objects/c1/1e400ecbc75e4ceaed1e7d337e7aa6132833f7": "f82eb6ef0ec9408b078af692657128e1",
".git/objects/c1/616ba6fa942dcf545bfc055956cff281812317": "a86a9228b51c7f68a884362a2fcfbc5b",
".git/objects/c5/276819b27feee382464e271e20bd91955d39f4": "309cffee4111996acecaad46955db024",
".git/objects/cb/1aeea66bede01604e8dcc39c7ef7f33073ffbd": "0ddc43b7b15326d1919f88e40feb1c88",
".git/objects/cc/7d69fab272e2003dd9c17c05a974ab440c07b7": "0c8f3519d7da08a8fe71f2a1332363ee",
".git/objects/cc/a650db4baf093eb35f16d579a39031c08f3143": "a15c4615dd0e44189e3aa71dd75f150e",
".git/objects/cc/f0e690707ccf3dc3a9cd76f22dc9868300d18a": "6713c42e122197b9d89e91375849c8bf",
".git/objects/d4/40ca51f928ed35edf11c577964a40ea2cbce86": "faf77209873cb5c755b5a680941a1639",
".git/objects/d4/845307ba2a2c0a14c85463b69e1b9f3072d88e": "c3d0694f4c15172e443731897ff13c60",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/d1eea4388a02d8d51970ff5e9201ba20018a02": "b38a334a5841840291336b4cf634b5f3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/4772056f54f5b14036e0baee49a1fe904caf87": "66a74d0e6aa711db604d8425dffcbb84",
".git/objects/e0/df4fe835f3d5055b347e9d0a49e7e776650d74": "20f0e05a91a9cf491bc8864ee5eaae33",
".git/objects/e2/188ce6845536942a571435715e62e6d8e41697": "dfb35a9225174875054fcd6112bf03cd",
".git/objects/e2/27f60516d6d212944f8a89b6901e0d1bebd098": "c695ef032010e360f20f03cc7d71e4df",
".git/objects/e2/77483e807bc463b82e3de695feeaed491faa56": "ff8bedf4f426c9388482094d05afb335",
".git/objects/e2/f87f72a8d32d9beb00920aaccfda7cf6b86f8f": "414c24f1013a1236c1dc57b45c9c7e5b",
".git/objects/e3/c12398f81d0a7aa292165c32012c0fa2a4352d": "2506c6f5c43bc67231b5dd1b0318b30e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/15f0ac812ef04325e1b17ecdf4a0f791c59297": "74719039f5cbcdb4beea7854edaf6563",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/d9d95034a0a85ad6e4192d8184e6c60018f4e2": "54e107e82a3fd619a0eb3e9b36bdeceb",
".git/objects/f2/ffe83ba11a99b1b0bfdb08f9e418aa37ec5495": "4635ce1acea128023e9fbef54a6e2fb8",
".git/objects/f3/056f79de2d62bc9e53d055480fdf5c463c817d": "c196f64e59c9360c2bd449cab8329199",
".git/objects/f7/7ba3e75f5158284cc368702482ed78545441cd": "37f37536e55bec56f3f4fe8a00bdc993",
".git/objects/f9/e1e3db223581d856ad569f518210f247c34a46": "32e441a42f934d0ca0eb45c76ed45077",
".git/objects/fb/7dd82718a482d226f3df79ec5f1b985d0b3a96": "2141056294df30182bd967378ebe9a73",
".git/objects/fb/beb72915c23293a5ab59d0f531367c2cb9eeb2": "27e0efc3ff6277354cab60d44088cd97",
".git/objects/fc/027a5f51969c6f72210c4aa7fd1a0a849c3ae8": "51df40467cdfd2b419edfa9f3e2658e8",
".git/objects/fc/25e3e9b93d0a1526a43e81daedd4b9c5974c31": "c6dd31b99bd87032ad818431e45e4925",
".git/objects/fc/fb2902dedb8d561184db13bdd130cf182da6b3": "bd376650747badf8668908dbea72e5a2",
".git/objects/fe/5a3309332de485d29c9d77c32b93c216d4107a": "d2eaa8d42d0501eabdb35202598872f7",
".git/ORIG_HEAD": "41a1c706c6d2153ccb2325e6c4407c66",
".git/refs/heads/master": "3d76ff5fd09b9a59849eb6fa8a039488",
".git/refs/remotes/origin/main": "232321296a19bf643dc97a6c08f2e93a",
".git/refs/remotes/origin/master": "3d76ff5fd09b9a59849eb6fa8a039488",
"android-chrome-192x192.png": "3eb71359e8c64506d33fe3dde5653add",
"android-chrome-512x512.png": "79b1dd545a6166a808b573f017876026",
"apple-touch-icon.png": "69b0e93d52b99e4ceeb6a21fd377838e",
"assets/AssetManifest.json": "fdf03107969f92ebc8b0a589bf5b5297",
"assets/FontManifest.json": "0af83bc750c89e08e927ecb247f2d30f",
"assets/fonts/Domine-VariableFont_wght.ttf": "c8e8b1526bc5a6ba19cbcfeb0934cada",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/image/bkg.jpg": "89520f92902ea28565c5aee9498fc273",
"assets/image/bkg.png": "fc2895788b507ce2d93ada8bd7e51be7",
"assets/image/logos.jpg": "8d0868324745273966e74854b9b4f22a",
"assets/image/logos.png": "9198eb05ad9d8a3ba3907a24ed924a40",
"assets/image/picp.png": "c2e55e39ff63b22f09f2917d06d233f3",
"assets/image/projs.png": "228770b5acc99986f2b8a2762effef3f",
"assets/image/Screenshot%25202022-02-26%2520081209.png": "8f91b251c097710ba2f8822ff5b6544a",
"assets/loading.gif": "7fc09f7a20685bfbdccd4d80c9acab59",
"assets/NOTICES": "6577695168690db9c16e13b45e28be63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "718e019c26cc88db1c98649bb1127255",
"favicon-16x16.png": "cd9543b52e0392ad97d7b02ef8a5a4d6",
"favicon-32x32.png": "1e1cec61e8c3250eeba73ab551a2c39d",
"favicon.ico": "da0ffe5920057e8b0a5fb5d0f05cbe4d",
"favicon.png": "f16843aa02a0a0121c8dee719d510100",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7cc2609ba1699a5be5d0ba754a518d7e",
"/": "7cc2609ba1699a5be5d0ba754a518d7e",
"main.dart.js": "d7f6e8fd93a37e3b4f32b023371fd6f9",
"manifest.json": "1ab67272e548d03cacad77655841ef20",
"site.webmanifest": "39e61c540a590e9f9ccacb9ad4cf8553",
"version.json": "bd7311c147d5a64f924042472ce61cec"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

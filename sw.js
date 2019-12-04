/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","b398d70dbe5e2a1002a0458f3dd25528"],["/2019/06/26/four/index.html","efd9b684bfa76c3a83fc95ceb65178fe"],["/2019/06/26/three/index.html","92038fb024aa7527897b6d8c224ca23b"],["/2019/06/29/six/index.html","32523c7b1d06ae750cc8762f6f80e377"],["/2019/07/06/serven/index.html","2553658a3d11922231851b293b57f782"],["/2019/07/11/数据可视化笔记/index.html","dc19d5bb33941afacc896aed6c2b5ed2"],["/2019/07/12/语音识别/index.html","23fa8d64d384a19d1cf83564ca8e3de5"],["/2019/07/14/hadoop基本概念介绍/index.html","d51e8120bc3b6cf0c46ebc9ee7e5d6b6"],["/2019/07/14/数据科学笔记/index.html","542aaf411dae4ad4e6ce8b0bd87d1fb6"],["/2019/07/22/python爬虫/index.html","e8e484e2e086dcd2a0134f8c0232c182"],["/2019/08/25/pandas函数/index.html","f310351946817920b33152c8347abace"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","9da2294fba2061b6c6d5e7b9a6d43191"],["/2019/09/30/C 语言中 void 详解及应用/index.html","0168349a124abe1f7b4eb95e59e68e0e"],["/2019/09/30/第一次面试总结/index.html","97f19c54813bf05e2ef2c642d5c52735"],["/2019/10/07/django之url规则/index.html","375f1aaeffb670eb053d10de5c38b25e"],["/2019/10/07/django配置初启/index.html","cf9c7b452fe5b214b4def1864f3053bf"],["/2019/10/13/C语言笔记1/index.html","8bb834eb0b20f17959696b009cd250c0"],["/2019/10/13/C语言笔记2/index.html","718efa280c5a0ed516bbd9cd7998fc45"],["/2019/10/19/C语言打包技艺/index.html","c2448bf4587c73d4969f33d43283a702"],["/2019/10/22/c语言笔记3/index.html","44c77b867946e1d0d6a7fc363f656670"],["/2019/10/27/IP代理池/index.html","b9ef83ffe972e6767b18de4b73ba1b32"],["/2019/10/28/git命令/index.html","28afec4ed2a58207abe7cf01446307cb"],["/2019/10/31/斗鱼弹幕抓取/index.html","f046ef1fb28e380e39f7cf4f4ce56c71"],["/2019/11/13/多线程/index.html","cfd217a00cf7fd57866987f5e0ffe5af"],["/2019/11/14/多进程/index.html","5e07721e83ce667141fe3972f95164db"],["/2019/11/15/python类的私有属性和私有方法/index.html","60878a4c2b70a8ce65fda6427d2f5299"],["/2019/11/16/协程/index.html","fe470c400f55e1eee2e175b75d9fb8c9"],["/2019/11/16/进程,线程,协程对比/index.html","1e3299e67f076c654a6a7512c077b30a"],["/2019/11/17/GIL锁/index.html","603a415334f2eeeb752d21f3b021e642"],["/2019/11/17/闭包和装饰器/index.html","c12996a10472bfb4d6399fe78b572bb4"],["/2019/11/19/Python进阶知识点/index.html","389df9f610e52c9e3251f04a5fd957ba"],["/2019/11/22/京东全网爬虫/index.html","6fe4710c372c6771755d6076d2be9707"],["/2019/11/23/JavaScript的简介和基本知识/index.html","b36ecd1eecae13a35986fb872f72c298"],["/2019/12/04/java简介/index.html","3c3c8597b78e5c3362a794c545c6ac11"],["/about/index.html","064d9c93a94da4766b1124fe91dd81f4"],["/archives/2019/06/index.html","998da83e3a364aa1abb7812765225865"],["/archives/2019/07/index.html","fbb1f83bdd000f8045b87038d7ba7e5b"],["/archives/2019/08/index.html","8799d16c8a3dc376c205273c77a5ba5f"],["/archives/2019/09/index.html","28a30f4e6c51ac680d9c2a76f9abb582"],["/archives/2019/10/index.html","1ad18e3492e5a973dbaf4597c72ed544"],["/archives/2019/11/index.html","0d79cadd357199258b95e0307f72605b"],["/archives/2019/12/index.html","66173bb0f7dcace9339b54d5c2917632"],["/archives/2019/index.html","ad2be93f2781f848d6981f89361c0d48"],["/archives/2019/page/2/index.html","2ce5220dda0a7701d7172a211c823ec1"],["/archives/2019/page/3/index.html","68bf9ba7e84e1d36135fec1fa2caa4b3"],["/archives/2019/page/4/index.html","e9225caae846afa175165d2bedda800d"],["/archives/index.html","5ef0030b917e569e3964ceee95dfe544"],["/archives/page/2/index.html","6c122d377ce243885bfde82d72c880ac"],["/archives/page/3/index.html","58eea9f62b2c359aaf66d15c6a3ff154"],["/archives/page/4/index.html","9429e1655f10cd27b0c73cda675ba200"],["/categories/C语言编程知识/index.html","2bc1f3278c21a1fb4270f178ac5a63a8"],["/categories/Hadoop/index.html","c2973b7cf8930cdfe71417ca95c6aaa6"],["/categories/JavaScript/index.html","253b109f7848a80cea9e33929e6ecb25"],["/categories/Java学习/index.html","40aef1c61191dbda1d4717f383188a31"],["/categories/Linux/index.html","ed39e70be6edd5aac815fd42e2045b95"],["/categories/Linux/常用命令/index.html","a8f5b830ca770bfae0a5f54b72a63dea"],["/categories/Python/index.html","075cd8160a53a63a0079193fadaecf7d"],["/categories/Python/编译器介绍/index.html","2914407b20b9a38000c75588516876b1"],["/categories/Python爬虫/index.html","84c6dec520adbaf6adc38c45e3ef40aa"],["/categories/Python编程/index.html","a07c4bf38566d940adec0d191089a0dc"],["/categories/git/index.html","12f7146c35c17d2c5d90125637c63992"],["/categories/index.html","1d0c4069a5f82691474e31c1ccf5a312"],["/categories/python数据挖掘/index.html","ea1ed24f79d36fd49191d7dbf6644b18"],["/categories/python的web框架/index.html","c94d20e6634171122847e4b5b3099818"],["/categories/数据可视化/index.html","cf519a53e41beacdd1724f2770552fe9"],["/categories/正则表达式/index.html","f7a11ef4ffb7ad52b87921899578c921"],["/categories/算法/index.html","31835fea974e26ee78723e34496c9d98"],["/categories/算法/五大经典排序/index.html","ffff1f0db4e188054bcfb25557d32073"],["/categories/统计学和概率论/index.html","b9448a25863c1b4299b1253eacb3ae06"],["/categories/网站知识/index.html","e356e6cc71776270e7879cf2857096ea"],["/categories/计算机组成原理/index.html","5cb9b0d150b51243c2a07e272f731927"],["/categories/面试经历/index.html","ad0c1006eb982657617e4a21077baf57"],["/css/main.css","273d249dbb42baff73f35da57ae0b307"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","3208d3825103af60f582b129116272a9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","49c4c987721f052abf6897250af75b98"],["/page/3/index.html","40126fbbabb5337e8bc9c7a57d1604e2"],["/page/4/index.html","2a07af34de4ed6a8ce0c92fe0356e4fb"],["/sw-register.js","1398e0ee29fc78c1d422e839916d77ce"],["/tags/Django/index.html","5fc92a2a08eb1992393e600a163c4fbf"],["/tags/GIL锁/index.html","71c3e9a2a3623806bd6cf27c753fd37d"],["/tags/Hadoop介绍/index.html","697e8bb88da2a435bca04b0f17e4cd06"],["/tags/Void-知识点/index.html","4a038c9751f2e868b262e2bf1031925e"],["/tags/git命令/index.html","f8547e383e34b2461e2612df01c04e53"],["/tags/index.html","177d8421e099c266f3b4f995bb57dc4d"],["/tags/js知识/index.html","d19e228e982ffbdaa5cb00224daa4d12"],["/tags/linux命令/index.html","0c5b180f12e3e6a5a51db8e46e08da9c"],["/tags/pandas函数/index.html","c51b4e3ff16ba0bcb71c96176bd50127"],["/tags/python编译器/index.html","477685c16f9fa438b2663b203930e497"],["/tags/scrapy框架/index.html","941db5345fcc1ddaff7dfb490dcc7a4b"],["/tags/协程知识/index.html","4435850917d393ef2de7c1dfef90dff3"],["/tags/基本知识点/index.html","fdd0cc70d6f86e9388e150050f18dad8"],["/tags/扩展知识/index.html","0f528c2b0e21718f00dd65779d7a7a96"],["/tags/排序算法/index.html","320c19798408984f7bbc5fda4a9819a7"],["/tags/数学知识/index.html","6306149dff628771b2f3a422a97a7820"],["/tags/数据可视化概念/index.html","8db20bfd092b149fb122587b86dfd814"],["/tags/正则/index.html","fac669ab87426106123b0af5b79abe3e"],["/tags/爬虫实践/index.html","744e5a924e3cee7bbfbca373ae146661"],["/tags/线程概念/index.html","758eb250f5e56a84b06fe175edabfeae"],["/tags/网站的基本概念/index.html","4a1de378958005a22f8d666dab5f3919"],["/tags/网络编程/index.html","0dbe18e4e46f9d589c2cf99d2f7c34a8"],["/tags/装饰器/index.html","b7f299140bb92913f6d274b94ce8bfc2"],["/tags/计算机知识/index.html","c48de0e7105216ecb90473e2b473c24a"],["/tags/语音识别/index.html","6b4641a3ffa17e3ba341b2906746fb24"],["/tags/进程-线程-协程总结/index.html","999e9293bf22374fb96ffcc510e2b1ba"],["/tags/进程概念/index.html","8f3dbe93c124e755d46621b36a4ea318"],["/tags/进阶知识点/index.html","acc775d71206e8b68c087cbb3fa342f3"],["/tags/面向对象编程/index.html","243586e0324aa5e48b84ec030b8e24b3"],["/tags/面试总结/index.html","d4c2f3f12eb6dff413ff7a9bd133173a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

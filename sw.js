/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","b0f7c67900080e32618a752dfb98d4f5"],["/2019/06/26/four/index.html","e1f49ead5219caabea18f00d0f8fa02f"],["/2019/06/26/three/index.html","c084304235041f9c4ebb4273080e6fde"],["/2019/06/29/six/index.html","72e159b4a63d11a32122b8440924e287"],["/2019/07/06/serven/index.html","3463fb2ae4a024d5a9cafcc4edc9d527"],["/2019/07/11/数据可视化笔记/index.html","e5e08f1e751abffbc5c9a1985f9641f4"],["/2019/07/12/语音识别/index.html","af65d9a58fb761568299395de9a2eced"],["/2019/07/14/hadoop基本概念介绍/index.html","bc130dbbff1dd2b531e3aaa516f36e0e"],["/2019/07/14/数据科学笔记/index.html","93edfda0e69dfea64fdc736fbc07aee7"],["/2019/07/22/python爬虫/index.html","1ad14692ff856c7e2cda47ae62b2d443"],["/2019/08/25/pandas函数/index.html","300c1d95b4efcacb7b1d6be6f060dcaf"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","28d1e3aa244bc1a0cf9e08d9343f7030"],["/2019/09/30/C 语言中 void 详解及应用/index.html","3f1ff237363eed6cf77c8549d4e57bdd"],["/2019/09/30/第一次面试总结/index.html","5391c5c74513edc0aebc759ba8e6787d"],["/2019/10/07/django之url规则/index.html","23d7f23003de8e210b13580e9726b0a3"],["/2019/10/07/django配置初启/index.html","149a29879ae4cabc17a371e8d77e3a6f"],["/2019/10/13/C语言笔记1/index.html","577c3e161e39e559e8f14e09419949bc"],["/2019/10/13/C语言笔记2/index.html","9056d33212223e3378764b64bb1cbf45"],["/2019/10/19/C语言打包技艺/index.html","733bc64735e0a4f47b758a257a0378b1"],["/2019/10/22/c语言笔记3/index.html","616f002a8a2ffe99bb4e780a3bd46c69"],["/2019/10/27/IP代理池/index.html","3234e5f2194131c2346205718a69b57d"],["/2019/10/28/git命令/index.html","1fdfe37b92035b2e447ca84967519a4a"],["/2019/10/31/斗鱼弹幕抓取/index.html","98790216d327edce5dcf0f179bc9a1ec"],["/2019/11/13/多线程/index.html","b9dcd60733a63c2192d16cfdec6486d8"],["/2019/11/14/多进程/index.html","94b5b648ed96e8c02f1e41465025fe80"],["/2019/11/15/python类的私有属性和私有方法/index.html","15d6ea6d29df6e03efbf4d5895ea5d9c"],["/2019/11/16/协程/index.html","29c71f2e67bb4d02fdd24a243ecb0248"],["/2019/11/16/进程,线程,协程对比/index.html","eec2b38fb695c9136534302152cb4209"],["/2019/11/17/GIL锁/index.html","f1659866a34a219172ec4edb11e0cdfc"],["/2019/11/17/闭包和装饰器/index.html","b85696c60ee44bbf8f1424c2e4705968"],["/2019/11/19/Python进阶知识点/index.html","72e317b3406dd539469ef99b8ab2357a"],["/2019/11/22/京东全网爬虫/index.html","ee9abaaea47c3c950451089159d24269"],["/2019/11/23/JavaScript的简介和基本知识/index.html","c894f34583b829eb02f3bc0d6fc4b983"],["/2019/12/04/README/index.html","aefb25c9935fe9a04558bf1ebb3ab77b"],["/2019/12/04/java简介/index.html","beac303c28a7d48bed14de76d1c1e3c5"],["/2019/12/11/Java基本知识2/index.html","fc14ecfd5a6c6dc2fb93ebe5c2a79ff2"],["/about/index.html","78d914e67b1711918b51b9bff1c50236"],["/archives/2019/06/index.html","10f6e9fbc7155b1a03f19f91bb98b49f"],["/archives/2019/07/index.html","5c6ff7b87bc4a101501886fc720b10d6"],["/archives/2019/08/index.html","c8a0f7fc9b322fa1a4d22d8ad8259039"],["/archives/2019/09/index.html","c09c06cc8632c784fb687d97f201035d"],["/archives/2019/10/index.html","17334abeac2f2eebf55817b246d200aa"],["/archives/2019/11/index.html","0b8c2aab4a8b51e78f6ef3a74878a898"],["/archives/2019/12/index.html","17403945f48ac79d7e1c4a5fb8d2a0b7"],["/archives/2019/index.html","c5186b521ef0e73ec05a05ad1041792e"],["/archives/2019/page/2/index.html","499c1e1ac4be30d4b27a0cbec4c6a01e"],["/archives/2019/page/3/index.html","8eb306d50f4d888d16b103e548dcef01"],["/archives/2019/page/4/index.html","cfdb65b0bb36220d47c14e2b2cb9d9a9"],["/archives/index.html","34e7e16c2a87a2ce1977c7702abc26e5"],["/archives/page/2/index.html","fb20fc79bdf98c02dc48abbfb20bb294"],["/archives/page/3/index.html","773743844609a40bca929554f010bbba"],["/archives/page/4/index.html","92e75dc9800ca77b57c13af813444bd4"],["/categories/C语言编程知识/index.html","410375189196ee7f568d7b4d722c63a2"],["/categories/Hadoop/index.html","e7c121863e888b269fef3a682271be49"],["/categories/JavaScript/index.html","8ebbeb35d1fe44852636aae2bba6f796"],["/categories/Java学习/index.html","aff4dc0bf84b21230c2963fa15170d59"],["/categories/Linux/index.html","ec30ee83cb8ac6b4c66f1321b19821da"],["/categories/Linux/常用命令/index.html","53f3c0f43e5d41b7d1bac124f9c71dd6"],["/categories/Python/index.html","89644de9215b9c35a0f15b3894784295"],["/categories/Python/编译器介绍/index.html","f1337aeb1071dec651f363f69f043716"],["/categories/Python编程/index.html","a81e964821ef6b3caeda7eab9f53fbda"],["/categories/git/index.html","4c0505a0dd72947ac24edd2626b1fddc"],["/categories/index.html","e25780b61da49d4fd438ef3b77177970"],["/categories/python数据挖掘/index.html","2c24cfe8acc4990b8aadcc97fe9b997d"],["/categories/python爬虫/index.html","ac59ba1583bde7e7075df1b6904b6c2c"],["/categories/python的web框架/index.html","b68e9053f8ea55b6365b3778f036c534"],["/categories/个人随感/index.html","518441d9b3159592bda576950cf641fd"],["/categories/数据可视化/index.html","b7b04d074bf60aaf25421ac199639406"],["/categories/正则表达式/index.html","3ce291b69e893423fea5f87d75cb1923"],["/categories/算法/index.html","dbe4dafab629d526a0a8f1e706c61ea7"],["/categories/算法/五大经典排序/index.html","38676f418958493dd340b455d75fd403"],["/categories/统计学和概率论/index.html","b7901ad7374627cb6e5df8de8285a3af"],["/categories/网站知识/index.html","2907333c9740952ab4b698934cb8eb72"],["/categories/计算机组成原理/index.html","624a37861ff38d3ce298072f3b4210fc"],["/categories/面试经历/index.html","3b3f30b9d01b1ea5a14b82b56e6b1bfb"],["/css/main.css","ac51786e6c5a71b5f9419a68b9078155"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","47b11ebc689ba6062c807b67784fdc69"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","cfbdd534f6c76488f709bbc3d8828876"],["/page/3/index.html","b7c529bed1c7734fc72893dac17192f2"],["/page/4/index.html","7ff4e5d4d374eb793fdc92adfe71a8b0"],["/sw-register.js","a4f5eb3fa25f40a9d6a17e94f9531a72"],["/tags/Django/index.html","1ebc5621be44f5d23113c0c44e7babf5"],["/tags/GIL锁/index.html","34cb9a1866d2e5a3fe493780bc449629"],["/tags/Hadoop介绍/index.html","1a5cccac88e90369d63f5a1ef4c4df8d"],["/tags/Void-知识点/index.html","f747f1daf76914eec969dd39799e6e90"],["/tags/git命令/index.html","e2cd7003a35b42dde996cd9d1a51bb69"],["/tags/index.html","069e91b785cc4ab65ae2ca64427a9dba"],["/tags/js知识/index.html","dac3abb342512193a7b863ffadf5c62a"],["/tags/linux命令/index.html","97c98fafee233d927dd6c87ecf95c26b"],["/tags/pandas函数/index.html","201efad047c1344b5c3c7d9a7e67d29c"],["/tags/python编译器/index.html","1cbc993c65ae128efb1a2ba981b976e0"],["/tags/scrapy框架/index.html","118f8d2ec99e94fc04f819c58ce95b1e"],["/tags/协程知识/index.html","7f72a842c6882efb4ec277075c3ebce7"],["/tags/基本知识点/index.html","eeed5ac5cffdfac195bd66fb1d9c0140"],["/tags/扩展知识/index.html","cfb2c4128bdf634f15ea298fac6bf848"],["/tags/排序算法/index.html","c1deec34ffd262983c3890b98c4aa6bd"],["/tags/数学知识/index.html","8be53dd669aa8debffd790470c8d3a2d"],["/tags/数据可视化概念/index.html","4fe10fa79ddff2c4063d89d66130505c"],["/tags/正则/index.html","836045608da331fed9be2c20d87a8bfb"],["/tags/爬虫实践/index.html","ff7156f03d4c342652793616cc4d3141"],["/tags/线程概念/index.html","7b3e5152eef127dcdd678750cd3ee203"],["/tags/网站的基本概念/index.html","7285446e6910bb94af720b388668f2c1"],["/tags/网络编程/index.html","022d56987154f570c663aaf87c2d4b89"],["/tags/装饰器/index.html","f2b6a55e29a59265094133c09c678e2e"],["/tags/计算机知识/index.html","ae9c288f79214e95b1245c126f314e48"],["/tags/语音识别/index.html","441b6e5ec1be2fef53cf668731f30ba2"],["/tags/进程-线程-协程总结/index.html","b32d839e023ea53b2fe961ee2e585d52"],["/tags/进程概念/index.html","667dee7a288f20b1e701de9f87498841"],["/tags/进阶知识点/index.html","24e55d0dfe77cdd2b2398b0ec3a3ec6d"],["/tags/面向对象编程/index.html","6e61848f25f76a854a62f5934598a99e"],["/tags/面试总结/index.html","cd389b86f63279a6724c83603984a803"]];
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

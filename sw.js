/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","ca8a6cf9e85f1f8eb5df0d5b1ec59708"],["/2019/06/26/four/index.html","562f29b08cf23c89b3a09d76b7c74ba4"],["/2019/06/26/three/index.html","e8b0e58980312a1fc1a3056aa3e81d92"],["/2019/06/29/six/index.html","0342885ff2c7df38cc85e07b3888066b"],["/2019/07/06/serven/index.html","7fc7ec9cd5ddb7660573ff252a4253ce"],["/2019/07/11/数据可视化笔记/index.html","369e45d97bdebb5e84803350b1c62cb5"],["/2019/07/12/语音识别/index.html","63248a0421c286805915f3f80eff9750"],["/2019/07/14/hadoop基本概念介绍/index.html","ca76fa5906762eac28e283ef3e3fcd4f"],["/2019/07/14/数据科学笔记/index.html","5cc65590ce434b393cf99e90db7d2b22"],["/2019/07/22/python爬虫/index.html","de2681f8411ae98d0fe24175c83fb2ce"],["/2019/08/25/pandas函数/index.html","64bd88db22d6535bc52bfc5a0d40fc7a"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","996e08541ecc3d1f9671ddae2c76f3e5"],["/2019/09/30/C 语言中 void 详解及应用/index.html","fdbcbd2315c485c17b4625dc225d6c69"],["/2019/09/30/第一次面试总结/index.html","4beaa3c8326662c0ba5220ebb8c4c6d9"],["/2019/10/07/django之url规则/index.html","b7e84f5c8e98a922375965e47f70eae1"],["/2019/10/07/django配置初启/index.html","123d679ce15fd81ba8836668f3302b32"],["/2019/10/13/C语言笔记1/index.html","af1c6412f1be2ee9e30bdea8d7ae4618"],["/2019/10/13/C语言笔记2/index.html","e3df06bd493c0489f1c914cfe199b6e4"],["/2019/10/19/C语言打包技艺/index.html","2371891908e0a75068450bb2044afc63"],["/2019/10/22/c语言笔记3/index.html","45c6c7a50988719283b1adaf2fd1e4b7"],["/2019/10/27/IP代理池/index.html","7532fed592416d4f8d57d9122311fe61"],["/2019/10/28/git命令/index.html","5692d5ae3c52e2e753770a3584f8a2fa"],["/2019/10/31/斗鱼弹幕抓取/index.html","3afb367e8af8beb18b1308a1544b74d8"],["/2019/11/13/多线程/index.html","49987579168e213b05ce4895562f80da"],["/2019/11/14/多进程/index.html","b228077f7a6e9cefe32905a88ddc2e9e"],["/2019/11/15/python类的私有属性和私有方法/index.html","ffa4120c45dd01191928f31989f16f3c"],["/2019/11/16/协程/index.html","8c355e349459cde3d63218791efd0ae2"],["/2019/11/16/进程,线程,协程对比/index.html","75394c13515583848a4a89ef409b0807"],["/2019/11/17/GIL锁/index.html","be77d862b4f7d8ad477d8a3a118a0479"],["/2019/11/17/闭包和装饰器/index.html","f47275b30d33e2d494918486c67eb3a1"],["/2019/11/19/Python进阶知识点/index.html","0f56955fdf81ad0f840f9cc8dd8a9c5f"],["/2019/11/22/京东全网爬虫/index.html","fbb61363c0276e6923d43a4f75583715"],["/2019/11/23/JavaScript的简介和基本知识/index.html","6e8768fb38a66ff0801f8477e0a86f06"],["/2019/12/04/README/index.html","41742fd126161e072db403efab88cb66"],["/2019/12/04/java简介/index.html","bb85ea37efadbef9f52487794f465fd3"],["/about/index.html","8dfcb97a69bc69a8581b8e389f7545ab"],["/archives/2019/06/index.html","ddbaa126d1fa92b9f609b1f91db39d20"],["/archives/2019/07/index.html","47797f4c3ac067594e27aa9225b72462"],["/archives/2019/08/index.html","fe548308498ce0f101d19697fd7a7d76"],["/archives/2019/09/index.html","a5daeb7519e98fe20f4628997b466328"],["/archives/2019/10/index.html","1b74cf518ef8bb6617dec5e19396174b"],["/archives/2019/11/index.html","3c9552c4d833a475b43e627606d17523"],["/archives/2019/12/index.html","c2ee58054f7fce423b68130ecb70aed4"],["/archives/2019/index.html","6fb2681536ae9eeff6e82ace54f892a4"],["/archives/2019/page/2/index.html","f0ee2978f0580654caafa9de7d35816d"],["/archives/2019/page/3/index.html","0c452d74f46c2dd84d8ab185e13aea8c"],["/archives/2019/page/4/index.html","2b5e22630126d1a93d28ffcf49b8a3b9"],["/archives/index.html","7bf3f2a67cb2b72f5bb65dab1558b256"],["/archives/page/2/index.html","f0bfe3e15bb3a6ebba9e4a9a89396332"],["/archives/page/3/index.html","160e6cd5bba304eec1cdbbc6c7f70a09"],["/archives/page/4/index.html","d129ad89b96ecb565e9a004f74df0e9a"],["/categories/C语言编程知识/index.html","f2452706509cf6581053c2223a9929c0"],["/categories/Hadoop/index.html","7ee2603a7bed9ae32bf6d8f86f97ca17"],["/categories/JavaScript/index.html","971412c6cac915790c35459d0e03f491"],["/categories/Java学习/index.html","85c435fcd0088722a2b2dba9e3264c50"],["/categories/Linux/index.html","4294bfaf6598744cbe3dfb1ee8ca0a9c"],["/categories/Linux/常用命令/index.html","ff36bf4cd65510a27aa6011c609003a2"],["/categories/Python/index.html","518e689afc9641ae6ca4cdf5f39e780f"],["/categories/Python/编译器介绍/index.html","9b7347a6a60bc4e589fb4526e76358d4"],["/categories/Python编程/index.html","f31e4d1e258d0edda04c105fbbc8c4e5"],["/categories/git/index.html","85b7a27dfa86b81c760cde079673f21b"],["/categories/index.html","07af6877ce992a4e876f1b4f1fa27b66"],["/categories/python数据挖掘/index.html","5c0cc08184560f173afa6f3a391fb472"],["/categories/python爬虫/index.html","07f3f3849593ecd51f35fe1fb84cdc5f"],["/categories/python的web框架/index.html","893e3374baad5c52e1723bab9c2fcb06"],["/categories/个人随感/index.html","fae03687a1f996e966567ce6823632ca"],["/categories/数据可视化/index.html","ac3b3c55be90ca59b01b2568a65d4005"],["/categories/正则表达式/index.html","dce22d94de707db1f52ed833cb181a44"],["/categories/算法/index.html","545afceacb008e1bec919b3a894571ae"],["/categories/算法/五大经典排序/index.html","68ee311122e00fc31cb22e15012a9d07"],["/categories/统计学和概率论/index.html","a98b5fec2079c63d4f67ba497300cb6c"],["/categories/网站知识/index.html","173a34b548eae2ba0ce2c315a5a48f6e"],["/categories/计算机组成原理/index.html","9c53b0ddce4bcfc5d7b4a75e1ffd3972"],["/categories/面试经历/index.html","79b1a1803e9953c45a44354479b96202"],["/css/main.css","17561028c7d0bf60143a905ef780199b"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","38279a814b54bd8a8591a9477158b0b7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","53944a92fb035d33e11bdbad0272a7d0"],["/page/3/index.html","bb7bf28465e605bec131dd80a6ef06eb"],["/page/4/index.html","f4ff2b4f79b61a7fb07c8837ceaa0b0e"],["/sw-register.js","271cd4a777eb859dde6633975be1cb56"],["/tags/Django/index.html","88893d6a3088b8075dfb0732679caad2"],["/tags/GIL锁/index.html","662b30705cc6c3b917aafe8be22887da"],["/tags/Hadoop介绍/index.html","bd9cc94626c40f0b9f7b9e940007e570"],["/tags/Void-知识点/index.html","bc8608b4f232552a5f37142fb549e17d"],["/tags/git命令/index.html","6dbdc9ed51a4a52b34ca6a70a640bda8"],["/tags/index.html","8dddb05b74f91cb895f6149ca4490e99"],["/tags/js知识/index.html","56f63402c9f3e62e6390f221c13d7f46"],["/tags/linux命令/index.html","d9b7055cd6f0910267e20a1244264258"],["/tags/pandas函数/index.html","fb0e9471ccaa35fd98389728392bc3aa"],["/tags/python编译器/index.html","13dbc9f9e18b77c0818275d5cc11eb4e"],["/tags/scrapy框架/index.html","4ba3886c590b3e9ff2c1c1db8a5b06c3"],["/tags/协程知识/index.html","3b7301775bfad8cfed6b1b22573038bf"],["/tags/基本知识点/index.html","ab00160a841c22f58a7841a8ba462703"],["/tags/扩展知识/index.html","0dbb6664f334a03f8861037028ec2a03"],["/tags/排序算法/index.html","680ed11fb136da2098b155d99d253d9d"],["/tags/数学知识/index.html","5af358922bd2f26a660d0cd87efbc8d2"],["/tags/数据可视化概念/index.html","bedaf57a1b31e272069887a548db53e0"],["/tags/正则/index.html","8d456992a67bdb0c1a50e801587140d9"],["/tags/爬虫实践/index.html","09abdfbe1810eeac382d01c4e726825e"],["/tags/线程概念/index.html","956d6ef6a2379b402a0a137fcf2f7e34"],["/tags/网站的基本概念/index.html","2d4370fe58e45b1376126ae4072a1164"],["/tags/网络编程/index.html","336b3977810ce6c3b7a1d83082933c5d"],["/tags/装饰器/index.html","0dde1d89b8e812592f10b48d543db265"],["/tags/计算机知识/index.html","0402fe49285299d48b69b7aa590fd779"],["/tags/语音识别/index.html","aff2dcef26bd7b7b2c7cf40e491aee53"],["/tags/进程-线程-协程总结/index.html","efffd95000bd21fa5118fd868bbca0d2"],["/tags/进程概念/index.html","df6a15626574aa877f12c0e5af44bff4"],["/tags/进阶知识点/index.html","1ac87d4eb6655f7a1491f6e411cf1d14"],["/tags/面向对象编程/index.html","c9b750128eeee1d7b60a5c8bc1987e4e"],["/tags/面试总结/index.html","7bc3e0fbc2ee865812e44afa3d703a40"]];
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

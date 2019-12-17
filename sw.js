/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","f86dfd1e5a814a55f7ef202f9b6f95c6"],["/2019/06/26/four/index.html","9fc4e2c142dde7d89dc6f0f9d13fc657"],["/2019/06/26/three/index.html","3a8ca83ff5bec24d1ccc3a86ce3dbafb"],["/2019/06/29/six/index.html","8bddff789c27273702059f3dc50c3aa5"],["/2019/07/06/serven/index.html","3fd5acbd432bc28c4de7567e66f13e1f"],["/2019/07/11/数据可视化笔记/index.html","fcd5054f5c8e259df39d9c3d0e0c1ab0"],["/2019/07/12/语音识别/index.html","3f226e921f978ba90f87b0fe7dad5593"],["/2019/07/14/hadoop基本概念介绍/index.html","6d00023cb4449ba0518803a9f7dc187a"],["/2019/07/14/数据科学笔记/index.html","a74b32d0c1e7b1684c7bd196043b4ac1"],["/2019/07/22/python爬虫/index.html","e316529ba78316327ffab2fcd9ef274f"],["/2019/08/25/pandas函数/index.html","1eca237a915b3c100a293654fc1581c4"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","c4e22dd7b96bc0d469619514a248071a"],["/2019/09/30/C 语言中 void 详解及应用/index.html","be4a4361bb8aa5ac2bfbbca5c6bea16d"],["/2019/09/30/第一次面试总结/index.html","b7d1283bd0c91502d737a7b99046a967"],["/2019/10/07/django之url规则/index.html","ac4064c17e7d4ce2df7755aa6fcc242e"],["/2019/10/07/django配置初启/index.html","5a8d12ae9b78d9c4f387a3264c7369b2"],["/2019/10/13/C语言笔记1/index.html","30a227e331b69fbab3af547aa3f5b492"],["/2019/10/13/C语言笔记2/index.html","c13ac337c87f301ed7565e2d865ff8dc"],["/2019/10/19/C语言打包技艺/index.html","b79e6906c203a6c13280453a547d40c1"],["/2019/10/22/c语言笔记3/index.html","813ba6bbee6a6338732b4922fc5254cd"],["/2019/10/27/IP代理池/index.html","973d03580547fbc55c6fc4b2445bbe0c"],["/2019/10/28/git命令/index.html","ef06bd54bb33ef74402d4f8cfb27aa44"],["/2019/10/31/斗鱼弹幕抓取/index.html","dabf9dcd96b0f19e6d62c6ebfac243ac"],["/2019/11/13/多线程/index.html","c0ce179d15c2b497d0bc46592a8b089b"],["/2019/11/14/多进程/index.html","78c569368c09a916afbebd821078c308"],["/2019/11/15/python类的私有属性和私有方法/index.html","a59c38c42cc3af21be6eb489a92f1cab"],["/2019/11/16/协程/index.html","e33f0b9fc6e060e2655db5bfaf1bfd26"],["/2019/11/16/进程,线程,协程对比/index.html","5e79158bb52454851e5dfe3971659066"],["/2019/11/17/GIL锁/index.html","4693ab9b02823ab76a7bb5bfc45b9229"],["/2019/11/17/闭包和装饰器/index.html","8c88e21ee92fc792980683bd6487fc1e"],["/2019/11/19/Python进阶知识点/index.html","02ddcfc68361de8cabda59f9521ed664"],["/2019/11/22/京东全网爬虫/index.html","a1333e6af195e54b15e14d2fbc56faf3"],["/2019/11/23/JavaScript的简介和基本知识/index.html","900f8c45cb521ef25cdf8c646ae8eaba"],["/2019/12/04/README/index.html","2ea1b65a3763a09ba1d045d50870ac21"],["/2019/12/04/java简介/index.html","ae6b26d3f225010940ac2f7b1175f6d9"],["/2019/12/11/java基本知识/index.html","85eead3c73d62faba30ac837b5857f4f"],["/2019/12/16/java面向对象/index.html","ad1561e396eb99bfe383f74345169f09"],["/about/index.html","1cf1d7f546a7eb06caf4eec41b0f69c9"],["/archives/2019/06/index.html","823ba09d3297fce2e54361ebc262ee89"],["/archives/2019/07/index.html","0cfb3374dbd421f99503761cdbe08d55"],["/archives/2019/08/index.html","327ccc9854b36edb3c49fcf6267b52d3"],["/archives/2019/09/index.html","4d24499bb990c9f0908f50d8662bc890"],["/archives/2019/10/index.html","553f67f7e17f5bd554ee99f6002fa0a6"],["/archives/2019/11/index.html","edac3b36ca3365f94275467eeac7568f"],["/archives/2019/12/index.html","f0304a9fa6dd8a570e70bab7685bec18"],["/archives/2019/index.html","2e11bfab818af2c219fd29fbe583fa4b"],["/archives/2019/page/2/index.html","2ba3fca0140e507d6ed11e3c433d032c"],["/archives/2019/page/3/index.html","4c572237920b02a73152dc5370ef0e8b"],["/archives/2019/page/4/index.html","bf28707f832e04cfc6c5034d1ee0f5fd"],["/archives/index.html","321b1417aa74ffbdebb87bbc1d6335d4"],["/archives/page/2/index.html","5808666491d494866ffa55aa1e0b9409"],["/archives/page/3/index.html","c54d93975e27e4c22898c6034c75322d"],["/archives/page/4/index.html","d00b55c4e4673cd377e5f831c1ae896e"],["/categories/C语言编程知识/index.html","9eed1adabb37eb48e320ad1c914139b8"],["/categories/Hadoop/index.html","96ca2470ecdf40a09964c069b67488d2"],["/categories/JavaScript/index.html","cce53d9e86628df35a900542efbadfac"],["/categories/Java学习/index.html","ef8d28d4490de77ce157b0768a990203"],["/categories/Linux/index.html","6f346ddc0c24b0166e1b989abb68b8b0"],["/categories/Linux/常用命令/index.html","df3cfd9872d89557ba2ab9e7191fcb28"],["/categories/Python编程/index.html","477c0337107921d4a5a6386226d5a205"],["/categories/Python编程/page/2/index.html","f6caf9142db8b572e01d6127f8b4dedf"],["/categories/git/index.html","18aacc2eef68b26c088769db78072b25"],["/categories/index.html","fc73c72faa8e461af5aa54ec8bd35e06"],["/categories/python数据挖掘/index.html","ba2919429cd502f4aa528e44ab20d954"],["/categories/python爬虫/index.html","ab733b3e472faa6b43c0008509ba4b0f"],["/categories/python的web框架/index.html","9623feb0d4b3c494d989b5e4cfa25d5a"],["/categories/个人随感/index.html","7ced685779fa473a708e98ddb781ff36"],["/categories/数据可视化/index.html","4e5aa892cf397953e4ba1e16e3290e23"],["/categories/正则表达式/index.html","5abb1440c22818f3d0257571d18965e3"],["/categories/算法/index.html","17cfb0a615724998458859ddd0e78c51"],["/categories/算法/五大经典排序/index.html","8a41bf8d774ccbd9d335f140de3639bb"],["/categories/统计学和概率论/index.html","e87f0d36015e24908c8d072535beca47"],["/categories/网站知识/index.html","edb4e27b08f31bd8846e53773df36f49"],["/categories/计算机组成原理/index.html","10c9cd1343e9b8b51a1f76114632606e"],["/categories/面试经历/index.html","c76319285656671b6d0c938b8f5546ff"],["/css/main.css","538750cf726ebc76c840043b75febcb0"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","9d990c3e09870167aa773fcfdc690e56"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","93c9482cf9d4de85deb9fb6225fd81e9"],["/page/3/index.html","e25e9ea773207715bc05a206726ed36f"],["/page/4/index.html","993bbc40f583067c16c10805e4bd371c"],["/sw-register.js","63a2253ea60cb0e0d0cb6212f46a5468"],["/tags/Django/index.html","7ab6752d44515b288f833699c8dc04d7"],["/tags/GIL锁/index.html","260aa0e326fa321f4c0b395ae9c7d630"],["/tags/Hadoop介绍/index.html","13a92c1c604247cdd64e6da52991a5b9"],["/tags/Java基本知识点/index.html","b57ed43afd8fda6ace4881b06aa67298"],["/tags/Void-知识点/index.html","417bdfbe3ef369f88fec9cb4f9179bf5"],["/tags/git命令/index.html","dda310aad99af85ba9cb43608e131c6d"],["/tags/index.html","cd34b99eaec62cddf0d7a242b3debd38"],["/tags/js知识/index.html","edfe0c4e9f05581810ed8ec3c4d9d700"],["/tags/linux命令/index.html","dd6dc9fe43a13a961773c450d0c8ab5c"],["/tags/pandas函数/index.html","984475896ff9defa3fcc3e5290e5b81a"],["/tags/python编译器/index.html","e7c2d7571fd6b9cd33083a31055707be"],["/tags/scrapy框架/index.html","73cea4b5689633459b22db2d9f70e561"],["/tags/协程知识/index.html","c1abe4f5abedc58af2b6a08fb3ae69b5"],["/tags/基本知识点/index.html","d3def509ba68adc05c22db1c915416e0"],["/tags/扩展知识/index.html","7631b7ae188e9498a9b629750fdb4c0f"],["/tags/排序算法/index.html","d6eef3b1bf3a1fb8b862026ce9aa603f"],["/tags/数学知识/index.html","076f8cdd72e5f0b2d3fbfa0aa9a793ab"],["/tags/数据可视化概念/index.html","edbc5b73f1e203a67cc01a98d36cc55d"],["/tags/正则/index.html","9b07b2fe046e4fbf87e386eed1da83da"],["/tags/爬虫实践/index.html","4c663572951d67ab4f256394770b43cc"],["/tags/线程概念/index.html","94d2b9d7c48b35fb4f02c46e04af231e"],["/tags/网站的基本概念/index.html","6a3c26cb4fcf09a5cef0258a56afa9db"],["/tags/网络编程/index.html","960ac195a9b4cb3954c79dc7e98a85e2"],["/tags/装饰器/index.html","b337a6ac1d687ec7283f525209c7005e"],["/tags/计算机知识/index.html","d0245598d75a232c89e9197fa6736cac"],["/tags/语音识别/index.html","1019c6a904e1d326e41cab8df48136d2"],["/tags/进程-线程-协程总结/index.html","2a2093ccce38b437a0fc688dedec3d69"],["/tags/进程概念/index.html","8572c80984409dc8dfd2833a0e94ee53"],["/tags/进阶知识点/index.html","d9a70278579e65be465a9f7d33a1b8c8"],["/tags/面向对象编程/index.html","b80f4a8c7d1831ab2e64601063a33dae"],["/tags/面试总结/index.html","47f7a4abf250098a2dd57009c4b3f3b4"]];
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

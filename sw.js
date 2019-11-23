/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","45ae503e1f5855287deab714fe442d73"],["/2019/06/26/four/index.html","b577a986cfc68efde0eb43da9108c95f"],["/2019/06/26/three/index.html","94e50122b6cd5ce88f2ddc27181916c4"],["/2019/06/28/five/index.html","8ed1dc5a3afc636b2731c1d9afedfb0d"],["/2019/06/29/six/index.html","71620b0b8616556d6a47f8e51237b4b1"],["/2019/07/06/serven/index.html","bbaab8de25c143009795bec3a0c044b9"],["/2019/07/11/数据可视化笔记/index.html","41a76644a39b2225fb844a9ce0dcd4a9"],["/2019/07/12/语音识别/index.html","41dee6bcff87500fb08e447e64614e4c"],["/2019/07/14/hadoop基本概念介绍/index.html","e7f3dcf14d9475020d81a63ea7fcd6e5"],["/2019/07/14/数据科学笔记/index.html","af192d5646d2e21fb83d2f014862204f"],["/2019/07/22/python爬虫/index.html","2dae73021b877600b3e982463f643f73"],["/2019/08/25/pandas函数/index.html","df6f5a55dbb3ac9ca2594f4300c58bd9"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","40df0558cf4529c0b74e03baf665eb41"],["/2019/09/30/C 语言中 void 详解及应用/index.html","6691f8f767c4a4c8c2b2d13799ebbfc1"],["/2019/09/30/第一次面试总结/index.html","f84c2aedde70910bcbeaa3e758e959b0"],["/2019/10/07/django之url规则/index.html","00c97a39c3c5507d451a2feab6e5da3e"],["/2019/10/07/django配置初启/index.html","8c285617a1df3f0df583d8d5e97e88c5"],["/2019/10/13/C语言笔记1/index.html","13622c408799b3ddca2b4c7fddc67169"],["/2019/10/13/C语言笔记2/index.html","651e519060e52d576fc5640003efbb8e"],["/2019/10/19/C语言打包技艺/index.html","32271dfeba11361e13c0379c10b8203b"],["/2019/10/22/c语言笔记3/index.html","ea2b8a0a9c184d4a3d959a50712b9f7b"],["/2019/10/27/IP代理池/index.html","49ee4356e44a4cf79d7cfab97f50338c"],["/2019/10/28/git命令/index.html","61f8f476f9683caaddd14c1bb9d73aed"],["/2019/10/31/斗鱼弹幕抓取/index.html","6dbed433b33119dcebf8850bc5009c5b"],["/2019/11/13/多线程/index.html","c245d53940854f55fc1d23322e77eb4c"],["/2019/11/14/多进程/index.html","26ce20abdba822ef3dfdd88214b8a90a"],["/2019/11/15/python类的私有属性和私有方法/index.html","0d3d2189651c4681700a65b99e12f22f"],["/2019/11/16/协程/index.html","136b65ac178e284271dc51f2388962d9"],["/2019/11/16/进程,线程,协程对比/index.html","2d0ebd31ef287eaf4331ee7702043733"],["/2019/11/17/GIL锁/index.html","9d4cf6ce70671b863bd19758678712a6"],["/2019/11/17/闭包和装饰器/index.html","0cdd64e0326ab9bdc2bc72eeca281f5c"],["/2019/11/19/Python进阶知识点/index.html","98ea7d0709f3175f72229d4e4ca1dbda"],["/2019/11/22/京东全网爬虫/index.html","c0079e8a29d2d68eb33a3b011e770518"],["/2019/11/23/JavaScript的简介和基本知识/index.html","015c00541c102ae894ebe7628669c31a"],["/about/index.html","83db0c1f019098ea52bd5b8a52d510f4"],["/archives/2019/06/index.html","2983d7981499b91af926027521cb05db"],["/archives/2019/07/index.html","863a4fe376518ae64970e9eb0df49c58"],["/archives/2019/08/index.html","b0768d2a1cb733c7bcaa6ef981db9d7d"],["/archives/2019/09/index.html","e487097bcc7ae007d0f82cc19a0c1737"],["/archives/2019/10/index.html","7fda872f090282370d9c027017264fee"],["/archives/2019/11/index.html","c1d2bdcf5b89de74dbe527ae6d544e1d"],["/archives/2019/index.html","9336ef7fd90ebaba56dbf9a45d39436b"],["/archives/2019/page/2/index.html","e7d712102485925d3ba8b31088542d88"],["/archives/2019/page/3/index.html","63a30e1c6ac5ce1e9ab2aa47db34f23a"],["/archives/2019/page/4/index.html","b41cf884a644e7dd4dc872ee72466c4a"],["/archives/index.html","244694b7daa529b02ba2542f188d399a"],["/archives/page/2/index.html","bea4eb56379ab76bf914ab43642459d4"],["/archives/page/3/index.html","065d5573c41e51ae6739c54d3a6e6962"],["/archives/page/4/index.html","d39f9b3e5cca91c6fb89e3f9b01e6d75"],["/categories/C语言编程知识/index.html","fe0067c58376d365ebe13dd7ea0622d6"],["/categories/Hadoop/index.html","58d543eeea7f44a9f3734ff50a8af481"],["/categories/JavaScript/index.html","2b3c8f6bb100ee6e158309937bb80552"],["/categories/Linux/index.html","8d96896572e46c18195fc666678dde6f"],["/categories/Linux/常用命令/index.html","15764801bc7679e987c95cf98771128a"],["/categories/Python/index.html","62d2893e90655db7da3d3f946e38b2e5"],["/categories/Python/编译器介绍/index.html","fe6350b14b45d8b2e8c7c35e4eb686f1"],["/categories/Python编程/index.html","51b51a763138f5022aa1f3b20f636687"],["/categories/git/index.html","a4bc8dceb19b09043238893ff6d79448"],["/categories/index.html","39c7c655f6fd4bdfaec68ef6088c0feb"],["/categories/python数据挖掘/index.html","ee081d11883b84a4f91648755318ee7e"],["/categories/python爬虫/index.html","743e2c37c29d510963d0b5926eb78581"],["/categories/python的web框架/index.html","6f9f4aba0316c872ecc721cbe5f174ec"],["/categories/test/index.html","751ed7e09b6f46e0d652245c45153bdb"],["/categories/数据可视化/index.html","b1acef1f2200626d959d920aa656c3b2"],["/categories/正则表达式/index.html","a5256ae809cf6a6d8689c1101696534c"],["/categories/算法/index.html","4352d3382d7f42700b6e90f73ac7b2a6"],["/categories/算法/五大经典排序/index.html","c3408283c4dc0e1df2afaf1e8a626aba"],["/categories/统计学和概率论/index.html","a6c47edc6ed1eb0c1cead885b2e9cb80"],["/categories/网站知识/index.html","5956eae9441c6222ab1205b781401747"],["/categories/计算机组成原理/index.html","f28ee1353f1759bc173d952459662b75"],["/categories/面试经历/index.html","e35f10a666cac43c0a3afeb1519ae554"],["/css/main.css","9330d4fdb166990442aaba36941414ef"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","c73e29a780854165d879416460a69b21"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","73c546b6cf8d329446b7a1e330fccce5"],["/page/3/index.html","c9d183566b7e6989083490e07f248bef"],["/page/4/index.html","bcf3ff0ccaa8d82c63606664bdcb79ad"],["/sw-register.js","5beca5a3de73f2230d464eec63016477"],["/tags/Django/index.html","823870c4975c1679d5612af8ed6e2744"],["/tags/GIL锁/index.html","9b77ae156c78ec518932037b91308326"],["/tags/Hadoop介绍/index.html","151e9b81a573171ecf5b656999e17886"],["/tags/Void-知识点/index.html","86f05818a01c187d27ff2284b6d189af"],["/tags/git命令/index.html","a37f492036dbe2b4c8463b76ee04ec8d"],["/tags/index.html","8a5f54822a9f168101f449d2745b85b0"],["/tags/js知识/index.html","6982592d5c75a1ae08064599a0b12f1c"],["/tags/linux命令/index.html","c328d8387cc58a9a7bc19c9ae40b4944"],["/tags/pandas函数/index.html","1e7bec82aa8bc68cdec8ca87ddc01ec1"],["/tags/python编译器/index.html","50d49c795430c1b9c24ff88b84f27564"],["/tags/scrapy框架/index.html","532c98847c02f371d989c55ac0275bdf"],["/tags/协程知识/index.html","053a82f895177301e86d74f2b9e3133b"],["/tags/基本知识点/index.html","b3327a80e3f095f72e3e36e23514157e"],["/tags/扩展知识/index.html","08493d7290bba81668811d6a465a700f"],["/tags/排序算法/index.html","3c1e77c28e2546b06306c83dc4bf9553"],["/tags/数学知识/index.html","80906cdcc23588878c7d6419158d6af6"],["/tags/数据可视化概念/index.html","3aa58d76fe0bf3b23a1ef0cdb2e9e5dd"],["/tags/正则/index.html","47aa797e3a5962e41431f050c59f7b3e"],["/tags/测试文件/index.html","2042c46b2778ada67176437cd8c6cc9a"],["/tags/爬虫实践/index.html","6bbee79a6321dd94623427fc3e1c2f74"],["/tags/线程概念/index.html","c067d89430a83d6a8a266db181cc545d"],["/tags/网站的基本概念/index.html","7e9839d5ea7d47766169aaace83b95fb"],["/tags/网络编程/index.html","bdf1bea35410016a0b62edbc211767b4"],["/tags/装饰器/index.html","af514e4baaf40c2139ec16fecb82969b"],["/tags/计算机知识/index.html","ab59f2bdc43f6ece91c8613fe021fd28"],["/tags/语音识别/index.html","421038eeecef39a9dd3ec89fb6ee79fd"],["/tags/进程-线程-协程总结/index.html","28300df07b28268ae2ac5d90f2d8d69a"],["/tags/进程概念/index.html","2fd5c6f2b863b0e9aa698cac75fceeca"],["/tags/进阶知识点/index.html","009ab0e817683e317d4359f2cf53b470"],["/tags/面向对象编程/index.html","c5e86ccef1012ff2acd5fae1cd0d8608"],["/tags/面试总结/index.html","36aeb350753f4ee497c649f07b232d6b"]];
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

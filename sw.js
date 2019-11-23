/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","6feaebf53fc5af093841c5017f323da2"],["/2019/06/26/four/index.html","b56b6f7d57c0ab0563cff73c8ea555f5"],["/2019/06/26/three/index.html","ae4c936174848c94c49ea57d5262f62f"],["/2019/06/28/five/index.html","e0009d7a06a097a02c502d5058a2a421"],["/2019/06/29/six/index.html","e9fb6b4b0ed87ac64724f97436020481"],["/2019/07/06/serven/index.html","4da62c394844e5ff5a64cfed1121242c"],["/2019/07/11/数据可视化笔记/index.html","2dbadd35835ce34686c5d493c344df4f"],["/2019/07/12/语音识别/index.html","3bca94829e86b9e8836342a3727718da"],["/2019/07/14/hadoop基本概念介绍/index.html","43ab868a411d8734d040d01db37d89eb"],["/2019/07/14/数据科学笔记/index.html","22f8e4638a7d687bdebb43deabcad104"],["/2019/07/22/python爬虫/index.html","34b115603d5a41222fc37fde555ef872"],["/2019/08/25/pandas函数/index.html","05c30a57100397edfda037ade0d1e402"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","26d017045d13bc622ee8905190db1b4c"],["/2019/09/30/C 语言中 void 详解及应用/index.html","0d6664c34c745461121626459f2c1d63"],["/2019/09/30/第一次面试总结/index.html","6dcb2e6ebd78654454924f41c19c444a"],["/2019/10/07/django之url规则/index.html","4816dbc2d2c6ba50b89f8ba77af57d62"],["/2019/10/07/django配置初启/index.html","eb5d43f5fb6bb0e1f8d1c255dbf30355"],["/2019/10/13/C语言笔记1/index.html","855cead94ea6ed434252bef20151ed4c"],["/2019/10/13/C语言笔记2/index.html","a10e9d32ffc255f76c5ae609003748db"],["/2019/10/19/C语言打包技艺/index.html","94f3221f0f74361e14095fbde349541d"],["/2019/10/22/c语言笔记3/index.html","c525abed94b00739cd959257e95c4152"],["/2019/10/27/IP代理池/index.html","55f8044111e5905ed8facbfc9e272084"],["/2019/10/28/git命令/index.html","8531862b6eb655b2e006da2f457836e5"],["/2019/10/31/斗鱼弹幕抓取/index.html","b08156cbf07ba50e39bd5c42058d4658"],["/2019/11/13/多线程/index.html","374106d87d5acd21772a015588b01b18"],["/2019/11/14/多进程/index.html","0a86f037a134b5ac4bcff708c6d4b1c7"],["/2019/11/15/python类的私有属性和私有方法/index.html","34bc5827692d41f74089640e9f48aed0"],["/2019/11/16/协程/index.html","b70e3c453cc42ad385402d55bbdb0892"],["/2019/11/16/进程,线程,协程对比/index.html","3e62668291ff1e7e8429a159b0784bed"],["/2019/11/17/GIL锁/index.html","7c7e7fe0e263bacf942600b971522a42"],["/2019/11/17/闭包和装饰器/index.html","69acde881093af8491cb49102ddc83ed"],["/2019/11/19/Python进阶知识点/index.html","2b6bca509663e78e87f2f803e86fdebc"],["/2019/11/22/京东全网爬虫/index.html","2176544033630c4b08eb6c3b64a005dd"],["/2019/11/23/JavaScript的简介和基本知识/index.html","b1c67a4472ddd6250bb99d9f50b9e1a8"],["/about/index.html","1b35fcf25cf550ff5756dfbbc9f549fb"],["/archives/2019/06/index.html","a4f54fbcb0113f487c87fb770e16ebe1"],["/archives/2019/07/index.html","0f136d87f1dcffbe720a79d28f7edfda"],["/archives/2019/08/index.html","6d049679af5e1536f23f235472438ce8"],["/archives/2019/09/index.html","882b9a55e7f247727e4e6e34db7392fa"],["/archives/2019/10/index.html","6799a4bff36cbaf76839e7a0d345bb0c"],["/archives/2019/11/index.html","48b77eb32c0e67225e35eaca6b8f2b88"],["/archives/2019/index.html","b7b854f64b4fe445b9987c6d9defe5de"],["/archives/2019/page/2/index.html","49d0d530e5a66771941a785376feb717"],["/archives/2019/page/3/index.html","c2ea08970d292ab5f446ad72c213ed2e"],["/archives/2019/page/4/index.html","c4ff5cd6841c5cd68f0f3c8e695f51ae"],["/archives/index.html","98ae3b5e6e4b0f3b691176cbec4d2a8d"],["/archives/page/2/index.html","462d25f71ac5ca30ef2c2b3046c2e7a7"],["/archives/page/3/index.html","ace4d0200b5f7e9ccf1f09dc9ebe2772"],["/archives/page/4/index.html","4ce11149664df21b1536c651e4789c95"],["/categories/C语言编程知识/index.html","39774c15221cb57d98e8a666f0fb41c0"],["/categories/Hadoop/index.html","bea6449ae74946762afe291bdc1c2b90"],["/categories/JavaScript/index.html","4231447751721b24d37d5777801467bc"],["/categories/Linux/index.html","33981be7288f6a96755fbf0ed51b10ee"],["/categories/Linux/常用命令/index.html","436e5df6a907b24c47cba2d08cb12e20"],["/categories/Python/index.html","813a2660d1b0b4a77851b53abfc5514c"],["/categories/Python/编译器介绍/index.html","069169a5b4d915c3f1efd422faabf03d"],["/categories/Python编程/index.html","9deb6cbdad612a3577627cd931770ca1"],["/categories/git/index.html","c45eca6fbf54c625cf4b873a001be7ff"],["/categories/index.html","aa63edb4c525cd4afdc325071130f028"],["/categories/python数据挖掘/index.html","974ca947608b08c53a3a7743f2c71f77"],["/categories/python爬虫/index.html","9450981d98cb13a8313e269ffb6b8b7b"],["/categories/python的web框架/index.html","c217326cc9e5affd05296b864daba59e"],["/categories/test/index.html","6d1c1736ce8672e62fe27a2f837a9f33"],["/categories/数据可视化/index.html","2c806d57d3a4c83116d4c5724533e5ed"],["/categories/正则表达式/index.html","13a180c487165f2e0d4806060d1cd234"],["/categories/算法/index.html","5eeb94bd6917ab45fd312aba42221857"],["/categories/算法/五大经典排序/index.html","16efb0f83e84576ca8561350af2255c1"],["/categories/统计学和概率论/index.html","31f4cd2266ab814a50d40cb448375db5"],["/categories/网站知识/index.html","66137c59a02595121559497c8ede7c00"],["/categories/计算机组成原理/index.html","0f1d27ef4b91d7004f13ff187246968a"],["/categories/面试经历/index.html","037a3163c81e6e036a8bc82448b4812f"],["/css/main.css","8f21fe3da816ae151b8f7581e0adb945"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","909b6f2352c9e17a34ebec220eff6193"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8833a167134fdf19a686d8e96e0fec64"],["/page/3/index.html","347a25a85992a5c1efb6c77529bba470"],["/page/4/index.html","6ddee850799a1fe724a7d43c3991edb3"],["/sw-register.js","ef34ca10ddf0096b32d087384e9ab503"],["/tags/Django/index.html","30a7b45cd9e0baef7618f0e6258cd047"],["/tags/GIL锁/index.html","f17fcbaf9b1d4ccf82dd252b397dfc91"],["/tags/Hadoop介绍/index.html","f51ec895a22712d37e8a609b04935bc4"],["/tags/Void-知识点/index.html","536af52416fdcd94af0125f7903fc102"],["/tags/git命令/index.html","049baca8b9010c25e2e648bd015120b3"],["/tags/index.html","29a68c95e9b1d2738ccbbeac2a0868ee"],["/tags/js知识/index.html","9f5bf973d5f90de3310ac346d09d09fd"],["/tags/linux命令/index.html","2482006f3b4a8f7a364288fc257f94bd"],["/tags/pandas函数/index.html","777090446e24b9a9f263a70c76a9ae49"],["/tags/python编译器/index.html","56c9c3ed1a39d2f3d5e68bb0f29a8c1b"],["/tags/scrapy框架/index.html","3fed1b86be609c804d94748a39b5266d"],["/tags/协程知识/index.html","422de7a7f9d352990ea559926c71efc3"],["/tags/基本知识点/index.html","9507876ef469904184f848af81185a64"],["/tags/扩展知识/index.html","d5fa2a74070482af9ab472dbc0ae8514"],["/tags/排序算法/index.html","d4aeab86461cfa8e1f0b7d7e2dea7ef7"],["/tags/数学知识/index.html","b31fbd1b455d9cb7711b1a64b9abc09f"],["/tags/数据可视化概念/index.html","dae7adfa40fb067043037970c15cc06f"],["/tags/正则/index.html","7b55cdb7721cc848958d1db7407a2a22"],["/tags/测试文件/index.html","afa0eb9f1e81d1398ca6444cca004e09"],["/tags/爬虫实践/index.html","552e69a4966cb21d16266a3863b4b907"],["/tags/线程概念/index.html","1f733f4824ad05133234126ef40e8149"],["/tags/网站的基本概念/index.html","df189545304b964d187adfa59b2b315a"],["/tags/网络编程/index.html","e1f6128113b64a8b712739e7d1799c6b"],["/tags/装饰器/index.html","ee829f8e151e5ba7055bc57045e89580"],["/tags/计算机知识/index.html","92a3e079ec6fe6a39980ddfa6f697836"],["/tags/语音识别/index.html","b9bcb45dcc00e646e6811546a5e384b3"],["/tags/进程-线程-协程总结/index.html","fd41616b73d961f787afaa760ae35860"],["/tags/进程概念/index.html","0fb5a3b74b4d89310d1f3f04536cd4c2"],["/tags/进阶知识点/index.html","ba016e794679d9e50cf2fc673fae44b8"],["/tags/面向对象编程/index.html","e648e9dd0d40608e8c97edca34e4a4cb"],["/tags/面试总结/index.html","d17c190fd11a9f1d316a82e074f3237e"]];
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

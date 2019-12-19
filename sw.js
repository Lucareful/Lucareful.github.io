/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","1f8750e0859e4e45b895d1ae23f7f802"],["/2019/06/26/four/index.html","efac07a98f8f9005a0e810c7cf81d339"],["/2019/06/26/three/index.html","0e619f3f4438066ffc448c00ee545074"],["/2019/06/29/six/index.html","39e58542d7549b98bf1251fdf49e9e88"],["/2019/07/06/serven/index.html","fb351480cbab6127cd1d3bc018877b12"],["/2019/07/11/数据可视化笔记/index.html","4885f60e961179942a6038f600002c41"],["/2019/07/12/语音识别/index.html","518e0bf27e8564d345a74bd520282067"],["/2019/07/14/hadoop基本概念介绍/index.html","6b959653a4f170ec161027d3a35ceaf1"],["/2019/07/14/数据科学笔记/index.html","19e74e0a1393dfaa393b3f73a9d0822a"],["/2019/07/22/python爬虫/index.html","12653320e68567b958a588a284dac70d"],["/2019/08/25/pandas函数/index.html","80fb6ad5c29b18cda4174b56ea812622"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","69827c478a05f32dff0c06e9b99df5de"],["/2019/09/30/C 语言中 void 详解及应用/index.html","bead4bd7598ef196a67b7e0447a7b605"],["/2019/09/30/第一次面试总结/index.html","86f39ededd62c5a4cced302504408884"],["/2019/10/07/django之url规则/index.html","d84f6c69a2bf289441db182ef7589e32"],["/2019/10/07/django配置初启/index.html","2414fc2157035164d0fba578fdaf1bb7"],["/2019/10/13/C语言笔记1/index.html","2eb28bd205d3ececf3a96b8f4b8d667c"],["/2019/10/13/C语言笔记2/index.html","ed3bcf21996cf40dff22c36fec6c382b"],["/2019/10/19/C语言打包技艺/index.html","df667cef8e7a62e4b79e44cd0a72f07b"],["/2019/10/22/c语言笔记3/index.html","f4ef274e0252dbfbade6b1d38d4d148a"],["/2019/10/27/IP代理池/index.html","7e91052deda7627ace219befdbfaeeed"],["/2019/10/28/git命令/index.html","2ec13ae3209b4a909d8da4e470c151ac"],["/2019/10/31/斗鱼弹幕抓取/index.html","4af663aa4fc55b16c7bfbf73f7622891"],["/2019/11/13/多线程/index.html","e2054dffa559d7e15aad3bc1f44fc49b"],["/2019/11/14/多进程/index.html","075e54fed8a29d3d257258e1f785fd3d"],["/2019/11/15/python类的私有属性和私有方法/index.html","1ce1ab4e3ca6a81515a2e2bc654cd57f"],["/2019/11/16/协程/index.html","273be3834a08ee096a66e4f660b694a3"],["/2019/11/16/进程,线程,协程对比/index.html","2b2a557955bc96721d1ed2ee546a52ad"],["/2019/11/17/GIL锁/index.html","263d58e72a65edb60832ed66675ef0d6"],["/2019/11/17/闭包和装饰器/index.html","67c508394388a788ceab2e1000ce85e4"],["/2019/11/19/Python进阶知识点/index.html","c471e5b2fda7f6d4da5d66e785767f8f"],["/2019/11/22/京东全网爬虫/index.html","0516a7ca1e57aa35ce749e28b3d6ee6a"],["/2019/11/23/JavaScript的简介和基本知识/index.html","de5473608040aa29d04b82b59e941e53"],["/2019/12/04/README/index.html","def14ecd0e6660080a1e2ea690a5a9a7"],["/2019/12/04/java简介/index.html","022b0ffd74a1cc1e584ba83c51278490"],["/2019/12/11/java基本知识/index.html","13ddf5265063148ac27d65600ff6b452"],["/2019/12/17/Java面向对象/index.html","a410ab39958de67b6b373fe73cb9a5bb"],["/2019/12/19/面试总结/index.html","c2e37d9280cc3f07b3e32fb7d137b8ae"],["/about/index.html","45350d36684ae85178e69f780fa373b0"],["/archives/2019/06/index.html","eaa711a29dc635db585f092ae5ae9034"],["/archives/2019/07/index.html","ac416038907b8a4f368a16686e5cebdb"],["/archives/2019/08/index.html","5fab9b27552894f31299b4233654d33d"],["/archives/2019/09/index.html","d9b0acd5e2481eb56f5700f7e49e1292"],["/archives/2019/10/index.html","83ecb8e5f5368a8e0afeb77f13539b6e"],["/archives/2019/11/index.html","e47822176f6322dde50654da4c996a72"],["/archives/2019/12/index.html","3bf9e29700d87bf76acb2e6ef37da2ba"],["/archives/2019/index.html","7fdeb2d763d11d1dab7480a0364c6ba7"],["/archives/2019/page/2/index.html","92f2be9f20994e320bc4402568230e47"],["/archives/2019/page/3/index.html","cdc6bab69882f03e468f2ea01b6802d9"],["/archives/2019/page/4/index.html","c3d16c6c2757cd5afa28165ea2d69fca"],["/archives/index.html","416af8cf19fd319c017349a7d03b03aa"],["/archives/page/2/index.html","88dae2a95907184e06bf09f6c1242db0"],["/archives/page/3/index.html","706dba0143ed9423cfb6d4f3439c7dd5"],["/archives/page/4/index.html","94c504bb650b0902302886cc239f8b9f"],["/categories/C语言编程知识/index.html","107bd6fa911847729b3fc3a685d19130"],["/categories/Hadoop/index.html","392014f8c8410397686ade09e473ac9c"],["/categories/JavaScript/index.html","643ddc1ac925c2ab6e79f359c0b7d555"],["/categories/Java学习/index.html","b6efef6443e7b49944ab2a0c7c377b71"],["/categories/Linux/index.html","b96c585fa9f0b5165748d50710568771"],["/categories/Linux/常用命令/index.html","1883decdcfd4808cb166979a9b34ea5c"],["/categories/git/index.html","49948884f5df171c98f6e86ae79e5dcb"],["/categories/index.html","0166dc9812700459ea81517c6f0d1468"],["/categories/python数据挖掘/index.html","183d7923f94bb49fec7ca9b2a6ee2c29"],["/categories/python爬虫/index.html","28f5a43cc5199c98d6dc38812bb06572"],["/categories/python的web框架/index.html","713a24f7d68b52f919b057ccda06b47d"],["/categories/python编程/index.html","6c1f510500198db0eb63127bf40f99fa"],["/categories/python编程/page/2/index.html","10151fd761c07e55968698c78022e175"],["/categories/个人随感/index.html","8686fc65c628944333ef7c5388e0bba0"],["/categories/数据可视化/index.html","774c864f7b8368bd4545c76fb63d2e46"],["/categories/正则表达式/index.html","c7a8a2bcb2be2cb290bb5054befeeea9"],["/categories/算法/index.html","4498e1f163a0504e1a58f7945fde11f7"],["/categories/算法/五大经典排序/index.html","065b8db2562da74d783c5664da3c4c27"],["/categories/统计学和概率论/index.html","071a1bb672261dfc9cf59b817046d3d9"],["/categories/网站知识/index.html","90a20af6cb9757af4873474985e53237"],["/categories/计算机组成原理/index.html","aafffbca573f53a72e2436a73242af70"],["/categories/面试经历/index.html","37e85697c03d3edb70ef8aa6431ca328"],["/css/main.css","5c31e9a033fcdba98a339e4a894177b9"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","7acb0157f04c11eb507075700b60d07b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","853a63903d8b4c671b0f4c7e72759e5d"],["/page/3/index.html","609f6cf6ace5215a76a08de5de9bed2f"],["/page/4/index.html","4e5deb6a7bc396775190faf07e316eb6"],["/sw-register.js","b846ccd9057221e2614c61ec3895ea3c"],["/tags/Django/index.html","9b384b8659ae6d72b7b9e75da1959b79"],["/tags/GIL锁/index.html","c34c75ec0f0c227e1e79a493e29b08b0"],["/tags/Hadoop介绍/index.html","5b2a4d112728ae61d89f6228d0a28948"],["/tags/Java基本知识点/index.html","4be38cc0f6587c590d9808c7c35d74dc"],["/tags/Void-知识点/index.html","df6228c744f1bdebd0b39e8a7b33fceb"],["/tags/git命令/index.html","aeece1b6397f51b3c003faa12b024879"],["/tags/index.html","2ef7d80aaa6f5be49094a8de65313fb4"],["/tags/js知识/index.html","07f8d6281429bedbee75c22237acd4f8"],["/tags/linux命令/index.html","e732ea67cc5dab98d8c7cb0ca6837991"],["/tags/pandas函数/index.html","c99cb969f967c4536b85dbcdb998e9d3"],["/tags/python编译器/index.html","8bb294fa600ba257da1bfa6f475f8492"],["/tags/scrapy框架/index.html","8811e7c5b2f9cce9bcd1842f8028e7fb"],["/tags/协程知识/index.html","9ddff467f49ce5902224ce19554296a9"],["/tags/基本知识点/index.html","e407ea58f5fb571545d5f58a73cb8e04"],["/tags/扩展知识/index.html","ae3ae079e882a6dabd29e11c99282920"],["/tags/排序算法/index.html","2f1b80e264b984e53d14e477acc3ac32"],["/tags/数学知识/index.html","84b4dc41d050d2df3a1c23ecbe90a774"],["/tags/数据可视化概念/index.html","2b008a90b0692baea7cfa6859cbb94f1"],["/tags/正则/index.html","660e9bdbc56d0c6b4cf8e354870ebf2f"],["/tags/爬虫实践/index.html","dcc7df4a5b95983260f6cc40d8667a9e"],["/tags/线程概念/index.html","32a04cf892b1f3c3eaf7f7d9a0502584"],["/tags/网站的基本概念/index.html","c679abac1a4d3e2281f6785f12eb8ed5"],["/tags/网络编程/index.html","06410beb42112f0a8c039a671c6d6419"],["/tags/装饰器/index.html","11e53a63c76a29bc4d8707b5188d2e6f"],["/tags/计算机知识/index.html","a752d7206cefbda01cedabbbb82f2808"],["/tags/语音识别/index.html","0998169121e774ed33aa7476cade76a9"],["/tags/进程-线程-协程总结/index.html","535a5cb14e19bc05f971cdc1b03ef476"],["/tags/进程概念/index.html","e919043b5a9c123cc385d6862a37e16f"],["/tags/进阶知识点/index.html","990d5198d75047d7e08862dbe4ce0ba0"],["/tags/面向对象编程/index.html","4b2d84e3f245645db730b2a5f031ad6f"],["/tags/面试总结/index.html","6ed4c6edc537637404ff4003e92a69b2"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","54ef21cfe461d5c77096d5355ff83ba8"],["/2019/06/26/four/index.html","fef8ea22926bf3b6ccb3a54453176659"],["/2019/06/26/three/index.html","ea9e6cd5ca361b66465d31bdde60b64d"],["/2019/06/28/five/index.html","bc9156a621a1272e5350e2d205425f93"],["/2019/06/29/six/index.html","bfa300a03760e3170fd6cb64a756791b"],["/2019/07/06/serven/index.html","9a018e1a8ba60dd9edf12976995806e3"],["/2019/07/11/数据可视化笔记/index.html","5ada8fad0c12f04d746f31f3eadf612d"],["/2019/07/12/语音识别/index.html","b69bf1ad45eb28ef20c29ed263f9a57c"],["/2019/07/14/hadoop基本概念介绍/index.html","c867d1f81cfe30012a07a72d59a0a836"],["/2019/07/14/数据科学笔记/index.html","eeabae3c16abe86aba895244e7fec13e"],["/2019/07/22/python爬虫/index.html","cd8ee40618e1668e168b90bd0d6ef996"],["/2019/08/25/pandas函数/index.html","965df79953f4109e0818212fa8dcb89e"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","bbcf5ca7e3217ece7bf47ac6351fbf8e"],["/2019/09/30/C 语言中 void 详解及应用/index.html","8b0e28a3681aede75c069cb0ceb508b8"],["/2019/09/30/第一次面试总结/index.html","1367b895ce5e78120d39f50a49221a53"],["/2019/10/07/django之url规则/index.html","3d7fa4ba445d2e1670c42ad70f3d353a"],["/2019/10/07/django配置初启/index.html","48e3fcd9b60b0b4e2455d17b3bd1f15a"],["/2019/10/13/C语言笔记1/index.html","a88a594396dbdcb7b2b1ac9cd25c4d34"],["/2019/10/13/C语言笔记2/index.html","8e97a837dcf6f4afe00781fffaf53380"],["/2019/10/19/C语言打包技艺/index.html","415f7d10437291fa5fec017c7c0ac818"],["/2019/10/22/c语言笔记3/index.html","b543ecf923bf5d6b1eda2418dd0ead6c"],["/2019/10/27/IP代理池/index.html","cf88c8bd5024942f8dde3517d023cdd7"],["/2019/10/28/git命令/index.html","f559e8377ca1b787e980f782ebf53f09"],["/2019/10/31/斗鱼弹幕抓取/index.html","1eb33803e9d90d0bf31ddce5b2d4fa38"],["/2019/11/13/多线程/index.html","2777119041030e6ab08c39df85f25176"],["/2019/11/14/多进程/index.html","c81992539a9a2f1ad695b24dde195e0f"],["/2019/11/15/python类的私有属性和私有方法/index.html","25a09a71484f6519dafb3e09377a666e"],["/2019/11/16/协程/index.html","b65a848f9dcf4befdb830416e98e2227"],["/2019/11/16/进程,线程,协程对比/index.html","34110994569b32df988ff4b2033b6f11"],["/2019/11/17/GIL锁/index.html","7ba0a10a77932a4193888dee66d8f94d"],["/2019/11/17/闭包和装饰器/index.html","c82e078759fe24d4546be539d76f52d1"],["/about/index.html","4ccaac01df1c0e0e276c3857ffc524c0"],["/archives/2019/06/index.html","d2624630bd2fe6d74ecc0cf99be1612c"],["/archives/2019/07/index.html","9ef7d1b8e4918fdcecdde8a489e884b0"],["/archives/2019/08/index.html","1070d88d5870c958aadc74c0c985bf48"],["/archives/2019/09/index.html","480a08647bbf2a0d91848051550fda19"],["/archives/2019/10/index.html","53610d1abe3fdb861333b11761e867f4"],["/archives/2019/11/index.html","6e654d3177578a33c3df2addcbcb2d67"],["/archives/2019/index.html","6e0e69bace2412fc9c18ebfa5495c6dd"],["/archives/2019/page/2/index.html","262af53b93042fd4ce48aed434260411"],["/archives/2019/page/3/index.html","167ec5fec4932497cf0e41a4267c222b"],["/archives/2019/page/4/index.html","36710be5df78cb0d863f39a453038d16"],["/archives/index.html","0fb0832872619667a74986fc5c34e28a"],["/archives/page/2/index.html","dab29c4ae15d1121ab91704161ffa85b"],["/archives/page/3/index.html","2d968de2c08adc2b6ac6f6820912d081"],["/archives/page/4/index.html","4b9c4efa83525849a8666f00c0dbc1b8"],["/categories/C语言编程知识/index.html","2055b67a22b097e15f6c441a3bb5c106"],["/categories/Hadoop/index.html","973715ee0ea5b7ddd9e726f148907521"],["/categories/Linux/index.html","8f2b6a1ace61c3963f539e6c7d762d91"],["/categories/Linux/常用命令/index.html","c427cbfd9b3da1def7dadaac782ef6ac"],["/categories/Python/index.html","43d25ed33b9f5770d6594c5c0992e412"],["/categories/Python/编译器介绍/index.html","9094a6bbf77f66d192cdb381d8cb77a5"],["/categories/Python编程/index.html","53677e18a867ee6504aea5b27cc99e83"],["/categories/git/index.html","d495caf5a3d1fd6d3ad4196de8a42367"],["/categories/index.html","cce0d22bd5ef8fc6ada9e911317b01ad"],["/categories/python数据挖掘/index.html","aa95a35bb219bcecf9304aa8ff0fe586"],["/categories/python爬虫/index.html","555296fc08800c893a11d4ad98580519"],["/categories/python的web框架/index.html","725ef10ed744ad659f53d7c1d53a702c"],["/categories/test/index.html","706a3ca20a5987d1ab8472b0b44ad5e1"],["/categories/数据可视化/index.html","4b004a155d62c698af65fd80ebb9f538"],["/categories/正则表达式/index.html","8cea678b9543fee06fe279daca88fbf0"],["/categories/算法/index.html","c04d45ddbd3009a051e8819e08700cf8"],["/categories/算法/五大经典排序/index.html","7fe5419fcd117e946dc411fdc9b33349"],["/categories/统计学和概率论/index.html","2c29ed11db80ed2b6af97d6301d62907"],["/categories/网站知识/index.html","eaab69dcd230683cf312999121772586"],["/categories/计算机组成原理/index.html","3e89f2f4251203f658fcee7da73b7575"],["/categories/面试经历/index.html","2da31f7f0789e9218031dfff4a350a36"],["/css/main.css","fb01c757da7d00c12c97ddc5c7542182"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","ddeda8af4f504a21b0f44962cf2bd337"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","08eef1d5c4d79dcbf6d171718ae9e185"],["/page/3/index.html","e12750237bb8f13d64a40c78ee7d0ee9"],["/page/4/index.html","d4b0c801e13dce8bf01c2ba6b2a5eb6f"],["/sw-register.js","2134c879524f9196c3538d4630fb6489"],["/tags/Django/index.html","0d09682a953b382bc53b54be602d3358"],["/tags/GIL锁/index.html","905aa67a5a516f1f57f3db394fdbf710"],["/tags/Hadoop介绍/index.html","b385d4cb44b58980e63dd9e54524b39f"],["/tags/Void-知识点/index.html","1cb9f37e9220cbebac9a022d26c46581"],["/tags/git命令/index.html","3fffffeb47fa18a93cbc3d1511f2fbab"],["/tags/index.html","c596d7a1bd29e1b052ca7f2df1f648d5"],["/tags/linux命令/index.html","5b228d3a8899fe9aa32812ee075e5a52"],["/tags/pandas函数/index.html","c85082cb1e2327f57718cda257a19a47"],["/tags/python编译器/index.html","c532f6ea346f984e9c1a8cc61e323c00"],["/tags/协程知识/index.html","cb1b328ed8475f86851a2b4b3c1dade8"],["/tags/基本知识点/index.html","90b19110d419f5472598ff763ee5a6f4"],["/tags/扩展知识/index.html","f2eca2155e5be79a77262c785d45afa9"],["/tags/排序算法/index.html","f04495938e79c30dec6dd82e3e330ebd"],["/tags/数学知识/index.html","c5f559793406a7f8bbd292cd7eaa0dc5"],["/tags/数据可视化概念/index.html","507bc06b3ef518acee614d235a1359b5"],["/tags/正则/index.html","60d3d06daf1571357261236accd6300c"],["/tags/测试文件/index.html","2e749766b426319f99b3778a8d01d026"],["/tags/爬虫实践/index.html","871e70bf0a73ae16010308267cdb6ed8"],["/tags/线程概念/index.html","30e5b2804d32af31e1597605dca6458a"],["/tags/网站的基本概念/index.html","01aef5fcce7562a631f459461f1704e9"],["/tags/网络编程/index.html","59ccc4a3b5fdf4a1614960120ac8379b"],["/tags/装饰器/index.html","47ea44b129a4b7d1b61514ea66285e51"],["/tags/计算机知识/index.html","9b62d5c255c8687b93bc2fc7224ed4c7"],["/tags/语音识别/index.html","18c02b7bfd6e0ad068fb848bcf6c6608"],["/tags/进程-线程-协程总结/index.html","0e1c948d4ec0b337c844ce3e77e0b725"],["/tags/进程概念/index.html","849778c4d41c2ab4e639c9df51bca4bd"],["/tags/面向对象编程/index.html","445cf0b77c609258d1beacdfce25f42d"],["/tags/面试总结/index.html","8a6ac44189c6b54d4776b9538a745f65"]];
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

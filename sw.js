/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","fd8f739ab5748b8bbb04dfa8cf713f5b"],["/2019/06/26/four/index.html","e5e7ee8c6ab395145d03f6b9c7a42d56"],["/2019/06/26/three/index.html","037c6451e02f1358b2a4f5e6518e9c3a"],["/2019/06/28/five/index.html","912d037aa60c91143b8ffa404f28d1b9"],["/2019/06/29/six/index.html","6e0f65bd80430fbed06fd66b2680fe3b"],["/2019/07/06/serven/index.html","90d2a7697fbd3737e5e897ef67a92ce1"],["/2019/07/11/数据可视化笔记/index.html","4dcfaa09813283e0047d259d34816693"],["/2019/07/12/语音识别/index.html","821d89821891f19a00b902550815ca69"],["/2019/07/14/hadoop基本概念介绍/index.html","7eaed93dd83fd1c6b4de5e215fee771c"],["/2019/07/14/数据科学笔记/index.html","4a3294c0c6e35ada86336840af55d8fb"],["/2019/07/22/python爬虫/index.html","43226aecb187b86fd82f550822ebf947"],["/2019/08/25/pandas函数/index.html","9c48731d02823064db69012c3b052eac"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","42b834fdd611202689975773130f7280"],["/2019/09/30/C 语言中 void 详解及应用/index.html","d692e5a2e39847ee085fb65009348498"],["/2019/09/30/第一次面试总结/index.html","8bf0c8cbe2aaf3ce4546f792c3e5166d"],["/2019/10/07/django之url规则/index.html","38083b60a91cffc536dbe851bd2f6a4e"],["/2019/10/07/django配置初启/index.html","c987540dbd0455358ca8d50291d33866"],["/2019/10/13/C语言笔记1/index.html","0c407f4bc750983541115d92b05a8c6b"],["/2019/10/13/C语言笔记2/index.html","78997004c50a477c549e9b0d9458f74e"],["/2019/10/19/C语言打包技艺/index.html","22b038c72ea18a853293b1c8a0f84b7e"],["/2019/10/22/c语言笔记3/index.html","474f9b2191a9092445f9e5bb42da6a50"],["/2019/10/27/IP代理池/index.html","b845c51edc5450e1a830d72ce666d521"],["/2019/10/28/git命令/index.html","ed22da434499996a9d1150d05bfd585c"],["/2019/10/31/斗鱼弹幕抓取/index.html","dc0115a196e883ade7508198c15a9f2a"],["/2019/11/13/多线程/index.html","6ee9ac49dcdfdda25560c33f1d219426"],["/2019/11/14/多进程/index.html","de8872ca91804cce8741ba556f9e1757"],["/2019/11/15/python类的私有属性和私有方法/index.html","77541f3291246f41c37bf6873218260e"],["/2019/11/16/协程/index.html","b0b96073bb56a8b099caed66f4a25eb6"],["/2019/11/16/进程,线程,协程对比/index.html","424b2299e57ce4df34db71a1a7803d5f"],["/2019/11/17/GIL锁/index.html","3420e6746cd594cf3303a0adaa3139f9"],["/2019/11/17/闭包和装饰器/index.html","ab79d658aac0653768f35252601c48c3"],["/2019/11/19/Python进阶知识点/index.html","380fbba263c701e23232fe6507ef6fb8"],["/2019/11/22/京东全网爬虫/index.html","048c8a4e0199bd75874e18dcdb3ee37b"],["/2019/11/23/JavaScript的简介和基本知识/index.html","a66cda9db55795710c01cc8aceb3dd2d"],["/about/index.html","4ff06f453bc256900c3dbacbc2eb11ed"],["/archives/2019/06/index.html","b5581cba21889c89c648ad29e4820c97"],["/archives/2019/07/index.html","0ee80ccd8374971dae55242db661883f"],["/archives/2019/08/index.html","d81dd61fc5ff08e6f86f2ce14a4f9a40"],["/archives/2019/09/index.html","f470b5e69945402c9c26cf0bca22e917"],["/archives/2019/10/index.html","391d66f2755c9363947c6fd344bd76d2"],["/archives/2019/11/index.html","1dc7a74c49ac22faf05cadad3f1ad6c5"],["/archives/2019/index.html","7c593385ce3658e9aa6823a7625078f0"],["/archives/2019/page/2/index.html","bd7fa82899a0bb85e32ecbf210a2ff57"],["/archives/2019/page/3/index.html","c9ffa2daadbafc3bada40b54c3074795"],["/archives/2019/page/4/index.html","5c65a20b9b775078da30204e9624ecd8"],["/archives/index.html","b1b762acb4abc7e6acae531fc9b38a34"],["/archives/page/2/index.html","015e89ac0a5b92635232295e44c1912b"],["/archives/page/3/index.html","a9cfbe8d867001275a35167b9be8937e"],["/archives/page/4/index.html","bcb3f22d580243ea7a643894648da76b"],["/categories/C语言编程知识/index.html","6e5aaf2ce4f4aeeb5ad71f4ba30d86b1"],["/categories/Hadoop/index.html","784df38e50b2e3c151f3abb48ad87e4d"],["/categories/JavaScript/index.html","3402d7dbfd3f65d5df16e2564cad5eb0"],["/categories/Linux/index.html","7b72b8ce4d75535e1906bdea747e8a5d"],["/categories/Linux/常用命令/index.html","b27d0d0293bec03dd56fd8951fa7be61"],["/categories/Python/index.html","4b87fdd1429b2ccbc7269c541b90c80a"],["/categories/Python/编译器介绍/index.html","8b3f6df151f263146693e75d5f33b960"],["/categories/Python编程/index.html","7ac09f7a9938a0e68504e053cbcd3cf2"],["/categories/git/index.html","355ea674ba82cd57c8bba675f6fcb0b2"],["/categories/index.html","d2b11369f786f3eb1834e9f733461f20"],["/categories/python数据挖掘/index.html","30cb0fd71500fd6000d12a6f8817cdbc"],["/categories/python爬虫/index.html","06b36b60595ebc64276a6f830544f09d"],["/categories/python的web框架/index.html","5b719e4ebf801b73a84648fb446f1576"],["/categories/test/index.html","f435902a5b9a92f1465af7fe72d97582"],["/categories/数据可视化/index.html","6ce1c277c2404ac836769eacc4f7a21d"],["/categories/正则表达式/index.html","6d5850fd32699a19175c790f164eafdf"],["/categories/算法/index.html","06b8ebdb3d36f0766ed4bb5602653eed"],["/categories/算法/五大经典排序/index.html","3e28447f2a246b5d5fcb29ceb94b9984"],["/categories/统计学和概率论/index.html","ded4f6476d3e7131a41c366d6365c542"],["/categories/网站知识/index.html","915b6485157e9a87dac30f18a003d327"],["/categories/计算机组成原理/index.html","3d7aeb1e91d5779a7a0acd28f882151b"],["/categories/面试经历/index.html","4e2373b92cabd7a1d8a4fa5ab6fe2a99"],["/css/main.css","36d4b4dc6b34c778a7e0c966b874300c"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","4473e7212e4b3e9623228c21c8da9c7e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","2651f42cbaa38e2e7a09d25162a87263"],["/page/3/index.html","d2758527a5ad28cc69549adf4a6fb0e6"],["/page/4/index.html","8aa42fbe8e70d028113b0e6f80a64aa9"],["/sw-register.js","72b4ec3b4319b1d349eb3651083542bd"],["/tags/Django/index.html","fbd1018dfc9f1e035f7969b440b355ca"],["/tags/GIL锁/index.html","516d916ec4469588bbc7b56685672317"],["/tags/Hadoop介绍/index.html","fdf0971c4b61dd2bc446b489898c48a8"],["/tags/Void-知识点/index.html","7ce9a08f5d1fbc7876e3db2f9fdcc167"],["/tags/git命令/index.html","c6bec33439c7de4da4682abf43673516"],["/tags/index.html","acfaae7a494999678678eb884c8c2b43"],["/tags/js知识/index.html","3e5dd2ef4ed8576153b4560eab447d72"],["/tags/linux命令/index.html","c0e071542dd27353d9a3fe3e52fe7779"],["/tags/pandas函数/index.html","715b9b86e3871b33e1858a43b3817165"],["/tags/python编译器/index.html","ecc09f608fd11368701277550fe53e6d"],["/tags/scrapy框架/index.html","18223f124828ebe34c4222818e27a0fb"],["/tags/协程知识/index.html","3e4fd4d3dbabd7b24fa05f18053d3d99"],["/tags/基本知识点/index.html","0012662a7343500deb385259847719c2"],["/tags/扩展知识/index.html","9bb6f147e309674536c29d919d9a11f9"],["/tags/排序算法/index.html","288b8c7154f1abbe8d5c9e762769e2ad"],["/tags/数学知识/index.html","b59e9f8dd187039880a09f3249533e11"],["/tags/数据可视化概念/index.html","ccbc7ad7138df42f55a30bf713b9f96f"],["/tags/正则/index.html","5b4083288e1c7404ba4c92b1039d7de4"],["/tags/测试文件/index.html","78d2e623f2cb4293391de932d59e289f"],["/tags/爬虫实践/index.html","2847dbe7e33c99b46961117c6387483a"],["/tags/线程概念/index.html","6be521457e83af7d67818dece2aba642"],["/tags/网站的基本概念/index.html","6bac6fe85c79c7ced56f5ad68b563f4d"],["/tags/网络编程/index.html","1d6635d01932a94ef7bbbcdd43202f21"],["/tags/装饰器/index.html","7e3c34c05679d8d614ba67b452a87a92"],["/tags/计算机知识/index.html","2375cc334e9a645597cb802249cacf30"],["/tags/语音识别/index.html","a1d2ce8c471b2868ebb4777a34a1ee8e"],["/tags/进程-线程-协程总结/index.html","db74d2dc8f3f4712c8dd293b9368a7a2"],["/tags/进程概念/index.html","382b543a251e059fba602670762802aa"],["/tags/进阶知识点/index.html","893ff7098dcc3ec3193395494784eeda"],["/tags/面向对象编程/index.html","eb053b944e3e0682719425b8010ed913"],["/tags/面试总结/index.html","1df7e741efa1b15e46581c04ccfbd840"]];
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

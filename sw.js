/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","f942616c1271491710bc007591c1818e"],["/2019/06/26/four/index.html","59b681bba3be1c941461d1034687d4e1"],["/2019/06/26/three/index.html","414504690cef9d9ca83b4916561ef828"],["/2019/06/28/five/index.html","051eaefa37a8a25f07084dbc4bf0a506"],["/2019/06/29/six/index.html","86424f85b321a0ed23c3353681410179"],["/2019/07/06/serven/index.html","9a67ea709b153c15d94e42cd9ad9ec1e"],["/2019/07/11/数据可视化笔记/index.html","357886ad03429558501f3f9990c17787"],["/2019/07/12/语音识别/index.html","76ba999b6f5e2f3e83ef01aa312f88f3"],["/2019/07/14/hadoop基本概念介绍/index.html","4670aed343aabe553731fde393812669"],["/2019/07/14/数据科学笔记/index.html","e028642c711c2a3b890546a88f5be8fa"],["/2019/07/22/python爬虫/index.html","2852d5874803980571e46edd867f2a2e"],["/2019/08/25/pandas函数/index.html","e89e89b155cd07d4e515210c6a944cd2"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","a9254c0c2ed9d571fa30fe091412f140"],["/2019/09/30/C 语言中 void 详解及应用/index.html","6c8046787384f4511893a83e033d0aea"],["/2019/09/30/第一次面试总结/index.html","64e5714f6ffb63358de5c40e6fd5dacf"],["/2019/10/07/django之url规则/index.html","5bdee656bb33c1c67bbf0d1371a26d56"],["/2019/10/07/django配置初启/index.html","513f2f5453c75d7659f0d7312438da4e"],["/2019/10/13/C语言笔记1/index.html","0f51b0be0e5dea1aa3e897dcc9badbcb"],["/2019/10/13/C语言笔记2/index.html","28fb02b201348dad09f88cf8b8d2d4e8"],["/2019/10/19/C语言打包技艺/index.html","981f8aa4f05278c3a623d5cbd7ff919f"],["/2019/10/22/c语言笔记3/index.html","e14b631bb29e598c71642861172bf6d3"],["/2019/10/27/IP代理池/index.html","e138e1db280df7b360bbb1caf420cff4"],["/2019/10/28/git命令/index.html","f23563fadab33e5048d6ec1547c7d827"],["/2019/10/31/斗鱼弹幕抓取/index.html","04a248a461cab59b14760a80a1666f2b"],["/2019/11/13/多线程/index.html","b55390ce30ff2a17ad132cedcb1f99dc"],["/2019/11/14/多进程/index.html","06658bc7454c9842716beb32bcf50d10"],["/2019/11/15/python类的私有属性和私有方法/index.html","99af586359b910045bd6f8be6f481c4e"],["/about/index.html","4436635dbf118e856b33292a720067a0"],["/archives/2019/06/index.html","909676cb3c4a7b5b9abcafcc03a50066"],["/archives/2019/07/index.html","aebce62c3f05da596ed87c07ff56ea51"],["/archives/2019/08/index.html","d89647baac7e95f65d3cd3b80fdf993e"],["/archives/2019/09/index.html","30b133c6aef3feb6aa6ec71acce5dc62"],["/archives/2019/10/index.html","ea3719da1f325343522789968d5fc192"],["/archives/2019/11/index.html","6f656dd0dfb381c2b00d093c5a696271"],["/archives/2019/index.html","873fa1671ffd22908fd777ccf1a82b9f"],["/archives/2019/page/2/index.html","908de04567fe2467520b40fb28a4b18d"],["/archives/2019/page/3/index.html","cd461d10db33b09765f4f5f10512a76e"],["/archives/index.html","e82fee8e79b8b97e066a2fc8ca7bb82f"],["/archives/page/2/index.html","85dabdbd439bb5e5d0010572c07e046b"],["/archives/page/3/index.html","4218331b9e4ae2e94f71da85efb6eb1e"],["/categories/C语言编程知识/index.html","33c5b9baf890fbcfed4d2c9e70270f26"],["/categories/Hadoop/index.html","541b7b517b0a031c43bfb142585abee6"],["/categories/Linux/index.html","165b82af4613dc914de363fb38f28311"],["/categories/Linux/常用命令/index.html","749788a6b76cfe16b61664834eb6f4a1"],["/categories/Python/index.html","e1c33c76de788f9c18d1413d39946697"],["/categories/Python/编译器介绍/index.html","2ed0d4c2e0364b43201e2b2a1b7b17e5"],["/categories/git/index.html","68116391cb400e91a69dcd17f2c913bf"],["/categories/index.html","d04566a740df6b40b831ba649a457cfa"],["/categories/python数据挖掘/index.html","0188958ac6515e407d8cf7b34321a1d7"],["/categories/python爬虫/index.html","dadee11c9804e1d6a5fa27bd93c0af7f"],["/categories/python的web框架/index.html","09e1b1ba1405f9b40583892c7e2d905f"],["/categories/python编程/index.html","0a7e060d07511ab03425ecddf1e38562"],["/categories/test/index.html","b067a9e25bd14351bf21f4d0cb70d123"],["/categories/数据可视化/index.html","d1649a7c6cb240b54a1b9cb540762574"],["/categories/正则表达式/index.html","0ec701d1f7b0d00c0a18015ccc04e285"],["/categories/算法/index.html","1f0d84470fd1a834047996a5d1bdd834"],["/categories/算法/五大经典排序/index.html","5ba3d6ae7852f602316b5bcc8332dfc0"],["/categories/统计学和概率论/index.html","c31d6ab2500611c67e08dd43612df8e6"],["/categories/网站知识/index.html","8844cae6a93ea0e5481d09d835721721"],["/categories/计算机组成原理/index.html","20efca60b26c9c96bc0a7eafd8b472e3"],["/categories/面试经历/index.html","67febfab7d105c684bc5c11cf3225c37"],["/css/main.css","2e0a48e18a3ca305e462f702eca4c77b"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","d5860b17bc9c40f5d02c52d0e7ae7fab"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","44043f7b7c30f9dd4226c1fefdc63d58"],["/page/3/index.html","81b94ed11e94c20198916f5be49ae1a9"],["/sw-register.js","0932731db00ef466cd891e3283cc08fb"],["/tags/Django/index.html","5087942b6de09f8b7764407add575e48"],["/tags/Hadoop介绍/index.html","b760e1b94f900f47ae31271a762122f7"],["/tags/Void-知识点/index.html","46bfb7d6f4c1a3849c895890a9d16a12"],["/tags/git命令/index.html","1c60c2b49a2bd7fd33076aa950424825"],["/tags/index.html","e415e7f9b806698d460e4f199b59e14f"],["/tags/linux命令/index.html","28ad534f42ddd52c31a8ae54525213bf"],["/tags/pandas函数/index.html","2a8692c6566f30b4a6d219096c8507aa"],["/tags/python编译器/index.html","a218a3d20831e4ebb7c501843c22e2b7"],["/tags/基本知识点/index.html","d00f69d8b03781dd1d6146863620b06d"],["/tags/扩展知识/index.html","55a0ec6c1822d3569f1b53fbf009b8f5"],["/tags/排序算法/index.html","b137e12384bd907cb276ef7abf1eac08"],["/tags/数学知识/index.html","f5cb4553396a9a814f69acdacbd3af3a"],["/tags/数据可视化概念/index.html","62f96cb915aee44c8ee2da95a6c88b01"],["/tags/正则/index.html","b6babc8d42b2e590b01e6154b56c7d59"],["/tags/测试文件/index.html","3a82e64268ec7303eeefba341cd36edb"],["/tags/爬虫实践/index.html","afb4d811933a261f48f39120ca4e5475"],["/tags/线程概念/index.html","c3c6efb24cc4d7622b4a1a167f65555d"],["/tags/网站的基本概念/index.html","ea73135d8b99dbf9b79f1570605fed33"],["/tags/网络编程/index.html","a974506c1da4fdb134945d5d8cbce098"],["/tags/计算机知识/index.html","cf700fbf4e8294e30d9388447d307d2a"],["/tags/语音识别/index.html","c831dce44a860b22fd9106c2e9f72832"],["/tags/进程概念/index.html","dd3b0bbdc9bdc7a94bd4f4e6e28da8fe"],["/tags/面向对象编程/index.html","3615390770890191f5d13554528b20ee"],["/tags/面试总结/index.html","d18a328340f2b9ebbdb4e097564effd0"]];
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

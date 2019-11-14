/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","bcdc3ceaa5f07b3459bfceb8e1e7e13d"],["/2019/06/26/four/index.html","23b3597b5b6690326a97d520877e7fe9"],["/2019/06/26/three/index.html","219c54ffa1c0f64a308719a724c3e5e1"],["/2019/06/28/five/index.html","1181772d6a61905cdf9d515f2eaf2943"],["/2019/06/29/six/index.html","9e5f81ba53399161ad5647161c5ca903"],["/2019/07/06/serven/index.html","b8a176fb58487db3f917d0c86b4b96d9"],["/2019/07/11/数据可视化笔记/index.html","cc916b4d5fa25bbea09f4cc4fde3877c"],["/2019/07/12/语音识别/index.html","ddbdf0d370ad6a85f5153c317ac89f2a"],["/2019/07/14/hadoop基本概念介绍/index.html","77d0c83b7e3753f6f6dd659408f7d6b4"],["/2019/07/14/数据科学笔记/index.html","0f329daa93a4d4f466fe3c868e99e39c"],["/2019/07/22/python爬虫/index.html","9e86831bab8f3ae3f8d68a5c31a7c6f1"],["/2019/08/25/pandas函数/index.html","c061a7e4e2c267db4547468c7669c3ed"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","c64d590b063bb49e9660b69cf16fa2fa"],["/2019/09/30/C 语言中 void 详解及应用/index.html","f867b5f5434586acdac54c9238732d4e"],["/2019/09/30/第一次面试总结/index.html","9ac54036e8b3e50dd178ecf61f5e9558"],["/2019/10/07/django之url规则/index.html","1859395e746b4e92f1385f75358d7578"],["/2019/10/07/django配置初启/index.html","b3a06cf5cb783b37bb5a61f2321b9076"],["/2019/10/13/C语言笔记1/index.html","f773c77442744de06944c72c33866d3e"],["/2019/10/13/C语言笔记2/index.html","8fbb7b06f682c47a201544db770f5165"],["/2019/10/19/C语言打包技艺/index.html","6e1c794bdc6aaa6e681e9546292ed970"],["/2019/10/22/c语言笔记3/index.html","9ee03a05752ed6766587d4c8c41d5392"],["/2019/10/27/IP代理池/index.html","3dca33fc14fa87be5db07afbb01ea3d5"],["/2019/10/28/git命令/index.html","805cc5c7ba08b161ceec158f586daf81"],["/2019/10/31/斗鱼弹幕抓取/index.html","7913dd9bd3b13edcccf319c4949bb67b"],["/2019/11/13/多线程/index.html","a169fde041a72f3c4a156e270fd7728b"],["/2019/11/14/多进程/index.html","81cc0befc2b01de6ffeb6800d95d21b9"],["/about/index.html","b7125297eb638f1c06c0f1d60b1c880f"],["/archives/2019/06/index.html","797d7e8c19c42eef8f99250836559dc6"],["/archives/2019/07/index.html","0b9026c0ea2d3df6827c6590277ea6a3"],["/archives/2019/08/index.html","e8f36318d3e3955f712337b746246ce7"],["/archives/2019/09/index.html","8c914402cb4f0d960277db5373d71dfc"],["/archives/2019/10/index.html","c989c6b0043f63052cfa8be884e8ac87"],["/archives/2019/11/index.html","d986f9423119bfbebe9773e3e9bc019d"],["/archives/2019/index.html","413f14a1626ea745277ef5c8b8a38aa9"],["/archives/2019/page/2/index.html","79db7e1b9c8a5fc2c72178284e13e8f9"],["/archives/2019/page/3/index.html","d3aabe0600211b2e4ad8f1990a2f1457"],["/archives/index.html","1db15471a570f3656b1e6ce08dd0b7d9"],["/archives/page/2/index.html","5b3dfec006f5ab855e74d3a3479b8366"],["/archives/page/3/index.html","5e941d45ee42f8a4a2b262730858826a"],["/categories/C语言编程知识/index.html","d9fa1504c590fe34c595b241b9efc5c2"],["/categories/Hadoop/index.html","d2a57062d052b382414e67a6d3e16792"],["/categories/Linux/index.html","f88f8e4636227866302c9aa2dd0a7f7c"],["/categories/Linux/常用命令/index.html","c9236c272606e0fba65615f8ad7cb242"],["/categories/Python/index.html","e7e7a72f27a41a75473651e3a592711f"],["/categories/Python/编译器介绍/index.html","a6b293c376327ad1062a875d4e860324"],["/categories/git/index.html","558e030959a4bd4f75afce7913c06a72"],["/categories/index.html","77c31a3210fa30d904b3cfd1b49e3406"],["/categories/python数据挖掘/index.html","5160f265a7c36c51a340ca9596946cf1"],["/categories/python爬虫/index.html","89f4e1c6d949d8db205b62fadcf1ffc3"],["/categories/python的web框架/index.html","29c5e28539c2aad56ede4ba7b3cf5b0e"],["/categories/python编程/index.html","8beb903adb2786fd15d94deab7725d87"],["/categories/test/index.html","e3a648e8dad0dfd3f8aca4ceccb8828a"],["/categories/数据可视化/index.html","e917f8bc2db46cd978a629b881c5cf6e"],["/categories/正则表达式/index.html","cc727628ed04e6226f00a5d9b35fb947"],["/categories/算法/index.html","77635770b358890e8f1d1d61e18ca2e8"],["/categories/算法/五大经典排序/index.html","4b0a7dc3b983f3257e2de815b6d6b1e3"],["/categories/统计学和概率论/index.html","cd69087e6cc89949f6a11f4cc6df2470"],["/categories/网站知识/index.html","9d249d87d795f1c448dbc529638c4f91"],["/categories/计算机组成原理/index.html","0441d714d86aeb0cd0979bc50eca764d"],["/categories/面试经历/index.html","6dbc3e06f63fbb7f012e3fe62e8bb91a"],["/css/main.css","606ae327a928df32d0e8aa3e167ac143"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","4c5c6080b9f3eaf919303edcb4e68f7c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","627b2c97c5fc0d4ac5d2db1d8e72304c"],["/page/3/index.html","dd4428beb32003adff479c4c1a112d77"],["/sw-register.js","72d201c3990f5ae3da38d32d8be03ba0"],["/tags/Django/index.html","d188954bbc7b760eddab9899887205d6"],["/tags/Hadoop介绍/index.html","b9a3d5b5f508169992469cf046ba1f1d"],["/tags/Void-知识点/index.html","4f845618de413c6b1bda9f7516ed789d"],["/tags/git命令/index.html","99aff376f65eb1ef617e71b9b9982da1"],["/tags/index.html","9a898b29aaed7df0c5426a74079d05e2"],["/tags/linux命令/index.html","c21e40a06c73e8b7f4771157f0ba1289"],["/tags/pandas函数/index.html","a893701b9056bfa4dbda87d0667b91f6"],["/tags/python编译器/index.html","dda19bbc4c406fa385acf8819454b6ff"],["/tags/基本知识点/index.html","94d5f49af567e6f0e0113788f90c635f"],["/tags/扩展知识/index.html","7ec4eb4f67d9b47a206b7100e12b91b2"],["/tags/排序算法/index.html","4875cbe1f4b49cfb6f17585c5b41bbd0"],["/tags/数学知识/index.html","c5c0d10f86f52f178062e181000b9830"],["/tags/数据可视化概念/index.html","4b82abac6c971165ee3f5d840f61fd8a"],["/tags/正则/index.html","cb017272c53e9dd98d9d604d31884cac"],["/tags/测试文件/index.html","fd5a9abeccc79ef79c04fc776e151ec6"],["/tags/爬虫实践/index.html","21cfd361d07b46e5a116c5f149d7ed4c"],["/tags/线程概念/index.html","f14c3366190d732d4e8bd4e3a1204f81"],["/tags/网站的基本概念/index.html","b2d60aeb2121dd40a62149fe952845ce"],["/tags/网络编程/index.html","f8449b4bfa30d9122582e5b62c05032e"],["/tags/计算机知识/index.html","e6f5a994d7dae5d714c04e4be9c5ef98"],["/tags/语音识别/index.html","7524bcbbad7b69ea19efc5ea021a0785"],["/tags/进程概念/index.html","943a4b426bf9dd02e0c32ea3eab05ba7"],["/tags/面试总结/index.html","7d18dc03c80f7f1bd1056a5d666eabd5"]];
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

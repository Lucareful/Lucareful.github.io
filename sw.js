/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","a81a5d6c0b53e69223f88a0e2185c0eb"],["/2019/06/26/four/index.html","5e139edb1d05ab376eb05057f261ae21"],["/2019/06/26/three/index.html","f0248f06081e5b14b04f81b7673e1730"],["/2019/06/28/five/index.html","ef67a5cf1b56a68190b0d02ff1e53b65"],["/2019/06/29/six/index.html","b975f2518144760b659f7a99e567c611"],["/2019/07/06/serven/index.html","5f044126d53bde5a2a7ab64cbd524569"],["/2019/07/11/数据可视化笔记/index.html","f1da1c07fd092e8668f2bdec225ac981"],["/2019/07/12/语音识别/index.html","3b0e8fc687bdd330db4243a80fb0f763"],["/2019/07/14/hadoop基本概念介绍/index.html","a6add50dc07752e8f2a025a7df1a2d3f"],["/2019/07/14/数据科学笔记/index.html","4d836305275cd133cad9188234e46862"],["/2019/07/22/python爬虫/index.html","45374cf87f21bafa7d5a688d23f8c826"],["/2019/08/25/pandas函数/index.html","b4f4afdb1f17647ae2480bcc61951e20"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","2983270c9f7717b8ae1cbea449365b2d"],["/2019/09/30/C 语言中 void 详解及应用/index.html","0a29566883186541c1c08037a0230586"],["/2019/09/30/第一次面试总结/index.html","e6f19efbcc89b3d95772995d48fabb0f"],["/2019/10/07/django之url规则/index.html","6c3e8a0173dab5cb11ae81eee3695f5f"],["/2019/10/07/django配置初启/index.html","29ca7a75b7c03c512b086605e7811272"],["/2019/10/13/C语言笔记1/index.html","acb2caadefa822110ac3ff8357fb4d38"],["/2019/10/13/C语言笔记2/index.html","31e65a15a97bb28975fd72ca82a93fc8"],["/2019/10/19/C语言打包技艺/index.html","5e8205d425730406f48b0a2f000ccc7a"],["/2019/10/22/c语言笔记3/index.html","e2dec0488f178fa24de6cc467e633756"],["/2019/10/27/IP代理池/index.html","a0d887f4c0ad1a6cb881eb2210071072"],["/2019/10/28/git命令/index.html","0fe9f556c5a557d59e58f4850c687135"],["/2019/10/31/斗鱼弹幕抓取/index.html","67485555ce267f93ec393f159f5c08ac"],["/2019/11/13/多线程/index.html","0f706c80341b0b0be3216639e72f181c"],["/2019/11/14/多进程/index.html","e6d8d7036a09a88ae021dd29c4b49807"],["/2019/11/15/python类的私有属性和私有方法/index.html","6ad0b80115dbb302c0f8a30f42f93aaf"],["/2019/11/16/协程/index.html","e42fd41bcc5e81b8a9af1ed6c9c6154a"],["/2019/11/16/进程,线程,协程对比/index.html","17b4691bc4f0c7f165f3bcd2f3ed7c6a"],["/2019/11/17/GIL锁/index.html","b018eb8c761b6138bffe776da3fbb8d4"],["/2019/11/17/闭包和装饰器/index.html","2948164ed9a9bf9330fb5bbcbb65c6ff"],["/2019/11/19/Python进阶知识点/index.html","1910400ebdc971bcf7d6e12fa6f69589"],["/about/index.html","dec1d1df794fee9972d46803eb7b6b35"],["/archives/2019/06/index.html","ac1dd926ab2a7f05655a5cfe6317aae5"],["/archives/2019/07/index.html","e4f86f640728f212101f46f867dc73ed"],["/archives/2019/08/index.html","e8bb7864fe5aeccfd8df3b7a6ab5d55e"],["/archives/2019/09/index.html","0bf8004a6ee0334b9d6828b01f4fd94c"],["/archives/2019/10/index.html","3b5ece1d0e019af7113cfc249d83b08f"],["/archives/2019/11/index.html","69b267c332f5788fe28599cf572843d2"],["/archives/2019/index.html","97d5fefbd900a1ea19f562a9ff3f9aa3"],["/archives/2019/page/2/index.html","3ba26349fda01f2e7a70e1a305fe3b6a"],["/archives/2019/page/3/index.html","965c0068c30c7a6314e8a9a1af6ea97a"],["/archives/2019/page/4/index.html","3fff4d26c37cf394039cd41fcb4e81ea"],["/archives/index.html","4939346e3b5a92a254f390a9dd283bd4"],["/archives/page/2/index.html","51701502db7a0b77844dbd8aa8a5efb5"],["/archives/page/3/index.html","8e1491a0290a597df5f7c7652b7dc213"],["/archives/page/4/index.html","51ac578b32c75dc5d2a0900af4e236f5"],["/categories/C语言编程知识/index.html","9bcb19cacebf93016887cd9d990eac11"],["/categories/Hadoop/index.html","2d808f055faef1613aaffd30c9c8ac74"],["/categories/Linux/index.html","ccc59d8b11fed58d02d933e181ffbf54"],["/categories/Linux/常用命令/index.html","a40065785cd54abb138279a0c99e48b5"],["/categories/Python/index.html","bf82884a39407a9e5cb7be05aefaccd3"],["/categories/Python/编译器介绍/index.html","d1796184a4208b8fb1752a976ac01b2d"],["/categories/Python编程/index.html","f9b9431789a671788a907cbbaeb8a43f"],["/categories/git/index.html","d914c7e70e5f19ca2d0bbe7852e27a8a"],["/categories/index.html","665c37201154af0e2bde07769a4344a6"],["/categories/python数据挖掘/index.html","8775b449ff7734e4ed8ab61316d62c4e"],["/categories/python爬虫/index.html","e7590e191679bb1259abb7ddebb887b2"],["/categories/python的web框架/index.html","a9297013a4ca851f5b89ad87c2b6be59"],["/categories/test/index.html","e366f13702df636e8d40f70597c187b5"],["/categories/数据可视化/index.html","3e7ef3811f73022fb2df35da94e9ad9b"],["/categories/正则表达式/index.html","ea081a61bc9bfd66ec3f86c7d49d628e"],["/categories/算法/index.html","53db3332bc1bebf698b9cff49cc53603"],["/categories/算法/五大经典排序/index.html","603d89c2acf25bbf413f755f7b0bc364"],["/categories/统计学和概率论/index.html","a66a7452825e9907acddb51a8dc30b92"],["/categories/网站知识/index.html","8d057e9c7afa801a4e43a799706fad48"],["/categories/计算机组成原理/index.html","1e259f8bc7d3a8ce139c02faeb091d84"],["/categories/面试经历/index.html","4d1e30b49d5538838c22d6b78fd2a681"],["/css/main.css","16b3f0bf075a75a4ed7ea83251714896"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","9b4f2feff26f53a8f9a49087cbc1e236"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","226fbc0d9f0f59bf82aa445da3c58b7e"],["/page/3/index.html","6213488cb9dc54cd0f10e7405e87523d"],["/page/4/index.html","114e7879d3edbb081d35524e21f12165"],["/sw-register.js","40670afd25a2ef2841a6485e2ebfb76d"],["/tags/Django/index.html","1b9f590a3c72beab986e7f67c7ffb731"],["/tags/GIL锁/index.html","7a79c39a1372d9e02c11c817f6cf171f"],["/tags/Hadoop介绍/index.html","7f5eb748ba6f4c074e2f05b04f16496a"],["/tags/Void-知识点/index.html","539b1fae7e6304d9ec7eecad8e607c0f"],["/tags/git命令/index.html","c768fe27603fd98429ebe17ff9c27945"],["/tags/index.html","1571c06424f31638770f54db245c090f"],["/tags/linux命令/index.html","ef67b4a51f2c8c92a2ad4bb920f73f86"],["/tags/pandas函数/index.html","b25f0e62e8b70d0c5da191d6fc85ed4b"],["/tags/python编译器/index.html","d8363663ece7ffd3cf59ca07171ee742"],["/tags/协程知识/index.html","ca6568179944e89051fada6b3ec81b78"],["/tags/基本知识点/index.html","5ab5f57e792c1fe875dd68b30b591100"],["/tags/扩展知识/index.html","8032d478f811367ca43cb1ad650708d3"],["/tags/排序算法/index.html","430c5c2f704f829d965559ff7f724f3e"],["/tags/数学知识/index.html","69118826eb5ecd79713bb2436c232657"],["/tags/数据可视化概念/index.html","58cd0b8a510ae687be1d7e3d4295b83c"],["/tags/正则/index.html","cc3aa3d843326ea8f163222ded59cd2d"],["/tags/测试文件/index.html","44c469aca180f711ae5bf116d9e358c2"],["/tags/爬虫实践/index.html","003a5da296c9d81657b4d38c7a614740"],["/tags/线程概念/index.html","892add02ae0fd7c43dec99487cb24b38"],["/tags/网站的基本概念/index.html","6bcb92f158a9f339fdc0cf92651f5cf3"],["/tags/网络编程/index.html","765640ebd4412396ac3916ffaa7f4b8f"],["/tags/装饰器/index.html","613d1d7ea19e48154cfe3095f9284385"],["/tags/计算机知识/index.html","dbac4bb5dd1ecbdc16077705eb1d70a0"],["/tags/语音识别/index.html","67f026b8d991d55fc08d416c78766f48"],["/tags/进程-线程-协程总结/index.html","83a480439b6d3bd2fafd37251026f356"],["/tags/进程概念/index.html","6a87b15efd311400472efd1c788774de"],["/tags/进阶知识点/index.html","16b4db780ec5c65f5034f8967881e328"],["/tags/面向对象编程/index.html","e5bf43bc73d23f6e00104d5f609d9ccc"],["/tags/面试总结/index.html","1025786d0ecf079222eb5ed2f0de732c"]];
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

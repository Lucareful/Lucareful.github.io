/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","8ba3393e640aa5f9544aa9e2406de37c"],["/2019/06/26/four/index.html","f2281f277614d304ef6fff7f4935a92e"],["/2019/06/26/three/index.html","b7dcb72c1c3bee689751075ebceb49e0"],["/2019/06/28/five/index.html","9e02f813ba81a6d2abca29630385ab71"],["/2019/06/29/six/index.html","fd1f033b533ecf036277664c28ffa206"],["/2019/07/06/serven/index.html","ddaf19fda26b641fabeda911155285fc"],["/2019/07/11/数据可视化笔记/index.html","147ff5a2f7095edaebc49e0e36390a80"],["/2019/07/12/语音识别/index.html","53070fad4986e77283ebe8e3a14963bd"],["/2019/07/14/hadoop基本概念介绍/index.html","9b187ed460dcec6693e2117a54f798d0"],["/2019/07/14/数据科学笔记/index.html","97f9e6038dd1347562e5616620087e60"],["/2019/07/22/python爬虫/index.html","dc8656ab5d6cc79bf8e2ee103d8bbabc"],["/2019/08/25/pandas函数/index.html","9958336d0328d59b7fc8a49cac81bcda"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","4f2f5fcd2e251ed268b856d580564420"],["/2019/09/30/C 语言中 void 详解及应用/index.html","558dad75dc89a1ee0227fd5a5db51acd"],["/2019/09/30/第一次面试总结/index.html","bdc1c7a3385b6f00ad0dbed4c647c176"],["/2019/10/07/django之url规则/index.html","a924449237da7f337b52af30bce66591"],["/2019/10/07/django配置初启/index.html","2078aca3b3d8418c0a3bc638fba337be"],["/2019/10/13/C语言笔记1/index.html","4c02a56c12f1ed88c267a1abb51fb98f"],["/2019/10/13/C语言笔记2/index.html","daf97e0bcb68e4d3edacf9c43342dd3b"],["/2019/10/19/C语言打包技艺/index.html","587ca38fcd544e66481e9e409a2472a1"],["/2019/10/22/c语言笔记3/index.html","a60815a3b2f9b2af438d7a7bebaf3dc5"],["/2019/10/27/IP代理池/index.html","0734f42b8cf0e520385be60472888b5d"],["/2019/10/28/git命令/index.html","ed4d08d741834e1640eb1d2327e197a2"],["/2019/10/31/斗鱼弹幕抓取/index.html","6480f5eede2b9117c66acda9b7f4864a"],["/2019/11/13/多线程/index.html","4beff48dafda21d5e674e67d9d372c2c"],["/2019/11/14/多进程/index.html","85961218d3c84846ed05051617a67c0d"],["/2019/11/15/python类的私有属性和私有方法/index.html","79ce6aa911f2aeac1c732e40aef91f7b"],["/2019/11/16/协程/index.html","d31dec8ec08300f45d6ebea28090e06d"],["/2019/11/16/进程,线程,协程对比/index.html","f272fb4599d6b730596ebdb6c1cac306"],["/2019/11/17/GIL锁/index.html","d1a1591d083fcb465c9dc45149551a27"],["/2019/11/17/闭包和装饰器/index.html","8f1a2ea78b6fbf059509d80bd4f4b3ae"],["/2019/11/19/Python进阶知识点/index.html","404397d2b29703b458f17ac4130dd124"],["/2019/11/22/京东全网爬虫/index.html","a273af0c6c719039dd7db5c63ee2148e"],["/about/index.html","d8f34d801c2e5e3f301491e7dfd350db"],["/archives/2019/06/index.html","c5acdd942ed80b8977e21b34aa0c7e18"],["/archives/2019/07/index.html","af84a23b18e8774a7afd649a237ed211"],["/archives/2019/08/index.html","e100f7eec38accb83f170ea89be25e93"],["/archives/2019/09/index.html","5fd99d1d600466983652b9532e350194"],["/archives/2019/10/index.html","0ef39e8ac92addff9ab7bcdecdd4a6fc"],["/archives/2019/11/index.html","88e9229c4ddcaeddf7d903a161249f1d"],["/archives/2019/index.html","1b958ec70dc6a5133cbbee5b9c11cec8"],["/archives/2019/page/2/index.html","57a17a6a663da0c2db3d573bedc5519f"],["/archives/2019/page/3/index.html","39dc36ccb9d7160118f4120d86b98e97"],["/archives/2019/page/4/index.html","bc3be8f6d9ffebc76c70e0117ef42041"],["/archives/index.html","f10f4e8ccaad7178c60a8cc6be963ca9"],["/archives/page/2/index.html","2bf9c8fb0524db74f760669ebf04d555"],["/archives/page/3/index.html","5a1131b7f30c5ffd1e4353586d0003e4"],["/archives/page/4/index.html","924d2fb7bd3431ce6af6ddfb58633899"],["/categories/C语言编程知识/index.html","efbd79de4178565e4803903c45dd3b92"],["/categories/Hadoop/index.html","91ffa185791867ae5a8ab12d386b5628"],["/categories/Linux/index.html","3cc04e90ad267a48e258f91566bee6e2"],["/categories/Linux/常用命令/index.html","0320ae81487f0483fa25f13fc8df8da9"],["/categories/Python/index.html","c5ece288ebf9fd956e5a2574f3dc0540"],["/categories/Python/编译器介绍/index.html","4d8b4dbac7149cce4fcaecbadb344227"],["/categories/Python编程/index.html","9a62a48951b411adb0842d4912a4b434"],["/categories/git/index.html","99923fab57b00f87fad87c1ca7436177"],["/categories/index.html","7ba3a7c63a5cc98e840c16414325cf2e"],["/categories/python数据挖掘/index.html","dadd0f4de5b4f2c5eb8160d01d0d93df"],["/categories/python爬虫/index.html","40d2e3593706a7c1220e159d1c7c1b53"],["/categories/python的web框架/index.html","9834651ff2df4cb04d699e9924d64d56"],["/categories/test/index.html","4fccf4ff8127344855336841411e78b6"],["/categories/数据可视化/index.html","527d8f70603ad1babdb2774803e6ac96"],["/categories/正则表达式/index.html","18059b0f7bd21626111d60373c74188f"],["/categories/算法/index.html","c9d5ebf25ea7a0570cef60cb7fea7ada"],["/categories/算法/五大经典排序/index.html","7541e78f28c9ac2bbce2225b4af001b2"],["/categories/统计学和概率论/index.html","0556a05022d24a1b1ce250ce0a3f681b"],["/categories/网站知识/index.html","34a7695b5f37ff6d30e7a02e40e96d41"],["/categories/计算机组成原理/index.html","ba4c535306be7e162726ccf44762a550"],["/categories/面试经历/index.html","89043f44006d5edb57dbb7fe656a38b7"],["/css/main.css","489044f4230db77119cf8c328d30cb28"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","9e988f49ac654804162df8c130edfc21"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","0143ea19b23e340cd42824d1d9c80ea3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","42fe9e81b1e85edbbe5d7da0ed2cf225"],["/page/3/index.html","6b6c88cbdfb02f0ec225992f84ddc14e"],["/page/4/index.html","dcda5a3014d6cf851045ab6aebaf66fc"],["/sw-register.js","d1920162c091a7cc43a13ca34835ecad"],["/tags/Django/index.html","113fbdc40eed79227df8f6533e5038d7"],["/tags/GIL锁/index.html","0fd67bdbe7b66de8a644cc61bd49618b"],["/tags/Hadoop介绍/index.html","ff8a7ec508c68b84af712de441c8de6e"],["/tags/Void-知识点/index.html","2d50357fa42130f1f9ca0be3960eec09"],["/tags/git命令/index.html","2a86d51d22dbf05ab7dd778f8092e55c"],["/tags/index.html","45619769e80d3734724cc00552da698f"],["/tags/linux命令/index.html","a6e14055393f631073b1d1557025ca95"],["/tags/pandas函数/index.html","f76d5fdf1f2ca8360b9168913575d1b0"],["/tags/python编译器/index.html","a691e2ecf9b0d6350801a69a94fbf62f"],["/tags/scrapy框架/index.html","0a93eaf29c640c5b64e83ef8038a56a9"],["/tags/协程知识/index.html","95c2fc2fad3489180406e62f366ab543"],["/tags/基本知识点/index.html","8402e6f24cb58bdeb51ecca0ce420253"],["/tags/扩展知识/index.html","e0f9b8405e4dbdec26e19c3bf723484c"],["/tags/排序算法/index.html","3e773fa1270210284e6f73b65876069c"],["/tags/数学知识/index.html","fd55e546c97646f92684a8da15c83ad1"],["/tags/数据可视化概念/index.html","6449cd00ea124259224095315f9a5e3b"],["/tags/正则/index.html","1df3bb9da70b8d242a39cc7953236ccc"],["/tags/测试文件/index.html","4b947f781223e79ecc0e78968590c3f7"],["/tags/爬虫实践/index.html","d02b4ed4a261be72dcd8d9858a8ba07a"],["/tags/线程概念/index.html","b3e21cdf13d7dc52d295a5f0a7bbab27"],["/tags/网站的基本概念/index.html","8e931e295daddb0ed27af4c234c043b8"],["/tags/网络编程/index.html","68f670e1fb24c2eac5ace5fc040f3114"],["/tags/装饰器/index.html","a9f6312a1c85d2b9614fa2d23cd1212a"],["/tags/计算机知识/index.html","9792f99569a725bc30d98ac530a91768"],["/tags/语音识别/index.html","b8616db284c0d7912d20f06ee2a00485"],["/tags/进程-线程-协程总结/index.html","b371adc3944b2e250b8e08d4875197b8"],["/tags/进程概念/index.html","13e1ac628bc70fc7ee8f6a94c26f9878"],["/tags/进阶知识点/index.html","181b5480623404ec01dab5ee788d1e59"],["/tags/面向对象编程/index.html","b4b857f984a2c45b461a977ea8dad8ed"],["/tags/面试总结/index.html","082980fa7c70b0f84b1b4494f6c32811"]];
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

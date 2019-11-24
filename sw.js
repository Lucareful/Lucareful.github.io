/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","34bc853bfe1db47804684bec6afca57b"],["/2019/06/26/four/index.html","7416f43c19df31677e15c7268f3459d8"],["/2019/06/26/three/index.html","f370382ee042d8d72356ea2f25601ea1"],["/2019/06/28/five/index.html","6e9e13fe0d6cc6bd01248e73e56aec5c"],["/2019/06/29/six/index.html","633edbcd68f5a44dd2246216b178f606"],["/2019/07/06/serven/index.html","8d3e05a7b22d6f50fe4d0e0a11d9765f"],["/2019/07/11/数据可视化笔记/index.html","6af62817480b679410075da84389c871"],["/2019/07/12/语音识别/index.html","20863206fc883c55dab589933d6e4fe6"],["/2019/07/14/hadoop基本概念介绍/index.html","c6a161ad39ea46358f6a1352061e13c6"],["/2019/07/14/数据科学笔记/index.html","a952056b1ab4594a8ba2e822edb2f003"],["/2019/07/22/python爬虫/index.html","f139791a37b883551c1bb1297718d4e9"],["/2019/08/25/pandas函数/index.html","b5e3cfeca9fcfb235c49628171d9cb51"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","0547f3a39094bc88b6aa2b6066547ccf"],["/2019/09/30/C 语言中 void 详解及应用/index.html","c054794abf31e3701d7806828cd374cd"],["/2019/09/30/第一次面试总结/index.html","2c590977ba4691db16dfcdd6d3f94406"],["/2019/10/07/django之url规则/index.html","454d6ccbe9570996c1be84551e459b3d"],["/2019/10/07/django配置初启/index.html","849eb08db064cd4b458938dbe9d4bc2f"],["/2019/10/13/C语言笔记1/index.html","dbb3ea47a27566203f9043a792add1bc"],["/2019/10/13/C语言笔记2/index.html","3c6f7f961c47468b969366ebf42b4608"],["/2019/10/19/C语言打包技艺/index.html","4d0b13c458c3fad031aae13115b0253d"],["/2019/10/22/c语言笔记3/index.html","fd8209e2a9f5ebd64807c8d6e8dcf009"],["/2019/10/27/IP代理池/index.html","18c792c1caf22117fc9967232a5a6f32"],["/2019/10/28/git命令/index.html","a7a5928db8be30535ab2bbaab0f5de34"],["/2019/10/31/斗鱼弹幕抓取/index.html","e0ca936669dc405273a09cdbc0e1bb5d"],["/2019/11/13/多线程/index.html","0fc9559711c1b41a3f4cea3ebeb650f3"],["/2019/11/14/多进程/index.html","0705d1aaec11a967fbe10532bf0f7756"],["/2019/11/15/python类的私有属性和私有方法/index.html","54e276dc66ae8c7f0b4343416e4b514f"],["/2019/11/16/协程/index.html","5c4315a2f647aa8e9c39ead4a7d58365"],["/2019/11/16/进程,线程,协程对比/index.html","246be1846bdd94371a842f96310215a5"],["/2019/11/17/GIL锁/index.html","2fc6212bafad0a6aab8678fd834848ed"],["/2019/11/17/闭包和装饰器/index.html","8ee59debfb98681d658d020036278116"],["/2019/11/19/Python进阶知识点/index.html","91c3b7644ce0e16c128826606c97d5dc"],["/2019/11/22/京东全网爬虫/index.html","7fe8157b6f4eeb7bfa3bb0b73b27eecb"],["/2019/11/23/JavaScript的简介和基本知识/index.html","87858b2c0bb19c2fb972153cee6004ab"],["/about/index.html","d92edc25974d83796783643e1b5adb9b"],["/archives/2019/06/index.html","e075e9983e26d990aec367051af8f830"],["/archives/2019/07/index.html","d24e55dd6baf9dd6d619b8c3db03f5a6"],["/archives/2019/08/index.html","ee5a455994b8681cda34898468c68d82"],["/archives/2019/09/index.html","fa75c79ff3ba5ced055b1d2b2607a116"],["/archives/2019/10/index.html","c95706f2e435c150433697244a2e73fc"],["/archives/2019/11/index.html","5aad6461c6561d3eea81ee4113d18adf"],["/archives/2019/index.html","16eaaa2c3ed3203273b290bc3da2496f"],["/archives/2019/page/2/index.html","0b76e606d94832c140ebc0cb3789eb1b"],["/archives/2019/page/3/index.html","fdb51307cc04b98f6c0661daa20a2d11"],["/archives/2019/page/4/index.html","301cc57763e275a4849accb31b48457b"],["/archives/index.html","d3bd8a7e5bc383af848ccb86e94fbf6b"],["/archives/page/2/index.html","664ad14ce77a2cdeb2b32abf7cb43755"],["/archives/page/3/index.html","1c295f872c67594c6c6db28e03b8d133"],["/archives/page/4/index.html","00468287105a3ce981d297c85b3221da"],["/categories/C语言编程知识/index.html","1e37415f348dc2a06bd4e287a8a31f29"],["/categories/Hadoop/index.html","bf4be38a02e1337dc8d8446eeb20f1a2"],["/categories/JavaScript/index.html","e03bf1b1d0cdc34129cf3ea7f15ed629"],["/categories/Linux/index.html","41883619cc01fb7d644beecc1f1e7eae"],["/categories/Linux/常用命令/index.html","244042f2c8be0c7b5383dbe818f909d1"],["/categories/Python/index.html","6f694da04d8f2722fa88d9121347c9dc"],["/categories/Python/编译器介绍/index.html","9ae528b901b6cfb9de1ee0fa5eca5aca"],["/categories/Python编程/index.html","107689ec9cd29bda1b48696f5ef54b9a"],["/categories/git/index.html","4348134071499fee2b9f4ea273108132"],["/categories/index.html","47dd1136511e7792377f35d3abae6f01"],["/categories/python数据挖掘/index.html","a7760500bcebed5bb94a2314e99d2b82"],["/categories/python爬虫/index.html","9f94db6e08cbfd97153b9577976cf9c7"],["/categories/python的web框架/index.html","ec8b94f5ce80d1862da0ff3d2cf4d579"],["/categories/test/index.html","2511f0c7b44d3f40031844b3b04aa2e9"],["/categories/数据可视化/index.html","fb5e5746e709fa9d5247cb917be4e848"],["/categories/正则表达式/index.html","89234a8d94db370871e616bb72e0a312"],["/categories/算法/index.html","f99fd58250535c7a425af7c30f019c79"],["/categories/算法/五大经典排序/index.html","63678f353fef45e7604e00c07222449e"],["/categories/统计学和概率论/index.html","65151ea65ef2c5267baac730bbf9fc2c"],["/categories/网站知识/index.html","1ef2bf3053daf3721389488fcab811d7"],["/categories/计算机组成原理/index.html","6146c9d60e0fc028c27ac15ef1d38590"],["/categories/面试经历/index.html","40790cb4ab68cb388554a73fdcc61bcb"],["/css/main.css","348292077530795cc9c6b5d38b1b2931"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","43d098b406521b4b3b85458666d334fc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","fba7715be5d569bf52ad6dbbea78bef9"],["/page/3/index.html","2db0619b0fd0edf873a1141651e4f919"],["/page/4/index.html","e21b8eec81e8de75cb0cbcc76715261f"],["/sw-register.js","b983c3eb3a2a54bfd538a29608dc7019"],["/tags/Django/index.html","b38fcb4061d3f350f05914d17c368b7b"],["/tags/GIL锁/index.html","b33de5b05d62d3c3428bc4b6642899e4"],["/tags/Hadoop介绍/index.html","9692e136f0f0b9e04b7d212c6764dbc0"],["/tags/Void-知识点/index.html","13d543b0c6df77b0d989e234423ddb07"],["/tags/git命令/index.html","aa57587ef327eecb2f57c9db69623618"],["/tags/index.html","3dc7bafa3bf5b3bde76625f501b02cd4"],["/tags/js知识/index.html","0f2e389712528d992d01ddfd22f43f96"],["/tags/linux命令/index.html","f21c3450f1a1eb7fcdd03fd6150f4353"],["/tags/pandas函数/index.html","b1e35713d2d9682812fddefaa45794b2"],["/tags/python编译器/index.html","30c4e1694f744123cb90bbeae7eea91e"],["/tags/scrapy框架/index.html","430f17facf3fcc012f6170ef4e17fff1"],["/tags/协程知识/index.html","d8260abbb0d98201b17555dd17ecbdeb"],["/tags/基本知识点/index.html","bc3984e10df85b6e3495566e0a03e252"],["/tags/扩展知识/index.html","6357a90dc1fef59b70811cb3ab9a7cce"],["/tags/排序算法/index.html","c5a0c5e171d7340fb95ac25d46bbc1bd"],["/tags/数学知识/index.html","0094ef75bb07371857c450e29033a5c3"],["/tags/数据可视化概念/index.html","094dee9fe4ba6f8bcd2ded3586a60ab1"],["/tags/正则/index.html","8fa97e1f409b1962820d710d97488e46"],["/tags/测试文件/index.html","8ffb9f3b4621e7d5fe0fb888a6524f74"],["/tags/爬虫实践/index.html","36248bfbc28439231911caa9960c6df1"],["/tags/线程概念/index.html","82a432074a6149ec392d99d4e7486f60"],["/tags/网站的基本概念/index.html","8f0c5eee58b50b6f818a201f9f3553f9"],["/tags/网络编程/index.html","fe7ef1cb2a3b859280f577b7446f2149"],["/tags/装饰器/index.html","dfb92b3336ad9f54afb0d863650f8ec9"],["/tags/计算机知识/index.html","4959f9bbacd120221b0a5af07aa0034a"],["/tags/语音识别/index.html","8355ac44b4fc37b33b25025f93abfbf7"],["/tags/进程-线程-协程总结/index.html","028e6e94758d99114c156fa4dcef48c6"],["/tags/进程概念/index.html","f88f2d037f3129536133b9ecaf268502"],["/tags/进阶知识点/index.html","078c7a8fc9718e4b3f0a74b5b3b31ae3"],["/tags/面向对象编程/index.html","b10d71d9c9a8209c2c5e8d839a39e02f"],["/tags/面试总结/index.html","4d3558eeda9e825bee9a8c4187b31302"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","c872510024fe38e591022bfe5f95f80b"],["/2019/06/26/four/index.html","79c2cb98bbffe8f345382ecb6f6eb95e"],["/2019/06/26/three/index.html","6067a62ac709221c6b290899a3a70d9a"],["/2019/06/29/six/index.html","f81521f1cbe79f1309011a0fbd91fde6"],["/2019/07/06/serven/index.html","0eba92dca977468c1b44741cbea544dd"],["/2019/07/11/数据可视化笔记/index.html","490e76a2e2a90ccea6ec5fc9de04c54c"],["/2019/07/12/语音识别/index.html","1103a45666bbdce7f3ff398ac75af1f3"],["/2019/07/14/hadoop基本概念介绍/index.html","6f447d578963d07de5f6caec83acb7a9"],["/2019/07/14/数据科学笔记/index.html","3f15eece36116d49ae679b31b136911d"],["/2019/07/22/python爬虫/index.html","d524bbc06c6ee5f54225e5971b62e8ce"],["/2019/08/25/pandas函数/index.html","55d70fab11cd2308cedfbb870493320a"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","9b0428d4100938bea90dc4501e25e30c"],["/2019/09/30/C 语言中 void 详解及应用/index.html","57b959eb0491a551563b49cb8eec2107"],["/2019/09/30/第一次面试总结/index.html","6cbf1cbb64a3b658a9fcdd85f455abb2"],["/2019/10/07/django之url规则/index.html","e105b2e7ec880b935487c4a1af0d66eb"],["/2019/10/07/django配置初启/index.html","08ccc4888cc35ecf97feb0e7da6f66d5"],["/2019/10/13/C语言笔记1/index.html","46a0e5169fe8f00186e21b9e206cf10e"],["/2019/10/13/C语言笔记2/index.html","922422c229a9249db6881a084b2ff113"],["/2019/10/19/C语言打包技艺/index.html","eddae55d181d765d9af4ff7d6413f63b"],["/2019/10/22/c语言笔记3/index.html","db92218fdfade9e20d0b491b669bba2a"],["/2019/10/27/IP代理池/index.html","a8bc989fd8733373cb6fddaba9d30d0f"],["/2019/10/28/git命令/index.html","8cea11eb699e0ddfd615bc8d4c7d4f4b"],["/2019/10/31/斗鱼弹幕抓取/index.html","37e8a957583637157a7ea01851a5c20d"],["/2019/11/13/多线程/index.html","ac3f82a43ba9c375bfe04a7621b092d3"],["/2019/11/14/多进程/index.html","f0753fd0aa3f5f80e02985b21ee5b5d3"],["/2019/11/15/python类的私有属性和私有方法/index.html","d768003aa72bfe3b1a77ad5ed1b2c485"],["/2019/11/16/协程/index.html","974faef717cdedd43d0cd4477b801f0d"],["/2019/11/16/进程,线程,协程对比/index.html","8740a054ef97244b4214307d1f5db902"],["/2019/11/17/GIL锁/index.html","e7d515cc9d3718fef2a2c858ee299eb6"],["/2019/11/17/闭包和装饰器/index.html","ffd5ece892d881c71dddd91b4767cb77"],["/2019/11/19/Python进阶知识点/index.html","8bbfe8b96e704f4dbb0135614edf9cef"],["/2019/11/22/京东全网爬虫/index.html","dadb5d1b00dade0180c89cf6017be78f"],["/2019/11/23/JavaScript的简介和基本知识/index.html","ac0645cc292e6f50121cc01056152f82"],["/2019/12/04/README/index.html","377332bc9ddc22cc93d27704d0e5c187"],["/2019/12/04/java简介/index.html","73880eba17573f8881b71649f27b14d0"],["/2019/12/11/java基本知识/index.html","3543847533ce148a9d6a7e525b39c1d2"],["/2019/12/16/java面向对象/index.html","617144b8cf95d31a4c313137abe76175"],["/about/index.html","c4f76fc553f75a47f7997cccc83f692f"],["/archives/2019/06/index.html","b13a2d12ca632e5f9750c0b203c1ffb7"],["/archives/2019/07/index.html","9095b7e5c19c451df37f19a3f7c39417"],["/archives/2019/08/index.html","927eeada72747aecfb20e0ade7d7b81b"],["/archives/2019/09/index.html","d452c6aae11a5ebbbe3ca40df746d845"],["/archives/2019/10/index.html","921b50424c4a592d1305d22c98b50ff7"],["/archives/2019/11/index.html","1b4e0622d73704591d0ba94bf5bc9705"],["/archives/2019/12/index.html","3db8fa4ebc9359471ee14ce3243bb4f9"],["/archives/2019/index.html","4ca5ad0e59256b798ce0fbccf69da3d4"],["/archives/2019/page/2/index.html","6d248d040f0750d871e1ffbf0f86bb12"],["/archives/2019/page/3/index.html","3b6e038fcad8578dc30d145c1d64cec1"],["/archives/2019/page/4/index.html","880b5368bcc29fce2bbd2d07e74b8363"],["/archives/index.html","6527df65d7872c16427ebdfc3ec0b9e6"],["/archives/page/2/index.html","62f888fc9205122bd716ec314074fb9a"],["/archives/page/3/index.html","ce092ec7ffc8759e1af034e999fce858"],["/archives/page/4/index.html","3a8494eab29a2caa117968ee8089bd5a"],["/categories/C语言编程知识/index.html","1790ef72c7c88cf546ed0b86f2bcd3e0"],["/categories/Hadoop/index.html","733b2e0ad3a42b56180c82dc4b02bdbc"],["/categories/JavaScript/index.html","8c467f8cf96817c0e7c0e288cec8b4de"],["/categories/Java学习/index.html","ea750916cdfb4b2509af508ae7afad09"],["/categories/Linux/index.html","1721b9544c5656cc80cbf1d47fed8743"],["/categories/Linux/常用命令/index.html","1a7d0bfb968cd7e157dbf892dab21e5d"],["/categories/git/index.html","6d88063d4cebc0b72d614046c05b6833"],["/categories/index.html","dceff99fc9c5fc05b9b525ce8b26588b"],["/categories/python数据挖掘/index.html","5bb20fe61b962a20cb0246f8e7f94696"],["/categories/python爬虫/index.html","11ee9860ef0056cf60f3daf9860e5947"],["/categories/python的web框架/index.html","c61fadfaf0b26d62010d03bf7a2b5ded"],["/categories/python编程/index.html","3d0a9e629b99fd821bbc87f76401dd7b"],["/categories/python编程/page/2/index.html","a59102270ef12d5459ce96da06569c0a"],["/categories/个人随感/index.html","9e52becd261bebe0995b8b5cbd7d5821"],["/categories/数据可视化/index.html","59e5bb6a32009064ffec8e480054e190"],["/categories/正则表达式/index.html","34856daf268961683a8a9605bbebdb39"],["/categories/算法/index.html","c5c92af417f574e83c01520603a1ba39"],["/categories/算法/五大经典排序/index.html","55495a2aedb82d8308d39fda55315f9e"],["/categories/统计学和概率论/index.html","dd7ec9d499f364f05aebe11324bd3cf9"],["/categories/网站知识/index.html","fc639db7397bf430cdc5018f80856b81"],["/categories/计算机组成原理/index.html","66b068073d5c4e0788a9317b8a8cb1b9"],["/categories/面试经历/index.html","594f76000f746f6ebf2ffe9b03c61896"],["/css/main.css","134da0f9db74173eae7f3f1eb6267348"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","0b113c64d5b0d03b1d3600023fb97b71"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ee05fca8bad53a5a4f9813ee99f164b9"],["/page/3/index.html","ab526e0eebc21def8a031104b112a26a"],["/page/4/index.html","e04d19235ac9b57ba8f8dbd8316ed036"],["/sw-register.js","4d506ac60d35ef037e1b9430e455ab3f"],["/tags/Django/index.html","e631633e57eb5a0a3516df9e52184f79"],["/tags/GIL锁/index.html","d0c5600b61458a224e2b9ca90fc81045"],["/tags/Hadoop介绍/index.html","56149f0a76dff182c62f29bec3e2d39c"],["/tags/Java基本知识点/index.html","9f88091a3e76a7f6ddbf2d3f07f17b42"],["/tags/Void-知识点/index.html","da8724d634163e9cecc86d9fd82963ba"],["/tags/git命令/index.html","355c560b06b080de04fe8bc49e320463"],["/tags/index.html","560e8c96379f12d596bbf5c494be2d59"],["/tags/js知识/index.html","a76d3009ab8bf90ecb653bfc77f4efa9"],["/tags/linux命令/index.html","3ced1ea88cee7df2bf4ce6988064b772"],["/tags/pandas函数/index.html","67cd8476d7738f5301df2e50f8669b80"],["/tags/python编译器/index.html","6a21eadf2da2578b9ca7076e0d4fe192"],["/tags/scrapy框架/index.html","e5cf4763ef9923abd1d0a5448c51ddb4"],["/tags/协程知识/index.html","31e9ed15e32501984f7f408477ec2fe9"],["/tags/基本知识点/index.html","c0598f30c299c219d95c151da3ad4eda"],["/tags/扩展知识/index.html","058528f46d5222bcf7121cabf94a6cfe"],["/tags/排序算法/index.html","e162ef27a2684386e571d0ebe06dad0a"],["/tags/数学知识/index.html","b5f1aa64670a9106f07ba5f620af4ffc"],["/tags/数据可视化概念/index.html","17d8bde648d737c64e34f855b7cd0a49"],["/tags/正则/index.html","6ca1a0cea7b89a2a92e64ff38cb36383"],["/tags/爬虫实践/index.html","288746080d68cdc0d055c818e0fd47c1"],["/tags/线程概念/index.html","7001c39240e3b8c82057204609288bb2"],["/tags/网站的基本概念/index.html","338fd5c79a4474b98aef92af7bed25b2"],["/tags/网络编程/index.html","feb7f8fb66a99203e63efee16af22d77"],["/tags/装饰器/index.html","094da81f97536b137986b6260a5fcd63"],["/tags/计算机知识/index.html","7930593b4e7a16d7e5cafde885110241"],["/tags/语音识别/index.html","3c2785aece4e7e22f31053e310f568ee"],["/tags/进程-线程-协程总结/index.html","7f2052f9cd90aff3aae72fdc62b0e31f"],["/tags/进程概念/index.html","dba85686b76b123c46ac7d622b8d635a"],["/tags/进阶知识点/index.html","b98724836af8675dada0dc58fd05583b"],["/tags/面向对象编程/index.html","fee9fc1e69c1142500d090f6ded8d28b"],["/tags/面试总结/index.html","9f01cbf55084f7b674320f7f96697ed7"]];
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

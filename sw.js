/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","beea8c66866bf9cdd8df2a9e88d2b863"],["/2019/06/26/four/index.html","9eba6bc7ed9b05e6529b993a6751f016"],["/2019/06/26/three/index.html","201cef07de7b04555a3ae0d759c730ff"],["/2019/06/29/six/index.html","87c1cb008886a2a423c1586fecc696e5"],["/2019/07/06/serven/index.html","1054c6529f7683c3e4879bd3ede6993c"],["/2019/07/11/数据可视化笔记/index.html","e6d1afa8fdd98c07d682aac44ca0bba7"],["/2019/07/12/语音识别/index.html","da5c9f20a6104c1d53996cf1a2a019eb"],["/2019/07/14/hadoop基本概念介绍/index.html","6098d064fe5a96672c62189c77420262"],["/2019/07/14/数据科学笔记/index.html","5ed2b44d6c4ee274a9871c36732de02a"],["/2019/07/22/python爬虫/index.html","9df251b41057d927c5899507e34ecd91"],["/2019/08/25/pandas函数/index.html","bca9c74acbf5d9fad2d0ebadb5cf949b"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","763238bcf15a2ef7dfd1ff175beb4fa3"],["/2019/09/30/C 语言中 void 详解及应用/index.html","6a3eb723de74a55de8869b83e463ac7c"],["/2019/09/30/第一次面试总结/index.html","5f35ea705c377db9eb118fbb6bf77389"],["/2019/10/07/django之url规则/index.html","a0925e8911b9bf886971bfd656f87166"],["/2019/10/07/django配置初启/index.html","07b1abdb0c252a384104c110e039fdab"],["/2019/10/13/C语言笔记1/index.html","43bd0b92b50da32cbd26aafd8eddb8e6"],["/2019/10/13/C语言笔记2/index.html","28f48bfc69c851e8c42aaa58c7b8aa65"],["/2019/10/19/C语言打包技艺/index.html","723a92bf0bf84fb4fcaf625ec3e4253e"],["/2019/10/22/c语言笔记3/index.html","bc650b3c1d993e2e021511e4c66ea899"],["/2019/10/27/IP代理池/index.html","ac11a83dbd889c3c6e6d1b89bd9a61ff"],["/2019/10/28/git命令/index.html","c98d33fa6ebd961640668a82748ae571"],["/2019/10/31/斗鱼弹幕抓取/index.html","b14c330ab22ee653ce95c6dfa6a6e0b2"],["/2019/11/13/多线程/index.html","05a65528e694d50b43aab842bf8aa3b4"],["/2019/11/14/多进程/index.html","b96d8410ce5b508e75f37afe72576004"],["/2019/11/15/python类的私有属性和私有方法/index.html","4e2236fb5ce78a21aaacbaf8f37fa762"],["/2019/11/16/协程/index.html","2df199a635a1653e3bce385cb1244f92"],["/2019/11/16/进程,线程,协程对比/index.html","4dea605882562bee148bcf78a68eb10a"],["/2019/11/17/GIL锁/index.html","6869a66428df4d9d804ef59ee26bbfc2"],["/2019/11/17/闭包和装饰器/index.html","960cab457ada46315bad95a4e9e1173e"],["/2019/11/19/Python进阶知识点/index.html","00aa1eaa8b69727209dab8d0986e28ee"],["/2019/11/22/京东全网爬虫/index.html","3884245a573dcb7bea1ea0bc792c72f6"],["/2019/11/23/JavaScript的简介和基本知识/index.html","8f82bc4570ab2d8cb6c98cd0777818b1"],["/2019/12/04/README/index.html","79601dd58b3da982fddbbbb74969429a"],["/2019/12/04/java简介/index.html","776e47dd14ea46d8ad72f19bd8ce8525"],["/2019/12/11/java基本知识/index.html","a36d00eeed4f9e27b3a10e2bbb37fe17"],["/2019/12/17/Java面向对象/index.html","b5f7f8f933969360c0e784d013520590"],["/about/index.html","42bbfac54df018b9c7ff05eaee22cc3b"],["/archives/2019/06/index.html","fee45fcb74fae6cb276d72fb64f51409"],["/archives/2019/07/index.html","bf4ff3878c85e8e60c4c85865d93c464"],["/archives/2019/08/index.html","11d87966e5205ad17ef28993a90935e7"],["/archives/2019/09/index.html","ebbe50df62f5d7966c107ebf7c642bea"],["/archives/2019/10/index.html","c7a5ed850762d1d6855bcf86a98bf222"],["/archives/2019/11/index.html","98a3cbf848210f9650b5886c5805a650"],["/archives/2019/12/index.html","70f0e9a06f4fa1ec9e491dbcdd180062"],["/archives/2019/index.html","2cbeb7a9a81c434fb926bb793c0ea9e0"],["/archives/2019/page/2/index.html","c081d7174121cb5bd8969768986ce3d0"],["/archives/2019/page/3/index.html","2c9367bb3613c68187c6d94df0b8b37b"],["/archives/2019/page/4/index.html","62edd2804829b4b022dbcbe15bc8d89e"],["/archives/index.html","52e07b436a8f5552e8ea828035a498d8"],["/archives/page/2/index.html","1ed5121daa6fe39515dc63330e1822de"],["/archives/page/3/index.html","6aa7624da7e6f80d6933957f578af24c"],["/archives/page/4/index.html","ba6cfb96bbb5abc1a75d8146e703d885"],["/categories/C语言编程知识/index.html","f4791fabb28eaee49ee15da16da07275"],["/categories/Hadoop/index.html","69431ef1ec910e5e6f130c9da80d38bc"],["/categories/JavaScript/index.html","fa52bf62f3c14aac271094df7fd6fc9c"],["/categories/Java学习/index.html","4ebd4ddf443f4b610adc52aae2799867"],["/categories/Linux/index.html","e636b2aec595416198f0adb76158ca04"],["/categories/Linux/常用命令/index.html","65f38a3de576a9b93a5d94cd36ddf44c"],["/categories/git/index.html","72728b662bb8e214cccce3dd5b82f52d"],["/categories/index.html","b115e70576b575c1105e5789f75e9129"],["/categories/python数据挖掘/index.html","b97995edcddb818249823fd3c8c29727"],["/categories/python爬虫/index.html","89b82449551fa3d350d9217504e1634e"],["/categories/python的web框架/index.html","be2f5b01e75eda242daa17fa4e8603b5"],["/categories/python编程/index.html","160c4b8d0b4ef69d40942a349180d877"],["/categories/python编程/page/2/index.html","be4084cfb51fe433a4ee3f4c9d622c06"],["/categories/个人随感/index.html","f23337eba9213e77d9a7a11e1bf5eed4"],["/categories/数据可视化/index.html","a9624eb121a94dd520ddf5e2055f2fa7"],["/categories/正则表达式/index.html","18adc4459a31d3826669405738b7678f"],["/categories/算法/index.html","a6370a03930ac71dad2f4f462039b9c1"],["/categories/算法/五大经典排序/index.html","4096066dff681ded03a761f14b1f68be"],["/categories/统计学和概率论/index.html","11a58dc5c07bacd8a1655b7ff2af4d82"],["/categories/网站知识/index.html","6aedd51473800569937550a8996c0e21"],["/categories/计算机组成原理/index.html","5855a278f037da20cafa204421815dff"],["/categories/面试经历/index.html","97fce9239889c1886e108a113d5d53fc"],["/css/main.css","41bbedc1858f9c1ea7c691e1dedd5827"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","e76d1da1050a7a0a71e59ca22e4760e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","cc0cb33b9acb0527600ea0b4cc2d0266"],["/page/3/index.html","c3160733b6f7dee12bf7515a12428611"],["/page/4/index.html","ced61add0a35fd8a2abec1830efb99cf"],["/sw-register.js","dbf34967da1ea3cfc40f4ab37ea28e82"],["/tags/Django/index.html","ea9192d62b7beb226977f62a569ef365"],["/tags/GIL锁/index.html","b8ab8c5142f9a2bc24e647636e023622"],["/tags/Hadoop介绍/index.html","1043235de761cd99ebb58299ced2e4e6"],["/tags/Java基本知识点/index.html","4e1ae38ff2dc3448fcbe0917a801e19e"],["/tags/Void-知识点/index.html","667efb8bb8fe8bde5e2a4bc7736f2d7b"],["/tags/git命令/index.html","9e0085439fd9d64d48160f0142c7f50d"],["/tags/index.html","af91531a6541545565faf6e3705acd7e"],["/tags/js知识/index.html","d8bafddf1c662996380706eb4e966ab6"],["/tags/linux命令/index.html","0b37de930ffaef5f554aaa01c3046012"],["/tags/pandas函数/index.html","452e927b71c84a156fdebd753f20c0fc"],["/tags/python编译器/index.html","c83491d2638c66f80149b9a2c1a5ff76"],["/tags/scrapy框架/index.html","99f72886843d2662fcd4f014ddc015dc"],["/tags/协程知识/index.html","1f04387366f3e483d382e510b2811a3b"],["/tags/基本知识点/index.html","90b5a48a00a603eefea9003060602b1c"],["/tags/扩展知识/index.html","db5754fa22d128e5ea748cb551cb7272"],["/tags/排序算法/index.html","b060dcd6fc2ca9f0a2c481cf3ef0c79b"],["/tags/数学知识/index.html","4250bd991d66505595aa58f2076d50a9"],["/tags/数据可视化概念/index.html","7b3db365c460fee2e1fe25589a34f24b"],["/tags/正则/index.html","4d8a48c55b45e521b424ebc6ad358a5d"],["/tags/爬虫实践/index.html","b18d31548974db847c4d71bc2cd41348"],["/tags/线程概念/index.html","83ed9b696ab8302da3d835aea5a4bf99"],["/tags/网站的基本概念/index.html","5298541f401e3cb3a22cf2128927f12e"],["/tags/网络编程/index.html","6382533e6626392b061c81af84477d03"],["/tags/装饰器/index.html","e6adb444c696bf9d938aac003a3d9f47"],["/tags/计算机知识/index.html","d7e6067fdf74b1428ce78a3228d43446"],["/tags/语音识别/index.html","f2e946f57c4e12aa5dc2bcaa0c89842f"],["/tags/进程-线程-协程总结/index.html","2d7009f7c7a8304056183a2cecaf1310"],["/tags/进程概念/index.html","c8bd3101ed9d8e977cc64d606e63ab36"],["/tags/进阶知识点/index.html","a0e2534f494b797d84855280db72e4cf"],["/tags/面向对象编程/index.html","d797512a6dc270284fc2db813b8b0d9a"],["/tags/面试总结/index.html","356bf8112c96092ed5795a7377369b0f"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","f19816bd5a28daf7a22abd00be993450"],["/2019/06/26/four/index.html","e7c6c02fb857d90e4bc042abe2e86100"],["/2019/06/26/three/index.html","98e8c3a546a43561b5f755ada786dd0b"],["/2019/06/29/six/index.html","a6290fc7def33e0698bf982b96caea49"],["/2019/07/06/serven/index.html","9252c2a07c1146070cf3796c2fa717e0"],["/2019/07/11/数据可视化笔记/index.html","35e663d06b149e0705005f6fc7d21755"],["/2019/07/12/语音识别/index.html","7c995eb51376c8c961a19c9b4fee2ea4"],["/2019/07/14/hadoop基本概念介绍/index.html","84aca1935c2fdeaae756d2107b638b4b"],["/2019/07/14/数据科学笔记/index.html","cfc0bacfa50409a56ecb0ed064c92999"],["/2019/07/22/python爬虫/index.html","4959fa1ef55137b4cde55f175396f085"],["/2019/08/25/pandas函数/index.html","30b1286a1f68cbdb52652cc2ab73ea6a"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","784527042fa75c5921577b7641bae33d"],["/2019/09/30/C 语言中 void 详解及应用/index.html","2b1a52e24d634d49ec5a66b0e211a41f"],["/2019/09/30/第一次面试总结/index.html","87533353aeed919e6dc6f269d53472c6"],["/2019/10/07/django之url规则/index.html","3217db5c9612d85c946105db88d2d643"],["/2019/10/07/django配置初启/index.html","92ecc089c4d08c6a6bb6892bce8377b5"],["/2019/10/13/C语言笔记1/index.html","59ea58943a6114956289e311aa585d12"],["/2019/10/13/C语言笔记2/index.html","b5301e8e5f0f3f488f048698f97724ca"],["/2019/10/19/C语言打包技艺/index.html","91edc4a00956d4fce2f2555b4f00a4f7"],["/2019/10/22/c语言笔记3/index.html","05ef90c5927aee517b0f9d3da79ee3af"],["/2019/10/27/IP代理池/index.html","4aff47c06dfee1cef07f9d602fde6bf0"],["/2019/10/28/git命令/index.html","c7995efd01ba8cd1af44b5987cdf8df1"],["/2019/10/31/斗鱼弹幕抓取/index.html","01c95a191ea43215bcd10a08b922fc37"],["/2019/11/13/多线程/index.html","4589f6ba968acd145e53d0e6231f0409"],["/2019/11/14/多进程/index.html","95ca1e06840f6e8221b8eb30f94b1144"],["/2019/11/15/python类的私有属性和私有方法/index.html","fff86ee829317ffc2bc7f43f962fddd9"],["/2019/11/16/协程/index.html","3839d5160e69d8a518ea1de64e04b3fa"],["/2019/11/16/进程,线程,协程对比/index.html","6f49f1ec5cdc58ba7c9ddc96ad05df1a"],["/2019/11/17/GIL锁/index.html","ce7014a87d4fb0322e9389e1b5888441"],["/2019/11/17/闭包和装饰器/index.html","0507b67de53ae0fd45a1c38e3d072497"],["/2019/11/19/Python进阶知识点/index.html","7bfd26125ecf1578e15abc3ecd21a0c0"],["/2019/11/22/京东全网爬虫/index.html","479cd1dd674e3e2207f247e6213f6c4f"],["/2019/11/23/JavaScript的简介和基本知识/index.html","ae306ad0954d77dd01090bbc926d111a"],["/2019/12/04/README/index.html","0501d2194e6dd2ea897b3e601e52bc26"],["/2019/12/04/java简介/index.html","b87f90c512d01f330dfdf660d3ee7b3b"],["/2019/12/11/java基本知识/index.html","e9fa85acf3f6c9575e5ee56e329a44cb"],["/2019/12/16/java面向对象/index.html","e5b4749cef5d4745616ceabceef9b528"],["/about/index.html","688e78d23dbabe8bd122468b75692d85"],["/archives/2019/06/index.html","6b2df0be5712ce96a2c45ad57ef44448"],["/archives/2019/07/index.html","7dd43898422d5c55796ff988fc91ab81"],["/archives/2019/08/index.html","5dee2879fbfa9530b76c9a21157bd34c"],["/archives/2019/09/index.html","d0e30eba0426bed78f9d7af674a52c9c"],["/archives/2019/10/index.html","61f57eded3d82aa6cdcfec066ef8b7cc"],["/archives/2019/11/index.html","550f3adf07055ca8cb32593e14e6a1b8"],["/archives/2019/12/index.html","a5f79722bb1a8fa7df686bf392c05eb7"],["/archives/2019/index.html","9fae4542d82a1b2e7a193e068970bf62"],["/archives/2019/page/2/index.html","e508b0a06be14dd1797d2f2cfcaeecac"],["/archives/2019/page/3/index.html","9f12b89fb6643c781babb152242b8086"],["/archives/2019/page/4/index.html","d8629e5e13ca3f6f712771dd3c446466"],["/archives/index.html","eeeeda235d7d13b1810daa8b1235a17b"],["/archives/page/2/index.html","81609208f816cc025e54f82be4db804f"],["/archives/page/3/index.html","9ec0760db479ab2b34fff5e14115624f"],["/archives/page/4/index.html","dff8f980379de0f74cccdc51a43d79b4"],["/categories/C语言编程知识/index.html","0da33de986e89c84ead25ee81b43841d"],["/categories/Hadoop/index.html","0c15a777b0d467acae59953447ccda13"],["/categories/JavaScript/index.html","93c94cf29c4c18fe1aab0296294d3310"],["/categories/Java学习/index.html","1c1a5b4dfcbec56abe4a05dfbf52e2d8"],["/categories/Linux/index.html","00e53a5d3dc38f8cc36f680e9a5df3e2"],["/categories/Linux/常用命令/index.html","f68c08f10b37b2abce5b841c58d214d9"],["/categories/Python编程/index.html","647ff8ad0bc0e01949c0b5c8832c87ad"],["/categories/git/index.html","bb25a608556ccabe2bed1541bf53675b"],["/categories/index.html","344b6c79adc9986fd316f083bcaaf7f8"],["/categories/python数据挖掘/index.html","c26a72303ac171e04b45feea4f0e4a5d"],["/categories/python爬虫/index.html","ac1568fad63f32dad80012491564f2d6"],["/categories/python的web框架/index.html","03e21e9546bd63c4c76fa098029bb0cc"],["/categories/个人随感/index.html","7af5e3668fb12af2dc7542b9b203932f"],["/categories/数据可视化/index.html","ad4073955cfdf0753bf552ecebae2518"],["/categories/正则表达式/index.html","e2a0f5fe55df0f26b29d65274e6e4f89"],["/categories/算法/index.html","cbae69defb53abe0b0362a7f9adb3f8a"],["/categories/算法/五大经典排序/index.html","4b55763752394ccb78a3c6bacc69156d"],["/categories/统计学和概率论/index.html","a72fcc02536ae0430e505de6267ddcbe"],["/categories/网站知识/index.html","2cf3f3b6a7ffcd84df649bf7fe9e4d6f"],["/categories/计算机组成原理/index.html","0e97b307e26ea5a93a5c90ebf81b3134"],["/categories/面试经历/index.html","9b6515086c4d9b7945a68cae1218a4fe"],["/css/main.css","ac301784836117c0d69bbd236a5043f7"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","437b19833531de64f1952e5ed26d53e4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c2f712e249263295a4787b9b0d1953a2"],["/page/3/index.html","30e202611ed09c68d8614287da432c56"],["/page/4/index.html","703015d6392cc6c7ba6c94d2796031ff"],["/sw-register.js","04712038a15af6ab6d7a040e1cf00a49"],["/tags/Django/index.html","f7a2ad278ecf4cceabb047e206c064ed"],["/tags/GIL锁/index.html","466a1c91d256a04533379ae674770a12"],["/tags/Hadoop介绍/index.html","e0a19abc6364ff54727df5fc1da45f53"],["/tags/Java基本知识点/index.html","e9411d362bf282793b67c5797d3df8b8"],["/tags/Void-知识点/index.html","378107e5064dd0c1393d03ef654f3383"],["/tags/git命令/index.html","67d312abdb8284c223157ee19a3e9129"],["/tags/index.html","a7b65305a9cbeb2a10c85ecfc59bb690"],["/tags/js知识/index.html","ab09cbbeeee70a987593c2c46a2497f2"],["/tags/linux命令/index.html","1a29c79166391e0df2f9791485dd52fe"],["/tags/pandas函数/index.html","4264e0e014b8416faec0c2667c03ca1e"],["/tags/python编译器/index.html","dec198e894fc0849bb981cdc1470d401"],["/tags/scrapy框架/index.html","cd20c390822ceb534447268627101b04"],["/tags/协程知识/index.html","9af9c32e55bb6fb1c4ccdb1b02525fb4"],["/tags/基本知识点/index.html","ff77e082a6e7e7401da2b48e79ddf607"],["/tags/扩展知识/index.html","53b39fcb9e557344413028b39cfbe9d7"],["/tags/排序算法/index.html","6ece7931ec2a69e4178769eba91e0672"],["/tags/数学知识/index.html","7d2402711cd5c430dd4f919babebcbc9"],["/tags/数据可视化概念/index.html","48ad668746a1a2ca992f22a25e80e895"],["/tags/正则/index.html","8da698308360c815b79564bd5295eac0"],["/tags/爬虫实践/index.html","f85d032e51232db31fa4371ed44bb813"],["/tags/线程概念/index.html","704754a7561d7691831d6464dbb68b85"],["/tags/网站的基本概念/index.html","1c428cdeca13f5c10ed8c0d7da8861fd"],["/tags/网络编程/index.html","2626b1058a5130151a1648b36a243369"],["/tags/装饰器/index.html","9bcdb3943ab75749b269e3a2bea8fcb6"],["/tags/计算机知识/index.html","b1460b46c090caad3276b151656d4e10"],["/tags/语音识别/index.html","9271ef1bbb242ad490985454e9cf2ecd"],["/tags/进程-线程-协程总结/index.html","2ecbddeca94c405849d11ad4b24e3c80"],["/tags/进程概念/index.html","500de73a3e6f07df2905bbb64260b74b"],["/tags/进阶知识点/index.html","e1b61477847660d72d03199430abec9a"],["/tags/面向对象编程/index.html","20db4061effdb9f92fdd09801b724570"],["/tags/面试总结/index.html","87c44dc00bd86542de7ac8ada0cf1795"]];
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

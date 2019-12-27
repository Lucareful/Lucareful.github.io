/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","9251026e1aab44c273db610ba69541ee"],["/2019/06/26/four/index.html","153e3351561ee0a350f77f6696eff45a"],["/2019/06/26/three/index.html","2feca2f7f7520bb4e195cd9e4b2fd5b1"],["/2019/06/29/six/index.html","0ce4250cdf8824b1b74bee819e3c9121"],["/2019/07/06/serven/index.html","31aada4790eaa7a02d11da08f08c2533"],["/2019/07/11/数据可视化笔记/index.html","51846c3d0f1e82a2905782ba6c07b972"],["/2019/07/12/语音识别/index.html","48d99a993fb6df9ae4b1e5a20307ae33"],["/2019/07/14/hadoop基本概念介绍/index.html","373a0eb533c8f1a53bd6570b1b84fd76"],["/2019/07/14/数据科学笔记/index.html","041fc2bd75d478324c0a2662bd712144"],["/2019/07/22/python爬虫/index.html","e9b653a8f722c335516762ae6098b16e"],["/2019/08/25/pandas函数/index.html","684227a3360a653c6381d62ad8f84782"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","418b69f44bd7b1c43dcd4fc20a528700"],["/2019/09/30/C 语言中 void 详解及应用/index.html","0a55c9b3c21c3235c5eb73bf93ca1778"],["/2019/09/30/第一次面试总结/index.html","88a05dba2b7e09f0291d0a45704ec116"],["/2019/10/07/django之url规则/index.html","20c6e42cb104efc5c68946c3fd6fa37a"],["/2019/10/07/django配置初启/index.html","52b07ad7ed39cdd99a03e57441908c7f"],["/2019/10/13/C语言笔记1/index.html","0da8af4c5b0bea215797206988f5b269"],["/2019/10/13/C语言笔记2/index.html","ab0586e283c420b42596bc906ec21d20"],["/2019/10/19/C语言打包技艺/index.html","9fb23f3138f1e91043d2f2b750f020da"],["/2019/10/22/c语言笔记3/index.html","f0dbcc55b6a5ab9f9a5b63932e75e531"],["/2019/10/27/IP代理池/index.html","d6d50f5f5de99a0e323a0b94cb021582"],["/2019/10/28/git命令/index.html","09cfb951c0429d8e9c55c04bf9d3a231"],["/2019/10/31/斗鱼弹幕抓取/index.html","55eede263140412345e9f83c9956f33e"],["/2019/11/13/多线程/index.html","70a4aa5bfcfc100207167851cd3bac57"],["/2019/11/14/多进程/index.html","1b0c8a788a8d3a6302cb0da376bc3f4e"],["/2019/11/15/python类的私有属性和私有方法/index.html","a2926d0be0fb064f0511f80415f7890f"],["/2019/11/16/协程/index.html","e749a695afe7ff130e64682fc241d2a6"],["/2019/11/16/进程,线程,协程对比/index.html","81145e3bce418ba112955fb4a5e90873"],["/2019/11/17/GIL锁/index.html","55ba75ac91378a5ddd156bf08c4955e9"],["/2019/11/17/闭包和装饰器/index.html","a46c29bbfb75143ef85e9c99fcbe4491"],["/2019/11/19/Python进阶知识点/index.html","3caee7882a9b2abe691dd75ec03343e0"],["/2019/11/22/京东全网爬虫/index.html","9de684dd0b2394a12d2653cf9035b24b"],["/2019/11/23/JavaScript的简介和基本知识/index.html","4ae3a81b590d26d4b3a71f0898b1d416"],["/2019/12/04/README/index.html","748f77b8ab5c845712529d27c540f209"],["/2019/12/04/java简介/index.html","f50da4c8e9c598c2a7c3dad4a3bd2168"],["/2019/12/11/java基本知识/index.html","937955cb1c312484afcc8dd58a7c4d28"],["/2019/12/17/Java面向对象/index.html","5c0d593fe42589d06398f8e1984b5480"],["/2019/12/19/面试总结/index.html","b094f6a9dbcb84ca7b4e93c717fb8e22"],["/2019/12/20/SQL性能调优/index.html","30f71b669c7704cbc208fd2311a77e94"],["/2019/12/26/vue框架介绍/index.html","0b6fbe37f284c3cda10e48a04f82a26e"],["/about/index.html","944eb36b836aababd32fff5711f009e0"],["/archives/2019/06/index.html","3fdf31337a60cb26945f82d26bb71c62"],["/archives/2019/07/index.html","fa440ffdaafbd36f55c95b8fe7b45a56"],["/archives/2019/08/index.html","5fdbfc40aaeb5cf43b6c16152cb40608"],["/archives/2019/09/index.html","0dc8751377e79803d9594350f26e278b"],["/archives/2019/10/index.html","f24f81a8372ae61fc9ccd7c563bbab62"],["/archives/2019/11/index.html","f5362661ff214294eb3ed47d4a371cb4"],["/archives/2019/12/index.html","04f35e8581c2749c84ed72a69bbc16d3"],["/archives/2019/index.html","3b13f8709101c0aaa627712965fe7c32"],["/archives/2019/page/2/index.html","e10d660eb5cb57698781b449cc75ba81"],["/archives/2019/page/3/index.html","fa7400331e595d229bd37a464ebe428c"],["/archives/2019/page/4/index.html","943298a2c4725ce06724a7663ca4fc09"],["/archives/index.html","3d44221362df8b9a9a83c8915d34721c"],["/archives/page/2/index.html","dd73f56fcdfc9f64e637cc78bfc8e54c"],["/archives/page/3/index.html","0e8149a7274f90f501e6cdf4a3ffb995"],["/archives/page/4/index.html","87f4b57cc21e07a039627d3dca4c498b"],["/categories/C语言编程知识/index.html","c7699afb5c601dddf35f97129178a154"],["/categories/Hadoop/index.html","dab08d2bcfccae29443b9a5f2ab3ef10"],["/categories/JavaScript/index.html","502dcdd5e64302ac610d66e3f0e3b5a7"],["/categories/Java学习/index.html","4426ad9c4179b5cb1ab5fd1ba5fab55d"],["/categories/Linux/index.html","f423d425f10ab6671dc34a251d60a126"],["/categories/Linux/常用命令/index.html","b4f05cce947e361a1a55678b69d4731d"],["/categories/SQL知识/index.html","13147915e8a5072f3db7ef8b58db73e6"],["/categories/git/index.html","818433b6f9cc3cb91602f286a5ba75bf"],["/categories/index.html","26a2e79e3b6871282e6a589f81ffa131"],["/categories/python数据挖掘/index.html","be382ebc03692840b4d85ee60f6a373d"],["/categories/python爬虫/index.html","05bfebf8d1f519885422311d98ba6898"],["/categories/python的web框架/index.html","d361c40e3c6fb89d8abeae1eef61c1ac"],["/categories/python编程/index.html","aa487e10143475f305c2dfb10058bd47"],["/categories/python编程/page/2/index.html","b42718cdef8f32ec721e8bc27c3b0222"],["/categories/个人随感/index.html","0c8a7887b52118582d70db567976f285"],["/categories/前端学习/index.html","7cccc5f7fed649d23849a793e01a6c08"],["/categories/数据可视化/index.html","44811512498a481e7250e536a96b3faa"],["/categories/正则表达式/index.html","26dbd3f1a9bbf6d5b93eaea9334269a2"],["/categories/算法/index.html","e8a9d26a02980686b249931a8ad8fa8a"],["/categories/算法/五大经典排序/index.html","205e59cfc8f82aa6549475ea87e3f769"],["/categories/统计学和概率论/index.html","9ea049cd8549d689cef4a928b668b349"],["/categories/网站知识/index.html","d370864d0b823a55bd8e8284dee380db"],["/categories/计算机组成原理/index.html","b6bddc38e48b7b0b39c0e6e666310d12"],["/categories/面试经历/index.html","85137d9251726b603a6593a3e61f224b"],["/css/main.css","7d571411dd55e513e99b7624df1268f3"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","d698632683ce45fd19fa4a47beece6e2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","41c768aa5d2a47dd1222bf7903c6b2c3"],["/page/3/index.html","471452ee31f47ca1dab3289b8ecc6b87"],["/page/4/index.html","bda3809090cf67caea76960f6b5b59f5"],["/sw-register.js","6b60b181fafe457d7d9c61733348d378"],["/tags/Django/index.html","1422b8aee72727fd83347a02d14c4be2"],["/tags/GIL锁/index.html","937c14eb76b71ff0df454175ee324052"],["/tags/Hadoop介绍/index.html","f9d9d68261e0e8579fcfa8c7bee41943"],["/tags/Java基本知识点/index.html","86a807c6eb33f395dc5f5c8e36a49c47"],["/tags/SQL调优/index.html","786262c1fd5557a035efef5ab97498a8"],["/tags/Void-知识点/index.html","af3d7dafc8dc6ac115141e1fb101b2bf"],["/tags/Vue框架/index.html","371e90196e6b7d10b0fc7ee156a94584"],["/tags/git命令/index.html","46884d8d00643d11a503299815f8dbe5"],["/tags/index.html","474b0e0600bdf365e28024d1849c834e"],["/tags/js知识/index.html","cc2fee086344ae1bdc55137054be626a"],["/tags/linux命令/index.html","5b59c867a80e5682a2439fcf46bf5481"],["/tags/pandas函数/index.html","49b378b69d387644a1a27ecefbe31e73"],["/tags/python编译器/index.html","89cbfd37cf517d7c3d9a152ddaa09542"],["/tags/scrapy框架/index.html","f4a3bdb74ae64123cb6b1ad6b56c42fd"],["/tags/协程知识/index.html","4046ca4e26ee9488a719c2a226674147"],["/tags/基本知识点/index.html","cf017acd69f43418a24442ea5ea9265c"],["/tags/扩展知识/index.html","0e7da2a253843bdcf22fb69cb284cdbf"],["/tags/排序算法/index.html","ce333794ecf192e0c85ae9af5f8ae93a"],["/tags/数学知识/index.html","9143869cb6b40f0dd02211fabe6a6c05"],["/tags/数据可视化概念/index.html","6e151ee1246e681d6fb7035d923e18d7"],["/tags/正则/index.html","698f5018b0b102f8cd90b5fe239aaccc"],["/tags/爬虫实践/index.html","284102b3a30b4883ba2fdaf2d70ea754"],["/tags/线程概念/index.html","845f4e2671837b3fc317bdd9f4d26f3c"],["/tags/网站的基本概念/index.html","5e30cabc8fe3d165efa6d3023940b5c3"],["/tags/网络编程/index.html","c47224e7d918dedfe9f51731608d1476"],["/tags/装饰器/index.html","e0c66829dba63fcf2489f2d16e024e64"],["/tags/计算机知识/index.html","c1a827e731e9f5ed686de577a87926c2"],["/tags/语音识别/index.html","03256e1398dc59bccf9e551acc1183cd"],["/tags/进程-线程-协程总结/index.html","fcffba469be9b6c0daf2b76ef6e1a09b"],["/tags/进程概念/index.html","4062d13bb83a7cda622fa65dc612d707"],["/tags/进阶知识点/index.html","a7d56e168a28c76001384997e102a3f4"],["/tags/面向对象编程/index.html","d9290aabf4040791eacd599f680159cc"],["/tags/面试总结/index.html","bf27046b5881bc332c23b3503696ff2c"]];
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

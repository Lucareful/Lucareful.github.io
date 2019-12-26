/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","1a330a381f733551968401f6e9c6fcb4"],["/2019/06/26/four/index.html","79f71428b43db9d953a03ce944441264"],["/2019/06/26/three/index.html","f1bcac435acda53ed4f08342763d7f8e"],["/2019/06/29/six/index.html","a28e4cbac99f2ab46bd3af085a7804b8"],["/2019/07/06/serven/index.html","b79aec05785dd9d1fe9eb5eeb1c7f056"],["/2019/07/11/数据可视化笔记/index.html","432ade2d8092d27f8792d5ec2d874c2a"],["/2019/07/12/语音识别/index.html","549ad076290f48d8072adf703093aa61"],["/2019/07/14/hadoop基本概念介绍/index.html","e8db12f8487506580881e71fcf39f18c"],["/2019/07/14/数据科学笔记/index.html","38ee5572a00020138aa4024b2ae5fb96"],["/2019/07/22/python爬虫/index.html","9d67ec5edceed0bc56f76a7e4ee0c281"],["/2019/08/25/pandas函数/index.html","afee104193f7581f7b02d1bed5f6cd56"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","7e01506029512147e4f5e5232f172a90"],["/2019/09/30/C 语言中 void 详解及应用/index.html","8df3afbd346132c0e5296617ac36eaac"],["/2019/09/30/第一次面试总结/index.html","47cd7a560aab3ae038f026cd75b94d6d"],["/2019/10/07/django之url规则/index.html","ce07e7f76e2a68f5f2d66ffddae13189"],["/2019/10/07/django配置初启/index.html","114830c722a41c9c65cf527c00fb83fd"],["/2019/10/13/C语言笔记1/index.html","4425abae30438a635becd219cbe9f610"],["/2019/10/13/C语言笔记2/index.html","afa65962f5cb95557173871228330139"],["/2019/10/19/C语言打包技艺/index.html","d8f17c00db24ae264de4097f24480b68"],["/2019/10/22/c语言笔记3/index.html","bc105c93c3b3b30c55c9d0b05aac319e"],["/2019/10/27/IP代理池/index.html","489aad9d3606e6e47c7a9be40d4be9fe"],["/2019/10/28/git命令/index.html","54a8c17cb830224acee9e589f5521b23"],["/2019/10/31/斗鱼弹幕抓取/index.html","6ca79f2fd4aad442130ec4791692f224"],["/2019/11/13/多线程/index.html","0e109a1a2ff842df5c502124006606da"],["/2019/11/14/多进程/index.html","aed71e20f96b05e94349501ba6d41186"],["/2019/11/15/python类的私有属性和私有方法/index.html","3a5391cf8c96d7c8bd98afbffc9284c6"],["/2019/11/16/协程/index.html","018b70417026cabef9c1ed2888613a60"],["/2019/11/16/进程,线程,协程对比/index.html","dd17c5ca52f30c22a2fda95dae506265"],["/2019/11/17/GIL锁/index.html","9791243c2b2ee02b7da0596ce3b29d7f"],["/2019/11/17/闭包和装饰器/index.html","a6569b5b3b015c1183054bdfc3eb5876"],["/2019/11/19/Python进阶知识点/index.html","751b5f35eebbd4e71395937a20af4ad9"],["/2019/11/22/京东全网爬虫/index.html","94d9cba0e1d57f267974e96863e8f1c3"],["/2019/11/23/JavaScript的简介和基本知识/index.html","1d7c898902a090354f92aea3f64d2fdf"],["/2019/12/04/README/index.html","d14e65ea3f48f32e7cd17e1b206771d6"],["/2019/12/04/java简介/index.html","116a3933e8e8d8b432c3202cc21ebeab"],["/2019/12/11/java基本知识/index.html","228dbfc4c9ef0a500d8808e96f0a1d49"],["/2019/12/17/Java面向对象/index.html","4d59956fbd5bcbcde71897aad329dd28"],["/2019/12/19/面试总结/index.html","10d27fd9f7251fb970ca09ae2bb3684b"],["/2019/12/20/SQL性能调优/index.html","d6558feb2193e71af6afb369aa3078b2"],["/2019/12/26/vue框架介绍/index.html","7ac3b5c3d0cf930ceb2dd305a890e9a7"],["/about/index.html","2b92ad2e2177c416edcbc1425307c777"],["/archives/2019/06/index.html","a003396d38a06685a93175e00a379926"],["/archives/2019/07/index.html","1462405e28dfb31d3b0d20586a9f536d"],["/archives/2019/08/index.html","52f255ba515fa63101c2f17c5a75498a"],["/archives/2019/09/index.html","9831702cb5281c7657a51674a311e0ae"],["/archives/2019/10/index.html","692728599d92879847ae61f17222623a"],["/archives/2019/11/index.html","484d6ae94a2ac6c64da136f969e545bc"],["/archives/2019/12/index.html","44c76f315538bef067344cc50dfe8bca"],["/archives/2019/index.html","a61d85d5129f7c05636c799c36463b84"],["/archives/2019/page/2/index.html","c988d9f6417ab386c9feb75efdef02c9"],["/archives/2019/page/3/index.html","2659aa41a3bd2acf578ed30a0251701e"],["/archives/2019/page/4/index.html","ed8bb9a70e4c85833a09d0f26ee89e3f"],["/archives/index.html","97173499d2e97478245f3814272fafb4"],["/archives/page/2/index.html","3ab8fd73cb49b7a04f236ab377f4ef3d"],["/archives/page/3/index.html","2bda311b0999d59b1fce8d34aa73d199"],["/archives/page/4/index.html","41355c4ae532c6f809d1d0ea8c6f2991"],["/categories/C语言编程知识/index.html","7679c308cf4836c0e1ef62d5cbf714ad"],["/categories/Hadoop/index.html","69d4c55c2b2ac26d52a2cf308a04bf41"],["/categories/JavaScript/index.html","d42a3271c0654945a4b30ed0bbbc74f9"],["/categories/Java学习/index.html","c52b89ff4cce206d8016b4f4e91f9687"],["/categories/Linux/index.html","bd1c9ada417541640d1a58faca5ccbcd"],["/categories/Linux/常用命令/index.html","3a5e9d7cfc144deffbac5180a51fbd89"],["/categories/SQL知识/index.html","66c9a39baafd011d97369c5aab995889"],["/categories/git/index.html","b0139c6d8a3410fcca276f9cef39738b"],["/categories/index.html","1b9864549e1eb764d20f2e85e27740f8"],["/categories/python数据挖掘/index.html","ced708f8f995ba421d56d6c0684f6c75"],["/categories/python爬虫/index.html","b8c3ff6264a7f0f5f1eba783dedc9d2f"],["/categories/python的web框架/index.html","a52b432bab71a38a7ac92fafe2c3976c"],["/categories/python编程/index.html","3248fae941bab433fa0f68f768902df8"],["/categories/python编程/page/2/index.html","64628a469a5bb586168075df1707d9b7"],["/categories/个人随感/index.html","2c35d6a1f03bc88ff65ec76cf08ba0cf"],["/categories/前端学习/index.html","dc5b2ef5ad3c35ab9d2c64545d83211b"],["/categories/数据可视化/index.html","07f90f2b34d9c5d16f88d4fde15dfa4f"],["/categories/正则表达式/index.html","8734c6b4ca7723392f4afeaa7763dc8c"],["/categories/算法/index.html","a35770346868257ff3e27c700d0e2b4b"],["/categories/算法/五大经典排序/index.html","8057fc82a8838229b15a42bb40eeadb8"],["/categories/统计学和概率论/index.html","0c3ef0a9576c717dc4aec2fa866aefed"],["/categories/网站知识/index.html","bfea5e2b105cc355eed2917384d6386e"],["/categories/计算机组成原理/index.html","5112afc287da7da26ce7e1c6d71316c1"],["/categories/面试经历/index.html","729e541626a35707d1d6a98b1dc647bc"],["/css/main.css","78ef0216cb3bb1550186460257043185"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","0271d86596fb83e3a92bf4b3a40555e1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","28d25e9d2c6d95f7daaf5234ed26bebf"],["/page/3/index.html","d190e6718e4fe5182a847186a0fc365d"],["/page/4/index.html","5cd98898729547f7ba28e4bb5d7880d0"],["/sw-register.js","2445544c9f8b451c44aba46c4005d7b9"],["/tags/Django/index.html","b460a9f332cd497c3361cd3335c0dde2"],["/tags/GIL锁/index.html","c7093f5c3c6409eabdc87bf14d171af6"],["/tags/Hadoop介绍/index.html","1cb3c9032feaeb19ff48b0267abe14c2"],["/tags/Java基本知识点/index.html","f30c15d7f9e85a1007d3d588c0851f22"],["/tags/SQL调优/index.html","b68357d53f394ddd451def4703377ea1"],["/tags/Void-知识点/index.html","8bc7cdb7aabb4e3f8797d5a0edd225f7"],["/tags/Vue框架/index.html","328ab9363ea19982ca79fbe3236cbed8"],["/tags/git命令/index.html","f435c75eea435fdbda3b9453c2eda905"],["/tags/index.html","d2f5f39336d87e01d2e63bb6b7f40208"],["/tags/js知识/index.html","c66a702ca11a1e0124978226f7c1c998"],["/tags/linux命令/index.html","1b3e345daf789d0eb60928dab3991a93"],["/tags/pandas函数/index.html","d527c73c21c258a1f75c5c9c2880bac7"],["/tags/python编译器/index.html","781218a79a0c550a93492d796b17a0f3"],["/tags/scrapy框架/index.html","5194b0a5161cb03e17d663b7bec6f92d"],["/tags/协程知识/index.html","d8f829cdbb51aa50fd80f81716def475"],["/tags/基本知识点/index.html","a4e45a6ac7fac55ac88b6c5948baa189"],["/tags/扩展知识/index.html","2b0f14c4ad0bd7a384b5656fc3224bb6"],["/tags/排序算法/index.html","17a36ac0df6a01cd97e36c7926f132d0"],["/tags/数学知识/index.html","e3e717a23983a58e118d440a18bc2b70"],["/tags/数据可视化概念/index.html","0c8dd8e265425ad7444abdeaa6b1ba72"],["/tags/正则/index.html","6b66c0a7f96df69892cb6d1bed413084"],["/tags/爬虫实践/index.html","38c55da579937a14aebdb2e8e581b699"],["/tags/线程概念/index.html","ded69c5b9fad3496ea6624669a46a3f5"],["/tags/网站的基本概念/index.html","4dccbd36f2bab7fb0cc410b10d83ff1d"],["/tags/网络编程/index.html","78e822b2a2b0f430bf7dc7e688f4c975"],["/tags/装饰器/index.html","8e50c2781795df9374346f43307da48c"],["/tags/计算机知识/index.html","f18972fed8eee6b5616d247017a54be1"],["/tags/语音识别/index.html","bbd0b2a78318115a3bb3c5f5fa12ddcd"],["/tags/进程-线程-协程总结/index.html","886f1d2c418b1963e893a6af32283be6"],["/tags/进程概念/index.html","f6a4b143902e56931ebb5953f08a7426"],["/tags/进阶知识点/index.html","21f4618e8d67697a6e9c32b1ea64c4f6"],["/tags/面向对象编程/index.html","5c1864e49d679e182bad83af3a273d4c"],["/tags/面试总结/index.html","ee73169bd9f183707c9ffd404e2e6493"]];
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

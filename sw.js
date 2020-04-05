/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","6aac34b81e619bdcf53f6a2d1e04dfbb"],["/2019/06/26/four/index.html","cd2f6f7ff1428f06678211091dac429a"],["/2019/06/26/python解释器介绍/index.html","4ce5e221385ef952682a622ec533c554"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","5e392c172c1e7f2739a6252be84f264e"],["/2019/07/06/网站概念/index.html","5006bbbe18ddbb92958c08da00e5f53c"],["/2019/07/11/数据可视化笔记/index.html","02139e54216c72063374fd72c41aaf91"],["/2019/07/12/语音识别/index.html","579fbfc3cafa1bf35d39b7d8f5ad0035"],["/2019/07/14/hadoop基本概念介绍/index.html","72f4ad4e77fc12c09bf90e26dcf40389"],["/2019/07/14/数据科学笔记/index.html","687820559482d538ef73f86e95dec9d5"],["/2019/07/22/python爬虫/index.html","602a117aa06da4a652adcf5147c5a7be"],["/2019/08/25/pandas函数/index.html","5e629f98299fa60ff42123a74d9c34bc"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","cafe220d9820a8c73a07f5382fc3419b"],["/2019/09/30/C 语言中 void 详解及应用/index.html","e45cda22dac87ff1b57ce556ad550513"],["/2019/09/30/第一次面试总结/index.html","b7aab3f04462292b7b4f8c6d94441c78"],["/2019/10/07/django之url规则/index.html","4593fc382b710b68c0b0d206f1acb0a0"],["/2019/10/07/django配置初启/index.html","c177862e56b1d18172b9eccae7a37e6b"],["/2019/10/13/C语言笔记1/index.html","7a5a975b1f91c4a3993ec5fd9f200ea1"],["/2019/10/13/C语言笔记2/index.html","fc31bbfaccbba0b7af6c45848bcdfadc"],["/2019/10/19/C语言打包技艺/index.html","f403037e648e7a99471509f3d8ef7b17"],["/2019/10/22/c语言笔记3/index.html","48fb88be10e1d8712a1208535b445e1e"],["/2019/10/27/IP代理池/index.html","9653302a82a3db1aca6deebb144a2441"],["/2019/10/28/git命令/index.html","f9650bc417f3fdc12afcf85d0b7b362a"],["/2019/10/31/斗鱼弹幕抓取/index.html","aebb09a80149a4a5f4c9a76f68012f41"],["/2019/11/13/多线程/index.html","3bf0c69b88c992ac740f79573176b10d"],["/2019/11/14/多进程/index.html","299c83d47e907781c73d0f5cdf849444"],["/2019/11/15/python类的私有属性和私有方法/index.html","4d2a3c888bb623b05031a92f4d1a93e6"],["/2019/11/16/协程/index.html","982a2023b4981e2a574643ebe17a509b"],["/2019/11/16/进程,线程,协程对比/index.html","2756ae077fba477b3fa0a44129163eae"],["/2019/11/17/GIL锁/index.html","363dfeba3452dca167a7c037ce876e4f"],["/2019/11/17/闭包和装饰器/index.html","5f95ef247b6794ce169a412db83bedf8"],["/2019/11/19/Python进阶知识点/index.html","b91c8e10b085076d2345240d93de12c0"],["/2019/11/22/京东全网爬虫/index.html","f167341ee78dc24dc68355ae5266a362"],["/2019/11/23/JavaScript的简介和基本知识/index.html","c9c4255336451b764fe6680000ca1c2d"],["/2019/12/04/README/index.html","a787380f176509b100bfac429b017858"],["/2019/12/04/java简介/index.html","e3cc8464a8ca744211ad753cfb46450e"],["/2019/12/11/java基本知识/index.html","aba3b0fe61d82249b70fd3d95dc33eed"],["/2019/12/17/Java面向对象/index.html","61fa4955a94cf8069b2aed83bb30a4aa"],["/2019/12/19/面试总结/index.html","cc19be09305c2613fcc2d17ae376a293"],["/2019/12/20/SQL性能调优/index.html","9c799e73cee8b1f86f4a1edf0b82470c"],["/2019/12/26/vue框架介绍/index.html","9f5c2e1abc3b49c4b08ec81c0ef0ecc9"],["/2020/01/02/12306自动抢票/index.html","d55d48fd3cfc1d21679039ff211b3a92"],["/2020/02/24/flask框架/index.html","f93310907cb36e4b47d7885a1f91123c"],["/2020/02/28/docker以及相关概念介绍/index.html","eb4147d681a83c09dc344eaf432997c4"],["/2020/04/05/python数据类型的底层实现/index.html","dc3ca1df412066ab8ce828dd9f8c9d8e"],["/about/index.html","31132b7d05f3cd6c4899d04b24855212"],["/archives/2019/06/index.html","474cc7ec3d2d7eb5c523eb4569f889ea"],["/archives/2019/07/index.html","817eda53e5acbe766644bb4a9ce1469c"],["/archives/2019/08/index.html","5f74368a81fea74baf86e5862d61db6c"],["/archives/2019/09/index.html","988afe7b2bba5e0d389e969129ff2db7"],["/archives/2019/10/index.html","89fb52e6cbcbb82fa917be7421abbacc"],["/archives/2019/11/index.html","724ce541986aeb8631ab0df31517883a"],["/archives/2019/12/index.html","c2a68f636af65d0b75f4ed141a011ed7"],["/archives/2019/index.html","8f2cc9812e838d17ddac38a365e54795"],["/archives/2019/page/2/index.html","67fa816cb2afe01fc4a2dd861a76cffa"],["/archives/2019/page/3/index.html","c033e97eeffc3d84159a10aaf472da51"],["/archives/2019/page/4/index.html","1ca483410dd5272d9c055c9c37772dcd"],["/archives/2020/01/index.html","348c35f88076bd43741cf003e19d0970"],["/archives/2020/02/index.html","605458f5b9489a907d6d63eebbd159fb"],["/archives/2020/04/index.html","13799fd6d7a2ed147d8374ca6cfc31f9"],["/archives/2020/index.html","62683b9a025560f10b353fc55f526502"],["/archives/index.html","d2cca28d9335842939b1bfd4fc814e68"],["/archives/page/2/index.html","8e998cbc5705548de9266a3ba87b5246"],["/archives/page/3/index.html","c7f9f08f4cb101683bfd5629fb035ae9"],["/archives/page/4/index.html","a74b6f8be9a50a8552c4135ab031d47f"],["/archives/page/5/index.html","36dfffdcb98ed0be9104a0c0522759db"],["/categories/C语言编程知识/index.html","c0ca0d80aca0de5092b73fd92d696941"],["/categories/Hadoop/index.html","a77af5cd03a83dd2ae426806605ec7bf"],["/categories/JavaScript/index.html","2233c24af2cfbcc80e4f8f7cc8a75cc2"],["/categories/Java学习/index.html","cb51b4f4aa5d7da5ca7c4a48d7327c09"],["/categories/Linux/index.html","bf69539c2ff0eaaa4b9b2cf41bae8426"],["/categories/Linux/常用命令/index.html","f52f3ce695fa4e5ce8b0274b58bdee3b"],["/categories/SQL知识/index.html","3d6e602ca866a2d137ae0ab61cc3e4db"],["/categories/docker/index.html","db83a0e404f1f0f3b7b4acdb6f3fbd0b"],["/categories/git/index.html","503034de77e58e5a46286d92739e24a3"],["/categories/index.html","37c35c3e9907eab5ea032a24f94129af"],["/categories/python/index.html","32130edab1f85890acd57346fc159460"],["/categories/python数据挖掘/index.html","9a79a05b9a12f655cd5a7c96d0bb0220"],["/categories/python爬虫/index.html","e09b6b1afadaab34afa26e10f82e6dd3"],["/categories/python的web框架/index.html","d9697ae5db698f37ad2f6be1942bd52f"],["/categories/python编程/index.html","cf9caf04193c4accb1fbca8bbfe82809"],["/categories/python编程/page/2/index.html","f6ed371a78fcae9089cc50a3986bbddc"],["/categories/selenium知识/index.html","f73a570e821bf9091d7bcef44f18dee4"],["/categories/个人随感/index.html","a3975009f9250ec693f83832082ce32e"],["/categories/前端学习/index.html","3f73d923bad9ba3881158d0ee60d61f3"],["/categories/数据可视化/index.html","d6e62df2f6eedb599af16d40e702b3a2"],["/categories/正则表达式/index.html","21915b0e89a73294a1203de1a78fac9e"],["/categories/算法/index.html","7dcc00c76e9c78f2b8520c93a1e4a7e7"],["/categories/算法/五大经典排序/index.html","f1630ab8ee7b3a8f6877255b0acd7bc4"],["/categories/统计学和概率论/index.html","79a356d71c5447d5d6ec3db90a3c0207"],["/categories/网站知识/index.html","9140e9d5f9adc941c49598128e5cd3bd"],["/categories/计算机组成原理/index.html","c37ed0b3c7b41bbf52fe9b5e2013c826"],["/categories/面试经历/index.html","8ad7b221d9bcdfab58eee6abb748fcd7"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","6f146b56afc437e0339a27efa51e2b83"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","69cccfabb144280a371b1f3a97e4deb4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","68b9268b8c942be5e24ff245ce08a438"],["/page/3/index.html","6b408d8900a645056b57c43bf6034592"],["/page/4/index.html","95e63b8f71efc2d342915c28801edb3e"],["/page/5/index.html","822e30055b98d0a10bfa288c21302d19"],["/sw-register.js","2ba0bc6dd38cd2a02aabe640e877f9d0"],["/tags/Django/index.html","1827fb09d06e249dc4f370e3a4e8eb0a"],["/tags/GIL锁/index.html","e0e04debd4b7a0c3948d6e88e67e148b"],["/tags/Hadoop介绍/index.html","a9bc16232d7d20ab918a96a1cdbb28a1"],["/tags/Java基本知识点/index.html","2703478c19965cb796b26cd47a09a7e1"],["/tags/SQL调优/index.html","bc64117755809cee299702101d7140f0"],["/tags/Void-知识点/index.html","53f2bb9cd0426d8eadc3aea675fa2827"],["/tags/Vue框架/index.html","64e4bd6e1663381130f87909fd5017ac"],["/tags/docker知识/index.html","d7dcd29786d1a75981813d7421a72c39"],["/tags/flask/index.html","f8a2bf775d2fa4116c47126b992eb469"],["/tags/git命令/index.html","2d656b4adb25351200bc1cfb213c2b3b"],["/tags/index.html","1ebeb815746eb9af094f3ef1dc6fb30a"],["/tags/js知识/index.html","ed86b9c53c749ebcc7c3c1fac28653d6"],["/tags/linux命令/index.html","c2d8c64c052e30cda59198830c55109f"],["/tags/pandas函数/index.html","5aa299395a125e223403e43ae02e69ad"],["/tags/python编译器/index.html","9a51636bcb36ed207682564a17a81586"],["/tags/python进阶/index.html","2f8c41a1b0f64a3fb498638126dd04c1"],["/tags/scrapy框架/index.html","ef8773c88ac8f04038b43f148693acd2"],["/tags/selenium/index.html","c095a6374feea7f8f9b5662553a002b8"],["/tags/协程知识/index.html","468d6945f3e014bbf54a707291eaa922"],["/tags/基本知识点/index.html","5df366f7114bc4d984ee6b5af7f04dfb"],["/tags/扩展知识/index.html","581bd3d2f3aca73fa5810790cc4d5835"],["/tags/排序算法/index.html","1357f71522400a84f9203bb34ea71711"],["/tags/数学知识/index.html","fc0f9779c9c20f5c314aba5c5e8568d6"],["/tags/数据可视化概念/index.html","bc47d2b669575000e3ca8ee5b546a77a"],["/tags/正则/index.html","ebb3b41e516b20feed4579ac29f74a99"],["/tags/爬虫实践/index.html","53157e142ce11759e61b35dc912564a7"],["/tags/线程概念/index.html","19bb56777e97bc5ca4e6794f9a5c9c67"],["/tags/网站的基本概念/index.html","7dfc4c631bd2840468874da7959f0a9d"],["/tags/网络编程/index.html","cec9927975fb99203a9f771a90420cd5"],["/tags/装饰器/index.html","f5ef0ae32bdc27db2624f0b5ddae8854"],["/tags/计算机知识/index.html","004c56e2d4cdf836d3d57f0bd9a045f1"],["/tags/语音识别/index.html","f30f2015810a6a20bf3d2b0558a5a10d"],["/tags/进程-线程-协程总结/index.html","269e9124789e0c923ebca6b5b57079f1"],["/tags/进程概念/index.html","1cc292991606dd654884e6c42fcc5806"],["/tags/进阶知识点/index.html","ce64fa292b6b7b7b44a9d8312488564f"],["/tags/面向对象编程/index.html","1fd3122aa56fcc65a77170783c33d38d"],["/tags/面试总结/index.html","a567ec0e1b1b5140ce329289da29e577"]];
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

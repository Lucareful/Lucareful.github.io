/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","6548acddb70688e6cdaea8c285f34699"],["/2020/08/16/C 语言中 void 详解及应用/index.html","61ffe57071360f02f58ef2e428b624a2"],["/2020/08/16/C语言打包技艺/index.html","4d5448d41cc276423132df97cd44fdda"],["/2020/08/16/C语言笔记1/index.html","e0f36190d80c3d131de60d2ac071a3dc"],["/2020/08/16/C语言笔记2/index.html","87c0db0ec2e50a84227186f17c509e60"],["/2020/08/16/Django 重定向终极指南/index.html","4794c7de6f47321d1c00f351d1ea280d"],["/2020/08/16/Django参数和模板/index.html","56924fb7b8d3227fae1e64014f3990a7"],["/2020/08/16/Django后端演化/index.html","392212b72d1e99dd0040d7cb897d0acf"],["/2020/08/16/Django的Cookie和Session/index.html","a49318f292c6d1ae86ca37b5b841dc39"],["/2020/08/16/Django的Field详解/index.html","45536e3e3d9458701688737eed13ad8b"],["/2020/08/16/Django的ORM多表操作/index.html","472ade01b35465cec7079cc9c81d53c1"],["/2020/08/16/GIL锁/index.html","0a477613d37a069b71a0eecc240fab35"],["/2020/08/16/IP代理池/index.html","b3fae4a183d7fdb53d3085bdbd88f2ef"],["/2020/08/16/JavaScript的简介和基本知识/index.html","49fb678d04b42fd798392416f9ca5e72"],["/2020/08/16/Java面向对象/index.html","af2128c62a34e6557d00181c14f8e57d"],["/2020/08/16/Linux常用命令/index.html","bb828b05f0eafa94952a9b4e04a98028"],["/2020/08/16/Linux操作系统核心知识/index.html","3840264ea2bc31d4f098935dfd427ddd"],["/2020/08/16/Linux操作系统（二）/index.html","dc3322abd2444942dba9645df3555691"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","825b1cb3b239e815b4ffefc7d73a8a07"],["/2020/08/16/Mysql数据库函数/index.html","ec6499495d930abdea707a136ddee4b8"],["/2020/08/16/Python 中的上下文管理器/index.html","b490c52d29a9e83fdfda1f2ce5ff3c9c"],["/2020/08/16/Python的模块和类/index.html","f85eff5816c68d905bccf8c3bb686d13"],["/2020/08/16/Python类补充/index.html","0092a1a54861f3ce274b79ef1194cd1e"],["/2020/08/16/Python面向对象/index.html","7821e4315ba87e24ae5b6f4954473013"],["/2020/08/16/README/index.html","bcbf880304ce9f8f9c4cbb5c9b5ec265"],["/2020/08/16/SQL性能调优/index.html","dc5bf106776243fd15650b42db1a948d"],["/2020/08/16/c语言笔记3/index.html","9390c66f55196fca81c8419e4385e63b"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","5103269572e99790003811cd1ab9e852"],["/2020/08/16/django之url规则/index.html","fcb84638d74e7bba75aada37ac24a67a"],["/2020/08/16/django配置初启/index.html","5441a0e6544689bd7453c8f7b1fb587b"],["/2020/08/16/docker以及相关概念介绍/index.html","a840dc7b3e9186f38cf123132e475872"],["/2020/08/16/docker信息/index.html","a5826fc75497360e8bbf215504aed943"],["/2020/08/16/flask框架/index.html","15f800dc1fb192dd5b1a003921f636f7"],["/2020/08/16/git命令/index.html","78d3e985f3fcb1d67953f6b0d4dc094c"],["/2020/08/16/hadoop基本概念介绍/index.html","a7f265d5adbe3adbd42b8b656280b741"],["/2020/08/16/java基本知识/index.html","23379d508e8e454ca949dab40a93e9fc"],["/2020/08/16/java简介/index.html","8cfa7d4d7b2696d9a9b420febcf92740"],["/2020/08/16/pandas函数/index.html","0d5d82ba7a0d60e00ce0034adaad872e"],["/2020/08/16/python函数补充/index.html","c8a7cac8b7d72bcefdd36baf1df87e26"],["/2020/08/16/python数据类型的底层实现/index.html","5ba0bdf3b6e8cb31d0c32377290f5a8e"],["/2020/08/16/python核心模块的介绍/index.html","7e449ef7324492c61382c602e21d16b0"],["/2020/08/16/python爬虫/index.html","0f35319d8429d5859a0f04e445065fab"],["/2020/08/16/python类的私有属性和私有方法/index.html","6e00c0a58038eb1401d6c5f4f94a0b3e"],["/2020/08/16/python解释器介绍/index.html","4aedaf852526807ad0a05147de8297b1"],["/2020/08/16/python高阶函数的定义/index.html","99abed52ae61e626dfc26ed9aa431bc1"],["/2020/08/16/vue框架介绍/index.html","f6b85cab02e4bdc447cd7ea2ed6f458d"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","21e7450c07662348e2fd327211c61fee"],["/2020/08/16/京东全网爬虫/index.html","23307b95c879b2724e43423435cdd0af"],["/2020/08/16/协程/index.html","a24af668970ce0ccb9ed0c664e83a2e5"],["/2020/08/16/多线程/index.html","bc53531fc056866d3c52a35ec393c079"],["/2020/08/16/多进程/index.html","b68a945cb1e05d0b32d6a1cc565ddc27"],["/2020/08/16/数据可视化笔记/index.html","5cf47ca05ef8e3cd931394ae491ddd81"],["/2020/08/16/数据科学笔记/index.html","a20ecbc576920a0c7cba079a240010ac"],["/2020/08/16/斗鱼弹幕抓取/index.html","1709b1a69bfa0f03966631cf6c3c4499"],["/2020/08/16/查看mysql连接情况/index.html","1697f5658e0542d770d4df31802406ba"],["/2020/08/16/正则表达式/index.html","7a682724b718c0dca2cbd5dd7f12fe77"],["/2020/08/16/第一次面试总结/index.html","42526287dad6dee1032eaa5bb0d052bf"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","f4548a8397846f386c17e4667ae22f27"],["/2020/08/16/索引和事务/index.html","16d01a89c00895169dacd536add95df7"],["/2020/08/16/网站概念/index.html","65a5a4fa581e1c56a76a50a5f5388540"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","2cd00f21b707224eb22fb08a0053fbdf"],["/2020/08/16/计算机网络/index.html","6aba4ca3e38a7e601f7afb938376e454"],["/2020/08/16/语音识别/index.html","bed9c7de8fe2d35568ace7607ddffa17"],["/2020/08/16/进程,线程,协程对比/index.html","1f3126f6d2d356706cafb0d1620f4289"],["/2020/08/16/闭包和装饰器/index.html","0d9e84c4c36ac4dd509abc0fc1e0087e"],["/2020/08/16/面试总结/index.html","9673d90789a171c9ea2601da575c90cf"],["/2020/08/30/docker网络/index.html","baf4c210358b1a5dd32860aef823e41c"],["/2020/10/06/轮询、长轮询、websocket/index.html","19990fe1ba196690e7923d16c7e073b4"],["/2020/10/10/django的querySet详解/index.html","2972b6da3a9deef6f0e6a024aa3f9286"],["/2020/10/10/设计模式/index.html","cb8a05901dca6f743e335862fc05c505"],["/about/index.html","96a2888ba23a772d91b33d13b98a4172"],["/archives/2020/08/index.html","ba349fdc5f9137d1654416933b677bce"],["/archives/2020/08/page/2/index.html","01f0c3421c91dc19bd0e7e268ff2d480"],["/archives/2020/08/page/3/index.html","d0c773b6576f22e1285290522fdddbc1"],["/archives/2020/08/page/4/index.html","bcdf209aa5db8d94115e9c970fce4859"],["/archives/2020/08/page/5/index.html","5b9e16094a8533906dd473b3a1a1bee3"],["/archives/2020/08/page/6/index.html","07a9317c7857f1023ff8d3a56ad1fef3"],["/archives/2020/08/page/7/index.html","2f8b0c16b71ed6a63e3df1b77e0a6e3e"],["/archives/2020/10/index.html","7bc970d2c404b3e6ee2485e7f5b4c1d3"],["/archives/2020/index.html","ac4f4e7357b066eaa736a4be5239d4a5"],["/archives/2020/page/2/index.html","b399c700d826cb890a296047d1dc4b52"],["/archives/2020/page/3/index.html","8cb73677a354b558cf22fceb6abe96ed"],["/archives/2020/page/4/index.html","4cc5d93ee3377ef597b8a0b1bde9ce93"],["/archives/2020/page/5/index.html","fde72b29e2163d78821272825ca6eb44"],["/archives/2020/page/6/index.html","3d828961fc4ca701e60795d27d92614c"],["/archives/2020/page/7/index.html","0bb2721c12a2e9893b91387877090b81"],["/archives/index.html","c5d931c8d923876ccb2f6e9c2405afe9"],["/archives/page/2/index.html","00b5d4b30dbe791114c43de92f16f74c"],["/archives/page/3/index.html","89f7a5c8fbd42bdc36bc959632405ed1"],["/archives/page/4/index.html","d06a7e595f7272a710f2d6fc082d3876"],["/archives/page/5/index.html","c287d238adc19d669b4931fd80258a56"],["/archives/page/6/index.html","9da2e93b3a8a2855330c0773f18b609c"],["/archives/page/7/index.html","539113fff7f45abc16da8ba160f5c2a2"],["/categories/C语言编程知识/index.html","4070e1c43db4623a85d5a2fd1db90ac4"],["/categories/Hadoop/index.html","2bf78d906525c5fff8abfbeaea0f29ab"],["/categories/Http知识/index.html","bc597c13499cbd5e6a61bfd47b24865d"],["/categories/JavaScript/index.html","899757f950d78ab21b19e899fd166740"],["/categories/Java学习/index.html","ecb357e02ce4e46f1e25cdf84379f97e"],["/categories/Linux/index.html","3bf3065a6b8f0ad474168e03dacfee0b"],["/categories/Linux/常用命令/index.html","ecdd241519ff84485aace71faa84564c"],["/categories/Linux/核心知识/index.html","3a3bd7da58bfb339243aded4a8b026d0"],["/categories/SQL知识/index.html","902565f5d5d487ef51469b3bf2a92aab"],["/categories/docker/index.html","91a1d78a91822bb779e3eb71768cfbd0"],["/categories/git/index.html","a77df490060dbf252a6f2d0f8c872a76"],["/categories/index.html","069169908a154efe40caa8224d3ac25c"],["/categories/python后端架构/index.html","b5225d28a3ac22b06fae07804e64125e"],["/categories/python数据挖掘/index.html","3d10d0411d98237b5fc37637c3195e0f"],["/categories/python爬虫/index.html","e26b71bea9b54062a58936e1c61d6e7b"],["/categories/python的web框架/index.html","4e30e1779e91d7a128b38f8e3dbedf0a"],["/categories/python编程/index.html","e7a2c741cacf997abc3e5899d271d2e8"],["/categories/python编程/page/2/index.html","9def8915210d15e391fd51a87e650118"],["/categories/python进阶/index.html","ad4e70540eb3c8851188beff957f22e3"],["/categories/selenium知识/index.html","7bc928c77ac3485664636b067bbf5413"],["/categories/个人随感/index.html","561bece4cdea3481ba98b6e595034431"],["/categories/前端学习/index.html","ab9734a392b816163b2bd554d2b5a8c2"],["/categories/数据可视化/index.html","1e5eead3af61d9b1625233fb65b0eee7"],["/categories/正则表达式/index.html","b404c988ba83ad714f987705823ce7b4"],["/categories/算法/index.html","b04dcceb4d86c719c91f6870612e77db"],["/categories/算法/五大经典排序/index.html","7fe47e7cbb29b4206b9ccee70e6c2743"],["/categories/统计学和概率论/index.html","64a63f3a6a3329a1707aa89fd0452546"],["/categories/网站知识/index.html","b8ff7dc0412020c680a53ec570823bff"],["/categories/计算机组成原理/index.html","e52371dd20006115ee0f8e61c6b0d91e"],["/categories/计算机网络/OSI七层协议/index.html","b6da84f7f2f6bb02d58a4f79c8af9ca7"],["/categories/计算机网络/index.html","d327c4776b884498473d63eee1e521fd"],["/categories/软件工程/index.html","ede5c0d6f048df0cfdcefcff7da9d4d1"],["/categories/面试经历/index.html","34627a5724757ce3ec9d6cf797603399"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","df4753a9813583f0ab5bbde8c3fb4fd2"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","d3ca0904acd6207a630ac813be031621"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","bd2d450830d18207825ad7c79255f136"],["/page/3/index.html","3a0433c52ceed69526aa4c2f974fb22a"],["/page/4/index.html","56526c44cb74e69dfd930fbf59e15c12"],["/page/5/index.html","0c7ea54c4b1eea6a80a5e8c274c8d118"],["/page/6/index.html","3d574a5a5f35cda694d76563b9cf6b75"],["/page/7/index.html","f0ed82fae415362debd2616f81d502a1"],["/sw-register.js","c1bc899fa3b2302cebdbce24373415e0"],["/tags/Cookie和Session/index.html","783e33aa9ef9735575f352a2c4bf87aa"],["/tags/Django/index.html","ccfecba9595b4a84117bbdb0d59c0ae9"],["/tags/Django部署/index.html","3774934acc11bca85dcd28a944812cde"],["/tags/Django重定向原文/index.html","c47971910e179173a978c3e99c10a4ad"],["/tags/GIL锁/index.html","3c16c630aa735571f9df5f22f02dd94c"],["/tags/Hadoop介绍/index.html","100966afc95699516e76b187eaf79792"],["/tags/Java基本知识点/index.html","aaf694f4cbcf7294acf758c10f179b55"],["/tags/LinuxLiunx命令/index.html","26fa6ebe9735f06ed317fc20e8259f84"],["/tags/Linux知识/index.html","181282b3119144e9d5e5d396e453b774"],["/tags/ORM/index.html","c7f94c482b3717bebe5af15428904631"],["/tags/QuerySet集合/index.html","579340ac79bb42818fe90b31df8a5c08"],["/tags/SQL函数/index.html","4434df0c94151263a9058f8580b0de2d"],["/tags/SQL命令/index.html","5faf6efec7ff19a191ed61b018ee218a"],["/tags/SQL概念/index.html","f1d6acdadd2a8f944b015d5678936276"],["/tags/SQL调优/index.html","7e776697f89c0bbca2179dc458fea825"],["/tags/Void-知识点/index.html","2db024161be132f34573b776db879023"],["/tags/Vue框架/index.html","21f05893264675375b4ea404f85b15a7"],["/tags/docker知识/index.html","bd634548852733f7e7c22fa65b273cd7"],["/tags/flask/index.html","d08c03486c7dd2abcd8af7c1ff6df8bb"],["/tags/git命令/index.html","6d0e0d2f2502259cb85b732d092ab85b"],["/tags/git配置/index.html","65d298919c48bc2156442b3822352015"],["/tags/index.html","b3b919e9283e34081256863c5c877270"],["/tags/js知识/index.html","11435015c48bf548204e0de6a806ee00"],["/tags/pandas函数/index.html","24642b83bf64f3777d594a6597591d19"],["/tags/python编译器/index.html","e6b7250d410e2abb5257f3570b49314b"],["/tags/scrapy框架/index.html","470de4e2ec32ba429a2a9bbccb9496d2"],["/tags/selenium/index.html","62c8988ade9c7621fa19a542202667ca"],["/tags/websocket知识/index.html","2c8c04f8321c7a2c336cdd17baa863aa"],["/tags/上下文管理器/index.html","e755d3b0a4eb7d239a504bb1844ffc95"],["/tags/函数补充/index.html","b88040d3c2b2c4bbe23550a8bde0ca33"],["/tags/协程知识/index.html","31656200dce1577c437b82a0f8a8998e"],["/tags/基本知识点/index.html","cead2fcf9c90842b07fe3a3eb9a40a3b"],["/tags/底层原理/index.html","0fa161ee20de729896b3ec4fd5f0e90d"],["/tags/扩展知识/index.html","1ed0316169fce38c0ce36d28dc8e992c"],["/tags/排序算法/index.html","73a497f60ebf45edcfe046557c0a84b5"],["/tags/数学知识/index.html","8e8cb0939da8668b5a84204da0ceb029"],["/tags/数据可视化概念/index.html","b0faf3e757eaba2f55266e2cdea79c3d"],["/tags/架构演进/index.html","7bb7acf8e7cdddb54e5368bb527c8aa8"],["/tags/核心模块/index.html","4392798db842939fe2b4909ee9fcd715"],["/tags/正则/index.html","56a0acc0b7bcefaed61a756912aeb992"],["/tags/爬虫实践/index.html","ad1ddf551070b1532823e93d30baa768"],["/tags/类和模块/index.html","47216080bc01054b56ea5a2788b938cb"],["/tags/类的知识/index.html","63156b1f877b35c31b1cd40b4bb1e0fe"],["/tags/线程概念/index.html","2eabbb9ed75a141f807b1e29e67429d9"],["/tags/网站的基本概念/index.html","9b11757a0a3e8fe51f1a17d750ea8489"],["/tags/网络编程/index.html","4b02049d4e97b58c03d0e2a99403a898"],["/tags/装饰器/index.html","eff806ce62169048ee6f77ad76660b7b"],["/tags/计算机知识/index.html","08370d2256ff071905cd5f2a994c95f7"],["/tags/计算机网络知识/index.html","e1372ffc71fae00124509f312dbb64ed"],["/tags/设计模式/index.html","e1be58f151837472d40441042e26e351"],["/tags/语音识别/index.html","2d1bebfae7778b274c55e850ed26e8f8"],["/tags/进程-线程-协程总结/index.html","742d795f8b025bccb167af47831a356c"],["/tags/进程概念/index.html","e41f3b26f0606f101959029158f0ad95"],["/tags/面向对象编程/index.html","dbe3ada3339e2a8cddfc1034e83b36b6"],["/tags/面试总结/index.html","a9378a5249e7f872ccd7fd28496c9926"]];
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

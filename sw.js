/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","31b8dc0f79c0c0f7d32ece38013ae6c0"],["/2020/12/06/C 语言中 void 详解及应用/index.html","87e87068f9facea749bffb9f21e68deb"],["/2020/12/06/C语言打包技艺/index.html","a79ff002e36ac335d8382eb8fce51021"],["/2020/12/06/C语言笔记1/index.html","5e32487eb19461a81750b847be421f83"],["/2020/12/06/C语言笔记2/index.html","c2a712a2fb1cc88c01419fab4b8f9a5c"],["/2020/12/06/Django 重定向终极指南/index.html","7fa4b23ec0783111a054b5d257feeb10"],["/2020/12/06/Django参数和模板/index.html","48194fcdb7344cab11daa1c4a7db73f6"],["/2020/12/06/Django后端演化/index.html","9a8a63d53676288ba2dee10478d2c06e"],["/2020/12/06/Django的Cookie和Session/index.html","df94d9f1f4602ca59ba17396225f253b"],["/2020/12/06/Django的Field详解/index.html","a27dea1ebab1980ff650a50589458d69"],["/2020/12/06/Django的ORM多表操作/index.html","7a59db821489ff5507da9f31cc26398c"],["/2020/12/06/GIL锁/index.html","7ef9934eafb15f13b45f7c59519b59e6"],["/2020/12/06/IP代理池/index.html","1e7f4465d275c0b3e79a94ccb3bcc6e3"],["/2020/12/06/JavaScript的简介和基本知识/index.html","42f0dd0001e7e2ae0378fd31b1281a03"],["/2020/12/06/Java面向对象/index.html","cd74796bd9dab24ed24c1d695ee93f84"],["/2020/12/06/Linux常用命令/index.html","4be9664244f27fa0b09f5e9fac615cd4"],["/2020/12/06/Linux操作系统核心知识/index.html","4d14c3471ed82e828432b048cdde3c01"],["/2020/12/06/Linux操作系统（二）/index.html","7da209d639c6abb91928c22b62e44957"],["/2020/12/06/MQ笔记/index.html","87338a1f1bd59c81a2f5b5ef42583126"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","c89ae110d803dd2603190ae9b858021b"],["/2020/12/06/Mysql数据库函数/index.html","b2b679b5bbe89a45b31d179e5aab19ad"],["/2020/12/06/Python 中的上下文管理器/index.html","b0215443b5951286514e1b1a9a1768d3"],["/2020/12/06/Python的模块和类/index.html","fc199c44be9c93717692036162afa34c"],["/2020/12/06/Python类补充/index.html","9bf56503a11e55552e83d10ea209fcd8"],["/2020/12/06/Python面向对象/index.html","4061f153fed1557ee714a2250ff156b9"],["/2020/12/06/README/index.html","47512cfbc1dab925d2f7867222de5610"],["/2020/12/06/SQL性能调优/index.html","4b48966b77bb8440b77523d285d47fe8"],["/2020/12/06/c语言笔记3/index.html","b37b2a625bf850d25ec80a99950c098e"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","d27473da62a4c33be2bb751054de0988"],["/2020/12/06/django之url规则/index.html","0935f81af05ef88d1efb7c21542928a5"],["/2020/12/06/django的querySet详解/index.html","90c18c6d119613ce6056eed6ebc8209f"],["/2020/12/06/django配置初启/index.html","72a56d9a2215d7d147dc0079f9187fee"],["/2020/12/06/docker以及相关概念介绍/index.html","108d3b7bbad981a399cfc9919a02fad5"],["/2020/12/06/docker信息/index.html","71bc059075849d49a5e49e5f20ec3417"],["/2020/12/06/docker网络/index.html","ca2a5fc6c35286fcf1d3142d286c910b"],["/2020/12/06/flask框架/index.html","a6e38b30e72ec1df1d35a8e89bb9d6b8"],["/2020/12/06/git命令/index.html","de015d1a9fc1ae742094f80ede398cf4"],["/2020/12/06/hadoop基本概念介绍/index.html","fa4ad86c36fa3d857d6bbc468256f31d"],["/2020/12/06/java基本知识/index.html","1543e8686765397171c2299b7ad1e472"],["/2020/12/06/java简介/index.html","478d25067cfaf727616909aaf618e004"],["/2020/12/06/pandas函数/index.html","169308ce4d1b1fc5ac4500c133c837f2"],["/2020/12/06/python函数参数传递和返回值探究/index.html","13a4cf33684a79a00b0a1c4cb2b2b45a"],["/2020/12/06/python函数补充/index.html","49deefe598487611e3c6a9c24615e047"],["/2020/12/06/python数据类型的底层实现/index.html","66797f06fb9f88e088609f4d9052e0c1"],["/2020/12/06/python核心模块的介绍/index.html","830281579a75f4619f6f24922d2c3320"],["/2020/12/06/python爬虫/index.html","30c4438250ab48b006c0daa8e9a9694c"],["/2020/12/06/python类的私有属性和私有方法/index.html","6b57d2583a1ba61fcb389aafa016ec17"],["/2020/12/06/python解释器介绍/index.html","b165b71762dd75e1aa515e562e498bfd"],["/2020/12/06/python高阶函数的定义/index.html","53d9c274c3dc1b98925e048a3e63ce7b"],["/2020/12/06/vue框架介绍/index.html","160beb4f48de1ce2d48cd45878df9e25"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","9fe46f659f9a9191bacecba9e30e5f76"],["/2020/12/06/京东全网爬虫/index.html","3345240bfcbb539eecfcf9d96c9b870d"],["/2020/12/06/协程/index.html","5c7980a2e39282626f5a01af44312203"],["/2020/12/06/多线程/index.html","e74967d19731d2557b911419eca5e3c6"],["/2020/12/06/多进程/index.html","ef136d79b4ac6eb262a717af8f201362"],["/2020/12/06/数据可视化笔记/index.html","8c4a97776d6eb927e4e8f9411cdc0fc6"],["/2020/12/06/数据科学笔记/index.html","93b81d0b463dc1f0826b23e0a5f9e96f"],["/2020/12/06/斗鱼弹幕抓取/index.html","b9ce31ada206e9a3b300138803da03e0"],["/2020/12/06/查看mysql连接情况/index.html","4ece820fed4c6ed6c90a8a18e93d64d3"],["/2020/12/06/正则表达式/index.html","0f4818cb660a221899b2468e63cf8845"],["/2020/12/06/第一次面试总结/index.html","33f2844ead618c2f99e0706a3c4f9d1e"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","f4efad576073446941fe18e6789c8519"],["/2020/12/06/索引和事务/index.html","664fab3849ed1571e8de593e269aff38"],["/2020/12/06/网站概念/index.html","ae17d2e464c9ff7e740dced23e54d301"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","2d2bf3f86baf1afd5a12ff76af0e9b34"],["/2020/12/06/计算机网络/index.html","3274dd312af49ddafe64f55e9b2651aa"],["/2020/12/06/设计模式/index.html","5ec251a825df11d168bce51f57b5a354"],["/2020/12/06/语音识别/index.html","0b91d6419d40dd4bc82107d794d3952e"],["/2020/12/06/轮询、长轮询、websocket/index.html","ad4196be62fe9f6599fd0d56a8444aac"],["/2020/12/06/进程,线程,协程对比/index.html","ef345eee5f061984bf4fa3a712ba78b6"],["/2020/12/06/闭包和装饰器/index.html","c5d2370378b3b8a94dfe8727e8de8d23"],["/2020/12/06/面试总结/index.html","6ee8694d8852e9d53ba294b5d3e98664"],["/about/index.html","1565ff26539800e622ce01a6fc6aea66"],["/archives/2020/12/index.html","e5c9815106cc7249600c696ea3205f9b"],["/archives/2020/12/page/2/index.html","0ec4121ffee0979ead0cf82a6a72b909"],["/archives/2020/12/page/3/index.html","8ccb0e49563e4d6c09fe99b95e4c741e"],["/archives/2020/12/page/4/index.html","d3b67cc450b0c07a506bbaa246c54d5a"],["/archives/2020/12/page/5/index.html","743596a000f365493ae22feb5760710c"],["/archives/2020/12/page/6/index.html","a73f66f4ec51c24af1f6026e0ae02210"],["/archives/2020/12/page/7/index.html","cc6de49d514fcad0b0c3282a71b2dd88"],["/archives/2020/12/page/8/index.html","4b19b58b25560743c1a619b8cb68d930"],["/archives/2020/index.html","7b8c2750f7523e1e29753f2ffded7b73"],["/archives/2020/page/2/index.html","440ce0694df1ce3fe91ad46e67601648"],["/archives/2020/page/3/index.html","585ad277158b73b4481c2ba4d172fce5"],["/archives/2020/page/4/index.html","f4cbee5eb03cbf5081da22d65efb411e"],["/archives/2020/page/5/index.html","9952ecb8b4d04bf2e1982145b4056bc7"],["/archives/2020/page/6/index.html","2bceca258c4ff9d6180f1a9d92ebe967"],["/archives/2020/page/7/index.html","a75f29ef34a00be1ebc84d53b4bf37ee"],["/archives/2020/page/8/index.html","91b528fe3d5364ebfbfac209250f907d"],["/archives/index.html","debbb45ed86f369569379753328d5e3e"],["/archives/page/2/index.html","64f79fe8c162adf62048f31669386977"],["/archives/page/3/index.html","c84cb2ce4d6699d60c7e1b77789dd9af"],["/archives/page/4/index.html","b8a6911b836c1f4f232760d6ff254343"],["/archives/page/5/index.html","7b3093789c2daf4b3cf4bc14677eb754"],["/archives/page/6/index.html","3ddb17883a12ecd940d70daf1abd1cc3"],["/archives/page/7/index.html","e9467b1f0ce78e33a9e85ae611137b36"],["/archives/page/8/index.html","57102f6d7e1c8d1fc55cd7d9e6477e8e"],["/categories/C语言编程知识/index.html","883727dd06cdabb1f7b282dea0b23328"],["/categories/Hadoop/index.html","7eb1f262f58e95a634c5893d898f1262"],["/categories/Http知识/index.html","ad476fad2738ec36a24a05459dca73c8"],["/categories/JavaScript/index.html","a1c9c668387d49880aa99e1948f617bc"],["/categories/Java学习/index.html","bcabcaca59316f0d30b977bc91bc4d26"],["/categories/Linux/index.html","9b2d97f7c9d2a383edbc45c3c105e14d"],["/categories/Linux/常用命令/index.html","db74bec7e93e1b5ca3cb839957bcd958"],["/categories/Linux/核心知识/index.html","daf0aa8f2db99153e01c46bd97fba695"],["/categories/SQL知识/index.html","a1a369ebe31a6c01ccc60b47d5051c16"],["/categories/docker/index.html","44dad6e96642e568fccb72c0acbe82b7"],["/categories/git/index.html","9f20c5aad7fdc5b2f5cda2ea6e7a92af"],["/categories/index.html","4b064d773412d5ed0302823de2ae95b8"],["/categories/python后端架构/index.html","904e40dbadff29a7a1cc1b8dbb77caaa"],["/categories/python数据挖掘/index.html","2f860178393660619d4891276f3ef802"],["/categories/python爬虫/index.html","0ca53a45ef69b9bb38def0620f22d588"],["/categories/python的web框架/index.html","19d1cf296ce3d20144aa8588b4cf007b"],["/categories/python编程/index.html","cd49799be324159ef34bcf0a33571a26"],["/categories/python编程/page/2/index.html","a552213524c7c0b23b7ffec4584e6fb4"],["/categories/python进阶/index.html","14ef696567be1d3fd3eb213f20fffd5a"],["/categories/selenium知识/index.html","9385a15e5c6afdda8935c9d9ea58c590"],["/categories/个人随感/index.html","aeba2aa297d2c07148c385c35b86f7dd"],["/categories/前端学习/index.html","9dcbaa1a2ae159959e053957e265a03e"],["/categories/数据可视化/index.html","ae582050825c99d1ad6efc3f3f0844a3"],["/categories/正则表达式/index.html","d070c8851282f1eb31f3c53c217bd1df"],["/categories/消息队列/index.html","d2da4eac6e8841b9b8f84c5c7c9e3b34"],["/categories/算法/index.html","86092614c42c3f5fd1553ed20e97784b"],["/categories/算法/五大经典排序/index.html","880895f92a78e283c4a30c287ecd21c4"],["/categories/统计学和概率论/index.html","59e468a495548652742bbbbc92a53023"],["/categories/网站知识/index.html","da7e2a1280cfba543d10f01ead5c6b30"],["/categories/计算机组成原理/index.html","2e6a4fb1115c88401ee412d869db73c2"],["/categories/计算机网络/OSI七层协议/index.html","0254412b5755e994cda037d285c99cc2"],["/categories/计算机网络/index.html","5e3d7ad28ece097f9e4246d3cbd549d7"],["/categories/软件工程/index.html","f390515215e296cebcec4e4dab130359"],["/categories/面试经历/index.html","2390f3a1cca30370ca7e0f2106019eec"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","81f24291dcb1e8caa987915bf0949fe3"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","7671cfb61ca61b736532f06b99f3bf99"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","daff4242c8cd5c3445f6c9f4f143ec77"],["/page/3/index.html","8292e4c6181cf2e721656965bb8c15a8"],["/page/4/index.html","507f5163774fcf6349512a13a73632a5"],["/page/5/index.html","2143d216f4d6b90251f81a3a216b7ec0"],["/page/6/index.html","0a0bd5efccec8b81539e8ecd17f44c93"],["/page/7/index.html","0801765d0661746ccafdd18b056e1c32"],["/page/8/index.html","ef3e49b955cfb9db286faac4595abc43"],["/sw-register.js","2c0bd7d5c7ba14dfc9f2a3a086902a33"],["/tags/Cookie和Session/index.html","dd9ec798875c74be85fa3b1939b3acb9"],["/tags/Django/index.html","54c9490cc1db07346ec72dd76abec874"],["/tags/Django部署/index.html","1b2cf53ffb2cfa779b545f006f355101"],["/tags/Django重定向原文/index.html","c5a319214f29953f17f639b78c9413bb"],["/tags/GIL锁/index.html","a83f79063ce17d33f467dd86c2c8cdd2"],["/tags/Hadoop介绍/index.html","5a5664dd4134e8d42edae847e2d01cba"],["/tags/Java基本知识点/index.html","13928ae4b497ec38aa7795d378f6365b"],["/tags/LinuxLiunx命令/index.html","c79bff162b51b9e8cceb538a1644d85b"],["/tags/Linux知识/index.html","0003a29ed4ce15312aa3baac11a4f66d"],["/tags/ORM/index.html","e46ff233568b0390b659958fb1475494"],["/tags/QuerySet集合/index.html","8e30d07f5f138a6c5211aa7db5b334a6"],["/tags/SQL函数/index.html","5f5dda08c8e7ef967c4750d87c3c56a6"],["/tags/SQL命令/index.html","989e5839dacace4d4edf9ec385baf7c0"],["/tags/SQL概念/index.html","677df2fac46eadf8220dc23e5e6e514c"],["/tags/SQL调优/index.html","2975eb04d76933b985667528c61a03eb"],["/tags/Void-知识点/index.html","2229318016acdd9c56436f2547bee74d"],["/tags/Vue框架/index.html","b1397f0ff5b01f8c08d7669620e2239b"],["/tags/docker知识/index.html","dfb903304e1867a3afc5a5044b7090bd"],["/tags/flask/index.html","cac20aae0192872d884a87973b4b1e4b"],["/tags/git命令/index.html","b078f728f1a7b3bf4533b85139f03d2d"],["/tags/git配置/index.html","061c1b4b96ada362462807fac50634a9"],["/tags/index.html","b17eb9c35a7a528744af85b549d10a8f"],["/tags/js知识/index.html","e17977035ca752188648006bbbde29e9"],["/tags/pandas函数/index.html","c007fa5cfdcf279279ee006583e9cb57"],["/tags/python编译器/index.html","4885f959d3fd1016d72e257326239eb1"],["/tags/rabbitMQ/index.html","8d0e8cb666ed6638612c3860500889e7"],["/tags/scrapy框架/index.html","92c204136189c473c2767762a8476b1c"],["/tags/selenium/index.html","6edacc60e2ce244675e637a24f9d5fb1"],["/tags/websocket知识/index.html","1cc844b65d0629fd0c5a246ca7e540b7"],["/tags/上下文管理器/index.html","2440cab0cc91ca81f705800af40587c2"],["/tags/函数补充/index.html","9ae1de4ab2fa235914b361fbbc3f1ea1"],["/tags/协程知识/index.html","9b262d4858cb874d010f273cdb0d4db5"],["/tags/基本知识点/index.html","c354e1c07886ff9c017e0357eaed8f21"],["/tags/对象引用传递/index.html","bba81c3c1f477d7f86c3d888c2e76381"],["/tags/底层原理/index.html","7b2124787a00e52849bb0555f2fa5ff0"],["/tags/扩展知识/index.html","9e908e39d743d580adf47f75c78d7c85"],["/tags/排序算法/index.html","83dc6ae002208dc82c9d9ab19234638a"],["/tags/数学知识/index.html","5c7dee0b6ef7121135e216eaf2a3675e"],["/tags/数据可视化概念/index.html","cff7d89b71e9d92a86e0553efc4b49ba"],["/tags/架构演进/index.html","74c8b94249b0b25f5441974876f5ee2f"],["/tags/核心模块/index.html","b1da5d51c680687e2d0c6aba01cec545"],["/tags/正则/index.html","4ab7c8782da362d5677ac141aa2b298c"],["/tags/爬虫实践/index.html","93c7a5b21f02894db9ec918782198b15"],["/tags/类和模块/index.html","fc122e65138ef9391c4c0ce8922eb660"],["/tags/类的知识/index.html","bf0f363dc62ed9ed9fde74a6793c38e2"],["/tags/线程概念/index.html","d5d1c1a0470d700beac4aa092612b34e"],["/tags/网站的基本概念/index.html","fdbdc1bd833a112b8b67b0d9036d59f6"],["/tags/网络编程/index.html","88be28e26290ce670b7b87c2d94137b4"],["/tags/装饰器/index.html","e5cc0a5a54d2a4151528d366a67be8b9"],["/tags/计算机知识/index.html","d7dd319123228c1004e20da90583730b"],["/tags/计算机网络知识/index.html","0cce7bfbc261b16f495df8cfc7d5901a"],["/tags/设计模式/index.html","1926d14c5c4fb8cc1af2782e8903f1e6"],["/tags/语音识别/index.html","a10626bfcfafd173a900885dc0416d1b"],["/tags/进程-线程-协程总结/index.html","05250a62e1c3106edd2cf04e7707ac4c"],["/tags/进程概念/index.html","e063465956b264acafc2ec4f8f4eea1b"],["/tags/面向对象编程/index.html","c7f75bff5e10f13ebe64a4dd781791d0"],["/tags/面试总结/index.html","06277918f13f920fb170d5f2d3a08cad"]];
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

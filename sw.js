/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","f6abefcae67ccbfbbb314b69b8308935"],["/2020/08/16/C 语言中 void 详解及应用/index.html","67ddab22be00392353f9a7676f2f8723"],["/2020/08/16/C语言打包技艺/index.html","4527310d56c305ab168cb769cf27cf01"],["/2020/08/16/C语言笔记1/index.html","4c7a4444259534900a90143b702ec65b"],["/2020/08/16/C语言笔记2/index.html","dd068280f77c0c8d05eb23aef714717d"],["/2020/08/16/Django 重定向终极指南/index.html","e373c661a164be06d508ee34e75a9687"],["/2020/08/16/Django参数和模板/index.html","4d264178aa20f2bad96fccc96f9e22ed"],["/2020/08/16/Django后端演化/index.html","397c3223ada70c3cba34ab4d7a829c8e"],["/2020/08/16/Django的Cookie和Session/index.html","da7042b341dce392d9db1c5ec0d027ea"],["/2020/08/16/Django的Field详解/index.html","704f7bb8019d1093f87a256871c518e5"],["/2020/08/16/Django的ORM多表操作/index.html","d552eab2470a30fe34fde57df1ad7d20"],["/2020/08/16/GIL锁/index.html","c36a62b960e0517fb5eeadd3f4cf63dd"],["/2020/08/16/IP代理池/index.html","318b387d3ae62c9cd22b207b63bec583"],["/2020/08/16/JavaScript的简介和基本知识/index.html","61b9fd70eacfc47421b0f89267abd03e"],["/2020/08/16/Java面向对象/index.html","99542fffa1c202e5ca31fa63d0bee7de"],["/2020/08/16/Linux常用命令/index.html","0392f88f7d8392d0c776a2336146cc66"],["/2020/08/16/Linux操作系统核心知识/index.html","e89e15f3426cbe7ff09b5fa833abc2cd"],["/2020/08/16/Linux操作系统（二）/index.html","437a9eeccc51c31859078c7429b1dc04"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","80cc7a1610ee92147f904edb1d9c6202"],["/2020/08/16/Mysql数据库函数/index.html","b7c6781130cf95b074e65890c4ac7fff"],["/2020/08/16/Python 中的上下文管理器/index.html","d492c3b47a250c0e89cd6c6621e6aeeb"],["/2020/08/16/Python的模块和类/index.html","f96552b0aede94c8def0e5017c08a706"],["/2020/08/16/Python类补充/index.html","0e74730cc61d98ab3a382593830d4f6e"],["/2020/08/16/Python面向对象/index.html","c77349b759c9b2bad7322bbeccdeee95"],["/2020/08/16/README/index.html","ea6cfdb885f277f5585b2c6a4af00754"],["/2020/08/16/SQL性能调优/index.html","bd47e1cf731b397b9f2b7a272c35c4c6"],["/2020/08/16/c语言笔记3/index.html","5260497a795362004b3e3887f7cbb8de"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","4807fca4826c914318e90a572a3c3174"],["/2020/08/16/django之url规则/index.html","49c32a0365785935a07b619cc8546587"],["/2020/08/16/django配置初启/index.html","682d3b1cd82794f18b11a55de0e86030"],["/2020/08/16/docker以及相关概念介绍/index.html","fb156c6ddcf5698b0ff07f9e12ea97be"],["/2020/08/16/docker信息/index.html","1931d595763f9b1ebb15b128714194f1"],["/2020/08/16/flask框架/index.html","9004af51faca8b0072816017e24f0bfe"],["/2020/08/16/git命令/index.html","c35ab8df063112b09bc400cb46504cb2"],["/2020/08/16/hadoop基本概念介绍/index.html","a9fb0772c579311c589624d88e6ea70f"],["/2020/08/16/java基本知识/index.html","b23ca2f1cfbc22c2a99820e73e3d478a"],["/2020/08/16/java简介/index.html","bda90f420cac1a8fea776e57df03b22a"],["/2020/08/16/pandas函数/index.html","3312452086557b3d4f18eae6070b5e0c"],["/2020/08/16/python函数补充/index.html","7338feb6e543affcad78dc690f56eb31"],["/2020/08/16/python数据类型的底层实现/index.html","5db61fd84ccec577e86ace1ac5048ab7"],["/2020/08/16/python核心模块的介绍/index.html","22a9db17b84122cfe30cd0cf0d515cad"],["/2020/08/16/python爬虫/index.html","9f62a52c0c26fbed1b6ccb7ef0b2d19e"],["/2020/08/16/python类的私有属性和私有方法/index.html","7ad85c52c57a4a42b2e02b30b8ad1807"],["/2020/08/16/python解释器介绍/index.html","84e9f37973e5294dc1f07b0eec728c78"],["/2020/08/16/python高阶函数的定义/index.html","3328cddc30e14d07b74d5fd52cb08fbc"],["/2020/08/16/vue框架介绍/index.html","9861ac569aa23880584dfa66fcbf4078"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","0dfb091357ee07efed2c152f9e06ccbb"],["/2020/08/16/京东全网爬虫/index.html","ee07ebb633ae80177c7f5824f99cb91b"],["/2020/08/16/协程/index.html","7750de5ae55f001b3e8bb6800b1e0de2"],["/2020/08/16/多线程/index.html","5df74e159d53f113e6413c112be49cc4"],["/2020/08/16/多进程/index.html","10ae28f3a15c5e28149ccc2204aaaebd"],["/2020/08/16/数据可视化笔记/index.html","85ca3b0ed82f9a0843e287a1fc92366b"],["/2020/08/16/数据科学笔记/index.html","dca56d949eefd5f80caca1f6508d4c66"],["/2020/08/16/斗鱼弹幕抓取/index.html","fea8808431e1797cc64f8e8e1e2f65aa"],["/2020/08/16/查看mysql连接情况/index.html","70bb70ee7834a598fb525cc2494f9cc3"],["/2020/08/16/正则表达式/index.html","f262c7dcd88c972c8a8eff140987021a"],["/2020/08/16/第一次面试总结/index.html","2ba407415fbf10f349390b8ca51285f5"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","9f541540ddb889d00ed7a8748f18d413"],["/2020/08/16/索引和事务/index.html","cc069d9d13e6c404e137a5436c58b670"],["/2020/08/16/网站概念/index.html","11f76b1c2366fb68d087233d21eee91c"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","f91c48b15de8d17d1342035fc29798fe"],["/2020/08/16/计算机网络/index.html","aef7d13e505159ef2ef53c8babb0bb15"],["/2020/08/16/语音识别/index.html","c316dbb142a8319201984377468dcaa9"],["/2020/08/16/进程,线程,协程对比/index.html","1feeb28ae575fa4b5c0e4b52f5154bfb"],["/2020/08/16/闭包和装饰器/index.html","c81e79ec627e056d397aae874e0314ac"],["/2020/08/16/面试总结/index.html","dc20d9a5450d3108b608c35e3bec6245"],["/2020/08/30/docker网络/index.html","302bcef32e46c7180e06f75d25dd7743"],["/2020/10/06/轮询、长轮询、websocket/index.html","cbedc82a622d29a1a2d511f10f73c78e"],["/2020/10/10/django的querySet详解/index.html","78e4a5d534da8928794d0d5076b4daba"],["/2020/10/10/设计模式/index.html","ea40eb9ee86da21b655b4586d940568d"],["/2020/12/01/MQ笔记/index.html","d1c6b637cabe9ce3d3bfc14169ff7812"],["/about/index.html","1b0beffdf74f3434f25fa80e415711cd"],["/archives/2020/08/index.html","6109113bc1ddd5eed0e61ac69015e7b1"],["/archives/2020/08/page/2/index.html","44aaa34c6e53aeb3141736e054f0627d"],["/archives/2020/08/page/3/index.html","a63f84ea6df314fd121c644abc739f68"],["/archives/2020/08/page/4/index.html","bf8528ea15503eb097e5fb10dad138d0"],["/archives/2020/08/page/5/index.html","959d537be426b4443e8fa879852a3bed"],["/archives/2020/08/page/6/index.html","fafec65b4747353c4dbf63215a41c115"],["/archives/2020/08/page/7/index.html","83d05fb83df039a3422341b8f2c8bf25"],["/archives/2020/10/index.html","eb1de2b5f766ed6afe10e671f4a49b03"],["/archives/2020/12/index.html","1ad5d917543aaea52ddf0647307199c0"],["/archives/2020/index.html","de84ef9d6190d6174c68fb53aeb89d77"],["/archives/2020/page/2/index.html","970447d3cdbb809271d6d020e9357223"],["/archives/2020/page/3/index.html","48ac7ec4ef75809d2f22cf1675be2162"],["/archives/2020/page/4/index.html","6d6f10889b434fde11c5284066962e4a"],["/archives/2020/page/5/index.html","56a45ac0c5371b4b8a042344dbb449f6"],["/archives/2020/page/6/index.html","f0c79995864aa772e5fade9d5a4d07cf"],["/archives/2020/page/7/index.html","8a497eec3dd23c728977950423ad3af4"],["/archives/2020/page/8/index.html","a4e4dd0f21b6ead2dff60b6688bbf8ef"],["/archives/index.html","bffba9660cd256a26f31fcfea342ed37"],["/archives/page/2/index.html","e8fcc346537aaa003594b278cff499b9"],["/archives/page/3/index.html","38787204a211ffcc3148cd8fe9d71620"],["/archives/page/4/index.html","a923d5ab832fe598e24e330bb63e4cb9"],["/archives/page/5/index.html","02ca2241c5a0f0bc6a8ad8dd9398d044"],["/archives/page/6/index.html","f84f561e3c88b092d8c8c6d11b00663b"],["/archives/page/7/index.html","c11d7806fc849502243e0abb6f9715ad"],["/archives/page/8/index.html","b68c1648d09c1790a0094b285a2085ca"],["/categories/C语言编程知识/index.html","0a3ca20bad84ce283ab914f8cd96491b"],["/categories/Hadoop/index.html","26e9ecb1718bf3bb1deed58b01733fdb"],["/categories/Http知识/index.html","7c037a6e3ddd3106ec630371c2f0fc04"],["/categories/JavaScript/index.html","58733a08d9456fdc80e2d6c004eaf327"],["/categories/Java学习/index.html","5f3be0baae71d1216affba424fedb16c"],["/categories/Linux/index.html","a9a11b65df65c600e742acbc7f326357"],["/categories/Linux/常用命令/index.html","95ca0be82eadf0ecf3a06d417d2c252b"],["/categories/Linux/核心知识/index.html","7b3ad7ad8ea60004dae32b2583b6926b"],["/categories/SQL知识/index.html","72e446db2e807c0f87a910aa372d6afe"],["/categories/docker/index.html","cb9215aaef1e96e28baa666e60809706"],["/categories/git/index.html","427da5ddf0d1c5964b592d397a4588cf"],["/categories/index.html","daa7626e2ff248177204f3d0f27c0256"],["/categories/python后端架构/index.html","d36199c402f370019b43f3b9d7732cad"],["/categories/python数据挖掘/index.html","edbe139627850409d4d6acf81521946f"],["/categories/python爬虫/index.html","1e1a602bca4ccb8015ced52f0a31d907"],["/categories/python的web框架/index.html","5d0ce80185788fe127db0263749e313a"],["/categories/python编程/index.html","a1e2f7f959659e75df07d590de98c5d9"],["/categories/python编程/page/2/index.html","95294d1ed4f9048bfc8b29ef88dbf450"],["/categories/python进阶/index.html","34bc4da155a97bef5a381c0cd7895887"],["/categories/selenium知识/index.html","d0df72a99e7fe03ab836bd85f3bbe5c4"],["/categories/个人随感/index.html","ac9ca1625257bb67b7ccde6414c4831f"],["/categories/前端学习/index.html","e9071393694b7713dc6e837739600338"],["/categories/数据可视化/index.html","247377fb8d6268347c7848d31774918f"],["/categories/正则表达式/index.html","a694b17bb8f64a14d6fb88ea7e966e28"],["/categories/消息队列/index.html","d300a9058bc54edfa11840b86b7dd858"],["/categories/算法/index.html","4e5877aa6c3a1cf4bfd8cf7bad09c1de"],["/categories/算法/五大经典排序/index.html","25d1fa92fc5befb3670c1c53014762fe"],["/categories/统计学和概率论/index.html","c560f5530665fc5b60e9a897b1a8b86a"],["/categories/网站知识/index.html","ffaf04a450e57960c8ba53e549a56df7"],["/categories/计算机组成原理/index.html","af9501dc587f91517dbe3d6205b98a4c"],["/categories/计算机网络/OSI七层协议/index.html","7a96254213e939ac23aa3a3b7b8932e0"],["/categories/计算机网络/index.html","b286fa87e71323ff9b4143cd9662febf"],["/categories/软件工程/index.html","801383e184bb48bc993514cc982182db"],["/categories/面试经历/index.html","c04492f556d14dae776aee12f0109e24"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","f42c8f149751bb9e6a78bae996014d0c"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","a1d611fdcbde44065fda495590dd52a4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","058643f6fad80b273b62821c6c8c1129"],["/page/3/index.html","93cc497ab44c955b2c0ed080cccb338d"],["/page/4/index.html","3ae990fad5406c2141445f93f626b2bc"],["/page/5/index.html","c1c4f2d7af6fd77495d750d282e621b9"],["/page/6/index.html","9ca366d20f5dda6d56198145d40be971"],["/page/7/index.html","df5b5e6b2dd0d89486a5064d5a154cad"],["/page/8/index.html","6db6a2e3369289a87ee2c1490aadb3e3"],["/sw-register.js","ae93d64a9ec53c20cb52aa5c246e5b1a"],["/tags/Cookie和Session/index.html","dcd1c9614a8d948552111a616add83ad"],["/tags/Django/index.html","43a563d23e96bdb0714e56bbb0347757"],["/tags/Django部署/index.html","87cafa9685070e1dc6536c82c0666f1a"],["/tags/Django重定向原文/index.html","c0cd1b38dfbe82d7f81cbf772c876b9c"],["/tags/GIL锁/index.html","66f3010004be42bd3fd08efe6f2c4ba8"],["/tags/Hadoop介绍/index.html","85a7a37fa956a4c0a295e1849ac1edb3"],["/tags/Java基本知识点/index.html","d3665e2df099047ba09da59b8cb60442"],["/tags/LinuxLiunx命令/index.html","6fe3a9f479436dc662c76ff6dddf7bf3"],["/tags/Linux知识/index.html","87ee2cb80c570a1f011442575e94f943"],["/tags/ORM/index.html","5a0a91c73833924e2a9fdd14c3d4b15a"],["/tags/QuerySet集合/index.html","6041cbc85897fb6de8653a6a8b69d85f"],["/tags/SQL函数/index.html","a5c35b73e5e1c8312d4f4acee62078da"],["/tags/SQL命令/index.html","d32114687ff898631cc3400da76a8c5b"],["/tags/SQL概念/index.html","93eba439a134e1f16d68f7b75bae4e23"],["/tags/SQL调优/index.html","db97481976cd63b22ae7ed496e4704f9"],["/tags/Void-知识点/index.html","cb6cbf7cf6d207e6720d1e2a05658c69"],["/tags/Vue框架/index.html","9bc58a0b9f169c480108acd8a748c610"],["/tags/docker知识/index.html","042f98f8041a1c98da39b64b3c87138e"],["/tags/flask/index.html","cc0c0d365fddb2f1505bae14ef6af11a"],["/tags/git命令/index.html","15f62fd62233d6231cbd7b436f445cdb"],["/tags/git配置/index.html","1b955d785a2c51c37f7fe7d446037fec"],["/tags/index.html","11339b02aa9cf95d8f5e3c31513104b9"],["/tags/js知识/index.html","16f57eba00391024a019b5ebd6694524"],["/tags/pandas函数/index.html","2738f7af12b6bfc1b90f79870d257152"],["/tags/python编译器/index.html","839ca91a1c86a4009c55273d6728d490"],["/tags/rabbitMQ/index.html","dad50840b6b88f546a12e3439e768faa"],["/tags/scrapy框架/index.html","e3e57ec56577643e3c5f438c99060c87"],["/tags/selenium/index.html","83fe9f1c3a56c4be0c489bb62c4e7905"],["/tags/websocket知识/index.html","bdbd160b232667b187e89f4d2796982b"],["/tags/上下文管理器/index.html","4030b77914806abc741f7f07e4e1fdf7"],["/tags/函数补充/index.html","62d30e502f1bbd9d64bde8babad238e1"],["/tags/协程知识/index.html","fec40681544b93011175ac2c24000b04"],["/tags/基本知识点/index.html","452cbe146cef41e8bb04010ebe5e82b7"],["/tags/底层原理/index.html","6d1654ce371de8d9b639f41bde4f7b67"],["/tags/扩展知识/index.html","8b7d955681cda226abb9f5cc303a265c"],["/tags/排序算法/index.html","a94a83c611e37306e3e8f350f0ac9299"],["/tags/数学知识/index.html","6778240d7f890db431d5f067d8a9bb36"],["/tags/数据可视化概念/index.html","e98dbe38f220ba61362bb4cd387f65ee"],["/tags/架构演进/index.html","0d5d5545177443d6b6314a8d539a176b"],["/tags/核心模块/index.html","6b5b6b15bdc3c606d1bc8c3086e228a9"],["/tags/正则/index.html","55982eded773a1c76000586b2ace1f9c"],["/tags/爬虫实践/index.html","8bc6b42eca1aa84e75874ab2b39d35d2"],["/tags/类和模块/index.html","10295dbf0ec3461074963882bc140070"],["/tags/类的知识/index.html","e104ede806a06a2177708337392fd3ee"],["/tags/线程概念/index.html","1dde61e75f189d9713eafcf963acecf7"],["/tags/网站的基本概念/index.html","fc6c6b6015e4981c63609370a822dd8f"],["/tags/网络编程/index.html","d340f9f66f994382de5daad0a2626a83"],["/tags/装饰器/index.html","ff44ebd0bfb8d29ff8a4551728948cef"],["/tags/计算机知识/index.html","0e7ca2c5cc7ea50575b6cab4387e8568"],["/tags/计算机网络知识/index.html","f2428ec7f59375c0cac4f029248eb2e3"],["/tags/设计模式/index.html","6048f01b52528b0d3b2732ca1b6b8751"],["/tags/语音识别/index.html","a8e890c6619cdd1b6fac110e5195b72a"],["/tags/进程-线程-协程总结/index.html","1a31d4d548f2a19cf6441f0dc441ba7d"],["/tags/进程概念/index.html","c4bf6cb7c44570ef19be2360a983be95"],["/tags/面向对象编程/index.html","c4b55100c5075faecef9c3abe964fbdc"],["/tags/面试总结/index.html","ca1f9435a13263cbd30aa18757dc6651"]];
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

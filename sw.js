/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","c113426c371b74b1b07359313ff6dee6"],["/2019/06/26/python解释器介绍/index.html","ebad756e55317fe48e18b180ea8ae83c"],["/2019/06/26/正则表达式/index.html","769af238183f642b8572c9a4528333e7"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","634e0f99e1d58a64d00569adcd2d2624"],["/2019/07/06/网站概念/index.html","c08f5a31243f5db56f5ee46d691dfa26"],["/2019/07/11/数据可视化笔记/index.html","49996e31571ad19d0713dd2e1fea7bc5"],["/2019/07/12/语音识别/index.html","2a8aed08b9c25eea63b461a0ee83b9fc"],["/2019/07/14/hadoop基本概念介绍/index.html","03921232a31c587041a7853c3e2ca5b0"],["/2019/07/14/数据科学笔记/index.html","3ae1afe34c7890ae89176d691538d526"],["/2019/07/22/python爬虫/index.html","b0b74a357a290ea5823a77a52b8b5d44"],["/2019/08/25/pandas函数/index.html","6ddd45034c864dea5caa03c5ecf3afb2"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","32f804dd7a67e78819c7c027e64e7c4b"],["/2019/09/30/C 语言中 void 详解及应用/index.html","7193a76b28536b3028a1434ab5479eef"],["/2019/09/30/第一次面试总结/index.html","f3c3a520425b5077b4d260538a27b06a"],["/2019/10/07/django之url规则/index.html","c36e648264bef15b13b989bfd74defcb"],["/2019/10/07/django配置初启/index.html","d23292ab27dd3642bf7dd39c6bc019d1"],["/2019/10/13/C语言笔记1/index.html","33f5ea245fbdbd8bbc77a3610a803307"],["/2019/10/13/C语言笔记2/index.html","802c2c7b88b613f0fcfdc75c1dbfad88"],["/2019/10/19/C语言打包技艺/index.html","31055ca509fcb0524813d383003fe9c5"],["/2019/10/22/c语言笔记3/index.html","a879cb8de50eadc5e46cfbf0349f7aa5"],["/2019/10/27/IP代理池/index.html","0d81bf972e79fc84af2ec84731a0e60f"],["/2019/10/28/git命令/index.html","6255d1f04163348f82c68b6fa68a68fa"],["/2019/10/31/斗鱼弹幕抓取/index.html","f01bb46d6881cd70d6919650f6695ab5"],["/2019/11/13/多线程/index.html","20616dd3bbe8466e19ebc1bd165ac686"],["/2019/11/14/多进程/index.html","122562fb5ef117c9c33ab3165d9a706f"],["/2019/11/15/python类的私有属性和私有方法/index.html","af9e41325f432cacc03ca438130a73e1"],["/2019/11/16/协程/index.html","27267c0f1d069db7d7d75caa9dd7a3f6"],["/2019/11/16/进程,线程,协程对比/index.html","4828ef17ac2f05f31c0fcc00694da2ee"],["/2019/11/17/GIL锁/index.html","9c229ea62b92ec31baaaf4053f21b038"],["/2019/11/17/闭包和装饰器/index.html","8fa13b213847d194ff3b580539bbf010"],["/2019/11/19/Python的模块和类/index.html","266b3c0a5192cc657d9ec109484813da"],["/2019/11/22/京东全网爬虫/index.html","dd2762fdd715830cd6aeb7fd4533e6d3"],["/2019/11/23/JavaScript的简介和基本知识/index.html","62027e876edd6d3e48ac4e8f627c4c3e"],["/2019/12/04/README/index.html","6e05c2716fa6552367d0fd7a4eca5078"],["/2019/12/04/java简介/index.html","432dbb47c880132858720cc51c78bedb"],["/2019/12/11/java基本知识/index.html","1d4ca9353657a3e8958e046384b85b6e"],["/2019/12/17/Java面向对象/index.html","7281838b6ecd44f11ccfbf12097de75a"],["/2019/12/19/面试总结/index.html","3d768e40f01258e4690eb2dba65be1dc"],["/2019/12/20/SQL性能调优/index.html","0ff0466ef182f6923338e7dad8a2d02d"],["/2019/12/26/vue框架介绍/index.html","e9e28b0f1f4937cfe4f3ee57dc37dac9"],["/2020/01/02/12306自动抢票/index.html","b61c462d28f06ed308622ddf1df114fd"],["/2020/02/24/flask框架/index.html","25c0109d47950b5e8695ba7f61fc1b26"],["/2020/02/28/docker以及相关概念介绍/index.html","5f37ddc9780f006ca235df8378cc032d"],["/2020/04/05/python数据类型的底层实现/index.html","a86d804dfc8d3e2dcbda68d9bc4ffac7"],["/2020/04/27/查看mysql连接情况/index.html","0c9b3de2d72f95d118f9eb16da50f659"],["/2020/05/02/Linux操作系统核心知识/index.html","ac01b3c28719288f35eb04b806a0bd3c"],["/2020/05/02/计算机网络/index.html","babbe2e1487d4ed02dedad5137322811"],["/2020/05/06/Linux操作系统（二）/index.html","b1780ad35b18fd849f6208a5a38f5ddb"],["/2020/05/14/函数补充/index.html","757331ac39baef950f251353a9e33b0b"],["/2020/05/21/核心模块的介绍/index.html","481b478ce562936138b5e151ef9b8155"],["/2020/05/21/高阶函数的定义/index.html","d3812bade07ba03d26bb91b789f0f5ed"],["/2020/05/23/Django后端演化/index.html","d24ab3bd36a73b0fe9323de22cc02364"],["/2020/05/29/Python面向对象/index.html","c0e06d0a518d1f9dd039a6701342639b"],["/about/index.html","2b76c9f5f237542c6fd07c94af92a10c"],["/archives/2019/06/index.html","ab583c6eeae5d85b8a3d8dddbb6702f3"],["/archives/2019/07/index.html","04eac4e13a55fb7f2bc7c091f96550d5"],["/archives/2019/08/index.html","3e73229477f7116aafe4d27238e99b9d"],["/archives/2019/09/index.html","4af9f703e9e08dc1a462030c4e79996c"],["/archives/2019/10/index.html","9b633b0cefe9a5305389aeb06a961211"],["/archives/2019/11/index.html","39796f9c268d998af1e5f2e5eed71ceb"],["/archives/2019/12/index.html","5ad8b785b006f43aa2c6a4e17d17d4d2"],["/archives/2019/index.html","9b2ec85cf193ee0441e7b90c7a2e74bf"],["/archives/2019/page/2/index.html","ce0ac9b2f4f61e7a2643a4c40fcf56f1"],["/archives/2019/page/3/index.html","aecaf9cd0d4799c9e20626f86a829a21"],["/archives/2019/page/4/index.html","e690bba30b05a9546a566eccfeb7896a"],["/archives/2020/01/index.html","037f2e7282577c38a00b3aa5d705cacb"],["/archives/2020/02/index.html","f1598ba10f1ceb7a60641bec36acca9e"],["/archives/2020/04/index.html","5311c7bdbd82f230cf170912bdaafb0d"],["/archives/2020/05/index.html","aea4ca17fa199e4a9e23e4408e6260b0"],["/archives/2020/index.html","2df4dd394294b396bc95de886c2fdb82"],["/archives/2020/page/2/index.html","19f7b0a9229d20a33720b6daa2a6cb64"],["/archives/index.html","9eff6c16150ccb83bebf8da2a95d6a12"],["/archives/page/2/index.html","20aa6e48cdf6c351c3fef43869f87c71"],["/archives/page/3/index.html","ca1907d1ea653d3cd4a9d54a2f3b7126"],["/archives/page/4/index.html","466be243bda43ec4893bcd96ab31b024"],["/archives/page/5/index.html","a986ee9a2a2c0d464001a616640f74d7"],["/archives/page/6/index.html","cc5d4803e525b99e1756fdfa4ef990e6"],["/categories/C语言编程知识/index.html","e27e1bc87d7ab7455bd166526bddf70a"],["/categories/Hadoop/index.html","31931e76459a687056a3cb097cbf2427"],["/categories/JavaScript/index.html","7a43dfe5233181242b9a73be00de14fa"],["/categories/Java学习/index.html","58fb4d1b9a4d596477b01800a3c57956"],["/categories/Linux/index.html","e5d9c92075284c9e2b1c0b476aabe077"],["/categories/Linux/常用命令/index.html","15e4fe23935f1f699708f0c3d77c0c54"],["/categories/Linux/核心知识/index.html","2fa34378ffd4d585d82e2f79bc88f13e"],["/categories/SQL知识/index.html","08416d8f0de0362b8319c6908ddcf481"],["/categories/docker/index.html","e4ba37c2d091ff34246eef3d0bea1872"],["/categories/git/index.html","164f3f3c5b7b6ad69268e11f5bafba62"],["/categories/index.html","d77a2b5ca88e0a060b211c1568a01a0f"],["/categories/python后端架构/index.html","6a3f6d49b466ee0935923549ce376fd1"],["/categories/python数据挖掘/index.html","9d23082914357b53086dd922c0b8fbf2"],["/categories/python爬虫/index.html","a8121717769f6ae58bc1084292a4f382"],["/categories/python的web框架/index.html","56bb0f323839c4f64b1d786bdf5a22e3"],["/categories/python编程/index.html","ac23c1ddda8903d3692c661844a81d7f"],["/categories/python编程/page/2/index.html","fa99dd0942aded8399b2ef11190bf7ac"],["/categories/python进阶/index.html","d8a048f753086a6bc601f27b1dfc5382"],["/categories/selenium知识/index.html","c8de2c5907554ac08a8e52f48ad26698"],["/categories/个人随感/index.html","fc4f1df72a06618a48303bc1138cc33b"],["/categories/前端学习/index.html","155deb0a977e73429a8086e60546232d"],["/categories/数据可视化/index.html","b59d17e6e16268081ad0064fd4a19e4f"],["/categories/正则表达式/index.html","dfa9fdbd1d985f9b7955fc54c23ef97a"],["/categories/算法/index.html","d7fc6f6631b0978f979c263c1ce622b9"],["/categories/算法/五大经典排序/index.html","bdd029dfad9cc840a75aa1606fcf9655"],["/categories/统计学和概率论/index.html","07359409df700cc3497c9f052620d4de"],["/categories/网站知识/index.html","3e3a9d98e2b8783fd7da0244a3fb2a3f"],["/categories/计算机组成原理/index.html","687e8d4ad4d23cdc4ceac72e57fe5620"],["/categories/计算机网络/OSI七层协议/index.html","2da56ccc5031bcf4289473012d6d1a03"],["/categories/计算机网络/index.html","cbbfd2dc8f8791ead512cf3aff46ed11"],["/categories/面试经历/index.html","3cff037617ee8719ec3bf6ee8a12910e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","829fd4b2b8a968837fbbd71a46278bb9"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","2475e488e4cbd30301cf13a87d64b5bc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","072a7910287161bab180e0cd620db2d7"],["/page/3/index.html","f19256a916005815275c7752fab345e9"],["/page/4/index.html","6561a37a951b64938cdd563f6e8797b7"],["/page/5/index.html","69bceef17adbc31f2d80c5352b202356"],["/page/6/index.html","b3b287a71d81f8dc3523f8776c649c8a"],["/sw-register.js","bc9f20229c001041dedacfd2244cdb9b"],["/tags/Django/index.html","073af6abaf2cbb87651b9bd149631393"],["/tags/GIL锁/index.html","7bc1961183677da4bd97028a242d61a6"],["/tags/Hadoop介绍/index.html","163028e062e38f390af0e63505665011"],["/tags/Java基本知识点/index.html","18dceb1195bcc7e12063b901d4a901f1"],["/tags/LinuxLiunx命令/index.html","51191914bfdeaae8ad734b4e835b15b5"],["/tags/Linux知识/index.html","6407849e703021fc4fbfe5a252894b8b"],["/tags/SQL命令/index.html","ba12844defc7fb7e06ac6d78a8af25a6"],["/tags/SQL调优/index.html","f9d6c83bb5e837ea64d693a22671f5dc"],["/tags/Void-知识点/index.html","50c1299a33e26790ee5e6620ddf17518"],["/tags/Vue框架/index.html","50e1de7437ea2d767492a746c4bdbff4"],["/tags/docker知识/index.html","d159d9ca9971112ed39aa5289dbd094e"],["/tags/flask/index.html","b66f646044de5135b8b2c78afb205fa9"],["/tags/git命令/index.html","9f8a7b1b2ff81917364b65755020fc04"],["/tags/index.html","48e41a55a058ae0855cbc7e2e7a394fc"],["/tags/js知识/index.html","c833ed068ce276698b77620b2da62208"],["/tags/pandas函数/index.html","ce11ab7ff29628bc1a31e9985abff2f8"],["/tags/python编译器/index.html","a50d63c2a157e7c06c2228208ec10e4b"],["/tags/scrapy框架/index.html","5c54606cd0c69ca05b12f8eacf6d9b5a"],["/tags/selenium/index.html","b3cceb6babb8b1c0f24566f64575985b"],["/tags/函数补充/index.html","d5b55d247a54c57f4b5ca47be6c11454"],["/tags/协程知识/index.html","f4f2433e8105a1f6d25fd2b0efcc1747"],["/tags/基本知识点/index.html","4a227d76cc9910483ab20be5ecf91744"],["/tags/底层原理/index.html","5f4da0210e01734653bb44ad283d802b"],["/tags/扩展知识/index.html","857186a55cdd607cb91357b705ca391f"],["/tags/排序算法/index.html","de12c38052fef3d0bd1a02b4dbc7eea0"],["/tags/数学知识/index.html","f20b1fedfc475de4977104d2e0aa2a93"],["/tags/数据可视化概念/index.html","544ac96971b7e89340faa5becc5a7d56"],["/tags/架构演进/index.html","5986813e6b299cf8f7e1b5777f005a07"],["/tags/核心模块/index.html","fd9048cb9629f24bc942ab1cbd5b3a51"],["/tags/正则/index.html","effce7598ab04bca6754b81126622507"],["/tags/爬虫实践/index.html","95450feef130238dfda147b031e67e2d"],["/tags/类和模块/index.html","9dd0c320f22ca0005b922bad8083dd34"],["/tags/类的知识/index.html","5e321fad37a81402b82bcded98900765"],["/tags/线程概念/index.html","5eb41838063b693d4fa1069bf512943c"],["/tags/网站的基本概念/index.html","4b7696cf0aab7fcfda7a2267d0ac5c91"],["/tags/网络编程/index.html","894acbfa6c3d004935a9698ffdc36e39"],["/tags/装饰器/index.html","fffc8c3fa55176ec9403fd65bd317433"],["/tags/计算机知识/index.html","adda467ac7c2c5e3f4066e8f13384b8d"],["/tags/计算机网络知识/index.html","bd0dd3d0c7812cdeca5e527d1876fc9e"],["/tags/语音识别/index.html","4cb3cd6f23e1195549eb46a430f8755a"],["/tags/进程-线程-协程总结/index.html","1ef7cf389a5e6e99a6f1759aad7d2138"],["/tags/进程概念/index.html","b4de98e260fe03608b1075795c4be785"],["/tags/面向对象编程/index.html","4337cacdd3707e8b90d8d0c1968e24ab"],["/tags/面试总结/index.html","ce6f090d6d8fe3deca278a13638f1fb9"]];
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

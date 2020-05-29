/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","3c08a0705b6a0e573524b416cbeef453"],["/2019/06/26/python解释器介绍/index.html","720af3972f559dcdf5d8fc23d6ec0584"],["/2019/06/26/正则表达式/index.html","b4afd7ab7060310548240e07b1e44e32"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","cb41466d357d6719015bf9b676c3137f"],["/2019/07/06/网站概念/index.html","d6c1db08fdaed4a703c632bd08e40fa0"],["/2019/07/11/数据可视化笔记/index.html","5cd8acc196c1159c9eec4bbbcb8bb325"],["/2019/07/12/语音识别/index.html","ab8f2df6e7133f30de80683608d3e4ef"],["/2019/07/14/hadoop基本概念介绍/index.html","f5755e305a3807d59d43bb1a58fac099"],["/2019/07/14/数据科学笔记/index.html","aaa3839795f9ed75e3b5b3cbee9a3369"],["/2019/07/22/python爬虫/index.html","c076f8216d63127cb501dd596f830801"],["/2019/08/25/pandas函数/index.html","8a7c979a1764177379a29fe2a0b8d637"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","63751117a65235e9f9e44d273e52af6b"],["/2019/09/30/C 语言中 void 详解及应用/index.html","f611407ff017c80eeb76e5c7ba743dfe"],["/2019/09/30/第一次面试总结/index.html","365e6d8f49bd8ed37f6c9c8c89002ecc"],["/2019/10/07/django之url规则/index.html","9a8dc5eebf9714d82fc8c177a9afbb2b"],["/2019/10/07/django配置初启/index.html","65d952bcbc6198b86894c6d978b6195b"],["/2019/10/13/C语言笔记1/index.html","b9d70298ac0ff39dc7a612ea9660b1a9"],["/2019/10/13/C语言笔记2/index.html","bb696a5ad08b058d1c2317f1f9845a0c"],["/2019/10/19/C语言打包技艺/index.html","3d8b50752d085e724fedc19ac796e377"],["/2019/10/22/c语言笔记3/index.html","3d0004da211557c3d568a3ce53e5d99f"],["/2019/10/27/IP代理池/index.html","423010804d5a27202a08b20b617e4166"],["/2019/10/28/git命令/index.html","59f56a0e2e75a43c2d17e2b42f209e96"],["/2019/10/31/斗鱼弹幕抓取/index.html","95fc853b86aa100e38a765ff41978d1f"],["/2019/11/13/多线程/index.html","2bd2ae5ff88cd9e0037199cf337b8596"],["/2019/11/14/多进程/index.html","37804c92bd213b158abd7958743ce0cf"],["/2019/11/15/python类的私有属性和私有方法/index.html","26a633a44c0ab59db8e96741947b3abc"],["/2019/11/16/协程/index.html","5954a4b3ff0b69c697bccc61fc33f58c"],["/2019/11/16/进程,线程,协程对比/index.html","26f18cbc6c3199a5ac03e1ea3d926e73"],["/2019/11/17/GIL锁/index.html","7428911a5322ebec772ff65f664cb500"],["/2019/11/17/闭包和装饰器/index.html","915039e59414032e741c091ac24c215a"],["/2019/11/19/Python的模块和类/index.html","aece4305f9069ed8be8df5638c7b122f"],["/2019/11/22/京东全网爬虫/index.html","9b9893df7a12c7f1db6ec0743ca778d4"],["/2019/11/23/JavaScript的简介和基本知识/index.html","41a388b3833755c68579fc7f25304b5d"],["/2019/12/04/README/index.html","635484f29e7dcb39f2c9d2f876593829"],["/2019/12/04/java简介/index.html","da207be16991c4fcdb7b7040719e621c"],["/2019/12/11/java基本知识/index.html","9a75abb52be81c67e148ba8625ce6aa7"],["/2019/12/17/Java面向对象/index.html","38eb14dd0ade64a292acac220eb93c30"],["/2019/12/19/面试总结/index.html","c545ee86de6096121a8e887e68d2fa78"],["/2019/12/20/SQL性能调优/index.html","1af4454457fc3c183196fd4d34b5063e"],["/2019/12/26/vue框架介绍/index.html","b786857a66c3f10fb79383d59cef6402"],["/2020/01/02/12306自动抢票/index.html","bf64398e2eaaf0202218e8c3251d1044"],["/2020/02/24/flask框架/index.html","5df6dc16b683b7919d3bc4270b5d82f3"],["/2020/02/28/docker以及相关概念介绍/index.html","dddab803b7f542a5ced29e1da2c3d215"],["/2020/04/05/python数据类型的底层实现/index.html","9925b2eb7f63aaf61189faad16c956b0"],["/2020/04/27/查看mysql连接情况/index.html","379ed6944d6fc6ddde1729697d7e829e"],["/2020/05/02/Linux操作系统核心知识/index.html","9c8c7c7cc8bb64cd2c7a52f43520c1a6"],["/2020/05/02/计算机网络/index.html","0461c6beb9ef64cb7216ac76e8e799f4"],["/2020/05/06/Linux操作系统（二）/index.html","e0f632916b9904fd0301c1912b2faa1e"],["/2020/05/14/函数补充/index.html","dff605dc44d96b1eb4fd0251ac871d36"],["/2020/05/21/核心模块的介绍/index.html","072d3071977f9826170fb6a893b79682"],["/2020/05/21/高阶函数的定义/index.html","e75e2dca4657606516a1debcf889d9cf"],["/2020/05/23/Django后端演化/index.html","66799bc2c18ddd9078f236277e01310b"],["/2020/05/29/Python面向对象/index.html","27b05dbd0f9bccc084a6db66ccd86c60"],["/about/index.html","e12167ba919da9231205bc4ebbe2afce"],["/archives/2019/06/index.html","3692153d4d34ee34ece3d0f6c8502cc9"],["/archives/2019/07/index.html","e78e6d39c8744fc3efffe93c267967c1"],["/archives/2019/08/index.html","eb9d5f1ce577ab41d290ecf6b76688c8"],["/archives/2019/09/index.html","d684cb6d4acd966fde0215a904d10752"],["/archives/2019/10/index.html","9863d0ad3ed12f63574117df68bea39e"],["/archives/2019/11/index.html","2cae8b3727e41daee321c8465785d9be"],["/archives/2019/12/index.html","add495b8305f172a9d48296e56921cc0"],["/archives/2019/index.html","f0da29a4c278966c567bf6f675db3e18"],["/archives/2019/page/2/index.html","225b6d661905db0a30ade0148e32600a"],["/archives/2019/page/3/index.html","4d17de146b10e9eaa4c3832c27031066"],["/archives/2019/page/4/index.html","9c316a1b52a619794642d091997cbe00"],["/archives/2020/01/index.html","f07a99bbe707729e2181540465a07c6a"],["/archives/2020/02/index.html","e9874ef10475470b77c6f8eabf380936"],["/archives/2020/04/index.html","62b1313b365993468081a8f94eb6ea98"],["/archives/2020/05/index.html","038602adc51fbe47db8acdb42181e115"],["/archives/2020/index.html","5fce32dc070b111770e8da1f83f24b31"],["/archives/2020/page/2/index.html","0439c9f474cc963d26e1c077527a687c"],["/archives/index.html","ce7b2538bf5e54bdcbc1dcaaedb0bed9"],["/archives/page/2/index.html","ca726a7398fe237b698ed700f912e878"],["/archives/page/3/index.html","c5d9fff8ad99068ee8e290e9575613d9"],["/archives/page/4/index.html","849d594b796814adccff3c1c301d7e30"],["/archives/page/5/index.html","f7865b51068cbfea5fa3b21b72b18430"],["/archives/page/6/index.html","2fcefdbcec3efb2f7c521556d5a865e8"],["/categories/C语言编程知识/index.html","7e961dc3a069470ccb4ca352668781cc"],["/categories/Hadoop/index.html","611dd2c08e75b2e9bec3c9c2a2d8a8a3"],["/categories/JavaScript/index.html","f4fe316704878af146fcd9066bc51bca"],["/categories/Java学习/index.html","9a18ac487c9ec32f943f6c77c33644fb"],["/categories/Linux/index.html","be6231a11e7e369bb193acf1745e3b4f"],["/categories/Linux/常用命令/index.html","fc9f99f356719a44fc7248cefbaecca0"],["/categories/Linux/核心知识/index.html","8935c83ccedd6a21bba89c3a9a52ab33"],["/categories/SQL知识/index.html","2647f917b15f86e3a08e8d09177efb88"],["/categories/docker/index.html","7bef40a80a83570bc651027bfeced383"],["/categories/git/index.html","0202dbf85058a1dfb73ddcbf614eb131"],["/categories/index.html","d8668a2ebb7b47f8dbfb48ae09fcfd1f"],["/categories/python后端架构/index.html","51090d24cbb772b0d2496e0904aad9e7"],["/categories/python数据挖掘/index.html","2873f327bd6cf7eeb5e1b6965640b326"],["/categories/python爬虫/index.html","1d134e7b68b54978fc7265ecd7b67e0c"],["/categories/python的web框架/index.html","7f0d7b4b8326a23d718e8e8a20ca4f37"],["/categories/python编程/index.html","399378b3fce1e839fae7b9e73dcdc8c8"],["/categories/python编程/page/2/index.html","f4404595ec373b76757fa7f9d9e640a1"],["/categories/python进阶/index.html","0b18e91b1543b00ff569babb0daef56e"],["/categories/selenium知识/index.html","0420c127f9695e87ebf20c617db5fdd3"],["/categories/个人随感/index.html","16ef75e681cca2d149b1fb5e68ff61be"],["/categories/前端学习/index.html","db3c14f28b135ee689b0696e6e573e45"],["/categories/数据可视化/index.html","d8df4a9b25f801f623cc2e5e188426da"],["/categories/正则表达式/index.html","cc624e3eeb1d7bbd3838cdee666b1def"],["/categories/算法/index.html","faf7edab0db8ba234eb321cf24aef641"],["/categories/算法/五大经典排序/index.html","a82d21b8f96ff0191e492f5afa73281b"],["/categories/统计学和概率论/index.html","e49ee39fb74f40e39eb8ece5fe9d9a89"],["/categories/网站知识/index.html","378e011ec85e1b0940980b5c91627281"],["/categories/计算机组成原理/index.html","9d7d482f87a324141326cf960c98deb9"],["/categories/计算机网络/OSI七层协议/index.html","9bd49e5973bb486ec2ad1462e47deac0"],["/categories/计算机网络/index.html","71482f57e4fdced508ad6c5f8a81d69c"],["/categories/面试经历/index.html","22b44c707e89326c600377f92d40f69a"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","829fd4b2b8a968837fbbd71a46278bb9"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","ba3b919de43f33a61e7c93e7973b0d28"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c45deddf903952ffdee60fa4d94ccddb"],["/page/3/index.html","43d9ba1155a09303028a9d9ad8acaf2f"],["/page/4/index.html","11015a5aeb0a0b96d3539dbbb7c96527"],["/page/5/index.html","ded4a32cd5bc4a3932ea30c91da95f6c"],["/page/6/index.html","a688abb7c355cd83b73167eb7e942728"],["/sw-register.js","3d3fa3ed0d247f1b744215c16dc7b304"],["/tags/Django/index.html","5a58f588ff84b118976273354c1ab640"],["/tags/GIL锁/index.html","3fa3f4a205ca61da97b604f4851df43f"],["/tags/Hadoop介绍/index.html","1e5e5acbe38aa7d73417d94d9ea8ec60"],["/tags/Java基本知识点/index.html","2856123a0d94ab9d01a61758b68957ac"],["/tags/LinuxLiunx命令/index.html","a8909e27f2cd3074060192a8d70acdf2"],["/tags/Linux知识/index.html","6532a017023a0920262b8bd54c742754"],["/tags/SQL命令/index.html","d77a1b8c712e4df749ad255c010257fd"],["/tags/SQL调优/index.html","760bf889df5c43c874d8e65d3934f73b"],["/tags/Void-知识点/index.html","c00d5712099eee70de43acdea9651732"],["/tags/Vue框架/index.html","44a4ee360ef5aed41e02cde24652a83d"],["/tags/docker知识/index.html","42c15aca70652fb4f4ab18c951e7e381"],["/tags/flask/index.html","06b75461d9ee9446c99d7a7a5e106553"],["/tags/git命令/index.html","58a88e3ceaa341be9c2b381c31ebbc2a"],["/tags/index.html","69173c4a55fd0d50c11ac7c8c1f1b34b"],["/tags/js知识/index.html","fd0815c06eb36d17c9169bf768b55873"],["/tags/pandas函数/index.html","4a5f6818fad2bb625a44a9c8264d3124"],["/tags/python编译器/index.html","8553e2bf39d01be4c683dd35e6f9969c"],["/tags/scrapy框架/index.html","33197aae9ce162cdafba4ce78521f50a"],["/tags/selenium/index.html","261d57b9081b89c0e0303bdfc8c9f70e"],["/tags/函数补充/index.html","010310c011035bffb700b9b50b52a195"],["/tags/协程知识/index.html","46b0a4886763079ce4e92e34078c89c9"],["/tags/基本知识点/index.html","612254c5c48aae883383acd7f2db17ef"],["/tags/底层原理/index.html","2bd3b06f85d9ce040a543ed5a7a04f6a"],["/tags/扩展知识/index.html","6fd62a5ae87e11e346d92f826a5ff876"],["/tags/排序算法/index.html","cece602ff9b3bc4fc65133128a5b2f1b"],["/tags/数学知识/index.html","50b016bd31e43160e0b297d4e8aeb348"],["/tags/数据可视化概念/index.html","880869dca861d7593aca613078c3f9f1"],["/tags/架构演进/index.html","5197f23a8c1b72a5fc0dd2e0281041e9"],["/tags/核心模块/index.html","191ea42892b22ea6c00f17f9bbf55969"],["/tags/正则/index.html","0cb49eaa9f9e48ca9c16f09bf5c2f558"],["/tags/爬虫实践/index.html","0c1ed6f8faca2af3ab9d88f6e7b42074"],["/tags/类和模块/index.html","9ae90371763516a475347e691f3fbd7e"],["/tags/类的知识/index.html","58362b7b0be5239331b25240d8eab35a"],["/tags/线程概念/index.html","64f8991c93f7d41dfdfb55b624de7db7"],["/tags/网站的基本概念/index.html","c6881f90eb46c8aa054f82e07964694c"],["/tags/网络编程/index.html","01bcca19b60036d79d0f410c0b401f8e"],["/tags/装饰器/index.html","154c4c93ae8ff2fa6ef6d7f1c3f9c95f"],["/tags/计算机知识/index.html","f61153a8a8116e6a683b9e54190d4934"],["/tags/计算机网络知识/index.html","5ee99804f1c03971bd21a749de22ac58"],["/tags/语音识别/index.html","15d99ddb8e4209cacfbba9918c6b3d0b"],["/tags/进程-线程-协程总结/index.html","e8dd97f121a870749bd9ec483900ffd0"],["/tags/进程概念/index.html","d04213760a8131af663d401213bbd458"],["/tags/面向对象编程/index.html","bf0441c45fc7ac50efd9214509a3c139"],["/tags/面试总结/index.html","83479c3f474f7da9b23b22126d1c5719"]];
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

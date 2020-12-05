/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","115632542bd2bbf27e9c45785c22c277"],["/2020/12/06/C 语言中 void 详解及应用/index.html","91602762baf74a6f675ac838d9b97954"],["/2020/12/06/C语言打包技艺/index.html","6c9fc9262e6be095addf774f36bc5668"],["/2020/12/06/C语言笔记1/index.html","1bb6e21c77e4f8d3c8443edc9d6dcd10"],["/2020/12/06/C语言笔记2/index.html","43af935a048aea8223853bc90079d4eb"],["/2020/12/06/Django 重定向终极指南/index.html","907f22fd24a94e6318c3e83f4b6a24d4"],["/2020/12/06/Django参数和模板/index.html","378a405ed864762aa8ad9fe73ea866ba"],["/2020/12/06/Django后端演化/index.html","b6d6688e6bf6306ef1f5dee53cb3d42d"],["/2020/12/06/Django的Cookie和Session/index.html","666b1050372df20a9076b9c7603189fb"],["/2020/12/06/Django的Field详解/index.html","5559c88b9dc1f03f4372baec7f5a975f"],["/2020/12/06/Django的ORM多表操作/index.html","fad1907f338413b30770d884b61b3156"],["/2020/12/06/GIL锁/index.html","0cdfe094f595522ca64694c841b5ba94"],["/2020/12/06/IP代理池/index.html","3e09a66efb401e58b55a29b37d2c6cf5"],["/2020/12/06/JavaScript的简介和基本知识/index.html","ca6eeab197e432269bdb0550eff5124d"],["/2020/12/06/Java面向对象/index.html","30609aec174baf3fac5e77adf0766890"],["/2020/12/06/Linux常用命令/index.html","bfe71671e1454f7c96aeec34272d61ac"],["/2020/12/06/Linux操作系统核心知识/index.html","b702b2c3bc4cf992bfc4d59bab24e0b9"],["/2020/12/06/Linux操作系统（二）/index.html","21beeeb9a8f660bc5024490c2d9364aa"],["/2020/12/06/MQ笔记/index.html","2883538396d85263c455d5aab3af92cb"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","4ca10f53a8b05c71e27ba724ebb3e33c"],["/2020/12/06/Mysql数据库函数/index.html","c5c3cba718c2bd596f94ffa6b1aa88a6"],["/2020/12/06/Python 中的上下文管理器/index.html","089a25494a9c6c0c0596677979261b84"],["/2020/12/06/Python的模块和类/index.html","62de6e319efa8d8b746a882b8b5c2622"],["/2020/12/06/Python类补充/index.html","339be33598d5db72c464ef03a2e5c0a7"],["/2020/12/06/Python面向对象/index.html","78b88acdf47ba7a758e54817785d437b"],["/2020/12/06/README/index.html","5c33f8560fa8d9ccf8d20099cb37080e"],["/2020/12/06/SQL性能调优/index.html","ca97b4571ba716a55808bd83be7c4349"],["/2020/12/06/c语言笔记3/index.html","19a51d679ad3ed5f902470255e68d24d"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","ca59496f7cbe42d217bea173611b9669"],["/2020/12/06/django之url规则/index.html","203763430620c42cda8ad5d804e92a82"],["/2020/12/06/django的querySet详解/index.html","c14c3577ea3561b7bae2814a2df5e6e3"],["/2020/12/06/django配置初启/index.html","38f4ae739bb64826817534d6d6f072ad"],["/2020/12/06/docker以及相关概念介绍/index.html","75a2d66b9b040a858eac203a23d906a0"],["/2020/12/06/docker信息/index.html","26b7489d014eb86317dda0eeb82c4a77"],["/2020/12/06/docker网络/index.html","2d183eb4e37f6c8e28df39756e164f37"],["/2020/12/06/flask框架/index.html","21bc210c2cf23faefbb91ebcfe4190f8"],["/2020/12/06/git命令/index.html","1b30d8cbb8e673fc249af3f4d535e3a3"],["/2020/12/06/hadoop基本概念介绍/index.html","d550a929e51af49a401d3c57ce32fec0"],["/2020/12/06/java基本知识/index.html","b249026b6c7b0b1d2bd452b61b56dd4e"],["/2020/12/06/java简介/index.html","e24c76844a69790cd0050f08206cb15f"],["/2020/12/06/pandas函数/index.html","28ddeb13416bdc4ed55c684f6aa82383"],["/2020/12/06/python函数参数传递和返回值探究/index.html","2f4f67ca15f4faaa2ef108d51fc45470"],["/2020/12/06/python函数补充/index.html","1271df6a32fbeb9a6a427a0411dcc90a"],["/2020/12/06/python数据类型的底层实现/index.html","4610929de6a7ace50739e4bf024fad08"],["/2020/12/06/python核心模块的介绍/index.html","86784ace0c8c8f19a1c840921526561f"],["/2020/12/06/python爬虫/index.html","9eb11c40ad714cb921e7e64ce125cff0"],["/2020/12/06/python类的私有属性和私有方法/index.html","3c1f483f92b18d2733d70a245a29efc1"],["/2020/12/06/python解释器介绍/index.html","1a20be786b68c86711e6769641f95165"],["/2020/12/06/python高阶函数的定义/index.html","74a0b54e8c60a82611171182452bcf67"],["/2020/12/06/vue框架介绍/index.html","26ae314f290706854e3affbfeb3c06b0"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","257d909b1b98bec9dc95abe7f40ead49"],["/2020/12/06/京东全网爬虫/index.html","84b750f19a0c41b79f0a0eba8e8419b3"],["/2020/12/06/协程/index.html","cc6ee658e223d11baeb63d271756e5e7"],["/2020/12/06/多线程/index.html","8d321a756ce43557e472af031b5668ee"],["/2020/12/06/多进程/index.html","b8b94f51951d77726279cc56ba847bfd"],["/2020/12/06/数据可视化笔记/index.html","bf0c7b947343be42e9f43e8a82a51da4"],["/2020/12/06/数据科学笔记/index.html","43feabe069537a7464b12c4dfd451322"],["/2020/12/06/斗鱼弹幕抓取/index.html","fca8cc0088e47389e8bb638b8dda697a"],["/2020/12/06/查看mysql连接情况/index.html","e02ea75201e4850fb511a346e4982ee5"],["/2020/12/06/正则表达式/index.html","665b381e81ae50535353c88e730744cd"],["/2020/12/06/第一次面试总结/index.html","22352e2c9cf4024686fcdeac1679dfce"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","73a1c24b62f553691b58094bb7271832"],["/2020/12/06/索引和事务/index.html","07e082be4ec0d91bb9de827cf23a0da5"],["/2020/12/06/网站概念/index.html","747505a34371a5417920c034ff08bc27"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","ab28ece3f758b642bad91f68b36f32bf"],["/2020/12/06/计算机网络/index.html","62fed41cb4ecde18e4991f1a2823f594"],["/2020/12/06/设计模式/index.html","bc27a77315d2331b7ebcdfbf3ae68c29"],["/2020/12/06/语音识别/index.html","7e64d20a9fad3abe9943e48985f76180"],["/2020/12/06/轮询、长轮询、websocket/index.html","4546066469bdd5b21141e9c86458240b"],["/2020/12/06/进程,线程,协程对比/index.html","88b5471590a97905c7b17f96c1a30a7e"],["/2020/12/06/闭包和装饰器/index.html","fcc5fac89488be8bf3e19aa1477982da"],["/2020/12/06/面试总结/index.html","de4b58c1586ce8a279b21d3ea44ffc0b"],["/about/index.html","486a7220ac6b6214d9f442d65c92da8b"],["/archives/2020/12/index.html","074c1edda0cdde3af3617a12882b4eb9"],["/archives/2020/12/page/2/index.html","36987d1b595233a8797685bf23eb3cd2"],["/archives/2020/12/page/3/index.html","e53834b815d1acb66e3309a3c9849e5c"],["/archives/2020/12/page/4/index.html","cb3306be0885239c85a436ffd91f0261"],["/archives/2020/12/page/5/index.html","5900282da8b91a09544816a6d017c2dc"],["/archives/2020/12/page/6/index.html","b973f86daa165f2e81a83c8caa77fadc"],["/archives/2020/12/page/7/index.html","056193893ca49b08a7aa4ed26566a46d"],["/archives/2020/12/page/8/index.html","88e1548206f7c3570b3548072f2a6793"],["/archives/2020/index.html","a7695ab74f4ba8c61472c6d5f30627eb"],["/archives/2020/page/2/index.html","15a5c06378319a0b24e5d3374670dc97"],["/archives/2020/page/3/index.html","e18dd610c67eaefa84a036dc0a7298d1"],["/archives/2020/page/4/index.html","3e7615394c9ae907c4584f21c4c797c4"],["/archives/2020/page/5/index.html","eabfe551ab229eb3fcb67c638432d0c7"],["/archives/2020/page/6/index.html","eb24d4bc1e6844cebd865af7bd98de58"],["/archives/2020/page/7/index.html","45f8781bad74e1f19f5a6f4c21e1fc3d"],["/archives/2020/page/8/index.html","da1a25134e31fc0d846921c20c3cffa4"],["/archives/index.html","aa0a92bbcf84f7132991642719532bde"],["/archives/page/2/index.html","6688070c12b5a0afe09afa88ccd1e29e"],["/archives/page/3/index.html","da19d2d68fbbb721fbd79cc914df46f8"],["/archives/page/4/index.html","7c978513a783f7b215daa4ec47c07c64"],["/archives/page/5/index.html","feaafa0004da779596a5f5e7ceb20cc0"],["/archives/page/6/index.html","63af883322e0bf9aba4f9c7a421cb81d"],["/archives/page/7/index.html","e4669f545092661b41974549659e69b7"],["/archives/page/8/index.html","8adbfdfcf793528e45730ee2d46cf3d2"],["/categories/C语言编程知识/index.html","759de1990a4d641b1deb653297a73c30"],["/categories/Hadoop/index.html","43cde1355c3020271c7bfb22af5092f6"],["/categories/Http知识/index.html","fe514d6ceaf32082dde3cf698a2d3073"],["/categories/JavaScript/index.html","adaaa3fe34b6a01755a1010bf2803fa9"],["/categories/Java学习/index.html","0f6de497c0dfaf749ebfc38dc7523ab8"],["/categories/Linux/index.html","2af37d68257d209c55758606aa915c1d"],["/categories/Linux/常用命令/index.html","f7652ac26378cd9c52fa9533349a4b23"],["/categories/Linux/核心知识/index.html","61d18c882c66bc9878d2549312304573"],["/categories/SQL知识/index.html","c095ee39c0a2108b08288d441b7492e6"],["/categories/docker/index.html","f5b7ce852774ee7e11f08e864e7f7b36"],["/categories/git/index.html","d7629449b6dfc6999eca901d271583a1"],["/categories/index.html","35e9d565e37d380b962a9a1da13546c0"],["/categories/python后端架构/index.html","32601a0d1f62e1ac39df69c00857639f"],["/categories/python数据挖掘/index.html","016cc5b1e438a5499d49d81a541750b8"],["/categories/python爬虫/index.html","d4c3e2e74530fd221d688fdd38dc9434"],["/categories/python的web框架/index.html","f9908752409432f362e735092f8a77c7"],["/categories/python编程/index.html","9202f746b07e8848e9d197f436107d32"],["/categories/python编程/page/2/index.html","3595d9a3bbc951140016dca134cc557f"],["/categories/python进阶/index.html","73eeec52acb8a16e3b04717a9353eb95"],["/categories/selenium知识/index.html","78acade2608ae7e3b5404c9f3cc038c9"],["/categories/个人随感/index.html","cf73bd1e03e8c1fe834c29560f9d1b4f"],["/categories/前端学习/index.html","f2531edca39847116a399c6f2b30ef64"],["/categories/数据可视化/index.html","dd1a482384aa1d56c7d38131c3fd13c1"],["/categories/正则表达式/index.html","320da94d97e0718069e4cfd6cdf13af4"],["/categories/消息队列/index.html","1bbec1297199b1d9de2cf1bb15de73ba"],["/categories/算法/index.html","a520a5d8d759e845c945829682a54dea"],["/categories/算法/五大经典排序/index.html","c3de376d5458fe6710e6d78629b2de0d"],["/categories/统计学和概率论/index.html","7231a7b3a7e479d85cb6b38ed7703f15"],["/categories/网站知识/index.html","62f87059856c7f295fe76259e2397226"],["/categories/计算机组成原理/index.html","1d4628f3499196568db886a36dffa69a"],["/categories/计算机网络/OSI七层协议/index.html","15aa2fbca8399495fada0ab1a4dfb133"],["/categories/计算机网络/index.html","7b0a3401f9b2f4bf118ba02b62cef61e"],["/categories/软件工程/index.html","83730cd7c120da24195b29a8ad816e37"],["/categories/面试经历/index.html","7f8d6d7e55909639c71177f4b80a5657"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","f4a3628566e6a2bff0f49231cc842931"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","92995439fa8603b95b37827d9ac04c1e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6404557ce11a3aeecf1b2c5d2f29354b"],["/page/3/index.html","d97568c5ab85fc7d525dd2a2e08e679b"],["/page/4/index.html","4a02d5a73de67f31c7fe4be4bb0136e8"],["/page/5/index.html","9b051b9265dff227cb951882409553c9"],["/page/6/index.html","533450dc711b581aa4c969300a1ea997"],["/page/7/index.html","03796f0270ed50770fcc9e0893513258"],["/page/8/index.html","1a3a465b63436b82d43390ffddceb5b1"],["/sw-register.js","c311e6fe5d58f0b584051d98ec97e3d1"],["/tags/Cookie和Session/index.html","a64c4f6e5a4033f26e7b89707392f98b"],["/tags/Django/index.html","2466d77adc43cf28ded659503c951f2d"],["/tags/Django部署/index.html","59b1e180e71262a390260652926deb12"],["/tags/Django重定向原文/index.html","1477a062fe0f3a54de11a6ab9bac88db"],["/tags/GIL锁/index.html","86c3f188f1872a7f200c1fc693b3b1bb"],["/tags/Hadoop介绍/index.html","ea58b84ddc65a90c7fedca67faf8a812"],["/tags/Java基本知识点/index.html","f6f77be048cad0389b186b6dbc94d54d"],["/tags/LinuxLiunx命令/index.html","ded66b7fbfcb75a3c88d9d9352f59728"],["/tags/Linux知识/index.html","1d37d29de9ecd2cb7f86ca63be1cb244"],["/tags/ORM/index.html","0654e548ff99f87b35526aab4b032a6d"],["/tags/QuerySet集合/index.html","af86955f44f83247ddc1941e05f2fa3a"],["/tags/SQL函数/index.html","0ce7a297460c6be3f01633fbb7c5a06d"],["/tags/SQL命令/index.html","c51736fd5e5007d99c4f2cd8b5e6d6c2"],["/tags/SQL概念/index.html","9970db3efa8e32a53b1ea95e2878e352"],["/tags/SQL调优/index.html","c6b1421b87ec71c9b7bef89ce6d46b6a"],["/tags/Void-知识点/index.html","760fe007f2f2537a03cf2661c181b967"],["/tags/Vue框架/index.html","5782061fa6a7652359d685ecb621a83a"],["/tags/docker知识/index.html","ac34cb9083847248d900e05dae49af1a"],["/tags/flask/index.html","95126cabda00ed8a0dd1a9d85da2ef3c"],["/tags/git命令/index.html","aec62dfc5887d782b03fe41103a75532"],["/tags/git配置/index.html","fd05bc66f53c40a031d2de216bc20d16"],["/tags/index.html","8582d0f2c0c4316dfa44c524ad178f13"],["/tags/js知识/index.html","0320573e7e49c05964a00c8c525c426d"],["/tags/pandas函数/index.html","f2ca7e45f8e110daf5697c5ec2bb099e"],["/tags/python编译器/index.html","91569417215aeb5677c91dbb9c971501"],["/tags/rabbitMQ/index.html","a6b2d5ecb2219a4258eeccf84bcc62f8"],["/tags/scrapy框架/index.html","49370d7e27e67ffb9b40c5f4a79dd55d"],["/tags/selenium/index.html","2a30cf252b925f5611dfc9477a80d2e7"],["/tags/websocket知识/index.html","7bbdbccf584b3449774f3a5ca0702f6e"],["/tags/上下文管理器/index.html","7cbfe8d0ccbe50ef58d1c060047cd4b7"],["/tags/函数补充/index.html","030fa2eab60dc04ea6a166bbd5c25f38"],["/tags/协程知识/index.html","15258b6b63d9decbb10ae172cf13facd"],["/tags/基本知识点/index.html","baa734905fd68ba6e65a51f15eb7484d"],["/tags/对象引用传递/index.html","a544a1dc2d182ca9334979106b809626"],["/tags/底层原理/index.html","0936b461e93310e84c8adac794243692"],["/tags/扩展知识/index.html","5ff5c943cf698bdc3ea26b96a5cdccaa"],["/tags/排序算法/index.html","386711c36b195d2258b1d76eacecd1d4"],["/tags/数学知识/index.html","961d74b5d69328badb82f0cd0deb85ba"],["/tags/数据可视化概念/index.html","034fd46dec3d3beafaa36fc0a9ef9c49"],["/tags/架构演进/index.html","80e8309ad86cf196a413a250fdaa2788"],["/tags/核心模块/index.html","8f66e20cf8c0df8b4ea4856889ac532a"],["/tags/正则/index.html","63150119f92e02e2db50909efb3a8f92"],["/tags/爬虫实践/index.html","a46247ee64d7ca6a2a6ba1d7acd4c32b"],["/tags/类和模块/index.html","1be0296b8dff192089c364bb4e6f54a3"],["/tags/类的知识/index.html","130033a6256d659f3b6e50e0199bfe54"],["/tags/线程概念/index.html","399cbebcb2a46bb1be6eaed8c1773d7b"],["/tags/网站的基本概念/index.html","d88fbf23760fbdb1ea8278e5c7d757b8"],["/tags/网络编程/index.html","0160e743fb677c3ae100f01f614ef7cb"],["/tags/装饰器/index.html","53dc07c9986ffa4d49fa626d02cd0158"],["/tags/计算机知识/index.html","a5f13c97c3b42cad996c694d3974aca5"],["/tags/计算机网络知识/index.html","ca62f7fdb8140c03e8836eafbcf7a637"],["/tags/设计模式/index.html","b0a4272b05a68b06a8242b7b4bdc4a94"],["/tags/语音识别/index.html","306f285f13a1a776f225453744a7dd79"],["/tags/进程-线程-协程总结/index.html","a0acf716dda665e00122b7bb9bf4d6cf"],["/tags/进程概念/index.html","a76e1aa15c0025696510e970799b2777"],["/tags/面向对象编程/index.html","370dbea1fd0134e69717ca51ef7dcee5"],["/tags/面试总结/index.html","000ff5430b19f73fb4d52610123b7469"]];
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

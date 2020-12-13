/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","2e5854a05d246110b820480285281201"],["/2020/12/06/C 语言中 void 详解及应用/index.html","1945551d5ae73e08f3ae3e20acf0369f"],["/2020/12/06/C语言打包技艺/index.html","b49e6dcfe552a75ca85e3a8618cc21fe"],["/2020/12/06/C语言笔记1/index.html","d24c092aa61ce8ba27efc326c61bdda8"],["/2020/12/06/C语言笔记2/index.html","e7ab80d4e848fa3e175acd5a74a81f04"],["/2020/12/06/Django 重定向终极指南/index.html","1b5e03fa13c59da31915d2b3f8939896"],["/2020/12/06/Django参数和模板/index.html","55f34e4572503db4a3e7f727ec43e51d"],["/2020/12/06/Django后端演化/index.html","31046edb072f3227e46783cc2c1f10f5"],["/2020/12/06/Django的Cookie和Session/index.html","2fce53406b032c137468c870bd179495"],["/2020/12/06/Django的Field详解/index.html","fe89b681d127f7044f26a0f9eb1c23c9"],["/2020/12/06/Django的ORM多表操作/index.html","0bb9e0ce4be432c9128fbbed53980b8e"],["/2020/12/06/GIL锁/index.html","1b859799cff686183466aaa5d94c40e0"],["/2020/12/06/IP代理池/index.html","9fc2f95acfb40af0f421d24641bf2469"],["/2020/12/06/JavaScript的简介和基本知识/index.html","d11b804440273ed6164d55af5103babd"],["/2020/12/06/Java面向对象/index.html","219cab36caed46844636003d60df134f"],["/2020/12/06/Linux常用命令/index.html","129714ea8582283795c37d8b6b5ab21d"],["/2020/12/06/Linux操作系统核心知识/index.html","9801b47c56a387b43cb1670aa8f1ca5d"],["/2020/12/06/Linux操作系统（二）/index.html","8bfcddca13293eae6e6e476e689e861d"],["/2020/12/06/MQ笔记/index.html","1e346c43e6fbd2fc173d55b333be3df4"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","f8ad88e89aa501a7dc35000a6bb61568"],["/2020/12/06/Mysql数据库函数/index.html","01fbc55b2f530d5da3debf0555555d32"],["/2020/12/06/Python 中的上下文管理器/index.html","703a24cc87d95f6754da48a79f1ebaae"],["/2020/12/06/Python的模块和类/index.html","980bb10fbb0d7935f07e906ad91d521f"],["/2020/12/06/Python类补充/index.html","e1adb42fb08f1bd14a3f2543db8fef8c"],["/2020/12/06/Python面向对象/index.html","38fad38b1766b51792734e25acd96f11"],["/2020/12/06/README/index.html","6df7b30a39d276dffe73c012c1ed4031"],["/2020/12/06/SQL性能调优/index.html","b3d39c366b7331779410820218b2ed39"],["/2020/12/06/c语言笔记3/index.html","a9ab79e9f282f1429cf9318231dae8b1"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","138dce90b7c3ef28a534ab33cc8e4020"],["/2020/12/06/django之url规则/index.html","f015955612a111d3e2693fa56466bc53"],["/2020/12/06/django的querySet详解/index.html","6d9c581be26f7499f99793a22c7a7012"],["/2020/12/06/django配置初启/index.html","ab0b5f82432671dafb1029c2748aa40b"],["/2020/12/06/docker以及相关概念介绍/index.html","b5c3c6e044e74030d124a043b6fd6ffb"],["/2020/12/06/docker信息/index.html","6a384d57c17ae2bcc25677146824a20d"],["/2020/12/06/docker网络/index.html","4510e67c0cbd1cc847fb3d06c8960521"],["/2020/12/06/flask框架/index.html","5431bb83e77381b9421931632aa8848e"],["/2020/12/06/git命令/index.html","5576fa624481872583949e5d7c18269b"],["/2020/12/06/hadoop基本概念介绍/index.html","ee200b2e281c402b36ed01e96b81ec41"],["/2020/12/06/java基本知识/index.html","80f60b63e91170375f0e422b8900477a"],["/2020/12/06/java简介/index.html","bd512f07fa0b3c721d71fe506fc7f0aa"],["/2020/12/06/pandas函数/index.html","54d0e77fce8285cdd4311df172c0fbfc"],["/2020/12/06/python函数参数传递和返回值探究/index.html","4a0f94adde0488864bb422d3fcc7f892"],["/2020/12/06/python函数补充/index.html","600447d6713c4915b3f8eb493a54fbe9"],["/2020/12/06/python数据类型的底层实现/index.html","a0d691315e2a2dd7b84a7853608bccbb"],["/2020/12/06/python核心模块的介绍/index.html","a345f6052bef62290952400ceff9af51"],["/2020/12/06/python爬虫/index.html","8730ebeca3dfff971835c2c44f9b6ba7"],["/2020/12/06/python类的私有属性和私有方法/index.html","e587b66238dcf3e33e653e9e3958f461"],["/2020/12/06/python解释器介绍/index.html","d8d7a78db86f345f22cb578f69bbd48b"],["/2020/12/06/python高阶函数的定义/index.html","097441b7d4e98037a88322816815b97f"],["/2020/12/06/vue框架介绍/index.html","3dbffa18beba7e7cd265558aeeb9acf2"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","cbf132d941be4ace49c46fa391f48bda"],["/2020/12/06/京东全网爬虫/index.html","397b890c6a59a91f4b7677771ed236b1"],["/2020/12/06/协程/index.html","ab6d065c0be6e1e9b5a7eaa5a5904731"],["/2020/12/06/多线程/index.html","657f1f3df91d960963acbe2707497d10"],["/2020/12/06/多进程/index.html","bb3b536febebe531adf62783818eaeef"],["/2020/12/06/数据可视化笔记/index.html","28eae5daaa4bb18f5c4009cfbb5c2e73"],["/2020/12/06/数据科学笔记/index.html","3cc978ba0ce9783e95f5da74e9da2b2c"],["/2020/12/06/斗鱼弹幕抓取/index.html","08065ed2ecfb9ab7f14c92789359cd49"],["/2020/12/06/查看mysql连接情况/index.html","d29faa3de2bb5f4bed32d0007c5636f8"],["/2020/12/06/正则表达式/index.html","19d25e46d57e3bdaaf1770fe2d7cf08f"],["/2020/12/06/第一次面试总结/index.html","d630aeda70cbe6fa6dfceec3edee094e"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","361ef4fe14d5ddd1d9a7860bfd2f43df"],["/2020/12/06/索引和事务/index.html","7a73106fbf08e4b52a0fd5fe504eb2cf"],["/2020/12/06/网站概念/index.html","8d76011365468153af914a0d35d3f36f"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","9e07e3de94732b430d98a779276ec091"],["/2020/12/06/计算机网络/index.html","9758cb2b8b3184934f298e483c49d2b1"],["/2020/12/06/设计模式简介/index.html","d1d6cb7f567335855ecd885bfca54625"],["/2020/12/06/语音识别/index.html","83e2066236d68078d4031c30167f8e3e"],["/2020/12/06/轮询、长轮询、websocket/index.html","49b8a848975a1b3b8a2dc4150abf749a"],["/2020/12/06/进程,线程,协程对比/index.html","0f159831014971d632091eadb985c139"],["/2020/12/06/闭包和装饰器/index.html","e37622ddd86fa6820f6dcfeee3befc00"],["/2020/12/06/面试总结/index.html","eb70f11b6d88a60acb60b70f4cbc3d7f"],["/2020/12/13/鸭子类型/index.html","5148569eea356c1a647358f71dff3940"],["/about/index.html","751a58d7a1ea57d81bbc171f126fa832"],["/archives/2020/12/index.html","63cfd6a1a33abe5dbe5ad0c41e43a89e"],["/archives/2020/12/page/2/index.html","403222bb5aa4a1d0d7f527afc57f5023"],["/archives/2020/12/page/3/index.html","7e3601371b18578ea1691df6763cf583"],["/archives/2020/12/page/4/index.html","12cf57e252fd342a6602cc4dd57688e6"],["/archives/2020/12/page/5/index.html","486850add6cf3fe56d7a59943d3837c0"],["/archives/2020/12/page/6/index.html","ec3181c45aa98ae295df0bb8febc36bf"],["/archives/2020/12/page/7/index.html","d9648f386c68a16dc1469b88ff310338"],["/archives/2020/12/page/8/index.html","428f8b65ad2c1b435dc7a568e4f5738f"],["/archives/2020/index.html","0e8f129560458893420ff2a8f5a13b64"],["/archives/2020/page/2/index.html","e0835085de2b88ef71136ca59220aa6c"],["/archives/2020/page/3/index.html","6f98a5d616af70c734273360b50c29a3"],["/archives/2020/page/4/index.html","2a8054f05d77627cf033cc928445dffd"],["/archives/2020/page/5/index.html","c37f79841e8c451129214bd4fc084fa6"],["/archives/2020/page/6/index.html","6ca5efab495f8926368014b0374e883e"],["/archives/2020/page/7/index.html","3f672399b341cb05321ce52437b71395"],["/archives/2020/page/8/index.html","1e076d51e36265efa08a5ca1955eedc4"],["/archives/index.html","795daf5fa0ce3fc7eb1dd7d86c43cc75"],["/archives/page/2/index.html","e2a926b232071802356f1a23a5574121"],["/archives/page/3/index.html","034b03872fb7a411e7b54c2fe1425b17"],["/archives/page/4/index.html","619efcb33d298945d5b6a34d799576cc"],["/archives/page/5/index.html","cb4d3f2e8c1941a81609674568aaf13b"],["/archives/page/6/index.html","96dbd52a3e12f4446b77e4ef21d56e13"],["/archives/page/7/index.html","a8056a1d67d68e7a581a7a0b988b5069"],["/archives/page/8/index.html","9c4752af2a529e4eba411caf749280b3"],["/categories/C语言编程知识/index.html","81a17bea5e0f6f14c964d646c0ebd6a7"],["/categories/Hadoop/index.html","e994674879914e1c7cddf4f4d172c599"],["/categories/Http知识/index.html","cbc3d492594bd1347b03d5f7b658edda"],["/categories/JavaScript/index.html","8905ca3ace8d8d6e858645915757abdb"],["/categories/Java学习/index.html","938576a44b7bd05da647b8d4371fc11b"],["/categories/Linux/index.html","56d027c18be35e72b9ee09e45f7af687"],["/categories/Linux/常用命令/index.html","f8bea6b5710047a6ccaff4659935a07c"],["/categories/Linux/核心知识/index.html","90fa985d80cda0be143869f29662eb5d"],["/categories/SQL知识/index.html","bc6ea03f2c7d8f4acfb409f0a4b11500"],["/categories/docker/index.html","9573a0023faed634cb3dd8152a39945b"],["/categories/git/index.html","a6ee3650212a2838efbd73a2891819d8"],["/categories/index.html","f9f9a52000913df07a7d24f56eced44f"],["/categories/python后端架构/index.html","d0cd2de703694b71bab7ae227a2637ee"],["/categories/python数据挖掘/index.html","a4098bd047789d5397d09094e3e94cca"],["/categories/python爬虫/index.html","64b7e5e4bd2bd8086404b1e4e7ce6c63"],["/categories/python的web框架/index.html","1426fc96ea3a74b141918edf69d36a0c"],["/categories/python编程/index.html","eb86330f5eb44e9f032fd4bef03d5c8a"],["/categories/python编程/page/2/index.html","3123d832dd0b3c4a013c650b05acf238"],["/categories/python进阶/index.html","41beaa4481211614564c5966b1b6f784"],["/categories/selenium知识/index.html","10e81155a2b1216aec98eee187b1ffd4"],["/categories/个人随感/index.html","58430fd0239c5508bf8b8282ebec03a0"],["/categories/前端学习/index.html","4f1a862f0649068bda9cf7192d3e9c9a"],["/categories/数据可视化/index.html","71b7ff3cd67cbd5061c5a308e7a5d852"],["/categories/正则表达式/index.html","260608870d1a92c67e1dc3597f9fc41f"],["/categories/消息队列/index.html","2f5b53c894cdcee9c1e2b9dcb0cbeceb"],["/categories/算法/index.html","0504b6c4b3a4f9475f950df852ee5f66"],["/categories/算法/五大经典排序/index.html","b77f2b28d05eb182e2e6de2687e96a84"],["/categories/统计学和概率论/index.html","3d9ecfddd06212898157b3f9b170288b"],["/categories/网站知识/index.html","c34cf212361dc6ca523659b36428c8b1"],["/categories/计算机组成原理/index.html","a7fc6229c964057c5e55fd74e1d5aa9c"],["/categories/计算机网络/OSI七层协议/index.html","e11e3e438bcd52ecd5cfc82e0eadc59d"],["/categories/计算机网络/index.html","772edf057e4f5e95befb639f456f3bdd"],["/categories/软件工程/index.html","eb33e7f9e0f3f6eeccb8a454ec4bff16"],["/categories/面试经历/index.html","c79893bd4fa97214f7ec09971be2892d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","dcef272d95d72af6df10cb6a44deae27"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","f3fa375ceb99c0a56bc01c4839fe5ba2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b4f3d6680c125622ad5a395e92bd3066"],["/page/3/index.html","ed5bc2fc22c62bdf48edadc0a473c42a"],["/page/4/index.html","1612bf07ef8bca47e0ca0f0b0469d62c"],["/page/5/index.html","a74dde3ce124375deb24772e4386d4b4"],["/page/6/index.html","1692ffbd2736cb716e381ab4068e1c43"],["/page/7/index.html","0d567d57833dc98bc2beba551f2de8ec"],["/page/8/index.html","83bf5301eca2c7ae3b9784a810d712ec"],["/sw-register.js","d6705ba93ad566509c6369a85085b457"],["/tags/Cookie和Session/index.html","cd69237cde8c2c3d6a497150194cb527"],["/tags/Django/index.html","088023cd67561fcea172801f00f24d24"],["/tags/Django部署/index.html","c6cecd0f74e38485f6b5b5102f5cf28d"],["/tags/Django重定向原文/index.html","1852041e2db7f0bcdd34036ed324c83d"],["/tags/GIL锁/index.html","e0aa55ab6ada6249961fce8761d2bc0e"],["/tags/Hadoop介绍/index.html","623ebb98ef6b627c3b4448ba754d8aeb"],["/tags/Java基本知识点/index.html","2628b4aebc0e3abe7e9cfcac6cf01114"],["/tags/LinuxLiunx命令/index.html","0a28602fc151de449aa8d9e7f8ceac59"],["/tags/Linux知识/index.html","fa0215935a1e480fd1ef42d4d1f8a432"],["/tags/ORM/index.html","21c8250670a068aac33d18219cdaece3"],["/tags/QuerySet集合/index.html","902cea3ef825891fd007b5342b2d3322"],["/tags/SQL函数/index.html","485bc51a4c49817238664aabb6f9acc0"],["/tags/SQL命令/index.html","cb5ed9133eba1eae00487bf547aee37c"],["/tags/SQL概念/index.html","986a44abcfc6d34bf51bee2fce97fb58"],["/tags/SQL调优/index.html","c4d73bc3900fdea6a7fe2b49a746afbd"],["/tags/Void-知识点/index.html","ddd979a9048f17a31f5cadbb5975f987"],["/tags/Vue框架/index.html","6b80b8fcbc8483d33bba0b22b1655587"],["/tags/docker知识/index.html","f60755cde2f192d94a01cd7383ebe1c4"],["/tags/flask/index.html","d96879802e6e6335aacebfecc87b1499"],["/tags/git命令/index.html","e8b0e7366e2ca97485229b147220ba9c"],["/tags/git配置/index.html","5d015a5ce36a6bf9bf6d419e30c6a864"],["/tags/index.html","24f47e1b47710e1f90cdf04a9a69446b"],["/tags/js知识/index.html","b2b2d35488f7abb4510f9bb569513f1e"],["/tags/pandas函数/index.html","210f9ed5439a49d61ada89ba22f152cf"],["/tags/python编译器/index.html","bcd0c8816e55b90157ab0685ca16775a"],["/tags/rabbitMQ/index.html","969ab89900b5ca815c5f1208ffab948b"],["/tags/scrapy框架/index.html","15c3f869128ebc80bb8f1370c000ec9d"],["/tags/selenium/index.html","e9c250fc824c46a7ebc33ca12175a27f"],["/tags/websocket知识/index.html","fc341f4e633bb5dab2f3b5b22035332a"],["/tags/上下文管理器/index.html","e41754c4c9cee4bbc7b4b26ccf8974dc"],["/tags/函数补充/index.html","04049c3873c66b1fbeff8251379f0189"],["/tags/协程知识/index.html","60a1445101db0f32e64d5785d0baa90a"],["/tags/基本知识点/index.html","4bbac10809a8a5462ac06605c3305eed"],["/tags/对象引用传递/index.html","c48c8f7d5446bebc5d4297f1d50acccc"],["/tags/底层原理/index.html","d8a7e8deed1bd5e670c379c1177a6a6c"],["/tags/扩展知识/index.html","271511ec44b690c5edf7de6e2b40a648"],["/tags/排序算法/index.html","119eca38e767236272e764cd5a2fc2d0"],["/tags/数学知识/index.html","d3ba2f3dcd190c043536410a98404281"],["/tags/数据可视化概念/index.html","99687474f4be719fe2e24b360ed5daab"],["/tags/架构演进/index.html","e6e41d870dd98fa7b9d05ba0fb767526"],["/tags/核心模块/index.html","a275af80f5c2272491f518efcf6a6446"],["/tags/正则/index.html","da8d1ca3722ec0c786a40709634012ea"],["/tags/爬虫实践/index.html","240c3b213361990f43c48dcbb540609b"],["/tags/类和模块/index.html","0e4124fe7554542ad74e97963920b1e7"],["/tags/类的知识/index.html","be61a710e9e026f5587d9adbdcfb38a7"],["/tags/线程概念/index.html","5ffa0595cdf96dd80cc7541796e73a44"],["/tags/网站的基本概念/index.html","200bf078c0f413188c044ae04ed208ae"],["/tags/网络编程/index.html","87d5fbba265bea48fe5966be511358b5"],["/tags/装饰器/index.html","4f7d23df9cf42f421902397b3b1e260f"],["/tags/计算机知识/index.html","77ff0f97f75cfdb249228bc5baf365a3"],["/tags/计算机网络知识/index.html","b8be4ecfb02cdcb5de8a3c43d6db6f0a"],["/tags/设计模式/index.html","cc31448b338668ba7c3eb168c199476c"],["/tags/语音识别/index.html","758c667df203c2a5abb88349185aef43"],["/tags/进程-线程-协程总结/index.html","c44b2e01042c29abf44980ac01d214c1"],["/tags/进程概念/index.html","10359386d1fcb26dcb1287342508735a"],["/tags/面向对象编程/index.html","04e0e12d5c6a74fb0197f9a1f9e8106d"],["/tags/面试总结/index.html","9cb6804c2d5152f1c617bbc0d00f3f7b"]];
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

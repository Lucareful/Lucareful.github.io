/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","357888cdc019e0be77e4d043361ff77a"],["/2020/12/06/C 语言中 void 详解及应用/index.html","4ba81eedf082b882e175229124599917"],["/2020/12/06/C语言打包技艺/index.html","8f6408bd7deeb8e89005c8f3a1b7974c"],["/2020/12/06/C语言笔记1/index.html","8beb2c5b8bd85a42a58f1c3987957a8a"],["/2020/12/06/C语言笔记2/index.html","246c778c3647cdd0fe136858ecf846be"],["/2020/12/06/Django 重定向终极指南/index.html","9997bc3a09a1596cf8c36f035ae14299"],["/2020/12/06/Django参数和模板/index.html","b658a7910db00e7e70c113d2d6d20281"],["/2020/12/06/Django后端演化/index.html","49d35a81b2b86b1d164afd3af22fc346"],["/2020/12/06/Django的Cookie和Session/index.html","f473d3fa6bd641bd15d425ce106bff14"],["/2020/12/06/Django的Field详解/index.html","a62a51e863d230317bb4d026e100e931"],["/2020/12/06/Django的ORM多表操作/index.html","a16ab73da0e09f136ebf0e61ee8c528f"],["/2020/12/06/GIL锁/index.html","2159f7828c4c2c874386244c12a43a6c"],["/2020/12/06/IP代理池/index.html","2767b7c4cfa57cac6869a26dda4aedb8"],["/2020/12/06/JavaScript的简介和基本知识/index.html","ab917c36be43e9cd5a89dd5feaeb3809"],["/2020/12/06/Java面向对象/index.html","03d09f8c4f69d6809716cd48e6f3c5d7"],["/2020/12/06/Linux常用命令/index.html","1972e2575b32335c8f5e686cdc138974"],["/2020/12/06/Linux操作系统核心知识/index.html","2433a3d20392c2e2acf2bdea613b914a"],["/2020/12/06/Linux操作系统（二）/index.html","a978d6266bb7ca7411e02a9c9bbac562"],["/2020/12/06/MQ笔记/index.html","5f4012451b0b9e73fdd9b6fc8d42de5d"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","b52ea83954d75b4d440f4c83e958c93f"],["/2020/12/06/Mysql数据库函数/index.html","656592c30118db45ae450e5f82d96394"],["/2020/12/06/Python 中的上下文管理器/index.html","ea7a09f0e4c21afe4bc6ae60d69d950e"],["/2020/12/06/Python的模块和类/index.html","6af5c56a555d1ddcfd05a0ae4e3f1d0c"],["/2020/12/06/Python类补充/index.html","401099675d10d85fa864295920486c01"],["/2020/12/06/Python面向对象/index.html","2ddeb265b18313f588344d401f4e4078"],["/2020/12/06/README/index.html","abbea8a72aa3617a9d5d30f487714cee"],["/2020/12/06/SQL性能调优/index.html","b36bd9110102a6e1454f631e1d4be178"],["/2020/12/06/c语言笔记3/index.html","0b2169d9648301c812f8d21f347340e4"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","8998da7e6c85beeb8953b0b39fd25ce2"],["/2020/12/06/django之url规则/index.html","d25a9048a83dbb80b4bb61aa4a56a018"],["/2020/12/06/django的querySet详解/index.html","1c018259adc5c06cb0bc5ea45ef54e17"],["/2020/12/06/django配置初启/index.html","88fcd77996b6c1b5957b830651f8cdf3"],["/2020/12/06/docker以及相关概念介绍/index.html","6825d62714f6eb9effd0d6add3bac749"],["/2020/12/06/docker信息/index.html","83a6c868e707a3821e19d91250655898"],["/2020/12/06/docker网络/index.html","f159e75a90ad082fe6668d6d9246022f"],["/2020/12/06/flask框架/index.html","587b821bd4dd425aee15c174695452a4"],["/2020/12/06/git命令/index.html","3864b0472de5ba4d28b8d2af529055cb"],["/2020/12/06/hadoop基本概念介绍/index.html","8fb16843fcc9c56ed8a1937b53771add"],["/2020/12/06/java基本知识/index.html","5f1131a3591ba1ba7ab667ecda165e14"],["/2020/12/06/java简介/index.html","8af93933c93325a1552672c9f137a0aa"],["/2020/12/06/pandas函数/index.html","676dcd138716e3b655de1d6fccd6593e"],["/2020/12/06/python函数参数传递和返回值探究/index.html","7ad4e693a4d52d66d870c190bd8980e7"],["/2020/12/06/python函数补充/index.html","463abfef1ca4182a8982ad13c7c888bd"],["/2020/12/06/python数据类型的底层实现/index.html","2f783da715686c977055e6c72168e649"],["/2020/12/06/python核心模块的介绍/index.html","6116685fc3f76cfd8bf6af3cde8ffa13"],["/2020/12/06/python爬虫/index.html","e41b89a8a00066c8518e5f9c9a0d7a47"],["/2020/12/06/python类的私有属性和私有方法/index.html","ad6daadb2684a8e1e4123d72112be728"],["/2020/12/06/python解释器介绍/index.html","c55be0b9423c4579e89f6ab498679145"],["/2020/12/06/python高阶函数的定义/index.html","3822523d363ca5e8b44a6ce2b0c54bea"],["/2020/12/06/vue框架介绍/index.html","42c62a2a707873715c4a31778f34c45b"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","14d039092ea49741b4345eb2865a063b"],["/2020/12/06/京东全网爬虫/index.html","aa40dc4554b29f211569d61fdbdbc403"],["/2020/12/06/协程/index.html","b4b16f0f4ba80e7ffc948019cd0609b0"],["/2020/12/06/多线程/index.html","cbfc6a9f40c027befdb060b2d38c1bc9"],["/2020/12/06/多进程/index.html","c9b67ef161b889bb7e963990925c7d7c"],["/2020/12/06/数据可视化笔记/index.html","13a3857c69e8e17a3e6af3c2fa1e1c46"],["/2020/12/06/数据科学笔记/index.html","9a1baf764685c65353d8f42d4022a60a"],["/2020/12/06/斗鱼弹幕抓取/index.html","9b1d33fb5524a8e6c99ff6e49f24039f"],["/2020/12/06/查看mysql连接情况/index.html","dce8b40c52b0ffe938e410550b588684"],["/2020/12/06/正则表达式/index.html","8cc27bd9b7f0b4058f18b47d1ba4781d"],["/2020/12/06/第一次面试总结/index.html","2cdb167981d19f099606b405d08cb7db"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","fe0b2ce3df0c371504e4578deac3bdb4"],["/2020/12/06/索引和事务/index.html","ebe07cbb627e5efab95fa262b764c6ed"],["/2020/12/06/网站概念/index.html","59e58216e9b6e967b4897951dc89fe7c"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","9b2f25e5ac7cc9fc2f3c19ba40ee9058"],["/2020/12/06/计算机网络/index.html","eb89545834bf25788b82a780dfbe86b7"],["/2020/12/06/设计模式简介/index.html","0329fce80ed6d4d14fad82a9ee39cdf2"],["/2020/12/06/语音识别/index.html","96b40aedda0dbed426e93a4100d05468"],["/2020/12/06/轮询、长轮询、websocket/index.html","f69f9d8478fd7099fbe69ccc1b2723e2"],["/2020/12/06/进程,线程,协程对比/index.html","5561f0f0d0f681edbdfaefe0fb6bf76a"],["/2020/12/06/闭包和装饰器/index.html","71492647a89db416ff6e389fd6dd97ac"],["/2020/12/06/面试总结/index.html","47a000865a536e7b671969c4e7ee9c20"],["/2020/12/13/鸭子类型/index.html","943ed9393914c252668c7db9c1204408"],["/2021/01/03/工厂模式/index.html","545cd8e3d29ea67a064c646e22e8de80"],["/2021/01/17/RESTful风格介绍/index.html","b946d9888bff3f3bf50566fa35c1c202"],["/2021/01/23/关于跨域和同源/index.html","5adc64855b466d787da2341ab35f7ef4"],["/2021/01/30/django的信号量/index.html","aa079d8f18933d7a04d84a2b07ba7f49"],["/2021/02/16/创建型模式/index.html","a50dbda042803a6ab86b7994726f7ae4"],["/2021/02/17/asyncio之协程/index.html","ac04dcfe15a2c172eb182245b0060676"],["/about/index.html","3b3bb91e0fe10044562d69f2f02fc52f"],["/archives/2020/12/index.html","6a8b20caabf444c278a1511534eb9661"],["/archives/2020/12/page/2/index.html","d2b287d345ff3af69435c38e3d9909d7"],["/archives/2020/12/page/3/index.html","ae44d16d5826d7cfdbadff277f8bf358"],["/archives/2020/12/page/4/index.html","af6d67a8873dfd249ef3954f394c268c"],["/archives/2020/12/page/5/index.html","bb9577606620c21380f00b0ac1256691"],["/archives/2020/12/page/6/index.html","c35a1c4b378a118e6ed5f594105a30fd"],["/archives/2020/12/page/7/index.html","80c4f36836516b7f8826d07c626eb1d9"],["/archives/2020/12/page/8/index.html","e45875c01caf72be71f7c0d630c0526a"],["/archives/2020/index.html","5bddff407df4653c8576293bbd5ec558"],["/archives/2020/page/2/index.html","de628fe95ab47ddc2f2d564b107aa663"],["/archives/2020/page/3/index.html","1af6e4b4b6c351afccb90d9f6db12b19"],["/archives/2020/page/4/index.html","bf02936256e39b4282ea3e8a7c2ec18d"],["/archives/2020/page/5/index.html","1d33f2fd02e7aad2781abb1c2f746028"],["/archives/2020/page/6/index.html","db706706360fb811049e66bf94fc4562"],["/archives/2020/page/7/index.html","85300f3d41c9a22f476e7be2f7eebedb"],["/archives/2020/page/8/index.html","505a18d27f994f6c24fdeb9c46376e06"],["/archives/2021/01/index.html","c30536af3276bacf959c2b6fc12eb3ab"],["/archives/2021/02/index.html","8361fb6a8ef80cc3bedf82ca413643b7"],["/archives/2021/index.html","ade5ce06f60d0ae2cbc8d71f6cf1c2bb"],["/archives/index.html","95801f1569eeb029f8a880fde74efb69"],["/archives/page/2/index.html","746c0d8304f5eef9ffc444aa286122bd"],["/archives/page/3/index.html","b0fcf5aa65e32c6441ac59693f5fb7cf"],["/archives/page/4/index.html","79b9e71f185719c46de2ceb7fe4ed505"],["/archives/page/5/index.html","ba46954fb392931bfcf42b8d563db50c"],["/archives/page/6/index.html","f21bd90a59d822116ba17fc948cf21c6"],["/archives/page/7/index.html","8a7af65c1117f70a06b46203169fbe3d"],["/archives/page/8/index.html","bbc3a868006c55d62d23b6faf03876a8"],["/categories/C语言编程知识/index.html","7234fc66f2aa66f80c572a5dd19214ba"],["/categories/Django框架/index.html","e1936f8a54114b80d447b904d9b97e4e"],["/categories/Hadoop/index.html","fe81ebd9a9e9b975f8835069ef28d97b"],["/categories/Http知识/index.html","c9b0167647e190fa7272efa8cfb7bfcc"],["/categories/JavaScript/index.html","46ac9068849de9a999af2a3d4eca97d1"],["/categories/Java学习/index.html","5a7cf985fca3195ca4961aba9433b595"],["/categories/Linux/index.html","781ba87471aac066823c74763f50e848"],["/categories/Linux/常用命令/index.html","27ed81e701c05085f16056be16ebe47c"],["/categories/Linux/核心知识/index.html","f28b11b59a795351d53e63a045428bff"],["/categories/SQL知识/index.html","29754824c359cc189fe93a5ef0393704"],["/categories/docker/index.html","9edae6e1db78586d7c0e1980571dddf2"],["/categories/git/index.html","892647ba22f6b903fb480441b1ba3517"],["/categories/index.html","70b81557a95a15b4192e6f56b12a8ce6"],["/categories/python后端架构/index.html","592aec47c1c69d68835ccaa0192c6c03"],["/categories/python数据挖掘/index.html","26e72b58fff9dc1989b20f391e52acc4"],["/categories/python爬虫/index.html","a8ea8b7112a6a78594b2b7745493c3ba"],["/categories/python的web框架/index.html","4d670bf6eea64b5e259e6711af319be8"],["/categories/python编程/index.html","d8823765e2875bfc3b22149bde75d482"],["/categories/python编程/page/2/index.html","e805b2cced475a99a1bc51bce6aff987"],["/categories/python进阶/index.html","cb0b3ca711e93a01633c683345402ff8"],["/categories/selenium知识/index.html","91464ef2a23e540de3c3683bd1af7481"],["/categories/个人随感/index.html","3dd02e38ffe1f8c85a0f691e2f1fbd2b"],["/categories/前端学习/index.html","606e05b8c6e0abb3f076bdcdae8a76cb"],["/categories/后端接口风格/index.html","0bb21c8ae7f8418b5c8c592e12193ea5"],["/categories/数据可视化/index.html","5109bb29a00255e2e5ed7ac993be6231"],["/categories/正则表达式/index.html","d5e5cf6199d447bd7714f789aedca793"],["/categories/消息队列/index.html","79feebf7214ac55b9029eae3b61b7c17"],["/categories/算法/index.html","fc78a3896b1f315221c8b1cc2c805e43"],["/categories/算法/五大经典排序/index.html","de04d8602e82d3c4547584e8732fd84c"],["/categories/统计学和概率论/index.html","c78e0cb378e25c3d2fe27d328db0b9e1"],["/categories/网站知识/index.html","cff97d15823566484a27a19baffff668"],["/categories/计算机组成原理/index.html","62c1f626777403a4e1ff1298b5ba74bb"],["/categories/计算机网络/OSI七层协议/index.html","08bda4574105a9727241db771885d98d"],["/categories/计算机网络/index.html","44d05a222db02143f4c133873f4be311"],["/categories/软件工程/index.html","20db1727a668035c45677336072af67e"],["/categories/面试经历/index.html","15227d2a517bc2d567d53936d1c6213c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","fe72ce6c637a612f1b6b924c44b7a6b6"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","cde749fcc4fda08ec1556d2a6eab65f9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","a678a8fba3a76e17b75ea152bf77f910"],["/page/3/index.html","203e65014b3fc957d4f144d1812041fa"],["/page/4/index.html","327e91cc66fbd086aae05eab404dcd2d"],["/page/5/index.html","434f4080f1ce008ac8af38d9bc403720"],["/page/6/index.html","0db2f6123b3cf424fd9052c2d1ff7e2c"],["/page/7/index.html","851d6d0f6d84261b4f56d345ca951745"],["/page/8/index.html","b70398eff0ba0472a87f61b5ce46d88a"],["/sw-register.js","853ba95046e80331dde17085d42d9bc0"],["/tags/Cookie和Session/index.html","b712592c8f7899ec85b31a2adbfb49ad"],["/tags/Django/index.html","a852748d15f981e4b1f3c8671712911e"],["/tags/Django部署/index.html","f5b99dde70fa7d10854d28c3bd1cd34a"],["/tags/Django重定向原文/index.html","a6f683be79e56ef700be60ef11b0a800"],["/tags/GIL锁/index.html","8e11fb1cb51e418e756a446fe831e4df"],["/tags/Hadoop介绍/index.html","5c19f649a7fbb7bff4b3ce20f34030b2"],["/tags/Java基本知识点/index.html","40ba988b05f892e5783891eac24450bb"],["/tags/LinuxLiunx命令/index.html","312717105b7a0254a1ec4c4c9a0f6892"],["/tags/Linux知识/index.html","9a0754491637bf4b19f4ce5fda556657"],["/tags/ORM/index.html","cfef191b85e94b672608100aa87d8554"],["/tags/QuerySet集合/index.html","5c03ad2d99e6f394a1e79ea040d8fd6a"],["/tags/SQL函数/index.html","b764238740aecbba362b58a1ce6ed929"],["/tags/SQL命令/index.html","736d4e5dcb5654164d1a8d4fef14e5dd"],["/tags/SQL概念/index.html","46e20615db3721a66f0150235adc8e6f"],["/tags/SQL调优/index.html","f288e8ecea36c506a3c26265f9997f0c"],["/tags/Void-知识点/index.html","00672daef66964222789d8cc604308e5"],["/tags/Vue框架/index.html","b3ef29116bb4b532d427362a381ec041"],["/tags/Web安全/index.html","4622fb9fefc3be03787114673496644e"],["/tags/docker知识/index.html","b113cad5227e9344fe23f6fe08b14054"],["/tags/flask/index.html","76d807d844d1065a4111cec47926f02b"],["/tags/git命令/index.html","d6483af82741d94bceb72ae1c4124caf"],["/tags/git配置/index.html","e07f9e5c8a1494d59cda3457507cbefa"],["/tags/index.html","196a5dfe131fc82a0164586a1f4d9360"],["/tags/js知识/index.html","4a6e625929fc8f905d788d3763a90ea9"],["/tags/pandas函数/index.html","866a42c009cd59cf2a3c094aa1060233"],["/tags/python编译器/index.html","77c0aafd6fe8f8913a6170bd24bf5c63"],["/tags/rabbitMQ/index.html","e04ed36cd4a1efe316a8a974fc3d1ac7"],["/tags/scrapy框架/index.html","c5363d4d4fa0d6241a292fb726d578fd"],["/tags/selenium/index.html","09cb348510aefdf5beee4d0de3d9a363"],["/tags/websocket知识/index.html","b52032664a6288ff559dd8d9e37ee8d8"],["/tags/上下文管理器/index.html","4d42ea4bccf4ba4f7688c7ef0712f707"],["/tags/信号量/index.html","9ee2c884a43277e3c3bdff74b0c13b88"],["/tags/函数补充/index.html","87db2415f654bb927611341ea0848427"],["/tags/协程知识/index.html","3c207b78c75dd364c7b45eed25fb1a3f"],["/tags/基本知识点/index.html","7df4f13acd4b680b6fce309a8a16f5bb"],["/tags/对象引用传递/index.html","9c2e17f45abd6d8ceae81fa1e3cb4a16"],["/tags/底层原理/index.html","6db31add46e71afe658946e90897a364"],["/tags/扩展知识/index.html","d54107cfe373ed7c3b02d890b5ebe943"],["/tags/排序算法/index.html","5eef70184303062cf06de95c649f11b1"],["/tags/接口设计/index.html","75db94e5454342743ef6dcb9cbbbc3d7"],["/tags/数学知识/index.html","d91058446aca4ffb71dcc63f848ffdd7"],["/tags/数据可视化概念/index.html","22bcf207d558890747e4f6fc68abfe00"],["/tags/架构演进/index.html","2d042c0bc38ccd497c6b94eaa4118226"],["/tags/核心模块/index.html","e7dcd4584e24aba86c2a8ab8936b4369"],["/tags/正则/index.html","d41db8ef661cdd036692144ec14ddba1"],["/tags/爬虫实践/index.html","631b0f2fc85d7a668fddd28e7813ceb5"],["/tags/类和模块/index.html","165422d1202aea9a8cc5e12b86ecde90"],["/tags/类的知识/index.html","22cb46e71e380767512cd0b5802d1a89"],["/tags/线程概念/index.html","46bf28e51645a27b5b0df0604075ace9"],["/tags/网站的基本概念/index.html","8157d134f9a8f34176e6a5481c71104d"],["/tags/网络编程/index.html","fa975de1d99296c4d513acafc1d437e8"],["/tags/装饰器/index.html","3554ef5c18e12080efd9ff4cddbfeb81"],["/tags/计算机知识/index.html","53e95f3f375f156a21c691b4c959ca41"],["/tags/计算机网络知识/index.html","7266bd6b5a78a9d15a9c19d3cf3afaff"],["/tags/设计模式/index.html","2e90da98ed8a03691f49010395e510f3"],["/tags/语音识别/index.html","6dbc84426192d44d673b3a7512127364"],["/tags/进程-线程-协程总结/index.html","5ce1b362f3a7373702ab6cd630a564b4"],["/tags/进程概念/index.html","e5e45278b01c2c2f5d1fd4179551f702"],["/tags/面向对象编程/index.html","bd112045548990956eeb9e5d210cb5d3"],["/tags/面试总结/index.html","ce0fd627e14ddb08ca15d61dea9f1fa4"]];
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

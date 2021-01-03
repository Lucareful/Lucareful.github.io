/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","470edc607fadd5f2709d66dd357c62ab"],["/2020/12/06/C 语言中 void 详解及应用/index.html","8f6048bf87c54bf0798ae6141466e0f3"],["/2020/12/06/C语言打包技艺/index.html","481a5a38f356a28d9f7a6bee568284a8"],["/2020/12/06/C语言笔记1/index.html","669aa06007bde16f70db524997c465ab"],["/2020/12/06/C语言笔记2/index.html","0d640ab5a740c3a19cc533a8768c92de"],["/2020/12/06/Django 重定向终极指南/index.html","dbc1f1e7270aa20576c7415966dcb6dd"],["/2020/12/06/Django参数和模板/index.html","24539e741ce5addf5e5a31ef69bb610e"],["/2020/12/06/Django后端演化/index.html","262d705b6ad9df89e0c8b3b1a7911c6a"],["/2020/12/06/Django的Cookie和Session/index.html","97134001b8d65c4f2aba4ed2e46e2207"],["/2020/12/06/Django的Field详解/index.html","9a924558cc013fcde39b20af2aa008a7"],["/2020/12/06/Django的ORM多表操作/index.html","81bcc519f8d295e19c04c71dcfbc4eaa"],["/2020/12/06/GIL锁/index.html","a182f7703851474d2260c6dcd12af21b"],["/2020/12/06/IP代理池/index.html","6a30dcef884c39b1c5e6b92773cdbd5a"],["/2020/12/06/JavaScript的简介和基本知识/index.html","0dd45a067bb85d6829967caabca10f3c"],["/2020/12/06/Java面向对象/index.html","d793871ada874563860dc875ceca22cf"],["/2020/12/06/Linux常用命令/index.html","5cc88a612db42fff1fd9976dde0bf9f9"],["/2020/12/06/Linux操作系统核心知识/index.html","252f82c213e5f5cda13e91413ca68c02"],["/2020/12/06/Linux操作系统（二）/index.html","046ca36418e70ff59c64bbbd82623768"],["/2020/12/06/MQ笔记/index.html","7a0a8af3ebff1f06fc5a3f19cf27fba2"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","12a1b90e4024cd41425a1ebcc0207e6e"],["/2020/12/06/Mysql数据库函数/index.html","ab009538549862e91e29515a6476217d"],["/2020/12/06/Python 中的上下文管理器/index.html","6c101fe9041fb40b6f14cdc4ecf4f646"],["/2020/12/06/Python的模块和类/index.html","2d942467b5ace21f0c0e0ead75a1fa38"],["/2020/12/06/Python类补充/index.html","ecfaa871fadeddc19632b88fee3881dc"],["/2020/12/06/Python面向对象/index.html","a97d43bc22560473cbe5b7189206aab6"],["/2020/12/06/README/index.html","f19c5e2b0870f83c53ac58216f487e3d"],["/2020/12/06/SQL性能调优/index.html","4f7792906ca84e6c1b20b0552efa90a5"],["/2020/12/06/c语言笔记3/index.html","00c80daf34dea744257faaf6e479f8cc"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","282cfcf295a69c5d17771a64e0844470"],["/2020/12/06/django之url规则/index.html","fd1bc54b75bcc4061539fe57578da999"],["/2020/12/06/django的querySet详解/index.html","b73d28710f8337c7c82e3382e1e48ed5"],["/2020/12/06/django配置初启/index.html","13c55ec4aa995262bf82a00a6909b9d5"],["/2020/12/06/docker以及相关概念介绍/index.html","83679a89ba3ed59a8722a2ce510e0097"],["/2020/12/06/docker信息/index.html","47b0aaea7804f7da0e185a5c6a76babe"],["/2020/12/06/docker网络/index.html","1f00278141ec2d18afdc1f2fd63cfd9a"],["/2020/12/06/flask框架/index.html","70689ff5ea8689bc6a0c89c9afd298ce"],["/2020/12/06/git命令/index.html","c80316aed57940ba30fc8a2cb7c3996a"],["/2020/12/06/hadoop基本概念介绍/index.html","0418ed03e29f48bb3ae42dfd808b4a10"],["/2020/12/06/java基本知识/index.html","e61f1eecab40fa9c4a5530b6650194f6"],["/2020/12/06/java简介/index.html","675e7dfb1e35e7c69b257ccf86faabb3"],["/2020/12/06/pandas函数/index.html","9216d1cf8c2940c544290da783f81b3d"],["/2020/12/06/python函数参数传递和返回值探究/index.html","83986278e3ad61fa96cbed2f2b6468b1"],["/2020/12/06/python函数补充/index.html","2b7de51a3266e81f7055eca82edfba17"],["/2020/12/06/python数据类型的底层实现/index.html","b622bf4a636060a173d0f5dd39579219"],["/2020/12/06/python核心模块的介绍/index.html","7ab266d36ccab5dacacbdc1422092f64"],["/2020/12/06/python爬虫/index.html","a7c0a5787831b0dbdd2b64659cdd2aa2"],["/2020/12/06/python类的私有属性和私有方法/index.html","860888181b244afbdc90673f9ab9b9a9"],["/2020/12/06/python解释器介绍/index.html","00760e60d56a37d0ded578e36812d347"],["/2020/12/06/python高阶函数的定义/index.html","8b4f86622b5049382d5976cb00111bc9"],["/2020/12/06/vue框架介绍/index.html","7459690d924bcd351dd4b0858b910abc"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","67bcb7d35fabcc3a06f6dc9d5de60acd"],["/2020/12/06/京东全网爬虫/index.html","f8f76031b0010cd23da9fb3d5e83ea77"],["/2020/12/06/协程/index.html","190192f7f7bc55fffae1d3243666df3b"],["/2020/12/06/多线程/index.html","ddb7ec4b9a77cd712b5c3dbbd37e6e9e"],["/2020/12/06/多进程/index.html","cb626ca5f052efb500548b1d1c15835c"],["/2020/12/06/数据可视化笔记/index.html","41629e2e835b08083d743829585e64cb"],["/2020/12/06/数据科学笔记/index.html","fdf3db59f54afd3ac261d01e5b480923"],["/2020/12/06/斗鱼弹幕抓取/index.html","1a78e4ec2b3d489c6b920ff4558cfc64"],["/2020/12/06/查看mysql连接情况/index.html","bb6b8b89d3c9a0788b1f010f1f188976"],["/2020/12/06/正则表达式/index.html","91b818861b8a6ad1b62c0b78494a138e"],["/2020/12/06/第一次面试总结/index.html","d2d2a62931f516712e4d43538f049ede"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","3d0e8569735c27735ea76bbfb99e6202"],["/2020/12/06/索引和事务/index.html","a238a60a8433091979a91e88c97921fc"],["/2020/12/06/网站概念/index.html","5e316059212a83e97def57c115bf0434"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","c06728fa94b2c7a845ef7138539b55e1"],["/2020/12/06/计算机网络/index.html","b1fd8f382d0b23b4d4f3fdd93de2c130"],["/2020/12/06/设计模式简介/index.html","28a735d1ba2db68695d80db47413b108"],["/2020/12/06/语音识别/index.html","476421f22446e5798f86563309e0e002"],["/2020/12/06/轮询、长轮询、websocket/index.html","f4f20eaa5ac0d4436bd56bb66d3769d9"],["/2020/12/06/进程,线程,协程对比/index.html","ade6ba4c5cead185d6b84cccce8c604a"],["/2020/12/06/闭包和装饰器/index.html","3ca98152fa423bc22b276c1a164c7691"],["/2020/12/06/面试总结/index.html","4ade9b242a0969e9bbe4b93e7456649e"],["/2020/12/13/鸭子类型/index.html","a5774a1e65f5a6b383ae97524422a87c"],["/2021/01/03/工厂模式/index.html","c3918ab8560880e8a001bf965b8e359f"],["/about/index.html","319c3b21e2776fe0877fcc75be6b4a56"],["/archives/2020/12/index.html","f502ced7ea78059587c276f96914c11d"],["/archives/2020/12/page/2/index.html","9610023822a90d7824d76ed5f023ac62"],["/archives/2020/12/page/3/index.html","56cfe217f386d03b0429c4db52a3e864"],["/archives/2020/12/page/4/index.html","12b1f332cb59b7e748fb0cc2c82f0186"],["/archives/2020/12/page/5/index.html","1582e73458a5773678526acedf645eeb"],["/archives/2020/12/page/6/index.html","4104206462593a8793714248f7cceec0"],["/archives/2020/12/page/7/index.html","072f365427a5dfd9dbe7cea9985d1764"],["/archives/2020/12/page/8/index.html","b5cb4f72dfefdf5bc7f98ad6faf38c4c"],["/archives/2020/index.html","2c53768dae00d473ca7604e641fd5466"],["/archives/2020/page/2/index.html","30039b5018fb7d376220f00607ddfa82"],["/archives/2020/page/3/index.html","b6a30b67507b9233ef359982d65cb23f"],["/archives/2020/page/4/index.html","a4b677adf374333023c16d65ce3c57c1"],["/archives/2020/page/5/index.html","0a99e56f1482bbfd16f1c6c233706d49"],["/archives/2020/page/6/index.html","a55517e3dedb94d020db11b4fa907f4b"],["/archives/2020/page/7/index.html","e0a384b9900c8c7e83ae82b98600bf4b"],["/archives/2020/page/8/index.html","e69b195da96077e6b31db28260581527"],["/archives/2021/01/index.html","8dabca2f25691da86d28af3e13a918c4"],["/archives/2021/index.html","085f29dfba821b3fcb825d76746cd9f4"],["/archives/index.html","7e2cef7850fdb7a4b49c2f203616b19c"],["/archives/page/2/index.html","542201f3e188117a4354462fe1b6fc98"],["/archives/page/3/index.html","b173ead74e700c33536f43e85835475c"],["/archives/page/4/index.html","a66814d788a62130f0b4524293e22aa0"],["/archives/page/5/index.html","9abb55efe1032a399d1ea22b13bc5177"],["/archives/page/6/index.html","adfee4eb5b5384d1029412a6493f0a32"],["/archives/page/7/index.html","f7ce05c68d605d76834edd5520a18da8"],["/archives/page/8/index.html","8b051fc3ea5addde2a12ea2fa6521aa4"],["/categories/C语言编程知识/index.html","a515e18c5fb5b6e7df8b5e2e4a754b63"],["/categories/Hadoop/index.html","619663469627c507c0ea8ef3049cca79"],["/categories/Http知识/index.html","bfdd94e38546f4a6ef1f16b2ae19e371"],["/categories/JavaScript/index.html","faa254b2958f0cf4dca4eaf128445f97"],["/categories/Java学习/index.html","f3dc42699a4bcb5d7b0d35a65ce68435"],["/categories/Linux/index.html","e896c8c4ce9b5ff543a55c02887c781d"],["/categories/Linux/常用命令/index.html","3b93379d6707378bfcd2d28611ef49a0"],["/categories/Linux/核心知识/index.html","3ebecf46fe3521769efd3243ad642bdb"],["/categories/SQL知识/index.html","f0206e25bd55a90b173b6f4cbcf64a4e"],["/categories/docker/index.html","aa86c0779e13ba2962d058d2006b4104"],["/categories/git/index.html","2c54d1a57186d253819a066c5963f7e7"],["/categories/index.html","c859ca271dce73a9f6f63c803c623830"],["/categories/python后端架构/index.html","1cb93160605735281f825f4a9ff60aa2"],["/categories/python数据挖掘/index.html","553904b4ad3c923e14c8e6524ac9ff85"],["/categories/python爬虫/index.html","81456a152d4620a5b97767c5bbbbe598"],["/categories/python的web框架/index.html","54d7b29c1de1b5370628425bdb024bf1"],["/categories/python编程/index.html","dca40bb351ba59f58f622cb0a53c8339"],["/categories/python编程/page/2/index.html","e80e7f37fa154ea1d300c0bfc18f0100"],["/categories/python进阶/index.html","88297cc5598dc936585a147f42236b12"],["/categories/selenium知识/index.html","f2bbf73a964452cdbc3497eb3b0ba88f"],["/categories/个人随感/index.html","b8df88d67e6821f46f54c46095bc7008"],["/categories/前端学习/index.html","943632d1f671c5f6edbd8d0000cb59a4"],["/categories/数据可视化/index.html","d13e70e469b8a974962dfaaf1b6ce117"],["/categories/正则表达式/index.html","8709dd51a1efc7cd07a19caaafb6f71a"],["/categories/消息队列/index.html","c68702c4a70f8657c2f2002190358eff"],["/categories/算法/index.html","6fc073beafa625fbbf6c2ebc3acdc2d0"],["/categories/算法/五大经典排序/index.html","a99b398f47a8a25ec3a2b85e1d57014b"],["/categories/统计学和概率论/index.html","b5f3511ade7e2461a175aeea86f02934"],["/categories/网站知识/index.html","0cff36f5eb76072749bd4bcae5e096ce"],["/categories/计算机组成原理/index.html","3f28def8c6a7c3e5aeb77a445c251d18"],["/categories/计算机网络/OSI七层协议/index.html","91d38ed106b234d12e8e9549de53448a"],["/categories/计算机网络/index.html","2ad9f91c2d3651c4475790f7681dad57"],["/categories/软件工程/index.html","42fa153815ae83991a037f27f94e8d36"],["/categories/面试经历/index.html","e818135f382c966c3016a03baecaa9b6"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1642dc906a496644e5fdb2e036432eb6"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","be4fa352f76ac004ef70fc8772aed19b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8b41e833b762dfc6fefc3007682e33cd"],["/page/3/index.html","df89474776bbd8c246b488cb21938ea8"],["/page/4/index.html","7cdf9c99c96ec1b518a8721b64cc3c69"],["/page/5/index.html","1e20e35c7731ec43edf637c3d235eb76"],["/page/6/index.html","a6ad20bfa2d7bf23a819c3c612558e6b"],["/page/7/index.html","0a4e94b1c8e2a7a75d5211ee1ff9c586"],["/page/8/index.html","becc31162da2c86dd91eae463acf0228"],["/sw-register.js","cd81c805a71cc1f8e41de00bfa1bec5b"],["/tags/Cookie和Session/index.html","692537a88f1a91c2cbcd2faee81cc824"],["/tags/Django/index.html","92c493c07fda761b1466d51b0307eaf1"],["/tags/Django部署/index.html","d156d8e912e7ae14efe972e8686dc846"],["/tags/Django重定向原文/index.html","d51e1213c16217a6b03b2b3e31301523"],["/tags/GIL锁/index.html","d708d7286bae9866bc124bd637d0f374"],["/tags/Hadoop介绍/index.html","6cb5e98da5e0a9b816e245c1757e202b"],["/tags/Java基本知识点/index.html","0740ff630ec37e30989fbfc45df43e3e"],["/tags/LinuxLiunx命令/index.html","4f7af1567b245c6cd9a41415be9859fe"],["/tags/Linux知识/index.html","86e765955f097c266327677b9975061f"],["/tags/ORM/index.html","4b4e0cf89289bb5a9601b901d7a8bf15"],["/tags/QuerySet集合/index.html","9e8c66a9eca49f9a25c624aafc6d24e4"],["/tags/SQL函数/index.html","8b265432b964fbcf012707dd01761364"],["/tags/SQL命令/index.html","fdd5a95a94d7e96165c846e329a7f4e8"],["/tags/SQL概念/index.html","15f7e0e90a5bb0d26ba69670f511c5bf"],["/tags/SQL调优/index.html","08360c38adc95f45db15f8924a23f993"],["/tags/Void-知识点/index.html","70b8c8435a2900b923b80ecc5535d07f"],["/tags/Vue框架/index.html","c54ff5b9b410fafb2859867d17da7f73"],["/tags/docker知识/index.html","fecc23964d040f9e39d108a18f696d3b"],["/tags/flask/index.html","159a0d5f4327053ac27faf748d31d940"],["/tags/git命令/index.html","78de2c9cbc1acf6c9d6edd732ab37601"],["/tags/git配置/index.html","312374785689e58e0eae442477c8de07"],["/tags/index.html","d6ccd10782723c0274c4a60b982b26f3"],["/tags/js知识/index.html","0169defb2075d2b9958b6b317dbc7ced"],["/tags/pandas函数/index.html","8277708edbceb48cf7ac1bf87ef375d7"],["/tags/python编译器/index.html","6e769f9e2793886b1b1ccfb0d439a18b"],["/tags/rabbitMQ/index.html","daf81bc2b69640fc411fb06680b17cc5"],["/tags/scrapy框架/index.html","77fa62b15e6d41968e2b8dda7cfa0702"],["/tags/selenium/index.html","691abb257b065d23b05e80174070af34"],["/tags/websocket知识/index.html","9d5ed43cf979b6bf66f504c798f80720"],["/tags/上下文管理器/index.html","94f774b5bcd75f9b29aae7e11cd4d1e4"],["/tags/函数补充/index.html","fa8b72bf03f8f255c82bba324a96c424"],["/tags/协程知识/index.html","0c5600bf259020c7fd2d4afde40e9994"],["/tags/基本知识点/index.html","1ecb432826727de47b118ec561fecdca"],["/tags/对象引用传递/index.html","d2c7ae49be6c11a3d1485492cd8b34f5"],["/tags/底层原理/index.html","cdc5bffbd1f8662d57af3df2aaface96"],["/tags/扩展知识/index.html","bb841c42a6f5a7d6c0da3963a4c93e8d"],["/tags/排序算法/index.html","400658c43be87ca98ddb9ed0327ee9f7"],["/tags/数学知识/index.html","c3f6feaff7c0b3764fb880e24a958dcd"],["/tags/数据可视化概念/index.html","a1970ea621089437fb4cd0205303ab1a"],["/tags/架构演进/index.html","496f0955c86582d9998ce50e24c1ff03"],["/tags/核心模块/index.html","576bcf2b92c0a4bb2d3956c5134d12f2"],["/tags/正则/index.html","af394566155ea62cb8d5dc50222d0171"],["/tags/爬虫实践/index.html","484193feee5233a4348838054fbe94e3"],["/tags/类和模块/index.html","4bd2d720c52e2569ed31e6e59298e578"],["/tags/类的知识/index.html","3568135ac4f875a62c21fec98327c68e"],["/tags/线程概念/index.html","1476a82facb11d9545881839cbfeca51"],["/tags/网站的基本概念/index.html","5349a5ab9dfbbdc671f406d73e98f5d7"],["/tags/网络编程/index.html","2fdb57e0542047e6d8db1afaa00058ff"],["/tags/装饰器/index.html","37d0ccc64837d8298b70f4ca167b78da"],["/tags/计算机知识/index.html","90b7340630c7ca79fb88cb3808190ca0"],["/tags/计算机网络知识/index.html","f86c239287d2fede8c3992fe769a6b15"],["/tags/设计模式/index.html","7756139546c14ac31c3aab93d5fdeee2"],["/tags/语音识别/index.html","005f77d1658643571d63a15eded224c3"],["/tags/进程-线程-协程总结/index.html","cc47b3e0c1236f89bbc3b940e6124cd1"],["/tags/进程概念/index.html","ef702ac6ad995c8d436185b1d9c2fdf0"],["/tags/面向对象编程/index.html","200249d0755b0822cbcd856c81d0421b"],["/tags/面试总结/index.html","07f53b13b69c0c0997dc3ee3ce22e694"]];
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

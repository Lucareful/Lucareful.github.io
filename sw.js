/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","1195488d80f7e47547da13774b7c5bd8"],["/2020/12/06/C 语言中 void 详解及应用/index.html","92e0d11fb5dbeacf148d49ee8e7b2ea3"],["/2020/12/06/C语言打包技艺/index.html","d5cd50199ae401b0da3c47e303a9eade"],["/2020/12/06/C语言笔记1/index.html","6670b91e7c60fab81804ccca0aa47db5"],["/2020/12/06/C语言笔记2/index.html","8ae28cb0c16fb29aa687d99a68f05e3b"],["/2020/12/06/Django 重定向终极指南/index.html","f0708614a24b0e966b492aa91806e70c"],["/2020/12/06/Django参数和模板/index.html","3dd77039692e5dcf0642220e6949eb1d"],["/2020/12/06/Django后端演化/index.html","75dcc02b9745985a26bd482a2b8b31f9"],["/2020/12/06/Django的Cookie和Session/index.html","38a723eeee575c10923822eeebacff7a"],["/2020/12/06/Django的Field详解/index.html","473ff233cf2211452c7ec44dbd5fd449"],["/2020/12/06/Django的ORM多表操作/index.html","38a3d16bdedd6e122ba419f06d2eb70d"],["/2020/12/06/GIL锁/index.html","caaaae167525ff7f9ba4db3ded8818c8"],["/2020/12/06/IP代理池/index.html","5416520a99fbc9940017c5a510f984ad"],["/2020/12/06/JavaScript的简介和基本知识/index.html","b57a90f644182059ca024363930b3eaf"],["/2020/12/06/Java面向对象/index.html","5f11d41609bc79ee15f5d364c243bf79"],["/2020/12/06/Linux常用命令/index.html","9e0a6fe83f8be535034f9c3f0ed2f546"],["/2020/12/06/Linux操作系统核心知识/index.html","d7290924bc5576e6e959620c5668ddd1"],["/2020/12/06/Linux操作系统（二）/index.html","6a021948e127c6c849ece58b74e88ca0"],["/2020/12/06/MQ笔记/index.html","e24df8f8ad088b33ffb0bda338966cc8"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","672d83d33ce1e2c5c2e85bb27862cb37"],["/2020/12/06/Mysql数据库函数/index.html","8f0f969dacfe8597aa4152ced0443acf"],["/2020/12/06/Python 中的上下文管理器/index.html","4a0b7768bc261d25a122ed7fe4f4b7fa"],["/2020/12/06/Python的模块和类/index.html","c18ec9adb26d88351adc0fc49af4b5e5"],["/2020/12/06/Python类补充/index.html","a88c3cf4156c5662488a11fc553499d8"],["/2020/12/06/Python面向对象/index.html","853c5e3cc071da54f959af977776ddb4"],["/2020/12/06/README/index.html","8196e843dee8281901a27cd79a5b0a4a"],["/2020/12/06/SQL性能调优/index.html","6e6adf9feb1acf4125b772f7eb64772d"],["/2020/12/06/c语言笔记3/index.html","048d5727d5ec38b9ea913919d2f94ee5"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","4c2b806508973ca8ce35eb7bb4691c7b"],["/2020/12/06/django之url规则/index.html","a9562962e2ae4f69f663521f43a06b15"],["/2020/12/06/django的querySet详解/index.html","3bb1469878b9fb77810d45fc8fd02eb1"],["/2020/12/06/django配置初启/index.html","8d539e3ac7d91d4f52fd98f2786fcce0"],["/2020/12/06/docker以及相关概念介绍/index.html","ff6f7a5a3c4f1c8314098ef596299c3c"],["/2020/12/06/docker信息/index.html","97b69af7ffb9c9ca52903a583b6bbcda"],["/2020/12/06/docker网络/index.html","a327988a80a34802abf5b76126dd94ae"],["/2020/12/06/flask框架/index.html","e81bc7e43de9d6c51df03b72654577f7"],["/2020/12/06/git命令/index.html","d6947bff1ab3e54f4d40947034b416e0"],["/2020/12/06/hadoop基本概念介绍/index.html","4e96c8b2e1078136f6d9c27c1db72d59"],["/2020/12/06/java基本知识/index.html","d2a72b750a34480478f2d133a2ca64cf"],["/2020/12/06/java简介/index.html","608fab19a956fe131964e4e3485acc07"],["/2020/12/06/pandas函数/index.html","909def68389d60f66f3eff57ee1b3f5d"],["/2020/12/06/python函数参数传递和返回值探究/index.html","19a7799b53977a6c813e5d6cec38043a"],["/2020/12/06/python函数补充/index.html","b319a709dab3168aebc61fb6b988ce7d"],["/2020/12/06/python数据类型的底层实现/index.html","6ad167de7c0d5b7e803be5419a8847f5"],["/2020/12/06/python核心模块的介绍/index.html","b7c1fa6739ccb66caaaf25d2a71088bb"],["/2020/12/06/python爬虫/index.html","428e7ce736f19434df4186c888ea3e4a"],["/2020/12/06/python类的私有属性和私有方法/index.html","ab9e8d73ca54f2d2554320da45a835d6"],["/2020/12/06/python解释器介绍/index.html","0edd0f38d4556dd08272b8ebaa75f48b"],["/2020/12/06/python高阶函数的定义/index.html","b5b4f0439b302a60aa04d77b2896037f"],["/2020/12/06/vue框架介绍/index.html","7b483a869a4a7901d032c52dcee9e872"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","d431289f59210d27075fadc931df4825"],["/2020/12/06/京东全网爬虫/index.html","abedb3b76c0ec6f85aa861103affd9f0"],["/2020/12/06/协程/index.html","336f32f6a4160c3b86e92992d301630c"],["/2020/12/06/多线程/index.html","f6ddc9bfebee305cc14f3d4b8b53fa89"],["/2020/12/06/多进程/index.html","d51e7e9da3f8b9656919e45a4bb06cfc"],["/2020/12/06/数据可视化笔记/index.html","1f798956abc0b9333a63074c04fdd5a5"],["/2020/12/06/数据科学笔记/index.html","0ce12f1db334bebb0648e99561e31709"],["/2020/12/06/斗鱼弹幕抓取/index.html","07acb4856919a659a7af52a37aab4cde"],["/2020/12/06/查看mysql连接情况/index.html","c66d0e67a6ac57118a5f08cb30cfffcd"],["/2020/12/06/正则表达式/index.html","cac76e49e3810f0d6b89008fd1c8af31"],["/2020/12/06/第一次面试总结/index.html","04276927463a5b674e762dbd47d08105"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","2cc6bcaab154533dba3ec4ccd03238fa"],["/2020/12/06/索引和事务/index.html","38f2d8c6ad0263ed9d345294e47e2176"],["/2020/12/06/网站概念/index.html","8cb15ae91a5ad8e052b1842e0ebcbf0b"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","10f6692957c129ec87f9ee0f0c4db880"],["/2020/12/06/计算机网络/index.html","ed1912b6c02a1ef44048e7ddb720d06d"],["/2020/12/06/设计模式简介/index.html","3a1696295ea0973482bbc1cc937f83e0"],["/2020/12/06/语音识别/index.html","fb9b806849c24f7d26430ac37e69c60b"],["/2020/12/06/轮询、长轮询、websocket/index.html","4d016a162be3b75f59577c014fc344b6"],["/2020/12/06/进程,线程,协程对比/index.html","9db49d23d13d56f1320f6b67dcf1c9ec"],["/2020/12/06/闭包和装饰器/index.html","a924af5c48347d2926854fa672e27c29"],["/2020/12/06/面试总结/index.html","c380d9d0d9b56dbab9b53d40ff62075a"],["/2020/12/13/鸭子类型/index.html","b2aa3a5b554aac25019521b6593ceda0"],["/2021/01/03/工厂模式/index.html","00341fd41d8c0031bbc4799502b63cde"],["/2021/01/17/RESTful风格介绍/index.html","85d99cb8f9846c2cd0764e0ca7e21fb4"],["/2021/01/23/关于跨域和同源/index.html","5a9f3c2b99d24c75597593bd106f6980"],["/2021/01/30/django的信号量/index.html","48675b10390adada30223d62d8cb81fe"],["/2021/02/16/创建型模式/index.html","715137723cef2eb9110bfc717c89cccd"],["/2021/02/17/asyncio之协程/index.html","60a8723590ef7913d92883f4dac50004"],["/2021/02/25/结构型模式/index.html","ca534a98542346b71fbb7cb5da5c3f8f"],["/2021/02/25/行为型模式/index.html","456b61ca20559c0a7694750608f8a046"],["/2021/04/24/python元类/index.html","d4586fccc57192978c7ef154aa7c9dfd"],["/2021/05/05/go基础入门/index.html","58bc2a7d68267407c4c286368bad73d0"],["/2021/06/05/Go面向对象相关知识/index.html","ffed20a8e656cceb81f961d63807959b"],["/2021/06/05/json、结构体标签和rpc入门/index.html","60b007d3bb1ff0ad74d831911a8cd844"],["/2021/06/05/进阶语法(管道和go程)/index.html","babb80df8d06530576ce276c08a68542"],["/2021/06/07/consul服务发现/index.html","5c36ca66698904f376648d228924c7c6"],["/about/index.html","4ac8fe509295ef6d49db28fba73728a4"],["/archives/2020/12/index.html","97eb50590334b2721bff58a6f051990d"],["/archives/2020/12/page/2/index.html","c0fc5776f29f29aa07c59245a3e41da6"],["/archives/2020/12/page/3/index.html","6e88c6011c36269c3f41b2d5be5e200c"],["/archives/2020/12/page/4/index.html","04e455608123b531ef03c41cd3f45bcd"],["/archives/2020/12/page/5/index.html","21f990af0d5f47dfc0a22e7cc43a2864"],["/archives/2020/12/page/6/index.html","ecf8b79bf901b64b262332939261e7f9"],["/archives/2020/12/page/7/index.html","655e117a0766b180017d8fc5f1f7f8e1"],["/archives/2020/12/page/8/index.html","72337a821e1eff2f7280848302b34462"],["/archives/2020/index.html","b8764f57d6bf3568bc532134db76a611"],["/archives/2020/page/2/index.html","cc7bf2d730bf5414f9821f12b66151e9"],["/archives/2020/page/3/index.html","47d22824fa6e675d889b00a15281e01a"],["/archives/2020/page/4/index.html","f7436f23b7ebc2bb26a4daf8c1827a17"],["/archives/2020/page/5/index.html","d66a122be5707ab0edd786ebd8137bf3"],["/archives/2020/page/6/index.html","04826f9da17a4a3bda245015eb4252fd"],["/archives/2020/page/7/index.html","7b33790a4c125c0d4d41f215028b0494"],["/archives/2020/page/8/index.html","21396bb6208e655d7c29d1dfc1d57e11"],["/archives/2021/01/index.html","4471c426fa05054d57a21c79ed7b57ff"],["/archives/2021/02/index.html","d50ca809afc71ae514660ad4ce4ef9d8"],["/archives/2021/04/index.html","ed77e5d11755df0cda61a7bc0eb459ec"],["/archives/2021/05/index.html","7d2843af14c3e9ff25cc88db4c79933d"],["/archives/2021/06/index.html","06d71e7f13987b4d1df4ac3ae0801046"],["/archives/2021/index.html","180197499db2c728ad8d9723c0d1a780"],["/archives/2021/page/2/index.html","12a35a3dd38de58d305305c2966a1add"],["/archives/index.html","13b7c3e968e10c22698a75680d0f0f96"],["/archives/page/2/index.html","205ab7270ffaaed34c9cf5efe02d61aa"],["/archives/page/3/index.html","6dfa1f41becf2fcfb6a08d5604e94761"],["/archives/page/4/index.html","48aedc0d39a7c581e68a8d3f6679f9d2"],["/archives/page/5/index.html","5b5a9179db574ac4596ac4ffa757b6e0"],["/archives/page/6/index.html","4dedabfb116ec12b2ddfd6ffe439347d"],["/archives/page/7/index.html","5e1ec63f4324a1bf568e55a1b4980016"],["/archives/page/8/index.html","fe4e7c4b5136acdd6a7d39b249e1c720"],["/archives/page/9/index.html","d8dd63d9a02c98252b70db4d5eb303fd"],["/categories/C语言编程知识/index.html","b0a98a8397551c02ecdd952b7e88b229"],["/categories/Django框架/index.html","c197440a9184db3ae989952d393cfc37"],["/categories/Hadoop/index.html","4a65976ea2497c7afa1a8a402d0a3a1f"],["/categories/Http知识/index.html","d06a62ab8c030a0535075b302813944a"],["/categories/JavaScript/index.html","3500de7dd6cf481b3ca8a63fd6fd290d"],["/categories/Java学习/index.html","fcdfa9bd6158a6d60292ab93eeb57a41"],["/categories/Linux/index.html","6be7e096a21be435877bc223887bedb0"],["/categories/Linux/常用命令/index.html","1722f745c2595e4f26cdf7197e455416"],["/categories/Linux/核心知识/index.html","dd5e0951738b4ade06442aa7dcb16a29"],["/categories/SQL知识/index.html","db22bdcc729e974a51f6331736761659"],["/categories/docker/index.html","c5081306a5511c367708d2fc8645efe0"],["/categories/git/index.html","97eb7f0d68ad491e83491c1f480d1cd4"],["/categories/index.html","0a50ed4d112f69e724f298a82bc0ea57"],["/categories/metaclass/index.html","ad50c32f2cee97cfb737e01e743f1e65"],["/categories/python后端架构/index.html","818fa18340ca923dab15a5abfdc5ed06"],["/categories/python数据挖掘/index.html","c9a6d80d9feaf8ba33f2db7d3ebba5b1"],["/categories/python爬虫/index.html","d328e6d5e58ed4a2a0e117a27094d75a"],["/categories/python的web框架/index.html","e8435cf8e1c51cd2877d57aeff876105"],["/categories/python编程/index.html","f0a41e35c1ef2f1b77f2a04de09f9898"],["/categories/python编程/page/2/index.html","6325b34cc7a3ba833f7f79e6bb206af7"],["/categories/python进阶/index.html","dc732b448287ed386323b5e3be92109f"],["/categories/selenium知识/index.html","9942bb3310cd6ec627c265efb3b29ff6"],["/categories/个人随感/index.html","285f28d4b515753cd707d6540ce79ef2"],["/categories/前端学习/index.html","ec1c442207b621c3e87df67a065c751d"],["/categories/后端接口风格/index.html","b86d96fe0ce791e85578c9dbd183e273"],["/categories/微服务/index.html","122d3f87bacff9a6dbb01b7bcfc1391e"],["/categories/数据可视化/index.html","337670a9cd82b5eb1caea4b0c59a42e1"],["/categories/正则表达式/index.html","14660408fa91681e4c55f5cc9aac9699"],["/categories/消息队列/index.html","2eb705e9c5a45450cecd27c05db97201"],["/categories/算法/index.html","9f019d66730c36d5565bd2e45b30910a"],["/categories/算法/五大经典排序/index.html","3cca7e81b198921dbd1ade48fa85eab5"],["/categories/统计学和概率论/index.html","2f7d348f207bfce05eae04e48e913322"],["/categories/编程语言/index.html","371ee0127fd3080cc3228afba8fa17e1"],["/categories/网站知识/index.html","5ffb9ec20d21a01d9609471453832047"],["/categories/计算机组成原理/index.html","6109f6e5e1d9468894616fdc634b56e9"],["/categories/计算机网络/OSI七层协议/index.html","feb3734012e6288f39dab8a46a7f965c"],["/categories/计算机网络/index.html","59de1df615e41462fa9cba08545d9e9e"],["/categories/软件工程/index.html","c9d94077c3fa97c0bf2476a9a942bb62"],["/categories/面试经历/index.html","e5cb9adfa3000995138b6f5ec4dfe73c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","18c4c988e50b531d8db2f1cc30113f4b"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","67db6d66a0bd0109c88739df4202cc14"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","727aa351b5c7b7150a0ceecb319e9355"],["/page/3/index.html","dd7f68f004d932ef7ce069dfa4f278a2"],["/page/4/index.html","e1223ece40ec246f01a0d147ba29d59e"],["/page/5/index.html","5e9d263ea2c3fdbbce74f903265a130f"],["/page/6/index.html","91be07f91a5670e98cc47cf0c1867e3e"],["/page/7/index.html","bc96625970e5706c2ca48b7a4d9e8aa2"],["/page/8/index.html","17a5c4d9a8af2ef66d9b21c8f41e28d6"],["/page/9/index.html","714f1675d834024d8a99cd8e29ec7643"],["/sw-register.js","4589c433ae207d093684c9a2c33b9667"],["/tags/Cookie和Session/index.html","14f7a6bd4b7205e01740dc24872e15e2"],["/tags/Django/index.html","00eed01b306c943f48be97f4d9b786cd"],["/tags/Django部署/index.html","5f6462b66676a0d9be6937ead3825549"],["/tags/Django重定向原文/index.html","b27ea4b6aa8f3688e5968010ed40b733"],["/tags/GIL锁/index.html","c9be2a0aec6dd2d750a8867ba8e65423"],["/tags/Golang/index.html","502567bbf00a54537e6046b8159966e1"],["/tags/Hadoop介绍/index.html","ab2e76a82a0261435260b64370de3340"],["/tags/Java基本知识点/index.html","ec8fe380b3344d5a88fa3fa459ebe084"],["/tags/LinuxLiunx命令/index.html","8c21754a9e3576240f6f29ca1d358a53"],["/tags/Linux知识/index.html","ed36457ea2a96c32ff1a94128782c1f5"],["/tags/ORM/index.html","417cf07bc8171494e7abb74734e90b97"],["/tags/QuerySet集合/index.html","0585617931bfca2e00ab8ecfcde65a35"],["/tags/SQL函数/index.html","e8e176049a238762fb62124e8cb53f36"],["/tags/SQL命令/index.html","68ca1651f55d828db0f9980e8b91906f"],["/tags/SQL概念/index.html","da7779ebcb407fd99d126af569659f05"],["/tags/SQL调优/index.html","f2c35e878395aeb1e40b026d5a87debc"],["/tags/Void-知识点/index.html","dc3c35f59606bcfdb2bc9197957382d1"],["/tags/Vue框架/index.html","049f3b508204ad974a9a14642035f8f2"],["/tags/Web安全/index.html","d76d53113202d2bc9536a9e387f09bfe"],["/tags/consul/index.html","d3911069d2d5e95aa35823407c9be017"],["/tags/docker知识/index.html","4d9050bbce1bdbfb21a32e0f85e74b45"],["/tags/flask/index.html","51d15648836c79da0bafb84bb625e424"],["/tags/git命令/index.html","c7e28d03ff3ce38373f382539d0cf5cc"],["/tags/git配置/index.html","e757130cdcdfaa2231d9db851f611145"],["/tags/index.html","8d1214087cc5423da607aca867d3bf2a"],["/tags/js知识/index.html","df0dcbbf5fe46f291859269053a17125"],["/tags/pandas函数/index.html","003ca297540121a3d6aa842dc2913ee2"],["/tags/python编译器/index.html","244ce01ae3bf494372cba37d1cd93d9f"],["/tags/rabbitMQ/index.html","a1dffed7c3e60e9f4e06ab07b84c9846"],["/tags/scrapy框架/index.html","28bedb780b66cfcc4e4f37e78c9c1087"],["/tags/selenium/index.html","b4ab97119b3f60f539544b3d416a11a2"],["/tags/websocket知识/index.html","f6c0636357c06a86a130642a4084ccd7"],["/tags/上下文管理器/index.html","d024faa2d23788a35d9399e075c4a06b"],["/tags/信号量/index.html","c0855267e7a9884f7aae356ff6aac32d"],["/tags/函数补充/index.html","719e5254e06c343fc53ee4e0a46a126d"],["/tags/协程知识/index.html","721d8f9b7440cbc8f1807b3c5b56350f"],["/tags/基本知识点/index.html","1019134cd03a8563d28d249bee874e4a"],["/tags/对象引用传递/index.html","90956d043eb8a8b343d7dad8e56de97e"],["/tags/底层原理/index.html","b8fb09cacff998e74b3174227bc6c6c8"],["/tags/扩展知识/index.html","3e6efb36696525de41bb2ad67e5ea71a"],["/tags/排序算法/index.html","e74f54742c42e433e9d883cfa21edd16"],["/tags/接口设计/index.html","bc8a9abbd36cfa4a25c2346ba5ebfb4d"],["/tags/数学知识/index.html","6601e5c30988dae1b6d041de89eb1bcf"],["/tags/数据可视化概念/index.html","e81f20d118c9c84c06545a392e08f4bf"],["/tags/架构演进/index.html","285a6b68222faf0edd9fecbd84dd0c71"],["/tags/核心模块/index.html","8a3a5acf9bd2e7740f6e9d67343e6c9b"],["/tags/正则/index.html","b501e4afa3e291631c92f42d0a1ab12c"],["/tags/爬虫实践/index.html","e09c3b250c204402fd35c6339be37e6b"],["/tags/类和模块/index.html","05e2d95b09e76d0722f67dd0c0c82fda"],["/tags/类的知识/index.html","dbaab1e9688de18ba0489b7f33d9af97"],["/tags/线程概念/index.html","0968f711b34c4c12cb7383d73131f095"],["/tags/网站的基本概念/index.html","3c75dd6002458dc2168bafe86c82b0f2"],["/tags/网络编程/index.html","5e33ddd827d4db6c575cdeefb627d8c0"],["/tags/装饰器/index.html","bd9c5059840c1512b4c112e631011467"],["/tags/计算机知识/index.html","af1ea70b062210ce0af1ec6f57ef03ce"],["/tags/计算机网络知识/index.html","3d71bfe038ec240b480bf519dbd33cde"],["/tags/设计模式/index.html","6e6815879f2a7f199076a6918cdbaac2"],["/tags/语音识别/index.html","795d34c65c833bf28cdfb9aea6751468"],["/tags/进程-线程-协程总结/index.html","83b2f70934a6179d913c98c29a21dd92"],["/tags/进程概念/index.html","9e673f213c886e44811e3908fa56e24b"],["/tags/面向对象编程/index.html","c8de01ad9e8a396eb03b9d38f3d899ce"],["/tags/面试总结/index.html","bb181da9dfaf1d5f5452cf57115fea37"]];
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

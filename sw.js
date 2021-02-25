/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","96fd86a7e5d94bfb8982e7219f42c2b6"],["/2020/12/06/C 语言中 void 详解及应用/index.html","d2a7de1eeeb23c580ad51d8baf1045ca"],["/2020/12/06/C语言打包技艺/index.html","e8ecc693d7538b24e65e63641b3f6edf"],["/2020/12/06/C语言笔记1/index.html","2ab7bd775dc5681a009ed8c0e98bd43e"],["/2020/12/06/C语言笔记2/index.html","69a6213d95a06b79a9ab03a9032053a8"],["/2020/12/06/Django 重定向终极指南/index.html","faf61d75d5958d8f2c635c34f5f131a4"],["/2020/12/06/Django参数和模板/index.html","21b10ce4f6c32c2b06d2594c444d4fe1"],["/2020/12/06/Django后端演化/index.html","4a1de30a6f7ce2958371f232f2c6da39"],["/2020/12/06/Django的Cookie和Session/index.html","44950ac2577dbdbc6b10880a9ea1ed48"],["/2020/12/06/Django的Field详解/index.html","54834becb527a82a4d2e873f73e75de6"],["/2020/12/06/Django的ORM多表操作/index.html","6d1375cca3582c373667c2233428667b"],["/2020/12/06/GIL锁/index.html","733433a71f761dd7fea9716bde64b303"],["/2020/12/06/IP代理池/index.html","49c586297400fd0ee71934db70376c6a"],["/2020/12/06/JavaScript的简介和基本知识/index.html","80fac17fecc647f58fbb7b2ba6b33d54"],["/2020/12/06/Java面向对象/index.html","5b0f1c9508a4bdae09efc7db2557767e"],["/2020/12/06/Linux常用命令/index.html","dd8ab537279a9baedee380edcc09aa6c"],["/2020/12/06/Linux操作系统核心知识/index.html","0a66fafec3425ef1f166e93e642608f1"],["/2020/12/06/Linux操作系统（二）/index.html","58d4b30d9bc35189386f9702ccc85e9d"],["/2020/12/06/MQ笔记/index.html","a5c5353c248339add7c32eb193b782cd"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","f3c6ce058eaa5d4008e135aecbd10b69"],["/2020/12/06/Mysql数据库函数/index.html","4daae792afa9cc42882ce25c21078e9e"],["/2020/12/06/Python 中的上下文管理器/index.html","fc6e6afb8e690df9b473a45c5a09930e"],["/2020/12/06/Python的模块和类/index.html","cecd0cb69bd7d9ae28d15f9447147fd9"],["/2020/12/06/Python类补充/index.html","35f3516b54bf52939e0c711372ca8e57"],["/2020/12/06/Python面向对象/index.html","732c07350cf4b90bced2da90e544b7f5"],["/2020/12/06/README/index.html","e3983e05c0ff9cd90e7190052febb5d7"],["/2020/12/06/SQL性能调优/index.html","58b5a10179ec1bc196efd52720a934c7"],["/2020/12/06/c语言笔记3/index.html","25bd9492141e988b80e4d22d626632d6"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","d55b5ccd927cfd8b6a5992f045dd74d1"],["/2020/12/06/django之url规则/index.html","b3230e65b81cf1bbd2147d2eec424b1f"],["/2020/12/06/django的querySet详解/index.html","6ce5c931fb0859281ffb0765d512f37b"],["/2020/12/06/django配置初启/index.html","a2ed75950398e8e05bddab73b3407bc1"],["/2020/12/06/docker以及相关概念介绍/index.html","c0939ca33401bff2a3ce4790070122ab"],["/2020/12/06/docker信息/index.html","98f839d6e6d3c0eab54ca661a3ec2bde"],["/2020/12/06/docker网络/index.html","932e8f2319351778e87e41dccad01d63"],["/2020/12/06/flask框架/index.html","59fe65a9fddf03d76a5db27bb41d966a"],["/2020/12/06/git命令/index.html","d82558e60b554c3d621a0c17628a7801"],["/2020/12/06/hadoop基本概念介绍/index.html","8ac9353adc82fce166c3a91890107010"],["/2020/12/06/java基本知识/index.html","aa498096e1a88c9d07eb9c4469de4326"],["/2020/12/06/java简介/index.html","a27161e1735e7870eeb5af9cb4c4f818"],["/2020/12/06/pandas函数/index.html","f60d1edd0492731cc087f9a603e2a702"],["/2020/12/06/python函数参数传递和返回值探究/index.html","e3ab795ae0c1db5f062f512ff3e42e16"],["/2020/12/06/python函数补充/index.html","ce1005d3c3868fa319990abce67e792c"],["/2020/12/06/python数据类型的底层实现/index.html","30fdf3b7ecabbd0ca5909b7e04b984c9"],["/2020/12/06/python核心模块的介绍/index.html","e0923b41afc2de6a75bfd68882589653"],["/2020/12/06/python爬虫/index.html","2bc7f44760e756ec3e69f83f94370f88"],["/2020/12/06/python类的私有属性和私有方法/index.html","a9224f0c0d30bf376e68a6c6bed04421"],["/2020/12/06/python解释器介绍/index.html","33a44e8ee1d0b80bfe39de9b4fb5373e"],["/2020/12/06/python高阶函数的定义/index.html","142757772b894aba103c1e791ea9a434"],["/2020/12/06/vue框架介绍/index.html","ffeac614547751fbbd26204be1baafc3"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","1f83e24d9d07019d7a56ee3925a555aa"],["/2020/12/06/京东全网爬虫/index.html","d61651e2016cf03aa531f39ad758236b"],["/2020/12/06/协程/index.html","5874a9a4b77bbab3d0e7b13ae4a9c833"],["/2020/12/06/多线程/index.html","f06f68cc5b804ccf36cef526882d0ec1"],["/2020/12/06/多进程/index.html","b0b8e5e69ba01cc13c82098158f8d945"],["/2020/12/06/数据可视化笔记/index.html","2ca2641ff42e45bad3d71368ec056638"],["/2020/12/06/数据科学笔记/index.html","bbad5a80c599b467bb076b037db3659c"],["/2020/12/06/斗鱼弹幕抓取/index.html","22704ccd82f174a74f8c71c8dff96928"],["/2020/12/06/查看mysql连接情况/index.html","6f77d4a005b00ca2b961338aa70707f9"],["/2020/12/06/正则表达式/index.html","c316584a916d2c9eec408f8da281cfc1"],["/2020/12/06/第一次面试总结/index.html","3be220e56f95fdfd7451f9a5bf8eb89c"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","686ade54bd5eeae4cc117f614457be4c"],["/2020/12/06/索引和事务/index.html","d293af5d10dcc0c4b6fbed08d4590fdc"],["/2020/12/06/网站概念/index.html","f028eb8178e02a77584b3cf8e4723577"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","a7da729b377d715f3c2857f3468a65d8"],["/2020/12/06/计算机网络/index.html","58a50a9586246760abc0f578a3d3e63a"],["/2020/12/06/设计模式简介/index.html","5534a68367b64eea433d1122824c4219"],["/2020/12/06/语音识别/index.html","b3add9470aee076b5fe9037359845d86"],["/2020/12/06/轮询、长轮询、websocket/index.html","f27bbcf514000deb0a16f6926d148b89"],["/2020/12/06/进程,线程,协程对比/index.html","2ad7f1f17a7e3bf6fd0250c77a3ed41e"],["/2020/12/06/闭包和装饰器/index.html","0a9b35c03872383753693d7d7e7b5c89"],["/2020/12/06/面试总结/index.html","4d184bd521a200e097ab261c77888dde"],["/2020/12/13/鸭子类型/index.html","b7d3227cba600e111cfc8e5a78582b6b"],["/2021/01/03/工厂模式/index.html","adc5b7179fcb69541738e9ce9c31ad80"],["/2021/01/17/RESTful风格介绍/index.html","a357fe81ed75fb1bac9a5928354f2f1e"],["/2021/01/23/关于跨域和同源/index.html","6094ba0afbcff01b5a68392c1ead7dec"],["/2021/01/30/django的信号量/index.html","0a81c883be83d9839946850bed7b6376"],["/2021/02/16/创建型模式/index.html","6173a8326ccaa6c0ae49d5445f0e7eba"],["/2021/02/17/asyncio之协程/index.html","2a1b2ec65e7cdce464967afd517efe2f"],["/2021/02/25/结构型模式/index.html","266c64434ce194bc641aa6a1d9ba8810"],["/2021/02/25/行为型模式/index.html","33150ffc91b412a77c9211f6aa17a799"],["/about/index.html","2621dc2c12edc104be8a5eb649d6571a"],["/archives/2020/12/index.html","5464730ef915aab3356d8d2973294d01"],["/archives/2020/12/page/2/index.html","f996e482d62ff470804fdcd627dd2d52"],["/archives/2020/12/page/3/index.html","839f8f037a1eea2fd6ceac06297bc5cb"],["/archives/2020/12/page/4/index.html","fc07f1d87692e30d154a22d337a4b904"],["/archives/2020/12/page/5/index.html","c815290e56cdc5895d0074d3176d7a6a"],["/archives/2020/12/page/6/index.html","636c41a4c348f2991ba0019b927f58f3"],["/archives/2020/12/page/7/index.html","97e4f76aa2436441dd59d5044fe228f7"],["/archives/2020/12/page/8/index.html","e666a5519242314ac7814550e1d8188a"],["/archives/2020/index.html","80a29c6442bc0a3c826aeb75c02a84b2"],["/archives/2020/page/2/index.html","70bdd71bf2391c4c723b3ea70a44ed8d"],["/archives/2020/page/3/index.html","64faa8e18886e1e1b5e929a697a31701"],["/archives/2020/page/4/index.html","2854cc716e1d29da775a5df03e915dc4"],["/archives/2020/page/5/index.html","8cc1b6d5d2c8439be56a4b5ff6cffff4"],["/archives/2020/page/6/index.html","e1d602cb42b42ee4b672a53695c89440"],["/archives/2020/page/7/index.html","04293b4135c79641617781a047b5cccd"],["/archives/2020/page/8/index.html","2e8223b62ddbb9694649f84821874e65"],["/archives/2021/01/index.html","a7964a676f8e6c169a9cfcb1d53583f5"],["/archives/2021/02/index.html","ebca44a2557ba3e31e8d0307db526be0"],["/archives/2021/index.html","585ce35ee044a3621a83b5b8f98b4ee8"],["/archives/index.html","7eccac724ac65d6f007cb629e13602fe"],["/archives/page/2/index.html","dc546c83f644f434142271514b1a55d8"],["/archives/page/3/index.html","3f6f5919d811aaa409be96b497da7da5"],["/archives/page/4/index.html","004401b5eee71a39e203ffe6525efee1"],["/archives/page/5/index.html","60e1c24fbc43a70e14a56a00bb92ad90"],["/archives/page/6/index.html","874e84797d025404fe4cc0c786b0b429"],["/archives/page/7/index.html","aa320f7671182d30adc3d0b832ecd72d"],["/archives/page/8/index.html","a159acb3389e09d7a7967387e85ad432"],["/archives/page/9/index.html","02ae18fbd9652beee3a1ad544556a9d4"],["/categories/C语言编程知识/index.html","c8ba534c251148a1fb64b2d6011c8482"],["/categories/Django框架/index.html","eacf81a922d7b74452fbb4c184bb9346"],["/categories/Hadoop/index.html","43ba35de714d1da4a8eb0255f7f78e6c"],["/categories/Http知识/index.html","a4e736d75f5449637d1d7b2c8f259405"],["/categories/JavaScript/index.html","ae7c5504fae38e810c1fa8ed0e3a54e3"],["/categories/Java学习/index.html","80194817e654d178432206b8d7615adb"],["/categories/Linux/index.html","08710ead2aa59f50df023ce6fdbf6db8"],["/categories/Linux/常用命令/index.html","e1654003a553351b93f749fdb703bd1d"],["/categories/Linux/核心知识/index.html","dbeec708f460e12fbfc494a603776910"],["/categories/SQL知识/index.html","96e882ee310ef6d33fcfce5710796a88"],["/categories/docker/index.html","5f23d92b7a1ca0ddcb7bbf1ad21615ab"],["/categories/git/index.html","ec35bc438be3e32f95fd58a1d8817112"],["/categories/index.html","0d60e8dd44b65d8d30a5d63d1900dbaf"],["/categories/python后端架构/index.html","f5be3040ee7c01e27d09318e6acecf2a"],["/categories/python数据挖掘/index.html","19e253c7857b8592f4e391f4942ca883"],["/categories/python爬虫/index.html","9f1c9d083d2b98735657ba2fb234bdac"],["/categories/python的web框架/index.html","f10acc6c09d5b615a312531b311215da"],["/categories/python编程/index.html","946eeaa46527ee0d86034de5f818b3a6"],["/categories/python编程/page/2/index.html","b7df8ad5707682420068e8845020e3c5"],["/categories/python进阶/index.html","bd47f061a7bb454b72161c25dba16f93"],["/categories/selenium知识/index.html","452bb6c9340147f676649eb7cd5093bc"],["/categories/个人随感/index.html","8fe4ff5c087aeda14568e0b5008479b8"],["/categories/前端学习/index.html","68b8d5eacf2b8218d5f56475a94a10a0"],["/categories/后端接口风格/index.html","170ac372cbb925fb2edc8324e340df3a"],["/categories/数据可视化/index.html","b9ca57cb57e4f2f25f707032b312c88f"],["/categories/正则表达式/index.html","b6ac8583ce8fd5f9b993eb81a9789dc7"],["/categories/消息队列/index.html","d7cccc696dcdd1e455691158a25a2e31"],["/categories/算法/index.html","7ff1ef97ab3c69d8628151fc6957f220"],["/categories/算法/五大经典排序/index.html","a0bfed3317c34b6c28ea77a0e2208284"],["/categories/统计学和概率论/index.html","60d8c17b20a5023b72b98c4633b6b043"],["/categories/网站知识/index.html","e01ee4b0b905b32e97d16ee6f8f21959"],["/categories/计算机组成原理/index.html","0b89653592bb0253754b34ed1129c98e"],["/categories/计算机网络/OSI七层协议/index.html","92325ca1dd58050492dad3c714e6a323"],["/categories/计算机网络/index.html","b769a88f2c3a79fcb3b71c8cc3beca7c"],["/categories/软件工程/index.html","ca213c11727dc046b12f539497c2e017"],["/categories/面试经历/index.html","24eaab5999e81b1119dde99e26122f51"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","c081aeb18244caa72f70bd12caef768e"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","74149151f73782dace28268d8f478736"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0e76d3a07290fbeffd0ea16c40b4996b"],["/page/3/index.html","fa5903d05362236b626939c2e9e07763"],["/page/4/index.html","4074bb390a764de92cb989ea34f2c9b1"],["/page/5/index.html","ac79b558ef98cdf08887d07c54f6b020"],["/page/6/index.html","b7f575661d300e3ab9c60124ed03dcc2"],["/page/7/index.html","ec36a44a7a8f60d1b5482c9a56150415"],["/page/8/index.html","e757a70437eda1ff46ce98f67239af86"],["/page/9/index.html","f9e61ba9a3fa4588e8ac45f35278b253"],["/sw-register.js","4d9f0a9ccd2fa02eae9897171d0cb8e0"],["/tags/Cookie和Session/index.html","af9264626b7f5a32cfb7f57b7917ba25"],["/tags/Django/index.html","ec72b55032dbe1a7a80acd210dd61577"],["/tags/Django部署/index.html","3d005c89c88bf0b5edaddeebd66531e9"],["/tags/Django重定向原文/index.html","1b37a3416a9a9a9226db61b77d423d5e"],["/tags/GIL锁/index.html","8958c8ca9a136f30b7c4e316e665283d"],["/tags/Hadoop介绍/index.html","2c15ca6f425708d0a661b1d8d06ec073"],["/tags/Java基本知识点/index.html","59715ffb135c89ef0c19df6ee9fb19ad"],["/tags/LinuxLiunx命令/index.html","180509f64dd87d905b70e1b7434bf3ec"],["/tags/Linux知识/index.html","eed4f4b5437797b4984fe403b3992257"],["/tags/ORM/index.html","822dfcf347873b1284bda420814396ca"],["/tags/QuerySet集合/index.html","e2d6bca036f93c44619f0c8bb060e305"],["/tags/SQL函数/index.html","f736b37be583c4def69491153001c1a6"],["/tags/SQL命令/index.html","75825745f2971ccd80cccb95d163a4f5"],["/tags/SQL概念/index.html","4b5fe7962d82b361adaf7acbf361f147"],["/tags/SQL调优/index.html","6c0f0a1452b472c2b02bcd972b125bea"],["/tags/Void-知识点/index.html","aac9d4d0fd757c675ed6b21142c5ad88"],["/tags/Vue框架/index.html","570d354468236aa23e05323dc19a1569"],["/tags/Web安全/index.html","99eca1ca182c1a6185dd650c2465eae3"],["/tags/docker知识/index.html","35ac04e10257607cf2fb2fe1be028870"],["/tags/flask/index.html","89cf874815e430d0ffab0dec2a2fb08f"],["/tags/git命令/index.html","e540a5171be1b7c7a3857805222c49b9"],["/tags/git配置/index.html","c1ad5a84fde09604672321092b1ecb68"],["/tags/index.html","3379e4573af7618d012355fbd9cf9911"],["/tags/js知识/index.html","cf3f13d25192f1b82c0619ae30d41eff"],["/tags/pandas函数/index.html","d6fa47db5754ea2f9f22c729bbce97b8"],["/tags/python编译器/index.html","e8c9ac07c3d55b0534fb13704d21a22b"],["/tags/rabbitMQ/index.html","bfa72badd041ce8900f92516bf55b1b1"],["/tags/scrapy框架/index.html","c6f514cf3e9dca4e983a36eba594ef40"],["/tags/selenium/index.html","29e510aab1781ca4abe3d6f2a309f0fb"],["/tags/websocket知识/index.html","fe77e17d759ec227da2a9ec7c689997b"],["/tags/上下文管理器/index.html","0f3c9f9bf181450ddad9b09e77ba392a"],["/tags/信号量/index.html","526311382ceaf6cf61a643cb1c43af2d"],["/tags/函数补充/index.html","84510c34a141568c046d071286487b97"],["/tags/协程知识/index.html","c19dc06d4dcc361d032a14174fa10435"],["/tags/基本知识点/index.html","abfc67edf9bcf0befc65e4fd5075d1ea"],["/tags/对象引用传递/index.html","30b401d2b717446c1c68c741f232f227"],["/tags/底层原理/index.html","b01b174142051bc92fb5d221b7dfb43a"],["/tags/扩展知识/index.html","c97d4c77bb28689094feac75b71c9bb7"],["/tags/排序算法/index.html","0b645628fc4eb69f1ce1820d45c483db"],["/tags/接口设计/index.html","71e243d8f89f7271fd0894383e4ba6b4"],["/tags/数学知识/index.html","3916b3181d9cf5cad0105d8b61521318"],["/tags/数据可视化概念/index.html","06e9edaf5e600caf2bcb51c559b7320f"],["/tags/架构演进/index.html","53be29993dee3413780d61a6974295ea"],["/tags/核心模块/index.html","1bc505b83b3d6a11d73b4fade0954037"],["/tags/正则/index.html","ac4a23b7f3caa7a3438536d7bd99f758"],["/tags/爬虫实践/index.html","860541de5043d6c6be1e9bc5b2c594b3"],["/tags/类和模块/index.html","6462fa6e15bd6866606cdb0d27ed648b"],["/tags/类的知识/index.html","3a57032e22e91b29675780cf12649c25"],["/tags/线程概念/index.html","02e150a5ae530792ee8ff6455299b77d"],["/tags/网站的基本概念/index.html","dbad721c3701e7b81b287f1cbf679d4a"],["/tags/网络编程/index.html","f714b8abb6a74f01a13b42497fed2337"],["/tags/装饰器/index.html","02442ac274688f434a8094b6e1e6bce8"],["/tags/计算机知识/index.html","92bc8d65959bfe54c884c512e0df0918"],["/tags/计算机网络知识/index.html","4bf4236c86c8b3bb77cf629cee4a1405"],["/tags/设计模式/index.html","23b421b4d3096468ecd87542ed3266c0"],["/tags/语音识别/index.html","4980a4ec7834c8ab244e1c3cf75d114c"],["/tags/进程-线程-协程总结/index.html","732a5eff0e7932b8763f5cb527e689d7"],["/tags/进程概念/index.html","52c9791bd6064d587f40732c61adf773"],["/tags/面向对象编程/index.html","84bf5d3cbb596b5dd603b8dc804eaf3a"],["/tags/面试总结/index.html","01cbfc7a8c5b2781e422f250f3e3481d"]];
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

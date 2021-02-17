/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","94b19dd694a6d4fecbfab84455e5d941"],["/2020/12/06/C 语言中 void 详解及应用/index.html","a900191d5c165f60eee20c12fb70666e"],["/2020/12/06/C语言打包技艺/index.html","987850a3396b5e597a61e6fbf4c03944"],["/2020/12/06/C语言笔记1/index.html","a96b6836a138775dcc6514d0ab18f983"],["/2020/12/06/C语言笔记2/index.html","e8e4e9ca403ea4bc2cec5fa717c8694a"],["/2020/12/06/Django 重定向终极指南/index.html","8717dfa2bd3604c72fc4bd2e2eacc7b2"],["/2020/12/06/Django参数和模板/index.html","a2f71c63d348620fb751a22ed1100340"],["/2020/12/06/Django后端演化/index.html","36daa88c4dc2c168bbe74138de84c332"],["/2020/12/06/Django的Cookie和Session/index.html","fc5b7d6e9ba7de02298178ff24518987"],["/2020/12/06/Django的Field详解/index.html","8ecf1469ceb51a13bee75e23e22db9c1"],["/2020/12/06/Django的ORM多表操作/index.html","4df30cc5a4832c020b4d3a9e41e25334"],["/2020/12/06/GIL锁/index.html","1345f213fe356fa7c24d978a78bdaf99"],["/2020/12/06/IP代理池/index.html","8c1c96ba38208d6039ae47b1e2f4b6ab"],["/2020/12/06/JavaScript的简介和基本知识/index.html","246892a51071b62ee9c8741881fbcfa2"],["/2020/12/06/Java面向对象/index.html","b70f76ce7ccaed3446898fef4a17d70b"],["/2020/12/06/Linux常用命令/index.html","9e7e90c130183cf8ff95921a5877b4ed"],["/2020/12/06/Linux操作系统核心知识/index.html","a3f1a323b546bca93c44472dc4016caa"],["/2020/12/06/Linux操作系统（二）/index.html","1e8a15f0cc5897af668738f3d419c09d"],["/2020/12/06/MQ笔记/index.html","2e54fc318153d98efbd6cba1e4d0d913"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","7799d87461fd0aeb480f8c8d790c7739"],["/2020/12/06/Mysql数据库函数/index.html","bea24be0cc052825f76d71c0b400cb84"],["/2020/12/06/Python 中的上下文管理器/index.html","4b40605e6c9990587dee3a8b55751134"],["/2020/12/06/Python的模块和类/index.html","69c5be01655fffab349acef2c90866ea"],["/2020/12/06/Python类补充/index.html","a28239383108aaf891cb69201a8ebce2"],["/2020/12/06/Python面向对象/index.html","13da1e9eda9925ee18d13b34693421de"],["/2020/12/06/README/index.html","277fecba397f33434ccd5bb867caa3f4"],["/2020/12/06/SQL性能调优/index.html","fd06b07f9b714dde8ee68d55760ce307"],["/2020/12/06/c语言笔记3/index.html","d444316fc0ded7846875dfc6cd2d8364"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","4e27baadda5e57ccc89c6b2b002c908d"],["/2020/12/06/django之url规则/index.html","22d64c14a27f91cc90986458fa7a29cf"],["/2020/12/06/django的querySet详解/index.html","59b9b48473a869002eaab3282f35d254"],["/2020/12/06/django配置初启/index.html","07a89fb0e56bbb1ca41ed1ae97b71e16"],["/2020/12/06/docker以及相关概念介绍/index.html","c0876bb17bc892d918f45fb4842212d7"],["/2020/12/06/docker信息/index.html","001f5544f9bbe25c82bc2f5803c75246"],["/2020/12/06/docker网络/index.html","2e93270991052f5f379939ac307ac530"],["/2020/12/06/flask框架/index.html","d5a6e94a8c1efb4f0db0a34dc2bead3c"],["/2020/12/06/git命令/index.html","51c9a9c5e34cd74db90d26d721c034d5"],["/2020/12/06/hadoop基本概念介绍/index.html","1cc11714413373e5a10ab620b14b08b9"],["/2020/12/06/java基本知识/index.html","c5904cb5bf639774b177e9de057df7b8"],["/2020/12/06/java简介/index.html","419c6b6bbac5229bead94a15ab237f7a"],["/2020/12/06/pandas函数/index.html","8e70f13008effb63cf335269529850ba"],["/2020/12/06/python函数参数传递和返回值探究/index.html","5701f4d53602dd7eaef1851dadd062bd"],["/2020/12/06/python函数补充/index.html","42a6ab2888e2cfc011bbca4e7565addd"],["/2020/12/06/python数据类型的底层实现/index.html","76303dfcd453e657a60f5486854120ff"],["/2020/12/06/python核心模块的介绍/index.html","10372c9b4fbd78de3d3e44c2ab6bebee"],["/2020/12/06/python爬虫/index.html","ac50b0e6242260c9ca696aaa6610dc0a"],["/2020/12/06/python类的私有属性和私有方法/index.html","1082a01289dd74057e8f6a123160dbe2"],["/2020/12/06/python解释器介绍/index.html","02519b3f4726d91b5a1c753ab9fbcb38"],["/2020/12/06/python高阶函数的定义/index.html","d7d7e521cfe02dc2f2c65cc669a9a855"],["/2020/12/06/vue框架介绍/index.html","6199b8aeaae1e507115070e1f4b5e43d"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","0eaf74b80b941011222ccaa1d1fb2516"],["/2020/12/06/京东全网爬虫/index.html","715447a56c4fea6baa746101e52815cf"],["/2020/12/06/协程/index.html","1e4f155812ef0f4f2e12e8e7c34d299a"],["/2020/12/06/多线程/index.html","dbe559b1ebef0e4f59504f3350521e4b"],["/2020/12/06/多进程/index.html","a871d98da7e77d9683cd36c50456b7e9"],["/2020/12/06/数据可视化笔记/index.html","0254c943789b6bf773967171608c7ea7"],["/2020/12/06/数据科学笔记/index.html","543a1b7329f8f6f92f8c8c6d871d08af"],["/2020/12/06/斗鱼弹幕抓取/index.html","3291bbf503f72345ba365f70e42d98d5"],["/2020/12/06/查看mysql连接情况/index.html","05875614db744464d79e479ba5070f51"],["/2020/12/06/正则表达式/index.html","779174e6ab3437fdf82a725f8585a9bc"],["/2020/12/06/第一次面试总结/index.html","f305c0747b9938b0d173f9c66a631e0a"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","5772bd924c04a334939f97503e0ce1be"],["/2020/12/06/索引和事务/index.html","51782568abebe429c82a698938a9a20d"],["/2020/12/06/网站概念/index.html","c3a1f916c0133663b2f852920c8ea1a4"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","eb179047e297a548b2cf66535f925895"],["/2020/12/06/计算机网络/index.html","ea92e090810dd857c547b6445c29d03a"],["/2020/12/06/设计模式简介/index.html","3242f429e24b45d40f93d9502ea82941"],["/2020/12/06/语音识别/index.html","bd5116036a9dc08ee278619c0acdd452"],["/2020/12/06/轮询、长轮询、websocket/index.html","abc7c5825bc60f90ca5b44d628d82df5"],["/2020/12/06/进程,线程,协程对比/index.html","a04012b7f26fb9069a604f4e936890cc"],["/2020/12/06/闭包和装饰器/index.html","646ea5951336662ea853e862a819d6b1"],["/2020/12/06/面试总结/index.html","dadb13be6b61201c2adfa147f61da360"],["/2020/12/13/鸭子类型/index.html","efb1ad1abdde174ad84f18dfd2ccef31"],["/2021/01/03/工厂模式/index.html","16cc7f75b43bb6c8a49181e27a13f320"],["/2021/01/17/RESTful风格介绍/index.html","f64294a81262b7991876d57a16bfcd4a"],["/2021/01/23/关于跨域和同源/index.html","0f7a74f0e388bca72307a3fe35d06bf3"],["/2021/01/30/django的信号量/index.html","5135fe7330d3846f95d7a130a4cb704d"],["/2021/02/16/创建型模式/index.html","03762b36f26e184f0ee8ae4cead14e12"],["/2021/02/17/asyncio之协程/index.html","3f56af783cd7f90fb84568546322c51b"],["/about/index.html","8d5345b5ebfb1a92eb452f84d73e4f67"],["/archives/2020/12/index.html","4c0fdbd435aff3dbb2ee385ddffbc4ed"],["/archives/2020/12/page/2/index.html","6c459104576a3db125ad2a08ac296695"],["/archives/2020/12/page/3/index.html","dcf7feaf622d8fc23d5f0c3f7df82d2f"],["/archives/2020/12/page/4/index.html","25f122da28c363ba4e005b559a5db399"],["/archives/2020/12/page/5/index.html","22e8da64eab2957f2fe90b93b4d33800"],["/archives/2020/12/page/6/index.html","d41f9b5df862af8aaba58e6df72639ea"],["/archives/2020/12/page/7/index.html","df07dd08985e69a56e4460c3e9d6b983"],["/archives/2020/12/page/8/index.html","47fa318f0d65d5c165de2c48b40c3b19"],["/archives/2020/index.html","e147326a6047af54459f2148e4de8137"],["/archives/2020/page/2/index.html","e90c824f6bcd69b0b1a8c0d73f946d5e"],["/archives/2020/page/3/index.html","3406de66aabfc85caa9553960f9d3e86"],["/archives/2020/page/4/index.html","b337dbdd13213928b74334d1c8814e79"],["/archives/2020/page/5/index.html","29844e14d16d02ee5b5fd14392c37b58"],["/archives/2020/page/6/index.html","2630233cf82ff8e60064aef9ca27a39e"],["/archives/2020/page/7/index.html","41eb4d9630d858698f23dfa35464c7c5"],["/archives/2020/page/8/index.html","39d1d6dfa1fccfe0bbb796197999d79a"],["/archives/2021/01/index.html","17e1cda7360901c7639baad3eb24dd0e"],["/archives/2021/02/index.html","ecf95808f153c65635b97651d36926f6"],["/archives/2021/index.html","1bd91bff474dea904228b1b5428b1a84"],["/archives/index.html","c3371af7046fd1614d43fca9073ba3d7"],["/archives/page/2/index.html","f40ed434271ab67512ce87698f622246"],["/archives/page/3/index.html","391b8baefa7f9b54a826a78a93184206"],["/archives/page/4/index.html","100cbe5212051455530b428378cbee25"],["/archives/page/5/index.html","2a28634b4f4977bb4ceb3a44f83e0904"],["/archives/page/6/index.html","13cca8c2edbc091ce33f436245438fd2"],["/archives/page/7/index.html","c83de23686446a4e8db44b13808699cb"],["/archives/page/8/index.html","0207d4913dc6fe1ff53d3021c89af930"],["/categories/C语言编程知识/index.html","9b46a90c91af3bf1285d1161d5bf997c"],["/categories/Django框架/index.html","48f84011cff263bfc830d798836b806e"],["/categories/Hadoop/index.html","55ff1c4cb4683a9761b4350489074545"],["/categories/Http知识/index.html","3ffed8f2542cc8617a9b2e2e1c347cb2"],["/categories/JavaScript/index.html","bb9ca94fe7fbffe63b88c554bc7b8afe"],["/categories/Java学习/index.html","03696a298100a0a629a5f9087974aab6"],["/categories/Linux/index.html","3315bf0502eaa605a3ee08c82716f0c5"],["/categories/Linux/常用命令/index.html","06adc31580052d24fe3b28249a6fe2d5"],["/categories/Linux/核心知识/index.html","a4c6de81fe166dae24751689cbf97e4d"],["/categories/SQL知识/index.html","389ca5e781b76754779b97abaca46ad0"],["/categories/docker/index.html","a4a78c0c5d273652234893a659d8ab86"],["/categories/git/index.html","66cb542e46f786e0db0efa0d360bdc2f"],["/categories/index.html","59d484cd181827464db131b977021af2"],["/categories/python后端架构/index.html","ece8382fe6146b7a53cdccb770165e0d"],["/categories/python数据挖掘/index.html","6a269d6cf221389ac79ee70ae7c6207d"],["/categories/python爬虫/index.html","21838056938b82adf7bb418df33c0555"],["/categories/python的web框架/index.html","01434acc0abf6f1986fa49198afa0a84"],["/categories/python编程/index.html","45445d3490a26602f27c14d365ef9200"],["/categories/python编程/page/2/index.html","b2bac795ba045c09b59c980578962d1e"],["/categories/python进阶/index.html","46bb5ffe680ef49563a1b97c80c067ff"],["/categories/selenium知识/index.html","15532231d0c2302e1f24d134b711a965"],["/categories/个人随感/index.html","d936adbc6dd80d2bb145f9dea6e8fb06"],["/categories/前端学习/index.html","16c570d548ed4a61ab7b2db1f439e11d"],["/categories/后端接口风格/index.html","50d6fbf5db6000ae7337195fe3fb7532"],["/categories/数据可视化/index.html","3734afbc39890af960e11afa8248cda4"],["/categories/正则表达式/index.html","cbc2b657af1aa1c9c6f33bdc743b10f4"],["/categories/消息队列/index.html","24b4b1f2dc9d20741937ab3845cc7371"],["/categories/算法/index.html","4d2c90cda203b642991f9bb25c6196c2"],["/categories/算法/五大经典排序/index.html","2a18fee2fa168e05b984f66546a210cf"],["/categories/统计学和概率论/index.html","1b901c4e6c57e68ff3da24103f471075"],["/categories/网站知识/index.html","97d7687c05754dd98703e1edce1dd11d"],["/categories/计算机组成原理/index.html","25c006df67a4a651ce6b412f131b79e4"],["/categories/计算机网络/OSI七层协议/index.html","cd87a524f1eba78565aaff6394616e5a"],["/categories/计算机网络/index.html","8c478db8d1b19d32262cd2caa0f220eb"],["/categories/软件工程/index.html","e7735952e4b0e85bc634b7716534cedb"],["/categories/面试经历/index.html","9a6a7213776cf8359630a29bd2d4ae02"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","c5fea540a8859623da15a15e6b4b8ccf"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","9aa7f7875ab8084d229c87ec727fd20b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","043cc5f706e629ea6f6b8af433d0f353"],["/page/3/index.html","7f50cf69c0912aa315e82d1b871c6e79"],["/page/4/index.html","61dac944856b38223a1e93472a55b9ba"],["/page/5/index.html","fd7f429628eccd5040d85edb3395d829"],["/page/6/index.html","65c72048df76a3061c44bb4cacfb0f9c"],["/page/7/index.html","a051efa1c8bc0c386e558e0d50c7b569"],["/page/8/index.html","d879516143b2109057d60eb87dd53961"],["/sw-register.js","57e7018c860f76ad3f6eaaf3ff232c15"],["/tags/Cookie和Session/index.html","c3d7719557bbace5634d6bcaf7185a89"],["/tags/Django/index.html","34ed5e8642c8bf9745974a8054eeeb2c"],["/tags/Django部署/index.html","c785a57ad308abb0d699062ab541c793"],["/tags/Django重定向原文/index.html","4d08373f2d06e2d97262874760653803"],["/tags/GIL锁/index.html","f8a153a92a5de5453df9c99feeafd56e"],["/tags/Hadoop介绍/index.html","38baa0a891fa73dcfc6c6599516a7cd4"],["/tags/Java基本知识点/index.html","188b2b03e0bc6eb56a18f2becf9b6d60"],["/tags/LinuxLiunx命令/index.html","76cc4a024865ac85a407c9c04307e716"],["/tags/Linux知识/index.html","165e687c0f9bd7445964d83ed62cecad"],["/tags/ORM/index.html","91e16a8b7d52cac3de00a279e714ea0c"],["/tags/QuerySet集合/index.html","1398e9c25f075f87ea7b7446599fbc47"],["/tags/SQL函数/index.html","38470fedf0aaa40b13c278c75db4cb9d"],["/tags/SQL命令/index.html","7f462c2c080aee3fa30f1281ff23ca14"],["/tags/SQL概念/index.html","fab82a7f2a52496982e0f54a264598a2"],["/tags/SQL调优/index.html","b259bf4644781cac8e3c461f7df67d3a"],["/tags/Void-知识点/index.html","b3ed684179b064724c3c3f2291a48831"],["/tags/Vue框架/index.html","c85871772d5e82129a0102d0eb14af90"],["/tags/Web安全/index.html","e77e00971502c96afb48613f3782d160"],["/tags/docker知识/index.html","9f7992cb7c32849eb1d3aebf6a0d2536"],["/tags/flask/index.html","2523fc2d9ec4abe53d87151af04d6f30"],["/tags/git命令/index.html","2286b78804276503e0128dd3fd012d08"],["/tags/git配置/index.html","c3bd9d454e3a9302d9c9cf4c66e33dac"],["/tags/index.html","59d062a38152f9886c67c325a4438464"],["/tags/js知识/index.html","4f0acfa31b91b7d2fc890d57f770a144"],["/tags/pandas函数/index.html","173bd25245991877b6164fa29140a5c9"],["/tags/python编译器/index.html","3fb54abbf407d30fa7c8a50e48db2489"],["/tags/rabbitMQ/index.html","ba17f5edf95a0ba8d09eb30614901241"],["/tags/scrapy框架/index.html","6990e5e09a9654d00f6b62e952c71e65"],["/tags/selenium/index.html","9b4c2e5884766eb2afadad9812c9e4a2"],["/tags/websocket知识/index.html","fc8ef8e3a7cb8f3143e226341435194b"],["/tags/上下文管理器/index.html","4d9a913e2332fde759447dd1e881fb40"],["/tags/信号量/index.html","92378e8a90840f1dc5b5585ba3d6af03"],["/tags/函数补充/index.html","a713fdac2907c92f8681b2370592e7b2"],["/tags/协程知识/index.html","be6402bf7a4e78af3a2fe6e6fe4f32e8"],["/tags/基本知识点/index.html","cd128f3c7533a7258d2f557d7ba12a84"],["/tags/对象引用传递/index.html","99a20e67daadb90db5a68320c87886aa"],["/tags/底层原理/index.html","2a552d3137d17c01bd22bf8b4d9f1454"],["/tags/扩展知识/index.html","22d15c3ef1dd0f2d0936ea468f994e24"],["/tags/排序算法/index.html","b74322bcf3aa6251fc1580a1434520e6"],["/tags/接口设计/index.html","e2797ca9dc222c54a50e7470a12a47a5"],["/tags/数学知识/index.html","c9dacb45ad4cedee17c1b344c0ef9885"],["/tags/数据可视化概念/index.html","2f108c8a9c015e8cfb05babdf5fa69fc"],["/tags/架构演进/index.html","26ccc389b5e336a624c2e665d3ef2854"],["/tags/核心模块/index.html","7c37281b286ee865ffc0582ec36bd7bc"],["/tags/正则/index.html","d90d1eabcca83bae81e85ce9835542c1"],["/tags/爬虫实践/index.html","88b9126c34a55cff3a18d3c86b711986"],["/tags/类和模块/index.html","1f72e318e4a99754b8ab7775dd7ac211"],["/tags/类的知识/index.html","f50ae1eaeaf9cfd5b23b22bcdf97087d"],["/tags/线程概念/index.html","e031cca856d35f5cd52a5309f5ad81f6"],["/tags/网站的基本概念/index.html","e0ae18751fc9b47bb27a6efcd8c51c4e"],["/tags/网络编程/index.html","ed8436eb8cc56cb7d7568dd77fba4767"],["/tags/装饰器/index.html","93eee98f205d7de92a65703309769aab"],["/tags/计算机知识/index.html","739de3abdf8d82da1767d5d593a129a8"],["/tags/计算机网络知识/index.html","ea2f3b3c2f3ea0df92969f736cbe55b7"],["/tags/设计模式/index.html","2aadc94c58653f2b23006bd786cbcca5"],["/tags/语音识别/index.html","ad3164cd83e72287a82b13ec479501d1"],["/tags/进程-线程-协程总结/index.html","2bb220e2a0eb38bd7e7f3d34634923c0"],["/tags/进程概念/index.html","d5282d61a6b9590474a24b6a0bbc5d78"],["/tags/面向对象编程/index.html","d6bbdbd822161f31db7b345d60015343"],["/tags/面试总结/index.html","69d5439b00d3f9cd778fb5e12de1b16a"]];
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

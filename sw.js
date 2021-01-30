/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","fe447119772af5522341311303a9f9f7"],["/2020/12/06/C 语言中 void 详解及应用/index.html","07104a409f39872df9f100af4c23bb96"],["/2020/12/06/C语言打包技艺/index.html","815c18db7edc85217998a692da82c065"],["/2020/12/06/C语言笔记1/index.html","fd22a9d05cedae1e03fa2cbeb25f0270"],["/2020/12/06/C语言笔记2/index.html","9f3342d83987bc96be8e9ef2e9a56f20"],["/2020/12/06/Django 重定向终极指南/index.html","365f3587feba44b14237f3e6ad07f07d"],["/2020/12/06/Django参数和模板/index.html","7cc06c841341f1d10105c04984488d69"],["/2020/12/06/Django后端演化/index.html","11179831453b59052ec9b03ecd760ee5"],["/2020/12/06/Django的Cookie和Session/index.html","2093cb56387e7005f672ecc99dfa85e3"],["/2020/12/06/Django的Field详解/index.html","07c01254c8d0d8312a72c03942c8c28d"],["/2020/12/06/Django的ORM多表操作/index.html","b6de5e9e7f4bfc024ba9a2bfd8cb6b2f"],["/2020/12/06/GIL锁/index.html","ef8e825a6f6caca8a7263c9a513c5686"],["/2020/12/06/IP代理池/index.html","b5e74985fe3ac453d7e2d16af6787cc3"],["/2020/12/06/JavaScript的简介和基本知识/index.html","a1b312dc7489ea81296a279239a1daf2"],["/2020/12/06/Java面向对象/index.html","c90c65a9f214f06e8ba41f4d8b89b0a1"],["/2020/12/06/Linux常用命令/index.html","a23694561f42a1ba04acba5f69f98df3"],["/2020/12/06/Linux操作系统核心知识/index.html","6a673144973054203d122014d2900e3f"],["/2020/12/06/Linux操作系统（二）/index.html","d244ab40ccde74ea3ff538cc077df3b7"],["/2020/12/06/MQ笔记/index.html","6699b73f4690ff8888a5e92da1955eda"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","b39d8301056cd7239859e869487b5367"],["/2020/12/06/Mysql数据库函数/index.html","1f0bcbbe6294d13da62f2beb6a7a1c3c"],["/2020/12/06/Python 中的上下文管理器/index.html","bef1bfe7de3e6d3c844deed12122cae5"],["/2020/12/06/Python的模块和类/index.html","7594d0350fa45cfee7ce9a498a4a033d"],["/2020/12/06/Python类补充/index.html","290e4198c5adf72644a98ef2441facf6"],["/2020/12/06/Python面向对象/index.html","13c92bb02dd22b4a97c656c26f175a32"],["/2020/12/06/README/index.html","9e9a3898e00cd924251d50f9f47ea85c"],["/2020/12/06/SQL性能调优/index.html","96dc22277faa327c12ab25e50ba8fce8"],["/2020/12/06/c语言笔记3/index.html","fc66e003a0cbb69341199cb542e4e122"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","b61e379321d4c35912b3fe200c1190c7"],["/2020/12/06/django之url规则/index.html","e4daa81343e8ce379e4c270857a319f2"],["/2020/12/06/django的querySet详解/index.html","32146eac99543dc23a3d0d295e115977"],["/2020/12/06/django配置初启/index.html","00b7e3edfb7acc462257c9b686fd63df"],["/2020/12/06/docker以及相关概念介绍/index.html","eecb39f41ba527435e78f4f80464aa88"],["/2020/12/06/docker信息/index.html","d0ae21c573aa4e92d8a35445cf8ddfad"],["/2020/12/06/docker网络/index.html","c11fce865cc804ed188ae513afce8958"],["/2020/12/06/flask框架/index.html","bddcf07bfd991faf729e96feb7786cf5"],["/2020/12/06/git命令/index.html","5ee409e75d47fcfca122a8d6bb8f7ff2"],["/2020/12/06/hadoop基本概念介绍/index.html","1e21a79d38fbee813ecfb14bbf8eec87"],["/2020/12/06/java基本知识/index.html","a35cd787c278f506cf88843662413804"],["/2020/12/06/java简介/index.html","34588a534652011f8446d7de9d619099"],["/2020/12/06/pandas函数/index.html","26fac10c78bafeda6e506db41ebb62a8"],["/2020/12/06/python函数参数传递和返回值探究/index.html","e26aa50135e989ffbd777a5e520dd9d1"],["/2020/12/06/python函数补充/index.html","b07e0831128deed8db156cf4346186bc"],["/2020/12/06/python数据类型的底层实现/index.html","a3bf6545afc644e0d5e1f14d98a6260c"],["/2020/12/06/python核心模块的介绍/index.html","a4fed5e64d9f3c0f4fbbb36a5827453f"],["/2020/12/06/python爬虫/index.html","42e0b78fe4f55ed1e95aaf3503d6e995"],["/2020/12/06/python类的私有属性和私有方法/index.html","5be99bf099aaf2725ebf0db1d337bcc3"],["/2020/12/06/python解释器介绍/index.html","1cd9fed0f5726b018decdf271f02e7d5"],["/2020/12/06/python高阶函数的定义/index.html","0a5393ac7fc54dd5ac18ed8267ae5737"],["/2020/12/06/vue框架介绍/index.html","9ae9c6d800ff1533ff87b990d5ab9388"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","d27a43bce1bcc27d09fdf53dd75941a4"],["/2020/12/06/京东全网爬虫/index.html","066ce72a0a1ed86311fbe9253de534a9"],["/2020/12/06/协程/index.html","b80d3e8e35a84227de7be1ae6037a31d"],["/2020/12/06/多线程/index.html","ac3d94a800d618c9429130283beb4014"],["/2020/12/06/多进程/index.html","6009fa5c1db8af6203a94cbf80db0250"],["/2020/12/06/数据可视化笔记/index.html","7136b545fd233f5fb93f26b1c2314068"],["/2020/12/06/数据科学笔记/index.html","61dfcc8374ef82af5de95e72ef05650f"],["/2020/12/06/斗鱼弹幕抓取/index.html","f3f2d1295d79f1a6d185e258a623d784"],["/2020/12/06/查看mysql连接情况/index.html","fcdea1a192599b865150bc8ff02c369b"],["/2020/12/06/正则表达式/index.html","61c0e4a9f9722387febf1d90e863ca53"],["/2020/12/06/第一次面试总结/index.html","64ee111f6fc7a076ea18b3eb2b97bf50"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","b090c530a044df1715dab5d77247403c"],["/2020/12/06/索引和事务/index.html","75d0cb5f27fd84735b3edf34f8fa3acc"],["/2020/12/06/网站概念/index.html","21cc411a3290b4066630436885773036"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","42841d3d37cc5a1d2044dc6716ac713b"],["/2020/12/06/计算机网络/index.html","517f5118f1d6898c3cc9edcdf0f121d4"],["/2020/12/06/设计模式简介/index.html","a72b13b1213719c7df5432f8b6d59095"],["/2020/12/06/语音识别/index.html","574af87eeafdc4960df35c01586916bd"],["/2020/12/06/轮询、长轮询、websocket/index.html","501a74daf5f40db342810ec13aae2b9b"],["/2020/12/06/进程,线程,协程对比/index.html","bf1b16ce08bfeeebffc2621efb08d0e9"],["/2020/12/06/闭包和装饰器/index.html","95f23ab66d31bb8c418b370fcb5460ac"],["/2020/12/06/面试总结/index.html","5b1c89ca8c5cdc36a259d30be0fee65a"],["/2020/12/13/鸭子类型/index.html","415485a15d3c4badcb0b8d041314aae0"],["/2021/01/03/工厂模式/index.html","823518af4a254240d6faeba59aaf9bc8"],["/2021/01/17/RESTful风格介绍/index.html","53343a60622c6f7082277455151cffab"],["/2021/01/23/关于跨域和同源/index.html","4788d9d0967e6578b25f5590efc1153f"],["/2021/01/30/django的信号量/index.html","b0b5a37ca3d5eee74058631fdc0e4080"],["/about/index.html","6ca5de4a66b7b862b13a119f545ae69c"],["/archives/2020/12/index.html","00daf97b15e6edac2f9389f3a9dc2faf"],["/archives/2020/12/page/2/index.html","8161070158be6e68c07a24476a7daad3"],["/archives/2020/12/page/3/index.html","91209c859ad2f3175eca139e9dbf2ea0"],["/archives/2020/12/page/4/index.html","923db93a9d5e70c29595ddd60c54ef77"],["/archives/2020/12/page/5/index.html","d4f5312f0cc97ae7430d558d5ba7390d"],["/archives/2020/12/page/6/index.html","757c68a5032ed69b8a2a0509a1105ed5"],["/archives/2020/12/page/7/index.html","568559e77e908e5bce257634fdf5696b"],["/archives/2020/12/page/8/index.html","2a746294253447748a557c86964f4a8b"],["/archives/2020/index.html","0592db4a017422a9c07859df41523777"],["/archives/2020/page/2/index.html","4ab2ba189facd354229ebac0e6e7896d"],["/archives/2020/page/3/index.html","d3c32cbc00825dfc81fb39b89262c831"],["/archives/2020/page/4/index.html","644b85d26776bc58dc74d1bf96fe8753"],["/archives/2020/page/5/index.html","8bb5aae53ada5d07947236bc1cec443b"],["/archives/2020/page/6/index.html","6d8b9255bcd7625d0721106eb1f413d0"],["/archives/2020/page/7/index.html","e7f14a59654177eeed3b00e2f6e51d3b"],["/archives/2020/page/8/index.html","ae59e12614b39187fa32064200e5415f"],["/archives/2021/01/index.html","67cb5fe9ac425b77da93cb3c7a574b63"],["/archives/2021/index.html","3150eebc4031f6ce334fbc2a652b97f1"],["/archives/index.html","0dddd0dabfb607c8c51bf157bd42d16e"],["/archives/page/2/index.html","7dbda806a7fa6f8681bc458776bd9a6f"],["/archives/page/3/index.html","5b588ceac6311ca4bc421eb114217971"],["/archives/page/4/index.html","f482563cea3862bcc73b258594a3a595"],["/archives/page/5/index.html","87af6619bc03f4496c8e1fd95055fc76"],["/archives/page/6/index.html","219180bc38060cd218bec2c58cb3f6d8"],["/archives/page/7/index.html","1d3e79cf5ee32934595fe4b8d4967164"],["/archives/page/8/index.html","fa68bb491f129d5fbf53a819d6b87c4d"],["/categories/C语言编程知识/index.html","55815bd1ca9d4a78ae0605aa367ebcb2"],["/categories/Django框架/index.html","b5d189f2f678a8c485c6f7d24073ed8d"],["/categories/Hadoop/index.html","cc71e7268e8dbff3c805b8a88dc0743b"],["/categories/Http知识/index.html","0688c96afdd75f99087e0c5abf6e0735"],["/categories/JavaScript/index.html","9f42a1eec45864abbe8ccc9b8c5b06ac"],["/categories/Java学习/index.html","bd1509eb3be6a4676121c5ee6a5463c2"],["/categories/Linux/index.html","1390bb37d8bb82583430579a5964715e"],["/categories/Linux/常用命令/index.html","0dcb3373a16ea11eb9bb952a0ba3343d"],["/categories/Linux/核心知识/index.html","48f065cb1e301cd7d59737944b2087b1"],["/categories/SQL知识/index.html","020ffda89e8efaadb5407a2a09cef371"],["/categories/docker/index.html","2b4b6d6346df804b0210a21d336142b5"],["/categories/git/index.html","cf8a6aafd65c85813c7037a3a5c7451f"],["/categories/index.html","5db5d351e36ddfdafba1aa87765fc40f"],["/categories/python后端架构/index.html","89d956b562b113f0089aee86ae4b1c0e"],["/categories/python数据挖掘/index.html","3c604b75d611cc4148534c9a591661dd"],["/categories/python爬虫/index.html","d85d9226964fd42da5eba5cd477d0585"],["/categories/python的web框架/index.html","fbbca9bfd6a3eff63f6f16501c526447"],["/categories/python编程/index.html","73224f15c9095481126807eca0dfa80e"],["/categories/python编程/page/2/index.html","551c5720a255b0c61935f3b87b696d18"],["/categories/python进阶/index.html","6e98b7f30f171c4e456dd9a2d4cedeb8"],["/categories/selenium知识/index.html","d4bfffee6914ced874f86745819e989f"],["/categories/个人随感/index.html","3534f1db1fff6dfba708c4ca44b071a8"],["/categories/前端学习/index.html","2500f7da2e63ce0b58397303b174a475"],["/categories/后端接口风格/index.html","9723f0feaeb5580211dc469e6f2e5146"],["/categories/数据可视化/index.html","ededd6304258f9d77c4353ba5cbf2b51"],["/categories/正则表达式/index.html","f1ed00b90d915cbf126481cc389068a4"],["/categories/消息队列/index.html","d351f2c7289949f72ffed903a37a75a9"],["/categories/算法/index.html","569c64a141954b3e58b445472075a2fa"],["/categories/算法/五大经典排序/index.html","f334d84db84ef1c5b20d42b7ef58f7fe"],["/categories/统计学和概率论/index.html","db95a9d64916c3bbd6462236548e5e94"],["/categories/网站知识/index.html","f845280220028a96da980b507e1cc7a9"],["/categories/计算机组成原理/index.html","72556af5afced6b77824d6d0da1ac832"],["/categories/计算机网络/OSI七层协议/index.html","d5767a21002820e3e214e943e569bb7b"],["/categories/计算机网络/index.html","9d485f775241ea017cd4406c8053dd1c"],["/categories/软件工程/index.html","9be8c5c99f6478bb206620fd6ca98e57"],["/categories/面试经历/index.html","0f2f3c94b4b03635eb02d3e2024e5fdc"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","6faf26408f210e8251deb8f6fa196064"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","a4cdc43756e7b06aba5b449463f95ed4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","80e0584fb51d88f193dd5a44f7773b4c"],["/page/3/index.html","2a462f1af6f2ae6c7feb2999db54f0f2"],["/page/4/index.html","52060c0adce8a35cb9d87aaa1eaf54bb"],["/page/5/index.html","5a52b7c8a8045a4312d6ba3c7335fb80"],["/page/6/index.html","b87a51ed620cb03de86a5141c38721d9"],["/page/7/index.html","579a1d03e865781f5ef1fe6e3c268518"],["/page/8/index.html","750f4f11c20613daec4a3388541ceaad"],["/sw-register.js","42c3d1d9adfd35f5dc7ccbe504468850"],["/tags/Cookie和Session/index.html","c62500c84b22727eee5e755d65e0b959"],["/tags/Django/index.html","a4edaad383e50ab94065ff29a3494822"],["/tags/Django部署/index.html","223ad51d46bbc5aafcc1af57e32d55d1"],["/tags/Django重定向原文/index.html","7f500cb0d1f684c710212785bcda5280"],["/tags/GIL锁/index.html","702204746409e1ab4d34d8d1a5f1d968"],["/tags/Hadoop介绍/index.html","83e8f778f4268a9cf4ef8db87743c92b"],["/tags/Java基本知识点/index.html","e454bfd17a63d6f9b13a2124593dd7e9"],["/tags/LinuxLiunx命令/index.html","c290badc588b70f14d1c5a369e153633"],["/tags/Linux知识/index.html","e02ba347f56e1cc804faef02350cec96"],["/tags/ORM/index.html","737adf490c7667317e4be013751a7dfd"],["/tags/QuerySet集合/index.html","a3a8400c6ac2d496e44f8554521e965f"],["/tags/SQL函数/index.html","91e2e6337ab507edc5ec2d4273b2f69c"],["/tags/SQL命令/index.html","3e5186cea84153f73b5f09188715fcb8"],["/tags/SQL概念/index.html","98e5ab2a5de1a0863b1cda9e22a4f7f4"],["/tags/SQL调优/index.html","88bf7ce3e3a78f6dc21ecdb06f29247b"],["/tags/Void-知识点/index.html","329d7b565d042adb8d1feeaaffc07026"],["/tags/Vue框架/index.html","ab2bbce3445eafa8a7d991d9c823dd64"],["/tags/Web安全/index.html","2eb4dedd158825a3d3524ec3b0f45d20"],["/tags/docker知识/index.html","557a5690a7d916f6e563fcb7c9805cc8"],["/tags/flask/index.html","3412f04317c1afd76ecbca7f7fc5dd31"],["/tags/git命令/index.html","1e12eba7cf1b62133526ee935701ffbf"],["/tags/git配置/index.html","5ff64340d1e67c35b9ac1baac79a12c4"],["/tags/index.html","b62591076e04d79d5032ce214fd1b523"],["/tags/js知识/index.html","0758695099a80875987b81f81fe36ef8"],["/tags/pandas函数/index.html","bacead35690f087b909b2333a67f2db8"],["/tags/python编译器/index.html","a036f0171da0aaf04c062a565dccf43c"],["/tags/rabbitMQ/index.html","d4d3ff52bc374f4fbbd7415c673d10b5"],["/tags/scrapy框架/index.html","918cca190311b9023a3ba4cad37234fc"],["/tags/selenium/index.html","0be2809a9b51956647bf76eb859c808d"],["/tags/websocket知识/index.html","5a1f53f7e8a7285152d7615c30f36bd4"],["/tags/上下文管理器/index.html","8da14861702359437ce6ae699d155876"],["/tags/信号量/index.html","92046e1d33ce43c0b8f9b782f8c37dca"],["/tags/函数补充/index.html","c70a4b0ffa8d1930ce58982915a674f0"],["/tags/协程知识/index.html","06cdfe19da0ede4c217fc55b46ee4796"],["/tags/基本知识点/index.html","cb351f1f209d0b42fb4db383de6cf74c"],["/tags/对象引用传递/index.html","a33eca9362c784b765a651be783f31ba"],["/tags/底层原理/index.html","10fefc142a48510d1f2ac4ef11104900"],["/tags/扩展知识/index.html","002639d34efc42c46265a8134de5b80f"],["/tags/排序算法/index.html","f23d8a0ef50f48cd901f3289b114ad4b"],["/tags/接口设计/index.html","25682e13f9ce3270a672ae0b0bb49fd2"],["/tags/数学知识/index.html","e9bb0ddf6eb0c417fb31ad896ca99a21"],["/tags/数据可视化概念/index.html","95ddb8c35186342c6a6d32f53a5af79f"],["/tags/架构演进/index.html","3f120b118eb5ddb2338b6dfe9e58a67e"],["/tags/核心模块/index.html","552d111f110d5d3330af975b4f3d4412"],["/tags/正则/index.html","5e4ba71e8dc1cf768302ae6fe8014263"],["/tags/爬虫实践/index.html","727a9d25691f00e3e9826cbff77ae6d6"],["/tags/类和模块/index.html","64b70a53b4a1096b6ab94a76494ceabb"],["/tags/类的知识/index.html","5b6f923fe1bfff83676baa8e6d341171"],["/tags/线程概念/index.html","8d1ee05dcc2e402f3c03063db8b0b74d"],["/tags/网站的基本概念/index.html","78c2fa716976d949713860e94f07074b"],["/tags/网络编程/index.html","2f5f23b45366185fcfa4286dbb221131"],["/tags/装饰器/index.html","04dbf3342552cd07b89286cafa7589d3"],["/tags/计算机知识/index.html","70ff784ea4f8a407eb204adef86a786d"],["/tags/计算机网络知识/index.html","0a6fc077b091bbeba8c01515b1881c9d"],["/tags/设计模式/index.html","e41aa6222dca018a31a817c390c6e9cc"],["/tags/语音识别/index.html","765215c4ae5152bddf0d8e5d8d84995a"],["/tags/进程-线程-协程总结/index.html","747be9a3e528c7f8779afef24d7bca8c"],["/tags/进程概念/index.html","7d136d7fdf6343c2fc0cbd739cd51329"],["/tags/面向对象编程/index.html","71f1e26c65c9141a7716d3af92ce4c6f"],["/tags/面试总结/index.html","aae91d1609756c88c9103efdc805ca46"]];
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

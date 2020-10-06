/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","fe271190be4ac64200fe07c5f8e51283"],["/2020/08/16/C 语言中 void 详解及应用/index.html","ccef4422ad8e568f57fb952b22de83d1"],["/2020/08/16/C语言打包技艺/index.html","2859823833c2f334abe3394b3a629876"],["/2020/08/16/C语言笔记1/index.html","0a1635ab9b3671b01c58207af2fd3ab3"],["/2020/08/16/C语言笔记2/index.html","1def3cd33168fd1f29f6c3ae9bd0d184"],["/2020/08/16/Django 重定向终极指南/index.html","1f11d1aab6d6665e50b8cd630c3c1ce4"],["/2020/08/16/Django参数和模板/index.html","48036f4317038b852b74657b1f91166a"],["/2020/08/16/Django后端演化/index.html","3e1a0a721ca437a496212026f0ae4468"],["/2020/08/16/Django的Cookie和Session/index.html","51f7e5183679042cd03a7fca1c662a5c"],["/2020/08/16/Django的Field详解/index.html","ece13c859ee0114aaafc5d68272953d9"],["/2020/08/16/Django的ORM多表操作/index.html","be3392ce448a3902473a03e1ae22fe73"],["/2020/08/16/GIL锁/index.html","b6f8a10f6a39163650bbde3fc61dfa4e"],["/2020/08/16/IP代理池/index.html","c9af541dd63a499f9427a7a7b0eaf39f"],["/2020/08/16/JavaScript的简介和基本知识/index.html","461bf5be3b08f6f8bceb69057d080398"],["/2020/08/16/Java面向对象/index.html","6106a61fe3117602174254de3a021ebf"],["/2020/08/16/Linux常用命令/index.html","36e5e36213b4e79c87bf63efa8d968ba"],["/2020/08/16/Linux操作系统核心知识/index.html","fdf430147c1004d815bce7e74a7976fa"],["/2020/08/16/Linux操作系统（二）/index.html","7d7be681a48b17fb07a52a06a60bbba0"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","7ee446873554fd64b9bdd16b9fae2b8d"],["/2020/08/16/Mysql数据库函数/index.html","e73a4eb11d03838db2e67ab4d526669e"],["/2020/08/16/Python 中的上下文管理器/index.html","8c1b96eb720108c60532480ade454ffb"],["/2020/08/16/Python的模块和类/index.html","73897b504a5eaf631a11212974a569bf"],["/2020/08/16/Python类补充/index.html","6fc4960e7e57429f544c54812a6ddaf5"],["/2020/08/16/Python面向对象/index.html","d446ec617b0dc8514656be384df132ed"],["/2020/08/16/README/index.html","503544db2985b46151907332c6d390a0"],["/2020/08/16/SQL性能调优/index.html","98e7b41d262ba41a3bd2a343aaa85939"],["/2020/08/16/c语言笔记3/index.html","808b2b45027a262079ade377a12dbca2"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","652b3ace468c4ae44d4cb5aa2fe280ef"],["/2020/08/16/django之url规则/index.html","8a2afc2cf62ac19bea30f9cb85e8df7b"],["/2020/08/16/django配置初启/index.html","e5d2505b179f8c9f571dc85bff5beb03"],["/2020/08/16/docker以及相关概念介绍/index.html","3e13fd4ea95be4efcb0ef5b351aadb43"],["/2020/08/16/docker信息/index.html","46160515fc06efa4e60d6fb8ff090c08"],["/2020/08/16/flask框架/index.html","fdf101be4fa0293bf6ddbef6798c51cc"],["/2020/08/16/git命令/index.html","96e7cfe51df82df5ab6b3c4190df0f1a"],["/2020/08/16/hadoop基本概念介绍/index.html","d9b3759e48fed5db659d4b553985f2e3"],["/2020/08/16/java基本知识/index.html","6ffc977c992f2a7ef4ba02920b002cd1"],["/2020/08/16/java简介/index.html","7c29633596368be69589722ff7dda675"],["/2020/08/16/pandas函数/index.html","386dc497028079892b675732d04bb940"],["/2020/08/16/python函数补充/index.html","2a871d2cc33b9da3af8b8e723b964205"],["/2020/08/16/python数据类型的底层实现/index.html","de7b0bf1fec1d20e67823e6d6b41731a"],["/2020/08/16/python核心模块的介绍/index.html","585d810c6f46926e9517fc038596c546"],["/2020/08/16/python爬虫/index.html","e666efe8ac87d18fbb0aa39ca0222a46"],["/2020/08/16/python类的私有属性和私有方法/index.html","15ee29c479c8a00cbe614e41e66e1562"],["/2020/08/16/python解释器介绍/index.html","c2ae187015f155453ea52c1b97cb5a3d"],["/2020/08/16/python高阶函数的定义/index.html","c7e6976b35a0f34e13cfa579d27e63ed"],["/2020/08/16/vue框架介绍/index.html","69dbfbc5e1493251234166f4f31cbe2d"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","1d02d4667de4c91b4e035e1176f0524d"],["/2020/08/16/京东全网爬虫/index.html","0a66a5d481aadcb5c4ee307b0cb87d23"],["/2020/08/16/协程/index.html","3264e16fdb88256dca14ad16dd6d63bb"],["/2020/08/16/多线程/index.html","4572a4076de4f54e04ed88beb84af84c"],["/2020/08/16/多进程/index.html","cb7d0110f4bf6a15d90a3e962244abd6"],["/2020/08/16/数据可视化笔记/index.html","eee9b5e63cd9b3412a74d8af0282ca7c"],["/2020/08/16/数据科学笔记/index.html","44ab0c22507e02b30f6a226d24fb510c"],["/2020/08/16/斗鱼弹幕抓取/index.html","d086b373859083b70712a14b690d3eab"],["/2020/08/16/查看mysql连接情况/index.html","86882e731ef6c96a684d0836481f3331"],["/2020/08/16/正则表达式/index.html","ec44be82d9b434fdc4ac14996470fe0b"],["/2020/08/16/第一次面试总结/index.html","d1baf679091574bddd92e1716e289f36"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","1631834b4c5af856d11b12acc42f83e9"],["/2020/08/16/索引和事务/index.html","5741b17fdc05bcc14d6bc7fa9591022e"],["/2020/08/16/网站概念/index.html","d51efdec779383758188f6ad4d2f6928"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","73d11c0c6319f52294dd409ce4f0fe01"],["/2020/08/16/计算机网络/index.html","4c4c61c32234d6b6f472d612b118156e"],["/2020/08/16/语音识别/index.html","93d20b1fe7fad1bdbf5f202373d48081"],["/2020/08/16/进程,线程,协程对比/index.html","7f530d6eb01d506b94432bcfad9e0e50"],["/2020/08/16/闭包和装饰器/index.html","826aeeb42455bc1fb1fbc884bcb49640"],["/2020/08/16/面试总结/index.html","9ab9e3b85682bb7ee456bc46dd08468a"],["/2020/08/30/docker网络/index.html","1df2cac72836e974d0dee008b0eeab81"],["/2020/10/06/轮询、长轮询、websocket/index.html","2bed1ebae74b547b7de9a1074bc34fb4"],["/about/index.html","ce3e058a69e436ebe7403c5de0f7861f"],["/archives/2020/08/index.html","70320a238a2c7a21dfab32fd9723ac7d"],["/archives/2020/08/page/2/index.html","f6cf594d7307a991312f694663e8f688"],["/archives/2020/08/page/3/index.html","5f3e6c680f151e86a446654c9e42a0db"],["/archives/2020/08/page/4/index.html","acc39473978194eb707bdebe00c60343"],["/archives/2020/08/page/5/index.html","260fc15b84d824ffcae11068df963fb2"],["/archives/2020/08/page/6/index.html","408f8e7e7b79e0acb50e74958a137968"],["/archives/2020/08/page/7/index.html","a0598a9a337f58952df123da585da41f"],["/archives/2020/10/index.html","42093f21d9e03be3a1e500efb42db043"],["/archives/2020/index.html","e1885fb3ed25b028a31b89beef4dc32f"],["/archives/2020/page/2/index.html","e2993316216caeee37ff082598e69c72"],["/archives/2020/page/3/index.html","38bfa3cd323ba2ce087210cf577288c2"],["/archives/2020/page/4/index.html","0e4b2dfb1cbb392848ba1711b71ccc19"],["/archives/2020/page/5/index.html","95c19d4c655a6627365d1ab0ec60a200"],["/archives/2020/page/6/index.html","fce757123f9f62efb6874082241372ce"],["/archives/2020/page/7/index.html","5b3e4081ebafd3ab3dac9bf7ae776aa1"],["/archives/index.html","e5bfcf2774f7e1c22963a817e2198b5c"],["/archives/page/2/index.html","b99cee7137b1c37a34006347fd20e820"],["/archives/page/3/index.html","789b03f1998589cfeda491c2a2d846c9"],["/archives/page/4/index.html","73a35a135e54ded91bdafc588d60ca01"],["/archives/page/5/index.html","1dca0f3bf8207a3e61ad6f926ad42d39"],["/archives/page/6/index.html","86b45571fd6e010b444b55db18c27c8e"],["/archives/page/7/index.html","5404257e2c54c88824262ba5b565af3c"],["/categories/C语言编程知识/index.html","57e2acca2923dc84080141167a6aabac"],["/categories/Hadoop/index.html","b2fc634c580d6298f6a5aa20cf88d65f"],["/categories/Http知识/index.html","fa5b5a38f660b1a08ddf818dce1a7b91"],["/categories/JavaScript/index.html","5121a68afa05c2286778c7f93d3261eb"],["/categories/Java学习/index.html","e5b52bf492ff8f3acd32bee73bcb74c5"],["/categories/Linux/index.html","b0ef00985964e455688bbf5c8842d1d3"],["/categories/Linux/常用命令/index.html","c89afe664e155909be43b25d25886500"],["/categories/Linux/核心知识/index.html","f117149c9c5996a38db18a71976693df"],["/categories/SQL知识/index.html","f210b18dee004d21de127089027baac2"],["/categories/docker/index.html","9c1b119c00c500d255be3811f54e3880"],["/categories/git/index.html","6d29f7e974b60a6bb55ac099b6a20b9c"],["/categories/index.html","86728faa1727fbe959a32d351ea68fe8"],["/categories/python后端架构/index.html","e93a11c711a340790877580ad7cb29d1"],["/categories/python数据挖掘/index.html","05054860cb5b08f21505787843db46b0"],["/categories/python爬虫/index.html","6bb57ca632c31a001ab9a0339fe93bec"],["/categories/python的web框架/index.html","b415486a80882634029641b8178081c4"],["/categories/python编程/index.html","4d50722065a1aa0d1052615946ebeef5"],["/categories/python编程/page/2/index.html","a39dac812b8a10fd6abf116e5bbf8513"],["/categories/python进阶/index.html","b59e202175d37c6f076270a1ff5686b1"],["/categories/selenium知识/index.html","9c6d5d6dd2cc547f3666c481c2aae674"],["/categories/个人随感/index.html","1f8861265ef9dab810288a93eba07588"],["/categories/前端学习/index.html","83315e03986936d687a68cc1ff66bb7c"],["/categories/数据可视化/index.html","5f406e5c50c1d2ae78dee41d6113c117"],["/categories/正则表达式/index.html","f896dc1f27ca35b9496b4c0ea16918a4"],["/categories/算法/index.html","0ac01b0abba23cfb0951a4d1e8471d3c"],["/categories/算法/五大经典排序/index.html","c0f0aa3aeff6de0862d4de9982fcec71"],["/categories/统计学和概率论/index.html","b7db6f17e3921226dc3aaeb1caebcdb7"],["/categories/网站知识/index.html","27348325dcf06263f35902a071659a04"],["/categories/计算机组成原理/index.html","6f5d68b34af1cdfafc1bfa74e3541a94"],["/categories/计算机网络/OSI七层协议/index.html","53a80fa00f5302160141fcdccc86079d"],["/categories/计算机网络/index.html","de5b179460b66101de11489cf382e25b"],["/categories/面试经历/index.html","5c824ee24869048e959e4270f2753be3"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","acc42e8ccff09e143e8e8f20f50ab1ec"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","45cec4c9921287cf5e2c02f39ae0ff58"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5cc95e4dddd366c76ee15fec8135347a"],["/page/3/index.html","9c884308f34815a3cf5c1a9c286ea6cb"],["/page/4/index.html","978a241767c4abedf965454d46ded050"],["/page/5/index.html","d8cc8ba5d6a3fd18f346b399ff2072a9"],["/page/6/index.html","2df98936c4f34a1e3bcd1a6d67816f5f"],["/page/7/index.html","1b08002f4a90812015fe006bfa1a67f1"],["/sw-register.js","7add40d03877a1e2e70c2bc21fd34269"],["/tags/Cookie和Session/index.html","83acb241c1cee0e8cd41fb304b768e49"],["/tags/Django/index.html","5a45a5bd40557b92ab588310d075af65"],["/tags/Django部署/index.html","ba2221b8cc7c4d2f62b34c5e935b5fb8"],["/tags/Django重定向原文/index.html","f64ddfd627c6e333c1002cdac58212f0"],["/tags/GIL锁/index.html","f83c5508127f1b4022e2ff31a66461cb"],["/tags/Hadoop介绍/index.html","69254af6148b31b920e5d19f39dfc525"],["/tags/Java基本知识点/index.html","12eb18be78b33f81743589826d088169"],["/tags/LinuxLiunx命令/index.html","7d622f66602a1437a41c57cb5ce5e2a5"],["/tags/Linux知识/index.html","dbf4ae0dbf0103b894a953e1688c5d45"],["/tags/ORM/index.html","a994017e6cc57e4c2216522ba2ea651b"],["/tags/SQL函数/index.html","a23921704939dbadcaf2b3e1356b303b"],["/tags/SQL命令/index.html","38ebd377514ff0787ad264a06e6663d5"],["/tags/SQL概念/index.html","1a784243e8c6fdb1d0872d23915e36f0"],["/tags/SQL调优/index.html","426babc9008a4c6c5785c1be24e1a801"],["/tags/Void-知识点/index.html","8d12c2cd1ad677db53968d88536996e4"],["/tags/Vue框架/index.html","f8e4461f6af3264934033dfc75aab9c6"],["/tags/docker知识/index.html","c99111c36b847d3328c84506b73eda68"],["/tags/flask/index.html","5d38a49d62c5a32026485a7528f8acb1"],["/tags/git命令/index.html","a4b1c6e20a616f80c3be868ab7160055"],["/tags/git配置/index.html","54ccd6eb1b1e5e9c66fa1bfc5dd1a8d7"],["/tags/index.html","585fdc35cd00409191f5f1ae305c80da"],["/tags/js知识/index.html","e9b636ff34a676a017c55eba66bee284"],["/tags/pandas函数/index.html","d80bef883472ab9a058731dcdc566b00"],["/tags/python编译器/index.html","539a6d0da9a99aced586e39d61296226"],["/tags/scrapy框架/index.html","34a344e293cde5a13448efc1723cdb4c"],["/tags/selenium/index.html","93d9de0ed3530f3c1108c4e2f5f61248"],["/tags/websocket知识/index.html","bbca5831fffb43db9f6bef584b012672"],["/tags/上下文管理器/index.html","ba7801203d06b8928817799c30f5c48f"],["/tags/函数补充/index.html","49b6eefae606809d158e9f6147695306"],["/tags/协程知识/index.html","50f073f2c4273604f23cd7f31e1a9d94"],["/tags/基本知识点/index.html","cbcd513ddd2aead66df2c2db929e567b"],["/tags/底层原理/index.html","37a8a0a6b88819a19d7376aeefa10328"],["/tags/扩展知识/index.html","b6315e93ed4d0777f368311857cef251"],["/tags/排序算法/index.html","43224977f10421d5824b09a697e4624a"],["/tags/数学知识/index.html","289c86b72359302d8ee85ad0118d742f"],["/tags/数据可视化概念/index.html","c8bf4aefdd606f468ea9d9e2e9f07080"],["/tags/架构演进/index.html","eb1a47ba0fd554da4a33b185701cf863"],["/tags/核心模块/index.html","5916f71384b74b530ecfea2b2ebf07b1"],["/tags/正则/index.html","690507cc1ec633b5f8f171a2967b1e16"],["/tags/爬虫实践/index.html","f98e2cdd474f9429fb2c042afe2ccc28"],["/tags/类和模块/index.html","21becce7610bb17afe2658c13147737b"],["/tags/类的知识/index.html","cb631f58e237e37b88312209c6c90a77"],["/tags/线程概念/index.html","7bb69804ce2bcc18f0412b02030e5fb7"],["/tags/网站的基本概念/index.html","7c383c329e4f3aa63de830be46642317"],["/tags/网络编程/index.html","8911e127849c2697818a6cdcea0ab9da"],["/tags/装饰器/index.html","07ef623b14b2c5cd8470e865e6c26470"],["/tags/计算机知识/index.html","2396e84a28021f3e2712eff3d06a6595"],["/tags/计算机网络知识/index.html","e0f9633c10c83202dc57942ea3250128"],["/tags/语音识别/index.html","b6ac3536fbe604f6c4e5be8373d277a0"],["/tags/进程-线程-协程总结/index.html","3ce98240135047d8790ca4bd0acc8dd7"],["/tags/进程概念/index.html","16cc4fa060f4fbfc5b34f8f012761c0f"],["/tags/面向对象编程/index.html","13530346dc0cdfaa3e1363ccd7fd0a0c"],["/tags/面试总结/index.html","2a4c9c272be3135100d6b3536499f21e"]];
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

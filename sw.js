/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","91e395209b57cbb4d15e23f847bb20c4"],["/2019/06/26/four/index.html","c873cfd7c23455339510baf25ec1d599"],["/2019/06/26/python解释器介绍/index.html","292996a9b84a5fa37bc2fe57bafe0e0c"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","4c93960c76873ecb721df19ff11a4f12"],["/2019/07/06/网站概念/index.html","176c8a74860c64160d32956ea088449d"],["/2019/07/11/数据可视化笔记/index.html","2222b79adf974526348b97cb944b8298"],["/2019/07/12/语音识别/index.html","37ae03660f59ccf0b7a191f3c640861a"],["/2019/07/14/hadoop基本概念介绍/index.html","dfdbc09951e21ea6ebe7ca73c8ee2af1"],["/2019/07/14/数据科学笔记/index.html","8c8c25a853110795c3b51081db4a2be9"],["/2019/07/22/python爬虫/index.html","49688c1e833fe147cd5453d0dca713d7"],["/2019/08/25/pandas函数/index.html","2e5467204b881ec1b30c21b78af25f9c"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","184e0635227a9bb64eb77c9712a36cde"],["/2019/09/30/C 语言中 void 详解及应用/index.html","7570986d125b0c8f53e450d4dc11ab7d"],["/2019/09/30/第一次面试总结/index.html","edc27387760f973966f8d032ae85573d"],["/2019/10/07/django之url规则/index.html","ce333a8a40744bffc242317050f42a8f"],["/2019/10/07/django配置初启/index.html","3eb9f22fdc03394d1d545232d0f56c1e"],["/2019/10/13/C语言笔记1/index.html","e3aa463ce556969c4e148ac43366dc50"],["/2019/10/13/C语言笔记2/index.html","4e6b7afe9f0edeaec3f75af424fe3be6"],["/2019/10/19/C语言打包技艺/index.html","ddc873792de2cc4ec297d718d8d33b1b"],["/2019/10/22/c语言笔记3/index.html","b43cdb7b7f63d640e345093ea597bfb4"],["/2019/10/27/IP代理池/index.html","003a03ff9d5b183ada25b33fa0c1751f"],["/2019/10/28/git命令/index.html","4b908869413fb1bf8bbb261a18bbc204"],["/2019/10/31/斗鱼弹幕抓取/index.html","394a8ad1a150887d689b5ccdeb91e4c5"],["/2019/11/13/多线程/index.html","38617a903754d683341bfd66ceb9f1f5"],["/2019/11/14/多进程/index.html","d477a57a475c5d59b9a7ba9e9acde5cf"],["/2019/11/15/python类的私有属性和私有方法/index.html","32722c9c3d2f59c37d70192cac50ff59"],["/2019/11/16/协程/index.html","99842318dac158f346a7967dd4b71e17"],["/2019/11/16/进程,线程,协程对比/index.html","d864ce63c4eec9e99d982cb02c89ae07"],["/2019/11/17/GIL锁/index.html","0d25e39fdbaf095c1dce0bfb07226719"],["/2019/11/17/闭包和装饰器/index.html","e20784ddffd00b715a239382b89b8d53"],["/2019/11/19/Python的模块和类/index.html","1140ddfb9e03c04bc5a306c21edd9fe5"],["/2019/11/22/京东全网爬虫/index.html","0ed223a79db91777529f34d02484a309"],["/2019/11/23/JavaScript的简介和基本知识/index.html","e97a03cfa4a5681121ca038548788004"],["/2019/12/04/README/index.html","87a6cf4d8fd1037f25575894b4d56823"],["/2019/12/04/java简介/index.html","d3da29168a70b4dede26d51f46ca191f"],["/2019/12/11/java基本知识/index.html","ca082b7d6d5fc2d26173fdbc3da9c0e0"],["/2019/12/17/Java面向对象/index.html","1c4642c681a41ce0ae5485043b252642"],["/2019/12/19/面试总结/index.html","88cacad95d4fa59c6c2d971c4f4686d9"],["/2019/12/20/SQL性能调优/index.html","055688044cc6dc627de0fc3ce4081cad"],["/2019/12/26/vue框架介绍/index.html","cb5b37e2e42fb75ff8d4dd7b3c55eca2"],["/2020/01/02/12306自动抢票/index.html","ff9174065fddaffae3b6b414f97afca0"],["/2020/02/24/flask框架/index.html","e04d3a03c996c15d61ba6387183bd78d"],["/2020/02/28/docker以及相关概念介绍/index.html","a82415fb739fd237badd631c0d853c2f"],["/2020/04/05/python数据类型的底层实现/index.html","cc3372979335112c3756ffd49abf278f"],["/2020/04/27/查看mysql连接情况/index.html","777b46c9a3bc0065ccea062fecca6c05"],["/2020/05/02/Linux操作系统核心知识/index.html","105b5ab34ad1381cc801d355fd5c8413"],["/2020/05/02/计算机网络/index.html","d607e10bf98a7303718728ab2aeadd8f"],["/2020/05/06/Linux操作系统（二）/index.html","36335ada24f183a5c4df1bc6c26720a4"],["/2020/05/14/函数补充/index.html","e404df8ba7e2c46992b191b3310794ba"],["/2020/05/21/核心模块的介绍/index.html","23d3895415431be75ad93e68d1d36324"],["/2020/05/21/高阶函数的定义/index.html","898fce66790971cca0e31def2888102e"],["/2020/05/23/Django后端演化/index.html","e6ffd981483825ca7934bd6453ebf4e9"],["/about/index.html","fa31a0cbd61a9d886e664630a3a96d30"],["/archives/2019/06/index.html","3705eced93a7c1c370a3855d2078dfc0"],["/archives/2019/07/index.html","f0d4b3d9a9dddd38d52f63856a65c0a5"],["/archives/2019/08/index.html","d69972008a1ff6ba2b56da636ecd2857"],["/archives/2019/09/index.html","86ba6b138f80922b66ff2f076d9a3a25"],["/archives/2019/10/index.html","a227884680149e7bbb02e91afbf13ca5"],["/archives/2019/11/index.html","f7de9f99ccb76a218a6b2ed2b2590213"],["/archives/2019/12/index.html","ace97652fe3fe1fb3188556ad809026a"],["/archives/2019/index.html","19f391c62ba61943a330a0a4cc51588e"],["/archives/2019/page/2/index.html","253308218242e43a3ad14908dad045ea"],["/archives/2019/page/3/index.html","bfb751282bb712d3e6f2460a939dcada"],["/archives/2019/page/4/index.html","97743566530a4d2da91bb3a975b574f1"],["/archives/2020/01/index.html","e34a5fa4cc31a930833e531b92a8460c"],["/archives/2020/02/index.html","c4c6a590da266453b32a4541b63539b7"],["/archives/2020/04/index.html","1a8b4b4964306ce56b7c16c33ac55ba6"],["/archives/2020/05/index.html","904d7f91cbf2ebe3a92ddd26bb57c91f"],["/archives/2020/index.html","a04d3d8a4351aeab19dc09bdc168e5b3"],["/archives/2020/page/2/index.html","195ded149cd9682442d4408d4180440f"],["/archives/index.html","ae4c632156a48a50b3d582e0e7f9ed9c"],["/archives/page/2/index.html","6bb96d988d7336ad65973319e8417485"],["/archives/page/3/index.html","7fb4dc31491bd9d20f8110330fc23c9d"],["/archives/page/4/index.html","b8f5d789fdb5de0a31d81306aaba11e0"],["/archives/page/5/index.html","19597ac6dfa91ef01b8b3d249071cccc"],["/archives/page/6/index.html","cdaa1c00ed1402e47453f1fd75a75623"],["/categories/C语言编程知识/index.html","2b383ec9b3a95b28be7a59d376c2d36f"],["/categories/Hadoop/index.html","252c932eaee9848c432fb2752f136eb0"],["/categories/JavaScript/index.html","7b6c86660d92800d827675534cc5dd48"],["/categories/Java学习/index.html","972f4de073d8053f8bb6d324e636e891"],["/categories/Linux/index.html","e3d82c2c4daeebd1d0357ca1a8684381"],["/categories/Linux/常用命令/index.html","2d8b25203f1806b65d8625b73d12302f"],["/categories/Linux/核心知识/index.html","58d88c4b6b2a7514f382dc094131a62f"],["/categories/SQL知识/index.html","d6a9e991b17c454c1c9cab0d7a5bd8f4"],["/categories/docker/index.html","8ec21b0ec6d823954540335214f9b262"],["/categories/git/index.html","1b40d218b39480aec5abe65782b71a98"],["/categories/index.html","cb91ca415afed489432c17997e242416"],["/categories/python后端架构/index.html","9a4b51e5cc8f600a4a4640f8086cfcd0"],["/categories/python数据挖掘/index.html","c79cefdf80c02c097851de11b36b3d33"],["/categories/python爬虫/index.html","042fa481c93c29b2edbde2ca25d871f9"],["/categories/python的web框架/index.html","72d2c7737ade445a93bc3529055349d1"],["/categories/python编程/index.html","d1f7f093e0f674ab45ae269a9c628722"],["/categories/python编程/page/2/index.html","ec5e75c3d7cfc143990b1f2628efdb29"],["/categories/python进阶/index.html","8a34f9e2753d326d5989f2bb20f82130"],["/categories/selenium知识/index.html","141ec142b2903022690b53d0c04c412f"],["/categories/个人随感/index.html","8913290c7e6a315a7da06ba5fce95c02"],["/categories/前端学习/index.html","1f7fde298f9e165dcbff64cb1c7982a3"],["/categories/数据可视化/index.html","38e372cf1c76c0b64855055a71cf7d04"],["/categories/正则表达式/index.html","fa7d9ad66c06cfab5591163e40900f94"],["/categories/算法/index.html","2fde06d9464ecc57894dfea6b85115ca"],["/categories/算法/五大经典排序/index.html","520a98082584d8c3dd5778d8fd9d6e5f"],["/categories/统计学和概率论/index.html","97f3324572185c9b9cc9e4285d684a0d"],["/categories/网站知识/index.html","e6598879fdfb1604a53848cfec4f75d8"],["/categories/计算机组成原理/index.html","15d7c84f00c1c7c8a64719fbf050215f"],["/categories/计算机网络/OSI七层协议/index.html","d88e7108e03d0208a6e5f56e2d7aa73c"],["/categories/计算机网络/index.html","4de3884f5fd0a85671a34638531aad16"],["/categories/面试经历/index.html","3b2b006199ff152e7ec128a0d7bde34b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","c3f83ae9e3fc5462cdca168f4d7502f3"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","dd303072c9a2f04459d9465724e9e3d1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6824a443d68a91f95255ec0d18d03d61"],["/page/3/index.html","3a1e93f6c181b93d99b8e2623772ba7a"],["/page/4/index.html","4dcf8390a359ff07d9739811906e99a2"],["/page/5/index.html","6b1c55c1ec40c66b40fbb1f4fa3bfe93"],["/page/6/index.html","42d2304d49f83128d531547ffc491398"],["/sw-register.js","444ef28793dc9c4086da62391117eac6"],["/tags/Django/index.html","23c535417b215f058820ffd63baf3bc1"],["/tags/GIL锁/index.html","2d139505fd098e5ef8a631e53cdb1fff"],["/tags/Hadoop介绍/index.html","1900ff9a4844ddb989e1ad039c9dcc7d"],["/tags/Java基本知识点/index.html","3e315dda87a072ed6bca3eb6510d741e"],["/tags/LinuxLiunx命令/index.html","df0c32084efa8086e3c23b3cb0d4a3cd"],["/tags/Linux知识/index.html","4a16fe0b3a5a398fad4c3a03ab9e076e"],["/tags/SQL命令/index.html","371d33df02ba9a1e06e7f6cc3c76d252"],["/tags/SQL调优/index.html","fe0136fc83ff9c53d16b17ffdc10b14e"],["/tags/Void-知识点/index.html","461e21f51429edb23e5c56e2d3ec79b0"],["/tags/Vue框架/index.html","f5b210e3bac545e9c80799e938cf2ca3"],["/tags/docker知识/index.html","caa44813939916300a181030dda03003"],["/tags/flask/index.html","0e9fc5902dbd3d2b508bc24c431e3e67"],["/tags/git命令/index.html","09e49ef7a7ca5fa92f13872f7a0c867e"],["/tags/index.html","5d33aee506f5b4e99a40e68620b8a5b8"],["/tags/js知识/index.html","6bd698575ac8f814353ca5c65a4b1a53"],["/tags/pandas函数/index.html","5cd350f87ad10c397922ff0b96da9200"],["/tags/python编译器/index.html","5403de711e644392fd59f1d775da4249"],["/tags/scrapy框架/index.html","eab6b5721d608d9a96311caec8ae9258"],["/tags/selenium/index.html","ba198ebfd6d66cbb0b59da5d800f0805"],["/tags/函数补充/index.html","04d4a47ef1e5b921679e6dde44c4620e"],["/tags/协程知识/index.html","e030745cfb8e3c2459984f6b9aebe389"],["/tags/基本知识点/index.html","5e103b1745be77b318a1505cda38dfda"],["/tags/底层原理/index.html","9c6c7aa95cecf69d3f2b518646b5f979"],["/tags/扩展知识/index.html","e6f3a8479231dd78d5b33d2d0df24823"],["/tags/排序算法/index.html","c70ef9876ff8e92246d1d254c3a4876b"],["/tags/数学知识/index.html","5b158cc808f4d43260c335bd370f3da3"],["/tags/数据可视化概念/index.html","349da422423495ae2167a54c2fffc77e"],["/tags/架构演进/index.html","1d95f463d401d91045bad2065a2ef645"],["/tags/核心模块/index.html","9cc9c0e63cb9ff0dc9fffad8b75575d1"],["/tags/正则/index.html","15650b8fcff876dd17bd4b56137276b0"],["/tags/爬虫实践/index.html","881ecb426086cbdf096df8d8061b9c91"],["/tags/类和模块/index.html","0ac94af7673cfb496ea4a6b56936bba7"],["/tags/线程概念/index.html","b83436681d876442a22b7ad4d76a38ae"],["/tags/网站的基本概念/index.html","326bada222e4184babb92a9f7ce48ebb"],["/tags/网络编程/index.html","dc54fb49d1194ada2644c23bb5496682"],["/tags/装饰器/index.html","5f1e037e4de4b6653fa69842d58d332c"],["/tags/计算机知识/index.html","b276a586cacb0d53034e0af2afe0fb35"],["/tags/计算机网络知识/index.html","2bee08c483874845611642b30be93ff8"],["/tags/语音识别/index.html","28bee61a9487759d58a807451be1c29d"],["/tags/进程-线程-协程总结/index.html","8cc39d3b4b16a1c25dbf21ba93d589f1"],["/tags/进程概念/index.html","285cb5bb518de635b196fbd7bf2c1dc6"],["/tags/面向对象编程/index.html","566b888b3f8cdaa50746e85d277f3ccd"],["/tags/面试总结/index.html","5df159c327219e3845db412116f58eac"]];
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

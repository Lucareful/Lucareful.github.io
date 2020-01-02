/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","386ef2dac093ad2727394ab8e778da57"],["/2019/06/26/four/index.html","535707ab8a6f26e8baf652d0aa779a4b"],["/2019/06/26/three/index.html","18552868af8b38512b83a6ab77d698c1"],["/2019/06/29/six/index.html","502f7d041d06627216f7a9fc1e011b5b"],["/2019/07/06/serven/index.html","26ac9cefa1e2af4c93b5044d9000c49c"],["/2019/07/11/数据可视化笔记/index.html","2f0077dcb167117e998bd5e9ea1e3595"],["/2019/07/12/语音识别/index.html","7d433c521d8f082824ced7218775fa2a"],["/2019/07/14/hadoop基本概念介绍/index.html","c96584fe807f742b89b59f5f405aab32"],["/2019/07/14/数据科学笔记/index.html","929222a8379f05f1336369d3f6aabfd4"],["/2019/07/22/python爬虫/index.html","fadfacfb1a0b2d75e1c640d01d171115"],["/2019/08/25/pandas函数/index.html","a7897061a0035640d1a985e99ce7094e"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","03fc9ec8360b7d1a3584f93ef8ea505b"],["/2019/09/30/C 语言中 void 详解及应用/index.html","dd4972d6f83c794d059bbe893496a339"],["/2019/09/30/第一次面试总结/index.html","b6841f4901b50fdef0a7e25a028af55b"],["/2019/10/07/django之url规则/index.html","5c7159b0acb0f694dbd1d0e5c2fc50a9"],["/2019/10/07/django配置初启/index.html","7af35336bbdd318ddbf61bb5894bf935"],["/2019/10/13/C语言笔记1/index.html","0b37a6798498b57141c3dacc52974514"],["/2019/10/13/C语言笔记2/index.html","efd389a8760f86a88435c2ce023aae3d"],["/2019/10/19/C语言打包技艺/index.html","28488f5500fc015a334cd2a8ff1f9d33"],["/2019/10/22/c语言笔记3/index.html","853722aa066b90cd957f5500d95f083a"],["/2019/10/27/IP代理池/index.html","3137c167820a5393ae4cf01f67da9c15"],["/2019/10/28/git命令/index.html","cd21e99f4dca1520c939ef15754d9dec"],["/2019/10/31/斗鱼弹幕抓取/index.html","faad857e6fe58705d4300f85c506c2b6"],["/2019/11/13/多线程/index.html","f4b27035fea2c9c6e737f8dbf4a76b23"],["/2019/11/14/多进程/index.html","0466336ad8a72709b471f64d0e48939c"],["/2019/11/15/python类的私有属性和私有方法/index.html","e388130f3d3a333f70a94f25d7fa96f2"],["/2019/11/16/协程/index.html","5940ab33bd1705f12f97c1cedb1b7483"],["/2019/11/16/进程,线程,协程对比/index.html","a9342d5245b203a12f42005b2b3a378f"],["/2019/11/17/GIL锁/index.html","c918d27fb47481c5ec5a47d04e87b540"],["/2019/11/17/闭包和装饰器/index.html","a8bf56cbf291763866d79bd6058bbc85"],["/2019/11/19/Python进阶知识点/index.html","b60bf867e18686c93a90014262378f33"],["/2019/11/22/京东全网爬虫/index.html","998576788920f08b8e8d23568819e90a"],["/2019/11/23/JavaScript的简介和基本知识/index.html","0b2b254fa201b2abc99f60f30144b408"],["/2019/12/04/README/index.html","c804fb8a8eb0717903f1127401dfef8e"],["/2019/12/04/java简介/index.html","bb47dd9b377c380f2eb8afe0ec487ea5"],["/2019/12/11/java基本知识/index.html","727bdbeb858b29f5a47642e8abf408bb"],["/2019/12/17/Java面向对象/index.html","1e8afff6649edaa41c3127d22affb7c3"],["/2019/12/19/面试总结/index.html","a60b3f136f7c6390d11305d15f6480b4"],["/2019/12/20/SQL性能调优/index.html","25cf2fd4dacc5f429ce362010325b2c2"],["/2019/12/26/vue框架介绍/index.html","6ed6deb2090d71fb02c72d0ac0a42353"],["/2020/01/02/12306自动抢票/index.html","5075afbb61a0b028ad798d56e51fd755"],["/about/index.html","2d420cd978b9986c30909cecb4c2ba61"],["/archives/2019/06/index.html","bd0d8cc71a8784121cb62f7c561d6833"],["/archives/2019/07/index.html","a64bc725beba62cf689cfc8c350fa5c1"],["/archives/2019/08/index.html","fce1e7490ad17c43db0095f322b90e6d"],["/archives/2019/09/index.html","4f95d7d97c5d835850e73e360d22e81b"],["/archives/2019/10/index.html","76e85f89bdfb34a20a3feab25ea078ba"],["/archives/2019/11/index.html","24fa54e2c835f5868a948a899c7619cf"],["/archives/2019/12/index.html","17622cdb2ce8a499c6fb295cc552757d"],["/archives/2019/index.html","dadb3d3697884f353c38ee5c8f9f8f25"],["/archives/2019/page/2/index.html","da1adb076e6365438fe988f62f527c08"],["/archives/2019/page/3/index.html","f478cb49366802279d4fe1bcdb46ff0c"],["/archives/2019/page/4/index.html","51ebe325acf503160771d47b1cbc63d3"],["/archives/2020/01/index.html","10c685024f5fcd3dc0c6f5e5bb7d96d0"],["/archives/2020/index.html","b991aee8c329cd0d831343781d76fe2d"],["/archives/index.html","14c5140727ca0d808c3feb38f22010af"],["/archives/page/2/index.html","5ce7d87f8d4e6dcc2d2d54a5b43dd239"],["/archives/page/3/index.html","25aaf5976a489fe8da2b0e826ebc2061"],["/archives/page/4/index.html","9398d2c33b29c582e3fe3041b7ee9d9c"],["/archives/page/5/index.html","c7a8beebe11236eb88bfca8ca806a1b5"],["/categories/C语言编程知识/index.html","f231cef424e89984a396be65cceb51b8"],["/categories/Hadoop/index.html","975f42cdfcfe0a5a78bbb74eb62d995e"],["/categories/JavaScript/index.html","81f2991d9ddf5bdb7e573d25c4bb2927"],["/categories/Java学习/index.html","3e346986a972abb15e144eeec34f18d3"],["/categories/Linux/index.html","a53720f53cb1de96e5c1397bc10e78ff"],["/categories/Linux/常用命令/index.html","6630ef1b030d6c65057319c1ace2612a"],["/categories/SQL知识/index.html","9b416e3e7c275e594d0568cabc3329e5"],["/categories/git/index.html","154bf97c9928a578ab357f92620e652e"],["/categories/index.html","2eba72ca2599ab240c013c14fe5c536e"],["/categories/python数据挖掘/index.html","1d551969209cedc783295c325a873578"],["/categories/python爬虫/index.html","a89111155e9180663143ef6ed125e9a8"],["/categories/python的web框架/index.html","921ff578eaea9c39e23f9a5a7e004722"],["/categories/python编程/index.html","d5965ebf3a2e6cf3f2a408e1dd4892ce"],["/categories/python编程/page/2/index.html","5dfd5469f84e5722454de1f78850771a"],["/categories/selenium知识/index.html","3f59711aed8d1223b329e4e56610e547"],["/categories/个人随感/index.html","9c6827e71b09ca9b67ec45b59a4cc42e"],["/categories/前端学习/index.html","7627ccf3d850d3717a88afedec38d3b4"],["/categories/数据可视化/index.html","0c757d2ecbbff6d7798193a4343d121c"],["/categories/正则表达式/index.html","e47664ed985d1524f057d12a0fe6a74b"],["/categories/算法/index.html","b86aa2a25e387d54932e4b9f96b3f9c4"],["/categories/算法/五大经典排序/index.html","2a02aa22939a2418a4b3caac2670b8bf"],["/categories/统计学和概率论/index.html","1ebb034fb566f456f815eda8c71640b5"],["/categories/网站知识/index.html","b0cdc732b81b9f632f6b0a1edb744079"],["/categories/计算机组成原理/index.html","565a2be8ba37e07e88f416989d022a87"],["/categories/面试经历/index.html","9ac3ea9d85860b6d40ad36e92e286f88"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","98f29366a36306ecbf2a9ae7cd5d5d65"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","bbcf5dbfafcb5eb33c468400ae49aa9b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5463ccdf28f652d336401c71e78a3303"],["/page/3/index.html","ad80e1f3f96345a947dc31b5aed3d731"],["/page/4/index.html","79b0cbc1abc0a052829b40c60da0437c"],["/page/5/index.html","a7e3bb4aae2cb4c49411a940f72f5742"],["/sw-register.js","62925956904cf38fee5deac5adb4843b"],["/tags/Django/index.html","f40184d7cf43cbbe30603c49d27238eb"],["/tags/GIL锁/index.html","4122e7d242df252a06fdd6fc69ae2e18"],["/tags/Hadoop介绍/index.html","f8baec8ee15dbaca97d94024ee377fc8"],["/tags/Java基本知识点/index.html","b5316c419b5b474af5bc06057b08c7df"],["/tags/SQL调优/index.html","8a58dcf19324ade77fd282967366b636"],["/tags/Void-知识点/index.html","76c517ebab4bf3f954884bc2dd754d2e"],["/tags/Vue框架/index.html","96cda81a675914a6e13e8b7a45d6d59e"],["/tags/git命令/index.html","18a247bb8549312c12f7863c4af09ecc"],["/tags/index.html","a5485dfc3bcae1d3ce7a359604e7f710"],["/tags/js知识/index.html","b801af42dd5ad16b3fd15e8c623e6482"],["/tags/linux命令/index.html","c63b89609e90a3f0940a7c4fba629a7b"],["/tags/pandas函数/index.html","894ac3229a27e1c71dd9d97da0e80e3a"],["/tags/python编译器/index.html","ce7cf62cd60d42c5408272a76f35c4b0"],["/tags/scrapy框架/index.html","bba79f9a2b5eab5e2d9cd3d3f5a91a2d"],["/tags/selenium/index.html","fc300c09e79b16ccc5c4b8baf84c6b92"],["/tags/协程知识/index.html","4c0c8af152433e73e38f1dce22e33349"],["/tags/基本知识点/index.html","1468e20f022f9971d0ad9cdb0aa07828"],["/tags/扩展知识/index.html","97bbaab4980a84524f9dee267fe40a6c"],["/tags/排序算法/index.html","535ccaf6d1b6f79b506e930de7d8da98"],["/tags/数学知识/index.html","4d5827e153f3cf32edf8ae757b58d774"],["/tags/数据可视化概念/index.html","d443df84785abe56105a097a363a7303"],["/tags/正则/index.html","44c7ea20ba9a16c997ceaeef5628e736"],["/tags/爬虫实践/index.html","27884097c23aad68b4e1e5179e62df97"],["/tags/线程概念/index.html","b79fd7c3f91e29391daeffca2cc1cc06"],["/tags/网站的基本概念/index.html","05cbafe829c69a62a68bced3e76f2bbf"],["/tags/网络编程/index.html","aed147421b966ca1980e753477b987bd"],["/tags/装饰器/index.html","3339261d6212366f18beba2b46672e1b"],["/tags/计算机知识/index.html","53cabd414b4952ab4404bcbdabdecdce"],["/tags/语音识别/index.html","81570da94d02a8c4727530b6b24f7b9d"],["/tags/进程-线程-协程总结/index.html","6d191b88596fb3927a0dc723009bc1d0"],["/tags/进程概念/index.html","d9aae5e331e5befe3bc4545830305528"],["/tags/进阶知识点/index.html","db4b4c43ec56cb6cee8c6b6600d4b99a"],["/tags/面向对象编程/index.html","d335c77e6481ff125388e91041e116bd"],["/tags/面试总结/index.html","6e527324f6dcac8af857dfb10ab06c71"]];
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

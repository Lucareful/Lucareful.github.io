/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","ff6d3b6ebfdef6a5680ad481d52168df"],["/2019/06/26/four/index.html","69559d3f61f1f0dc89d4f7ca18e4fb50"],["/2019/06/26/python解释器介绍/index.html","4a17c16848c25eaf9a2af222c97acc6b"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","e236867c451827b40fb71f1df42c00a7"],["/2019/07/06/网站概念/index.html","8bd47620cdd9b9da4474b49e6b0f000b"],["/2019/07/11/数据可视化笔记/index.html","a9baf206c54df293c83978a132c3f14b"],["/2019/07/12/语音识别/index.html","f1b1d1cfa1a3df3f9ca7cbf916bef445"],["/2019/07/14/hadoop基本概念介绍/index.html","fbfa86c89697f8501a6614d7cba8ccc8"],["/2019/07/14/数据科学笔记/index.html","66939bc3b329f2267191b9e49b5e41b0"],["/2019/07/22/python爬虫/index.html","6ce92ab7ae339f3b7b64bf9bb5245c59"],["/2019/08/25/pandas函数/index.html","6014d6ec25b5568d77166bd1e9af3b3a"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","e12baf14cd7416bb1c1a22e925b08ada"],["/2019/09/30/C 语言中 void 详解及应用/index.html","64bd6e8b06082ab7a5e410cd7326b990"],["/2019/09/30/第一次面试总结/index.html","8176dc5532cde6acc39e427a4ff62c2b"],["/2019/10/07/django之url规则/index.html","5e85167f3ec7ff7c9e448170343edeb2"],["/2019/10/07/django配置初启/index.html","0b68198c08423934ecdcdb22e9060239"],["/2019/10/13/C语言笔记1/index.html","efe96eff7c1aeb2867714b208edba242"],["/2019/10/13/C语言笔记2/index.html","df4b61df35b477fe04eca9b11723912c"],["/2019/10/19/C语言打包技艺/index.html","d18cd777a17a14df0290c70ce2be1826"],["/2019/10/22/c语言笔记3/index.html","b9070ecf353e25085bccb740bf9aeea6"],["/2019/10/27/IP代理池/index.html","a5be27e50b735f1033ebe9953b5f3431"],["/2019/10/28/git命令/index.html","6c45e85d3546d4c380e40c341a2203b0"],["/2019/10/31/斗鱼弹幕抓取/index.html","31d505f42a65923f0d31da8fa7cd494d"],["/2019/11/13/多线程/index.html","b968c5437ee45b29bd4747d4e3c9b1d1"],["/2019/11/14/多进程/index.html","3acdf70e54fb2a7a4c411937fd48d134"],["/2019/11/15/python类的私有属性和私有方法/index.html","0ae468a4fdde4de3e857e4c36f839d68"],["/2019/11/16/协程/index.html","42e215680ac83d62d5cf2856a8ac08f3"],["/2019/11/16/进程,线程,协程对比/index.html","b619ccbcd43bf56092810089b2ef1688"],["/2019/11/17/GIL锁/index.html","3f3b4380b073dbb0911ca7615ce85d90"],["/2019/11/17/闭包和装饰器/index.html","7c8d4021b72060bccc14e2c06b12d355"],["/2019/11/19/Python进阶知识点/index.html","e092dea0f5362d3dcbec5ed6470b8abd"],["/2019/11/22/京东全网爬虫/index.html","e3475c96ec3d5e8480f76bd16d3d38a8"],["/2019/11/23/JavaScript的简介和基本知识/index.html","910c4ea90d83c4f011c288fab0928522"],["/2019/12/04/README/index.html","f951e051c4f9c504f22394068ab4888f"],["/2019/12/04/java简介/index.html","0b1ed558b74a081e056deb7dc007aa0e"],["/2019/12/11/java基本知识/index.html","616a0b53803160f6185012789e38ac37"],["/2019/12/17/Java面向对象/index.html","64499927572f2a8d34df738dc986ef33"],["/2019/12/19/面试总结/index.html","e7b46eaaf3dfeaec73c88d39fd4fff2c"],["/2019/12/20/SQL性能调优/index.html","0b5005245f759211aea92492babd9092"],["/2019/12/26/vue框架介绍/index.html","ee5bda41cfb11fa03902d65262560a43"],["/2020/01/02/12306自动抢票/index.html","db048fae340529f3fbecdfa04df6c5a8"],["/2020/02/24/flask框架/index.html","5e6bc10bce970dc1f228a4384fc1ba59"],["/about/index.html","f38429832039f913dbf586cc9769cdee"],["/archives/2019/06/index.html","e6b503846d574d73cd2b71f5c7cdfe65"],["/archives/2019/07/index.html","c607a2003a94e9ff8927c811cad5d56b"],["/archives/2019/08/index.html","b0d3e52226f9a3df347961891ed16153"],["/archives/2019/09/index.html","d7c2da9f76a1003c9c3f95a61f578520"],["/archives/2019/10/index.html","c014aac052ad9c39f95432e7c583e7d4"],["/archives/2019/11/index.html","1dacd6268d0b8cfb4ef334a08ec60a07"],["/archives/2019/12/index.html","056629d077129309eff13e9096f2f1af"],["/archives/2019/index.html","9550b470fde7730d5b966236dad48651"],["/archives/2019/page/2/index.html","b204725c83242940382f54ae268a3b9c"],["/archives/2019/page/3/index.html","21ccfbc4b943558a43ee7ae2cf46c95b"],["/archives/2019/page/4/index.html","f920cc669dc842df3b76dbbbe96695b3"],["/archives/2020/01/index.html","c1e41b12dda44e82f12c520b1fa49c81"],["/archives/2020/02/index.html","65a7f51474b3f42a97e764410e0fb5d4"],["/archives/2020/index.html","cddbb4c8e194ba2d762ed96721de6d7d"],["/archives/index.html","4ef68fd544a4b6dbeca87bff99b79789"],["/archives/page/2/index.html","a573ad2038f5d831379bce3b113b82c9"],["/archives/page/3/index.html","10a0d61f19abca3f7e936b9749c812ca"],["/archives/page/4/index.html","eccb462b2c34d1005ef137f3f9caf351"],["/archives/page/5/index.html","a3b36c0173d9f4d7a63eb378933b9560"],["/categories/C语言编程知识/index.html","4c1d7cc890d217e2497d07785eb30557"],["/categories/Hadoop/index.html","c8c8c5eac4a204a26f76930bc559ca22"],["/categories/JavaScript/index.html","b5a90700f4b2a1ee7290f2f4d90ae8b0"],["/categories/Java学习/index.html","cc2274b6cbf126d0c83b6a4e935eab10"],["/categories/Linux/index.html","8fed3c04c298682f8ad4d8eaad6b9193"],["/categories/Linux/常用命令/index.html","37ff18c89c6695f2cc21fcbe75b99930"],["/categories/SQL知识/index.html","9fc7903194eac4c8c4b373003841d3ca"],["/categories/git/index.html","f4034af490924b160bfec8f1849a7cdb"],["/categories/index.html","0583bff47f5cf41b0d58a08275a93537"],["/categories/python数据挖掘/index.html","992fe9e38e8fe771f856b3524279fc60"],["/categories/python爬虫/index.html","e5e06a48d1d57b70c0fa5b7033b5de59"],["/categories/python的web框架/index.html","9d2d640340a70e6700f598816963e89d"],["/categories/python编程/index.html","e4492b0113c7f4d7c20b2af414776b6a"],["/categories/python编程/page/2/index.html","19c08c18a0e1786e14f033638f9ddaa4"],["/categories/selenium知识/index.html","fb85acfe912368e0ed48801fdad0e5b3"],["/categories/个人随感/index.html","4a4616a6cd398b460288bc0ee2cc2132"],["/categories/前端学习/index.html","43fa3f63da1ca6730968ea9e4b27b373"],["/categories/数据可视化/index.html","af37050a8ae39c5b9fd7c283838aac1e"],["/categories/正则表达式/index.html","5ff832c9bbd37ba5217cc50e9e4aa132"],["/categories/算法/index.html","aca328d5852f97cb3997a01293a2bac1"],["/categories/算法/五大经典排序/index.html","72a7e7f1a092ba9ba754e3da732b8f11"],["/categories/统计学和概率论/index.html","327d784326a6f3da7995321ca25a1cdf"],["/categories/网站知识/index.html","959eaef1a12801b57f53b829ef174811"],["/categories/计算机组成原理/index.html","c3125dc5d843b865da9b2f14da88319c"],["/categories/面试经历/index.html","4cd4096d31924ffa036ed942fdd95733"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","434b65e2d19e2bef39757cf88e95b8d1"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","973f64f24c7936407b5b5adc2b5fe8b8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1531e23b3e2388292caf1a65899d3893"],["/page/3/index.html","2184588f8007cd29d4d5d6b90bd29ab0"],["/page/4/index.html","41d1b6addec41a2f79512a2e80ad9e32"],["/page/5/index.html","8e46ac364e7a1778f01bfe68e1adca7c"],["/sw-register.js","1eaa06b0d6c1661e442c129eeeb1974b"],["/tags/Django/index.html","25a5188380cb0af24d7bef187afa4fed"],["/tags/GIL锁/index.html","1ea9a769107e745a31b6a0dd6eb93d4a"],["/tags/Hadoop介绍/index.html","2648eef968103698b4771b70ae84616f"],["/tags/Java基本知识点/index.html","ff19ace260697429ddba1c543db39e58"],["/tags/SQL调优/index.html","2b9fb163680ba439515d72b0b8372d7a"],["/tags/Void-知识点/index.html","921a7703284416ae8f7626910886aec4"],["/tags/Vue框架/index.html","9bd7fb1a23c3c31c75b459cfcad50079"],["/tags/flask/index.html","3bf78b0c6d3cc04194a6e9167b326ea4"],["/tags/git命令/index.html","77701d7f03c0343647dc18d591b60cd2"],["/tags/index.html","4ecef2b012124cc5f6a69171b73cea63"],["/tags/js知识/index.html","346387a9be7c0839c700bde8aff32ca9"],["/tags/linux命令/index.html","6c09b6cba88ea6df69b8881ae018ef12"],["/tags/pandas函数/index.html","6ac216414187787e39e63c06d2918df3"],["/tags/python编译器/index.html","a7c4b1b3acc3f041deee0270a57d03eb"],["/tags/scrapy框架/index.html","cef42ef1910366f9c244222fd02cee18"],["/tags/selenium/index.html","a2d4fde8de60460366426f1028c94c3b"],["/tags/协程知识/index.html","5cc5c743bb4dbbffde5f13327ad1ad7d"],["/tags/基本知识点/index.html","82cb61b12e0908108cf0d61ac498f2b1"],["/tags/扩展知识/index.html","0af425bbaaf96e2130e5e61b6334df4d"],["/tags/排序算法/index.html","2bda3083a4b8f513fe71bdf8e5aab6bb"],["/tags/数学知识/index.html","96e4059636c209831caa34ebc0e97d87"],["/tags/数据可视化概念/index.html","6bed8764550f463fcfb16d39f7a59ac1"],["/tags/正则/index.html","342f6d505542dabb1a605f7761a1a655"],["/tags/爬虫实践/index.html","f0a03ca9f7da79c1e6fe0681c440871c"],["/tags/线程概念/index.html","b310edfc7c4cc63621717beafc357573"],["/tags/网站的基本概念/index.html","5d1402c41a9f1b9679337d6e8a5bf9d1"],["/tags/网络编程/index.html","115933448272790772e94f87480c1ed7"],["/tags/装饰器/index.html","fd63b9f99604e8eaa15ebc4e03e8b7a9"],["/tags/计算机知识/index.html","8c9871afc613ee4b4be606dcb68f400c"],["/tags/语音识别/index.html","ba316f0ce01917874e490edb04dce47c"],["/tags/进程-线程-协程总结/index.html","1dfe386fe0ea7a7dbfa8b1816780bb2f"],["/tags/进程概念/index.html","7d513310412dce35a181e34a17e95a8c"],["/tags/进阶知识点/index.html","4538cfeb525c946e2150292dbdffca54"],["/tags/面向对象编程/index.html","441adf87363f67c517b966597009727d"],["/tags/面试总结/index.html","444a4f31c16780a91e1f7cf349d27d71"]];
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

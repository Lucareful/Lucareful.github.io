/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","bbb31d4f889fd9e8e3e35636f6c40f48"],["/2019/06/26/four/index.html","acbcb5894f0609e0362297b4662f89cb"],["/2019/06/26/python解释器介绍/index.html","a225487220d1acf0306e637ac44135d8"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","e13083f88c2ed89774df868ba2a65d7d"],["/2019/07/06/网站概念/index.html","a692d117e6fbdbda4012bd4cf67f06a4"],["/2019/07/11/数据可视化笔记/index.html","e685f6a9448876c407afb23dca8b330b"],["/2019/07/12/语音识别/index.html","2123e60cda1da672c233293f13176004"],["/2019/07/14/hadoop基本概念介绍/index.html","7449b42c7a33fcd894c602eb3c217022"],["/2019/07/14/数据科学笔记/index.html","34ae610d58a3978ca4da87c94ddd8821"],["/2019/07/22/python爬虫/index.html","3096096cbd42c5011c72c0b238362e56"],["/2019/08/25/pandas函数/index.html","b6a4659f97fde52c08220f3dcf46d16c"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","7c54f6fe2852211f9eff7ad92e0aff9d"],["/2019/09/30/C 语言中 void 详解及应用/index.html","845180623950db362ebf4023b9367469"],["/2019/09/30/第一次面试总结/index.html","507f697b7e4fabe747d6fabba0f0aa16"],["/2019/10/07/django之url规则/index.html","5d93ed9e64d13ba69b91eb6960ac8202"],["/2019/10/07/django配置初启/index.html","b185d2cc03883cfac02a72f757690f4c"],["/2019/10/13/C语言笔记1/index.html","94405abf9d9b2133930267d8dfe162c7"],["/2019/10/13/C语言笔记2/index.html","210b3fe3944eacc6cb82a1d9528c2df8"],["/2019/10/19/C语言打包技艺/index.html","205186c1ea8d4d275ebd8917d8398a03"],["/2019/10/22/c语言笔记3/index.html","646fc6f34bec00400fc2379f8d69ea33"],["/2019/10/27/IP代理池/index.html","c57f1b150b6412583cf0f011c52370d4"],["/2019/10/28/git命令/index.html","df443762fee74ffac798d673dc17059c"],["/2019/10/31/斗鱼弹幕抓取/index.html","815dd1df813cdfc8f102e3cd3be74198"],["/2019/11/13/多线程/index.html","eca3c56669e3b7759de860c05099842d"],["/2019/11/14/多进程/index.html","177cd96e069c6b4c0940d0db0f3252cc"],["/2019/11/15/python类的私有属性和私有方法/index.html","16108830712ff704b973e2b30e38bd57"],["/2019/11/16/协程/index.html","01e954b12c9a70251fe4c22c23184fa6"],["/2019/11/16/进程,线程,协程对比/index.html","de7672a63f8d59958700445ca467c0a3"],["/2019/11/17/GIL锁/index.html","3c95528346277be5a0275989bc2aabcb"],["/2019/11/17/闭包和装饰器/index.html","825a5b74d11bc2f5b0f86ad58b5f3efb"],["/2019/11/19/Python进阶知识点/index.html","420244a9dd328c353c762a78f509b5c6"],["/2019/11/22/京东全网爬虫/index.html","36d6635ac9ffdc352558005d8d5956e4"],["/2019/11/23/JavaScript的简介和基本知识/index.html","92a8fd3ae8f673ebbe6589382bac4912"],["/2019/12/04/README/index.html","12fb0df31cd202c717281115d4309760"],["/2019/12/04/java简介/index.html","9b42355875afc20f732be98d50c935fb"],["/2019/12/11/java基本知识/index.html","d65b4db5c8af1a7e21454d05ecb4c62b"],["/2019/12/17/Java面向对象/index.html","2415ccdd64704fcb6f73176d6dd90429"],["/2019/12/19/面试总结/index.html","f722a6e59b4d852544a3e584cfee9dd3"],["/2019/12/20/SQL性能调优/index.html","e93d8aaa77ced19cb6d42692adc3f7e2"],["/2019/12/26/vue框架介绍/index.html","e0369b41c02fd5202f1cfabd7f63f609"],["/2020/01/02/12306自动抢票/index.html","aaead7577f9937a337911583e55b296b"],["/2020/02/24/flask框架/index.html","42aed9148779bb8d9b766c2fa7d3c7c8"],["/2020/02/28/docker以及相关概念介绍/index.html","c82192094d9a541c612e637e9196961c"],["/about/index.html","1af79b994b9616d14aaf8258f3fee18a"],["/archives/2019/06/index.html","edfdd07e7db7de9cb6651de36dc37e03"],["/archives/2019/07/index.html","a83d94a626e5d683ad297559726d27dd"],["/archives/2019/08/index.html","8f5595fb2f5d69cad26bd63918f5b53a"],["/archives/2019/09/index.html","a4b7a370abd07f11843f1d8371312794"],["/archives/2019/10/index.html","8bf6e0e49c30ae3ac2000917cd4a9d3c"],["/archives/2019/11/index.html","d6691bd9ca4acfad6a7866147c9080ff"],["/archives/2019/12/index.html","13fb12b146266c34e0c4d31526fb75e7"],["/archives/2019/index.html","2034c7610d35afc087feaa5d251c8676"],["/archives/2019/page/2/index.html","8153a173ee6bcea8273743e5e3a65ec9"],["/archives/2019/page/3/index.html","e7612de43967df3e64a2c68f080cc49b"],["/archives/2019/page/4/index.html","d2739780a878438aa77543b6de5709a4"],["/archives/2020/01/index.html","5b99bddbad40aaaeecd9d8bf077f9da4"],["/archives/2020/02/index.html","dbba57e120014da2468ed0651e68c7e8"],["/archives/2020/index.html","beb0ad321d201792da641430b2050abf"],["/archives/index.html","89edeccb890ba018fda2a91a28871b61"],["/archives/page/2/index.html","fe3a505c0fba6c707a73314432a9e336"],["/archives/page/3/index.html","b5cbeaf3520d0f0cf7ffed20a010e6c3"],["/archives/page/4/index.html","6d5d78f71d12956728f03072937a4676"],["/archives/page/5/index.html","23876870e171485e39f785c80294e399"],["/categories/C语言编程知识/index.html","2897f44984374ba24a3ead70edfe0097"],["/categories/Hadoop/index.html","2597e9f0fa162b5eda8f0ce9da619c66"],["/categories/JavaScript/index.html","ae33be9f80ef39bf389261c4c3a64d90"],["/categories/Java学习/index.html","552de39f707443619ef110a296c1021b"],["/categories/Linux/index.html","712ca7cb9f2e41b1c47d4722cb121e25"],["/categories/Linux/常用命令/index.html","c3b5e8dbff7d4c842f97496d45f8e751"],["/categories/SQL知识/index.html","1d991be54f6f75d57b60809d6741f658"],["/categories/docker/index.html","034da46b53647f700ec858b09d03d228"],["/categories/git/index.html","6cccd42d81a6513b1af5971fcc8d7877"],["/categories/index.html","078c2828b55c05fea60a4d988aa0b260"],["/categories/python数据挖掘/index.html","e412b76bb1b0c9080ada601f27d7208f"],["/categories/python爬虫/index.html","fa5cf8ccb892fcb483f5192e77b1cfae"],["/categories/python的web框架/index.html","013fd27ab848ecc2ae9ddd7996bf8c94"],["/categories/python编程/index.html","e2ec5346fb5c691d0893e4b3ef243fd6"],["/categories/python编程/page/2/index.html","d708f0547bfcf2fe953fc9cebac3cd7b"],["/categories/selenium知识/index.html","8f34db2c64d98481786ca8257c03a67d"],["/categories/个人随感/index.html","ae40eb13ab2d4a5926a99c7d9e277618"],["/categories/前端学习/index.html","c4b438b25abff53c45c95d419f4e91ac"],["/categories/数据可视化/index.html","418dd1145515f9882e8f2efc7d93e7a8"],["/categories/正则表达式/index.html","2a09b0c62c1e4b32173e906ab9785bc1"],["/categories/算法/index.html","7e903330a1dabc5c3baed2e44965e0e4"],["/categories/算法/五大经典排序/index.html","98e150af9fdfba60fe8b299423fcf78d"],["/categories/统计学和概率论/index.html","76ed96103cac230ae20d747eb5dd7cea"],["/categories/网站知识/index.html","6ac5195e302fb9605273ec203557bff4"],["/categories/计算机组成原理/index.html","c2fc14a6ab1bc24f64844e1e256386c3"],["/categories/面试经历/index.html","facc0bd1e7b4192015406b1b3ee6997f"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","f2f36bf3f9f00a8663687a8a89130855"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","4f89aa5df6ecca4b76579122d96ab371"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","44f094eeebeb01d920a6b5ec172bce5e"],["/page/3/index.html","3e4c7cf2576d5aae77d945c467c58b9d"],["/page/4/index.html","f0dc53095db9d7b15f21756e38e83762"],["/page/5/index.html","2408efd8ff3da1037d87e88d655d8b31"],["/sw-register.js","1a9d32f2a57a748cae9b6cc372a9b17f"],["/tags/Django/index.html","f07e168221d66d2e32c96b5bfbf96b67"],["/tags/GIL锁/index.html","6dfb21e2385fdd50be1975a39f99868d"],["/tags/Hadoop介绍/index.html","c10063557a8c9897bf260108759861b6"],["/tags/Java基本知识点/index.html","153058aa91dc6b8158a7c9c01cc70adb"],["/tags/SQL调优/index.html","a25ee1127082b0b91eb67977f40a817b"],["/tags/Void-知识点/index.html","20561f4b62a00deb16c5c1995a080f8f"],["/tags/Vue框架/index.html","6189f39bc465912257a27cb295bf90c3"],["/tags/docker知识/index.html","eaee0cd06b4025316e0990bba24e52e1"],["/tags/flask/index.html","8b1677c6ec7732498a71472ea12db8d3"],["/tags/git命令/index.html","ccadddb11d71996812c8a52ff4323c5c"],["/tags/index.html","6afb05bbd27fa3f78876e26217b389bb"],["/tags/js知识/index.html","f3a11c268e6298a085bd7630a3c33976"],["/tags/linux命令/index.html","8d16765844fc55a60ab9043c20fe0df9"],["/tags/pandas函数/index.html","e3cab6cd61113f1df0e40d37fdb2f80e"],["/tags/python编译器/index.html","9c71c4b55313eac4f5b7e5f4638ea230"],["/tags/scrapy框架/index.html","b7c72c82332f98f6136ab01c04a03cc7"],["/tags/selenium/index.html","cfcf363238791564653a9a6dc5f821b8"],["/tags/协程知识/index.html","7b2e514da54313edcbb8ff17d6137902"],["/tags/基本知识点/index.html","60a5a6cb2c8218a21a8bd3530eced36d"],["/tags/扩展知识/index.html","31a8b669a0e6408aa1251c363efea55c"],["/tags/排序算法/index.html","35ba585f45cca78e329c5e2203378a47"],["/tags/数学知识/index.html","7a5cab056172ba112278939090dea70a"],["/tags/数据可视化概念/index.html","b7f4869a667cb0375279695d4df2320a"],["/tags/正则/index.html","ac1191ff218a7fa72042a5c476e885fa"],["/tags/爬虫实践/index.html","fee8a0409e38f4df3ba3f8228a3fe257"],["/tags/线程概念/index.html","42ff5057a0f5d26fc6837ae42325b598"],["/tags/网站的基本概念/index.html","e39bc4c6f8d3398f5b57d87eca0b1a90"],["/tags/网络编程/index.html","b239ee89d45fe92122f872f26686bce5"],["/tags/装饰器/index.html","dec0cd51bacb2d09de2d40abb1b78b30"],["/tags/计算机知识/index.html","927706829f3f0310440d9ecb669b70fa"],["/tags/语音识别/index.html","3411c9c8339625f241189f7e1861913d"],["/tags/进程-线程-协程总结/index.html","0430a975795e589bd3a60593dcc1f1eb"],["/tags/进程概念/index.html","c547598fa7000ff949838d6d06a9209d"],["/tags/进阶知识点/index.html","73740d039c570276b96e9a3e0b7698e3"],["/tags/面向对象编程/index.html","ee97f42374b71d2bbf1069e626ac6b52"],["/tags/面试总结/index.html","9bfaba06056147b1abde433b52d7f551"]];
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

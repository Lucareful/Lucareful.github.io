/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","e53eef4b936b4dfca76adbdfa84ea08c"],["/2019/06/26/python解释器介绍/index.html","5ca7f4a94b666e303c36d9d50e54caf4"],["/2019/06/26/正则表达式/index.html","18d235d565e46e416139d8324d1b7be2"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","d99d7aef3f14ec4ca8d033886838d2f8"],["/2019/07/06/网站概念/index.html","344a6c21080e0b73c50689b2c590512f"],["/2019/07/11/数据可视化笔记/index.html","bb7977d3c72c3074ebe330fec830fa26"],["/2019/07/12/语音识别/index.html","4fe28bf48a5f782bcd2cc2a81460da4d"],["/2019/07/14/hadoop基本概念介绍/index.html","e6df6ccbf4d70f6ac554a72d613a63b1"],["/2019/07/14/数据科学笔记/index.html","9b0b04fd5dc77ae77c72874e14c49570"],["/2019/07/22/python爬虫/index.html","6e4872db5c06282baf8a0987c53548d7"],["/2019/08/25/pandas函数/index.html","70b17905ebcdd5e802375a63daced552"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","ff9a45e358fb66cc6ec7a43294b937ed"],["/2019/09/30/C 语言中 void 详解及应用/index.html","186fc52c612f3bf93f491504d600b086"],["/2019/09/30/第一次面试总结/index.html","bbc0d71adfc8dc5af00c9a559eddf7f1"],["/2019/10/07/django之url规则/index.html","7b6491ab0eae4e11942e48602ba2c8f6"],["/2019/10/07/django配置初启/index.html","ee036afcfae7f22099903072e83e4397"],["/2019/10/13/C语言笔记1/index.html","364bf3794b07c9c3fd2a5757e58d2adb"],["/2019/10/13/C语言笔记2/index.html","590d8c9a502d5a34ca39f45878f7437c"],["/2019/10/19/C语言打包技艺/index.html","fb170340ccf3f8e2c7ffc0be7a90f0ee"],["/2019/10/22/c语言笔记3/index.html","9520ec8e869b9352420c000d1291d6c4"],["/2019/10/27/IP代理池/index.html","1e2c4b296ab69c1b193bcba4b20af06c"],["/2019/10/28/git命令/index.html","5b16dbd44b80e44cfdd79422720c68f2"],["/2019/10/31/斗鱼弹幕抓取/index.html","de7ca357e119a9b086957bfb4aaf5ff7"],["/2019/11/13/多线程/index.html","191d314129a79b95c91f0d9f5ec2ac9b"],["/2019/11/14/多进程/index.html","7483d260d307aaa1996b9f839725b0ba"],["/2019/11/15/python类的私有属性和私有方法/index.html","486d5920b1606df3f99203896041a0a5"],["/2019/11/16/协程/index.html","2cd6d6e42c9a3a06afbc206def7a2c18"],["/2019/11/16/进程,线程,协程对比/index.html","751e4c30aaab8081508844d369b597b9"],["/2019/11/17/GIL锁/index.html","f46c65d02c05eda6e952c143b448b23b"],["/2019/11/17/闭包和装饰器/index.html","8d366b65eae737e2bc76e637174ad866"],["/2019/11/19/Python的模块和类/index.html","2a738758e86184e83beddfc4d9e40223"],["/2019/11/22/京东全网爬虫/index.html","443d4dbef5150340e5a04f7c73d12c16"],["/2019/11/23/JavaScript的简介和基本知识/index.html","f98bdaf7bc439cd5ca64d7cbef20cb0e"],["/2019/12/04/README/index.html","1d69d1ff41be4161c62b8e86e57505e4"],["/2019/12/04/java简介/index.html","f20684a820e9a05921a276dce9fd6dfb"],["/2019/12/11/java基本知识/index.html","17851d659937a06e4061101fb810ad26"],["/2019/12/17/Java面向对象/index.html","1e7cd75b96b19a4c06bfaeb96d4f7883"],["/2019/12/19/面试总结/index.html","e981b5af2a6e21ad9f5c5702eafb0d4d"],["/2019/12/20/SQL性能调优/index.html","f3a820924d0cc1ed89b16a1c10da8500"],["/2019/12/26/vue框架介绍/index.html","a9f79edf29c35317f26b16f3b82cef25"],["/2020/01/02/12306自动抢票/index.html","2ca4c52abf7c48c10f00c4018cc7c46b"],["/2020/02/24/flask框架/index.html","a793bd7d8ff04bff7db570d4ced9fe5a"],["/2020/02/28/docker以及相关概念介绍/index.html","26cca31d221d7ce2f03a3573d958adcd"],["/2020/04/05/python数据类型的底层实现/index.html","4e90d8c085c84a4721788e7f9a8fd145"],["/2020/04/27/查看mysql连接情况/index.html","1248c2d8c0d39e282a410849893ca85f"],["/2020/05/02/Linux操作系统核心知识/index.html","25a811de29f33421213f8b77b38543fb"],["/2020/05/02/计算机网络/index.html","2b20c3ac4a61e36cc651ecc15ac58cba"],["/2020/05/06/Linux操作系统（二）/index.html","4cec3dbd55d83e7886ac9792a7d79860"],["/2020/05/14/函数补充/index.html","57105617d60ed4f01e3252c102461aeb"],["/2020/05/21/核心模块的介绍/index.html","25cda248ec186d5e753af13de49e6100"],["/2020/05/21/高阶函数的定义/index.html","a35d7d931cae92824b6a4f95a7c316d8"],["/2020/05/23/Django后端演化/index.html","43ada07178dc772a8b565bc9ce8fb966"],["/2020/05/29/Mysql数据库函数/index.html","0baa97092c19439611ea386e840a74b9"],["/2020/05/29/Python面向对象/index.html","1f13a637486280451dbfb6e83f5eb1e1"],["/2020/06/02/Python 中的上下文管理器/index.html","8204a3c3f979381b6f5230ef347fc6d4"],["/2020/06/02/Python类补充/index.html","ddc49e56362d847488a58c9e12d818f7"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","4c5153fb54260a75ca4512051c4eecc1"],["/2020/06/07/MySQL数据库引擎和数据类型/index.html","afe202422e44da38e9e246380f686344"],["/2020/06/07/索引和事务/index.html","1af42f833302d367dc10616d2246b7a1"],["/about/index.html","c5256a14c67bfb4ee9f51ff756702c25"],["/archives/2019/06/index.html","8365c6747077086bc9b66400983f56d2"],["/archives/2019/07/index.html","332d5186c29da6ba56f2e7f3c5207a14"],["/archives/2019/08/index.html","299d4add0dfc8243d0616e356b32e151"],["/archives/2019/09/index.html","4f3e6750eaee990402c22b0fcbe3cf86"],["/archives/2019/10/index.html","0805c8118ff5ece276667c29855bc684"],["/archives/2019/11/index.html","500d0f97fde59fc0c91518f9e155a5b5"],["/archives/2019/12/index.html","92d1902f8177127b9cbdbb4b7204d5ae"],["/archives/2019/index.html","61de65bbe3e65b90109f858efc6a5629"],["/archives/2019/page/2/index.html","95a7b6d3cf0ffc3d761d2666bca38502"],["/archives/2019/page/3/index.html","28f216acd4e9ae60e570338aa81cb80c"],["/archives/2019/page/4/index.html","da8d6c8eaf664a4bab152d0aed7a9fd8"],["/archives/2020/01/index.html","ad51b390127bda10b82899b8d90e8853"],["/archives/2020/02/index.html","403ba90546f4b8ed5517207fa9d7593e"],["/archives/2020/04/index.html","fc0166c5dd12bbcaed7a61da1dc06870"],["/archives/2020/05/index.html","1aee61397c5fa01d305f4d151bd61024"],["/archives/2020/06/index.html","b9ac3c17c7d4d26209fbf33d1392cdca"],["/archives/2020/index.html","943c111ce54aaa181ed9c628b390d39a"],["/archives/2020/page/2/index.html","00e44ec68c82769fd603670a90af338b"],["/archives/index.html","eb2b79547a781540fb3988a11de23619"],["/archives/page/2/index.html","2064b0454183db5d98da02dda9b6d919"],["/archives/page/3/index.html","5b5e47875ada67b63d4301e74f9ca586"],["/archives/page/4/index.html","f836a178f3737a6f50bcd22e0ddd7f52"],["/archives/page/5/index.html","bf0139a686e41cca25165ea9b68ac79a"],["/archives/page/6/index.html","e204ad5a413762c5721d577a95f095d4"],["/categories/C语言编程知识/index.html","1aa6bba213a7e61c209bc2691e9b35f8"],["/categories/Hadoop/index.html","b85fdcd6b64f483cfd6ad0e8378b555c"],["/categories/JavaScript/index.html","56e44bdb86523b71be4248f4a75f3c5c"],["/categories/Java学习/index.html","406dddd298c4409578659b475aafeadc"],["/categories/Linux/index.html","03f4bd2ff5f0632195277b16f28f38ea"],["/categories/Linux/常用命令/index.html","4321c4dbc597afa2571b425238f8f18d"],["/categories/Linux/核心知识/index.html","9007ac7e655a3333ac218365fe7b9622"],["/categories/SQL知识/index.html","3b7e80410ece942bd204ec0e061a1085"],["/categories/docker/index.html","994b7714af9b0a73b08a7f4166a45e8b"],["/categories/git/index.html","b4a644b14cfc2d2b9052d0cef8f3a9ee"],["/categories/index.html","c7385e63ffcb04d38c76a47888665253"],["/categories/python后端架构/index.html","91f61efbacd7478cfe65648cce7fcbef"],["/categories/python数据挖掘/index.html","eec7032722d9b9095f0058576b20db2b"],["/categories/python爬虫/index.html","dab0e9b988589ba472822cfa9c5692d6"],["/categories/python的web框架/index.html","9bf43d291847fa6962bbb37cf12b62ed"],["/categories/python编程/index.html","820d17d1a64cc253d9eaad0dce802827"],["/categories/python编程/page/2/index.html","4a9b01e8ee3ac17442c296669e93c540"],["/categories/python进阶/index.html","b9918e8f34e77514dfe5d84086f26fee"],["/categories/selenium知识/index.html","eafc6d7695bbfc3a1d4e5300ed1aca4f"],["/categories/个人随感/index.html","49df08970b839c735edfc1868c210981"],["/categories/前端学习/index.html","818d75b11f0541d386f79896a3177f3f"],["/categories/数据可视化/index.html","22672a7edd99352f18dae167375062ae"],["/categories/正则表达式/index.html","1c2afe10e266e19d087948b0f163f7e3"],["/categories/算法/index.html","51a228660e5cdf8621f98c0100b6e7b7"],["/categories/算法/五大经典排序/index.html","89ad8fa9cfad00539053c266d4fde2ed"],["/categories/统计学和概率论/index.html","fd494949479656411a048a3dcb6303ea"],["/categories/网站知识/index.html","7e69ac5a56defb17b6d05210a119882d"],["/categories/计算机组成原理/index.html","833b15363976355db4d107c05fbbbd54"],["/categories/计算机网络/OSI七层协议/index.html","c9f376e87d2a79b90bc041bfadd5feba"],["/categories/计算机网络/index.html","cf4de3d52d8d7655a2faab607970c96d"],["/categories/面试经历/index.html","eada57533d911fc80c4d7210c97f893b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","a00730a4acff91b677bcf79b4d853511"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","29feee0071113a4392cfd74c4c8797e1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","a3d9c328fa7e814f3d17b1faaba3a4bd"],["/page/3/index.html","fc15e20afaa424327bae90bffb33532f"],["/page/4/index.html","01af10c4b83a61f693c59d46d4d678ba"],["/page/5/index.html","e78eb1afb8d705527134d33a8d5be9f8"],["/page/6/index.html","faefe4d73a9f65373daf79d170de749d"],["/sw-register.js","53a86de66f4623ad921130c944d2b6a9"],["/tags/Django/index.html","7cbc2f8fad532bb3c56534d9f0fcf124"],["/tags/GIL锁/index.html","8cfe3ab25fa5e317a77532fc844abf21"],["/tags/Hadoop介绍/index.html","6239275bd9c7205d611d2ce641c02b50"],["/tags/Java基本知识点/index.html","a8918481d21ff278cc6dd6d707f01a5d"],["/tags/LinuxLiunx命令/index.html","5049b59ec4d2295936fc75929c94c5db"],["/tags/Linux知识/index.html","34fe2f4632796dd5d9f8b0dac6a1c740"],["/tags/SQL函数/index.html","a94eb0879fc03c56f11577a44847b331"],["/tags/SQL命令/index.html","6f4ead08b5eaa5129b2173d4da9b2ee9"],["/tags/SQL概念/index.html","02db9210c28316c7d6810ddd24167dc1"],["/tags/SQL调优/index.html","aad9906f743feec463e939ce7a53cce2"],["/tags/Void-知识点/index.html","dca9c458f235f4f8a70e2370ba148698"],["/tags/Vue框架/index.html","e2a9f6fbdd702c96ae24485576b9473d"],["/tags/docker知识/index.html","468d8572cdfc1a9a99b1ce2cff92b080"],["/tags/flask/index.html","2c4f01bf903076f0041e256e4dbcf2fb"],["/tags/git命令/index.html","008ddc8baf0011056a99a83b82bf2511"],["/tags/git配置/index.html","5bd67ccbbdcf703d155551036329c3e0"],["/tags/index.html","326fa9ff5d37b7b5b431b5a3c3130001"],["/tags/js知识/index.html","57a460fb223bd2b6540d9159b56fdc54"],["/tags/pandas函数/index.html","9669db828574957717a0d629979eaba5"],["/tags/python编译器/index.html","755c6b3da780ea83932622d81063d6fb"],["/tags/scrapy框架/index.html","88463b89f1da062870ccb8b6cf5b19a9"],["/tags/selenium/index.html","ff694891635e72b47c4b7ba206b1e28e"],["/tags/上下文管理器/index.html","8bc0b01a1449ec13e40cb188758d2d89"],["/tags/函数补充/index.html","94b62ac4a6f14ece623c1f939fd35a28"],["/tags/协程知识/index.html","362c9c85b496bb359adfefc035b28aaa"],["/tags/基本知识点/index.html","41dc2c689fc5ff6292195907c1aeec1e"],["/tags/底层原理/index.html","7a9a13fd3d460b4bf8302030ce5ba747"],["/tags/扩展知识/index.html","efe83d0ee2a19c0cb88ea7b78bcc7205"],["/tags/排序算法/index.html","0f3ee83a95a0e79042a6cc3f31037c12"],["/tags/数学知识/index.html","940fcee9059c3238af14cdc6c49af552"],["/tags/数据可视化概念/index.html","982527902b47f68d21a4c64d7718678f"],["/tags/架构演进/index.html","f65ae5c3555078f1155f1bb44294793d"],["/tags/核心模块/index.html","95242f2f5a73869a74ca953e163c8b43"],["/tags/正则/index.html","231fd9d25e43b8a497dfeea4d0d44061"],["/tags/爬虫实践/index.html","336c204176db5c51f4922a7010b4fc4c"],["/tags/类和模块/index.html","b2a93171ecafbb1c3e6e5c68f2dd90a9"],["/tags/类的知识/index.html","6c8df93b70692c1616005b5d87cf3d4b"],["/tags/线程概念/index.html","ee9696a50820c75b2e5ad83d9d16f76a"],["/tags/网站的基本概念/index.html","124815fe8683a205d06a48c26680cad6"],["/tags/网络编程/index.html","a16893ccc6ade241d44106d2b654f773"],["/tags/装饰器/index.html","b390d8885cff210db7bea266c9bcdeb1"],["/tags/计算机知识/index.html","e16d4d31f9768115118a5154dcf03e52"],["/tags/计算机网络知识/index.html","3b8ba9044b53d070169a8b5e8391dbb6"],["/tags/语音识别/index.html","b36e735a3b99f3d7455931896c8eed53"],["/tags/进程-线程-协程总结/index.html","58c1e97f3957dd1243b4a23993109ee5"],["/tags/进程概念/index.html","018d630ec7e94d30e1e7bce6a43890dc"],["/tags/面向对象编程/index.html","a6b5b6ca78f809b27d3fb06075ea8d3f"],["/tags/面试总结/index.html","3d6b916ad2b6b3b671093e03223d5a56"]];
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

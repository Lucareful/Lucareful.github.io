/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","a62f1df6bbd2909cccfe67cf786e96aa"],["/2020/08/16/C 语言中 void 详解及应用/index.html","94e460ba07717471c363cb1d5d9fb058"],["/2020/08/16/C语言打包技艺/index.html","76cc7ad4c0a933770d12c331f4c313e3"],["/2020/08/16/C语言笔记1/index.html","e47390d3b0f9a60ed1e470ad5f86c294"],["/2020/08/16/C语言笔记2/index.html","0bfc0d9389d9b48d7e0efcecaba02892"],["/2020/08/16/Django 重定向终极指南/index.html","7b5ae58f522739be7043c964eeb77137"],["/2020/08/16/Django参数和模板/index.html","c869ed70360fe075c2395c2ddc9105bc"],["/2020/08/16/Django后端演化/index.html","4cf6a99305c64f72a8ea34286737d31b"],["/2020/08/16/Django的Cookie和Session/index.html","68377dfdcf40ec7a6faa9c61796186ca"],["/2020/08/16/Django的Field详解/index.html","d1e7da1ee53def07f3b2a9d3d18469ae"],["/2020/08/16/Django的ORM多表操作/index.html","505ddd3a6f3bfeb44ce3b68acae84ae3"],["/2020/08/16/GIL锁/index.html","350c8be0ac7b5991e4c9a427ce47abc2"],["/2020/08/16/IP代理池/index.html","c27c7437739d20080922deb08dce29cf"],["/2020/08/16/JavaScript的简介和基本知识/index.html","1a2aa5c882144cee5b929d01e1b478c8"],["/2020/08/16/Java面向对象/index.html","6ef6b9ba8139f4ceec16c7da6fa0b116"],["/2020/08/16/Linux常用命令/index.html","5991d9ed43a1be4f9ab07de1e5c6596c"],["/2020/08/16/Linux操作系统核心知识/index.html","f6f93c6f0fd2a0370cfef25c84b78991"],["/2020/08/16/Linux操作系统（二）/index.html","58d2fdcab84bc42d600647d361249768"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","ad49581c9cba3d9a7fb7ee697a4a7cd1"],["/2020/08/16/Mysql数据库函数/index.html","c046db5b7217d7712ae06c9545a066f8"],["/2020/08/16/Python 中的上下文管理器/index.html","8fde0c938a000176696dfdd44b180abb"],["/2020/08/16/Python的模块和类/index.html","91ff70cc39ecce7e8bfaab412f4edac8"],["/2020/08/16/Python类补充/index.html","e3074a27c49a7caab9859044d34976a0"],["/2020/08/16/Python面向对象/index.html","043ffecc8b467968122a512eb6cb1477"],["/2020/08/16/README/index.html","44035f92013a94857b27a733bdd3db17"],["/2020/08/16/SQL性能调优/index.html","fb79c57120583b7be9c32edb1bacd911"],["/2020/08/16/c语言笔记3/index.html","be9e3766849ea685b0123c3bce60a143"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","fb6041b64fe01c1fc12b8f1a327eea21"],["/2020/08/16/django之url规则/index.html","539ea5d4e5d4b76b26b6ff4f5e359cf9"],["/2020/08/16/django配置初启/index.html","5472422b0ad1959f4a1732bb0af58ace"],["/2020/08/16/docker以及相关概念介绍/index.html","d42db20560070711fa9103ba8fd58576"],["/2020/08/16/docker信息/index.html","6b13ff39241aa9bb456a52b4bd632560"],["/2020/08/16/flask框架/index.html","df89b0e9a59583abf11d5e96aa6672e3"],["/2020/08/16/git命令/index.html","51fd22721aac164720ed43ae1a3b614e"],["/2020/08/16/hadoop基本概念介绍/index.html","56cde2cb07ef7262a7ca14a0c5bcf339"],["/2020/08/16/java基本知识/index.html","10150f0c1adcb115433429d22bdfbfa2"],["/2020/08/16/java简介/index.html","75e4876c223b7a0ec9180ee58adb16bf"],["/2020/08/16/pandas函数/index.html","756ea3cbc2166532f8bc1bb9bcde7f14"],["/2020/08/16/python函数补充/index.html","e2e202249e5b5ed82750bfd9588aacbf"],["/2020/08/16/python数据类型的底层实现/index.html","82f99b53f51d9f8b207cb95c940d6597"],["/2020/08/16/python核心模块的介绍/index.html","e2089c1a8c1613fddcf64b6a576db2d0"],["/2020/08/16/python爬虫/index.html","aa7a91923098d3b5b3776f84c1e53fc0"],["/2020/08/16/python类的私有属性和私有方法/index.html","c98af3ded1830b096e12a962d518b858"],["/2020/08/16/python解释器介绍/index.html","36ad3bb8b5da478b9b1a35d735d6e90a"],["/2020/08/16/python高阶函数的定义/index.html","fa0fd0d47e207d5e48dd0dfb8758bd58"],["/2020/08/16/vue框架介绍/index.html","0a568a3333294608755dad91a1559efe"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","e302e08aa41a0ee1ac617013e9f217f5"],["/2020/08/16/京东全网爬虫/index.html","bcaad1caddac3389a3878990d8fdbd50"],["/2020/08/16/协程/index.html","56c84aa0986f9bfdd93f0f3dcb05004d"],["/2020/08/16/多线程/index.html","1d00b65754be798cac9869d195c93cd6"],["/2020/08/16/多进程/index.html","7537aff288976ce50c7b0ea27d553c35"],["/2020/08/16/数据可视化笔记/index.html","fde3e3e824d9961d87460dded9286147"],["/2020/08/16/数据科学笔记/index.html","38dd7860c7d700e317eb405c330f4110"],["/2020/08/16/斗鱼弹幕抓取/index.html","39651ab5a0e3c93f723246688476b6d8"],["/2020/08/16/查看mysql连接情况/index.html","52498fdb45658a60a677c66a2d87aef1"],["/2020/08/16/正则表达式/index.html","636a6d7665f7faf40d4bad66cff25c7a"],["/2020/08/16/第一次面试总结/index.html","01b6ed93588cf7f7d5985fd3b6f444de"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","8661578b79c228211af773a73b30dd61"],["/2020/08/16/索引和事务/index.html","524a9198d8ac3afd685faf4a116f5fd4"],["/2020/08/16/网站概念/index.html","ba859893d65c3053ca5661eb7b43ecc2"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","d5bddd75e8475a351b667023aab5d83d"],["/2020/08/16/计算机网络/index.html","4b4a3b1b8f7898d2c3f2d4443697297e"],["/2020/08/16/语音识别/index.html","e985e563e853859b6f5d535f5e686c92"],["/2020/08/16/进程,线程,协程对比/index.html","bf15f42baa398856d249c9fe1bcffad2"],["/2020/08/16/闭包和装饰器/index.html","d6453d25a9338c9f563b7c39c8ea241d"],["/2020/08/16/面试总结/index.html","c78b372050795205208ee638ac130a21"],["/2020/08/30/docker网络/index.html","00d3f5c3f8eae972c9afc4229f9607e8"],["/about/index.html","7ed761118d5f7268be4cf00d000d5bbb"],["/archives/2020/08/index.html","631ccbc8c192b5f377f86e620845abba"],["/archives/2020/08/page/2/index.html","45afcaa2235d2ea66d22fe2ba6e16155"],["/archives/2020/08/page/3/index.html","2a75e1ac8c1fc6b505a90cd40c017447"],["/archives/2020/08/page/4/index.html","9b0d1c494111b9863d58ef2bac21cbfc"],["/archives/2020/08/page/5/index.html","1d3f40f78a1d335702867be8bfc67f1e"],["/archives/2020/08/page/6/index.html","31d99118d301caa62433f42bddd8e43f"],["/archives/2020/08/page/7/index.html","9e9539cbb0b381b09120bc2285afac1a"],["/archives/2020/index.html","370676046f4ab6ee9ef36c24ac499cca"],["/archives/2020/page/2/index.html","eda9dd4c8aa8690275188b1878fcc379"],["/archives/2020/page/3/index.html","cf14b90df841ec83c479bb08082e1119"],["/archives/2020/page/4/index.html","72eaf5c4dc9fb6ab2b1c9eb913919ce6"],["/archives/2020/page/5/index.html","5900f61f22606a1935238606b039abe0"],["/archives/2020/page/6/index.html","4ce40ed61d007dfd227828c460a2869d"],["/archives/2020/page/7/index.html","cf9fdf8d8fa095afaa1a354dd6e896b9"],["/archives/index.html","d01da0bd97985a8165eb5d928a647788"],["/archives/page/2/index.html","a6319a4251f8df6dc0de8d4d18fb17ef"],["/archives/page/3/index.html","4223eb51dff095be4b116566ffac0060"],["/archives/page/4/index.html","b1279f75ae6b70972148a2fea856862a"],["/archives/page/5/index.html","d2984c259e6f6ee1f2d285b46c13c478"],["/archives/page/6/index.html","7c8ab2be2a2c8b8486bc10a77e5d131a"],["/archives/page/7/index.html","6649ab6032c44bda7b9ae9f42989b4f1"],["/categories/C语言编程知识/index.html","b27260186b6e13c90fcbb1916e929a6d"],["/categories/Hadoop/index.html","1bfeee2b18508222f3341f057e0684f3"],["/categories/Http知识/index.html","f0d76e1a314a858b965f3c896e52469a"],["/categories/JavaScript/index.html","b563eeda32360d9dbe4c5a0dd56f1c37"],["/categories/Java学习/index.html","f8c7c0eb9b57ff14a032d979d7445bef"],["/categories/Linux/index.html","2e784f0ad5714c60f5b7d0cadf922e78"],["/categories/Linux/常用命令/index.html","4eb982b50df615fdb103da1dc1e1405c"],["/categories/Linux/核心知识/index.html","f0d2e225daa47318fb868243ea445fe4"],["/categories/SQL知识/index.html","c2d26eaa56dda9aa34034747e0090542"],["/categories/docker/index.html","0c233014ada8210b7e87dabd04fd9fe6"],["/categories/git/index.html","87a4333ba4d76e74ef646998e655dbd8"],["/categories/index.html","dc3e43ebb15e90f7d8b9cde893ece7ec"],["/categories/python后端架构/index.html","1f7cd79039e4e7e5e98ed73304337f62"],["/categories/python数据挖掘/index.html","f8e531e88e04c559b05903f1c4460231"],["/categories/python爬虫/index.html","60025066b8e6c0ea9e4b84941b114d6b"],["/categories/python的web框架/index.html","a8f7a40293022287991a3aaec0688691"],["/categories/python编程/index.html","4cae6e885ca51cbcc3687ddbeddeb47f"],["/categories/python编程/page/2/index.html","3c245e74f40bf66b48acffdcf4514f5a"],["/categories/python进阶/index.html","09cc57825caf1ba6056316d1a5fc2ba4"],["/categories/selenium知识/index.html","023bfd012890fa215b728bcf7412f954"],["/categories/个人随感/index.html","31e9927b24a8c973e23ea1b992b78ab7"],["/categories/前端学习/index.html","90c7ef1634bc558806c521ff0ea7dbb6"],["/categories/数据可视化/index.html","4f244617aa426b0d082aee127166eb3a"],["/categories/正则表达式/index.html","4bcd63950cc689a4ba673a0bb2e22c1b"],["/categories/算法/index.html","a3d0c6ad7e64f5f89b50d1599fa005ad"],["/categories/算法/五大经典排序/index.html","7d60bb7e862a1f55f19ea5af7aee88d1"],["/categories/统计学和概率论/index.html","32aa722060c2661b0903d20a8e1f803c"],["/categories/网站知识/index.html","585a559136038f7592baf24a5f15fae2"],["/categories/计算机组成原理/index.html","6a1d471abb9d34aea0f8c0803b7653fa"],["/categories/计算机网络/OSI七层协议/index.html","f7922514a0094569d048018b62a496f6"],["/categories/计算机网络/index.html","9c10e3a7959806169baef9de70b40906"],["/categories/面试经历/index.html","fb7815f2a007c263b5bf95962a8905bf"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","be246af17a470ba9f0e6e5db67c4d90b"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","a26f34a6011bff26da226281d5b6b8e4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","867539f8566cad74a2d5b06db19c099e"],["/page/3/index.html","6f9540340bbedef94d7d0fcbee8985c7"],["/page/4/index.html","5fdc84e84e1f119e8e8dad2cf5aeabd6"],["/page/5/index.html","0f875e249ee4a615f060ef3f4bd7d962"],["/page/6/index.html","83712aa630da2677dbc5b0f73ddadc58"],["/page/7/index.html","6b7c2ff4d081bde3c3cc8574efef6f62"],["/sw-register.js","fa1d377483c215e9ef1a3f90e3f3e423"],["/tags/Cookie和Session/index.html","a800741fbab593df8396f1b8ed1bd9fa"],["/tags/Django/index.html","1a5eb0779a1b7e026f6ff89b87eb9573"],["/tags/Django部署/index.html","39b7ad07542d1b5e77420948ab74acce"],["/tags/Django重定向原文/index.html","79276937f9e2f4146a63465040cb12b8"],["/tags/GIL锁/index.html","d8c8eafe1a26a3198366030f7a9360ac"],["/tags/Hadoop介绍/index.html","009ad8426e7c22fe6ceeb049d96ad97c"],["/tags/Java基本知识点/index.html","ea4b26722ec0b2a3268bb9b83b0e785c"],["/tags/LinuxLiunx命令/index.html","9f43b3dbdbe45515611084a04d5ab72c"],["/tags/Linux知识/index.html","53b8f5d5891e37cc9723716b4e8d7c4e"],["/tags/ORM/index.html","92530299ea0d60eec4524c7ad965973b"],["/tags/SQL函数/index.html","1f861eacb31c7aef8fc2efafc2122f84"],["/tags/SQL命令/index.html","266b0ea056e53c66b41ad164dc8d5064"],["/tags/SQL概念/index.html","ac4baacecbcf4717116cb727434a7c31"],["/tags/SQL调优/index.html","15c26099f28560aadacd237b1484a298"],["/tags/Void-知识点/index.html","393e9ebd0519aded68ea76aaf15b1a90"],["/tags/Vue框架/index.html","04cdc2620b39cb8bd0806450c5f169fb"],["/tags/docker知识/index.html","f6707fb742c8647b384f8239505a3a2f"],["/tags/flask/index.html","62f10cf5d9b8174bae2ae46c866cf4a9"],["/tags/git命令/index.html","f814977ab518895095758f48c8ef4f55"],["/tags/git配置/index.html","dbbdcc30c0c660f8d7c18b4c1ff33e44"],["/tags/index.html","4b4f5d2d92dd9da537c75999e4e8c01e"],["/tags/js知识/index.html","545fe6bac7adcf0addaa64cb569d5ca9"],["/tags/pandas函数/index.html","87ea358ab9bdde1e2a51f712fe02d993"],["/tags/python编译器/index.html","5cf134d60104d22bfb30ec5b583f2e95"],["/tags/scrapy框架/index.html","a885908874707dfd223518bad6a11597"],["/tags/selenium/index.html","3929b0a8529794293c77d38b1555d6d2"],["/tags/上下文管理器/index.html","22ea8d8720e9cce7783df46c747d255b"],["/tags/函数补充/index.html","c151e7efbbe201a662030f2d4f3d6715"],["/tags/协程知识/index.html","3438fdb297849c5c816d01203ed94cc9"],["/tags/基本知识点/index.html","02a2f3ce360aa35ea9b7bf463067ebc5"],["/tags/底层原理/index.html","80d7e0d13d93ec906f790caf1a8049cd"],["/tags/扩展知识/index.html","d0548fe8132eb648c0af78efebafe32f"],["/tags/排序算法/index.html","006a01f14479e753cef03d6ffd8f68f1"],["/tags/数学知识/index.html","1a9f2bc4903b02955b4756d8c6f08937"],["/tags/数据可视化概念/index.html","5680ea9885e14960d994e0367a1d0653"],["/tags/架构演进/index.html","afc1a1417ac2e63edfedf1b03d8eeef7"],["/tags/核心模块/index.html","b35046d508fe1d3b2fb1a3c049c2f69c"],["/tags/正则/index.html","62e1bfafdbf31f045a68a8b435fa1b0c"],["/tags/爬虫实践/index.html","f56044430c81e9358645f6991f40e61f"],["/tags/类和模块/index.html","df4bc599e8bceb87f8a53a4a33ae4a61"],["/tags/类的知识/index.html","491a5f1fa9c53920f7202c38b6270f4d"],["/tags/线程概念/index.html","af541cf00526ae2655ecaea6dfe8c900"],["/tags/网站的基本概念/index.html","2ea9f8f9e9687471949336cecfa42177"],["/tags/网络编程/index.html","75f55caea929d24014355ae1ca1993ea"],["/tags/装饰器/index.html","40c652111155bc2b801898939fe126f9"],["/tags/计算机知识/index.html","0710f8f03785c93544bd7eea0fbf0a4a"],["/tags/计算机网络知识/index.html","dd6b0bd3d16ddaaa859c04f3610df035"],["/tags/语音识别/index.html","f894dd86410a0348995cf5d31eafaa16"],["/tags/进程-线程-协程总结/index.html","c394326a6670845aa6e3054a9b267582"],["/tags/进程概念/index.html","9793714888eb55de05bfc4e62b6f33e7"],["/tags/面向对象编程/index.html","1e5c387455b7f6d43f3aff5bfe562516"],["/tags/面试总结/index.html","6009dc798a9919fdf4dc61982bf53179"]];
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

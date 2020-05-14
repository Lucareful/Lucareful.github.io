/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","2979f1f8c6496ea3f7de63f820762f43"],["/2019/06/26/four/index.html","a822e30cbe34f24f9675fb5f9e3d861a"],["/2019/06/26/python解释器介绍/index.html","cfa88ac2bcb7cf2d56acad76c8834b42"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","887cbb1d1f95856348aae91c97d69208"],["/2019/07/06/网站概念/index.html","d218f72c68432e4b771b1416679e00f7"],["/2019/07/11/数据可视化笔记/index.html","6fc36d5893e07e768e48cfc0991deb2f"],["/2019/07/12/语音识别/index.html","de74e1d49c4b915c545be8cb39a870f8"],["/2019/07/14/hadoop基本概念介绍/index.html","8248615985a8b030a68019f6d15395ed"],["/2019/07/14/数据科学笔记/index.html","0058727e5bbb35e5ee6cda42bf1c1413"],["/2019/07/22/python爬虫/index.html","dfd5674e44cae078319f3f6257d173d2"],["/2019/08/25/pandas函数/index.html","70ec60ddb2c1cb51230a60cf880dfbc3"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","4decf2c57db1912a9514a805d8ddfa25"],["/2019/09/30/C 语言中 void 详解及应用/index.html","6d21b0da8f75eb9bbcb37acac7895b68"],["/2019/09/30/第一次面试总结/index.html","eaa7958015ee7ab00bfe71a0bc444c0e"],["/2019/10/07/django之url规则/index.html","ee7be78fdeab9cdcbfc93a079539dfcb"],["/2019/10/07/django配置初启/index.html","c3bc9c02b1fab9f2d9460452d5eac100"],["/2019/10/13/C语言笔记1/index.html","1be3f38ba0c1853a9b4c74ad5c295260"],["/2019/10/13/C语言笔记2/index.html","a82f27193058d3111e6c7c2f89cc88f4"],["/2019/10/19/C语言打包技艺/index.html","1a4b8d5ce3cac6c34d1b79627d135a4c"],["/2019/10/22/c语言笔记3/index.html","eff38ee42a999661e9fef559e4b3c1e4"],["/2019/10/27/IP代理池/index.html","c3fd9b98ef47e7101e8f2a43b7cbec02"],["/2019/10/28/git命令/index.html","14e31237bf9e3e29cdc75634df358f13"],["/2019/10/31/斗鱼弹幕抓取/index.html","0f854f6643c62b0b93306e5ec485d2e7"],["/2019/11/13/多线程/index.html","f3878f7db19cdb7692f8f1b35d7aafe9"],["/2019/11/14/多进程/index.html","41ee3338d14b14ab6cd41442fd09065b"],["/2019/11/15/python类的私有属性和私有方法/index.html","71fb70c1c017e5ac975ba3a314691b3a"],["/2019/11/16/协程/index.html","88cc66624ee1f4525ee5ac569a8f8b11"],["/2019/11/16/进程,线程,协程对比/index.html","72ad366900c86f9ffb52486d95211a4f"],["/2019/11/17/GIL锁/index.html","5ae4a1f05d631b2aa919007972897c93"],["/2019/11/17/闭包和装饰器/index.html","29346b81eff24290129a747fd546ab2e"],["/2019/11/19/Python进阶知识点/index.html","f22c18006ca69a4ec04c5587ab64be54"],["/2019/11/22/京东全网爬虫/index.html","77b5067517b3e57b65bd6516e3cb9f0d"],["/2019/11/23/JavaScript的简介和基本知识/index.html","0bf848cef9fb0ce13e2471a05b50bc4e"],["/2019/12/04/README/index.html","1898ea50924cd3af2dc36705e21ab1bf"],["/2019/12/04/java简介/index.html","949543052ca8e6522d9ba35627b31694"],["/2019/12/11/java基本知识/index.html","3e8423b9f5b8b5702be1a9e8ecaeab94"],["/2019/12/17/Java面向对象/index.html","977522309c861a140e52812b1ef6743d"],["/2019/12/19/面试总结/index.html","6d025a18705dd9941b181cdf236368cc"],["/2019/12/20/SQL性能调优/index.html","08dd8fcd797d53cfcbc9aca841d18009"],["/2019/12/26/vue框架介绍/index.html","af83a05ed6c298986b4dc2d11be0e9c1"],["/2020/01/02/12306自动抢票/index.html","89faff32cbb0b4464656433297ee0761"],["/2020/02/24/flask框架/index.html","767919d65e8773a9ecdd5a7bbbb1552b"],["/2020/02/28/docker以及相关概念介绍/index.html","138e87bf5fd9cfa2fae656abf71fe1be"],["/2020/04/05/python数据类型的底层实现/index.html","e222d3c4423cd01ff3f72d4c50d17021"],["/2020/04/27/查看mysql连接情况/index.html","ad5fc245278ce4aa7bb0b8a65399e999"],["/2020/05/02/Linux操作系统核心知识/index.html","76f2c3f35a13bfa0b76efa78acc00b53"],["/2020/05/02/计算机网络/index.html","94b7a99455a767ec94bacc0d847ca000"],["/2020/05/06/Linux操作系统（二）/index.html","7234370e93b48c58d7325dccec4bbfbe"],["/2020/05/14/函数补充/index.html","1fe799153f1823157df5faaef4a7ddb2"],["/about/index.html","e9e8a03539f0c3409c701d6ba0a3ad77"],["/archives/2019/06/index.html","b2a2f2d0873763763aeec52e13d1a3cd"],["/archives/2019/07/index.html","9ba03242d659b0587cae0a1320afe996"],["/archives/2019/08/index.html","2a7150369910ded1f9acc5ad0815b53b"],["/archives/2019/09/index.html","1997891d6299797927ca71145b44ed62"],["/archives/2019/10/index.html","f894458ff01e840723d059d1becdaea0"],["/archives/2019/11/index.html","56c5c2bf7a6c01687024ae0832cbb7f8"],["/archives/2019/12/index.html","75f1f3f3dcdcd53849b4c2f3e2e4bfbe"],["/archives/2019/index.html","56dc71ad2fdcf590d0dad6b046494d53"],["/archives/2019/page/2/index.html","44fdb0d91edd9d7fb7c8ae44a188baa6"],["/archives/2019/page/3/index.html","06b5b26e4d5dde2f32f531638b5c931c"],["/archives/2019/page/4/index.html","31bfc51bfdcedfd9e200f9a550380ef3"],["/archives/2020/01/index.html","6177aae60bd14ffeaf6ecbe24ec5c7b7"],["/archives/2020/02/index.html","45e4770dda1f3aeb8ca3a33f3c7a7180"],["/archives/2020/04/index.html","76ba8a2e94648f0b3f7a9a0deb500946"],["/archives/2020/05/index.html","220dfb810c1b6f62471a94293ae1e827"],["/archives/2020/index.html","43f4b8ab0bf41f4d7558c85212e6908d"],["/archives/index.html","d465fc5c69d6e22408e76de6091186b2"],["/archives/page/2/index.html","603e166b1e8cac65b4f634c039ce10fb"],["/archives/page/3/index.html","a59937d9dc6fb4ee4aac22b34d308ef2"],["/archives/page/4/index.html","e59d076764af8b273d614960338a2f22"],["/archives/page/5/index.html","451f78fa822fd5926bd7bc3d9eee938a"],["/categories/C语言编程知识/index.html","ee7604b67d8d43dea29ef1b52406a2ef"],["/categories/Hadoop/index.html","78f911338f322e34dcc194a23f70ebe4"],["/categories/JavaScript/index.html","017a7c6e8b61e07fbab3340322bbecd1"],["/categories/Java学习/index.html","3ad0ef9a8d5e4196291c2b64f0611eaa"],["/categories/Linux/index.html","bb941fa57c074f71930f2172b9d66e6d"],["/categories/Linux/常用命令/index.html","df643dd7a194b6408ae06c464c9d368a"],["/categories/Linux/核心知识/index.html","22ced7c251d049a6fe0cc869081aa618"],["/categories/SQL知识/index.html","144ff42a1dfa5c9f8054dccb3f9f3e45"],["/categories/docker/index.html","98b42efddf7f4a55b53d875ac9250a3e"],["/categories/git/index.html","be5e7bb50076e8c370a7643fbe7ab2ab"],["/categories/index.html","8a12ee6bb67b0309c2759d1dc8da4274"],["/categories/python数据挖掘/index.html","71352b08802efe0331c1318f72df3390"],["/categories/python爬虫/index.html","126199fd6c7cdf738995f46d950777a6"],["/categories/python的web框架/index.html","dfcb23e1241da8e916b228fc18ccfb08"],["/categories/python编程/index.html","a58326747f8e0c815dc80906d32f00f0"],["/categories/python编程/page/2/index.html","7c102f584f2ae1d8b0f139f23bf9ffe8"],["/categories/python进阶/index.html","d6c07bc29ce1018c990718d76a41d141"],["/categories/selenium知识/index.html","1607541709d55547ba5fa96716731b3f"],["/categories/个人随感/index.html","7f05d059ec0024aebed9b05f078b1a37"],["/categories/前端学习/index.html","877b2c1beb8e494630555ca3189718e9"],["/categories/数据可视化/index.html","ebc8457a5c1d4239fa69fb3ed5559faa"],["/categories/正则表达式/index.html","b405af665e6127c67c68179332f1b256"],["/categories/算法/index.html","3ed0e1efe0781d6cfd3032ddb6eddb3f"],["/categories/算法/五大经典排序/index.html","b8c1611223e1d19f9fd471ddcdfc9d2f"],["/categories/统计学和概率论/index.html","f377e19dbe9d6be8203a5c76581bcd2d"],["/categories/网站知识/index.html","a1a81282d70572d44edd834a62d2d0fe"],["/categories/计算机组成原理/index.html","b03d4db6daad4823da758e6d5489047f"],["/categories/计算机网络/OSI七层协议/index.html","d40c8748de0d0b983999b68ff8fe0fb2"],["/categories/计算机网络/index.html","b9313b8f537deeb5d61ab8a3c801e85b"],["/categories/面试经历/index.html","307cbfb4388c2a1f8cee7824a1652276"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","8d56529590616fb76b6099c400c4ff8a"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","aacbf7990ecd14ff02b7c4fd0b7d2c32"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0330cb313559c759ab4c8c4862336da2"],["/page/3/index.html","2b6078feffda6a44ae7026e82bdb64e8"],["/page/4/index.html","337b8f6501e73457e501901d34e00574"],["/page/5/index.html","c2099f4f3f492e76ee9f0656efeca798"],["/sw-register.js","9597f0701b15cc59c4e9b4f44100019e"],["/tags/Django/index.html","de1d1bb69bed615fb76f0c0c4886b8f4"],["/tags/GIL锁/index.html","c51ba547fc66926ebc3e84b25cf89f50"],["/tags/Hadoop介绍/index.html","ef34972ae3cd28f1e3151d83f58d3b77"],["/tags/Java基本知识点/index.html","2b1d9b6da68a6d1595644c20820cdef2"],["/tags/LinuxLiunx命令/index.html","2b9368256d4374d71b1d0b511cc2d679"],["/tags/Linux知识/index.html","1c00e2867083ae1ffd353f1f6281644c"],["/tags/SQL命令/index.html","12cc9892d82882b18ddcd4bc12501614"],["/tags/SQL调优/index.html","cf7bb1c8ba8522bfdebfa49ad0917065"],["/tags/Void-知识点/index.html","3dc59b91d84f66e90fbcb9dc02eb8ae1"],["/tags/Vue框架/index.html","643eae051383adaa9b1b54fb4e0e2705"],["/tags/docker知识/index.html","03d93ed649a9386f2ea60fc10fbeec8a"],["/tags/flask/index.html","8f15ef843127d7005897d1d3d6a45bcd"],["/tags/git命令/index.html","4643303a971c78f69d3653171f74d51a"],["/tags/index.html","75b99643d198979b30874cee81248386"],["/tags/js知识/index.html","d6b0998ae5fe551b4201022a55631cdf"],["/tags/pandas函数/index.html","3fce59fdb7f3f17e5ef4f6510316d063"],["/tags/python编译器/index.html","ec2c7cbdf0dba088cf6587760810a383"],["/tags/scrapy框架/index.html","3097647151c4950c535b668af1dec7da"],["/tags/selenium/index.html","5ef3c22ec72a5342e03d2c5bdc0b4ea0"],["/tags/函数补充/index.html","49363098802c0c6fcaef94d47c17135c"],["/tags/协程知识/index.html","3847b0681c8283025c8ba679aba5a251"],["/tags/基本知识点/index.html","170b00b8b2194a99f65ed9b8e9f4c539"],["/tags/底层原理/index.html","f92c31da54bf1c1dd370c56ce7c6e754"],["/tags/扩展知识/index.html","bc482dc3c726a25d46f3059876f2f556"],["/tags/排序算法/index.html","621583e55c35243d75d636b5f9c68025"],["/tags/数学知识/index.html","c578ab815f725276dc85bfb2854a2598"],["/tags/数据可视化概念/index.html","8d8b4996ef29ceaed1e70cd6b81786d0"],["/tags/正则/index.html","a441b12a7b83da1efbee9dc404ac5b24"],["/tags/爬虫实践/index.html","334b34a88c4134b48fb043ddc2c6b4b1"],["/tags/线程概念/index.html","741dc83aaa8782b361878a3a5cbce491"],["/tags/网站的基本概念/index.html","34cb5be50511078190986908caaa8395"],["/tags/网络编程/index.html","195f1d2536044e5a51e872b879edb920"],["/tags/装饰器/index.html","10b59be9ada515ebf5fb61a50d90c59c"],["/tags/计算机知识/index.html","8c8e5361f7972425c89f1317dc8b90d5"],["/tags/计算机网络知识/index.html","c95bfe9019e2f6404155c07d762f4cec"],["/tags/语音识别/index.html","640270be5ac9d7429a24de32cd783d96"],["/tags/进程-线程-协程总结/index.html","3bb6fca38c6c50c2fdf59abdcf52dc7e"],["/tags/进程概念/index.html","1a566e995c4262c174b74ca71b881f92"],["/tags/进阶知识点/index.html","fe07c1cf653e6110d439a550b1e1147f"],["/tags/面向对象编程/index.html","d77ef062ec098dab0a174a3fe8f9d428"],["/tags/面试总结/index.html","087726346778041cfff52d11a1867c50"]];
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

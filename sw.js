/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","1a05dc589c6439fb57755cddcf15ea83"],["/2019/06/26/four/index.html","48ba6f2ca7ce01400d2639ec97b1e63e"],["/2019/06/26/python解释器介绍/index.html","e98ecd92d05039b68d8378fa24fd1301"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","727b37a6690ceee2c4f520e6a2855ea3"],["/2019/07/06/网站概念/index.html","50c7b08d93ecb0712f426d031ba955be"],["/2019/07/11/数据可视化笔记/index.html","0ad66929b1f2a2d68d163ec394e33fb0"],["/2019/07/12/语音识别/index.html","24c8591bf540c2ee89e9e21938441ae0"],["/2019/07/14/hadoop基本概念介绍/index.html","3916e84eaecac77d02c8e48b7ec7f20b"],["/2019/07/14/数据科学笔记/index.html","39185166bc5d40d762f949ea272723f9"],["/2019/07/22/python爬虫/index.html","c65ae661afc0677cf6683d5a295e6cda"],["/2019/08/25/pandas函数/index.html","d587365fc21eccfd34225cc54d2c675c"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","f3780966121e9ebba37763654d2d94da"],["/2019/09/30/C 语言中 void 详解及应用/index.html","1516e19f30f4cb99c16b8b535ef1c645"],["/2019/09/30/第一次面试总结/index.html","138fb731eb9f4bed0b3dc12e160ed505"],["/2019/10/07/django之url规则/index.html","ca9f8d2cb2511db2c8335a19ea64a17a"],["/2019/10/07/django配置初启/index.html","cecb5a5948c0871bd7536af60defab43"],["/2019/10/13/C语言笔记1/index.html","0ebc78047622a68e64d882b12de55305"],["/2019/10/13/C语言笔记2/index.html","9e139a12beee8b289bf7c6cc0461058c"],["/2019/10/19/C语言打包技艺/index.html","7fb7bf2870e868749f392afc8900a6f3"],["/2019/10/22/c语言笔记3/index.html","79785606b61a383998cadc68d66e0c87"],["/2019/10/27/IP代理池/index.html","2c3b9cdd22771bd9c40ddebfe1ca0f47"],["/2019/10/28/git命令/index.html","8b8ff0d3cbbea6133e246c8a1586ab61"],["/2019/10/31/斗鱼弹幕抓取/index.html","d89fecab5c98c3a4133555afbe8c4656"],["/2019/11/13/多线程/index.html","279880eee9b5a9152381b9d1a5dfd81c"],["/2019/11/14/多进程/index.html","9941c3852ebc07fe078d00002cc23702"],["/2019/11/15/python类的私有属性和私有方法/index.html","7495381c6478fc7d4bd7dc3a12ad4c45"],["/2019/11/16/协程/index.html","c3fddd6dad07a8931ad537eb9b1d79fd"],["/2019/11/16/进程,线程,协程对比/index.html","db77c3703e86bfaae75a67e35739ba3c"],["/2019/11/17/GIL锁/index.html","c379d18412dcec3b40fc07c73177ce70"],["/2019/11/17/闭包和装饰器/index.html","955e3cbcf8f85a168a3df5cbe917b6ad"],["/2019/11/19/Python进阶知识点/index.html","fc5119471631d97916d0765eea75b79b"],["/2019/11/22/京东全网爬虫/index.html","8407fd1d45793524ea34bc13ba4ba4ce"],["/2019/11/23/JavaScript的简介和基本知识/index.html","429e60090a03919393cc583db06dbb0a"],["/2019/12/04/README/index.html","548ff145e451ad43f644a93e2a1b9659"],["/2019/12/04/java简介/index.html","9f21e919824d4678c042a03471fdd766"],["/2019/12/11/java基本知识/index.html","b291df5805198c0378da01fb3349a51a"],["/2019/12/17/Java面向对象/index.html","72f86968862e688f34a886f1c2c4e431"],["/2019/12/19/面试总结/index.html","34da4c0f7425cbf4eda4bd9e82fec046"],["/2019/12/20/SQL性能调优/index.html","b70012cfb052d22c9290745eb4915333"],["/2019/12/26/vue框架介绍/index.html","71456f24fc431c2accf2a15d47f3673b"],["/2020/01/02/12306自动抢票/index.html","ae3fabc582336f358ff534c71f24799f"],["/2020/02/24/flask框架/index.html","25aeb5ae7464ba42c8bfa646ae050671"],["/2020/02/28/docker以及相关概念介绍/index.html","3a41a331629e1dad9c9cc15695db8999"],["/2020/04/05/python数据类型的底层实现/index.html","2b325250c23db44dce1b6e7f86015bca"],["/2020/04/27/查看mysql连接情况/index.html","deef833f78b33d8b6a236f50df52e8d8"],["/2020/05/02/Linux操作系统核心知识/index.html","f6810cb3c1509f95f5a64c3a1fb34a61"],["/2020/05/02/计算机网络/index.html","91a3faac23309ab284ca56621c4ebf5c"],["/2020/05/06/Linux操作系统（二）/index.html","50a53b18e087be43b9283d451c857a87"],["/2020/05/14/函数补充/index.html","ea56e720f761997a32605bafe3b553c7"],["/2020/05/21/核心模块的介绍/index.html","c3edbde6e49960f4cb4df81688a9da01"],["/2020/05/21/高阶函数的定义/index.html","aeed495049f9969bb80d115cc69c4d22"],["/about/index.html","d1877934498dbf48677db5189cd0a41b"],["/archives/2019/06/index.html","611e9f58ba4de6a48e82711ab4993d07"],["/archives/2019/07/index.html","faae5c7befb22c5d4c8c35dad9e06f8c"],["/archives/2019/08/index.html","60df8eb81ef480535811b957039fed71"],["/archives/2019/09/index.html","bec1420cc43bdebacb8db228acfff8a5"],["/archives/2019/10/index.html","59f399e6b2e9f94a395da3bd5e28f1a2"],["/archives/2019/11/index.html","3bebd5a8b69e9f8fd92319b945c9609b"],["/archives/2019/12/index.html","8a134d4554b92dc7f051727548683591"],["/archives/2019/index.html","c0517b0536c1b1b4d23d332e48e92c60"],["/archives/2019/page/2/index.html","fecc148a025ee0f917f8c74a66e841de"],["/archives/2019/page/3/index.html","057e2c53995b072ffdf040af5135945d"],["/archives/2019/page/4/index.html","e430567c0b9a935e8f858c393f32ef1d"],["/archives/2020/01/index.html","2cd7f98de9b24aa5ecdfb42aa0b44aa4"],["/archives/2020/02/index.html","0bd2acb8e127c338276457edf8672490"],["/archives/2020/04/index.html","cb5fe5dc791edfae59893eb82e325801"],["/archives/2020/05/index.html","b0cf2e6c86cf9d6a5acc1e83f70c9904"],["/archives/2020/index.html","cf9552273d5006a1c2e68bdd4b1b63c2"],["/archives/2020/page/2/index.html","058c74985faa0fc2a43bf9346b4f9455"],["/archives/index.html","56e88edc2a629244f93bceae29a7c101"],["/archives/page/2/index.html","621195e1ba5ae177b356a046f102dd1f"],["/archives/page/3/index.html","0d7b7bf0489c1c816bd3200c8e391b5b"],["/archives/page/4/index.html","3e4d028edabef410b682ede070ccff43"],["/archives/page/5/index.html","5ab938389b58f5754ecff9e7050990e4"],["/archives/page/6/index.html","7613ac07060309d51a4c87e8480ce91d"],["/categories/C语言编程知识/index.html","5dd18adc1055636cbe360923526e1a67"],["/categories/Hadoop/index.html","69a30119e0265b30949c157a709f30e5"],["/categories/JavaScript/index.html","8835a3d4e923feadabee65f3c1eeca31"],["/categories/Java学习/index.html","5dbb055542f33ee4dd2502e774b6d9d8"],["/categories/Linux/index.html","c639b4e4b6cb63b5008dde8ebbbc1c76"],["/categories/Linux/常用命令/index.html","818eafc82d3613321515a53fde2dca38"],["/categories/Linux/核心知识/index.html","7c01b14281b9ccd5d720447aa1a98dca"],["/categories/SQL知识/index.html","87952c9c17faf4713bb5e1f9b7653931"],["/categories/docker/index.html","8cdef917c9c9bdfc19b317b05274ff4f"],["/categories/git/index.html","f005449095c181bc328771d39ad5fb4f"],["/categories/index.html","6f928f8d1c717213c454fdf53aa4e976"],["/categories/python数据挖掘/index.html","cde42ccad50cfd5646d6ab1e3013fee7"],["/categories/python爬虫/index.html","41cac1f4e01a8b0cd3549ff576e46520"],["/categories/python的web框架/index.html","49bae7bd02304f684702e0320a85d112"],["/categories/python编程/index.html","ca2e380ca010e46e656cbebc2b177cdb"],["/categories/python编程/page/2/index.html","bc7868b6abfb8f8a613de7e93c5d2eef"],["/categories/python进阶/index.html","e5a2ffa946c6447720fa340a82c8fa68"],["/categories/selenium知识/index.html","9448a8e1a925a00d32160291cf020267"],["/categories/个人随感/index.html","bc8aa40eb7b1656efb729f7d7871eac0"],["/categories/前端学习/index.html","ec30e72013f86ea54753a16976118d0b"],["/categories/数据可视化/index.html","ddb75cc6b3896a9c29836ea82064130d"],["/categories/正则表达式/index.html","d2fe86e8dcd0639b157c6913f97c1ed0"],["/categories/算法/index.html","f3aacd139b694827aeb018d8d785e2fb"],["/categories/算法/五大经典排序/index.html","adefdf8001212abb7befa2d3aa49aa53"],["/categories/统计学和概率论/index.html","f0086138a3830700d9031df0686f2240"],["/categories/网站知识/index.html","a60837d0c6fe182769d1e8af513fb47e"],["/categories/计算机组成原理/index.html","1f454ffa99eaba8d1df3cb7397c57ae1"],["/categories/计算机网络/OSI七层协议/index.html","769932277133fd2ae22a5ab4c4b0b2fd"],["/categories/计算机网络/index.html","f5761e1d2ef3bbd26c6702c0aae62082"],["/categories/面试经历/index.html","a5c3b2fc4730ae51370a6db54eee8da8"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1a0f2b6f3ee2f81e894413b2b3d41920"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","78db3edde8a201e35c395ff74f01d556"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","19a58bec1aa42ef7f198de5002ebe63e"],["/page/3/index.html","0317992461cb7bb61043624e6fdfc02a"],["/page/4/index.html","52a3b2b373480ca415c3dbf99f92c916"],["/page/5/index.html","fa9de71ae1e573a1d035ca8c2d8c0b46"],["/page/6/index.html","9d668050cb8ccbe2563df59bcfea2bc7"],["/sw-register.js","3522573ec0bbbaccf8cee21c64258e80"],["/tags/Django/index.html","c1d2e6567f664b779cd8a8b8050d6e41"],["/tags/GIL锁/index.html","2b3848cd14b5760fd6dfc8dda190ffc0"],["/tags/Hadoop介绍/index.html","d90f97993ca189f654273484ab18b8de"],["/tags/Java基本知识点/index.html","302c1960f12aea3a62c0900e63092699"],["/tags/LinuxLiunx命令/index.html","3502affab6d6c7a4b13c9fd559a2f27c"],["/tags/Linux知识/index.html","d829804804041a36060ff8719113581e"],["/tags/SQL命令/index.html","1f6a49ac3de841966d47eaa646891311"],["/tags/SQL调优/index.html","3215a6ac90db2e529fb8a44d86374fd4"],["/tags/Void-知识点/index.html","eb280d8fce5a6206f30be6c90c6e00ad"],["/tags/Vue框架/index.html","1c76c4ec7ac3011dc118cfad13b89f76"],["/tags/docker知识/index.html","27a152ecafb7fb0d1d49337e0962d7f7"],["/tags/flask/index.html","68eed00e5effd46d807dfa0c0e8653cf"],["/tags/git命令/index.html","6a3bf5952e9e298e2edd6896dcda0a87"],["/tags/index.html","9f3bfc85e893815527258af1c8e11042"],["/tags/js知识/index.html","f46d26dafc5cc9e9bdde7bb77c3a443d"],["/tags/pandas函数/index.html","9abdd3e44ca01957d4e98d0bd37c4813"],["/tags/python编译器/index.html","a204c21d0cccee52def6326f256f046e"],["/tags/scrapy框架/index.html","736e677a34a63f863e0bbf56fc7c4456"],["/tags/selenium/index.html","7213c24e8e014d6a91273cb4e5b9de5f"],["/tags/函数补充/index.html","90e343562a03357d35e6e8dee917dc9f"],["/tags/协程知识/index.html","dddfe622c5775c0d92d2cee48a270009"],["/tags/基本知识点/index.html","4bce9307e93ea2cb9637afa5728f4a63"],["/tags/底层原理/index.html","6c76a2349dbb0a096c571ecb0d006ee7"],["/tags/扩展知识/index.html","c45b40b95329cf50b866e58b76c1cb42"],["/tags/排序算法/index.html","bb06c3a057a2df0b99e5f3bb3045aabd"],["/tags/数学知识/index.html","4e51956033d8fd80cd4d4a9d049685d4"],["/tags/数据可视化概念/index.html","8901643d9edbabc416e96f09acf4bf55"],["/tags/核心模块/index.html","4364794f7e149e62871db241897b205f"],["/tags/正则/index.html","9e5ee6f047a0f10bcab31dcd7f1c1708"],["/tags/爬虫实践/index.html","1cea585ca22026d00d479c88cf7ecf5b"],["/tags/线程概念/index.html","404a7de1045b62abbe6e2cbfaf117e54"],["/tags/网站的基本概念/index.html","488d5544fbf30bcb10090a2ed8b569b2"],["/tags/网络编程/index.html","069d7d9ac5ac17f7d79f63fba92e2b75"],["/tags/装饰器/index.html","a077ca4d564d9887aa82521e2f47739a"],["/tags/计算机知识/index.html","99322dd9e4d0ae3f80d1680a2f15fdc5"],["/tags/计算机网络知识/index.html","9336da4a14b6a073d89946ae4ec611e0"],["/tags/语音识别/index.html","4e9bdb050f4ccb8a8b9f7cac0ff76e5a"],["/tags/进程-线程-协程总结/index.html","1b311bc560853cfbdedd2bc5f406d007"],["/tags/进程概念/index.html","75385dacfee04aad3bbd14f3f11d40e5"],["/tags/进阶知识点/index.html","854bf77514e29e5a54d2b76a01b13156"],["/tags/面向对象编程/index.html","1abfe74613de9937e2cd151829b7494f"],["/tags/面试总结/index.html","249b2d4b99e7311362dd83e015952090"]];
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

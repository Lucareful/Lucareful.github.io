/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Liunx常用命令/index.html","94361df696387ac15aae6e62fee9a510"],["/2019/06/26/four/index.html","bc414916570d3015ce9127f56d919b1d"],["/2019/06/26/python解释器介绍/index.html","2b2c5e444f1aafbffa254fbd7f564090"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","d00c9dc0a04956f9a11c52a11b57d2ca"],["/2019/07/06/网站概念/index.html","7058d539858d6848999a9081dcf17645"],["/2019/07/11/数据可视化笔记/index.html","10009a52b0401ed6c52b6c9c7b81255b"],["/2019/07/12/语音识别/index.html","78ac7b5ee5962f778c4941ad455ce9d5"],["/2019/07/14/hadoop基本概念介绍/index.html","a92347661dd2fc1e551c6bfa592b7df7"],["/2019/07/14/数据科学笔记/index.html","e789d665952abc8fffbdc136dd71f420"],["/2019/07/22/python爬虫/index.html","d9571d37250798da96b6f281819d9260"],["/2019/08/25/pandas函数/index.html","423b8cc5a5105382c708b1a931f9f381"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","f59a299071fdabddce87b04b7e2066c4"],["/2019/09/30/C 语言中 void 详解及应用/index.html","8379f6f32ad0ef0cc4c3928bdca296cc"],["/2019/09/30/第一次面试总结/index.html","9485b67a2eeb92adefe61ec3d712e890"],["/2019/10/07/django之url规则/index.html","5cbca228b4c50fc262440129a806f7a2"],["/2019/10/07/django配置初启/index.html","eaca7de75e51725bb388f88c0d7a8d72"],["/2019/10/13/C语言笔记1/index.html","d5b94984af80688bd8780ec994423b31"],["/2019/10/13/C语言笔记2/index.html","ab19e9ec4276b4c8444190521de3f420"],["/2019/10/19/C语言打包技艺/index.html","8beb9fbde3fb1b20b219acf5e07349ec"],["/2019/10/22/c语言笔记3/index.html","01e88f6533964fb16e9376204900a350"],["/2019/10/27/IP代理池/index.html","c42e921a73f65ac1e177e2d2e610a761"],["/2019/10/28/git命令/index.html","55fd1e7a795e1663041c7d96d2a9e7b0"],["/2019/10/31/斗鱼弹幕抓取/index.html","a367b99922cc9785adc87eb5b6675e35"],["/2019/11/13/多线程/index.html","c60135e1e0ab4a1fb8573d79a018361f"],["/2019/11/14/多进程/index.html","5de81bddbb9f4ecc14a6b046fc5280f1"],["/2019/11/15/python类的私有属性和私有方法/index.html","034f5e203016fd60f062a5b066505921"],["/2019/11/16/协程/index.html","600d543abc6e8c70648d3cffcedee8f6"],["/2019/11/16/进程,线程,协程对比/index.html","6bd934bc96fa787e95858d28590973ed"],["/2019/11/17/GIL锁/index.html","0f59d5d0b91ed95d249666f2d27e9b43"],["/2019/11/17/闭包和装饰器/index.html","fca8cf99621a777a3063efc4517eae0a"],["/2019/11/19/Python进阶知识点/index.html","02a112a67082d2e493430a8746d098da"],["/2019/11/22/京东全网爬虫/index.html","925f05fc89500b0834a6cc9e47c67855"],["/2019/11/23/JavaScript的简介和基本知识/index.html","bbd3a0898945634f13e82c9dea79f8f9"],["/2019/12/04/README/index.html","7f70fa1e350ab07b637c721eb879f985"],["/2019/12/04/java简介/index.html","f012a3054ccd6d096999d0f2d6384599"],["/2019/12/11/java基本知识/index.html","1ab583eb257ad6ebf7a900483f87d2f8"],["/2019/12/17/Java面向对象/index.html","fde3071060fe78b71bc1c003dccb9d3b"],["/2019/12/19/面试总结/index.html","15b8bfed2e69c8853350e0708fd8888e"],["/2019/12/20/SQL性能调优/index.html","706867c0e8292fedd4586c080d1921ba"],["/2019/12/26/vue框架介绍/index.html","5dc1b718563ec0dd8915307032cd78d0"],["/2020/01/02/12306自动抢票/index.html","06cdfb87578ca13ed0472ccfd91dee7c"],["/2020/02/24/flask框架/index.html","c407c74bea5dbb9d2251551752b86162"],["/2020/02/28/docker以及相关概念介绍/index.html","8f7b137bbb6809062a4d9187fca55107"],["/2020/04/05/python数据类型的底层实现/index.html","28a1ad284236937a0bb372770cd46e17"],["/2020/04/27/查看mysql连接情况/index.html","039a11409fb551eb5403aefc336d915f"],["/2020/05/02/Liunx操作系统核心知识/index.html","66efe088532078785763852958ad4ada"],["/2020/05/02/计算机网络/index.html","a2e74d065473e75fc3114442b135eb13"],["/about/index.html","5da47bddf2e4383107a5136eb54d0638"],["/archives/2019/06/index.html","05d1b9cbb60da5ce3066840bd8785bc0"],["/archives/2019/07/index.html","7d0338935dc5041f22f9ef04448d85bb"],["/archives/2019/08/index.html","db3c44f64cc056cdcccf178dbef87a88"],["/archives/2019/09/index.html","2e1ce124d737f2fca3544ef5288eeb57"],["/archives/2019/10/index.html","ab9ca368417096f9b8c6063998c8c291"],["/archives/2019/11/index.html","c6effbfc232c90ac0da95e9d29bb9fc7"],["/archives/2019/12/index.html","4c206d0dae43b6bf92654cc6d7daf7d1"],["/archives/2019/index.html","523882421833c64bc5b5362fbc738298"],["/archives/2019/page/2/index.html","dac01c490dad43e79c28598196ae0646"],["/archives/2019/page/3/index.html","a7578b3b9b77a6ea65ac550cc4ce12d1"],["/archives/2019/page/4/index.html","9f7f26fa3b77bda3050010231f58e18b"],["/archives/2020/01/index.html","1204704d9716e7fa48949fba6f48b6fc"],["/archives/2020/02/index.html","2ade6aa5b2320b9d1fffe861af50b8d2"],["/archives/2020/04/index.html","b0b569aa300038ff7454f136bf0cbf71"],["/archives/2020/05/index.html","07ee7c1f7194478cb8e2461742870da2"],["/archives/2020/index.html","2101c35bd7a4efe8fcf167ae0529f6bd"],["/archives/index.html","297dcf09cbf85985390b8f94df19010e"],["/archives/page/2/index.html","f4f46ce6f23f6bcb2b65226afa7895eb"],["/archives/page/3/index.html","db6adfe92f981450bc87d555dbbb9d9a"],["/archives/page/4/index.html","9a7bf1d3f49c58f78de3a30704ce9b33"],["/archives/page/5/index.html","b539f963d4250df0e3d0b8ca6025a98a"],["/categories/C语言编程知识/index.html","5168da82e0cd1746396f5bdc7ca6ea09"],["/categories/Hadoop/index.html","356f0ae91d9c6025f21c1c54b6224eec"],["/categories/JavaScript/index.html","39d0e28a88041115a7c44a89e6aabdbc"],["/categories/Java学习/index.html","fb63cbfacf1a546244a86cc8c77b37e3"],["/categories/Liunx/index.html","9f8871b59f02d46ed967289b52ca8be1"],["/categories/Liunx/常用命令/index.html","d60d0d6747ba2ff5ccac174b8c80eef5"],["/categories/Liunx/核心知识/index.html","a6fc4342272250641b7f8c42c2e67f31"],["/categories/SQL知识/index.html","1172a90d3906853d20065ec1d23533d8"],["/categories/docker/index.html","29f3dd54cb2b7611a7a5062fb0a17934"],["/categories/git/index.html","9fb71613d605617f49f286d281be20d6"],["/categories/index.html","85e919a74f5be2d678f31f0ff8acd8c5"],["/categories/python/index.html","70e703c8cce71bef791694bd4c87c7be"],["/categories/python数据挖掘/index.html","a5b658efb4837dd5cd2f59ef300df5b6"],["/categories/python爬虫/index.html","dcca23294a7a56f78fd089bd83450498"],["/categories/python的web框架/index.html","c03279a9ce3d1a95bfd38a5350fefc78"],["/categories/python编程/index.html","16f00e7bfe3fec6027212ae2141bca6c"],["/categories/python编程/page/2/index.html","31a6bf7f90df5191c88846971292844a"],["/categories/selenium知识/index.html","3d5e13b2496f26e2608670dc439f6345"],["/categories/个人随感/index.html","f69d54643a13d225e034ccf1cf7185e9"],["/categories/前端学习/index.html","b704afef114845b77a1c02174c1fe7a0"],["/categories/数据可视化/index.html","79e7d5e8e8b59bbd2ebae63be88ab11b"],["/categories/正则表达式/index.html","9b2dd6742af5c4c3c9c0ffd80e045f12"],["/categories/算法/index.html","80f31a52b502c775c4e7cd559015b899"],["/categories/算法/五大经典排序/index.html","89f1b1d073fc145d4ca788f17fa12b4d"],["/categories/统计学和概率论/index.html","941399e65385676024d5a9ca20fa513c"],["/categories/网站知识/index.html","ff4a969a91729950cf938fb4899c3768"],["/categories/计算机组成原理/index.html","5e423dd1cf3194eb2997c732cdc66b93"],["/categories/计算机网络/OSI七层协议/index.html","a7a5dfaefe9605cc326dbc095aa280dd"],["/categories/计算机网络/index.html","4dd56c604c37734c2fa82bb40e7ff94e"],["/categories/面试经历/index.html","5222f4743abe21d1bb0cd1d483951ff4"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","e13b19081226de829db830602dd75c25"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","2ba24a26c91b79df1947d24613919c6a"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b069b480849e85eccd6d2e9871072881"],["/page/3/index.html","166662bc0c8d01549d6ec8c222a7b175"],["/page/4/index.html","664ebe973cdd071276fc56621a8480f0"],["/page/5/index.html","997c7168f751380a074f3d742db1e98a"],["/sw-register.js","e7d97a44f9c956bd57ba9978903890a6"],["/tags/Django/index.html","fcec2f062b2a78004453bffd5804849e"],["/tags/GIL锁/index.html","81aa94e5807b90df7400dbcc8f7d48a1"],["/tags/Hadoop介绍/index.html","152ba3f11d158ca7640e91b528cd4c85"],["/tags/Java基本知识点/index.html","5ae0157933ce6d5fa158d497844955f2"],["/tags/Liunx命令/index.html","c8b6e6e26be8b18b3db3203679b71903"],["/tags/Liunx知识/index.html","b5950d957559e88a7be5fdfe1108d402"],["/tags/SQL命令/index.html","407c347c90e50c4356789eaa46b36ab9"],["/tags/SQL调优/index.html","4f927ab0329720104ce9366c90717649"],["/tags/Void-知识点/index.html","cc692edc612969d10a96141a32e9f0e3"],["/tags/Vue框架/index.html","322cb339c63cfc9f932d6249d52c1ddd"],["/tags/docker知识/index.html","876479307b23986e0dcc8ff43b4ad35d"],["/tags/flask/index.html","860289d40a1c36bd778fd9b7da9e7918"],["/tags/git命令/index.html","2c073673b921bc067a56a847b63e47a4"],["/tags/index.html","3dee69e589dfcca2d37637cf45b6a588"],["/tags/js知识/index.html","a009e4d958808cebdbb33332a0f325af"],["/tags/pandas函数/index.html","282335fa7c5ab0b3f24acb165d2ad0cd"],["/tags/python编译器/index.html","84175a6d1ee39d0a3e258a798935ff9e"],["/tags/python进阶/index.html","82640ff8bdec9ba3f89cc76b89dba045"],["/tags/scrapy框架/index.html","4b1e6e11fd99697f1a6b4b7d3a726962"],["/tags/selenium/index.html","8d2fa3780b870966333b5a2be22632f6"],["/tags/协程知识/index.html","2d835b2d255ec28d9c158e82be9759b2"],["/tags/基本知识点/index.html","7b569f321429e2d78459cfa4d8811f4e"],["/tags/扩展知识/index.html","4c2cda49884c0f1006b5bcdbe664e0d9"],["/tags/排序算法/index.html","a68fdac23ba4c35f010649a9b44ff9f1"],["/tags/数学知识/index.html","280eb89dd973cfeadade456a66247266"],["/tags/数据可视化概念/index.html","84d0aa6baffedff08786915469df7dcd"],["/tags/正则/index.html","9bed4ef18879ead41ef73f9e5b49aecf"],["/tags/爬虫实践/index.html","c6b291b2f321d73e0db8391f035f8b90"],["/tags/线程概念/index.html","4a8f656b0a2bea7f822eeb931e0b1852"],["/tags/网站的基本概念/index.html","9a1e93ea0dba56c0e29c976685a2a2a2"],["/tags/网络编程/index.html","9d28218794b565c6242f233d38653104"],["/tags/装饰器/index.html","571c19a2132f534046dda21780720647"],["/tags/计算机知识/index.html","bf9f8a2c2f9a31addbda437c5947b69a"],["/tags/计算机网络知识/index.html","044ae0c4e50684bf7e78ed0265e84bfd"],["/tags/语音识别/index.html","f756e79068dab19b84d613841443f61e"],["/tags/进程-线程-协程总结/index.html","1fe4e43b8cad1427aa655af1b3ed8b90"],["/tags/进程概念/index.html","094b8bc8c4fb9d139c4f6384c474b7f2"],["/tags/进阶知识点/index.html","91b9e086742ef7e3dd3c13f452f3ec2f"],["/tags/面向对象编程/index.html","8198fa11ddb9575e6fda7f873485f1ca"],["/tags/面试总结/index.html","24b7fcd51af1909a41d92b0a7714186c"]];
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

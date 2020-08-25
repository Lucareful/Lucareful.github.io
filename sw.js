/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","e5bb8f54395a4d63bc3245ced11243e4"],["/2020/08/16/C 语言中 void 详解及应用/index.html","e574d60abacbda05bf53f8db72a7022e"],["/2020/08/16/C语言打包技艺/index.html","6cd94bcd6609637b3bcbf79f1488fb37"],["/2020/08/16/C语言笔记1/index.html","948d7514382cb975b7d048a2e33b14fd"],["/2020/08/16/C语言笔记2/index.html","0095f2180ffaeb62577f40371eb82fd6"],["/2020/08/16/Django 重定向终极指南/index.html","fe980f3da1b13e5534d914623d310d32"],["/2020/08/16/Django参数和模板/index.html","9868d7afbf9856bf8e2aabc19043c095"],["/2020/08/16/Django后端演化/index.html","84c841801a927d2dbd887e6ed80f8c5c"],["/2020/08/16/Django的Cookie和Session/index.html","dfb7813d6c458901bcf2405fb879eea6"],["/2020/08/16/Django的Field详解/index.html","1448d95775d6797a101233926b2816c0"],["/2020/08/16/Django的ORM多表操作/index.html","1a0492f59073cb353f8c168d638631dd"],["/2020/08/16/GIL锁/index.html","5478144196197ff2ce805ce27a8d15f4"],["/2020/08/16/IP代理池/index.html","858c1e3c020deb0138d4e7914784b5e7"],["/2020/08/16/JavaScript的简介和基本知识/index.html","204aab77c2be04c3c85b1fc332d68d76"],["/2020/08/16/Java面向对象/index.html","8c6dc73b47eefded788d626c9ebec374"],["/2020/08/16/Linux常用命令/index.html","a7b0fa651e3faadd110c38184316abbb"],["/2020/08/16/Linux操作系统核心知识/index.html","9e4d44276c0eb4611b06d55127b6f5ce"],["/2020/08/16/Linux操作系统（二）/index.html","8d53d6caa312e7be491e6e5d6566bb7a"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","e1dc82e647383b00a1b626ad885214c7"],["/2020/08/16/Mysql数据库函数/index.html","ecba815516c0b55f96ac146a145a0781"],["/2020/08/16/Python 中的上下文管理器/index.html","a7e990c30d1545c347e1e325be9f3f21"],["/2020/08/16/Python的模块和类/index.html","c71b9eb9e3f11a24d9080e21d5a17bdb"],["/2020/08/16/Python类补充/index.html","90e7cfa320cd380baabdae8ac8f29fdd"],["/2020/08/16/Python面向对象/index.html","f2676c45b972dd013634dc3a794e5510"],["/2020/08/16/README/index.html","5728d80c56e9ae72fc55ddd1477272b1"],["/2020/08/16/SQL性能调优/index.html","9006b923b608c2ada1cb2c5b2ade01da"],["/2020/08/16/c语言笔记3/index.html","85e96aca26813d17cdc384e9211dae5e"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","335de650dd8f602aa711404b14663c24"],["/2020/08/16/django之url规则/index.html","e948b829527be83588fdba314f622f31"],["/2020/08/16/django配置初启/index.html","6946fd35852e26b158f9fa3f027d23e7"],["/2020/08/16/docker以及相关概念介绍/index.html","ebb1d439bcef298541671a96cb294e7b"],["/2020/08/16/docker信息/index.html","43c90f7d65e6d2a28c1af17695ce747a"],["/2020/08/16/flask框架/index.html","62a633781d830a365a2807c69f74957d"],["/2020/08/16/git命令/index.html","aa17a6c3ce8b63f7c3085ae18b76b3cc"],["/2020/08/16/hadoop基本概念介绍/index.html","178a1d65f5645ba5b17d1db9a31e01b4"],["/2020/08/16/java基本知识/index.html","7f968269238bd52b7b2147d42ff08c4f"],["/2020/08/16/java简介/index.html","836ff003377a28d78b3448e8ef7f73d3"],["/2020/08/16/pandas函数/index.html","a2a3f782bd333663c2b8dcda3147fa78"],["/2020/08/16/python函数补充/index.html","ba4a6d1326c1983df73ce6f7bdfa1aef"],["/2020/08/16/python数据类型的底层实现/index.html","2fb9144dad12ea1b270c6d80f1dbdf7f"],["/2020/08/16/python核心模块的介绍/index.html","eb4f243a51b5149779413fe4b9918b85"],["/2020/08/16/python爬虫/index.html","52ba105da09c1d5f79bda123521c0b60"],["/2020/08/16/python类的私有属性和私有方法/index.html","c015f12bca47e6a001e93213790ba411"],["/2020/08/16/python解释器介绍/index.html","83daf67f7d1d3464ed77a286dac8c0f2"],["/2020/08/16/python高阶函数的定义/index.html","1f5d9734782e124686459fd433e9032b"],["/2020/08/16/vue框架介绍/index.html","f5071b04b07e501ee418b30ab19cee69"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","d3e12797a891d30cf95b22dfa7597637"],["/2020/08/16/京东全网爬虫/index.html","e7db30adc4c36ed7152fb12224590e5c"],["/2020/08/16/协程/index.html","2eed27ed74c7d756761452fa0f510aae"],["/2020/08/16/多线程/index.html","e9d8945afa4a3d7ef138eef9b601d87d"],["/2020/08/16/多进程/index.html","126c04e329d27e117aaedbde7d5406d3"],["/2020/08/16/数据可视化笔记/index.html","9e8cd3d23b5998808934d941121fbcff"],["/2020/08/16/数据科学笔记/index.html","58e466607c65c01607ac909d6ab92792"],["/2020/08/16/斗鱼弹幕抓取/index.html","54374dd14ff3994d1b7951e74a464da9"],["/2020/08/16/查看mysql连接情况/index.html","4d09f541a1a16e989e10463a7589f009"],["/2020/08/16/正则表达式/index.html","92d20856b8ef4d11d0225943d3eec11e"],["/2020/08/16/第一次面试总结/index.html","52655fbf69753397388ad7e6d5fbe0fb"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","b76c63034ab4d2b5f051019434b3d7f2"],["/2020/08/16/索引和事务/index.html","f064baca49d5cbeb64ff2481b202dfd5"],["/2020/08/16/网站概念/index.html","3d6a60ca5351b4cad7d69ab737ce9843"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","c5153ee57eea4ee8ef3bed90e048d154"],["/2020/08/16/计算机网络/index.html","98a6639ee56ab77dadbe67b0059fd9ce"],["/2020/08/16/语音识别/index.html","6653aba8e3876e931d2d98a17dc11953"],["/2020/08/16/进程,线程,协程对比/index.html","3b6ff7a81ff7f6f2a4972cb8165571b0"],["/2020/08/16/闭包和装饰器/index.html","7a88da4f2aad54d44416dd4dc05f952f"],["/2020/08/16/面试总结/index.html","1e96f2e6b007564104e36cb1227d29ff"],["/about/index.html","3f3286b283bc73780643d23e410026bc"],["/archives/2020/08/index.html","9b811d9fece99edcc41d2d683d1e4a96"],["/archives/2020/08/page/2/index.html","030dc5a6fdc064d8169515cea3b95977"],["/archives/2020/08/page/3/index.html","71b62b1978c6bd5bc0933033ce16d861"],["/archives/2020/08/page/4/index.html","ff5fcf53bdfe2d1c58003f57e8f87971"],["/archives/2020/08/page/5/index.html","de5fec288c564a707730ed16e8403fc5"],["/archives/2020/08/page/6/index.html","46b49cc08af6adaa7db37b4d6cd115fe"],["/archives/2020/08/page/7/index.html","8904187a88fde89c9ea0523abaa3710f"],["/archives/2020/index.html","2317890ff2958901c413f1ff64d73e41"],["/archives/2020/page/2/index.html","b441fa57ec34ed387bb2b27f72304ef1"],["/archives/2020/page/3/index.html","7bb9a806902504bc3911ab7e35233933"],["/archives/2020/page/4/index.html","d7b0f31891e2a57cf51e77fe2227bae2"],["/archives/2020/page/5/index.html","557ba3324cdf2a42507f9900aca046b6"],["/archives/2020/page/6/index.html","e1c76bce41f44b87a6ac7f548f0e784e"],["/archives/2020/page/7/index.html","fbea6a0724f19ff6556aeec32cc8c365"],["/archives/index.html","241026fe84a6060aa9a4f37c11ab5a3d"],["/archives/page/2/index.html","288afd629be9f5792065f8eec7979075"],["/archives/page/3/index.html","0e9129183fcf456932b376700c72d8a2"],["/archives/page/4/index.html","0cf90ec1ca9ce29194e257ec02d5c747"],["/archives/page/5/index.html","cbe23a2885a9790629f2a171605cc160"],["/archives/page/6/index.html","85c540fcfe7630934e91719e7596a8a1"],["/archives/page/7/index.html","6fc8f6fa84e73c26954de68920e1a82f"],["/categories/C语言编程知识/index.html","5bfa71ce7c45d115450358f5c7deffb4"],["/categories/Hadoop/index.html","4d19bf9c5e42bee75cac1de6608cad98"],["/categories/Http知识/index.html","3a43cf95a30449ecb74669d80392ea7d"],["/categories/JavaScript/index.html","46a5237d93c1feba4da25dc5c082343b"],["/categories/Java学习/index.html","dbb2fba1d1e6e0e1506c04ac944e5b08"],["/categories/Linux/index.html","7cebf5dcfef9419301bdbbf4e850c85e"],["/categories/Linux/常用命令/index.html","6bc8769acfe40674027cf4ba2e0f9547"],["/categories/Linux/核心知识/index.html","408a2768aa599b200009d6bfe55008a2"],["/categories/SQL知识/index.html","63a9ba385df5d4f4cad059b80af20f7e"],["/categories/docker/index.html","7aa13cf3d0a25a54fe87df540ea2a61e"],["/categories/git/index.html","9d7788f481dd39dc694c156ee8059716"],["/categories/index.html","203cbc9c080653605cfe21ab14de623a"],["/categories/python后端架构/index.html","6411bcafa6a6cd520c7d142b09e11a3a"],["/categories/python数据挖掘/index.html","ad7fc7cdd5e8449c09152ca564fab8ab"],["/categories/python爬虫/index.html","9190c3bd608c1100817ee200ed2c5626"],["/categories/python的web框架/index.html","06f587597aac786b177fa9896cc9ef1b"],["/categories/python编程/index.html","764319d22cbd6af7084108c7a08ce1ba"],["/categories/python编程/page/2/index.html","7dd7cfadaafc7d9b40d696f1903fecb1"],["/categories/python进阶/index.html","1127e64aa4246d2233f740d28f1e7f17"],["/categories/selenium知识/index.html","1cc94106c99d25eb0a96c02f3a7f49e8"],["/categories/个人随感/index.html","18979c145ae40233c11ce39219669501"],["/categories/前端学习/index.html","8f074577812f1a206420ed54984f59c5"],["/categories/数据可视化/index.html","e36afb542053bda43ecbf265f2fbe655"],["/categories/正则表达式/index.html","c00451ca5790f919420dcc2bfda4f5dc"],["/categories/算法/index.html","e59146732f043820aace1edf84b93cd2"],["/categories/算法/五大经典排序/index.html","46a1eabaff981f2b9b263ed2085661cb"],["/categories/统计学和概率论/index.html","391477bab9fc4ff6f7b952a8b04cd373"],["/categories/网站知识/index.html","005ae65167dcb7c7a8ae52566896b8fb"],["/categories/计算机组成原理/index.html","09af5babe4611422f29f7d913acb30e5"],["/categories/计算机网络/OSI七层协议/index.html","3897a8204821e91af5827c58a9614a40"],["/categories/计算机网络/index.html","e823bcd4a3f52d0ecf67c7df0c81d523"],["/categories/面试经历/index.html","5b3fc0160096e67e61663aab88707977"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","75a9ede08231cba0bb4fa647f5d0ab79"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","b09b1763c06e5cfce4bb279ff5b9505c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","944fc0d501b008f4aa3c869a0623e391"],["/page/3/index.html","904ba4fa29b272635f73f4c44e8279c8"],["/page/4/index.html","12dc143262a8cf21e3e905fe1b2d5f56"],["/page/5/index.html","a486684c856806a85993c6686b91f5f4"],["/page/6/index.html","88968e0dc3d348a5dca48a52de95fe4d"],["/page/7/index.html","8fad7e5af4d662c9d3123d2b4650b611"],["/sw-register.js","e928798a8a8379eb6cffa192173f679b"],["/tags/Cookie和Session/index.html","3c644e99eed2d91cd234376d4944d692"],["/tags/Django/index.html","884c0db708baaffdf5bca93fe3641cbe"],["/tags/Django部署/index.html","15cb1c04476bb35aa225cd7b1ccd432c"],["/tags/Django重定向原文/index.html","f79aa278af9dc7991c0e97ccad4d1939"],["/tags/GIL锁/index.html","181a3291a5d22739be249f2af3faeeb7"],["/tags/Hadoop介绍/index.html","8f7091cde7ca374af2f83426fdaf4e52"],["/tags/Java基本知识点/index.html","1c4a420c372604bb531a3f0981be37d5"],["/tags/LinuxLiunx命令/index.html","165ef9267660807312147c711043ef9a"],["/tags/Linux知识/index.html","3fef99de521f88b2a1c6660bbd7ffd56"],["/tags/ORM/index.html","4bc19a231d7cd71956cb2d234efede30"],["/tags/SQL函数/index.html","51fa8b7a2dac5b711763feae2cd343e9"],["/tags/SQL命令/index.html","c6b22ee88bdbeef0b4dc534d34408466"],["/tags/SQL概念/index.html","bad6f521954ba79a8f3ccfe3176b454c"],["/tags/SQL调优/index.html","6598cc77e691418615eeebaa1d5728af"],["/tags/Void-知识点/index.html","0dec157facb4b27875ec967b88078262"],["/tags/Vue框架/index.html","672fe2fe3d61454a157141fb5672392a"],["/tags/docker知识/index.html","e6dff74abfc3a3189b0a1e7d7b463e1b"],["/tags/flask/index.html","10159799213cecc839beb14443a16981"],["/tags/git命令/index.html","4ade4329a419d0ff8b5f8c8b1038d119"],["/tags/git配置/index.html","753a80da4026ce56233a4182d75e93ea"],["/tags/index.html","e7d468c1d0df956532bf20ff4041a619"],["/tags/js知识/index.html","0927f1ddbba45115846c2c470fc7f0a4"],["/tags/pandas函数/index.html","e8f3ce358c47cbdc929c3cd33fed67b9"],["/tags/python编译器/index.html","d255472f210db18368c553c55f776087"],["/tags/scrapy框架/index.html","d9e608da6672b2e20e4d955178112f5b"],["/tags/selenium/index.html","5747eb0a31faf2ea9cff8c538708ecdf"],["/tags/上下文管理器/index.html","a1ad9157e6a914789f70077aa14079f7"],["/tags/函数补充/index.html","884f0313c8f295de6afe7eba2f13b359"],["/tags/协程知识/index.html","53622aadc0286673aff2a53dff2936fc"],["/tags/基本知识点/index.html","71381c249572e5a2d8016cf9829b0da8"],["/tags/底层原理/index.html","71ce5c4f410724e6cf82929aeed30fad"],["/tags/扩展知识/index.html","c1cfdca45998740dfe4bf14e415856ee"],["/tags/排序算法/index.html","91b9855679f7917fe1409324fac0c8ae"],["/tags/数学知识/index.html","110a92e5721cb247e0ac1c00befc8a83"],["/tags/数据可视化概念/index.html","6e170902dff43733c3f2b800f28b4768"],["/tags/架构演进/index.html","0facfae5710cc328428d7dcaee8a036c"],["/tags/核心模块/index.html","cc3fc82a21f3f305efc11434847589fd"],["/tags/正则/index.html","e0c00e12bbe8bca53d5ac9e7f87482b2"],["/tags/爬虫实践/index.html","1f5aefedcd45341f4c85b76f050ba4d1"],["/tags/类和模块/index.html","b6f98c5a1822125ab5906cdce9bfbb44"],["/tags/类的知识/index.html","e802db880c2d88063a52c9a91a5f993c"],["/tags/线程概念/index.html","9b1c72a73e93404658f8cd75b85548b3"],["/tags/网站的基本概念/index.html","0e3f6f43be483d676ebceb0a10254486"],["/tags/网络编程/index.html","aa944b3b59378bf909fd100267b85533"],["/tags/装饰器/index.html","99d40fd6d05a4aa12f16351322dc302e"],["/tags/计算机知识/index.html","c32427eb2dfbd9a12a2775629791ea5e"],["/tags/计算机网络知识/index.html","86f4de542030fd42829fb8a14131d845"],["/tags/语音识别/index.html","9319b585f1482800b1b0fe4a33b00549"],["/tags/进程-线程-协程总结/index.html","0c3062c61986e43a029f28d98377b2bc"],["/tags/进程概念/index.html","6dadf3124a97ba9ad58accc490316e4b"],["/tags/面向对象编程/index.html","6d1aae2af54edff97989249d248b1c83"],["/tags/面试总结/index.html","339c9deec8cd425e6cbad2f96c7ce06c"]];
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

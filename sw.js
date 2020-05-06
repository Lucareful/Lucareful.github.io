/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","9e32b530552c4c54140a9e472976ff73"],["/2019/06/26/four/index.html","3d495cb67ad10cf4b6387d18806cce41"],["/2019/06/26/python解释器介绍/index.html","106207bcecf07082b9cdc3874c668af3"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","0a9add1fc92691ef1f23f74d4a1242a3"],["/2019/07/06/网站概念/index.html","d1cfa963a7d1d135c86ed8be393e6a87"],["/2019/07/11/数据可视化笔记/index.html","6f8605ef7f9a1aae1c5901e749f298e4"],["/2019/07/12/语音识别/index.html","d0355a56fbebbeac035aa326a4b1ad44"],["/2019/07/14/hadoop基本概念介绍/index.html","5e8c43ec8645ff9473b4d9d98c87766a"],["/2019/07/14/数据科学笔记/index.html","238c3eea862e98d977af09fb5e2fc1d0"],["/2019/07/22/python爬虫/index.html","160478938611121ffd233ee7d70a6bf4"],["/2019/08/25/pandas函数/index.html","e3f06a720bd71eedc39dcf5ddbcf68c8"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","82edc9c29f652d92ff288cfe10d4a13a"],["/2019/09/30/C 语言中 void 详解及应用/index.html","384565f9c51e422317291265863641bc"],["/2019/09/30/第一次面试总结/index.html","8cc1601ac38260dab8d7002b7d0f7aad"],["/2019/10/07/django之url规则/index.html","8f0aafb8b384ee8eb80842b727d7d52a"],["/2019/10/07/django配置初启/index.html","ddd113c760cf59dc9badbc921b324207"],["/2019/10/13/C语言笔记1/index.html","1e287c665c1de4f8015e6f97af09875e"],["/2019/10/13/C语言笔记2/index.html","ae622c415cfb18acda575afac60ab6e7"],["/2019/10/19/C语言打包技艺/index.html","cc16663ceab5c1f36b60fc04f97c15cf"],["/2019/10/22/c语言笔记3/index.html","39c630f17741d80062b1b69a738d4080"],["/2019/10/27/IP代理池/index.html","5fa9144a9e36d1665bf775a8fa723c79"],["/2019/10/28/git命令/index.html","7ab7b5a69640145bb4dcea64091d217d"],["/2019/10/31/斗鱼弹幕抓取/index.html","12f16bca0659bb26de0c1ba5efa73315"],["/2019/11/13/多线程/index.html","45e17d61e99937b7bf77891696c8202e"],["/2019/11/14/多进程/index.html","a9b5b32af65d021d8b8e4631b5b10bcc"],["/2019/11/15/python类的私有属性和私有方法/index.html","136b685e118e95d0b378d5de74b3f176"],["/2019/11/16/协程/index.html","8a89a01d2da489e142519a8ff8355724"],["/2019/11/16/进程,线程,协程对比/index.html","cf0110c8305b2b63f1af69f2fc2f1239"],["/2019/11/17/GIL锁/index.html","3ea7a392c8127910c302ca924a7faad9"],["/2019/11/17/闭包和装饰器/index.html","7469954981b8e84dc8eed038436d2b9d"],["/2019/11/19/Python进阶知识点/index.html","3dedfbf5fd716c8042d9e471c9c7365c"],["/2019/11/22/京东全网爬虫/index.html","af720f87876af0f674cdbe6af76b57e9"],["/2019/11/23/JavaScript的简介和基本知识/index.html","6c860728772d8074a1dce5956b208b95"],["/2019/12/04/README/index.html","5974e39a6d63fd30882dc28765a52f0a"],["/2019/12/04/java简介/index.html","dbb1c40b4b970abf7c79b22b460fccdf"],["/2019/12/11/java基本知识/index.html","11adc546627be60ce448a04341679bca"],["/2019/12/17/Java面向对象/index.html","0ec80a0cf790634f3ea18a7d830297f7"],["/2019/12/19/面试总结/index.html","e80d9a4ec12f6e3d59794f98dc29e957"],["/2019/12/20/SQL性能调优/index.html","4dab9df6cc40333d18ef760a31b53c8c"],["/2019/12/26/vue框架介绍/index.html","113ed0bac7ece9747428eae3a3d0685e"],["/2020/01/02/12306自动抢票/index.html","10b2d6846acba815796968dc1477580f"],["/2020/02/24/flask框架/index.html","98f3a564142ef961af2f7ce921c1d26a"],["/2020/02/28/docker以及相关概念介绍/index.html","1043648f7e0345bd8059800996325547"],["/2020/04/05/python数据类型的底层实现/index.html","101ae46f90d4cbe875a17dd808c0bb9b"],["/2020/04/27/查看mysql连接情况/index.html","94630d462ffadbae4d6aff12a6af66af"],["/2020/05/02/Linux操作系统核心知识/index.html","462f18cad783922d72c859a7fb04a1c5"],["/2020/05/02/计算机网络/index.html","0f15c8cdf09dd8c6a604ad0c5f15ae6f"],["/2020/05/06/Linux操作系统（二）/index.html","28610aa92386d1333d28568abef5cf19"],["/about/index.html","e604d0be6ca5d0b89ab28ae367adea6f"],["/archives/2019/06/index.html","d531e770171e8d94bcb3afc8562ed417"],["/archives/2019/07/index.html","ee93187cca49fd018e43e4a997a74a77"],["/archives/2019/08/index.html","d968f750a2dffcd10f1c57c8b9abbd26"],["/archives/2019/09/index.html","5e4160656ba6c5eed9dac5cb1fd969b3"],["/archives/2019/10/index.html","0f685a9e49037e0ec4ed78354f8b684c"],["/archives/2019/11/index.html","c34785d2541865bbdf9d05a51b7661aa"],["/archives/2019/12/index.html","c21c984c50c97aa5947450eeb8adda2a"],["/archives/2019/index.html","8ef94976ddfc2a01ae9fde222f5cce00"],["/archives/2019/page/2/index.html","c999b9a63f7d11400129e0d307463407"],["/archives/2019/page/3/index.html","ef363f4c7316fa070c1dc7122da53652"],["/archives/2019/page/4/index.html","2853cdc2f930f6b44dceff0c6240c4f3"],["/archives/2020/01/index.html","979d1a2e162f9dd8fa77e3d396ade9a2"],["/archives/2020/02/index.html","47278a36242c5c917052d951851eb015"],["/archives/2020/04/index.html","2337c8e626ab95b51852eef4fded9de1"],["/archives/2020/05/index.html","c7e26f3416d322381807b91335e9de0d"],["/archives/2020/index.html","026261d5508ec1865c6425952f2bef7b"],["/archives/index.html","679b856945137a814173b65cfeb02f58"],["/archives/page/2/index.html","266f428b5cb0136fc451066b66bcbba3"],["/archives/page/3/index.html","a5ad5f671f4f85bd6f03a315004c34f9"],["/archives/page/4/index.html","385862abbc7288bfffd59e3c311a135b"],["/archives/page/5/index.html","aa369f590dc0d244dc658cf69510369c"],["/categories/C语言编程知识/index.html","08ac75572cf28de07bfa041c7d6dc160"],["/categories/Hadoop/index.html","28c2891626868610c493ded3607e3453"],["/categories/JavaScript/index.html","ebe4a164c94cbc56f5de60f591bd2aa7"],["/categories/Java学习/index.html","1035ae58f7fb59d9f5a836ff664836c2"],["/categories/Linux/index.html","cba79c4d18625c1f3ee94f6aa4ec4065"],["/categories/Linux/常用命令/index.html","4182487d10e8fc1d5f27110bc06e6fea"],["/categories/Linux/核心知识/index.html","1cf74a1bc76e941e67ab07c8b7b9fbc8"],["/categories/SQL知识/index.html","175301ab7e7c3270a2c0141057344ce6"],["/categories/docker/index.html","ca61db67d8b20c288196d6d94817d424"],["/categories/git/index.html","de78bbfb032b9a51b4cb22831b15f29a"],["/categories/index.html","a1cefd5298368d8b9b00273411a9e98e"],["/categories/python/index.html","2f5ba55b002054ed9e9f304eb5f66889"],["/categories/python数据挖掘/index.html","8457e3dbd76fe84c5c44c83aade71447"],["/categories/python爬虫/index.html","dd068d312a38185b652312c8dd2f3630"],["/categories/python的web框架/index.html","22029dde6116edc9b357d9f9d398cc1d"],["/categories/python编程/index.html","83cffcce8393464b99c1cb678927146f"],["/categories/python编程/page/2/index.html","2b94e7bcc3b10391bcb6b1138f87e031"],["/categories/selenium知识/index.html","c3357cdcb04c957bc370b3c451ea8a7b"],["/categories/个人随感/index.html","ab34c8f4700c9b148c47fdd3db1524bf"],["/categories/前端学习/index.html","18b3d67d35fe7ce8e2a0f4bdad36f2d7"],["/categories/数据可视化/index.html","20632f387f1b129a788e5ff307a6750a"],["/categories/正则表达式/index.html","644210ff67f02f044a06befded764e7f"],["/categories/算法/index.html","458c3f66e979a5540f35db0a6bf63b21"],["/categories/算法/五大经典排序/index.html","70a79849e71b983ccf8d251a92e45d12"],["/categories/统计学和概率论/index.html","096cd458c902a87a86566233f257c4a2"],["/categories/网站知识/index.html","f3e9ef0d067b9bd143f3d59e2d6f5135"],["/categories/计算机组成原理/index.html","143431caad90ca7701ef0719f0dbf578"],["/categories/计算机网络/OSI七层协议/index.html","ee8e65ede0c6e21e67014752850b9051"],["/categories/计算机网络/index.html","003d17050e43cade6651085e98b1e8d9"],["/categories/面试经历/index.html","96e62b7efd55a4b1fa63208c47b67082"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","b283505d6152ec5eba48ca03547ad148"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","010ae4ca3a0fcfe2cc29e680bd05cec5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b92c84455ee696063abbb0d128cce63a"],["/page/3/index.html","f10030c7012c86c9712e71c567003b3d"],["/page/4/index.html","813948ce58eec7edce2900abb55fc1dc"],["/page/5/index.html","2ed733726520c9dc85e277a37a339cdf"],["/sw-register.js","c617c66dc26740c8a0728f8f814343c8"],["/tags/Django/index.html","7597b5d8fe2f1a9d988d1b2c8a9aecd4"],["/tags/GIL锁/index.html","8c5d30f20c03875c685b46f6fdac6e3e"],["/tags/Hadoop介绍/index.html","5b466dc8db617930bbdc7dac79313f8b"],["/tags/Java基本知识点/index.html","5582e0fa091689488c90fe69ed7a957a"],["/tags/LinuxLiunx命令/index.html","ccf53bf4e686f8b2888fc2cae24d8ac3"],["/tags/Linux知识/index.html","ac43727df85dc14c43ebf7a95aa09ab3"],["/tags/SQL命令/index.html","da5a93febfc0bef142a5416662170895"],["/tags/SQL调优/index.html","0f4c63c0e7e6c7dcfe2b0e2e0023dccb"],["/tags/Void-知识点/index.html","a5494f125422e2937e41a2fdecf15814"],["/tags/Vue框架/index.html","5874a18346b9d9c6c5714f409c270719"],["/tags/docker知识/index.html","814c83a8efce2e8527caf1b97ebb5c9a"],["/tags/flask/index.html","2b123747042e0f8454132facd90458d0"],["/tags/git命令/index.html","ec79172cca97c835836820c9913363dd"],["/tags/index.html","6c8b252cb7762571888b106ae10cf295"],["/tags/js知识/index.html","80622228b2ce96936f4a2443495ff307"],["/tags/pandas函数/index.html","45a34bb7cfe357854168f65b8a7c5b2d"],["/tags/python编译器/index.html","dca4c5c869321d74f80b6fb0f1d3552f"],["/tags/python进阶/index.html","adc199aeb03b4bb44e9504af08e54e82"],["/tags/scrapy框架/index.html","db4e0dfcc64d5611492ca0832e6fdd6e"],["/tags/selenium/index.html","51a5679249ce75a14778aabefdf3c443"],["/tags/协程知识/index.html","3b8f9cb7bc2e744597d2381cdb2f431c"],["/tags/基本知识点/index.html","64624212d9fc748374c5479e00f26784"],["/tags/扩展知识/index.html","4359c0157dbba090e363c5ae8313f72e"],["/tags/排序算法/index.html","1df5b879555f9bd7683dd5a88537da02"],["/tags/数学知识/index.html","fa3a15db4b7be2a9f8f5ca6b46620531"],["/tags/数据可视化概念/index.html","32988017f452dbfdce10a31feb0f1f77"],["/tags/正则/index.html","f8494489555d78b994d4d0279b537319"],["/tags/爬虫实践/index.html","d1e44213c18b4da9aee9ba6a6f5f08aa"],["/tags/线程概念/index.html","7248aecff54207b377827b225915d7a9"],["/tags/网站的基本概念/index.html","5687b57a33edbabc340024a57ba03bba"],["/tags/网络编程/index.html","2589dff2c9fdb21749f9a9c9575df4da"],["/tags/装饰器/index.html","af04de4625e0adc012e067097b00dc9c"],["/tags/计算机知识/index.html","56e49c1fac084101a69c0b03b3d0d193"],["/tags/计算机网络知识/index.html","cea495b986a516cee24b472e5ebec738"],["/tags/语音识别/index.html","8fb6fdeb1b7ccac9645695cfc85c5c3e"],["/tags/进程-线程-协程总结/index.html","f1b32ec9e76dfee5038d99625a480ce9"],["/tags/进程概念/index.html","59a08a09a38b5a33cca36b2ce6695346"],["/tags/进阶知识点/index.html","dbcf69550d6cc4c6a247ae9a7f6efb86"],["/tags/面向对象编程/index.html","3886c5ced2669bd3ee2c90c962d30cdd"],["/tags/面试总结/index.html","80a7c16287af79b48ac2f40c51ceda89"]];
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

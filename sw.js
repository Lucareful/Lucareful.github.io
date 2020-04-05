/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","a79110b5955ed37d35add90772e4178b"],["/2019/06/26/four/index.html","214cb9a88197430b788bdbbfae4be3d1"],["/2019/06/26/python解释器介绍/index.html","ed4ca7d2e7985a6b3cd788083e80fe5d"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","f4cf2825d6b4d8923bcbbf83f922ad70"],["/2019/07/06/网站概念/index.html","3beac4d923252781539efccabc1ddd5e"],["/2019/07/11/数据可视化笔记/index.html","8625b4c007c025faf894c3887acff572"],["/2019/07/12/语音识别/index.html","b894ff471db8195932f6ffd91b428aba"],["/2019/07/14/hadoop基本概念介绍/index.html","bb6e9612a546da643a5f0516e6452bdc"],["/2019/07/14/数据科学笔记/index.html","5fc37b822b22554bc1fbbb9aeacb4b40"],["/2019/07/22/python爬虫/index.html","7c84f773ebe447707a721d5aeefbb445"],["/2019/08/25/pandas函数/index.html","dcfa4a391679c88ae9e8f1e9206fa91e"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","a50b93ae30fbb9bbc8bc9772221af909"],["/2019/09/30/C 语言中 void 详解及应用/index.html","eeff302b7fbe05b8f586fd688fbfd8d0"],["/2019/09/30/第一次面试总结/index.html","ab1eab95edf59eeb1af28a74bb00dd17"],["/2019/10/07/django之url规则/index.html","482f065871548ddd20ecf9e0079569f0"],["/2019/10/07/django配置初启/index.html","22f21a6163a3b9cbce52b55387eff41b"],["/2019/10/13/C语言笔记1/index.html","540af005a86702fc49e1d1fd0c310ac2"],["/2019/10/13/C语言笔记2/index.html","1534e214b3c6a885f375bd5992757093"],["/2019/10/19/C语言打包技艺/index.html","3f1f7f2404041935fc2e947739bbefb3"],["/2019/10/22/c语言笔记3/index.html","ad75b194d3eafc10f8de181cfe2b8085"],["/2019/10/27/IP代理池/index.html","cf5cea2b37c50d99ae334c1838d9e976"],["/2019/10/28/git命令/index.html","3fdf5d7057fcfc374cad1b012b5fcafa"],["/2019/10/31/斗鱼弹幕抓取/index.html","4a456f6486ecb5fa0d412adc82f7125c"],["/2019/11/13/多线程/index.html","824e7354f8e2195d7681f16e9dc3f8b8"],["/2019/11/14/多进程/index.html","4b9ac127d8546a6ccbcd8e50a65b6021"],["/2019/11/15/python类的私有属性和私有方法/index.html","9f23b49684737378b618c0302dd2a513"],["/2019/11/16/协程/index.html","26ccca85da27a1f24eb4f57a5ac2185a"],["/2019/11/16/进程,线程,协程对比/index.html","0895328a0157a691e2016525389a0a5c"],["/2019/11/17/GIL锁/index.html","f2a3b0d154cd1c55c20cdd063f238f38"],["/2019/11/17/闭包和装饰器/index.html","34958a47ac47b261bb68504aaed54467"],["/2019/11/19/Python进阶知识点/index.html","0f9e3b2ac7ae0f8755357da03b556bc0"],["/2019/11/22/京东全网爬虫/index.html","6cdb777ab0f38f703773e80d3013bf00"],["/2019/11/23/JavaScript的简介和基本知识/index.html","2e25ae0838d925f29a5f8c69e3ca82d6"],["/2019/12/04/README/index.html","b149fb0e365e4fd482c0698cc5af8cd4"],["/2019/12/04/java简介/index.html","c272776b7038a36b0a46347487db1bc0"],["/2019/12/11/java基本知识/index.html","de39393b7e2e85829580ca81cfb0b4b7"],["/2019/12/17/Java面向对象/index.html","c87b9d3047fc84fdbfcca8a63b5d4884"],["/2019/12/19/面试总结/index.html","6c85ade32d5bea77c9b8b47cd0caafb4"],["/2019/12/20/SQL性能调优/index.html","bfabd3063eda81c092132f25ca6bc169"],["/2019/12/26/vue框架介绍/index.html","2aa8481be39397f642a3df9fe64ddf6f"],["/2020/01/02/12306自动抢票/index.html","b3788997c07b6e12330508b040bf1fee"],["/2020/02/24/flask框架/index.html","0f29785ff110163200e093d0c4ecccc7"],["/2020/02/28/docker以及相关概念介绍/index.html","00c7a54a4edd3d6d1d1dd50b5b00be67"],["/2020/04/05/python数据类型的底层实现/index.html","a48a8400e9fb475db7176cd667b1a961"],["/about/index.html","bab0b751d2ab8132130162729e53cd57"],["/archives/2019/06/index.html","3762576eefc088af745dbc454edba548"],["/archives/2019/07/index.html","8dc31c3ea30112f3ef60c11fd11d5ded"],["/archives/2019/08/index.html","6d10cb6640630767f2c0d58a90e4f07e"],["/archives/2019/09/index.html","6f7871c873a3309f19fe36c5d7f39f3b"],["/archives/2019/10/index.html","4244189a588320707af5a0f3ab545b6b"],["/archives/2019/11/index.html","5fb527fe44ddfe2078973279bd199089"],["/archives/2019/12/index.html","dbc16cb306985ad374e6db5f43f9d388"],["/archives/2019/index.html","e71d719088b4386d4955aeea86140cec"],["/archives/2019/page/2/index.html","96ad4194fb6a4f763b60d94377447c66"],["/archives/2019/page/3/index.html","e74bc79d37585a392052efcca2fda4c2"],["/archives/2019/page/4/index.html","084aba3994fb34669772508cc7626a9c"],["/archives/2020/01/index.html","44a8861ef6dab8d183d646109bd9aa8c"],["/archives/2020/02/index.html","040c522574f052d2c4bd9a486e26abd1"],["/archives/2020/04/index.html","c0c3910c9de7d64e95317c0d928a49ca"],["/archives/2020/index.html","78b95e5c17f2f2eebc21275e02e8f04d"],["/archives/index.html","f647504a858e358cf891324295a9a6ea"],["/archives/page/2/index.html","e2af49e89867d7313d29dffaa508b295"],["/archives/page/3/index.html","8c22606b83a06599426316746e987936"],["/archives/page/4/index.html","83663e532b8c46c3cb77f4c7480c5a11"],["/archives/page/5/index.html","08b47b254482e893276448097822b8dc"],["/categories/C语言编程知识/index.html","34e375ad3e20291421c6e38120c23d54"],["/categories/Hadoop/index.html","91b39892ac8bf4b193bf32e216af05cc"],["/categories/JavaScript/index.html","653d9881f2dc47912d0376357ab45aa8"],["/categories/Java学习/index.html","6ff8339f7458ffbbad4d3978c1353cde"],["/categories/Linux/index.html","c42ddfef253ffd1d8f7802d812b5bf96"],["/categories/Linux/常用命令/index.html","6d7b208be316e961c8c9170e394d9491"],["/categories/SQL知识/index.html","c3e077b329575f0f27e3c34be4de34a8"],["/categories/docker/index.html","ed769587cbe3d297101c3145aceeb975"],["/categories/git/index.html","9a5a0298ee0719abd556b0d3fdcd0aaf"],["/categories/index.html","bddc6e1e580da27971bd4ed30d044532"],["/categories/python/index.html","d4d9578a891b0fc173c2454c4d33fc4a"],["/categories/python数据挖掘/index.html","409367b34467f08ab844fcee6ba643a0"],["/categories/python爬虫/index.html","470283a018ecddf36b1ce943742fbbe4"],["/categories/python的web框架/index.html","099e9f6a91e79816bc2dea4352a25a13"],["/categories/python编程/index.html","8e98668d430866ce06235d8b59b498e4"],["/categories/python编程/page/2/index.html","803dcec60169d1c5e850b2e84a6ab6d9"],["/categories/selenium知识/index.html","d6c2032892e40f59a235c55ef7f1d7d7"],["/categories/个人随感/index.html","416a7a11cc3340e9a2369170605dea6b"],["/categories/前端学习/index.html","06f9c9dd1af01f66ee9da6d9d2f511b0"],["/categories/数据可视化/index.html","0c0d5b5193e0900ac6e7cc4256b8e047"],["/categories/正则表达式/index.html","e285144ac8e3b765921a25d14e8ee1e0"],["/categories/算法/index.html","d8b801e4d70b393af7652bcd0a85c541"],["/categories/算法/五大经典排序/index.html","b4951dfe1ed3b1db01f740bde81386d8"],["/categories/统计学和概率论/index.html","19d5df59518a3358cde7623e86d3e27d"],["/categories/网站知识/index.html","24573e91f97db2fa6c12465b3d3362e2"],["/categories/计算机组成原理/index.html","0b3bda76e72075cc9815bf483db88915"],["/categories/面试经历/index.html","f4c9bebe4b1fe2855f8ea97673525e5a"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1ff2714f772be344abcfc6acc0899a45"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","a6d6dc5700e756cde66ae67e60dd6459"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","eaa7937e380533ee6966fe94846c5894"],["/page/3/index.html","20dfec3e1b9503bc030149f99afaa6df"],["/page/4/index.html","2bd785cd9744fd43b7feb20de2999b7b"],["/page/5/index.html","a6da22f2fef888962304ca441686c3dc"],["/sw-register.js","b3e6399b689ff52658d00b82206dd62f"],["/tags/Django/index.html","59cd1977552f5e73e67ce57dd2aae321"],["/tags/GIL锁/index.html","6e2fadcfd21cde4822a5a8836e015c83"],["/tags/Hadoop介绍/index.html","697f7f9617335eef10eb1d0102b66a7f"],["/tags/Java基本知识点/index.html","b2df374dc6638aea76f7c67458c9cef7"],["/tags/SQL调优/index.html","ec56c86010da8e02d5af31d04f962a31"],["/tags/Void-知识点/index.html","6f7a7b39c5bbc7a4d56c5817161840f9"],["/tags/Vue框架/index.html","8a35e25f19c1a2331b4f26b419163e52"],["/tags/docker知识/index.html","7b06621b57314505d862bdf3d0f278cd"],["/tags/flask/index.html","4c698b99b56519beb85335b78acae957"],["/tags/git命令/index.html","1aa62b0f4bb4334de1c2cbacfe6d6a95"],["/tags/index.html","ae0bd3e1e95e02b335de2a6dbef3eb06"],["/tags/js知识/index.html","46eeccde2038440117c665d2d0d464e7"],["/tags/linux命令/index.html","f3424d0ca58f807697a7ae0cbde51eda"],["/tags/pandas函数/index.html","e4aae54cfee92a605314d9abe043e4ea"],["/tags/python编译器/index.html","dd27befbb81ab1966494ec8c0235378e"],["/tags/python进阶/index.html","7c7e5f2a1ba715554b4a46c2e6b30b71"],["/tags/scrapy框架/index.html","01eae0eab728dd8ba045c89ab5fc12e6"],["/tags/selenium/index.html","eb7e300ec2811447e2bc442b0be35580"],["/tags/协程知识/index.html","4b28d73f92678912db8e606967ab44f6"],["/tags/基本知识点/index.html","d4a609c1a4bc2e66f2016c3d8d064583"],["/tags/扩展知识/index.html","56842faf7d54a3903cd66cdc183e3a5b"],["/tags/排序算法/index.html","9a355859582a5e4de8992a53e081e3d7"],["/tags/数学知识/index.html","fd1e1097ccccc6b7378a15fa65b40298"],["/tags/数据可视化概念/index.html","2047c22967bcbce02a73a54846f0daf7"],["/tags/正则/index.html","bdaca5cc41edc3246b103063dd6208d9"],["/tags/爬虫实践/index.html","27df837d36a06997a028979c17eb18f4"],["/tags/线程概念/index.html","f99893bf1d88d250d840d3a6327bba18"],["/tags/网站的基本概念/index.html","6cdd28380a70953112d00c18198dc848"],["/tags/网络编程/index.html","bcb709cf9ea9e18cd4d81acc74a6d8da"],["/tags/装饰器/index.html","8e9153fc1cfc6afd539f210b6081ec1f"],["/tags/计算机知识/index.html","22f138f412900e9c33336798312323fa"],["/tags/语音识别/index.html","d0cb067c985f44a0521493c01cdfae8e"],["/tags/进程-线程-协程总结/index.html","d582dc6421c860d84fabaa3bb84d8c84"],["/tags/进程概念/index.html","f0ee352006adbf85bf9216101fd85008"],["/tags/进阶知识点/index.html","23ea6fb2453e14bbd99f7fd68bc7e178"],["/tags/面向对象编程/index.html","da89bc95cff2db77b69b96d8c81456c4"],["/tags/面试总结/index.html","6665651312f14bf2139433dd9eed443f"]];
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

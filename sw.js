/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","b14d1d08515932c2c2f292c64a39c284"],["/2019/06/26/four/index.html","7fe8256ee70ca6a5f612d10d562d62a7"],["/2019/06/26/python解释器介绍/index.html","bb7a586afa1ed6573ace485f4295ff1c"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","a124e4f73dab24a115b88655edca2b1e"],["/2019/07/06/网站概念/index.html","e03816502390d3cd981a00871c15e936"],["/2019/07/11/数据可视化笔记/index.html","7f87fb2805f4d90a593935aebb84c988"],["/2019/07/12/语音识别/index.html","dc5a14d96569d97172f1d2e94549be3e"],["/2019/07/14/hadoop基本概念介绍/index.html","9ae382c8a7b5a29773fd6ee032f5532c"],["/2019/07/14/数据科学笔记/index.html","eefe2c87999457450c19a3b84ce6ba3b"],["/2019/07/22/python爬虫/index.html","03dfc7e1fafeea3baaa43edbd6802a59"],["/2019/08/25/pandas函数/index.html","2e47e0e5e76129bafa4ba12e83b382b4"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","65c33f8d904d328f557917a347424987"],["/2019/09/30/C 语言中 void 详解及应用/index.html","378ee7579e47547ad92b8c48d38dc2b3"],["/2019/09/30/第一次面试总结/index.html","c49d96da6fe0eec8b8230c111391343d"],["/2019/10/07/django之url规则/index.html","3360aecace2a23751d3c3e718da08175"],["/2019/10/07/django配置初启/index.html","59851a3cd2d9314fdbc67158fbf602ca"],["/2019/10/13/C语言笔记1/index.html","776812e215028d6081deb5b564a0a3b6"],["/2019/10/13/C语言笔记2/index.html","08f82c4d6566ad7e2d68d0bf7a236ce3"],["/2019/10/19/C语言打包技艺/index.html","97a816b3f2d3f393dd18df2a9dc317b6"],["/2019/10/22/c语言笔记3/index.html","e3f061f5d45194a1a3b7d2de241c60aa"],["/2019/10/27/IP代理池/index.html","a008e8e2c3ae28b15d8a53e5ebe7fce6"],["/2019/10/28/git命令/index.html","61c47de3101dc3b6cd9ba82b79660ce7"],["/2019/10/31/斗鱼弹幕抓取/index.html","37b0429aeca3a2bfa9b0894258efcb6b"],["/2019/11/13/多线程/index.html","818be32a9e3a556ec922e8535f1b7b6c"],["/2019/11/14/多进程/index.html","d3f3602b9a452cbd5c5867e8f382a7f7"],["/2019/11/15/python类的私有属性和私有方法/index.html","e981a9873d033d0ee1af3bddd71216fa"],["/2019/11/16/协程/index.html","4a507e638aa2dc171034ea6a78ff2177"],["/2019/11/16/进程,线程,协程对比/index.html","f367914c472b762168e71a307af0b2c3"],["/2019/11/17/GIL锁/index.html","4c64baf0c5f844efa3025e0709f543a0"],["/2019/11/17/闭包和装饰器/index.html","93f35282d0f9e7cf4d9a18a6530834e9"],["/2019/11/19/Python进阶知识点/index.html","0624a18da184864200c8cfd1a29e6387"],["/2019/11/22/京东全网爬虫/index.html","6fc63078a9617e80c41a3947f186ce2d"],["/2019/11/23/JavaScript的简介和基本知识/index.html","981780b7744eda33a4772b5b95ba7ec7"],["/2019/12/04/README/index.html","dd31d9402c024bbba5c39ba324348468"],["/2019/12/04/java简介/index.html","9fabe4ba264b5e21a57bea05b584c9f5"],["/2019/12/11/java基本知识/index.html","332f62be1e3be0195992e8a23472a4bc"],["/2019/12/17/Java面向对象/index.html","6040a3820db7d893594ebb1ca3ea8112"],["/2019/12/19/面试总结/index.html","afaf11352d2c7f0049a59da47a05f9e9"],["/2019/12/20/SQL性能调优/index.html","7674cf9c89bae551f8def3ba1cb34db0"],["/2019/12/26/vue框架介绍/index.html","f09673264cc0716889f0a8146582867f"],["/2020/01/02/12306自动抢票/index.html","c2668e704b0559f8b7ea293a44e284ef"],["/2020/02/24/flask框架/index.html","bffaa7e8a8a238347c2471ccbf247873"],["/2020/02/28/docker以及相关概念介绍/index.html","a55565e1de5877cd8498a2fab4ba47de"],["/2020/04/05/python数据类型的底层实现/index.html","41130c9c3a2dc81eeaa22acd596a84ee"],["/2020/04/27/查看mysql连接情况/index.html","20448950cc4d8b2616f1a3e054e75ec0"],["/about/index.html","7cc1bc5de77e11a1d2542d04576897bd"],["/archives/2019/06/index.html","02befecb33d8db59b40ce92b721d53b6"],["/archives/2019/07/index.html","59cff851039723406f9c85a3e6bd93ae"],["/archives/2019/08/index.html","88d50a0953fd9f88c15ffc21f6a65c95"],["/archives/2019/09/index.html","465ab489834372e1cf35210f45f0c34d"],["/archives/2019/10/index.html","003e6dd7557eb369e8f483c92450c9f5"],["/archives/2019/11/index.html","a4989ab086073f85e17ad4f8bce67824"],["/archives/2019/12/index.html","9409b2c1e4bdcbf9a84fe7d26f532b53"],["/archives/2019/index.html","5b8f3c4bed7da4faef9743cf03146b40"],["/archives/2019/page/2/index.html","e1fefcf650f57c363520574846251cf2"],["/archives/2019/page/3/index.html","25d85474953879f652b224a39dfdb4e3"],["/archives/2019/page/4/index.html","4d22a0039f187cf3fb2de8249539211b"],["/archives/2020/01/index.html","61e4fd29efcb848736a64936ed0268e1"],["/archives/2020/02/index.html","e0b804f7efabee9eb825fd0cb5e52cc1"],["/archives/2020/04/index.html","08ed5b4cf6b4d3ad67fc787cf40f608a"],["/archives/2020/index.html","554c1b7b6496c9ca22595ed480a99470"],["/archives/index.html","dd9c93ebeb0440419956af8417a22cf5"],["/archives/page/2/index.html","a94b056119a9995ca2f058a9d1ddf1c7"],["/archives/page/3/index.html","470902ce0d7f279f6d8cd43e90489149"],["/archives/page/4/index.html","43433b2ecc8c9da09935111b92ebe57e"],["/archives/page/5/index.html","492f6be61dc928ee14978368ee817bbd"],["/categories/C语言编程知识/index.html","770fbc523105aac4230fdf94b2fd9837"],["/categories/Hadoop/index.html","578e8c863e1c3729be322c84368044f0"],["/categories/JavaScript/index.html","a19b813482ba9be50160283f02484f52"],["/categories/Java学习/index.html","74e4ee05e77d51de36da29e087b5b849"],["/categories/Linux/index.html","ee2107c93e0856559593c20612b5f0da"],["/categories/Linux/常用命令/index.html","2b030c3aa0b23bfd3588af3ff49d4af1"],["/categories/SQL知识/index.html","78f51fd6cad624ba7583162e573b9aa8"],["/categories/docker/index.html","34789a7efae2dca60b878e6835e90b94"],["/categories/git/index.html","72e948ed7d807d325d234a98f928bded"],["/categories/index.html","68ae2c93e061128dbbdc59ce66009ddf"],["/categories/python/index.html","038b0d6e4952c66dbdcc79382c806342"],["/categories/python数据挖掘/index.html","de51d33d93f0e1953a365ca54e9df119"],["/categories/python爬虫/index.html","4503a81b3eb24d509d4588873a5e99e2"],["/categories/python的web框架/index.html","04a5616dc765d0f3beda45789261af4f"],["/categories/python编程/index.html","2e81c8a6c77b57dd1881835f5a8b243c"],["/categories/python编程/page/2/index.html","4370b6e9438d9baec9d1f12bae5741cf"],["/categories/selenium知识/index.html","8146cf8491532261f989d299937a88b9"],["/categories/个人随感/index.html","40719df4c0b29fd7691edd9b883c5ed8"],["/categories/前端学习/index.html","0c91545ce5b9809411f7d201913c1424"],["/categories/数据可视化/index.html","db8507f675d244ac003b6dc1192e573b"],["/categories/正则表达式/index.html","c6d04954ec73ac156d0b01a577f38945"],["/categories/算法/index.html","f5a5586d5771f8bb6d70723a3005bf24"],["/categories/算法/五大经典排序/index.html","2c35c459f647eb777b1e23a50a422610"],["/categories/统计学和概率论/index.html","6ece5973749fcbe0cd01aacd5e25f952"],["/categories/网站知识/index.html","c1d2a0c779f6dcf2ba25f92f0183d1cc"],["/categories/计算机组成原理/index.html","639900d698ce5b55b3ce4f4b2d5135af"],["/categories/面试经历/index.html","e9b51c34a765c4f4de9f1deca1e88b92"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","4bc60a1e904970add25b9c5dd5887d63"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","55ffd88dd8494d86f56e52dbe5b86c9d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9242488454bed01848b390f8931fb0b3"],["/page/3/index.html","fd727475a15e6b5cbc6bdae87ce4f51b"],["/page/4/index.html","8f907189ebc14035a12bf11eb4ec71fc"],["/page/5/index.html","958e8ab793f4005c6b4f57d7043d3832"],["/sw-register.js","7c90a4fe953d630be4b5879f50aa1943"],["/tags/Django/index.html","0a496593b78f4f021fb5e977ad26abbb"],["/tags/GIL锁/index.html","79933995da607b1d2d906758c203f4fe"],["/tags/Hadoop介绍/index.html","2dd3d606f04cabec45dcebb6f5b5edc2"],["/tags/Java基本知识点/index.html","dca76e3a27f479440b52fbd469604236"],["/tags/SQL查看连接情况/index.html","95b60ecc3b9e5ea1a70f4acb5d7d1d12"],["/tags/SQL调优/index.html","f0202efcdd9593ab7fa5a0fe9c5368ed"],["/tags/Void-知识点/index.html","a1d610305d88885015ad3ba3be16d7ef"],["/tags/Vue框架/index.html","556cedd28c9d5ddd0510e6cc2b7ea47e"],["/tags/docker知识/index.html","1b3906e08175d8733ed130f0014df58d"],["/tags/flask/index.html","d6c66371f870af6f412d5bc80aa61129"],["/tags/git命令/index.html","d078d2ce36f62e192c9a79820b4ab357"],["/tags/index.html","80d4c94b41d6af2a8efe83432acd4a76"],["/tags/js知识/index.html","117bd1a70bd639f991899f197c075d47"],["/tags/linux命令/index.html","ff87a884d36889ec11ffd60d05fec2b8"],["/tags/pandas函数/index.html","723b1511048fa8aade09b41202191693"],["/tags/python编译器/index.html","c6448780d456892f0a5f571e3c576033"],["/tags/python进阶/index.html","e4e6fb8a885e79ae122b48debe25b95f"],["/tags/scrapy框架/index.html","6060a59d6e49ea23258a2ce1f2db0ce2"],["/tags/selenium/index.html","5b4448a6df4aa87f13b5f0d5c6049c79"],["/tags/协程知识/index.html","a0b6dcb31199d1c7f715376445afcac4"],["/tags/基本知识点/index.html","46a80750a131e00d6154d00c70ecf1c2"],["/tags/扩展知识/index.html","4497212383a39dc28a306f560388ffd6"],["/tags/排序算法/index.html","8ebcf271233db67b3f855e0d266d1422"],["/tags/数学知识/index.html","38e521cff2a9742577a2f5eeb6b82f01"],["/tags/数据可视化概念/index.html","5d997dad72b86e85c53be0ddc67aaf85"],["/tags/正则/index.html","6eaa2b875877fb9caa4866a3e0b6bf8b"],["/tags/爬虫实践/index.html","a50714da476b4b79a1296645bd24ee5b"],["/tags/线程概念/index.html","42432fc2553e2883dede62edc95d7f50"],["/tags/网站的基本概念/index.html","2426a1c54b616a717ebb6d334534afbb"],["/tags/网络编程/index.html","63447fee8e22cf261ac29aaf00bd6794"],["/tags/装饰器/index.html","2aa75700fdf68de6be6046ca182b1770"],["/tags/计算机知识/index.html","64b9b5cb0550769d276bd110422460ee"],["/tags/语音识别/index.html","ff811fa56588f3d135f498907d482f8d"],["/tags/进程-线程-协程总结/index.html","e8f4a3bbba9ec93c7a713413c91edd28"],["/tags/进程概念/index.html","414b2f5d824380ab97f1748a4f81d4bb"],["/tags/进阶知识点/index.html","d26189ff2d81ab32b8e8983f407e406d"],["/tags/面向对象编程/index.html","e142a9f370e3c3088c73c952dbc31b0e"],["/tags/面试总结/index.html","010338c8e8d09477ab3250d6eeef843e"]];
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

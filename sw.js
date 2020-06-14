/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","a049c939ca0215a323c4501d0cceddbc"],["/2019/06/26/python解释器介绍/index.html","bc3643494d21c4773de127c7a632b9ed"],["/2019/06/26/正则表达式/index.html","6e188f023803b7d0ea1b032ca64b282b"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","0c7f4228caf39a1afec4ab602bccccda"],["/2019/07/06/网站概念/index.html","1364629a78f15ff57caee98ed2d26625"],["/2019/07/11/数据可视化笔记/index.html","a298b3e2ee332470b939a1b1703df2ac"],["/2019/07/12/语音识别/index.html","20cd22e94830485f4183d60d19e13fac"],["/2019/07/14/hadoop基本概念介绍/index.html","0816657534134fa355594075f417e8b3"],["/2019/07/14/数据科学笔记/index.html","0fd17153c87ce99918a0fa74b8baf256"],["/2019/07/22/python爬虫/index.html","a4fd39c7a9c76c77126d6d4f9d41f809"],["/2019/08/25/pandas函数/index.html","7ffc525617e963b74e27dfc314b3a8dc"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","0027c2135cc2883f0e404f2f931777f2"],["/2019/09/30/C 语言中 void 详解及应用/index.html","d22db1833dd1b3f850c39673e87ee71c"],["/2019/09/30/第一次面试总结/index.html","9a9bdf39d3b4b51a3cd94bd0a4da4934"],["/2019/10/07/django之url规则/index.html","0a7dfeb00e54513a828e57d57562b94d"],["/2019/10/07/django配置初启/index.html","04925f5cbbc714eccbfa9f87701ee619"],["/2019/10/13/C语言笔记1/index.html","8e70703a95e3390f906be51be207eb64"],["/2019/10/13/C语言笔记2/index.html","2f01f78feacae53f3d8d90ab02ec6b65"],["/2019/10/19/C语言打包技艺/index.html","1ae560b3872fa7fab81ad57feaf1bf22"],["/2019/10/22/c语言笔记3/index.html","33a2e08015eea59caad6443df74aa2f5"],["/2019/10/27/IP代理池/index.html","376b4a62f9bbc2a95af8f90796fdbbd5"],["/2019/10/28/git命令/index.html","0c22180519dc7d8b91519c3226e3ef68"],["/2019/10/31/斗鱼弹幕抓取/index.html","f121410319f6cc91eb96c236e9393469"],["/2019/11/13/多线程/index.html","17dfa14c5d2f4110bbb428e3acfb6410"],["/2019/11/14/多进程/index.html","eb0856b317e7ba7161816639e199ea6a"],["/2019/11/15/python类的私有属性和私有方法/index.html","73f3acb1e3d69209335d599affbb7dfa"],["/2019/11/16/协程/index.html","ca6fd825d2629e331efd321562d059ec"],["/2019/11/16/进程,线程,协程对比/index.html","9f757f9290ec5ab43854602f8efab027"],["/2019/11/17/GIL锁/index.html","3c5e8566b53578fda6525d006220e108"],["/2019/11/17/闭包和装饰器/index.html","a379b588c8347757dfc0780d41323035"],["/2019/11/19/Python的模块和类/index.html","472d4f57a54cdfde141e2c86fa3cb840"],["/2019/11/22/京东全网爬虫/index.html","0b8bc75ca3159d036d7a49393d068aba"],["/2019/11/23/JavaScript的简介和基本知识/index.html","c214a2ded7ee3e991f7bf5d24bfaf26d"],["/2019/12/04/README/index.html","62b4a9d27bc9df59fabd67f93568b1fd"],["/2019/12/04/java简介/index.html","e210fa7cead79b104ddae289131a2e2a"],["/2019/12/11/java基本知识/index.html","a1c87870fed8a885d86a05c74cd904b5"],["/2019/12/17/Java面向对象/index.html","1e37f155d9557c52950262e2bc97d4ab"],["/2019/12/19/面试总结/index.html","147527cc701fb4c73abd5fbbe43d9258"],["/2019/12/20/SQL性能调优/index.html","66f4b77aff07c75da87f25d82f9f8d66"],["/2019/12/26/vue框架介绍/index.html","c5e5c1bced032a8e9c9aa78d42fce03f"],["/2020/01/02/12306自动抢票/index.html","6a91e93366b47b61f4dad21646451b87"],["/2020/02/24/flask框架/index.html","80a2b08a451cf3b64d67f9c03fee0e27"],["/2020/02/28/docker以及相关概念介绍/index.html","e8f28c64e6a7bc12b1bcf93eb37ba213"],["/2020/04/05/python数据类型的底层实现/index.html","01a5842fe6e58d70266e442d2ea170f7"],["/2020/04/27/查看mysql连接情况/index.html","900997cf8d00e03480075fff1426609f"],["/2020/05/02/Linux操作系统核心知识/index.html","65e4b7cbb324b78ec402cba4996b240e"],["/2020/05/02/计算机网络/index.html","0327f000eab1752f6e5fd4526c93cb6d"],["/2020/05/06/Linux操作系统（二）/index.html","4790054bb924aab2fd8da1fea61ade3f"],["/2020/05/14/python函数补充/index.html","4c54a82a3eb4987fdef7bffab78694e6"],["/2020/05/21/python核心模块的介绍/index.html","14620da0df0e91ce25fe234fd98af351"],["/2020/05/21/python高阶函数的定义/index.html","bef9675ce8366a3d8bf9954993376478"],["/2020/05/23/Django后端演化/index.html","6b5590a67dcc6657878f173ba2458b6d"],["/2020/05/29/Mysql数据库函数/index.html","ede64cf262e23e3314bd9d9cc1db9b33"],["/2020/05/29/Python面向对象/index.html","a939f65b06633ee7c4b75cfa74c04f4b"],["/2020/06/02/Python 中的上下文管理器/index.html","0f4c4c4f1daa68d8b4a28c4e826323f3"],["/2020/06/02/Python类补充/index.html","0d8d68d2b69fdb8d97235ce6e2b42aac"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","70a2cef0a34cf774f2de59ef88c6c29f"],["/2020/06/07/MySQL数据库引擎和数据类型/index.html","d66082c99b9939f221578d5ecb05029d"],["/2020/06/07/索引和事务/index.html","1d76d109270b1a2679baa892e5321372"],["/2020/06/14/Django参数和模板/index.html","5944ddf80c222f550f77ebdc077cdf58"],["/about/index.html","5aa1bfea40dba52c23f3256f7fed14be"],["/archives/2019/06/index.html","ee4595925671f36ddbd3e8f68ddfed18"],["/archives/2019/07/index.html","a61886be5c721de596f96294f1475a86"],["/archives/2019/08/index.html","04a31973b51c1178b2cd1cbc28ade436"],["/archives/2019/09/index.html","207745104fa1cc653a71f27e0fe11128"],["/archives/2019/10/index.html","216be9aa42cfe2e26528d3c8b6b4a76e"],["/archives/2019/11/index.html","10bddf29bc7c13b394d6577c816dc33c"],["/archives/2019/12/index.html","73e8edfd5461635b1425d4c9fd126d4a"],["/archives/2019/index.html","e52c3de57b2d6a623e046aabbcf3e5cb"],["/archives/2019/page/2/index.html","fe93918f5330ed927f7b31ca6d745fdc"],["/archives/2019/page/3/index.html","2e91a134fb1f8106dd90b31cc7fb318c"],["/archives/2019/page/4/index.html","cfa4605c88827348af1ffbb0f1879e6e"],["/archives/2020/01/index.html","3cc1eefa50076e216092922ef35e69f2"],["/archives/2020/02/index.html","b8e1a89ae2584d35e92064c773c683dc"],["/archives/2020/04/index.html","05da430acbbe44db2cc6acfbff3a218e"],["/archives/2020/05/index.html","b3892891002e78953334c4d35d46f142"],["/archives/2020/06/index.html","690c4ce481fa691a137052dec4ebcdd5"],["/archives/2020/index.html","68282c06930dbeb020b361ff68200289"],["/archives/2020/page/2/index.html","e8fc963bc6ae51bb35434d8065181d1d"],["/archives/index.html","780089ce39d289e9b4efca36d7d68831"],["/archives/page/2/index.html","2b9db81f5bf2f015184a2aaee181ff76"],["/archives/page/3/index.html","a80b51be99e0d8614fa019d0aa4f044e"],["/archives/page/4/index.html","aa56752f340ee0f3991f3a03eb4b5ba2"],["/archives/page/5/index.html","04eb2356009a8c375f961403b929ff75"],["/archives/page/6/index.html","e9d130377fd45b8299396b450f715340"],["/categories/C语言编程知识/index.html","5fc46c5bdbf161183de1adaade410d54"],["/categories/Hadoop/index.html","b23aee840f90f1c3be296f66db657ce1"],["/categories/JavaScript/index.html","52238aef7dbe7cb70843a87f4b237489"],["/categories/Java学习/index.html","868a9c35c0dc3341b87ee579975dd59f"],["/categories/Linux/index.html","3610688bcdd38b2426c9fb841e888a53"],["/categories/Linux/常用命令/index.html","d3fd62d8351761f80e39bfd15666cc9e"],["/categories/Linux/核心知识/index.html","0903e1c3e7eca58174ee3f96496e4839"],["/categories/SQL知识/index.html","2004ce8b136a46616d0c713900f9a6ee"],["/categories/docker/index.html","8204aa6c4cd1818bc93b3ee47d6bd37e"],["/categories/git/index.html","0f9852782d1687db2c5326f2f6067acf"],["/categories/index.html","f8cc33108ca8be9817923a9221712915"],["/categories/python后端架构/index.html","8601f61775957d79367550bb559eb9ea"],["/categories/python数据挖掘/index.html","57708897d05b4b0d4e3a77a9f6955051"],["/categories/python爬虫/index.html","baa7ecd36c3c3c89d13698238bf5c6dd"],["/categories/python的web框架/index.html","a31314342f6121c58af79482678c1943"],["/categories/python编程/index.html","50966fa6849cbdabba1b9cbda172248b"],["/categories/python编程/page/2/index.html","15ebd682e6e62cced2beffc80b9fe3d7"],["/categories/python进阶/index.html","142d9ed81355c37ccaca0c1aaa6f05d0"],["/categories/selenium知识/index.html","8b10098c0ab483af607c2f7f019523e9"],["/categories/个人随感/index.html","cbc6641c399f9313f5b549c6dcd5c85f"],["/categories/前端学习/index.html","6a598e1f5055b6fde4dd95a636ed4bf1"],["/categories/数据可视化/index.html","3a403a6883d813d65e6689199f479e43"],["/categories/正则表达式/index.html","ac95457d79f5285e8c08dd0aad1649ca"],["/categories/算法/index.html","0d1b70c7b1fdbbfd1b058b7c7e38a479"],["/categories/算法/五大经典排序/index.html","7cc94d6f0de2ee9cbfd939df440dc4d3"],["/categories/统计学和概率论/index.html","dcb7eb7ee81ae61dee7836f52d1c5cc1"],["/categories/网站知识/index.html","f6af6626d32ba49912895d3f8e8a7933"],["/categories/计算机组成原理/index.html","b6ccd33c5f6ad69c0ee1e43420da14e6"],["/categories/计算机网络/OSI七层协议/index.html","6d3e762066d2db26490c26dcb5b95533"],["/categories/计算机网络/index.html","ad2d5c16c0fc84a2fcc6ccad8d452b49"],["/categories/面试经历/index.html","7c29710b98e152ba26226845f8c7c947"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","af486fc0163b30469d3b2721a04bcc1f"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","b7399075ec5f151984d3a9a79b73a24f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0226ddeb0603c3fcfb9778c99838f6e2"],["/page/3/index.html","9a6617a701e728d1d90bc4ab7f2376d5"],["/page/4/index.html","1e3903e427b1c349883e7c64cb284ea8"],["/page/5/index.html","13d7e8d87965d8ec8ea6e546f801c819"],["/page/6/index.html","498a47ca8c62647331fc746eda107853"],["/sw-register.js","084ea412fde2956eef99b7c2c08ade31"],["/tags/Django/index.html","3b7e5fa0326f39e309623d58448c1828"],["/tags/GIL锁/index.html","29db09819654bd30f5e8d341914a1030"],["/tags/Hadoop介绍/index.html","87ef7175e502015f709c1b12cc8f2e5f"],["/tags/Java基本知识点/index.html","20729457a2123c16fd3b944211078146"],["/tags/LinuxLiunx命令/index.html","56410046798ae38680f57ad30d55d8d2"],["/tags/Linux知识/index.html","4a48a336cbabfa99b2281d674bc6392d"],["/tags/SQL函数/index.html","98a65f02e095c75076a33df6775f8f9c"],["/tags/SQL命令/index.html","c0536a7940aaf0aa095ba5f0941c2d2d"],["/tags/SQL概念/index.html","22553d50da6e07a7b2b1c106dd8e8b8b"],["/tags/SQL调优/index.html","33864f15e67ae40c498ab31909ad882d"],["/tags/Void-知识点/index.html","a296933dc6b4df791631210061e6b31f"],["/tags/Vue框架/index.html","73b4ee700cbef5508cc23deddc7710c6"],["/tags/docker知识/index.html","f58f912f0c500af426a62564091f44c6"],["/tags/flask/index.html","1dc64733f13434a9d371f97869f4dc8b"],["/tags/git命令/index.html","d45f7e0142bcb29e976a9506603844fe"],["/tags/git配置/index.html","74c19462a9af60fb6ee49a64520e2736"],["/tags/index.html","e223c9d10d7a6c795d76328ed259eb8a"],["/tags/js知识/index.html","2278f40fa6ec087e55c7d97ff87428fc"],["/tags/pandas函数/index.html","77e62f562d376b57d6886535178c52b3"],["/tags/python编译器/index.html","be52d8ed852062ca3e4ceffaf00f1c89"],["/tags/scrapy框架/index.html","0bdae919e53253db03f710d909e41807"],["/tags/selenium/index.html","bef15adf786fd697d8c7a86f75e4c88f"],["/tags/上下文管理器/index.html","32c40492c9df85895f7dedb0a19e1617"],["/tags/函数补充/index.html","0616cfbc6c7b3bff7d2ea863ffbc7ae3"],["/tags/协程知识/index.html","db0122278605fc51e6c57d57f08d80e9"],["/tags/基本知识点/index.html","13bb6c08515f060fa08fa7d59992946d"],["/tags/底层原理/index.html","b0a7b572ee3017b21e24e2c29f6e9253"],["/tags/扩展知识/index.html","7a094716ced478cae9aab9bbb8d9c942"],["/tags/排序算法/index.html","68663ce38d1a14ef24d2556ea014cd0a"],["/tags/数学知识/index.html","175d3347f6686978384f6baa15d5af55"],["/tags/数据可视化概念/index.html","ccb417907b8e0a437ac1cd0de623fd17"],["/tags/架构演进/index.html","689b2dbcf475283155f45aef0e37e2d2"],["/tags/核心模块/index.html","868c6997640902344e9e85074608dbc3"],["/tags/正则/index.html","9e41473868405445ca69181a9f8e5dbc"],["/tags/爬虫实践/index.html","6f8f330ce0479208c5b6c1485e64044f"],["/tags/类和模块/index.html","c4b9ad4ec5144a1e53be0315be66173b"],["/tags/类的知识/index.html","79a9445e52d4da47b9a984f0e60ac182"],["/tags/线程概念/index.html","7f0b0cdf5a9ba419a9290fb6facd8f43"],["/tags/网站的基本概念/index.html","57a647c2cdaa1c76b5cbc5317ccdd9c8"],["/tags/网络编程/index.html","967980ca95b366b890f14edcd16ac051"],["/tags/装饰器/index.html","f169df6a60a0579a6baf4ff93e4fca14"],["/tags/计算机知识/index.html","a2183ef6d328f500e2ec1a8c7248f390"],["/tags/计算机网络知识/index.html","67e2ecc76bb631aabbde658dcb07f889"],["/tags/语音识别/index.html","193a8a09ad61150f8feab92801dc4940"],["/tags/进程-线程-协程总结/index.html","50bed73518cdef1f5f964c6dbdf2b4ab"],["/tags/进程概念/index.html","2ed35737533e59efcd708c21c8869270"],["/tags/面向对象编程/index.html","4a9a211dd017da9849b8ae5034e8df14"],["/tags/面试总结/index.html","87310646ecff1e1246d1085b8a2751f9"]];
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

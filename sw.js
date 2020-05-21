/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","5a8a9397a31c83212dfa8cf517c775ad"],["/2019/06/26/four/index.html","e58ed584ce82f8b4c7e8fe4e24cabdee"],["/2019/06/26/python解释器介绍/index.html","01659e18a026cbd32b0a6d48cdf6eee5"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","9d823d468728e289bc5370ff663a415d"],["/2019/07/06/网站概念/index.html","ef7f3aedc2bf4caeb1802797222ae70b"],["/2019/07/11/数据可视化笔记/index.html","c487b8757a557544486348bcc3e790b4"],["/2019/07/12/语音识别/index.html","dc817fed04d1169ea4911df364c10569"],["/2019/07/14/hadoop基本概念介绍/index.html","c2e94d640509189b7f31f631c16b6e99"],["/2019/07/14/数据科学笔记/index.html","6f415bb74ffcc6cd15388e9454b9bc7f"],["/2019/07/22/python爬虫/index.html","d32850c73a96ea32f20dd82f8539b4b4"],["/2019/08/25/pandas函数/index.html","ce1c2d959a82ebc87b5e8c155d7db654"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","e2950f27c56c8d25b8c6ab63b9edbbbd"],["/2019/09/30/C 语言中 void 详解及应用/index.html","0cb16ca3656bc3318ad9251afa4d6ad5"],["/2019/09/30/第一次面试总结/index.html","4b9eda564a53e87696ffd331d90e12a5"],["/2019/10/07/django之url规则/index.html","eeda596f3a46479f7264d78821f3c730"],["/2019/10/07/django配置初启/index.html","3c4751b3eaa18821f22e25425d77a1ed"],["/2019/10/13/C语言笔记1/index.html","c601f4ccbb72b74e433d17334dbff9ce"],["/2019/10/13/C语言笔记2/index.html","fc5ed7db9826e67315f1db494858f3dd"],["/2019/10/19/C语言打包技艺/index.html","a9ffc09754cdcdd60bbb4d1a436ecafe"],["/2019/10/22/c语言笔记3/index.html","55cacb9451869cdb9a19f142fd0b55e3"],["/2019/10/27/IP代理池/index.html","a05ab53cd72dd3c0a253d4f7d2774c5c"],["/2019/10/28/git命令/index.html","a5f0f6561f3e4498bee7d9be25a3d983"],["/2019/10/31/斗鱼弹幕抓取/index.html","0c06c54eacf62e085ec32cb0b6be26f4"],["/2019/11/13/多线程/index.html","42f347dc594504869074087b7721563e"],["/2019/11/14/多进程/index.html","69369c035793603f842f981fbda02bc8"],["/2019/11/15/python类的私有属性和私有方法/index.html","03d66672eea69151c3bd9ea1f0f1ae4c"],["/2019/11/16/协程/index.html","cdf9b448d714fbd18cc7e4930ab20482"],["/2019/11/16/进程,线程,协程对比/index.html","d31241dcfae4ed3810a228aac709eb32"],["/2019/11/17/GIL锁/index.html","94ce0d6f0f317a5ea35f3dbcc8b7f45c"],["/2019/11/17/闭包和装饰器/index.html","eec480cec4ed435615ce5f6559685556"],["/2019/11/19/Python进阶知识点/index.html","0ed91d24f16dbffa51dc0bb48db7de60"],["/2019/11/22/京东全网爬虫/index.html","b6f9e0947c8bf69d71d373dbf1bf5bcd"],["/2019/11/23/JavaScript的简介和基本知识/index.html","9ed9b6c7626ddec4cb7ef1053f216774"],["/2019/12/04/README/index.html","e6834fa91c9d0a180f801ad5ca960a94"],["/2019/12/04/java简介/index.html","e24e141dced7b72d427c8b42eed082fd"],["/2019/12/11/java基本知识/index.html","9e6e9d709f77dbf4263ae4831bc094d9"],["/2019/12/17/Java面向对象/index.html","5e7a2a3ddd7ee018cb65491d9d50657c"],["/2019/12/19/面试总结/index.html","ca7aee831f55eb8917742e8b35d6356e"],["/2019/12/20/SQL性能调优/index.html","346079643106f90d116d20fdfff3f8b0"],["/2019/12/26/vue框架介绍/index.html","566df3adb4a6559b990f8bc87d69501e"],["/2020/01/02/12306自动抢票/index.html","41120e84e7a7b24c748c46aa523973d5"],["/2020/02/24/flask框架/index.html","f03be0a52bab5f729024224bb7a1eba4"],["/2020/02/28/docker以及相关概念介绍/index.html","e6b22944a5b8daa48827a7c900b95c1e"],["/2020/04/05/python数据类型的底层实现/index.html","db7e3471cd056d209f2d55780edb4952"],["/2020/04/27/查看mysql连接情况/index.html","8290d476532aa6789f92435b2c4b3ab1"],["/2020/05/02/Linux操作系统核心知识/index.html","f86da3294e78874e4871cb8d68b29053"],["/2020/05/02/计算机网络/index.html","0cab9c807b162949a132d3a8ffc041a8"],["/2020/05/06/Linux操作系统（二）/index.html","fd52f7e069626cd79a315fbc2cdebeb9"],["/2020/05/14/函数补充/index.html","c624bdd45986cb5f3f3a5a8ca8d30c9e"],["/2020/05/21/核心模块的介绍/index.html","962219d0d788d11307c04d4553e0e02c"],["/2020/05/21/高阶函数的定义/index.html","b5c47d22fb556cbded12fbde0c9481e1"],["/about/index.html","0e1286f8e0efd986295192de3b336cc7"],["/archives/2019/06/index.html","ab81703187353eea51bed747db2de1e0"],["/archives/2019/07/index.html","8d02b9c8cf8ba59d518858876e92ca27"],["/archives/2019/08/index.html","3265d27ebf2ea98b36e9fa11b625991f"],["/archives/2019/09/index.html","80a13c438e48574d04a767e4f68036e6"],["/archives/2019/10/index.html","4ff0fc5f7794904d162edd9ae69723f1"],["/archives/2019/11/index.html","93dfc52550bfcc5ef49d903df9480418"],["/archives/2019/12/index.html","009edc59eac180de13d04284ac350e57"],["/archives/2019/index.html","2211e52f4ac83d044b998ef26f4a3f8b"],["/archives/2019/page/2/index.html","f65ae855c43b7268cc01c5bdc65b59ab"],["/archives/2019/page/3/index.html","2317b4e7c696f66411b09015db58dda3"],["/archives/2019/page/4/index.html","445713f61914f28d604bb6656c894582"],["/archives/2020/01/index.html","5ba75dd41db2fc4b81c42426f9dd81d1"],["/archives/2020/02/index.html","19741b91d1d511fabc5f5e596a134999"],["/archives/2020/04/index.html","6322c9285ede81f63025fd2afc561af0"],["/archives/2020/05/index.html","33edb24fc5fc36325310e9c243a7180a"],["/archives/2020/index.html","fba10af6846e1e48814388550a444a38"],["/archives/2020/page/2/index.html","ffd83e2c5946baa6b356ba877ebaccbc"],["/archives/index.html","8e4ab0af734f03d87215e9a9712d1443"],["/archives/page/2/index.html","fc100052f09b2a91c1948a6375da3d1f"],["/archives/page/3/index.html","626871a0286a7a30eb6ca8d5b814a267"],["/archives/page/4/index.html","b5e95d40db644ddd0ec1b31145046613"],["/archives/page/5/index.html","faf82a3902f38e2915f31a0fccd48f76"],["/archives/page/6/index.html","2da144e35882c12e4c2d63277590a213"],["/categories/C语言编程知识/index.html","9e7c05b7a447259a793bad2fdff49479"],["/categories/Hadoop/index.html","4fd00ae686db34bc8993e30471e18bae"],["/categories/JavaScript/index.html","4a742ebf66fac00ca14d54a76b98360c"],["/categories/Java学习/index.html","b10b33e270f5cbd2833bd2112372dbcb"],["/categories/Linux/index.html","0e321ea7a17efe389753c71385db8031"],["/categories/Linux/常用命令/index.html","1d8f69016bc67bbfc1ca929158dc44ef"],["/categories/Linux/核心知识/index.html","0b75a805bb39b39b1eaebe571cd233b7"],["/categories/SQL知识/index.html","46e8083e0636282a62329717d5a64bcf"],["/categories/docker/index.html","36de13ccc2008b4bade2e8c60845a7d6"],["/categories/git/index.html","d0e0b691b97e7a86460f95663dba3d76"],["/categories/index.html","52b70f2d7bc34e16ff3a6b18ee6dbfe5"],["/categories/python数据挖掘/index.html","80a79044ff1d7df964439aa4d020f549"],["/categories/python爬虫/index.html","0c5d2e0006f1263a52cce79a2fa36a73"],["/categories/python的web框架/index.html","c33bdb432a7b727828f62957469e5bd2"],["/categories/python编程/index.html","5ab9fd6865df26f08f6128f8b0aeca7a"],["/categories/python编程/page/2/index.html","774493c5a5ae1d3cfa3fc0dc9ecfa181"],["/categories/python进阶/index.html","eca4e2e27305d3a79c9925e563431044"],["/categories/selenium知识/index.html","98b32d78d3e07d681d408b5903522f7e"],["/categories/个人随感/index.html","94ceb35b210f6b960b4fd64ff03a3abb"],["/categories/前端学习/index.html","11ce6a77a6f41b086064de23e089636a"],["/categories/数据可视化/index.html","5770b1faff402019a5a6a6c979d92c82"],["/categories/正则表达式/index.html","b91ffee803620b493ba03c774783a7fc"],["/categories/算法/index.html","b5311823289ee5864a7b13493e80c8d7"],["/categories/算法/五大经典排序/index.html","8f82c534cda009e42135f002b2739ed0"],["/categories/统计学和概率论/index.html","b8181f8f6567dc9296421f74b67f2a69"],["/categories/网站知识/index.html","41aefcdfcb5fd0e3d2f300d528273f1f"],["/categories/计算机组成原理/index.html","20dcc52a3ee67bb8ae4866e3e4d182c9"],["/categories/计算机网络/OSI七层协议/index.html","108417d9244a97dffbb5aa699bd76029"],["/categories/计算机网络/index.html","5e1b5bdff25f6b5a059db3e8408393db"],["/categories/面试经历/index.html","97022456a91f9408c55b203f3284471b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1a0f2b6f3ee2f81e894413b2b3d41920"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","5270e34f5395dc2b3063b4f6c731032c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","eacd63e348aed48386df705110cdc478"],["/page/3/index.html","81dce5a8f18cd03b76039b7435ec60d4"],["/page/4/index.html","874f3afcea67d0ad47a44a75fee95d9c"],["/page/5/index.html","8ffbe64875047366221ee79551964483"],["/page/6/index.html","540294aa30802f96fbd3dce3d7e7fd8f"],["/sw-register.js","681c4284519700e0736b4e6018448623"],["/tags/Django/index.html","47a774421ec20da89d3701588dee8055"],["/tags/GIL锁/index.html","2786544af4ed3dc55ba78f7961b193d2"],["/tags/Hadoop介绍/index.html","56b848e34980cfdd22af3fb550e3768b"],["/tags/Java基本知识点/index.html","a958afdc5a3cf2b4f4048cfb8ca70b52"],["/tags/LinuxLiunx命令/index.html","2ed599cbed5a45cfc8612ae84fa05f2d"],["/tags/Linux知识/index.html","80ca6eed23aca1220b8e373712272857"],["/tags/SQL命令/index.html","a8f45fcbb473eded7875a073562feeaa"],["/tags/SQL调优/index.html","47431e17329769c628ebf9b93895dd29"],["/tags/Void-知识点/index.html","c314768857b49d96772fc1229889e2c9"],["/tags/Vue框架/index.html","edb201974d97629f91b9a4b2c8014310"],["/tags/docker知识/index.html","ec93971e840f835c9c7821c58d8f08fc"],["/tags/flask/index.html","c6356bd2936e99269e1bfa2a4b0f9b87"],["/tags/git命令/index.html","bd5caae40a463934102578424bf44845"],["/tags/index.html","560a0fdb46d232c170c6099dd6337e56"],["/tags/js知识/index.html","5875981de366fde518c77bf64d581565"],["/tags/pandas函数/index.html","a081c134b9396cd9645cfef8116352c0"],["/tags/python编译器/index.html","250d7a34406adb3e3899787ea0eb2672"],["/tags/scrapy框架/index.html","06dcc834f8e447911f5738371db237da"],["/tags/selenium/index.html","ffc5bd4c63893965d5d815ddbd910228"],["/tags/函数补充/index.html","d534fe3117c368d6162ff906529ec1a7"],["/tags/协程知识/index.html","2cb04143ba2e001ab183d9cc49043679"],["/tags/基本知识点/index.html","aef149ca4fba4cc55a88d515c565e135"],["/tags/底层原理/index.html","8b817803d2bda49d284efccd99fd21ca"],["/tags/扩展知识/index.html","2f93eafdfe1dbaa9913ddf273a819e0e"],["/tags/排序算法/index.html","d3da954d34451b997fa16de8a2f8a0a7"],["/tags/数学知识/index.html","3dde1cd219a48d6e2dc598cad70a4447"],["/tags/数据可视化概念/index.html","fb5bfd0c647f6f1e48e9db2836cad9b6"],["/tags/核心模块/index.html","23fc2c4b93e873f01476d98d0ab911ef"],["/tags/正则/index.html","e1314eae4bdfcfeeb8ea8e53a8724f14"],["/tags/爬虫实践/index.html","fc11096bf620d6eb6c1c493d3a012ae2"],["/tags/线程概念/index.html","92855607fe5825e29d356b96880d3100"],["/tags/网站的基本概念/index.html","48ae894681d7b15b34389bf11926fa9c"],["/tags/网络编程/index.html","aad54b54b2128f6eecd3bedd8956cc7b"],["/tags/装饰器/index.html","ebfffbef1d1df1605a6e2cade39918bb"],["/tags/计算机知识/index.html","3ad6447bd7e4b693b0e6b8d915bb29b2"],["/tags/计算机网络知识/index.html","8f0043c1bdb08d7b7d7c2dc7671eca2e"],["/tags/语音识别/index.html","ff250e00e1bc5d997aabdfdf0c0adc48"],["/tags/进程-线程-协程总结/index.html","26763c0f6c74eaf1640e70325e47e64e"],["/tags/进程概念/index.html","9104ceda585779143037f14a9f35d624"],["/tags/进阶知识点/index.html","2a022a34009a9ee57fb8b33d83e94fc6"],["/tags/面向对象编程/index.html","4052968b58b06c652268bb40dd1298c8"],["/tags/面试总结/index.html","77b571e7459bbe1fce9418f722832a61"]];
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

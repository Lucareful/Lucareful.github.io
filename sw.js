/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","03406d6fe55b8173c2d3301ab2696763"],["/2019/06/26/python解释器介绍/index.html","d84a5ef93960281da547b27abd23ccdb"],["/2019/06/26/正则表达式/index.html","f12e1e140e2e0a48bcd3f57e15565142"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","bbe685b26172e17e44dd263bab04b8c2"],["/2019/07/06/网站概念/index.html","90fbe81b9ade30f179c4efd911f0f414"],["/2019/07/11/数据可视化笔记/index.html","075a65ddd40395771017c4c04acafe0b"],["/2019/07/12/语音识别/index.html","38f43d785eed57ec614d0b89cac09118"],["/2019/07/14/hadoop基本概念介绍/index.html","6f62cd9f49d5c22ceae1b8af7ff30d1b"],["/2019/07/14/数据科学笔记/index.html","4c5fe8cc0037dcc2ae9d106e5b95416c"],["/2019/07/22/python爬虫/index.html","9ef1f12551b993fab68c19bdfc4dc15d"],["/2019/08/25/pandas函数/index.html","a0186daf412f1b961f675e7c5ed53385"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","066a437564db73ab77604c62caeb96ea"],["/2019/09/30/C 语言中 void 详解及应用/index.html","b661c38944311e4056a2cbe0b8f43f4f"],["/2019/09/30/第一次面试总结/index.html","bcc2f739fdd971a75f90145371f725c4"],["/2019/10/07/django之url规则/index.html","232d97f8cd6bf974faedad62eb31babe"],["/2019/10/07/django配置初启/index.html","3d7fd32c67216bc3a2071484978a410d"],["/2019/10/13/C语言笔记1/index.html","ee5b97363d61cf29a27cf68e1f226334"],["/2019/10/13/C语言笔记2/index.html","8636a41eeb9cc404f6826999da49f916"],["/2019/10/19/C语言打包技艺/index.html","e288f5d657a35153d387a304be4cb5d2"],["/2019/10/22/c语言笔记3/index.html","9d755804096bb2c5f2a074c94ea7bf4c"],["/2019/10/27/IP代理池/index.html","8442c2875e3998bd571a019e98ca2938"],["/2019/10/28/git命令/index.html","810308d79196511b3ab5cca9c5b39a35"],["/2019/10/31/斗鱼弹幕抓取/index.html","f12c81ebdaa6a2cea3975422ff2bd8c3"],["/2019/11/13/多线程/index.html","f513a76f151c5f4d3a5b50c05d8beab4"],["/2019/11/14/多进程/index.html","df1bd15bc58d17504694e81e67e43a7d"],["/2019/11/15/python类的私有属性和私有方法/index.html","e9e2f8e634b4d0871f31c1001b6a5ab7"],["/2019/11/16/协程/index.html","8363ea268ddd4f0fecd960f8886229a7"],["/2019/11/16/进程,线程,协程对比/index.html","94d5a4c0572a8eea3e8e81c85d4f4a80"],["/2019/11/17/GIL锁/index.html","97cecefc9b2c21e1733ed5311bfa5589"],["/2019/11/17/闭包和装饰器/index.html","77959144003b3ce9787d165d34dfc72e"],["/2019/11/19/Python的模块和类/index.html","521f9d75d4aceac130a56e4bd2973d28"],["/2019/11/22/京东全网爬虫/index.html","e5ee764bf6132ac53bc8fb16dc224f49"],["/2019/11/23/JavaScript的简介和基本知识/index.html","9c13f12416254b7bf3f997ea2d28b170"],["/2019/12/04/README/index.html","72dc52ddff9a7f22b0004f145dd8761c"],["/2019/12/04/java简介/index.html","daddba5bd7cef62e841cc8632235efe4"],["/2019/12/11/java基本知识/index.html","7a8d3bb4100f595eca59075a91c2e091"],["/2019/12/17/Java面向对象/index.html","88614025f5494c40e62cc46874b84542"],["/2019/12/19/面试总结/index.html","0f171da6efa99b39f64d2dc9cb7a0f06"],["/2019/12/20/SQL性能调优/index.html","d77ba6a4e411a9e7079b820274c7df1a"],["/2019/12/26/vue框架介绍/index.html","eebf4cec216ab37973452016aa351a13"],["/2020/01/02/12306自动抢票/index.html","84ea682e00247e9b2cfb2b00cd9bd3b1"],["/2020/02/24/flask框架/index.html","efd4db8c3803bae4e7482ff37cc9de8a"],["/2020/02/28/docker以及相关概念介绍/index.html","f2bad0022885801cf329a9423f7fabec"],["/2020/04/05/python数据类型的底层实现/index.html","0c452594d74b18e82225799f3bcc9ddd"],["/2020/04/27/查看mysql连接情况/index.html","bd27879cdc7421f0f9bf1500dac82c96"],["/2020/05/02/Linux操作系统核心知识/index.html","294ccc99f1c3f9659fb74e2e3d8ecef8"],["/2020/05/02/计算机网络/index.html","37b4cc931ae02fb512f0692aa3069d90"],["/2020/05/06/Linux操作系统（二）/index.html","db56a477578edd6190b505c2cc0b8d95"],["/2020/05/14/函数补充/index.html","bbc355aa7b0dea2e98c3d14657314e17"],["/2020/05/21/核心模块的介绍/index.html","324c647cf0dddc3447ca984468ce973d"],["/2020/05/21/高阶函数的定义/index.html","ca786f26d452238909728f4eb5ac7200"],["/2020/05/23/Django后端演化/index.html","617dbfc70005afb3dc0db4ea6c326a1e"],["/2020/05/29/Mysql数据库函数/index.html","9ffa83f88db9fbc8a3c27ea09a592539"],["/2020/05/29/Python面向对象/index.html","2818f93ff7320211fc7663a90a1df0e3"],["/about/index.html","5cf1e49067fc11d16680127c96082772"],["/archives/2019/06/index.html","e1661d32be96adb6dbcc15f1c32d2017"],["/archives/2019/07/index.html","a297d4c61378633d93f2ddeccf32c4db"],["/archives/2019/08/index.html","c45a9e696cf11fd5b7afeb63d3d46222"],["/archives/2019/09/index.html","85cef5c64e25e9f590851c2f27701310"],["/archives/2019/10/index.html","5ea13e1825bb5243043f40df29bb70cf"],["/archives/2019/11/index.html","d018b1325dbaacff3eb113c2b31a6408"],["/archives/2019/12/index.html","3e984b99323d58bdf4a50ac3fe8996a9"],["/archives/2019/index.html","691d1cd1350c49d6d485a3f0f8374dc9"],["/archives/2019/page/2/index.html","9ada1e00fff89dd21ffe5aadbba6434d"],["/archives/2019/page/3/index.html","8c69a90c270a5e1b3fbd5f337f6349da"],["/archives/2019/page/4/index.html","68d6919dda93474efa4a159235b1cbec"],["/archives/2020/01/index.html","b8e085adcb53105fe6b7b2d307e4c186"],["/archives/2020/02/index.html","90badecae0b61143294e898055e0af02"],["/archives/2020/04/index.html","2699dade47b2098b2b5c55cd6eaec842"],["/archives/2020/05/index.html","01e4258365a9e15fa6f019aa0d3b1323"],["/archives/2020/index.html","2f6fbd600614bd4bba63406d91395d3b"],["/archives/2020/page/2/index.html","147cdee061f79789f1fa69e3fcc400da"],["/archives/index.html","1acb45136661dbf98162147638b78a3a"],["/archives/page/2/index.html","515f64038659d84bd0c4ad61280488ab"],["/archives/page/3/index.html","e137dcae58bd699653a118622f0fd9f0"],["/archives/page/4/index.html","e852c87b51804a84980222bb0c23ae3b"],["/archives/page/5/index.html","b9aa05cc23827498ebd75142a8fda2df"],["/archives/page/6/index.html","0cac5bfa87e745bd90c41f57c83af10a"],["/categories/C语言编程知识/index.html","312a3ff9179deb3ee1455313236f129f"],["/categories/Hadoop/index.html","5531b14ee4cf330e239e52f1cf18c095"],["/categories/JavaScript/index.html","9dbcbfc7aa6f0da9ca5be545a82c7f5a"],["/categories/Java学习/index.html","823ac485f0920f4f2e8d07c163658ae3"],["/categories/Linux/index.html","abdbfe820837b391e1f3260a2e483874"],["/categories/Linux/常用命令/index.html","d982943165d7182c358bc80ea7a0e231"],["/categories/Linux/核心知识/index.html","9a7edda81e017ed39881b58d459e2ef1"],["/categories/SQL知识/index.html","40aa1e537b1b2e4b4283e17a0ae01937"],["/categories/docker/index.html","e70b4488bf8666e68a4cba9219e61531"],["/categories/git/index.html","a46147c98f7aec083c628d2f870e4145"],["/categories/index.html","2fb8905156b3f7f5de82db0ad8710490"],["/categories/python后端架构/index.html","e4bb63e403742d1e19a1e26f80fe9b81"],["/categories/python数据挖掘/index.html","6efc92bafca70131fd8d963bc349fff3"],["/categories/python爬虫/index.html","7b5e9d433ef3726b261c8d46ee407a99"],["/categories/python的web框架/index.html","56bb355e3e6be7b738f95c0b18e52b99"],["/categories/python编程/index.html","57af4bd7554ac41e7e6ef27abaf9a7d0"],["/categories/python编程/page/2/index.html","87e7c21f4dd64e0a5032862cf161c258"],["/categories/python进阶/index.html","7321e04b6896336faa4dfe8d520fd7e2"],["/categories/selenium知识/index.html","d2070e7b96006e9b7cea23526898caa1"],["/categories/个人随感/index.html","9addede642513656a74ff349ff26054c"],["/categories/前端学习/index.html","30799fb6b96120a45c1f1808a37206fc"],["/categories/数据可视化/index.html","e71bc76102af73bdc5ee1879f38ccfa5"],["/categories/正则表达式/index.html","2d0858acbed4988ce936d342b6f9d2d2"],["/categories/算法/index.html","0b216030519a419ae5a8ca1966b9fd3a"],["/categories/算法/五大经典排序/index.html","fe677e1a5ed2c60aabe71a42126892f4"],["/categories/统计学和概率论/index.html","cddaa146a712437a6e44f47a9fb7d6d5"],["/categories/网站知识/index.html","718e65c995673d4e719b526e2c9dbf21"],["/categories/计算机组成原理/index.html","bd17087c19faa766d6ef17f9cfb586b0"],["/categories/计算机网络/OSI七层协议/index.html","bade8a9550e3b16ac891ba97e8b579c6"],["/categories/计算机网络/index.html","8ff0899997f462ba4ad102ae28d4f974"],["/categories/面试经历/index.html","ced92cd899d09a04ec68c30b3f12d84e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","ab5e7b7607fbcd70312566eebe4238b2"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","e6fdbf4792c324e998a7871588f6e6e5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","44d88441fa6e1967ed3a99e2dedf6eb0"],["/page/3/index.html","967a48f1b89e423cd32264f86387027d"],["/page/4/index.html","f78e23fd6284e1db683f0c17bc766795"],["/page/5/index.html","9fcdd992ad9126e2d5d0346303136e1e"],["/page/6/index.html","f01320d09896bb5e9e21a7f45da91b05"],["/sw-register.js","b698f169db7dbfd4f42ed941f1212657"],["/tags/Django/index.html","edd15dbffac4e6877dce82e7f1680d72"],["/tags/GIL锁/index.html","e691bc33ca15fd2f0fc2def52a2d5ffd"],["/tags/Hadoop介绍/index.html","db7c0bdcc6975c988210ba8abb4dcc79"],["/tags/Java基本知识点/index.html","8f0d98a9361b703413a455fa5e93f364"],["/tags/LinuxLiunx命令/index.html","53c77abd5882f02e7077da30460beb5d"],["/tags/Linux知识/index.html","dff7a3fcf6884929f2cbe3772f254398"],["/tags/SQL函数/index.html","1008a70846f746d4ecd7d13f074f1715"],["/tags/SQL命令/index.html","727dfbeb88342e777f9178752b61c3cb"],["/tags/SQL调优/index.html","b877633c1d9c896f2a233e07f2d40042"],["/tags/Void-知识点/index.html","90531f751575934f6f7f55084ee5ae83"],["/tags/Vue框架/index.html","ae97dbbd90e4b32e6da12cb25f61811e"],["/tags/docker知识/index.html","f9c4da32c9f3cfe2d43110c00a9aee9d"],["/tags/flask/index.html","0a54928d1abfbb3586a55e1272323602"],["/tags/git命令/index.html","57672809247b6eda1c6c04dabb2e3669"],["/tags/index.html","8e9a25aba28eeb4eed5ba7a0dc1573ea"],["/tags/js知识/index.html","43f133515c5f4b7b0f190cb84efc30a3"],["/tags/pandas函数/index.html","2822cb786a1650f97c0c4cc12da0a588"],["/tags/python编译器/index.html","e741f29f63a0dd764fc382486a442b79"],["/tags/scrapy框架/index.html","a04d4f64d95300f2b27bb57fd3722ef8"],["/tags/selenium/index.html","5f5d4babf72df591c05489aed30ab7b4"],["/tags/函数补充/index.html","d38e84a131f11fe635f776fd726f0aaf"],["/tags/协程知识/index.html","4b6d98536b8d36327bfdabc2a8fab8ae"],["/tags/基本知识点/index.html","de59de787cf4197d31ff324aa00c11f2"],["/tags/底层原理/index.html","55a5263b50cf8df67f6e058c011da66c"],["/tags/扩展知识/index.html","4dc3614dde11c53231c2b1f2a894bef5"],["/tags/排序算法/index.html","456a3091dfccdcde508f9f05a0a7b497"],["/tags/数学知识/index.html","b8699062a6473fc9f095aa730fb01c87"],["/tags/数据可视化概念/index.html","2214ebbc4b413a20eaf64bc35ab3a5ec"],["/tags/架构演进/index.html","3cd3558075c699d15650c4c860d546ac"],["/tags/核心模块/index.html","a866e1711044e31de1c997d15177ab8a"],["/tags/正则/index.html","383673e3b04faea47aa0be2b7fb89d3e"],["/tags/爬虫实践/index.html","37cc88a0d797533164bdaf2b692bb751"],["/tags/类和模块/index.html","a35382ed8f910c8420d3d2c2599c5d8f"],["/tags/类的知识/index.html","3cf7803064b5ebabda3cec8933fc3443"],["/tags/线程概念/index.html","8f41e4865345be1c87f48e60cf6583f7"],["/tags/网站的基本概念/index.html","58b2525cbc8048713816774b1d59bd6a"],["/tags/网络编程/index.html","04890e13c080b2760702e2a54496f85e"],["/tags/装饰器/index.html","2cee02f34b3c29be413cc4dc51b2992c"],["/tags/计算机知识/index.html","49456766de4cdbf68fe01cf104a2521e"],["/tags/计算机网络知识/index.html","7331cd0eadf5d59a9a48f9adcd76004f"],["/tags/语音识别/index.html","47268fc3024481cdb5a695dec114be8a"],["/tags/进程-线程-协程总结/index.html","19003e4659bb45318db38356998992f5"],["/tags/进程概念/index.html","259128018c6082f93ec06a2289e7d981"],["/tags/面向对象编程/index.html","5af8e610224a6d254d99e0872d12d315"],["/tags/面试总结/index.html","110453083b1300097e9a09e5d0faaef3"]];
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

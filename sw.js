/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","6979e73d8af065b385500ea67e4e4d75"],["/2020/12/06/C 语言中 void 详解及应用/index.html","c16d2d16d11e32613ab9cc266edf562d"],["/2020/12/06/C语言打包技艺/index.html","30e327c26d6b474dc7d52b9e9be73e02"],["/2020/12/06/C语言笔记1/index.html","fc359341d0c87ce602078c402cf176b4"],["/2020/12/06/C语言笔记2/index.html","8904945f3ee17ef68ae313d2c3b208a6"],["/2020/12/06/Django 重定向终极指南/index.html","c35d3605863bfccdde5a07a373403ac6"],["/2020/12/06/Django参数和模板/index.html","2c65f3a3193aa31eb2a567e121eba9f3"],["/2020/12/06/Django后端演化/index.html","a7c63b9bbbbff49ad1cace8a72a46aa8"],["/2020/12/06/Django的Cookie和Session/index.html","7497ee0bd7712b4b03258473bf76c937"],["/2020/12/06/Django的Field详解/index.html","f71fa8b42fa879c1d1e0123ffe3a385e"],["/2020/12/06/Django的ORM多表操作/index.html","a26b0afd04933fb2a291c1a355493332"],["/2020/12/06/GIL锁/index.html","4a7b7c7de94938da1ca48db086165f91"],["/2020/12/06/IP代理池/index.html","7d3103dd6691d5374bafd2e1b0131b6a"],["/2020/12/06/JavaScript的简介和基本知识/index.html","31861e834b5729fcb1d403e6d355c4ba"],["/2020/12/06/Java面向对象/index.html","a28aa0a1b2607fe0dff0769066d6e839"],["/2020/12/06/Linux常用命令/index.html","afb9a7d5a5bb6976ae92f336fd5da13a"],["/2020/12/06/Linux操作系统核心知识/index.html","9568fac673dc82c67d1e8b0965415093"],["/2020/12/06/Linux操作系统（二）/index.html","43c49da2e2ef5791995270bca9ef7795"],["/2020/12/06/MQ笔记/index.html","78080d6038f2c9429ca982de66e80dd4"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","930c6d24d32499599a509baab0cafe98"],["/2020/12/06/Mysql数据库函数/index.html","122b2ca8e9c1588593a3a75e996e62eb"],["/2020/12/06/Python 中的上下文管理器/index.html","bea7a54bc4c0b4ae4b010c0c422232a2"],["/2020/12/06/Python的模块和类/index.html","3eafd90df5841ba826cbe73e1c91763d"],["/2020/12/06/Python类补充/index.html","9d467e46d031cad8f388706cbb872ee0"],["/2020/12/06/Python面向对象/index.html","29375a8b72d05c260470d488032ddecc"],["/2020/12/06/README/index.html","b3daa0fa53ea0abc801a01ab56db6a9c"],["/2020/12/06/SQL性能调优/index.html","c7678a9b0703764d774c06d906afc72a"],["/2020/12/06/c语言笔记3/index.html","7848e60c50e18aca7e35151b49742beb"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","35ccd48b631474d32f934603fd068710"],["/2020/12/06/django之url规则/index.html","3444417d47f39a5aefe0e24c9f8c87c4"],["/2020/12/06/django的querySet详解/index.html","5f00aa6736b9185efd9312c6885466c6"],["/2020/12/06/django配置初启/index.html","57b2f93707845f27b89887efa20c91a1"],["/2020/12/06/docker以及相关概念介绍/index.html","10741c69a61784537aff23c8310044a2"],["/2020/12/06/docker信息/index.html","b7ef593434712a592989031739c6bbaa"],["/2020/12/06/docker网络/index.html","dc85863d110f0f897c456e4c584afd53"],["/2020/12/06/flask框架/index.html","460db582920ea5e7249f0eb346f11f96"],["/2020/12/06/git命令/index.html","62398c33f2546a564a392933eb0d61bb"],["/2020/12/06/hadoop基本概念介绍/index.html","9860d27d709abd1fa08224b1fe2118b3"],["/2020/12/06/java基本知识/index.html","7b4bedce7300fc214a904c728848f649"],["/2020/12/06/java简介/index.html","c8c08be316d360cec465d3bf26b602ac"],["/2020/12/06/pandas函数/index.html","a021f557d74e343670c436145e51e46f"],["/2020/12/06/python函数参数传递和返回值探究/index.html","34ff25262b179521e40b1bfa80f82816"],["/2020/12/06/python函数补充/index.html","8b5630bdb9eb2e77188463fde45c0feb"],["/2020/12/06/python数据类型的底层实现/index.html","6a9fcbada72a5915c6419129042a86dc"],["/2020/12/06/python核心模块的介绍/index.html","1344f6d64a0d0cad5c29a8617dde8ac9"],["/2020/12/06/python爬虫/index.html","ba2516cd4cdfc0997bfb1da155eb2932"],["/2020/12/06/python类的私有属性和私有方法/index.html","63bf2cdc137ecea5fc344bea228f8342"],["/2020/12/06/python解释器介绍/index.html","362a575496228c159d9869e11abc592b"],["/2020/12/06/python高阶函数的定义/index.html","07e9b55a1edc6da4e98cc69aedffcc15"],["/2020/12/06/vue框架介绍/index.html","58a25ea129add81cb01de7058065c99e"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","45b297ca5a1343b2d59bfb2ffbae4db8"],["/2020/12/06/京东全网爬虫/index.html","cd03e70d25240b1d9336dae4fa555819"],["/2020/12/06/协程/index.html","14923fea5c8f41dc00ce1b7a85b53ed5"],["/2020/12/06/多线程/index.html","1d82ba6238e67470a3b5ea0b9bf82dd1"],["/2020/12/06/多进程/index.html","ea9eb990f8b179955bdfd0b2fdec0e3d"],["/2020/12/06/数据可视化笔记/index.html","f2d5b591db2c2065f171388014fcdfd6"],["/2020/12/06/数据科学笔记/index.html","773ea72c27ad21570509c689591ad6fd"],["/2020/12/06/斗鱼弹幕抓取/index.html","b23a3e6262293ef7f2395f67ae19155d"],["/2020/12/06/查看mysql连接情况/index.html","2d50520066a60a2d05f754f29c7e088d"],["/2020/12/06/正则表达式/index.html","66af95796f1700c47b70ba9ed2669009"],["/2020/12/06/第一次面试总结/index.html","930284c36844397c36f56841ec776bc5"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","3fd99234a6bd6e7e2f80d0bc4170145f"],["/2020/12/06/索引和事务/index.html","a8cacc87dad387da24df35a9aab4ac46"],["/2020/12/06/网站概念/index.html","eaf9f948a56a387f8d120d56d53e1f88"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","45ace87b0a9cfbf7380830a2dbb25bdb"],["/2020/12/06/计算机网络/index.html","3ab086243df3237e2850bdbb679d95a3"],["/2020/12/06/设计模式简介/index.html","989f11dbf4f3d790f1e04bb917eef41d"],["/2020/12/06/语音识别/index.html","0d42a2ca15922213b0a4ece638226682"],["/2020/12/06/轮询、长轮询、websocket/index.html","93c7d1fc3075cd2e61afa96cfcaba144"],["/2020/12/06/进程,线程,协程对比/index.html","175db25ecde502eec1c9c9a5f6970e89"],["/2020/12/06/闭包和装饰器/index.html","b867427851d9f80c9159b4b6498312aa"],["/2020/12/06/面试总结/index.html","22614490c7337e921c4a9e7fc1a0a752"],["/2020/12/13/鸭子类型/index.html","5d6f4e487f3fb109c418e8aa67e89a2c"],["/2021/01/03/工厂模式/index.html","b5520e827f314c8358e9293e1125afd7"],["/2021/01/17/RESTful风格介绍/index.html","0eeb83a511da1dd65ffcc7a068060547"],["/2021/01/23/关于跨域和同源/index.html","1a4646e39a071b6d865128dc6dc24b7f"],["/about/index.html","2c735677e390aa4226023d9f73212884"],["/archives/2020/12/index.html","eeceadbc0e5b4a25b32f459cc0ec6721"],["/archives/2020/12/page/2/index.html","e84b70219727406d3dc49d7609d75e4a"],["/archives/2020/12/page/3/index.html","f9b9d6f124ed64ba61b8b4431354bdce"],["/archives/2020/12/page/4/index.html","72a88a0c750a68798638d68d6372227f"],["/archives/2020/12/page/5/index.html","7813a633b2f6d940b09f92b33c85ccb2"],["/archives/2020/12/page/6/index.html","3160040f5f8cf60bdbb22f66a6835ed5"],["/archives/2020/12/page/7/index.html","dbea540f5b51a232504ee1398e981b6c"],["/archives/2020/12/page/8/index.html","5d539b6403ae66b1ef2ca86b9de1fa17"],["/archives/2020/index.html","27005c1a948910a6cb4ed590c4276ec6"],["/archives/2020/page/2/index.html","3e2a19cdca0168fca00bc3aeac875baf"],["/archives/2020/page/3/index.html","d40eb90f60dd78a89d21bcb937cfd4b9"],["/archives/2020/page/4/index.html","3c7b7b8189d241e139c19d7d303b42ca"],["/archives/2020/page/5/index.html","8c1c3f7baac15900868ccdd5aa753688"],["/archives/2020/page/6/index.html","6e62e8eb26a09cb4698d6223fc5c11f2"],["/archives/2020/page/7/index.html","9153f4d8998feeb092e4bb012c9aa5ad"],["/archives/2020/page/8/index.html","e55eecc55f78f47ee6bb7179057daa92"],["/archives/2021/01/index.html","48960bdc1c89b6055075fa642884d0da"],["/archives/2021/index.html","f2e9f1467d550ecc5b7bcd6149d1e02b"],["/archives/index.html","183cf1c93d6880cc637281f9b309b19a"],["/archives/page/2/index.html","07bff0fddf9b2d7bdf6f132002029ab0"],["/archives/page/3/index.html","16f5bfd9eb7a3508655c854058817e76"],["/archives/page/4/index.html","5f3233963de75b15b6615cbbfa47f79c"],["/archives/page/5/index.html","64af6ae167ee99fdbb908190a851bf99"],["/archives/page/6/index.html","6a8719b6d9cfbe5093d61b65f6f46e94"],["/archives/page/7/index.html","42380108f99b27b03728446c3a5fbd16"],["/archives/page/8/index.html","c27f59c276a93055435e10d839f582d2"],["/categories/C语言编程知识/index.html","cc99a835c1e8774e60d3435443a71b44"],["/categories/Hadoop/index.html","c18a205a7b338ed10c7b625569c7f087"],["/categories/Http知识/index.html","c797591985d6795172e8324323fb7f95"],["/categories/JavaScript/index.html","28a088073035ab2c25472c5dbb90fec9"],["/categories/Java学习/index.html","72a8817f53b5ed505498ccfea0aa9de4"],["/categories/Linux/index.html","404faa5d8dfcbffcdcb97c2249c7b306"],["/categories/Linux/常用命令/index.html","f258e0d6c6b1b62e65ab88565446ba1a"],["/categories/Linux/核心知识/index.html","5109df944d021a09f29e9c365a285d29"],["/categories/SQL知识/index.html","55ad7f4653b3af6b6176751c68ff5620"],["/categories/docker/index.html","5483599d7340f4d8916beeee8ba00f31"],["/categories/git/index.html","bafddfb21b21e3ce4000d227b4f7a338"],["/categories/index.html","f07d8bb92c2094699d145b68802fcc20"],["/categories/python后端架构/index.html","12ec1a99a41d8c518df113f0b8353036"],["/categories/python数据挖掘/index.html","61ca7edb568ff429857a74ff17f0508f"],["/categories/python爬虫/index.html","b939d44eed6f7f301d35548207dffd04"],["/categories/python的web框架/index.html","0e5e15fa0a163df490e9637d27486e00"],["/categories/python编程/index.html","062ca0083a91968717c1ece7ceaa50f3"],["/categories/python编程/page/2/index.html","b865ea0640fdc988e19767a0d5134351"],["/categories/python进阶/index.html","8db74b0ffd6f9ff1baf7b17cd99f521f"],["/categories/selenium知识/index.html","aa1ecd1467ce1f1536a0d4b747da033f"],["/categories/个人随感/index.html","19af8e99e7a53c2562af1412dd0d3bd9"],["/categories/前端学习/index.html","c03042a8fc9ad5105682bd538e69b913"],["/categories/后端接口风格/index.html","e10b88271d36f629ed71275c14fb8647"],["/categories/数据可视化/index.html","2669ae146e3660a21456272e20ed1c53"],["/categories/正则表达式/index.html","9a85f27c97c0b123f319cf8b6d98c26b"],["/categories/消息队列/index.html","74f12d5883fca002c3a889e5d588d92a"],["/categories/算法/index.html","a16c94c06d01a5df233a2b9c5064ed91"],["/categories/算法/五大经典排序/index.html","61737fdefd6c1c7944e4a6ae94b6a0d4"],["/categories/统计学和概率论/index.html","df6b78958c1ae0fa8266f9bdc4a22dba"],["/categories/网站知识/index.html","40e59a92d9cab5ded6fa2be5691161f2"],["/categories/计算机组成原理/index.html","139431643e489790498880d6885fe20c"],["/categories/计算机网络/OSI七层协议/index.html","dd9a2148c314fac04033ccd237329d28"],["/categories/计算机网络/index.html","638ef83bb3b3c122d0b5f2ec906c9953"],["/categories/软件工程/index.html","d81f8d09ffd7b55699f629b215ff73dc"],["/categories/面试经历/index.html","4e6a490782dab59acd886e0d25978906"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","abed4456ff7d2f5d7a56b7d0a084dfb6"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","41384e9ea9c4319194e54b0c3cc99635"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1494bf20e07ae3169797954d80b63aff"],["/page/3/index.html","8bbaf229e6d50a5ff560302df6d80e7f"],["/page/4/index.html","87e61787d5110a7fec3301ab511bcf42"],["/page/5/index.html","c32008666e1aeacedab4ef8e4efb9255"],["/page/6/index.html","d7731f1a51cab3ccbdfe9fa5d53e6e2e"],["/page/7/index.html","2d1048983cd51ffe1be5faa7d7fd9b54"],["/page/8/index.html","54d0b20289f7e577e146e587545c57f0"],["/sw-register.js","4e81d4db0a388decd58dcdb0274177e9"],["/tags/Cookie和Session/index.html","dd6ce7860174d926d76e60966eb1f1fb"],["/tags/Django/index.html","525eee3c899850bfe75b3229437b2b0e"],["/tags/Django部署/index.html","18b0aaeea5eecb44fd85d9e2aeb6a504"],["/tags/Django重定向原文/index.html","1aea48dfb121a986ceb7b255a60d9772"],["/tags/GIL锁/index.html","a43bd3d80847d4fbed4826e77db85a42"],["/tags/Hadoop介绍/index.html","d2722ad28a69ab18db2acb07ec0ec638"],["/tags/Java基本知识点/index.html","9315edd9565c13c2bf107db2a2359ab4"],["/tags/LinuxLiunx命令/index.html","98db4eb1e78e25cea1365fdfd49e41ed"],["/tags/Linux知识/index.html","53e0cbb6be2e76dde8209b1b0044e5b4"],["/tags/ORM/index.html","2d74ff1f4aa88a55c85ec5edaefd952b"],["/tags/QuerySet集合/index.html","93508ca67beb51069cd4250033ef6dae"],["/tags/SQL函数/index.html","0f064a75e1c07763b40c35dfda821089"],["/tags/SQL命令/index.html","4d52f46919cb9750713e02a31dd5b605"],["/tags/SQL概念/index.html","cd7e8fca5d65a2164dc5ae9a396c5b19"],["/tags/SQL调优/index.html","0619d8a35e4590c6e41b6d8efb75cc27"],["/tags/Void-知识点/index.html","7576478af93404e222f697fc4ab5a844"],["/tags/Vue框架/index.html","e59d5b780938d420c82708a576e24b9c"],["/tags/Web安全/index.html","39efd7f299bacd987d4b293626f2f6be"],["/tags/docker知识/index.html","751bd332d98e36bde8a768f95973e8cd"],["/tags/flask/index.html","b3966985261059448842bf736112729d"],["/tags/git命令/index.html","bf52909f063be21627b7fb195b58e1ce"],["/tags/git配置/index.html","600794a214f095c78cd0d46f3554b78a"],["/tags/index.html","a2077588131df7bca8b5af3ef00b6e83"],["/tags/js知识/index.html","006870e0e418a9db44aacf729fc5bc4f"],["/tags/pandas函数/index.html","9378a75ec13a02a3aefb6766ca286add"],["/tags/python编译器/index.html","0bfb34e7807379ccda5424953abf5b7f"],["/tags/rabbitMQ/index.html","485d2b2839e8b9d48cc83f3b00a48a20"],["/tags/scrapy框架/index.html","18215cb4c3c4c808604b5a4cf983b2b8"],["/tags/selenium/index.html","da6a9ef629b9f2ae2f7e2d952ddb253a"],["/tags/websocket知识/index.html","3b68f63fa615c7e58a3c29573893ed19"],["/tags/上下文管理器/index.html","640fb4d68520a37e7e9ce022d31b28c4"],["/tags/函数补充/index.html","33dfb69367fffe76c23287ec4eb1ddd3"],["/tags/协程知识/index.html","767654cd78639d8667ebdcb6e3a41f94"],["/tags/基本知识点/index.html","c1dbeae81a73f330f2c67f2194d34a50"],["/tags/对象引用传递/index.html","74eef2e0768878165811f855f35405d4"],["/tags/底层原理/index.html","e7fb570f9c212c29831b65cc8fc19c1c"],["/tags/扩展知识/index.html","34deef5f128331a23f3fd06f255dcb56"],["/tags/排序算法/index.html","15259924ff97e0adfb7aa8ef7a6e7c8e"],["/tags/接口设计/index.html","388d333222184d0dfcd5e1c335bc3ec9"],["/tags/数学知识/index.html","de39f2a965650fd155b8c2108ad5632a"],["/tags/数据可视化概念/index.html","cd5cb02fd5b3badc71f6726c52506ec2"],["/tags/架构演进/index.html","5d7c6d9b9482db7ae7722bc240e86b73"],["/tags/核心模块/index.html","a3372cc836f89024c2aa4fc8d83dae83"],["/tags/正则/index.html","ebe0c8375c25296ffc9b1b5faca5b5ce"],["/tags/爬虫实践/index.html","3fa50733dd56fb7f2a9bb5983ef7bdbb"],["/tags/类和模块/index.html","f2e3157472163a5e651526f9435a91ff"],["/tags/类的知识/index.html","e4b440d02fe4dea0c8f5dcc832324426"],["/tags/线程概念/index.html","0726ddf63609f3b3cdf0f7d95d8c0d82"],["/tags/网站的基本概念/index.html","1638c6f3dd0b7247f49d87339a0a9003"],["/tags/网络编程/index.html","9b666f72dc762e56dd2cdb9f348395e8"],["/tags/装饰器/index.html","971400ca384208235011e47ea9af1c17"],["/tags/计算机知识/index.html","cf63bf82a7ee9a70fe2142c6c41fa6fd"],["/tags/计算机网络知识/index.html","d6e83d0d97411122fa06056dccca8a96"],["/tags/设计模式/index.html","e7709b68e305bedd0a8a2c56123389d7"],["/tags/语音识别/index.html","4445c018a571ba3585f498c2aa347273"],["/tags/进程-线程-协程总结/index.html","a2857b12195d3d469a6ee747dc49cfc1"],["/tags/进程概念/index.html","b419883d0ec1d2b3429bc1b3999265da"],["/tags/面向对象编程/index.html","74b324f2a36403daf82cbd89ff96ac91"],["/tags/面试总结/index.html","a29f89567df9f76a92230fd153861bff"]];
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

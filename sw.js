/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","a0434311510b57fc6c16280299683a0e"],["/2020/12/06/C 语言中 void 详解及应用/index.html","259f97b59bab4c51bf1a949cb92d5133"],["/2020/12/06/C语言打包技艺/index.html","113bcc019703697cb8b2e6e00bfbabdc"],["/2020/12/06/C语言笔记1/index.html","dd36c8d9b6f3cfe33381109b7fc39010"],["/2020/12/06/C语言笔记2/index.html","a6a576df1e7061de4f2c4e2baad03e23"],["/2020/12/06/Django 重定向终极指南/index.html","30863b150177cb4ea0ad85dd5c33f84a"],["/2020/12/06/Django参数和模板/index.html","d727e613ab4baa697e944dd9f9a0d73d"],["/2020/12/06/Django后端演化/index.html","7641f894dc7c149a72e05c4c775f088e"],["/2020/12/06/Django的Cookie和Session/index.html","777c7a0c3be9b2f674550458068b55cb"],["/2020/12/06/Django的Field详解/index.html","96ad506a066f72ee1779e743519436f3"],["/2020/12/06/Django的ORM多表操作/index.html","14b61a64718831df8950960cf3c3f1ef"],["/2020/12/06/GIL锁/index.html","e30646f8adc5eefb9d22aaf35847ba33"],["/2020/12/06/IP代理池/index.html","befe2cf3ed78d0bed348c821c8e038ae"],["/2020/12/06/JavaScript的简介和基本知识/index.html","e6a51db702aed508c1a19b4dd833b019"],["/2020/12/06/Java面向对象/index.html","e0ed7d50fb33e5c0c290e6513b57e91f"],["/2020/12/06/Linux常用命令/index.html","f8855339e21fbd28322d03362d6b251f"],["/2020/12/06/Linux操作系统核心知识/index.html","9730b4d148754af995c6dc162311f7db"],["/2020/12/06/Linux操作系统（二）/index.html","70b2759a82c5692a965af0516f1ac3b3"],["/2020/12/06/MQ笔记/index.html","ea41fc74921c0d83828b5592bcd9da36"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","02d8a37985ffbc698323e81dbc92a0ea"],["/2020/12/06/Mysql数据库函数/index.html","4e01e842c1d123cf1c6dc768578dedd3"],["/2020/12/06/Python 中的上下文管理器/index.html","9621d4301d6b61b26fb2b1ffd897e2c8"],["/2020/12/06/Python的模块和类/index.html","5be64f57330273fdb5475279b26b87b4"],["/2020/12/06/Python类补充/index.html","ecb6957af82c6eb0448b09c66a97b990"],["/2020/12/06/Python面向对象/index.html","8d536c336523899c5c69c33354c270cd"],["/2020/12/06/README/index.html","6498dc995d23bbfc33ec9c62b0c2c21e"],["/2020/12/06/SQL性能调优/index.html","1d2fd4363389078f7adb84460c11c267"],["/2020/12/06/c语言笔记3/index.html","877c9dcde79627a5f2ee777acf2c2ccd"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","af6a54bbe2f7a793b6320280342872a6"],["/2020/12/06/django之url规则/index.html","6795e64c2bad87e4ec81ade10ce2c8c0"],["/2020/12/06/django的querySet详解/index.html","434cbef6a5d47f518560f52e18129224"],["/2020/12/06/django配置初启/index.html","f0dc5c4375b8d76aa9d7df9a0745c7d5"],["/2020/12/06/docker以及相关概念介绍/index.html","77a7b91341bbc5eab482d11a002b3702"],["/2020/12/06/docker信息/index.html","8aa6305bf6a0514c769109eb5b08d4a0"],["/2020/12/06/docker网络/index.html","f4d117abab26dcfd76ea1bad00a9ff48"],["/2020/12/06/flask框架/index.html","737abd8af5bc03fdcd37f282c360ef65"],["/2020/12/06/git命令/index.html","a5cdebc2fb4338319dbeac5fbaec879f"],["/2020/12/06/hadoop基本概念介绍/index.html","096a00fa7d1d35c8ed410b13d37c1522"],["/2020/12/06/java基本知识/index.html","c1e47749e81cd714b96dd8213430f548"],["/2020/12/06/java简介/index.html","3eb9ee69029f78d3c83e15b70696fbad"],["/2020/12/06/pandas函数/index.html","57b144b68aadcac5b3762f533e2dc841"],["/2020/12/06/python函数参数传递和返回值探究/index.html","33ead9d8e7344282bfdd385f6eb4bd60"],["/2020/12/06/python函数补充/index.html","5815719d152c4506d69835d355535501"],["/2020/12/06/python数据类型的底层实现/index.html","65fa03a84ed4f2ade32d7bdd7040913c"],["/2020/12/06/python核心模块的介绍/index.html","e99efa011a352e12cb4c306f4a78c005"],["/2020/12/06/python爬虫/index.html","c93566691997a51a5b963009ea442546"],["/2020/12/06/python类的私有属性和私有方法/index.html","7728afec6c29a19488f647f9d71d4f09"],["/2020/12/06/python解释器介绍/index.html","5a3dbc09b41a2875e8f264c543187aee"],["/2020/12/06/python高阶函数的定义/index.html","8edd4057b48542642579ec4d0e69a38b"],["/2020/12/06/vue框架介绍/index.html","ddbced5e3d85004242ede5b440c170fb"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","d55a1a715e306e7871e3f4e2650ea884"],["/2020/12/06/京东全网爬虫/index.html","a2016c07db87d3544ec1fad80cc2367e"],["/2020/12/06/协程/index.html","26cbca75dd003bde5eadf418adc29095"],["/2020/12/06/多线程/index.html","904b81aa71c636316ef701493751031b"],["/2020/12/06/多进程/index.html","b5708467cf0e382400a832bd5d9ef4fc"],["/2020/12/06/数据可视化笔记/index.html","ba3cb53f948a781b026d44effeedb7f8"],["/2020/12/06/数据科学笔记/index.html","449853143d8d27820fc97ec30a4ae891"],["/2020/12/06/斗鱼弹幕抓取/index.html","dfe08d6d5bd2a2cb1014dc4cd550d70d"],["/2020/12/06/查看mysql连接情况/index.html","ddc3f24d7a86d101a7d2073758000602"],["/2020/12/06/正则表达式/index.html","6b360f41d32345b1a316ee4199e1d659"],["/2020/12/06/第一次面试总结/index.html","d775bb2115be860d06309e41cf9c0c49"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","b5d3fa3ecb25c5c361f13ea60629f909"],["/2020/12/06/索引和事务/index.html","4aff32b79ff96bff0674c4f0b8e35d2c"],["/2020/12/06/网站概念/index.html","2265ed5b0778d6e2875a9295b8583825"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","70681a75e13fa47649917d47764f4568"],["/2020/12/06/计算机网络/index.html","c83e370400146a845a05e7eb251d1b82"],["/2020/12/06/设计模式简介/index.html","eb60df57af4a5523a9d8e5a552a25682"],["/2020/12/06/语音识别/index.html","6842106b6184a3a9795a05b8dc7bb747"],["/2020/12/06/轮询、长轮询、websocket/index.html","4fb29709a1851b0df0e1f7f6b2af8226"],["/2020/12/06/进程,线程,协程对比/index.html","6ccd12503a3e7599875701abf980a86b"],["/2020/12/06/闭包和装饰器/index.html","944c34a6718a3d3fd9948b4671d0d44e"],["/2020/12/06/面试总结/index.html","075c1580d77d57424d4c0c2381dcdabe"],["/2020/12/13/鸭子类型/index.html","2cb525bca46ab5250f671f34eef7ce2e"],["/2021/01/03/工厂模式/index.html","fd6651a5eca7115ac4d9547e601eec07"],["/2021/01/17/RESTful风格介绍/index.html","8a5c057c7da14d73fdbfe7304cd79978"],["/2021/01/23/关于跨域和同源/index.html","8725f7ca5ad7b7ecfd0cb2cdccdc42fa"],["/2021/01/30/django的信号量/index.html","eb11f1916a0310335af8324385623376"],["/2021/02/16/创建型模式/index.html","9283cb78922d8e96a096db606be148cd"],["/2021/02/17/asyncio之协程/index.html","76850dbfde1063cae4044a74a33c7b92"],["/2021/02/25/结构型模式/index.html","22aa6ccb2ef2ba39173af72516caac94"],["/2021/02/25/行为型模式/index.html","a81b744807b1f49e1279547576062f13"],["/2021/04/24/python元类/index.html","19d8d34c30e5c015ed0a36c50473667d"],["/about/index.html","e43994ba0abae315a6871f96bbc8321e"],["/archives/2020/12/index.html","402af5c3b9859672dc17ed866aa56e90"],["/archives/2020/12/page/2/index.html","5d6987f72e13a7a98f6d4628f1227d34"],["/archives/2020/12/page/3/index.html","2ec9bfced40ea185fa9f4a863b0d912f"],["/archives/2020/12/page/4/index.html","48c6afe47d268fb4b0c5d4749563b499"],["/archives/2020/12/page/5/index.html","7b0eb6b22c6e1f8164c28b1722692ae2"],["/archives/2020/12/page/6/index.html","674a7273529d74500e51170ac07aec9c"],["/archives/2020/12/page/7/index.html","8f37131e677e9e237d0e99c33f4dc6d9"],["/archives/2020/12/page/8/index.html","820ab3e6054f31e9f1c2d9b105568d31"],["/archives/2020/index.html","15c3926f22d2d1ea62c1413005a0e22e"],["/archives/2020/page/2/index.html","2303e5b0dfcc019b1baf3f37353b81a4"],["/archives/2020/page/3/index.html","6939861f34a6860844d39da5d2627b27"],["/archives/2020/page/4/index.html","62aafb6ec5ff5864acd34ec5afeeca71"],["/archives/2020/page/5/index.html","5065f6c7a2bc7a93a0885070c15617b6"],["/archives/2020/page/6/index.html","faea746dd46965f4aa846ae1e9b099ec"],["/archives/2020/page/7/index.html","c0f121931e4e0f7d9b6dd3ce2a34464f"],["/archives/2020/page/8/index.html","ab3247152fb7267f80b37a3f82fdefdc"],["/archives/2021/01/index.html","36c8dc63c8a1dceac451c759db9fb8c3"],["/archives/2021/02/index.html","4dd38abcc4623b8068ca7c7644965ffc"],["/archives/2021/04/index.html","698ff2bf7dce41a65ef944a58992fc05"],["/archives/2021/index.html","896471a34ae4fa36d3e8552071473696"],["/archives/index.html","03a81369081ad48510b867c1dd8e1398"],["/archives/page/2/index.html","911483347d0040d32d6ebe797a36e305"],["/archives/page/3/index.html","57423ba1c07b12f8bddb1a84887ebaae"],["/archives/page/4/index.html","37c485c20147c29ad2132b3e4cf81b8e"],["/archives/page/5/index.html","e97c8ba18fd385df84a64f3e48fb3330"],["/archives/page/6/index.html","e3a95a71aaee9c84a38de7d564f264f1"],["/archives/page/7/index.html","b5fbc6f4318a9211087887b7da546e7d"],["/archives/page/8/index.html","050daa4fa0ca16f61f3ee18b10ee3052"],["/archives/page/9/index.html","438d61752c930b1e32bd5ae8ad6cea2d"],["/categories/C语言编程知识/index.html","9637988f9ea9904dd856ef17c5d8a413"],["/categories/Django框架/index.html","1b4072528a520d82719b2162e2dc85df"],["/categories/Hadoop/index.html","05ddf119cdadb706636142aec0ced60e"],["/categories/Http知识/index.html","94eb4e596e99ee0be19d289834adde2b"],["/categories/JavaScript/index.html","d32e3e1b6830379a576e802f3e4b44f1"],["/categories/Java学习/index.html","1260c1a5e93f6c9349575da8a2c4146e"],["/categories/Linux/index.html","af561995963c8effce14cac3e0225811"],["/categories/Linux/常用命令/index.html","2456db3ddafd8737b604967045823462"],["/categories/Linux/核心知识/index.html","98317c021424b69367c304429bb0afac"],["/categories/SQL知识/index.html","ac0d0e8b5209caf69e861a8d8b8a5ed4"],["/categories/docker/index.html","8e464079deea20328753cf7dd5fda2a7"],["/categories/git/index.html","060cc750eeaa116af3019d0e376abb63"],["/categories/index.html","3cd835a3c97b2ad69b721945a2a18e48"],["/categories/metaclass/index.html","b0cf68b3362996d500673c7b6d76efd6"],["/categories/python后端架构/index.html","f72332c6a6b4458c12abbb93e5544c4f"],["/categories/python数据挖掘/index.html","cb33fef75dc21282142d968114d5eda9"],["/categories/python爬虫/index.html","e475a43707899ff19285701cec793a2a"],["/categories/python的web框架/index.html","a1b387905e257aa07b1e1f7cc42890cc"],["/categories/python编程/index.html","c0b642f076b20a236f465146424029bc"],["/categories/python编程/page/2/index.html","699cb85ed1c3308cd7f1d7b97745b6f8"],["/categories/python进阶/index.html","ffbad64a077459bce334bee88827993b"],["/categories/selenium知识/index.html","d745ee21b099527c6300743aa2ddee67"],["/categories/个人随感/index.html","7ce7254065688345335753dc343f14f8"],["/categories/前端学习/index.html","2cef8a966105ccacdb782825812ce30e"],["/categories/后端接口风格/index.html","7c788f22210951ec68c9101ff3d6d84f"],["/categories/数据可视化/index.html","f7bbce84f197641616950123f3c5dc77"],["/categories/正则表达式/index.html","5bd1f89bdd13e9c9c03fff908b76fb24"],["/categories/消息队列/index.html","380567d7d77e055b880324bdfb8273db"],["/categories/算法/index.html","cf12c774c9b39c3237fad06d5abbb1b5"],["/categories/算法/五大经典排序/index.html","415efc7b7e4988d209fbb45e324d0dec"],["/categories/统计学和概率论/index.html","3ac7fc172093fe392d0bfe1c4ee0e34f"],["/categories/网站知识/index.html","723b4477d007ac96876c51a4b8c04b97"],["/categories/计算机组成原理/index.html","a73fc1e42c230d612b0cc9770ead4e36"],["/categories/计算机网络/OSI七层协议/index.html","94b1ac7bdbc13f986d1273a1ba2a9793"],["/categories/计算机网络/index.html","48f519d804280028e64eca555102f368"],["/categories/软件工程/index.html","7718290592e2b239047737b1af1e09c9"],["/categories/面试经历/index.html","23227330db082e8649ef93137325fe25"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","176a3ea1e32f72b428ebd7a41d33130b"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","8d11140f9760d3293ab3b61c2a2652ce"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6576d07485686b5d8baa1620c1b190fe"],["/page/3/index.html","9e3165e876bd0c20465c12afff67a0e1"],["/page/4/index.html","aa8d544e8aa057ca8d0ec40cd839d70e"],["/page/5/index.html","312ef22a4317f4aa1c6464dfc55ea7f4"],["/page/6/index.html","b5b24cadc142409d6cc458965a4461e9"],["/page/7/index.html","ccdbd9010413f382a6d3d9f8469292c4"],["/page/8/index.html","78f84538829b171ed68c61ea5d5d682a"],["/page/9/index.html","90df76d9cab1ee4b0f9e2fd64c41c8d0"],["/sw-register.js","27b27a70c507d82db1eb2da67a3b5a81"],["/tags/Cookie和Session/index.html","8863c23a7e3221809a34ebbb29077901"],["/tags/Django/index.html","c11c2278ce9e44cb00a4f9fc03af8975"],["/tags/Django部署/index.html","184216961c805b334fda94bf5a4b393a"],["/tags/Django重定向原文/index.html","c4e1871f6a3d238aa6a4318337df4fd0"],["/tags/GIL锁/index.html","0591aef4b39c17073edc820b1fc6627f"],["/tags/Hadoop介绍/index.html","222f0088fa9983bae68fc3507ee0cc47"],["/tags/Java基本知识点/index.html","2d7074f1b3d0c6372af2d144ebc5eb04"],["/tags/LinuxLiunx命令/index.html","36963d4d8418ee756a1c8e61f53a1012"],["/tags/Linux知识/index.html","5062afa4ae670aa0463bebe424fb3fe0"],["/tags/ORM/index.html","9d33f6024d243e64177b6edaab3eb8ef"],["/tags/QuerySet集合/index.html","add75a3a57f53dbad2ad6bbcae82f649"],["/tags/SQL函数/index.html","ae48fb1593d5f681671f55bb6bb9c247"],["/tags/SQL命令/index.html","54831afcab97dedf57374783918a0bf4"],["/tags/SQL概念/index.html","73f408f51be7583856be8a83d4a6c9f1"],["/tags/SQL调优/index.html","f1495a9e3bbc53f6372fdc5410ad5d80"],["/tags/Void-知识点/index.html","00f3235bc7ddc9aecdf6c3de332ea8b1"],["/tags/Vue框架/index.html","4ee77f3c8a6ac0284eb62dd6cdb755dd"],["/tags/Web安全/index.html","46ea2b538996bf3052b2b130db09ee79"],["/tags/docker知识/index.html","2bee0a1fc45cfe3ab0152112f360e03d"],["/tags/flask/index.html","a414002701d7a72a8ed76f2e54093374"],["/tags/git命令/index.html","f9614fa6bcb38bf6b283651a2a78982c"],["/tags/git配置/index.html","c2304b919c3b60244e46d3dd871dcae5"],["/tags/index.html","e5bc2543add553b89ff347a3b4749b5e"],["/tags/js知识/index.html","58b0f983cbff513a54b315ce281ba374"],["/tags/pandas函数/index.html","61e56259abf03f43aa6eb420be0dd0ac"],["/tags/python编译器/index.html","712d57a21ca2ea6d49e8e2881b94e4f9"],["/tags/rabbitMQ/index.html","b6b882a25893eb89a70e973196437871"],["/tags/scrapy框架/index.html","872a720a9aea028bde83162ce0e53cf0"],["/tags/selenium/index.html","9588bc1153036c9bf269e3979cfde202"],["/tags/websocket知识/index.html","06908fa23bc3416342e01631aaa97b3a"],["/tags/上下文管理器/index.html","877e2ccbf1379582f7a93cad8cdd471e"],["/tags/信号量/index.html","9e6a75f0966aa8d8ee6855440a8513af"],["/tags/函数补充/index.html","055ceea82ea243ca87ae3f5530821c73"],["/tags/协程知识/index.html","b8aa31d90ed921c131b2a3ed8814514c"],["/tags/基本知识点/index.html","08aba558ffde4eca3973d0f67b2b48a1"],["/tags/对象引用传递/index.html","2e503c0f27b5f65be6af0aa6ec081d98"],["/tags/底层原理/index.html","a4797eedbb68657c9d8dc7427a85516e"],["/tags/扩展知识/index.html","eaa28eb26ec4227cfce63723adb4c68c"],["/tags/排序算法/index.html","a92dc1b6f8afa3c3036d1d4140cd69a3"],["/tags/接口设计/index.html","d0c98ffbf6fe735609e6ba4fada8cac5"],["/tags/数学知识/index.html","d545a385b053ef820cc67fee7cd1f42b"],["/tags/数据可视化概念/index.html","dff34dc3536e9346e23e7c225dab3b65"],["/tags/架构演进/index.html","facfa2cf5ce7d2f1ae5fa07060e61a09"],["/tags/核心模块/index.html","e05ea6e5eab7a1a9050c32a8a6a467e1"],["/tags/正则/index.html","b503835d68eb6f937b1055d6a2dd63fb"],["/tags/爬虫实践/index.html","18dd732c15158896129e50895d60dd81"],["/tags/类和模块/index.html","46e7a72ba9d8cb760c28a5b8ac108f4d"],["/tags/类的知识/index.html","f4c780d193af4105e4872b87f7d6abf0"],["/tags/线程概念/index.html","4e49c5323c7789fe5757c8d3a5c049c9"],["/tags/网站的基本概念/index.html","eff06ca50e6aa97e2c087b13e02ad1b3"],["/tags/网络编程/index.html","08660d4cd21b1d3998e8b8d7896a7397"],["/tags/装饰器/index.html","705bd9a0f30f61ef2032bc795cbd8aeb"],["/tags/计算机知识/index.html","0976dd8d2c8b17e50759d4cb1bd5f7a3"],["/tags/计算机网络知识/index.html","e610f10f707a6ac91d3ae279ae01a33a"],["/tags/设计模式/index.html","321c0f791a966e39220e5f267610b026"],["/tags/语音识别/index.html","fe8b01f925e1f37d3c12dc05c9a89a98"],["/tags/进程-线程-协程总结/index.html","9dfa06a8ca133ddf09c1f24de4695738"],["/tags/进程概念/index.html","b57af0aa8b95e9b0a86025e802bbae0f"],["/tags/面向对象编程/index.html","bb5663de0b7f18566f08ff711968cefb"],["/tags/面试总结/index.html","ba4fb4031e3ccc9c843b2e348b1dab20"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","7b65190014622a97d90070f0c0321464"],["/2019/06/26/python解释器介绍/index.html","64287517531f06ac761362bd7fc6587f"],["/2019/06/26/正则表达式/index.html","215f2009160b5ac97fc47fe0c978dfde"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","6b4f756420d259bbe6158a4993bf46b7"],["/2019/07/06/网站概念/index.html","0022836a71eff8da33222b2f50b216a4"],["/2019/07/11/数据可视化笔记/index.html","fc7470791ba506fd22304bf1e80b91bb"],["/2019/07/12/语音识别/index.html","14e9d466167af9ba45c6b6ccaa3455d8"],["/2019/07/14/hadoop基本概念介绍/index.html","5e4aabb75b9b8fb58d20f2bef00c6cff"],["/2019/07/14/数据科学笔记/index.html","b9250de2bbe92bd506a19a5649b179d1"],["/2019/07/22/python爬虫/index.html","d8b1adee6be2bf339af8e3ad2bd9e56d"],["/2019/08/25/pandas函数/index.html","fc9f5c172e2086ab9c22ef10b0e2b412"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","65f6d6e12553bc9ad4e394a269f108c4"],["/2019/09/30/C 语言中 void 详解及应用/index.html","d58ac1c54dc1352e586f18e74c4f5471"],["/2019/09/30/第一次面试总结/index.html","590be8268550ff514f8bdb45e137ee6c"],["/2019/10/07/django之url规则/index.html","6488c086d9fca0262ca77e4c899e643b"],["/2019/10/07/django配置初启/index.html","03f5ac0d554b347ba281c5fd1984681c"],["/2019/10/13/C语言笔记1/index.html","caf0565145cf759a6bf5e03036b3f990"],["/2019/10/13/C语言笔记2/index.html","ec3b11afe0cc36daeda37e6c384ffcd7"],["/2019/10/19/C语言打包技艺/index.html","d36f062011fead8c69106610df5cf92b"],["/2019/10/22/c语言笔记3/index.html","484c2350d1974ec3045574fe41024960"],["/2019/10/27/IP代理池/index.html","0fd9b72f77ae45fa3f74777bbd1330c3"],["/2019/10/28/git命令/index.html","f75707f9d6bd4f2bb7c92ef91de4d669"],["/2019/10/31/斗鱼弹幕抓取/index.html","2169e4a592c5462314f57c3d95ffae32"],["/2019/11/13/多线程/index.html","fbcc0c01378a59d88420eeda8a6209cf"],["/2019/11/14/多进程/index.html","3067a58c86a92714eabac1edccd6674d"],["/2019/11/15/python类的私有属性和私有方法/index.html","bad2760319611483e9618346ca3a584d"],["/2019/11/16/协程/index.html","bd9850eba9eed7f33d2cc59697023914"],["/2019/11/16/进程,线程,协程对比/index.html","ce9199442f3edd28ef208ad20e164af2"],["/2019/11/17/GIL锁/index.html","e557de852a05cf75192d581ecd6017ae"],["/2019/11/17/闭包和装饰器/index.html","f9f2f3178a64ec51bd7a8b5e11b58f70"],["/2019/11/19/Python的模块和类/index.html","d2f92ab805a7f295bb8b66fe329b5dac"],["/2019/11/22/京东全网爬虫/index.html","aafc87ee189d1ddb38f500cd101d1b78"],["/2019/11/23/JavaScript的简介和基本知识/index.html","f0b61117b1f0f0066ebef38cbea23388"],["/2019/12/04/README/index.html","bc7b4471db483acbaf195aed1d25c51d"],["/2019/12/04/java简介/index.html","13c472b7a994eb1ae0762ca902c67d9d"],["/2019/12/11/java基本知识/index.html","962d208f3a2c7fbeab02acc5f0a30e58"],["/2019/12/17/Java面向对象/index.html","488d22ecdd76bb81ad7654832588b2cd"],["/2019/12/19/面试总结/index.html","e38255b156172e5fa1779c6d979aa997"],["/2019/12/20/SQL性能调优/index.html","7611ef6f7a1fb8b4fa58fc41a5fa2019"],["/2019/12/26/vue框架介绍/index.html","ba3f4dd4e404080ea72bd235037aaab6"],["/2020/01/02/12306自动抢票/index.html","8fa407dde31a9986036f48c54a9422b2"],["/2020/02/24/flask框架/index.html","4dd59a19c86c596f79a2077139b8b920"],["/2020/02/28/docker以及相关概念介绍/index.html","d95058cf6ea85ad7d2323c5eccce75d5"],["/2020/04/05/python数据类型的底层实现/index.html","a150357ed85d867aca2dc9bdd5650089"],["/2020/04/27/查看mysql连接情况/index.html","b50e5341c93ed053d3449c5e925553cb"],["/2020/05/02/Linux操作系统核心知识/index.html","2c093a5c70c98080a28889d26378e4ae"],["/2020/05/02/计算机网络/index.html","2986f4c85c00f4d854c07178bdc9d821"],["/2020/05/06/Linux操作系统（二）/index.html","ec8cc3a4fd02a0b27ccba7b82605e05c"],["/2020/05/14/函数补充/index.html","13bbcaa5428f1877800809136c361514"],["/2020/05/21/核心模块的介绍/index.html","6c951e4333d3b9bbca2ac7acdee44519"],["/2020/05/21/高阶函数的定义/index.html","cae8927c4e9058e5c4fd2002225b2a73"],["/2020/05/23/Django后端演化/index.html","9c93bbe23290a0e02912d435edc12eff"],["/2020/05/29/Mysql数据库函数/index.html","4455f2b1dc445915cf8179cc3f079043"],["/2020/05/29/Python面向对象/index.html","a603f2ad1274567f2fcc3f80aa373bbf"],["/2020/06/02/Python 中的上下文管理器/index.html","c8dd114ee2bbb11cffeec32d3936e70a"],["/2020/06/02/Python类补充/index.html","29ac06f4906944fa37d310b4b8e8dd83"],["/about/index.html","a2b4d3fba87db1e55f87d6ead12742bd"],["/archives/2019/06/index.html","848a6aa962c702922b7a44406bea4cf5"],["/archives/2019/07/index.html","4048f0d191fcade96b81abb932549f9d"],["/archives/2019/08/index.html","aa6311fb738954eab78a4ceaa10c0167"],["/archives/2019/09/index.html","5e2c7d13affe186b410de5f2806d2f65"],["/archives/2019/10/index.html","381775ea456072b122efb67030c029de"],["/archives/2019/11/index.html","a4027ce965f6dd269b7830023de16640"],["/archives/2019/12/index.html","86c3bfd9bc221ad88bc6c61377a8125d"],["/archives/2019/index.html","4f3105534b152a8b8d388b73826149f0"],["/archives/2019/page/2/index.html","5a5fba95e75348d517a503f85c951bab"],["/archives/2019/page/3/index.html","93d3fb8efd418585a9ce30ebc4e41032"],["/archives/2019/page/4/index.html","f840d66ab1683a11b77c0d81b2ce30b2"],["/archives/2020/01/index.html","7a713c2c95cc1343615f626a8333d7f5"],["/archives/2020/02/index.html","97e48169b226a20fd60327a4542e0819"],["/archives/2020/04/index.html","32b2e76f846bc8bed6bb6e5e17d282c0"],["/archives/2020/05/index.html","d8e3fc68014338ce6d8056950d402e63"],["/archives/2020/06/index.html","15f2ce336285635fec45657b7e1bc989"],["/archives/2020/index.html","265bb5a153b16d38aac5bfcc257e547f"],["/archives/2020/page/2/index.html","34a0b2fe5ceb07c0843a5a88163853f0"],["/archives/index.html","bb964bab529e3f72caa958ca801f55f2"],["/archives/page/2/index.html","7100ec898b87e92054249178625812d5"],["/archives/page/3/index.html","686ee2f341e08b397eb74b2c405e744a"],["/archives/page/4/index.html","e96f40a98a75d4b6ac7d91dd1c5195e3"],["/archives/page/5/index.html","951f5f379d438fb7d4fbabd35d25a99c"],["/archives/page/6/index.html","b61b86a40be223c2d8f7d88a19e38fac"],["/categories/C语言编程知识/index.html","186a7e455b9c607138a8d32e03743eb4"],["/categories/Hadoop/index.html","55a3d0fc342a20ead31fffa16c70743f"],["/categories/JavaScript/index.html","a1367c6f8e6aca511429cbbac16c1cba"],["/categories/Java学习/index.html","87a33fe6176626f082c66cbf696d238c"],["/categories/Linux/index.html","d4b074f703a2b5684bbfc0acd92b65b3"],["/categories/Linux/常用命令/index.html","b1af1364677e9dcf8944bcc99d87303a"],["/categories/Linux/核心知识/index.html","f7a780d6d75357db65dcc603743fe0d2"],["/categories/SQL知识/index.html","de9721309772263f903ab6fe03e60250"],["/categories/docker/index.html","5dc6c39d88571ba9dc8e9fdd9140a249"],["/categories/git/index.html","a0dd58a49c6d33c1aef73c1f6e6498b0"],["/categories/index.html","8efe800dbd794ecf198be22c8e11735f"],["/categories/python后端架构/index.html","161da6f29cb486f2013e11e5311acfa5"],["/categories/python数据挖掘/index.html","92d659b7da0c3af306c1b87e8cf890cc"],["/categories/python爬虫/index.html","9adb5b4ebdb0d1c9215b1c4a3599cd2b"],["/categories/python的web框架/index.html","a6902f38243f27997693cfa97242f485"],["/categories/python编程/index.html","ad6d85f53f6e066d1c6a844666c47829"],["/categories/python编程/page/2/index.html","1d2e035b3c712a35366407d350b96cfc"],["/categories/python进阶/index.html","5b146b3f5dff0957aab5eb3795a62c17"],["/categories/selenium知识/index.html","1c8db9c4eef3d810daa16676b35bc262"],["/categories/个人随感/index.html","f828e4ac02298391b37ac95c2792800f"],["/categories/前端学习/index.html","73a2c1fcb138b4c7f225d14a3ca9f372"],["/categories/数据可视化/index.html","18f07f77d1495b6c36abca7bb46ae650"],["/categories/正则表达式/index.html","2ad20f0b2e867b4c48af03dd85476005"],["/categories/算法/index.html","ab969ebd9d6c786a0f11332f55660089"],["/categories/算法/五大经典排序/index.html","b62b716dd938c80bcb0a1888d1ed0c2d"],["/categories/统计学和概率论/index.html","d7e86a280728b9091e4dd1dfd4cbe3ee"],["/categories/网站知识/index.html","8b5f9d786b6d69d8896d912e6f9dfebd"],["/categories/计算机组成原理/index.html","9fce06d5d6a0ab74c6a5c09f7b3e9e94"],["/categories/计算机网络/OSI七层协议/index.html","39ec8796bd719f94ae5f43d728a925d1"],["/categories/计算机网络/index.html","4959fd3fc8d905d3e30edf6d0832a36b"],["/categories/面试经历/index.html","470d210b9ff907c4bfb57a8a21434a3f"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","47b7c3409846a00f09680a15fea64c25"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","57e3dc83df8924b9a75f172168d6def5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","130161265a070b2c7f5fbb199c306b0b"],["/page/3/index.html","491adec43656afb205c204a372b6cc45"],["/page/4/index.html","3deaa79efa299ad6deb0958ea2ebadb4"],["/page/5/index.html","6adb6b16f84055a2e8c668c430164dcd"],["/page/6/index.html","6ae1639c6195a69b5a5cc6ea7beb0681"],["/sw-register.js","68c0aa7314519b2f08959dae20ab4813"],["/tags/Django/index.html","f59b691b8582f4736583e7bdc09fb192"],["/tags/GIL锁/index.html","f2db8f10e4e955fdeee17873a3a62ba8"],["/tags/Hadoop介绍/index.html","e2865807bee86c7675162cbed9c71589"],["/tags/Java基本知识点/index.html","f3887cfc30ab10aaa3cad5dfaacbc2d4"],["/tags/LinuxLiunx命令/index.html","0b8579cb54adc7cf7565eeb84d542ec5"],["/tags/Linux知识/index.html","efe3d6a3373e1d6f6c7d81193fce291f"],["/tags/SQL函数/index.html","034cdb185c316dc9baf55ba89506e0d0"],["/tags/SQL命令/index.html","5fc26abcbf94cd01d278b4b2fbc3e3f9"],["/tags/SQL调优/index.html","96396d1c655988281ed1411d441a9e52"],["/tags/Void-知识点/index.html","4ae7790134c3e22ec8aa2c0599ec066a"],["/tags/Vue框架/index.html","187bad48314e0f8b01cac1fc8ddff8e7"],["/tags/docker知识/index.html","2f59d4ae08cdb8d8cd6d00f371c599db"],["/tags/flask/index.html","d98e95053af97226257b8cae399784ff"],["/tags/git命令/index.html","46359bdc762714435994152aba010541"],["/tags/index.html","e8f0edddce926292c3d91ec0cd970d5f"],["/tags/js知识/index.html","64fb6bd6f7e943fbcdf2f336ae944081"],["/tags/pandas函数/index.html","5c1df35dc911999402ec31619ddfe9db"],["/tags/python编译器/index.html","7ba9c43de44f61f0e4a94559900ed035"],["/tags/scrapy框架/index.html","5a09b3db3fb399ff62cd8745907402ef"],["/tags/selenium/index.html","e108fdf12d92b1085ca7238751b9a3be"],["/tags/上下文管理器/index.html","06ce06be4e0fec150b6fd80904769a98"],["/tags/函数补充/index.html","dd0830ddf727b15c1f3eaecd3c06c32d"],["/tags/协程知识/index.html","555018b4e9fe2fbd2c863a68fa8a1111"],["/tags/基本知识点/index.html","e1f51b90943e13f5957a680e1560595c"],["/tags/底层原理/index.html","e69a568930e09091bdb07da09637147c"],["/tags/扩展知识/index.html","cd4e3981e9556a11d9e076e588d53bd0"],["/tags/排序算法/index.html","2eb1e2b53c321850e92e615cd5a22c2d"],["/tags/数学知识/index.html","7438eed82d816a3fd42781ba86807d8d"],["/tags/数据可视化概念/index.html","b2c24406bfafa97dd05222b5f5ca205a"],["/tags/架构演进/index.html","3bd92dfa50557e25f2aa14fed74cde08"],["/tags/核心模块/index.html","75414223f049bf7e5a044a269ab5d7ba"],["/tags/正则/index.html","3cf9cb446d532ce2ccf23e7ac58396db"],["/tags/爬虫实践/index.html","0e17c3d2d1469d78b24a6c685d5de125"],["/tags/类和模块/index.html","b97dfec6a95c1b931831f32c3c895ef8"],["/tags/类的知识/index.html","69ec6554bc841ac93b0eb1ffa586cb37"],["/tags/线程概念/index.html","562b51147f06da5871902673ad6f8a83"],["/tags/网站的基本概念/index.html","397afa8cdb205999a42ea5569fa6c0d8"],["/tags/网络编程/index.html","e76ba8e035f75201f8610f10439a1346"],["/tags/装饰器/index.html","04b9bea4c5d347a42461a3d2291b67f5"],["/tags/计算机知识/index.html","60af281818721507eba5f9a23350a356"],["/tags/计算机网络知识/index.html","d504f3b2fecab8009df63c14c55d5343"],["/tags/语音识别/index.html","83e2f6497b271dec216d7c33d1d34f86"],["/tags/进程-线程-协程总结/index.html","12b322d24bc99d852429df4d8f49a074"],["/tags/进程概念/index.html","dc3c4bca6ade687e23588f39f9701f07"],["/tags/面向对象编程/index.html","8d45412921f6fc00807e581c4fbf3d23"],["/tags/面试总结/index.html","f408d521c3ec128eeafdaf17965436a8"]];
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

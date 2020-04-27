/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","72560ec4fc8c25588116ef0e2d364e08"],["/2019/06/26/four/index.html","fb30c3dfe39b30a4f5f621f809ff43f9"],["/2019/06/26/python解释器介绍/index.html","aaa76328a562b4941c848fab0ff6d6d6"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","958b963e79a7bb93c183a68a673854d3"],["/2019/07/06/网站概念/index.html","964bad6735326dde559e863b1d768ff8"],["/2019/07/11/数据可视化笔记/index.html","614ba44e29cb43605e0f7065bd458338"],["/2019/07/12/语音识别/index.html","0b66374351a7d3dc54dc3d4d2e2397f9"],["/2019/07/14/hadoop基本概念介绍/index.html","cd46e3bd44a6b0587a89b81979149db9"],["/2019/07/14/数据科学笔记/index.html","79a22c00a44398621bccc9841c63a163"],["/2019/07/22/python爬虫/index.html","70ce02371acdcdff6f677e8aec978d88"],["/2019/08/25/pandas函数/index.html","795199c183e8a3f8dfb870b3df718f1c"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","a7ae3f422cb83f7cc273cba3e99c5c62"],["/2019/09/30/C 语言中 void 详解及应用/index.html","16b6a01fb9ea9fd55120d826691c4587"],["/2019/09/30/第一次面试总结/index.html","0e59545bb5a61348281f6dc4408f5405"],["/2019/10/07/django之url规则/index.html","6777a0e3bc49f9de6c1f53dc707a7f51"],["/2019/10/07/django配置初启/index.html","778a04a98a6273012007c4ae6670b4b9"],["/2019/10/13/C语言笔记1/index.html","4de81232f2b9d79a1a250dca19145acd"],["/2019/10/13/C语言笔记2/index.html","4b17e8c4fdb30f91037929f49ed531f6"],["/2019/10/19/C语言打包技艺/index.html","01991bc2e441f91a581399ad64ef3c3d"],["/2019/10/22/c语言笔记3/index.html","d3b912fc4074d456b99cfb17c07b0818"],["/2019/10/27/IP代理池/index.html","b023f74740a1b12a2273dbbdf0e80075"],["/2019/10/28/git命令/index.html","3b0a986cef6fe8398e0d2ce6a5e61526"],["/2019/10/31/斗鱼弹幕抓取/index.html","d7ef6aab0d85fe9706ee3eb5c8d1ead7"],["/2019/11/13/多线程/index.html","c6870288c011a1239460abd5288e21fc"],["/2019/11/14/多进程/index.html","fba3343c1b7d3241ebc3b5b18959d267"],["/2019/11/15/python类的私有属性和私有方法/index.html","eb927852419686dfb2a80de09c76635e"],["/2019/11/16/协程/index.html","3783e3823542c6e382edc55dee2a56e2"],["/2019/11/16/进程,线程,协程对比/index.html","8225fdd709016c329bfad941aa2908a1"],["/2019/11/17/GIL锁/index.html","710e402621fcc20ed9b7328a2baf3bfa"],["/2019/11/17/闭包和装饰器/index.html","a6c73bc929eb15512f52744d11ba9502"],["/2019/11/19/Python进阶知识点/index.html","54d937d33b04945bf4535cd629d7a770"],["/2019/11/22/京东全网爬虫/index.html","da6bacce2d5e6194ca8ea1b8f5d8ec9c"],["/2019/11/23/JavaScript的简介和基本知识/index.html","4bc99c078afdf17c8b9a5e4c0b241e7d"],["/2019/12/04/README/index.html","1b374f99cc7d0b9e935e4a7f64e5db72"],["/2019/12/04/java简介/index.html","9f2b4f5b768aa0b37276423de6f82851"],["/2019/12/11/java基本知识/index.html","4062844268093a0602bd7dc1ff438064"],["/2019/12/17/Java面向对象/index.html","ae2d2457e531e67f59ce7e54ec7650b0"],["/2019/12/19/面试总结/index.html","5de1775944d23793a6546f68fd129175"],["/2019/12/20/SQL性能调优/index.html","06d640c5008f70157a4f569817aa85bb"],["/2019/12/26/vue框架介绍/index.html","bd150500038b46e66d50588581411c1e"],["/2020/01/02/12306自动抢票/index.html","635a01571dcfabf23243f355310d7008"],["/2020/02/24/flask框架/index.html","5effd6ced610ac03ec17e66738ca5509"],["/2020/02/28/docker以及相关概念介绍/index.html","b68689f5c148997c31e5155606ae2fbb"],["/2020/04/05/python数据类型的底层实现/index.html","282d70134c508801c23f9b8d744eb031"],["/2020/04/27/查看mysql连接情况/index.html","ca6174494e59e3cd10d3123b480e5be7"],["/about/index.html","b3b1bdcfaa4b708a12efb6fab341c7af"],["/archives/2019/06/index.html","633540a9835dd034bbd9abdeef1d7d32"],["/archives/2019/07/index.html","d8cb151dd243dedc93073e920c486e88"],["/archives/2019/08/index.html","8add3db380018487ba32728eec79a164"],["/archives/2019/09/index.html","411838a416ae5704a3e5ec67bc13fd6b"],["/archives/2019/10/index.html","ea4babe7b252d5b25bacb151d3dd3204"],["/archives/2019/11/index.html","7dfe82de2ab799b39efd997abd444b47"],["/archives/2019/12/index.html","3ca70d5a9656310fcac3b6075dbc14ed"],["/archives/2019/index.html","f7e6f63fa7c3fb2816111d9587788032"],["/archives/2019/page/2/index.html","2404577821ade43e3a7b4712d717ff02"],["/archives/2019/page/3/index.html","2646e24c85186318cae3d710c619157b"],["/archives/2019/page/4/index.html","319c370f30dbb4ba93bd2232725c58dc"],["/archives/2020/01/index.html","20f14d4b86cd22ad91eb183f552c2133"],["/archives/2020/02/index.html","c07777dfdad4bc0cfe58c854b61f025a"],["/archives/2020/04/index.html","2baf638d5d3e0600c6c9341fc12b72e3"],["/archives/2020/index.html","c36892e0a851ca4a0408fd8fdb8222db"],["/archives/index.html","3e8451b0b6be4cdb6d0e258242b2148d"],["/archives/page/2/index.html","ac89340e14e041929e7c834e0885a555"],["/archives/page/3/index.html","cf306c3271b3126ee2412115ef4cbba2"],["/archives/page/4/index.html","a7b7280ef5302f30e2b1436abc0c1c4f"],["/archives/page/5/index.html","34c4f7dda9f3c50fb98b78da1e1af18c"],["/categories/C语言编程知识/index.html","25b9131983a35ece4ddaf80e42e3d3e4"],["/categories/Hadoop/index.html","c2613629e16e08e202d49f95ec08c7dd"],["/categories/JavaScript/index.html","e3edd335f0c8d055c24052c742ccb4ed"],["/categories/Java学习/index.html","afd1a7ada5d7c41768715f2075ad122b"],["/categories/Linux/index.html","4c0b961cea18d046303e76c3ada6f4aa"],["/categories/Linux/常用命令/index.html","b09a0034789e96b23535701a9d926215"],["/categories/SQL知识/index.html","6fee401299bcca80b9c0a69f0488814d"],["/categories/docker/index.html","d296e6494f150b30559b7effa3c3eb25"],["/categories/git/index.html","59fe4d33a10e94840932b96b05779e88"],["/categories/index.html","bd73ead5e75a4df75f3bd349c17e3259"],["/categories/python/index.html","c0b6b160e3ec7b7eccb40b8051c56b08"],["/categories/python数据挖掘/index.html","930f71787f253c6445c35c2dc9e09edf"],["/categories/python爬虫/index.html","a29a3de6872b5a8e45dc916366c551f1"],["/categories/python的web框架/index.html","12cbcf99b181aed9486e76c0dd982fa0"],["/categories/python编程/index.html","7f12bd55083e178f2f9b7c6e37b480f6"],["/categories/python编程/page/2/index.html","30d34bbdf34cfaa1769e91742959c205"],["/categories/selenium知识/index.html","5ce33c3cd632ba78a68babe1923698bd"],["/categories/个人随感/index.html","3381635c5e7f185fb07a2251528ab1a7"],["/categories/前端学习/index.html","e3b1c81987ffcfe69e21ca86be290c3a"],["/categories/数据可视化/index.html","fd2c24ec30c6f7743e1597d2a10e11d2"],["/categories/正则表达式/index.html","bf30a7d441499efc98cc6a96b62fca6e"],["/categories/算法/index.html","9b5c7749705730d7c8524595de63b398"],["/categories/算法/五大经典排序/index.html","05ab558b0869c71649e86e1ae73306b3"],["/categories/统计学和概率论/index.html","b9210cca3e0bda63eb9f98ba37f8f922"],["/categories/网站知识/index.html","31398103429088a16d6871dbe268ad2a"],["/categories/计算机组成原理/index.html","c3facf1e0dbb900b28c25fa6238b2e38"],["/categories/面试经历/index.html","508afdf50de5b511ab43d8a497e50348"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","170287e55b6e158e18d76c267d6c7473"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","f413f26eddf14e4004a7c82fa7860884"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4070e5f6aeee098924f2ea05598dc13d"],["/page/3/index.html","ba5bb1610eff9ca2b171ff35523a1e49"],["/page/4/index.html","c3d85a32af57c834f97919f9897cf6dc"],["/page/5/index.html","b10fed4b93bce019a7fd6b98e5bc2182"],["/sw-register.js","d51a50fd2b1d1ec5a38db80f4def71f4"],["/tags/Django/index.html","365a73693d66100206d036e2de4f7531"],["/tags/GIL锁/index.html","ac6444e5cb79628745946c15f10416c7"],["/tags/Hadoop介绍/index.html","7ecc78a26cd29f118958b99f52fd99fd"],["/tags/Java基本知识点/index.html","90a375ee5517f61e3884f2c63ae0bcda"],["/tags/SQL命令/index.html","1d8a7d73b7d5245bef57de04477a8335"],["/tags/SQL调优/index.html","e727ca03d9dc8c531102a971f49a4b8e"],["/tags/Void-知识点/index.html","4e93ce8922a4623abd8e296867319640"],["/tags/Vue框架/index.html","fb73e1a40c3028a4e56a782727a709cc"],["/tags/docker知识/index.html","9cdfa918ae505eab9d0808835588feba"],["/tags/flask/index.html","57446101e53ae21513417e52cc6db637"],["/tags/git命令/index.html","71ad831348ada72c6419fe309ab9c1ad"],["/tags/index.html","c659da511d0465a416d2c55415118065"],["/tags/js知识/index.html","de0e87386ff3c38449cbde7fbffa5ecf"],["/tags/linux命令/index.html","9fe22ef522093dc94ab7d7c93bd84594"],["/tags/pandas函数/index.html","a34f4e684dd5e1abcd4e370bef35c8ed"],["/tags/python编译器/index.html","dcdf4ec04b1c47bd73aa90bc8931e03e"],["/tags/python进阶/index.html","a7f8cac9b70f128174ebce57a26a6635"],["/tags/scrapy框架/index.html","c411794e43301bf3e5827361dadae526"],["/tags/selenium/index.html","c34a8af06cb5eb9143a1a7dc099c0e6a"],["/tags/协程知识/index.html","2714f06dad3bdb04da49699672e2751d"],["/tags/基本知识点/index.html","b147170525fd0e0b486403a2078e2b08"],["/tags/扩展知识/index.html","dac248286987de21c279d308790106a9"],["/tags/排序算法/index.html","93a9a927904572d1e376937d631adcdb"],["/tags/数学知识/index.html","a46e4d6b9dcaeae9aa12330efc22446d"],["/tags/数据可视化概念/index.html","8d1c2bc218035920c2ee776254ce8e8c"],["/tags/正则/index.html","57e54c1ad3f42c2780a724953febc5ea"],["/tags/爬虫实践/index.html","873f169bcd56c3fad1879a02761166dd"],["/tags/线程概念/index.html","6f149b4510aebc6262f1cf78e49afa83"],["/tags/网站的基本概念/index.html","9459cd8480d203e3cebbb8318a145aeb"],["/tags/网络编程/index.html","167a652046abacc5a9fb505de4357a50"],["/tags/装饰器/index.html","ba8922082120eeed092a5cd658d87ae7"],["/tags/计算机知识/index.html","6517430aedd1ea5072fda85e45667103"],["/tags/语音识别/index.html","6b0dc8accaa98adbb54dcc55e5e37710"],["/tags/进程-线程-协程总结/index.html","a740984bb06c6f03a65ac62eb3798b07"],["/tags/进程概念/index.html","9419122392d008e6c9628b47d8e4c50f"],["/tags/进阶知识点/index.html","dc830e37fc103d71850059ee37329a28"],["/tags/面向对象编程/index.html","80c4b8be8a6ae54b1122cfb89056e475"],["/tags/面试总结/index.html","65984fe1250d1be4bb693cbdc478e27e"]];
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

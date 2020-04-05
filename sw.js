/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","b4a734b20f1b3ae41a14ebb90639aece"],["/2019/06/26/four/index.html","d287871b069502b8c09f65c6da43a64d"],["/2019/06/26/python解释器介绍/index.html","8182fb889a7eb19475fb5154e79eb7ab"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","056bc2c2bf1a58292c4ed44bc4a7ac00"],["/2019/07/06/网站概念/index.html","8a2f889629d0a429159e1f4d55c1d8c0"],["/2019/07/11/数据可视化笔记/index.html","dc70b4068bdf9002bb4714b327b95ac0"],["/2019/07/12/语音识别/index.html","48644fa0318e89190dd3e85005489a3f"],["/2019/07/14/hadoop基本概念介绍/index.html","7849ba3721626584f16832c09fbfdd92"],["/2019/07/14/数据科学笔记/index.html","485af42d5682f98c1207d753ba921d68"],["/2019/07/22/python爬虫/index.html","2f21634aa4669be63694e3cc09975ec4"],["/2019/08/25/pandas函数/index.html","7a1a45f17e239616b20ca9aefc0e04e6"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","8a29a9f89cdcde95779bacfb840b59a4"],["/2019/09/30/C 语言中 void 详解及应用/index.html","deb0b0aa707095bdfcaf289050d83b94"],["/2019/09/30/第一次面试总结/index.html","6ff72d1ba2f8cb08e057e86c55b314f1"],["/2019/10/07/django之url规则/index.html","93cf6cd34197d620e36de1b2c30682c6"],["/2019/10/07/django配置初启/index.html","ee65837eaedcd56f80cea52a6697bf2b"],["/2019/10/13/C语言笔记1/index.html","268990baeb533c61055cacd68ce5a12e"],["/2019/10/13/C语言笔记2/index.html","7530b4b514f5d32dde45f6b6be13b2bd"],["/2019/10/19/C语言打包技艺/index.html","62fc2eca94775b6f9ad8458773d08393"],["/2019/10/22/c语言笔记3/index.html","e9efd6cff29279bf462b22b9bc98b9de"],["/2019/10/27/IP代理池/index.html","4e2b9087da74656e00a498b2c5eed35f"],["/2019/10/28/git命令/index.html","b1534b5c6935025a03a9d95d9a183d21"],["/2019/10/31/斗鱼弹幕抓取/index.html","a9037f7a14849aedfbe3b915f2841eba"],["/2019/11/13/多线程/index.html","4e2f26b47cf8327818aa1ab65ac42423"],["/2019/11/14/多进程/index.html","b65fa58c2724463e4466930a6cb3b9c7"],["/2019/11/15/python类的私有属性和私有方法/index.html","530eed3ead4f7211751aa154ada8228c"],["/2019/11/16/协程/index.html","8c99d15ef57115ea2485106f4c67e3d1"],["/2019/11/16/进程,线程,协程对比/index.html","dc124fb8e457ab40d2acef1cac423865"],["/2019/11/17/GIL锁/index.html","ac6358c7217da8c7e7e4c9281a10a062"],["/2019/11/17/闭包和装饰器/index.html","375488813b0a9286a4c6fd1605ff739e"],["/2019/11/19/Python进阶知识点/index.html","36e8ffb7deb877813e9dbb096977483f"],["/2019/11/22/京东全网爬虫/index.html","7c4696c80e24b0f3048fe514e1256dc5"],["/2019/11/23/JavaScript的简介和基本知识/index.html","ef7fed8bf59ddd0e19d8f502dd0740da"],["/2019/12/04/README/index.html","b96e2f50bfea5fa52b1c883d8cbad28e"],["/2019/12/04/java简介/index.html","8b5648a1438aa2fa5b8fb6fab1dc5341"],["/2019/12/11/java基本知识/index.html","23751fe2d4924e01cba74fbd5441cbb4"],["/2019/12/17/Java面向对象/index.html","40529b7cbef76031558982992e021085"],["/2019/12/19/面试总结/index.html","e44d1d1c3db5dd64e31a602267c01773"],["/2019/12/20/SQL性能调优/index.html","e896c294e8a260967ca7b60e6a7c0bab"],["/2019/12/26/vue框架介绍/index.html","66fc7c903820871cf23c310b7fa58dac"],["/2020/01/02/12306自动抢票/index.html","21768d5a4bc16a6eaae5864710e1eb22"],["/2020/02/24/flask框架/index.html","4f8a69dbe8a54134daeb2891871cea31"],["/2020/02/28/docker以及相关概念介绍/index.html","1710d8202ae1c800d879eb2159eded63"],["/2020/04/05/python数据类型的底层实现/index.html","daa4a88637fa62747fd7daaf88deb773"],["/about/index.html","1640c4b22716dbde40d50f66c1663f1a"],["/archives/2019/06/index.html","e381c15b7044dd41786d45fe9e292a2b"],["/archives/2019/07/index.html","f6805503e4a101a4cdfc4dcb40db2abe"],["/archives/2019/08/index.html","94c9d9f1a09eedabac369529acde0859"],["/archives/2019/09/index.html","614fdf8ad6cb6e0db3baac8fed992364"],["/archives/2019/10/index.html","cc6afdc690e2512643de656cfd620ee6"],["/archives/2019/11/index.html","c4dc0d5a47a70fdacb31698b89a7674d"],["/archives/2019/12/index.html","cbd82021db1776e2720730d84afc8da4"],["/archives/2019/index.html","3fe344c8d67c08fde8a78531b8ab7f92"],["/archives/2019/page/2/index.html","83b5de2f8c2f15053bf6265c08f10b72"],["/archives/2019/page/3/index.html","985c56c6473305e58288d8413aa62beb"],["/archives/2019/page/4/index.html","405058fe1acad88225178992d1a54d4f"],["/archives/2020/01/index.html","8f35594079fdf0e34c7d8642594c59cf"],["/archives/2020/02/index.html","28fdb9db4c06b647d8551632e29015f3"],["/archives/2020/04/index.html","25ac5ea89c9ce472af871c366381769d"],["/archives/2020/index.html","008a9c9730d700c64f84592b183a2134"],["/archives/index.html","6209ca2e35d8aa4d1e239e7cc57bfe63"],["/archives/page/2/index.html","e38a69473252b29011b58476d86bc4a5"],["/archives/page/3/index.html","4e27176331b5d86943c64fa1924f9a36"],["/archives/page/4/index.html","a7d75728b57f84a4618109e0d44db57a"],["/archives/page/5/index.html","2afeb6e0a6d535580faad2807fa6f0e2"],["/categories/C语言编程知识/index.html","4a56aee36b6aee38286d1468b9a5b59a"],["/categories/Hadoop/index.html","5ad0402c296c0d0e50611b932730fad3"],["/categories/JavaScript/index.html","6c8810ae80a90a10a68bdb713ab83a51"],["/categories/Java学习/index.html","50743cc766362ad790b34ed6aef922ab"],["/categories/Linux/index.html","cef9a5f6af9eb70cc47ef7e2863bc4f0"],["/categories/Linux/常用命令/index.html","1dfa3f1c2808d361746a055239a34d72"],["/categories/SQL知识/index.html","df904eaf1e9e1e3e1ffa80659444ce1f"],["/categories/docker/index.html","14378f2f4d242076cbef1aad3b5a2faa"],["/categories/git/index.html","a52f682359a8f775c45b1b401465593e"],["/categories/index.html","c0fd0b62607969239050fb7d3bce2e12"],["/categories/python/index.html","14a7dc0461006ee1c8c53135c90dcdbc"],["/categories/python数据挖掘/index.html","e5a2079a03cc4dd2f320165d002c6d08"],["/categories/python爬虫/index.html","93d0cdffc68001d47c8577021e0d0b34"],["/categories/python的web框架/index.html","d23d9ab4181d1745ec3685ccfb35ee3e"],["/categories/python编程/index.html","957a9f2e2eb3c35455f42d1d557a65fe"],["/categories/python编程/page/2/index.html","e3c57df4c1341bfb82e01b403a840675"],["/categories/selenium知识/index.html","81557b0e89f701b9df72f9b02b943dd4"],["/categories/个人随感/index.html","97ba738963071a2bce9963c03626d219"],["/categories/前端学习/index.html","00a01944587fd400464815ce3e5f2494"],["/categories/数据可视化/index.html","ed7132847ed55c5a4f655449eebeff6c"],["/categories/正则表达式/index.html","cf3d5d16195c5117120ed9c5d8992b47"],["/categories/算法/index.html","087236202b31cdf4b4c0c68432a09aea"],["/categories/算法/五大经典排序/index.html","570228e6407232659a6871e504bb2200"],["/categories/统计学和概率论/index.html","54bf0e5beba6af0cae0c926189722a49"],["/categories/网站知识/index.html","7485e6f06a3cafe8bccfefba3c553a20"],["/categories/计算机组成原理/index.html","b241a573aa78bebd16c71b7340e27d87"],["/categories/面试经历/index.html","2b4827e60401d4791edb159906113054"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","ae83c075dd001e1062e81743ce5f1366"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","b1f6cc1e8bd183ca96943bd8b0a886a8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3664ead19ae632c1972562b89558971f"],["/page/3/index.html","1cdfbc7feb6042f186510c961b7ca535"],["/page/4/index.html","c87a8fcc491b4850010ab2abab38fd2f"],["/page/5/index.html","85b0e4e016698b58ca0735b5781fed15"],["/sw-register.js","234b80add9003e56646554869ae20433"],["/tags/Django/index.html","a873ed9be38cbc1e6e1db8c41661e864"],["/tags/GIL锁/index.html","d7960e2c9cba1048eb1e4ad2572dfdf1"],["/tags/Hadoop介绍/index.html","63a81f08a77546f6c0fd90c32208289c"],["/tags/Java基本知识点/index.html","9380af7f2c790b5e159e3ec4eb96891c"],["/tags/SQL调优/index.html","796453e78f964abce63a1859f84fe329"],["/tags/Void-知识点/index.html","bb90f39e962bdab4faf980bb390de39a"],["/tags/Vue框架/index.html","c08aefc2bcac8c700f03a46004efb9b2"],["/tags/docker知识/index.html","d8e513fe7071f8886a2d1d479ccfb0f2"],["/tags/flask/index.html","287d326620881a58baf2dca9805e03a8"],["/tags/git命令/index.html","9e0ea2cbe839f731841b44c24acedb38"],["/tags/index.html","2f9204036ad92511abe890dd0d44b1e4"],["/tags/js知识/index.html","b8db65d314a480a5a31a821b88b33c86"],["/tags/linux命令/index.html","610b81c5622b53747642d1d0c3a5078e"],["/tags/pandas函数/index.html","8057b0c26e685fa1736bdc5d892e4db3"],["/tags/python编译器/index.html","950d2ed4c115dd4e8ea536ba452aba24"],["/tags/python进阶/index.html","4ff05254a8aba2fd88136e9891a4edf8"],["/tags/scrapy框架/index.html","22b7230c55219936697926554c3929f7"],["/tags/selenium/index.html","0e338675b8e43f236aacff50e828287b"],["/tags/协程知识/index.html","231fdd1b25ecb55b35d7b793aeccd4ed"],["/tags/基本知识点/index.html","131e194537acc42e68ec102e2e368380"],["/tags/扩展知识/index.html","afdf5d72b35c8d46cf25a9b2f62ee2df"],["/tags/排序算法/index.html","f048d77922620f98f3a0d1714f098106"],["/tags/数学知识/index.html","92d6bc58c4264df7de2edf560a6e6f2d"],["/tags/数据可视化概念/index.html","66262c4a0aadde3242727b0290c0378b"],["/tags/正则/index.html","b05f5230bccd9bacb93958ef911bd531"],["/tags/爬虫实践/index.html","0260d0f8c51d228fa6fd9a3f00dad9a3"],["/tags/线程概念/index.html","84c9d024921b77e6828029ae82d78b81"],["/tags/网站的基本概念/index.html","8a12fc83a3ebfb42e63a5deb41562ef0"],["/tags/网络编程/index.html","d268dcd68fbd0cb7be957dc70d8758de"],["/tags/装饰器/index.html","df7cdf64587dddadd45068059772ddc3"],["/tags/计算机知识/index.html","14ec9cb59ead4e07fbde502342e9e580"],["/tags/语音识别/index.html","191643a1d19bfcdcfea8b8b21636faad"],["/tags/进程-线程-协程总结/index.html","b60c9f370ed9827658ddc96d23995030"],["/tags/进程概念/index.html","dabd6be2be422c9e840ce146e9f08965"],["/tags/进阶知识点/index.html","335883c150e9dcb4443a1752503afcca"],["/tags/面向对象编程/index.html","1fc6a2adf9545d4414eb4ba4f2c80389"],["/tags/面试总结/index.html","277952ef54cf21022b750f3786fbf88a"]];
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

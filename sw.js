/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","6496f77b01a3bd7456a0a5a580e842a0"],["/2019/06/26/python解释器介绍/index.html","c4ad05995be80b32375b1ce963f9131e"],["/2019/06/26/正则表达式/index.html","2628bb0d531745bcf63f29844d7020b1"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","7906253ca78b1b34d119ef46ab28eac6"],["/2019/07/06/网站概念/index.html","32a8046348f49c0610da21892d52bb16"],["/2019/07/11/数据可视化笔记/index.html","5181a53947ff58ee9a1a1989ba9f41f9"],["/2019/07/12/语音识别/index.html","2f7cd826f969370e4e3493dee01b22ee"],["/2019/07/14/hadoop基本概念介绍/index.html","4490df81c98a3a28be93dcf0058f855b"],["/2019/07/14/数据科学笔记/index.html","fd2e0265d5482e1392dc502d778a0faa"],["/2019/07/22/python爬虫/index.html","d08557ca447c900cfc82a6f18a27e128"],["/2019/08/25/pandas函数/index.html","776341ed7b51dde737810abc21fdad2c"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","817c7f76d446a1feb06c5e0a406fa008"],["/2019/09/30/C 语言中 void 详解及应用/index.html","a15ee5ca3209f30cc6673bd41531be03"],["/2019/09/30/第一次面试总结/index.html","c9d232df4daa5082e550d9407ec683fe"],["/2019/10/07/django之url规则/index.html","76ec064df06d010268ddd4b8a974a904"],["/2019/10/07/django配置初启/index.html","81b2d5205c7c5a6bcc78d79836e49ba8"],["/2019/10/13/C语言笔记1/index.html","718361f23c37378836c4965fb05d5495"],["/2019/10/13/C语言笔记2/index.html","95b32444cdf4063bbcf34e5a16b227a5"],["/2019/10/19/C语言打包技艺/index.html","2a9e9ffa273466131d1114a14e28b48a"],["/2019/10/22/c语言笔记3/index.html","987f44662ab1d3e07cfd262bc027c489"],["/2019/10/27/IP代理池/index.html","fe2a16c35256e7c9f9c3b688cd200310"],["/2019/10/28/git命令/index.html","11a635e1164f2847c6ffc036ce86e38f"],["/2019/10/31/斗鱼弹幕抓取/index.html","dfedf4ebf573fb90d3f7f3ad90f0f253"],["/2019/11/13/多线程/index.html","26033a734d7d9a30da0544f92e03b9d2"],["/2019/11/14/多进程/index.html","0b5f7c1f95fa14a10356f84b014b629c"],["/2019/11/15/python类的私有属性和私有方法/index.html","57453d21fe1070bccffd33e4aa06f1dc"],["/2019/11/16/协程/index.html","f54c993b08b53c1b9160d2808d136085"],["/2019/11/16/进程,线程,协程对比/index.html","974d4a97ee097f95c7efbe353aa82f03"],["/2019/11/17/GIL锁/index.html","d831897f8e3f41e534ca8a24b8e2a536"],["/2019/11/17/闭包和装饰器/index.html","628e29d5ed3df080d009e23203cff965"],["/2019/11/19/Python的模块和类/index.html","58a3d7cb189d2dd369784b518f591924"],["/2019/11/22/京东全网爬虫/index.html","89d34cbfd9c907c90475cbe547b987dc"],["/2019/11/23/JavaScript的简介和基本知识/index.html","c5b508daa659ea05f3c56b6b446dd07b"],["/2019/12/04/README/index.html","1786e74d85391d6fbc0b5f80a83bd2e9"],["/2019/12/04/java简介/index.html","4c68d715ee70971f7d48c9475837fc0d"],["/2019/12/11/java基本知识/index.html","c7802dfac831ec0d465e7006bb154b82"],["/2019/12/17/Java面向对象/index.html","75405cb7c30bb313390c0a1dc86f7028"],["/2019/12/19/面试总结/index.html","a618b47da1718c30e9004634df510d21"],["/2019/12/20/SQL性能调优/index.html","a37c7149915a325729ea12d37d42360c"],["/2019/12/26/vue框架介绍/index.html","9f014e581eb17870854458d990ee1f1e"],["/2020/01/02/12306自动抢票/index.html","ac60d1d054c66f695e38352faf481138"],["/2020/02/24/flask框架/index.html","4784f83a68c93cfa8f84c778afdfcfc5"],["/2020/02/28/docker以及相关概念介绍/index.html","4aa99e6ea4efc0f7879c603208e408da"],["/2020/04/05/python数据类型的底层实现/index.html","00662f4cd7da9974bb1526ac03c16bae"],["/2020/04/27/查看mysql连接情况/index.html","0867baace674014a879e54f08efcb748"],["/2020/05/02/Linux操作系统核心知识/index.html","958ad8399a7888c8883c1c4426b5e065"],["/2020/05/02/计算机网络/index.html","f71cbba20ab74dde3d66333c69b27b8c"],["/2020/05/06/Linux操作系统（二）/index.html","050c4598adf1619a043d3970ed118b13"],["/2020/05/14/python函数补充/index.html","e884742bad3449f8933f31e410705565"],["/2020/05/21/python核心模块的介绍/index.html","dbc4feee1d23a40f526479a210e278dd"],["/2020/05/21/python高阶函数的定义/index.html","75902107f125613ce8b782a472630eb0"],["/2020/05/23/Django后端演化/index.html","7c9c8ea603262a11cd8e9b5bbf1a7b72"],["/2020/05/29/Mysql数据库函数/index.html","5bf8b40ddb303ed5af6d46508d0c2cb3"],["/2020/05/29/Python面向对象/index.html","b6b6e4eb6ae662677cee8f5a06064676"],["/2020/06/02/Python 中的上下文管理器/index.html","535279baa3e2f8e1e10e7ee8ab028abc"],["/2020/06/02/Python类补充/index.html","f44ce9e5d2f473769eb06025b594b528"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","2d8d2ee146a5b0503e54d849f58a7daa"],["/2020/06/07/MySQL数据库引擎和数据类型/index.html","c5599550815bb7d25523eaa389979fb0"],["/2020/06/07/索引和事务/index.html","a6819682d0de909cfd8da1f179c71eac"],["/2020/06/14/Django参数和模板/index.html","0c67cb8a2354fb009722bbff4738e5ff"],["/2020/06/16/Django的ORM多表操作/index.html","d3c11957b6beb93beaf8149040363278"],["/2020/06/23/Django 重定向终极指南/index.html","a175bc72ebb2c2d16a7d129876c277dc"],["/2020/06/23/Django的Field详解/index.html","f668a769167ac52a201dbd1c0858ff96"],["/about/index.html","90b7edeb2bedc2e50f46db35c77a701e"],["/archives/2019/06/index.html","c8b6d4368b8fbbd1fa9c6f87f8a90fbf"],["/archives/2019/07/index.html","5f3e4390825dabfe8ef7a65c3f4af160"],["/archives/2019/08/index.html","4b614fd21157254326068441f2bf6343"],["/archives/2019/09/index.html","0e43314280f9e669792226e7d4e267c3"],["/archives/2019/10/index.html","f9aac4beeb3e761ef0e85466cb635819"],["/archives/2019/11/index.html","3105c02b3e6b8d670dfae1295fce28fb"],["/archives/2019/12/index.html","c2ba0b8d55b2563bec685c72a88778b1"],["/archives/2019/index.html","b7406748dc24252f2a3107f3e15b0727"],["/archives/2019/page/2/index.html","6e860332544f8c22eedc5acb6a5d791d"],["/archives/2019/page/3/index.html","571f5eb256ee1802ed10ad3e9e0821a1"],["/archives/2019/page/4/index.html","6c8eba5352946c101981c74fa6b32f43"],["/archives/2020/01/index.html","21a7ef5dbfdaab459d1e652bf11a0244"],["/archives/2020/02/index.html","c05a9547ebac188da49477466fa72dce"],["/archives/2020/04/index.html","f21bbea9164c6363049f6e689835b589"],["/archives/2020/05/index.html","4b86b8eef0ee0dd2e4246f452224ab76"],["/archives/2020/06/index.html","7a3379ac0ca304f5e368c53794b630e8"],["/archives/2020/index.html","6be5b2549a82215dbb38d8d4b045b442"],["/archives/2020/page/2/index.html","5d819726d145fec97a0ea7211f42d1dd"],["/archives/2020/page/3/index.html","812001b2a36e02e736b66537439a794b"],["/archives/index.html","9f85eeb55ab3c958bee9e61dff0097f7"],["/archives/page/2/index.html","4863edc8f4a49cf1d1714141fe1d5baa"],["/archives/page/3/index.html","9983c84ade36b9f2201d111c67eb9210"],["/archives/page/4/index.html","81ae3d37ed393b548365e11798fe4094"],["/archives/page/5/index.html","037ddb222350c780ac233d7839eaaaaf"],["/archives/page/6/index.html","a5098612dafb145a1b51bee59268e5ca"],["/archives/page/7/index.html","f4d461bf8b5dcf9a5d66a2f527ee31c6"],["/categories/C语言编程知识/index.html","fd72556c92bfd31a5ddcb78e07294ddf"],["/categories/Hadoop/index.html","79db0e4ab3fb79087c3f4176074bb4da"],["/categories/JavaScript/index.html","d1874f245d93f167857b05af700a85b5"],["/categories/Java学习/index.html","0a989ad211f2b581c1249ca8796b84e5"],["/categories/Linux/index.html","b598ae6dde49ac4613111a4875aaa67d"],["/categories/Linux/常用命令/index.html","39e7a962c9e314feeca1b0e2d272c7ba"],["/categories/Linux/核心知识/index.html","d63d9f55321685f0c03e2eb43e0f27ae"],["/categories/SQL知识/index.html","68b6ddbbd75817fddc22bb7cc355c7a4"],["/categories/docker/index.html","8228cc953263421574cbf5e1fb6bbb6e"],["/categories/git/index.html","2950423c08aef8214286213e9e9e9602"],["/categories/index.html","81a5116154ce2aa055b210d7f71918ff"],["/categories/python后端架构/index.html","9dd9b9961589bf8f5569a7e85169d5d5"],["/categories/python数据挖掘/index.html","2c8113e7e1a8f596df9a41cc7fce0b67"],["/categories/python爬虫/index.html","fb907ef4e7b8dc01f6ca6454a7739cf2"],["/categories/python的web框架/index.html","a4f81056e9ac5d0f0b37da3e0788f2d4"],["/categories/python编程/index.html","2a4dca937be9e36926f93436bbd54e7f"],["/categories/python编程/page/2/index.html","650d7d9ef4d90a81af74b30c4f0a94be"],["/categories/python进阶/index.html","f8e89a0721e88679ed646f157966e64e"],["/categories/selenium知识/index.html","3761f7fc2c89c8d1b69304d558a22511"],["/categories/个人随感/index.html","0e1f5a3bcba5f1054ec67e294bf4485f"],["/categories/前端学习/index.html","c350f4dc98f561f2708bc33c9bd010e6"],["/categories/数据可视化/index.html","a66fc0086c24186dd1d0d4b451f87fde"],["/categories/正则表达式/index.html","280df5a81a9213ade528a288d6a1a50b"],["/categories/算法/index.html","b2ddd2fde05c14eb5693651fef5cd74a"],["/categories/算法/五大经典排序/index.html","e0567e7b3d1bb99ec330fb4bb0c3bae2"],["/categories/统计学和概率论/index.html","dbbe65a37fe08791980d177f9fc5c17c"],["/categories/网站知识/index.html","205614f1e768483d02a809644aaaa45a"],["/categories/计算机组成原理/index.html","a4ba71b8c7584cf9a2131f19d662997e"],["/categories/计算机网络/OSI七层协议/index.html","f78badf8b409168cb770fd42d030028b"],["/categories/计算机网络/index.html","2aa647a7d315f838923b1679a9301372"],["/categories/面试经历/index.html","09012878e5dc2a8eac3f0aeeea27073e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","3184af08c333c407b4d220bda59e76a2"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","81c1b31298cc22ced80c1618f99f92d8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b59dd45170e58abf0ee6261a275cf4c5"],["/page/3/index.html","8505707152eef73e41be1569e2719e65"],["/page/4/index.html","f1dd6722694644e9a3ab89b0aba98ac5"],["/page/5/index.html","8c400c821303d1506a61cc8a846a92fe"],["/page/6/index.html","596a15f55208702ba672d57f8dd07089"],["/page/7/index.html","e5c5cb31146f95efb3fc0f23def52e32"],["/sw-register.js","32869a210cefb82dfac8f9b9dc34d6b1"],["/tags/Django/index.html","fccc471f0354123cfc06ceecd567afdc"],["/tags/Django重定向原文/index.html","cc95c1211f11bc27850eb805c4dbaf47"],["/tags/GIL锁/index.html","1f45c01d908d9fe5080b88e50b433558"],["/tags/Hadoop介绍/index.html","277fd2b299d46caa2e4da131e0a2a6a7"],["/tags/Java基本知识点/index.html","7326bd0c7dd1e888314520b3cca0eaed"],["/tags/LinuxLiunx命令/index.html","d54b9bdaee1fc4be110bfed6f5945196"],["/tags/Linux知识/index.html","eafc0b4ecafff443d6b51ba6abbcc693"],["/tags/ORM/index.html","e2a6c23d8b935e7768b46255beaa3954"],["/tags/SQL函数/index.html","6fd23d5c583e215920c366ee54079fd2"],["/tags/SQL命令/index.html","c21c9952e15084f121e0580a0ebcf508"],["/tags/SQL概念/index.html","369b75b1c90697c10fe81805a33e309e"],["/tags/SQL调优/index.html","c059207196aa478c0316c41d514ff5f1"],["/tags/Void-知识点/index.html","93243f75c9a769db2918d84eb50a1b2e"],["/tags/Vue框架/index.html","175e8962f9c8f13ddf2b85d820694d9b"],["/tags/docker知识/index.html","f548ab48bd090bccf6f3efa59f420e04"],["/tags/flask/index.html","ed362bdf6e21ff543ff7409369dafcec"],["/tags/git命令/index.html","2e761d0bda3f8e749c82d06bf3216547"],["/tags/git配置/index.html","787408df8c2d197da84ade668f8800cb"],["/tags/index.html","c22ed8dabee747cae7ad7c5ca5eafd93"],["/tags/js知识/index.html","2cad1f7b1ac9f201298f7b41a290fccd"],["/tags/pandas函数/index.html","9348329d01244af09ea7d8ba48f4a6aa"],["/tags/python编译器/index.html","5592c25822abec0365225f7323ee208f"],["/tags/scrapy框架/index.html","8e3da83fb70cf9abe32ee1149b3090e6"],["/tags/selenium/index.html","4a50efd4cc906c6199c0e6f142968702"],["/tags/上下文管理器/index.html","fd95827af0226b370db45911eb60e528"],["/tags/函数补充/index.html","b350676eb538e811daec6d18f49ff8fb"],["/tags/协程知识/index.html","120c40f8f9bf4c4cd0367666cd20b54d"],["/tags/基本知识点/index.html","12d207361866f78e0f84b4dd929d6da9"],["/tags/底层原理/index.html","fd3cdce070a129840dd6a34f42ee981b"],["/tags/扩展知识/index.html","97305f2b7625ba142536a1268a5aa414"],["/tags/排序算法/index.html","291caaf88a6c1e8a799fb4814958d052"],["/tags/数学知识/index.html","5e26e66a1826f6ce895fdf09d65293d9"],["/tags/数据可视化概念/index.html","8c063abd0bf6dc1cea6d88044a28025f"],["/tags/架构演进/index.html","9c8c04b3ebe59cfd14a23df1cf75e23d"],["/tags/核心模块/index.html","0248e70db617602ab886394e2ec88de1"],["/tags/正则/index.html","ad3be94717617d23c4c13621694e612a"],["/tags/爬虫实践/index.html","358c8bb2522f920ff8bd0e099b31c76d"],["/tags/类和模块/index.html","372cd903df6d6d0e9f7d47ec0958d99d"],["/tags/类的知识/index.html","d18f70b235e873e6564e06d24b3b9973"],["/tags/线程概念/index.html","85db5686875c1c8e910051c60093af67"],["/tags/网站的基本概念/index.html","6a31dc8bd685a38b1ff99a4fcf57fcd7"],["/tags/网络编程/index.html","1bbf88756bbfbc4eaadfb8a6817b56ba"],["/tags/装饰器/index.html","46c8f9b88c25b23871b64b8f4b21727c"],["/tags/计算机知识/index.html","3afdea2010e152d74ceb07f8e6d12715"],["/tags/计算机网络知识/index.html","2ca9523a4482d04bc30f8a11218f0f24"],["/tags/语音识别/index.html","857434aaa09fa60e0df1b91c1a79d93c"],["/tags/进程-线程-协程总结/index.html","f4b678648499f79755b2ebb1335eaad0"],["/tags/进程概念/index.html","e9a9f380f1f278cf25618222c49b5348"],["/tags/面向对象编程/index.html","1740234e3d7fff7d97016797ef62c415"],["/tags/面试总结/index.html","c8590c6c45224076c1f7c716280bfeb4"]];
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

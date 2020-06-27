/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","fe012776b3e9c7549879890033f0c240"],["/2019/06/26/python解释器介绍/index.html","7ea52f912912a4590d1930febab1153b"],["/2019/06/26/正则表达式/index.html","c65d00a882e52789faa7766c9e93a08d"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","287b735c2227ee99c3f4aa9d662d0ece"],["/2019/07/06/网站概念/index.html","619f3e6051e0ba2eaef4f25766fc04a3"],["/2019/07/11/数据可视化笔记/index.html","8f76d5357416e69f76ba65c79d12d1d3"],["/2019/07/12/语音识别/index.html","c1e505b60f97a09d958f192f132643de"],["/2019/07/14/hadoop基本概念介绍/index.html","f406cf5c9f1f5b5ce3b4219e7020cddf"],["/2019/07/14/数据科学笔记/index.html","3a9c050bd174d6a18077ecf8bf33051a"],["/2019/07/22/python爬虫/index.html","b382391a25a8f20120024ec0d2665210"],["/2019/08/25/pandas函数/index.html","c574cf12bb8cb885fb86c61c1e49d861"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","198c64356124e51ffb4e0580ef6b38c0"],["/2019/09/30/C 语言中 void 详解及应用/index.html","9e311c27c0a9053dda094bbe8d7b3ab2"],["/2019/09/30/第一次面试总结/index.html","abf6f308fd7af7478ee5c7c5b29b6d0d"],["/2019/10/07/django之url规则/index.html","b1e8e00e2ce5ee028a0285b45173531f"],["/2019/10/07/django配置初启/index.html","edf7d5dfe5193a3f9f456692057acbf8"],["/2019/10/13/C语言笔记1/index.html","e15e1bc922c8df347bbfa5bb3ae63d9b"],["/2019/10/13/C语言笔记2/index.html","93e9334fa08d398ff11b1aa36e7e6b37"],["/2019/10/19/C语言打包技艺/index.html","5a7f9efac0358fcd5cab52546491a7ff"],["/2019/10/22/c语言笔记3/index.html","e58b1e9b95371ca7cd4a858922286151"],["/2019/10/27/IP代理池/index.html","0e4d2e65331f0fd07be36ffdd5993cba"],["/2019/10/28/git命令/index.html","840adbc8c5f68cb3b3bd7276e407f0d0"],["/2019/10/31/斗鱼弹幕抓取/index.html","c60e46ac6d76a641535928f1bc6ed9f0"],["/2019/11/13/多线程/index.html","f1d632b130ef697eae4bf4c857e2e383"],["/2019/11/14/多进程/index.html","df7980c7afaf0cd33fefd347dc2a2494"],["/2019/11/15/python类的私有属性和私有方法/index.html","08c1ba2eaa6af765c580144ff1cecc14"],["/2019/11/16/协程/index.html","680ff184004bb25c5ea1182e5d71255d"],["/2019/11/16/进程,线程,协程对比/index.html","b44d6d74b6b397e22523226ed1c0976a"],["/2019/11/17/GIL锁/index.html","3e1a7429fcf3d32f9d37f261e823a0c4"],["/2019/11/17/闭包和装饰器/index.html","55f37cd371fa8b655a90f4120e490a14"],["/2019/11/19/Python的模块和类/index.html","d42c3a0d23a59558967c8ffd04f225a1"],["/2019/11/22/京东全网爬虫/index.html","d95dc75b66bc31ba0a10ac0004b5f327"],["/2019/11/23/JavaScript的简介和基本知识/index.html","23013e1b33be5484af324d1ddc8ad5d3"],["/2019/12/04/README/index.html","7556b4abb11f048c2ae1202ae66fdeb8"],["/2019/12/04/java简介/index.html","ecf4d0918f7a226f57b13c657d4e7cd3"],["/2019/12/11/java基本知识/index.html","858f11da8f1285f2f2827b8ac0f8ac8f"],["/2019/12/17/Java面向对象/index.html","df0286772546870735f31bde6dcaf588"],["/2019/12/19/面试总结/index.html","e819eabee12f17475864639b2bda1a18"],["/2019/12/20/SQL性能调优/index.html","836098159ba1c70ba854c67d7c4e1626"],["/2019/12/26/vue框架介绍/index.html","d9db88e3e1ba044254c9c91cb58598f9"],["/2020/01/02/12306自动抢票/index.html","8cfe2102faaf63a8548afbacab5865e6"],["/2020/02/24/flask框架/index.html","53c0ffdbf4429541ad036f63834fe012"],["/2020/02/28/docker以及相关概念介绍/index.html","11fc6eeb088059f50ec42f18f1c781e2"],["/2020/04/05/python数据类型的底层实现/index.html","37e39ddcf156221faf219c306555305a"],["/2020/04/27/查看mysql连接情况/index.html","5cb4e007581cb38145ce7c49f50da5ae"],["/2020/05/02/Linux操作系统核心知识/index.html","3416f3e24212efd692101a1033eb128c"],["/2020/05/02/计算机网络/index.html","7406617b7a259e2d1a9ad3eb87603120"],["/2020/05/06/Linux操作系统（二）/index.html","113ac4c1d0bffc23e22c996c88f76b30"],["/2020/05/14/python函数补充/index.html","eddeafd76f49ca507edc26b483faf0bc"],["/2020/05/21/python核心模块的介绍/index.html","64874f172f3883397ffa8d2857313a94"],["/2020/05/21/python高阶函数的定义/index.html","b74d1f43055598c4a2c42183937f6763"],["/2020/05/23/Django后端演化/index.html","21bf6d7524817032101877c8a89296ec"],["/2020/05/29/Mysql数据库函数/index.html","0823d20a3ce9d0f6cb364460483efcf6"],["/2020/05/29/Python面向对象/index.html","be92276e51dc9f06a809ab883adff82d"],["/2020/06/02/Python 中的上下文管理器/index.html","eb3a21bf2b78f7d481c36cf796502b58"],["/2020/06/02/Python类补充/index.html","90cd211e2cde1b429efceb8808bac8bf"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","9b7b931e1f5ca7492ec557ab1314195a"],["/2020/06/07/MySQL数据库引擎和数据类型/index.html","0d973ec9429eb9f633cb0ed74b37ba5d"],["/2020/06/07/索引和事务/index.html","4651b2ab6981160786899d38354cfca0"],["/2020/06/14/Django参数和模板/index.html","ca4f397a1d18c0e7333bd9be8c4c2c5a"],["/2020/06/16/Django的ORM多表操作/index.html","5eab81c0c54823a2e36e8d68941865dc"],["/2020/06/23/Django 重定向终极指南/index.html","12248bf0274844cfb81ede032c555e10"],["/2020/06/23/Django的Field详解/index.html","40a836fae276d7f8528a115561e48161"],["/2020/06/26/Django的Cookie和Session/index.html","1e39642d38aeebdbfd984579efcefae0"],["/2020/06/27/django+nginx+uwsgi部署漫谈/index.html","3df2813a39f3400b78829948492cf3fe"],["/about/index.html","8bcb8a38f2f2ea0fd8be3978a47f570a"],["/archives/2019/06/index.html","32019d299914035f9b1727977bf2c1cf"],["/archives/2019/07/index.html","01310e5bf172e681bb53eff334bfaf83"],["/archives/2019/08/index.html","120ff700eea9dd1be88d9abf9e64da73"],["/archives/2019/09/index.html","6bd383978494ce031872b103627c3398"],["/archives/2019/10/index.html","3c8bc07859ec4d3f7fff5459c119b8ca"],["/archives/2019/11/index.html","07af98312d0d740a1d8e3b54c8ec479d"],["/archives/2019/12/index.html","94c2ce75e420b1319595266d09a4621c"],["/archives/2019/index.html","ede49900071c2e4c147412db2134bd01"],["/archives/2019/page/2/index.html","ba9d6fc13546f39a1f69a9148327d08b"],["/archives/2019/page/3/index.html","1e2f194c4e7c3e02e925dd786cb3b71d"],["/archives/2019/page/4/index.html","d5833326c06b0dda88c70c7b163b2d8e"],["/archives/2020/01/index.html","78ecab0fdfe501bd767bcc67f57bf8f7"],["/archives/2020/02/index.html","597cb2d4bcf4e3f6cee042e98d400b22"],["/archives/2020/04/index.html","61f473641de9c94f5fcc1250713a9e62"],["/archives/2020/05/index.html","c77d265d8976832205271b0bbb393e80"],["/archives/2020/06/index.html","d674b7e3c5fa96269554edd2280f6d95"],["/archives/2020/06/page/2/index.html","950f80b4ae274551fb60b7b9270e418f"],["/archives/2020/index.html","8a0d31c88b654a36627d67939c1323a4"],["/archives/2020/page/2/index.html","f14878ca26551d8966928faeb532ffdf"],["/archives/2020/page/3/index.html","de5ee2a0253133838b86735b021ed7bd"],["/archives/index.html","7d4f58453a0a3a0d2d36483097fb23e8"],["/archives/page/2/index.html","dfbfb86a9279baff8abecd4e566b70ce"],["/archives/page/3/index.html","152eb5c94d70c9ec579db6432c2ab6dd"],["/archives/page/4/index.html","2be26044f6d94fccc611905c68ec24bf"],["/archives/page/5/index.html","3c56a212d8cd5c2bb2864892c9a0d970"],["/archives/page/6/index.html","1d5f73976397eb02b5ff0c3d6d667e79"],["/archives/page/7/index.html","57d2f049c94f0e7bf3ceb998179baef4"],["/categories/C语言编程知识/index.html","95319d684b6fd8a78fe54c067addd10b"],["/categories/Hadoop/index.html","12238c841fe82d5247cefc82cbddf4af"],["/categories/Http知识/index.html","b4079b8d0cac42c51061eec032d9d435"],["/categories/JavaScript/index.html","cdc264c3d819e5dcab06febcb4170500"],["/categories/Java学习/index.html","05ba68927936c7d99cfc6c94497df759"],["/categories/Linux/index.html","e2469770d04f759461d8607fbfd339a4"],["/categories/Linux/常用命令/index.html","1b2f1c87901a8b846486f2b1663c6a0d"],["/categories/Linux/核心知识/index.html","5ad5a14530c4845630acb6fe7a119c72"],["/categories/SQL知识/index.html","6b43d5099d75ff40ee6bac1656e8f943"],["/categories/docker/index.html","fe9549283ab483fca39b68917b5ef049"],["/categories/git/index.html","c8cea71b240f185f020c3e0b29fe4c25"],["/categories/index.html","d95ac9d11c5f42a7e5683a9aa9d6eed7"],["/categories/python后端架构/index.html","af99a9472e3f4759bcaf041d155c7b1c"],["/categories/python数据挖掘/index.html","9e3e98711d658bfa4674da33594a2721"],["/categories/python爬虫/index.html","e5da89b5a51f57c55a702892ecd2bd53"],["/categories/python的web框架/index.html","f522ae66a64a4e0674e79a87b2c50c0a"],["/categories/python编程/index.html","46f897d69871184a6a225024921f4616"],["/categories/python编程/page/2/index.html","1d9c7d0b5aa1ed486f31b16d1526faa7"],["/categories/python进阶/index.html","420167dbb31a1976e35a84b7e7b8cb72"],["/categories/selenium知识/index.html","4d0516747b507fe697ff7918abfb9a49"],["/categories/个人随感/index.html","5c7eca85d9cbb5ea92dadaaa08209d41"],["/categories/前端学习/index.html","6ac063d537f21d4833d72c9af036452f"],["/categories/数据可视化/index.html","de95b4ab1b81fefc664cc7592a069069"],["/categories/正则表达式/index.html","4f1b13dec35c4b786f22529fade90005"],["/categories/算法/index.html","356d7bf8f4b429424492e96b89217a80"],["/categories/算法/五大经典排序/index.html","dc2b71a501cd550244b56ec38ebc976f"],["/categories/统计学和概率论/index.html","18656f732c3f8f7916c26bace767cb3a"],["/categories/网站知识/index.html","4fefad6e46bb69f5dd95a7b53db678f5"],["/categories/计算机组成原理/index.html","4581baed13c7a851d6da8335dfec494f"],["/categories/计算机网络/OSI七层协议/index.html","1a4e9c4efb9ad2eaf3841fe6d25ddb66"],["/categories/计算机网络/index.html","89568ea03fa14456e262da3b914ce28b"],["/categories/面试经历/index.html","db5b6e02879b35602d0568ba9f1f747b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","9edf2123b162bfddb135b6cb42655524"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","d0669a2a3863a493008b2cabf2e2e4b9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ec8f407775c3002152208754a1f0fe81"],["/page/3/index.html","642d710db7308d4ee862461c24e9e4a4"],["/page/4/index.html","d3d73eec809163edc34b17ba8af73daf"],["/page/5/index.html","2f90531513610e47dab628d7d4c70286"],["/page/6/index.html","ec41306d80201eecddc9036980112d29"],["/page/7/index.html","a7ef64d43e96f430e1be937325e653bd"],["/sw-register.js","3c04279f1aaffc7fa019939f19f6a29f"],["/tags/Cookie和Session/index.html","f3ea1d276ab4ea1bf49a02fc5d4a0712"],["/tags/Django/index.html","f7ff838323b4a5ca88f6d3b770753fc4"],["/tags/Django部署/index.html","3ce667befe0dcdbe871e8711584c2cab"],["/tags/Django重定向原文/index.html","6b9838e0c0c6069bdb10ee938510de9b"],["/tags/GIL锁/index.html","12c8130aac59041e0e7a013c94955d78"],["/tags/Hadoop介绍/index.html","7a4a44849c5c043e20b651e991c76d1f"],["/tags/Java基本知识点/index.html","eab4eb28a1a74d918938e7cd89a375ea"],["/tags/LinuxLiunx命令/index.html","2db9524f20467d101c029ccbe1557b54"],["/tags/Linux知识/index.html","fa6612699869c9a10f2afdc5db6bd4ef"],["/tags/ORM/index.html","c72b5faaef5a17163d418ea5f718bf9f"],["/tags/SQL函数/index.html","478f49c06c7b2c3eeff3d992373deb99"],["/tags/SQL命令/index.html","bf586e78e9fa4d3ad4e4d34772853f25"],["/tags/SQL概念/index.html","1869527bebf2d89dca359b268198e029"],["/tags/SQL调优/index.html","9d0ca24ac8b247619eaac37b1bb0df3d"],["/tags/Void-知识点/index.html","cd09a8f89fa6eb40d7a2ed109b525778"],["/tags/Vue框架/index.html","2d690479a0a5798bf8d9f6c137453ae7"],["/tags/docker知识/index.html","7af991470cab5e50fdbe119411553a02"],["/tags/flask/index.html","d4841ffdd20b6614a6c86f70d13d5243"],["/tags/git命令/index.html","d3e4973c85b1e763fa487db81a37bf78"],["/tags/git配置/index.html","c8b065b80a08552c322691fa60bb7094"],["/tags/index.html","8d6143ea887c6b64f736b06b460eba75"],["/tags/js知识/index.html","8c8a33a153a7b34a862eb4fc56aef4a0"],["/tags/pandas函数/index.html","ae6a423bad69a2768499ed17e05cda1d"],["/tags/python编译器/index.html","3b1e6e2b4b646b9dc41396f3e1beeb7c"],["/tags/scrapy框架/index.html","e44a9f474f41cb728c72e99b9b2fe566"],["/tags/selenium/index.html","b494dfdc8d00bc43f7c4156e1f592683"],["/tags/上下文管理器/index.html","4481bc4ebfa8787175a4363eb58e8ec8"],["/tags/函数补充/index.html","4e2bd8d7bfa8525052753fba0fe8a40b"],["/tags/协程知识/index.html","3408d853795d845407b6eb2cc13b006a"],["/tags/基本知识点/index.html","744154e603dec1327a0c1d458d6693bd"],["/tags/底层原理/index.html","9ee60af4eaa63d618522584887739428"],["/tags/扩展知识/index.html","1671edb68febf876d692c1703da5bf01"],["/tags/排序算法/index.html","8cbcba437d9020f56b4e489cd8e71652"],["/tags/数学知识/index.html","016611a8bb769b310486384467fa5bd8"],["/tags/数据可视化概念/index.html","500d3be29e30f2dfa92fcbe7482959f5"],["/tags/架构演进/index.html","2ec71b80f68306081379587d536b58b3"],["/tags/核心模块/index.html","a532ef4c5ecd5ba8a7467320463e311b"],["/tags/正则/index.html","3c8e3532beac7dba06c56a66b170188a"],["/tags/爬虫实践/index.html","df951bc1d916e2e36dabb9daf6b0c43d"],["/tags/类和模块/index.html","b84b1238e833fc2530958cbdfcb4ed55"],["/tags/类的知识/index.html","16e6dc3b5f70b00ebd062663714d480f"],["/tags/线程概念/index.html","57364b815082d452dea6d50d57dc3103"],["/tags/网站的基本概念/index.html","32268699a0ab35c990d22316e87b8fda"],["/tags/网络编程/index.html","1de0fc1030fa50b91e64c25656d4bc41"],["/tags/装饰器/index.html","6cd51e1592f2f29d281433dbe69d3139"],["/tags/计算机知识/index.html","f9d3927010d3be3974591f6d2bad5aef"],["/tags/计算机网络知识/index.html","864f25734c1bc7be3a078106e63eaeb4"],["/tags/语音识别/index.html","9fa29d1411b8f746ef61cbdec646b66f"],["/tags/进程-线程-协程总结/index.html","d2c4a32804157d78ed8df161c1b70d70"],["/tags/进程概念/index.html","ca8996c5f16ab03372877c0172900bab"],["/tags/面向对象编程/index.html","0a1cbb4c57e1d41053b747ee8ae5d88b"],["/tags/面试总结/index.html","7780d904ed964be9be628ea58a1e6e2d"]];
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

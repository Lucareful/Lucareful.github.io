/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","97634c2d1405b4c9911959f3ec2404af"],["/2020/08/16/C 语言中 void 详解及应用/index.html","de9008b840e50b0a45a115e33258c5da"],["/2020/08/16/C语言打包技艺/index.html","52809e1c32ccc1cf5f0f77f427d6901b"],["/2020/08/16/C语言笔记1/index.html","99466ad0dbcb60086d232a2735a1c5d4"],["/2020/08/16/C语言笔记2/index.html","dcd7b13e091ddb37078ada4ae43e62c2"],["/2020/08/16/Django 重定向终极指南/index.html","47fbfdc57a9026f6a6925507125681a8"],["/2020/08/16/Django参数和模板/index.html","5304e46e1ba8f05da045462c5a372f62"],["/2020/08/16/Django后端演化/index.html","0e60f3708ca140c2acbe0a1f2db7d84e"],["/2020/08/16/Django的Cookie和Session/index.html","d06eb45ce92af30f5a1cdc4451636c79"],["/2020/08/16/Django的Field详解/index.html","cd603539bb54f47acb5426d71cdd635e"],["/2020/08/16/Django的ORM多表操作/index.html","09dc99ef94e75efc8059b468b87c2afd"],["/2020/08/16/GIL锁/index.html","67638eb2387787e670f661d9513742b6"],["/2020/08/16/IP代理池/index.html","2fd55f1c5750f19dc1b491a2b7675515"],["/2020/08/16/JavaScript的简介和基本知识/index.html","5bda1e0ea60b43df5ca7dcc95adef5ab"],["/2020/08/16/Java面向对象/index.html","402433928a5471d262f8eb2c4096dcfd"],["/2020/08/16/Linux常用命令/index.html","e5957837222266055dc0550e6f254a31"],["/2020/08/16/Linux操作系统核心知识/index.html","ed98b7162f981370a392397b938d5a97"],["/2020/08/16/Linux操作系统（二）/index.html","fe5a4c1c1594bbe046c5795fe08c4a08"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","637e1c158e488e75026a7c4645b91bf9"],["/2020/08/16/Mysql数据库函数/index.html","a67d135b0df5f5c2c1fd6dd8d03a66a9"],["/2020/08/16/Python 中的上下文管理器/index.html","5d62fa761abdbad081ff731367e36aeb"],["/2020/08/16/Python的模块和类/index.html","287388ff5ad853c24788f1cae7719ca6"],["/2020/08/16/Python类补充/index.html","8ed07b83b5a8c6a351ced58ceacf000b"],["/2020/08/16/Python面向对象/index.html","024eed989ace50276c1a16ba729f541f"],["/2020/08/16/README/index.html","8fd25ad4b653be8bd94c2765df4ef390"],["/2020/08/16/SQL性能调优/index.html","ba66648b0304ee773c51355955639c2c"],["/2020/08/16/c语言笔记3/index.html","a3d2f9a65b6b68a05030e5afb81d4f74"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","384dcf435ff08b564943e89dd55df639"],["/2020/08/16/django之url规则/index.html","aa1136039adb1a5dee17cd3d561597bd"],["/2020/08/16/django配置初启/index.html","9e72ee859cf31fd50d2717711f064527"],["/2020/08/16/docker以及相关概念介绍/index.html","191722c0eaee42dbcc03fee8c7b44109"],["/2020/08/16/docker信息/index.html","04531dcb86b4400bf51e0cc8bcf36dff"],["/2020/08/16/flask框架/index.html","b37a69b89a52b93036991bbbbfbc32d3"],["/2020/08/16/git命令/index.html","450d3b416e8c71552013c30bf226b40f"],["/2020/08/16/hadoop基本概念介绍/index.html","6076259245a953f2d9396c9f1eab9ae0"],["/2020/08/16/java基本知识/index.html","df995e4d61e40510761ef64de0d27f05"],["/2020/08/16/java简介/index.html","59ea4966ab4133779d2a984556636931"],["/2020/08/16/pandas函数/index.html","3bce342623e76792150c0e8ca1f006fb"],["/2020/08/16/python函数补充/index.html","cf79489f5e11a8eb2b83f2b08935435d"],["/2020/08/16/python数据类型的底层实现/index.html","c978273c6fd2f4e699e8e3a895e38c35"],["/2020/08/16/python核心模块的介绍/index.html","2982d4ed0fd68c28f36bbcfb34c2a653"],["/2020/08/16/python爬虫/index.html","e1a68a2a853018b500cc3fefaaceeefa"],["/2020/08/16/python类的私有属性和私有方法/index.html","038df8c81db3ee3d01517f1d0c8d227d"],["/2020/08/16/python解释器介绍/index.html","276c0d345bcadc35153faf11b97e4f16"],["/2020/08/16/python高阶函数的定义/index.html","c4a6299c6bf6823128d9750bc3f15328"],["/2020/08/16/vue框架介绍/index.html","c682c498f383a1e31514f6cf72ba86e7"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","83630702ba56e7743df0d0f614668440"],["/2020/08/16/京东全网爬虫/index.html","3b7d102afb13f3529c54db0707ab9943"],["/2020/08/16/协程/index.html","d30cb6694fd21b87c9eea07a39d45cfd"],["/2020/08/16/多线程/index.html","0dd74012dc9114edb4b79d0a60abaf76"],["/2020/08/16/多进程/index.html","f62b7c67f2f7787cb07179262af217ce"],["/2020/08/16/数据可视化笔记/index.html","a1cac05dad83677e39fba9e0a2af717c"],["/2020/08/16/数据科学笔记/index.html","af3f526d7d96640ac61f90bcb38e9c31"],["/2020/08/16/斗鱼弹幕抓取/index.html","fa1af5707ef28bceec7fade4295cf873"],["/2020/08/16/查看mysql连接情况/index.html","f4018ca37edb15d210b24f4424c57f1f"],["/2020/08/16/正则表达式/index.html","bd9c0b496b095cb4dd2322e9389b2f17"],["/2020/08/16/第一次面试总结/index.html","64d52d39e339043baadf29de71e2cac2"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","bdf42b00dc6678c54079080c17253220"],["/2020/08/16/索引和事务/index.html","c8b9ef2f7524ea2dc94cbb8bacb6f4e0"],["/2020/08/16/网站概念/index.html","785ee575a5bf0fd560f496266a61d1ce"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","be080aac58b81ed79f8bef884cf36a4c"],["/2020/08/16/计算机网络/index.html","d5695335433d73bbd024b4a065740636"],["/2020/08/16/语音识别/index.html","eac63d9c6957ba3bef5b7d3d24da534c"],["/2020/08/16/进程,线程,协程对比/index.html","bc90cc72eff0b6b42d7c667eeff2f693"],["/2020/08/16/闭包和装饰器/index.html","26c61fb8229ab6f3de5406451cb08ff0"],["/2020/08/16/面试总结/index.html","3a06256ceeb591e5fe07c4d3c7f216fe"],["/2020/08/30/docker网络/index.html","30755dba5bb55cdfdd2b52b8b6ae8762"],["/2020/10/06/轮询、长轮询、websocket/index.html","1604c27d46b7f22076f17ed4a9f12b39"],["/2020/10/10/django的querySet详解/index.html","7245b7f0ec1fa1542604db758f6da25d"],["/2020/10/10/设计模式/index.html","af1ca415d411473f563a800befbf30f2"],["/2020/12/01/MQ笔记/index.html","c80a40b167dc0c3aba9e3c1ff80bd8b6"],["/about/index.html","09770e14d788c3eaf7cf700cb5a3a39e"],["/archives/2020/08/index.html","91edace7462e568aab067ff87c485847"],["/archives/2020/08/page/2/index.html","ffdf8c2e8c3c10406c8d09ada56c599d"],["/archives/2020/08/page/3/index.html","38bdd3f51b43cb512aa677c892435913"],["/archives/2020/08/page/4/index.html","37e8e79dedfc48ed1d8754de574a0b61"],["/archives/2020/08/page/5/index.html","e771854e42783cdb13fb8f479f2fc09e"],["/archives/2020/08/page/6/index.html","f4794951dab31004624db76edb9e21a9"],["/archives/2020/08/page/7/index.html","489caad95830b01404c9815f35643a0a"],["/archives/2020/10/index.html","9d17c12920736c5142f035f29a39a069"],["/archives/2020/12/index.html","039dd2deb2ebeebe5a83c3f472166bc5"],["/archives/2020/index.html","3c6e7cd88367ec701dd36431df079e48"],["/archives/2020/page/2/index.html","fa925fc254af9e24f63728edd6227796"],["/archives/2020/page/3/index.html","43d90fd5061968847a751b0d581dcf32"],["/archives/2020/page/4/index.html","b4dd319987d24f48db0e4e2dcc69e395"],["/archives/2020/page/5/index.html","213eaf519b62f278f7e42ddf56e36727"],["/archives/2020/page/6/index.html","62f2bccbb9ec08e1b24032585af13594"],["/archives/2020/page/7/index.html","90a62b273650f16c64d2921a270508d3"],["/archives/2020/page/8/index.html","569e480722448e56d4b08d56b8db985e"],["/archives/index.html","cde44512bdb8211fba76aac8f668ea67"],["/archives/page/2/index.html","7352c5b7d64049ce7db55cd1ed1e813c"],["/archives/page/3/index.html","a653cfbe3e17ee098b2b02592a556911"],["/archives/page/4/index.html","4a8b421059274454c9a38903ff53c820"],["/archives/page/5/index.html","edf2b2146cc53052bd2ae02640850332"],["/archives/page/6/index.html","e81f9b0ca61ba2bfb0798b9c737bc2b8"],["/archives/page/7/index.html","b6cbabae4ead6f87f53efe32675a00b8"],["/archives/page/8/index.html","d7414c6622f13498d6c308c78f8dacc6"],["/categories/C语言编程知识/index.html","420560d3ddbc625603c397972fc9bd95"],["/categories/Hadoop/index.html","f5d3ca9ded8df16da1e1b0e1e0022cc7"],["/categories/Http知识/index.html","f1ec4f527ef48b811b9fe83a2c68eb1e"],["/categories/JavaScript/index.html","829106568a198ff60e9cba66ad8ab4cc"],["/categories/Java学习/index.html","bb156bdbad8011bf1fbc967c9625f877"],["/categories/Linux/index.html","49362eda877a335f59cdcdd42a0270c4"],["/categories/Linux/常用命令/index.html","893c98eee0d6f324429b9dcf6466ad89"],["/categories/Linux/核心知识/index.html","489ef2005d849fc5223115a6be2c1215"],["/categories/SQL知识/index.html","9a4ed133abafa8254b8f9888e8370baa"],["/categories/docker/index.html","8cccf8c43eceb52649d777c10463d8e1"],["/categories/git/index.html","97ec694773c6ecf9e74e26d4131c4ece"],["/categories/index.html","3036f975bbfaf426ac18cbbe30ae013e"],["/categories/python后端架构/index.html","f4ba6935f849afbcc9a00f3ae5ef51af"],["/categories/python数据挖掘/index.html","54694074f4e1740eac18df6ebcabe420"],["/categories/python爬虫/index.html","c8f0f00ab79d529eea377791bdd9a9e7"],["/categories/python的web框架/index.html","c9596c1b21dddb3f444520bd2b586bcc"],["/categories/python编程/index.html","a95afdac0457a9fed0c4e86014602c88"],["/categories/python编程/page/2/index.html","39af49014c44e413c734579f1e5e6a04"],["/categories/python进阶/index.html","1a66c5979868c0333ff82e9c068126ca"],["/categories/selenium知识/index.html","50125650adebbd1e7e24fb3e7ea2a9a3"],["/categories/个人随感/index.html","89dc039ecbdfabd00478c44464d4425b"],["/categories/前端学习/index.html","09b6d4939f05da43b75f8080b0ee3c32"],["/categories/数据可视化/index.html","596b4d5556e84465ed7d2966e34797e2"],["/categories/正则表达式/index.html","a5b41f54f9c7b2da5541fee6b81b2ee8"],["/categories/消息队列/index.html","56cd2b0837a1e01dce5033a2f8e1e184"],["/categories/算法/index.html","7d857df20ef4e8df11eaaa3a88d5fafa"],["/categories/算法/五大经典排序/index.html","93fdc8d20c72d14f885c660fbbd0b136"],["/categories/统计学和概率论/index.html","371650c79dcd2ca3b5355abd409b5cd5"],["/categories/网站知识/index.html","b97c758d957933e7b48d458c78e714e6"],["/categories/计算机组成原理/index.html","f7cce739cb152946422c873cbae9232d"],["/categories/计算机网络/OSI七层协议/index.html","d14e6009f0558fcc959b532d1bd9ac1a"],["/categories/计算机网络/index.html","ca44cf12462ddc9f2298c1bbfcf86b41"],["/categories/软件工程/index.html","6929c09f5c74285eb2b5c0910e3b4811"],["/categories/面试经历/index.html","204b656b64c0f697332b4d08345fabed"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","f42c8f149751bb9e6a78bae996014d0c"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","7f7620188cb76e554205caabe8986aeb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","f079d1b361d122a7c1521aea4ca10a1b"],["/page/3/index.html","382457babd4b3ad1bc3d008e15eb5234"],["/page/4/index.html","a9d53f7e17409eeb6e03a01dc00a50a9"],["/page/5/index.html","79daf7a4d88c6adacd15cb5de5566503"],["/page/6/index.html","497f4e7d62ebf2a45949593c73ca989f"],["/page/7/index.html","1ca8a00083040f92e60363a19b60fdfa"],["/page/8/index.html","023ee3d600c642a8acd6143b306543b7"],["/sw-register.js","3ecb067f6d440c67c9efa8d33bd76ae6"],["/tags/Cookie和Session/index.html","4df37a2d4332ef64f951b5b64a5e8e39"],["/tags/Django/index.html","37b46b4407f3f0200d17b1f7b2acccd2"],["/tags/Django部署/index.html","47fd8003ca4f30ee43818b3c4ffa814b"],["/tags/Django重定向原文/index.html","bd7ba6803ccfe49071bd9170f1649eb2"],["/tags/GIL锁/index.html","955e192fb0517b08c228481f970f06e4"],["/tags/Hadoop介绍/index.html","2f595704cd07857d84899752021fcb60"],["/tags/Java基本知识点/index.html","9269a0905a84ef8756cc5ff1727c4f5e"],["/tags/LinuxLiunx命令/index.html","300d2db7bda93145b4fbdf3c0e3e6d5a"],["/tags/Linux知识/index.html","047d251705c0e3c77809d7ef3fdf376d"],["/tags/ORM/index.html","7ad0789cb85a949a6b2b63ba5a059a58"],["/tags/QuerySet集合/index.html","baf0fd3c61319fae675d49aa02689a79"],["/tags/SQL函数/index.html","f831feeb3c5685588859374c950deaf3"],["/tags/SQL命令/index.html","8ea0d38aad14bb27c43618aadea04fe6"],["/tags/SQL概念/index.html","19ec398722022e2f487446a3451d449f"],["/tags/SQL调优/index.html","50d0e54ff7168271704c934055fd8810"],["/tags/Void-知识点/index.html","43fb701e45e302480c832512f76245f1"],["/tags/Vue框架/index.html","c0015c515a62c3e8229a422a282c68a7"],["/tags/docker知识/index.html","2fbeaa430ab436d80730d58e2e6d77a5"],["/tags/flask/index.html","f47a09693cdd615b3828d2f74e96d226"],["/tags/git命令/index.html","faf2f224e0386f839b55f88297fca4a3"],["/tags/git配置/index.html","a3d806e3cd956f3f2eb53d82bfd0fd7a"],["/tags/index.html","5eccf308cb0f9b0ddac4cc475da2c328"],["/tags/js知识/index.html","c4b5d152506400ee4b66b66d79172fd2"],["/tags/pandas函数/index.html","aa12b52ebf4ad733f6dc9d390ea0cebb"],["/tags/python编译器/index.html","b973de6daa0a00c80c2684e915f0bed4"],["/tags/rabbitMQ/index.html","65312ad066a45f646e1e7a27956a1b2b"],["/tags/scrapy框架/index.html","b2095b8ca09ec9f787ceed932983a243"],["/tags/selenium/index.html","e19068483306ccbe9876bde076225516"],["/tags/websocket知识/index.html","3bf89c2152d027b0370d3628320f8b24"],["/tags/上下文管理器/index.html","713fe817954250055057c19f177bb23a"],["/tags/函数补充/index.html","1f45c9aa931f6e8864f0643b2e5f19e8"],["/tags/协程知识/index.html","3e237a39ee552c54bd79debf5f0b3fdc"],["/tags/基本知识点/index.html","bf4f71e7e1511bfaa4e87e252d99921e"],["/tags/底层原理/index.html","36858fda690a2657601c1ca82349008d"],["/tags/扩展知识/index.html","474d216696e05473367dd8de6697b211"],["/tags/排序算法/index.html","739cde017b2bdf1aab10f4e2184055e8"],["/tags/数学知识/index.html","1c1c947b82da76433bbafbb84a70b1f1"],["/tags/数据可视化概念/index.html","7278f98bfade704e1a176f62a431c2c1"],["/tags/架构演进/index.html","e32d754a9cc8bfb2db19e48133663c5a"],["/tags/核心模块/index.html","391db9a4840cfdc72794eae6f59038cf"],["/tags/正则/index.html","a302a66e7acbce0bc417a6608965d336"],["/tags/爬虫实践/index.html","a250b9c6bf5b6ce249d654e7de916d57"],["/tags/类和模块/index.html","8d324699d93426e5bfac912f15d3ecb3"],["/tags/类的知识/index.html","a8c04ed198572683b78fafb4ae257fa9"],["/tags/线程概念/index.html","c41155567d82d0802e3ac57dd4a78a71"],["/tags/网站的基本概念/index.html","c638aea54f5ece433d3e9d975ea4cf43"],["/tags/网络编程/index.html","25003118d90bf0834a615bc081273ce7"],["/tags/装饰器/index.html","af2e5ec9699301ac7cd5ef0c8487d72a"],["/tags/计算机知识/index.html","f82720a09abdfc905c2c395a560a4483"],["/tags/计算机网络知识/index.html","4a04c681bad5bdefa974ead74efe89eb"],["/tags/设计模式/index.html","88e755c4b865f0aeafa5cbb3e0b4b04a"],["/tags/语音识别/index.html","a2dac1fe76046f9937e2850a8d7a7b82"],["/tags/进程-线程-协程总结/index.html","bec5c55cb3889d9423b46fe4c8a8ea1c"],["/tags/进程概念/index.html","5f9649624ab2180cdb1985c29218c3b1"],["/tags/面向对象编程/index.html","d89945832e5d7f368b8c1d8d68f9c39c"],["/tags/面试总结/index.html","40ce06c7b5ec1cd56f65b4567fde5cd2"]];
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

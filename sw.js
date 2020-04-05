/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","fd4ebf0691a7db16876036cc8c73e07a"],["/2019/06/26/four/index.html","b22abc8ca88791dc7bcacf87f4cd5e3f"],["/2019/06/26/python解释器介绍/index.html","f164f8f438cbd73ca56c2d6f9375ad30"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","02a298c25c3a34459a03c8a3dee14611"],["/2019/07/06/网站概念/index.html","bcdd1efb1b671659d55e28964ba50b9f"],["/2019/07/11/数据可视化笔记/index.html","82ee2115ca32a0698cd7fca023087a1d"],["/2019/07/12/语音识别/index.html","97e6be6218d8041a64dbca2f2f11bc7c"],["/2019/07/14/hadoop基本概念介绍/index.html","e20f969c7bf6d6fb05139672f99dccba"],["/2019/07/14/数据科学笔记/index.html","3f0bda185df8bea3c44f72047a1e7532"],["/2019/07/22/python爬虫/index.html","87399bca33bfa4b1494aa35ded0b8943"],["/2019/08/25/pandas函数/index.html","48f1bb3f2f9b78c033e48e275440c570"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","6da1bdcdde5127ca927d54be86bd69f1"],["/2019/09/30/C 语言中 void 详解及应用/index.html","ab21212558f200bb2bc2c836a0600ff8"],["/2019/09/30/第一次面试总结/index.html","ac99391fff5bb5d8cce35199a69ce55e"],["/2019/10/07/django之url规则/index.html","cd16d8ef63ea40915e04e9bd1184df90"],["/2019/10/07/django配置初启/index.html","6564c413fb08df9837ce4798ab094eae"],["/2019/10/13/C语言笔记1/index.html","747290c34aac916aa7fbba2cc84378fe"],["/2019/10/13/C语言笔记2/index.html","846d626545ffd27a3a3e3a5726b5f687"],["/2019/10/19/C语言打包技艺/index.html","66c2f65f81cc9c6d09cdaf5ea90ad6a6"],["/2019/10/22/c语言笔记3/index.html","d3f6e8dcf0d2e4ab7f5ff35de606e58a"],["/2019/10/27/IP代理池/index.html","b7d61fabf7099dd5f84e3659403661d4"],["/2019/10/28/git命令/index.html","a7b8befe706998c3bf4591209cf5a6aa"],["/2019/10/31/斗鱼弹幕抓取/index.html","71ab7912c63ea64d51f88f996d08e68b"],["/2019/11/13/多线程/index.html","ddc4f1678aefbc9f0526fb8729750cf5"],["/2019/11/14/多进程/index.html","0b991d089476ee2c1faad05195f99458"],["/2019/11/15/python类的私有属性和私有方法/index.html","1b2dc861115517dc20b27b74f1863551"],["/2019/11/16/协程/index.html","a6de37de5fecfa2e50effceb963d6e9d"],["/2019/11/16/进程,线程,协程对比/index.html","54058da2a216858ab5837d3f97b109bd"],["/2019/11/17/GIL锁/index.html","57f1d1d5c63f48c9bfda1865ae5f2a61"],["/2019/11/17/闭包和装饰器/index.html","f017fb2257744a06a29e09be7c734c49"],["/2019/11/19/Python进阶知识点/index.html","ee50fb618ed6eacb91f72f71dd289c72"],["/2019/11/22/京东全网爬虫/index.html","2a850fd6ca8f93ae68ac8a771949361b"],["/2019/11/23/JavaScript的简介和基本知识/index.html","0566a038eab4706bec67e9a9bdb6eab5"],["/2019/12/04/README/index.html","26dca2f812481d5ce2e69467bdf00e6e"],["/2019/12/04/java简介/index.html","b2616ac88992f00d61a5dce8d4542bde"],["/2019/12/11/java基本知识/index.html","b43afc5014479b411bf37d3b0e6b67d6"],["/2019/12/17/Java面向对象/index.html","e76eb806ce2f9528105bcd525290a33f"],["/2019/12/19/面试总结/index.html","428485b352f31092e50abd199ef03d10"],["/2019/12/20/SQL性能调优/index.html","59aa1b5ac3b53fbc5b8501549d1d644c"],["/2019/12/26/vue框架介绍/index.html","cb2f9c81e523a06483b7e0791b4a306c"],["/2020/01/02/12306自动抢票/index.html","4911244e13b07fac080035da4e13985d"],["/2020/02/24/flask框架/index.html","34450deaa0f103dbb6e67e98a12a55f2"],["/2020/02/28/docker以及相关概念介绍/index.html","0c6849a141e473c2a40c50fb92f9dfee"],["/2020/04/05/python数据类型的底层实现/index.html","d7c1c882159ebbe5d63c74b60fa67ce0"],["/about/index.html","4a3db5b22324939dab6ff5efe36d2309"],["/archives/2019/06/index.html","bdd8116b0b27dd81232bf8cdedde23bc"],["/archives/2019/07/index.html","3b453ec2177b0791bbbc33ac5250cc61"],["/archives/2019/08/index.html","7ba1631cbcb00227c9a9cc3b58f6df00"],["/archives/2019/09/index.html","dac8f2bc846aa54e1b3183fba810899a"],["/archives/2019/10/index.html","61298ce3d90472fd71e1b755f4d5fae7"],["/archives/2019/11/index.html","904e69de41f0f9689778d426d7098cbf"],["/archives/2019/12/index.html","4a83df3b7d9c097117f4681fb9e358b7"],["/archives/2019/index.html","e112d071b2bfaec02ba8727e5a7abeb8"],["/archives/2019/page/2/index.html","17dda5b63a74a3478cb3f639fbf6adb9"],["/archives/2019/page/3/index.html","7bcfd1abd4da38ab47cbeb18c3593832"],["/archives/2019/page/4/index.html","b2c61d7c6e5b9c2b557b680ec48b9f11"],["/archives/2020/01/index.html","cc735a6a4715361acfea2ddad55738f4"],["/archives/2020/02/index.html","178917cdf8c0c0535494490c74088ffa"],["/archives/2020/04/index.html","0aa603dad652960633fb82a1acdb8a64"],["/archives/2020/index.html","c12b031bea8704576f44d626c7ba4cbd"],["/archives/index.html","cc7c2abe5ec3113477d6f595692d3018"],["/archives/page/2/index.html","7bd5ba31447959f4e6c635a3e8c64d9e"],["/archives/page/3/index.html","1a3d397419df87ddc172d7c7bdbe0f70"],["/archives/page/4/index.html","44d0afeb325e302f8641ec0074f19e3d"],["/archives/page/5/index.html","7f3e02c997f7f10f8ba8a81dbe0af6f1"],["/categories/C语言编程知识/index.html","3db28f18c7eb7cef43a31f4bcd3b3fe4"],["/categories/Hadoop/index.html","aee106ef1816be8f81e33d45e6c00649"],["/categories/JavaScript/index.html","583933a0f277087943b88cf2ab160e46"],["/categories/Java学习/index.html","f2d59a566199b01eafac5bc5aeba2d60"],["/categories/Linux/index.html","2d42fe422b833457d581b9010c0a1abc"],["/categories/Linux/常用命令/index.html","ce0383d812f9f328c5d0e4376eea1e1d"],["/categories/SQL知识/index.html","7833d95ef1e65c34a8364d65751fc008"],["/categories/docker/index.html","cd6357f9bfebfb6e563d97fba52fefc0"],["/categories/git/index.html","ff286b492bb0f3a4f2d36ae776135346"],["/categories/index.html","32ae67d3d93f8c3ef98e73c343ddb255"],["/categories/python/index.html","c715743578b2de104c9e3e0df9fe635c"],["/categories/python数据挖掘/index.html","aec840c167f1bbec01c79bb1e92c9cdc"],["/categories/python爬虫/index.html","0700ab02119ed535de7a14af8b87ce00"],["/categories/python的web框架/index.html","e5d006cea296cc850abfed13d1f931c0"],["/categories/python编程/index.html","626c9d48c55367f474d6d6b0fac13b08"],["/categories/python编程/page/2/index.html","01dc92b5ed6cfd34dfc5a859ab85a732"],["/categories/selenium知识/index.html","54112145ce0c2f30b420b78dba17f405"],["/categories/个人随感/index.html","686cf18d653680ca3c60bb908bb2af71"],["/categories/前端学习/index.html","18adf2dd107734cb8c073280bf0875b8"],["/categories/数据可视化/index.html","65055257285d27fb192abd8249da951c"],["/categories/正则表达式/index.html","ed5cebd02a82df64cc8f4cec94801d28"],["/categories/算法/index.html","86cfcd2df4e608fdec6fd96f65b8e62e"],["/categories/算法/五大经典排序/index.html","96bbdcefdedef49294fd36d8025fa3dc"],["/categories/统计学和概率论/index.html","9ef083f0620f50c3463d8b9a72ca35e0"],["/categories/网站知识/index.html","8100298d19eb363c3291c45111c5de05"],["/categories/计算机组成原理/index.html","dbe5717c141ee42ed81af8ad67b0b47a"],["/categories/面试经历/index.html","66c7313941cbf5d68f72739953b6a409"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","6258819266ec6b7bc66f7079fb1da715"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","b940bc0cecf13ba49d0fa16a778137e3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","14c0aacfe5be5c1e8999bf705bf9f848"],["/page/3/index.html","0658f75bd5646578ba647a3ac7cde87e"],["/page/4/index.html","92dc58957b59d48a01b77c52ff68e4f5"],["/page/5/index.html","de9981638919b3f29688becdde66867e"],["/sw-register.js","fcdf0d946e928a384ac249555c850720"],["/tags/Django/index.html","9ab3eed8fcb8462f2697243748957464"],["/tags/GIL锁/index.html","426957bcb9a78c63da0ce083c050aa5e"],["/tags/Hadoop介绍/index.html","091a8a6ff9ebe0c2b46652ecaa6e7c8c"],["/tags/Java基本知识点/index.html","5e48c07720afe7336c697ac507527eb5"],["/tags/SQL调优/index.html","2af6000c3c4dc4e9cd5900a1872f4912"],["/tags/Void-知识点/index.html","26b72cdb46023e63938421b66216632c"],["/tags/Vue框架/index.html","498e5cc9dc69d1d7b20d41b7b480befa"],["/tags/docker知识/index.html","a569a10ff14d404b50507bb84d6bf14e"],["/tags/flask/index.html","5be4f03742fa5e5151ad46531d8f0ab9"],["/tags/git命令/index.html","f8952bd59fbfe0e04bc3b03252685d6f"],["/tags/index.html","41a7f9edcc55d6b3662fc2761a97c2d4"],["/tags/js知识/index.html","2f1d5e7969f089df09161d7b25d2ed30"],["/tags/linux命令/index.html","3f13111f915c7c9c8501c56870a15c80"],["/tags/pandas函数/index.html","19a7a7e13d4c66d513c96b99c0047f8a"],["/tags/python编译器/index.html","bf99a957dceafa3d8a1bd4075126412d"],["/tags/python进阶/index.html","f5b8e8ea2e6a375964b9576265833e5d"],["/tags/scrapy框架/index.html","c43adbc54a009258f57db1fe1dce2a49"],["/tags/selenium/index.html","85cf236d6e7765b9190843d6e6177fea"],["/tags/协程知识/index.html","3e4c66fcca34897bd201df9dc919173d"],["/tags/基本知识点/index.html","9b2b73f1bde4233b3b0d288273eeca93"],["/tags/扩展知识/index.html","bb25cb7ebdfa38084b2eff13e88889f4"],["/tags/排序算法/index.html","82ffde2b449d54d0e690cbc49b59e0c1"],["/tags/数学知识/index.html","1ab339ff4481b079529e314e4c97d6d4"],["/tags/数据可视化概念/index.html","e1884a1003b6c7a17c309a03aefb60e4"],["/tags/正则/index.html","66d73ca190631981570b3db9b5c31641"],["/tags/爬虫实践/index.html","4b395cc6badb430c557b6e8fc47ce5ef"],["/tags/线程概念/index.html","b2fdaef269fd8fd03f2177ed15e80d6e"],["/tags/网站的基本概念/index.html","d6f47d874908577e9221950b7ef95440"],["/tags/网络编程/index.html","42a971582880d701fd918a64707211b8"],["/tags/装饰器/index.html","950385deab12bdf618b831a7eb6e0572"],["/tags/计算机知识/index.html","a70cfd48eafc36589a41b0583ddd61dd"],["/tags/语音识别/index.html","48a2f7fec7980c35af8d1b26691cd905"],["/tags/进程-线程-协程总结/index.html","7bfb2bbc9c394fee7622a593e0528804"],["/tags/进程概念/index.html","9ff0a4e591cc7a795bac75e639d259a9"],["/tags/进阶知识点/index.html","220a770ce3b11203e1a0468bdb94cb74"],["/tags/面向对象编程/index.html","de0b3b87e2079a304bfbf0e54a728f4e"],["/tags/面试总结/index.html","83d26a14f5f531c84c4ee7efb9392f01"]];
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

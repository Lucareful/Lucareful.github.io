/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","04b5bbde2b50e968bf6539018e0f95d3"],["/2019/06/26/four/index.html","1e018de0dc7b86a808d409ebf152cfc7"],["/2019/06/26/python解释器介绍/index.html","f5ce0e6ec390644ecbaf4c4e38cfbfdb"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","8d91d2c6883010f5dabb8fb8f577fe71"],["/2019/07/06/网站概念/index.html","31a543254e3dd91466158615d13a4c8c"],["/2019/07/11/数据可视化笔记/index.html","e734b46925079e57369113af666b47a1"],["/2019/07/12/语音识别/index.html","bb66cd8465d3313e2646a476ce451fc5"],["/2019/07/14/hadoop基本概念介绍/index.html","08d5d4e7a8ef60440e684041d43d6529"],["/2019/07/14/数据科学笔记/index.html","1e648e9d3343c02bf0f23a5d62ebc817"],["/2019/07/22/python爬虫/index.html","f8e663397ddb8c76619e8a2ce318c278"],["/2019/08/25/pandas函数/index.html","5f0e25ac1d9cf67a022ddf46f42ff47a"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","ab51abeb7da9d4edd719485886325d7e"],["/2019/09/30/C 语言中 void 详解及应用/index.html","6340ae699837c7efcef5f723c8a7f3c2"],["/2019/09/30/第一次面试总结/index.html","60434b282d602aec11f0902a4aba15f5"],["/2019/10/07/django之url规则/index.html","9cdfc1c363d665cd93a3d9b2c9ba952b"],["/2019/10/07/django配置初启/index.html","2f99dbb2ef1ab4a432edc6f92cb413f1"],["/2019/10/13/C语言笔记1/index.html","9ed9b8350b8e2a0e83be8a67a4293697"],["/2019/10/13/C语言笔记2/index.html","6254fdedad6fe3d33d162a66ff4d07c5"],["/2019/10/19/C语言打包技艺/index.html","c1422b4ddf37c78d1370c99e23fc6f45"],["/2019/10/22/c语言笔记3/index.html","311db28fbac110305050577794c11fa4"],["/2019/10/27/IP代理池/index.html","9ca4740ccddfa8b8f1b2d9af6f9601da"],["/2019/10/28/git命令/index.html","e2273081be5f5b82160363695dbf2655"],["/2019/10/31/斗鱼弹幕抓取/index.html","b67f3eac50cbf52486672264b21519e3"],["/2019/11/13/多线程/index.html","1d9f95042fa2dadaa8cfc39d1bb58299"],["/2019/11/14/多进程/index.html","4a7ecc43b4f3f45788a16e89d2186246"],["/2019/11/15/python类的私有属性和私有方法/index.html","2625f59afa94cdac1273300fe183548b"],["/2019/11/16/协程/index.html","9b3a295e700ed6c1cc4dae43239f42d7"],["/2019/11/16/进程,线程,协程对比/index.html","e17a8a724f44575a35d48afe5dd7bae9"],["/2019/11/17/GIL锁/index.html","924d9505482a89f8793f5156f592aaab"],["/2019/11/17/闭包和装饰器/index.html","84ceb07d136d41c58cc1c862057f94bd"],["/2019/11/19/Python进阶知识点/index.html","e92d96ba63ce7c84b5f03a0b1da8b3c4"],["/2019/11/22/京东全网爬虫/index.html","2e2f0cd4af633943929f166196e048fd"],["/2019/11/23/JavaScript的简介和基本知识/index.html","e727f24bcdab36b1b6d5fc04ab4a3f50"],["/2019/12/04/README/index.html","25c406d72afdc8daafa6c832fd2a3260"],["/2019/12/04/java简介/index.html","52731bf110f27816308c133d69495e05"],["/2019/12/11/java基本知识/index.html","33582022fc981c9d70cd29d905b18897"],["/2019/12/17/Java面向对象/index.html","5d4a634c7c5bfe982d2e59bcbb9d535b"],["/2019/12/19/面试总结/index.html","940f4a6f1364d8d947d210759c52ef35"],["/2019/12/20/SQL性能调优/index.html","c2e17e0af3278cf783fe72dec7776018"],["/2019/12/26/vue框架介绍/index.html","3203b4b34fa514dfa30b96ee42e5c2a7"],["/2020/01/02/12306自动抢票/index.html","9e27a67625c2c530b60492d70f851da2"],["/2020/02/24/flask框架/index.html","ec55edcc61752ef1fa6f5edbcf6fc067"],["/2020/02/28/docker以及相关概念介绍/index.html","8353c2cca5bd17a02da7ae5846937492"],["/2020/04/05/python数据类型的底层实现/index.html","8f119f8090292168ca1a900f1aa73fcb"],["/about/index.html","dd9b3ee3e4ea20d058698fca58edd9c8"],["/archives/2019/06/index.html","d5926763f282e50dfb6b7ca3487b5dc0"],["/archives/2019/07/index.html","b77ac12f8d452dc43486ee5e89c930a8"],["/archives/2019/08/index.html","c8b7fc36d778e7d728b218868bb26f24"],["/archives/2019/09/index.html","24a43b9cdc5838d26ac0d35bf1855264"],["/archives/2019/10/index.html","30af97c678edec9cff0019a882f3df93"],["/archives/2019/11/index.html","694166cbb42dc2468126577225096235"],["/archives/2019/12/index.html","c0711c124218b9738972789d38af40d3"],["/archives/2019/index.html","472752bb7013f857eb39bbc0f3ef0d36"],["/archives/2019/page/2/index.html","6f5048c3e9dc4b68cff8ec16098933cb"],["/archives/2019/page/3/index.html","bbd94b79c6fb6254b49dc3da91526e67"],["/archives/2019/page/4/index.html","823bfea545baa7467dd34f7368d80946"],["/archives/2020/01/index.html","16723e604add0ffeabf61e52a3d0be7a"],["/archives/2020/02/index.html","73e34cd3e2cfc6b20cce7f04d7dc6d07"],["/archives/2020/04/index.html","c464213bf58f68fbf1f01c18520f674e"],["/archives/2020/index.html","15823cdd606a9f39c70aacea1a3c2b0b"],["/archives/index.html","db8328fb17d9d111738ec1ffe811a0b2"],["/archives/page/2/index.html","8046e8daba70caf104812b288bdc9897"],["/archives/page/3/index.html","ec5a6fc473df7d4daedc0840fe9e1526"],["/archives/page/4/index.html","859524464d769e01ec07b6f47fc3d896"],["/archives/page/5/index.html","8f8c448534ca17eb659f396b2f910657"],["/categories/C语言编程知识/index.html","54a6922338584f9a14b6fa21461567d6"],["/categories/Hadoop/index.html","87e586a583c669a3dd964914cb4fd925"],["/categories/JavaScript/index.html","32ecda9c4c949bac55b24e54da5247ec"],["/categories/Java学习/index.html","ee1f50a5d91120c3755fadb1954dcdc8"],["/categories/Linux/index.html","c3023857545bfb5fa362d82f25a17656"],["/categories/Linux/常用命令/index.html","1bf5ea25fe8ff76b18abe0006311f716"],["/categories/SQL知识/index.html","3b72e9d1b0c35d68b2475be8972947cc"],["/categories/docker/index.html","24dfa476859ca189e18d291202e64325"],["/categories/git/index.html","233adae014de1c98d4d204d6fb4b1786"],["/categories/index.html","6cafacea9189ffded4869bfc6c494033"],["/categories/python/index.html","0ccf5da5bd27ca66f5bf2f714807052f"],["/categories/python数据挖掘/index.html","1a178b0b168614a89b76bca230096d7f"],["/categories/python爬虫/index.html","8243a98f237339f108e03d2916fee0e9"],["/categories/python的web框架/index.html","ccbb6994e3e1b3549e1fef7ac8901937"],["/categories/python编程/index.html","d643f6ff96f96c37ecab690a09eeccae"],["/categories/python编程/page/2/index.html","9f2b17619aca9efed4057f506a02e02e"],["/categories/selenium知识/index.html","c842f4a2737bb3392018231e558c0f3a"],["/categories/个人随感/index.html","b886dfae654f39498daefd43f817cbdc"],["/categories/前端学习/index.html","5f9619730e5d36070efa32cf12ac4513"],["/categories/数据可视化/index.html","108de783122ded7681931feac5f27c27"],["/categories/正则表达式/index.html","e4ca6c8cbd70ee27ac4085ea28fd6a26"],["/categories/算法/index.html","8bdd08107516a9480a5a7fa7e42ab1f5"],["/categories/算法/五大经典排序/index.html","0fa680d1148f373153cc7e3c458dce46"],["/categories/统计学和概率论/index.html","cda2d5607b1393789cf251b390fc6774"],["/categories/网站知识/index.html","b0f524cfe454a1a30ef818de4385bf6d"],["/categories/计算机组成原理/index.html","1f0fd05ce1b042bee19227ace64bfd32"],["/categories/面试经历/index.html","0a519b2f911da140159a3163b5ea4093"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","ca84ad033131f4d4d4b002c068186507"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","3a1fc7eb19f4f629cd746ad9394742c6"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8e2b91c64ca704fad823a3674b4d31ef"],["/page/3/index.html","b205ae7bd3e55ab751c438dbb42bfc2c"],["/page/4/index.html","3289f4e569edaa99d7a9477fb3187e0c"],["/page/5/index.html","4b4c17a8d1d44523d4a27b9151d78689"],["/sw-register.js","2870fe8cee76c06d543914cba52c7184"],["/tags/Django/index.html","748b3a3fe5ae2b6adfd788deacddc179"],["/tags/GIL锁/index.html","8c9394fec483e718bb420e856fa0bb47"],["/tags/Hadoop介绍/index.html","12af08e2c475bc794980c1371354480d"],["/tags/Java基本知识点/index.html","d7d6b8b77e4f8a38231fa044228b523d"],["/tags/SQL调优/index.html","fe93f82ed967f7b7a04a625bad384c63"],["/tags/Void-知识点/index.html","13d8835a85fd535f40cbf895bd55d3b7"],["/tags/Vue框架/index.html","daadba940920f1cf95de298eb33184d3"],["/tags/docker知识/index.html","06c35a17295641e613b9bc37b694d4e6"],["/tags/flask/index.html","f900bcc83834141c280496f91a83d116"],["/tags/git命令/index.html","cfc2e0d228453cd2b93be86ee2990e14"],["/tags/index.html","294d0f22982d77d5deb3d8798f35f892"],["/tags/js知识/index.html","bcfb2a067686680943ed54576bb2cab9"],["/tags/linux命令/index.html","e0d3284bb9256f144b67deb8d9d09788"],["/tags/pandas函数/index.html","521c99b4331322ab9021a2875b7434d1"],["/tags/python编译器/index.html","7bc9369557e7ed6b90d4e9a40c6c4ff5"],["/tags/python进阶/index.html","db4ea99986b3a1d57bedea609c8902f7"],["/tags/scrapy框架/index.html","1ea36168ad2e8cc46540e9139b6688a2"],["/tags/selenium/index.html","9e0832bc84959bebab4a57c2a6b9d231"],["/tags/协程知识/index.html","f24548b8dd83e9f157fd899848e06c23"],["/tags/基本知识点/index.html","46b2b4af7e8e12cfdc2af07c669be3a0"],["/tags/扩展知识/index.html","c10299b5e8ff5312615f1c4588ca9291"],["/tags/排序算法/index.html","2f0e1f9cfe03d7de4c9cd43f46bc0db1"],["/tags/数学知识/index.html","6c42f029f641964f594d5a5aff13fe0f"],["/tags/数据可视化概念/index.html","0c7a33a133b7faf0eb7cd27c16d415b8"],["/tags/正则/index.html","4613be30e55e21ae7125a0eede849eae"],["/tags/爬虫实践/index.html","0c72709e3509d5c23e0bbe687907a6b1"],["/tags/线程概念/index.html","b271c28eb8aa6e544af03ce6409d521b"],["/tags/网站的基本概念/index.html","db024b4b9e6675a38d825ea3ed1ec49a"],["/tags/网络编程/index.html","be79a26a99664471f226b9297871e2da"],["/tags/装饰器/index.html","c206ae700c0d9b78d527a1089cc1c644"],["/tags/计算机知识/index.html","8f90ebcc89c53ceb0d2e6d1405c98abd"],["/tags/语音识别/index.html","1939fdf51621c79d882877ce4198cc79"],["/tags/进程-线程-协程总结/index.html","6f65e337916be20ea7f7c179352b9a81"],["/tags/进程概念/index.html","c0011c3695cbf2c0e91106b845f28104"],["/tags/进阶知识点/index.html","653df25e1bba9ef7441bef5bfecdc1d2"],["/tags/面向对象编程/index.html","fda3c655aae15c2607cdc6fb63755a79"],["/tags/面试总结/index.html","3cd9e2f4cb3db0b4780489ac338ce98e"]];
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

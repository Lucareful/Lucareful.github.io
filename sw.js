/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","24a9e449c8c1d25d2a029f3e8df39879"],["/2019/06/26/four/index.html","612053868e8de2dafdb4d77c9e7e4867"],["/2019/06/26/three/index.html","103faadc86c1c639142ecd85234eee35"],["/2019/06/29/six/index.html","8e1bd5a9435fc114b2f45115947e3614"],["/2019/07/06/serven/index.html","639e8378d27669cf86f02e19f2602ec8"],["/2019/07/11/数据可视化笔记/index.html","b39aac37ec2cd056648bd2c901f19510"],["/2019/07/12/语音识别/index.html","aa5384440b5ba9338928ba40d7c5c117"],["/2019/07/14/hadoop基本概念介绍/index.html","a54c2ac13aaa194ab01b05186fefd26a"],["/2019/07/14/数据科学笔记/index.html","34b76c5045c169cb49e63b6104481aa8"],["/2019/07/22/python爬虫/index.html","3a0a3be611ed9c77072c50cda68080a9"],["/2019/08/25/pandas函数/index.html","b8055f0e5f0872e0bccc7b6b4e5869a6"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","b718da719a4bc9f5578b1f1dd4aebd41"],["/2019/09/30/C 语言中 void 详解及应用/index.html","e7b2a61f7d2fe441fa95dce951f2a2ff"],["/2019/09/30/第一次面试总结/index.html","52b6677558623409a95beb64ba09a703"],["/2019/10/07/django之url规则/index.html","6837038234d1909c0eaf6571424d4383"],["/2019/10/07/django配置初启/index.html","48a82f5876288816c2b41d8c255951a2"],["/2019/10/13/C语言笔记1/index.html","580c0cd11c8b9e528085daf2223570a9"],["/2019/10/13/C语言笔记2/index.html","45e908b3b3aa02068701711370366f83"],["/2019/10/19/C语言打包技艺/index.html","6a4fb94f65a1e7c13ae8080dc4144abb"],["/2019/10/22/c语言笔记3/index.html","b99e7c4463b09bd2feb1d9db7695082d"],["/2019/10/27/IP代理池/index.html","f6a859a077f7aa5563ca34e7e826ed1f"],["/2019/10/28/git命令/index.html","a64f2ce7ef70ff7108ae1bae472792af"],["/2019/10/31/斗鱼弹幕抓取/index.html","8b73f2574c40b531c3d0e18c53a923ec"],["/2019/11/13/多线程/index.html","901fa4643ae7b061a7d36ddaf4461e46"],["/2019/11/14/多进程/index.html","a4b1a004c20ed70317c7ed541b982966"],["/2019/11/15/python类的私有属性和私有方法/index.html","db77c92268a246d7ab7160bb7ddaadcb"],["/2019/11/16/协程/index.html","83939e78b93e1cb5ff69fe8975ede26d"],["/2019/11/16/进程,线程,协程对比/index.html","4f3d75d75dd4e0a3f91adbf43fd12829"],["/2019/11/17/GIL锁/index.html","12b027d5f69fff1385b6ff9b23b60f76"],["/2019/11/17/闭包和装饰器/index.html","8d580236203921be182871259b384dce"],["/2019/11/19/Python进阶知识点/index.html","d95ab93b38bc15a4449209f7f7f9e7b0"],["/2019/11/22/京东全网爬虫/index.html","eab9d4929e7473c2804073a8f60c4c1c"],["/2019/11/23/JavaScript的简介和基本知识/index.html","f27a09c7245599e1f7aafba72753f335"],["/2019/12/04/README/index.html","7b0ad93856f1c8d66fef1b5f3e062368"],["/2019/12/04/java简介/index.html","c924ff0573ae2b71d708d89dc9df360f"],["/2019/12/11/java基本知识/index.html","91601e1d36ccaf12505094b04f1e0c8e"],["/2019/12/17/Java面向对象/index.html","f85aa083464eba42ec83d74e2562504b"],["/2019/12/19/面试总结/index.html","e1334e4e1aa6aa92ea783fac1648e7c0"],["/2019/12/20/SQL性能调优/index.html","5b25ba9335394d32c2b514d98aa2858c"],["/2019/12/26/vue框架介绍/index.html","2ade57c687f3cbdf4362cebef511b4fd"],["/2020/01/02/12306自动抢票/index.html","72e8bf05f480a38439cdfbe139fd5474"],["/about/index.html","f3c740b8aa24ee73987f17ea50a2d27a"],["/archives/2019/06/index.html","cc6e03d1305f817b6caa811c34e8cfb3"],["/archives/2019/07/index.html","924bfe47beca0a51d2029b9c65cafa4f"],["/archives/2019/08/index.html","b5c767648b3063b7f7d7e6b01ded7fc9"],["/archives/2019/09/index.html","dd2a7843104793a3a96ff45cd39edd72"],["/archives/2019/10/index.html","342f63d28e519a8b6ddfcbfcce13354d"],["/archives/2019/11/index.html","de6bdb114957898b3b62465d1a68f768"],["/archives/2019/12/index.html","893c227b887d7870b8385947bb63d6d4"],["/archives/2019/index.html","af1eda6e7a3c4dd30f195e053b4344ce"],["/archives/2019/page/2/index.html","0a831f74a658e6b65cd0135dfb792859"],["/archives/2019/page/3/index.html","d048b10cd6c6aae213158afd90fe5716"],["/archives/2019/page/4/index.html","679d5ac6193f0cacaf50cf8985ec40d4"],["/archives/2020/01/index.html","7f06b10d20446ceea1ae315e48fe3f79"],["/archives/2020/index.html","a68f78f498ba45de95355722c21893fa"],["/archives/index.html","37776ac30054388e598c380c8b2cb86a"],["/archives/page/2/index.html","bc266bcd6bdcab6d139bb06a98f14e9d"],["/archives/page/3/index.html","54143ee931427e1188efe8e000b70cb7"],["/archives/page/4/index.html","09ec1fa89863effddc3a4b5cc90efa53"],["/archives/page/5/index.html","40919cb1c4e13b56c5d57cbca2de910b"],["/categories/C语言编程知识/index.html","315b5a4d93ddb8b6eb65bf006bd74323"],["/categories/Hadoop/index.html","eb1acb75bbbb09cd2a4278eb92a2b903"],["/categories/JavaScript/index.html","fc6848b6ec58ae633dc51fec1ff9b826"],["/categories/Java学习/index.html","91db1bd5c4df26ecfe473ad178f621c5"],["/categories/Linux/index.html","53cddea51542fc486bbbc84b009577c2"],["/categories/Linux/常用命令/index.html","043cd2cc51aa9ae5cb3e6e870236b228"],["/categories/SQL知识/index.html","d643883facda5747a182c20c830f8661"],["/categories/git/index.html","e72f81c0605379f24fdac542771b83c5"],["/categories/index.html","c1852c8227de4ae8dab5cbd7b9805772"],["/categories/python数据挖掘/index.html","2759f52feb5e1f4ba65541540ac262d9"],["/categories/python爬虫/index.html","a595537020d6b91c9a82a962dd1e6bee"],["/categories/python的web框架/index.html","29fca9720cba3cf93f84b771347b6cb7"],["/categories/python编程/index.html","cc54e97d35b164e753bc40d5003141ea"],["/categories/python编程/page/2/index.html","0df4d528b9e2b556150aaf6aaa9bcb94"],["/categories/selenium知识/index.html","e56e24e2f2f3991f80c621d29fcea908"],["/categories/个人随感/index.html","be7a32cb1c708788d892db4f047cf99d"],["/categories/前端学习/index.html","1a679df62d4a78bbb414911e01e676c7"],["/categories/数据可视化/index.html","b9b387dc7cd4507723ac54cb1faf3706"],["/categories/正则表达式/index.html","487869000aa59137bafa31d06555c4ff"],["/categories/算法/index.html","4041e0bd92d568cefd241e46a611728d"],["/categories/算法/五大经典排序/index.html","240e18b1a39eaca73251db8a42afb947"],["/categories/统计学和概率论/index.html","6c1b86ccac81e873642edb1d18839ea5"],["/categories/网站知识/index.html","7f3f19fef5d97976000a58523276fc4c"],["/categories/计算机组成原理/index.html","3dca40b2264bca105ad839941f5ea3b9"],["/categories/面试经历/index.html","89e854b0c869c5c178199a517a4ee820"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","a986f03b4b959a11d8521b596518eddb"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","485de1090123d312000f77b899aa5043"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","841da4606c57a0e69a8479ba94fefe52"],["/page/3/index.html","02c0e06153955ffdf267dd2fa71db8db"],["/page/4/index.html","2875d21c06c0b8e03b0b938a0f53175e"],["/page/5/index.html","1f1daa3ebee68a636117db9f1277d113"],["/sw-register.js","001edae8db9141f3c5b960472fa6ee4b"],["/tags/Django/index.html","5342cf123f98d37562468069c0567c2d"],["/tags/GIL锁/index.html","e4342bc5cbadb253995d95caa34177fb"],["/tags/Hadoop介绍/index.html","06dc884e412f816c0019a6a9bbba034f"],["/tags/Java基本知识点/index.html","49627455019209b1d70759a099f5eab9"],["/tags/SQL调优/index.html","793550cf8590e4bb8d6de6a715c181c0"],["/tags/Void-知识点/index.html","a60944a9b8c0e5e4bb2d8292718b1402"],["/tags/Vue框架/index.html","abec002172e9ce41e9329ece3cb72fdc"],["/tags/git命令/index.html","d50f96ec822971421a91fdceaab8308f"],["/tags/index.html","dc077fee93451f8ff1d5f37c05d7300e"],["/tags/js知识/index.html","056fdc7e1ea1d309e31248b98d9b449d"],["/tags/linux命令/index.html","c21b6aaf6f91dc74d147b9eec72a0691"],["/tags/pandas函数/index.html","ef113cd8cdbbe653b8ad53ecc9bc619b"],["/tags/python编译器/index.html","9c6bfb630e4eed179d5bdea3b9a9a420"],["/tags/scrapy框架/index.html","958c64648925ccb352b4e28f49c333f7"],["/tags/selenium/index.html","75812dbd9fd6a8eb14277dcb7a58454e"],["/tags/协程知识/index.html","c97351c9d4fb130dc526bbf620455b8a"],["/tags/基本知识点/index.html","ffca509efe42fc51015ed56a6ab30668"],["/tags/扩展知识/index.html","da72e42a76c0ba235fad778c285410da"],["/tags/排序算法/index.html","b7c5d590c95575cc5790bee932d12d91"],["/tags/数学知识/index.html","d7ced60f5cc3f5cab913176d8d2054f5"],["/tags/数据可视化概念/index.html","003515e453d4d652fe205952ee39dd2a"],["/tags/正则/index.html","04d57e9029b54473907d92f56a32ddc2"],["/tags/爬虫实践/index.html","c49e3ec82147774529dc9ca5434d866f"],["/tags/线程概念/index.html","1cfda45220c08aae530a26cd3ace04c0"],["/tags/网站的基本概念/index.html","21bd16f8923e0afa8e893cf38f788f0a"],["/tags/网络编程/index.html","f35836ed3dd025399744c6986d741c92"],["/tags/装饰器/index.html","1557628794c6a6d8b675a9b929a5f53e"],["/tags/计算机知识/index.html","d372384279b021097b75b35a695c7b4d"],["/tags/语音识别/index.html","eca00eec71c41ed1b9159078f8876806"],["/tags/进程-线程-协程总结/index.html","cec9156625a089332cde81da52d4f212"],["/tags/进程概念/index.html","8c7fe842c32c0f0590b8b8ee2294b4a6"],["/tags/进阶知识点/index.html","2a071c699851bafb93631f4a98e5ca79"],["/tags/面向对象编程/index.html","2daf574b3f4c30e9f1876238007e08ed"],["/tags/面试总结/index.html","879900cb5bbc8d632481254ecae22f1e"]];
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

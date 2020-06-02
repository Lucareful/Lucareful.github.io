/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","edf6b5fc734f0ab4b0105451b7e067d1"],["/2019/06/26/python解释器介绍/index.html","6cd3bbb7a6f00c9205a480c02e9d8eca"],["/2019/06/26/正则表达式/index.html","50068978c457f58e76919eb9fd6970df"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","e87b7eb4091e716ee4bb96eae6eabac5"],["/2019/07/06/网站概念/index.html","c7cdaa7c5043082e6481bf99b6a6b985"],["/2019/07/11/数据可视化笔记/index.html","fe75291eab3d2b7636c2989068132131"],["/2019/07/12/语音识别/index.html","d60a0dc85be02645ade5f7778d182e5e"],["/2019/07/14/hadoop基本概念介绍/index.html","8285da42ee506c2476cb540182da5bd9"],["/2019/07/14/数据科学笔记/index.html","f3b454894fca0360e392cb9f93e23606"],["/2019/07/22/python爬虫/index.html","e40d37064eb0662dfb45772b2283b82d"],["/2019/08/25/pandas函数/index.html","d671efe610752f872733f3b54fa2627f"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","d6cdd141c4f4ca48dc9eccc258ea4055"],["/2019/09/30/C 语言中 void 详解及应用/index.html","5f32a24f29255686fd14dd1b9134c406"],["/2019/09/30/第一次面试总结/index.html","25436edcec94cc71b20230af5662f22d"],["/2019/10/07/django之url规则/index.html","f66c264490de9e9af6cc6be2ae1d3084"],["/2019/10/07/django配置初启/index.html","980fdb51bf97598a1689c121e18712e9"],["/2019/10/13/C语言笔记1/index.html","f9f39d57ff164e2fb5b2b7467f52e031"],["/2019/10/13/C语言笔记2/index.html","61df9793d794f04135d43de9987d8cac"],["/2019/10/19/C语言打包技艺/index.html","e2ad69860b4fb48f5eead62384b41a5a"],["/2019/10/22/c语言笔记3/index.html","9d8202aa685f017244e7bdcdbf1bae65"],["/2019/10/27/IP代理池/index.html","7f3d8bc3dfe1a44b10f69266677abbfe"],["/2019/10/28/git命令/index.html","822fcca7f3e8acb203e17e97537bf6cb"],["/2019/10/31/斗鱼弹幕抓取/index.html","28e1d11a09a52818a7f35922d6bbc736"],["/2019/11/13/多线程/index.html","cf31c6d570ed535f4264fcfc7f8e5b03"],["/2019/11/14/多进程/index.html","1992d68471678e8e85a1f623a3a0714a"],["/2019/11/15/python类的私有属性和私有方法/index.html","8f58cc0c410f4181488c3016088f30d1"],["/2019/11/16/协程/index.html","beb9c15ebcb4d21bd6d5b7da988d79f8"],["/2019/11/16/进程,线程,协程对比/index.html","b3f93d392a767466f53698fa0cb2316e"],["/2019/11/17/GIL锁/index.html","93de43a687621b24d861a96fa7c2d63e"],["/2019/11/17/闭包和装饰器/index.html","c32952f3f123230110680a18f81b99c5"],["/2019/11/19/Python的模块和类/index.html","65e242d85f3bc2f182618dd74c79c7c9"],["/2019/11/22/京东全网爬虫/index.html","2972d84e42c043bfca07f8559cc5b23a"],["/2019/11/23/JavaScript的简介和基本知识/index.html","144ddace2fe416ba73a07ab230b74e6c"],["/2019/12/04/README/index.html","1c5e07dbc03934b39f9dd7a704f8c6fc"],["/2019/12/04/java简介/index.html","1ef4132992ace42d340095bdbb27b872"],["/2019/12/11/java基本知识/index.html","1c261e46338274bc167995ec745ee928"],["/2019/12/17/Java面向对象/index.html","e1c7d1e93c7a47c2a94e6a933b3fa6c5"],["/2019/12/19/面试总结/index.html","512abf400ccf6c053a219d8fc04f7a35"],["/2019/12/20/SQL性能调优/index.html","55abecd7215466daec6183f2adc483b1"],["/2019/12/26/vue框架介绍/index.html","c3fd8b442be0250a397464895d7adca0"],["/2020/01/02/12306自动抢票/index.html","3ee4648b84c3c173894c931a32e73a66"],["/2020/02/24/flask框架/index.html","212f9214b33fd27cd3beb66167cdf1b7"],["/2020/02/28/docker以及相关概念介绍/index.html","5db747f5c4bc83bcea4e91901797e7ad"],["/2020/04/05/python数据类型的底层实现/index.html","d3cb2f277dcd9414a2e2d2d29316ddb5"],["/2020/04/27/查看mysql连接情况/index.html","aaf294effc2e9f155caceea4da12d043"],["/2020/05/02/Linux操作系统核心知识/index.html","b56a764176c164a38e9988a3fc0a81b3"],["/2020/05/02/计算机网络/index.html","d398bcf4cc9c8ad8e9049bd5485d4e38"],["/2020/05/06/Linux操作系统（二）/index.html","c3d986532c82a9e9a243d361d411e139"],["/2020/05/14/函数补充/index.html","367226c18341d8ad337c8bd0253fa787"],["/2020/05/21/核心模块的介绍/index.html","5bcbea82289ae073ef96196f48cbe1ca"],["/2020/05/21/高阶函数的定义/index.html","f693b769a0f6b7bf5a8f9284d27e00b8"],["/2020/05/23/Django后端演化/index.html","d461c2310d8390ee0f1978675563fd28"],["/2020/05/29/Mysql数据库函数/index.html","d8aa470f1f72d8c6d9c4a20488591867"],["/2020/05/29/Python面向对象/index.html","b9a41e6fdbe83830ad7fb673fb1455ee"],["/2020/06/02/Python 中的上下文管理器/index.html","709397dc2c428e21a0a2e106375c669f"],["/2020/06/02/Python类补充/index.html","899bd5efc69f451dabbda497f6cfc06c"],["/about/index.html","5afa1b6b89a4d4b283d0bd42964f9223"],["/archives/2019/06/index.html","0315623c8a86d8f7b1439c2cbcc21a7a"],["/archives/2019/07/index.html","525f904bb4e23c8f6e51a822de4e900c"],["/archives/2019/08/index.html","854f01f0ba79627f08436856ab5d3025"],["/archives/2019/09/index.html","64c8527ce6c47182b41de98d40c9d534"],["/archives/2019/10/index.html","71908c0b1243bb90a43ec713d8222c3e"],["/archives/2019/11/index.html","5be7fa130eb1a449fd7654169a6b571c"],["/archives/2019/12/index.html","191e75b4add3c5e968550f4084933e3e"],["/archives/2019/index.html","ee7491c789076360aabf9514619b41b1"],["/archives/2019/page/2/index.html","9942d24307f4ef8b0d14504845c7b3d1"],["/archives/2019/page/3/index.html","27a855213ca8ed430d69ba20f504611c"],["/archives/2019/page/4/index.html","2c48ba77afa9f49e6b12751ef59e0f81"],["/archives/2020/01/index.html","2328502bc7a65ce5633c02cb6e4e567c"],["/archives/2020/02/index.html","671d7e6cb82120c6f9b649b965c841af"],["/archives/2020/04/index.html","72a0c68a8b33db1abf476716538bb9a8"],["/archives/2020/05/index.html","772994ca57a43cb87f54a96236248d76"],["/archives/2020/06/index.html","fe5599b864c98b6425079175af149df9"],["/archives/2020/index.html","9fe673f36b327ec2211659be8aa06af1"],["/archives/2020/page/2/index.html","8a455fb1c6b3ac1c935cc32d6d82e13f"],["/archives/index.html","d69dcaa13d59856c15542deba76d19b4"],["/archives/page/2/index.html","e8ba84a368bb9334154ebf8bfb3b69d2"],["/archives/page/3/index.html","3ace54db4161c304fff5f94fec29cde4"],["/archives/page/4/index.html","c6f22b5e0190fadb164708c46976fe12"],["/archives/page/5/index.html","fb59d5053a8923c94b450635d4101355"],["/archives/page/6/index.html","c9f2a61040115158473de6195a7e37c9"],["/categories/C语言编程知识/index.html","39e748c6230c462563a111e0e670be8a"],["/categories/Hadoop/index.html","bc5b64df981ee5576341888cfeaaf3e0"],["/categories/JavaScript/index.html","3c368571c0970cc8826f9169ca19c1b2"],["/categories/Java学习/index.html","9ad5f5796af0c6c45259baf24460a2a7"],["/categories/Linux/index.html","fdf07b2d1f82d126fb4d15d4630a3f8b"],["/categories/Linux/常用命令/index.html","6b4f3911a20347981963b044a18e342c"],["/categories/Linux/核心知识/index.html","26eedcc12bbed808ad5dfeda22dfc7b7"],["/categories/SQL知识/index.html","523e473cbdcd767df2de5d4ca2116adc"],["/categories/docker/index.html","6835e8cea88c4af33747adc3df9f943f"],["/categories/git/index.html","95c0fd9374747bfcd8cfeaf3318fa06b"],["/categories/index.html","115c9084d84d7f68331d5d0667806cf9"],["/categories/python后端架构/index.html","6c3b2c64b3eaf2816b95569163b0a576"],["/categories/python数据挖掘/index.html","cd3e3cbcb1e89ddc335267b0bba7dfc2"],["/categories/python爬虫/index.html","b91f7150fb8b8948f0b144d6110265ea"],["/categories/python的web框架/index.html","165ffc0ee91c83b5e632c75ba47a62b6"],["/categories/python编程/index.html","152bdee2128192abee1ac4fc78e26f27"],["/categories/python编程/page/2/index.html","c0ea60780b9c3b6924dc3f6351e7c9e4"],["/categories/python进阶/index.html","1e29934c421dc4434329687a986dc5b2"],["/categories/selenium知识/index.html","361b80a2fa1dc911ebca4630955f6020"],["/categories/个人随感/index.html","6ac08a315adef1c58198269777b3c4ea"],["/categories/前端学习/index.html","53d01b386db22d68fe8b24e910ef0755"],["/categories/数据可视化/index.html","8ca90c604f464f920435f932d426dff4"],["/categories/正则表达式/index.html","375b8652d40c24d414b3516744b2bbf3"],["/categories/算法/index.html","f0989fe83e739761849d8e33fa41ae45"],["/categories/算法/五大经典排序/index.html","d8aad27a2d689f5f4c9d957c485d5e94"],["/categories/统计学和概率论/index.html","d1220caddb56bca1d460f0c0e28be10e"],["/categories/网站知识/index.html","8b76fcb3a8f1e6b2a6ce3461ecfa4b51"],["/categories/计算机组成原理/index.html","49332588ae084169d6769c2f63af01ae"],["/categories/计算机网络/OSI七层协议/index.html","b713af9393d60e6f7e4cb33644286ca6"],["/categories/计算机网络/index.html","353d67cba51364a407c434c051f4ecd5"],["/categories/面试经历/index.html","8cf13aa43d419fd161b0fdecd9917489"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","47b7c3409846a00f09680a15fea64c25"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","91bd69684020093892f08485ad4c903d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d75f4d765ab1ca535390869eaf8fe608"],["/page/3/index.html","72529ba0c3e04001c38de0b1bb1c610a"],["/page/4/index.html","1d0766a0de7584d82c91a8b6c614899f"],["/page/5/index.html","551c4177bf033a667aed49f18b783897"],["/page/6/index.html","165c0374244512c9df4dc43ccb9a32bd"],["/sw-register.js","b90b00386b8f4ea12c2aa4f94876ee57"],["/tags/Django/index.html","ea3a9f5f8dadd0baa3c82ba2bca84a58"],["/tags/GIL锁/index.html","59e40b1095845814b3c0aa75b32b7b83"],["/tags/Hadoop介绍/index.html","f8cd9b6c21c9aeb42f77ce91d692b9b1"],["/tags/Java基本知识点/index.html","6997f34882c2d132da799e4f92f0c718"],["/tags/LinuxLiunx命令/index.html","d5bb19642b092e1dc7c368a140ed1adb"],["/tags/Linux知识/index.html","6946133ff631c54a09e52854148a3b47"],["/tags/SQL函数/index.html","d1e563ce5654d094c38be7ee525e8779"],["/tags/SQL命令/index.html","f586a5b0e4269a5c611d18ab2009d533"],["/tags/SQL调优/index.html","09255d753917c4de6be877797c0022de"],["/tags/Void-知识点/index.html","4beadce230491639b3ae341bbe6f81e6"],["/tags/Vue框架/index.html","028bc33247fb9f91f56f8f8f5c9fe13f"],["/tags/docker知识/index.html","d44c7115b06a0135e17b057a1372ba3b"],["/tags/flask/index.html","e6eccc35427895ae30dc395feee555f2"],["/tags/git命令/index.html","bf1f97a08eedd1af72432a35e30072e0"],["/tags/index.html","7f0353f7cafa30c41f5a4446d16ff3b6"],["/tags/js知识/index.html","b250d78241b32573ae06beff5734c53c"],["/tags/pandas函数/index.html","15062b5be3199837c12750bf3708cc99"],["/tags/python编译器/index.html","8128f9aee968f034e32cac8e4a22c93a"],["/tags/scrapy框架/index.html","18dda99e817202367153c7f417a6c812"],["/tags/selenium/index.html","813ce3dfa1b31ca2882c3e423d960115"],["/tags/上下文管理器/index.html","3d373638ff68755d6f5bbee1648bb26d"],["/tags/函数补充/index.html","227c5489e293b6a1d743fac322fe3232"],["/tags/协程知识/index.html","461b96a51c6a07cddaba0bbf27a73e89"],["/tags/基本知识点/index.html","55014eaf5e4957184177837719eb0085"],["/tags/底层原理/index.html","68c42da9e10837055a40841823c3b0e2"],["/tags/扩展知识/index.html","2ac76e760310c9e9ff7381a94686cd68"],["/tags/排序算法/index.html","09ffd39650b87665475e2f7915bbb5bf"],["/tags/数学知识/index.html","98d4a1c2127ca6332d1803449b26b51e"],["/tags/数据可视化概念/index.html","27ee557a38d3c585a79bd9121138556e"],["/tags/架构演进/index.html","7b2055336c2b1a18951f25378408ff92"],["/tags/核心模块/index.html","ddde39c332701b48f2b12d59ab69ac59"],["/tags/正则/index.html","c9219406a7fa25106b0cf52876a1ae2a"],["/tags/爬虫实践/index.html","22eeeb17bb81c21006cc218e496b57a5"],["/tags/类和模块/index.html","06f2466ac5dd7b844665a5ba16cbc295"],["/tags/类的知识/index.html","78b3510077f2a63a570d8a0c7d6f0992"],["/tags/线程概念/index.html","1320c9f9750157f7a5243cba7f013709"],["/tags/网站的基本概念/index.html","460d3bb8dea51d602c2f6b2c5c0cb756"],["/tags/网络编程/index.html","0ecc4fb606987f661f5e03df6c2aa944"],["/tags/装饰器/index.html","35781bd9dc8103adf58f94c331bb9b98"],["/tags/计算机知识/index.html","07fff3aad8701e5dbd5f30da83d0cd3f"],["/tags/计算机网络知识/index.html","4c5500d08d1074234ca827710d5220aa"],["/tags/语音识别/index.html","4db9a2b480245e98f22975deb0dd2d3b"],["/tags/进程-线程-协程总结/index.html","97d75d80b134af211c99d0109dd73307"],["/tags/进程概念/index.html","36bd91749657ae250070563e36bfe9ea"],["/tags/面向对象编程/index.html","ec6308bb4160520436580e2cb6806fd0"],["/tags/面试总结/index.html","f30bf97b32202977c1866017058ba634"]];
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

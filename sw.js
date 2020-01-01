/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","3ab7db31e14b883e8c74995ff49550d8"],["/2019/06/26/four/index.html","6fd90c69b228ce1cd90aadd443268760"],["/2019/06/26/three/index.html","994e9d9e6913d506f4a7d6bdd0c588fa"],["/2019/06/29/six/index.html","785f09e49c48f70dbd7fc06d5d70ac62"],["/2019/07/06/serven/index.html","7cf0821ff884f2b29e6189a48ff0e33b"],["/2019/07/11/数据可视化笔记/index.html","8e3a927330c36a898732e1cc79bc7be4"],["/2019/07/12/语音识别/index.html","c103a95c95088a7514bc4c8b937c9df3"],["/2019/07/14/hadoop基本概念介绍/index.html","d280c02e172100b513137f5bacfb9917"],["/2019/07/14/数据科学笔记/index.html","8fcb20bf442045614a4c12b28f416d65"],["/2019/07/22/python爬虫/index.html","4e76890cbe77f416029ba4ffe40a8fa5"],["/2019/08/25/pandas函数/index.html","ec38335495ff0e202d55eff71f3c8a6c"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","8247dcefe4f86f3af2de8b1989522e17"],["/2019/09/30/C 语言中 void 详解及应用/index.html","17e0f372a6fa385284ac22177deeced3"],["/2019/09/30/第一次面试总结/index.html","15654e6c8a5b1236ae94035d33642837"],["/2019/10/07/django之url规则/index.html","7f61a5335e1078c74454df7eebd9ca59"],["/2019/10/07/django配置初启/index.html","8959931139b1d5c4b4aac2f96b4d355e"],["/2019/10/13/C语言笔记1/index.html","df81c2cf23dad422ee252f6113b5ed3d"],["/2019/10/13/C语言笔记2/index.html","ab6e0d685fa264b04c94eecda7e2fd96"],["/2019/10/19/C语言打包技艺/index.html","6ad0fd7db83d39c3c8b9035541c2b6a8"],["/2019/10/22/c语言笔记3/index.html","21fbded7b7a3c96c6a90a61fefc980c0"],["/2019/10/27/IP代理池/index.html","5c809a04f387c9674e75108e62aca736"],["/2019/10/28/git命令/index.html","79e75165c2288ae76f17e5c0ba717fbf"],["/2019/10/31/斗鱼弹幕抓取/index.html","a96be2babe7ddeb06a01691bc498e4eb"],["/2019/11/13/多线程/index.html","790700afd9ddb74330ecca6b9d690bc7"],["/2019/11/14/多进程/index.html","2ed6fe9c79a78d0765e4372da9141abb"],["/2019/11/15/python类的私有属性和私有方法/index.html","86d03a02b203ce6c2727ccbe247ea543"],["/2019/11/16/协程/index.html","52a0ccbdd6d92414a521c399b0a8358b"],["/2019/11/16/进程,线程,协程对比/index.html","142b5d109aaceac0f79b9c4bcf6f05ed"],["/2019/11/17/GIL锁/index.html","3c741e82966cc008c09f2541552879a6"],["/2019/11/17/闭包和装饰器/index.html","2a537ce21bc25ba8e54b96cfa401bab6"],["/2019/11/19/Python进阶知识点/index.html","a67ab86638bce79edf341f0693a6bfc7"],["/2019/11/22/京东全网爬虫/index.html","0b88f02afe306b21c745626b33468479"],["/2019/11/23/JavaScript的简介和基本知识/index.html","9c7522583006772a454951e58ce96c0e"],["/2019/12/04/README/index.html","d2c33c29d5310bb304540f82198aabe7"],["/2019/12/04/java简介/index.html","97a05772a098abd305e254227e87da33"],["/2019/12/11/java基本知识/index.html","7855e9aedbf4d0a4a056dd7e90ed68e9"],["/2019/12/17/Java面向对象/index.html","f7807d1bb37476dc46dd46354be0f31d"],["/2019/12/19/面试总结/index.html","be99441f5b339821bfc7034b0a97719f"],["/2019/12/20/SQL性能调优/index.html","5950cc13fd7bbcda0a7ec2b464811268"],["/2019/12/26/vue框架介绍/index.html","787b653378ba61dcc623326ecbed04d9"],["/about/index.html","692dcd2474c4dc57f011a9cd06c9ec22"],["/archives/2019/06/index.html","e4ed59d9664297d8063ecdfa93232029"],["/archives/2019/07/index.html","8c7b691e276524327f9416e34363cd25"],["/archives/2019/08/index.html","79cd0312b40dbe3765f97ea80382e4f7"],["/archives/2019/09/index.html","4e40c5ca5b7a1e25c43c621ac94d51f7"],["/archives/2019/10/index.html","85c2f26e9123ba96adb851ab2421b44c"],["/archives/2019/11/index.html","fa08084a4389b795be6720ebd8aeed32"],["/archives/2019/12/index.html","bfcdd82e859a3b2daa642de3e606e1ce"],["/archives/2019/index.html","b1d3b6aa32ddbd4c78fe71f500d102de"],["/archives/2019/page/2/index.html","23df85197fca929c53b5f736e00c59df"],["/archives/2019/page/3/index.html","1dd545869b83ea3084cb104138c7a41b"],["/archives/2019/page/4/index.html","1c4c4b1097c2b024bf76a53d7e926471"],["/archives/index.html","157c4afa2b2ecf186f367b7f368a40de"],["/archives/page/2/index.html","e70f68884cd8c672693b3df8cbabb98c"],["/archives/page/3/index.html","b3cf05b47b012a75849c224a05998f66"],["/archives/page/4/index.html","1fcf6e70de97a5c38c30b0f5f5d80557"],["/categories/C语言编程知识/index.html","b6fe1ffb26206a4920dd3fffc2f97a84"],["/categories/Hadoop/index.html","5e320d03f61628101bf433e55c520397"],["/categories/JavaScript/index.html","ead65a08b244242cbd96df8af1db7ff7"],["/categories/Java学习/index.html","e8f9b4b85f1f7887e2d58f036b8f8cb1"],["/categories/Linux/index.html","d9f3be51aa9cb501963a39eefcbd1dfa"],["/categories/Linux/常用命令/index.html","7d5ca4aba0d8b330f1384fa776f4b9c6"],["/categories/SQL知识/index.html","537803a67186643d54da52a3a7e5a0d8"],["/categories/git/index.html","003bb8f29f998bc2d42c0dccecf1afda"],["/categories/index.html","5af3b6cc8a549529a86fd57b51b569c5"],["/categories/python数据挖掘/index.html","2ab81f57bfba43c15d58310216d56f0c"],["/categories/python爬虫/index.html","0a95caeeb965abb49980d6c863b132ca"],["/categories/python的web框架/index.html","6aab6e6eaa9d85ebbc2b87334dfcc138"],["/categories/python编程/index.html","b6fa22ca123f808435a2e9135f130f67"],["/categories/python编程/page/2/index.html","6fc9b40c85170a1ed64b984c660280ae"],["/categories/个人随感/index.html","c82dd79e60f642ca650838163b3dcbc8"],["/categories/前端学习/index.html","88ced29a9932fbf96651671f2e47eebf"],["/categories/数据可视化/index.html","bd2dd6668a2873cf463e88421b290542"],["/categories/正则表达式/index.html","e1180895ee2ab59235ca00b3bde898b1"],["/categories/算法/index.html","1becbd9e15fe841f944a85e49e51f8cc"],["/categories/算法/五大经典排序/index.html","f6d86600d53a33bc8766c01a7ced1e38"],["/categories/统计学和概率论/index.html","23e86014edd5f5da4f84052dc1bf4eef"],["/categories/网站知识/index.html","ca1e2b3515c139c25d7cd1627159635f"],["/categories/计算机组成原理/index.html","b0395db8f1ddfece9f06cb6994de1d75"],["/categories/面试经历/index.html","b159ff038344e9a20ef6d59314efee15"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","2fa83d6d1042fad486a32e5d633462f0"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","52ae2fcaf65047365c940325daeea76b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4d059db575036a07cad3ca25446ec9ef"],["/page/3/index.html","2c8420dcc1d171b9d0119732c1cd6335"],["/page/4/index.html","0c5d20d5ddf2dd7a76c2fba9087b8cb6"],["/sw-register.js","f4cc58652ff1c77fcd321c8365d8b9ab"],["/tags/Django/index.html","6bb1b493c98556b9b7cb4a17452038d8"],["/tags/GIL锁/index.html","aa07ad9bd44a664d6649bf010a4f7977"],["/tags/Hadoop介绍/index.html","c2854002921cbbfe9509a5fc83b38295"],["/tags/Java基本知识点/index.html","e421fba363d8c03022016875d771e0d1"],["/tags/SQL调优/index.html","db6fb26c7a098b4f9b1fdc8e30e5b1ac"],["/tags/Void-知识点/index.html","1e7d55a610d4efa8853ddb8ce798b65e"],["/tags/Vue框架/index.html","343c5002e4ede7ea84a5be22e31b53bc"],["/tags/git命令/index.html","a5a477b76a7b0ac392bd158a41ad1c22"],["/tags/index.html","73ea103a804791cb202d763e75335af0"],["/tags/js知识/index.html","dc7072933c274eee821e65352ef3c7e6"],["/tags/linux命令/index.html","5aad7cd84565fdd90f0c33848ddbd764"],["/tags/pandas函数/index.html","f6ec9f84e270a95453f4a534c915a856"],["/tags/python编译器/index.html","7c77447263ed3d23e3d9df9a22f5679b"],["/tags/scrapy框架/index.html","8ee6dde2acf379852806c80e14f5b75f"],["/tags/协程知识/index.html","2312dbdd8e31d5eb88c7713d40996304"],["/tags/基本知识点/index.html","7ddd0835e7de454711b356aaf4d68d31"],["/tags/扩展知识/index.html","84e3c36d095c1e68bc3b6e9588401903"],["/tags/排序算法/index.html","461a15a6b4d356301408d439c940d320"],["/tags/数学知识/index.html","1deb7a96085fcfb7a2d97b1131a04d11"],["/tags/数据可视化概念/index.html","ffe81568faeeb4ddf42179b897813dc6"],["/tags/正则/index.html","25ece17647532091ff030fa85938c1fc"],["/tags/爬虫实践/index.html","e9690b24cbbb78291e3652c59328d59e"],["/tags/线程概念/index.html","534a96c4a078f9fd1cd2749626a5aec0"],["/tags/网站的基本概念/index.html","786695326cd4980b0880394e26da1be6"],["/tags/网络编程/index.html","93d8039fca4ac5da7f513ae34ad6c5d4"],["/tags/装饰器/index.html","35f6a07d18e37493202ad94ce8f46cc8"],["/tags/计算机知识/index.html","c79c526e52b94f22d00f1edd5074bd17"],["/tags/语音识别/index.html","f41ae0d5304d5acf2e18e4ce3d1c56f4"],["/tags/进程-线程-协程总结/index.html","7f8227343a14a9c87dd2fd4c07d78590"],["/tags/进程概念/index.html","d4d620f21c70eb36e7a5062422b83b6f"],["/tags/进阶知识点/index.html","2f0a7477cdf993b4ef85f5fdde3b636f"],["/tags/面向对象编程/index.html","9c945389d0640cbca75d94b56b8da322"],["/tags/面试总结/index.html","cd92c32f6407e1cd5f0488869d23916c"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","c85594a7be52a0142a45f0aaf3ff9896"],["/2019/06/26/four/index.html","7fcf443346e4f4393d0a655f7908d901"],["/2019/06/26/three/index.html","11aabb444220b00495ba22f6548414eb"],["/2019/06/29/six/index.html","c07bba42110f0e2d5fd3158f29ca3ec6"],["/2019/07/06/serven/index.html","310da196d387ad33786ebbbe4934c460"],["/2019/07/11/数据可视化笔记/index.html","d10a81f3995ab13f64f1a2ec661bae30"],["/2019/07/12/语音识别/index.html","9a558c290ec3c71a32a61a737fd7722b"],["/2019/07/14/hadoop基本概念介绍/index.html","0cf845f2cdc633a371dd6963574956c6"],["/2019/07/14/数据科学笔记/index.html","f6d1bd9428fb8d591e9dabc4e9c65d5c"],["/2019/07/22/python爬虫/index.html","b57ffa01956a425626b920e4c1ad42de"],["/2019/08/25/pandas函数/index.html","8985241cad18f4df6dadab94aa612692"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","234fd21c02f44fb9566918348d6801ca"],["/2019/09/30/C 语言中 void 详解及应用/index.html","65960e4e52fbff4c1bd67b0d95cc32dc"],["/2019/09/30/第一次面试总结/index.html","0232a6020a57f2276d9b39ea65f55ac3"],["/2019/10/07/django之url规则/index.html","a99b8b9d577dd08c36d5c2909bc6c657"],["/2019/10/07/django配置初启/index.html","49a5b331d707ee0ca870db07b08782c5"],["/2019/10/13/C语言笔记1/index.html","8485091962107b5c57b59b381928ce8d"],["/2019/10/13/C语言笔记2/index.html","528e275c0e4ddbc598d6262e2d8052c1"],["/2019/10/19/C语言打包技艺/index.html","70069f37339cbbf64c4ecaae18f6fae3"],["/2019/10/22/c语言笔记3/index.html","c138a27a39a1eed997279164a2db8e72"],["/2019/10/27/IP代理池/index.html","bf6f88684c3e690254221996d7b31532"],["/2019/10/28/git命令/index.html","b6e7e124ba46699560da65d8f8e228f6"],["/2019/10/31/斗鱼弹幕抓取/index.html","a30f19fe9f1e2a566c7d60e4b804c266"],["/2019/11/13/多线程/index.html","fa2835afe8358c54236420643e7e6b57"],["/2019/11/14/多进程/index.html","34f19c3f6f8b1ab202f88547cb551bd6"],["/2019/11/15/python类的私有属性和私有方法/index.html","0f924b430927a03e77ac19fe6dfc486b"],["/2019/11/16/协程/index.html","860b19ec287f126a6c8544dbaab5bdc6"],["/2019/11/16/进程,线程,协程对比/index.html","36ae9f717838837f1df3bb973f6c8a00"],["/2019/11/17/GIL锁/index.html","b26eb6f394c6da05451bdade280ee177"],["/2019/11/17/闭包和装饰器/index.html","e3a71d285d7c19f912e2ed0bb705ca40"],["/2019/11/19/Python进阶知识点/index.html","592fb085cc3ae0d39d76b961b213c96c"],["/2019/11/22/京东全网爬虫/index.html","ccadf58a4e27574f2afd7778b3584d1a"],["/2019/11/23/JavaScript的简介和基本知识/index.html","43630d6ad0b49b52a9052edaa6762253"],["/2019/12/04/README/index.html","aa7849069623ac5925986400d5b2a246"],["/2019/12/04/java简介/index.html","2a7dd37b74cd7abb597f4a0715370e2f"],["/2019/12/11/java基本知识/index.html","58e34f352a6bda220d497bc6d0633fae"],["/2019/12/17/Java面向对象/index.html","94a799478dfd0dc9ed51337c7305e217"],["/2019/12/19/面试总结/index.html","65f90cbbf949df5e42c7967d974a1577"],["/2019/12/20/SQL性能调优/index.html","d4c5ea1243ed72c359f668bfd98e0e78"],["/about/index.html","f57222fb6e22e9533b0e9f801ff038a0"],["/archives/2019/06/index.html","09467d178acf24520c76c12f81bdfd0c"],["/archives/2019/07/index.html","74820bc77ee972796a9c0e6aa9639de0"],["/archives/2019/08/index.html","94274f98feb2f9cb0afc72b3bd69ec7f"],["/archives/2019/09/index.html","70341e9f303c14e22e26c10839d3f034"],["/archives/2019/10/index.html","789f8990f3d2a77c815f00d58238b82f"],["/archives/2019/11/index.html","77396bf6768a9cb19cc83787cd9342c4"],["/archives/2019/12/index.html","a0294a236a9714fc444587a7e94cd15c"],["/archives/2019/index.html","4fcb2cd96ba194ddbf27752309f8cc65"],["/archives/2019/page/2/index.html","fdaf31e18bc0a7df5fe426d915841551"],["/archives/2019/page/3/index.html","9748f4258f896c08244d9de6022fce98"],["/archives/2019/page/4/index.html","ab2b95c039b2908f19da7b1264c82c78"],["/archives/index.html","dcfafa17ef3010f12f5c7d9ed69bacad"],["/archives/page/2/index.html","d36bbe2a53c68b3b4a1718178860c718"],["/archives/page/3/index.html","ffaf1688e2c8f61cf3ae6d2b5cc2840e"],["/archives/page/4/index.html","762145c0b4641bc6323b64e412cc10fc"],["/categories/C语言编程知识/index.html","79d8a8a71c929cbbb9266528157b3a98"],["/categories/Hadoop/index.html","5a66beb67e9198430f69b8e9bd3a8d44"],["/categories/JavaScript/index.html","becd8b46fd3e31c919e4381417dc48ea"],["/categories/Java学习/index.html","f8d1a679d277624a0526b11308736bea"],["/categories/Linux/index.html","28793d294b1abd8c29f0a7131bea42a0"],["/categories/Linux/常用命令/index.html","fe4edb98982eeb013950eeabde863d39"],["/categories/SQL知识/index.html","fce7ea788fab83a197d19c499a8a09a4"],["/categories/git/index.html","d71b1c1eb07de6b5d51d8c775842fa9f"],["/categories/index.html","6e66945c18dee761310b4c3beff56d1b"],["/categories/python数据挖掘/index.html","bfde09812fbecb28769db1576d706ba4"],["/categories/python爬虫/index.html","d134a06a0b46c6dba2bd132a8a4fee35"],["/categories/python的web框架/index.html","97099ed775dff2c2ff49a5d320418a66"],["/categories/python编程/index.html","8ce0c55fffbfd1bac9e36ca5cde2c381"],["/categories/python编程/page/2/index.html","81d88905aac9abceef8a688f92d62f80"],["/categories/个人随感/index.html","a6c80c4466b1b1ff2a2779babcdcc1e2"],["/categories/数据可视化/index.html","0bb51bc8ebfdcf1d92ef2ef51d079c51"],["/categories/正则表达式/index.html","8bbffcce572663e1117103c3a3ad809f"],["/categories/算法/index.html","f7ef6320ac3fb4129f51cf980dfda083"],["/categories/算法/五大经典排序/index.html","98ced9db1b9310fc5b0bd6d1040d3376"],["/categories/统计学和概率论/index.html","93c2d50b9218d68c9fce47066cac5549"],["/categories/网站知识/index.html","7c56159d3e7cf68e62f273ab9e41fb72"],["/categories/计算机组成原理/index.html","4927c92540ce141493ac5de7ba10d24e"],["/categories/面试经历/index.html","ef1b109a234f1c2dc0be90ebf4b1ef22"],["/css/main.css","c5b36726055b0aaa944d8f8d7bf7c1d4"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","e9623e0fc2961cc5f986ca02f47bc177"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","56f1ff5fc39b7e84b22bac07e86da863"],["/page/3/index.html","876fb3ce8fe8475b7b341ebf994a1cca"],["/page/4/index.html","1ef592610cee0d09b18f6cb131321bb1"],["/sw-register.js","a7bb8c216d85da2c03d7955baefb0514"],["/tags/Django/index.html","07df030d35d172a99d472a485e2f39f5"],["/tags/GIL锁/index.html","e37767deeafffb09cc6201b85163c842"],["/tags/Hadoop介绍/index.html","07791bf15bdadda9021303f99136c3c4"],["/tags/Java基本知识点/index.html","2b04eaa5806d06fbad8b772abb8981c7"],["/tags/SQL调优/index.html","9eebdb8b48a0d705b9efefc231da3320"],["/tags/Void-知识点/index.html","49a622d08398ef6ae10ec47530db2a9e"],["/tags/git命令/index.html","0662014f8168c7a2a5003d381948fa2c"],["/tags/index.html","a6b5aa30fd0f8613372a911f250e856a"],["/tags/js知识/index.html","7d35ee6adff6ed1330cf5ebbafea0a7e"],["/tags/linux命令/index.html","b019c92919c94f6b9d10e7b69b38e40c"],["/tags/pandas函数/index.html","84bc7b6af4936007f897e8e8f6e65241"],["/tags/python编译器/index.html","06ef60b15cf6871581535cc0e2ccfd57"],["/tags/scrapy框架/index.html","e5dc632b6d7fdd5f3ac35a774f20d6e7"],["/tags/协程知识/index.html","83ecd394c0699e831cd2fa677a56f4ef"],["/tags/基本知识点/index.html","8e88853190021cf577d997dcccf61bfe"],["/tags/扩展知识/index.html","5df7fc5199008b590f365a7675a953e7"],["/tags/排序算法/index.html","906aaae004797ff1b7a71060688c0ae0"],["/tags/数学知识/index.html","371aa35714f5a5a519c1cf652d599104"],["/tags/数据可视化概念/index.html","9a7b1d07300d762990a3bbfdcd95133d"],["/tags/正则/index.html","a1f3d79afa73cc55a8d1a2c68b608989"],["/tags/爬虫实践/index.html","c4a0d590fd33d6faa58a369cbe70a06c"],["/tags/线程概念/index.html","72f0c6261f826ad74bd50304ae0cbc40"],["/tags/网站的基本概念/index.html","afff0a7c958e4d2acd463a0572084703"],["/tags/网络编程/index.html","5c479354abd1732929ae19c1f24bd356"],["/tags/装饰器/index.html","8062f45ee0a2b653e17ee6591156abd9"],["/tags/计算机知识/index.html","a9ecbf099d7d2670bdfcc9ac4cabd90a"],["/tags/语音识别/index.html","e72d08a39085994eadae279cff9d527f"],["/tags/进程-线程-协程总结/index.html","a14447dc31647f3115928440332dab08"],["/tags/进程概念/index.html","9eb8090206d6f82a1ab161e41decf5fc"],["/tags/进阶知识点/index.html","2a43fd4725d6dd8b06ad49b73a16cdd1"],["/tags/面向对象编程/index.html","3d51e56c1fe5f0dcb8d483a64d3e22d2"],["/tags/面试总结/index.html","e0cadf2a2c33e1c92d182e234eb22268"]];
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

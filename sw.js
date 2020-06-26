/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","1c9b4883c7c020ca208737bac6308ef3"],["/2019/06/26/python解释器介绍/index.html","ff91f2ba819a67724e17af735551d5ec"],["/2019/06/26/正则表达式/index.html","63bb84712e9a1b51bdec245eb79d3798"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","6304c6adb225072797b3641169e1cb07"],["/2019/07/06/网站概念/index.html","a2e8817f23f06809f80ffc5888b98b8c"],["/2019/07/11/数据可视化笔记/index.html","06e7d6c1f88df916776a73b38372d470"],["/2019/07/12/语音识别/index.html","d5242249daeb5dbadb615ffbd1f37e9a"],["/2019/07/14/hadoop基本概念介绍/index.html","e7d7dae342bab5fbe6e5bb31718cc1bc"],["/2019/07/14/数据科学笔记/index.html","50f5289c830c0ac52b8dcb1c95b46d3c"],["/2019/07/22/python爬虫/index.html","aab052bf6e5b148b60e0843f59201aac"],["/2019/08/25/pandas函数/index.html","ab0f15d9a4f8a686186e95c7eb27c757"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","cd4a88fcf13052a246de273a27297f4b"],["/2019/09/30/C 语言中 void 详解及应用/index.html","56fc9a5f81f32a76a83e8d758ce9d966"],["/2019/09/30/第一次面试总结/index.html","ff746e9986214c2aa0097c9334065a6f"],["/2019/10/07/django之url规则/index.html","3942dd759cbf0b0f5aa127151d61a36e"],["/2019/10/07/django配置初启/index.html","92bf6de0938b9c669eb0a6d69445c950"],["/2019/10/13/C语言笔记1/index.html","66147c5085501b13dd973d3f949e605e"],["/2019/10/13/C语言笔记2/index.html","808b6227014cdda5aa414a6700e195e5"],["/2019/10/19/C语言打包技艺/index.html","8af4faa9a98abe637de0bd33a8776db9"],["/2019/10/22/c语言笔记3/index.html","e056acbd3d4ed3190611591a007bb289"],["/2019/10/27/IP代理池/index.html","3476c222952d2120d66eb2d548ef2156"],["/2019/10/28/git命令/index.html","d9f4ce547c57f0d4e7169400661aa55f"],["/2019/10/31/斗鱼弹幕抓取/index.html","d709b238ac8f617ec3441842c99fa546"],["/2019/11/13/多线程/index.html","9dd39b5045babf410b501305f2489a90"],["/2019/11/14/多进程/index.html","320b2b89f1f5210030a07ad5ed65ce4d"],["/2019/11/15/python类的私有属性和私有方法/index.html","92ba2a77fb29be2a76679a1072dc6921"],["/2019/11/16/协程/index.html","18b442d22f93a7177b70bd44c3784121"],["/2019/11/16/进程,线程,协程对比/index.html","7b29d301066d9aa5e69802428a0b4422"],["/2019/11/17/GIL锁/index.html","0914ba778b87c693073c5cfc8aad9a4a"],["/2019/11/17/闭包和装饰器/index.html","f19e6adb69df8d8c0482ed617578221d"],["/2019/11/19/Python的模块和类/index.html","295564b2ade676222e93fe10bb1f4067"],["/2019/11/22/京东全网爬虫/index.html","8bf677971f6824e236c633ca4991b0bd"],["/2019/11/23/JavaScript的简介和基本知识/index.html","094f4fd24e5507940533e1e047d4ea3f"],["/2019/12/04/README/index.html","07c634d4007c01c79358dd05010b0d59"],["/2019/12/04/java简介/index.html","8ab82384263f60b5deb3708dd7d1deaf"],["/2019/12/11/java基本知识/index.html","bab5031265ac262413fb03913ce4934a"],["/2019/12/17/Java面向对象/index.html","8b91fd017f6e1ae9fd78d50b22eefa8d"],["/2019/12/19/面试总结/index.html","42c77b487b87cbc3fc4ac4cc688b225a"],["/2019/12/20/SQL性能调优/index.html","28d3f8f08ea20f5b0eef5776562f8605"],["/2019/12/26/vue框架介绍/index.html","fb0666e59c7601a89fba88c3e93d9028"],["/2020/01/02/12306自动抢票/index.html","0ae7995c52d2607fddafc6147c9fb3d0"],["/2020/02/24/flask框架/index.html","0dab4e5fea6573b72e396551767d4e3b"],["/2020/02/28/docker以及相关概念介绍/index.html","221e9a9090a7e4425b29fd775a9d11c4"],["/2020/04/05/python数据类型的底层实现/index.html","24c27f04ee679ff4765b372c2d9a9d70"],["/2020/04/27/查看mysql连接情况/index.html","f341a34a65eb5755ee4895bd49fb5996"],["/2020/05/02/Linux操作系统核心知识/index.html","169fa9be9af5dee57792d2eac217b73a"],["/2020/05/02/计算机网络/index.html","443126fa8a4c9dc6d13a84321c46051c"],["/2020/05/06/Linux操作系统（二）/index.html","aa923f08778826d28f86e83531aa6765"],["/2020/05/14/python函数补充/index.html","807717db63f695ca4ce7b575c1df9ae3"],["/2020/05/21/python核心模块的介绍/index.html","62072b62e3b5b72c910b275e16d6190f"],["/2020/05/21/python高阶函数的定义/index.html","a753a179da319e0d632b660600daca35"],["/2020/05/23/Django后端演化/index.html","3d7897526630d0c7f06db884195d43fc"],["/2020/05/29/Mysql数据库函数/index.html","8b941056485492515ca33f552e6215d1"],["/2020/05/29/Python面向对象/index.html","8492c28732bff3a8d5f0d69c90e4b68a"],["/2020/06/02/Python 中的上下文管理器/index.html","1b51eb9df2592e0adc1da824f67b13cb"],["/2020/06/02/Python类补充/index.html","210d6827355c3621dfa06c33b6f970a3"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","5716efe624530d817daf17d3a9e03ca0"],["/2020/06/07/MySQL数据库引擎和数据类型/index.html","b023ab690ce665ffcdecd56489fffef0"],["/2020/06/07/索引和事务/index.html","9bee8519a00329f027650efab6caa687"],["/2020/06/14/Django参数和模板/index.html","622ce98ca8574ffe4b6ec238462e5350"],["/2020/06/16/Django的ORM多表操作/index.html","32a2bcc01765cfcec8c71a712fdee69e"],["/2020/06/23/Django 重定向终极指南/index.html","77146ed61d37dea3411a2f7d100f5d9c"],["/2020/06/23/Django的Field详解/index.html","f479d27080590cb2c87c3df653fe0c60"],["/2020/06/26/Django的Cookie和Session/index.html","4db2d50a9a860db72ac7609a8b9c23da"],["/about/index.html","764b468df02e8449d62c866da94d8849"],["/archives/2019/06/index.html","75a717f164fcfc6596017ae1fbc23331"],["/archives/2019/07/index.html","6ed5cfa4a7dfe81297b8219c46887e99"],["/archives/2019/08/index.html","6fd1f21ce0ad6c368db4fa7908823ea3"],["/archives/2019/09/index.html","dbd2d89dbb430a2d1ea37107e46c03d2"],["/archives/2019/10/index.html","9264341cf88a6a81e87aa5fb91a44dca"],["/archives/2019/11/index.html","d9e862e1175d2c90e14aa02c7096d956"],["/archives/2019/12/index.html","e2d0200f54a023c1fe3dc0a6a4000c5a"],["/archives/2019/index.html","12bb21f505133414c78f492d1be407fb"],["/archives/2019/page/2/index.html","a0ad155234bd9225238d2e01a15df4a7"],["/archives/2019/page/3/index.html","f57d75b78253c1af318790a38778b9e0"],["/archives/2019/page/4/index.html","94768cb782d7106961c469c351d12a51"],["/archives/2020/01/index.html","5435d6699f835c7d95c1966f82b1caa2"],["/archives/2020/02/index.html","b543f7b7eabb118d5dc7ab938ed8dbcb"],["/archives/2020/04/index.html","66acdaa4dc0c79a64b2aad29adb0deec"],["/archives/2020/05/index.html","1bf4f3ff6a032c139777df269b4d63c8"],["/archives/2020/06/index.html","7a829e659ca8eaec7e7bbefc54280a0f"],["/archives/2020/index.html","eccd9ae050322e817863460cab037f4a"],["/archives/2020/page/2/index.html","3b56ac522dd09fbe4a48b9004e5cc402"],["/archives/2020/page/3/index.html","1800fd348f5f78c69fb4b541daf0c8f9"],["/archives/index.html","bca61e8921690491674c0d9e262805fc"],["/archives/page/2/index.html","6d686e78ee6426d1258dc29df6351f52"],["/archives/page/3/index.html","d9e6a8f1e1056b2051d4e8f60eac2914"],["/archives/page/4/index.html","2071ebc35c0c4d348139d27b84b69ebd"],["/archives/page/5/index.html","46f56c7a5707de5dde1bf46c0154069d"],["/archives/page/6/index.html","e3b5c076c8c7ecd1c1d5f5152b4dfd86"],["/archives/page/7/index.html","299508ccad29e62c1a9cf40c63da165c"],["/categories/C语言编程知识/index.html","495e5484dc762f02a8f191a6b3f220ca"],["/categories/Hadoop/index.html","77536813131cc6753d62fff74e79bc7e"],["/categories/Http知识/index.html","100a843b690e9d8b9c124f8bc2c04ff5"],["/categories/JavaScript/index.html","4ae09e8e36ad133a387731b8795946b2"],["/categories/Java学习/index.html","8f3e2b802c0b5a25eb11330244e9fdcd"],["/categories/Linux/index.html","c7310c412fc7b1113d93fae8a0d078f3"],["/categories/Linux/常用命令/index.html","76efdc735444e6ec8300b7d197a5d8f8"],["/categories/Linux/核心知识/index.html","b3e431b3372d045faf663f17064f0848"],["/categories/SQL知识/index.html","44122e0bc1846d05446060936e4cc75d"],["/categories/docker/index.html","0d0e6beefb313a7976824ea88bd4a674"],["/categories/git/index.html","5356b0117f93ff11b32faf0bbacd2990"],["/categories/index.html","80d871fc0bb1508737753422d4a831bd"],["/categories/python后端架构/index.html","0e2605b667b11e4d45db9bf2f922b4ae"],["/categories/python数据挖掘/index.html","f1d8832cdfcd853ffd32a1a156ea27d5"],["/categories/python爬虫/index.html","856265a4e35dee0bba1d028061e48d31"],["/categories/python的web框架/index.html","f0a2e0d66d0264979bf1dd90e65c4cc5"],["/categories/python编程/index.html","f87d52024c34378680fd24e82151979e"],["/categories/python编程/page/2/index.html","cd084b5dda2716b9ff92140a7379947c"],["/categories/python进阶/index.html","c492d736241cbcfa0ecf16ff01c23401"],["/categories/selenium知识/index.html","fdf7c8ea32ce082ef7ee0b09ed482492"],["/categories/个人随感/index.html","9c6409a9db9a759bf6acc59035c012b6"],["/categories/前端学习/index.html","e5a441c289a97a22b2b51e952fe34796"],["/categories/数据可视化/index.html","af0e5c0176ce3b94d9f79cfe5dbd8103"],["/categories/正则表达式/index.html","28b94daa3c33ab50e4e4f7d82cb5e43a"],["/categories/算法/index.html","7a7ca6c2b7be90152dde8bf29f7ce9eb"],["/categories/算法/五大经典排序/index.html","afa425bd7315a9f778b1b55975144c6f"],["/categories/统计学和概率论/index.html","c6ef853f3873add9bdff6beed9da0d9d"],["/categories/网站知识/index.html","28b5c98404bedb119c1088ffdd2a76c1"],["/categories/计算机组成原理/index.html","dc894018e204103ea89e1b2c16dd0529"],["/categories/计算机网络/OSI七层协议/index.html","256ca3d3b8184bbd965fe1e5e31eeec0"],["/categories/计算机网络/index.html","f527a8c85588097ded4934071da5d7a6"],["/categories/面试经历/index.html","be4410aaf67b5dce5662f7e26d9e4aea"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","ae1963027fc83c5d4ad70e539511a63e"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","42422a2645cdc2e0ee8b97f1a46fb76f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c4bb1eadf37f06e7fcdb8c60421842d8"],["/page/3/index.html","2be48b8ce8090221934180c5a8d68d47"],["/page/4/index.html","fe49585c760474d1e74af01f3915ce99"],["/page/5/index.html","eb980d6b414a1b0369731975c42a8efe"],["/page/6/index.html","c88da24abe16f581f47f0b833f4610ee"],["/page/7/index.html","5cb712d2c475ef605ca0fed94d4fe130"],["/sw-register.js","c51a29360211acd2233aca8a75ebb774"],["/tags/Cookie和Session/index.html","b6bc4c1011257d76ec9b7243dec4739e"],["/tags/Django/index.html","0d4c04f6465b543ac5964da82974f053"],["/tags/Django重定向原文/index.html","fe91afb21470e56babbc2aeb53013158"],["/tags/GIL锁/index.html","1206a3782fcda1b40a106df5a126ecfb"],["/tags/Hadoop介绍/index.html","7a44ce3e6c4f0e7d9db28a9e1966f7df"],["/tags/Java基本知识点/index.html","f7954a87c38e25cad3abfa132f3461b6"],["/tags/LinuxLiunx命令/index.html","ac6c0dbc26f9c8356828a2850dac4b57"],["/tags/Linux知识/index.html","575fe53029c3aabdc74a15062543752d"],["/tags/ORM/index.html","270ad36a84e762f8498dc3028dc7945c"],["/tags/SQL函数/index.html","c50f930451d1c9e6a0bcb056dabe06c1"],["/tags/SQL命令/index.html","a932719d555845a0ee4435d005541381"],["/tags/SQL概念/index.html","105dfc441bb8a385f00bc92174a5d114"],["/tags/SQL调优/index.html","8b785febb2b715cc46af7e6ad5691836"],["/tags/Void-知识点/index.html","c9985619efc38e589b599fb1a55b4cbf"],["/tags/Vue框架/index.html","e2b5fdf163906259dfe4560230cdc8c9"],["/tags/docker知识/index.html","1418b4bb0eed452b04ab9a095dd3bcc4"],["/tags/flask/index.html","6d03e84b518429e7b41712279c3baecd"],["/tags/git命令/index.html","c697ec818fc801a77a9065498bdadab0"],["/tags/git配置/index.html","9cf17b95e452d6a12e0da4200ba5a860"],["/tags/index.html","04389ca5620f40782cd62209ffe493ff"],["/tags/js知识/index.html","febf05e954e03e7fca9608724a0dec20"],["/tags/pandas函数/index.html","dd9efb069261a61f706ca35e0a0f01ba"],["/tags/python编译器/index.html","7a88c31becb6a72f75122778ebaf8337"],["/tags/scrapy框架/index.html","544db8998da54f2be426999e225b1274"],["/tags/selenium/index.html","3a3265c1856ddf6e83dac9990a32445d"],["/tags/上下文管理器/index.html","06d935871db9e27a674fcce012f19f0f"],["/tags/函数补充/index.html","5123f457ac90969083c5f1399cbf66af"],["/tags/协程知识/index.html","1bd19bf5486093174c0c3bece50ae9a7"],["/tags/基本知识点/index.html","f0e6f0edc71a1ccee57c6618c4cc452a"],["/tags/底层原理/index.html","fc4a2a79c20cff85057bddef6bd99494"],["/tags/扩展知识/index.html","4cfb1235c3a98d4c37a5bf3f42bc9e97"],["/tags/排序算法/index.html","6b1951b7444b81a49ef6bad03328f5f7"],["/tags/数学知识/index.html","340a6cf423eaad7662aebafbfda6f797"],["/tags/数据可视化概念/index.html","267feb2103a468f1bbc61ad3f0b47d33"],["/tags/架构演进/index.html","d2281c50e9cd0e1feaf63700168bda0e"],["/tags/核心模块/index.html","2a7bb3a7a600b672c16cd878d0ed6b0b"],["/tags/正则/index.html","182bf91d083ff41499f6216848710a2f"],["/tags/爬虫实践/index.html","ad91d4e6044b5f5748d88a18d7dcaee9"],["/tags/类和模块/index.html","0a1d92b71b2c52290dacb5ec127db818"],["/tags/类的知识/index.html","42c3f92dca9b78ffc100fdfe0c9b75ce"],["/tags/线程概念/index.html","8d9306caddb4794d9c019b1cb7523a05"],["/tags/网站的基本概念/index.html","59a2a051d7b8d001942e51dc43705244"],["/tags/网络编程/index.html","a6f8fd21083480837f2aea14f43057d6"],["/tags/装饰器/index.html","39541f4b1f86881e2a4bd819f5d299ad"],["/tags/计算机知识/index.html","b8ba7e5882ecce66c819d86a08cf17f8"],["/tags/计算机网络知识/index.html","2d5c95246d998881b0e2a2db8ad0adda"],["/tags/语音识别/index.html","3c49e5432c2a5ab0edcaf76e170dd16f"],["/tags/进程-线程-协程总结/index.html","75b71bf36b4bb9a9db1ffb08a642dacc"],["/tags/进程概念/index.html","9e1e946b81849baa2fbd1f1bd24b33d6"],["/tags/面向对象编程/index.html","84ed44247f33ce61948303745139191c"],["/tags/面试总结/index.html","e2b61a56472f18f1fc714e23d6608ad6"]];
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

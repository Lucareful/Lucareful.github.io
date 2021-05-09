/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","2f473fca9607a1353bbd91bade27f511"],["/2020/12/06/C 语言中 void 详解及应用/index.html","79276f23f90eb4431804aa8cac7376f0"],["/2020/12/06/C语言打包技艺/index.html","c44b04bfb201d54a5272ea6b10a59b81"],["/2020/12/06/C语言笔记1/index.html","6e5c2f21205bb6bfbc094a3e78e00bf6"],["/2020/12/06/C语言笔记2/index.html","be37a9c5b1f0c8a2337a87b21167f5cd"],["/2020/12/06/Django 重定向终极指南/index.html","2e2b2509dc9fa0f4580421da95f89a42"],["/2020/12/06/Django参数和模板/index.html","5b84ebbcfa08fb7c92c8b84e6afaa8c2"],["/2020/12/06/Django后端演化/index.html","401de140889ee04bf40b27be137486c3"],["/2020/12/06/Django的Cookie和Session/index.html","84769806e6418bc400bd15533271338e"],["/2020/12/06/Django的Field详解/index.html","5895f33d5c014698da720147cba5e252"],["/2020/12/06/Django的ORM多表操作/index.html","e2e7d23f75711db0dc60b6ae4b86d0f2"],["/2020/12/06/GIL锁/index.html","de1ea2b016a03b0cc52586a7b17dd1ce"],["/2020/12/06/IP代理池/index.html","e750fc1ed84883b01416249fd3c2b38e"],["/2020/12/06/JavaScript的简介和基本知识/index.html","e7091c376b6d5f107b21969e2d3052cf"],["/2020/12/06/Java面向对象/index.html","903d95a730415abbf958a3386f876df7"],["/2020/12/06/Linux常用命令/index.html","7f42e76ae9ed199df6ec63c2fe6747c7"],["/2020/12/06/Linux操作系统核心知识/index.html","5c7a1220613830d056fe371bcb6bfe44"],["/2020/12/06/Linux操作系统（二）/index.html","a62ff22676595ca99365b325c9a3ba0a"],["/2020/12/06/MQ笔记/index.html","02838f9f8777331dc73e16a78c147657"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","eebec62a85fb6ff306972d7370ee7e02"],["/2020/12/06/Mysql数据库函数/index.html","be8e504910fa8ab75f8a97cc4f8aad88"],["/2020/12/06/Python 中的上下文管理器/index.html","507dfbeecebfb95e3ddc6afeb14f4a1d"],["/2020/12/06/Python的模块和类/index.html","7d8ed9fab816fa53c09c1394d063278c"],["/2020/12/06/Python类补充/index.html","706ea9bd07862b1494632d7981ab1090"],["/2020/12/06/Python面向对象/index.html","4a781513d60fc39a193d1210eec65124"],["/2020/12/06/README/index.html","6d01e6c6a298b59c2e521738a52ea293"],["/2020/12/06/SQL性能调优/index.html","d783a7b599155e984baba9553279de72"],["/2020/12/06/c语言笔记3/index.html","35e5c8b2f20ceb8ba3ee487abd5e3ca6"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","5b13d12d1d838efcf273a31768386a46"],["/2020/12/06/django之url规则/index.html","6775dcc0cad21ad1e9d4bd367076e8ee"],["/2020/12/06/django的querySet详解/index.html","5ad8fe52ee6d0aa4e60f9b459cf6ab8a"],["/2020/12/06/django配置初启/index.html","688e2a61d6709c9facb89d3b44724eed"],["/2020/12/06/docker以及相关概念介绍/index.html","8f207cea5892f6e057a24638ed922192"],["/2020/12/06/docker信息/index.html","fad4e9052ab42416c8c3572787efbe5f"],["/2020/12/06/docker网络/index.html","a344d764a3e15e4da05509612f9a4c41"],["/2020/12/06/flask框架/index.html","2f8fb2a70b006ae9aba98e8a3eeda7fc"],["/2020/12/06/git命令/index.html","8fa324b385b86291c8778f7fb5bcfe78"],["/2020/12/06/hadoop基本概念介绍/index.html","6967588f08dc00c061202151d9795343"],["/2020/12/06/java基本知识/index.html","5f0c156da3669a287275e067da9a32d5"],["/2020/12/06/java简介/index.html","c85d789400e770f7af64dd0cd8b0a3b5"],["/2020/12/06/pandas函数/index.html","68466fe57fd4cc3cad2124bbed6e3058"],["/2020/12/06/python函数参数传递和返回值探究/index.html","f475e0ac9059c58fdf7992381cf46e67"],["/2020/12/06/python函数补充/index.html","2ae10e82085160c5259056c54b8ba421"],["/2020/12/06/python数据类型的底层实现/index.html","5380c8694eb09f380ee7ac80a10e908b"],["/2020/12/06/python核心模块的介绍/index.html","32676bd7e25a395204d9dad50bf8df23"],["/2020/12/06/python爬虫/index.html","8ff5d7e614e8607678c644b350ac6aa6"],["/2020/12/06/python类的私有属性和私有方法/index.html","c28ccc2c4274091c7ddc06d7b2e4fb06"],["/2020/12/06/python解释器介绍/index.html","c61b09c9d8359350be37c7e4e45fa63d"],["/2020/12/06/python高阶函数的定义/index.html","73c2b654cd13c02ba551a683d8655f8b"],["/2020/12/06/vue框架介绍/index.html","64355aa4b9dbeeef9d44468427f35dbe"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","438cda8ff8777e2fdecaea11db66dcb9"],["/2020/12/06/京东全网爬虫/index.html","14d997becf7ed6402d462f80b33f0e79"],["/2020/12/06/协程/index.html","c57122a3649d5d94c518f6f5ab989794"],["/2020/12/06/多线程/index.html","f3dbc872e990f4cde289e821af4fd6df"],["/2020/12/06/多进程/index.html","59d36e3b9bc60f4d743ce2fbe420d382"],["/2020/12/06/数据可视化笔记/index.html","6c4b85cca2ae779dcde2d68d392f9513"],["/2020/12/06/数据科学笔记/index.html","c887c50e2e1823fa606096db3ca5d89b"],["/2020/12/06/斗鱼弹幕抓取/index.html","d3c0172b85b03a55e69d3754f0832aad"],["/2020/12/06/查看mysql连接情况/index.html","b4f83edde8d22fb9d19bd84fa4fe8ee2"],["/2020/12/06/正则表达式/index.html","7c3791b9e3fa966b6769c0036ee97530"],["/2020/12/06/第一次面试总结/index.html","d55e493d87d631a5250d95361a02031c"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","b7ea8e0817b18f83eddb9fee34f86322"],["/2020/12/06/索引和事务/index.html","46b182c437e463595fe7520e8555153f"],["/2020/12/06/网站概念/index.html","025dc80b685f9fa9fc45410925f33326"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","3a85f950279ae71286e4dcc5f45a4753"],["/2020/12/06/计算机网络/index.html","c2176a44a4c18796d35fcd3d5797f590"],["/2020/12/06/设计模式简介/index.html","538c91048f13daf83bcf3cbac6edf869"],["/2020/12/06/语音识别/index.html","e3ec51d75ad9d76f8f00356afe92410b"],["/2020/12/06/轮询、长轮询、websocket/index.html","ae2594a3ab5d9d28e768d1ec1d41d6c8"],["/2020/12/06/进程,线程,协程对比/index.html","3b2507379e6d6485cf78cad50f44761e"],["/2020/12/06/闭包和装饰器/index.html","74e707e0274c646cfde784ac0e3ed19a"],["/2020/12/06/面试总结/index.html","95180b671747a6f92f874edc15a917a4"],["/2020/12/13/鸭子类型/index.html","6c9b9780dab249f63cce44ca97af0506"],["/2021/01/03/工厂模式/index.html","b6bc34aebcceaa50e49cef8511ae9f00"],["/2021/01/17/RESTful风格介绍/index.html","dc6f796d0182ad1f849e1ab3c2181ff7"],["/2021/01/23/关于跨域和同源/index.html","6a665a769b9b9c8c0ad4cfb894c56aa4"],["/2021/01/30/django的信号量/index.html","67e055bdd0bd8860f22bd83bfc64dd37"],["/2021/02/16/创建型模式/index.html","ee3554e7c442b2eef91789c424b7b315"],["/2021/02/17/asyncio之协程/index.html","2a9f47c8b1ccdee525bf2137992d8cb2"],["/2021/02/25/结构型模式/index.html","3bce1719a68c07bc4bf582439a277f1b"],["/2021/02/25/行为型模式/index.html","a248e5d1fc9696c29a186da7caba695b"],["/2021/04/24/python元类/index.html","fdb1af44df447c98830622ac872d0f11"],["/2021/05/05/go基础入门一/index.html","1e00e61f5afac849cd7676c66dccf9d7"],["/about/index.html","34ae775859228205b1afdc89f99ffcd5"],["/archives/2020/12/index.html","cf3f6afe1598716d2330744071d32650"],["/archives/2020/12/page/2/index.html","de0c06cd157026c736f063156113476c"],["/archives/2020/12/page/3/index.html","55304e2d5d81bcd0924ade2d71504044"],["/archives/2020/12/page/4/index.html","6671196f1b3520bd53f8a826b3d03776"],["/archives/2020/12/page/5/index.html","d43c97f34ec0ecbb14a85e2c51e73112"],["/archives/2020/12/page/6/index.html","05427aa8148168e8e2e4d465d576c250"],["/archives/2020/12/page/7/index.html","a83eb64284c2c098cb74a8278ac915c0"],["/archives/2020/12/page/8/index.html","306be0b020174a8be987454808aa8de5"],["/archives/2020/index.html","3bd3c9c17c46a50a3f7a69bf3d16995b"],["/archives/2020/page/2/index.html","4f0a4c311eb4941ef5025944038cf1fe"],["/archives/2020/page/3/index.html","467d4ecc776fb853c2c27670cdd6a909"],["/archives/2020/page/4/index.html","6a1577da42c93216336393083fdb9fa5"],["/archives/2020/page/5/index.html","79d733887211bc3025e5a1e8fa3690b9"],["/archives/2020/page/6/index.html","8cffc6b478537b25f23bf3d5420e9e51"],["/archives/2020/page/7/index.html","36ad5382f52e253cb10703cb3a0053e4"],["/archives/2020/page/8/index.html","1ea55a84d82f33c85fd013540f2b3907"],["/archives/2021/01/index.html","1f6aad359bc77c71e3a17895ffac8103"],["/archives/2021/02/index.html","4a95692b9f9e6b2fcaeb37534772268f"],["/archives/2021/04/index.html","3a0d87c858b080c55b4bb53b62e6d044"],["/archives/2021/05/index.html","31aec145b010bfb1c9175b858a8575f4"],["/archives/2021/index.html","60beb8b1a6b6bde192b2ac714ce08976"],["/archives/index.html","38dd21c4011e37297f8bf47172991c3f"],["/archives/page/2/index.html","2d6c571b4b05c55c1826d04eacc9bdd5"],["/archives/page/3/index.html","41805947f4692b10c6bb45c738cd0349"],["/archives/page/4/index.html","59acea558d99f45d33b28e3b4b15d083"],["/archives/page/5/index.html","4100f04d801eda73b07aef22db61955f"],["/archives/page/6/index.html","abb8f91c82afc38607c756f27de239b7"],["/archives/page/7/index.html","e378be03a325a563bf3df4e703504576"],["/archives/page/8/index.html","d3bd882a5153135cbf845073bd8c07ed"],["/archives/page/9/index.html","1bef9aa211e14d855965536caa5a17c9"],["/categories/C语言编程知识/index.html","6d8f56c76e3082b90a6024548434cff9"],["/categories/Django框架/index.html","14ef8a5d1d4714370c0ca72b94f5cd50"],["/categories/Hadoop/index.html","06e78a30ebe3a81a0ce16000df52e210"],["/categories/Http知识/index.html","fdcbaa02f01e996d8d8e06bbc29491b2"],["/categories/JavaScript/index.html","37d081bd8d243e33bc78c78b10d055e1"],["/categories/Java学习/index.html","871b3ea3bbfc3cf266e5e90e2a893415"],["/categories/Linux/index.html","c9a8dd207d9ef82409cc362129ca58b8"],["/categories/Linux/常用命令/index.html","801db8810d9e4c1d35582cfada35928c"],["/categories/Linux/核心知识/index.html","93fd74d3477968bd1af1209851d3bf18"],["/categories/SQL知识/index.html","5b918382af042d834c3fc12be9337201"],["/categories/docker/index.html","2590f1bb0e9757b19b7bbb0b25f65a52"],["/categories/git/index.html","4e1997417fec7de635f9b60c03069340"],["/categories/index.html","ff82ae006c1018dae4fc7cdcc9347e62"],["/categories/metaclass/index.html","c6c7c1485f2b4eee541ad20eb966184d"],["/categories/python后端架构/index.html","f4ec5aa3b8151cf9ffcc01ee84c399a5"],["/categories/python数据挖掘/index.html","205a352581b26758c63a1e5239e73bd5"],["/categories/python爬虫/index.html","8c9f6549e4fbc6ffe6f2f4289b3b2731"],["/categories/python的web框架/index.html","2f16d10a197a5a6f32845e00db334343"],["/categories/python编程/index.html","4f0e4a54453de42fb365f91eefc481ce"],["/categories/python编程/page/2/index.html","0b67ab0f745bb0f0afefbc255d5342e5"],["/categories/python进阶/index.html","5b1e2a640675ff1008a5a31ec6a124c7"],["/categories/selenium知识/index.html","1c04f4f6ce3a0e803c945bb4e2797d74"],["/categories/个人随感/index.html","4fe02dd909fa6f327a49a6c427f17c4c"],["/categories/前端学习/index.html","731d410e76d3cedf7f0a4d45ecf8a4d2"],["/categories/后端接口风格/index.html","d081aaa52e4218c530139a57031ebd6d"],["/categories/数据可视化/index.html","3e80203e701878587471fa51718dd5eb"],["/categories/正则表达式/index.html","6c39b88bfd25403456e57c57e9110b67"],["/categories/消息队列/index.html","75d21307a650a055b1c64ece89898a12"],["/categories/算法/index.html","9d2e9c80161bd21a11c52f4b55b1e7bb"],["/categories/算法/五大经典排序/index.html","ecb33f0a106169ccbcb2d5169c05bd6f"],["/categories/统计学和概率论/index.html","965f466b857b97efceeaeec857644c37"],["/categories/编程语言/index.html","4428b6ec97f59143240dcdce2fedf551"],["/categories/网站知识/index.html","7a0a013b27d523a9efdd384b07af82b3"],["/categories/计算机组成原理/index.html","5464c2d9ef774e66882e4e2b3c1d8eb0"],["/categories/计算机网络/OSI七层协议/index.html","556f131364d377d792c192f21095f49b"],["/categories/计算机网络/index.html","bfdf1d2fcc4edf87ca0515e549f3c0d8"],["/categories/软件工程/index.html","f49182291b557a3be226c759fc235fa2"],["/categories/面试经历/index.html","0cd571dc8119f2110fd0eaa78f531594"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","b55afd65d068290101909d24569448d8"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","a0fc751d7750417829ab97a686a74fcc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6bb511b78956e97b286c051f6f6eee59"],["/page/3/index.html","9d90f9a80be7d0c249788bbf08553f28"],["/page/4/index.html","7a26d06a5abaae697ef0c51a31b6529c"],["/page/5/index.html","aaf515a6b3dd4b63ca75af98f9fd8282"],["/page/6/index.html","4ce50480ebefb0b9e354855c476c20ff"],["/page/7/index.html","47af25594139b317c4ca9bb4611f4da0"],["/page/8/index.html","ac5c768f0a9a4fe1a9109f8c6d8eb307"],["/page/9/index.html","68c43475e759237d7434377ff619aee9"],["/sw-register.js","2006ca01c885315c423ae5fdd21dc89c"],["/tags/Cookie和Session/index.html","850a7540c334af4278c2b94ac09756b3"],["/tags/Django/index.html","b36619bf042abfcaaa5425e20771929d"],["/tags/Django部署/index.html","abc131980dfb1fd6981fc040df55168f"],["/tags/Django重定向原文/index.html","ff4545b2aca7024610a28ac7b3d2085f"],["/tags/GIL锁/index.html","81909c845864b1426cd2c91fa5639c48"],["/tags/Golang/index.html","2f1bea789c42b5c8bc8b877efbb40911"],["/tags/Hadoop介绍/index.html","e709b19182c1fa43bf78cc31fe40c9dd"],["/tags/Java基本知识点/index.html","c18bf3764e3da5475b0a4bd15ff1765b"],["/tags/LinuxLiunx命令/index.html","b540b58c170c12ce17b25f65c5ae93a8"],["/tags/Linux知识/index.html","2a6fa580b942b7d3f94944f036f1cbe0"],["/tags/ORM/index.html","7956d4a4b52ae7c3cec59a294de465e5"],["/tags/QuerySet集合/index.html","aa2557c9974dd9cf28026d7b624e4f77"],["/tags/SQL函数/index.html","db842500d9389b9fe27e00ff16a1a507"],["/tags/SQL命令/index.html","7a56e829aec371ade593ffcdcc8bbd53"],["/tags/SQL概念/index.html","da695be39f906da84ec9c9e401f6ed0e"],["/tags/SQL调优/index.html","bf1856c10ca087f494549f0f6e07c77a"],["/tags/Void-知识点/index.html","a2a515a1c57790842ee5030a8973b7b4"],["/tags/Vue框架/index.html","496ad93f9e4e0022e855f077c19e3e78"],["/tags/Web安全/index.html","e1c7cea00a8869cff3e3c8312fa7dab0"],["/tags/docker知识/index.html","3887e55055fa370adcbfdf3f1190cac5"],["/tags/flask/index.html","515c9685261b3beffd4300d70a6339af"],["/tags/git命令/index.html","90fe2436f285156d34d2fdd54de1c105"],["/tags/git配置/index.html","782417fe0dd4c96196afa0b9900e61ec"],["/tags/index.html","300030ada3fda38bb3b9a78b482bcdde"],["/tags/js知识/index.html","938c544609742fad1deb48925685d2fc"],["/tags/pandas函数/index.html","29a87c820b78756b5eb50a14f9f4cc9a"],["/tags/python编译器/index.html","ac561b375cb29d8eeb170f8d78619daf"],["/tags/rabbitMQ/index.html","b0f86d8391374ae4688d8a5ab500ea08"],["/tags/scrapy框架/index.html","fb61991ce8a2e7871786f311a24e82d0"],["/tags/selenium/index.html","508e475f9e1093199abbaea0db757a48"],["/tags/websocket知识/index.html","597280e603c3e1cb43252dc9da2e95e0"],["/tags/上下文管理器/index.html","6c1face94c5ad5e77aeff82186b74978"],["/tags/信号量/index.html","31be4d8d441f8fcfbd629d02e46f2bc6"],["/tags/函数补充/index.html","056633ecf99007c3921a7c15f0f7ef98"],["/tags/协程知识/index.html","46f34956bb679f9b4035730ae9ad5bf2"],["/tags/基本知识点/index.html","a67e8eb33fc88d7d2f0f0fd6ca448c06"],["/tags/对象引用传递/index.html","89062a0101c9f4dd76d5ed6878221d1c"],["/tags/底层原理/index.html","5453662b8e9366f3646242e8526c37ec"],["/tags/扩展知识/index.html","8825b9b987209730744c230a28c8360c"],["/tags/排序算法/index.html","eea6774a876f8bef2e51113869fb8506"],["/tags/接口设计/index.html","cd87cf40748e44c1747ac17649674999"],["/tags/数学知识/index.html","c92ca4e87d1d070fd170ad16e44525c9"],["/tags/数据可视化概念/index.html","6601243c05d369df33bb644c7e6e6ae2"],["/tags/架构演进/index.html","228eb74e2cf776cae5e1f89f81278844"],["/tags/核心模块/index.html","735220d075b5211eba9d6ab00ad608cf"],["/tags/正则/index.html","f70fec775a8d8389bf3dea37bf97b177"],["/tags/爬虫实践/index.html","16910085417a16c5afd38ef272c2dcb0"],["/tags/类和模块/index.html","48797e7fd3aed085c538d123f1ddaa7a"],["/tags/类的知识/index.html","6b624c08128eaf6a29c3992f0f6e01a3"],["/tags/线程概念/index.html","28ee46d89253a3a4846dd45a84abbe30"],["/tags/网站的基本概念/index.html","5b2933cd7fd2ff1953c189703bb19e3a"],["/tags/网络编程/index.html","e48be78e48dc3cf4363c346a5df7cc5d"],["/tags/装饰器/index.html","2f93e73f4725769132f7d670c6165ddd"],["/tags/计算机知识/index.html","6b4a5bf764e8b69de951fa4b5ce4b1c4"],["/tags/计算机网络知识/index.html","ad3ba869b9f8fad78ba4ea02bcc2de67"],["/tags/设计模式/index.html","e0d6c9a62bfbb4eb1c0f340e0abc7b98"],["/tags/语音识别/index.html","18936d10b4a2b4bb148e97b476af8b64"],["/tags/进程-线程-协程总结/index.html","3c39f81205b88e4d4c2dac0035535f4d"],["/tags/进程概念/index.html","2e79fc9fa480c05d1653b0a694650113"],["/tags/面向对象编程/index.html","48abd7436e5e8d1c86a1c609dd6d3092"],["/tags/面试总结/index.html","1ba8a61c4d844f8e1178543d3e503ec6"]];
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

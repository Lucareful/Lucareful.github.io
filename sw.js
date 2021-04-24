/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","10b42895663281b40e674992eed85292"],["/2020/12/06/C 语言中 void 详解及应用/index.html","9260a795d6ef95ecffadc51e6859afed"],["/2020/12/06/C语言打包技艺/index.html","6f26ecb7f606ba00dfe705449b8fa301"],["/2020/12/06/C语言笔记1/index.html","60db7945076948c6983ef51b65b94b26"],["/2020/12/06/C语言笔记2/index.html","07b176c00848c9350ad8e73b600f844b"],["/2020/12/06/Django 重定向终极指南/index.html","d039de314ce68bc265b79b1b41f037e0"],["/2020/12/06/Django参数和模板/index.html","fcbde6126dd802e0b29c95439b29655b"],["/2020/12/06/Django后端演化/index.html","5b26dc3a9c25b72a8ad06212543bfea0"],["/2020/12/06/Django的Cookie和Session/index.html","4a9abbf1022ae49a6acdc89bb059b84c"],["/2020/12/06/Django的Field详解/index.html","ffee6af7077cf70bc91bb3b1dc378a69"],["/2020/12/06/Django的ORM多表操作/index.html","4faa7dcb421f8f95115abf825a437257"],["/2020/12/06/GIL锁/index.html","2102a982fed182535dde36a4c9982c08"],["/2020/12/06/IP代理池/index.html","397c36e0118016e0fbbd315c8742bccf"],["/2020/12/06/JavaScript的简介和基本知识/index.html","886a2bbb36d646a64d4df4166d281d69"],["/2020/12/06/Java面向对象/index.html","7cef0e0cfe261e186fc3d28e1e1e6a69"],["/2020/12/06/Linux常用命令/index.html","0e636973535ef79e3af218797ee2b222"],["/2020/12/06/Linux操作系统核心知识/index.html","aef49bee56a557d257f0d119c432e129"],["/2020/12/06/Linux操作系统（二）/index.html","b2e7055edcdb188c7e48e09b6df93ad8"],["/2020/12/06/MQ笔记/index.html","b00eaf4aa6814d25869b478f49043c63"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","07952e85ed4a4e8365427f90588d5848"],["/2020/12/06/Mysql数据库函数/index.html","bab7b3fd2a2f46cedfff4bf12dd67993"],["/2020/12/06/Python 中的上下文管理器/index.html","04a777a79336b10c79323aeb04e419fc"],["/2020/12/06/Python的模块和类/index.html","9e52b1f4ad0ed767cdda3e4c538e5d0c"],["/2020/12/06/Python类补充/index.html","a19f5ac6abd081c320bbbb137e1baf0b"],["/2020/12/06/Python面向对象/index.html","6b03faa45fbc21c01ad0eed50ce1aa53"],["/2020/12/06/README/index.html","bd896ab1d107d6f2340c20cdf274d6bd"],["/2020/12/06/SQL性能调优/index.html","2d20b1a3901dd8ffdd1d08deadfc0cbc"],["/2020/12/06/c语言笔记3/index.html","8dcbbe97fe3de2b5c8728d06ac7c4144"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","dd2271dfcb8ea74b347262a2f2f7db9e"],["/2020/12/06/django之url规则/index.html","c985806266b54336a73632b914b335e4"],["/2020/12/06/django的querySet详解/index.html","a50c0f1c8a2efd628ccf424bc333b061"],["/2020/12/06/django配置初启/index.html","589b67cb14d941400d9d717a216b4f27"],["/2020/12/06/docker以及相关概念介绍/index.html","076dd1eafad5e5c9c182e4405e5ea08b"],["/2020/12/06/docker信息/index.html","d0653fcf4ce093deaf0e8ab9de9fca7b"],["/2020/12/06/docker网络/index.html","34836b1effee28a57b83634667a71c37"],["/2020/12/06/flask框架/index.html","5c59350533c3cf01c8bacceefcb4a387"],["/2020/12/06/git命令/index.html","66980662d4f412834c1420c724ecd6cf"],["/2020/12/06/hadoop基本概念介绍/index.html","4f16a58aaf39a5dcb8cc37ff7226ea9b"],["/2020/12/06/java基本知识/index.html","16e2f2a6ef6a25de4428411b25b93131"],["/2020/12/06/java简介/index.html","b9203e72f303e57c881cef4951ba8448"],["/2020/12/06/pandas函数/index.html","1742feefc68ec4427f609eca2fc327aa"],["/2020/12/06/python函数参数传递和返回值探究/index.html","e36a74165db1754e4c016211edcf3231"],["/2020/12/06/python函数补充/index.html","f4aea15d4eebbf754e840b09710aa171"],["/2020/12/06/python数据类型的底层实现/index.html","daa1bf5bb0ea337369061aa76f95f0a8"],["/2020/12/06/python核心模块的介绍/index.html","5051a6994d72a5d92a748f10ec4967eb"],["/2020/12/06/python爬虫/index.html","995d50fdd46d109fb1f0c1e809b4e4ba"],["/2020/12/06/python类的私有属性和私有方法/index.html","955f1f85cf3750ad33bed9f6070a8756"],["/2020/12/06/python解释器介绍/index.html","9cf99274b9b147352fb25c0aaf109448"],["/2020/12/06/python高阶函数的定义/index.html","a725b6ab7eb27e1ea1fe3772ae5a8553"],["/2020/12/06/vue框架介绍/index.html","587dbb6d91a6d5eb209ed48854799b1f"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","af1a0659ce917ebd375ff8ce26a20bef"],["/2020/12/06/京东全网爬虫/index.html","486a49ffb17d4a6f665efd45611cdfff"],["/2020/12/06/协程/index.html","cc28c67e0f7cdf6e8f9f6ca940e7451a"],["/2020/12/06/多线程/index.html","b8ab967f20f8e9391a6233bd49f7cc8f"],["/2020/12/06/多进程/index.html","ddde8444e09ce1e921f370d48f56a8a7"],["/2020/12/06/数据可视化笔记/index.html","5bf950ad39057048baf4484df3c10cc5"],["/2020/12/06/数据科学笔记/index.html","adb7363469d57886aaf2d3dde11a9fcc"],["/2020/12/06/斗鱼弹幕抓取/index.html","ca74966c5291745f298fc89159572489"],["/2020/12/06/查看mysql连接情况/index.html","ded541d44d4a5e19af27acc4deb69035"],["/2020/12/06/正则表达式/index.html","f59e679a870624e1d8bd8120194ce285"],["/2020/12/06/第一次面试总结/index.html","eb50338bd8dec97ec4b51102cc0537b0"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","8e62b089e69a2b9c3459bf202cfafdf3"],["/2020/12/06/索引和事务/index.html","04ab89702fa7666185d8c652cc2933c8"],["/2020/12/06/网站概念/index.html","a0520bf1737b4f24999f7573b42bba3f"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","bc1988007f227367f00760b22315a23d"],["/2020/12/06/计算机网络/index.html","48586d7185d9f5e23dc43e2bb28134ea"],["/2020/12/06/设计模式简介/index.html","4ba5e9b92ce61e7ed310b37b6d91ffe2"],["/2020/12/06/语音识别/index.html","9ea2fdc82dec9b522148709fa7072fb7"],["/2020/12/06/轮询、长轮询、websocket/index.html","83e3c75bde465a4c68814ce7d40388d1"],["/2020/12/06/进程,线程,协程对比/index.html","bab134d1f1dae10f6c45ffe7c3ed1a86"],["/2020/12/06/闭包和装饰器/index.html","028232b47443c58727606110134f8ea5"],["/2020/12/06/面试总结/index.html","8498bb927c8afcbfd9c5f567e1ca4f6e"],["/2020/12/13/鸭子类型/index.html","6aef7430f6a73e77d814b869205b9c2f"],["/2021/01/03/工厂模式/index.html","d0fe3ebc451bd761bf3a36f8c47ee6d4"],["/2021/01/17/RESTful风格介绍/index.html","d8f892a029cf146fb1c59eb2a8ba33b8"],["/2021/01/23/关于跨域和同源/index.html","eab91d230286aca1c7394a248184fb56"],["/2021/01/30/django的信号量/index.html","ff098311a5363d532d48e817dfa282bf"],["/2021/02/16/创建型模式/index.html","ceca20bb65cfaf262d700c113d7870cb"],["/2021/02/17/asyncio之协程/index.html","e7cc1982db014cf90535678e95c13eef"],["/2021/02/25/结构型模式/index.html","66f9134e24a11509d7a2c30ef1ee634d"],["/2021/02/25/行为型模式/index.html","6e14fd46e354c0bacf6f9d2c06fe7720"],["/2021/04/24/python元类/index.html","02ff5eef558ebe8279265b1e1eef0836"],["/about/index.html","62bbb30e006ff6a53161fa7f622ca91c"],["/archives/2020/12/index.html","630b996934e50dd21f6b8a260a5796c6"],["/archives/2020/12/page/2/index.html","7af46df49b14886719a24be846d5f30a"],["/archives/2020/12/page/3/index.html","9ed5703ba5a78cf32a240a142d8d972d"],["/archives/2020/12/page/4/index.html","3535ed3787fb4075d0acfb47561194ad"],["/archives/2020/12/page/5/index.html","f5a3a12b5aab71f79194ecbc05768592"],["/archives/2020/12/page/6/index.html","7b100a053064ce8cda5293c5a4f0e4a8"],["/archives/2020/12/page/7/index.html","53791f4e56ca5f08f799f0a6bb37aa06"],["/archives/2020/12/page/8/index.html","7e730d5b02c1c7cba1f95b564275114f"],["/archives/2020/index.html","c764d70741c11ac666d945fe077f5e62"],["/archives/2020/page/2/index.html","b46452a87468b99f3a366f3282e53bd2"],["/archives/2020/page/3/index.html","56149c44057692f1528597f06963b54e"],["/archives/2020/page/4/index.html","a5be284095434aae8ebccbdc2a7f56c0"],["/archives/2020/page/5/index.html","83e344713c2942871aa849b7234af493"],["/archives/2020/page/6/index.html","5bfa5d708d6bba0118cf9861baef9aab"],["/archives/2020/page/7/index.html","4fe6a653de169ac468fb8ed6454aa6a8"],["/archives/2020/page/8/index.html","a9b7d7468775bf805a519fb7c1bcc360"],["/archives/2021/01/index.html","94b541c720e0b15a841de2ccd7a2447b"],["/archives/2021/02/index.html","ada44470f0484fb64bbadad9f8ce3e3b"],["/archives/2021/04/index.html","c7add76bd61c3ecdf32941f9e6dcba44"],["/archives/2021/index.html","fa0bd63fe755fd77df1e84521360d542"],["/archives/index.html","dcf038cdb05c1c6bc6a5c352e6dd6019"],["/archives/page/2/index.html","3cacff1e5b3d0cb9e7f16901d4138c3e"],["/archives/page/3/index.html","bced13f1dd6b1f497a20482c9c843588"],["/archives/page/4/index.html","8072683a1c2e8bcffea4ad4152cc71b7"],["/archives/page/5/index.html","d3c40bb3d339b2c7b047c514cbcda092"],["/archives/page/6/index.html","7bfb5c46cfe6524e9a043f9d5f918a16"],["/archives/page/7/index.html","204f7f065396d7377aa4332e985a4b43"],["/archives/page/8/index.html","6a4b082e502870d91c5514f66b9af55b"],["/archives/page/9/index.html","db95233c1109d37357e4862bf8f92438"],["/categories/C语言编程知识/index.html","fdfbcf4c28f1747d26905e53050fd633"],["/categories/Django框架/index.html","8f46eed6e7afba2bc8a872a296d551c0"],["/categories/Hadoop/index.html","9d71610937b1cdd15dcda5b159f909ed"],["/categories/Http知识/index.html","52def549c93d8fe41625502ae3674f97"],["/categories/JavaScript/index.html","618ed05068e247ecbcb3fadb56011440"],["/categories/Java学习/index.html","b1f82c3b2ebc5c3a0dc46ca7f1253954"],["/categories/Linux/index.html","1bbdba42d4dd85b27832c0c5faeb2c92"],["/categories/Linux/常用命令/index.html","49f0844f755bea7e9761d377eab4930a"],["/categories/Linux/核心知识/index.html","2541d0f9917bcfb1aead51b5ada97cd7"],["/categories/SQL知识/index.html","dca21bba4aefc60111d072ed890b5108"],["/categories/docker/index.html","4f4894b67204e2381643d85386814b5e"],["/categories/git/index.html","d93b89886f88b163179fa5126eb55c41"],["/categories/index.html","3f4cf44a08b29a30a3e968268ff08202"],["/categories/metaclass/index.html","7106303b2c7b836d55040c5dbd47a151"],["/categories/python后端架构/index.html","2d8632e1f059d011623fcaf7228189af"],["/categories/python数据挖掘/index.html","48cbd8100a64d6aa90febc0275c0ea45"],["/categories/python爬虫/index.html","c9749a610bc19428584001e1aa396be8"],["/categories/python的web框架/index.html","1230e1c9f8cd440262d6de4288b5d7d3"],["/categories/python编程/index.html","86b1015875fd11acc185c8f67e854a2a"],["/categories/python编程/page/2/index.html","449738ffb09bf2e2f1e6638b08a9a2fc"],["/categories/python进阶/index.html","59fe77cefc53a5f6242de5c20301b334"],["/categories/selenium知识/index.html","c1967a3e9ceb3aca6815af7ee5e85ec7"],["/categories/个人随感/index.html","1255614da82912abf95d0d77a1114fd0"],["/categories/前端学习/index.html","bbc65f339b17f84f28d9225d12a7740a"],["/categories/后端接口风格/index.html","ee492b8168d4518bc1d2d5a0aa8fd6c7"],["/categories/数据可视化/index.html","57831c41291f67759869077123a6408a"],["/categories/正则表达式/index.html","e8d253a37ce5f11cbe490e939ef8f400"],["/categories/消息队列/index.html","dc71893c9ee8ea5d58562308a85f2ebc"],["/categories/算法/index.html","615263d888707f1ebd48df7d1ee4f069"],["/categories/算法/五大经典排序/index.html","6d45660bb3df986fbb93c5c8c07bd772"],["/categories/统计学和概率论/index.html","3fc53ae5b7f504782231ef665084c9e0"],["/categories/网站知识/index.html","d63b3122ff0ec535c7893b7f51bd873b"],["/categories/计算机组成原理/index.html","56b79cf57a2b0543ebcfbdeaa9fb830c"],["/categories/计算机网络/OSI七层协议/index.html","3aa41c84d46ddc6dab3f862e471a2229"],["/categories/计算机网络/index.html","22fd6bd3a0d00df5897f6490555c43ad"],["/categories/软件工程/index.html","d1c0ca25f750c3e2509d462942f4932c"],["/categories/面试经历/index.html","e879c89d84dfd881b24b29a81125dc08"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","07b62579a0c3933753a19f292ebd7251"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","751b4b4973590eb4ed7fc552ed941c09"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","68f21b485bb36fcdbee3af1efa70ebb9"],["/page/3/index.html","fdba6aadc54114639357b73e01ad4e09"],["/page/4/index.html","cd3e9281d36112e59e7c045c44dab262"],["/page/5/index.html","40ce700da7b1dd0fcb68313668908ac1"],["/page/6/index.html","e8656783bf55369a07ccffced8df6296"],["/page/7/index.html","6c56464104942be6b22fd33115e935d2"],["/page/8/index.html","94d97714c80e61f138c430b9187947e3"],["/page/9/index.html","fd21e5a8f1ba62a47cb93fe40f7c6dee"],["/sw-register.js","48bfe21dc057a2810b588d294f772c75"],["/tags/Cookie和Session/index.html","b9d7c2e80d6ea2d2c126e796026abf46"],["/tags/Django/index.html","be6d62d64685dad956c186281bf452a5"],["/tags/Django部署/index.html","ab610ccefe4ec8e74dbae7670f0f020c"],["/tags/Django重定向原文/index.html","da99a66ab38b4c0393756b963c7edc1a"],["/tags/GIL锁/index.html","28d12790b269c0f2344b05a65bae3890"],["/tags/Hadoop介绍/index.html","d970e45dec7264b22702b031f544cd89"],["/tags/Java基本知识点/index.html","3ca4801446936622c0c3d4522c7a15a6"],["/tags/LinuxLiunx命令/index.html","47251d32711eeed31a4ea1b508d6cdad"],["/tags/Linux知识/index.html","2d6f679955ac9e090f73c466a84a2bf4"],["/tags/ORM/index.html","e9f81014f615c0e9d907536b494c470e"],["/tags/QuerySet集合/index.html","ba467ca1c2ff357afb8827ddb32f6a40"],["/tags/SQL函数/index.html","6bc59a131b03771aca40de571dde2eb3"],["/tags/SQL命令/index.html","21f0fc09a01401561e3b3175961184cd"],["/tags/SQL概念/index.html","49956a7f583650408929b91aeb0c89c2"],["/tags/SQL调优/index.html","34bf0be24d43335c3d6432c7d29cac09"],["/tags/Void-知识点/index.html","4a2c205a5d92fe12c15941e7d6bc5742"],["/tags/Vue框架/index.html","1278cf0967f44e11049564ed6b2642ff"],["/tags/Web安全/index.html","6f3f4a9bfdd4b00db078df097c83c934"],["/tags/docker知识/index.html","648b78dc294a322b594a25fc6164122e"],["/tags/flask/index.html","6cb3407b5c7120173a8bc34e2df84651"],["/tags/git命令/index.html","15a18e2e93a986b97ba314b3e5116f8c"],["/tags/git配置/index.html","44e92b7441cba8ec7101bca2f93ad739"],["/tags/index.html","ab9e40971b0869611bc40a860fbab975"],["/tags/js知识/index.html","bfd6ba7e5d083040c3ae126e15c38e92"],["/tags/pandas函数/index.html","df47eeee549ae6772c53553414e0610a"],["/tags/python编译器/index.html","abdd7fd28738fcb8945e8f48e99d1636"],["/tags/rabbitMQ/index.html","ffba6ba63f40c3c1d34ec50c0a3b1356"],["/tags/scrapy框架/index.html","035169ba336fd683db20c057dc4e2e18"],["/tags/selenium/index.html","87906d88bc6857dc94bb87dc3801a802"],["/tags/websocket知识/index.html","427a9c03b8d4aa6ff0a29c6486877190"],["/tags/上下文管理器/index.html","4487e5c6d02bd791ddef6767c9da682e"],["/tags/信号量/index.html","ed88b63f6fe9bc2647c492a28ab162d8"],["/tags/函数补充/index.html","79c4964cf2d393ba0ac09c1808997986"],["/tags/协程知识/index.html","59edf20059ea51219f2a87dafd0c2b97"],["/tags/基本知识点/index.html","14101fc47e9e59adaddf6f8ee8a45e31"],["/tags/对象引用传递/index.html","96aefefd617bfca0e025ce4595432336"],["/tags/底层原理/index.html","e3f5246e5bed3e6601f9e7602b6b0413"],["/tags/扩展知识/index.html","3dc218e7c9fe218ed5c9563fbe89eb56"],["/tags/排序算法/index.html","26f075b2050ec1ac8824fc3cddae0560"],["/tags/接口设计/index.html","97bfc63a28affd5786de8e20a91dc34a"],["/tags/数学知识/index.html","73aa5d2269507e0c87f03e2975298168"],["/tags/数据可视化概念/index.html","df38105b7e9284d7f66c1a928c5d4332"],["/tags/架构演进/index.html","ca27d2e7b7ca1be7c653f40a5c125634"],["/tags/核心模块/index.html","9aa1f3a68859d671a876bd3291563c87"],["/tags/正则/index.html","8cc8821e549694c99ef14b8055ac2ada"],["/tags/爬虫实践/index.html","bf3e071fb64952ec9864fe9b9bc81059"],["/tags/类和模块/index.html","d5945a95a2b8d26bd251ca2eac03e8bf"],["/tags/类的知识/index.html","818b98f746c7f1a4859f9344df6d597e"],["/tags/线程概念/index.html","32e97d131c82a887ede435ad8b4b3d79"],["/tags/网站的基本概念/index.html","4e77ba70b579f4daded71fe6903861c3"],["/tags/网络编程/index.html","985f2f5b74671dd20265d7ef6c936cbd"],["/tags/装饰器/index.html","764efc30dee937bfd32102af928e455b"],["/tags/计算机知识/index.html","ea07ca4ffe42244e8e108ea4d0c17325"],["/tags/计算机网络知识/index.html","9acefdc3dc3758c5f713dbfdb076eb96"],["/tags/设计模式/index.html","30469be8c6083eb0180ee3f34987cb93"],["/tags/语音识别/index.html","e1e57aacc932074052e1964979beae4e"],["/tags/进程-线程-协程总结/index.html","23aeee87160afc6151f184a9ace12aef"],["/tags/进程概念/index.html","fc02e2114be74c78034aad47e96edf21"],["/tags/面向对象编程/index.html","df317f857d0d1788148de704522ea868"],["/tags/面试总结/index.html","e7441e7e445c6631423bffb54322c64b"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","4955cf1e84980b9be55414ba02022d25"],["/2020/12/06/C 语言中 void 详解及应用/index.html","51189839dcd5ea811f04a96272855921"],["/2020/12/06/C语言打包技艺/index.html","36f2998f4bd489cbb41c04977d40408f"],["/2020/12/06/C语言笔记1/index.html","dcccea16c2870a557b8d32558a0556fb"],["/2020/12/06/C语言笔记2/index.html","f49fd18adcde9242f11c9fccf21185a3"],["/2020/12/06/Django 重定向终极指南/index.html","ad916bbfe0b03dba4bbdbe4cafb06395"],["/2020/12/06/Django参数和模板/index.html","442bc0aaee0a63bce01f587cffcf7350"],["/2020/12/06/Django后端演化/index.html","c58b5e6d5047f59590af48c3a52b4370"],["/2020/12/06/Django的Cookie和Session/index.html","d100ca7cd657b63e61566b5fc7bb0288"],["/2020/12/06/Django的Field详解/index.html","ee02fa2efed89ab21aa6199366e3e5c6"],["/2020/12/06/Django的ORM多表操作/index.html","d4ebcdf6d2dc59a6ebbc1d7a8f66e127"],["/2020/12/06/GIL锁/index.html","f2e08853fcc4bf4a2bea760db6d21145"],["/2020/12/06/IP代理池/index.html","0c731df652dee0493958da256453247e"],["/2020/12/06/JavaScript的简介和基本知识/index.html","50993d9cdb32a9f0af08b60e2edf4a4a"],["/2020/12/06/Java面向对象/index.html","1e6870fda42ce43d8ae5d9e640b6dce6"],["/2020/12/06/Linux常用命令/index.html","c034892cde6b9050c1a87dcd9ba64ff0"],["/2020/12/06/Linux操作系统核心知识/index.html","c8ca2f83f46e549b2968738309025df8"],["/2020/12/06/Linux操作系统（二）/index.html","0e713011e63ff01bd6b8ee33558cc0d0"],["/2020/12/06/MQ笔记/index.html","a324d0dbaa23fb3f2d0eec282bf63e88"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","dca172a85525a06c10de9839fc43f501"],["/2020/12/06/Mysql数据库函数/index.html","2946801db79b77e0332ca84b2a0539ca"],["/2020/12/06/Python 中的上下文管理器/index.html","4db31c735cc5c9d2c6cc3b000596ac0f"],["/2020/12/06/Python的模块和类/index.html","8ac93273f7d24e46186a64e6e4825f06"],["/2020/12/06/Python类补充/index.html","b02e67d890000c1d2dfdae9b3def0e86"],["/2020/12/06/Python面向对象/index.html","209a891631959af80203946d15e05edf"],["/2020/12/06/README/index.html","2b256a4a0e2e82c799612e2a246b883d"],["/2020/12/06/SQL性能调优/index.html","b75bd7609b03fa7505bc0322cecc60cb"],["/2020/12/06/c语言笔记3/index.html","e9327f82f2eb00772c4452269d27e6d3"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","8baf7dc672a93fdec8c2a57f071d8efd"],["/2020/12/06/django之url规则/index.html","6fe5470674a95fbe49b1d70874e7f334"],["/2020/12/06/django的querySet详解/index.html","b82cef50b9f181a5dc58aa8af6da9e44"],["/2020/12/06/django配置初启/index.html","f2dc3c04a7cfc4be1d41b9879e64e7b6"],["/2020/12/06/docker以及相关概念介绍/index.html","4c3fd4019b030133042a1f886e628990"],["/2020/12/06/docker信息/index.html","7c66acd4d58c04463c9993b7e28a162c"],["/2020/12/06/docker网络/index.html","c99c14f9a73061364a57d93829ecca2f"],["/2020/12/06/flask框架/index.html","3f7a7b7bf02ca5ec2b23598bcb3076c6"],["/2020/12/06/git命令/index.html","b1bbc1a923b20ec3f678c46aa37a9088"],["/2020/12/06/hadoop基本概念介绍/index.html","ed35659930137f925ee29331024fa848"],["/2020/12/06/java基本知识/index.html","e57377d9050523f6f0212bede1e0ffcc"],["/2020/12/06/java简介/index.html","ff9cbe512cda82f603494a5a8d15d483"],["/2020/12/06/pandas函数/index.html","d96db279fba24a681256f893a12ca640"],["/2020/12/06/python函数参数传递和返回值探究/index.html","43237d669a5b45f1ddda5f9e083b7b63"],["/2020/12/06/python函数补充/index.html","17a59121b6e0e1214e3bb427d98c9e2e"],["/2020/12/06/python数据类型的底层实现/index.html","a9d916e25a51156786cfbac9c37b79fb"],["/2020/12/06/python核心模块的介绍/index.html","3801241daa52f674d75347df061cefc7"],["/2020/12/06/python爬虫/index.html","4bb7b2a8d7446ae50f0640be0c5deb1f"],["/2020/12/06/python类的私有属性和私有方法/index.html","53faaecab2a47f455a4ea3a185d89d98"],["/2020/12/06/python解释器介绍/index.html","bf417ea79d52a1c4375911ed8024e21b"],["/2020/12/06/python高阶函数的定义/index.html","68dcec75eee60e544662d41b1cbace47"],["/2020/12/06/vue框架介绍/index.html","de50e2b14a3e7aa2ba8138470ae93412"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","cbfa2f6d415030c95a71d2ea47e258e8"],["/2020/12/06/京东全网爬虫/index.html","4c9bbe5227efcf241a0b39cc0aaed22a"],["/2020/12/06/协程/index.html","ca473645fe96dae286aa20a6d38c7f7c"],["/2020/12/06/多线程/index.html","5d3f45f1bd964ca9017b5cc7c36f15ef"],["/2020/12/06/多进程/index.html","5cfcf61e2ca42916a15945491ac265e9"],["/2020/12/06/数据可视化笔记/index.html","0c7dd3131495e2c16613f927f253964f"],["/2020/12/06/数据科学笔记/index.html","a7b6bf653c9fc2d512dd0a591a59a82b"],["/2020/12/06/斗鱼弹幕抓取/index.html","f22ec74a96b3c024e4b6e2f827d0cadc"],["/2020/12/06/查看mysql连接情况/index.html","7c62bea5daddda31818bfcd70310ec67"],["/2020/12/06/正则表达式/index.html","0673cd831289d1705f3b8b9d8437a716"],["/2020/12/06/第一次面试总结/index.html","d21373bbc3c405f6f5c7530923edc95b"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","d018ad37b322ac703124f1eaf92c33cb"],["/2020/12/06/索引和事务/index.html","c75c2b3e97e28a30f9c4237330f11202"],["/2020/12/06/网站概念/index.html","a878ec6261951392acdd35dcddf9ddea"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","58c43236792a87510a068be7c911e62c"],["/2020/12/06/计算机网络/index.html","5a15b5983b4e09d9cb233e46a1ba6869"],["/2020/12/06/设计模式简介/index.html","fa35a7098a48efd5f1b70143a7e202c7"],["/2020/12/06/语音识别/index.html","1464b67538ddbcf72ed507a0e10283af"],["/2020/12/06/轮询、长轮询、websocket/index.html","4558d06b404c59e230984f0ce2c9b08b"],["/2020/12/06/进程,线程,协程对比/index.html","4f0a6ad36c54c57c01ba5729a07d73c5"],["/2020/12/06/闭包和装饰器/index.html","6eac4919f1cf58c7a30197236cdc28d5"],["/2020/12/06/面试总结/index.html","889e7e40246bbc2d0f8743df34ca7e0b"],["/2020/12/13/鸭子类型/index.html","532f444946aa2ba603919ac3b6142a52"],["/2021/01/03/工厂模式/index.html","138cbe9bed470a8742557894602993d4"],["/2021/01/17/RESTful风格介绍/index.html","24f14276e52efe7faf7cce274f958773"],["/about/index.html","0dee8a807b772522d10fa22c302b4063"],["/archives/2020/12/index.html","24bf1dc7f334197d8cbef87684828887"],["/archives/2020/12/page/2/index.html","b099b8d378d2d3ff3c371e1b8fbe4ad0"],["/archives/2020/12/page/3/index.html","90996a2b61a792a6738e53587ba4f00b"],["/archives/2020/12/page/4/index.html","42b3ee05a42716d68685fd3dec8c8736"],["/archives/2020/12/page/5/index.html","0c6b9935b9a8bff2f5382d97f545a940"],["/archives/2020/12/page/6/index.html","940302a1edd23b2b2f5f84f96622dcfd"],["/archives/2020/12/page/7/index.html","330b0c5d7f6537be357a69aba3b1ed00"],["/archives/2020/12/page/8/index.html","6b45b2f34f843586110a63f0b7208d15"],["/archives/2020/index.html","60dd7aff06aa1e696a10a9f04db6cdb8"],["/archives/2020/page/2/index.html","b17ce038dd4b5574b5d632c8d96e6860"],["/archives/2020/page/3/index.html","ebdeb48466a720c14c2f2c8510d3a5f9"],["/archives/2020/page/4/index.html","4103365227c9cfd5efd726917b6c8218"],["/archives/2020/page/5/index.html","e9ba2a91272e6b08f43436e5abd0cb3a"],["/archives/2020/page/6/index.html","f8133864de0071c9c1745869376c53b1"],["/archives/2020/page/7/index.html","85780d69958abfb77c589fc0b6104de7"],["/archives/2020/page/8/index.html","69425eec488dcc2dc8b1e2a515b0be63"],["/archives/2021/01/index.html","a43c0420fc2edfbfe7edfdd1e3d91cfb"],["/archives/2021/index.html","c84e03d23d4edb8b585d097dbebd96e6"],["/archives/index.html","b88d26e3788cd951e96fa20bd86b8b20"],["/archives/page/2/index.html","d6d6a38792f8ec2c3c96f2e44d48d6c5"],["/archives/page/3/index.html","d618ab04fe881f3e931d7f68057735d3"],["/archives/page/4/index.html","6923325880d46722b3057e4b31b62c1b"],["/archives/page/5/index.html","5aa23905b6b5e85e3fb1a9360759b6a0"],["/archives/page/6/index.html","1c8e3bfeed130d3e4b076a6e2466faff"],["/archives/page/7/index.html","0c0406baa09137da3f2cdf898c79504e"],["/archives/page/8/index.html","7af47f00b9f8666abaa7454bbea48106"],["/categories/C语言编程知识/index.html","4ffa6374ca35ba4e00d25ff956530d99"],["/categories/Hadoop/index.html","72d7111c8d172e3abe61103befeda101"],["/categories/Http知识/index.html","b333d407ca17f7427838924881c5d822"],["/categories/JavaScript/index.html","24b0ee89910dd50c0d2705544c03f979"],["/categories/Java学习/index.html","3ea233f4bd7a37948bf6f835d1728b62"],["/categories/Linux/index.html","ede155d420a61c6a45189496c43d2879"],["/categories/Linux/常用命令/index.html","5ace9c8bb61d9b2127a138eacde1cc16"],["/categories/Linux/核心知识/index.html","0ed91a77317784a32b183100acd7b284"],["/categories/SQL知识/index.html","7e2a1a3e5965dd63d45eeb978127c143"],["/categories/docker/index.html","18cf8d9b80fa45f7cd7b79159b6bb0ba"],["/categories/git/index.html","8cd883278672596e95ef19fac0840e34"],["/categories/index.html","ed4ce933dfeccdc777456e570d54e953"],["/categories/python后端架构/index.html","2fc5b333929f5b9a3a55d73934f3bb3a"],["/categories/python数据挖掘/index.html","f5c74768ad7831fe85f772c8b919fda5"],["/categories/python爬虫/index.html","845fad4c933d7c54e57337153dacf0a1"],["/categories/python的web框架/index.html","fef523342618d928b536f7d0192aa650"],["/categories/python编程/index.html","9f3443c3b284ab1b016dbec9b9cda1e2"],["/categories/python编程/page/2/index.html","baaf3ceeac945a1789a718bffdc85db8"],["/categories/python进阶/index.html","a8bb01109fe12e380ed3bbf5042d2846"],["/categories/selenium知识/index.html","31e045c1937f9fe9ac74d00107539174"],["/categories/个人随感/index.html","b08481971b33d62645d06d55c24a9bb1"],["/categories/前端学习/index.html","cacb3fe3d5941a325df798da7e1404c5"],["/categories/后端接口风格/index.html","ca48cdf5b2738401a2ace65760e99c53"],["/categories/数据可视化/index.html","3e2e073bd22141d6774ac79d9543800a"],["/categories/正则表达式/index.html","41cf2f53f9196b2ab4a71f2977cd626e"],["/categories/消息队列/index.html","8ac4e68ace467da8da560e1a5b76dbf9"],["/categories/算法/index.html","40e938ef9d6152a04d7938315e431cfe"],["/categories/算法/五大经典排序/index.html","85a79f34814548f94cbfa72e64076e14"],["/categories/统计学和概率论/index.html","232a77a761e4eb41a02abf276edc7dac"],["/categories/网站知识/index.html","2525c7e64a4e77c4e044b31962567818"],["/categories/计算机组成原理/index.html","634872de44f01d1d1812987236909d4c"],["/categories/计算机网络/OSI七层协议/index.html","84a4e16dd9e64272a63037e0ec9ed2a8"],["/categories/计算机网络/index.html","4a86b9e708881864d2671ba6c89c4142"],["/categories/软件工程/index.html","8aaf55a850fdb531674fe4e230e5efa1"],["/categories/面试经历/index.html","067bd89d5714979736faa564f904a27f"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","89575cd5669cd6244cfb12f8836e0bf1"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","0d925856a4a7bec31fcff54173c283b2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","665a0cf744c00b507268d2c4d3eb1efe"],["/page/3/index.html","b216f67e0eaf9abda6aa50b9c05ac16c"],["/page/4/index.html","b6951caa92d15ce0a1d54421d5917067"],["/page/5/index.html","d1a016873569af8f0fad46c7bdd1d08f"],["/page/6/index.html","cb046ab7de02774901dc98dc19317682"],["/page/7/index.html","2a7d6ed7dfc2dab7a2dcda57d2136c24"],["/page/8/index.html","e33480a0282d46694760e691d1245ed9"],["/sw-register.js","0053c8a3e3b5c49f6cf1e49c304c7bbf"],["/tags/Cookie和Session/index.html","d94bf11e74ba88e9fc960fc6c341ef33"],["/tags/Django/index.html","7d2299604c32a6ac229d40faf3ff802c"],["/tags/Django部署/index.html","d964be45a21112ac5c9c7458fda8afe0"],["/tags/Django重定向原文/index.html","fdfc63442ece0c82b24792ce9005e29f"],["/tags/GIL锁/index.html","111be6a94d37ba31bcbeed57e003b62b"],["/tags/Hadoop介绍/index.html","3ac0722f9c57920d7c42c83467fe3cf2"],["/tags/Java基本知识点/index.html","00877f528ebf30434aee6014276ea974"],["/tags/LinuxLiunx命令/index.html","da39bd1e6546aecce6d6c35cf16b798b"],["/tags/Linux知识/index.html","eb3cda7a8900c1e538b83e263325190f"],["/tags/ORM/index.html","5e8635aff4923cce267ec663b5e9d869"],["/tags/QuerySet集合/index.html","3ee9e76f43fa302a338dad50d5fc72ec"],["/tags/SQL函数/index.html","5184ceea9d42478750c81ced7a7a6830"],["/tags/SQL命令/index.html","31282fdfa6fafeca63ab891d23d3fd52"],["/tags/SQL概念/index.html","82f0865e918c7480a8aab91a90a4352a"],["/tags/SQL调优/index.html","228b336cd4d92189e5ac915873318a94"],["/tags/Void-知识点/index.html","f1ab8008a61262f3aea13463955089f6"],["/tags/Vue框架/index.html","e21dd4ba58976ca757b76ef8f72d875a"],["/tags/docker知识/index.html","f153f89b795253160e2a0f3fc48a8c72"],["/tags/flask/index.html","938950ace1696e5a8df2e2dff322ea3a"],["/tags/git命令/index.html","65c26dfed6f0db8399bb8e4a7c255244"],["/tags/git配置/index.html","59b6e3f9746c56f97a73a5b40ec1fd93"],["/tags/index.html","05da330b7f7c59c645776030eb93dd76"],["/tags/js知识/index.html","afc70cd270b602555f9fb8f629852382"],["/tags/pandas函数/index.html","559e63251984ba209a2754a29ee456a2"],["/tags/python编译器/index.html","b7e5292b9aae18717ddd81fd8dcf364e"],["/tags/rabbitMQ/index.html","174334d63412851e4be0c30e7195266d"],["/tags/scrapy框架/index.html","1f8f1c298f81276935e81cd830f84f20"],["/tags/selenium/index.html","5a611b5d3e2279e7b76a575cd6951644"],["/tags/websocket知识/index.html","0d0b25e0d7a1e01f8306423a65054d69"],["/tags/上下文管理器/index.html","1aeeca76db5866b13066cab2223a7c60"],["/tags/函数补充/index.html","3615503cbdb67b3125f3b6b75fbb64b7"],["/tags/协程知识/index.html","83440982cb8dc918d0f0f0e44132ad0a"],["/tags/基本知识点/index.html","5e2b461c04458dc3b4a78591b62e193f"],["/tags/对象引用传递/index.html","8c345f1a84a8ea038ba0b9fc954d6f19"],["/tags/底层原理/index.html","d1199749a8d395334d9ba4127dacf646"],["/tags/扩展知识/index.html","88237da5661f4c8f03fc4e7d4322d4d1"],["/tags/排序算法/index.html","c4d48d9e5bc9fd7ed784427ca2a39850"],["/tags/接口设计/index.html","d7a3e1672417ef4534585eebcc4c876c"],["/tags/数学知识/index.html","05c43f5290a310fa9715509be729702f"],["/tags/数据可视化概念/index.html","85b9403532168be1fe50dc1373cb7cab"],["/tags/架构演进/index.html","a081d4fbb09ee4b101ccdf044c3861fe"],["/tags/核心模块/index.html","6c7432246b6d18c9960e141cf64c3626"],["/tags/正则/index.html","4e913550b2616db88890377487f10bdf"],["/tags/爬虫实践/index.html","b4e0f3a768f311658874d6ec43d89c84"],["/tags/类和模块/index.html","5f121bfbaab767f0c3590627b3672a3a"],["/tags/类的知识/index.html","f70bb05b56550574296a4e4fe1adc415"],["/tags/线程概念/index.html","cc8f181e3fc97da09a85d54c5b77ecb6"],["/tags/网站的基本概念/index.html","7a4090cde276f958506bc37873af9f1c"],["/tags/网络编程/index.html","b0108888359f4aad54f4a16bf0979bf3"],["/tags/装饰器/index.html","2125fb7d3ace5747108e3409f8a54d00"],["/tags/计算机知识/index.html","a3278affd21f9d1dfabab08111d19af4"],["/tags/计算机网络知识/index.html","58ad6400ece024fcd6e0cba0b7fd8f8b"],["/tags/设计模式/index.html","d79dfdeeb1ad75c443c74087cd3a1d2f"],["/tags/语音识别/index.html","2682ab7f82c917ca525b2b8b476b0788"],["/tags/进程-线程-协程总结/index.html","579b66ef15aaa4e4982322e2dc6179d1"],["/tags/进程概念/index.html","696cf8c6c4da80abc4c5b6c0b57573f4"],["/tags/面向对象编程/index.html","b8a453f178a849d47765e77f54d1b5a7"],["/tags/面试总结/index.html","f8a04e66f7e6087ff58fb7c4c9fd4ed4"]];
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

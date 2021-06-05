/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","adc8483aef2ab78bfd6af8d21e6fcd44"],["/2020/12/06/C 语言中 void 详解及应用/index.html","6af1a6f49bba397784c3932bb856bd90"],["/2020/12/06/C语言打包技艺/index.html","9f65782daaddb8f9e2e7dc4b431b2069"],["/2020/12/06/C语言笔记1/index.html","de27308539d25be07f7cd6defd6716e7"],["/2020/12/06/C语言笔记2/index.html","7062e57ad0293fe8e0ed9e602a3ce258"],["/2020/12/06/Django 重定向终极指南/index.html","36a7cd79b56e3e2b915e9c6a691da37a"],["/2020/12/06/Django参数和模板/index.html","5e0343336a4d8cd31d2945d46cec50c5"],["/2020/12/06/Django后端演化/index.html","0a12b1a6a132ee319bdb9c1b553a7ece"],["/2020/12/06/Django的Cookie和Session/index.html","04f18f5689b9e2f178b114cc994ed6cc"],["/2020/12/06/Django的Field详解/index.html","68b31b11ef758129c90048b4120b54e2"],["/2020/12/06/Django的ORM多表操作/index.html","8836361a8c5425db79bbfc8382214b7d"],["/2020/12/06/GIL锁/index.html","459c9509e80c3d77f4934a1b6c3449d5"],["/2020/12/06/IP代理池/index.html","a84d3a38e2dc9682c20d1f4a3e3d62b7"],["/2020/12/06/JavaScript的简介和基本知识/index.html","c41df1932de815ba83c123f08327ccd3"],["/2020/12/06/Java面向对象/index.html","26663d337332c17c4cd61add145bdfd4"],["/2020/12/06/Linux常用命令/index.html","eb73bcf5a553d3436d49c49de428be36"],["/2020/12/06/Linux操作系统核心知识/index.html","db8dff125022e9863aca774f40c1b87d"],["/2020/12/06/Linux操作系统（二）/index.html","a6e12277727a091717d1c9caf0ea870a"],["/2020/12/06/MQ笔记/index.html","44d55f80831673bbb20679734894de77"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","a1c7f9cbdf7c3dc55642bd250b617dac"],["/2020/12/06/Mysql数据库函数/index.html","0f091473afcf9a63fe06315bbf00b526"],["/2020/12/06/Python 中的上下文管理器/index.html","11ba85d0a3267db5ba691ccb015738dc"],["/2020/12/06/Python的模块和类/index.html","8a5cc7f8be187cbed0194587b9f7e0b0"],["/2020/12/06/Python类补充/index.html","8be6608c48db1bfdc2659d6d63193dd0"],["/2020/12/06/Python面向对象/index.html","3defe8b51e8a4a3e26184ab026db5fbe"],["/2020/12/06/README/index.html","3ee1aabd8ce01e2d553c4ca0746b2a25"],["/2020/12/06/SQL性能调优/index.html","8f6aa1560d7a89d9afc421766d9bd418"],["/2020/12/06/c语言笔记3/index.html","9c6168ec0b4ce66cbb323f312151a495"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","8cdb7a41c47f29a842d0a3dd77be59bb"],["/2020/12/06/django之url规则/index.html","879b068bb15b6b63e7577b762184f57d"],["/2020/12/06/django的querySet详解/index.html","eccd8dadcef90c89273d443d4b8b5a23"],["/2020/12/06/django配置初启/index.html","e7f155df98a61647cc9bf7fed4764f1b"],["/2020/12/06/docker以及相关概念介绍/index.html","9c12a546404f91805353c638396fcd00"],["/2020/12/06/docker信息/index.html","37133825708eef7c9fee38415d7fd7c0"],["/2020/12/06/docker网络/index.html","893ce9de9f59415302e32751bc10cae7"],["/2020/12/06/flask框架/index.html","5975f02db91949f1a6f556a1aa34ed3b"],["/2020/12/06/git命令/index.html","4fc8f5bb9207768fad8e58d025c853da"],["/2020/12/06/hadoop基本概念介绍/index.html","83cf87cf74a6b321800255166c48d7cf"],["/2020/12/06/java基本知识/index.html","57de4fdb5bd490abbb9679c80997962f"],["/2020/12/06/java简介/index.html","62d84ed597ad8f4521963a4f30300dea"],["/2020/12/06/pandas函数/index.html","6392e57afd6d5e376c777d1a1d6b32a8"],["/2020/12/06/python函数参数传递和返回值探究/index.html","124b58ca8d9ba519de190b7918a41ffb"],["/2020/12/06/python函数补充/index.html","3f8d263af9c79b699e8fbaf06fe13da9"],["/2020/12/06/python数据类型的底层实现/index.html","351b02bdc9900dbc7452ca92d7dd947a"],["/2020/12/06/python核心模块的介绍/index.html","55d2d3d758cd1410faee23269e8c6e94"],["/2020/12/06/python爬虫/index.html","b5b7e8ff3d09b526716b94f1dc63a3cc"],["/2020/12/06/python类的私有属性和私有方法/index.html","81f7f1945b63bda64a35deeea607ca84"],["/2020/12/06/python解释器介绍/index.html","e0db34dbecf017bb934f7fc6282b4b09"],["/2020/12/06/python高阶函数的定义/index.html","0507f8c58ec53d1340f77e0931b80646"],["/2020/12/06/vue框架介绍/index.html","62fbddff3491911b3e96a9c93e11b169"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","a9b1993b1cb810544a62b0aa6c354ce4"],["/2020/12/06/京东全网爬虫/index.html","44c407b88be1fb107d740e278f0b9d24"],["/2020/12/06/协程/index.html","c4eacd981496ea50bece09afb0576172"],["/2020/12/06/多线程/index.html","d9d672a0c37db0a0c4550898a766a8da"],["/2020/12/06/多进程/index.html","cd620e9b29fc610c6a18d661934f5fa9"],["/2020/12/06/数据可视化笔记/index.html","d1dae0eb3659061cb4c18a3ee63b9c86"],["/2020/12/06/数据科学笔记/index.html","d736eaa065e2690ea4805ce104412a6e"],["/2020/12/06/斗鱼弹幕抓取/index.html","ee10cce9b9b9ecda9a0cbb99360f7383"],["/2020/12/06/查看mysql连接情况/index.html","bcb07b9aa6abbc83f70fe86534082473"],["/2020/12/06/正则表达式/index.html","d3aa9b7b7b620ef773cd863f8459e98e"],["/2020/12/06/第一次面试总结/index.html","c253a76f5efd1daffc23d23bf66dc32d"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","00bccbb2be773f49a4e4323f0cf377da"],["/2020/12/06/索引和事务/index.html","986f2c7beeadf63c29da41175a095c92"],["/2020/12/06/网站概念/index.html","56081fecf85d860624d0bce0fa1ef8cc"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","0fe1ff72c14a9731dd19f222ad3bac48"],["/2020/12/06/计算机网络/index.html","09770cb2a426cab7485525624eb521ea"],["/2020/12/06/设计模式简介/index.html","c6330134ddf651f999b5ce3dee96235c"],["/2020/12/06/语音识别/index.html","b0e2cfe8a2c24abe0a6ec15ce780c9e8"],["/2020/12/06/轮询、长轮询、websocket/index.html","e6f8ae76d3176dd51c11ae4a104e60e1"],["/2020/12/06/进程,线程,协程对比/index.html","326631b71d14c533bd28736b7d4fc152"],["/2020/12/06/闭包和装饰器/index.html","188c4b00ba707488fe5666abadf147ce"],["/2020/12/06/面试总结/index.html","e264aa1093fa1da3f116786c7b37681f"],["/2020/12/13/鸭子类型/index.html","9cfcea1f98af9c875b00dd453664505a"],["/2021/01/03/工厂模式/index.html","08cda4d496c3fe36d9b988f2dd1e4842"],["/2021/01/17/RESTful风格介绍/index.html","ee2740c20c37c80fe8da98764d4c97d5"],["/2021/01/23/关于跨域和同源/index.html","36446aa3510b972b6e1dd7f1a80bddc6"],["/2021/01/30/django的信号量/index.html","7080ea85f8b129a82a434d077f8f76a8"],["/2021/02/16/创建型模式/index.html","5274f30f490687f359b84e7786083689"],["/2021/02/17/asyncio之协程/index.html","198fe200b29129f486f7d523b56b5d59"],["/2021/02/25/结构型模式/index.html","006224594ae816aeecd9fa865acffc13"],["/2021/02/25/行为型模式/index.html","725040841cc631062f41766406f3a704"],["/2021/04/24/python元类/index.html","db23495521ee1f8e7f4543499135fef2"],["/2021/05/05/go基础入门/index.html","7450e3755a4c4bee0d9f7ebd04536047"],["/2021/06/05/Go面向对象相关知识/index.html","1383badfe9067a36a3a0c4954cdaa7ff"],["/2021/06/05/json、结构体标签和rpc入门/index.html","6977ddaac67281e915db150bef026bf6"],["/2021/06/05/进阶语法(管道和go程)/index.html","64c58ea854f3ebf301d651796c847e67"],["/about/index.html","3851349c6f4e66a6900797f9ff7b8a45"],["/archives/2020/12/index.html","20c634c51a943248af3d9eb68b885d03"],["/archives/2020/12/page/2/index.html","353218bdb066ba07b9cde933c7e521e3"],["/archives/2020/12/page/3/index.html","fb1218903fab610a510f31542b608d0a"],["/archives/2020/12/page/4/index.html","a5cfc1d20b5eebe43ff0ef3bd913f0bc"],["/archives/2020/12/page/5/index.html","dc2e4705b17169f8db0c48b3f9c8b428"],["/archives/2020/12/page/6/index.html","44466410508ef4935c13275a03ebeed2"],["/archives/2020/12/page/7/index.html","b94ed592f25ac6c5345b2ec5895757b4"],["/archives/2020/12/page/8/index.html","c1bf8589ec2ace00d34bb8a0885dfa14"],["/archives/2020/index.html","d21fc1e402164c94d345e97fdf84f7e5"],["/archives/2020/page/2/index.html","5bf1b8261c84d8ef0c05caec87c877fd"],["/archives/2020/page/3/index.html","6946236521aee176dda9379ecad04138"],["/archives/2020/page/4/index.html","5827a807fbb89d7a92270eb7ce9e59b6"],["/archives/2020/page/5/index.html","c9d4c168f5b9cdce2968aa5512439890"],["/archives/2020/page/6/index.html","2833c1544a4e1cbef5ed36c30106d758"],["/archives/2020/page/7/index.html","fed2a9520d67796e27bcb6f5cd9ce5a9"],["/archives/2020/page/8/index.html","980993e5c034260f908f553c91d78444"],["/archives/2021/01/index.html","3828ad34f33b27aac1cd879cde2fc1d2"],["/archives/2021/02/index.html","5b0060f18e90526082252d47afdc1bac"],["/archives/2021/04/index.html","48a055f3f5b034d8cb0abc1b690fa69d"],["/archives/2021/05/index.html","92fc8ee32beaa3a4687224588931a1af"],["/archives/2021/06/index.html","a24a603a59ab6712aa1c884219444703"],["/archives/2021/index.html","09e80a546e5655c932eff1c00b3e5367"],["/archives/2021/page/2/index.html","a63a30f4eaf134b61b310ba7a89341ea"],["/archives/index.html","e54843cd8d3d08c8d38d503fbb308a4a"],["/archives/page/2/index.html","804ddef4866191380c341892b488ffe5"],["/archives/page/3/index.html","1a039c00f3eb2b292bbe7310b702b5f2"],["/archives/page/4/index.html","257ef012801356078977c8fdff25d3b9"],["/archives/page/5/index.html","6c43c062080469f4c24ce15c4a5607c0"],["/archives/page/6/index.html","65c6bb628c5aec69c424498d2812bc83"],["/archives/page/7/index.html","618d69b36b3a64eaddbd21521a3ed7ee"],["/archives/page/8/index.html","8f4b86a54da71a94545ea91a46a22f8d"],["/archives/page/9/index.html","d64595c6917eb2817b836cefdce21d7c"],["/categories/C语言编程知识/index.html","2f44ccae2994f31b0d2c38989ad0cd19"],["/categories/Django框架/index.html","6231b0e2d3bb59dc7170b6e28cd8b9cb"],["/categories/Hadoop/index.html","4383acda55a807b86d1befa63f0b6314"],["/categories/Http知识/index.html","8e79ef7df0c22bd5539ea38a6c7ef1c0"],["/categories/JavaScript/index.html","385211df11f6f7b1b5982ba69fb9cc1a"],["/categories/Java学习/index.html","c1ca2bac7342ddfb08a835605dfeaccd"],["/categories/Linux/index.html","ca6614015fe9293bf86f21be4da14f72"],["/categories/Linux/常用命令/index.html","ea820968e20dfd8630ca625e0fe929c7"],["/categories/Linux/核心知识/index.html","94786c01c1b4d658c82afd2efc279959"],["/categories/SQL知识/index.html","07b56ff442b222f5cfe505e7b7ccd021"],["/categories/docker/index.html","bb638a53eeb369cc2ce1246c27848b6d"],["/categories/git/index.html","f6469af78437796ac012478e1867a8d5"],["/categories/index.html","445345cb440c2ba8c5c301274263bace"],["/categories/metaclass/index.html","d8a73561516abe1a12affa9c9b672ef0"],["/categories/python后端架构/index.html","5120a0f65efeefbd074d489d3614da71"],["/categories/python数据挖掘/index.html","7b842468377432c409f52ea604676c33"],["/categories/python爬虫/index.html","fa6a5ea0fbd176f993ae0b0637e33eb1"],["/categories/python的web框架/index.html","da160b4f6ce1dc3c5ffdf406eede09aa"],["/categories/python编程/index.html","dcf28c36a57b324211c8e1cb1044e026"],["/categories/python编程/page/2/index.html","198e44ba9257ee39d281eebedcd88d03"],["/categories/python进阶/index.html","6a3148ccac56f679957bd36f8f7b78e6"],["/categories/selenium知识/index.html","ea92e4a500e3692c40f039b7ecbe4862"],["/categories/个人随感/index.html","3fd22f28d721442872b0160f9b282854"],["/categories/前端学习/index.html","c6ec596eb3618259fcfb3ba7a57931de"],["/categories/后端接口风格/index.html","e5ae4d92adb21a19ec77c2f3636da281"],["/categories/数据可视化/index.html","01c63e01d961c9fa809341c74dbfd3eb"],["/categories/正则表达式/index.html","0790d598ce5f454573e54b72651a2172"],["/categories/消息队列/index.html","238f6b84f0fefc63889256ac231f898c"],["/categories/算法/index.html","615e037e66bede63405acff5cbca0423"],["/categories/算法/五大经典排序/index.html","28b5336edc09912dabdf71d2fde025de"],["/categories/统计学和概率论/index.html","a157c3536ff9e885dacbbc939da43e59"],["/categories/编程语言/index.html","825f40a7af4822fe80357307ab19c7ce"],["/categories/网站知识/index.html","16ffbfffe956fb56e6f18027fa8748bd"],["/categories/计算机组成原理/index.html","5f51b4febe460c3a8865abab360672fd"],["/categories/计算机网络/OSI七层协议/index.html","2fa4d7990347404b2c5cc6f3ad533817"],["/categories/计算机网络/index.html","649d5bdc1b2938bc8d39789560ae4442"],["/categories/软件工程/index.html","9aedd904b351f92f58218702a22fb5b4"],["/categories/面试经历/index.html","349090847d04a76acfea6525b971b819"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","76c7d077d19305cd53cda30df60c34b5"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","dd0a2e0cf13f60545076be01867283b7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5bb2288d57ff63fb4e9c1dd1c2a07460"],["/page/3/index.html","f4aa52c5a83da4b8f553693e4af33154"],["/page/4/index.html","7508430009a4401a98f4ef3ce64aa14e"],["/page/5/index.html","32dcdb03a25633e689d49f3ef72bbb54"],["/page/6/index.html","b4b2f70b42d00a305dfe9d9bbb6c4d0e"],["/page/7/index.html","24a2f9294ae44936099800398b36e9e6"],["/page/8/index.html","c95f42611011ac6ebf6d33033abbecda"],["/page/9/index.html","4cc5e4185d8f629452e755529fe8d62d"],["/sw-register.js","ea89d700fc74636fe2e01d702d9237f3"],["/tags/Cookie和Session/index.html","a39336c4b3391ca0d83f0f13bfdf7ed5"],["/tags/Django/index.html","2ce3a2cea7ebc919ce5709a98b9cb1b7"],["/tags/Django部署/index.html","b34ee43ea37d59294791f3206a3c2d65"],["/tags/Django重定向原文/index.html","23d3ca192e4a961a934d3e423a9ad636"],["/tags/GIL锁/index.html","1e5bf495220ce816744a0bbc852f1b85"],["/tags/Golang/index.html","9e1bede694b0c36b612457c4dd99f96f"],["/tags/Hadoop介绍/index.html","64db23f6753cf2629bd98e6d246e260f"],["/tags/Java基本知识点/index.html","690dd24c853310250bce43bccb0de7a1"],["/tags/LinuxLiunx命令/index.html","b796de9722c2931c4206ec132211c5d9"],["/tags/Linux知识/index.html","42e74755e699ce8a8dd08487c17ebff1"],["/tags/ORM/index.html","388c5b3ce3e9af0365138ed67a5dab8e"],["/tags/QuerySet集合/index.html","f1b421b9381b82dbb2abc2f962cb3a95"],["/tags/SQL函数/index.html","1f644ac4a0061957d6393f52e2b9594f"],["/tags/SQL命令/index.html","1a0c395c4792fac47ec6a9d39d429889"],["/tags/SQL概念/index.html","089b7bbaab95d5757c93502f88643ad7"],["/tags/SQL调优/index.html","6b149d7d57b3e59bc996b3ea23c016e8"],["/tags/Void-知识点/index.html","13ae43cff90397b3348b42859fc20a67"],["/tags/Vue框架/index.html","01fbbc1f7fd6a2ab6ae5d156f7768872"],["/tags/Web安全/index.html","2261141ddb942605c609855114fb7598"],["/tags/docker知识/index.html","968a8124657c827c912ee14eacc8ec86"],["/tags/flask/index.html","c2b0f99bbf036b34aca8818939100904"],["/tags/git命令/index.html","820825f418630ff9dd08a43f204636dd"],["/tags/git配置/index.html","cc66ca592f527d54bd903cc5da033ab9"],["/tags/index.html","402be7ae675b06efd9bbf19d1b7e2ef3"],["/tags/js知识/index.html","62f420558823fe9c6e9e7c8215c99b29"],["/tags/pandas函数/index.html","bfff98dcf4e135909390a501d1d32c77"],["/tags/python编译器/index.html","60ecbacb0510ed9b36a00833c34a2e06"],["/tags/rabbitMQ/index.html","ffe8bd9b90d9aac52cd067655ae7d5ca"],["/tags/scrapy框架/index.html","90621ba02d109e701a7493f2e63815ab"],["/tags/selenium/index.html","ff482e31e927c3ba573f6f3e8ce3e3cb"],["/tags/websocket知识/index.html","057e5a1c7f9423112580ce274367a29c"],["/tags/上下文管理器/index.html","84e6063605df6797811759ad93be1785"],["/tags/信号量/index.html","434b905213c10c5e3307fd0906113bd2"],["/tags/函数补充/index.html","6499d16475d56516ec23e75fe9489980"],["/tags/协程知识/index.html","ae1fba6d5228f59e61ee108e24019fae"],["/tags/基本知识点/index.html","4505319dbb232b31aec4a772a568ee02"],["/tags/对象引用传递/index.html","6ddb9ff3e59fcfa541a10fc64e5c3b86"],["/tags/底层原理/index.html","146c2f0bd33414aebfbb2b20f5c92b86"],["/tags/扩展知识/index.html","23f5f9c1ebe7c58f59ef3ced7676bc35"],["/tags/排序算法/index.html","a35b97508635847b31a8d1849ec64975"],["/tags/接口设计/index.html","7c81c4c05f0873b7f0745c33d65a7237"],["/tags/数学知识/index.html","27ea0bc9929299b4746fddb2bc9d361e"],["/tags/数据可视化概念/index.html","5941e26d0c7c32c47afd3976014754e5"],["/tags/架构演进/index.html","9a70de3d012c5de8e0f82e57e8e3e030"],["/tags/核心模块/index.html","e5fae7097218d0779176098c6fba2cec"],["/tags/正则/index.html","d84c0206d6c63b87e38b087b8461d277"],["/tags/爬虫实践/index.html","c0968cdec53b343fbb620d7c9d3f5788"],["/tags/类和模块/index.html","4f65efef9591c999731bc682a455984f"],["/tags/类的知识/index.html","52cc82fd1006c25a1817532f50caf4f1"],["/tags/线程概念/index.html","c6af37b995fe1c7636731050a10b7136"],["/tags/网站的基本概念/index.html","4f6b855d6f9f355d9a8d7197b1af80ec"],["/tags/网络编程/index.html","cfbb9c39489bae753a9a3295e9481065"],["/tags/装饰器/index.html","289df0e6085d702de93f0e457382d6b6"],["/tags/计算机知识/index.html","98c95cf3a5470c5500eea2a2ca164d4e"],["/tags/计算机网络知识/index.html","0a0755e919f336de391214cb27e67912"],["/tags/设计模式/index.html","3c5a35057f6465976d3633096588a296"],["/tags/语音识别/index.html","defd30fbd8cdcda0154932cba945602b"],["/tags/进程-线程-协程总结/index.html","0fa11f0e3b23c8cc58b068429c4716ca"],["/tags/进程概念/index.html","f01f421c1cfff57daef1bc8d223d96bd"],["/tags/面向对象编程/index.html","be4a488b4b402c281a957e7f8ef8c723"],["/tags/面试总结/index.html","a5aa50687fb45b9010ae7409ea9c26cc"]];
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

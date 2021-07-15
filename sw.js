/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","582ac30e1be33ce4280c39648e0a5d46"],["/2020/12/06/C 语言中 void 详解及应用/index.html","ad2f34df573750416a0f70a761c2385a"],["/2020/12/06/C语言打包技艺/index.html","75cb07baad4a9094ac7ffd7e4cb99c92"],["/2020/12/06/C语言笔记1/index.html","11612d00b671cd6933e3abd30b441db8"],["/2020/12/06/C语言笔记2/index.html","1e6f34f2b9d607a9359928e400774250"],["/2020/12/06/Django 重定向终极指南/index.html","389d042d77c156ef79ad1a58c3fe29f3"],["/2020/12/06/Django参数和模板/index.html","ad8821260bf6cdd9c278b6e2883a64c6"],["/2020/12/06/Django后端演化/index.html","d7a330d1217d99e1e4987956697874d6"],["/2020/12/06/Django的Cookie和Session/index.html","7a02c5bbfc920bf5dfb8d84563229efd"],["/2020/12/06/Django的Field详解/index.html","461cabb63445867e4a4c543cba0115dc"],["/2020/12/06/Django的ORM多表操作/index.html","877b4e852f654973a090f211431ce139"],["/2020/12/06/GIL锁/index.html","467c7b597e145e563dc32756ea4ed946"],["/2020/12/06/IP代理池/index.html","dcc92cf0b4469da158580928bc566ce5"],["/2020/12/06/JavaScript的简介和基本知识/index.html","e8910973d0c8b98cc25e7c72d749ea6d"],["/2020/12/06/Java面向对象/index.html","8b7c90d6f660cc6364fb07098fd4eccc"],["/2020/12/06/Linux常用命令/index.html","d0da6eeea470443027447dd00e8f7d92"],["/2020/12/06/Linux操作系统核心知识/index.html","61a12327642f090fc9078ddc607f9e23"],["/2020/12/06/Linux操作系统（二）/index.html","069b53a8e9cba3e90419f6bb5d3452f6"],["/2020/12/06/MQ笔记/index.html","93586fbfcc4847e6a4061f5a70c7d22c"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","a5bfea41a9af704bbbf661c02d977dc5"],["/2020/12/06/Mysql数据库函数/index.html","7050480a448ec5f9f6e4e1f65852970a"],["/2020/12/06/Python 中的上下文管理器/index.html","9e5c18deb6a0b8ad2d52da578f03080b"],["/2020/12/06/Python的模块和类/index.html","c7ea5126d32f8fcab82a6da8924910c7"],["/2020/12/06/Python类补充/index.html","f98a9602dd6de7af4d976d3d0c74fa6d"],["/2020/12/06/Python面向对象/index.html","db546e7ce11e81cabfc017bff627bf8d"],["/2020/12/06/README/index.html","502fbad931c6f12e55a8df8192eb986b"],["/2020/12/06/SQL性能调优/index.html","98f7a3223e3ada0746c2acc994c69031"],["/2020/12/06/c语言笔记3/index.html","83f7aa6d187ec089792848d48e01e09e"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","034bd785a8df6dc966906d59f364b089"],["/2020/12/06/django之url规则/index.html","ae453d8f34a41bfe57eec6d16f132f11"],["/2020/12/06/django的querySet详解/index.html","2de2d344b70009cebcf17f7df54a256b"],["/2020/12/06/django配置初启/index.html","d2f8b113e64b9a17b58af8a19157f18a"],["/2020/12/06/docker以及相关概念介绍/index.html","70dfe1d4fcdab4772fb0367ad10c0255"],["/2020/12/06/docker信息/index.html","97b953179bdf714bfd238df552d9efc8"],["/2020/12/06/docker网络/index.html","ac6f548124af0e133f3f66bcf2c386bb"],["/2020/12/06/flask框架/index.html","2b31eb23ba92ab3b5f059fda26ffe203"],["/2020/12/06/git命令/index.html","3dcb7b8085a150637b9a896a146cc61f"],["/2020/12/06/hadoop基本概念介绍/index.html","2e0a6bd291aee8d64ce03671abfd75cf"],["/2020/12/06/java基本知识/index.html","3aaf882869ffc78613e5f23bf1a132d9"],["/2020/12/06/java简介/index.html","0c4520cec68329649795067eec5a4b8e"],["/2020/12/06/pandas函数/index.html","2ad9062e7b31e526aed6ddb65893d3f9"],["/2020/12/06/python函数参数传递和返回值探究/index.html","a985ea6ec905b94c7e26057948a3c77f"],["/2020/12/06/python函数补充/index.html","54e9eed5c166d7627dee9ce0631c83bb"],["/2020/12/06/python数据类型的底层实现/index.html","50c54d0f857a624a6866905e80a09f13"],["/2020/12/06/python核心模块的介绍/index.html","8ced714e354890c5e78cd75d4821b0ed"],["/2020/12/06/python爬虫/index.html","7bf94e7bd179e5cdeab961238aaafed7"],["/2020/12/06/python类的私有属性和私有方法/index.html","63b9146c69bb67def424fa8fa5dbf6a6"],["/2020/12/06/python解释器介绍/index.html","f37522bff20e52d619210f61c712d469"],["/2020/12/06/python高阶函数的定义/index.html","45d49ca3f9ca5f90a93ab48469cade81"],["/2020/12/06/vue框架介绍/index.html","e12e6c8a251b21e2fcebea42495726b7"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","4d05495536f14c802803a48f95b7c498"],["/2020/12/06/京东全网爬虫/index.html","1d178a2e6c450309b2aadb0915c20b05"],["/2020/12/06/协程/index.html","f68d29b76b62c1b0f2ffb5d3c1060266"],["/2020/12/06/多线程/index.html","09918485ff954035302094d01fbce7a1"],["/2020/12/06/多进程/index.html","0c3d8c2dee7936286edcd07552248f24"],["/2020/12/06/数据可视化笔记/index.html","ac4a3d494406842ba0b74d810465895c"],["/2020/12/06/数据科学笔记/index.html","8d17a98dc0ff9aacc7af641c7b442aa3"],["/2020/12/06/斗鱼弹幕抓取/index.html","bc361b073ce40fa1ff43a737a5586ab7"],["/2020/12/06/查看mysql连接情况/index.html","f086ddf520427a76f112ff32f330d40f"],["/2020/12/06/正则表达式/index.html","8f2e5ac4e650199a1869fb7fb2bff0d6"],["/2020/12/06/第一次面试总结/index.html","c112997fa701ffe88676890693dc2db7"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","8df84b4374e39479f04dec34cb8eac0e"],["/2020/12/06/索引和事务/index.html","abbed22c9c58a3cbb5119c8466251027"],["/2020/12/06/网站概念/index.html","2c6f44664c9487e96b25bcf86d01ae43"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","e39c0adc26337f2b4579515cf7353125"],["/2020/12/06/计算机网络/index.html","98f302fbb593ea5d5fd88f50a76da057"],["/2020/12/06/设计模式简介/index.html","d1eae2a8703ab72dba8ed458f72264cd"],["/2020/12/06/语音识别/index.html","603792cfeeca5f498774ecb8c47afa58"],["/2020/12/06/轮询、长轮询、websocket/index.html","fae33bae81833a7b0b6cf228056ad2be"],["/2020/12/06/进程,线程,协程对比/index.html","57b6211aae4299510354362e23ada343"],["/2020/12/06/闭包和装饰器/index.html","1b785ccbfb9fd253f649cd6dbefa30ad"],["/2020/12/06/面试总结/index.html","9b15123e26350ca6f8675533c32e92c1"],["/2020/12/13/鸭子类型/index.html","db1a738958b4c9821075a5c9196bc99c"],["/2021/01/03/工厂模式/index.html","2995dc88615cf1a428c4285e5f51540f"],["/2021/01/17/RESTful风格介绍/index.html","b05a25dc0f60cf6467136c10cca90946"],["/2021/01/23/关于跨域和同源/index.html","02954d3d4e602425772bf0dda5710401"],["/2021/01/30/django的信号量/index.html","4786b31465757e8d9b1174bb94d0eb6b"],["/2021/02/16/创建型模式/index.html","72ef23430938167e13aff63c4b94ea26"],["/2021/02/17/asyncio之协程/index.html","ecb8e3bc45f5fc687159c4bd2da10d7b"],["/2021/02/25/结构型模式/index.html","22d94bb89be9860cf8ca238f75d10c09"],["/2021/02/25/行为型模式/index.html","8b6a2d6697b950ac6225c39269797e64"],["/2021/04/24/python元类/index.html","b52064995352acf7bd73b6cc920a9330"],["/2021/05/05/go基础入门/index.html","377b1c536c0f80c7c66170e0aa227d0a"],["/2021/06/05/Go面向对象相关知识/index.html","3bb5aaf0c4175404effd4166d36ee980"],["/2021/06/05/json、结构体标签和rpc入门/index.html","ccc207ac119267a442015b81bcdc6355"],["/2021/06/05/进阶语法(管道和go程)/index.html","9567dbfd812552bcdb834df792cac868"],["/2021/06/07/consul服务发现/index.html","1c1397aa025810da01ae7b220dcdd9c9"],["/2021/07/15/go协程和python协程对比和相关知识/index.html","a53863abc4031678ae549f1b7bd430a9"],["/2021/07/15/深入理解堆、栈、CPU密集型 和 IO 密集型任务/index.html","6528e6873d995c0ef80a01cd1cb3e473"],["/about/index.html","13ca24d9ecb85bf19a455c7b3bd8b329"],["/archives/2020/12/index.html","45a949dd49d8aafd4cfdb5b4a80be481"],["/archives/2020/12/page/2/index.html","4736960ec2bcb55f01ad33be4ab53395"],["/archives/2020/12/page/3/index.html","5c317eea18cd3f960ab1efc1da53b5ee"],["/archives/2020/12/page/4/index.html","d2a70f48582d5b89ad0dcb83296dcd61"],["/archives/2020/12/page/5/index.html","c16d7d49b72c59bf3d2f21726d7d6f1e"],["/archives/2020/12/page/6/index.html","818286179e885595bb8a929012c917b5"],["/archives/2020/12/page/7/index.html","c49f34d8089deddc3bafbcf5da07a623"],["/archives/2020/12/page/8/index.html","03258934db11075f4e25d06ade8dd87f"],["/archives/2020/index.html","46f2064627b6627205744258c3bcfe62"],["/archives/2020/page/2/index.html","4c652dc0c58cb177a9dd18d166f1942a"],["/archives/2020/page/3/index.html","3539d16f153e48a12b45b2afb414f3fe"],["/archives/2020/page/4/index.html","7a00e4fe9018539f00ed12ba93e18b2b"],["/archives/2020/page/5/index.html","26d6da11136fbb941fe77428427cd46f"],["/archives/2020/page/6/index.html","1d07815d958620c91e9fd2b1345c6e7b"],["/archives/2020/page/7/index.html","b02aec0f2a936f7151c5003d4203730b"],["/archives/2020/page/8/index.html","67a4000fe43b768b4a67f76f8a46136c"],["/archives/2021/01/index.html","12f6fbc6136e7fb4c5190b8998beff57"],["/archives/2021/02/index.html","be428a1f373a80a651600db6e87b6c63"],["/archives/2021/04/index.html","5de0d265a8974e7e5c864d16329a3853"],["/archives/2021/05/index.html","2c4aba8cf3af6c8967ef0190475fc3fd"],["/archives/2021/06/index.html","527d528eb779bae0c9b11c889771e7c1"],["/archives/2021/07/index.html","7bafa1b8670928b8d501b89329f24af7"],["/archives/2021/index.html","ee231d78fca42268f67820e8ac257e12"],["/archives/2021/page/2/index.html","2afd45950d6866f92e76a3de27280c52"],["/archives/index.html","267d50588194580891e542a299e9911a"],["/archives/page/2/index.html","93dd047090e482e19ef727a1b8331df1"],["/archives/page/3/index.html","55c2b766c6b70aade771536071015aac"],["/archives/page/4/index.html","2c313b2f482fb4aea58078c62ce2cb8c"],["/archives/page/5/index.html","9a43d28d99463e947f11dcc3199e5e67"],["/archives/page/6/index.html","0a7a612a65c13abeff69b7614e8e46b1"],["/archives/page/7/index.html","98a83de47eeae1c79c76ada8c19a674a"],["/archives/page/8/index.html","99d4447f5bb677bab28ca6987e8b7b7d"],["/archives/page/9/index.html","abe8706a6729dec8193afb9425cb68b0"],["/categories/C语言编程知识/index.html","01c7e3677605ce6841377b3d599a8499"],["/categories/Django框架/index.html","74db3cb6e2cdb6d4600faf2988c18632"],["/categories/Hadoop/index.html","39ae8ae91cb6e181e99990ad40770d94"],["/categories/Http知识/index.html","f7bef9e0a3fb037e6071977819d95b6b"],["/categories/JavaScript/index.html","412d5bb935020eb6a4aad7ebe9a6fe52"],["/categories/Java学习/index.html","5137955adcc8ea6180db56ef98800f0f"],["/categories/Linux/index.html","30f79df35c107483d584d69b37319206"],["/categories/Linux/常用命令/index.html","eb8ca0bd4bb3e46c21d5f7a232f214a1"],["/categories/Linux/核心知识/index.html","e2ae8c38f36efba7bb3ddfa1573df0b3"],["/categories/SQL知识/index.html","96b4dcd07771f878e0fb370948f4765f"],["/categories/docker/index.html","4ecd7111e295d1fdcb29a410a09b2c38"],["/categories/git/index.html","7ba8ce5ee440008c4dda549d9c80f5c6"],["/categories/index.html","edc599aefaf853c42e88f76dc716af4f"],["/categories/metaclass/index.html","f6e67db9b84307ffa31b1c70f4a99f3c"],["/categories/python后端架构/index.html","a26e53a59f196a87ecdde1bb85211e46"],["/categories/python数据挖掘/index.html","f3305b9b5d27557037ec19682002993b"],["/categories/python爬虫/index.html","d5c4fcd928ce51379eb3bb472d8560dc"],["/categories/python的web框架/index.html","93aabc0e908b6616aa8887dab511bb6f"],["/categories/python编程/index.html","811cced4ecc99d68471d70695b1dcf98"],["/categories/python编程/page/2/index.html","e43bcb60466e1bc149b439f973c361ff"],["/categories/python进阶/index.html","a0a9c4798dbbbb53d035c2f22b00622e"],["/categories/selenium知识/index.html","2fa239cda3d7971fe0783e4976305b57"],["/categories/个人随感/index.html","a5b3e73e9ef3a8b873b88753a9fb7e2f"],["/categories/前端学习/index.html","369fc6af1432c284df379e235b52f9fb"],["/categories/后端接口风格/index.html","3647670effb0bdd7c1884aaebf3425f8"],["/categories/微服务/index.html","4d2dfd8d9749a066a4167dddad3dbe4b"],["/categories/操作系统/index.html","887f8e1051adaa6511960f5ba8847513"],["/categories/数据可视化/index.html","081d5477e9be55b3d36b28ca24e50ab5"],["/categories/正则表达式/index.html","76e84af38819c8eac6fe7ac4c973e8df"],["/categories/消息队列/index.html","213df8275fc46374dfd226d5d222a821"],["/categories/算法/index.html","bef8494f3b3ec46008474e6d61010232"],["/categories/算法/五大经典排序/index.html","a7c08292f9a8ecb62e978cc44f452446"],["/categories/统计学和概率论/index.html","0b6b3e93800becc03aa6a594213648bf"],["/categories/编程语言/index.html","9b0f77562a808e03bd27c6f12eac84bb"],["/categories/网站知识/index.html","e1a21dd71e4f8dca1f4f4fc5ab5463ca"],["/categories/计算机组成原理/index.html","0e419f8b4061467417ef7e918b1cc1df"],["/categories/计算机网络/OSI七层协议/index.html","4c44591df888635586f970bf3f89e24b"],["/categories/计算机网络/index.html","adaa84559617016c1f07be42224df339"],["/categories/软件工程/index.html","0a6a70f8342a5b90818ad98b9918a390"],["/categories/面试经历/index.html","5ee639f1bb9d9845994bd0bb5ba1c87e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","53433a0b6f45942ced8eb2782a3b5430"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","8a14cfe5261c62768f78c2b085d3aab1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e5c91030c54a9ffec2a7bb8ba671f15b"],["/page/3/index.html","6a68f5a27613fed2432bcd09f6bd07b5"],["/page/4/index.html","1c7e12f0241393cb39394497d588fd8d"],["/page/5/index.html","7289e18d78fd781e928860e560b4225b"],["/page/6/index.html","4eb96a4a357953e20b5e46bad028924b"],["/page/7/index.html","dddf9b896420913712d1a36f5355f708"],["/page/8/index.html","e306b7fb2ee6edd8a1fe2ed0eb023806"],["/page/9/index.html","7f4e082d59f40530f4c83092123291e4"],["/sw-register.js","e18a27813cfee8b5e08fd7bd259da247"],["/tags/Cookie和Session/index.html","4240dd8b0b9acd56a706baee2005446a"],["/tags/Django/index.html","ef4071494a7b4fc7986b5757422f5851"],["/tags/Django部署/index.html","f1f4ff4ddc62612bb4ba2cda4df41d42"],["/tags/Django重定向原文/index.html","97538e181f6575af99676e28c0f433a1"],["/tags/GIL锁/index.html","a7e42d2e60ea752b1419cb5e81210a39"],["/tags/Golang/index.html","b74141acacc38fbb1612fca9d0b41644"],["/tags/Hadoop介绍/index.html","56c83e1c973f79c3675ce52ee9131bcc"],["/tags/Java基本知识点/index.html","3dce403683ca1a5c04ad03eb77141658"],["/tags/LinuxLiunx命令/index.html","ed2fd9708838ab16037744b8b951708c"],["/tags/Linux知识/index.html","e43340a95777d70a47bf76864d3ae532"],["/tags/ORM/index.html","f9112d3bc20dda8506126ed002d78798"],["/tags/QuerySet集合/index.html","51489b72adfab6315b1822dbbc88b607"],["/tags/SQL函数/index.html","74837671582774cf9072aa5a6fd9961a"],["/tags/SQL命令/index.html","b6e9c6d3fbeb2242edf3d7843bfc240d"],["/tags/SQL概念/index.html","278fca85ff969a05ade8f61dfe9f61c9"],["/tags/SQL调优/index.html","5a3da77f5a9c921cc18770daf88838d3"],["/tags/Void-知识点/index.html","10ca6be39f57798cf335143c2844321e"],["/tags/Vue框架/index.html","6a3925936cf3a5c6d5f829a3435dde51"],["/tags/Web安全/index.html","bde23f69268658773cfb7269221d1a16"],["/tags/consul/index.html","ee16def4c0fb425b3e5419d7437d6983"],["/tags/docker知识/index.html","29d5b0f15e3b3729c09d54c3fc10a887"],["/tags/flask/index.html","1c219a6fd3d19ba36afc977f20242280"],["/tags/git命令/index.html","72fdd384c793e07a4dddbe7f7d2b9dd7"],["/tags/git配置/index.html","62dd294a5b31a12ad448348a752deda8"],["/tags/index.html","946117c74b0f6191f9ab062e1ef943a8"],["/tags/js知识/index.html","c4854be19787f308935f6612162b6a55"],["/tags/pandas函数/index.html","0166dbf6b43db8d32a5ac537800a8917"],["/tags/python编译器/index.html","86562977f5787cda4cd616022d4210b5"],["/tags/rabbitMQ/index.html","8d3b79cd30e21749d76d9a9c55051af9"],["/tags/scrapy框架/index.html","4c46f364e097c27f47c6abd1c66a2e09"],["/tags/selenium/index.html","cb017840402eeff7e5b01129ec96516a"],["/tags/websocket知识/index.html","e8f5b9e48980591edd334dbbf80561ef"],["/tags/上下文管理器/index.html","5601eb69f3bdef1c5b6b258f912ed15d"],["/tags/信号量/index.html","eda91d32e8285ba7af3aedba71b7d4b4"],["/tags/函数补充/index.html","86e7f1b62bd27479302d493f7bf94b3c"],["/tags/协程/index.html","b6325cbb8b3731a8b75dd6f26e88baf5"],["/tags/协程知识/index.html","bea43a35dee9795e45f0afe7bb93d9ae"],["/tags/基本知识点/index.html","503fa82bf6be7cfe9441099084c3a54d"],["/tags/堆、栈/index.html","9dcef732144ea332aef36d76a64884e2"],["/tags/对象引用传递/index.html","fc0767ab0420b3f9649cdb661f00fc8c"],["/tags/底层原理/index.html","253cad14e7e5cf0576130c99970628c0"],["/tags/扩展知识/index.html","7bd52e8d4762b5d16b403c9d1a965dff"],["/tags/排序算法/index.html","97cad0ad321f574efbb6fc7148b508f6"],["/tags/接口设计/index.html","86d752a30b05658da3b63c7306103eb7"],["/tags/数学知识/index.html","a6b19ffd2cf3473233eb4bcdc158d5df"],["/tags/数据可视化概念/index.html","36a4a158638b3a1a4fd9de97569976c0"],["/tags/架构演进/index.html","65df63aa7f87a85fedca5ff9ba87ba19"],["/tags/核心模块/index.html","817d267076c24756cbd3d830e0897dd6"],["/tags/正则/index.html","05292a88a22fd90011bdf6174ec54a2a"],["/tags/爬虫实践/index.html","1cdbde8456328fe70190f958b9aafa1c"],["/tags/类和模块/index.html","fdebede5be351bf9e30f952f29abdd41"],["/tags/类的知识/index.html","2a4a17d565bf4f1975cba0f0ee615bdf"],["/tags/线程概念/index.html","725f507d16696857044aa44e618874bf"],["/tags/网站的基本概念/index.html","e978b5e607fa6aad31d78ce054ab26a2"],["/tags/网络编程/index.html","28edcc5d92365f0f96a8b9cbfdb6fe5d"],["/tags/装饰器/index.html","cc813487077da6cbe5ec439a19d91239"],["/tags/计算机知识/index.html","3d1c0fd2d981cefafaa714e8cca84e86"],["/tags/计算机网络知识/index.html","95e3f3000c989200d4960d2c04eec412"],["/tags/设计模式/index.html","d5791c795a28e4aa05577fc7194ea10a"],["/tags/语音识别/index.html","6184cca6e97d22b4d24e04f73bfe4b22"],["/tags/进程-线程-协程总结/index.html","7ac96effe828cb619c06afbb7b795f18"],["/tags/进程概念/index.html","758790811f2511d36d2aa520fffb1907"],["/tags/面向对象编程/index.html","9be9d71e29c3d81d44e3abfb7d10a2b2"],["/tags/面试总结/index.html","f8b13ee6c389cf9d1914c12ea1152eb7"]];
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

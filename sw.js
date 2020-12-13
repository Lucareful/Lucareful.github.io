/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/12/06/12306自动抢票/index.html","333b7015526806580e5506dfe7fe8db6"],["/2020/12/06/C 语言中 void 详解及应用/index.html","563003a1f6b7a4e83ed533b58cb8f61c"],["/2020/12/06/C语言打包技艺/index.html","5244d5a1ac4eb99663477cf0fed08a93"],["/2020/12/06/C语言笔记1/index.html","6a6908918485b7746a038e9839066be1"],["/2020/12/06/C语言笔记2/index.html","87a2057fb08011f6403c7e51707ae5ba"],["/2020/12/06/Django 重定向终极指南/index.html","a410e8a13ad1ae640464e7dbcb4f7afc"],["/2020/12/06/Django参数和模板/index.html","80824452c204dd0d58a29c5e52dad143"],["/2020/12/06/Django后端演化/index.html","c3f8e8416e5be0c67cdb23fa9e1b1630"],["/2020/12/06/Django的Cookie和Session/index.html","5243888aa5f411ec02b8e64a4b1956c2"],["/2020/12/06/Django的Field详解/index.html","a7b7a5dc482ee566ff6bc8cad9302f1f"],["/2020/12/06/Django的ORM多表操作/index.html","fe35e8a9100940cb57a36f3340eb2004"],["/2020/12/06/GIL锁/index.html","86c3d03b833ffb9022a2fa8fc8b1fe6b"],["/2020/12/06/IP代理池/index.html","2d287ba664d428a13be1878450e5e79e"],["/2020/12/06/JavaScript的简介和基本知识/index.html","4c40a8bf43d0ed13bf467fbf1e95c451"],["/2020/12/06/Java面向对象/index.html","e3e74ca73d85c45235eb463403f63cdd"],["/2020/12/06/Linux常用命令/index.html","238e0f32711496d423f68be834c9ab33"],["/2020/12/06/Linux操作系统核心知识/index.html","c2b00b54124d8e83367d55a0e4cce103"],["/2020/12/06/Linux操作系统（二）/index.html","868dc027bd22b1db2d22898588eb60e7"],["/2020/12/06/MQ笔记/index.html","b13942560eef47460156b705f58994f0"],["/2020/12/06/MySQL数据库引擎和数据类型/index.html","116fd55ffc62878037fe08a4481f11c6"],["/2020/12/06/Mysql数据库函数/index.html","bc91b86ac6235b7b0eabf836e613b86e"],["/2020/12/06/Python 中的上下文管理器/index.html","ad20a4b77275d78a0c9e1fc9dc030215"],["/2020/12/06/Python的模块和类/index.html","632f458c5eb2d17a0dd339132862602d"],["/2020/12/06/Python类补充/index.html","d14630172dcb5739b0364f525d93acd2"],["/2020/12/06/Python面向对象/index.html","6fad01ef7e4e921b43f67b825a29fe55"],["/2020/12/06/README/index.html","302d58eb8c6e511b50d86bd66aae4f93"],["/2020/12/06/SQL性能调优/index.html","80941c02b1cbcdc47c0d7b39ee7256be"],["/2020/12/06/c语言笔记3/index.html","59eff3920d8e3814ca398868fcf6de12"],["/2020/12/06/django+nginx+uwsgi部署漫谈/index.html","cfffe4594851c17eae64d81907e3fe32"],["/2020/12/06/django之url规则/index.html","53437b55f923a7d0abcf7e187bccff1d"],["/2020/12/06/django的querySet详解/index.html","cb739c240032c52547d4c20c12e94d4a"],["/2020/12/06/django配置初启/index.html","bc12d5d90d95b5c4b548c078bfb54703"],["/2020/12/06/docker以及相关概念介绍/index.html","1da56e9bd29fd41711d5b8aac7c8c29c"],["/2020/12/06/docker信息/index.html","32221782400d975cf5ef2d73e66f439d"],["/2020/12/06/docker网络/index.html","b2911d33b3a48c99d05c3e430f8b4427"],["/2020/12/06/flask框架/index.html","7b8acb0d2efe08cbb682892a40d3a6de"],["/2020/12/06/git命令/index.html","820294264e051a636e18fd696664f211"],["/2020/12/06/hadoop基本概念介绍/index.html","79f9ebdab2901ccba5f1e969e9515826"],["/2020/12/06/java基本知识/index.html","9140d1bc02e3fcb75e3d34570aaa3303"],["/2020/12/06/java简介/index.html","433c0f4c7d59df691c59682b99d2c107"],["/2020/12/06/pandas函数/index.html","bf40becfaa9aff66897e8e869528c08d"],["/2020/12/06/python函数参数传递和返回值探究/index.html","a755a15c986487171c877ffeb05fd975"],["/2020/12/06/python函数补充/index.html","9cd5551a0831cb99abae4fe601ae4f3e"],["/2020/12/06/python数据类型的底层实现/index.html","00f72a12af7053092e2a42f4e621f203"],["/2020/12/06/python核心模块的介绍/index.html","81aec4f3bd8096301944275714fbe52c"],["/2020/12/06/python爬虫/index.html","b65f421ddaa1b0af5ee9271645215b27"],["/2020/12/06/python类的私有属性和私有方法/index.html","5bcbd6b2667c742f78a4b987904b1775"],["/2020/12/06/python解释器介绍/index.html","12235a93540639ac3cf463a829a8f9db"],["/2020/12/06/python高阶函数的定义/index.html","229995dcb0fb22b7f22f706507a03afd"],["/2020/12/06/vue框架介绍/index.html","b16ba3672817482992b7e6f290ad1c25"],["/2020/12/06/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","af9de27f47f581793e711141df243fd5"],["/2020/12/06/京东全网爬虫/index.html","c7e0a0c9977aa852416ebd1a96e838d6"],["/2020/12/06/协程/index.html","b1918f624967a5dc72493a1556ec0dff"],["/2020/12/06/多线程/index.html","7fc17d0f33b842a0e420d544cbd851f7"],["/2020/12/06/多进程/index.html","716b281e901b93865a4bf9f859e17150"],["/2020/12/06/数据可视化笔记/index.html","aa33e06f6d1cea00550cedd0047ba87a"],["/2020/12/06/数据科学笔记/index.html","93381e9ad77f6d8008261dc46645c082"],["/2020/12/06/斗鱼弹幕抓取/index.html","319e7cd68c4a89ad34933f34508304c4"],["/2020/12/06/查看mysql连接情况/index.html","8f4797ae765cce01f397b662634fb2cb"],["/2020/12/06/正则表达式/index.html","3091656c8a5cea550edb5050d75e24d6"],["/2020/12/06/第一次面试总结/index.html","b26ea4e06bfca37e3d08507a2e49d3f5"],["/2020/12/06/算法时间复杂度和五大经典排序算法/index.html","0950a16e5bbffbf1775a485ac48c714c"],["/2020/12/06/索引和事务/index.html","3339d5c678fa438d060ebdfb36e86d10"],["/2020/12/06/网站概念/index.html","69e43d8e45767091afbccf64c40c68b5"],["/2020/12/06/计算机系统组成及工作原理简介/index.html","1e5b81877d6a40fdfbbf783b093fd874"],["/2020/12/06/计算机网络/index.html","80a33d1044fb0d4268158e33c9ba9455"],["/2020/12/06/设计模式简介/index.html","446a8b5303d03f2b7878875aaed2824c"],["/2020/12/06/语音识别/index.html","488371e3d71de817ced2ddce3a1b0928"],["/2020/12/06/轮询、长轮询、websocket/index.html","48bc851e313c14a061ede688819818c2"],["/2020/12/06/进程,线程,协程对比/index.html","b1dcc8227ef2a13935f7443fe096bf3c"],["/2020/12/06/闭包和装饰器/index.html","47189849ca5d8cef8ac72a224807bd26"],["/2020/12/06/面试总结/index.html","6bf913962460f20d51025d67aa78d3a6"],["/2020/12/13/鸭子类型/index.html","200f4cf50ed5717364205ea70a89808a"],["/about/index.html","a578cb4564ddd33b363c1e5081f9525c"],["/archives/2020/12/index.html","d7a2abd9f9fe78d9757bbff5e0273027"],["/archives/2020/12/page/2/index.html","cf6b3f7c731fc2e31a61cf17fa21efb6"],["/archives/2020/12/page/3/index.html","61c6890143091c01541a6965c50bc60c"],["/archives/2020/12/page/4/index.html","8f57ff928d89da30ff341933f210a03a"],["/archives/2020/12/page/5/index.html","0c7872624ed6c4f4f82ab2df53c1ecc2"],["/archives/2020/12/page/6/index.html","b2edc32d1aa67ca9ae086452dd1d612a"],["/archives/2020/12/page/7/index.html","befb2e78b75cffe8a8dd19fedfa28e15"],["/archives/2020/12/page/8/index.html","c19f87d133a3b4d6bead0593b7bab7f8"],["/archives/2020/index.html","0fc27e7e44c2c458d9cf6b40c7728e14"],["/archives/2020/page/2/index.html","78f57dfa379fb905580cf06fa0dc0cef"],["/archives/2020/page/3/index.html","dd876afca90a28f287441a751637983f"],["/archives/2020/page/4/index.html","246dc30a99fec5334ec5f813fee76e74"],["/archives/2020/page/5/index.html","e202da59e6545cf1f3228c5dad253e5e"],["/archives/2020/page/6/index.html","9a497c02e24586896cee950494de6a8e"],["/archives/2020/page/7/index.html","e499862166f402759bae5c4517c85240"],["/archives/2020/page/8/index.html","d43451a136a4ce0346aa1e18e5b0ec64"],["/archives/index.html","a600f30039946f680170f2eab5a143f2"],["/archives/page/2/index.html","b245e4cdcca5c195558f2c00aaa6af2b"],["/archives/page/3/index.html","0c2ca59a57b226db40a687b53bddf458"],["/archives/page/4/index.html","8355f514fc191ed445760a8305762d80"],["/archives/page/5/index.html","b006263055d1325c354b39ed4ff847f0"],["/archives/page/6/index.html","b6dafac1d747f6b7ecd1b59afb129bcd"],["/archives/page/7/index.html","e7df026ea866f5e79297b4058392323d"],["/archives/page/8/index.html","9584593c9faa04dcd678c997ace32586"],["/categories/C语言编程知识/index.html","b1a973a7c650bdcd8c6a4771c23307dd"],["/categories/Hadoop/index.html","61e32393a977d35b88896b7008531938"],["/categories/Http知识/index.html","b9c8993997f53f79ed4d88f646fa5e3c"],["/categories/JavaScript/index.html","7888d77e8c428b9bb5faaa7d9c0122e8"],["/categories/Java学习/index.html","49ddae269967c20115f9881d7f76437a"],["/categories/Linux/index.html","ffc184fe0619a7da98479fde1b164938"],["/categories/Linux/常用命令/index.html","27e3f04d8be47d231565ff9598c9fb35"],["/categories/Linux/核心知识/index.html","7e7b176744558f698f4d2f28707dbb4d"],["/categories/SQL知识/index.html","1bed2b22aa56de79ebc86876cb1da000"],["/categories/docker/index.html","ed1a2cb10bffc3a8809df51efb6c5eea"],["/categories/git/index.html","6f20398ceed19c1d8729d0ae5f0a9a27"],["/categories/index.html","99eeb9cbfbc147ec3111a25645d48f8b"],["/categories/python后端架构/index.html","d5482cbaf3d87ddf97a2bc6c1b577a67"],["/categories/python数据挖掘/index.html","d61408818ac0cac0d39cdfa2280bd3bd"],["/categories/python爬虫/index.html","d526c179e585a762ba4e75811239a2ca"],["/categories/python的web框架/index.html","b914b66fd9a2225ffedaeda42de0b9e5"],["/categories/python编程/index.html","f8d869cdb8481976ccbe0abedfcef377"],["/categories/python编程/page/2/index.html","4421c723a6b8186085b3f140e22ac1f7"],["/categories/python进阶/index.html","c2965058e27c841352271622b43d8b03"],["/categories/selenium知识/index.html","50b6984bcb26a5bc8b8b7811cf4acb28"],["/categories/个人随感/index.html","f0c0531a09f4f92c0d4cca2e4ac2e9b1"],["/categories/前端学习/index.html","56ad83e7fd93341b22111aa1b2f132c8"],["/categories/数据可视化/index.html","0fc37b3fe2d37029dcd1408b8c5213fe"],["/categories/正则表达式/index.html","4308eb0bb51390b1db72fdd251d8db9b"],["/categories/消息队列/index.html","ba59c39b253abd3a323c3acdf6b7d793"],["/categories/算法/index.html","6bc03950f59dd7fb540a683f56bebc4e"],["/categories/算法/五大经典排序/index.html","72fc2b52b034ffaf3c35a5cc4a5cd2c2"],["/categories/统计学和概率论/index.html","000a46230efa1186f67f416be78d1a6e"],["/categories/网站知识/index.html","965062ab64d2f9dd278e7af1cd158d43"],["/categories/计算机组成原理/index.html","6202549a3913fe442958d55d97ee9397"],["/categories/计算机网络/OSI七层协议/index.html","37c8fe20602de6b0f71a446f0b5be92a"],["/categories/计算机网络/index.html","7d7edc6041ef2d34c4eb619f6ea28261"],["/categories/软件工程/index.html","8f583ec692597f15e880642d6ce98a4c"],["/categories/面试经历/index.html","09aa592a4c8a7e6cab76b7ac9a05a9d1"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","595dd3ee7cb1b190fe668145eba32794"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","ffb5850b27f2a3ad3ce1842c2e74cd47"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5b7c37c46903bc72095588c5cd6d7b06"],["/page/3/index.html","c2a8a3589b11000057a20356cba2fdc0"],["/page/4/index.html","1d225e6ae4182cabc487466a73e61a77"],["/page/5/index.html","0f0f1662bde7d219d4e3b0c938d5bee1"],["/page/6/index.html","b789b74d587dcc868a9a47a887c7876a"],["/page/7/index.html","f92054db1caa475102e395d81bcf36db"],["/page/8/index.html","66ddf4f3f0414c34555d244126da8013"],["/sw-register.js","6be61535e062346001daf91190c851f0"],["/tags/Cookie和Session/index.html","0688f1af663de9a8650cbb262b3e847e"],["/tags/Django/index.html","8a2e8091232d459eb3c9332c571d5d2a"],["/tags/Django部署/index.html","c87e0fd823d718f8626c635e68176d1b"],["/tags/Django重定向原文/index.html","f56795040e57078d60cc79395e3f5755"],["/tags/GIL锁/index.html","426d1c6bb34fe9441e97a1d103b95814"],["/tags/Hadoop介绍/index.html","4ec320b0c6943e62fb25191f38583f79"],["/tags/Java基本知识点/index.html","bb7abf620861a6c4ea993480e7f0ab0d"],["/tags/LinuxLiunx命令/index.html","67e2453a68d82ccc05d652d29d862096"],["/tags/Linux知识/index.html","92b530cb30e11dff39863b481118849a"],["/tags/ORM/index.html","cc8e1a16940a9d17be469bb3db5c7457"],["/tags/QuerySet集合/index.html","39759f79f935236eaba4e88e6794789b"],["/tags/SQL函数/index.html","dc9a6b95a074e42cced4daadbc620c3c"],["/tags/SQL命令/index.html","c9a00b954187737ae0ef43e225a5b3b1"],["/tags/SQL概念/index.html","d894b97e062a04fd3df10414f14e7bdf"],["/tags/SQL调优/index.html","578f964862965b08fa5c5474acd6e213"],["/tags/Void-知识点/index.html","9674c2a32e84c29fef36bed848bcdc1a"],["/tags/Vue框架/index.html","3834f956955c974eae6946abe2ea7ea9"],["/tags/docker知识/index.html","5fcfbe2116475ac99dcd499e393d8100"],["/tags/flask/index.html","06e9466d443572ede331689ed0e500d9"],["/tags/git命令/index.html","01e7767e3201fc20d5f31bfacb51df1b"],["/tags/git配置/index.html","6359da2b4c6c4c2abe8fb6df42fdcfd8"],["/tags/index.html","09aa11a4795e9171083d59dd2f7e6a57"],["/tags/js知识/index.html","16e0b5227bd1488ec37a9ecd1f3f5868"],["/tags/pandas函数/index.html","6352be59888c51973269a6afbc1697db"],["/tags/python编译器/index.html","e3696403866d903fa41931ab06affad6"],["/tags/rabbitMQ/index.html","54a57d7e35477f158288ab6250673cbc"],["/tags/scrapy框架/index.html","36e0afe27083093d3bb2f811930bec20"],["/tags/selenium/index.html","2cd17f2e8955ac041a2961a520766453"],["/tags/websocket知识/index.html","5f9c856286300efc2c5dc3fb87e40982"],["/tags/上下文管理器/index.html","c33a35094fee508d970fbac70e6d835e"],["/tags/函数补充/index.html","c73db6d9200b2f5c54dca94b6f761446"],["/tags/协程知识/index.html","aacd200d8e6ec2b98048c28cb6a9218b"],["/tags/基本知识点/index.html","349a3da7f86a7c12d9530d085773d6e5"],["/tags/对象引用传递/index.html","c34eb3ae38f5c013e28cc815df5bc2ba"],["/tags/底层原理/index.html","d76503d569b2be7fe6a882a832d1ed83"],["/tags/扩展知识/index.html","157e43221c27dac9ed408461ba4f20cd"],["/tags/排序算法/index.html","d9731a2370888c7491b4a0aa0783fbf4"],["/tags/数学知识/index.html","927cad471a3b8166d86204f6ff89a756"],["/tags/数据可视化概念/index.html","79ae6a76a59265a4d0d078f76b448218"],["/tags/架构演进/index.html","e94aea9e38905c97798599cc1a817121"],["/tags/核心模块/index.html","8dda31a4346c27c970ef88d1ee0e4e6c"],["/tags/正则/index.html","32226ad5f714cd3a02c88a34a653f509"],["/tags/爬虫实践/index.html","023a41d80f297cfb339dabcc19abee3d"],["/tags/类和模块/index.html","6ffe3c120ecc7ebac204f23926017ec9"],["/tags/类的知识/index.html","d7604ca7117594c69dacc2cfb85f5880"],["/tags/线程概念/index.html","0594816e2baad0705a39ccf1af6eaa51"],["/tags/网站的基本概念/index.html","ad3490ca0039d70ec315215f720bb192"],["/tags/网络编程/index.html","75e87599d50b5acf74d319d5559a8447"],["/tags/装饰器/index.html","29b75558c5e173e8c7a2decbcbc41a1d"],["/tags/计算机知识/index.html","e31b801adb1a9de02fed84742f33f111"],["/tags/计算机网络知识/index.html","b3959ebff753647efbdb47991bdbc5e5"],["/tags/设计模式/index.html","fdbfba3884c9be2e62258fdff651ca81"],["/tags/语音识别/index.html","8576bd4eb5327ada73474df55b1b0f9e"],["/tags/进程-线程-协程总结/index.html","ddf99c878263973b58a8199bd0a6185e"],["/tags/进程概念/index.html","f3643e541131dc27f47df131b028e4ca"],["/tags/面向对象编程/index.html","0d89a0b545bbcd82b3871474f6b4c81a"],["/tags/面试总结/index.html","b3d39940b7b54d7801c6049a4f2b86e7"]];
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

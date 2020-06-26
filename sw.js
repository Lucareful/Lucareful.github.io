/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","a3c5f7a40a2dec62fabeb65c97db2f20"],["/2019/06/26/python解释器介绍/index.html","29b9cf8316d8ff9e4061550c86618918"],["/2019/06/26/正则表达式/index.html","30855c95b7881b44fbeceff258fbdfb9"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","45681abc0161c8eb0c987d837103714f"],["/2019/07/06/网站概念/index.html","8a9c105193558f0b14481ba2ad05f150"],["/2019/07/11/数据可视化笔记/index.html","f332be7529918a21d8f89c5fc5944497"],["/2019/07/12/语音识别/index.html","9a14f438c6c06dd35613585db9ff4161"],["/2019/07/14/hadoop基本概念介绍/index.html","ee1a17a5e0de3f09c17028c8bdcc6051"],["/2019/07/14/数据科学笔记/index.html","09c007f0f2c2a058c93d1f7713cccadf"],["/2019/07/22/python爬虫/index.html","7c6dad0e38cb4920d4bc9baeac709b2a"],["/2019/08/25/pandas函数/index.html","50f432bd8b623f7caa33f75e0b869420"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","418e381fc03a8a46ee081e2ccb2e746e"],["/2019/09/30/C 语言中 void 详解及应用/index.html","5bf3a114e6b58b6cb74436111a965ba6"],["/2019/09/30/第一次面试总结/index.html","136d16739b807e1b98c83984753f51e3"],["/2019/10/07/django之url规则/index.html","5e96c6a8ffae47ad6842921367ad501e"],["/2019/10/07/django配置初启/index.html","3095c1ddb86685b3f14630f22e3f512c"],["/2019/10/13/C语言笔记1/index.html","b8e5f47dabeed3848cf3ed80fcec3b1e"],["/2019/10/13/C语言笔记2/index.html","787f22bf343a99addafc8b8c532d43fc"],["/2019/10/19/C语言打包技艺/index.html","5d8a4973f684a2afab7bceaa8243abd6"],["/2019/10/22/c语言笔记3/index.html","6427d08f867d28961abfd4ef520df072"],["/2019/10/27/IP代理池/index.html","d25caabe982051217c757b2fc1f2cc80"],["/2019/10/28/git命令/index.html","e4ab982c1f192c7cfaf7bbc0699c8467"],["/2019/10/31/斗鱼弹幕抓取/index.html","1486b2c0c590d01a44f359dd51961e53"],["/2019/11/13/多线程/index.html","fa047ba5c67af7a3984ce4d26b4caf19"],["/2019/11/14/多进程/index.html","a1001e2eb14fe301c6912934251639c8"],["/2019/11/15/python类的私有属性和私有方法/index.html","adb59ba71edc579e13cff829e338e0d8"],["/2019/11/16/协程/index.html","77ff77aff2ae82efded51291b2859dd1"],["/2019/11/16/进程,线程,协程对比/index.html","c00ca4b30c3e33141723525a9ae0ca4f"],["/2019/11/17/GIL锁/index.html","5dd567170d7e873b9cc6a16cc03dea3d"],["/2019/11/17/闭包和装饰器/index.html","79dc2a19796a7ec0a9b51bc8b162ad81"],["/2019/11/19/Python的模块和类/index.html","ba0e21db23db0c654cb68fb32f111ce8"],["/2019/11/22/京东全网爬虫/index.html","eec6b847580d96508b43fe52ecd0be4b"],["/2019/11/23/JavaScript的简介和基本知识/index.html","3768ed2e385056b401cdb4b6cf9dac44"],["/2019/12/04/README/index.html","2061060d493939822e26b493371de83e"],["/2019/12/04/java简介/index.html","2889d5ce7fbee546b7036d13bf387754"],["/2019/12/11/java基本知识/index.html","0269e6179f31eb06d760568f264e76e9"],["/2019/12/17/Java面向对象/index.html","1d00c2b3077de84f8fda547c71e15204"],["/2019/12/19/面试总结/index.html","ae94f15ed1c8677ffe35a6331fa2348a"],["/2019/12/20/SQL性能调优/index.html","20dd814a0f3cd74d2777ee6b8f19b758"],["/2019/12/26/vue框架介绍/index.html","66350cd0b1714cfd25d556ed0d3746a8"],["/2020/01/02/12306自动抢票/index.html","aad54a0f46b38d3c7feead73941005e8"],["/2020/02/24/flask框架/index.html","0418ac8e02a9bee9f132f41a96c66246"],["/2020/02/28/docker以及相关概念介绍/index.html","b36778102a64669120ac1a54946fd2a5"],["/2020/04/05/python数据类型的底层实现/index.html","aa28a3a2eea4f7ea622f9c573d5b0926"],["/2020/04/27/查看mysql连接情况/index.html","75d1ce6dcadadf7774d60bb742a91371"],["/2020/05/02/Linux操作系统核心知识/index.html","de1cbfc5bba64c05ed349dd02e0c42bd"],["/2020/05/02/计算机网络/index.html","e7d1150118aaf2d0b5997357e4ef8336"],["/2020/05/06/Linux操作系统（二）/index.html","c110e5f66f0eba90c67f15d3bd2459a3"],["/2020/05/14/python函数补充/index.html","3f970d14f91119173b10ce4c2f5ccd1b"],["/2020/05/21/python核心模块的介绍/index.html","ea30c6827b7b52dc6d3e6434de3cbbec"],["/2020/05/21/python高阶函数的定义/index.html","6806c46bd15779badc1630023390d714"],["/2020/05/23/Django后端演化/index.html","774305c7c156727a96ccf0eda7f48032"],["/2020/05/29/Mysql数据库函数/index.html","b6d2279c1be4a0f55de68c6bbfb97bdc"],["/2020/05/29/Python面向对象/index.html","e1725c911cd48e27559af94f8dfdcafd"],["/2020/06/02/Python 中的上下文管理器/index.html","2f9824c3bf1f3e9ea726e0937a249a8d"],["/2020/06/02/Python类补充/index.html","0fee2a4dfdd978e2c5321d36a7f48644"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","97969991cad0d6dd84b97f70c61c6727"],["/2020/06/07/MySQL数据库引擎和数据类型/index.html","96446b5d14481b7b03998d0b10fe8e64"],["/2020/06/07/索引和事务/index.html","a9246dac8d2750f57e8623b28c50229a"],["/2020/06/14/Django参数和模板/index.html","1d343275bb25b757552900b8b4c6b643"],["/2020/06/16/Django的ORM多表操作/index.html","1398f3f0a08e1c473c9acf2bc9c72f3d"],["/2020/06/23/Django 重定向终极指南/index.html","037e6245adff73782e9a3a05d8a62dff"],["/2020/06/23/Django的Field详解/index.html","4ffa81ca937ba4970b558a71454ef16f"],["/2020/06/26/Django的Cookie和Session/index.html","586a2c3b9612b03dfaa9a64e68672fb2"],["/about/index.html","24ba10d0a3e9aeba5df1f3360c6be201"],["/archives/2019/06/index.html","e4275e3cc86c86694ae05a9ddec26e80"],["/archives/2019/07/index.html","50a9ba386aa0f3ff414f678236e33433"],["/archives/2019/08/index.html","21d47de66d54d3a78e37a9810dfd6da6"],["/archives/2019/09/index.html","f884dbb38cd6ead338ba5d1ba65ffd60"],["/archives/2019/10/index.html","007208d2fe272ce3dc81850a923b9625"],["/archives/2019/11/index.html","7eeb951f9877f49a1a948c87098ec513"],["/archives/2019/12/index.html","07651796875277464aeac99f39f6c832"],["/archives/2019/index.html","4083a4582734b15aa6a8aba66d24a1a4"],["/archives/2019/page/2/index.html","c3113d088206c7f736336fc77fe37f31"],["/archives/2019/page/3/index.html","58606ea6d302102c84c0b4ed44b8d67c"],["/archives/2019/page/4/index.html","18d52ae1fa74fa513d90849fce6da40e"],["/archives/2020/01/index.html","7d7c3c6a416bde26fea69493d988d232"],["/archives/2020/02/index.html","9d1f5173b8a528cf7affab273db1fcfa"],["/archives/2020/04/index.html","7e424696e1fc366abecc356579f863b8"],["/archives/2020/05/index.html","6c7cf8a65ad52e4de4b9d7d6cb6a9ffb"],["/archives/2020/06/index.html","e42457e16e2a627252917f22e4349e57"],["/archives/2020/index.html","d1154a8f006b3023901f88adfef02b47"],["/archives/2020/page/2/index.html","4681b13214ca238f1a7efa1d8dfb7383"],["/archives/2020/page/3/index.html","ab292d52155673102558711ff33d5718"],["/archives/index.html","34c59a079b29369c5da0fbcb12c16205"],["/archives/page/2/index.html","5028ce280d6761ef24d761fce93928ad"],["/archives/page/3/index.html","fb913f0c267495ea6584cb9d8eda366a"],["/archives/page/4/index.html","296a80201bd5c8080079d15731e91d50"],["/archives/page/5/index.html","32bc06b7626b65f7c5285117fe281628"],["/archives/page/6/index.html","1d968ff29925a47a477827ef660a3fae"],["/archives/page/7/index.html","d14acca4f8aae7419e72b853a055aba7"],["/categories/C语言编程知识/index.html","1958ce415a7d0eb0d7d764782351bfda"],["/categories/Hadoop/index.html","a9e6aa250e553a234a734c9bd09156cb"],["/categories/Http知识/index.html","bf89f779157f618d59b542d60fa25b51"],["/categories/JavaScript/index.html","5cffc37026bcf2179871ad03bcb9d000"],["/categories/Java学习/index.html","b5364b94003b36e6dd7542fbe5b14bcc"],["/categories/Linux/index.html","4876065ba706f4d418cb77dd022803e1"],["/categories/Linux/常用命令/index.html","c949fab089bd117f145e97f627db89dc"],["/categories/Linux/核心知识/index.html","d913a6e64b4a69ed9d95ee7628fd5f91"],["/categories/SQL知识/index.html","de6352d5e5f41eb9f96adc9bbd68e162"],["/categories/docker/index.html","a64971b0b004746318a6262dce376934"],["/categories/git/index.html","c369fc6ae874f8fb9ac5a1bd7635929a"],["/categories/index.html","f765a2db66381dba4e6de42f00a2721d"],["/categories/python后端架构/index.html","55f37e5ae2f4de720e5747b9afe5e139"],["/categories/python数据挖掘/index.html","1d823af78e7d352457f1e0e633f27365"],["/categories/python爬虫/index.html","6f4cdecdc7045b2ae34cc093ddb26005"],["/categories/python的web框架/index.html","095efde8f8791a55610beb183a664e67"],["/categories/python编程/index.html","275609dcd48f2db58c00f7ca5c4a7397"],["/categories/python编程/page/2/index.html","23f9765978e420f5a4bdfd490c9e64d7"],["/categories/python进阶/index.html","8b2fed1e7f0a5d0125ac826a05d0bf6a"],["/categories/selenium知识/index.html","5bf0e570aae26ef3f76f9448c50f182f"],["/categories/个人随感/index.html","e6a3114887f3ecf4f3e1b350c7509bdc"],["/categories/前端学习/index.html","d58fc34354e494b1dbc7da57f04ed6fa"],["/categories/数据可视化/index.html","9e0e8cf1413270a45b001f577f543bdf"],["/categories/正则表达式/index.html","3ba23c0d2d0f90425ee5c3f5db694c79"],["/categories/算法/index.html","7b6b188717e1cc42111d095f4e0faa8e"],["/categories/算法/五大经典排序/index.html","c68947fbdc28415bdfdb315526d0b079"],["/categories/统计学和概率论/index.html","a85966c8d35c0119084aa4cecd0c8f1e"],["/categories/网站知识/index.html","9196fd7df3194ab7551315d081185b21"],["/categories/计算机组成原理/index.html","3b06ffc79f901e71143a9ef1c9712ed8"],["/categories/计算机网络/OSI七层协议/index.html","fe5ad78738ed4fc97c17c08306f2a87f"],["/categories/计算机网络/index.html","33ed2a6f7c841ae47490ef532c9db7f1"],["/categories/面试经历/index.html","279fc53683107864b44c0f1ed9a4d8f4"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","db8d49cf9a8e188c4da5644a2bc2ec9a"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","6478159a315c8ea22b482a98d941edb4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9a6e136565f3e4db208635fcfcac451e"],["/page/3/index.html","56c1ce63e63be5fce51326768ae744b8"],["/page/4/index.html","5c91d85fb9b60e199c0997bacb9b2a00"],["/page/5/index.html","126d52c9f204b835564fbbbcf18e94b7"],["/page/6/index.html","5dcb30853ed661c9309f10b3701553cd"],["/page/7/index.html","10f48a56254d41f5a4cc2c17171d5f2c"],["/sw-register.js","50d6a491b1447a4b05d9d473f0f32808"],["/tags/Cookie和Session/index.html","0c9a90a980dbd5d42596e27fa8d02979"],["/tags/Django/index.html","0e334912c2fcaa89284947ae274b2696"],["/tags/Django重定向原文/index.html","9fa25ae7a489839f5e72b1620e73db70"],["/tags/GIL锁/index.html","287c5e6836491db74ec7bfaf7e326dd3"],["/tags/Hadoop介绍/index.html","e6a8b39d675faf6c7c7745818d3be5a3"],["/tags/Java基本知识点/index.html","bf9ed30028619a5dfb71424462fe28be"],["/tags/LinuxLiunx命令/index.html","269b8e73cd80f69af9e100ea65fbfcc6"],["/tags/Linux知识/index.html","83d1da48c0cc95a3e1b2347469af123e"],["/tags/ORM/index.html","b540e83056133c23669c947b59bd88e2"],["/tags/SQL函数/index.html","537a42d32c7165bbb467d91d53255772"],["/tags/SQL命令/index.html","531e8d232886b1f7875f6bc7f5b99823"],["/tags/SQL概念/index.html","00c811d47c1998d0965c16019f5a433f"],["/tags/SQL调优/index.html","e2bc82ab23886315088e540beb8b3036"],["/tags/Void-知识点/index.html","5488a1d39f9da4c98006ca4b0e02e297"],["/tags/Vue框架/index.html","0384c6ad88d54ade4f0f17fba19a875f"],["/tags/docker知识/index.html","f325804d5032e1697bba03013d2ffc75"],["/tags/flask/index.html","81021773ddd9509be243583790478cc5"],["/tags/git命令/index.html","8a7d50ea42676bb27e8ddb67dba2a9d9"],["/tags/git配置/index.html","a960725701ca7ef33b7bf901a50b548c"],["/tags/index.html","580d94be2b2550245efa30cce11f23a8"],["/tags/js知识/index.html","654684841f0c3f3fc6d8de8ac89eaf5c"],["/tags/pandas函数/index.html","877fa18c4e72a76023fcb3ef37d3c746"],["/tags/python编译器/index.html","f1bfb6088066999d7fd4ade4edd5fb0c"],["/tags/scrapy框架/index.html","05fb58d2b92b551867b3ec2b0c1f2807"],["/tags/selenium/index.html","6b1295d99c268968ce80dc952072faae"],["/tags/上下文管理器/index.html","7e5657976b3d02b50adbe54b6f3b7a42"],["/tags/函数补充/index.html","e997422845a8845c97a368b053838ece"],["/tags/协程知识/index.html","924d700fcf7300a070d4916c9c8852e3"],["/tags/基本知识点/index.html","05aeb16daf859881773d4fd597663d57"],["/tags/底层原理/index.html","4b09fd27d4432bbd9788dc46ed0854db"],["/tags/扩展知识/index.html","dbb395d4ffce4588eee36829478bb29d"],["/tags/排序算法/index.html","1fac439ae3ba7ef551918937ef8673fb"],["/tags/数学知识/index.html","06153a23349b07c0e6be8496de096eb8"],["/tags/数据可视化概念/index.html","2fdeae3bd17ed743ebf763e2e351536d"],["/tags/架构演进/index.html","bbcc04b29aca4b27cfd3a3118428d0ce"],["/tags/核心模块/index.html","79e08d2f4cbd342fc8fbb7855ec0fec0"],["/tags/正则/index.html","d85768cf1ea322512e6883d3c2caaec1"],["/tags/爬虫实践/index.html","3b0a4153e9a6c46c7717b56b6fb1eaa0"],["/tags/类和模块/index.html","92b132f923b76522335d25a5e60403e1"],["/tags/类的知识/index.html","a9729b81288a7e6aef4edb8de91851ba"],["/tags/线程概念/index.html","4e47bd0dc24df1f51067b5e7d12c1715"],["/tags/网站的基本概念/index.html","1f8b994f9284a92497ae4e1b3eb46ce3"],["/tags/网络编程/index.html","ac9e0eef173e1af1b1972124066e2fc7"],["/tags/装饰器/index.html","4d241b6eacf4f9d1c5cde95280fffcd6"],["/tags/计算机知识/index.html","bcc8f40f1ef29875804b2db003d1c12c"],["/tags/计算机网络知识/index.html","20c3e6c31fc5314399feb82c9e8f0db6"],["/tags/语音识别/index.html","173804e93574b21534974ec02b667b3f"],["/tags/进程-线程-协程总结/index.html","e8c101eb0ebb502ffa6518f3fa5a28b7"],["/tags/进程概念/index.html","a078ce070daeb2010869a52aef24cada"],["/tags/面向对象编程/index.html","d739ed0451469e54bff840d01f6c96b8"],["/tags/面试总结/index.html","bbef6f374dd086880208944a55110a09"]];
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

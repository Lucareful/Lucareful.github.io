/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","c663c30b2ef9ce79b9594fd8ed188ac2"],["/2019/06/26/four/index.html","3ce95ea8974fb5b4881b0a3afb0e8972"],["/2019/06/26/python解释器介绍/index.html","09ac871f527002dc0dcfc7458dc69fa5"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","41f2724e61addd484b6c3b9caa12bdd4"],["/2019/07/06/网站概念/index.html","36ed43c72281c94e99314dfd5f84a423"],["/2019/07/11/数据可视化笔记/index.html","099006729751a349e2b7e877ff9fd081"],["/2019/07/12/语音识别/index.html","671d05203cb86adaf4f32c2686c50538"],["/2019/07/14/hadoop基本概念介绍/index.html","c270259c7730080d565b925a3e34f50f"],["/2019/07/14/数据科学笔记/index.html","b46a1b5987b31155a1dc782f3b540ca1"],["/2019/07/22/python爬虫/index.html","1954ea65edcb0e2656bd16edab9ca960"],["/2019/08/25/pandas函数/index.html","42b91b7f493f037a953d6fd7a6442f8b"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","b560f5e52294c98b890c854042afed4f"],["/2019/09/30/C 语言中 void 详解及应用/index.html","5ffd3e2eb4ed8468a97beffeb3ce500c"],["/2019/09/30/第一次面试总结/index.html","43b5040cecbf8002ae981a2e75adf4c9"],["/2019/10/07/django之url规则/index.html","f8ab275ec485ead50d2a65d83898c775"],["/2019/10/07/django配置初启/index.html","bd81db876f45015e3f9fdadb12387055"],["/2019/10/13/C语言笔记1/index.html","28bbefbf7d0f33b157d5816e76d87bb3"],["/2019/10/13/C语言笔记2/index.html","3eab7399b959b680dcce86d81ebc7e96"],["/2019/10/19/C语言打包技艺/index.html","0c335aaa5576f6689c0676db924e5896"],["/2019/10/22/c语言笔记3/index.html","4342d0bab027bf84886d37c1530cf713"],["/2019/10/27/IP代理池/index.html","6732a5343488a014fdd25c8419ba1b2e"],["/2019/10/28/git命令/index.html","c0a3069072958d09ca9bc26d30d349db"],["/2019/10/31/斗鱼弹幕抓取/index.html","d75b071e7e68773e38894e8c40fdce5f"],["/2019/11/13/多线程/index.html","d07ed4263bf247e8acf029cc0e333fb3"],["/2019/11/14/多进程/index.html","c22fc8a66b33ef257a0917c456ec4728"],["/2019/11/15/python类的私有属性和私有方法/index.html","b97e206c3bc81b033e94773c298ceaeb"],["/2019/11/16/协程/index.html","e06754b2ec42cb4a5ae00507388e74d4"],["/2019/11/16/进程,线程,协程对比/index.html","785e333bd46a1d46018e56d8891ef039"],["/2019/11/17/GIL锁/index.html","be5a337198e00f517efc374fb2b8890c"],["/2019/11/17/闭包和装饰器/index.html","58444cafe09d64b92e3d8a388a0d9abb"],["/2019/11/19/Python进阶知识点/index.html","0d51dbe79a7d0aacba92acc17560a042"],["/2019/11/22/京东全网爬虫/index.html","7af21e27941d30930d0da4b7aed7ade0"],["/2019/11/23/JavaScript的简介和基本知识/index.html","2524e8bffea0e02ecf7b28ea9bc3ff40"],["/2019/12/04/README/index.html","812ecc4480f33e5c175ef59b3d514db2"],["/2019/12/04/java简介/index.html","1c5f05ccb8cffdbf573eefc217c1774c"],["/2019/12/11/java基本知识/index.html","bf4c8d8b47ee1b6973c20466ddcfa1a2"],["/2019/12/17/Java面向对象/index.html","2a5419fe59e7abe416f697a143113d96"],["/2019/12/19/面试总结/index.html","7d9ef4591e53526e398f758a00bdeff0"],["/2019/12/20/SQL性能调优/index.html","0afc6756adea1aaff7f5892e7baa16aa"],["/2019/12/26/vue框架介绍/index.html","6c68e2160ce6b78bf7831eff9fd7259c"],["/2020/01/02/12306自动抢票/index.html","8e99bdc9960c0907922c238e5ed531ab"],["/2020/02/24/flask框架/index.html","ff63da88f38eaa4cbe447720436fded5"],["/2020/02/28/docker以及相关概念介绍/index.html","731610460cb21afbeae14949727802e7"],["/2020/04/05/python数据类型的底层实现/index.html","d899b1fd2321ff87c8339e885a8ca122"],["/2020/04/27/查看mysql连接情况/index.html","7993cc06f1b7547a6211def32dbff970"],["/2020/05/02/Linux操作系统核心知识/index.html","56547f7dbd08bf1fec8cc92467a5f208"],["/2020/05/02/计算机网络/index.html","f11cb353d99763a303f4621d889c9413"],["/2020/05/06/Linux操作系统（二）/index.html","142bd497470f3f7450e043d3199fa232"],["/2020/05/14/函数补充/index.html","80b613e8062d083ee368a40a6e87d0c4"],["/2020/05/21/核心模块的介绍/index.html","d1339853b2ee5b237726146d2ff76e7b"],["/2020/05/21/高阶函数的定义/index.html","cd333d6a495d9539cc1687ac95c86315"],["/about/index.html","d6f36a915d0bd64285a0506a82777671"],["/archives/2019/06/index.html","3cec1bece739462804207a673e1c1b33"],["/archives/2019/07/index.html","bd65c69f21555209bf00d58831675f2b"],["/archives/2019/08/index.html","8f1b59ad4fce7984ffc9171525116c66"],["/archives/2019/09/index.html","24b1f2efc93242b1d1ab532d98d62f6f"],["/archives/2019/10/index.html","a8e3aa348e7c94b2995efceb3bc3210d"],["/archives/2019/11/index.html","00862f43fabef499656097e66eb20ba9"],["/archives/2019/12/index.html","7a25d9c7babee50efabe95afe642ddfb"],["/archives/2019/index.html","0dadb2715f1c30e039ad1b8f8e00457f"],["/archives/2019/page/2/index.html","c43b10baac44cb09b67f4c3f0559a618"],["/archives/2019/page/3/index.html","b58e92acceab217f60458d5d1a81e215"],["/archives/2019/page/4/index.html","db41e925e9118d054ec0b846e08b843b"],["/archives/2020/01/index.html","523185f75e07fa032d6ef64229a9c921"],["/archives/2020/02/index.html","c8ca00e48f0cecf73a2dd7e14d8fd468"],["/archives/2020/04/index.html","bc1ee6342244f060672905c9364e6a52"],["/archives/2020/05/index.html","a20e143d2a5262979c1ef1af72816f6f"],["/archives/2020/index.html","e18e3d306afe0a7d31227e0680a32ed0"],["/archives/2020/page/2/index.html","29e23ce674ca9b4c5ff4c61548033b3d"],["/archives/index.html","d7812de69becaa3431cddd6c3faf1f71"],["/archives/page/2/index.html","bc5636f345160504423dc6c0df4685ae"],["/archives/page/3/index.html","eab1233fc8e577a82544c49daa80c6d8"],["/archives/page/4/index.html","f173fe09b87d486d7d6e03c17c7e86b2"],["/archives/page/5/index.html","fe267af5259c8c4c126aafa0b873dfc3"],["/archives/page/6/index.html","0d03cc80f53aa35f3867adc850c4f28c"],["/categories/C语言编程知识/index.html","8bf400ce4e9f625cba70f62e92a9c2ff"],["/categories/Hadoop/index.html","45325784b88032b9d588df335d14d9cb"],["/categories/JavaScript/index.html","dead28045ea1da5e06644130be390f4d"],["/categories/Java学习/index.html","81187fbfca5333035ee86cde9fbbfa7c"],["/categories/Linux/index.html","8969b99022d4897f70c3481eab307b84"],["/categories/Linux/常用命令/index.html","492991588c5ebb221103a557039f5216"],["/categories/Linux/核心知识/index.html","8f3c9a8b278d87a86e32ab17f1924268"],["/categories/SQL知识/index.html","9eec65aa7c07c6ad84e6a6b618713b83"],["/categories/docker/index.html","a1652aa05cc696f45c625124094335b4"],["/categories/git/index.html","636f05f96d19cc37dd9886b3ad167b2a"],["/categories/index.html","eebdb8bfdc4b5688607f993167d77a13"],["/categories/python数据挖掘/index.html","882a0570b2a9ef50912c3268e32700a9"],["/categories/python爬虫/index.html","761aaf23a0ce077b72bef4b55826da37"],["/categories/python的web框架/index.html","ba8f7d2d0507de1f298f3f38dbcc784c"],["/categories/python编程/index.html","d5ec7c6bedecbab6ed341ad288fbe942"],["/categories/python编程/page/2/index.html","85d2f2a002b10a6dfd1035e93d71411a"],["/categories/python进阶/index.html","d97aeb3b66764f846f773304eecac06c"],["/categories/selenium知识/index.html","9f04938715b6671edc969f7c35fe9aff"],["/categories/个人随感/index.html","1c181c3212a2858a9613e0ede2a37eb1"],["/categories/前端学习/index.html","7450404474c87577c479d5d4ffacf6ee"],["/categories/数据可视化/index.html","96c8373a56131edcd6e5107a0644e7be"],["/categories/正则表达式/index.html","399a90403b90060210dbe2b0400ba75d"],["/categories/算法/index.html","c5956c32f2858c375e9a4e2fdfd91aba"],["/categories/算法/五大经典排序/index.html","94985378a3862bda7155616b2e62b473"],["/categories/统计学和概率论/index.html","6594f64f3d1f662bb859e8797e8a516e"],["/categories/网站知识/index.html","cdb6fe6e6895f2c83c3aeb8315711d96"],["/categories/计算机组成原理/index.html","3f9f3ea30b8951c0074377af37fca083"],["/categories/计算机网络/OSI七层协议/index.html","032878ff2f9c7d60f21477d0b026c1b3"],["/categories/计算机网络/index.html","6d75ce486cc22e722e1292af45f276c6"],["/categories/面试经历/index.html","52dd8e8a7e8b68783c070b3355603d17"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","4a52802a71f4df13748027c5c19bf0ac"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","7b573d4f6827557a4a308963adce2e19"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8d211efdf575083d3a9d41cf6ae27690"],["/page/3/index.html","917a199ded653fd82f23b65473d8ec65"],["/page/4/index.html","566cff55e4e086048c13e2888fc973cc"],["/page/5/index.html","db6c25a10ffaeb465e71853dd5f71bc9"],["/page/6/index.html","84659c134dca418be347fdf78fc9e03f"],["/sw-register.js","5e2cf4f3e1641b42b09928f474a7834a"],["/tags/Django/index.html","0831e1c223e5439631274acda614935e"],["/tags/GIL锁/index.html","885643aacc1237e641ff9cb3c4210cea"],["/tags/Hadoop介绍/index.html","76534a97fab14c667c876e03b1bd1830"],["/tags/Java基本知识点/index.html","d0c55e4d77a67139ac0ea6e3c685332e"],["/tags/LinuxLiunx命令/index.html","a1daa7c17eb8bdac558b293491c283cd"],["/tags/Linux知识/index.html","8c457104a13ca76694a4c2acd8217003"],["/tags/SQL命令/index.html","b839c0d35c3b335f92ebcfa8051d8e75"],["/tags/SQL调优/index.html","2d82769579fd121015018671570d36d6"],["/tags/Void-知识点/index.html","8246e3887bd59d71eb59d7f9af14e39e"],["/tags/Vue框架/index.html","1b40a11ccf3f5b162f94debbad82dd3e"],["/tags/docker知识/index.html","ab46f990c37a206d238090f164c789a8"],["/tags/flask/index.html","fee4833073922cb70c6c11f97e6867fc"],["/tags/git命令/index.html","af1ffad3857cac14872b872bc279da3d"],["/tags/index.html","c4ecf3d672a76a0ae172e3dc6fd417cf"],["/tags/js知识/index.html","7b8f1899631bea6e3a68a80c7c1a93c1"],["/tags/pandas函数/index.html","9046b2e13c4b95e97a3088785a3bd96a"],["/tags/python编译器/index.html","1f02082278fd5991a5b38e55b8ada071"],["/tags/scrapy框架/index.html","3b71aa037c361e77e884b0ab0ab3fab9"],["/tags/selenium/index.html","26f7a27ff6b5e5c2722303ad80c2a5f8"],["/tags/函数补充/index.html","fc515efd302500e1baa0bae62a0fd243"],["/tags/协程知识/index.html","1ad28370fde5d171ccef0c4966f81db8"],["/tags/基本知识点/index.html","7e05a898583e250148467aa2b4f13a7d"],["/tags/底层原理/index.html","da1c9d113ebc0579e968630c1a8e3d2f"],["/tags/扩展知识/index.html","2abb4136a79857d9f8b508af61131a2d"],["/tags/排序算法/index.html","320ed47bdde0d0a31f672b28efac4aee"],["/tags/数学知识/index.html","2ef7d2e7efb07aa6cd960925b64d1b14"],["/tags/数据可视化概念/index.html","f8e643a850b68f1232109655b16da5d5"],["/tags/核心模块/index.html","2b3dca4dbbd6162ae278c151b4f167f8"],["/tags/正则/index.html","110e136a5de71dd4e3c257ead8c037bc"],["/tags/爬虫实践/index.html","47b06234d7b05cc44e651f077b8c2b28"],["/tags/线程概念/index.html","4ed4fcc3077b9fb00b4e863f267c8f44"],["/tags/网站的基本概念/index.html","c21d51a2a23799c47db20139de6b8fa6"],["/tags/网络编程/index.html","1314de0abe6b7a1e375e3dc1c202b1c6"],["/tags/装饰器/index.html","19b366293b49160ce3740da1627cf4fe"],["/tags/计算机知识/index.html","a76947ff6e2d9a45b8102e1e3b6fbe78"],["/tags/计算机网络知识/index.html","4bb3cd56aa2e06a8859d9bdc6d0fcd25"],["/tags/语音识别/index.html","ca7ccdd9c7f1b9e5b2d9861763818c2e"],["/tags/进程-线程-协程总结/index.html","de1ef5ddf9114b4acf0e705d4753d7c0"],["/tags/进程概念/index.html","1c1beb57f2eb09442c6143723e2f9fa5"],["/tags/进阶知识点/index.html","2f1ab54bdd1fc2353f51461027824659"],["/tags/面向对象编程/index.html","7d728a4ecb99917c4c53a1ead18fde4d"],["/tags/面试总结/index.html","bb69a306cbf2e12b116f1e973c471beb"]];
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

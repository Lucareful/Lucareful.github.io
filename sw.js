/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","0efeb954dd6b981857c1d10e303e5272"],["/2019/06/26/python解释器介绍/index.html","9b11cba7c78094f4d69745cbd2a0aeeb"],["/2019/06/26/正则表达式/index.html","6579b1abaa5dbaf56bde6e42d3c1e32a"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","7a66b9e8fa1e58298be26a0f3cb07d91"],["/2019/07/06/网站概念/index.html","9f83a5685d5c63a5474d13fc8a8c8622"],["/2019/07/11/数据可视化笔记/index.html","77d0eb02c3836d10831eda83d1676490"],["/2019/07/12/语音识别/index.html","27bc73edaa21f339d380a016f0ab1b69"],["/2019/07/14/hadoop基本概念介绍/index.html","1a4662bea54090a699a0ea6fb613d4a5"],["/2019/07/14/数据科学笔记/index.html","8a1e92fff7b129371d644e33863ffbcf"],["/2019/07/22/python爬虫/index.html","4ef630f77081aadb8ad6fba223391a55"],["/2019/08/25/pandas函数/index.html","5de62d282424fb312dae3397a5292629"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","1b8fe7af068ea63240eb7c66cd142993"],["/2019/09/30/C 语言中 void 详解及应用/index.html","264dd9233dfd585413975dab29a4654f"],["/2019/09/30/第一次面试总结/index.html","d343d9d726392c2c3359e0b99e021479"],["/2019/10/07/django之url规则/index.html","e8943d2af771aae146bef25e7f81412c"],["/2019/10/07/django配置初启/index.html","008ebe441fbb3185d46e161bf16f8cd7"],["/2019/10/13/C语言笔记1/index.html","c1397ba0a3350cccde2beaf86f20d583"],["/2019/10/13/C语言笔记2/index.html","31086195772ccb3554cf65149c2bd890"],["/2019/10/19/C语言打包技艺/index.html","59b36a2e1b06ca8c8fb9f0c8d2aa96d1"],["/2019/10/22/c语言笔记3/index.html","30f27376f8a97fb258efa37d7815b9cb"],["/2019/10/27/IP代理池/index.html","98d60e25632d4e86e790d91633f78765"],["/2019/10/28/git命令/index.html","a7f0a241720db6c5e85edcf043a9577d"],["/2019/10/31/斗鱼弹幕抓取/index.html","3baa797104a6676c446950bd562bcd68"],["/2019/11/13/多线程/index.html","70f1879120b828f4533de5765c0e81b7"],["/2019/11/14/多进程/index.html","7b5f3eb5b220589bd3fccb7de28ffa8e"],["/2019/11/15/python类的私有属性和私有方法/index.html","98fbf6ed8a27118dd87535629b12546f"],["/2019/11/16/协程/index.html","b804416213c0e921a6111eada5fbdc1b"],["/2019/11/16/进程,线程,协程对比/index.html","517cc6c51b63b94fe1d8929c3d8fb050"],["/2019/11/17/GIL锁/index.html","35789f35e2fa2e662c0f480433178dcf"],["/2019/11/17/闭包和装饰器/index.html","38865c531eb92e32adae2c38ab877926"],["/2019/11/19/Python的模块和类/index.html","ba2e4042d710770fade4e3edee86b136"],["/2019/11/22/京东全网爬虫/index.html","e31a42cf108e61a0d7254a7a66c20488"],["/2019/11/23/JavaScript的简介和基本知识/index.html","8fe4fd9b79956eaa503f3bb3c22cb2fe"],["/2019/12/04/README/index.html","e6840021054378a89f7545ddf6b286d8"],["/2019/12/04/java简介/index.html","a349d7cee85eea4c303a9737130b8576"],["/2019/12/11/java基本知识/index.html","76b7248add1ba0a4fef0498b06064bfa"],["/2019/12/17/Java面向对象/index.html","8960568e1914b4415419474a0bc08b62"],["/2019/12/19/面试总结/index.html","7da220ea4d3b918a2146b1ec47dc9578"],["/2019/12/20/SQL性能调优/index.html","fdeab9007f43567c568dd50fa8d4ee3c"],["/2019/12/26/vue框架介绍/index.html","486a774441ce19a38321b72289606f87"],["/2020/01/02/12306自动抢票/index.html","369a2361b38cf3e494b8b0b249065f59"],["/2020/02/24/flask框架/index.html","085e8e27c306b0c34745d89bcde79385"],["/2020/02/28/docker以及相关概念介绍/index.html","fb8a238cfabcd0c004143287e129c4a2"],["/2020/04/05/python数据类型的底层实现/index.html","bb64ed48a3794d8252acfa002e11c2b7"],["/2020/04/27/查看mysql连接情况/index.html","00c583c45ffb29c4fce1e0ab0dde0675"],["/2020/05/02/Linux操作系统核心知识/index.html","6d4e94fc383b71e03db2b00692d2bdf1"],["/2020/05/02/计算机网络/index.html","602f590e688dacc86744b758d9178a06"],["/2020/05/06/Linux操作系统（二）/index.html","210a000ed76327efb7f8e4d0be0feaf3"],["/2020/05/14/python函数补充/index.html","560bef0aedf35be8ab17c950083f09b1"],["/2020/05/21/python核心模块的介绍/index.html","9329449890e4fdaace0522b5cc3d7ce0"],["/2020/05/21/python高阶函数的定义/index.html","7531ac41fd73a1ba85f612632619c008"],["/2020/05/23/Django后端演化/index.html","6ed1704f84ff80414b3587cc833c84d1"],["/2020/05/29/Mysql数据库函数/index.html","516832a03b786027868bedc41af8c0ef"],["/2020/05/29/Python面向对象/index.html","99e5d8fcfe9ed87ffb903359847e1b74"],["/2020/06/02/Python 中的上下文管理器/index.html","cd4707cf726d2d9c6706666426e6bb02"],["/2020/06/02/Python类补充/index.html","bbcc63c72ae391bd42f161456e56fa17"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","d20e173ae499b1a2cc01bed8b091dde6"],["/2020/06/07/MySQL数据库引擎和数据类型/index.html","fbb0ab3e0dcc36cf9e33981416494c8c"],["/2020/06/07/索引和事务/index.html","601c5707b21323647d6f7c877a2bad85"],["/2020/06/14/Django参数和模板/index.html","4ce55fe41bc5a23e02ebb2e3a6cd90ae"],["/2020/06/16/Django的ORM多表操作/index.html","f915f711103ebdd5c9026bc350ffb0eb"],["/about/index.html","9af08d860c30d71b04e965bada8b95f4"],["/archives/2019/06/index.html","a29609bbdf3b45a99970ecb622f27327"],["/archives/2019/07/index.html","a3fb938021c1e456d5fb296b849457c0"],["/archives/2019/08/index.html","a197ce9411f341aff5ee70b185d91ba1"],["/archives/2019/09/index.html","456cd037e266b3c37ad2ca4d6393493d"],["/archives/2019/10/index.html","32040c6805d9c26ea3244030a0a24d63"],["/archives/2019/11/index.html","492727a4981c7b1e7f40d10b003fb75e"],["/archives/2019/12/index.html","5e03129a8db13dd1688d09cd0524efdf"],["/archives/2019/index.html","0a9132ce74970f036a5bcab087e26436"],["/archives/2019/page/2/index.html","65feccc4bc2e39dd1b1877f7308a5a8a"],["/archives/2019/page/3/index.html","0292eda4cf6ca2bda6bac84396b35451"],["/archives/2019/page/4/index.html","3ebe5d904dc9e1b48baf047b5ccfea23"],["/archives/2020/01/index.html","febbf51643ff1c34f5dbbc09ff22a7da"],["/archives/2020/02/index.html","60c2d2d8789ae3048189750be24a5631"],["/archives/2020/04/index.html","5d1295e05c2c34cb8228328161766eb6"],["/archives/2020/05/index.html","64f0ccde2d0c50677f669c280ed5e4dd"],["/archives/2020/06/index.html","b82e8742916bb39efb1df87c09d10bd0"],["/archives/2020/index.html","ba3da19f5ce2c3c41bbe5aa32ec0b2b2"],["/archives/2020/page/2/index.html","7f01c95af1459295cc1507167b696203"],["/archives/2020/page/3/index.html","b5f10f576cd3f5d3a4dae52a6b71e034"],["/archives/index.html","defa50c0a0140d46a48683ac6109f250"],["/archives/page/2/index.html","10662d4f94ff9713a2ef28ba43258473"],["/archives/page/3/index.html","99e3d8650b2320dec24313f7dead3016"],["/archives/page/4/index.html","0dfcd243ea5eaadd2adf08f4cfc1d373"],["/archives/page/5/index.html","cb9002f07b80269b98eb7586a28cbfea"],["/archives/page/6/index.html","dcec489a2a3f6f9b2df0d7848d95b9e7"],["/archives/page/7/index.html","e1656f0cd48458f7c5b33bdde84f0525"],["/categories/C语言编程知识/index.html","55552a2cdadfaa02c1c34a11593ba145"],["/categories/Hadoop/index.html","b9ae1856e497ea5836373fe058a95fe8"],["/categories/JavaScript/index.html","f9f013642dbe5f4d86f84957dfdac97f"],["/categories/Java学习/index.html","ba94cbc5b0f890fbe82233462416e424"],["/categories/Linux/index.html","3a0a9d197312c1f34a6feba758ecfa16"],["/categories/Linux/常用命令/index.html","103bd247cf1e3d2088d5fdb9e366a5d0"],["/categories/Linux/核心知识/index.html","1573d3c5c5cc0b464857e189e84d0460"],["/categories/SQL知识/index.html","0a45dcfd8cbeb55dedb38c3f3aa60715"],["/categories/docker/index.html","a751778ab0a1c3b90605eb9d17b937d8"],["/categories/git/index.html","335dc733afd0db6cc6c11919a04010bb"],["/categories/index.html","42fef8e89387ad27231f33c05d4db3f8"],["/categories/python后端架构/index.html","690f8a421312cfe214607047d119a386"],["/categories/python数据挖掘/index.html","9be19bf3f5fa4ea77163a72aff0dc0f1"],["/categories/python爬虫/index.html","d89c6ac03b3934eae7e3c1f979c9f5e3"],["/categories/python的web框架/index.html","32c5a819552ff0f235f5b4ea525d883c"],["/categories/python编程/index.html","53ef9735df2b0178c0ad68567cb290ec"],["/categories/python编程/page/2/index.html","f25e9355f519e01ad140c0ae16518d10"],["/categories/python进阶/index.html","6c5d16a2ef2ce1b6557cf7cb67ee1010"],["/categories/selenium知识/index.html","033a8e665d061178e69f3504c260f087"],["/categories/个人随感/index.html","a621a16a2de9e0e72a9ab5e8d5ce0fdd"],["/categories/前端学习/index.html","1d598d63c2f87be36f98050fd87cc9d4"],["/categories/数据可视化/index.html","7130570c8b34d682f711698720c4319d"],["/categories/正则表达式/index.html","50b375b4b59983f19628e98dc697ec06"],["/categories/算法/index.html","2362d12e2d122255db8a5b2a0713d0cf"],["/categories/算法/五大经典排序/index.html","49611ec8c7738a1c653dc5b8f4d4c1bf"],["/categories/统计学和概率论/index.html","113d54e606d809397d4f5892e87ca55d"],["/categories/网站知识/index.html","2cce41f28d773ed69f44489dacb85221"],["/categories/计算机组成原理/index.html","29c60cafaabfc71b4b0789a772aa94c4"],["/categories/计算机网络/OSI七层协议/index.html","3c5cbef22115168a3ab504b903aa7cbb"],["/categories/计算机网络/index.html","f0203ea076a61c2256dfc59c99ea7151"],["/categories/面试经历/index.html","bf3b985c95dec08ffb96f56c10ce1d2b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","737dafd8c187aa39f697d1a7d544819c"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","7ae8f2d92c8fa4d57b8d8b01e50d7197"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4221a05cb57122007b79cb57b4c1f54c"],["/page/3/index.html","f72ec08d4aff392ab4386acf5f11e2f0"],["/page/4/index.html","ca71eb12fa1637a8134024b6c2dc96df"],["/page/5/index.html","33433cfb9ff3d77abbdf625514e6b24c"],["/page/6/index.html","7bf73b695a109310cdff387faf4134b6"],["/page/7/index.html","acb83a30f624bc26b7e7ee631b5a2a60"],["/sw-register.js","2ac9ee395134201a122bccbaa649e206"],["/tags/Django/index.html","65bf7f51c326b0c345e5573ff46065b2"],["/tags/GIL锁/index.html","e55ddc3101ae0bf8fb57ac3df64e985e"],["/tags/Hadoop介绍/index.html","fa56347896df65e7a7082a34bbc45237"],["/tags/Java基本知识点/index.html","a22a0f9bcd9a3e85f8f637d50540df3e"],["/tags/LinuxLiunx命令/index.html","4d84c1d4528c1e062d75bc3e0b44da83"],["/tags/Linux知识/index.html","2904f6850697b85641dedf4160f60446"],["/tags/ORM/index.html","bfccae59797ee351e07e78e73438d364"],["/tags/SQL函数/index.html","f15dd458c9d77e94cd0dd87da32ddf84"],["/tags/SQL命令/index.html","c118362fa69acf3fde44de13cd0c22b1"],["/tags/SQL概念/index.html","de4131da48d233cf9ab4e1e24f05f5f5"],["/tags/SQL调优/index.html","72c0249b006e6326214258c42f1eba77"],["/tags/Void-知识点/index.html","380e8d5fedb0037f6510c45897bd25c0"],["/tags/Vue框架/index.html","71420c1909bdba3bb63c9063d2032197"],["/tags/docker知识/index.html","6104856b18d7170453976c8ec7a113c5"],["/tags/flask/index.html","481bc63c3e136a42f8d0c6936a1bd1ef"],["/tags/git命令/index.html","980653c6f59760575d6497c51cdd9eeb"],["/tags/git配置/index.html","0960fbef1155e7d5adc119c8b1b774fb"],["/tags/index.html","1e6909dc92ae35949fd20737ba8bc733"],["/tags/js知识/index.html","c7118246260bdbb8e921aca31d4e8879"],["/tags/pandas函数/index.html","87d1947924b357207ec912bf401a55e1"],["/tags/python编译器/index.html","a0a6877b25b9e3650e826d3ce6cfe471"],["/tags/scrapy框架/index.html","9bd772e531d9c81bf2308e94da9f5ccc"],["/tags/selenium/index.html","3e28b53debad7356a254a5d2b1585ecc"],["/tags/上下文管理器/index.html","3e1e53f1aaf770f802395fc815674abb"],["/tags/函数补充/index.html","1900fef1ee2444346f330388b4959cb7"],["/tags/协程知识/index.html","994ecb6f6594219fb0169e8fced28ae9"],["/tags/基本知识点/index.html","7751c155081134228eaf238f6a382ded"],["/tags/底层原理/index.html","a660318e753e02e2c18d2088d9f28023"],["/tags/扩展知识/index.html","57adc49c50faa831764e9a478478aafe"],["/tags/排序算法/index.html","841076cad83401a1df75c863119f3dc2"],["/tags/数学知识/index.html","19b3f1484b7d32557747f4beec241a97"],["/tags/数据可视化概念/index.html","a100c9475939438bcd80361799e2e3aa"],["/tags/架构演进/index.html","1161ff006f0daafe38680ad924b4c3d2"],["/tags/核心模块/index.html","21821333edad337593b1db186b46da95"],["/tags/正则/index.html","b507d8881503354f5a15d8364af005e4"],["/tags/爬虫实践/index.html","3bd0b3ad24d125f3d4a59099fc5573f0"],["/tags/类和模块/index.html","dc12270c2e1685b3f7f8fae6acba26e1"],["/tags/类的知识/index.html","9c4ff5a3c3350976d6376d682be2524b"],["/tags/线程概念/index.html","40ee3ab51698d22a6c2ba02cafd785e5"],["/tags/网站的基本概念/index.html","6b670c2487bb3dd6c83a1dddcb1d216b"],["/tags/网络编程/index.html","e0939f467302ff4f357465334f90317d"],["/tags/装饰器/index.html","0cebe40842619593585bd1a9f220fc7c"],["/tags/计算机知识/index.html","15b68ab4c04aefffe29679328c9fb8f2"],["/tags/计算机网络知识/index.html","d8347f0f406b14ac5f166bd7c312fbc2"],["/tags/语音识别/index.html","81c6d04b32354aafe2e4ea0508168e8c"],["/tags/进程-线程-协程总结/index.html","7b97a1950619a304c05e05886d192b03"],["/tags/进程概念/index.html","996c654d6d57158293ede2e99d3f41f1"],["/tags/面向对象编程/index.html","f23c87406e50e8c065fc8af52b50c344"],["/tags/面试总结/index.html","b7645516b7747ed76f7ba1f27b706e91"]];
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

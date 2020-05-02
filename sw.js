/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","01cf76685500ed7d03f52a569bb4d1a4"],["/2019/06/26/four/index.html","7947702b81de5c864838a7a1a7cfade0"],["/2019/06/26/python解释器介绍/index.html","640edfbf851e7dc113bbe856e8cc12e7"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","f115d6d0bb1ee4d481384ca0920f3950"],["/2019/07/06/网站概念/index.html","c5420e3175c802a77e3b796fb9b79a38"],["/2019/07/11/数据可视化笔记/index.html","01ccf4df4e0ddfd7dbdfce49152a90ba"],["/2019/07/12/语音识别/index.html","6380cbd72fe9bbffe46145c8837fb73c"],["/2019/07/14/hadoop基本概念介绍/index.html","ee415162bb7c91f08f3121f17f6855f3"],["/2019/07/14/数据科学笔记/index.html","6acf74965b0d0c865d11631c5ff1179c"],["/2019/07/22/python爬虫/index.html","fd758c7c79bcb6c91fd4dbe775cc441f"],["/2019/08/25/pandas函数/index.html","906b7259e6aab921e6c7b37ed775f17b"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","b541fbf82e913c52934fa2544581cdc5"],["/2019/09/30/C 语言中 void 详解及应用/index.html","d7d5c43c55196259afbadb475119c438"],["/2019/09/30/第一次面试总结/index.html","dd3f27dba7510d9898ea9c038ca31734"],["/2019/10/07/django之url规则/index.html","a0d8412ca18113a91860514ec8ce4bc0"],["/2019/10/07/django配置初启/index.html","fa62302fe95ac2cef85d19d458fa390d"],["/2019/10/13/C语言笔记1/index.html","849645e6e0587b6bc067e585b4f1ef24"],["/2019/10/13/C语言笔记2/index.html","8055328d56743ddedb49506154811833"],["/2019/10/19/C语言打包技艺/index.html","be247202a9c77b0dff694b7351cae89c"],["/2019/10/22/c语言笔记3/index.html","6e0222c999ab5e336956c841e004c3d1"],["/2019/10/27/IP代理池/index.html","3aaaa41eb336524c80634e59f6c7cfa1"],["/2019/10/28/git命令/index.html","76c414b6c110199bfb5510041a7c39b8"],["/2019/10/31/斗鱼弹幕抓取/index.html","249f16880ed40bfb22e07053d94e279f"],["/2019/11/13/多线程/index.html","18c7bdb5f21f55931a49344a351415fe"],["/2019/11/14/多进程/index.html","68a7962ba495678753500c51c5ad65e4"],["/2019/11/15/python类的私有属性和私有方法/index.html","1c84507d8958e549bb5b82652ff7e127"],["/2019/11/16/协程/index.html","2bbc52a40348161a377c235fbbae81cf"],["/2019/11/16/进程,线程,协程对比/index.html","9e220ac6c3bc39cd79b5409fec150b16"],["/2019/11/17/GIL锁/index.html","bd9692af3f6b8e5549e0469f3995535d"],["/2019/11/17/闭包和装饰器/index.html","8462cd663473f8d4e61d78580c7aebc4"],["/2019/11/19/Python进阶知识点/index.html","8473f2ac01f7cc88d71be29070fac3c6"],["/2019/11/22/京东全网爬虫/index.html","bb579aa786921816c8c1d0274180ab0f"],["/2019/11/23/JavaScript的简介和基本知识/index.html","2687d302132a9935dd65cc2dca5a9f53"],["/2019/12/04/README/index.html","f4e0902ec9fb7bb1fa6e7366d8208e80"],["/2019/12/04/java简介/index.html","8805d586d56bb8e51dd68310490d0c40"],["/2019/12/11/java基本知识/index.html","587b2c027c425323d8068e2b0d9cd465"],["/2019/12/17/Java面向对象/index.html","8fdc05d9ea2d73683ad78590d61a1ddc"],["/2019/12/19/面试总结/index.html","0ec6e0b39bd5284b65b3191179e3625f"],["/2019/12/20/SQL性能调优/index.html","561719e451d61d4784370e476f7eb96a"],["/2019/12/26/vue框架介绍/index.html","b18f140fbe6f99bc05eaf45b665d8210"],["/2020/01/02/12306自动抢票/index.html","7bf9cf3e5d65d021593ec1f8fae19ed1"],["/2020/02/24/flask框架/index.html","2a986a6842e1362a59c6d264b2c868d8"],["/2020/02/28/docker以及相关概念介绍/index.html","0dd88a5c6be6fc56a1adb883b1aaa5f6"],["/2020/04/05/python数据类型的底层实现/index.html","ce69e5951791b3f07ae1572fafc82b09"],["/2020/04/27/查看mysql连接情况/index.html","d781d620dcfc991097cd303549640a9d"],["/2020/05/02/Linux操作系统核心知识/index.html","fedfd71f8df0faad72071a476be7b15b"],["/2020/05/02/计算机网络/index.html","5620c91a6de0a82b4c087ebe975ffb9f"],["/about/index.html","d93b8e0834d8117de104576b597805b2"],["/archives/2019/06/index.html","1c64477d027d26247acd1560d69986e6"],["/archives/2019/07/index.html","49dafed16f156f683623f176a31f5e11"],["/archives/2019/08/index.html","a28e4bd203fa2d15bfc1586b8571ca61"],["/archives/2019/09/index.html","115942d8a390e8f32f16cb05927a701f"],["/archives/2019/10/index.html","eaac8b036ffebf7e7d8512dabd46234e"],["/archives/2019/11/index.html","87eed8e09a9cc3c465f530aed5bc2cc1"],["/archives/2019/12/index.html","69901f959f3ad6baf3baa41c7d221759"],["/archives/2019/index.html","4f85bc4d0b62d92b550600c8306db417"],["/archives/2019/page/2/index.html","7bb101043f2981ede7aec50dfb642ec8"],["/archives/2019/page/3/index.html","3eb06ea18ee21bce5537fa4002a50eff"],["/archives/2019/page/4/index.html","cef33db2a0711ac77c3d49ace5120d0c"],["/archives/2020/01/index.html","02ad9ea125450adc00166ca4a63571c3"],["/archives/2020/02/index.html","5dc2db706c8ce8cfcb335b45f8dc4d4c"],["/archives/2020/04/index.html","60fc96432ceb6dcd438868957069315e"],["/archives/2020/05/index.html","ce0f0881bc15eff5e50e3d5502e477ed"],["/archives/2020/index.html","7b95e4640eaa8702b15a300fcfe03552"],["/archives/index.html","000de4a606ff13c7e815ae97f6b38e9b"],["/archives/page/2/index.html","a5bf136b3ab50a54949500c09064357b"],["/archives/page/3/index.html","b630b1c078cf0bbec99ebad92357c52b"],["/archives/page/4/index.html","647b114c921d97d88efc4d4d82ad0bf2"],["/archives/page/5/index.html","101ddbd0415b626068737cf73af19d9d"],["/categories/C语言编程知识/index.html","044d894b45231165d354b9f72df97c48"],["/categories/Hadoop/index.html","170627b2491b94b201d0a2f80769b879"],["/categories/JavaScript/index.html","55b891ab5ff9c1a6969fd95e2901fb60"],["/categories/Java学习/index.html","fe69d217e248904e74dfe29ca329848d"],["/categories/Linux/index.html","52fc24722711cbe121deb86560dbeb5a"],["/categories/Linux/常用命令/index.html","15a30c6dd8a9e66c09f30f8c8a41f828"],["/categories/Linux/核心知识/index.html","ad3803978b0283f97a5bec15481261fc"],["/categories/SQL知识/index.html","a7d3f491aecba6e2b64f593c4d7f8f7a"],["/categories/docker/index.html","835ee309929b50cea19259946b60aff9"],["/categories/git/index.html","bc7fceacf8a3391f46bc3934e6728316"],["/categories/index.html","a465cf2bedc666498fe3f61dd5687e59"],["/categories/python/index.html","eafed4e19015033c05473b6def7b61e4"],["/categories/python数据挖掘/index.html","e1f0a8ad87d839a4e9f4ebba743d45ec"],["/categories/python爬虫/index.html","9690342b557cce3e1e2db0f29dde0a79"],["/categories/python的web框架/index.html","294b569125358241a58e8c3b5f97a361"],["/categories/python编程/index.html","74a090211035d175901a0c74eb0adc1c"],["/categories/python编程/page/2/index.html","46d3be575c8aed8c2eb48b599703f51c"],["/categories/selenium知识/index.html","aa61bea7457f3b9e61f138dfede8c3ac"],["/categories/个人随感/index.html","9ad75697b549b016433a1c8564b11571"],["/categories/前端学习/index.html","fb303b1e49860b46ea88be9b2392794d"],["/categories/数据可视化/index.html","e91d272b543e84e14598020a32018cf5"],["/categories/正则表达式/index.html","6895195175dfd3a28cf2f5ebbb3fe898"],["/categories/算法/index.html","e1e0629e647d9129dbe795aa87f29a57"],["/categories/算法/五大经典排序/index.html","93e8e28c4ee16bcd27c7c71f83180d74"],["/categories/统计学和概率论/index.html","70c734ece2a25acf6d1b8d3991cf155c"],["/categories/网站知识/index.html","1c71b8df2c18f1ca313b9541c69d9baf"],["/categories/计算机组成原理/index.html","eef9eae31eb5541b6beca35c496d3595"],["/categories/计算机网络/OSI七层协议/index.html","63a14900c2139f663b8f3d5f162447b8"],["/categories/计算机网络/index.html","7f4198130ced3d94a32802bc8c14818a"],["/categories/面试经历/index.html","080a8305f6b3695a53d38b1fb87cec2b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","02f83defc8c1dd69d05928ef0b7b14da"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","e73d5e73a6abd13d2eedfe1c1968f3de"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","459b87e2bacd065b0f46e133af2e1e62"],["/page/3/index.html","26cfa994b7879233fde84187737856d4"],["/page/4/index.html","154a730910519d446d1b1bb108e7ddf6"],["/page/5/index.html","cfea7bf81765113df5a6889acfd47743"],["/sw-register.js","e3048593b802ff41fb685bd324526f56"],["/tags/Django/index.html","836a2a7a95cc92218ca9cf5204530b5c"],["/tags/GIL锁/index.html","8f01e05d181833da8d76b49ec0e1ffe3"],["/tags/Hadoop介绍/index.html","53d3011fb2a38ae2f39a86b665da1c41"],["/tags/Java基本知识点/index.html","9a4d1a56a20a97367b3ef35f9e20c061"],["/tags/LinuxLiunx命令/index.html","2f9e55c2bc6358bff5623d456de26cad"],["/tags/Linux知识/index.html","bf8bab3b18475e5eb37806391671820f"],["/tags/SQL命令/index.html","a8930dc2a928fd806b160ea292a42d86"],["/tags/SQL调优/index.html","4443089df170326e2b2e3b59183f715d"],["/tags/Void-知识点/index.html","5633e40554c8407d58680ed2be40959a"],["/tags/Vue框架/index.html","4a06962f1ae3b594ecc9a68afe830b88"],["/tags/docker知识/index.html","a87c830d56108105ebde6fdbbe76e922"],["/tags/flask/index.html","53d18e9095ff538544e959fb32ed0b25"],["/tags/git命令/index.html","7f0c00553e0e9ed36434ed2ac10ee377"],["/tags/index.html","b3db00d14d01012f49db84b9faa462b6"],["/tags/js知识/index.html","b293cda1f4e982ac181d68612427341e"],["/tags/pandas函数/index.html","98100cb0e0a7efcda073cab1b9d6789d"],["/tags/python编译器/index.html","0b97f1b23e4a1ef8600edf47b7706838"],["/tags/python进阶/index.html","f35d36df8b9335f54883e1411213cfeb"],["/tags/scrapy框架/index.html","3f6ae4a9211ad5801207fe2172fa9ec5"],["/tags/selenium/index.html","3288db4b2f50415b3af55ed61fae6491"],["/tags/协程知识/index.html","9b8bd4e44b835a0c4646aa59d16a5a81"],["/tags/基本知识点/index.html","ceacf8bb69d9dc0aa5f016f2a5c47efb"],["/tags/扩展知识/index.html","caeab32dbfd7e9aab5f1764f4415e0ba"],["/tags/排序算法/index.html","9aab3e58b7089239d14b6956f0453217"],["/tags/数学知识/index.html","b49da5f39d9b40d0b2296b99490cb1de"],["/tags/数据可视化概念/index.html","985dbd4992f6ddba013f81a7cbb77a10"],["/tags/正则/index.html","893b8f874f1372a97ce265efc170e38c"],["/tags/爬虫实践/index.html","a2cbca75ce5a7c42753acf408b3448a3"],["/tags/线程概念/index.html","9f45e94cf7c31ca5c7c053f83b5f5895"],["/tags/网站的基本概念/index.html","ebf59d6de5d82cf2961ef5abbbfdb8aa"],["/tags/网络编程/index.html","a539022f8a2208dc4e3b727447f42918"],["/tags/装饰器/index.html","3bbec15c69f9da0890a9c91aa9526a20"],["/tags/计算机知识/index.html","fe712e6f656f71c3fdb5aeb8310bedc9"],["/tags/计算机网络知识/index.html","6ca5c66343318bd2493a930994b72f3e"],["/tags/语音识别/index.html","d5137f1e19e4fb3ac20dea6b66f8de0a"],["/tags/进程-线程-协程总结/index.html","6ff14eef8148d0936cd6c930616d83cd"],["/tags/进程概念/index.html","e34042f30173a76c32f8603e7cd25844"],["/tags/进阶知识点/index.html","366e3ff454da32a3a52486c28ca7ac0f"],["/tags/面向对象编程/index.html","7ef5b5c57b05ae857f5dc84d8defa006"],["/tags/面试总结/index.html","b49d09609912e27257777f7ef5322a99"]];
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

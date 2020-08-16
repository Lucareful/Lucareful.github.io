/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","f3ea33bbbbcfc04232e142f10f6a2519"],["/2020/08/16/C 语言中 void 详解及应用/index.html","a0f3bb2ba506aa65982477467c11cc80"],["/2020/08/16/C语言打包技艺/index.html","039a0af91d4f4a3ad1bcc8ef594804ad"],["/2020/08/16/C语言笔记1/index.html","85b8a08387931a5796558218a5520cfa"],["/2020/08/16/C语言笔记2/index.html","7b5362b01f092ef0f5ed9bd42371c871"],["/2020/08/16/Django 重定向终极指南/index.html","5dff9d90295f158722f493c3c96fe0d1"],["/2020/08/16/Django参数和模板/index.html","3009c30096dd7560372e27fa508870b9"],["/2020/08/16/Django后端演化/index.html","5e268b2d1dd4393c3d308cde58af7a42"],["/2020/08/16/Django的Cookie和Session/index.html","903d8a20b6b39f2e3294bb6796dacd82"],["/2020/08/16/Django的Field详解/index.html","6a6b7d50c1979ffbaff9608c753a9ec1"],["/2020/08/16/Django的ORM多表操作/index.html","b16416f0ee7027a50893967181dc52da"],["/2020/08/16/GIL锁/index.html","2230c622a2afd463c4b4b83e626fb74b"],["/2020/08/16/IP代理池/index.html","347ed4016143a15f39752e8421a30351"],["/2020/08/16/JavaScript的简介和基本知识/index.html","bf7f99e2936256c28f721dc47dd7fc59"],["/2020/08/16/Java面向对象/index.html","714f4007747b62afa1ca5916e6669e67"],["/2020/08/16/Linux常用命令/index.html","a7799cd55cae88ee472442c6f4e2f618"],["/2020/08/16/Linux操作系统核心知识/index.html","b3a7bf494bed3f25ce996a9f0e3787cf"],["/2020/08/16/Linux操作系统（二）/index.html","db24af6246d98b860d5a3be8fa0f41bf"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","d3aab895b8c0a5c609eaf0ab8860bcb7"],["/2020/08/16/Mysql数据库函数/index.html","960452b8a59871033baa07802b2af032"],["/2020/08/16/Python 中的上下文管理器/index.html","aeb52706551eadda158d4b79e3663734"],["/2020/08/16/Python的模块和类/index.html","25e2a5f4edf3a24a833e18a8844b34e7"],["/2020/08/16/Python类补充/index.html","106cd1b31943e6cf9565e58b0e30071a"],["/2020/08/16/Python面向对象/index.html","f089d1da70d61b292f0c3c8ea45cb0eb"],["/2020/08/16/README/index.html","70f1b558635080ab3479e7230d915de1"],["/2020/08/16/SQL性能调优/index.html","f4dd06fa607e9603082ee046e8a7caaf"],["/2020/08/16/c语言笔记3/index.html","f7d2fdc6c42f11a086b9fe45612a51e7"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","e104c791e3f3f2f8b2934e63037fe5f1"],["/2020/08/16/django之url规则/index.html","95d1123b0c041d46c3c3ebe151fff4d1"],["/2020/08/16/django配置初启/index.html","75bf8a71c686978c93a28f6ade879d1b"],["/2020/08/16/docker以及相关概念介绍/index.html","dd6d22424ad12a8dd41ececda8beecf5"],["/2020/08/16/docker信息/index.html","aecb9249ec6fbba7d1ef66f048512962"],["/2020/08/16/flask框架/index.html","9ee8a5516407351965c843daf11863d3"],["/2020/08/16/git命令/index.html","c3f4b4223b175f36f483526438b0d06c"],["/2020/08/16/hadoop基本概念介绍/index.html","5fc5734dda58626675b36272b80ec661"],["/2020/08/16/java基本知识/index.html","3fed13c0f01b3addcdc003a2aa572571"],["/2020/08/16/java简介/index.html","8b165ad91eaa95459ca2c231cb34396a"],["/2020/08/16/pandas函数/index.html","27c18b09308caa18a5a4f1d2cdebdc2c"],["/2020/08/16/python函数补充/index.html","10a574ebb93515385db18e1869cc6bbf"],["/2020/08/16/python数据类型的底层实现/index.html","bfb713516af75254c900b8f6d08cce53"],["/2020/08/16/python核心模块的介绍/index.html","9bc90c50875ed869d33349742be04a7b"],["/2020/08/16/python爬虫/index.html","766446ce1fcc3cefd5377668b5e7ab24"],["/2020/08/16/python类的私有属性和私有方法/index.html","982617c0b749f45e6f780ed68edcf6e1"],["/2020/08/16/python解释器介绍/index.html","cf1e2facb7028a54ad016430226d4e12"],["/2020/08/16/python高阶函数的定义/index.html","33ec60d898e55b66901e03ab7870b7eb"],["/2020/08/16/vue框架介绍/index.html","04aad42bace15de510404cde94933636"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","aadcaf32238db477c039e55af6e02359"],["/2020/08/16/京东全网爬虫/index.html","8c281310099e1f9c3350adeebd5139ee"],["/2020/08/16/协程/index.html","76b0fa4837ae369ffbf892c0f31a0ef7"],["/2020/08/16/多线程/index.html","1f0f45053ae0e5bd1051fe8b0ac0cbca"],["/2020/08/16/多进程/index.html","aae6a0abc150d5bafc20891cadddbdc9"],["/2020/08/16/数据可视化笔记/index.html","42c837875a8917596d38ea8b51897d14"],["/2020/08/16/数据科学笔记/index.html","d13901c9b2cda1459abf2c3b1d3578c1"],["/2020/08/16/斗鱼弹幕抓取/index.html","1c68c393d708648d8248b0fc294d6532"],["/2020/08/16/查看mysql连接情况/index.html","f00b32763facbcfcc8b8187784a85274"],["/2020/08/16/正则表达式/index.html","5d4d9bdbfa588e7c94c54b00715c086e"],["/2020/08/16/第一次面试总结/index.html","0f118fbba4db318ebaafc25f57bfbcfd"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","fbf5e1ddf0dfc495febfc3dfbac742b8"],["/2020/08/16/索引和事务/index.html","b2cebc2733a7af630c8a1acc4a322ac7"],["/2020/08/16/网站概念/index.html","f4492eca33c01bf5ec1c1c5ce1677895"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","5f2c9ecd2e12bdc404f7bc56f4b4a532"],["/2020/08/16/计算机网络/index.html","f3c94b15acce778766e8d49f5b5cc343"],["/2020/08/16/语音识别/index.html","e55ca1980e5d76b162357eb8e5f1eaa6"],["/2020/08/16/进程,线程,协程对比/index.html","fa262f731021cdfed4771eea7facd80f"],["/2020/08/16/闭包和装饰器/index.html","d933573108a9447581a8292e24031d1b"],["/2020/08/16/面试总结/index.html","e1b3db9717fc39daf59ad4b0c466e898"],["/about/index.html","a237d9dd5283cad246405762959e45cf"],["/archives/2020/08/index.html","0dd7d3e2f171834e947468d38a1ac1e9"],["/archives/2020/08/page/2/index.html","3d170e0bec422d9333af0a32e8d5c85e"],["/archives/2020/08/page/3/index.html","3bb8c1990f531dcb5d747d7d207848c7"],["/archives/2020/08/page/4/index.html","0f5ab2251e64e2373b88c235f347363a"],["/archives/2020/08/page/5/index.html","6947f5670e6615a2eef2c7f8ca2e3dd5"],["/archives/2020/08/page/6/index.html","071c37da40b407ca29df35bd72be3677"],["/archives/2020/08/page/7/index.html","dfa60808d7ffea4ee1bd9c252dbc3281"],["/archives/2020/index.html","dadcc0a2ce5b6864786e3dde158ecc69"],["/archives/2020/page/2/index.html","6bc0d86c429e9125ce2d861ef116550a"],["/archives/2020/page/3/index.html","32698f908bcbf39d3f0711f280d402e7"],["/archives/2020/page/4/index.html","fc130991a404f1851d730bdff20743d5"],["/archives/2020/page/5/index.html","a6db03eb0b704f88f7cdafe1953d9625"],["/archives/2020/page/6/index.html","6cc97923e7298d0db3643f6428f8bdf0"],["/archives/2020/page/7/index.html","f9a139c68cadbf0b2cafb8b43e7dbad6"],["/archives/index.html","1223a6a244735b71d05f8cfb10662052"],["/archives/page/2/index.html","715085438fa7ac3dfd189f61d9750297"],["/archives/page/3/index.html","7df8554afa729f2f131c75e3c8de72d2"],["/archives/page/4/index.html","73e863321c8822d4ecd9cd7953604b65"],["/archives/page/5/index.html","75334202f8179b4ff3f7a11ed4f98d85"],["/archives/page/6/index.html","5fa771cde21a1075b8ed88c0d91a56bb"],["/archives/page/7/index.html","53af191c239c0d2b60818fcb6af4d91d"],["/categories/C语言编程知识/index.html","0623f9464b4ac48ef6d663de1b706355"],["/categories/Hadoop/index.html","6d31ded566c4d6f01294b1646ec1d850"],["/categories/Http知识/index.html","530778d9c9163bc428b78c93b6494cf7"],["/categories/JavaScript/index.html","ca3943b401c01c73b1b69ffbd59d3232"],["/categories/Java学习/index.html","6d8e2d1325c8f3630bc9c320c114e8ad"],["/categories/Linux/index.html","6e58adf6b5a6f8777e1cde857b054c11"],["/categories/Linux/常用命令/index.html","d9dc6ab80128c8d896b118c8062368f7"],["/categories/Linux/核心知识/index.html","46b78cea02c525df3f1aa68423a15c61"],["/categories/SQL知识/index.html","666c6beb81ec5cc6a1cbc27b0a719f5d"],["/categories/docker/index.html","468295caefa0e6d3300f78dc2b7699df"],["/categories/git/index.html","a77f3653ae9a5614dee3aac2b672571f"],["/categories/index.html","5c600c4435fb47c258a4de18e8bc57b8"],["/categories/python后端架构/index.html","9d15b4533501dd52883d42bd4adf6828"],["/categories/python数据挖掘/index.html","d583848114575d2c5f6689331354ca8f"],["/categories/python爬虫/index.html","a84d843257cdc4c9bbe15cdc26944798"],["/categories/python的web框架/index.html","8ef41bd2ebe566b1c6d770121545237c"],["/categories/python编程/index.html","42a4cc6a1e07a812772fb2e928735827"],["/categories/python编程/page/2/index.html","f67d038a09b93851a2e5f5d0e45a520c"],["/categories/python进阶/index.html","0e3f59fc3e116ef1e57693d99c6bb131"],["/categories/selenium知识/index.html","fea267d6ae6728e26f00dc62a1e5f661"],["/categories/个人随感/index.html","57848a665cf64aec4aeec0e22524e3e1"],["/categories/前端学习/index.html","1b6132c1fa9a237f5382545415e6415c"],["/categories/数据可视化/index.html","2967f51472ca41044b200ed0fb0c9721"],["/categories/正则表达式/index.html","6b1ab9bdf47614384deea7eeb4fdd50b"],["/categories/算法/index.html","59fb66a892831416b3ab26ecfae85dcc"],["/categories/算法/五大经典排序/index.html","6999402e38bfa0f01c2db253dc16f946"],["/categories/统计学和概率论/index.html","9186cff91f34ab171368ec31fc2d395c"],["/categories/网站知识/index.html","3b58157612f85dbb4a30e994070dad21"],["/categories/计算机组成原理/index.html","016f8fe3235f4bac73f7b2d07950fa58"],["/categories/计算机网络/OSI七层协议/index.html","2684754be94f5e498157e9be6faeeeca"],["/categories/计算机网络/index.html","7cfdece356c49815f1045b7134982f47"],["/categories/面试经历/index.html","603ffa88572a5212bdf25a972334f512"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","f5c7f6e03f72944f46704921551158b3"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","9edeb4d0858f446bd96c415a532acf65"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","2c7d504c07cc341642599d91952673c9"],["/page/3/index.html","e93e544f64b3eaa3b1f04659483e736a"],["/page/4/index.html","582f76ac10bd11a89c185a625ee544e1"],["/page/5/index.html","e0d714904836e84902636cbe272b3579"],["/page/6/index.html","77d9412f9a72a7979eb732c45d4e1e53"],["/page/7/index.html","85e690e03104a9602dc1ef7ac9020121"],["/sw-register.js","04eb9425f5f23208f45f7600005a3757"],["/tags/Cookie和Session/index.html","d4e5f4db8dd7bfe2ef2ae497cce09674"],["/tags/Django/index.html","32b4a85a6f8f767bef96f19963ee43a6"],["/tags/Django部署/index.html","16281f7b87dcc0f476ece8a116cdb5c3"],["/tags/Django重定向原文/index.html","2c53b8c96efd9f1c54577690e9c67a90"],["/tags/GIL锁/index.html","2f66f8cec6568a7c36335901344d80d0"],["/tags/Hadoop介绍/index.html","ad4051cce34e2354a9126ffb3b438af9"],["/tags/Java基本知识点/index.html","98b657660e7f7aa23e89806752e84cc0"],["/tags/LinuxLiunx命令/index.html","4a4109193a7d13630f56a1e637578e42"],["/tags/Linux知识/index.html","bfa88b2f483a7f5212e7483b9ecb2d3b"],["/tags/ORM/index.html","f54338407bec48a27b26c40886e04ed6"],["/tags/SQL函数/index.html","33798534105dd4b540d8da3faed6de34"],["/tags/SQL命令/index.html","7b52ee5d5e43ebb5762f2df09df06193"],["/tags/SQL概念/index.html","97789fcd10bdb71e5200d7880ddbd26f"],["/tags/SQL调优/index.html","b2144bdf4cc595f4c5bd67ff3f3b2a3e"],["/tags/Void-知识点/index.html","b832fab4b1d4d9c32c8e58a5c1e46e75"],["/tags/Vue框架/index.html","e6c5e9bbe733de7cff0752e0c2a863d3"],["/tags/docker知识/index.html","e25e304efc4576f41632c7dd26daf9b7"],["/tags/flask/index.html","592bd0049fbae80cccf9152d241cba36"],["/tags/git命令/index.html","5909d4cad857429b10a4a1c6fbfdf7a6"],["/tags/git配置/index.html","835264e1619b3020359806c48cb0154d"],["/tags/index.html","fa5a7242d93efe73999e87770fd4586f"],["/tags/js知识/index.html","72234516ed3931e04c3090511d2c28eb"],["/tags/pandas函数/index.html","22a27ef2d2a1a559cd2766cda90bd558"],["/tags/python编译器/index.html","a70a31b02574a4ecca1ded04c2cbd3b3"],["/tags/scrapy框架/index.html","76cc72761494236eb461f10a5ed5a6a7"],["/tags/selenium/index.html","dc279ddf0ef1b1f8c1f358027a5df5d5"],["/tags/上下文管理器/index.html","55f108874633feacb4293d651e8e3872"],["/tags/函数补充/index.html","7587bc84c8828cd45c5b2cb5ebbcd219"],["/tags/协程知识/index.html","661e657502e607ff5925e924afae06ff"],["/tags/基本知识点/index.html","dcb4b4b995d230e3a725ef8b04ceeb50"],["/tags/底层原理/index.html","f17562c9658c2cca0e010e54fd3f2420"],["/tags/扩展知识/index.html","3d35d0ca2b42395b24cb5bcbef4f1652"],["/tags/排序算法/index.html","8d163347b4232022c9632145b137e3ae"],["/tags/数学知识/index.html","868d270ca92b8a9020503f646a391605"],["/tags/数据可视化概念/index.html","8bf253353a1c5010cacbe279e7130b5a"],["/tags/架构演进/index.html","59111fa1754fc886c2d7f866e7853745"],["/tags/核心模块/index.html","1c2ae9f226ff8c26bd59a85883e9133a"],["/tags/正则/index.html","ae3df0a2ddc7620f9682352d3503eee3"],["/tags/爬虫实践/index.html","885e9c6ec59556f2a335f4e64c38e8b7"],["/tags/类和模块/index.html","7447990ffc740548f7d638fa80d2342e"],["/tags/类的知识/index.html","b36ee17ddf1870932cd3c396c79dabbe"],["/tags/线程概念/index.html","f2a1279bf962187dcf59bf1e5f3bc620"],["/tags/网站的基本概念/index.html","79df7d231efd5e1f589ac78630909504"],["/tags/网络编程/index.html","91ab4baba087321e1b1019d0ac80601f"],["/tags/装饰器/index.html","c188c06b9c1798e6a383b402d16889f9"],["/tags/计算机知识/index.html","3139d5b11496359fee3e98554078800e"],["/tags/计算机网络知识/index.html","bb364cd84cd27f34443ba7c3a0e4ef88"],["/tags/语音识别/index.html","89abf6c29a8d44094ebf35b22ada82c1"],["/tags/进程-线程-协程总结/index.html","5fdc32cc62da31b49f8a75b08fddf5b3"],["/tags/进程概念/index.html","59a72abc95789a293e7d32e27c737cae"],["/tags/面向对象编程/index.html","b35abed6045b7aa886664c9fd6aeabaa"],["/tags/面试总结/index.html","6505a9af4ad75f920e116e5e0d78d4aa"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/Linux常用命令/index.html","14852b15015e9ed38dc3ad5cf7367038"],["/2019/06/26/python解释器介绍/index.html","7f1d5fde61c5c1de46d6c432ee8b8c5e"],["/2019/06/26/正则表达式/index.html","e58064945e09af385dd561a6e9604df9"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","aaba7b2caab3184d7b0b0114aa4b8080"],["/2019/07/06/网站概念/index.html","9a52a311087ef957c7079bce7ac0c956"],["/2019/07/11/数据可视化笔记/index.html","ee74a8f21388af2a27f8b051057ef0f3"],["/2019/07/12/语音识别/index.html","0d1db08f7b99e28f9bddd501751d4621"],["/2019/07/14/hadoop基本概念介绍/index.html","c0c03111e81e6668cd5f48cfe3e0ab7d"],["/2019/07/14/数据科学笔记/index.html","a1fab404ec5dca1dae2177f300fa3060"],["/2019/07/22/python爬虫/index.html","537f137fa8dc3116d81e738fe06ae8b4"],["/2019/08/25/pandas函数/index.html","57ff7acdc723dedf32cdd60165038105"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","9cd88470ff7f2ca05282fb21518f230d"],["/2019/09/30/C 语言中 void 详解及应用/index.html","e4598593d7b068f4d9667403d6dcbae4"],["/2019/09/30/第一次面试总结/index.html","8b1aa0b91f029203cb95ca112fb30ad1"],["/2019/10/07/django之url规则/index.html","882a58ebc677af1f756ce8cb129c8447"],["/2019/10/07/django配置初启/index.html","76e71a952a38a69a9a7e56bfccdee1a0"],["/2019/10/13/C语言笔记1/index.html","b505cc5ad71fc3d86ba7b8c491bc3a9a"],["/2019/10/13/C语言笔记2/index.html","2886378905620d584ac4992ed29f1f94"],["/2019/10/19/C语言打包技艺/index.html","496ce97d4935385e859a92d0659fdcee"],["/2019/10/22/c语言笔记3/index.html","25738f76f9b819fabd289d98b5809f6a"],["/2019/10/27/IP代理池/index.html","f356cf5fcbc94dabe67dbc01b368f49a"],["/2019/10/28/git命令/index.html","0217e7e8dae81dfc4482b57cd33ecea9"],["/2019/10/31/斗鱼弹幕抓取/index.html","ba49d5120d9fde6d23abefef4c6b6773"],["/2019/11/13/多线程/index.html","1cf44180709c2544eae3375e9b6d6522"],["/2019/11/14/多进程/index.html","8150f7aea6d2be7966c18b90c8dddf0b"],["/2019/11/15/python类的私有属性和私有方法/index.html","eefc7ad4ae75f4ad3836e2414b628944"],["/2019/11/16/协程/index.html","77e58a66ad5a4b5f5561484d206de3d7"],["/2019/11/16/进程,线程,协程对比/index.html","4d847457561a8ba07bf519bcd787941c"],["/2019/11/17/GIL锁/index.html","50341ab674e02a7c23bddffc7376cc39"],["/2019/11/17/闭包和装饰器/index.html","b19da69eeb2468689e469066e7c84e5a"],["/2019/11/19/Python的模块和类/index.html","a2f9faf7319c5fe04206d57915e7414d"],["/2019/11/22/京东全网爬虫/index.html","30532159cb57c65161304741e839d76c"],["/2019/11/23/JavaScript的简介和基本知识/index.html","61f5501108ab7561f5414e3a81d02970"],["/2019/12/04/README/index.html","9f294565a6265dca295e445e5b4c7b57"],["/2019/12/04/java简介/index.html","5e369418453dec093788e5bab797c853"],["/2019/12/11/java基本知识/index.html","3bb45837c9bbe8ead725f0d2736f6e72"],["/2019/12/17/Java面向对象/index.html","f926e65d111251b05854decd2c59d694"],["/2019/12/19/面试总结/index.html","b3d269b6215b3c245287a616de93004e"],["/2019/12/20/SQL性能调优/index.html","a7eda1f021e90915c9fe8b41b6a4e1e2"],["/2019/12/26/vue框架介绍/index.html","7d8f0d3e94e7a21b21498650ec309a9d"],["/2020/01/02/12306自动抢票/index.html","a5e54eefd211ddb8f756a5cd83bbf36e"],["/2020/02/24/flask框架/index.html","7dd58e790b31ee00d5f861399857dc96"],["/2020/02/28/docker以及相关概念介绍/index.html","95d9a7e941c88e3fba4ec0a6a94f91f1"],["/2020/04/05/python数据类型的底层实现/index.html","93cb8c09566e700ef51f889c7aa8d7a8"],["/2020/04/27/查看mysql连接情况/index.html","ef834d5078309744c34b798a6eef433d"],["/2020/05/02/Linux操作系统核心知识/index.html","008fc3a06d0cca97e818a6b312d3d169"],["/2020/05/02/计算机网络/index.html","138147744a71a804039bbef2721b4120"],["/2020/05/06/Linux操作系统（二）/index.html","172143b14e413bbefcb3271cefc45f5d"],["/2020/05/14/函数补充/index.html","a674fb00c90c0f6a7c4864720d40ba9e"],["/2020/05/21/核心模块的介绍/index.html","8a8d0dc1ae5608d5bb87269ffb708795"],["/2020/05/21/高阶函数的定义/index.html","11d7e83a07da5592557c0782681d5474"],["/2020/05/23/Django后端演化/index.html","9b441670369108fc8bd45f5651834052"],["/2020/05/29/Mysql数据库函数/index.html","029e24b066bca3446c14e379ae5a0ef4"],["/2020/05/29/Python面向对象/index.html","4a8ab39d09b4e27788e97d14e2659248"],["/2020/06/02/Python 中的上下文管理器/index.html","0f9127991a5f87eddf23f02a34cf3a73"],["/2020/06/02/Python类补充/index.html","6467582bd4e32f682edb3ce76cc991c2"],["/2020/06/02/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","126564ea480ca9b01e642af5304034e8"],["/about/index.html","8ee29a3b117aca13f2e01d0889e1d434"],["/archives/2019/06/index.html","d6a1653a40022b2ea9f27d7ec49cd1f6"],["/archives/2019/07/index.html","f7cbed6ed225d4263d5869626d4778cc"],["/archives/2019/08/index.html","e4c26b3c509a457363a3c40df635b861"],["/archives/2019/09/index.html","a26fd8e736fb357c565579f50d8664ca"],["/archives/2019/10/index.html","c6f6904f5119a48e395669f28e63461a"],["/archives/2019/11/index.html","f89cb7d61c68131aace99dac16932783"],["/archives/2019/12/index.html","23766105b445ff446f1bbb5a838a2b45"],["/archives/2019/index.html","a41e8d96183b04210b2e207dfaa2f1f5"],["/archives/2019/page/2/index.html","6b60412152192ac975c93830aa012682"],["/archives/2019/page/3/index.html","e1caa5d65ac3e2b1dfb796e814425afc"],["/archives/2019/page/4/index.html","399742621f70eb1a4be63a105c3fd846"],["/archives/2020/01/index.html","0cbdc3477e9507bfe5e82eb9b704832c"],["/archives/2020/02/index.html","da70dd3d25366f97665b528addf9f3bf"],["/archives/2020/04/index.html","720b2077bd05a307292d56dbed7ea984"],["/archives/2020/05/index.html","52a9f34f3243af4f20c81a5d94705cf6"],["/archives/2020/06/index.html","67dbf1fc796ca2f38c1b06894948241e"],["/archives/2020/index.html","8bde55c8a57edcaa2a7922a7f7c759a7"],["/archives/2020/page/2/index.html","9eb050780831470064c54334cae0b86a"],["/archives/index.html","8b18ebaa786ba5e179d75a1898b1e283"],["/archives/page/2/index.html","917758fc3b9044aae223ebd8553b225e"],["/archives/page/3/index.html","0325b039a674cfbf85ff659cda863810"],["/archives/page/4/index.html","cfb053f50bec8e1bf0e773f008cebd9b"],["/archives/page/5/index.html","3e56a78e078070c6cee3336ef157c193"],["/archives/page/6/index.html","1e7b2abc8be539b1b897e19b854b8293"],["/categories/C语言编程知识/index.html","0ba3cf4a0a7342f1bf964a01b9fabac1"],["/categories/Hadoop/index.html","a0300628dbb54e9fb191e7e2deb15e20"],["/categories/JavaScript/index.html","8f6ca64d8866a718baaa91bf20a716ff"],["/categories/Java学习/index.html","7a97391e9d17918c9c2c9ac878472adf"],["/categories/Linux/index.html","c307b8ebf130f3d9b69ae4264e820134"],["/categories/Linux/常用命令/index.html","ba3c448cb6b92c218d6b136308891d2f"],["/categories/Linux/核心知识/index.html","d99a5a8d2ae6bd02e4748f7f0f4e3f75"],["/categories/SQL知识/index.html","2951fbc5f047adf42b2cf8f0bceeec7b"],["/categories/docker/index.html","8c84ca3a689540e2b65c142bf42c92f0"],["/categories/git/index.html","144c71050517a4fb2552570bc6196707"],["/categories/index.html","06b9036ac3bdab9e1ee0e236ddaa3e7c"],["/categories/python后端架构/index.html","003e1db0f7c2dea869071839f2a7f18d"],["/categories/python数据挖掘/index.html","6a35f1aa64e0efae562b9f5ad63b0373"],["/categories/python爬虫/index.html","2ff9f27ab197e75491167c11c35bc234"],["/categories/python的web框架/index.html","a4a0560a92a5eeb4670299850628c200"],["/categories/python编程/index.html","61d815c7e8b8884d6c22e8bd97c6dc4a"],["/categories/python编程/page/2/index.html","187a123b0a1e0838cd12d96879a1d8b5"],["/categories/python进阶/index.html","c656f209b3914bb5ef061bb4b1193095"],["/categories/selenium知识/index.html","7111fcab7f648bc85842cd401e31419a"],["/categories/个人随感/index.html","86d89a1bcec0a7ca6038de54ac235394"],["/categories/前端学习/index.html","1cb6b3a14b01ee83cdd3fdf4950916a9"],["/categories/数据可视化/index.html","713881d49e6d298c0e6b16cd1f78893d"],["/categories/正则表达式/index.html","39f3944864c1173bb654713891dd21d4"],["/categories/算法/index.html","c5a02a0f909163d025bb41a2d27b08bd"],["/categories/算法/五大经典排序/index.html","159fd46da53cf13cabc9292b6cb17356"],["/categories/统计学和概率论/index.html","7a1775fb1b7879636e444f3130d195d0"],["/categories/网站知识/index.html","c14fa25aab40b0f71728b435fefb553c"],["/categories/计算机组成原理/index.html","cfb628bc141c524385b28b3a8db48324"],["/categories/计算机网络/OSI七层协议/index.html","5e107e3f1862a035e05b021df087925f"],["/categories/计算机网络/index.html","ecf3ff8d8d9110457f0c5d5eb3f06a28"],["/categories/面试经历/index.html","18cdbc401aa44cd47a73440edd52a4b9"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","4024d2a5c7c414320d8816bd183a1ca5"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","1565708ddd99b885d81ee39323516483"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3e3459dbb4e5afc4541eed6b73364850"],["/page/3/index.html","798470428c1b1974766d9a10ace3175d"],["/page/4/index.html","979e2459fd18e9029e7ad673983c0da9"],["/page/5/index.html","21c9605f36d8165c073cb878063b1352"],["/page/6/index.html","1738e09990719aae06e1307e6c9e795b"],["/sw-register.js","5569f3178bc338209479b756d96c856f"],["/tags/Django/index.html","54be40affb0ae97986ec4377854d689a"],["/tags/GIL锁/index.html","23b8dc3f07e144ca2f984122b9b8e6e9"],["/tags/Hadoop介绍/index.html","8f03a750c13a50dce311f8408a49acb8"],["/tags/Java基本知识点/index.html","2cac0c9ad1f387886542b6e0e5b90a30"],["/tags/LinuxLiunx命令/index.html","b02bc7d24f3f21705c00f2092a880974"],["/tags/Linux知识/index.html","61bb5ecfa32aee37d2607102aab231f4"],["/tags/SQL函数/index.html","c901018e5d8f23e34248f4ad46439bf9"],["/tags/SQL命令/index.html","91a47b0205a0149e0655b3b71983f977"],["/tags/SQL调优/index.html","cc3096e682a0339eda3f740d5a75d040"],["/tags/Void-知识点/index.html","a8595e37ec92536489d2cf753286dd8a"],["/tags/Vue框架/index.html","2aa9f7975e45a752042ab8eb83a3df9a"],["/tags/docker知识/index.html","19edf20dad43c52715ce5d5752ae0b65"],["/tags/flask/index.html","5e185f4d2c27268ffafc617ce4b33595"],["/tags/git命令/index.html","b7ca6948e1ea6bc2569838d7d832b7cf"],["/tags/git配置/index.html","c2163a6d3822a7a210ba4a0a3f85ae5a"],["/tags/index.html","b94f90675c83767d2e150968d10de732"],["/tags/js知识/index.html","f8c7c39817d09bcfc93f0b00b64b0c7c"],["/tags/pandas函数/index.html","9fafb1ec611c1d79878bea8ee9b38e89"],["/tags/python编译器/index.html","ce487939465b059cd3eabc099a7cdc5b"],["/tags/scrapy框架/index.html","32f86804b50698ec99c553d7af00f711"],["/tags/selenium/index.html","36a392ddeb35b80e07de706b42c7114d"],["/tags/上下文管理器/index.html","f5c4d6cdac75cb0eabc3348f07e96e84"],["/tags/函数补充/index.html","8577877d1a5ca795e01011e0d529ec8a"],["/tags/协程知识/index.html","b33469ee94260ce6a4afaa90efb71b10"],["/tags/基本知识点/index.html","156be0732f9da6d021473d1d61a9f908"],["/tags/底层原理/index.html","6db3c2abb01eff2f09cf875e5a0a130e"],["/tags/扩展知识/index.html","f7074d9f77a18463a882914d0cabf7b0"],["/tags/排序算法/index.html","5663a8219cc4a34bb22f23b6f889589f"],["/tags/数学知识/index.html","6c57734896cff8ce672993b7c69132f3"],["/tags/数据可视化概念/index.html","0d1baab6f926ed636ac8cbbf9da59c77"],["/tags/架构演进/index.html","fa9d6e08833239361219572f9a1e1aae"],["/tags/核心模块/index.html","484ecdd2ecdf7219f445abf41323560d"],["/tags/正则/index.html","3d6a6e2f9792a6704b6843b3c676c652"],["/tags/爬虫实践/index.html","cb92a5bdc4e1bfe2a447387c2109c8b8"],["/tags/类和模块/index.html","1325c0e7efecefff9c4ce968cc554410"],["/tags/类的知识/index.html","b91623d72d7918578cde12aee8d26d0e"],["/tags/线程概念/index.html","2aca570a792e20a372eb58d67436f4dc"],["/tags/网站的基本概念/index.html","ab2ee97248650043b736697563f6bdec"],["/tags/网络编程/index.html","98915896cd5699d4cedb581cf5a206e4"],["/tags/装饰器/index.html","10cc7ec7bf745f2aa3bb0b10c53af31f"],["/tags/计算机知识/index.html","021273458c4b6041743aee8a158a4c19"],["/tags/计算机网络知识/index.html","56e993afa62305c92eb36b27ce01c621"],["/tags/语音识别/index.html","85722e56d6e404bf799ae01e4d0dc2bc"],["/tags/进程-线程-协程总结/index.html","1b3fe098455704c7c42fcdefd754066b"],["/tags/进程概念/index.html","c5e595d557faadc4f9871414f6bd7791"],["/tags/面向对象编程/index.html","8c722358f8315a657a2b26cc70904d11"],["/tags/面试总结/index.html","43d30b74c4ddb12a9d7320aa887a4550"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/16/12306自动抢票/index.html","a50d18b7fb846f1ec1529ea813d54550"],["/2020/08/16/C 语言中 void 详解及应用/index.html","baa51a777d5cb0b4c04f9b95c290bc8d"],["/2020/08/16/C语言打包技艺/index.html","505055cd08bd9e9079364e51acafc123"],["/2020/08/16/C语言笔记1/index.html","9cdcaa243221ef92e9185304d16da37f"],["/2020/08/16/C语言笔记2/index.html","af147ac359a27a986c342311210b7a77"],["/2020/08/16/Django 重定向终极指南/index.html","d78658334a248ce89aaddf32d9227657"],["/2020/08/16/Django参数和模板/index.html","546146c472755c5db8b80fc493764663"],["/2020/08/16/Django后端演化/index.html","1d9f2ca523dc94eca1b3306b6353086f"],["/2020/08/16/Django的Cookie和Session/index.html","70d5b833edc2a4aaea3d080da88f245e"],["/2020/08/16/Django的Field详解/index.html","fad7afc54bd142a8beb1026f1cc9337c"],["/2020/08/16/Django的ORM多表操作/index.html","a0994f016ea6c15aaa6944433cd4c163"],["/2020/08/16/GIL锁/index.html","d8ffae1a51be6c1be4411943544ce1d1"],["/2020/08/16/IP代理池/index.html","df3467ae10a134da4fb2e3aeb5363c41"],["/2020/08/16/JavaScript的简介和基本知识/index.html","dffa2ce971193d0940fadf826544e2dc"],["/2020/08/16/Java面向对象/index.html","e6836e2e0fce13f2e0a7427a3a26a1ab"],["/2020/08/16/Linux常用命令/index.html","8df08b0eb2ac01864b83e56f91fb3678"],["/2020/08/16/Linux操作系统核心知识/index.html","435b76f40b84e72486e7caf2b0437f70"],["/2020/08/16/Linux操作系统（二）/index.html","0952f00c659cd4b5803883a78e17d5b5"],["/2020/08/16/MySQL数据库引擎和数据类型/index.html","99c7b9831980d2e34a17d47d2ede5979"],["/2020/08/16/Mysql数据库函数/index.html","a2bf06a38f804c6117d3826f44e1b289"],["/2020/08/16/Python 中的上下文管理器/index.html","1b7c2cd5b1f73fb9bbf14a28b4e46597"],["/2020/08/16/Python的模块和类/index.html","37215eb9176c6589fa06df903b86d7cc"],["/2020/08/16/Python类补充/index.html","2d9d7d1b9bc5f52fe097d14a9f630a44"],["/2020/08/16/Python面向对象/index.html","ad8840f094568bb98ae7a553f3642f15"],["/2020/08/16/README/index.html","f747a7411cfda7228443250abe91b296"],["/2020/08/16/SQL性能调优/index.html","7fbabfbbdcafa720d962c00e2442ff82"],["/2020/08/16/c语言笔记3/index.html","8d1740f2e3da90cfc9d08aa690042604"],["/2020/08/16/django+nginx+uwsgi部署漫谈/index.html","f9a2f43af4870e2790e3938a921cd75b"],["/2020/08/16/django之url规则/index.html","018d02af8b0f47601deaa6a810206a8f"],["/2020/08/16/django配置初启/index.html","e86554ea404195ea936b250c27a234cf"],["/2020/08/16/docker以及相关概念介绍/index.html","f2f1d6f1eca5517e2a2cbd867a2ad0be"],["/2020/08/16/docker信息/index.html","918f8b5826447c909065b52739649d8e"],["/2020/08/16/flask框架/index.html","258c13ca2465e7d0dc4cbdc2d2be6ad9"],["/2020/08/16/git命令/index.html","35f4bedcea7f003dfe9564fb34778bf5"],["/2020/08/16/hadoop基本概念介绍/index.html","2eb559446772682a0334dbbabf010a26"],["/2020/08/16/java基本知识/index.html","2f7ba6e65a91ccfb5608c582b12e7974"],["/2020/08/16/java简介/index.html","696994a7c032aa8f36f6397428d0852f"],["/2020/08/16/pandas函数/index.html","ca383c12fb2e6a999d85b7587826257c"],["/2020/08/16/python函数补充/index.html","94e7e038170c260d8490e6f4d0e8aede"],["/2020/08/16/python数据类型的底层实现/index.html","91de1f4d34974f30b2a0555ef18ce72b"],["/2020/08/16/python核心模块的介绍/index.html","b225c58d80c59d81dd819ba60444cab0"],["/2020/08/16/python爬虫/index.html","3adc377632a6543ee69e40144adb2b43"],["/2020/08/16/python类的私有属性和私有方法/index.html","298c9a686d30593466cc7731b391ff67"],["/2020/08/16/python解释器介绍/index.html","fd42381e290c41b0434f7e953d9f661b"],["/2020/08/16/python高阶函数的定义/index.html","16897512f6ae783ea7aeee198f8b9259"],["/2020/08/16/vue框架介绍/index.html","044dfb5584bd24c2b2605718496910d6"],["/2020/08/16/windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境/index.html","a35af456e1bbed899ceb468df79ee8cb"],["/2020/08/16/京东全网爬虫/index.html","d1ce60d3ef39e1059d2c2059b3a6477b"],["/2020/08/16/协程/index.html","551e1fad4426502ce6edab7db1a3f957"],["/2020/08/16/多线程/index.html","71d9ba1f96d19dab0ea20a952d9ac437"],["/2020/08/16/多进程/index.html","2a9db2db0449480e5c06dcc30de9d595"],["/2020/08/16/数据可视化笔记/index.html","71767bbba0f1a2a124a1cc857ea54dbb"],["/2020/08/16/数据科学笔记/index.html","c9c24a009b12f34bb845e9bc7f16a3cc"],["/2020/08/16/斗鱼弹幕抓取/index.html","97ff69d61405748db4d05d4fb91336bf"],["/2020/08/16/查看mysql连接情况/index.html","3ac73dfeb6ffeb6753656111a84462cf"],["/2020/08/16/正则表达式/index.html","4375b004bc0ff3422e92615f3f867c31"],["/2020/08/16/第一次面试总结/index.html","3b084ef7237c786c48f4acccaea820ae"],["/2020/08/16/算法时间复杂度和五大经典排序算法/index.html","f93d2e5b1d9e94ba49ce4b363495ec0d"],["/2020/08/16/索引和事务/index.html","a65d29cd03a76094b9a87282a08df597"],["/2020/08/16/网站概念/index.html","8068e7a22d613d0de75238e87199cc3e"],["/2020/08/16/计算机系统组成及工作原理简介/index.html","dcc0226e16e0ffbad157e393a1cd6e37"],["/2020/08/16/计算机网络/index.html","66c549d7119efa147980f62df5d41bff"],["/2020/08/16/语音识别/index.html","630bc12b3080d86d318be89645785e54"],["/2020/08/16/进程,线程,协程对比/index.html","9083724b911aab28abe8106d08959d43"],["/2020/08/16/闭包和装饰器/index.html","fb853d45bffd7d861667c84d25b78be0"],["/2020/08/16/面试总结/index.html","b84816ca11958cfccc797dd7d8798a2f"],["/2020/08/30/docker网络/index.html","b9eaa265104c7a1f677157094870f77f"],["/2020/10/06/轮询、长轮询、websocket/index.html","04cf8a3df84402496d191caa75033a1a"],["/2020/10/10/django的querySet详解/index.html","056bbdbfc2489b76c1055e162315c57d"],["/2020/10/10/设计模式/index.html","48aa3820b89afe78cb49c0aa09bc55b1"],["/2020/12/01/MQ笔记/index.html","af3d866517532c4ceac0d2acfeedf45e"],["/2020/12/03/python函数参数传递和返回值探究/index.html","9997d9ace404066a8d8f960e1e6eb475"],["/about/index.html","5f4b8a2884903e64017e745f36fbd13f"],["/archives/2020/08/index.html","2cab4b06312ff565f1728c9471d26372"],["/archives/2020/08/page/2/index.html","d592415106c529d7268012afec49ddf3"],["/archives/2020/08/page/3/index.html","f0df1cb73a9d98c30c2a11c562a87ef4"],["/archives/2020/08/page/4/index.html","771a90a4b8002e39e5dd8f34eb9f5dcf"],["/archives/2020/08/page/5/index.html","7f1d33bb1fd55f1ad114eb0b231ef64c"],["/archives/2020/08/page/6/index.html","e924fd1b403a56436071d13e5f2143c5"],["/archives/2020/08/page/7/index.html","9f0a7254db62517bbc9fc6dfca936618"],["/archives/2020/10/index.html","7e2b6371e7756f95ba7da326472f77f4"],["/archives/2020/12/index.html","97cbe2d73c894f7ab8d77755e08ebf26"],["/archives/2020/index.html","ae5372d7abfff164e2a5a973f1b8de95"],["/archives/2020/page/2/index.html","c708ce7c38a9d7b823c6f853b23e116c"],["/archives/2020/page/3/index.html","df8c557ffe57b11570cf39c5ba605220"],["/archives/2020/page/4/index.html","9611f8c99c77e1c1d249b0558d3673fc"],["/archives/2020/page/5/index.html","52009a6ba103f91ed2aa99e6f623a9e5"],["/archives/2020/page/6/index.html","0368f5a412700c941c0ab7f0f4b6c99e"],["/archives/2020/page/7/index.html","b80513817f7fc314f7261ecadcf66f84"],["/archives/2020/page/8/index.html","ae4a4e67d04ca3b3e2bdf5b4971eefac"],["/archives/index.html","ddcc55169ff5f9a0029d30f33f85d33b"],["/archives/page/2/index.html","73f93d2008959ff0f3e2a7636c5c4d98"],["/archives/page/3/index.html","cb77218b347884132add0b56e5627662"],["/archives/page/4/index.html","81ddab2f554ab9fb8b1aeac5aab1ab93"],["/archives/page/5/index.html","f30ef948d15dba2b80e2a333d3367ccb"],["/archives/page/6/index.html","1dc7797f0be7b23b81c3950ddf1369d8"],["/archives/page/7/index.html","164aa4effcdb7bff73ea479bd2920129"],["/archives/page/8/index.html","cf0b77313bb7f5facc39d032084a4301"],["/categories/C语言编程知识/index.html","6195fff9ac99ac12f61d701b32d6b7a7"],["/categories/Hadoop/index.html","1a969a9a6b5300a2fefc9926cb3b5f4b"],["/categories/Http知识/index.html","a8ce1485b09215a3c1d77e8a8423f58f"],["/categories/JavaScript/index.html","3073fe26e5eea5a7bc9604a9885f8ece"],["/categories/Java学习/index.html","a2994a6185112858f6b62954626e5e36"],["/categories/Linux/index.html","fbb6d38b5bfe3f692bfe82e729411bea"],["/categories/Linux/常用命令/index.html","986c384d0ff076389e019d9603b09b5c"],["/categories/Linux/核心知识/index.html","a5b2fd84c3a540d8d79e07a6cdb0fc5c"],["/categories/SQL知识/index.html","d4c0dd0bbc65195c34bb6e653dc7bcd8"],["/categories/docker/index.html","c455223a5e24365d106030e5b367d95d"],["/categories/git/index.html","affa6656e6084b1585b18611f7f4cd24"],["/categories/index.html","95c576a06958eda7b2847e8238362ae1"],["/categories/python后端架构/index.html","23a849546637999ded1801920a2252e8"],["/categories/python数据挖掘/index.html","d44c2493e0777c6e7c02a053b2561dbc"],["/categories/python爬虫/index.html","3a83f4972e25f4bf0be8eb7d2849b7e6"],["/categories/python的web框架/index.html","c12bf255a9b36f560a1714bead280afe"],["/categories/python编程/index.html","32ede93bc6b56834221ba8968070e543"],["/categories/python编程/page/2/index.html","5761c812156f50b09782014e026a503f"],["/categories/python进阶/index.html","7b6069e6267f1857755e11eee63907cb"],["/categories/selenium知识/index.html","33cf79bcb8937d2fd4821958f426065b"],["/categories/个人随感/index.html","5f9db844bf2ab43f7772d866850cb47a"],["/categories/前端学习/index.html","d79d349cab83a750c1acc6950e6f76c8"],["/categories/数据可视化/index.html","475d323b65b2aaad91e81538c459a2f7"],["/categories/正则表达式/index.html","5b79578ddcaa1e2d401ae277e8b71bef"],["/categories/消息队列/index.html","3c05705631e37a4290203069d98857dc"],["/categories/算法/index.html","8c59897798428d27382e19e415c6b94f"],["/categories/算法/五大经典排序/index.html","ff1eca044dae3e8c78919318847b4aaf"],["/categories/统计学和概率论/index.html","21071c21fe897df3ccc4f45a374822e8"],["/categories/网站知识/index.html","0a6452f22f51b308b986303fe455288f"],["/categories/计算机组成原理/index.html","08205f728e603e7815c6690da9f7886b"],["/categories/计算机网络/OSI七层协议/index.html","6b16d86cac15592e9cfe9e0c7f443ded"],["/categories/计算机网络/index.html","0993852f9be0ff59e8190cae8cbc5ef6"],["/categories/软件工程/index.html","db77933cd82d88a733f6cdcbd1eeea60"],["/categories/面试经历/index.html","2f90c54d1cee7f8f83701afdaaf64736"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","0139eb6277fc35606a0ea532ceb64c20"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","7d6e754d338c09240e1a7b3da8454aa6"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","a99cea1faba949bebe69b92af5a2220b"],["/page/3/index.html","d5f061f076219e950a04836b88b8f317"],["/page/4/index.html","1ffac1ec8a89aa958f3231bc8b8ab695"],["/page/5/index.html","6993fb1be33f2b841a573b473a53b36c"],["/page/6/index.html","8a1a1b2ed8ba5366c76d26346564ea05"],["/page/7/index.html","94b409604d2ec60abbf95dbf2e81dc61"],["/page/8/index.html","394628fcc850862bb89a3ec5555a9869"],["/sw-register.js","a2b1b020e44d6ac449c0b72fe5903781"],["/tags/Cookie和Session/index.html","3e4694518db674f26bb93391ab90937e"],["/tags/Django/index.html","5ab10c86b707266d7a795bda810dae1b"],["/tags/Django部署/index.html","a5e9f785a30a97ed9cf744edd1a80272"],["/tags/Django重定向原文/index.html","14a92d458eebc135763bd9e780ea3364"],["/tags/GIL锁/index.html","6a2b51d25a0d0984be5d7d57197ee65a"],["/tags/Hadoop介绍/index.html","396056aecd8759e421cca16d4f3f5f92"],["/tags/Java基本知识点/index.html","9d1121d126b7e6d218518c80f1a76ce9"],["/tags/LinuxLiunx命令/index.html","a64667cd305fce410d58e569f2d7398b"],["/tags/Linux知识/index.html","d2f95f9212500cf053c51a23c052b104"],["/tags/ORM/index.html","ddbdb015c3685a625d9427bb43553b07"],["/tags/QuerySet集合/index.html","32e642af11ff266f3d2042c084effa8d"],["/tags/SQL函数/index.html","6b8779ef3898887b5f823a9a518157db"],["/tags/SQL命令/index.html","a4f28cd813e4133a64d12da4223e4905"],["/tags/SQL概念/index.html","055b36316ea44c5da408b698ba75b0e3"],["/tags/SQL调优/index.html","5ee7fc8e08a274b363561da50e9148d3"],["/tags/Void-知识点/index.html","67ce2af1c51a6fbe8b7a6e029af3a8f9"],["/tags/Vue框架/index.html","44e78de4e2c240aaaccda179f6009fa9"],["/tags/docker知识/index.html","aeb3541ed1755e8085ee589881342627"],["/tags/flask/index.html","33b9a4a04e0f8b9657e13e9077613df3"],["/tags/git命令/index.html","33a9edcce5be281eb895c13fa049141c"],["/tags/git配置/index.html","d7902e26902d1f6fcfff88fd5bc5b71a"],["/tags/index.html","85f403a15de93739d5871b112ebbfec9"],["/tags/js知识/index.html","084ab923e4b3e21b12073eef7facb9c7"],["/tags/pandas函数/index.html","89a75023bd0451180b74f1fb913fce17"],["/tags/python编译器/index.html","2ef649e6ad2bc6b2a3e00633ebf803cb"],["/tags/rabbitMQ/index.html","131737a0c5d078ad3ca3aff9353c725f"],["/tags/scrapy框架/index.html","da3014efb4750e139df3ee6bc97a3a53"],["/tags/selenium/index.html","6820a91231798153978ecdd7f66e86f4"],["/tags/websocket知识/index.html","399ebc3864a24a12bbaf115ca975bfce"],["/tags/上下文管理器/index.html","610a65861287e0daefb12ae4fd2f4cd4"],["/tags/函数补充/index.html","250156c5e0bbfb8909952816ebbb1b16"],["/tags/协程知识/index.html","3267a442e9ae766a866fcf5cad6290d4"],["/tags/基本知识点/index.html","3b2c42146d24481576dbdf6bfffe0991"],["/tags/对象引用传递/index.html","695df1d0b1e4939b584a41e2b8ca230c"],["/tags/底层原理/index.html","9d7dc8ffde4f7308dd80fc93da20b60c"],["/tags/扩展知识/index.html","33b908777c2fd3d1e21d7a5ba7ff036f"],["/tags/排序算法/index.html","fa4142245329c79a5cd8edd6bebddc26"],["/tags/数学知识/index.html","ce49c9cb8d0a800a2f32e5ce85a8c527"],["/tags/数据可视化概念/index.html","fee858dcb2b150cd2b2eae6d6dfeab9a"],["/tags/架构演进/index.html","3e7307a9487f48f711e0274aca368b9a"],["/tags/核心模块/index.html","d9d0fedb36afc34dcf6bd7319ffa336e"],["/tags/正则/index.html","eead30cba022da78476e0a236136aa99"],["/tags/爬虫实践/index.html","07da19a96bcb97ecaf1ddadcc4b0ba6f"],["/tags/类和模块/index.html","0752af4fd84560163b3aa2701c1b05c9"],["/tags/类的知识/index.html","3d4178e73b23bac1df9bcf8e99b0a3d7"],["/tags/线程概念/index.html","b50c8583b7bb60007f765e8cd8bac257"],["/tags/网站的基本概念/index.html","d4d57151d2a95bccfa59fdcbe969a6e7"],["/tags/网络编程/index.html","ab087dddcededcbd37cba8effe0a71cb"],["/tags/装饰器/index.html","8cc229408f4f96337311e01fcd398f5a"],["/tags/计算机知识/index.html","bb94670803e42aaf131c8842446c67c4"],["/tags/计算机网络知识/index.html","97fd832303f7256c459ff5e979131754"],["/tags/设计模式/index.html","c707b653e08f4739078fc148cf6070b9"],["/tags/语音识别/index.html","5d5c38469499d9eb9a5f9bf419f92c28"],["/tags/进程-线程-协程总结/index.html","05213cf7fc3a5b7c1cffd071abe68c01"],["/tags/进程概念/index.html","27431d158d1cfe1fdfb68626f4b2eef3"],["/tags/面向对象编程/index.html","17bf4c211a443c526711597aa237617a"],["/tags/面试总结/index.html","0c9b0b9ff4dcfc2ba86032fbe899784a"]];
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

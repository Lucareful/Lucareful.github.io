---
title: Vue.js的基本知识
categories:	
- 前端学习
tags: 
- Vue框架
---

# `Vue.js`概念

- `Vue.js `是目前最火的一个前端框架，`React`是最流行的一个前端框架（React除了开发网站，还可以开发手机`App`，`Vue`语法也是可以用于进行手机`App`开发的，需要借助于`Weex`）
- `Vue.js` 是前端的主流框架之一，和`Angularjs`、`Reactjs`一起，并成为前端三大主流框架！·
- `Vue.js` 是一套构建用户界面的框架，只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。（`Vue`有配套的第三方类库，可以整合起来做大型项目的开发）



# 框架和库的区别

- 框架：是一套完整的解决方案；对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目。
- 库（插件）：提供某一个小功能，对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。



# 后端中的`MVC`与前端中的`MVVM`之间的区别

- `MVC`是后端的分层开发概念；
- `MVVM`是前端视图层的概念，主要关注于视图层分离，也就是说：`MVVM`把前端的视图层，分为了三部分`Model`，`View`，`VM` ,`ViewModel`

![image-20191225111448702](https://upload.cc/i1/2019/12/25/XTm4Gf.png)

<!--more-->

# `vue.js`基本架构

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 导入Vue的包 -->
    <script src="../lib/vue.min.js"></script>
</head>
<body>
    <!-- 将来new的实例，会控制这个元素中的所有内容 -->
    <div id="app">
        <p>{{ msg }}</p>
    </div>
    <script>
    // 创建一个vue的实例
    // 当我们导入包之后，在浏览器的内存中，就多了一个vue构造函数
    var vm = new Vue({
        el: '#app', //表示，当前我们new的这个vue实例，要控制页面上的哪个区域
        data: { // data属性中存放的是 el 中要用到的内容
            msg: '欢迎学习Vue' //通过vue提供的指令，很方便的就能把数据渲染到页面上，程序员不再手动操作DOM元素了
        }
    })
    </script>

</body>
</html>
```



# 基本事件语法

- `<！--1.如何定义一个基本的vue代码结构-->`
- `<！--2.插值表达式和 v-text-->`
- `<!--3.v-cloak-->`
- `<!--4.v-html-->`
- `<！--5.v-bind vue提供的属性绑定机制缩写是 : -->`
- `<l--6.v-on vue提供的事件绑定机制缩写是 @ -->`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../lib/vue.min.js"></script>
    <style>
    [v-cloak]{
        display: none;
    }
    </style>
</head>
<body>
    <div id="app">
        <!-- v-cloak能够解决 插值表达式闪烁的问题 -->
        <p v-cloak>++++++ {{ msg }} ----------</p>
        <!-- 默认v-text没有闪烁问题 -->
        <h1 v-text="msg"></h1>
        <!--v-text会覆盖元素中原本的内容，但是插值表达式只会替换自己的这个占位符，不会把整个元素的内容清空-->I
        <div>
            {{msg2}}
        </div>
        <div>
            <p v-text="msg2"></p>
        </div>
        <div v-html="msg2"></div>
        <!-- v-bind: 是vue中，提供用于绑定属性的指令 -->
        <!-- v-bind 也可以简写为 :要绑定的属性 -->
        <!-- v-bind 中可以写合法的js表达式 -->

        <!-- Vue中提供了 v-on: 事件绑定机制 -->
        <!-- <input type="button" value="按钮" :title="myTitle" v-on:click = "alter('Hello')"> -->
        <input type="button" value="按钮" @click="show">
    </div>   

    <script>
    var vm = new Vue({
        el: '#app',
        data: {
            msg: '123',
            msg2: '<h2>Luenci</h2>',
            myTitle: '自定义标题'
        },
        methods: {
            show: function(){
            alert('Hello')
                }
            }
    })
    
    </script>
</body>
</html>
```



# `Vue`指令之事件修饰符

事件修饰符

- `.stop` 阻止冒泡
- `.prevent` 阻止默认事件
- `.capture` 添加事件侦听器时使用事件捕获模式
- `.self`只当事件在该元素本身（比如不是子元素）触发时触发回调
- `.once`事件只触发一次



# `Vue`指令之`v-model`和双向数据绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../lib/vue.min.js"></script>
    <style>
        .btn{
            width:100%}
    </style>
</head>
<body>
    <div id="app">
        <h4>{{ msg }}</h4>
        <!--v-bind只能实现数据的单向绑定，从M自动绑定到V，无法实现数据的双向绑定-->
        <!--<input type="text" v-bind:value="msg" style="width：100%；">-->
        <!--使用v-mode1指令，可以实现表单元素和 Model 中数据的双向数据绑定-->
        <!--注意：v-mode1只能运用在表单元素中-->
            <!--input（radio，text，address，email....）select checkbox textarea-->
        <input class="btn" type="text" v-model="msg">
    </div>
    
    <script>
    var vm = new Vue({
        el:'#app',
        data: {
            msg:'hello Vue.js'
        }
    })
    </script>

</body>
</html>
```



# `Vue`中使用样式

## 使用class样式

- 1.数组

  `<h1 :class="['red','thin']">这是一个H1</h1>`

- 2.数组中使用三元表达
  `<h1 :class="['red','thin',is active?'active':'']">这是一个H1</h1>`

- 3.数组中嵌套对象
  `<h1 :class="['red','thin', {'active':isactive}]">这是一个H1</h1>`

- 4.直接使用对象
  `<h1 :class="{red:true, italic:true, active:true，thin:true}">这是一个H1</h1>`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Luenci</title>
    <script src="../lib/vue.min.js"></script>
    <style>
        .red{
            color: red;
        }

        .thin{
            font-weight: 200;
        } 

        .italic{
            font-style: italic;
        }

        .active{
            letter-spacing: 0.5em;
        }

    </style>
</head>
<body>
    <div id="app">
        <!-- <h1 class="red">这是一个很大很大的H1</h1> -->
        <!--第一种使用方式，直接传递一个数组，注意：这里的class需要使用 v-bind 做数据绑定-->
        <h1 :class="['thin', 'active']">这是一个很大很大的H1</h1>

        <!-- 数组中使用三元表达式 -->
        <h1 :class="['thin', 'active', falg ? 'red':'italic']">这是一个很大很大的H1</h1>
        
        <!-- 数组中嵌套对象 -->
        <h1 :class="['thin', 'active', {'red':falg}]">这是一个很大很大的H1</h1>

        <!-- 直接使用对象 -->
        <h1 :class="{'thin': true, 'active': true, 'italic': false}">这是一个很大很大的H1</h1>

    </div>
    
    <script>
    var vm  = new Vue({
        el: '#app',
        data:{
            falg: true
        },
        methods:{}
    })
    </script>
</body>
</html>
```

## 使用内联样式

- 1.直接在元素上通过`style`的形式，书写样式对象

  - `<h1 :style="{color:‘red'，'font-size'：'40px'}">这是一个善良的H1</hl>`

- 2.将样式对象，定义到`data`中，并直接引用到`:style`中

  - 在data上定义样式：

    ```vue
    data:{
    	histyObj:{color:'red'，'font-size'：'40px'，'font-weight'：200'
    	}
    ```

    

  - 在元素中，通过属性绑定的形式，将样式对象应用到元素中：
    `<h1 :style="histyObj">这是一个h1</h1>`

- 3.在`:style`中通过数组，引用多个`data`上的样式对象

  - 在data上定义样式：

    ```vue
    data:{
        histy0bj:{color:'red'，'font-size'：‘40px'，‘font-weight"：'200'},		 	
    	histy0bj2:{fontstyle:'italic'}
    ```

  - 在元素中，通过属性绑定的形式，将样式对象应用到元素中：

    `<h1 :style="[histy0bj，histy0bj2]">这是一个h1</h1>`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../lib/vue.min.js"></script>
</head>

<body>
    <div id="app">
        <!-- 直接在元素上通过`style`的形式，书写样式对象 -->
        <h1 :style="{color:'red', 'font-weight':200}">我是一个标题</h1>

        <!-- 2.将样式对象，定义到`data`中，并直接引用到`:style`中 -->
        <h1 :style="styleObj">我是一个标题</h1>

        <!-- 3.在`:style`中通过数组，引用多个`data`上的样式对象 -->
        <h1 :style="[styleObj, styleObj2]">我是一个标题</h1>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                styleObj: { color: 'red', 'font-weight': 200 },
                styleObj2: { 'font-style': 'italic' }
            },
            methods: {}
        })
    </script>
</body>

</html>	
```



# `Vue`指令之`v-for`和`key`属性

- 1.迭代数组

```html
<1i v-for="（item，i）in list">索引：{{i}}---姓名：{{item.name}}---年龄：{{item.age}}</li>
```

- 2.迭代对象中的属性

```html
<4--循环遍历对象身上的属性-->
<div v-for="（val，key，i）in userInfo">{{val}}---{{key}}---{{i]}</div>
```

- 3.迭代数字
  `<p v-for="ks in 8">这是第（{i}}个P标签</p>`

  > 22.0+的版本里，当在细件中使用v-for时，key现在是必须的。

- 当`Vue.js` 用`v-for`正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，`Vue`将不是移动`DOM`元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定素引下显示已被渲染过的每个元素。
  为了给`Vue`一个提示，**以便它能跟踪每个节点的身份，从而重用和重新排序现有元素**，你需要为每项提供一个唯一`key `属性。

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui:ios">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../lib/vue.min.js"></script>
</head>

<body>

    <div id="app">
        <!-- 循环普通数组 -->
        <p v-for="(item,i) in list">索引值:{{i}}-----数值:{{item}}</p>

        <!-- 循环对象数组 -->
        <p v-for="(user,i) in list2">{{user.id}}===={{user.name}}------{{i}}</p>

        <!-- 循环对象 -->
        <p v-for="(value, key, i) in list3">{{i}}-------{{key}}----{{value}}</p>

        <!-- 循环数字 -->
        <p v-for="count in 6">第{{count}}循环</p>
    </div>


    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                list: [1, 2, 3, 4],
                list2: [
                    { id: 1, name: 'Luenci' },
                    { id: 2, name: 'Lynn' },
                    { id: 3, name: 'lucy' },
                    { id: 4, name: 'll' },
                ],
                list3: {
                    user: 'Luenci',
                    age: 20,
                    sex: '男',
                }
            },
            methods: {}
        })

    </script>

</body>

</html>
```



# `Vue`指令之`v-if`和`v-show`

- 一般来说，`v-if `有更高的切换消精而
- `v-show` 有更高的初始渲染消耗。
- 如果需要频繁切换` v-show `较好
- 如果元素可能永远也不会被显示出来被用户看到，则推荐使用`v-if`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui:ios">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../lib/vue.min.js"></script>
</head>

<body>

    <div id="app">
        <input type="button" value="点击" @click="flag=!flag">
        <!-- v-if的特点：每次都会重新删除或创建元素 -->
        <!-- v-show的特点：每次不会重新进行DoM的删除和创建操作，只是切换了元素的 display:none 样式 -->
        
        <!-- v-if有较高的切换性能消耗 -->
        <!-- v-show 有较高的初始渲染消耗 -->
        
        <!-- 如果元素涉及到频繁的切换，最好不要使用v-if -->
        <!-- 如果元素可能永远也不会被显示出来被用户看到，则推荐使用v-if -->
        <h1 v-if="flag">这是v-if控制的元素</h1>
        <h1 v-show="flag">这是v-show控制的元素</h1>
    </div>


    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                flag: true
            },
            methods: {}
        })

    </script>

</body>

</html>
```

# 过滤器

- 概念：`Vue.js`允许你自定义过滤器，可被用作一些嚣见的文本格式化。
- 过滤器可以用在两个地方：`mustache`插值和`v-bind` 表达式。过滤器应该被添加在`JavaScript`表达式的尾部，由“管道”符指示

## 全局过滤器

```js
Vue.filter('time', function (Ctime, pattern = '') {
var dt = new Date(Ctime)

var y = dt.getFullYear()
var m = dt.getMonth() + 1
var d = dt.getDate()
// return y + '--' + m + '--' + d

if (pattern.toLowerCase() === 'yyyy-mm-dd') {
	return `${y}-${m}-${d}`
	} else {
	var hh = dt.getHours()
	var mm = dt.getMinutes()
	var ss = dt.getSeconds()
	return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
	}
});
```



## 局部过滤器

```js
var vm2 = new Vue({
            el: '#app2',
            data: [
                dt = new Date(),
            ],
            methods: {},
            filters: {
            // 定义私有过滤器过滤器有两个条件【过滤器名称和处理函数】                             
            // 过滤器调用的时候，采用的是`就近原则`，
            //如果私有过滤器和全局过滤器名称一致了，这时候优先调用私有过滤器
                deteFormat: function (dateStr, pattern = '') {
                    var dt = new Date(Ctime)

                    var y = dt.getFullYear()
                    var m = dt.getMonth() + 1
                    var d = dt.getDate()
                    // return y + '--' + m + '--' + d

                    if (pattern.toLowerCase() === 'yyyy-mm-dd') {
                        return `${y}-${m}-${d}`

                    } else {
                        var hh = dt.getHours()
                        var mm = dt.getMinutes()
                        var ss = dt.getSeconds()

                        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
                    }
                }
            }
        })
```

>`ES6`中的字符串新方法` String`，`prototype`，`padStart(maxlength，fillString=''）`或 `String`，`prototype`，`padEnd(maxlength，filString=''）`来填充字符串；

# Vue指令

## 钩子函数

指令提供了几个钩子函数

- `bind`：只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
- `inserted`：被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于`document`中）。
- `update`：所在组件的`VNode`更新时调用，但是可能发生在其孩子的`VNode`更新之前。指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新（详细的钩子函数参数见下）。
- `componentUpdated`：所在组件的`VNode` 及其孩子的`VNode`全部更新时调用。
- `unbind`：只调用一次，指令与元素解绑时调用。
  接下来我们来看一下钩子函数的参数（包括`el，binding，vnode，oldVnode`）

## 钩子函数参数

指令钩子函数会被传入以下参数：

- `el`：指令所绑定的元素，可以用来直接操作 DOM 。
- `binding`：一个对象，包含以下属性：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-接口) 来了解更多详情。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

> 除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 [`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 来进行。



# Vue实例的生命周期

- 仕么是生命周期：从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期

- 生命周期钩子 = 生命周期函数 = 生命周期事件：就是生命周期事件的别名而已；

- 主要的生命周期函数分类：

  - 创建期间的生命周期函数：
    - `beforeCreate`：实例刚在内存中被创建出来，此时，还没有初始化好`data`和`methods`属性
    - `created`：实例已经在内存中创建OK，此时`data`和`methods`已经创建OK，此时还没有开始编译模板
    - `beforeMount`：此时已经完成了模板的编译，但是还没有挂载到页面中
    - `mounted`：此时，已经将编译好的模板，挂载到了页面指定的容器中显示
  - 运行期间的生命周期函数：
    - `beforeUpdate`：状态更新之前执行此函数，此时data中的状态值是最新的，但是界面上显示的数据还是旧的，因为此时还没有开始重新渲染DOM节点
    - `updated`：实例更新完毕之后调用此函数，此时`data`中的状态值和界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
  - 销般期间的生命周期函数：
    - `abeforeDestroy`：实例销毁之前调用。在这一步，实例仍然完全可用。
    - `destroyed`:Vue 实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

  ![lifecycle](https://upload.cc/i1/2020/01/01/NqHeSg.png)

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../lib/vue.js"></script>
</head>

<body>

    <div id="app">
        <h3>{{ msg }}</h3>
    </div>


    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                msg:'ok'
            },
            methods: {
                show(){
                    console.log("执行了show方法")
                }
            },
            beforeCreate() { // 这是我们遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它
                // console.log（this.msg）
                // this.show（）
                // 注意：在beforecreate生命周期函数执行的时候，data和methods中的数据都还没有没初始化
            },
            created() { //这是遇到的第二个生命周期函数
                // console.log（this.msg）
                // this.show（）
                // 在created中，data和methdas都已经被初始化好了！
            },
            beforeMount() { //这是遇到的第3个生命周期函数，表示模板已经在内存中编辑完成了，但是尚未把模板渲染到页面中
                //console.1og（document.getElementById（'h31）.innerText）
                //在beforeMount执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
            },
            mounted() { //这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
                console.log(document.getElementById(("h3").innerText))
                //注意：mounted是实例创建期间的最后一个生命周期函数，当执行完mounted就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的躺在我们的内存中，一动不动
            }

        });
    </script>

</body>

</html>
```


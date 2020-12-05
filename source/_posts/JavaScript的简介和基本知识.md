---
title: JavaScript基本知识
categories: 
- JavaScript
tags: 
- js知识
---

# JavaScript作用

- 表单动态检验（密码强度检测）
- 网页特效
- 服务端开发（Node.js）
- 桌面程序（Electron）
- APP（Cordova）
- 控制硬件 - 物联网（Ruff）
- 游戏小程序（cocos2d-js）

# HTML/CSS/JS的关系
- HTML/CSS标记语言--描述类语言
  - HTML决定网页结构和内容（决定看到什么），相当于人的身体
  - CSS决定网页呈现给用户的模样（决定好不好看），相当于给人穿衣服、化妆
- JS脚本语言-编程类语言
  - 实现业务逻辑和页面控制（决定功能），相当于人的各种动作

# 浏览器执行js

浏览器分成两部分：渲染引擎和JS引擎

- 渲染引擎：用来解析HTML与CSS，俗称内核，比如chrome浏览器的blink，老版本的webkit

- JS引擎：也称为JS解释器。用来读取网页中的JavaScript代码，对其处理后运行，比如chrome浏览器的V8

>浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎（解释器）来执行JS代码。JS引擎执行代码时***逐行解释每一句源码（转换为机器语言），然后由计算机去执行***，所以JavaScript语言归为脚本语言，会逐行解释执行。



# JS组成

## 1.ECMAScript

-  ECMAScript是由ECMA国际（原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMAScript语言的实现和扩展。

> ECMAScript:ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。



## 2.DOM——文档对象模型
- 文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言的标准编程接口。
- 通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。

## 3.BOM——浏览器对象模型
- BOM（Browser Object Model，简称BOM）是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。
- 通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

<!-- more -->

# JS有3种书写

## 1.行内式JS

- 可以将单行或少量JS代码写在HTML标签的事件属性中（以on开头的属性），如：onclick
- 注意单双引号的使用：在HTML中我们推荐使用双引号，JS中我们推荐使用***单引号***
- 可读性差，在html中编写JS大量代码时，不方便阅读；
- 引号易错，引号多层嵌套匹配时，非常容易弄混；
- 特殊情况下使用

## 2.内嵌JS
```html
<script>
	alert（'Hello World~！'）；
</script>
```



- 可以将多行JS代码写到`<script>`标签中
- 内嵌JS是学
- 习时常用的方式

## 3.外部JS文件

- 利于HTML页面代码结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用
- 引用外部JS文件的script标签中间不可以写代码
- 适合于JS代码量比较大的情况

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 2. 内嵌式的js -->
    <script>
        //alert('Hello')
    </script>
    <script src="my.js"></script>
</head>
<body>
    <!-- 1. 行内式的JS 直接写到元素内部 -->
    <!-- <input type="button" value="Luenci" onclick="alert('hello world')">  -->
    
</body>
</html>
```

# JavaScript注释

```html
//1.单行注释 ctrl + /
/*2.多行注释默认的快捷键 shift + alt + a */
2.多行注释vscode中修改多行注释的快捷键：ctrl + shift + /
```

# JavaScript输入输出语句

```html
<script>
        // 这是一个输入框
        prompt('请输入您的年龄');
        //alert 弹出警示框
        alert('计算的结果是：');
        // console 控制台输出 给程序员测试用
        console.log('我是程序员')
</script>
```

# 变量

## 声明变量

- //声明变量
  var age；//声明一个名称为age的变量
- `var`是一个JS**关键字**，用来声明变量（variable变量的意思）。使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序最管
- age是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间

## 变量命名规范
- 由字母（A-Za-z）、数字（0-9）、下划线（）、美元符号（$）组
  - 如：usrAge，num01，_name
- 严格区分大小写。
  - var app；和var App；是两个变量
- 不能以数字开头。
  - 18age是错误的
- 不能是关键字、保留字。
  - 例如：var、for、while
- 变量名必须有意义。
  - MMDBBD nl → age
- 遵守驼峰命名法。
  - 首字母小写，后面单词的首字母需要大写。myFirstName

# 数据类型

> JavaScript是一种弱类型或者说动态语言。

JS把数据类型分为两类

- 简单数据类型（Number，string，Boolean，Undefined，Null）
- 复杂数据类型（object）

###　数字型

>- Infinity，代表无穷大，大于任何数值
>- Infinity，代表无穷小，小于任何数值
>- NaN，Not a number，代表一个非数值
>- isNaN（）这个方法用来判断非数字并且返回一个值如果是数字返回的是false如果不是数字返Turn

```html
<script>
	var num=1e；//num 数字型
    var PI=3.14//PI数字型
	//1.八进制0~7我们程序里面数字前面加0表示八进制
    var numl=010；
    console.1og（num1）；// 010八进制转换为10进制就是8
	var num2=012；
	console.1og（num2）；
	//2.十六进制e～9a~f#ffffff数字的前面加0x表示十六进制
    var num3=0x9；
    console.1og（num3）；
    var num4=0xa；
    console.1og（num4）；
    // 数字型的最大值
    console.log(Number.MAX_VALUE);
    // 数字型的最小值
    console.log(Number.MIN_VALUE);	
</script>

out:
    8
    10
    9
    10
    1.7976931348623157e+308
    5e-324
```



### 字符串型String

- 1.字符串引号嵌套

  > JS可以用单引号嵌套双引号，或者用双引号嵌套单引号（外双内单，外单内双)

- 2.字符串转义符

- 类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。

- 转义符都是`\`头的，常用的转义符及其说明如下：



| 转义符 | 解释说明                 |
| ------ | ------------------------ |
| \n     | 换行符，n是newline的意思 |
| \\     | 斜杠 \                   |
| `\'`   | 单引号                   |
| `\"`   | 双引号                   |
| \t     | tab缩进                  |
| \b     | 空格，b是blank的意思     |

 

### 布尔型

- 布尔类型有两个值：true和false，其中true表示真（对），而false表示假（错）。
- 布尔型和数字型相加的时候，true的值为1，false的值为0。

### Undefined 和Null

- 一个声明后没有被赋值的变量会有一个默认值undefined（如果进行相连或者相加时，注意结果）

## 数据类型的转换

- 转换为字符串类型

| 方式             | 说明                         | 案例                                 |
| ---------------- | ---------------------------- | ------------------------------------ |
| toString()       | 转成字符串                   | var num=1; alert(num.toString()）    |
| String()强制转换 | 转成字符串                   | var num=1；alert(String(num))；      |
| 加号拼接字符串   | 和字符串拼接的结果都是字符串 | var num=1；alert(num+"我是字符串”)； |

>toString()和String()使用方式不一样。
>三种转换方式，我们更喜欢用第三种加号拼接字符串转换方式，这一种方式也称之为隐式转换。

- 转换为数字型

| 方式                     | 方式                         | 案例                  |
| ------------------------ | ---------------------------- | --------------------- |
| parselnt(string)函数     | 将string类型转成整数数值型   | parselnt(‘78’)        |
| parseFloat（string）函数 | 将string类型转成浮点数数值型 | parseFloat（"78.21"） |
| Number（）强制转换函数   | 将string类型转换为数值型     | Number('12')          |
| js隐式转换（- * / ）     | 利用算术运算隐式转换为数值型 | '12' - 0              |

- 转换为布尔型

| 方式          | 说明               | 案例            |
| ------------- | ------------------ | --------------- |
| Boolean()函数 | 其他类型转成布尔值 | Boolean('var'); |

- 代表空、否定的值会被转换为false
  - 如”、0、NaN、null、undefined
- 其余值都会被转换为true



# 编译型语言和解释型语言

- 编译器
  - 在代码执行之前进行编译，生成中间代码文件
- 解释器
  - 在运行时进行及时解释，并立即执行（当编译器以解释方式运行的时候，也称之为解释器）
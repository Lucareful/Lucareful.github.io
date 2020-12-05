---
title: Java语言概述
categories: 
- Java学习
tags: 
- Java基本知识点
---



## Java语言简史
- Java语言是美国Sun公司（Stanford University Network），在1995年推出的高级编程语言。所谓编程语言，是计算机的语言，人们可以使用编程语言对计算机下达命令，让计算机完成人们需要的功能。

Java语言发展历史
- 1995年Sun公司发布Java1.0版本
- 1997年发布Java1.1版本
- 1998年发布Java1.2版本
- 2000年发布Java1.3版本
- 2002年发布Java1.4版本
- 2004年发布Java5版本（更新频率较大）
- 2006年发布Java6版本
- 2009年Oracle甲骨文公司收购Sun公司，并于2011发布Java7版本
- 2014年发布Java8版本（更新频率较大，市场占有率最大）
- 2017年9月发布Java9版本
- 2018年3月发布Java10版本

## Java 平台的三个版本

作用：

- 这使软件开发人员、服务提供商和设备生产商可以针对特定的市场进行开发：

 ### Java SE（Java Platform，Standard Edition）

- Java SE 以前称为 J2SE。它允许开发和部署在桌面、服务器、嵌入式环境和实时环境中使用的 Java 应用程序。Java SE 包含了支持 Java Web 服务开发的类，并为 Java Platform，Enterprise Edition（Java EE）提供基础。
### Java EE（Java Platform，Enterprise Edition）

- 这个版本以前称为 J2EE。企业版本帮助开发和部署可移植、健壮、可伸缩且安全的服务器端 Java 应用程序。Java EE 是在 Java SE 的基础上构建的，它提供 Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 2.0 应用程序。

### Java ME（Java Platform，Micro Edition）

- 这个版本以前称为 J2ME。Java ME 为在移动设备和嵌入式设备（比如手机、PDA、电视机顶盒和打印机）上运行的应用程序提供一个健壮且灵活的环境。Java ME 包括灵活的用户界面、健壮的安全模型、许多内置的网络协议以及对可以动态下载的连网和离线应用程序的丰富支持。基于 Java ME 规范的应用程序只需编写一次，就可以用于许多设备，而且可以利用每个设备的本机功能。

>开发环境，推荐Eclipse,NetBeans,这两个IDE可以挂接对应的插件，进行开发。还有一点，那就是这三个应用，se,标准应用，以学习为主，由于界面，开发成本，速度等问题，很少用来做程序，但不是说，他不能做程序，Eclipse,NetBeans,都是javase写起来的。Me,移动设备应用，对于一些中高端应用还好了！以前用他做过手机游戏，呵呵呵！EE,企业级解决方案，开发套件全部免费，可控性好，安全性高，乃是当前B2B的规范。再者，这三个应用，都需要虚拟机的支持。

<!--more-->


## 字节

- 位（bit）：一个数字0或者一个数字1，代表一位。
- 字节（Byte）：每逢8位是一个字节，这是数据存储的最小单位。

```java
1 Byte = 8 bit
1 KB = 1024 Byte
1 MB = 1024 KB
1 GB = 1024 MB
1 TB = 1024 GB
1 PB = 1024 TB
1 EB = 1024 PB
1 ZB = 1024 EB
```



## Java虚拟机——JVM

- `JVM`（Java Virtual Machine）：Java虚拟机，简称`JVM`，是运行所有Java程序的假想计算机，是Java程序的运行环境，是Java最具吸引力的特性之一。我们编写的`Java`代码，都运行在`JVM`之上。
- 跨平台：任何软件的运行，都必须要运行在操作系统之上，而我们用Java编写的软件可以运行在任何的操作系统上，这个特性称为`Java`语言的跨平台特性。该特性是由JVM实现的，我们编写的程序运行在`JVM`上，而`JVM`运行在操作系统上。

> Java的虚拟机本身不具备跨平台功能的，每个操作系统下都有不同版本的虚拟机。

## JRE和JDK
- `JRE`（Java Runtime Environment）：是`Java`程序的运行时环境，包含`Jvm`和运行时所需要的核心类。
- `JDK`（Java Development Kit）：是`Java`程序开发工具包，包含JRE]和开发人员使用的工具。
  我们想要运行一个已有的`Java`程序，那么只需安装`JRE`即可。
  我们想要开发一个全新`java`程序，那么必须安装`JDK`。

![image-20191130121256831](https://upload.cc/i1/2019/12/03/iHdtNp.png)



## Java程序运行步骤

- 编写源程序， 后缀名为`.java`的文件
- 编译源程序， 用`javac`命令将后缀名为`.java`的源程序编译成`.class`的字节码文件
- 运行源程序， 用`java`命令 将`.class`文件在计算机上解释出来（JVM上运行）。

## Java标识符

- 标识符：是指在程序中，我们自己定义内容。比如类的名字、方法的名字和变量的名字等等，都是标识符。

- 命名规则：`硬性要求`

- 标识符可以包含英文字母26个（区分大小写）、0-9数字、$（美元符号）和`_`（下划线）。

- 标识符不能以数字开头。

- 标识符不能是关键字。

  

- 命名规范：`软性建议`(代码命名规范建议)

- 类名规范：首字母大写，后面每个单词首字母大写（大驼峰式）。

- 变量名规范：首字母小写，后面每个单词首字母大写（小驼峰式）。

- 方法名规范：同变量名。



```java
package Luenci.demo;

/**
 * @author Luenci
 * @version 1.0
 * @date 2019/11/30 18:18
 */

public class DemoCode1 {
    public static void main(String[] args){
        // 字符串常量 和 字符常量（里面有且仅有一个字符）
        System.out.println("我是字符串常量");
        System.out.println('h');

        // 整数常量
        System.out.println(200);
        System.out.println(-500);

        // 浮点数常量
        System.out.println(0.22);
        System.out.println(0.8989);

        // 布尔常量
        System.out.println(true);
        System.out.println(false);

        // 空常量:不能用来打印输出
        // System.out.println(null);
    }
}

```



 ## Java数据类型

Java的数据类型分为两大类：

- 基本数据类型：整数、浮点数、字符、布尔。
- 引用数据类型：类、数组、接口。

### 基本数据类型

- 整数型  `byte` `short` `int` `log`
- 浮点型 `float`  `double`
- 字符型 `char`
- 布尔型 `boolean`



| 数据类型     | 关键字         | 内存占用 | 取值范围                |
| ------------ | -------------- | -------- | ----------------------- |
| 字节型       | byte           | 1个字节  | -128 - 127              |
| 短整型       | short          | 2个字节  | -32768 - 32767          |
| 整型         | int（默认）    | 4个字节  | -2^31 - 2^31-1          |
| 长整型       | long           | 8个字节  | -2^63 - 2^63.1          |
| 单精度浮点数 | float          | 4个字节  | 1.4013E - 45-3.4028E+38 |
| 双精度浮点数 | double（默认） | 8个字节  | 4.9E-324 ~ 1.7977E+308  |
| 字符型       | char           | 2个字节  | 0-65535                 |
| 布尔类型     | honlean        | 1个字节  | true false              |



>注意事项：
>
>- 字符串不是基本类型，而是引用类型。
>- 浮点型可能只是一个近似值，并非精确的值。
>- 数据范围与字节数不一定相关，例如float数据范围比long更加广泛，但是float是4字节，long是8字节。
>- 浮点数当中默认类型是double。如果一定要使用float类型，需要加上一个后缀F。
>- 如果是整数，默认为int类型，如果一定要使用long类型，需要加上一个后缀L。推荐使用大写字母后缀。

【作用域】：从定义变量的行开始，一直到直接所属的大括号结束为止。



## 数据类型转换

- 自动类型转换（隐式）
  - 特点：代码不需要进行特殊处理，自动完成
  - 规则：数据范围从小到大
- 强制类型转换（显示）
  - 特点：代码需要进行特殊的格式处理，不能自动完成
  - 格式：范围小的类型 范围小的变量名 = （范围小的类型） 原本范围大的数据;

> 强制类型转换 （注意）
>
> - 使用时注意精度损失和数据溢出等情况
>
> - byte/short/char这三种类型都可以发生数学运算，例如加法“+”.
> - ***byte/short/char这三种类型在运算的时候，都会被首先提升成为int类型，然后再计算。***
> - boolean类型不能发生数据类型变换



## ASCII码字符表

- 0 对应的ascill码值为  32
- A 对应的ascill码值为 65
- a  对应的ascill码值为 97

> 其余的向后推理即可



## 运算符

| 算数运算符包括 | 解释                          |
| -------------- | ----------------------------- |
| `+`            | 加法运算，字符串连接运算      |
| `-`            | 减法运算                      |
| `*`            | 乘法运算                      |
| `\`            | 除法运算                      |
| `%`            | 取模运算，两个数字相除1取余数 |
| `++`, `--`     | 自增自减运算                  |

```java
package Luenci.demo;

/**
 * @author Luenci
 * @version 1.0
 * @date 2019/12/2 20:45
 */
public class OperatorDemo {
    public static void main(String[] args){
        // 四则运算符
        int a = 10,b = 25;
        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);

        // 用字符串进行连接的时候结果都会变成字符串
        String str = "Luenci";
        System.out.println(str + 404);

        // 单独使用的时候++在前和++在后没什么区别
        // 和变量等在一起使用的时候是++在前的时候【先加后用】
        // 和变量等在一起使用的时候是++在后的时候【先用后加】
        int num=0;
        num++;
        System.out.println(num);

        System.out.println("-------------- 分割线 -----------------");

        int num1 = 20;
        System.out.println(num1++);  // 20
        System.out.println(num1);    // 21

        int num2 = 30;
        System.out.println(++num2); // 31

    }
}

out:
    35
    -15
    250
    0
    Luenci404
    1
    -------------- 分割线 -----------------
    20
    21
    31
```



> 常量不可使用 ++，--
>
> 赋值运算符其中  隐含了一个强制类型转换



## 比较运算符



| 比较运算符类别 | 解释                                                         |
| -------------- | ------------------------------------------------------------ |
| `==`           | 比较两边的数据是否相等，相等结果为True                       |
| `<`            | 比较左边的数据是否小于右边的数据，小于结果为True             |
| `>`            | 比较左边的数据是否大于右边的数据，大于结果为True             |
| `<=`           | 比较左边的数据是否小于或等于右边的数据，小于或等于结果为True |
| `>=`           | 比较左边的数据是否大于或等于右边的数据，大于或等于结果为True |
| `!=`           | 比较两边的数据是否相等，不相等结果为True                     |



## 逻辑运算符

与（并且）`&&`全都是true，才是true；否则就是false

或（或者）`||`至少一个是true，就是true；全都是false， 才是false

非（取反）`！`本来是true，变成false；本来是false，变成true



## 编译器的两点优化

- 对于`byte/short/char`三种类型来说，如果右侧赋值的数值没有超过范围，那么`javac`编译器将会自动隐含地为我们补上一个`（byte）（short）（char）`。
  - 1.如果没有超过左侧的范围，编译器补上强转。
  - 2.如果右侧超过了左侧范围，那么直接编译器报错。

编译器的常量优化

- 在给变量进行赋值的时候，如果右侧的表达式当中全都是常量，没有任何变量，那么编译器javac将会直接将若干个常量表达式计算得到结果。
  - 如:`short result=5+8`；//等号右边全都是常量，没有任何变量参与运算编译之后，得到的`.class`字节码文件当中相当于【直接就是】：`short result=13；`

## 程序流程控制

### 判断语句		

```java
package Luenci.method;
import java.util.Scanner;
/**
 * @author Luenci
 * @version 1.0
 * @date 2019/12/3 17:39
 */
public class ProcessControl {
    public static void main(String[] args){
        // 从键盘处获得成绩值
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入您的成绩");
        String score = sc.nextLine();

        // 判断成绩优秀否
        if ( Integer.parseInt(score) >= 90){
            System.out.println("您的成绩优秀");
        } else if (Integer.parseInt(score) > 80 && Integer.parseInt(score) < 90){
            System.out.println("你的成绩良好");
        } else if (Integer.parseInt(score) > 60 && Integer.parseInt(score) <80){
            System.out.println("您的成绩合格");
        } else {
            System.out.println("您的成绩不合格");
        }

    }

    public static String getType(Object o){
        return o.getClass().toString();

    }
}

```

### 选择结构

>### switch语句使用的注意事项：
>
>​	1.多个case后面的数值不可以重复。
>
>​	2.switch后面小括号当中只能是下列数据类型：
>
>​		基本数据类型：byte/short/char/int
>
>​		引用数据类型：String字符串、enum枚举

```java
package Luenci.method;

import java.util.Date;
import java.text.SimpleDateFormat;


/**
 * @author Luenci
 * @version 1.0
 * @date 2019/12/4 11:30
 */
public class SwitchDemo {
    public static void main(String[] args){
        // 设置日期格式
        // SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // new Date()为获取当前系统时间
        Date date = new Date();
        // 使用SimpleDateFormat格式化日期
        SimpleDateFormat df = new SimpleDateFormat("EEEE");
        String currSun = df.format(date);

        switch (currSun){
            case "星期一":
                System.out.println(currSun + "开始上班");
                break;
            case "星期六":
                System.out.println(currSun + "休息第一天");
                break;
            case "星期五":
                System.out.println(currSun + "放假前夕");
                break;
            default:
                System.out.println(currSun + "上班中");
                break;
        }
    }
}

```

### 循环语句

```java
package Luenci.method;

/**
 * @author Luenci
 * @version 1.0
 * @date 2019/12/4 15:00
 */
public class ForDemo {
    public static void main(String[] args){
        int i,a;
        a = 0;
        for ( i = 1; i <= 100; i++){
            a += i;
        }
        System.out.println(a);
    }
}

```



### whlie循环

```java
package Luenci.method;

import com.sun.jmx.snmp.internal.SnmpSubSystem;

/**
 * @author Luenci
 * @version 1.0
 * @date 2019/12/4 15:10
 */
public class WhileDemo {
    public static void main(String[] args){
        // 初始化语句
        int a = 1;
        while (a < 10){
            System.out.println("打印" + a + "遍");
            a++;
        }
    }
}

```



### do ...while 循环

```java
package Luenci.method;

/**
 * @author Luenci
 * @version 1.0
 * @date 2019/12/4 15:13
 */
public class DowhlieDemo {
    public static void main(String[] args){
        // do ..... while 循环的第一次是	无条件执行
        int i = 1;
        do {
            System.out.println("打印" + i + "遍");
            i++;
        } while (i < 10);

    }
}
```



## 三种循环的区别

- 1.如果条件判断从来没有满足过，那么for循环和while循环将会执行0次，但是do-while循环会执行至少一次。
- 2.for循环的变量在小括号当中定义，只有循环内部才可以使用。while循环和do-while循环初始化语句本来就在外面，所以出来循环之后还可以继续使用。

### break关键字的用法有常见的两种
- 1.可以用在`switch`语句当中，一旦执行，整个`switch`语句立刻结束。

- 2.还可以用在循环语句当中，一旦执行，`整个循环`语句立刻结束。打断循环。

  

> 关于循环的选择，有一个小建议：
> 凡是次数确定的场景多用for循环；否则多用while循环。



### 另一种循环控制语句是continue关键字。
- 一旦执行，立刻跳过当前次循环剩余内容，马上开始下一次循环
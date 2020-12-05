---
title: python解释器的GIL锁
categories:	
- python编程
tags: 
- GIL锁
---

## GlL锁定义

Gll锁：Global Interpreter Lock，又称：全局解释器锁

> 任何Python线程执行前，必须先获得GlL锁，然后，每执行100条字节码，解释器就自动释放GL锁，让别的线程有机会执行。这个GlL全局锁实际上把所有线程的执行代码都给上了锁，所以，多线程在Python中只能交替执行，即使100个线程跑在100核CPU上，也只能用到1个核。

## GlL不是Python特性

GlL是Pythn解释器（Cpython）时引入的概念，在JPython、PyPy中没有GlL。GIL并不是Python的语言缺陷。是解释器层级的锁，跟Python语言特性无关

> 言外之意，就是全局解释器就是为了锁定整个解释器内部的全局资源，每个线程想要运行首先获取GlL，而GlL本身又是一把互斥锁，造成所有线程只能一个一个one-by-one-并发-交替的执行。

## GlL存在的原因

- 早期计算机都是单核设计

- CPython在执行多线程的时候并不是线程安全的，所以为了程序的稳定性，加一把全局解释锁，能够确保任何时候都只有一个Python线程执行

> GlL产生的背景在CPython解释内部运行多个线程的时候，每个线程都需要解释器内部申请相应的全局资源，由于C语言本身比较底层造成CPython在管理所有全局资源的时候并不能应对所有线程同时的资源请求，因此为了防止资源竞争而发生错误，对所有线程申请全局资源增加了限制-全局解释器锁。

<!-- more -->

## GlL锁什么时候释放？

- 在当前线程执行超时后会自动释放
- 在当前线程执行阻塞操作时会自动释放
- 当前执行完成时

 Guido对GIL锁的看法：https://www.artima.com/forums/flat.jsp?forum=106&thread=214235 

## 关于GIL面试题

- 描述Python GL的概意，以及它对python多线程的影响？编写一个多线程抓取网页的程序，并阐明多线程抓取程序是否可比单线程性能有提升，并解释原因。

- Python语言和GlL没有半毛钱关系。仅仅是由于历史原因在Cpython虚拟机（解释器），难以移除GlL。

- GlIL：全局解释器锁。每个线程在执行的过程都需要先获取GlL，保证同一时刻只有一个线程可以执行代码。

- 线程释放GL锁的情况：

  - 在IO操作等可能会引起阻塞的system call之前，可以暂时释放GIL，但在执行完毕后，必须重新获取GlL
  - Python 3.x使用计时器（执行时间达到阔值后，当前线程释放GlL）或Python 2.x，tickets计数达到100

- Python使用多进程是可以利用多核的CPU资源的。

- 多线程爬取比单线程性能有提升，因为遇到IO阻塞会自动释放GIL锁

> 严重问题：既然CPython解释存在GL是否意味每个线程在全局变量就不用加Lock互斥锁了呢？这是一个严重错误的想法，为什么用户操作全局数据还需要加Lock，因为GlL的释放时机我们无法控制-操作非常可能并没有完成，而不像Lock那样我们用完才释放（操作完整）

举例

> 线程1取出全局变量g_number==0一直加到20000，但是还没有来得及将20000写入g_number中，就超时了自动释放GIL 而线程2取出g_number==19999加到39999由于超时自动释放GlL此时线程2获取到GIL继续着未完成的事业将20000写入g_number….这就是之前的多线程案例没有加互斥锁的情况晨终结果是140w东右的盾因



## GIL锁解决方案

### 解决方案一（不推荐）：
- 我们换一个解释器执行程序就行了（jython：用JAVA写的python解释器）
### 解决方案二（推荐）
- 使用多进程替换多线程multiprocessing是一个多进程模块，开多个进程，每个进程都带一个GlL，就相当于多线程来用了。
### 解决方案三（推荐）
- 使用python语言的特性：胶水.
  我们让子线程部分用c来写，就ok。（实质上也相当于那部分代码绕过了cython解释器）第一步，编写C语言文件：
  测试代码，C语言写的死循环，文件名为test2.c：

```c
void Loop(){
		while(1)
		{
			;
		}
}
```

然后我们把将其编译成.so文件（share object）需要执行如下命令(Linux下)：

```
gcc test.c -shared -o libtets.so
```

>-shared：将其编译成so文件
>
>-o：表示output，用来输出的文件名
>
>库文件是以lib开头
>
>编译过后，在当前的文件夹下就会生成一个.so文件

第二步，编写python文件04-04_GIL锁解决方案.py：

```python
import ctypes import threading
#加载动态库
my_lib=ctypes，cdll.LoadLibrary（"./libtest2.so"）
#创建子线程
t=threading.Thread（target=my_lib.Loop）
t.start（）
#主线程
while True：pass
```

第三步，执行pvthon文件就可避开Cpython解释器的GIL锁



### 总结
- GIL锁称为：“全局解释器锁“，是CPytrton解释器中的锁机制，也是历史遗留问题
- 要提升多线程执行效率，解决方案：
  - 更换解释器
  - 改为进程替换多线程
  - 子线程使用C语言实现（绕过GL锁）
- 必须要知道的是：
    - CPU密集型不太适合多线程
    - I/O密集型适合多线程（Gil锁会释放）
---
title: Python 中的上下文管理器
categories: 
- python编程
tags: 
- 上下文管理器
---

- `with` 这个关键字，对于每一学习Python的人，都不会陌生。

操作文本对象的时候，我们用 `with open` ，这就是一个上下文管理的例子。

```python
with open('test.txt') as f:
    print f.readlines()
```

## 上下文管理器概念

**基本语法**

```python
with EXPR as VAR:
    BLOCK
```

几个概念

```python
1. 上下文表达式：with open('test.txt') as f:
2. 上下文管理器：open('test.txt')	
3. f不是上下文管理器，应该是资源对象。
```

<!--more-->

## 实现下文管理器

要自己实现这样一个上下文管理，要先知道上下文管理协议。

- 简单点说，就是在一个类里，实现了`__enter__`和`__exit__`的方法，这个类的实例就是一个上下文管理器。

例如这个示例：

```python
class Resource():
    def __enter__(self):
        print('===connect to resource===')
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print('===close resource connection===')
        
    def operate(self):
        print('===in operation===')
        
with Resource() as res:
    res.operate()
```

我们执行一下，通过日志的打印顺序。可以知道其执行过程。

```python
===connect to resource===
===in operation===
===close resource connection===
```

- 从这个示例可以很明显的看出，在编写代码时，可以将资源的连接或者获取放在`__enter__`中，而将资源的关闭写在`__exit__` 中。

## 上下文管理器作用

- 1. 可以以一种更加优雅的方式，操作（创建/获取/释放）资源，如文件操作、数据库连接；
- 2. 可以以一种更加优雅的方式，处理异常；

第一种，我们上面已经以资源的连接为例介绍了。

而第二种，会被大多数人所忽略。这里会重点讲一下。

大家都知道，处理异常，通常都是使用 `try...execept..` 来捕获处理的。这样做一个不好的地方是，在代码的主逻辑里，会有大量的异常处理代理，这会很大的影响我们的可读性。

好一点的做法呢，可以使用 `with` 将异常的处理隐藏起来。

仍然是以上面的代码为例，我们将`I/O` 这个一定会抛出异常的代码写在 `operate` 里

```python
class Resource():
    def __enter__(self):
        print('===connect to resource===')
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('===close resource connection===')
        return True

    def operate(self):
        I/O

with Resource() as res:
    res.operate()
```

运行一下，惊奇地发现，居然不会报错。

这就是上下文管理协议的一个强大之处，异常可以在`__exit__` 进行捕获并由你自己决定如何处理，是抛出呢还是在这里就解决了。在`__exit__` 里返回 `True`（没有return 就默认为 return False），就相当于告诉 Python解释器，这个异常我们已经捕获了，不需要再往外抛了。

在 写`__exit__` 函数时，需要注意的事，它必须要有这三个参数：

- `exc_type`：异常类型
- `exc_val`：异常值
- `exc_tb`：异常的错误栈信息

当主逻辑代码没有报异常时，这三个参数将都为None。

## 常见的异常

- 异常即是一个事件，该事件会在程序执行过程中发生，影响了程序的正常执行。 一般情况下，在Python无法正常处理程序时就会发生一个异常。 异常是Python对象，表示一个错误。 当Python脚本发生异常时我们需要捕获处理它，否则程序会终止执行。 python的标准异常可以在[官网文档](https://docs.python.org/3/library/exceptions.html?highlight=exception)中查看,常用的如下:

| 异常名称                    | 描述                                               |
| --------------------------- | -------------------------------------------------- |
| `SystemExit`                | 解释器请求退出                                     |
| `KeyboardInterrupt`         | 用户中断执行(通常是输入^C)                         |
| `Exception`                 | 常规错误的基类                                     |
| `StopIteration`             | 迭代器没有更多的值                                 |
| `GeneratorExit`             | 生成器(generator)发生异常来通知退出                |
| `StandardError`             | 所有的内建标准异常的基类                           |
| `ArithmeticError`           | 所有数值计算错误的基类                             |
| `FloatingPointError`        | 浮点计算错误                                       |
| `OverflowError`             | 数值运算超出最大限制                               |
| `ZeroDivisionError`         | 除(或取模)零 (所有数据类型)                        |
| `AssertionError`            | 断言语句失败                                       |
| `AttributeError`            | 对象没有这个属性                                   |
| `EOFError`                  | 没有内建输入,到达EOF 标记                          |
| `EnvironmentError`          | 操作系统错误的基类                                 |
| `IOError`                   | 输入/输出操作失败                                  |
| `OSError`                   | 操作系统错误                                       |
| `WindowsError`              | 系统调用失败                                       |
| `ImportError`               | 导入模块/对象失败                                  |
| `LookupError`               | 无效数据查询的基类                                 |
| `IndexError`                | 序列中没有此索引(index)                            |
| `KeyError`                  | 映射中没有这个键                                   |
| `MemoryError`               | 内存溢出错误(对于Python 解释器不是致命的)          |
| `NameError`                 | 未声明/初始化对象 (没有属性)                       |
| `UnboundLocalError`         | 访问未初始化的本地变量                             |
| `ReferenceError`            | 弱引用(Weak reference)试图访问已经垃圾回收了的对象 |
| `RuntimeError`              | 一般的运行时错误                                   |
| `NotImplementedError`       | 尚未实现的方法                                     |
| `SyntaxError`               | Python 语法错误                                    |
| `IndentationError`          | 缩进错误                                           |
| `TabError`                  | Tab 和空格混用                                     |
| `SystemError`               | 一般的解释器系统错误                               |
| `TypeError`                 | 对类型无效的操作                                   |
| `ValueError`                | 传入无效的参数                                     |
| `UnicodeError`              | Unicode 相关的错误                                 |
| `UnicodeDecodeError`        | Unicode 解码时的错误                               |
| `UnicodeEncodeError`        | Unicode 编码时错误                                 |
| `UnicodeTranslateError`     | Unicode 转换时错误                                 |
| `Warning`                   | 警告的基类                                         |
| `DeprecationWarning`        | 关于被弃用警告                                     |
| `FutureWarning`             | 关于构造将来语义会有改变的警告                     |
| `OverflowWarning`           | 旧的关于自动提升为长整型(long)的警告               |
| `PendingDeprecationWarning` | 关于特性将会被废弃的警告                           |
| `RuntimeWarning`            | 可疑的运行时行为(runtime behavior)的警告           |
| `SyntaxWarning`             | 可疑的语法的警告                                   |
| `UserWarning`               | 用户代码生成的警告                                 |


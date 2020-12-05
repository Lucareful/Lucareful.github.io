---
title: 模块、迭代器，生成器和装饰器
categories: 
- python编程
tags: 
- 装饰器        
---

# module模块和包的介绍

## 模块的介绍

- `python`给我们提供了十分简单的方法去创建一个模块，我们只需要写一个`python`文件即可，也就是说写一个`.py`为后缀的文件。

## 包的介绍

- 简单来说，包就是多个模块的集合。当项目较大，模块较多时，我们就可以把模块放在包中，便于管理。
- 我们在包中一般带有`__init__.py`文件，随你建包的时候就默认生成。

# 迭代器和生成器

### 迭代器

- 迭代器只不过是一个实现迭代器协议的容器对象。它基于两个方法：
  - `next`  ：返回容器的下一个项目
    - 在`3.x`的版本中为`__next__`或者`next(可迭代对象)`
  - `__iter__` : 返回迭代器本身
- 迭代器可以通过使用一个`iter`内建函数和一个序列来创建，示例如下。

```python
In [21]: a = ['a','b', 'c']
In [22]: a = iter(a)

In [23]: next(a)
Out[23]: 'a'

In [24]: a.__next__()
Out[24]: 'b'
```



### 生成器

- 生成器
- 从`Python2.2`起，生成器提供了一种出色的方法，使得需要返回一系列元素的函数所需的代码更加简单、高效。基于yield指令，可以暂停一个函数并返回中间结果。该函数将保存执行环境并且可以在必要时恢复。

```python
In [25]: def fibonanci():
    ...:     a, b = 0, 1
    ...:     while True:
    ...:         yield b
    ...:         a, b = b, a + b
    ...:

In [26]: fib = fibonanci()

In [28]: fib.__next__()
Out[28]: 1

In [29]: fib.__next__()
Out[29]: 1

In [30]: fib.__next__()
Out[30]: 2

In [31]: fib.__next__()
```

- `yield`可以理解为`return`,每次调用`next()`就`yield`值,下次`next()`从上次的yield处开始运行
- 该函数将返回一个特殊的迭代器，也就是generator对象，它知道如何保存执行环境。对它的调用是不确定的，每次都将产生序列中的下一个元素。这种语法很简洁，算法的不确定特性并没有影响代码的可读性。不必提供使函数可停止的方法。实际上，这看上去像是用伪代码设计的序列一样。

<!-- more -->

# 高阶函数的定义

- 函数的接收参数是一个函数名
- 函数的返回值是一个函数名

```python
def father(name):
    print("I am father %s" %name)
    def son():
        print("i am son")
    # print(locals())
    return son

father("luenci")
father("luenci")()

out:
I am father luenci
I am father luenci
i am son
```

# 简单的装饰器

- `@`语法糖:相当于执行下面`timmer(test)()`

```
import time

def timmer(func):
    def wrapper():
        start_time = time.time()
        func()
        stop_time = time.time()
        print("函数运行时间为: %s"%(stop_time - start_time))
    return wrapper

@timmer
# timmer(test)() @ 语法糖
def test():
    time.sleep(3)
    print("test函数运行完毕")

test()
# timmer(test)()
```



# 带参数的装饰器

```python
import time


def timmer(func):
    def wrapper(*args, **kwargs):
        print(*args)
        # print(**kwargs)
        start_time = time.time()
        res = func(*args, **kwargs)
        stop_time = time.time()
        print("程序运行时间为：%s" % (stop_time - start_time))
        return res

    return wrapper


@timmer
def test(name, age, gender):
    time.sleep(2)
    print("我是%s,今年%s,性别%s" % (name, age, gender))
    return "sucess"


res = test("lusheng", 18, gender="男")
# print(res)
```

# 装饰器应用案例

## 登录验证

```python
user_list = [
    {"username": "luenci", "pswd": "123"},
    {"username": "lynn", "pswd": "456"},
    {"username": "lu", "pswd": "789"},
]
current_dic = {"username": None, "login": False}


def verify(func):
    def wrapper(*args, **kwargs):
        if current_dic['username'] and current_dic['login']:
            res = func(*args, **kwargs)
            return res
        username = input("请输入用户名:").strip()
        pswd = input("请输入密码:").strip()
        for user in user_list:
            if user['username'] == username and user['pswd'] == pswd:
                current_dic['username'] = username
                current_dic['login'] = True
                res = func(*args, **kwargs)
                return res
        else:
            print('用户名或密码错误')

    return wrapper


@verify
def shop():
    print('我的购物车')


@verify
def user():
    print('我的信息')


@verify
def things():
    print('我的商品')

print('登录前的状态:%s'%(current_dic))
user()
print('登录后的状态:%s'%(current_dic))
shop()
things()
```

## 日志记录

```python
import logging
import traceback

def get_logger():
    logger = logging.getLogger("Test")
    # 设定日志级别，只有大于或等于这个级别才输出
    logger.setLevel(level=logging.DEBUG)
    # 当前路径下创建test_log文件记录错误日志
    fh = logging.FileHandler("test_log", encoding='utf-8')
    ch = logging.StreamHandler()

    fm = logging.Formatter(fmt='%(asctime)s %(name)s %(pathname)s[%(lineno)d] %(message)s', datefmt='%Y/%m/%d %H:%M:%S')

    fh.setFormatter(fm)
    ch.setFormatter(fm)

    logger.addHandler(fh)
    logger.addHandler(ch)

    return logger

def decoratore(func):
    def log(*args,**kwargs):
        try:
            print("当前运行方法", func.__name__)
            return func(*args,**kwargs)
        except Exception as e:
            get_logger().error(f"{func.__name__} is error,here are details:{traceback.format_exc()}")
    return log

@decoratore
def test():
    print(1/0)

test()
```

​	
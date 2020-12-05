---
title: Python面向对象
categories: 
- python编程
tags: 
- 类的知识        
---

## 类的定义

- 把一类事物的相同的特征和动作整合到一起就是类，类是一个抽象的概念

## 对象的定义

- 基于类而创建一个具体的事物，类的实例化

## 接口继承

- 继承的第二种含义非常重要。它又叫“接口继承”。
- 接口继承实质上是要求“做出一个良好的抽象，这个抽象规定了一个兼容接口，使得外部调用者无需关心具体细节，可一视同仁的处理实现了特定接口的所有对象”——这在程序设计上，叫做归一化。
- 归一化使得高层的外部使用者可以不加区分的处理所有接口兼容的对象集合——就好象`linux`的泛文件概念一样，所有东西都可以当文件处理，不必关心它是内存、磁盘、网络还是屏幕（当然，对底层设计者，当然也可以区分出“字符设备”和“块设备”，然后做出针对性的设计：细致到什么程度，视需求而定）。

```python
# 导入抽象基类模块
import abc

# 定义接口（基类）
class File(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def read(self):
        pass
    @abc.abstractmethod
    def write(self):
        pass

class disk(File):
    def read(self):
        print("disk read")

    def write(self):
        print("disk wirte")

ds = disk()
ds.read()

```

## 子类中调用父类的方法

```python
class Grandfather(object):
    def __init__(self, name, age):
        self.age = age
        self.name = name
    def grandfather(self):
        print("grandfather method")

class Father(Grandfather):
    def __init__(self, name, age):
        super().__init__(name,age)

    def father_method(self):
        print("father method")


class Son(Father):
    def __init__(self, name, age,sex):
        # 调用父类的构造方法
        super().__init__(name,age)
        self.sex = sex
    # 子类中调用父类方法
    def son_method(self):
        Father.father_method(self)
    def son_method1(self):
        super().grandfather()

son1 = Son('xiaoming',18, 'male')
son1.son_method1()
```

<!-- more -->

## 组合

- 1、组合指的是，在一个类中以另外一个类的对象作为数据属性，称为类的组合。
- 2、作用是可以将两个本来不相关的类联系起来。一般是两个类之间有显著的不同，很多时候还要附属关系(有相同的属性也有不同的属性)。比如人和头，手机和电池等等。
- 3、无纵向关系时用组合，有纵向关系时用继承。
- 4、组合就是一个类中使用到另一个类，从而把几个类拼到一起。组合的功能也是为了减少重复代码

## 多态

- 由不同的类实例化得到的对象，调用同一个方法，执行的逻辑不同
- 多态的概念指出了对象如何通过他们共同的属性和动作来操作及访问，而不需考虑他们具体类。
-  多态表明了动态（又名，运行时）绑定的存在，允计重载及运行时类型确定和验证。

```python
class People(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def generation(self):
        if self.age < 18:
            print("[%s]属于未成年人" % self.name)
        elif 18 < self.age < 30:
            print("[%s]属于青年人" % self.name)
        else:
            print("[%s]属于中老年人" % self.name)


class minor(People):
    pass


class young(People):
    pass


class old(People):
    pass

def func(obj):
    obj.generation()

w1 = young('luenci',20)
w2 = minor('xiaoming', 16)
w3 = old('jack', 50)

func(w1)
func(w3)
func(w3)

out:
[luenci]属于青年人
[jack]属于中老年人
[jack]属于中老年人
```

## 反射

- `getattr(object, name)`
  - 得到属性的值
- `hasattr(object, name)`
  - 说明：判断对象object是否包含名为name的特性（`hasattr`是通过调用`getattr(ojbect, name)`是否抛出异常来实现的
- `setattr(object, name, value)`
  - 这是相对应的`getattr()`。参数是一个对象,一个字符串和一个任意值。字符串可能会列出一个现有的属性或一个新的属性。这个函数将值赋给属性的。该对象允许它提供。例如,`setattr(x,“foobar”,123)`相当于`x.foobar= 123`
- `delattr(object, name)`
  - 与`setattr()`相关的一组函数。参数是由一个对象(记住python中一切皆是对象)和一个字符串组成的。`string`参数必须是对象属性名之一。该函数删除该`obj`的一个由`string`指定的属性。`delattr(x, 'foobar')=del x.foobar`

> 注：`getattr`,`hasattr`,`setattr`,`delattr`对模块的修改都在内存中进行，并不会影响文件中真实内容。

```
class Demo(object):
    def __init__(self,name):
        self.name = name
    def method(self):
        print("i am method")

d = Demo('luenci')
# 如果d 对象中有属性name则打印self.name的值，否则打印not find
print(getattr(d,'name','not find'))
print(getattr(d,'age','not find'))

#如果有方法method，否则打印其地址，否则打印not find
print(getattr(d, 'method', 'not find'))
print(getattr(d, 'methods', 'not find'))

#如果有方法method，运行函数并打印None否则打印not find
print(getattr(d, 'method', 'not find')())

# 说明：判断对象object是否包含名为name的特性（hasattr是通过调用getattr(ojbect, name)是否抛出异常来实现的）
print(hasattr(d, 'name'))

# 增加和修改参数
# d.age =  18
setattr(d,'age', 18)
setattr(d,'name','jack')
print(d.__dict__)

# 删除 属性 不能删除属性对应的值， 但是可以使用setattr来修改
delattr(d,'age')
print(d.__dict__)


out:
luenci
not find
<bound method Demo.method of <__main__.Demo object at 0x000001710E9359B0>>
not find
i am method
None
True
{'name': 'jack', 'age': 18}
{'name': 'jack'}
```

### 动态导入模块

问题：

- 我们要导入一个模块,可以使用`import`.现在有这样的需求,我动态输入一个模块名，可以随时访问到导入模块中的方法或者变量，怎么做呢？

```python
't.py'
def test():
    print("i am test")
```

```python
model_name = input("请输入您要导入的模块名称：")
imp = __import__(model_name)
# 判断是否有test函数，有就执行test函数内容
if getattr(imp,'test', 'not find'):
    imp.test()
else:
    print(imp)
    imp.test()

out:
    请输入您要导入的模块名称：t
    i am test
    <module 't' from 'E:\\python进阶练习\\面向对象\\t.py'>
    i am test
```

## 包装

- 对一个已存在的对象进行包装，可以是对一个已存在的对象，增加，删除，或者修改功能。可以包装任何类型（type）作为一个类（class）的核心成员（如`list`,`dict`等），以使新对象的行为模仿你想要的数据类型中已存在的行为，并且去掉你不希望存在的行为。

```python
class List(list):
    # 重写list的append方法,让其只能添加字符类型的数据
    def append(self, p_object):
        if type(p_object) is str:
            # self.append(self, p_object)
            super().append(p_object)
        else:
            print("只有字符类型才可以允许添加")

a = List('hello Luenci')
a.append(123)
a.append("haha")
print(a)


out:
只有字符类型才可以允许添加
['h', 'e', 'l', 'l', 'o', ' ', 'L', 'u', 'e', 'n', 'c', 'i', 'haha']
```

## 授权

```python
import time

# 组合的方式完成授权
class FileHandle(object):
    def __init__(self, filename, mode='r', encoding='utf-8'):
        self.file = open(filename,mode=mode,encoding=encoding)
        self.mode = mode
        self.encoding = encoding
    # 个性化定制write方法，比如不允许写，去除敏感词汇，给内容加上时间戳
    def write(self,content):
        t = time.strftime('%Y-%m-%d %X')
        self.file.write('%s %s'%(t,content))

    def __getattr__(self, item):
        return getattr(self.file, item)

f = FileHandle('a.txt', 'w')
f.write('Hello\n')
f.write('luenci\n')


a.txt---->
2020-05-29 11:23:38 Hello
2020-05-29 11:23:38 luenci
```

## 函数补充

```python
class Foo(object):
    pass


class Too(object):
    pass


class Bar(Foo):
    pass


f1 = Foo()
# 判断实例化对象是不是属于此类 结果是boolean
print(isinstance(f1, Too))
print(isinstance(f1, Foo))

# 判断Bar类是不是Foo的子类 结果是boolean
print(issubclass(Bar, Foo))

out:
False
True
True
```


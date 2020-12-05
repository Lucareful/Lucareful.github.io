---
title: Python的模块和类 
categories: 
- python编程
tags: 
- 类和模块
---

# import导入模块路径问题

- 存在的问题：当我们把模块文件放到工程文件夹的外部的文件，发现无法正常引入模块
- 原因：外部的文件夹的路径，没有放到环境变量中。

- 查看环境变量

  - 1.导入`sys`模块
  - 2.`sys.path `查看环境变量返回值是列表

- 把自己写的模块的路径加入到环境变量中

```python
    # 将模块路径追加到末尾 
    sys.path.append(r"模块的路径")
    # 将模块路径追加到开头
    sys.path.insert(0,r"模块的路径")
```



```python
# import module
# # module -- 模块名
# # name 模块 modele 中的变量
# print(module.name)
import sys


# 查看python解释器搜索的环境变量
# 将模块路径追加到末尾
# sys.path.append(r"C:\Users\Luenci\Desktop")
# 将模块路径追加到开头有

sys.path.insert(0, r"C:\Users\Luenci\Desktop")
for i in sys.path:
    print(i)
    
import app

print(app.name)
```



# import导入模块

- `import`会防止重复导入
  - 在同一个程序中多次`import`同一个模块，只会执行一次
- 重新导入模块
>为什么需要重新导入模块?
>
>模块被导入后，import module不能重新导入模块，重新导入需用reload重新加载模块代码创建模块对象

准备一个模块 reload_test 并定义一个函数 test 代码如下：

```
def demo():
    print("---------- 111 -----------")
```



```python
# 在 ipython 的交互模式下

In [5]: import reload_test

In [6]: reload_test.demo()
---------- 111 -----------

In [7]: reload_test.demo()
---------- 111 -----------


# 重新加载之后，改变的内容就可以显示

In [14]: from imp import reload

In [15]: reload(reload_test)
Out[15]: <module 'reload_test' from 'D:\\pythonStudy\\import笔记\\reload_test.py'>

In [16]: reload_test.demo()
---------- 222 -----------

```

<!-- more 	-->

# `from XX import XX`的私有化问题

```python
# modele.py内容

name = "Luenci"
# 类中定义私有属性
# self._name = XXX

# 私有化处理
# 如果模块中的变量不希望以 from .. import .. 导入
_age = 12

```



```python
# import module
#
# print(module.name)
# 私有化有效
from module import *

# 私有化无效
from module import _age


print(_age)
```



# import 和from..…import的区别

- import XXX
  - 此种方式是直接引用
- from XXX import xxx
  - 此种方式是把XXX的内容复制一份到程序中，若修改不应用到原来的模块



![image-20191118122613064](https://i.ibb.co/XsN1vkh/image-20191118122613064.png)



# 可变参数的拆包

```python
def func1(*args, **kwargs):
    print("---- func1 ----")
    print("args:", args)
    print("kwargs:", kwargs)


def func2(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)

    # 调用func1
    # 此处没有进行拆包，导致参数传递不过去不符合要求
    # func1(args, kwargs)

    # 此处进行了拆包，阐述传递正确
    func1(*args, **kwargs)


if __name__ == '__main__':
    func2(10, 20, 30, a=10, b=20)


out:
	args: (10, 20, 30)
    kwargs: {'a': 10, 'b': 20}
    ---- func1 ----
    args: (10, 20, 30)
    kwargs: {'a': 10, 'b': 20}
```

# 新式类的属性和一些概念

```python
class People(object):
    """
    我是一个新式类
    """
    def __init__(self,name,sex,eat):
        self.name = name
        self.sex = sex
        self.eat = eat
        self.__date = []

    def __test(self):
        print("我是个私有方法")

    def sleep(self):
        print("%s正在睡觉"%self.name)


p1 = People('luenci','man','rice')
print(People.__doc__)
print(People.__bases__)
print(People.__mro__)

# 打印类的数据属性字典
print(People.__dict__)
# {'__module__': '__main__', '__doc__': '\n    我是一个新式类\n    ',
# '__init__': <function People.__init__ at 0x0000017408AC1D90>,
# '_People__test': <function People.__test at 0x0000017408AC1A60>,
# 'sleep': <function People.sleep at 0x0000017408AC1E18>,
# '__dict__': <attribute '__dict__' of 'People' objects>,
# '__weakref__': <attribute '__weakref__' of 'People' objects>}

# 打印对象的数据属性字典
print(p1.__dict__)
# {'name': 'luenci', 'sex': 'man', 'eat': 'rice', '_People__date': []}

print(p1.__dir__())
'''['name', 'sex', 'eat', '_People__date', '__module__', '__doc__', '__init__', 
 '_People__test', '__dict__', '__weakref__', '__repr__', '__hash__', '__str__', 
 '__getattribute__', '__setattr__', '__delattr__', '__lt__', '__le__', '__eq__', 
 '__ne__', '__gt__', '__ge__', '__new__', '__reduce_ex__', 
 '__reduce__', '__subclasshook__', '__init_subclass__', '__format__', '__sizeof__', 
 '__dir__', '__class__']'''


# 私有方法的访问
p1._People__test()
# 私有变量的访问
print(p1._People__date)
p1.sleep()
```

# 类属性的增加和修改

```python
class Dog(object):
    """
    我是一个Dog类
    """
    master = "luenci"
    def __init__(self,name):
        self.name = name
    def action(self):
        print("汪汪汪.")

dog = Dog('小白')
# 增加类的属性
Dog.sex = '公'
# 实例可以访问到
print(dog.sex)

# 增加类方法
def run(self,name):
    print("%s在奔跑"%self.name)

Dog.run = run
# 实例中可以访问
dog.run('小白')

# 增加私有属性
Dog.__age = 2
print(Dog.__dict__)
print(Dog.__age)

out
公
小白在奔跑
{'__module__': '__main__', '__doc__': '\n    我是一个Dog类\n    ', 'master': 'luenci', '__init__': <function Dog.__init__ at 0x000001E16328D048>, 'action': <function Dog.action at 0x000001E16328D0D0>, '__dict__': <attribute '__dict__' of 'Dog' objects>, '__weakref__': <attribute '__weakref__' of 'Dog' objects>, 'sex': '公', 'run': <function run at 0x000001E163271F28>, '__age': 2}
2
```



# 单继承的`super`

- `super（）`使用的时候，传递参数的时候，`self`不用传递
- `super（）`调用顺序，按照`__mro__`顺序来完成`Grandson.mro`是一个元组当在类中使用`super`在`__mro__`列表中找到当前类的下一个元素，调用该元素的方法。

```python
class Parent(object):

    def __init__(self, name):
        self.name = name
        print('parent的init结束被调用')


class Son1(Parent):

    def __init__(self, name, age):

        self.age = age
        super().__init__(name)
        print('Son1的init结束被调用')


class Grandson(Son1):
    def __init__(self, name, age, gender):
        self.gender = "男"
        # 单继承不能提供全部参数
        super().__init__(name, age)
        print('Grandson的init结束被调用')


gs=Grandson('grandson', 12, "男")
print(Grandson.__mro__)
print('姓名:', gs.name)
print('年龄:', gs.age)
print('性别:', gs.gender)

out: 
    parent的init结束被调用
    Son1的init结束被调用
    Grandson的init结束被调用
    (<class '__main__.Grandson'>, <class '__main__.Son1'>, <class '__main__.Parent'>, <class 'object'>)
    姓名: grandson
    年龄: 12
    性别: 男
```



# 多继承和MRO顺序

```python
# 定义父类
class Parent(object):
    def __init__(self, name):
        self.name = name
        print('parent的init结束被调用')


# 定义子类--》继承父类的 name属性
class Son1(Parent):
    def __init__(self, name, age):
        # 定义age属性
        self.age = age
        Parent.__init__(self, name)
        print('Son1的init结束被调用')


# 定义子类--》继承父类的 name属性
class Son2(Parent):
    def __init__(self, name, gender):
        # 定义 gender 属性
        self.gender = gender
        Parent.__init__(self, name)
        print('Son2的init结束被调用')


class Grandson(Son1, Son2):
    def __init__(self, name, age, gender):

        # 调用父类的初始化方法
        Son1.__init__(self, name, age)
        Son2.__init__(self, name, gender)
        print('Grandson的init结束被调用')


gs = Grandson('grandson', 12, "男")
print(Grandson.__mro__)
print('姓名:', gs.name)
print('年龄:', gs.age)
print('性别:', gs.gender)


out:
	parent的init结束被调用
    Son1的init结束被调用
    parent的init结束被调用
    Son2的init结束被调用
    Grandson的init结束被调用
    (<class '__main__.Grandson'>, <class '__main__.Son1'>, <class '__main__.Son2'>, <class '__main__.Parent'>, <class 'object'>)
    姓名: grandson
    年龄: 12
    性别: 男
```



## 使用`super()`调用父类

### MRO顺序

> 通过上述代码，我们发现由于多继承情况，parent类被的属性被构造了两次，如果在更加复杂的结构下可能更加严重。为了解决这个问题，Python官方采用了一个算法将复杂结构上所有的类全部都映射到一个线性顺序上，而搜索的顺序就是所谓的「方法解析顺序」（Method Resolution Order，或MRO),根据这个顺序就能够保证所有的类都会被构造一次。



### MRO查看

- `类名.mro()`

- `类名.__mro__`

```python
# 定义父类
class Parent(object):
    def __init__(self, name, *args, **kwargs):
        self.name = name
        print('parent的init结束被调用')


# 定义子类--》继承父类的 name属性
class Son1(Parent):
    def __init__(self, name, age, *args, **kwargs):
        # 定义age属性
        self.age = age
        super().__init__(name, *args, **kwargs)
        print('Son1的init结束被调用')


# 定义子类--》继承父类的 name属性
class Son2(Parent):
    def __init__(self, name, gender, *args, **kwargs):
        # 定义 gender 属性
        self.gender = gender
        super().__init__(name, *args, **kwargs)
        print('Son2的init结束被调用')


class Grandson(Son1, Son2):
    def __init__(self, name, age, gender):

        # 调用父类的初始化方法
        super().__init__(name, age, gender)
        # Son1.__init__(self, name, age)
        # Son2.__init__(self, name, gender)
        print('Grandson的init结束被调用')


gs = Grandson('grandson', 12, "男")
print(Grandson.__mro__)

out:
	parent的init结束被调用
    Son2的init结束被调用
    Son1的init结束被调用
    Grandson的init结束被调用
    (<class '__main__.Grandson'>, <class '__main__.Son1'>, <class '__main__.Son2'>, <class '__main__.Parent'>, <class 'object'>)
```

### 注意

>当在类中使用super（）在 mro列表中找到当前类的下一个元素，调用该元素的方法
>
>多继承中，不建议使用类名直接调用父类的方法

# 类的`@classmethod`、`@staticmethod`装饰方法 

- `@classmethod` 用来修饰方法。使用在实例化前与类进行交互，但不和其实例进行交互的函数方法上。
- `@staticmethod` 用来修饰类的静态方法。使用在有些与类相关函数，但不使用该类或该类的实例。如更改环境变量、修改其他类的属性等。

两者最明显的区别，`classmethod` 必须使用类的对象作为第一个参数，而`staticmethod`则可以不传递任何参数

1、`@classmethod` 类方法

类方法，我们不用通过实例化类就能访问的方法。而且@classmethod 装饰的方法不能使用实例属性，只能是类属性。它主要使用在和类进行交互，但不和其实例进行交互的函数方法上。

下面，我们要写一个只在类中运行而不在实例中运行的方法。

简单示例，读取私有化类属性数据，如下：

```python
class Circle(object):
   __pi = 3.14

   def __init__(self, r):
       self.r = r

   @classmethod
   def pi(cls):
       return cls.__pi

   def area(self):
       """
圆的面积
       """
       return self.r ** 2 * self.__pi

print(Circle.pi())  # 没有实例化 能直接访问pi() 方法
circle1 = Circle(2)
print(circle1.pi()) # 也可以通过实例访问pi()方法
```

> `Circle`类下的`pi()`方法被 `@classmethod` 装饰后，我们能通过`Circle.pi()` 直接运行方法，不用实例化类。

示例：重构构造`__init__() `方法应用, 格式化创建时间实例

```python
class Date(object):
   day = 0
   month = 0
   year = 0

   def __init__(self, year=0, month=0, day=0):
       self.day = day
       self.month = month
       self.year = year

   @classmethod
   def from_string(cls, date_as_string):
       year, month, day = date_as_string.split('-')
       date = cls(year, month, day)
       return date

date1 = Date.from_string('2017-10-17')  #  直接使用固定格式的字符串就能创建Date的实例
print(date1.year, date1.month, date1.day)
```

> from_string 返回的是Date类的实例，所以我们可以通过from_string 实例化类。
> **注意：**`from_string(cls, date_as_string)`中`cls`表示的是类，它和`self`类实例有一定的差别。类方法中都是使用`cls`，实例方法中使用`self`。

2、`@staticmethod `静态方法

- `@staticmethod` 和`@classmethod`非常的相似，但是`@staticmethod `不强制要求传递参数（它做的事与类方法或实例方法一样）。

- `@staticmethod`使用在有些和类相关函数，但不使用该类或者该类的实例。如更改环境变量、修改其他类的属性等。

一句话`@staticmethod` 修饰的方法是放在类外的函数，我们为了方便将他移动到了类里面，它对类的运行无影响。

示例：

```python
class Date(object):
   day = 0
   month = 0
   year = 0

   def __init__(self, year=0, month=0, day=0):
       self.day = day
       self.month = month
       self.year = year

   @classmethod
   def from_string(cls, date_as_string):
       year, month, day = date_as_string.split('-')
       date = cls(year, month, day)
       return date

   @staticmethod
   def is_date_valid(date_as_string):
       """
      用来校验日期的格式是否正确
       """
       year, month, day = date_as_string.split('-')
       return int(year) <= 3999 and int(month) <= 12 and int(day) <= 31

date1 = Date.from_string('2012-05-10')
print(date1.year, date1.month, date1.day)
is_date = Date.is_date_valid('2012-09-18') # 格式正确 返回True
```

`is_date_valid(date_as_string)` 只有一个参数，它的运行不会影响类的属性，

> **注意：**`@staticmethod`修饰方法 `is_date_valid(date_as_string)`中无实例化参数`self`或者`cls`；而`@classmethod`修饰的方法中有`from_string(cls, date_as_string) `类参数`cls`。

# @property装饰方法

- 定义时，在实例方法的基础上添加@property 装饰器；

  - 并且仅有一个self参数

- 调用时，无需括号

  > 方法：`foo_obj.func()`
  > property属性：`foo_obj.prop`

```python
class Foo(object):

    # 初始化方法
    def __init__(self, num):
        self.num = num

    # 获取值得方法
    @property
    def prop(self):
        return self.num


foo = Foo(100)
# print(foo.prop())
# @property 像使用属性一样获取值
print(foo.prop)

out:
	100
```

## property的其它功能

```python
class Goods(object):
    def __init__(self):
        # 初始化原价
        self.org_price = 1000
        # 初始化折扣
        self.discount = 0.7

    # 获取价格的方法
    @property
    def price(self):
        return self.org_price * self.discount

    # 设置价格的方法
    @price.setter
    def price(self, val):
        if val > 0:
            self.org_price = val

    # 删除价格的方法
    @price.deleter
    def price(self):
        print("执行了 deleter 方法")


# 创建对象
goods = Goods()
print(goods.price)

goods.price = 500
print(goods.price)

del goods.price


out:
    700.0
    350.0
    执行了 deleter 方法
```



## property的另一种使用方法

```
BAR = property（get_price, set_price, del_price, "BAR是一个property对象"）
```



>- property（第一个参数，第二个参数，第三个参数，第四个参数）
>- 第一个参数，当我们foo.BAR自动调用第一个参数的方法
>- 第二个参教，当我们foo.BAR=100，自动调用第二个参数的方法
>- 第三个参数，当我们del foo.BAR，自动调用第三个参数的方法
>- 第四个参数，当我们Foo.BAR.doc，自动获取第四个参数的内容

## property实现延迟计算

```python
# -- coding=utf-8 --
"""
@author:luenci
@time:2020/6/2 12:12
"""


class Delay(object):
    def __init__(self, func):
        self.func = func

    def __get__(self, instance, owner):
        print("触发__get__方法")
        res = self.func(instance)
        setattr(instance, self.func.__name__, res)
        return res


class Room(object):
    def __init__(self, name, length, width):
        self.name = name
        self.length = length
        self.width = width

    @Delay
    def area(self):
        return self.length * self.width


r1 = Room(502, 10, 10)
print(r1.area)
print(r1.area)
print(r1.area)

out:
触发__get__方法
100
100
100

```



# 类的魔法属性和方法

## 魔术属性

- `__doc__`  描述类的信息和类方法的信息
  - 获取类名  `类名.__doc__`
  - 获取对象  `对象.方法名.__doc__`
- `__model__` 获取所属的模块（`对象名.__module__`）直接运行该文件 获取`main`
- `__class__` 获取对象所属的类  `对象名.__class__`
- `__dict__` 获取对象或类的信息
  - 通过`__dict__`获取对象信息，`对象.__dict__ ` 返回字典
  -  通过`__dict__ `获取类信息   `类名.__dict__ `返回值是一个字典

## 魔术方法

- `__init__`初始化方法  `类名（）`自动调用
- `__del__`删除对象的时候， 会调用`__del__方法`
- `__call__()`  使用`对象名()`会调用该方法
- `__str__()` 打印对象的会调用`print(obj)`  `__str__`方法一定要`return`，而且必须`return`字符串内容
- 用字典的书写格式操作对象的方法
  - `__getitem__` 对象['XX']
  - `__setitem__` 对象['XX'] = xx
  - `__delitem__` del 对象['xx']



```python
class Goods(object):
    """这是一个商品的类"""
    # 类属性
    sell = True

    def __init__(self):
        self.price = 100
        self.category = "吃的"

    def set_price(self):
        """设置价格方法"""
        pass

    def __call__(self, *args, **kwargs):
        print("__call__ 方法被调用")

    def __str__(self):
        return "我是一个对象"

    def __getitem__(self, item):
        print("key:", item)

    def __setitem__(self, key, value):
        print("key:%s, value:%s" % (key, value))

    def __delitem__(self, key):
        print("要删除key：", key)

    def __del__(self):
        print("__del__ 正在执行")


goods = Goods()
# 对象名（）  会去调用对象的 __call__() 方法
goods()
# print 打印对象的时候，默认输出 <__main__.Goods object at 0x000002356857E080>
print(goods)

# 通过dict获取对象信息，对象.__dict__ 返回字典
print(goods.__dict__)
# 通过dict 获取类信息 类名.__dict__返回值是一个字典
print(Goods.__dict__)

# dict1={}
# dictI['a']=10
# goods['a']调用 __getitem__ 方法
goods['a']

# goods['a']=10用 __setitem__  key，value
goods['a'] = 10

# del goods['a'] 调用 __delitem__ key
del goods['a']


out：
	{'price': 100, 'category': '吃的'}
    {'__module__': '__main__', '__doc__': '这是一个商品的类', 'sell': True, '__init__': <function Goods.__init__ at 0x00000238CE0F5598>, 'set_price': <function Goods.set_price at 0x00000238CE0F5620>, '__call__': <function Goods.__call__ at 0x00000238CE0F56A8>, '__str__': <function Goods.__str__ at 0x00000238CE0F5730>, '__getitem__': <function Goods.__getitem__ at 0x00000238CE0F57B8>, '__setitem__': <function Goods.__setitem__ at 0x00000238CE0F5840>, '__delitem__': <function Goods.__delitem__ at 0x00000238CE0F58C8>, '__del__': <function Goods.__del__ at 0x00000238CE0F5950>, '__dict__': <attribute '__dict__' of 'Goods' objects>, '__weakref__': <attribute '__weakref__' of 'Goods' objects>}
    key: a
    key:a, value:10
    要删除key： a
    __del__ 正在执行	
```


---
title: Python类补充
categories: 
- python编程
tags: 
- 类和模块
---

## `item`系列

-  `__getitem__`
  - 以字典形式访问属性的时候触发
- `__setitem__`
  - 以字典形式设置属性的时候触发
- `__delitem__`
  - 以字典形式删除属性的时候触发

```python
class Demo(object):
    def __getitem__(self, item):
        print("触发__getitem__")

    def __setitem__(self, key, value):
        print("触发__setitem__")
        self.__dict__[key] = value

    def __delitem__(self, key):
        print("触发__delitem__")
        self.__dict__.pop(key)

f = Demo()
# 以字典的方式来操作属性
print(f.__dict__)
f['name'] = 'luenci'
print(f.__dict__)
print(f['name'])

del f['name']
print(f.__dict__)


out:
{}
触发__setitem__
{'name': 'luenci'}
触发__getitem__
None
触发__delitem__
{}
```

## `__str__`和`__repr__`控制输出

- `__str__`会在`print()`打印时候调用，如果类中没重写则会调用默认的打印值，如果自定义了则会调用自定义的`__str__`方法
- `__repr__`这个实在控制台的时候输出，若一个类中没定义`__str__`但是定义了`__repr__`方法，则会调用`__repr__`的返回值。

```python
class bar(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # def __str__(self):
    #     return '__str__自定义返回值'

    def __repr__(self):
        return '__repr__自定义返回值'

f = bar('luenci', 18)
# print() 函数触发__str__()函数
print(f)

out:
__repr__自定义返回值

```

## `__slots__`属性

- 1.`__slots__`是什么？
- 是一个类变量，变量值可以是列表，元祖，或者可迭代对象，也可以是一个字符串（意味看所有实例只有一个数据属性）
  
- 2.引子：使用点来访问属性本质就是在访问类或者对象的dict属性字典（类的字典是共享的，而每个实例的是独立的）

- 3.为何使用`__slots__`？

  - 字典会占用大量内存，如果你有一个属性很少的类，但是有很多实例，为了节省内存可以使用`__slots__`取代实例的dict当你定义`__slots__`后，`__slots__`就会为实例使用一种更加紧凑的内部表示。实例通过一个很小的固定大小的数组来构建，而不是为每个实例定义一字典，这跟元组或列表很类似。在`__slots__`中列出的属性名在内部被映射到这个数组的指定小标上。使用`__slots__`一个不好的地方就是我们不能再给实例添加新的属性了，只能使用在slots中定义的那些属性名。

> 注意事项：`__slots__`的很多特性都依赖于普通的基于字典的实现。另外，定义了`__slots__`后的类不再支持一些普通类特性了，比如多继承。大多数情况下，你应该只在那些经常被使用到的用作数据结构的类上定义`__slots__`比如在程序中需要创建某个类的几百万个实例对象。
  > 关于`__slots__`的一个常见误区是它可以作为一个封装工具来防止用户给实例增加新的属性。尽管使用`__slots__`可以达到这样的目的，但是这个并不是它的初衷。更多的是用来作为一个内存优化工具。

```python
class Demo(object):
    __slots__ = ['name','age']

f1 = Demo()
f1.name = 'luenci'
# print(f1.__dict__)
print(f1.__slots__)
# print(Demo.__dict__)

['name', 'age']
```

<!-- more -->

## 描述符

### 定义

- 一个描述符是一个有“绑定行为”的对象属性(object attribute)，它的访问控制会被描述器协议方法重写。
- 任何定义了 `__get__`, `__set__` 或者 `__delete__` 任一方法的类称为描述符类，其实例对象便是一个描述符，这些方法称为描述符协议。
- 当对一个实例属性进行访问时，Python 会按 `obj.__dict__` → `type(obj).__dict__` → `type(obj)的父类.__dict__` 顺序进行查找，如果查找到目标属性并发现是一个描述符，Python 会调用描述符协议来改变默认的控制行为。
- 描述符是 `@property``@classmethod``@staticmethod` 和 `super` 的底层实现机制。

### 特性

- 同时定义了 `__get__` 和 `__set__` 的描述符称为 数据描述符(data descriptor)；
- 仅定义了 `__get__ `的称为 非数据描述符(non-data descriptor) 。
- 两者区别在于：如果 `obj.__dict__` 中有与描述符同名的属性，若描述符是数据描述符，则优先调用描述符，若是非数据描述符，则优先使用 `obj.__dict__` 中属性。
- 描述符协议必须定义在类的层次上，否则无法被自动调用。

###  描述符协议

```python
__get__(self, instance, owner)

:param self: 描述符对象本身
:param instance: 使用描述符的对象的实例
:param owner: 使用描述符的对象拥有者
```

```python
__set__(self, instance, value)
:param value: 对描述符的赋值
```

```python
__delete__(self, instance)
```

### 描述符的应用

```python
class Type(object):
    """
    属性检查
    """

    def __init__(self, key, types):
        self.key = key
        self.types = types

    def __get__(self, instance, owner):
        print("__get__执行")
        return instance.__dict__[self.key]

    def __set__(self, instance, value):
        print("__set__执行")
        if not isinstance(value, self.types):
            raise TypeError("%s不是要求的%s类型" % (self.key, self.types))
        instance.__dict__[self.key] = value

    def __delete__(self, instance):
        print("__delete__执行")
        instance.__dict__.pop(self.key)


class Peopel(object):
    name = Type('name', str)
    age = Type('age', int)
    sex = Type('sex', str)

    def __init__(self, name, age, sex):
        self.name = name
        self.sex = sex
        self.age = age


# p1 = Peopel('luenci', '11', '男')
# p2 = Peopel(12, 11, '男')
p3 = Peopel('luenci', 11, '男')

```

## 描述符总结

- 描述符是可以实现大部分python类特性中的底层魔法，包括`@classmethod`.`@staticmethd`.`@property`甚至是`__slots__`属性
- 描述符是很多高级库和框架的重要工具之一，描述符通常是使用到装饰器或者元类的大型框架中的一个组件。

## 元类

- 元类是类的类，是类的模板
- 元类是用来控制如何创建类的，正如类是创建对象的模板一样
- 元类的实例为类，正如类的实例为对象（`f1`对象是`Foo`类的一个实例，`Foo`类是`type`类的一个实例）
- `type`是`python`的一个内建元类，用来直接控制生成类，`python`中任何`class`定义的类其实都是`type`类实例化的对象
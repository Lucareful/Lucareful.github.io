---
title: python函数补充
categories: 
- python进阶
tags: 
- 函数补充
mathjax: true
---

# 递归函数

- 递归特性
  - 1.必须有一个明确的结束条件
  - 2.每次进入更深一层递归时，问题规模相比上次递归都应有所减少
  - 3.递归效率不高，递归层次过多会导致栈溢出（在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出）

- 代码演练

```python
def send(student):
    if len(student) == 0:
        return 'All student revice messges'
    one = student.pop()
    if one == 'luenci':
        print('luenci get')
        send(student)
    elif one == 'jack':
        print('jack get')
        send(student)
    else:
        print('xiaoming get')
        send(student)


if __name__ == "__main__":
    student_list = ['luenci', 'jack', 'xiaoming']
    send(student_list)

```

# 函数作用域

```python
def foo():
    name = 'luenci'
    def bar():
        name = 'xiaoming'
        def tt():
            print(name)
        return tt
    return bar

print(foo)
print(foo())
print(foo()())
# bar=foo()
# tt=bar()
# print(tt)
# tt()
foo()()()

out>>

<function foo at 0x0000020655A92E18>
<function foo.<locals>.bar at 0x00000206577809D8>
<function foo.<locals>.bar.<locals>.tt at 0x0000020657780A60>
xiaoming
```

# 函数式编程

## 匿名函数

- 函数声明：`lambda 参数:表达式返回值`

```python
def test(x):
    return x+1

print(test(10))

fun = lambda x:x+1
print(fun(10))

out:
11
11
```

<!--more-->

### 初始版

```python
num_l = [1,2,3,4,5,6]

def add(num):
    return num+1

def subtraction(num):
    return num-1

def square(num):
    return num**2

def opertion(func,args):
    ret = []
    for i in args:
        res = func(i)
        ret.append(res)
    return ret
```

### 进阶版

```python
def opertion(func,args):
    ret = []
    for i in args:
        res = func(i)
        ret.append(res)
    return ret
    
print(opertion(lambda x: x + 1, num_l))
```

### map函数版

```python
map(lambda x: x + 1, num_l)
```

### filter函数

- 用于过滤序列，过滤掉不符合条件的元素，返回由符合条件元素组成的新列

- 该接收两个参数，第一个为函数，第二个为序列，序列的每个元素作为参数传递给函数进行判断，然后返回 True 或 False，最后将返回 True 的元素放到新列表中。

- ```python
  filter(function, iterable)
  ```

#### 参数

- function -- 判断函数。
- iterable -- 可迭代对象。

### reduce()函数

- ```python
  reduce(function, iterable[, initializer])
  ```

- 对参数序列中元素进行累积

#### 参数

  - function -- 函数，两个参数
  - iterable -- 可迭代对象
  - initializer -- 可选，初始参数

```python
from functools import reduce

num_l = [1,2,3,4,5]

print(reduce(lambda x, y: x + y, num_l))
```

# 一些内置函数

- abs（）

  - 返回绝对值

- eval（）

  - 解除引号的束缚

  - ```python
    >>> info = '{"name": "LiHua", "age": 12}'
    >>> eval(info)
    {'name': 'LiHua', 'age': 12}
    ```

- dir （）

  - 函数返回属性列表

- id （）

  - 函数返回对象地址

- isinstance（） 

  - 判断对象的类型

- type （） 

  - 返回对象的类型

- enumerate 函数

  - 返回元素的序号与对应值

```python
In [3]: for i,elm in enumerate(seq):
   ...:     print(i,elm)
   ...:
    0 P
    1 y
    2 t
    3 h
    4 o
    5 n
```


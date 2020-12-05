---
title: 一些核心模块的介绍
categories: 
- python编程
tags: 
- 核心模块        
---

## sys模块

| 模块方法                        | 解释说明                                                   |
| ------------------------------- | ---------------------------------------------------------- |
| sys.argv                        | 传递到Python脚本的命令行参数列表，第一个元素是程序本身路径 |
| sys.executable                  | 返回Python解释器在当前系统中的绝对路径                     |
| sys.exit(arg)                   | 程序中间的退出，arg=0为正常退出                            |
| sys.path                        | 返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值     |
| sys.platform                    | 返回操作系统平台名称，Linux是linux2，Windows是win32        |
| sys.stdout.write(str)           | 输出的时候把换行符\n去掉                                   |
| val = sys.stdin.readline()[:-1] | 拿到的值去掉\n换行符                                       |
| sys.version                     | 获取Python解释程序的版本信息                               |

## os模块

|        方法        |             说明             |
| :----------------: | :--------------------------: |
|     os.mkdir()     |           创建目录           |
|     os.rmdir()     |           删除目录           |
|    os.rename()     |            重命名            |
|    os.remove()     |           删除文件           |
|    os.getcwd()     |       获取当前工作路径       |
|     os.walk()      |           遍历目录           |
|   os.path.join()   |       连接目录与文件名       |
|  os.path.split()   |       分割文件名与目录       |
| os.path.abspath()  |         获取绝对路径         |
| os.path.dirname()  |           获取路径           |
| os.path.basename() |     获取文件名或文件夹名     |
| os.path.splitext() |      分离文件名与扩展名      |
|  os.path.isfile()  | 判断给出的路径是否是一个文件 |
|  os.path.isdir()   | 判断给出的路径是否是一个目录 |

<!-- more -->

## json模块

- JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。

- 数据格式可以简单地理解为**键值对**的集合（A collection of name/value pairs）。不同的语言中，它被理解为对象（object），纪录（record），结构（struct），字典（dictionary），哈希表（hash table），有键列表（keyed list），或者关联数组 （associative array）。
-  值的有序列表（An ordered list of values）。在大部分语言中，它被理解为数组（array）。

```python
import json
```

- Pyhton的json模块提供了把**内存中的对象序列化的方法**。

```python
import json

# 序列化数据
# f = open('JsonDemo.txt', 'a', encoding='utf-8')
# dic = {'name': 'luenci'}
# tmp = json.dumps(dic)
# f.write(tmp)
# f.close()

# 反序列化数据
f = open('JsonDemo.txt', 'r', encoding='utf-8')
res = json.loads(f.read())
print(res)
print(type(res))

# out
# {'name': 'luenci'}
# <class 'dict'>
```

### `json.dumps`

`dump`的功能就是把`Python`对象`encode`为json对象，一个编码过程。注意`json`模块提供了`json.dumps`和`json.dump`方法，区别是`dump`直接到文件，而`dumps`到一个字符串，这里的`s`可以理解为`string`。

```python
data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]
print 'DATA:', repr(data)

data_string = json.dumps(data)
print 'JSON:', data_string
```

```json
DATA: [{'a': 'A', 'c': 3.0, 'b': (2, 4)}]
JSON: [{"a": "A", "c": 3.0, "b": [2, 4]}]
```

查看其类型，发现是`string`对象。

```python
print type(data)
print type(data_string)
```

```bash
<type 'list'>
<type 'str'>
```

### `json.dump`

不仅可以把`Python`对象编码为`string`，还可以写入文件。因为我们不能把`Python`对象直接写入文件，这样会报错`TypeError: expected a string or other character buffer object`，我们需要将其序列化之后才可以。

```python
data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]
```

```python
with open('output.json','w') as fp:
    json.dump(data,fp)
```

```json
[{"a": "A", "c": 3.0, "b": [2, 4]}]
```

### `json.loads`

从`Python`内置对象`dump`为`json`对象我们知道如何操作了，那如何从`json`对象`decode`解码为`Python`可以识别的对象呢？是的用`json.loads`方法，当然这个是基于`string`的，如果是文件，我们可以用`json.load`方法。

```python
decoded_json = json.loads(data_string)
```

```python
# 和之前一样，还是list
print type(decoded_json)
```

```bash
<type 'list'>
```

```python
# 像访问 data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]一样
print decoded_json[0]['a']
```

```undefined
A
```

### `json.load`

可以直接`load`文件。

```python
with open('output.json') as fp:
    print type(fp)
    loaded_json = json.load(fp)
```

```bash
<type 'file'>
```

```python
# 和之前一样，还是list
print type(decoded_json)
```

```bash
<type 'list'>
```

```python
# 像访问 data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]一样
print decoded_json[0]['a']
```

```undefined
A
```

### 数据类型对应

`json`和`Python`对象转换过程中，数据类型不完全一致，有对应。

| Python         | Json   |
| -------------- | ------ |
| dict           | object |
| list,tuple     | array  |
| str, unicode   | string |
| int,long,float | number |
| True           | true   |
| False          | false  |
| None           | null   |

### `json.dumps`常用参数

一些参数，可以让我们更好地控制输出。常见的比如`sort_keys`，`indent`，`separators`，`skipkeys`等。

`sort_keys`名字就很清楚了，输出时字典的是按键值排序的，而不是随机的。

```python
data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]
print 'DATA:', repr(data)

unsorted = json.dumps(data)
print 'JSON:', json.dumps(data)
print 'SORT:', json.dumps(data, sort_keys=True)
```

```tsx
DATA: [{'a': 'A', 'c': 3.0, 'b': (2, 4)}]
JSON: [{"a": "A", "c": 3.0, "b": [2, 4]}]
SORT: [{"a": "A", "b": [2, 4], "c": 3.0}]
```

`indent`就是更个缩进，让我们更好地看清结构。

```python
data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]
print 'DATA:', repr(data)

print 'NORMAL:', json.dumps(data, sort_keys=True)
print 'INDENT:', json.dumps(data, sort_keys=True, indent=2)
```



```bash
DATA: [{'a': 'A', 'c': 3.0, 'b': (2, 4)}]
NORMAL: [{"a": "A", "b": [2, 4], "c": 3.0}]
INDENT: [
  {
    "a": "A", 
    "b": [
      2, 
      4
    ], 
    "c": 3.0
  }
]
```

`separators`是提供分隔符，可以出去白空格，输出更紧凑，数据更小。默认的分隔符是`(', ', ': ')`，有白空格的。不同的`dumps`参数，对应文件大小一目了然。

```python
data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]
print 'DATA:', repr(data)
print 'repr(data)             :', len(repr(data))
print 'dumps(data)            :', len(json.dumps(data))
print 'dumps(data, indent=2)  :', len(json.dumps(data, indent=2))
print 'dumps(data, separators):', len(json.dumps(data, separators=(',',':')))
```

```kotlin
DATA: [{'a': 'A', 'c': 3.0, 'b': (2, 4)}]
repr(data)             : 35
dumps(data)            : 35
dumps(data, indent=2)  : 76
dumps(data, separators): 29
```

`json`需要字典的的键是字符串，否则会抛出`ValueError`。

```python
data = [ { 'a':'A', 'b':(2, 4), 'c':3.0, ('d',):'D tuple' } ]

print 'First attempt'
try:
    print json.dumps(data)
except (TypeError, ValueError) as err:
    print 'ERROR:', err

print
print 'Second attempt'
print json.dumps(data, skipkeys=True)
```

```csharp
First attempt
ERROR: keys must be a string

Second attempt
[{"a": "A", "c": 3.0, "b": [2, 4]}]
```

转载自：*作者：米乐乐果*
*链接：https://www.jianshu.com/p/e29611244810*

## pickle 模块

- 对于类和函数对象，json不能进行序列化，可以使用 pickle 模块来进行相应的操作
- pickle 模块只能用于Python中，不同版本的Python可能彼此都不兼容，因此，只能用Pickle保存那些不重要的数据

pickle 写入方式：

```python
import pickle
 
def foo():
    print('Hello World!')
 
data = pickle.dumps(foo)
f = open('test1','wb')
f.write(data)
f.close()
```

- pickle 的读取方式与 json 模块一致，同为 dump ，dumps 函数

 

## shelve 模块

- shelve 模块是一个简单的数据存储方案，类似key-value数据库，可以很方便的保存python对象，其内部是通过pickle协议来实现数据序列化。
- shelve 使用方式：

```python
import shelve
 
with shelve.open("shelve_test") as f:
    f["name"] = 'alex'
    f["age"] = '25'
    
# 这里直接保存到了文件中，生成了3个文件shelve_test.bak,shelve_test.dat,shelve_test.dir
 
with shelve.open('shelve_test') as f:  # 只使用shelvefile名字即可
    print(f["name"])
 
    for key, value in f.items():
        print(key, ': ', value)
 >>> alex
     age :  25
     name :  alex
```

## logging模块

- **logging模块是Python内置的标准模块，主要用于输出运行日志，可以设置输出日志的等级、日志保存路径、日志文件回滚等；相比print，具备如下优点：**

  - 可以通过设置不同的日志等级，在release版本中只输出重要信息，而不必显示大量的调试信息；
  - print将所有信息都输出到标准输出中，严重影响开发者从标准输出中查看其它数据；logging则可以由开发者决定将信息输出到什么地方，以及怎么输出

- `basicConfig `配置了 level 信息和 format 信息

  - `level `配置为 INFO 信息，即只输出 INFO 级别的信息

  - `filename`：即日志输出的文件名，如果指定了这个信息之后，实际上会启用 FileHandler，而不再是 StreamHandler，这样日志信息便会输出到文件中了。

  - `filemode`：这个是指定日志文件的写入方式，有两种形式，一种是 w，一种是 a，分别代表清除后写入和追加写入。

  - `format=`：指定了 format 格式的字符串，包括 asctime运行时间 name模块名称、levelname（日志级别）message （日志内容）

  - ```python
    %(levelno)s：打印日志级别的数值。
    %(levelname)s：打印日志级别的名称。
    %(pathname)s：打印当前执行程序的路径，其实就是sys.argv[0]。
    %(filename)s：打印当前执行程序名。
    %(funcName)s：打印日志的当前函数。
    %(lineno)d：打印日志的当前行号。
    %(asctime)s：打印日志的时间。
    %(thread)d：打印线程ID。
    %(threadName)s：打印线程名称。
    %(process)d：打印进程ID。
    %(processName)s：打印线程名称。
    %(module)s：打印模块名称。
    %(message)s：打印日志信息。
    ```

  - `datefmt`：指定时间的输出格式。

  - `logging.setLevel` :设定日志级别，只有大于或等于这个级别才输出

    - `DEBUG` 级别0
  - `INFO`级别1
    
    - `WARNING`级别2
  - `ERROR`级别3
    
  - `CRITICAL`级别4
    
  - `style`：如果 format 参数指定了，这个参数就可以指定格式化时的占位符风格，如 %、{、$ 等。
  
  - `level`：指定日志输出的类别，程序会输出大于等于此级别的信息。
  
  - `stream`：在没有指定 `filename` 的时候会默认使用` StreamHandler`，这时 `stream` 可以指定初始化的文件流。指定将日志的输出流，可以指定输出到`sys.stderr`，`sys.stdout`或者文件，默认输出到`sys.stderr`，当`stream`和`filename`同时指定时，`stream`被忽略；
  
  - `handlers`：可以指定日志处理时所使用的 Handlers，必须是可迭代的。

## `configparse`模块

- 读取和写入类似字典操作
- `read(filename)`      直接读取文件内容
- `get(section, option)` 获取`section` 下具体某一配置项的值(返回的是字符串)
- `sections()` 得到所有的section，并以列表的形式返回
- `options(section)`    得到该section的所有option
- `items(section)` 键值对的形式 得到该section的所有option

- 写入配置

 ```python
import configparser


config = configparser.ConfigParser()
config['DEFAULT'] = {'serveraliveinterval' : '4',
                     'compression' : 'yes',
                     'compressionlevel' : '9'}

config['bitbucket'] = {}
config['bitbucket']['user'] = 'luenci'

config['topsecrect'] = {}
topsecrect = config['topsecrect']

topsecrect['port'] = '22'

with open('example.ini', 'w') as f:
    config.write(f)
 ```

- 读取配置文件

```python
import configparser


config = configparser.ConfigParser()

# 读取配置文件
config.read('example.ini')
print(config.sections())
print(config.options('bitbucket'))

for key in config['DEFAULT'].values():
    print("%s%s"%(key,type(key)))

out：
['bitbucket', 'topsecrect']
['user', 'serveraliveinterval', 'compression', 'compressionlevel']
4<class 'str'>
yes<class 'str'>
9<class 'str'>
```

### 操作函数

- `add_section(section)`   添加一个新的section
- `set(section, option, value)` 对section中添加 option 和 value
- `remove_section(section)` 删除某个 section
- `remove_option(section, option)`  删除某个 section 下的 option
- `write()` 将设置的新的 section 和 option 写到文件中

### configparse支持的数据类型

- 一般情况下，configpaser类是无法识别配置文件中的value的数据类型的，它总是以字符串的形式来存储这些类型，所以当涉及到`int` `float`等类型的时候就需要我们自己对它进行转换
- configparser 为我们提供了`getboolean() getint() getfloat()`方法用来对读对应类型的配置
  - 其中getboolean方法可以识别 `'yes'/'no', 'on'/'off', 'true'/'false' and '1'/'0'`等数据并转换为布尔值

## `hashlib`模块

- 用于加密有关的操作，主要有SHA1，SHA224，SHA256，SHA384，SHA512，MD5算法。替代了在python3中已废弃了md5和sha模块。
- md5加密

```python
import hashlib

p = hashlib.md5()
p.update('12345'.encode('utf-8'))
print(p.hexdigest())
```

- sha1加密

```python
p = hashlib.sha1()
p.update('12345'.encode('utf-8'))
print(p.hexdigest())
```

- 以上加密算法虽然依然非常厉害，但时候存在缺陷，即：通过撞库可以反解。所以，有必要对加密算法中添加自定义key再来做加密。

```python
import hashlib

# 加盐
p = hashlib.md5('password'.encode('utf-8'))
p.update('12345'.encode('utf-8'))
print(p.hexdigest())
```


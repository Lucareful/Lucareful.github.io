---
title: Django参数和模板
categories: 
- python的web框架
tags: 
- Django
---

## `render`方法参数
- `request`: 是一个固定参数。
- `template_name`: `templates` 中定义的文件, 要注意路径名. 比如`’templates\polls\index.html’`, 参数就要写`‘polls\index.html’`
- `context`: 要传入文件中用于渲染呈现的数据, 默认是字典格式
- `content_type`: 生成的文档要使用的MIME 类型。默认为DEFAULT_CONTENT_TYPE 设置的值。
- `status`: http的响应代码,默认是200.
- `using`: 用于加载模板使用的模板引擎的名称。

## `request`对象方法和属性

- `request.scheme`   # 代表请求的方案,http或者https
- `request.body`# 原始HTTP请求主体为字节串。这对于以不同于常规HTML格式的方式处理数据很有用：二进制图像，XML有效负载等。对于处理常规格式的数据，请使用 `HttpRequest.POST`。
- `request.path`   # 请求的路径,比如请求`127.0.0.1/org/list`,那这个值就是`/org/list`
- `request.get_full_path()` # 获取完整的请求路径
- `request.method`  # 表示请求使用的http方法,GET或者POST请求
- `request.encoding` # 表示提交数据的编码方式
- `request.GET`     # 获取GET请求
- `request.POST`    # 获取post的请求,比如前端提交的用户密码,可以通过`request.POST.get()`来获取

> **NOTICED：如果使用 POST 上传文件的话，文件信息将包含在 FILES 属性中**

`request.COOKIES` #包含所有的cookie

`request.META`   #一个标准的Python 字典，包含所有的HTTP 首部。具体的头部信息取决于客户端和服务器，下面是一些示例：

```cmd
CONTENT_LENGTH 	—— 请求的正文的长度（是一个字符串）。
CONTENT_TYPE 	—— 请求的正文的MIME 类型。
HTTP_ACCEPT 	—— 响应可接收的Content-Type。
HTTP_ACCEPT_ENCODING —— 响应可接收的编码。
HTTP_ACCEPT_LANGUAGE —— 响应可接收的语言。
HTTP_HOST 		—— 客服端发送的HTTP Host 头部。
HTTP_REFERER 	—— Referring 页面。
HTTP_USER_AGENT —— 客户端的user-agent 字符串。
QUERY_STRING 	—— 单个字符串形式的查询字符串（未解析过的形式）。
REMOTE_ADDR 	—— 客户端的IP 地址。
REMOTE_HOST 	—— 客户端的主机名。
REMOTE_USER 	—— 服务器认证后的用户。
REQUEST_METHOD  —— 一个字符串，例如"GET" 或"POST"。
SERVER_NAME 	—— 服务器的主机名。
SERVER_PORT 	—— 服务器的端口（是一个字符串）
```

- `request.user`   #一个 `AUTH_USER_MODEL` 类型的对象，表示当前登录的用户。
  - 如果用户当前没有登录，user 将设置为 `django.contrib.auth.models.AnonymousUser` 的一个实例。你可以通过 `s_authenticated() `区分它们
  - 把`request`传给前端的时候,前端可以通过 ` if request.user.is_authenticated`判断用户时候登录
- `request.session` #一个既可读又可写的类似于字典的对象，表示当前的会话

<!-- more -->

##  `response`对象
- `Httpresponse`对象对于 `Httpreques`对象来说，是由` django`自动创建的，但是， `Httpresponse`对象就必须我们自己创建。每个`view`请求处理方法必须返回一个 `Httpresponse`对象。

 > `Httpresponse`类在`djangohttpHttprespons`

 > 在 `Httpresponse`对象上扩展的常用方法：

- 页面渲染

  - `render() `
  - `render to response()`

- 页面跳转：

  - `redirect("路径")`

- `locals()`：可以直接将函数中所有的变里传给模板

## 内置变量过滤器`filter`

​    可以理解为python中的内置函数，过滤器是模板的特有语法，通过前端来过滤部分数据。注意filter只能传递一个参数(也可以说是两个参数，因为第一个个参数已经固定，就是被处理的那个)。
格式：

```jinja
`{{` var|method:parameter`}}`
```

- method表示过滤器部分过滤器如下

| 过滤器   | 说明             | 举例 |
| -------- | ---------------- | ---- |
| first    | 取列表第一个元素 |      |
| last     | 取列表最后元素   |      |
| capfirst | 首字母大写       |      |

![filter](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200614210257960.png)

## `logging`配置

```python
#下面就是logging的配置
LOGGING = {
    'version': 1,  # 指明dictConnfig的版本，目前就只有一个版本
    'disable_existing_loggers': False,  # 表示是否禁用所有的已经存在的日志配置
    'formatters': {  # 格式器
        'verbose': {  # 详细
            'format': '%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s'
        },
        'standard': {  # 标准
            'format': '[%(asctime)s] [%(levelname)s] %(message)s'
        },
    },
    # handlers：用来定义具体处理日志的方式，可以定义多种，"default"就是默认方式，"console"就是打印到控制台方式。file是写入到文件的方式，注意使用的class不同
    'handlers': { # 处理器，在这里定义了两个个处理器
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'stream': 'ext://sys.stdout',   # 文件重定向的配置，将打印到控制台的信息都重定向出去 python manage.py runserver >> /home/aea/log/test.log
            # 'stream': open('/home/aea/log/test.log','a'),  #虽然成功了，但是并没有将所有内容全部写入文件，目前还不清楚为什么
            'formatter': 'standard'   # 制定输出的格式，注意 在上面的formatters配置里面选择一个，否则会报错
        },
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR,'debug.log'),  #这是将普通日志写入到日志文件中的方法，
            'formatter': 'standard'
        },
        'default': {
            'level':'DEBUG',
            'class':'logging.handlers.RotatingFileHandler',
            'filename': os.path.join(BASE_DIR,'All.log'),     #日志输出文件
            'maxBytes': 1024*1024*5,                  #文件大小
            'backupCount': 5,                         #备份份数
            'formatter':'standard',                   #使用哪种formatters日志格式
        },
        # 上面两种写入日志的方法是有区别的，前者是将控制台下输出的内容全部写入到文件中，这样做的好处就是我们在views代码中的所有print也会写在对应的位置
        # 第二种方法就是将系统内定的内容写入到文件，具体就是请求的地址、错误信息等，小伙伴也可以都使用一下然后查看两个文件的异同。
    },
    'loggers': {  # log记录器，配置之后就会对应的输出日志
        # django 表示就是django本身默认的控制台输出，就是原本在控制台里面输出的内容，在这里的handlers里的file表示写入到上面配置的file-/home/aea/log/jwt_test.log文件里面
        # 在这里的handlers里的console表示写入到上面配置的console-/home/aea/log/test.log文件里面
        'django': {
            'handlers': ['console','file'],
            # 这里直接输出到控制台只是请求的路由等系统console，当使用重定向之后会把所有内容输出到log日志
            'level': 'DEBUG',
            'propagate': True,
        },
        'django.request ':{
            'handlers': ['console','file'],
            'level': 'WARNING',  # 配合上面的将警告log写入到另外一个文件
            'propagate': True,
        },
        'django.db.backends': {
            'handlers': ['file'], # 指定file handler处理器，表示只写入到文件
            'level':'DEBUG',
            'propagate': True,
        },
    },
}
```

## `ORM`的增删改查

- 增加数据

```python
#方式一创建记录
b = Book(name="python基础", price=99, author="luenci", pub_date="2020-06-14")
b.save()

#方法二创建数据
Book.objects.create(name="python基础", price=99, author="luenci", pub_date="2020-06-14")


# 便捷方法
dic = {
'name': 'go基础',
'price': 99,
'author': 'luenci',
'pub_date': '2020-06-13'
}
Book.objects.create(**dic)
```

- 更新数据

```python
# 方法一：(推荐用)
Book.objects.filter(author='luenci').update(price=100)

# 方法二
b = Book.objects.get(name='go基础')
print(b) # <QuerySet [<Book: Book object (3)>]
b.price = 8.9
b.save()
print(type(b)) # <class 'app01.models.Book'>

return HttpResponse("修改成功")
```

- 删除数据

```python
Book.objects.filter(name="go基础").delete()
```

- 查找数据

```python
# 获取所有对象
book_list = Book.objects.all()

# 对name去重
book_list = Book.objects.all().values("name").distinct()

# 统计
book_list = Book.objects.all().values("name").distinct().count()

# 查询的是对象的集合，即使只有一个对象也是集合的形式
book_list = Book.objects.filter(author='luenci') 

book_list = Book.objects.first()
book_list = Book.objects.last()

# 指定查询到一个对象
book_list = Book.objects.get(id=7)

# 查询作者为luenci出版的书名.（字典的集合）
book_list1 = Book.objects.filter(author='luenci').values('name', 'price') 

# 查询作者为luenci出版的书名.（列表的集合）
book_list2 = Book.objects.filter(author='luenci').values_list('name', 'price')

# <QuerySet [{'name': 'go基础', 'price': 99.0}, {'name': 'python基础', 'price': 99.0}, {'name': 'python基础', 'price': 66.0}>
print(book_list1) 

#<QuerySet [('go基础', 99.0), ('python基础', 99.0), ('python基础', 66.0), ('docker基础', 8.9)]>
print(book_list2)

```


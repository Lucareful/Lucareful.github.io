---
title: Django之编写URL
categories: 
- python的web框架
tags: 
- Django
comments: true
---

# 编写URL

## 编写规则

​	为了使其规范性，在每个新创建的App中设置独立的静态资源和模板文件夹并添加一个空白的`.py`文件，命为`urls.py`。如下是创建app中的文件结构：

<!--more-->

```python
frist/
	migrations/		# 数据库前后是否有变化，生成出迁移文件
    
	static/			# 创建App后存放App中的静态资源文件，自己手动添加
    
	templates/		# 创建App后存放App中的模板文件，自己手动添加
    
	__init__.py
	admin.py
	apps.py
	models.py
	tests.py
	urls.py			# 创建App后由系统总路由映射到App的路由文件，自己手动添加
	view.py
```

### 系统总路由和app的路由分发配置

```python
# 根目录的urls.py
from django.contrib import admin
from django.urls import path,admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('frist.urls'))			# 引入app中的urls.py
]
```



代码详解:

* `from django.contrib import admin`:导入Admin功能模块.
* `from django.urls import path,admin`:导入URL编写模块.
* `urlpatterns`:整个项目的URL集合,每个元素代表一条URL信息.
* `path('admin/', admin.site.urls)`:设定Admin的URL.`'admin/'`代表`127.0.0.1/admin`地址信息,`admin`后面的斜杠是路径分隔符;admin.site.urls是URL的处理函数,也称为视图函数.
* ` path('',include('frist.urls'))	`:URL为空,代表网站的域名,即127.0.0.1,通常是网站的首页;include将该URL分发给app的urls.py处理.

```python
# app下的urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index)	# 调用和url匹配的视图函数
]
```



当根目录的URL分发给app中的URL处理后,下一步就是根据所匹配的URL进行视图的调用.

在Views中编写相应的视图函数。如下：

```python
# index的views.py
from django.http import HttpResponse
# creat you views here.
def index(request):
    return HttpResponse("hello world")   
```

视图函数的参数必须设置为`request`，该参数代表当前用户的请求对象，该对象包含用户名，请求内容和请求方式等信息，执行完成后必须使用`return`将处理结果返回。



## 带变量的URL

​	在日常开发中，有时候一个URL可以代表多个不同的页面，如编写带有日期的URL，若根据前面的编写方式，按一年计算，则需要开发者编写365个不同的URL才能实现。这种做法是不可取的，因此，Django在编写URL时，可以对URL设置变量值，使URL具有多样性。

​	URL的变量类型有字符类型，整型，`slug`和`uuid`，常用的是字符类型和整型。说明如下：

* 字符类型：匹配任何非空字符串，但不含斜杠。如果没有指定类型，默认使用该类型。
* 整形：匹配0和正整数
* slug：可理解为注释，后缀或附属等概念，常作为URL的解释性字符。可匹配任何ASCII字符以及连接符和下画线，能使URL更加清晰易懂。比如网页的标题是“13岁的孩子”，其URL地址可以设置为“13-sui-de-hai-zi“。
* uuid：匹配一个uuid格式的对象。为了防止冲突，规定必须使用破折号并且所有字母必须小写，例如0201203-3213-31e-321c34d435

（未待完续）






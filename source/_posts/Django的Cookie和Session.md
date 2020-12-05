---
title: Cookie和Session知识
categories: 
- Http知识
tags: 
- Cookie和Session
---

> 参考：
>
> https://juejin.im/post/5aa783b76fb9a028d663d70a
>
> https://www.cnblogs.com/wj-1314/p/10496253.html

- **Session是存储在服务器端的，Cookie是存储在客户端的**

## Cookie的概念

- Cookie是客户端用户信息的一种机制，用来记录用户的一些信息，实际上Cookie是服务器在**本地机器**上存储的一小段文本，并随着每次请求发送到服务器。

## Cookie与Session的区别

1. cookie数据存放在客户的浏览器（客户端）上，session数据放在服务器上，但是服务端的session的实现对客户端的cookie有依赖关系的。
2. **cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗**，考虑到安全应当使用session；
3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能。考虑到减轻服务器性能方面，应当使用COOKIE；
4. 一个服务器最多在客户端浏览器上保存20个Cookie；
5. 一个浏览器最多保存300个Cookie
6. 单个cookie在客户端的限制是3K，就是说一个站点在客户端存放的COOKIE不能超过3K；

> 上面的数据只是HTTP的Cookie规范，但是在浏览器大战的今天，一些浏览器为了打败对手，为了展示自己的能力起见，可能对Cookie规范“扩展”了一些，例如每个Cookie的大小为8KB，最多可保存500个Cookie等！但也不会出现将你的硬盘占满的可能

## Cookie与session的实现原理

![img](https://img2018.cnblogs.com/blog/1226410/201903/1226410-20190326171141383-1715230740.png)

  上图很明显的展示了Django的session和cookie的实现原理。

- 服务器会生成两份相同的cookie字符串，一份保存在本地，一份发向请求的浏览器。

- 浏览器将会受到的cookie字符串保存下来，当下次再发请求时，会将信息与这段cookie一同发送到服务器，服务器得到这段cookie会与本地保存的那份判断是否相同，如果相同就表示用户已经登录成功，保存用户登录成功的状态。

- Django的session保存在数据库中的数据相当于一个大字典，key为cookie的字符串，value仍是一个字典，字典的key和value为用户设置的相关信息，这样就可以方便的存取session里面的信息。

## cookie和session内容

- cookie内容主要包括：key，value，过期时间，路径和域。路径和域一起构成了cookie的作用范围。
- cookie的使用由浏览器按照一定的规则在后台自动发送给服务器的，浏览器检查所在存储的cookie，如果某个cookie的作用范围大于等于将要请求的资源所在位置，将cookie附在请求资源的HTTP请求头上发给服务器。
- cookie的生命周期跟过期时间相关，如果不设置过期时间，成为会话cookie，保存在内存中，关闭浏览器窗口，cookie消失。如果设置过期时间，浏览器会把cookie写入硬盘，这些cookie仍然有效，知道超过设定的过期时间。
- 存在硬盘上的cookie可以在同一个浏览器不同进程间共享，比如两个Chrome窗口。存在内存的，不同浏览器不同的处理方式
- session内容，服务器使用类似Python字典的key value 的形式存储，存储session方式很多，数据库，缓存，文件，加密cookie，数据库加缓存。

<!-- more -->

## Cookie的用途

- 服务器使用Cookie来跟踪客户端状态
- 保存购物车
- 显示上次登录名

### Cookie与HTTP头

　　Cookie是通过HTTP请求和响应头在客户端和服务器端传递的：

- Cookie：

　　　　请求头，客户端发送给服务器端；

　　　　格式：Cookie：a=A；b=B；c=C。即多个Cookie用分号离开；

- Set-Cookie：

　　　　响应头，服务器端发送给客户端。

　　　　一个Cookie对象一个Set-Cookie：

　　　　Set-Cookie：a=A

　　　　Set-Cookie：b = B

　　　　Set-Cookie：c=C

### Cookie的覆盖

- 如果服务器端发送重复的Cookie，那么会覆盖原有的Cookie。
- cookies是浏览器为Web服务器存储的一小段信息。每次浏览器从某个服务器请求页面时，它向服务器会送之前收到的cookies，它保存在浏览器下的某个文件夹下。

## Cookie的使用

```python
# 登录校验

from django.shortcuts import render, redirect


# Create your views here.

def login(request):
    print(request.COOKIES)
    print(request.session)
    if request.method == "POST":
        name = request.POST.get("user")
        pwd = request.POST.get("passwd")
        if name == 'luenci' and pwd == '123':
            ret = redirect("/index/")
            ret.set_cookie('name', 'luenci')
            return ret

    return render(request, 'login.html', locals())


def index(request):
    # {'Hm_lvt_ca9c9aeca6d24b987c40c4c8ad091e42': '1591770252,1591772319',
    # 'csrftoken': 'DP9BWOWgK1fGi5goPqAlFhR4tX2TC4eXL2NuIC6TjrObLc6IwmGmup0r5M5sCZBH',
    # 'sessionid': 'edvrn0uevgi556t8wrlvh2iqg0xzmm92',
    # 'name': 'luenci'}
    print(request.COOKIES)
    if request.COOKIES.get('name', None) == 'luenci':
        name = request.COOKIES.get('name', None)
        return render(request, 'index.html', locals())
    else:
        return redirect('/login/')

```

## Session概述

- session就是在服务器端的“Cookie”，将用户数据保存在服务器端，远比保存在用户端要安全，方便和快捷的多。Session依赖于Cookie，但是与Cookie不同的地方就是在于session将所有的数据都放在服务器端，用户浏览器的cookie中只会保存一个非明文的识别信息，比如哈希值。
- Session是服务器端技术，利用这个技术，服务器在运行时可以为每一个用户的浏览器创建一个其独享的session对象，由于session为用户浏览器独享，所以用户在访问服务器的web资源时，可以把各自的数据放在各自的session中，当用户再去访问该服务器中的其他web资源时，其他web资源再从用户各自的session中取出数据为用户服务。
- Django的Session机器会向请求的浏览器发送cookie字符串。同时也会保存在本地一份，用来验证浏览器登录是否为同一用户。他存在于服务器，Django默认会把session存入数据库中。
- Session依赖于Cookie，如果浏览器不能保存cookie，那么session就失效了。因为他需要浏览器的cookie和session做对比。session就是用来在服务器端保存用户的会话状态

## Session的作用

session下次通过cookie中的sessionID（键）获取用户信息值（值）

- 1，会话保持，记住用户的登录状态（WEB网站，分布式架构）
- 2，避免了敏感信息保存在客户端，防止客户端修改cookie信息（和cookie的区别）

#### session的过期时间

  session的过期时间：django默认设置是2周 ，如果session过期，浏览器再携带之前的cookie就不能免登陆了。因为cookie已经失效了。

-  前端：如果超出了session的过期时间，那么浏览器会自动将对应的cookie删除掉

- 后端：django没有对过期的session做任何处理

#### 删除后台保留的一些过期的session信息

```
python manage.py clearsessions
```

- 当然，如果用户在过期时间内主动退出登录，那么django会将该用户对应的session数据给删除掉 （`request.session.flush()`）
- 但是如果用户在登录完以后没有主动退出，并且超出了过期时间，用户需要重新登录，**但django中的过期session是不清除的**，需要定期清理过期的session数据。

## Session的保存方式

Session是大多数网站都需要具备的功能，Django为我们提供了一个通用的session框架，并且可以使用多种session数据的保存方式：

- 保存在数据库内
- 保存到缓存
- 保存到文件内
- 保存到cookie内

通常情况下，没有特别需求的话，请使用保存在数据库内的方式，尽量不要保存在cookie内。

- django的session框架支持匿名会话，封装了cookies的发送和接收过程。cookie包含一个会话ID而不是数据本身（除非你使用的是基于后端的cookie）
- django的会话框架完全的，唯一的基于cookie。它不像PHP一样，把会话的ID放在URL中，那样不仅使得URL变得丑陋，而且使得你的网站易于受到通过`Referer`头部进行窃取会话ID的攻击。

## Session的使用

```python
# 登录校验

from django.shortcuts import render, redirect


# Create your views here.

def login(request):
    print("Cookies:", request.COOKIES)
    print("Session:", request.session)
    if request.method == "POST":
        name = request.POST.get("user")
        pwd = request.POST.get("passwd")
        if name == 'luenci' and pwd == '123':

            # Cookie Session
            request.session["is_login"] = True
            request.session["user"] = name

            return redirect('/index/')

    return render(request, 'login.html', locals())


def index(request):
    # {'Hm_lvt_ca9c9aeca6d24b987c40c4c8ad091e42': '1591770252,1591772319',
    # 'csrftoken': 'DP9BWOWgK1fGi5goPqAlFhR4tX2TC4eXL2NuIC6TjrObLc6IwmGmup0r5M5sCZBH',
    # 'sessionid': 'edvrn0uevgi556t8wrlvh2iqg0xzmm92',
    # 'name': 'luenci'}
    # print(request.COOKIES)
    
    if request.session.get("is_login", None):
        name = request.session.get("user", None)
        return render(request, "index.html", locals())
    else:
        return redirect('/login/')

```


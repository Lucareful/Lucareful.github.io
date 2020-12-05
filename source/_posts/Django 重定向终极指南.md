---
title: Django重定向指南（转载）
categories: 
- python的web框架
tags: 
- Django重定向原文
---

> 原文转载自：https://www.jianshu.com/p/5e322fb5b61c（简书：[爱吃鱼de大猫](https://www.jianshu.com/u/a4b0307eac4d)）

当你使用 Django 框架构建 Python Web 应用程序时，在某些时候需要将用户从一个URL重定向到另一个URL。本指南将提供 HTTP 重定向所需要了解的所有知识，以及在 Django 中该如何处理。

完成本教程，你将学到：

- 能够将用户从一个URL重定向到另一个URL
- 了解临时重定向和永久重定向之间的区别
- 使用重定向时避免常见陷阱

本教程假设你熟悉Django应用程序的基本构建块，如视图和URL模式。

## 一个超简单的 Django 重定向例子

在 Django 中，通过从视图返回`HttpResponseRedirect`或`HttpResponsePermanentRedirect`的实例，可以将用户重定向到另一个URL。要做到这一点，最简单的方法是使用模块 `django.shortcuts` 中的函数 `redirect()`。比如：



```python
# views.py
from django.shortcuts import redirect

def redirect_view(request):
    response = redirect('/redirect-success/')
    return response
```

只需在你的视图中将新的 URL 作为参数调用 redirect() 即可搞定。 该视图函数将返回一个 HttpResponseRedirect 类。

注意，如同其他视图一样，返回的重定向URL必须在你的 urls.py 中注册：



```python
# urls.py
from django.urls import path

from .views import redirect_view

urlpatterns = [
    path('/redirect/', redirect_view)
    # ... more URL patterns here
]
```

假定这个是 Django 项目的主 urls.py 文件，现在 URL`/redirect/` 将被重定向到 `/redirect-success/`。此外，为避免硬编码 URL，你可以用视图、URL 模式或者模型的名字来调用 redirect() 。通过传递关键字参数`Permanent=True`来创建永久重定向。

好了，你需要了解的 Django 重定向就这么多。为让这篇教程配得上“终极指南”这个标题，下面我们将进一步探讨 redirect() 函数、HTTP 状态码以及 `HttpRedirectResponse` 类型。我们从头开始，从一个基本的问题开始。

## 为什么要使用重定向？

我们为什么要将用户的访问重定向到不同的 URL 地址？我们看看 Django 项目是怎么回答的：

- 当你未登录并请求需要身份验证的URL(如Django管理员)时，Django会将你重定向到登录页面
- 成功登录后，Django会将你重定向到最初请求的URL
- 当你使用Django管理员更改密码时，系统会将你重定向到指示更改成功的页面
- 当你在Django管理员中创建对象时，Django会将你重定向到对象列表。

如果不使用重定向来实现会是什么样子？

如果用户必须登录才能查看页面，则可以简单地显示类似“单击此处登录”之类的页面。这样子做也行，但它是对用户不友好的。

另外，像 [http://bit.ly](http://bit.ly/) 这样的短网址是重定向派上用场的另一个例子：你在浏览器的地址栏中键入一个短URL，然后被重定向到一个长而笨重的URL的页面。

此外，重定向不仅仅是为了方便。重定向是引导用户正确使用 Web 应用程序的基本工具。在用户进行带有副作用的操作(如创建或删除对象)后，最佳做法是重定向到另一个URL，以防止意外执行该操作两次。

下面的代码示例演示通常是如何处理表单的，一个用户在成功提交表单后会被重定向到另一个URL：



```python
from django import forms
from django.http import HttpResponseRedirect
from django.shortcuts import redirect, render

def send_message(name, message):
    # Code for actually sending the message goes here

class ContactForm(forms.Form):
    name = forms.CharField()
    message = forms.CharField(widget=forms.Textarea)

def contact_view(request):
    # The request method 'POST' indicates
    # that the form was submitted
    if request.method == 'POST':  # 1
        # Create a form instance with the submitted data
        form = ContactForm(request.POST)  # 2
        # Validate the form
        if form.is_valid():  # 3
            # If the form is valid, perform some kind of
            # operation, for example sending a message
            send_message(
                form.cleaned_data['name'],
                form.cleaned_data['message']
            )
            # After the operation was successful,
            # redirect to some other page
            return redirect('/success/')  # 4
    else:  # 5
        # Create an empty form instance
        form = ContactForm()

    return render(request, 'contact_form.html', {'form': form})
```

此视图的目的是用来处理和显示用户发送消息时的联系人表单。它有几个步骤：

1. 首先，视图查看请求方法。当用户访问连接到此视图的URL时，浏览器执行GET请求
2. 如果使用POST请求调用视图，则POST发送的数据将用于实例化`ContactForm`对象
3. 如果表单有效，则将表单数据传递给`send_message()`。此函数与此上下文无关，因此此处未显示
4. 发送消息后，视图返回到URL`/SUCCESS/`的重定向。这是我们重点关注的一步。为简单起见，这里对URL进行了硬编码（后面讲如何避免这种情况）
5. 如果视图接收到一个GET请求(或者确切地说，任何一种不是POST请求的请求)，它将创建一个`ContactForm`实例并使用`django.lowcuts.ender()`来呈现`Contact_form.html`模板
6. 如果用户现在刷新页面，则只重新加载/SUCCESS/URL。如果没有重定向，重新加载页面将重新提交表单并发送另一条消息

<!-- more -->

## 幕后：HTTP重定向的工作原理

现在你知道为什么重定向有意义了，但是它们是如何工作的呢？让我们快速回顾一下，当你在Web浏览器的地址栏中输入URL时会发生什么。

### HTTP 快速入门

假设你已经创建了一个带“HelloWorld”视图的Django应用程序，该视图处理路径/hello/。如果使用django开发服务器运行应用程序，完整的 url 将是 http://127.0.0.1:8000/hello/ 。

当你在浏览器中输入该 URL 时，它将连接到IP地址为127.0.0.1的服务器的端口8000，并发送对路径 /hello/ 的 HTTP GET 请求。服务器返回 HTTP响应来回应。

HTTP 是基于文本的，因此查看客户端和服务器之间的前后通信比较容易。你可以使用命令行工具 curl 加上选项 -include 查看包括标头的完整HTTP响应，如下所示：



```sh
$ curl --include http://127.0.0.1:8000/hello/
HTTP/1.1 200 OK
Date: Sun, 01 Jul 2018 20:32:55 GMT
Server: WSGIServer/0.2 CPython/3.6.3
Content-Type: text/html; charset=utf-8
X-Frame-Options: SAMEORIGIN
Content-Length: 11

Hello World
```

HTTP 响应第一行为包含状态代码和状态信息状态行。后面跟着任意数量的 HTTP 标头。空行表示标头的结尾和响应正文的开头，正文为服务器发回的实际数据。

### HTTP 重定向状态码

重定向的响应是怎么样的呢？为简单起见，我们假设路径 /redirect/ 是经由 redirect_view() 处理，如果你访问 http://127.0.0.1:8000/redirect/ ，使用 curl 工具的话，命令行提示信息应该类似这样：



```shell
$ curl --include http://127.0.0.1:8000/redirect/
HTTP/1.1 302 Found
Date: Sun, 01 Jul 2018 20:35:34 GMT
Server: WSGIServer/0.2 CPython/3.6.3
Content-Type: text/html; charset=utf-8
Location: /redirect-success/
X-Frame-Options: SAMEORIGIN
Content-Length: 0
```

响应跟前面的例子很类似，只有少许的差别，重定向的响应：

- 返回不同的状态代码(302 VS 200)
- 包含具有相对URL的位置标头（Location: /redirect-success/）
- 以空行结尾，因为重定向响应的正文为空

主要区别在于状态码。HTTP 规范具体规定如下：

> 302(Found)状态代码指示目标资源暂时位于不同的URI下。由于有时可能会更改重定向，因此客户端应该继续为将来的请求使用有效的请求URI。服务器应在响应中生成一个位置标头字段，其中包含一个 URI 对不同 URI 的引用。客户端可以使用位置字段值进行自动重定向。[来源](https://tools.ietf.org/html/rfc7231#section-6.4)

也就是说，当服务器返回一个 302 状态码，它的意思是告诉客户端：“嘿，此刻，您正在寻找的东西可以在另一个位置找到”。

规范中的一个关键短语是“可以使用位置字段值进行自动重定向”。这意味着您不能强制客户端加载另一个URL。客户端可以选择等待用户确认，也可以决定根本不加载URL。

现在你已经了解了，重定向只是一个带有3xx状态代码和位置标头的HTTP响应。关键点是，HTTP重定向类似于通常的HTTP响应，但具有空主体、3xx状态代码和位置标头。要理解的就这么多，下面我们回到 Django 中，首先了解3xx状态码中的两种重定向，并了解它们在 Web 开发中的重要性。

### 临时与永久重定向

HTTP标准指定了多个重定向状态代码，所有代码都在3xx范围内。两个最常见的状态代码是 301（永久重定向）和 302（Found/发现）。

状态码302表示临时重定向。临时重定向是指：“此刻，你正在寻找的东西可以在另一个地址找到”。把它想象成一个商店的标志，上面写着：“我们的商店目前因装修而关闭。请到我们拐角处的另一家店”。由于这只是暂时的，所以下次购物时还是要检查原来的地址。

> 注意：在 HTTP1.0 规范中，状态代码302的说明是临时重定向。HTTP 1.1中已更改为 Found 。

顾名思义，永久重定向应该是永久的。永久重定向会告诉浏览器：“你要查找的内容不再位于此地址。它现在这个新地址上，再也不会在老地址上了”。永久重定向就像商店的标牌，上面写着“我们搬家了，我们的新店就在拐角处”。这个变化是永久性的，所以下次你想去商店的时候，你可以直接去新的地址。

> 注意：永久重定向可能会产生一些意想不到的后果。在使用永久重定向之前请完成本指南，或者跳到“永久重定向是永久的”一节了解。

浏览器在处理重定向时的行为大致差不多：当URL返回永久重定向响应时，此响应将被缓存。下一次浏览器遇到旧URL时，它会记住重定向并直接请求新地址。
缓存重定向可以节省不必要的请求，并提供更好、更快的用户体验。此外，临时重定向和永久重定向之间的区别会与搜索引擎优化相关。

## Django 中的重定向

现在你知道了，重定向只是一个带有 3xx 状态代码和位置标头的 HTTP 响应。你完全可以手工从常规`HttpResponse`对象构建这样的响应：



```python
def hand_crafted_redirect_view(request):
  response = HttpResponse(status=302)
  response['Location'] = '/redirect/success/'
  return response
```

这个在技术上是可行的，但它涉及到相当多的输入。

### HTTPResponseRedirect 类

使用 HttpResponseRedirect 类可以帮助我们减少输入, 它是 HttpResponse 的一个子类。 你只需要把需要重定向的 URL 作为第一个参数生成实例，初始化时会正确地匹配状态码和报文地址头：



```python
def redirect_view(request):
  return HttpResponseRedirect('/redirect/success/')
```

在命令行中使用 HttpResponseRedirect 类的演示：



```python
>>> from django.http import HttpResponseRedirect
>>> redirect = HttpResponseRedirect('/redirect/success/')
>>> redirect.status_code
302
>>> redirect['Location']
'/redirect/success/'
```

还有一个用于永久重定向的类：HttpResponsePermanentRedirect 名字很直观。它的工作原理与 HttpResponseRedirect 相同，唯一的区别是它的状态代码为301(永久移动)。

> 注意：在上面的示例中，重定向URL是硬编码的。对URL进行硬编码是一种不好的做法：如果URL发生了变化，你必须搜索所有的代码并改为正确的URL。下面我们来修复这个缺陷。

我们可以使用 django.urls.reverse() 来构建URL，但是还有一种更方便的方法。

### redirect() 函数

为了使你的工作更轻松，Django提供了你在前面简介中已经看到的通用快捷函数: django.shortcuts.redirect()。

可以使用以下命令调用此函数：

- 带有get_absolute_url()方法的模型实例或任何其他对象。
- URL或视图名称以及位置和/或关键字参数。
- URL

它将采取适当的步骤将参数转换为URL并返回`HTTPResponseRedirect`。如果传递`Permanent=True`，它将返回`HttpResponsePermanentRedirect`的实例，从而导致永久重定向。

下面有三个示例来说明不同的用法：

1. 传入模型：



```python
from django.shortcuts import redirect

def model_redirect_view(request):
    product = Product.objects.filter(featured=True).first()
    return redirect(product)
```

redirect() 将调用 product.get_absolute_url() 并将结果用作重定向目标。如果给定的类(在本例中为Product)没有 get_absolute_url() 方法，则抛出 TypeError 异常。

1. 传入URL名称和参数：



```python
from django.shortcuts import redirect

def fixed_featured_product_view(request):
    ...
    product_id = settings.FEATURED_PRODUCT_ID
    return redirect('product_detail', product_id=product_id)
```

redirect() 将尝试使用给定的参数来调换 URL。本例中假设你的 URL 模式中采用以下模式:



```python
path('/product/<product_id>/', 'product_detail_view', name='product_detail')
```

1. 传入 URL:



```python
from django.shortcuts import redirect

def featured_product_view(request):
    return redirect('/products/42/')
```

redirect() 将处理任何包含`/`或`.`的字符串。作为URL并将其用作重定向目标。

### 基于类的视图 RedirectView 重定向

如果你的视图只返回一个重定向，那么可以使用基于类的视图`django.views.generic.base.RedirectView`。

你可以通过定制 RedirectView 各种属性来满足你的需要。

如果类具有`.url`属性，则它将用作重定向URL。字符串格式占位符将被替换为URL中的命名参数：



```python
# urls.py
from django.urls import path
from .views import SearchRedirectView

urlpatterns = [
    path('/search/<term>/', SearchRedirectView.as_view())
]

# views.py
from django.views.generic.base import RedirectView

class SearchRedirectView(RedirectView):
  url = 'https://google.com/?q=%(term)s'
```

URL模式定义了一个参数，用于在`SearchRedirectView`中构建重定向URL。应用程序中的路径 `/search/kittens/` 将被重定向到 `https://google.com/?q=kittens`。

你还可以将关键字参数url传递给`urlPatterns`中的`as_view()`，而不需通过重写 `RedirectView` 子类的 url 属性来实现：



```python
#urls.py
from django.views.generic.base import RedirectView

urlpatterns = [
    path('/search/<term>/',
         RedirectView.as_view(url='https://google.com/?q=%(term)s')),
]
```

你同样可以通过重写 get_redirect_url() 来获得完全地自定义重定向行为：



```python
from random import choice
from django.views.generic.base import RedirectView

class RandomAnimalView(RedirectView):

     animal_urls = ['/dog/', '/cat/', '/parrot/']
     is_permanent = True

     def get_redirect_url(*args, **kwargs):
        return choice(self.animal_urls)
```

这个基于类的视图将重定向到从 .animal_urls 中随机选择的 URL。

`django.views.generic.base.RedirectView` 为定制提供了更多的挂钩。以下是完整的列表：

- .url

如果设置了此属性，则它应该是一个带有要重定向到的URL字符串。如果它包含像`%(name)s`这样的字符串格式占位符，它们将被传递给视图的关键字参数替代展开。

- .pattern_name

如果设置了此属性，则它应该是要重定向到的URL模式的名称。传递给视图的任何位置参数和关键字参数都用于URL模式互换。

- .permanent

如果此属性为 True，视图将返回永久重定向。默认情况下为 False。

- .query_string

如果此属性为 True，则视图将任何提供的查询字符串附加到重定向URL。如果为false(默认值)，则废弃查询字符串。

- get_redirect_url(*args, **kwargs)

此方法负责构建重定向URL。如果此方法不返回任何值，视图将返回 410 Gone 状态。

默认实现首先检查.url。它将.url视为“旧式”格式字符串，使用传递给视图的任何命名URL参数来展开任何命名格式说明符。如果未设置.url，则检查是否设置了.mode_name。如果是，它将使用它来互换它接收到的任何位置参数和关键字参数的URL。你可以通过覆盖此方法以任何方式更改该行为。只需确保它返回一个包含URL字符串。

> 注意：基于类的视图是一个强大的概念，但是比较难理解它。与常规的基于函数的视图不同，在常规的基于函数的视图中，代码流程相对简单，而基于类的视图是由混合和基类组成的复杂层次结构组成的。

要理解基于类的视图，一个很好的工具是基于类的网站视图。

通过这个简单的基于函数的视图，你可以实现从面的示例中`RandomAnimalView`的功能：



```python
from random import choice
from django.shortcuts import redirect

def random_animal_view(request):
    animal_urls = ['/dog/', '/cat/', '/parrot/']
    return redirect(choice(animal_urls))
```

正如代码，基于类的方法在增加一些隐藏的复杂性的同时并没有提供任何明显的好处。这就提出了一个问题：什么时候应该使用`RedirectView`？

如果你想在`urls.py`中直接添加重定向，那么使用`RedirectView`是有意义的。但是，如果你发现自己正在重写get_redirect_url，那么基于函数的视图可能更容易理解，并且对于未来的功能扩展也更灵活。

## 高级用法

一旦知道使用 django.shortcuts.redirect()，那么重定向到一个不同的URL就非常简单了。但是有几个高级用例并不那么明显。
通过重定向传递参数。
有时，你希望将一些参数传递给要重定向到的视图。最佳选择是在重定向URL的查询字符串中传递数据，这意味着重定向的URL类似于：`http://example.com/redirect-path/?parameter=value`
假设你希望从 some_view() 重定向到 product_view()，还要传递一个可选的参数：



```python
from django.urls import reverse
from urllib.parse import urlencode

def some_view(request):
    ...
    base_url = reverse('product_view')  # 1 /products/
    query_string =  urlencode({'category': category.id})  # 2 category=42
    url = '{}?{}'.format(base_url, query_string)  # 3 /products/?category=42
    return redirect(url)  # 4

def product_view(request):
    category_id = request.GET.get('category')  # 5
    # Do something with category_id
```

这段代码有点多，我们分步来探讨：

1. 首先，使用 django.urls.verse() 获取到 product_view() 的URL映射。
2. 接下来，你必须构建查询字符串。这是问号之后的部分。建议此时使用 urllib.urlparse.urlcode()，因为它正确处理任何特殊字符的编码。
3. 现在使用问号将 base_ur l和 query_string 连接起来。格式字符串可以很好地实现这一点。
4. 最后，将 url 传递给 django.shortcuts.redirect() 或某个重定向响应类。

在重定向目标 product_view() 中，该参数将在`request.GET`字典中可用。而参数可能会丢失，因此应使用`requests.GET.get('category')`而不是`requests.GET['category']`。当参数不存在时，前者不返回任何值，而后者将引发异常。

> 注意：请确保验证从查询字符串读取的任何数据。看起来这些数据是在你自己的控制之下，因为是你创建了重定向URL。

实际上，重定向可以被用户操作，如同任何其他的用户输入那样不能被信任。如果没有正确的验证，攻击者可能会获得未经授权的访问。

### 特殊重定向码

Django 为状态代码 301 和 302 提供 HTTP 响应类。这些应该涵盖了大多数用例，但是如果你必须返回状态代码303、307或308，那么你可以很容易地创建自己的响应类。只需简单地继承 `HttpResponseRedirectBase` 并在子类中重写`STATUS_CODE`属性：



```python
class HttpResponseTemporaryRedirect(HttpResponseRedirectBase):
    status_code = 307
```

或者，你可以使用 `django.shortcuts.redirect()` 方法来创建响应对象并更改返回值。当你有要重定向到的视图、URL或模型的名字时，此方法可行：



```python
def temporary_redirect_view(request):
    response = redirect('success_view')
    response.status_code = 307
    return response
```

> 注意：实际上还有第三个类，它的状态代码在3xx范围内：`HttpResponseNotModified`，它的状态代码304。它指示URL的内容尚未更改，客户端可以使用缓存版本。

> 有人可能会说，304并未修改响应重定向到一个URL的缓存版本，但这有点牵强。因此，它不再列在 HTTP 标准的 “重定向3xx” 部分中。

## 陷阱

### 重定向到并不会重定向的位置

django.shortcuts.redirect() 的简单性可能具有欺骗性。函数本身不执行重定向：它只返回一个重定向响应对象。你必须从视图(或在中间件中)返回此响应对象。否则，不会产生重定向。

但是，即使你知道仅仅调用 redirect() 是不够的，也很容易进行简单的重构时将此错误引入工作的应用程序中。这里有一个例子来说明这一点。

假设我们正在构建一个商店，并且有一个负责显示产品的视图。如果产品不存在，则重定向到主页：



```python
def product_view(request, product_id):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return redirect('/')
    return render(request, 'product_detail.html', {'product': product})
```

现在，你需要添加第二个视图来显示产品的客户评论。如果产品不存在它还应该重定向到主页，因此作为第一步，你可以将此功能从 product_view() 提取到辅助函数 get_product_or_redirect() 中：



```python
def get_product_or_redirect(product_id):
    try:
        return Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return redirect('/')

def product_view(request, product_id):
    product = get_product_or_redirect(product_id)
    return render(request, 'product_detail.html', {'product': product})
```

不幸的是，在重构之后，重定向不再起作用。
redirect() 的结果是从 get_product_or_redirect() 返回的，但 product_view() 不没有返回它。它将被传递给模板。根据在 product_detail.html模板中使用 product 变量的方式，这可能不会导致错误消息，而只是显示空值。

### 重定向循环

在处理重定向时，你可能会意外地创建一个重定向循环，方法是让URL A返回指向URL B的重定向，而URL B返回到URL A的重定向，以此类推。大多数HTTP客户端检测到这种重定向循环，并在多次请求后显示错误消息。

不幸的是，这种错误可能很难发现，因为服务器端的一切看起来都很好。除非你的用户抱怨此问题，否则唯一可能出现问题的迹象是，你收到了来自一个客户端的多个请求，这些请求都会导致快速连续的重定向响应，但没有一个状态为200 OK的响应。

以下是重定向循环的一个简单示例：



```python
def a_view(request):
    return redirect('another_view')

def another_view(request):
    return redirect('a_view')
```

这个例子说明了原理，但过于简单化了。在现实生活中遇到的重定向循环可能更难发现。让我们来看一个更详细的例子：



```python
def featured_products_view(request):
    featured_products = Product.objects.filter(featured=True)
    if len(featured_products == 1):
        return redirect('product_view', kwargs={'product_id': featured_products[0].id})
    return render(request, 'featured_products.html', {'product': featured_products})

def product_view(request, product_id):
    try:
        product = Product.objects.get(pk=product_id, in_stock=True)
    except Product.DoesNotExist:
        return redirect('featured_products_view')
    return render(request, 'product_detail.html', {'product': product})
```

featured_products_view() 获取所有特定的产品，也就是说，Product 实例的 .featured 属性被设置为True。如果只有一个特定产品存在，它将直接重定向到 product_view()。否则，它将用 featured_products 查询集渲染一个模板。

product_view 与上一节看起来很相似，但它有两个微小的区别：

- 该视图试图获取一个库存产品，将`.in_stock`设置为`True`来指示该产品。
- 如果没有产品库存，视图将重定向到 featured_products_view()。

这种逻辑工作的不错，直到你的商店成为自己成功的牺牲品，而你目前拥有的某种特色产品脱销为止。如果你将`.in_stock`设置为 False，但忘记将`.featured`也设置为False，那么任何访问 feature_product_view() 的访问者都将被困在重定向循环中。

没有防止此类错误的万全方法，一个好的起点是检查要重定向到的视图是否使用了重定向本身。

### 永久重定向是永久的

永久重定向可能类似于糟糕的纹身：在当时，它们可能看起来是个好主意，但一旦你意识到它们是一个错误，就很难摆脱它们。

当浏览器收到URL的永久重定向响应时，它会无限期地缓存此响应。你将来任何时候再请求旧的 URL，浏览器都不会再费事地加载它而是直接加载新URL。

指示浏览器重新加载曾经返回过永久重定向的URL可能会非常困难。Google Chrome在缓存重定向方面尤为激进。

**为什么这会成为个问题？**

假设你希望使用 Django 构建 Web 应用程序。你可以在 [myawesomedjangowebapp.com](http://myawesomedjangowebapp.com/) 注册你的域名。作为第一步，你可以在https://myawesomedjangowebapp.com/blog/ 安装了一个博客应用程序，并构建了邮件列表。

你的站点 https://myawesomedjangowebapp.com/ 的主页仍在建设中，因此你将主页重定向到 https://myawesomedjangowebapp.com/blog/ 。之所以决定使用永久重定向，是因为听说永久重定向是缓存的，缓存会让访问变得更快，因为速度是 Google 搜索结果排名的一个因素，所以速度越快越好。

结果，你不仅是一位优秀的开发人员，而且还是一位才华横溢的作家。你的博客变得流行起来，你创建的邮件列表也不断增长。几个月后，你的应用程序准备就绪。它现在有了一个闪亮的主页，你决定移除重定向。

你发送一封带有特殊折扣码的通知电子邮件到你已经相当大的运营邮件列表。你靠坐在电脑前，等待注册通知的滚动。

可怕的是，你邮箱里充满了困惑的访问者发来的信息，他们想要访问你的应用程序，但总是被重定向到你的博客。

什么情况？当你的博客读者访问 https://myawesomedjangowebapp.com/ 时，重定向仍然处于活动状态，将会跳转到 https://myawesomedjangowebapp.com/blog/ 。因为这是一个永久的重定向，所以这个URL会缓存在他们的浏览器中。

当他们点击你发布公告邮件中的链接时，他们的浏览器不会查找你的新主页而会直接访问你的博客。此时你不是在庆祝你的项目成功启动，而是忙于指导你的用户如何通过 [chrome://net-internals](chrome://net-internals/) 来重置其浏览器的缓存。

永久重定向的永久性质也会在本地计算机上开发时给你制造麻烦。让我们回到为 myawesomedjangowebapp.com 实现永久重定向的时刻。

你启动开发服务器并打开 http://127.0.0.1:8000/ 。如预期那样，应用程序将你的浏览器访问重定向到 http://127.0.0.1:8000/blog/ 。当你对项目感到满意后，你关闭开发服务器去吃个午饭。

当你吃饱回来，准备处理一些客户端的工作，需要对主页进行一些简单的更改，因此你启动开发服务器，打开客户端，但是异常情况发生了。这是怎么回事？主页被破坏了，它现在返回404！忙碌一下午，你过了一段时间才注意到你正被重定向到项目中已经不存在的 http://127.0.0.1:8000/blog/ 。对于浏览器来说，URL http://127.0.0.1:8000/ 现在是否服务于一个完全不同的应用程序并不重要。最重要的是这个 URL 曾经返回到http://127.0.0.1:8000/blog/ 的永久重定向。

从这个故事的启示是，你计划今后不再打算再次使用的网址才安排永久重定向。永久重定向的地方，你必须意识到它们的后果。即使你确信你确实需要永久重定向，最好还是先实现临时重定向，并且只有在你100%确定一切正常工作后才切换到永久重定向。

### 未经验证的重定向可能导致安全问题

从安全的角度来看，重定向是一种相对安全的技术。攻击者无法通过重定向攻击网站。毕竟，重定向只是重定向到一个URL，这个URL攻击者只需在浏览器地址栏中键入即可。

但是，如果你使用某种类型的用户输入(如URL参数)，重定向URL时没有将其正确验证，则攻击者可能会利用此输入进行网络钓鱼攻击。这种重定向称为开放重定向或未经验证的重定向。

有一些合法的重定向到的URL用例来自用户的输入。Django的登录视图就是一个很好的例子。它接受一个URL参数Next，该参数包含用户登录后重定向到的页面的URL。要在登录后将用户重定向到其配置文件，URL可能如下所示：

https://myawesomedjangowebapp.com/login/?next=/profile/

Django确实验证了下一个参数，但是这里我们假设它没有验证下一个参数。在没有验证的情况下，攻击者可以创建URL，将用户重定向到其控制下的网站，例如：

https://myawesomedjangowebapp.com/login/?next=https://myawesomedjangowebapp.co/profile/

然后，myawesomedjangowebapp.co 网站可能会显示一条错误消息，并诱使用户再次输入他们的凭据。

避免开放重定向的最佳方法是在构建重定向URL时不使用任何用户输入。

如果不能确定重定向URL是否安全，可以使用函数 django.utils.http.is_safe_url() 对其进行验证。文档字符串很好地解释了它的用法：

> is_safe_url(url, host=None, allowed_hosts=None, require_https=False)
> 如果url是安全重定向(即不会指向其他主机并使用安全方案)，则返回True。空 url 总是返回 False。如果 require_https 为 True（默认为 False），则只有 `https` 被视为有效方案。

我们来看一些例子。

相对URL被认为是安全的：



```python
>>> # Import the function first.
>>> from django.utils.http import is_safe_url
>>> is_safe_url('/profile/')
True
```

通常认为指向其他主机的URL不安全：



```python
>>> is_safe_url('https://myawesomedjangowebapp.com/profile/')
False
```

如果在 ALLOWED_HOSTS中 提供了指向另一个主机的URL，则该URL被认为是安全的：



```python
>>> is_safe_url('https://myawesomedjangowebapp.com/profile/',
...             allowed_hosts={'myawesomedjangowebapp.com'})
True
```

如果参数 require_https 为True，则使用 http 方案的URL被视为不安全：



```python
>>> is_safe_url('http://myawesomedjangowebapp.com/profile/',
...             allowed_hosts={'myawesomedjangowebapp.com'},
...             require_https=True)
False
```

## 总结

到此终于结束了关于HTTP重定向的 Django 指南。现在你已经了解了重定向的各个方面，从HTTP协议的低级细节到Django中处理它们的高级方式。

你了解了HTTP重定向在幕后看起来如何，不同的状态代码是什么，以及永久重定向和临时重定向有何不同。这些知识并不是Django所特有的，对于任何语言的Web开发都是有价值的。

现在，你可以使用 Django 执行重定向，可以使用重定向响应类 HttpResponseRedirect 和 HttpResponsePermanentRedirect，也可以使用方便函数django.lowcuts.redirect()。你看到了一些高级用例的解决方案，并知道如何避免常见的陷阱。

如果你有任何关于HTTP重定向的问题和建议，请在下面留言，同时，祝你重定向愉快！
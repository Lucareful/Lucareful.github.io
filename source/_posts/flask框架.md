---
title: flask框架学习
categories: 
- python的web框架
tags: 
- flask
mathjax: true
---

# 基本概念

## 1.静态资源

​	一旦准备好资源，不在需要经常变化的资源.由于该资源不需要经常变化，所以可以提前准备.比如`png/jpg/css/js`等文件

## 2.动态资源

​	和静态资源相反，这种资源会经常变化.比如，我们要编写一个电商网站，我们无法预测用户在浏览商品时选择什么样的条件。
根据用户选择条件不同，我们给用户提供可供选择的商品就不同.这种资源无法提前准备。

## 3.模板文件

​	在用户搜索各种商品的时候，大家是否发现虽然大家的条件不同，但是显示商品的网页中除了那些商品信息整个网页的结构/布局几乎是一模一样的.
​	而模板文件就是网页中通用的结构构成的一个页面.这个页面中不含有任何用户需要查看的数据，当用户查询数据的时候会将最终的结果放到模板中形成用户真正需要的页面。
​	这就好比，生活中一个毛坯房可以装饰上不同的风格.我们把模板文件转化为用户真正看到的网页的过程就称为模板替换.

# 通信规范

服务器和浏览器之间通信使用HTTP协议
同理，框架和web服务器之间进行通信也需要一个协议为了简单明了，一个简单的协议（例子）：

- 1、web服务器在接收到浏览器的动态套源请求的时候会将请求报文请求切割拆分为键值对放到一个字典中
- 2、web服务器调用框架提供的方法执行框架的功能并且传给框架一个字典
- 3、框架通过字典取出用户请求根据请求产生处理状态/响应头信息/响应体
- 4、框架通过返回值将处理状态/响应头信息/响应体给服务器，完成一次动态资源请求的过程

# Flask程序运行过程

- 1.当客户端想要获取资源时，一般会通过浏览器发起HTTP请求。

- 2.此时，`Web`服务器会把来自客户端的所有请求都交给Flask程序实例

- 3.程序实例使用`Werkzeug`来做路由分发（`URL`请求和视图函数之间的对应关系）。

- 4.根据每个`URL`请求，找到具体的视图函数并进行调用。
  
  - 在`Flask`程序中，路由的实现一般是通过程序实例的装饰器实现。
  
- 5.`Flask`调用视图函数后，可以返回两种内容：
  - 字符串内容：将视图函数的返回值作为响应的内容，返回给客户端（浏览器）
  - `HTML`模版内容：获取到数据后，把数据传入`HTML`模板文件中，板引擎负责渲染`HTTP`响应数据，然后返回响应数据给客户端（浏览器）
  
  ```python
  from flask import Flask, render_template
  
  # 创建flask应用实例
  app = Flask(__name__)
  
  
  # 定义路由及是视图函数（装饰器路由）
  # 路由默认只支持GET请求方式，如需要支持别的请求需要添加
  @app.route('/', methods=['GET', "POST"])
  
  def index():
      # return "Hello Flask"z
      return render_template("index.html")
  
  if __name__ == '__main__'
      app.run()
  ```
  
  
  
# 路由传参

  ```python
  # 使用一个视图函数 来显示不同用户的订单信息
  # <>路由定义的参数，<>内需要起个名字
  # int：限定参数类型为int类型，其他的不解析
  #   -大致原理是将参数强转为int，如果成功，则可以进行路由匹配
  #   -如果参数无法转换成功，就无法匹配该路由
  @app.route('/orders/<int:order_id>')
  def get_order_id(order_id):
      print(type(order_id))
      return 'order_id %s' % order_id
  ```

  <!-- more -->

# `Jinja2`模板引擎
## 模板
    在前面的示例中，视图函数的主要作用是生成请求的响应，这是最简单的请求。实际上，视图函数有两个作用：处理业务逻辑和返回响应内容。在大型应用中，把业务逻辑和表现内容放在一起，会增加代码的复杂度和维护成本。本节学到的模板，它的作用即是承担视图函数的另一个作用，即返回响应内容。

- 模板其实是一个包含响应文本的文件，其中用占位符（变量）表示动态部分，告诉模板引擎其具体的值需要从使用的数据中获取

- 使用真实值替换变量，再返回最终得到的字符串，这个过程称为“渲染”
  
- `Flask`是使用`Jinja2`这个模板引擎来渲染模板

使用模板的好处：

  - 视图函数只负责业务逻辑和数据处理（业务逻辑方面）
  
  - 而模板则取到视图函数的数据结果进行展示（视图展示方面）
  
  - 代码结构清晰，耦合度低

## `JinJia2`
两个概念：

- `Jinja2`：是Python下一个被广泛应用的模板引擎，是由Python实现的模板语言，他的设计思想来源于`Django`的模板引擎，并扩展了其语法和一系列强大的功能，其是`Flask`内置的模板语言。

- 模板语言：是一种被设计来自动生成文档的简单文本格式，在模板语言中，一般都会把一些变量传给模板，替换模板的特定位置上预先定义好的占位变量名。

  

渲染模版函数

- `Flask`提供的`render_template `函数封装了该模板引擎

- `render_template`函数的第一个参数是模板的文件名，后面的参数都是键值对，表示模板中变量对应的真实值。

```python
@app.route('/', methods=['GET', "POST"])
def index():
    name = 'Luenci'
    return render_template("index.html", name=name)
```



## 使用方法

### 变量代码块

- 用![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427161314597.png)来表示变量名， 这种![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427161314597.png)语法叫做变量代码块

![image-20200427160426403](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427160426403.png))

- 字典和列表的使用

![image-20200427154043162](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427154043162.png)

### 控制代码块

![img](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427160633257.png)

## 过滤器

![imgs](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427160813513.png)

# Web表单
- web表单是web应用程序的基本功能。
- 它是HTML页面中负责数据采集的部件。表单有三个部分组成：表单标签、表单域、表单按钮。表单允许用户输入数据，负责HTML页面数据采集，通过表单将用户输入的数据提交给服务器。
- 在Flask中，为了处理web表单，我们一般使用`Flask-WTF`扩展，它封装了`WTForms`，并且它有验证表单数据的功能

<div class="htmledit_views" id="content_views">
                                            <div class="table-box"><table><thead><tr><th>字段对象</th>
			<th>说明</th>
		</tr></thead><tbody><tr><td>StringField</td>
			<td>文本字段</td>
		</tr><tr><td>TextAreaField</td>
			<td>多行文本字段</td>
		</tr><tr><td>PasswordField</td>
			<td>密码文本字段</td>
		</tr><tr><td>HiddenField</td>
			<td>隐藏文件字段</td>
		</tr><tr><td>DateField</td>
			<td>文本字段，值为 datetime.date 文本格式</td>
		</tr><tr><td>DateTimeField</td>
			<td>文本字段，值为 datetime.datetime 文本格式</td>
		</tr><tr><td>IntegerField</td>
			<td>文本字段，值为整数</td>
		</tr><tr><td>DecimalField</td>
			<td>文本字段，值为decimal.Decimal</td>
		</tr><tr><td>FloatField</td>
			<td>文本字段，值为浮点数</td>
		</tr><tr><td>BooleanField</td>
			<td>复选框，值为True 和 False</td>
		</tr><tr><td>RadioField</td>
			<td>一组单选框</td>
		</tr><tr><td>SelectField</td>
			<td>下拉列表</td>
		</tr><tr><td>SelectMutipleField</td>
			<td>下拉列表，可选择多个值</td>
		</tr><tr><td>FileField</td>
			<td>文件上传字段</td>
		</tr><tr><td>SubmitField</td>
			<td>表单提交按钮</td>
		</tr><tr><td>FormField</td>
			<td>把表单作为字段嵌入另一个表单</td>
		</tr><tr><td>FieldList</td>
			<td>一组指定类型的字段</td>
		</tr></tbody></table></div><h2 id="wtforms常用验证函数"><a name="t0"></a>WTForms常用验证函数</h2>
<div class="table-box"><table><thead><tr><th>验证函数</th>
			<th>说明</th>
		</tr></thead><tbody><tr><td>DataRequired</td>
			<td>确保字段中有数据</td>
		</tr><tr><td>EqualTo</td>
			<td>比较两个字段的值，常用于比较两次密码输入</td>
		</tr><tr><td>Length</td>
			<td>验证输入的字符串长度</td>
		</tr><tr><td>NumberRange</td>
			<td>验证输入的值在数字范围内</td>
		</tr><tr><td>URL</td>
			<td>验证URL</td>
		</tr><tr><td>AnyOf</td>
			<td>验证输入值在可选列表中</td>
		</tr><tr><td>NoneOf</td>
			<td>验证输入值不在可选列表中</td>
		</tr></tbody></table>

- 使用 `Flask-WTF `需要配置参数 `SECRET_KEY`

- CSRF_ENABLED是为了CSRF（跨站请求伪造）保护。 `SECRET_KEY`用来生成加密令牌，当`CSRF`激活的时候，该设置会根据设置的密匙生成加密令牌。
  

```python
# 设置密匙
app.secret_key = 'luenci'

@app.route('/login.html', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        # 获取表单的数据
        username = request.form.get('username')
        password = request.form.get('password')
        print(username, password)
        if username == '':
            flash('请填写邮箱')	
        elif password == '':
            flash('请设置密码')
        else:
            return 'sucess'
    return render_template("login_demo.html")
```

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427161032568.png)

## `Flask-WTF`实现表单

```python
from flask_wtf import FlaskForm
# 导入文本字段，密码字段，和提交按钮
from wtforms import StringField, PasswordField, SubmitField

# 创建表单类
class LoginFrom(FlaskForm):
    username = StringField("用户名")
    password1 = PasswordField("密码")
    password2 = PasswordField("确认密码")
    submit = SubmitField("提交")


@app.route('/form', methods=["GET", "POST"])
def form_demo():
    # 创建表单实例
    form_login = LoginFrom()
    return render_template("login_demo.html", form=form_login)
```

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200427161047472.png)


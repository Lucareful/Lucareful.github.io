---
title: Django的QuerySet详解
categories: 
- python的web框架
tags: 
- QuerySet集合
---

从数据库中查询出来的结果一般是一个集合，这个集合叫做 QuerySet。

# 一、QuerySet何时被提交

- 在内部，创建、过滤、切片和传递一个QuerySet不会真实操作数据库，在你对查询集提交之前，不会发生任何实际的数据库操作。可以使用下列方法对QuerySet提交查询操作：

## 迭代

- QuerySet是可迭代的，在首次迭代查询集时执行实际的数据库查询。 例如， 下面的语句会将数据库中所有Entry的headline打印出来：

```python 
for e in Entry.objects.all():
	print(e.headline)
```

- 切片：如果使用切片的”step“参数，Django 将执行数据库查询并返回一个列表。

## Pickling/缓存

- repr()

- len()：当你对QuerySet调用len()时， 将提交数据库操作。

- list()：对QuerySet调用list()将强制提交操作entry_list = list(Entry.objects.all())

- bool()

  - 测试布尔值，像这样：

  - ```python
    if Entry.objects.filter(headline="Test"):
      print("There is at least one Entry with the headline Test")
    ```

注：如果你需要知道是否存在至少一条记录（而不需要真实的对象），使用exists() 将更加高效。

# 二、QuerySet

下面是对于QuerySet的正式定义：

- class QuerySet(model=None, query=None, using=None)[source]

QuerySet类具有两个公有属性用于内省：

- ordered：如果QuerySet是排好序的则为True，否则为False。
- db：如果现在执行，则返回使用的数据库。

<!--more-->

# 三、返回新QuerySets的API

- 以下的方法都将返回一个新的QuerySets。重点是加粗的几个API，其它的使用场景很少。

## **方法名 解释**

- filter() 过滤查询对象。

- exclude() 排除满足条件的对象
- annotate() 使用聚合函数
- order_by() 对查询集进行排序
- reverse() 反向排序
- distinct() 对查询集去重
- values() 返回包含对象具体值的字典的QuerySet
- values_list() 与values()类似，只是返回的是元组而不是字典。
- dates() 根据日期获取查询集
- datetimes() 根据时间获取查询集
- none() 创建空的查询集
- all() 获取所有的对象
- union() 并集
- intersection() 交集
- difference() 差集
- select_related() 附带查询关联对象
- prefetch_related()预先查询
- extra() 附加SQL查询
- defer() 不加载指定字段
- only() 只加载指定的字段
- using() 选择数据库
- select_for_update()锁住选择的对象，直到事务结束。
- raw() 接收一个原始的SQL查询

### 1. filter()

`filter(**kwargs)`

- 返回满足查询参数的对象集合。

- 查找的参数（**kwargs）应该满足下文字段查找中的格式。多个参数之间是和AND的关系。

### 2. exclude()

`exclude(**kwargs)`

- 返回一个新的`QuerySet`，它包含`不满足给定的查找参数的对象`。

- 查找的参数（**kwargs）应该满足下文字段查找中的格式。多个参数通过`AND连接`，然后所有的内容放入`NOT() `中。

```python
# 下面的示例排除所有pub_date晚于2005-1-3且headline为“Hello” 的记录：

Entry.objects.exclude(pub_date__gt=[datetime.date](2005, 1, 3), headline='Hello')

# 下面的示例排除所有pub_date晚于2005-1-3或者headline 为“Hello” 的记录：

Entry.objects.exclude(pub_date__gt=[datetime.date](2005, 1, 3)).exclude(headline='Hello')
```

### 3. annotate()

`annotate(args, *kwargs)`

- 使用提供的聚合表达式查询对象。

- 表达式可以是简单的值、对模型（或任何关联模型）上的字段的引用或者聚合表达式（`平均值、总和等`）。

- annotate()的每个参数都是一个annotation，它将添加到返回的QuerySet每个对象中。

- 关键字参数指定的Annotation将使用关键字作为Annotation 的别名。 匿名参数的别名将基于聚合函数的名称和模型的字段生成。 只有引用单个字段的聚合表达式才可以使用匿名参数。 其它所有形式都必须用关键字参数。

```python
# 例如，如果正在操作一个Blog列表，你可能想知道每个Blog有多少Entry：

>>> from django.db.models import Count

>>> q = Blog.objects.annotate(Count('entry'))

# The name of the first blog

>>> q[0].name

'Blogasaurus'

# The number of entries on the first blog

>>> q[0].entry__count
42

# Blog模型本身没有定义entry__count属性，但是通过使用一个关键字参数来指定聚合函数，可以控制Annotation的名称：

>>> q = Blog.objects.annotate(number_of_entries=Count('entry'))

# The number of entries on the first blog, using the name provided

>>> q[0].number_of_entries

42
```

### 4. order_by()

`order_by(*fields)`

- 默认情况下，根据模型的Meta类中的ordering属性对QuerySet中的对象进行排序

`Entry.objects.filter(pub_date__year=2005).order_by('-pub_date', 'headline')`

- 上面的结果将按照pub_date降序排序，然后再按照headline升序排序。"-pub_date"前面的负号表示降序顺序。 升序是默认的。 要随机排序，使用"?"，如下所示：

- Entry.objects.order_by('?')

> 注：order_by('?')可能耗费资源且很慢，这取决于使用的数据库。

- 若要按照另外一个模型中的字段排序，可以使用查询关联模型的语法。即通过字段的名称后面跟两个下划线（__），再加上新模型中的字段的名称，直到希望连接的模型。 像这样：

- Entry.objects.order_by('blog__name', 'headline')

- 如果排序的字段与另外一个模型关联，Django将使用关联的模型的默认排序，或者如果没有指定Meta.ordering将通过关联的模型的主键排序。 例如，因为Blog模型没有指定默认的排序：

- Entry.objects.order_by('blog')

与以下相同：

`Entry.objects.order_by('blog__id')`

- 如果Blog设置了ordering = ['name']，那么第一个QuerySet将等同于：

- Entry.objects.order_by('blog__name')

- 还可以通过调用表达式的`desc()`或者`asc()`方法：

- Entry.objects.order_by(Coalesce('summary', 'headline').desc())

考虑下面的情况，指定一个多值字段来排序（例如，一个ManyToManyField 字段或者ForeignKey 字段的反向关联）：

```python
class Event(Model):

parent = models.ForeignKey(

'self',

on_delete=models.CASCADE,

related_name='children',

)

date = models.DateField()

Event.objects.order_by('children__date')
```

- 在这里，每个Event可能有多个排序数据；具有多个children的每个Event将被多次返回到order_by()创建的新的QuerySet中。 换句话说，用order_by()方法对QuerySet对象进行操作会返回一个扩大版的新QuerySet对象。因此，使用多值字段对结果进行排序时要格外小心。

- 没有方法指定排序是否考虑大小写。 对于大小写的敏感性，Django将根据数据库中的排序方式排序结果。

- 可以通过Lower将一个字段转换为小写来排序，它将达到大小写一致的排序：

- `Entry.objects.order_by(Lower('headline').desc())`

- 可以通过检查QuerySet.ordered属性来知道查询是否是排序的。

- 每个`order_by()`都将清除前面的任何排序。 例如下面的查询将按照pub_date排序，而不是headline：

- `Entry.objects.order_by('headline').order_by('pub_date')`

### 5. reverse()

`reverse()`

- 反向排序QuerySet中返回的元素。 第二次调用reverse()将恢复到原有的排序。

- 如要获取QuerySet中最后五个元素，可以这样做：

- my_queryset.reverse()[:5]

- 这与Python直接使用负索引有点不一样。 `Django不支持负索引，只能曲线救国`。

### 6. distinct()

`distinct(*fields)`

- 去除查询结果中重复的行。

- 默认情况下，QuerySet不会去除重复的行。当查询跨越多张表的数据时，QuerySet可能得到重复的结果，这时候可以使用`distinct()`进行去重。

### 7. values()

`values(fields, *expressions)`

- 返回一个包含数据的字典的queryset，而不是模型实例。

- 每个字典表示一个对象，键对应于模型对象的属性名称。

下面的例子将values() 与普通的模型对象进行比较：

```python
# 列表中包含的是Blog对象

>>> Blog.objects.filter(name__startswith='Beatles')

<QuerySet [<Blog: Beatles Blog>]>

# 列表中包含的是数据字典

>>> Blog.objects.filter(name__startswith='Beatles').values()

<QuerySet [{'id': 1, 'name': 'Beatles Blog', 'tagline': 'All the latest Beatles news.'}]>

该方法接收可选的位置参数*fields，它指定values()应该限制哪些字段。如果指定字段，每个字典将只包含指定的字段的键/值。如果没有指定字段，每个字典将包含数据库表中所有字段的键和值。

例如：

>>> Blog.objects.values()

<QuerySet [{'id': 1, 'name': 'Beatles Blog', 'tagline': 'All the latest Beatles news.'}]>

>>> Blog.objects.values('id', 'name')

<QuerySet [{'id': 1, 'name': 'Beatles Blog'}]>


values()方法还有关键字参数**expressions，这些参数将传递给annotate()：


>>> from django.db.models.functions import Lower

>>> Blog.objects.values(lower_name=Lower('name'))

<QuerySet [{'lower_name': 'beatles blog'}]>


在values()子句中的聚合应用于相同values()子句中的其他参数之前。 如果需要按另一个值分组，请将其添加到较早的values()子句中。 像这样：


>>> from django.db.models import Count

>>> Blog.objects.values('author', entries=Count('entry'))

<QuerySet [{'author': 1, 'entries': 20}, {'author': 1, 'entries': 13}]>

>>> Blog.objects.values('author').annotate(entries=Count('entry'))

<QuerySet [{'author': 1, 'entries': 33}]>

注意：
如果你有一个字段foo是一个ForeignKey，默认的foo_id参数返回的字典中将有一个叫做foo 的键，因为这是保存实际值的那个隐藏的模型属性的名称。 当调用foo_id并传递字段的名称，传递foo 或values()都可以，得到的结果是相同的。像这样：

>>> Entry.objects.values()

<QuerySet [{'blog_id': 1, 'headline': 'First Entry', ...}, ...]>

>>> Entry.objects.values('blog')

<QuerySet [{'blog': 1}, ...]>

>>> Entry.objects.values('blog_id')

<QuerySet [{'blog_id': 1}, ...]>

当values()与distinct()一起使用时，注意排序可能影响最终的结果。
如果values()子句位于extra()调用之后，extra()中的select参数定义的字段必须显式包含在values()调用中。 values( 调用后面的extra( 调用将忽略选择的额外的字段。在values()之后调用only()和defer()不太合理，所以将引发一个NotImplementedError。可以通过ManyToManyField、ForeignKey 和 OneToOneFiel 属性反向引用关联的模型的字段：

>>> Blog.objects.values('name', 'entry__headline')

<QuerySet [{'name': 'My blog', 'entry__headline': 'An entry'},{'name': 'My blog', 'entry__headline': 'Another entry'}, ...]>
```



### 8. values_list()

`values_list(*fields, flat=False)`

- 与values()类似，只是在迭代时返回的是元组而不是字典。每个元组包含传递给values_list()调用的相应字段或表达式的值，因此第一个项目是第一个字段等。 像这样：

```python
>>> Entry.objects.values_list('id', 'headline')

<QuerySet [(1, 'First entry'), ...]>

>>> from django.db.models.functions import Lower

>>> Entry.objects.values_list('id', Lower('headline'))

<QuerySet [(1, 'first entry'), ...]>
```

- 如果只传递一个字段，还可以传递`flat`参数。 如果为True，它表示返回的结果为单个值而不是元组。 如下所示：

```python
>>> Entry.objects.values_list('id').order_by('id')

<QuerySet[(1,), (2,), (3,), ...]>

>>> Entry.objects.values_list('id', flat=True).order_by('id')

<QuerySet [1, 2, 3, ...]>
```

- 如果有多个字段，传递flat将发生错误。

- 如果不传递任何值给values_list()，它将返回模型中的所有字段，以在模型中定义的顺序。

- 常见的情况是获取某个模型实例的特定字段值。可以使用values_list()，然后调用get()：

```python
>>> Entry.objects.values_list('headline', flat=True).get(pk=1)
'First entry'
```

- values()和values_list()都用于特定情况下的优化：检索数据子集，而无需创建模型实例。
- 注意通过ManyToManyField进行查询时的行为：

```python
>>> Author.objects.values_list('name', 'entry__headline')

<QuerySet [('Noam Chomsky', 'Impressions of Gaza'),('George Orwell', 'Why Socialists Do Not Believe in Fun'),
('George Orwell', 'In Defence of English Cooking'),('Don Quixote', None)]>

# 类似地，当查询反向外键时，对于没有任何作者的条目，返回None。

>>> Entry.objects.values_list('authors')

<QuerySet [('Noam Chomsky',), ('George Orwell',), (None,)]>
```

### 9. dates()

`dates(field, kind, order='ASC')`

- 返回一个QuerySet，表示QuerySet内容中特定类型的所有可用日期的datetime.date对象列表。
- field参数是模型的DateField的名称。 kind参数应为"year"，"month"或"day"。 结果列表中的每个datetime.date对象被截取为给定的类型。

- "year" 返回对应该field的所有不同年份值的列表。

- "month"返回字段的所有不同年/月值的列表。

- "day"返回字段的所有不同年/月/日值的列表。

- order参数默认为'ASC'，或者'DESC'。 它指定如何排序结果。

例子：

```python
>>> Entry.objects.dates('pub_date', 'year')

[[datetime.date](2005, 1, 1)]

>>> Entry.objects.dates('pub_date', 'month')

[[datetime.date](2005, 3, 1)]

>>> Entry.objects.dates('pub_date', 'day')

[[datetime.date](2005, 3, 20)]

>>> Entry.objects.dates('pub_date', 'day', order='DESC')

[[datetime.date](2005, 2, 20)]

>>> Entry.objects.filter(headline__contains='Lennon').dates('pub_date', 'day')

[[datetime.date](2005, 3, 20)]
```

### 10. datetimes()

`datetimes(field_name, kind, order='ASC', tzinfo=None)`

- 返回QuerySet，为datetime.datetime对象的列表，表示QuerySet内容中特定种类的所有可用日期。

- field_name应为模型的DateTimeField的名称。

- kind参数应为"hour"，"minute"，"month"，"year"，"second"或"day"。

- 结果列表中的每个datetime.datetime对象被截取到给定的类型。

- order参数默认为'ASC'，或者'DESC'。 它指定如何排序结果。

- tzinfo参数定义在截取之前将数据时间转换到的时区。

### 11. none()

`none()`

- 调用none()将创建一个不返回任何对象的查询集，并且在访问结果时不会执行任何查询。

```python
例子：

>>> Entry.objects.none()

<QuerySet []>

>>> from django.db.models.query import EmptyQuerySet

>>> isinstance(Entry.objects.none(), EmptyQuerySet)

True
```

### 12. all()

`all()`

- 返回当前QuerySet（或QuerySet子类）的副本。通常用于获取全部QuerySet对象。

### 13. union()

`union(*other_qs, all=False)`

- Django中的新功能1.11。也就是集合中并集的概念！

- 使用SQL的UNION运算符组合两个或更多个QuerySet的结果。例如：

`qs1.union(qs2, qs3)`

- 默认情况下，UNION操作符仅选择不同的值。 要允许重复值，请使用all=True参数。

### 14. intersection()

- intersection(*other_qs)

- Django中的新功能1.11。也就是集合中`交集`的概念！

- 使用SQL的INTERSECT运算符返回两个或更多个QuerySet的共有元素。例如：

`qs1.intersection(qs2, qs3)`

### 15. difference()

`difference(*other_qs)`

- Django中的新功能1.11。也就是集合中`差集`的概念！

- 使用SQL的EXCEPT运算符只保留QuerySet中的元素，但不保留其他QuerySet中的元素。例如：

`qs1.difference(qs2, qs3)`

### 16. select_related()

`select_related(*fields)`

- 沿着外键关系查询关联的对象的数据。这会生成一个复杂的查询并引起性能的损耗，但是在以后使用外键关系时将不需要再次数据库查询。

- 下面的例子解释了普通查询和select_related()查询的区别。 下面是一个标准的查询：

```python
# 访问数据库。

e = Entry.objects.get(id=5)

# 再次访问数据库以得到关联的Blog对象。

b = [e.blog]

下面是一个select_related查询：

# 访问数据库。

e = Entry.objects.select_related('blog').get(id=5)

# 不会访问数据库，因为e.blog已经在前面的查询中获得了。

b = [e.blog]

select_related()可用于objects任何的查询集：

from django.utils import timezone

# Find all the blogs with entries scheduled to be published in the future.

blogs = set()

for e in Entry.objects.filter(pub_date__gt=[timezone.now]()).select_related('blog'):

# 没有select_related()，下面的语句将为每次循环迭代生成一个数据库查询,以获得每个entry关联的blog。

blogs.add([e.blog])

filter()和select_related()的顺序不重要。 下面的查询集是等同的：

Entry.objects.filter(pub_date__gt=[timezone.now].select_related('blog')

Entry.objects.select_related('blog').filter(pub_date__gt=[timezone.now]())
```

可以沿着外键查询。 如果有以下模型：

```text
from django.db import models
class City(models.Model):
    # ...
    pass
class Person(models.Model):
    # ...
    hometown = models.ForeignKey(
        City,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
class Book(models.Model):
    # ...
    author = models.ForeignKey(Person, on_delete=models.CASCADE)
```

调用Book.objects.select_related('author__hometown').get(id=4)将缓存相关的Person 和相关的City：

```python
b = Book.objects.select_related('author__hometown').get(id=4)

p = [b.author] # Doesn't hit the database.

c = p.hometown # Doesn't hit the database.

b = Book.objects.get(id=4) # No select_related() in this example.

p = [b.author] # Hits the database.

c = p.hometown # Hits the database.
```

- 在传递给select_related()的字段中，可以使用`任何ForeignKey`和`OneToOneField`。

- 在传递给select_related()的字段中，还可以反向引用OneToOneField。也就是说，可以回溯到定义OneToOneField 的字段。 此时，可以使用关联对象字段的related_name，而不要指定字段的名称。

### 17. prefetch_related()

`prefetch_related(*lookups)`

- 在单个批处理中自动检索每个指定查找的相关对象。

- 与select_related类似，但是策略是完全不同的。

假设有这些模型：

```text
from django.db import models
class Topping(models.Model):
    name = models.CharField(max_length=30)
class Pizza(models.Model):
    name = models.CharField(max_length=50)
    toppings = models.ManyToManyField(Topping)
    def __str__(self):              # __unicode__ on Python 2
        return "%s (%s)" % (
            self.name,
            ", ".join(topping.name for topping in self.toppings.all()),
        )
```

并运行：

```python
>>> Pizza.objects.all()

["Hawaiian (ham, pineapple)", "Seafood (prawns, smoked salmon)"
```

- 问题是每次QuerySet要求Pizza.objects.all()查询数据库，因此`self.toppings.all()`将在`Pizza Pizza.__str__()`中的每个项目的`Toppings`表上运行查询。

- 可以使用prefetch_related减少为只有两个查询：

`Pizza.objects.all().prefetch_related('toppings')`

- 这意味着现在每次`self.toppings.all()`被调用，不会再去数据库查找，而是在一个预取的QuerySet缓存中查找。

- 还可以使用正常连接语法来执行相关字段的相关字段。 假设在上面的例子中增加一个额外的模型：

```python
class Restaurant(models.Model):

	pizzas = models.ManyToManyField(Pizza, related_name='restaurants')

	best_pizza = models.ForeignKey(Pizza, related_name='championed_by')
```

以下是合法的：

`Restaurant.objects.prefetch_related('pizzas__toppings')`

- 这将预取所有属于餐厅的比萨饼，和所有属于那些比萨饼的配料。 这将导致总共3个查询 - 一个用于餐馆，一个用于比萨饼，一个用于配料。

` Restaurant.objects.prefetch_related('best_pizza__toppings')`

- 这将获取最好的比萨饼和每个餐厅最好的披萨的所有配料。 这将在3个表中查询 - 一个为餐厅，一个为“最佳比萨饼”，一个为配料。

- 当然，也可以使用best_pizza来获取select_related关系，以将查询数减少为2：

`Restaurant.objects.select_related('best_pizza').prefetch_related('best_pizza__toppings')`

### 18. extra()

`extra(select=None, where=None, params=None, tables=None, order_by=None, select_params=None)`

- 有些情况下，Django的查询语法难以简单的表达复杂的WHERE子句，对于这种情况,可以在`extra()`生成的SQL从句中注入新子句。使用这种方法作为最后的手段，这是一个旧的API，在将来的某个时候可能被弃用。仅当无法使用其他查询方法表达查询时才使用它。

例如：

```python
qs.extra(
	select={'val': "select col from sometable where othercol = %s"},
	select_params=(someparam,),
 )
```

相当于：

`qs.annotate(val=RawSQL("select col from sometable where othercol = %s", (someparam,)))`

### 19. defer()

`defer(*fields)`

- 在一些复杂的数据建模情况下，模型可能包含大量字段，其中一些可能包含大尺寸数据（例如文本字段），将它们转换为Python对象需要花费很大的代价。

- 当最初获取数据时不知道是否需要这些特定字段的情况下，如果正在使用查询集的结果，可以告诉Django不要从数据库中检索它们。

- 通过传递字段名称到defer()实现不加载：

`Entry.objects.defer("headline", "body")`

- 具有延迟加载字段的查询集仍将返回模型实例。

- 每个延迟字段将在你访问该字段时从数据库中检索（每次只检索一个，而不是一次检索所有的延迟字段）。

- 可以多次调用defer()。 每个调用都向延迟集添加新字段：

#### 延迟body和headline两个字段。

`Entry.objects.defer("body").filter(rating=5).defer("headline")`

- 字段添加到延迟集的顺序无关紧要。对已经延迟的字段名称再次defer()没有问题（该字段仍将被延迟）。

- 可以使用标准的双下划线符号来分隔关联的字段，从而加载关联模型中的字段：

`Blog.objects.select_related().defer("entry__headline", "entry__body")`

- 如果要清除延迟字段集，将None作为参数传递到defer()：

#### 立即加载所有的字段。

- my_queryset.defer(None)

- defer()方法（及其兄弟，only()）仅适用于高级用例，它们提供了数据加载的优化方法。

### 20. only()

`only(*fields)`

- only()方法与defer()相反。

- 如果有一个模型几乎所有的字段需要延迟，使用only()指定补充的字段集可以使代码更简单。

- 假设有一个包含字段biography、age和name的模型。 以下两个查询集是相同的，就延迟字段而言：
  - Person.objects.defer("age", "biography")
  - Person.objects.only("name")

每当你调用only()时，它将替换立即加载的字段集。因此，对only()的连续调用的结果是只有最后一次调用的字段被考虑：

```python
# This will defer all fields except the headline.

Entry.objects.only("body", "rating").only("headline")

由于defer()以递增方式动作（向延迟列表中添加字段），因此你可以结合only()和defer()调用：

# Final result is that everything except "headline" is deferred.

Entry.objects.only("headline", "body").defer("body")

# Final result loads headline and body immediately (only() replaces any

# existing set of fields).

Entry.objects.defer("body").only("headline", "body")
```

当对具有延迟字段的实例调用save()时，仅保存加载的字段。

### 21. using()

`using(alias)`

- 如果正在使用多个数据库，这个方法用于指定在哪个数据库上查询QuerySet。方法的唯一参数是数据库的别名，定义在DATABASES。

例如：

```python
# queries the database with the 'default' alias.

>>> Entry.objects.all()

# queries the database with the 'backup' alias

>>> Entry.objects.using('backup')
```

### 22. select_for_update()

`select_for_update(nowait=False, skip_locked=False)`

- 返回一个锁住行直到事务结束的查询集，如果数据库支持，它将生成一个SELECT ... FOR UPDATE语句。

例如：

`entries = Entry.objects.select_for_update().filter(author=request.user)`

- 所有匹配的行将被锁定，直到事务结束。这意味着可以通过锁防止数据被其它事务修改。

- 一般情况下如果其他事务锁定了相关行，那么本查询将被阻塞，直到锁被释放。使用select_for_update(nowait=True)将使查询不阻塞。如果其它事务持有冲突的锁,那么查询将引发DatabaseError异常。也可以使用select_for_update(skip_locked=True)忽略锁定的行。nowait和skip_locked是互斥的。

- 目前，postgresql，oracle和mysql数据库后端支持select_for_update()。但是，MySQL不支持nowait和skip_locked参数。

### 23. raw()

raw(raw_query, params=None, translations=None)

接收一个原始的SQL查询，执行它并返回一个django.db.models.query.RawQuerySet实例。

这个RawQuerySet实例可以迭代，就像普通的QuerySet一样。

# 四、不返回QuerySets的API

- 以下的方法不会返回QuerySets，但是作用非常强大，尤其是粗体显示的方法，需要背下来。

## **方法名 解释**

get() 获取单个对象

create() 创建对象，无需save()

get_or_create() 查询对象，如果没有找到就新建对象

update_or_create() 更新对象，如果没有找到就创建对象

bulk_create()

批量创建对象

count() 统计对象的个数

in_bulk()

根据主键值的列表，批量返回对象

iterator()

获取包含对象的迭代器

latest() 获取最近的对象

earliest() 获取最早的对象

first() 获取第一个对象

last() 获取最后一个对象

aggregate() 聚合操作

exists() 判断queryset中是否有对象

update() 批量更新对象

delete() 批量删除对象

as_manager() 获取管理器

### 1. get()

`get(**kwargs)`

- 返回按照查询参数匹配到的单个对象，参数的格式应该符合Field lookups的要求。

- 如果匹配到的对象个数不只一个的话，触发MultipleObjectsReturned异常

- 如果根据给出的参数匹配不到对象的话，触发DoesNotExist异常。例如：

`Entry.objects.get(id='foo') # raises Entry.DoesNotExist`

- DoesNotExist异常从django.core.exceptions.ObjectDoesNotExist继承，可以定位多个DoesNotExist异常。 例如：

```python
from django.core.exceptions import ObjectDoesNotExist

try:
	e = Entry.objects.get(id=3)
	b = Blog.objects.get(id=1)
except ObjectDoesNotExist:
	print("Either the entry or blog doesn't exist.")
```

- 如果希望查询器只返回一行，则可以使用get()而不使用任何参数来返回该行的对象：

`entry = Entry.objects.filter(...).exclude(...).get()`

### 2. create()

`create(**kwargs)`

- 在一步操作中`同时创建`并且`保存对象`的便捷方法.

`p = Person.objects.create(first_name="Bruce", last_name="Springsteen")`

等于:

`p = Person(first_name="Bruce", last_name="Springsteen")`

`p.save(force_insert=True)`

- 参数force_insert表示强制创建对象。如果model中有一个你手动设置的主键，并且这个值已经存在于数据库中, 调用create()将会失败并且触发IntegrityError因为主键必须是唯一的。如果你手动设置了主键，做好异常处理的准备。

### 3. get_or_create()

`get_or_create(defaults=None, **kwargs)`

- 通过kwargs来查询对象的便捷方法（如果模型中的所有字段都有默认值，可以为空），如果该对象不存在则创建一个新对象。

- 该方法返回一个由(object, created)组成的元组，元组中的object 是一个查询到的或者是被创建的对象， created是一个表示是否创建了新的对象的布尔值。

对于下面的代码：

```python
try:

  obj = Person.objects.get(first_name='John', last_name='Lennon')

except Person.DoesNotExist:

  obj = Person(first_name='John', last_name='Lennon', birthday=date(1940, 10, 9))

  obj.save()
```

如果模型的字段数量较大的话，这种模式就变的非常不易用了。 上面的示例可以用get_or_create()重写 :

```python
obj, created = Person.objects.get_or_create(
  first_name='John',
  last_name='Lennon',
  defaults={'birthday': date(1940, 10, 9)},
)
```

- 任何传递给get_or_create()的关键字参数，除了一个可选的defaults，都将传递给get()调用。 如果查找到一个对象，返回一个包含匹配到的对象以及False 组成的元组。 如果查找到的对象超过一个以上，将引发MultipleObjectsReturned。如果查找不到对象，get_or_create()将会实例化并保存一个新的对象，返回一个由新的对象以及True组成的元组。新的对象将会按照以下的逻辑创建:

```python
params = {k: v for k, v in kwargs.items() if '__' not in k}

params.update({k: v() if callable(v) else v for k, v in defaults.items()})

obj = self.model(**params)

obj.save()
```

- 它表示从非'defaults' 且不包含双下划线的关键字参数开始。然后将defaults的内容添加进来，覆盖必要的键，并使用结果作为关键字参数传递给模型类。

- 如果有一个名为defaults__exact的字段，并且想在get_or_create()时用它作为精确查询，只需要使用defaults，像这样：

`Foo.objects.get_or_create(defaults__exact='bar', defaults={'defaults': 'baz'})`

- 当你使用手动指定的主键时，get_or_create()方法与create()方法有相似的错误行为 。 如果需要创建一个对象而该对象的主键早已存在于数据库中，IntegrityError异常将会被触发。

- 这个方法假设进行的是原子操作，并且正确地配置了数据库和正确的底层数据库行为。如果数据库级别没有对get_or_create中用到的kwargs强制要求唯一性（unique和unique_together），方法容易导致竞态条件，可能会有相同参数的多行同时插入。（简单理解，kwargs必须指定的是主键或者unique属性的字段才安全。）

- 最后建议只在Django视图的POST请求中使用get_or_create()，因为这是一个具有修改性质的动作，不应该使用在GET请求中，那样不安全。

- 可以通过ManyToManyField属性和反向关联使用get_or_create()。在这种情况下，应该限制查询在关联的上下文内部。 否则，可能导致完整性问题。

例如下面的模型：

```python
class Chapter(models.Model):

  title = models.CharField(max_length=255, unique=True)

  class Book(models.Model):

  title = models.CharField(max_length=256)

  chapters = models.ManyToManyField(Chapter)
```

可以通过Book的chapters字段使用get_or_create()，但是它只会获取该Book内部的上下文：

```python
>>> book = Book.objects.create(title="Ulysses")

>>> book.chapters.get_or_create(title="Telemachus")

(<Chapter: Telemachus>, True)

>>> book.chapters.get_or_create(title="Telemachus")

(<Chapter: Telemachus>, False)

>>> Chapter.objects.create(title="Chapter 1")

<Chapter: Chapter 1>

>>> book.chapters.get_or_create(title="Chapter 1")

# Raises IntegrityError
```

- 发生这个错误是因为尝试通过Book “Ulysses”获取或者创建“Chapter 1”，但是它不能，因为它与这个book不关联，但因为title 字段是唯一的它仍然不能创建。

在Django1.11在defaults中增加了对可调用值的支持。

### 4. update_or_create()

`update_or_create(defaults=None, **kwargs)`

类似前面的get_or_create()。

- 通过给出的kwargs来更新对象的便捷方法， 如果没找到对象，则创建一个新的对象。defaults是一个由 (field, value)对组成的字典，用于更新对象。defaults中的值可以是可调用对象（也就是说函数等）。

- 该方法返回一个由(object, created)组成的元组,元组中的object是一个创建的或者是被更新的对象， created是一个标示是否创建了新的对象的布尔值。

- update_or_create方法尝试通过给出的kwargs 去从数据库中获取匹配的对象。 如果找到匹配的对象，它将会依据defaults 字典给出的值更新字段。

像下面的代码：

```python
defaults = {'first_name': 'Bob'}

try:

  obj = Person.objects.get(first_name='John', last_name='Lennon')

  for key, value in defaults.items():

  setattr(obj, key, value)

  obj.save()

except Person.DoesNotExist:

  new_values = {'first_name': 'John', 'last_name': 'Lennon'}

  new_values.update(defaults)

  obj = Person(**new_values)

	obj.save()
```



如果模型的字段数量较大的话，这种模式就变的非常不易用了。 上面的示例可以用update_or_create() 重写:

```python
obj, created = Person.objects.update_or_create(

first_name='John', last_name='Lennon',

defaults={'first_name': 'Bob'},

)
```



- kwargs中的名称如何解析的详细描述可以参见get_or_create()。

- 和get_or_create()一样，这个方法也容易导致竞态条件，如果数据库层级没有前置唯一性会让多行同时插入。

在Django1.11在defaults中增加了对可调用值的支持。

### 5. bulk_create()

`bulk_create(objs, batch_size=None)`

- 以高效的方式（通常只有1个查询，无论有多少对象）将提供的对象列表插入到数据库中：

```python
>>> Entry.objects.bulk_create([

... Entry(headline='This is a test'),

... Entry(headline='This is only a test'),

... ])
```

注意事项：

- 不会调用模型的save()方法，并且不会发送pre_save和post_save信号。

- 不适用于多表继承场景中的子模型。

- 如果模型的主键是AutoField，则不会像save()那样检索并设置主键属性，除非数据库后端支持。

- 不适用于多对多关系。

- batch_size参数控制在单个查询中创建的对象数。

### 6. count()

`count()`

- 返回在数据库中对应的QuerySet对象的个数。count()永远不会引发异常。

例如：

```python
# 返回总个数.

Entry.objects.count()

# 返回包含有'Lennon'的对象的总数

Entry.objects.filter(headline__contains='Lennon').count()
```



### 7. in_bulk()

`in_bulk(id_list=None)`

- 获取主键值的列表，并返回将每个主键值映射到具有给定ID的对象的实例的字典。 如果未提供列表，则会返回查询集中的所有对象。

例如：

```python
>>> Blog.objects.in_bulk([1])

{1: <Blog: Beatles Blog>}

>>> Blog.objects.in_bulk([1, 2])

{1: <Blog: Beatles Blog>, 2: <Blog: Cheddar Talk>}

>>> Blog.objects.in_bulk([])

{}

>>> Blog.objects.in_bulk()

{1: <Blog: Beatles Blog>, 2: <Blog: Cheddar Talk>, 3: <Blog: Django Weblog>}
```

- 如果向in_bulk()传递一个空列表，会得到一个空的字典。

- 在旧版本中，id_list是必需的参数，现在是一个可选参数。

### 8. iterator()

`iterator()`

- 提交数据库操作，获取QuerySet，并返回一个迭代器。

- QuerySet通常会在内部缓存其结果，以便在重复计算时不会导致额外的查询。而iterator()将直接读取结果，不在QuerySet级别执行任何缓存。对于返回大量只需要访问一次的对象的QuerySet，这可以带来更好的性能，显著减少内存使用。

> 请注意，在已经提交了的iterator()上使用QuerySet会强制它再次提交数据库操作，进行重复查询。此外，使用iterator()会导致先前的prefetch_related()调用被忽略，因为这两个一起优化没有意义。

### 9. latest()

`latest(field_name=None)`

- 使用日期字段field_name，按日期返回最新对象。

- 下例根据Entry的'pub_date'字段返回最新发布的entry：

  `Entry.objects.latest('pub_date')`

- 如果模型的Meta指定了get_latest_by，则可以将latest()参数留给earliest()或者field_name。 默认情况下，Django将使用get_latest_by中指定的字段。

- earliest()和latest()可能会返回空日期的实例,可能需要过滤掉空值：

`Entry.objects.filter(pub_date__isnull=False).latest('pub_date')`

### 10. earliest()

earliest(field_name=None)

类同latest()。

### 11. first()

`first()`

- 返回结果集的第一个对象, 当没有找到时返回None。如果QuerySet没有设置排序,则将会自动按主键进行排序。例如：

`p = Article.objects.order_by('title', 'pub_date').first()`

- first()是一个简便方法，下面的例子和上面的代码效果是一样：

```python
try:
	p = Article.objects.order_by('title', 'pub_date')[0]
except IndexError:
	p = None
```

### 12. last()

`last()`

工作方式类似first()，只是返回的是查询集中最后一个对象。

### 13. aggregate()

`aggregate(args, *kwargs)`

- 返回汇总值的字典（平均值，总和等）,通过QuerySet进行计算。每个参数指定返回的字典中将要包含的值。

- 使用关键字参数指定的聚合将使用关键字参数的名称作为Annotation 的名称。 匿名参数的名称将基于聚合函数的名称和模型字段生成。 复杂的聚合不可以使用匿名参数，必须指定一个关键字参数作为别名。

例如，想知道Blog Entry 的数目：

```python
from django.db.models import Count

q = Blog.objects.aggregate(Count('entry'))
{'entry__count': 16}
```

通过使用关键字参数来指定聚合函数，可以控制返回的聚合的值的名称：

```python
q = Blog.objects.aggregate(number_of_entries=Count('entry'))

{'number_of_entries': 16}
```

### 14. exists()

exists()

- 如果QuerySet包含任何结果，则返回True，否则返回False。

- 查找具有唯一性字段（例如primary_key）的模型是否在一个QuerySet中的最高效的方法是：

```python
entry = Entry.objects.get(pk=123)

if some_queryset.filter(pk=entry.pk).exists():

	print("Entry contained in queryset")
```

它将比下面的方法快很多，这个方法要求对QuerySet求值并迭代整个QuerySet：

```python
if entry in some_queryset:
	print("Entry contained in QuerySet")
```

若要查找一个QuerySet是否包含任何元素：

```python
if some_queryset.exists():
	print("There is at least one object in some_queryset")
将快于：
if some_queryset:
	print("There is at least one object in some_queryset")
```

### 15. update()

`update(**kwargs)`

- 对指定的字段执行批量更新操作，并返回匹配的行数（如果某些行已具有新值，则可能不等于已更新的行数）。

- 例如，要对2010年发布的所有博客条目启用评论，可以执行以下操作：

`Entry.objects.filter(pub_date__year=2010).update(comments_on=False)`

- 可以同时更新多个字段 （没有多少字段的限制）。 例如同时更新comments_on和headline字段：

`Entry.objects.filter(pub_date__year=2010).update(comments_on=False, headline='This is old')`

update()方法`无需save`操作。唯一限制是它只能更新模型主表中的列，而不是关联的模型，例如不能这样做：

`Entry.objects.update(blog__name='foo') 	# Won't work!`

仍然可以根据相关字段进行过滤：

`Entry.objects.filter(blog__id=1).update(comments_on=True)`

update()方法返回受影响的行数：

```python
Entry.objects.filter(id=64).update(comments_on=True)

1

>>> Entry.objects.filter(slug='nonexistent-slug').update(comments_on=True)

0

>>> Entry.objects.filter(pub_date__year=2010).update(comments_on=False)

132
```

如果你只是更新一下对象，不需要为对象做别的事情，最有效的方法是调用update()，而不是将模型对象加载到内存中。 例如，不要这样做：

```python
e = Entry.objects.get(id=10)

e.comments_on = False

e.save()
```

建议如下操作：

`Entry.objects.filter(id=10).update(comments_on=False)`

用update()还可以防止在加载对象和调用save()之间的短时间内数据库中某些内容可能发生更改的竞争条件。

如果想更新一个具有自定义save()方法的模型的记录，请循环遍历它们并调用save()，如下所示：

```python
for e in Entry.objects.filter(pub_date__year=2010):
  e.comments_on = False
  e.save()
```

### 16. delete()

`delete()`

- 批量删除QuerySet中的所有对象，并返回删除的对象个数和每个对象类型的删除次数的字典。

- delete()动作是立即执行的。

- 不能在QuerySet上调用delete()。

- 例如，要删除特定博客中的所有条目：

```python
b = Blog.objects.get(pk=1)

# Delete all the entries belonging to this Blog.
Entry.objects.filter(blog=b).delete()
(4, {'weblog.Entry': 2, 'weblog.Entry_authors': 2})
```



默认情况下，Django的ForeignKey使用SQL约束ON DELETE CASCADE，任何具有指向要删除的对象的外键的对象将与它们一起被删除。 像这样：

```python
blogs = Blog.objects.all()

# This will delete all Blogs and all of their Entry objects.
blogs.delete()
(5, {'weblog.Blog': 1, 'weblog.Entry': 2, 'weblog.Entry_authors': 2})
```



这种级联的行为可以通过的ForeignKey的on_delete参数自定义。（什么时候要改变这种行为呢？比如日志数据，就不能和它关联的主体一并被删除！）

delete()会为所有已删除的对象（包括级联删除）发出`pre_delete`和`post_delete`信号。

### 17. as_manager()

`classmethod as_manager()`

- 一个类方法，返回Manager的实例与QuerySet的方法的副本
---
title: Django的ORM多表操作
categories: 
- python的web框架
tags: 
- ORM
---

# ORM多表操作

## API

| 函数                 | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| all()                | 查询所有结果                                                 |
| filter(**kwargs)     | 包含了与所给筛选条件相匹配的对象                             |
| get(**kwargs)        | 返回与所给筛选条件相匹配的对象，返回结果有且只有一个， 如果符合筛选条件的对象超过一个或者没有都会抛出错误。 |
| exclude(**kwargs)    | 它包含了与所给筛选条件不匹配的对象                           |
| order_by(*field)     | 对查询结果排序 用法:order_by ("price")  `DESC` 降序          |
| reverse():           | 对查询结果反向排序                                           |
| count()              | 返回数据库中匹配查询(`QuerySet`)的对象数量                   |
| first()              | 返回第一条记录                                               |
| last()               | 返回最后一条记录                                             |
| exists()             | 如果`QuerySet`包含数据，就返回`True`，否则返回`False` 相当于`limit 1`(用途查询这个表中是否有值) |
| values(*field)       | 用法:`Book.objects.all.values(‘title’,‘price’)` 返回值是`<queryset[{‘title’:‘aa’,‘pirce’:12},{}]` |
| values_list(*field): | 用法:`Book.objects.all.values_list(‘title’,‘price’)` 返回值是`<queryset[(‘aa’,12),(‘bb’,33)]` |
| distinct()           | 从返回结果中剔除重复纪录 用法:`Book.objects.all.values(‘title’,‘price’).distinct()` 错误用法 `Book.objects.all.distinct()` 因为id不相同,其他相同,无法去重 |

## 模糊查询

```cmd
__exact 	精确等于 like ‘aaa’
__iexact 	精确等于 忽略大小写 ilike ‘aaa’
__contains  是否包含 like ‘%aaa%’
__icontains 包含 忽略大小写 ilike ‘%aaa%’，但是对于sqlite来说，contains的作用效果等同于icontains。
__gt 		大于
__gte 		大于等于
__lt 		小于
__lte 		小于等于
__in 		存在于一个list范围内
__startswith 以…开头
__istartswith 以…开头 忽略大小写
__endswith  以…结尾
__iendswith 以…结尾，忽略大小写
__range 	在…范围内
__year 		日期字段的年份
__month 	日期字段的月份
__day 		日期字段的日
__isnull=True/False
__isnull=True 与 __exact=None的区别
```

<!-- more -->

## 外键的定义

```python
# modeld.py

class Book(models.Model):
    name = models.CharField(max_length=20)
    price = models.FloatField()
    pub_date = models.DateField()
    publish = models.ForeignKey("Publish",on_delete=models.CASCADE)

class Publish(models.Model):
    name = models.CharField(max_length=32)
    city = models.CharField(max_length=32)
```

### `on_delete`的参数

- `CASCADE`:这就是默认的选项，级联删除，你无需显性指定它。
- `PROTECT`: 保护模式，如果采用该选项，删除的时候，会抛出`ProtectedError`错误。
- `SET_NULL`: 置空模式，删除的时候，外键字段被设置为空，前提就是`blank=True`, `null=True`,定义该字段的时候，允许为空。
- `SET_DEFAULT`: 置默认值，删除的时候，外键字段设置为默认值，所以定义外键的时候注意加上一个默认值。
- `SET()`: 自定义一个值，该值只能是对应的实体了
- `DO_NOTHING`:不采取行动。如果您的数据库后端强制执行参照完整性，会造成`IntegrityError`，除非您手动将SQL 约束`ON DELETE`添加到数据库字段。

## 一对多之对象查询

```python
# 通过外键实现关联查询
# 一对多： book_obj ————————————》一定是一个对象
book_obj = Book.objects.get(name="python进阶")

print(book_obj.publish)
print(book_obj.publish.name)
print(book_obj.publish.city)

# 查询出版社出版的所有书籍和价格
# 方法一
pub_obj = Publish.objects.filter(name="人民出版社")[0]
ret = Book.objects.filter(publish=pub_obj).values("name","price")

print(ret) # <QuerySet [{'name': 'linux运维', 'price': 77.0}]>

# 方法二
pub_obj = Publish.objects.filter(name="机械出版社")[0]
print(pub_obj.book_set.all())  # <QuerySet [<Book: python进阶>]>
print(type(pub_obj.book_set.all()))  # <class 'django.db.models.query.QuerySet'>

print(pub_obj.book_set.all().values("name", "price"))
```

## 多对多对象添加

```python
# 多对多添加信息
book_obj = Book.objects.get(id=2)
author_obj = Author.objects.get(id=1)
# 添加关系
book_obj.author.add(author_obj)
# 删除关系
book_obj.author.remove(author_obj)


```

## 聚合查询与分组查询

### 聚合查询:

#### `aggregate`(*args, **kwargs)

```python
#1.聚合  aggregate:返回值是一个字典
from django.db.models import Avg,Max,Min,Count
#问题:查询所有书籍的平均价格,最高价格,最低价格

ret = Book.objects.all().aggregate(avg_price=Avg('price'),max_price = Max('price'),min_price=Min('price'))
print(ret)
```

- `aggregate()`是`QuerySet` 的一个终止子句，意思是说，它返回一个包含一些键值对的字典。键的名称是聚合值的标识符，值是计算出来的聚合值。键的名称是按照字段和聚合函数的名称自动生成出来的。如果你想要为聚合值指定一个名称，可以向聚合子句提供它。

## 分组查询

### annotate(*args, **kwargs)

- 表单模型.objects.values("group by 分组字段").annotate(聚合函数('聚合字段'))

## F查询

- Django 支持 F() 对象之间以及 F() 对象和常数之间的加减乘除和取模的操作。

## Q查询

- filter() 等方法中的关键字参数查询都是一起进行“AND” 的。 如果你需要执行更复杂的查询（例如OR语句），你可以使用Q对象
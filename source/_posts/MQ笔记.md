---
title: 消息队列笔记
categories: 
- 消息队列
tags: 
- rabbitMQ
---

# 消息队列介绍

## 概念

- MQ（Message Queue，消息队列），是基础数据结构中“先进先出”的一种数据结构，是在消息的传输工程中保存消息的容器。多用于分布式系统之间进行通信等。

## MQ优势

### 应用解耦

![image-20201129132737572](https://gitee.com/luenci/RepoImg/raw/master/img/20201201225748.png)

### 异步提速

![image-20201129132904068](https://gitee.com/luenci/RepoImg/raw/master/img/20201203215946.png)

### 削峰填谷

![image-20201129132952802](https://gitee.com/luenci/RepoImg/raw/master/img/20201201225756.png)

![image-20201129133010842](https://gitee.com/luenci/RepoImg/raw/master/img/20201201225806.png)

## MQ的带来的问题

#### 系统的可用性降低

- 系统引入的外部依赖越多，系统的稳定性就越差。如果MQ宕机，整个业务就会受到影响。如何保证MQ的高可用？

#### 系统的复杂度提高

- MQ的加入大大增加了系统的复杂度，以前系统间是同步调用的，现在通过MQ进行一步调用。如何保证消息没有被重复消费？怎么处理消息地丢失情况？怎么保证消息传递的顺序性

#### 一致性问题

- A系统处理完业务，通过MQ给B、C、D三个系统发消息，如果B、C系统成功，D系统处理失败。如何保证消息数据的一致性？

## 使用MQ的场景

- 生产者不需要从消费者处获得反馈。
  - 引入消息队列之前的直接调用，其接口的返回值应该为空，即上层的请求不依赖下层返回的结果，这样也才能使异步成为可能
- 容许短暂的不一致性
- 收益性高
  - 引入MQ后系统解耦、提速、削峰等方面的收益大于管理使用MQ的成本

<!--more-->

# RabbitMQ介绍

  `AMQP`，即（Advanced Message Queuing Protocal）（高级消息队列），是一个`网络协议`，是应用层协议的一个开放标准，为面向消息的中间件设计。基于此协议的客户端和消息中间件可传递消息，并不受客户端/中间件不同产品，不同的开发语言等条件的限制。

![Publish path from publisher to consumer via exchange and queue](https://www.rabbitmq.com/img/tutorials/intro/hello-world-example-routing.png)

## RabbitMQ基础架构和组件信息

![image-20201129161016285](https://gitee.com/luenci/RepoImg/raw/master/img/20201201225820.png)

- Broker：标识消息队列服务器实体.

- Virtual Host：虚拟主机。标识一批交换机、消息队列和相关对象。虚拟主机是共享相同的身份认证和加密环境的独立服务器域。每个vhost本质上就是一个mini版的RabbitMQ服务器，拥有自己的队列、交换器、绑定和权限机制。vhost是AMQP概念的基础，必须在链接时指定，RabbitMQ默认的vhost是 /。

- Exchange：交换器，用来接收生产者发送的消息并将这些消息路由给服务器中的队列。

- Queue：消息队列，用来保存消息直到发送给消费者。它是消息的容器，也是消息的终点。一个消息可投入一个或多个队列。消息一直在队列里面，等待消费者连接到这个队列将其取走。

- Banding：绑定，用于消息队列和交换机之间的关联。一个绑定就是基于路由键将交换机和消息队列连接起来的路由规则，所以可以将交换器理解成一个由绑定构成的路由表。

- Channel：信道，多路复用连接中的一条独立的双向数据流通道。信道是建立在真实的TCP连接内地虚拟链接，AMQP命令都是通过信道发出去的，不管是发布消息、订阅队列还是接收消息，这些动作都是通过信道完成。因为对于操作系统来说，建立和销毁TCP都是非常昂贵的开销，所以引入了信道的概念，以复用一条TCP连接。

- Connection：网络连接，比如一个TCP连接。

- Publisher：消息的生产者，也是一个向交换器发布消息的客户端应用程序。

- Consumer：消息的消费者，表示一个从一个消息队列中取得消息的客户端应用程序。
- Message：消息，消息是不具名的，它是由消息头和消息体组成。消息体是不透明的，而消息头则是由一系列的可选属性组成，这些属性包括routing-key(路由键)、priority(优先级)、delivery-mode(消息可能需要持久性存储[消息的路由模式])等。

## RabbitMQ的工作模式

> 原文链接：https://www.cnblogs.com/Jeely/p/10784013.html

### 1.1simple简单模式

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181221114009759.png)

1. 消息产生着and将消息放入队列
2. 消息的消费者(consumer) 监听(while) 消息队列,如果队列中有消息,就消费掉,消息被拿走后,自动从队列中删除(隐患 消息可能没有被消费者正确处理,已经从队列中消失了,造成消息的丢失)应用场景:聊天(中间有一个过度的服务器;p端,c端)

#### 生产者代码样例

```python
import pika

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))

channel = connection.channel()
# 设置消息队列
channel.queue_declare(queue='TEST01')
# 向消息队列中发消息
channel.basic_publish(exchange='',
                      routing_key='TEST01',
                      body='Hello World I am Luenci')
print(" [x] Sent 'Hello World!'")
connection.close()
```

#### 消费者代码样例

```python
import pika

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))

channel = connection.channel()

channel.queue_declare(queue='TEST01')

def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)

channel.basic_consume(on_message_callback=callback,
                      queue='TEST01',
                      auto_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()
```

### 1.2 work工作模式(资源的竞争)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181221114036231.png)

1. **说明：**一对多模式，一个生产者，多个消费者，一个队列，每个消费者从队列中获取唯一的消息。

   有两种消息分发机制，轮询分发和公平分发：

   轮询分发的特点是将消息轮流发送给每个消费者，在实际情况中，多个消费者，难免有的处理得快，有的处理得慢，如果都要等到一个消费者处理完，才把消息发送给下一个消费者，效率就大大降低了。

   而公平分发的特点是，只要有消费者处理完，就会把消息发送给目前空闲的消费者，这样就提高消费效率了。

2. 消息产生者将消息放入队列消费者可以有多个,消费者1,消费者2,同时监听同一个队列,消息被消费? C1 C2共同争抢当前的消息队列内容,谁先拿到谁负责消费消息(隐患,高并发情况下,默认会产生某一个消息被多个消费者共同使用,可以设置一个开关(syncronize,与同步锁的性能不一样) 保证一条消息只能被一个消费者使用)

3. 应用场景:红包;大项目中的资源调度(任务分配系统不需知道哪一个任务执行系统在空闲,直接将任务扔到消息队列中,空闲的系统自动争抢)

#### 生产者

```python
#!/usr/bin/env python
import pika
import sys

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.queue_declare(queue='task_queue', durable=True)

message = ' '.join(sys.argv[1:]) or "Hello World!"
for i in range(1,10):
    channel.basic_publish(
        exchange='',
        routing_key='task_queue',
        body=message,
        properties=pika.BasicProperties(
            delivery_mode=2,  # make message persistent
        ))
    print(" [x] Sent %r" % message)
connection.close()
```

#### 消费者

```python
#!/usr/bin/env python
import pika
import time


auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.queue_declare(queue='task_queue', durable=True)
print(' [*] Waiting for messages. To exit press CTRL+C')


def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    time.sleep(body.count(b'.'))
    print(" [x] Done")
    ch.basic_ack(delivery_tag=method.delivery_tag)


# 公平分发
channel.basic_qos(prefetch_count=1)
channel.basic_consume(queue='task_queue', on_message_callback=callback)

channel.start_consuming()
```

### 1.3 publish/subscribe发布订阅(共享资源)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181221114050657.png)

1. X代表交换机rabbitMQ内部组件,erlang 消息产生者是代码完成,代码的执行效率不高,消息产生者将消息放入交换机,交换机发布订阅把消息发送到所有消息队列中,对应消息队列的消费者拿到消息进行消费
2. 相关场景:邮件群发,群聊天,广播(广告)

#### 生产者

```python

#!/usr/bin/env python
import pika
import sys

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

message = ' '.join(sys.argv[1:]) or "info: Hello World!"
channel.basic_publish(exchange='logs', routing_key='', body=message)
print(" [x] Sent %r" % message)
connection.close()
```

#### 消费者

```python

#!/usr/bin/env python
import pika

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

result = channel.queue_declare(queue='', exclusive=True)
queue_name = result.method.queue

channel.queue_bind(exchange='logs', queue=queue_name)

print(' [*] Waiting for logs. To exit press CTRL+C')


def callback(ch, method, properties, body):
    print(" [x] %r" % body)


channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()
```



### 1.4 routing路由模式

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181221114420299.png)

1. 消息生产者将消息发送给交换机按照路由判断,路由是字符串(info) 当前产生的消息携带路由字符(对象的方法),交换机根据路由的key,只能匹配上路由key对应的消息队列,对应的消费者才能消费消息;
2. 根据业务功能定义路由字符串
3. 从系统的代码逻辑中获取对应的功能字符串,将消息任务扔到对应的队列中业务场景:error 通知;EXCEPTION;错误通知的功能;传统意义的错误通知;客户通知;利用key路由,可以将程序中的错误封装成消息传入到消息队列中,开发者可以自定义消费者,实时接收错误;

#### 生产者

```python

#!/usr/bin/env python
import pika
import sys

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.exchange_declare(exchange='direct_logs', exchange_type='direct')

severity = sys.argv[1] if len(sys.argv) > 1 else 'info'
message = ' '.join(sys.argv[2:]) or 'Hello World!'

channel.basic_publish(
    exchange='direct_logs', routing_key=severity, body=message)
print(" [x] Sent %r:%r" % (severity, message))

connection.close()
```

#### 消费者

```python
#!/usr/bin/env python
import pika

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

result = channel.queue_declare(queue='', exclusive=True)
queue_name = result.method.queue

channel.queue_bind(exchange='logs', queue=queue_name)

print(' [*] Waiting for logs. To exit press CTRL+C')


def callback(ch, method, properties, body):
    print(" [x] %r" % body)


channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()
```



### 1.5 topic 主题模式(路由模式的一种)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181221114208408.png)

1. 星号井号代表通配符
2. 星号代表多个单词,井号代表一个单词
3. 路由功能添加模糊匹配
4. 消息产生者产生消息,把消息交给交换机
5. 交换机根据key的规则模糊匹配到对应的队列,由队列的监听消费者接收消息消费

#### 生产者

```python

#!/usr/bin/env python
import pika
import sys

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.exchange_declare(exchange='topic_logs', exchange_type='topic')

routing_key = sys.argv[1] if len(sys.argv) > 2 else 'anonymous.info'
message = ' '.join(sys.argv[2:]) or 'Hello World!'

channel.basic_publish(
    exchange='topic_logs', routing_key=routing_key, body=message)
print(" [x] Sent %r:%r" % (routing_key, message))

connection.close()
```



#### 消费者

```python

#!/usr/bin/env python
import pika
import sys

auth = pika.PlainCredentials('username', 'password')
connection = pika.BlockingConnection(pika.ConnectionParameters('主机名', '5672', '/', auth))
channel = connection.channel()

channel.exchange_declare(exchange='topic_logs', exchange_type='topic')

result = channel.queue_declare('', exclusive=True)
queue_name = result.method.queue

binding_keys = sys.argv[1:]
if not binding_keys:
    sys.stderr.write("Usage: %s [binding_key]...\n" % sys.argv[0])
    sys.exit(1)

for binding_key in binding_keys:
    channel.queue_bind(
        exchange='topic_logs', queue=queue_name, routing_key=binding_key)

print(' [*] Waiting for logs. To exit press CTRL+C')


def callback(ch, method, properties, body):
    print(" [x] %r:%r" % (method.routing_key, body))


channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()
```

# RabbitMQ速度提升

- 消息消费速度主要受到发送消息时间、消费者处理时间、消息Ack时间这几个时间的影响

> https://www.cnblogs.com/bossma/p/practices-on-improving-the-speed-of-rabbitmq-consumption.html

---
title: 轮询、长轮询、websocket
categories: 
- 计算机网络
tags: 
- websocket知识
mathjax: true
---

> 场景：我们使用浏览器向程序服务器发送http请求，服务器收到http请求之后会根据请求返回给用户浏览器相应的内容。如果我们想做一个服务器主动向浏览器推送消息，比如网页版qq，该怎么实现呢？

|          |           轮询(Polling)            |        长轮询(Long-Polling)        |                    Websocket                     |                sse                |
| :------: | :--------------------------------: | :--------------------------------: | :----------------------------------------------: | :-------------------------------: |
| 通信协议 |                http                |                http                |                       tcp                        |               http                |
| 触发方式 |           client(客户端)           |           client(客户端)           |          client、server(客户端、服务端)          |  client、server(客户端、服务端)   |
|   优点   |     兼容性好容错性强，实现简单     |          比短轮询节约资源          | 全双工通讯协议，性能开销小、安全性高，可扩展性强 |       实现简便，开发成本低        |
|   缺点   | 安全性差，占较多的内存资源与请求数 | 安全性差，占较多的内存资源与请求数 |   传输数据需要进行二次解析，增加开发成本及难度   |         只适用高级浏览器          |
|   延迟   |     非实时，延迟取决于请求间隔     |     非实时，延迟取决于请求间隔     |                       实时                       | 非实时，默认3秒延迟，延迟可自定义 |

## 轮询（Polling）

- 轮询是基于`http`请求而来，让浏览器（客户端）使用`ajax`（一种方法）每隔几秒钟向服务器发送`http`请求，来监听服务器上的资源消息是否有变动，而一次`http`请求都会建立`Tcp`连接，在服务端响应完成后，就会关闭这个`Tcp`连接

### 缺点

- 缺点也很明显就是非常的消耗资源，因为建立`Tcp`连接是非常消耗资源的，服务端响应完成就会关闭这个`Tcp`连接，下一次请求再次建立`Tcp`连接。

## 长轮询（Long-Polling）

- 客户端发送请求后服务器端**不会立即**返回数据，服务器端会**阻塞请求**（`pending`状态）连接不会**立即断开**，直到服务器端**有数据更新或者是连接超时**才返回，客户端才再次发出请求新建连接、如此反复从而获取最新数据。一般这个阻塞的时间间隔不会超过三十秒

### 缺点

- 缺点：连接挂起也会导致资源的浪费。

## websocket

- `WebSocket`是一种网络传输协议，可在`单个TCP`连接上进行`全双工通信`，位于OSI模型的应用层。
- WebSocket使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在`WebSocket API`中，浏览器和服务器只需要完成一次握手，两者之间就可以创建持久性的连接，并进行双向数据传输。

<!-- more-->

### 实现原理

![img](https://img2018.cnblogs.com/blog/1116722/201905/1116722-20190530152900972-1938352054.png)

#### 具体步骤

![image-20201006172841139](https://gitee.com/luenci/RepoImg/raw/master/img/image-20201006172841139.png)



```python
# websocket服务器实现

#客户端处理线程
class websocket_thread(threading.Thread):
    def __init__(self, connection, username):
        super(websocket_thread, self).__init__()
        self.connection = connection
        self.username = username
    
    def run(self):
        print 'new websocket client joined!'
        data = self.connection.recv(1024)
        headers = self.parse_headers(data)
        token = self.generate_token(headers['Sec-WebSocket-Key'])
        self.connection.send('\
HTTP/1.1 101 WebSocket Protocol Hybi-10\r\n\
Upgrade: WebSocket\r\n\
Connection: Upgrade\r\n\
Sec-WebSocket-Accept: %s\r\n\r\n' % token)
        while True:
            try:
                data = self.connection.recv(1024)
            except socket.error, e:
                print "unexpected error: ", e
                clients.pop(self.username)
                break
            data = self.parse_data(data)
            if len(data) == 0:
                continue
            message = self.username + ": " + data
            notify(message)
            
    def parse_data(self, msg):
        v = ord(msg[1]) & 0x7f
        if v == 0x7e:
            p = 4
        elif v == 0x7f:
            p = 10
        else:
            p = 2
        mask = msg[p:p+4]
        data = msg[p+4:]
        return ''.join([chr(ord(v) ^ ord(mask[k%4])) for k, v in enumerate(data)])
        
    def parse_headers(self, msg):
        headers = {}
        header, data = msg.split('\r\n\r\n', 1)
        for line in header.split('\r\n')[1:]:
            key, value = line.split(': ', 1)
            headers[key] = value
        headers['data'] = data
        return headers

    def generate_token(self, msg):
        key = msg + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
        ser_key = hashlib.sha1(key).digest()
        return base64.b64encode(ser_key)

```

## 关于支持

- 在`Django`中如果想要开发websocket相关的功能，就需要先安装：
  - pip install channels
  - 在channels的内部已经帮助我们写了握手/加密/解密等环节

django

- 本身默认不支持
- 第三方库：channels

flask

- 本身默认不支持
- 第三方库:geventwebsocket

tornado

- 本身默认支持




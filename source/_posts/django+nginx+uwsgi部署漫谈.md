---
title: django+nginx+uwsgi部署漫谈
categories: 
- python的web框架
tags: 
- Django部署
---

> 写在前面：关于Django的部署问题网上有很多教程，但是每个人的配置环境和遇到的情况都一样，所以在此记录下我部署过程中遇到的问题

**看官方文档：**https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html（特别重要！！！）

## 环境介绍

- 阿里云主机（`Ubuntu`系统）
- `virtualenv`虚拟环境
  - python3版本
  - Django 2.0.3 版本
  - uwsgi 2.0.19版本
- Nginx/1.10.3 (`Ubuntu`)

## nginx目录介绍

```cmd
.
├── [drwxr-xr-x]  conf.d
├── [-rw-r--r--]  fastcgi.conf
├── [-rw-r--r--]  fastcgi_params
├── [-rw-r--r--]  koi-utf
├── [-rw-r--r--]  koi-win
├── [-rw-r--r--]  mime.types
├── [-rw-r--r--]  nginx.conf
├── [-rw-r--r--]  proxy_params
├── [-rw-r--r--]  scgi_params
├── [drwxr-xr-x]  sites-available
│   └── [-rw-r--r--]  default
├── [drwxr-xr-x]  sites-enabled
│   └── [lrwxrwxrwx]  default -> /etc/nginx/sites-available/default
├── [drwxr-xr-x]  snippets
│   ├── [-rw-r--r--]  fastcgi-php.conf
│   └── [-rw-r--r--]  snakeoil.conf
├── [-rw-r--r--]  uwsgi_params
└── [-rw-r--r--]  win-utf

```



```cmd
相关目录和文件作用

client_body_temp  # Nginx所有配置文件的目录
conf   	#配置文件目录（.default 文件为对应的默认文件）
fastcgi.conf    # fastcgi相关参数的配置文件

fastcgi_params  # fastcgi的参数文件

koi-utf    		# 媒体类型

koi-win   		# 媒体类型

mime.types #当 Web 服务器收到静态的资源文件请求时，依据请求文件的后缀名在服务器的 MIME 配置文件中找到对应的 MIME Type，再根据 MIME Type 设置 HTTP Response 的Content-Type，然后浏览器根据 Content-Type 的值处理文件

nginx.conf   #Nginx主配置文件

scgi_params  # scgi的配置文件

uwsgi_params  # uwsgi 和 nginx的通信文件

win-utf   #

html 		#默认解析的静态文件目录
50x.html   	#错误页面优雅替代文件 

index.html  #网站首页配置文件 

logs 		#日志目录
access.log  #访问日志，包含所有访问记录

error.log   #错误日志，包含访问出错的记录

nginx.pid     Nginx运行的进程号，同ps -ef | grep nginx 第一行的进程号

sbin #Nginx可执行文件目录
nginx #Nginx 启动文件

koi-utf、koi-win、win-utf 是与编码转换有关的配置文件
其他带 temp 的为临时目录
```

>ASGI 是为了支持异步网络服务器和应用而新出现的Python 标准。

<!-- more --->

## 注意问题

- 在阿里云上面部署的时候，需要注意nginx的配置

```cmd
# nginx的配置

server_name 你的主机ip;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                #try_files $uri $uri/ =404;
                include  uwsgi_params;
                        uwsgi_pass  你的主机ip:端口;
        }
        location /static {
                 alias /home/myblog/static;
}
        location /media {
                alias /home/myblog/media;
}
```

虚拟环境的问题：

- 在阿里云主机上如果直接用`virtualenv`创建虚拟环境会出现一些问题，因为系统默认的是`python2`的版本，需要指定版本

  - ```python
    virtualenv -p /usr/bin/python3 venv/
    ```

## 后记

- 安装配置的过程是漫长痛苦的，尤其是找不到思路的时候。所以要静下心来，多读官方文档！！！多读官方文档！！！多读官方文档！！！仔细的检查配置，项目跑起来的那一刻是很激动开心的。
---
title: docker实践
categories: 
- docker
tags: 
- docker知识
mathjax: true
---

## docker名称解释

> 本文章内容参考B站up主：[遇见狂神说]( https://space.bilibili.com/95256449?spm_id_from=333.788.b_765f7570696e666f.1)系列视频

**CONTAINER ID:** 容器 ID。

**IMAGE:** 使用的镜像。

**COMMAND:** 启动容器时运行的命令。

**CREATED:** 容器的创建时间。

**STATUS:** 容器状态。

状态有7种：

- created（已创建）
- restarting（重启中）
- running（运行中）
- removing（迁移中）
- paused（暂停）
- exited（停止）
- dead（死亡）

**PORTS:** 容器的端口信息和使用的连接类型（tcp\udp）。

**NAMES:** 自动分配的容器名称。

## 帮助命令

```shell
docker version		# 显示docker的版本
docker info 		# 显示docker的系统信息，包括镜像和容器的数量
docker 命令 --help   # 帮助命令
```

## 镜像命令

### **docker image**查看所有本地主机上的镜像

```shell
root@Luenci:~# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              8cf1bfb43ff5        2 weeks ago         132MB
redis               latest              50541622f4f1        2 weeks ago         104MB
centos              latest              831691599b88        7 weeks ago         215MB

# 解释
REPOSITORY	镜像的仓库源
TAG			镜像的标签
IMAGE ID	镜像的id
CREATED		镜像的创建时间
SIZE		镜像的大小

# 可选项
	-a，	--all		# 列出所有的镜像
	-q，	--quiet		# 只显示镜像的id
```

### **docker search** 搜索镜像

```shell
root@Luenci:~# docker search python
NAME                             DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
python                           Python is an interpreted, interactive, objec…   5400                [OK]                
# 可选项 
	通过STARTS来过滤
	--filter=STARTS=3000 # 搜索出来的镜像就是STARTS大于3000
```

### **docker pull**下载镜像

```shell
# 下载镜像 docker pull 镜像名[:tag]
root@Luenci:~# docker pull redis
Using default tag: latest	# 不指定tag，默认是latest（最新版）
latest: Pulling from library/redis
bf5952930446: Pull complete 	# 分层下载，docker images的核心 联合文件系统
911b8422b695: Pull complete 
093b947e0ade: Pull complete 
5b1d5f59e382: Pull complete 
7a5f59580c0b: Pull complete 
f9c63997c980: Pull complete 
Digest: sha256:09c33840ec47815dc0351f1eca3befe741d7105b3e95bc8fdb9a7e4985b9e1e5 	# 签名
Status: Downloaded newer image for redis:latest

# 指定版本下载
root@Luenci:~# docker pull redis:5.0.9
5.0.9: Pulling from library/redis
bf5952930446: Already exists 
911b8422b695: Already exists 
093b947e0ade: Already exists 
# 只下载下面的内容，上面的内容已经存在
2e4ea19ac656: Pull complete 
62403d50d101: Pull complete 
3a097fa7018a: Pull complete 
Digest: sha256:ab3998e18bfaa570fad08c884ffbcc7861f59caf736a5a0c1ad5383c4d863958
Status: Downloaded newer image for redis:5.0.9
```

<!-- more -->

### docker rmi 删除镜像

```shell
root@Luenci:~# docker rmi -f 镜像id	# 删除指定的镜像
root@Luenci:~# docker rmi -f $(docker images -aq)		# 删除所有的镜像
```

## 容器命令

>注:有了镜像才可以创建容器

```shell
docker run [可选参数]  image

# 参数说明
-- name="name"		容器名字 mynigin，myredis   用来区分容器
-d					后台方式运行
-it					使用容器交互式运行，进入容器查看内容
-p					指定容器端口	-p 8080:8080
	-p	ip:主机端口:容器端口
	-p	主机端口:容器端口 (常用)
	-p	容器端口
	容器端口
	
# 测试
root@Luenci:~# docker run -it centos /bin/bash
[root@2aaffa406bab /]# ls		# 查看容器内的centos，基础版本，很多命令不完善
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

### 列出所有的运行的容器

```shell
# docker ps
	# 列出当前正在运行的容器
-a	# 列出当前正在运行的容器+历史运行过的容器
-n=?	# 显示最近创建的容器
-q	#只显示容器的编号

root@Luenci:~# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
root@Luenci:~# docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                       PORTS               NAMES
2aaffa406bab        centos              "/bin/bash"              5 minutes ago       Exited (127) 3 minutes ago                       tender_keller
cec29b5fd9e3        centos              "/bin/bash"              2 hours ago         Exited (0) 2 hours ago                           naughty_hopper
81ef5d4b0237        50541622f4f1        "docker-entrypoint.s…"   9 days ago          Exited (0) 2 hours ago                           myredis

```

### 退出容器

```shell
exit	#容器停止并退出
Ctrl+P+Q #容器不停止推出
```

### 删除容器

```shell
docker rm  容器id/容器名称		# 删除指定的容器
docker rm -f $(docker pa -aq)	# 删除所有的容器
```

### 启动和停止容器的操作

```shell
docker start 	容器id
docker restart  容器id
docker stop 	容器id
docker kill 	容器id
```

## 常用的其它命令

### 后台启动容器

```shell
# 命令 docker run -d 镜像名

# 常见的坑：dokcer容器使用后台运行，就必须要有一个前台进程，docker发现没有应用，就会自动停止
```

### 查看日志命令

```shell
docker logs -tf --tail=20 容器名
```

### 查看容器中的进程信息

```shell
docker top 容器id

# 测试
root@Luenci:~# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED              STATUS              PORTS               NAMES
93a38976a8f5        centos              "/bin/bash"         About a minute ago   Up About a minute                       friendly_bhaskara
root@Luenci:~# docker top 93a38976a8f5
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                29856               29836               0                   21:33               pts/0               00:00:00            /bin/bash

```

### 查看镜像详细信息（元数据）

```powershell
docker inspect 容器名

# 测试
root@Luenci:~# docker inspect 93a38976a8f5
[
    {
        "Id": "93a38976a8f5c8d4aa1db00d13472e97f0174a3044cc3c259817405c224519ef",
        "Created": "2020-08-08T13:33:04.746353775Z",
        "Path": "/bin/bash",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 29856,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2020-08-08T13:33:05.178401258Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:831691599b88ad6cc2a4abbd0e89661a121aff14cfa289ad840fd3946f274f1f",
        "ResolvConfPath": "/var/lib/docker/containers/93a38976a8f5c8d4aa1db00d13472e97f0174a3044cc3c259817405c224519ef/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/93a38976a8f5c8d4aa1db00d13472e97f0174a3044cc3c259817405c224519ef/hostname",
        "HostsPath": "/var/lib/docker/containers/93a38976a8f5c8d4aa1db00d13472e97f0174a3044cc3c259817405c224519ef/hosts",
        "LogPath": "/var/lib/docker/containers/93a38976a8f5c8d4aa1db00d13472e97f0174a3044cc3c259817405c224519ef/93a38976a8f5c8d4aa1db00d13472e97f0174a3044cc3c259817405c224519ef-json.log",
        "Name": "/friendly_bhaskara",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "docker-default",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "shareable",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DiskQuota": 0,
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/asound",
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/f1e637f57a89981209ac3057b0717c332fd65c8827d64338400560b47c933617-init/diff:/var/lib/docker/overlay2/97c3e75603173c8d642736130245f024bf5339de27510a95e1df8e16a15114ad/diff",
                "MergedDir": "/var/lib/docker/overlay2/f1e637f57a89981209ac3057b0717c332fd65c8827d64338400560b47c933617/merged",
                "UpperDir": "/var/lib/docker/overlay2/f1e637f57a89981209ac3057b0717c332fd65c8827d64338400560b47c933617/diff",
                "WorkDir": "/var/lib/docker/overlay2/f1e637f57a89981209ac3057b0717c332fd65c8827d64338400560b47c933617/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "93a38976a8f5",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": true,
            "OpenStdin": true,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/bash"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20200611",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "9556ceb393a2519d7648498f401697c941c771bc76b7db539d177a36c8bba814",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/9556ceb393a2",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "bdf6f628c83cb481706c760cbf8d53b0c85ded19a6ad0ab317899048f8ead975",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "4f014633d5e464b1e9efc1cf9682b006ed329b81fc9d22ebe11f020e4fe27840",
                    "EndpointID": "bdf6f628c83cb481706c760cbf8d53b0c85ded19a6ad0ab317899048f8ead975",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]

```

### 进入当前正在运行的容器

```shell
docker exec -it 容器id  /bin/bash		# 打开新的终端
docker attach 容器id  /bin/bash		# 打开正在运行的终端
```

### 拷贝容器的文件到当前的主机中

 ```shell
# 进入docker内
root@Luenci:~# docker exec -it friendly_bhaskara  /bin/bash
[root@93a38976a8f5 /]# ls
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
[root@93a38976a8f5 /]# cd /home
[root@93a38976a8f5 home]# ls
[root@93a38976a8f5 home]# touch test.py
[root@93a38976a8f5 home]# ls
test.py
[root@93a38976a8f5 home]# exit
exit
# 本地环境
root@Luenci:~# docker cp friendly_bhaskara:/home/test.py /home
root@Luenci:~# ls /home
	test.py
 ```

### 查看容器占用资源状态

```shell
docker stats 容器id
```

## Docker镜像讲解

- **镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件**

> ### UnionFS(联合文件系统)

- UnionFS（联合文件系统）：Union文件系统是一种分层、轻量级并且高性能的文件系统，**它支持对文件系统的修改作为一次提交来一层层的叠加**，同时**可以将不同目录挂载到同一个虚拟文件系统下**，Union文件系统是Dokcer镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的镜像。

- 特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统加载起来，这样最终的文件系统会包含所有的底层文件和目录

> ### Docker镜像加载原理

- docker的镜像实际上是由一层一层的文件系统构成，这种层级的文件系统UnionFS。

- 主要包含`bootloader`和`kernel`，`bootloader`主要是引导加载`kernel`，Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是`bootfs`。这一层与我们典型的`linux/unix`系统是一样的，包含boot加载器内核。当boot加载完之后整个内核就都在内存中了，此时内存的使用权已经由`bootfs`交给内核了，此时系统也会卸载`bootfs`

> 平常我们的镜像2G左右,为什么到了docker中就只有几百兆?

![imgs](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200809115907445.png))

- 解释:对于一个精简的OS,rootfs可以很小,只需要包含最基本的命令,工具和程序库就可以,因为底层直接用Host的kernel,自己只需要提供rootfs就可以.由此可见对于不同linux发行版,bootfs基本是一致的,rootfs会有些差别,因此**不同的发行版可以公用bootfs**.

### 分层理解

![Docker镜像](http://c.biancheng.net/uploads/allimg/190416/4-1Z416163955K0.gif)

> 特点

容器层:

- Docker镜像都是可读的,当容器启动时,一个新的可写层被加载到镜像的顶部

镜像层:

- 容器层之下的都叫镜像层(只读)

### Commit镜像

```shell
docker commit 提交容器成为一个新的副本

docker commit -m="提交的信息" -a="作者"  容器id  目标镜像名:[tag]
```

## 容器数据卷

> 使用命令参数 -v进行挂载

```shell
# 启动redis并挂载
docker run -p 6379:6379 --name myredis -v D:/redis/redis.conf:/etc/redis/redis.conf -v D:/redis/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes
```

### 具名挂载和匿名挂载

```shell
# 匿名挂载
docker run -d -p --name nginx1  -v /etc/nginx nginx

# 查看所有的 volume 的情况
docker volume ls
```

测试

![image-20200809181627846](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200809181627846.png)

> 所有docker容器内的卷，没有指定目录的情况下都是在`/var/lib/docker/volumes/XXX`下

![image-20200809182036576](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200809182036576.png)

### 挂载类型

```shell
-v 容器内路径			# 匿名挂载
-v 卷名:容器类路径	   	   # 具名挂载
-v /宿主机路径:容器内路径	 # 指定路径挂载
```

> 扩展

```shell
# 通过 -v 容器内路径:ro rw 改变读写权限	
ro	readonly	# 只读
rw	readwrite	# 可读可写

# 一旦设置了这个容器权限，容器对于我们挂载出来的内容就会有限定
docker run -d -p --name nginx1  -v /etc/nginx:ro nginx
docker run -d -p --name nginx1  -v /etc/nginx:rW nginx


# ro 说明我们只能通过更改宿主机内的配置来操作，无法在容器中直接修改
```

## DockerFile

**Dockerfile就是用来构建docker镜像的构建文件(命令脚本)**

构建步骤：

1. 编写一个dockerfile文件
2. docker build 构建成一个镜像
3. docker run 运行镜像
4. docker push 发布镜像

### 初始Dockerfile

```shell
FROM cetos 

VOLUME ["VOLUME01", "VOLUME02"]

CMD echo "----end----"
CMD /bin/bash
```

### DockerFile的指令

```shell
FROM		# 基础镜像,一切从这里开始构建
MAINTAINER	# 镜像作者，格式“姓名+邮箱”
RUN			# 镜像构建的时候需要运行的命令
ADD			# 添加的内容
WORKDIR		# 镜像的工作目录
VOLUME		# 挂载的目录
EXPOST		# 暴露端口设置
CMD			# 指定容器启动时候要运行的命令，只有最后一个会生效，可替换
ENTRYPOINT	# 指定这个容器启动的时候要运行的命令，可以追加命令
ONBUILD		# 当构建一个被继承DockerFile的时候就会运行ONBUILD 的指令。触发指令
COPY		# 类似ADD，将文件拷贝到镜像中
ENV			# 构建的时候设置环境变量
```

![img](http://www.donglihuoguo.cn/uploads/allimg/180913/1-1P913213622-50.png)

> 创建一个自己的docker镜像

```shell
FROM centos
MAINTAINER luenci<luencer@test.com>

ENV MYPATH /usr/local
WORKDIR $MYPATH

RUN yum -y install vim
RUN yum -y install net-tools

EXPOSE 80

CMD echo $MYPATH
CMD echo "---end---"
CMD /bin/bash
```

执行命令

```shell
docker build -f DockerFile -t mycentos:1.0 .
```

最后输出：

Successfully built aef984b5baa4
Successfully tagged mycentos:1.0

成功

> 自定义镜像的命令和工作路径

![image-20200810214321598](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200810214321598.png)



```shell
docker history 镜像名		# 查看镜像构建过程
```

![image-20200810214850428](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200810214850428.png)



## Docker全流程

![image-20200811220820235](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200811220820235.png)

# 制作Django运行镜像

## 一、基础镜像制作（python运行环境搭建）

1.基础镜像的dockerfile

```dockerfile
#基础镜像为centos，版本为7，build镜像时会自动下载
FROM centos:7  

#制作者信息
MAINTAINER jiayifei

#设置环境变量
ENV CODE_DIR=/home/jiayifei/project/LittleCow
ENV DOCKER_SCRIPTS=$CODE_DIR/base_image/scripts

#将scripts下的文件复制到镜像中的DOCKER_SCRIPTS目录
COPY ./scripts/* $DOCKER_SCRIPTS/

#执行镜像中的provision.sh脚本
RUN chmod a+x $DOCKER_SCRIPTS/*
RUN $DOCKER_SCRIPTS/provision.sh
```

2.provision.sh 文件

```shell
#!/bin/bash
set -e
 
#python的一些依赖
yum install -y \
    kde-l10n-Chinese\
    glibc-common\
    git\
    wget\
    mysql-devel\
    gcc\
    swig\
    pulseaudio\
    pulseaudio-libs\
    pulseaudio-libs-devel\
    zlib-devel\
    bzip2-devel\
    openssl-devel\
    ncurses-devel\
    sqlite-devel\
    readline-devel\
    tk-devel\
    gdbm-devel\
    db4-devel\
    libpcap-devel\
    xz-devel\
    libffi-devel\
    ncurese-devel\
    automake\
    autoconf\
    libtool\
    make\
    alsa-lib-devel\
    poppler-utils\
 
#python3.7
wget https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tgz
tar -zxvf Python-3.7.4.tgz
cd Python-3.7.4
./configure
make && make install
rm -rf Python-3.7.4*
 
#pip3
wget --no-check-certificate https://github.com/pypa/pip/archive/9.0.1.tar.gz
tar -zvxf 9.0.1.tar.gz
cd pip-9.0.1
python3.7 setup.py install
rm -rf pip-9.0.1*
pip3 install --upgrade setuptools
```

3.build基础镜像

```shell
docker build -t base_lcow:v1.0 .
```

## 二、项目镜像制作（项目运行环境搭建）

1.项目镜像的Dockerfile

```shell
#基础镜像
FROM base_lcow:v1.0
 
#语言编码设置
RUN localedef -c -f UTF-8 -i zh_CN zh_CN.utf8
ENV LC_ALL zh_CN.UTF-8
 
 
#将项目目录文件复制到镜像中,CODE_DIR是在基础镜像中定义的
COPY . $CODE_DIR/
 
 
#安装项目依赖包
RUN pip3 install -r $CODE_DIR/requirement.txt
 
#暴露端口
EXPOSE 8080
 
 
#启动项目
CMD ["python3.7", "/home/jiayifei/project/LittleCow/manage.py", "runserver", "0.0.0.0:8080"]
```

2.build项目镜像

```shell
docker build -t lcow:v1.0 .
```

3.启动镜像

```shell
docker run -it -p ip:443:8080 镜像id
```

##  三、项目镜像迁移（其他环境下部署项目）

1.镜像查看及导出

```shell
#镜像查看
docker images
#镜像导出
docker save -o test.tar image_name
docker save image_name > /test.tar
```

2.容器查看及导出

```shell
#容器查看
docker container ls -a
#容器导出（test为容器名）
docker export -o test.img test
docker export test >test.tar
```

3.镜像or容器导入

```shell
#导入容器
docker import test.img test
#导入镜像
docker load --input test.tar
```


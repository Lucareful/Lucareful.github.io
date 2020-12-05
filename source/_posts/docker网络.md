---
title: docker网络
categories: 
- docker
tags: 
- docker知识
mathjax: true
---

# docker网络

> 本文章内容参考B站up主：[遇见狂神说]( https://space.bilibili.com/95256449?spm_id_from=333.788.b_765f7570696e666f.1)系列视频

```shell
root@Luenci:~# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo			（本机回环地址）
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:16:3e:0b:65:ba brd ff:ff:ff:ff:ff:ff
    inet 172.16.249.181/20 brd 172.16.255.255 scope global eth0		（阿里云内网地址）
       valid_lft forever preferred_lft forever
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:c0:94:f3:70 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0		（docker地址）
       valid_lft forever preferred_lft forever
```

> 查看容器的ip

```shell
# 启动容器
root@Luenci:~# docker run -dit centos  (启动不退出)

# 查看容器信息（ip）
root@Luenci:~# docker exec -it modest_dijkstra ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
36: eth0@if37: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
       
# linux本机可以ping同容器
root@Luenci:~# ping 172.17.0.3
PING 172.17.0.3 (172.17.0.3) 56(84) bytes of data.
64 bytes from 172.17.0.3: icmp_seq=1 ttl=64 time=0.085 ms
64 bytes from 172.17.0.3: icmp_seq=2 ttl=64 time=0.070 ms
64 bytes from 172.17.0.3: icmp_seq=3 ttl=64 time=0.061 ms
```

> 原理

- 我们每启动一个docker容器，docker就会给docker容器分配一个ip。只要装了docker，就会有一个网卡docker0 桥接模式，使用的技术是`veth-pair`技术

![image-20200830105349992](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200830105349992.png)

```shell
# 容器的网卡是成对存在
# veth-pair 是一对虚拟设备接口，他们都是成对出现，一端连着协议，一端彼此相连
# 由此veth-pair技术可以充当一个桥梁的作用
```

<!-- more -->

## 容器内网络互联

![image-20200830110103233](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200830110103233.png)

> 结论：tomcat01 和 tomcat02是公用一个路由，docker0进行通信
>
> 所有容器在不指定网络的情况下，都是docker0路由的，docker会给容器分配一个默认可用的ip

## 小结

- docker 使用的Linux的桥接，docker0是宿主机中容器的一个网桥
- docker中所有的网络都是虚拟的，虚拟网络的转发效率高！

![image-20200830111615839](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200830111615839.png)

## `--link`

> 场景：我们编写了一个微服务，database url=ip；项目不重启，数据库ip更改了，处理的时候希望能通过容器名称来访问数据库而不是IP？

```shell
# 启动了两个示例容器
root@Luenci:~# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
a7610b560f68        centos              "/bin/bash"         31 seconds ago      Up 30 seconds                           mycentos2
67e3a354d874        centos              "/bin/bash"         38 seconds ago      Up 37 seconds                           mycentos1
# 尝试进行ping容器名
root@Luenci:~# docker exec -it mycentos1 ping mycentos2
ping: mycentos2: Name or service not known  （失败）

# 通过--link解决网络连通问题
root@Luenci:~# docker run -dit --name mycentos3 --link mycentos2 centos  （--link连通）
44dbe06c707ee7eaee5b75c68fca94964d861fc6f1a68550d90135151cdcfd40
root@Luenci:~# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
44dbe06c707e        centos              "/bin/bash"         4 seconds ago       Up 3 seconds                            mycentos3
a7610b560f68        centos              "/bin/bash"         10 minutes ago      Up 10 minutes                           mycentos2
67e3a354d874        centos              "/bin/bash"         10 minutes ago      Up 10 minutes                           mycentos1
root@Luenci:~# docker exec -it mycentos3 ping mycentos2  （可以ping通）
PING mycentos2 (172.17.0.5) 56(84) bytes of data.
64 bytes from mycentos2 (172.17.0.5): icmp_seq=1 ttl=64 time=0.141 ms
64 bytes from mycentos2 (172.17.0.5): icmp_seq=2 ttl=64 time=0.074 ms
64 bytes from mycentos2 (172.17.0.5): icmp_seq=3 ttl=64 time=0.076 ms
```

### 查看网卡信息

```shell
root@Luenci:~# docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
4f014633d5e4        bridge              bridge              local
a09b20c136ab        host                host                local
10fa9eaa1a14        none                null                local
root@Luenci:~# docker network inspect 4f014633d5e4
[
    {
        "Name": "bridge",
        "Id": "4f014633d5e464b1e9efc1cf9682b006ed329b81fc9d22ebe11f020e4fe27840",
        "Created": "2020-07-28T22:51:34.869031592+08:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "44dbe06c707ee7eaee5b75c68fca94964d861fc6f1a68550d90135151cdcfd40": {
                "Name": "mycentos3",
                "EndpointID": "999e20e0cb4bcd78d926b9cc1b81a2d1be4fd45e40fb07fec90ab4458eb21992",
                "MacAddress": "02:42:ac:11:00:02",
                "IPv4Address": "172.17.0.2/16",
                "IPv6Address": ""
            },
            "67e3a354d874da0897ff944cdf98a6dade3bdd6f68f7c6c2ecc41bddf52f51de": {
                "Name": "mycentos1",
                "EndpointID": "10d6fe849e56d529224c9dfd4e15615872ac599ed42fe184111df3b1a6cc0b9a",
                "MacAddress": "02:42:ac:11:00:04",
                "IPv4Address": "172.17.0.4/16",
                "IPv6Address": ""
            },
            "a7610b560f68af49f86c0683b0fa75ca9a04ae34b42e2fba6db0f334554e905b": {
                "Name": "mycentos2",
                "EndpointID": "c3642ebb6140939cda9e7f4272e9b46ae6d493997ab031002a367b07f2a07968",
                "MacAddress": "02:42:ac:11:00:05",
                "IPv4Address": "172.17.0.5/16",
                "IPv6Address": ""
            }
        },
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "1500"
        },
        "Labels": {}
    }
]
```

### 原理探究

- 之所以能够连通，是因为mycentos3本地配置(hosts中)了mycentos2的配置

```shell
root@Luenci:~# docker exec -it mycentos3 cat /etc/hosts
127.0.0.1	localhost
::1	localhost ip6-localhost ip6-loopback
fe00::0	ip6-localnet
ff00::0	ip6-mcastprefix
ff02::1	ip6-allnodes
ff02::2	ip6-allrouters
172.17.0.5	mycentos2 a7610b560f68  （mycentos2的指向）
172.17.0.2	44dbe06c707e
```

### 小结

- `--link`就是我们在mycentos3的`hosts`文件中增加了了一个mycentos2的映射，所以可以通过服务名访问。（不推荐使用这种方法，仅为学习）

## 自定义网络（重点）

> 查看所有的docker网络

![image-20200830162917028](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200830162917028.png)

### 网络模式

- bridge：桥接模式 （docker默认的方式）
- none：不配置网络
- host：和宿主机共享网络
- container：容器内网络连通（用的少!）

### 测试

```shell
# 创建自定义网络
root@Luenci:~# docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet  
574c8f4d839ec467d1b97ac9225594885e0829f3b3be060bd325b4982495a04e
root@Luenci:~# docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
4f014633d5e4        bridge              bridge              local
a09b20c136ab        host                host                local
574c8f4d839e        mynet(自定义网络)     bridge              local
10fa9eaa1a14        none                null                local
```

> 自定义网络启动成功

![image-20200830165221007](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200830165221007.png)

### 实践

```shell
# 指定网络下运行容器
root@Luenci:~# docker run -dit --name mycentos1 --net mynet centos
13a4708e85e69f854cea3280997c5740d8757b445a0fd6f1344b80057284756d
root@Luenci:~# docker run -dit --name mycentos2 --net mynet centos
723d7df4bbe73af82287f5ab9a22d79344011f3815cd257d47eaf2373c60cdaa

# 连通测试
root@Luenci:~# docker exec -it mycentos1 ping mycentos2
PING mycentos2 (192.168.0.3) 56(84) bytes of data.
64 bytes from mycentos2.mynet (192.168.0.3): icmp_seq=1 ttl=64 time=0.072 ms
64 bytes from mycentos2.mynet (192.168.0.3): icmp_seq=2 ttl=64 time=0.096 ms
```

> 我们自定义的网络docker已经帮我们维护好了对应的关系

优点：

- 不同的集群使用不同的网络，保证集群是安全健康的

## 网络连通

> 思考： 如何将docker0网段的tomcat-01容器和mynet网络中的容器打通？
>
> `注意docker0和mynet之间是不能直接连通的，只能容器和网络相连，不能网卡和网卡连接`

![image-20200830175354432](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200830175354432.png)

### 操作

```shell
# 连通命令查看 
root@Luenci:~# docker network --help

Usage:	docker network COMMAND

Manage networks

Commands:
  connect     Connect a container to a network （连通命令）
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or more networks
  ls          List networks
  prune       Remove all unused networks
  rm          Remove one or more networks

Run 'docker network COMMAND --help' for more information on a command.


# 开始实践
# mycentos实在docker0网络下，而mycento1和mycentos2是在mynet网络下

# 将mycentos容器加入mynet网络中
root@Luenci:~# docker network connect mynet mycentos

# ping命令测试
root@Luenci:~# docker exec -it mycentos ping mycentos1
PING mycentos1 (192.168.0.2) 56(84) bytes of data.
64 bytes from mycentos1.mynet (192.168.0.2): icmp_seq=1 ttl=64 time=0.074 ms
64 bytes from mycentos1.mynet (192.168.0.2): icmp_seq=2 ttl=64 time=0.087 ms
^C
--- mycentos1 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1000ms
rtt min/avg/max/mdev = 0.074/0.080/0.087/0.011 ms

root@Luenci:~# docker exec -it mycentos ping mycentos2
PING mycentos2 (192.168.0.3) 56(84) bytes of data.
64 bytes from mycentos2.mynet (192.168.0.3): icmp_seq=1 ttl=64 time=0.085 ms
64 bytes from mycentos2.mynet (192.168.0.3): icmp_seq=2 ttl=64 time=0.099 ms
^C
--- mycentos2 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 2ms
rtt min/avg/max/mdev = 0.085/0.092/0.099/0.007 ms
```

### 配置信息查看

> 可见mycentos容器已经在mynet网络下了，而mycentos也在docker0网络下。此时就是docker所描述的  **`一个容器，两个ip地址`**

![image-20200830180252978](https://gitee.com/luenci/RepoImg/raw/master/img/image-20200830180252978.png)
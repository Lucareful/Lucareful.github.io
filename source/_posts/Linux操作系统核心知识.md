---
title: Linux学习（一）
categories: 
- Linux
- 核心知识
tags: 
- Linux知识
---

# Linux操作系统

- "一切皆文件"

## 系统启动流程

引导图

![引导图](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502160423268.png)

- 最初始阶段
  当我们打开计算机电源，计算机会自动从主板的`BlOS`（Basic Input/output System）读取其中所存储的程序。这一程序通常知道一些直接连接在主板上的硬件（硬盘，网络接口，键盘，串口，并口）。现在大部分的BIOS允许你从软盘、光盘或者硬盘中选择一个来启动计算机。
- 下一步，计算机将从你所选择的存储设备中读取起始的512 bytes（比如光盘一开是的512 bytes，如果我们从光盘启动的话）。这`512bytes`叫做主引导记录`MBR`（master boot record）。`MBR`会告诉电脑从该设备的某一个分区（partition）来装载引导加载程序（boot loader）。`Boot loader`储存有操作系统（OS）的相关信息，比如操作系统名称，操作系统内核（kernel）所在位置等。常用的`boot loader`有`GRUB`和`LILO`。
- 随后，`boot loade`r会帮助我们加载`kernel`。`kernel`实际上是一个用来操作计算机的程序，它是计算机操作系统的内核，主要的任务是管理计算机的硬件资源，充当软件和硬件的接口。操作系统上的任何操作都要通过`kernel`传达给硬件。`Windows`和`Linux`各自有自己`kernel`。
- 狭义的操作系统就是指`kernel`，广义的操作系统包括`kernel`以及`kernel`之上的各种应用。
- （Linus Torvalds与其说是Linux之父，不如说是`Linux kernel`之父。他依然负责`Linux kernel`的开发和维护。至于`Ubuntu`，`Red Hat`，它们都是基于相同的`kernel`之上，囊括了不同的应用和界面构成的一个更加完整的操作系统版本。）实际上，我们可以在多个分区安装`boot loader`，每个`boot loader`对应不同的操作系统，在读取`MBR`的时候选择我们想要启动的boot loader。这就是多操作系统的原理。
- 小结：`BlOS -> MBR -> boot loader -> kernel`

- kernel
  - 如果我们加载的是Linux kernel，Linux kernel开始工作。kernel会首先预留自己运行所需的内存空间，然后通过驱动程序（driver）检测计算机硬件。这样，操作系统就可以知道自己有哪些硬件可用。随后，kernel会启动一个init进程。它是Linux系统中的1号进程（Linux系统没有0号进程）。到此，kernel就完成了在计算机启动阶段的工作，交接给init来管理。
  - 小结：`kernel -> init process `

- `init process`

  （根据boot loader的选项，Linux此时可以进入单用户模式（single user mode））。在此模式下，初始脚本还没有开始执行，我们可以检测并修复计算机可能存在的错误）随后，init会运行一系列的初始脚本（startup scripts），这些脚本是Linux中常见的shell scripts。这些脚本执行如下功能：

  - 设置计算机名称，时区，检测文件系统，挂载硬盘，清空临时文件，设置网络等

  当这些初始脚本，操作系统已经完全准备好了，只是，还没有人可以登录！！！init会给出登录（login）对话框，或者是图形化的登录界面。

- 输入用户名（比如说luenci）和密码，DONE！

- 在此后的过程中，你将以用户（user）luenci的身份操作电脑。此外，根据你创建用户时的设定，Linux还会将你归到某个组（group）中，比如可以是stupid组，或者是luenci组。所以你将是用户luenci，同时是luenci组的组员。（注意，组luenci和用户luenci只是重名而已，就好想你可以叫Dell，同时还是Dell公司的老板一样。你完全也可以是用户luenci，同时为stupid组的组员）

### 启动级别

- 7种运行级别

   运行级别（`Runlevel`）指的是Unix或者Linux等类Unix操作系统的运行模式，不同的运行模式下系统的功能也有所有不同。Linux 系统下通常分为`7`种运行级别，分别是从`0`到`6`。各级别介绍如下：

- `0`--停机模式
  
  - 在这种模式下，系统处于停机状态，系统默认运行级别不能设为`0`，否则将不能正常启动。这个运行级别主要用于关闭任务，在`/etc/rc0.d`目录下的各个连接命令都是此级别的命令，在关闭系统时，这些命令将被逐个执行。它 们会杀掉所有进程、关闭虚拟内存和交换文件、卸载文件系统和交换分区。
- `1`-- 单用户模式。
  
  - 在这种运行模下，系统处于单用户工作状态，登录用户具有root权限，文件系统被加载但是网络却没有被加载，因此也无法远程登陆。这个运行级别，只允一个用户从本地计算机上登录，`/etc/rc1.d`目录下的所有文件与此运行级别相关连，这个运行级别一般用于系统管理与维护。
- `2` - -多用户模式。
  
  - 用户可以通过网络进行登录，但没有`NFS`（Network File System），即网络文件统。`/etc/rc2.d`目录下所有文件与此级别相连。
- `3` - -完全多用户模式。
- 用户可以通过网络进行登录，且有`NFS`，用户登陆后会进入控制台命令行模式。这也是缺省的运行模式，在这种运行级别下所有网络服务程序会一起运行。`/etc/rc2.d`录下的文件与此级别相连
- `4` - -自定义模式。
  
  - 这是一种系统未使用的保留模式，`/etc/rc4.d`目录与此级别相连。这一级别是用户自定义的运行级别，用户可以根自己的需要进行一些自定义设置。如果想要运行这一级别的话，必须在`rc3.d`目录下放入连接文件，就像其他`rc*.d`目录下的文件，并指明是启动还是终止进程。
- `5` - -图形化模式。
  
  - 在 Linux 下运行`X Window`就是使用这一运行级别，用户登录后将进入图形化的GUI界面。在这一级别下除了DNS的`named`与级别`3`不同，其余的都相同。
- `6` -- 重启模式。
  
  - 系统正常关闭并重启，默认运行级别不能设为`5`，否则系统将不能正常启动。`/etc/rc6.d`目录与此级别相连。在这一运行级别下，不会关闭电源，`/etc/rc6.d`目录下的连接与`rc0.d`目录下的连接基本相同；不同之处在于，虽然它们都执行`halt`（关闭）命令，但是给`halt`传递的参数不同，所级别`6`会重新启动系统而`0`会关闭系统。

[^ps]: 注意：以上适用于`CentOS`等发行版，而对于`Ubuntu`等`debian`系的Linux来说，`2~5`都是多用户图形模式，几个运行模式没有区别。

<!--more-->

### GRUB加密

- `GRUB`程序和`grub.conf`文件
- 1）掌握GRUB的定义：`GRUB`是`Grand Unified Boot loader`（多重操作系统启动管理器）的缩写。
  心
- 2）掌握grub的配置文件为：`grub.conf`设置`grub Md5`加密命令`grub-md5-crypt `
  - `Password=明文`或`password-md5密文`（编辑grub配置文件的密码）
- Title red hat 标题
  - `Password=明文或password--md5密文`（加载内核系统引导必须的密码）

![grub配置](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502155136848.png)

### BIOS加密

- 设置BIOS密码来防止更改GRU配置文件
- 但是这种方法可将主板电池扣下，主板自动还原，密码也失效了

*`没有绝对的安全，要不停的学习`*

## 目录结构

-  在Linux或UNIX操作系统中，所有的文件和目录都被组织成一个以根节点开始的倒置的***树状结构***。

### 顶层根目录的表示

- 使用`'/'`来表示根目录

### 文件系统中的特殊目录

- `.`表示当前目录，即用户所在的工作目录
- `..`表示父目录，即当前目录的上一层目录
- `~`代表当前用户的家目录（home）

<!-- more -->

### 一些重要目录

1. `bin`目录：用来存放常用的可执行文件
2. `sbin`目录：用来存放系统的可执行文件
3. `home`家目录：用来存放用户自己的文件或目录，其中，超级用户`root`的家目普通用户的家目录被存放在`/home`目录下，并使用用户名作为最后一级目的名称，如`luenci`用户的家目录为`/home/luenci`
4. `dev`目录：设备文件目录
5. `etc`目录：配置文件目录
6. 挂载点（目录）：通常可移除式硬件会被挂载在`/media`或`/mnt`目录之下

## 用户，群组，权限管理

- `/etc/passed`文件中存放用户的信息
- 分别对应的是：`用户名：密码：user_id：group_id：描述名：家目录（home）：登录后执行的命令`

![1](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200501204906550.png)

- 如果执行的登录命令为：`/bin/bash`则可以登录
- 如果执行的登录命令为：`/sbin/nologin`则不可以登录
- `user_id`: 500以前id号为系统占用的

### useradd命令的常用选项
- `-u`：指定用户的UID
- `-g`：指定用户所属的群组
- `-d`：指定用户的家目录
- `-c`：指定用户的备注信息
- `-s`：指定用户所用的shell
- `-r`: 删除用户



## 文件的权限管理

- 权限信息(用户权限(u);组权限(g);其他用户权限(0))；硬链接数；用户；用户组；文件大小；文件创建日期
- r->4
- w->2
- x->1

![2](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200501215623758.png)

- `-`开头代表一个文件类型

- `d`开头代表一个目录类型

- `l`开头代表一个软链接

- `b（block）`开头代表设备文件

- `p`开头有代表管道文件

### 对于可执行文件的运行

- `sh 可执行文件名`
- `bash 可执行文件名`
- `./可执行文件名`
- `. 可执行文件名`

## 目录的权限管理

- `ll -d 目录`查看目录的权限
- ![3](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502123137125.png)

## 更改文件的用户和组

- `chown  用户.组别  文件名`
- `chown -R`递归修改用户和组

![4](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502123543551.png)

## 文件合并

- `wc -l 文件名`统计文件行数

- `>`以覆盖的方式写入内容
- `>>`以追加的方式写入内容

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502132024461.png)

## 解压和压缩命令

1、.`tar `

解包：`tar xvf FileName.tar`
打包：`tar cvf FileName.tar DirName`
（注：tar是打包，不是压缩！）



2、`.gz`

解压1：`gunzip FileName.gz`
解压2：`gzip -d FileName.gz`
压缩：`gzip FileName`



3、`.tar.gz` 和` .tgz` 

解压：`tar zxvf FileName.tar.gz`
压缩：`tar zcvf FileName.tar.gz DirName`



4、`.bz2` 

解压1：`bzip2 -d FileName.bz2`
解压2：`bunzip2 FileName.bz2`
压缩：` bzip2 -z FileName`



5、`.tar.bz2` 

解压：`tar jxvf FileName.tar.bz2`
压缩：`tar jcvf FileName.tar.bz2 DirName`



6、`.bz` 

解压1：`bzip2 -d FileName.bz`
解压2：`bunzip2 FileName.bz`



7、`.tar.bz` 

解压：`tar jxvf FileName.tar.bz`



8、.Z

解压：`uncompress FileName.Z`
压缩：`compress FileName`



9、`.tar.Z`

解压：`tar Zxvf FileName.tar.Z`
压缩：`tar Zcvf FileName.tar.Z DirName`



10、`.zip` 

解压：`unzip FileName.zip`
压缩：`zip FileName.zip DirName`



11、`.rar` 

解压：`rar x FileName.rar`
压缩：`rar a FileName.rar DirName`



12、`.lha` 

解压：`lha -e FileName.lha`
压缩：`lha -a FileName.lha FileName`



13、`.rpm` 

解包：`rpm2cpio FileName.rpm | cpio -div` 

## vim一些常见指令

- 快速在屏幕中移动光标的位置的命令
  - `H`光标移动到这个屏幕的最上方那一行的第一个字符
  - `M`无标移动到这个屏幕的中央那一行的第一个字符
  - `L`无标移动到这个屏幕的最下那一行的第一个字符
- `G`移动到文件的最后一行
- `gg`移动到文件的第一行

- `ctrl+ r`恢复上一次操作
- `u`撤销上一个操作
- `ctrl+a`跳到文件的首部
- `ctrl+e`跳到文件的尾部
- `yy`复制
- `p`粘贴到行尾
- `P`站贴到行头



## top命令

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502170646416.png)

### 第一行

|              字符              |                             含义                             |
| :----------------------------: | :----------------------------------------------------------: |
|         top - 10:03:19         |                         当前系统时间                         |
|      up 137 days , 10:40       |                        系统已运行时间                        |
|             2 user             |                           在线用户                           |
| load average: 0.00, 0.01, 0.05 | 系统负载。三个数值分别为  1分钟、5分钟、15分钟前到现在的平均值。 |

> 2 user，包含系统用户。

------

### 第二行

|       字符       |       含义       |
| :--------------: | :--------------: |
| Tasks : 92 total |     总进程数     |
|    2 running     | 正在运行的进程数 |
|   90 sleeping    | 正在睡眠的进程数 |
|    0 stopped     |   停止的进程数   |
|     0 zombie     |    僵尸进程数    |

> 僵尸进程:一个子进程在其父进程没有调用wait()或waitpid()的情况下退出。这个子进程就是僵尸进程。如果其父进程还存在而一直不调用wait，则该僵尸进程将无法回收，等到其父进程退出后该进程将被init回收。

------

### 第三行

|      字符       |                     含义                      |
| :-------------: | :-------------------------------------------: |
| %Cpu(s): 0.3 us |      cpu占用率(%)，用户进程占用cpu百分率      |
|     0.3 sy      |               系统占用cpu百分率               |
|     0.0 ni      | 用户进程空间内改变过优先级的进程占用CPU百分比 |
|     99.3 id     |                   cpu空闲率                   |
|     0.0 wa      |             等待IO的CPU时间百分比             |
|     0.0 hi      |     硬中断（Hardware IRQ）占用CPU的百分比     |
|     0.0 si      | 软中断（Software Interrupts）占用CPU的百分比  |

> cpu的使用情况

------

### 第四行

|          字符           |          含义          |
| :---------------------: | :--------------------: |
| KiB Mem : 1016916 total | 内存总量（我这里是1G） |
|       82280 free        |       内存空闲量       |
|       233848 used       |       内存使用量       |
|    700788 buff/cache    |      缓存的内存量      |

> 内存使用率

------

### 第五行

|       字符        |     含义     |
| :---------------: | :----------: |
| KiB Swap: 0 total |  交换区总量  |
|      0 free       | 交换区空闲量 |
|      0 used       | 交换区使用量 |

> swap分区

------

### 第六行

|  字符   |                             含义                             |
| :-----: | :----------------------------------------------------------: |
|   PID   |                            进程号                            |
|  USER   |                          进程创建者                          |
|   PR    |                          进程优先级                          |
|   NI    |  nice值。越小优先级越高，最小-20，最大20（用户设置最大19）   |
|  VIRT   |        进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES         |
|   RES   |  进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA   |
|   SHR   |                     共享内存大小，单位kb                     |
|    S    | 进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程 |
|  %CPU   |                      进程占用cpu百分比                       |
|  %MEM   |                      进程占用内存百分比                      |
|  TIME+  |                         进程运行时间                         |
| COMMAND |                           进程名称                           |

> PR 越低优先级 越高，PRI(new)=PRI(old)+nice
>  PR中的rt为实时进程优先级即rt_priority，prio=MAX_RT_PRIO - 1- p->rt_priority
>  MAX_RT_PRIO = 99，prio大小决定最终优先级。这样意味着rt_priority值越大，优先级越高而内核提供的修改优先级的函数，是修改rt_priority的值，所以越大，优先级越高。
>  例：改变优先级：进入top后按“r”–>输入进程PID–>输入nice值

### top命令（在进入top后使用）

> P：以占据CPU百分比排序
>  M：以占据内存百分比排序
>  T：以累积占用CPU时间排序
>  q：退出命令：按q键退出top查看页面
>  s：修改刷新时间间隔。按下s键，然后按下数字，即可修改刷新时间间隔为你输入的数字，单位为秒。例如：按下s键，在按数字1键，即可实现每秒刷新一次
>  k：终止指定的进程。按下k键-->再输入要杀死的进程的pid-->按enter键-->(选择信号类型，以数字标示，默认15为杀死)本步可省略按enter键（常用为-9）

## free命令

- `free`
- `free -m`
- `free -h`

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502171251931.png)
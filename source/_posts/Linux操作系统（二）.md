---
title: Linux学习（二）
categories: 
- Linux
- 核心知识
tags: 
- Linux知识
---

# Linux操作系统（二）

## 进程命令

- `ps aux`  显示所有进程
- `ps aux | grep ''` 筛选出相关进程

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502204505096.png)

- `kill  pid` 杀死相关的pid进程
- `kill - 9 pid` 强制杀死进程

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502204832777.png)

- `jobs`查看进程的工作号
- `fg %工作号`后台程序调到前台运行



## 硬盘分区

- `fdisk -l /dev/磁盘名`查看对应磁盘名的详细信息

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200502212407780.png)



<!--more-->

## 文件系统

- 磁盘分区完毕后还需要进行格式化（format），之后操作系统才能够使用这个文件系统。 为什么需要进行“格式化”呢？这是因为每种操作系统所设置的文件属性/权限并不相同， 为了存放这些文件所需的数据，因此就需要将分区进行格式化，以成为操作系统能够利用的“文件系统格式（filesystem）”。

- 由此我们也能够知道，每种操作系统能够使用的文件系统并不相同。 举例来说，windows 98 以前的微软操作系统主要利用的文件系统是 FAT （或 FAT16），windows 2000 以后的版本有所谓的 NTFS 文件系统，至于 Linux 的正统文件系统则为 Ext2 （Linux second extended file system, ext2fs）这一个。此外，在默认的情况下，windows 操作系统是不会认识 Linux 的 Ext2 的。

- 传统的磁盘与文件系统之应用中，一个分区就是只能够被格式化成为一个文件系统，所以我们可以说一个 filesystem 就是一个 partition。但是由于新技术的利用，例如我们常听到的LVM与软件磁盘阵列（software raid）， 这些技术可以将一个分区格式化为多个文件系统（例如LVM），也能够将多个分区合成一个文件系统（LVM, RAID）！ 所以说，目前我们在格式化时已经不再说成针对 partition 来格式化了， 通常我们可以称呼一个可被挂载的数据为一个文件系统而不是一个分区喔！

- 那么文件系统是如何运行的呢？这与操作系统的文件数据有关。较新的操作系统的文件数据除了文件实际内容外， 通常含有非常多的属性，例如 Linux 操作系统的文件权限（rwx）与文件属性（拥有者、群组、时间参数等）。 文件系统通常会将这两部份的数据分别存放在不同的区块，权限与属性放置到 inode 中，至于实际数据则放置到 data block 区块中。 另外，还有一个超级区块 （`superblock`） 会记录整个文件系统的整体信息，包括 inode 与 block 的总量、使用量、剩余量等。

每个 inode 与 block 都有编号，至于这三个数据的意义可以简略说明如下：

- `superblock`：记录此 filesystem 的整体信息，包括inode/block的总量、使用量、剩余量， 以及文件系统的格式与相关信息等；
- inode：记录文件的属性，一个文件占用一个inode，同时记录此文件的数据所在的 block 号码；
- block：实际记录文件的内容，若文件太大时，会占用多个 block 。

由于每个 inode 与 block 都有编号，而每个文件都会占用一个 inode ，inode 内则有文件数据放置的 block 号码。 因此，我们可以知道的是，如果能够找到文件的 inode 的话，那么自然就会知道这个文件所放置数据的 block 号码， 当然也就能够读出该文件的实际数据了。这是个比较有效率的作法，因为如此一来我们的磁盘就能够在短时间内读取出全部的数据， 读写的性能比较好啰。

我们将 inode 与 block 区块用图解来说明一下，如下图所示，文件系统先格式化出 inode 与 block 的区块，假设某一个文件的属性与权限数据是放置到 inode 4 号（下图较小方格内），而这个 inode 记录了文件数据的实际放置点为 2, 7, 13, 15 这四个 block 号码，此时我们的操作系统就能够据此来排列磁盘的读取顺序，可以一口气将四个 block 内容读出来！ 那么数据的读取就如同下图中的箭头所指定的模样了。

![inode/block 数据存取示意图](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/img/filesystem-1.jpg)图7.1.1、inode/block 数据存取示意图

这种数据存取的方法我们称为索引式文件系统（indexed allocation）。那有没有其他的惯用文件系统可以比较一下啊？ 有的，那就是我们惯用的U盘（闪存），U盘使用的文件系统一般为 FAT 格式。FAT 这种格式的文件系统并没有 inode 存在，所以 FAT 没有办法将这个文件的所有 block 在一开始就读取出来。每个 block 号码都记录在前一个 block 当中， 他的读取方式有点像下面这样：

![FAT文件系统数据存取示意图](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/img/filesystem-2.jpg)图7.1.2、FAT文件系统数据存取示意图

​	上图中我们假设文件的数据依序写入1->7->4->15号这四个 block 号码中， 但这个文件系统没有办法一口气就知道四个 block 的号码，他得要一个一个的将 block 读出后，才会知道下一个 block 在何处。 如果同一个文件数据写入的 block 分散的太过厉害时，则我们的磁头将无法在磁盘转一圈就读到所有的数据， 因此磁盘就会多转好几圈才能完整的读取到这个文件的内容！

常常会听到所谓的“磁盘重组”吧？ 需要磁盘重组的原因就是文件写入的 block 太过于离散了，此时文件读取的性能将会变的很差所致。 这个时候可以通过磁盘重组将同一个文件所属的 blocks 汇整在一起，这样数据的读取会比较容易啊！ 想当然尔，FAT 的文件系统需要三不五时的磁盘重组一下，那么 Ext2 是否需要磁盘重整呢？

由于 Ext2 是索引式文件系统，基本上不太需要常常进行磁盘重组的。但是如果文件系统使用太久， 常常删除/编辑/新增文件时，那么还是可能会造成文件数据太过于离散的问题，此时或许会需要进行重整一下的。 不过，老实说，鸟哥倒是没有在 Linux 操作系统上面进行过 Ext2/Ext3 文件系统的磁盘重组.

- 每个 `filesystem` 都有独立的` inode / block / superblock `等信息，这个文件系统要能够链接到目录树才能被我们使用。 将文件系统与目录树结合的动作我们称为“挂载”。 
-  重点是：挂载点一定是目录，该目录为进入该文件系统的入口。 因此并不是你有任何文件系统都能使用，必须要“挂载”到目录树的某个目录后，才能够使用该文件系统的。

### 关于硬盘空间满

- 1.指硬盘存储空间满

- 2.`inode`节点数满了
  - 查看`inode`命令`ll -i 文件名`
  - ![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200503212834594.png)

![](https://raw.githubusercontent.com/Lucareful/ImgRepo/master/img/hexo_img/image-20200503212215228.png)



## 硬链接和软链接

软链接

- `ln -s 源路径 目标路径`
  - 类似windows操作系统的快捷方式
  - 删除链接文件，源文件不影响
  - 删除源文件，链接文件失效
  - 修改源文件/链接文件，内容都变
  - 软链接可以跨分区

硬链接

- `ln 源路径 目标路径` 

  - 删除链接文件，源文件无影响
  - 删除源文件，链接文件无影响
  - 修改源文件/链接文件，内容都变
  - 硬链接不可以跨分区

## 软件包管理
- `rpm`:readhat package manage
- `rpm -ivh 软件包名` 安装
  - `rpm -qa`查看安装的软件包
  - `rpm -e 软件包名`卸载软件包
- `.tar.gz`这种软件包需要编译安装
  - 1.解压 `tar xvf 压缩包名`
  - 运行`configure`指定参数，例如：`--prefix:安装路径`
  - 2.编译（`gcc glibc`） `make`   `make install`    

##  yum软件包管理（Centos）

- `yum install 软件包名`
- 本地的yum仓库路径`/etc/yum.repos.d/`
- 指定yum仓库的加载顺序
  - 安装完yum-priorities插件后需要设置`/etc/yum.repos.d/ `目录下的`.repo`相关文件（如`CentOS-Base.repo`），在这些文件中插入顺序指令：priority=N （N为1到99的正整数，数值越小越优先）
  - 一般配置`[base], [addons], [updates], [extras] `的`priority=1，[CentOSplus], [contrib] 的priority=2，`其他第三的软件源为：`priority=N` （推荐N>10）
    以`CentOS-Base.repo `为例：

  ```D
[base]
name=CentOS-$releasever - Base
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
baseurl=http://ftp.sjtu.edu.cn/centos/$releasever/os/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-5
priority=1
  ```

  

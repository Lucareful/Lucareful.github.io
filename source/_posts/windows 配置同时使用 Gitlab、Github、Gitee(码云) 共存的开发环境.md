---
title: windows 配置同时使用 Gitlab、Github、Gitee(码云) 共存的开发环境（转载）
categories: 
- git
tags: 
- git配置
---

>原文链接：https://blog.csdn.net/flowerspring/article/details/104962002

# 清除 git 的全局设置（针对已安装 git）

- 新安装 git 跳过。

- 若之前对 git 设置过全局的 user.name 和 user.email。
  类似 (用 git config --global --list 进行查看你是否设置)

```shell
$ git config --global user.name "你的名字"
$ git config --global user.email  "你的邮箱"
```

必须删除该设置

```shell
$ git config --global --unset user.name "你的名字"
$ git config --global --unset user.email "你的邮箱"
```

# 生成新的 SSH keys

## 1）Gitee 密钥

- 跳转到keygen目录，git bash here。
- 先键入第二行命令

- 第四行 指定 id 文件名称为id_rsa_gitee

- 第五、六行 设置无密码，直接回车两次。

- 会在keygen目录下生成文件  id_rsa_gitee 和 id_rsa_gitee.pub。

- id_rsa_gitee.pub中存放的是公钥。

- 把公钥保存到gitee网页密钥中。

```shell
honey@honey MINGW64 /d/keygen
$ ssh-keygen -t rsa -C yourmail@.com
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/honey/.ssh/id_rsa): id_rsa_gitee
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in id_rsa_gitee.
Your public key has been saved in id_rsa_gitee.pub.
The key fingerprint is:
...
The key's randomart image is:
...
```

- 也可指定文件路径，方便后面操作：`~/.ssh/id_rsa.gitlab `

`ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitee -C "yourmail@.com"`

- 直接回车3下，什么也不要输入，就是默认没有密码。
- 注意 gitee 和 gitlab 的文件名是不同的。

<!--more-->

## 2）GitLab 密钥

同上

- 跳转到keygen目录，git bash here。

- 先键入第二行命令

- 第四行 指定 id 文件名称为id_rsa_gitlab

- 第五、六行 设置无密码，直接回车两次。

- 会在keygen目录下生成文件  id_rsa_gitlab 和 id_rsa_gitlab.pub。

- id_rsa_gitlab.pub中存放的是公钥。

- 把公钥保存到gitlab网页密钥中。


```shell
honey@honey MINGW64 /d/keygen
$ ssh-keygen -t rsa -f id_rsa_gitlab -C "yourmail@.com"`
Generating public/private rsa key pair.
id_rsa_gitlab already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in id_rsa_gitlab.
Your public key has been saved in id_rsa_gitlab.pub.
The key fingerprint is:
...
The key's randomart image is:
...
```

`ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitlab -C "yourmail@.com"`

## 3）GitHub 密钥

同上

`ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C "yourmail@.com"`

## 4)完成后会在~/.ssh目录下生成以下文件

- id_rsa_github

- id_rsa_github.pub

- id_rsa_gitlab

- id_rsa_gitlab.pub

- id_rsa_gitee

- id_rsa_gitee.pub

## config文件

- 需要在.ssh文件夹下新建config文件，先新建config.txt，然后修改文件名去掉后缀。

- config文件内容如下：

- 其中第二行和第三中 需要填写gitlab的仓库地址

### gitlab
    Host git.xxx.cn
    HostName git.xxx.cn
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitlab
    User git
### gitee
    Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitee
    User git
### github
    Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_github
    User git

# 测试

1）Gitee 测试

$ ssh -T git@gitee.com
步骤如下：

在gitee注册用户登录，创建仓库。https://gitee.com/XXXX/c_demo

在.ssh目录 git bash here

honey@honey MINGW64 ~/.ssh
$ ssh -T git@gitee.com
Warning: Permanently added the ECDSA host key for IP address '180.97.125.228' to the list of known hosts.
Hi fengmi! You've successfully authenticated, but GITEE.COM does not provide shell access.
显示successfully。

2）GitLab 测试
git@git.XXX.cn 是gitlab的仓库地址

$ ssh -T git@git.XXX.cn
步骤如下：

跳转到.ssh目录，git bash here。

honey@honey MINGW64 ~/.ssh
$ ssh -T git@git.XXX.cn
The authenticity of host 'git.XXX.cn (111.203.245.108)' can't be established.
ECDSA key fingerprint is ....
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'git.emapgo.cn,111.203.245.108' (ECDSA) to the list of known hosts.
Welcome to GitLab, @mygitlabhostname!
显示welcome to gitlab。

3）Github 测试
同gitee

4)~/.ssh / 目录下最终拥有如下文件
windows .ssh目录 是 C:\Users\honey\.ssh 即C:\Users\windows登录名\.ssh

id_rsa_github
id_rsa_github.pub
id_rsa_gitlab
id_rsa_gitlab.pub
id_rsa_gitee
id_rsa_gitee.pub
config
known_hosts

4) 查看电脑中自己的配置信息
$ cat config
honey@honey MINGW64 ~/.ssh
$ cat config

# 使用
### 1）Gitlab 
在本地以后gitlab仓库，git pull ,git commit -m "XXX",git push 会提示 tell me who you are

此时需要填写local 用户名和邮箱，而不是 --global

$ ssh git config --local user.name "你的名字"
$ ssh git config --local user.email  "你的邮箱"
### 2）Gitee 
同上类似

### 3）Github 
同上类似

## 配置文件和配置字段信息解释

- `Host`
  它涵盖了下面一个段的配置，我们可以通过他来替代将要连接的服务器地址。
  这里可以使用任意字段或通配符。
  当ssh的时候如果服务器地址能匹配上这里Host指定的值，则Host下面指定的HostName将被作为最终的服务器地址使用，并且将使用该Host字段下面配置的所有自定义配置来覆盖默认的`/etc/ssh/ssh_config`配置信息。

- `Port`
  自定义的端口。默认为22，可不配置

- `User`
  自定义的用户名，默认为git，可不配置   ， User git #默认就是git，可以不写

- `HostName`
  真正连接的服务器地址

- `PreferredAuthentications`
  指定优先使用哪种方式验证，支持密码和秘钥验证方式

- `IdentityFile`
  指定本次连接使用的密钥文件


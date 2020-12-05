---
title: MySQL数据库函数
categories: 
- SQL知识
tags: 
- SQL函数
---

# MySQL数据库函数

- MySQL函数是数据库提供的内置函数，可以帮助用户更加方便地处理表中的数据。MySQL的内置函数，不但可以在SELECT查询语句中使用，同样可以在INSERT、UPDATE、DELETE等语句中使用。

## **1.数学函数：**

MySQL中内置的数学函数见下表：

| 函数                | 作用                                                    |
| ------------------- | ------------------------------------------------------- |
| ABS(x)              | 返回x的绝对值                                           |
| CEIL9x),CEILIN(x)   | 返回不小于x的最小整数值                                 |
| FLOOR(x)            | 返回不大于x的最大整数值                                 |
| RAND()              | 返回0~1的随机数                                         |
| RAND(x)             | 返回0~1的随机数，x值相同时返回的随机数相同              |
| SIGN(x)             | 返回参数作为-1、0、1的符号，该符号取决于x值的负、零、正 |
| PI()                | 返回圆周率的值，默认是7位，内部使用完全双精度值         |
| TRUNCATE(x,y)       | 返回数值x保留到小数点y位的值                            |
| ROUND(x)            | 返回离x最近的整数                                       |
| ROUND(x,y)          | 保留x小数点后y位的值，但截断时要进行四舍五入            |
| POW(x,y),POWER(x,y) | 返回x的y乘方的结果值                                    |
| SQRT(x)             | 返回非负数x的二次方根                                   |
| EXP(x)              | 返回e的x乘方后的值（自然对数的底）                      |
| MOD(x,y)            | 返回x除以y后的余数                                      |
| LOG(x)              | 返回x的基数为2的对数                                    |
| LOG10(x)            | 返回x的基数为10的对数                                   |
| RADIANS(x)          | 将角度转换为弧度                                        |
| DEGREES(x)          | 将弧度转化为角度                                        |
| SIN(x)              | 返回x的正弦，其中x使用弧度                              |
| ASIN(x,y)           | 返回x的反正弦，若x不在-1到1范围内则返回NULL             |
| COS(x)              | 返回x的余弦，其中x为弧度                                |
| ACOS(x,y)           | 返回x的反余弦，若x不在-1到1范围内则返回NULL             |
| TAN(x,y)            | 返回x的正切，其中x为弧度                                |
| ATAN(x),ATAN2(x)    | 返回x的反正切，y确定结果所在象限                        |
| COT(x,y)            | 返回x的余切                                             |

## **2.字符串函数：**

字符串函数是MySQL中最常用的的一类函数，主要用于处理表中的字符串。见下表：

| 函数                                                  | 作用                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| CHAR_LENGTH(s)                                        | 返回字符串s的字符数                                          |
| LENGTH(s)                                             | 返回字符串的字节长度，一个多字节字符算作多字节               |
| CONCAT(s)                                             | 返回结果为连接参数产生的字符串。为了避免将数字参数转化为二进制字符串使用SELECT CONCAT(CAST(int_col AS CHAR),char_col) |
| CONCAT_WS(x,s1,s2,...)                                | 同CONCAT()函数，但每个字符串都要加上x                        |
| INSERT(s1,x,len,s2)                                   | 将字符串s2替换为s1的x位置开始长度为len的字符串               |
| UPPER(s),UCASE(s)                                     | 将字符串s的所有字母都变成大写字母                            |
| LOWER(s),LCASE(s)                                     | 将字符串s的所有字母都变成小写字母                            |
| LEFT(s,n)                                             | 返回从字符串s开始的最左边n个字符                             |
| RIGHT(s,n)                                            | 返回从字符串s开始的最右边n个字符                             |
| LPAD(s1,len,s2)                                       | 返回字符串s1，其左边由字符串s2填补到len字符长度              |
| RPAD(s1,len,s2)                                       | 返回字符串s1，其右边被字符串s2填补至len字符长度              |
| LTRIM(s)                                              | 返回字符串s，其引导空格字符被删除                            |
| RTRIM(s)                                              | 返回字符串s，结尾空格字符被删去                              |
| TRIM(s)                                               | 去掉字符串s开始和结尾处的空格                                |
| TRIM(s1 FROM s)                                       | 去掉字符串s中开始处和结尾处的字符串s1                        |
| REPEAT(s,n)                                           | 将字符串s重复n次                                             |
| SPACE(n)                                              | 返回n个空格                                                  |
| REPLACE(s,s1,s2)                                      | 用字符串s2替代字符串s中的字符串s1                            |
| STRCMP(s1,s2)                                         | 比较字符串s1和s2                                             |
| SUBSTRING(s,n,len)                                    | 获取从字符串s第n个位置开始长度为len的字符串                  |
| MID(s,n,len)                                          | 同SUBSTRING()                                                |
| LOCATE(s1,s) POSITION(s1 IN s)                        | 从字符串s中获取s1的开始位置                                  |
| INSTR(s,s1)                                           | 从字符串s中获取s1的开始位置                                  |
| REVERSE(s)                                            | 将字符串s的顺序反过来                                        |
| ELT(n,s1,s2)                                          | 返回第n个字符串                                              |
| EXPORT_SET(bits,on,off[, separator[,number_of_bits]]) | 返回一个字符串，生成规则为：针对bits的二进制格式，如果位为1则返回一个on值，如果为0则返回一个off值。每个字符串用separator分隔，默认逗号；number_of_bits指定bits的可用位数，默认64位。示例 selectEXPORT_SET(182,'Y','N','@',6); |
| FIELD(s,s1,s2)                                        | 返回第一个与字符串s匹配的字符串的位置                        |
| FIND_IN_SET(s,s2)                                     | 返回在字符串s2中与s1匹配的字符串的位置                       |
| MAKE_SET(x,s1,s2,...)                                 | 按x的二进制数从s1,s2,...,sn中选取字符串                      |

<!-- more -->

## **3.日期和时间函数：**

日期和时间函数主要用于对表中的日期和时间数据的处理。见下表：

| 函数                                                         | 作用                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| CURDATE(),CURRENT_DATE()                                     | 返回当前日期                                            |
| CURTIME(),CURRENT_TIME()                                     | 返回当前时间                                            |
| NOW(),CURRENT_TIMESTAMP(), LOCALTIME(),SYSDATE(),LOCALTIMESTAMP() | 返回当前日期时间                                        |
| UNIX_TIMESTAMP()                                             | 以UNIX时间戳的形式返回当前时间                          |
| UNIX_TIMESTAMP(d)                                            | 将时间d以UNIX时间戳的形式返回                           |
| FROM_UNIXTIME(d)                                             | 把UNIX时间戳的时间转换为普通格式的时间                  |
| UTC_DATE()                                                   | 返回UTC（Universal Coordinated Time，国际协调时间）日期 |
| UTC_TIME()                                                   | 返回UTC时间                                             |
| MONTH(d)                                                     | 返回日期d中的月份值，范围1~12                           |
| MONTHNAME(d)                                                 | 返回日期d中的月份名称，如January                        |
| DAYNAME(d)                                                   | 返回日期d是星期几，如Monday                             |
| DAYOFWEEK(d)                                                 | 返回日期d是星期几，范围1~7，1表示星期日                 |
| WEEKDAY(d)                                                   | 返回日期d是星期几，范围0~6，0表示星期一                 |
| WEEK(d)                                                      | 计算日期d是本年的第几个星期，范围0~53                   |
| WEEKOFYEAR(d)                                                | 计算日期d是本年的第几个星期，范围1~54                   |
| DAYOFYEAR(d)                                                 | 计算日期d是本年的第几天                                 |
| DAYOFMONTH(d)                                                | 计算日期d是本月的第几天                                 |
| YEAR(d)                                                      | 返回日期d中的年份值                                     |
| QUARTER(d)                                                   | 返回日期d是第几季度，范围1~4                            |
| HOUR(t)                                                      | 返回时间t中的小时数                                     |
| MINUTE(t)                                                    | 返回时间t中的分钟数                                     |
| SECOND(t)                                                    | 返回时间t中的秒数                                       |
| EXTRACT(type FROM d)                                         | 从日期d中获取指定值，type指定返回的值，如YERR HOUR等    |
| TIME_TO_SEC(t)                                               | 将时间t转换为秒                                         |
| SEC_TO_TIME(t)                                               | 将以秒为单位的时间s转换为时分秒的格式                   |
| TO_DAYS(d)                                                   | 计算日期d~0000年1月1日的天数                            |
| FROM_DAYS(d)                                                 | 计算从0000年1月1日开始n天后的日期                       |
| DATEDIFF(d1,d2)                                              | 计算日期d1~d2之间间隔的天数                             |
| ADDDATE(d,n)                                                 | 计算起始日期d加上n天的日期                              |
| ADDDATE(d,INTERVAL expr type)                                | 计算起始日期d加上一个时段后的日期                       |
| DATE_ADD(d,INTERVAL expr type)                               | 同ADDDATE(d,INTERVAL expr type)                         |
| SUBDATE(d,n)                                                 | 计算起始日期d减去n天后的日期                            |
| SUBDATE(d,INTERVAL expr type)                                | 计算起始日期d减去一个时段后的日期                       |
| ADDTIME(t,n)                                                 | 计算起始时间t加上n秒的时间                              |
| SUBTIME(t,n)                                                 | 计算起始时间t减去n秒的时间                              |
| DATE_FROMAT(d,f)                                             | 按照表达式f的要求显示日期d                              |
| TIME_FROMAT(t,f)                                             | 按照表达式f的要求显示时间t                              |
| GET_FORMAT(type,s)                                           | 根据字符串s获取type类型数据的显示格式                   |

## **4.条件判断函数：**

条件函数用来在SQL语句中进行条件判断，根据不同的条件执行不同的SQL语句。见下表：

| 函数                                                         | 作用                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| IF(expr,v1,v2)                                               | 如果表达式expr成立，则执行v1；否则执行v2                     |
| IFNULL(v1,v2)                                                | 如果v1不为空，则显示v1的值；否则显示v2的值                   |
| CASE WHEN expr1 THEN v1 [WHEN expr2 THEN v2...][ELSE vn] END | case表示函数开始，end表示函数结束。如果表达式expr1成立，则返回v1的值；如果表达式expr2成立，则返回v2的值。依次类推，最后遇到else时，返回vn的值。 |
| CASE expr WHEN e1 THEN v1 [WHEN e2 THEN v2...][ELSE vn] END  | case表示函数开始，end表示函数结束。如果表达式expr取值为e1，则返回v1的值；如果表达式expr取值为e2，则返回v2的值。依次类推，最后遇到else，返回vn的值。 |

示例：select id,grade, CASE WHEN grade>1000000 THEN 'Very Good' WHEN grade<1000000 and grade>=100000 THEN 'Popularly' ELSE 'Not Good' END level from tb_bccd;

## **5.系统信息函数：**

系统信息函数用来查询MySQL数据库的系统信息。见下表：

| 函数                                | 作用                           | 示例                        |
| ----------------------------------- | ------------------------------ | --------------------------- |
| VERSION()                           | 获取数据库的版本号             | select VERSION();           |
| CONNECTION_ID()                     | 获取数据库的连接数             | select CONNECT_ID();        |
| DATABASE(),SCHEMA()                 | 获取当前数据库名               | select DATABASE();          |
| USER(),SYSTEM_USER(),SESSION_USER() | 获取当前用户                   | select USER();              |
| CURRENT_USER()                      | 获取当前用户                   | select CURRENT-USER();      |
| CHARSET(str)                        | 获取字符串str的字符集          | select CHARSET('mrsoft');   |
| COLLATION(str)                      | 获取字符串str的字符排列方式    | select COLLATION('mrsoft'); |
| LAST_INSERT_ID()                    | 获取最近生成的AUTO_INCREMENT值 | select LAST_INSERT_ID();    |

## **6.加密函数：**

数据库中有些敏感信息不希望被其他人看到，就可以用加密的方法使这些数据看似乱码。

| 函数                       | 作用                                                         | 示例                                        |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| PASSWORD(str)              | 对字符串str加密，不可逆加密                                  | select PASSWORD('mrsoft');                  |
| MD5(str)                   | 对字符串str进行加密，用于普通数据                            | select MD5('mrsoft');                       |
| ENCODE(str,pswd_str)       | 使用字符串pswd_str来加密字符串str，结果是二进制数，用BLOB类型保存 | select ENCODE('mrsoft','mr');               |
| DECODE(crypt_str,pswd_str) | 使用字符串pswd_str来解密字符串crypt_str，对ENCODE()解码      | select DECODE (ENCODE('mrsoft','mr'),'mr'); |

## **7.统计函数：**

| 函数           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| Avg(字段名)    | 获取指定列的平均值                                           |
| Count(字段名)  | 如指定一个记录，会统计该字段中非空记录数，如前面使用DISTINCT，则会统计不同值的记录，相同的值当作一条记录。 |
| Min(字段名)    | 获取指定字段的最小值                                         |
| Max(字段名)    | 获取指定字段的最大值                                         |
| Std(字段名)    | 指定字段的标准背离值                                         |
| Stdtev(字段名) | 与Std相同                                                    |
| Sum(字段名)    | 指定字段所有记录的总和                                       |

## **8.其他函数：**

| 函数                             | 作用                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| FORMAT(x,n)                      | 将数字x进行格式化，保留到小数点后n位，四舍五入               |
| ASCII(x)                         | 返回字符串s的第一个字符的ASCII码                             |
| BIN(x)                           | 返回x的二进制编码                                            |
| HEX(x)                           | 返回x的十六进制编码                                          |
| OCT(x)                           | 返回x的八进制编码                                            |
| CONV(x,f1,f2)                    | 将x从f1进制数变成f2进制数                                    |
| INET_ATON(IP)                    | 将IP地址转换为数字表示                                       |
| INET_NTOA(N)                     | 将数字n转换成IP形式                                          |
| GET_LOCT(name,time)              | 定义一个名称为name持续时长为time秒的锁。锁定成功返回1；如此尝试超时返回0；遇到错误返回NULL。 |
| RELEASE_LOCK(name)               | 解除名称为name的锁。解锁成功返回1，尝试超时返回0，失败返回NULL。 |
| IF_FREE_LOCK(name)               | 判断是否使用名为name的锁，成功返回0，否则返回1。             |
| BENCHMARK(count,expr)            | 将表达式expr重复执行count次，然后返回执行时间                |
| CONVERT(s USING cs)              | 将字符串s的字符集变成cs                                      |
| CAST(x AS type), CONVERT(x,type) | 将x变成type类型。这两个函数只对BINARY、CHAR、DATE、DATETIME、TIME、SIGNED INTEGER、UNSIGNED INTEGER类型起作用。只是改变了输出值的数据类型，并没有改变表中字段的类型。 |
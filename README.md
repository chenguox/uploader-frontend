# uploader-frontend

大文件上传、秒传、断点+续传

## 使用 Ant Design Pro 快速搭建项目

安装 ant design 和 pro-cli

> npm i @ant-design/pro-cli -g

创建项目

> pro create uploader-frontend

选择 umi 的版本

> umi@3

要全量的还是一个简单的脚手架?

> simple

安装依赖

> npm install

启动项目

> npm run start

项目瘦身

> 移除国际化，在 package.json 里执行 i18n-remove 命令，删除 locales 目录

## 工具封装

### 文件格式校验

问题：计算机怎么识别文件类型？

计算机并不是真的通过文件的后缀名来识别文件类型，而是通过 "魔数" （Margic Number）来区分。简单来说，同一类型的文件，起始几个字节都是固定的，我们根据这几个字节来判断文件类型。

例子：一张 png 图片，前 8 个字节是`0x89 50 4E 47 0D 0A 1A 0A`。

其他一些文件的二进制标识：

```js
1.JPEG/JPG - 文件头标识 (2 bytes): ff, d8 文件结束标识 (2 bytes): ff, d9
2.TGA - 未压缩的前 5 字节 00 00 02 00 00 - RLE 压缩的前 5 字节 00 00 10 00 00
3.PNG - 文件头标识 (8 bytes) 89 50 4E 47 0D 0A 1A 0A
4.GIF - 文件头标识 (6 bytes) 47 49 46 38 39(37) 61
5.BMP - 文件头标识 (2 bytes) 42 4D B M
6.PCX - 文件头标识 (1 bytes) 0A
7.TIFF - 文件头标识 (2 bytes) 4D 4D 或 49 49
8.ICO - 文件头标识 (8 bytes) 00 00 01 00 01 00 20 20
9.CUR - 文件头标识 (8 bytes) 00 00 02 00 01 00 20 20
10.IFF - 文件头标识 (4 bytes) 46 4F 52 4D
11.ANI - 文件头标识 (4 bytes) 52 49 46 46
```

代码实现：

```ts

```

### 文件切片处理

切片 + hash 生成

###

## 后端项目快速搭建

1、创建目录 uploader-koa

2、初始化 package.json

> npm init -y

3、安装 koa 库

> npm install koa

4、目录结构

5、安装 nodermon

npm install nodemon -D

6、编写测试代码

```js
const koa = require('koa');

const app = new koa();

app.listen(8888, () => {
  console.log('服务器启动成功~');
});
```

7、配置启动命令，并启动

> **"start": "nodemon ./src/main.js",**

解析 form-databody 是 form-data 格式，需要使用 multer

① 安装依赖：

> npm install koa-multer

② 使用 multer 中间件

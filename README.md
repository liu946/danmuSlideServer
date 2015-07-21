## Danmu Slide
这是一个网页展示slide + 实时弹幕评论系统。
在展示ppt的同时得到实时反馈，同时也可以用于多人版聊工具、代替微信平台的观众（匿名）提问系统等。

## slide展示

![图片展示](https://raw.githubusercontent.com/liu946/danmuSlideServer/master/docs/show1.png)


## 移动端弹幕发射器

移动端也有弹幕显示器，可以看到所有终端发送的弹幕。功能并不依赖slide网页展示端的存在，也可用于多人版聊。

![手机端图片展示](https://raw.githubusercontent.com/liu946/danmuSlideServer/master/docs/showphone.png)

## 运行方法

- 安装node.js
- 下载本仓库
- 终端运行

``` bash
npm install
node index.js
```

- 浏览器打开 
```
http://localhost:3000/danmu/2015-07-16-example
```
- 查看本机ip (```ipconfig``` for Win , ```ifconfig``` for Linux/OSX )
- 移动端浏览器打开

```
http://<您PC的IP>:3000/danmuup
```

## 配置及目录
```
├── docs # 文档
├── node_modules  # node包
├── public # 服务依赖
└── views 
    ├── layouts # 网站页面
    └── pages # ! 用户Slide目录
```
请将您的slide放在```/view/pages/```下。
格式目前为Jade需要写成expressjs要求的格式，可以参考或改写```2015-07-16-example.jade```

## feature
1. 加入markdown编辑器，自动生成slide jade模板
2. 加入网页嵌入功能，嵌入所有可展示网页
3. 美化选择页面
4. 登陆验证
5. 弹幕保存(file/databases)

## license
MIT

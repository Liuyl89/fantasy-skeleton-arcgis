
[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]

<div align="center">
  <h1>Fantasy Skeleton Bootstrap</h1>
  <p>网站开发骨架，集成Webpack、Bootstrap、Scss</p>
  <p>Auth by Liuyl from GisUni</p>
</div>

<h2 align="center">Install</h2>

```bash
下载所有文件到本地目录

#安装依赖
npm install

```

<h2 align="center">Usage</h2>

### 构建、发布

修改webpack.config.js文件

```js
#修改output.publicPath为实际发布路径
output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/fantasy-skeleton-bootstrap/'
},
```

执行

```bash
npm run build
```

将dist目录中生成的文件部署到服务器


### 不使用webpack-dev-server进行开发
```js
#修改output.publicPath为开发使用的虚拟路径
output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/fantasy-skeleton-bootstrap/'
},
```

执行

```bash
npm run build-dev
```

将服务器虚拟目录指向dist目录
src目录中代码文件改动时将自动重新编译，刷新页面即可生效


### 使用webpack-dev-server进行开发

执行

```bash
npm run webpack-dev-server
```

访问 http://localhost:8070/fantasy-skeleton-bootstrap/index.html 查看页面
src目录中代码文件改动时将自动重新编译，页面更改将自动刷新生效

### 开始开发
修改src/index.html文件增加HTML标签

修改src/app.js文件编写JS脚本

<h2 align="center">Feature</h2>

|特性|描述|
|:--------|:---------|
|HTML5 Boilerplate | 页面基于HTML5 Boilerplate v5.3.0构建，集成其中全部特性 |
|Webpack | 使用Webpack进行部署管理和开发支持，支持Hot Reload开发|
| Gulp | 使用Gulp进行构建任务管理 |
| ES6 | 使用ES6，集成了Bebal |
| Eslint | 使用Eslint进行代码质量控制 |
| jQuery | 集成了jquery 3.2.1 |
| lodash | 集成了lodash |
| Bootstrap | 集成了Bootstrap3 |
| sass | 支持使用sass定义样式|

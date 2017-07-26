<div align="center">
  <h1 align="center">Fantasy Skeleton React</h1>
  <p align="center">网站开发骨架，集成Webpack、Bootstrap、React、Sass</p>
  <p align="center">Auth by Liuyl from GisUni</p>
</div>

<h2 align="center">Install</h2>

下载所有文件到本地目录

执行

```bash
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
    publicPath: '/fantasy-skeleton-react/'
},
```

执行

```bash
npm run build
```

将dist目录中生成的文件部署到服务器

为了使带有路由信息的访问链接能够正确被解析，需要对服务器做一些额外配置

以nginx为例:

```bash
location ^~/fantasy-skeleton-react/{
	try_files $uri $uri/ /fantasy-skeleton-react/index.html;
}
```

通过如下url对页面进行访问：

http://yourHostname/fantasy-skeleton-react/

### 不使用webpack-dev-server进行开发
```js
#修改output.publicPath为开发使用的虚拟路径
output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/fantasy-skeleton-react/'
},
```

执行

```bash
npm run build-dev
```

将服务器虚拟目录指向dist目录

为了使带有路由信息的访问链接能够正确被解析，需要对服务器虚拟路径做一些额外配置

以nginx为例:

```bash
location ^~/fantasy-skeleton-react/{
	alias yourPhysicalPath\\fantasy-skeleton-react\\dist\\;
	try_files $uri $uri/ /fantasy-skeleton-react/index.html;
}
```

通过如下url对页面进行访问：

http://yourHostname/fantasy-skeleton-react/

src目录中代码文件改动时将自动重新编译，刷新页面即可生效


### 使用webpack-dev-server进行开发

执行

```bash
npm run webpack-dev-server
```

访问 http://localhost:8070/fantasy-skeleton-react/ 查看页面

src目录中代码文件改动时将自动重新编译，页面更改将自动刷新生效

### 开始开发
修改src/index.html文件增加HTML标签

修改src/app.js文件编写JS脚本

<h2 align="center">Feature</h2>
<div align="center">

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
| React | 集成了React |
| react-router | 集成了react-router 4.1.2|
| sass | 支持使用sass定义样式|

</div>
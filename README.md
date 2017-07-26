<div align="center">
  <h1 align="center">Fantasy Skeleton Arcgis</h1>
  <p align="center">网站开发骨架，集成Arcgis JavaScript API、Webpack、Bootstrap、React、Sass、</p>
  <p align="center">Auth by Liuyl from GisUni</p>
</div>

<h2 align="center">Notice</h2>

此项目基于fantasy-skeleton-react

为了集成Arcgis JavaScript API及其中的dojo，webpack的`output.libraryTarget`被设置为`amd`

这导致了一些问题……

因此，如果想要使用import语句引用除Arcgis JavaScript API外的第三方库，需要在webpack.config中进行额外配置

具体请参考webpack配置文件中HtmlWebpackPlugin插件的`dojoDefines`配置项

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
    publicPath: '/fantasy-skeleton-arcgis/'
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
location ^~/fantasy-skeleton-arcgis/{
	try_files $uri $uri/ /fantasy-skeleton-arcgis/index.html;
}
```

通过如下url对页面进行访问：

http://yourHostname/fantasy-skeleton-arcgis/

### 不使用webpack-dev-server进行开发
```js
#修改output.publicPath为开发使用的虚拟路径
output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/fantasy-skeleton-arcgis/'
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
location ^~/fantasy-skeleton-arcgis/{
	alias yourPhysicalPath\\fantasy-skeleton-arcgis\\dist\\;
	try_files $uri $uri/ /fantasy-skeleton-arcgis/index.html;
}
```

通过如下url对页面进行访问：

http://yourHostname/fantasy-skeleton-arcgis/

src目录中代码文件改动时将自动重新编译，刷新页面即可生效


### 使用webpack-dev-server进行开发

执行

```bash
npm run webpack-dev-server
```

访问 http://localhost:8070/fantasy-skeleton-arcgis/ 查看页面

src目录中代码文件改动时将自动重新编译，页面更改将自动刷新生效

### 开始开发
修改src/index.html文件增加HTML标签

修改src/app.js文件编写JS脚本

<h2 align="center">Feature</h2>
<div align="center">

|特性|描述|
|:--------|:---------|
|Arcgis JavaScript API | 集成Arcgis JavaScript API 4.4版本 |
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
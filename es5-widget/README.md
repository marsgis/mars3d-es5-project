<p align="center">
<img src="https://muyao1987.gitee.io/cdn/mars3d.cn/logo.png" width="300px" />
</p>

<p align="center">基于 原生JS下widget模块 的 Mars3D🌎基础项目模板（ES5版）</p>

<p align="center">
<a target="_black" href="https://github.com/marsgis/mars3d">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars3d">
<img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars3d?style=flat&logo=npm">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars3d">
<img alt="Npm version" src="https://img.shields.io/npm/v/mars3d.svg?style=flat&logo=npm&label=version"/>
</a>
</p>

 
 
## 项目介绍

Mars3D基础项目 是基于[Mars3D平台](http://mars3d.cn)做的一个应用系统，提供的一个基础项目模版，包含常用基础地图功能，可在该基础项目上快速开发搭建新项目。方便快速搭建三维地图产品，敏捷开发，可复用，支持各种配置，适合各种场景使用。

原生JS版 (widget方式) 的特点：
1. 基于**传统模式原生JS**技术栈下开发的
2. 使用[mars3d-widget](https://gitee.com/marsgis/mars3d-plugin/tree/master/mars3d-plugin-widget)插件进行模块化封装调用各功能
3. 火星科技在传统技术栈时(vue还没成熟流行时)多年来应用于无数项目，归纳总结的一个基础的项目模版




## 运行效果 
 [在线体验](http://marsgis.gitee.io/mars3d-es5-project/)  

也可以访问[基础项目在线](http://mars3d.cn/project/jcxm/index.html)体验效果和功能

 ![image](https://cdn.jsdelivr.net/gh/muyao1987/cdn/mars3d.cn/xm/jcxm/1.jpg)





## 1. widget模块化架构说明
widget模块化设计方式是我们在2016年设计的一种基于传统JS的模块化设计架构。设计思想主要是借鉴了gis行业的arcgis flexviewer和jsviewer，也借鉴了前端行业的React和Vue。当前最流行和通用的方式是整个项目用Vue、React或angular下开发最佳，用现代化的技术栈来做开发。 

### 1.1 使用widget的理由
目前还保留widget模块化的方式，是因为：
- 实用性，主要考虑到该方式使用多年，已在大量项目中使用, 积累比较多，并且成熟稳定；
- 并且当前还是有很大一部分公司项目还是传统方式开发的；
- widget模块也兼容vue、react、 angular下通过静态资源方式来使用。


### 1.2 widget的特点
- 将每个业务模块设计为独立的widget模块，互相都是独立的，互相解耦，类似vue组件。
- widget是按需加载和初始化，默认是不加载的，单击激活后才会加载其相关js和html等资源。 
- 有很多可配置的参数，无需代码即可按需配置自动释放激活、界面位置、大小等。


> 保留使用 widget模块化 方式，并不是指我们不用vue等现代化技术栈，而是具体按公司人员研发水平和技术栈情况按需选择，适合自己的才是最好的。




## 2. 基础项目
 我们通过vscode打开该项目，项目中最重要的是2个点是，`json配置文件` 和 `widget模块化`开发，一般开发项目只用修改配置文件和开发新的widget即可。

- `config/config.json`是地图初始化构造参数配置文件
- `config/widget.json`为项目widget的模块配置信息文件
- `widgets目录`为模块功能目录，也可以按业务分在多个目录中，比如`widgetsTS目录`


 ![image](https://cdn.jsdelivr.net/gh/muyao1987/cdn/mars3d.cn/xm/jcxm/1.jpg) 

### 2.1 下载代码
目前我们已经开源了基础项目的基础框架和一些部分widget。可以从下面链接下载代码：
 
1. 国外Github:[https://github.com/marsgis/mars3d-es5-project](https://github.com/marsgis/mars3d-es5-project)
2. 国内Gitee [https://gitee.com/marsgis/mars3d-es5-project](https://gitee.com/marsgis/mars3d-es5-project)


在任意开发编辑器（如vscode等）或http服务器(如node、nginx、tomcat、IIS等)下直接运行浏览index.html即可
  
>电子沙盘、综合态势等系统代码内部结构和基础项目类同，只是在widget功能数量和样式上有所不同。


::: danger 
如果需要所有功能模块的widget和其他一些项目模板，需要联系我们付费购买 项目源代码。
::: 




### 运行方式1：使用vscode及其插件

在任意开发编辑器（如vscode等）或http服务器(如node、nginx、tomcat、IIS等)下直接运行浏览`index.html`或对应示例页面即可 ，

建议使用VScode工具打开代码目录（请参考上一章节安装好VScode 及 Live Server插件）。

- 推荐使用 vscode，安装参考[开发环境搭建教程](guide/start/env.html)
- 安装 vscode 插件，推荐安装 Live Server

 参考下图通过Live Server访问各页面

 ![image](http://mars3d.cn/dev/img/guide/start-example-run.jpg) 


### 运行方式2：运行npm命令

#### 首次运行前安装依赖
```
npm install

//或使用代理
npm i --registry=http://registry.taobao.org
```

#### 启动开发环境
```
npm run serve
```

#### 编译构建
```
npm run build //编译后生成在dist目录，拷贝出去发布即可
npm run serve:dist  //测试dist运行状态
```




#### mars3d-widget插件
 为了更容易理解内部逻辑，您可以下载[mars3d-widget插件源码](https://gitee.com/marsgis/mars3d-plugin) 进行查阅。

#### 下载最新lib
 建议从[http://mars3d.cn/download](http://mars3d.cn/download)下载最新mars3d类库后覆盖至`lib/`目录下即可。




### 2.2 include-lib.js文件说明 

我们当前项目内的第三方类库及我们的sdk类库都存放在lib目录下，每个目录均有`README.md`文件说明该类库的github地址、官网和用途等信息。

 ![image](/dev/img/guide/start-includeLib-ml.jpg) 

为了方便切换和引入第3方lib，我们编写了一个独立的js文件[include-lib.js](https://unpkg.com/marsgis-lib/lib//include-lib.js)来统一调用使用第3方lib,在需要的页面按下面方式引入lib：
```html
<!--第三方lib-->
<script type="text/javascript" src="../lib/include-lib.js" libpath="../lib/"
    include="font-awesome,turf,mars3d"></script>
```
该方式等价于（如不习惯include-lib.js，也可以改为下面演示的直接引入方式）： 

```html
<!--对应font-awesome-->
<link rel="stylesheet" href="../lib/fonts/font-awesome/css/font-awesome.min.css">

<!--对应turf-->
<script type="text/javascript" src="../lib/turf/turf.min.js"></script>

<!--对应mars3d-->
<link rel="stylesheet" href="../lib/Cesium/Widgets/widgets.css">
<script type="text/javascript" src="../lib/Cesium/Cesium.js"></script>
<link rel="stylesheet" href="../lib/mars3d/mars3d.css">
<script type="text/javascript" src="../lib/mars3d/mars3d.js"></script>
```
 
 
 

## 3. widget初始化及管理

 目前平台示例和项目中使用到的[widget.json](http://mars3d.cn/project/jcxm/config/widget.json) 是静态json文件方式
 文件中配置参数与[mars3d.widget.init方法API](http://mars3d.cn/api/widget.html#.init)的方法参数是完成相同一致的，代码中加载json后传入到init方法中。
 
 widget初始化方法：
 ```js
//初始化widget管理器
mars3d.widget.init(map, widgetCfg, './') //tip: 第3个参数支持定义widget目录的相对路径。
```

### 3.1 widget的管理
在外部调用widget功能，都是通过[mars3d.widget静态类](http://mars3d.cn/api/widget.html)来统一管理的，更多方法可以参阅该类的API文档。
 
比如激活widet：在需要外部使用的地方通过 mars3d.widget.activate([参数](http://mars3d.cn/api/widget.html#.WidgetOptions)) 来激活widget模块, 参数支持多种模式可多样化兼容使用, 比如：
 ```js
//常用，直接使用uri
mars3d.widget.activate("widgets/bookmark/widget.js"); 

//支持所有可配参数和自定义参数，在widget.js内部通过this.config可获取传入的参数
mars3d.widget.activate({name:"书签", uri: "widgets/bookmark/widget.js "}); 
```


### 4. 单个widget模块组成

每个widget模块必须存在 widget.js 文件，该文件内部定义了一个继承了 [BaseWidget类](http://mars3d.cn/api/BaseWidget.html)的子类。

类内最重要的几个属性和方法如下：
|  分类  |名称  | 功能| 
| ----| ----  | ---- | 
| get属性 | resources   |需要预先加载到主页面的js、css资源文件 | 
| get属性 | view   |存在弹窗或界面时配置，具体详见后节说明 | 
| 内部变量 | config   |对应widget定义的或传入的配置信息  |   
| 内部变量 | path   |当前widget所在目录的相对于网页的路径  |   
| 内部变量 | map   |当前Map地图对象  |   
| 方法 | create   |插件初始化触发，仅执行1次   |   
| 方法 | winCreateOK   |view属性定义的界面每次初始化后调用   |   
| 方法 | activate   | 打开激活插件 触发   |   
| 方法 | disable   | 关闭释放插件 触发   |   

### 4.1 view属性
 默认每个插件是无界面或弹窗的, 如果需要有对应的弹窗或界面(如弹窗、输入栏、菜单等)请定义`view`属性。

请参考贝`widgets\_example* `命名的示例widget来新建widget模块，建议直接复制后改下目录名称即可。


view配置中必须存在2个属性：type标识类型，url为html地址。 目前view有下面3种模式供使用：

|  type属性  | 功能| 对应的示例 |  说明  | 
| ----  | ---- | ----   |----  | 
| window  |iframe模式弹窗 |_example | 独立的html子页面，比较自由，简单粗暴、无任何限制；可以每个页面用不同的UI和第三方插件不用考虑冲突问题；任何水平的开发人员均容易快速开发。|
| divwindow  |div元素模式弹窗 |_example_divwin | 可直接互相访问，这种模式弊端是易引起模块间id命名冲突，在css和html中命名时需注意。|
| append  |任意html元素 |_example_append | 任意div节点，比较自由. |

 
#### window时：
view.html页面（或引入的view.js中）必须定义一个initWidgetView方法，框架会自动调用进行传入当前widget对象，用于页面中调用widget中的方法属性。
可以配置windowOptions参数来定义弹窗的大小、位置等。
 ```js 
get view() {
   return {
      type: 'window',
      url: 'view.html',
      windowOptions: { width: 250 },
   }
}
 ```

#### divwindow时：
此模式不用单独的js， view界面相关js逻辑全部写在widget.js中
同样支持windowOptions参数配置。
 ```js 
get view() {
   return {
      type: 'divwindow',
      url: 'view.html',
      windowOptions: { width: 210, height: 210 },
   }
}
 ```

#### append时：
将view的html直接添加至主页面中指定id的DOM节点下，通过`parent`属性配置指定，默认是`body`。
 ```js 
get view() {
   return { type: 'append', url: 'view.html', parent: '#centerDiv' }
}
 ```




 
### 4.2 widget被激活后执行流程
widget激活后页面执行流程:
- 1. 引入加载widget.js到index.html页面上
- 2. （如果有resources配置）引入加载resources资源到index.html页面上
- 3. （如果有view配置）打开view弹窗或构造view界面

> widget激活后执行方法顺序：
   create   =>      winCreateOK       =>    activate     =>       view中的 initWidgetView 


### 4.3 测试开发好的widget
 当还没有菜单时，需要测试widget功能，可以2种方式：

 一是在url中传入widget参数方式激活对应widget来测试.比如：
 > [http://mars3d.cn/project/jcxm/index.html?widget=widgets/plot/widget.js](http://mars3d.cn/project/jcxm/index.html?widget=widgets/plot/widget.js)
 
 二是在widget.json中可以加配置` "debugger": true,`  打开 widget测试栏 功能，方便测试及触发激活widget，发布的正式版本记得改回 false 或删除。
```json
{
  "debugger":true,
  "version": "20220120",
  "defaultOptions": {
    "style": "dark",
    "windowOptions": {
      "skin": "layer-mars-dialog animation-scale-up",
      "position": { "top": 50,  "right": 10 },
      "maxmin": true,
      "resize": true
    },
    "autoReset": false,
    "autoDisable": true,
    "disableOther": true
  },
  "openAtStart": [],
  "widgets": []
}
```
运行后效果：
![image](/dev/img/guide/project-widget-testbar.jpg) 


## 4.4 向widget传值示例
 
在qyPoint模块中(widgetsTS\qyPoint\widget.js)单击地图上的点后，激活弹出详情窗口qyDetailsView模块

  ```js  
showDetails(item) { 
      mars3d.widget.activate({
         uri: 'widgetsTS/qyDetailsView/widget.js',
         dataQy: item,
      })
}
```

qyDetailsView模块(widgetsTS\qyDetailsView\widget.js)中通过this.config获取传过来的值

```js  
getData() {
   var item = this.config.dataQy //传入过来的参数
   return item
}
```


## 4.5 不同widget之间的通信交互示例
 
可以利用mars3d.widget作为桥梁，通过事件的方式交互，这种比较自由方便，注意项目内**事件名称唯一**即可。

```js  
//演示：抛出事件，在其他widget或vue中监听使用  widgets\centerXY\widget.js
mars3d.widget.fire("centerXY",{position:position })

//演示：接收的widget内抛出的事件  js、vue或其他widget.js中
mars3d.widget.on('centerXY', function (event) {
   console.log('在widget进行了坐标定位1', event)
})

//如果在弹窗的view.js中
parent.mars3d.widget.on('centerXY', function (event) {
   console.log('在widget进行了坐标定位2', event)
})

```

### A模块 持续更新B模块
在roamFly模块中，动态去更新已打开的roamChars模块，更新显示数据
```js 
//持续更新
updateCharsWidgeFlyOk(alllen) { 
   //抛出事件
   mars3d.widget.fire("updateRoamChars",{ data:alllen })
}
```
roamChars模块中监听事件
```js 
create() {
   //接收roamFly的widget内抛出的事件
   mars3d.widget.on('updateRoamChars', function (event) {
      console.log('接收到了数据', data)
   })
}
```


### 2个iframe弹窗时，A的view内调用B的view内 
A、B两个都是iframe弹窗模式的widget模块时，在A模块中的view.html中需要调用B模块的view.html

> 【主页面】widget.js都在index.html主页面; 【iframe子页面】 2个view.html（含view.js）是iframe子页面。
 
如果不用事件时，其调用流程是下图过程：
 ![image](/dev/img/guide/project-widget-2view.jpg) 
 

如果通过事件方式可以下面的方式：
```js  
//演示：在A模块中的view.html中抛出事件
parent.mars3d.widget.fire("widget2widget",{ data: position })

//演示：如果在弹窗的view.js中
parent.mars3d.widget.on('widget2widget', function (event) {
   console.log('接收到了A模块抛出的事件', event)
})

```




## 5. 学习路线
以上介绍的这么只是让大家对Mars3D基础项目的基本情况和架构做了概览了解。下一步就需要大家静下心来阅读代码了，学习没有捷径，可以按下面路线一步步来学习。

查看已有的3个 “example示例”空白模版的代码、配置信息、运行效果。熟悉widget机制。


> _example模块 => 已有的widgets模块 => 编写全新的widget
 

 ![image](/dev/img/guide/project-widget-example.jpg) 
 
 

## Mars3D 是什么 
>  `Mars3D平台` 是[火星科技](http://marsgis.cn/)研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

 > Mars3D平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars3D产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。

### 相关网站 
- Mars3D官网：[http://mars3d.cn](http://mars3d.cn)  

- Mars3D开源项目列表：[https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)


## 版权说明
1. Mars3D平台由[火星科技](http://marsgis.cn/)自主研发，拥有所有权利。
2. 任何个人或组织可以在遵守相关要求下可以免费无限制使用。

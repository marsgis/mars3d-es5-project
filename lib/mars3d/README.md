# mars3d
  Mars3D ( MarsGIS for Cesium ) 地图平台核心SDK类库


## Mars3D介绍
 `Mars3D三维地球平台软件` 是一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

## 相关网站
[产品介绍手册](http://mars3d.cn/docs/file/cpjs.pdf)  
[Mars3D官网](http://mars3d.cn)  
[GitHub开源](https://github.com/marsgis/mars3d)

 

## 版本信息
   具体版本号及版本日期等信息，请在浏览器 F12控制台 查看打印值 
 

## 相关依赖
 核心依赖库： Cesium   
 部分依赖库（非必须）： 
    turf（仅部分功能中使用以下6个方法：`area 求面积, rhumbBearing 求角度,  bezierSpline 计算曲线,buffer 缓冲分析,centerOfMass 计算中心点, booleanPointInPolygon 判断点在面内`）  
 

子目录说明： plugins 所有基于ceisum或mars3d的一些扩展功能插件或类(每个子目录都有readme进行说明)。

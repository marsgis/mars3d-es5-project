# geojson 格式转换工具合集
kml/kmz、shp、超图 iserver json 与 GeoJSON 格式的互相转换工具类（木遥自研）

## 简要介绍
- `kml-geojson`（kgUtil）：kml 或 kmz 格式与 GeoJSON 格式互相转换
- `shp-geojson`（shpUtil）：shp 与 geojson 互转
- `iserver-geojson`（iserverGeojson）：超图 iserver 服务返回的 json 转为 geojson

## 相关地址
- github地址：https://github.com/muyao1987/kml-geojson

## 本地版本信息
见各源文件头部编译日期（shp-geojson 编译日期 2025-08-27；iserver-geojson 编译日期 2025-12-23）

## 本地文件说明
目录内文件：`iserver-geojson-src.js`、`iserver-geojson.js`、`kml-geojson-src.js`、`kml-geojson-src.js.map`、`kml-geojson.js`、`shp-geojson-src.js`、`shp-geojson-src.js.map`、`shp-geojson.js`

## 运行命令
 
### 首次运行前安装依赖
 `npm install` 或 `cnpm install`
  
### 打包编译项目
 运行`npm run build`来构建项目。 


## 使用示例
 
### KML转GeoJSON示例：
```js
//直接加载url
kgUtil.toGeoJSON('https://data.mars3d.cn/file/kml/NAVWARN.kmz').then((geojoson) => {
  console.log(geojoson) 
})

//加载input文件控件的二进制流
kgUtil.toGeoJSON(e.target.files[0]).then((geojoson) => {
  console.log(geojoson) 
})

//加载kml文档对象
$.ajax('https://data.mars3d.cn/file/kml/dg8.kml').done(function (xml) {
  kgUtil.toGeoJSON(xml).then((geojoson) => {
    console.log(geojoson) 
  })
})
```

### GeoJSON转KML示例

```js 
var kml = kgUtil.tokml(geojsonObject, {
  name: 'Mars3D标绘数据',
  documentName: 'Mars3D标绘数据文件',
  documentDescription: '标绘数据 by mars3d.cn',
  simplestyle: true,
}) 
```

## 版权说明
> 本目录为木遥自有代码，非第三方组件，著作权归木遥所有，无第三方署名要求。

补充说明：`iserver-geojson` 内含超图 SuperMap 按 Apache-2.0 授权的代码（源文件头已标注 "Contains code Copyright (c) 2000-2022 SuperMap Software Co.Ltd., licensed under Apache-2.0"），再分发时请保留该文件头声明。

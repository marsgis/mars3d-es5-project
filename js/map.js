"use script" //开发环境建议开启严格模式
//系统主入口

var map //地球对象
var request //传入的get参数

//地图
$(document).ready(function () {
  //判断webgl支持
  if (!mars3d.Util.webglreport()) {
    mars3d.Util.webglerror()
  }

  //记录url传入参数
  request = haoutil.system.getRequest()
  if (window.top) {
    //有父级
    request = $.extend(request, haoutil.system.getRequest(window.top))
  }

  var configfile = "config/config.json" //默认地址
  if (request.config) {
    //url传入地址
    configfile = request.config
  }

  haoutil.loading.show()

  mars3d.Util.fetchJson({ url: configfile })
    .then(function (json) {
      console.log("读取 config.json 配置文件完成", json) // 打印测试信息
      haoutil.loading.hide()

      //构建地图
      initMap(json)

      setTimeout(removeMask, 3000) //欢迎UI关闭处理
    })
    .catch(function (error) {
      console.log("加载JSON出错", error)

      removeMask()
      haoutil.loading.hide()
      haoutil.alert("1.请检查文件内 json 语法是否存在问题。<br />2.请在浏览器输入文件url测试是否可以访问。", configfile + " 文件加载失败")
    })

  initUI()
})

function removeMask() {
  $("#mask").remove()
}

//UI界面相关
function initUI() {
  haoutil.oneMsg("首次访问系统无缓存会略慢，请耐心等待！", "load3d_tip")
}

//初始化地图
function initMap(mapOptions) {
  //合并属性参数，可覆盖config.json中的对应配置
  // mapOptions = mars3d.Util.merge(mapOptions, {})

  //创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)

  //构造widget
  initWidget(map)

  //如果有xyz传参，进行定位
  if (haoutil.isutil.isNotNull(request.x) && haoutil.isutil.isNotNull(request.y)) {
    map.setCameraView(request, { duration: 0, isWgs84: true })
  }

  //开场动画
  if (window.location.hostname.indexOf("127.0.0.1") == -1) {
    map.openFlyAnimation()
  }

  //针对不同终端的优化配置
  if (mars3d.Util.isPCBroswer()) {
    map.zoomFactor = 2.0 // 鼠标滚轮放大的步长参数

    // IE浏览器优化
    if (window.navigator.userAgent.toLowerCase().indexOf("msie") >= 0) {
      map.viewer.targetFrameRate = 20 // 限制帧率
      map.scene.requestRenderMode = false // 取消实时渲染
    }
  } else {
    map.zoomFactor = 5.0 // 鼠标滚轮放大的步长参数

    // 移动设备上禁掉以下几个选项，可以相对更加流畅
    map.scene.requestRenderMode = false // 取消实时渲染
    map.scene.fog.enabled = false
    map.scene.skyAtmosphere.show = false
    map.scene.globe.showGroundAtmosphere = false
  }

  //二三维切换不用动画
  if (map.sceneModePicker) {
    map.sceneModePicker.viewModel.duration = 0.0
  }

  //webgl渲染失败后，刷新页面
  // map.on(mars3d.EventType.renderError, function (scene, error) {
  //   window.location.reload();
  // });

  //绑定单击显示BIM的构件树
  bindShowTilesParts()

  //演示：接收的widget内抛出的事件
  es5widget.on("centerXY", function (event) {
    console.log("在widget进行了坐标定位", event)
  })

  // 用于 config.json 中 西藏垭口 图层的详情按钮 演示
  window.showPopupDetails = (item) => {
    haoutil.alert(item.NAME)
  }

  // 用于 config.json中配置的图层，绑定额外方法和参数
  const tiles3dLayer = map.getLayerById(204012) // 上海市区
  if (tiles3dLayer) {
    tiles3dLayer.options.onSetOpacity = function (opacity) {
      tiles3dLayer.style = {
        color: {
          conditions: [
            ["${floor} >= 200", "rgba(45, 0, 75," + 0.5 * opacity + ")"],
            ["${floor} >= 100", "rgba(170, 162, 204," + opacity + ")"],
            ["${floor} >= 50", "rgba(224, 226, 238," + opacity + ")"],
            ["${floor} >= 25", "rgba(252, 230, 200," + opacity + ")"],
            ["${floor} >= 10", "rgba(248, 176, 87," + opacity + ")"],
            ["${floor} >= 5", "rgba(198, 106, 11," + opacity + ")"],
            ["true", "rgba(127, 59, 8," + opacity + ")"]
          ]
        }
      }
    }
  }
  //下面可以继续加项目相关的其他代码
}

//初始化widget相关
function initWidget(map) {
  haoutil.loading.show()

  mars3d.Util.fetchJson({ url: "config/widget.json" })
    .then(function (json) {
      haoutil.loading.hide()

      //url如果有传参时的处理
      if (haoutil.isutil.isNotNull(request.widget)) {
        if (request.onlyStart) {
          json.openAtStart = []
        }
        json.openAtStart.push({
          uri: request.widget,
          name: request.name || "",
          windowOptions: {
            closeBtn: !request.onlyStart
          },
          request: request
        })
        map.flyHome({ duration: 0 })
      }
      //初始化widget管理器
      es5widget.init(map, json, "./") //tip: 第3个参数支持定义widget目录的相对路径。

      if (window.lastWidgetItem) {
        activateWidget(lastWidgetItem)
        lastWidgetItem = null
      }
    })
    .catch(function (error) {
      console.log("加载JSON出错", error)

      haoutil.loading.hide()
      haoutil.alert("config/widget.json文件加载失败！")
    })

  //widget相关事件监听
  // es5widget.on(es5widget.EventType.load, function (event) {
  //     console.log("引入加载了widget的js", event);
  // })
  // es5widget.on(es5widget.EventType.created, function (event) {
  //     console.log("创建了widet", event);
  // })
  es5widget.on(es5widget.EventType.activated, function (event) {
    console.log("激活了widget", event)
  })
  es5widget.on(es5widget.EventType.disabled, function (event) {
    console.log("释放了widget", event)
  })
}

//bim构件的处理
function bindShowTilesParts() {
  //单击地图事件
  map.on(mars3d.EventType.clickGraphic, function (event) {
    if (!(event.pickedObject instanceof Cesium.Cesium3DTileFeature)) {
      //不是BIM数据时跳出
      return
    }

    let layer = event.layer
    if (!layer.options.scenetree) {
      //未配置scenetree时跳出
      return
    }

    var tilesParts = "widgets/tilesParts/widget.js"

    if (es5widget.isActivate(tilesParts)) {
      var parts = es5widget.getClass(tilesParts)
      if (parts.config.layerCfg == layer.options) {
        //当前已激活,并且单击了相同模型时跳出
        return
      }
    }

    es5widget.activate({
      name: layer.name + " 构件",
      uri: tilesParts,
      layerCfg: layer.options,
      disableOther: false
    })
  })
}

//外部页面调用
var lastWidgetItem
function activateWidget(item) {
  if (!map) {
    lastWidgetItem = item
    return
  }

  if (es5widget.isActivate(item.uri)) {
    es5widget.disable(item)
  } else {
    es5widget.activate(item)
  }
}

function disableWidget(item) {
  es5widget.disable(item)
}

function activateFunByMenu(fun) {
  eval(fun)
}

function goHome() {
  es5widget.disableAll()
  map.flyHome()
}

'use script' //开发环境建议开启严格模式
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

  var configfile = 'config/config.json' //默认地址
  if (request.config) {
    //url传入地址
    configfile = request.config
  }

  haoutil.loading.show()

  $.ajax({
    type: 'get',
    dataType: 'json',
    url: configfile,
    timeout: 0,
    success: function (data) {
      haoutil.loading.hide()

      //构建地图
      initMap(data.map3d)

      setTimeout(removeMask, 3000) //欢迎UI关闭处理
    },
    error: function (request, textStatus) {
      removeMask()
      haoutil.loading.hide()
      haoutil.alert('1.请检查文件内 json 语法是否存在问题。<br />2.请在浏览器输入文件url测试是否可以访问。', configfile + ' 文件加载失败')
      console.log(textStatus, request)
    },
  })

  initUI()
})

function removeMask() {
  $('#mask').remove()
}

//UI界面相关
function initUI() {
  haoutil.oneMsg('首次访问系统无缓存会略慢，请耐心等待！', 'load3d_tip')
}

//初始化地图
function initMap(mapOptions) {
  //合并属性参数，可覆盖config.json中的对应配置
  // mapOptions = mars3d.Util.merge(mapOptions, {})

  //创建三维地球场景
  map = new mars3d.Map('mars3dContainer', mapOptions)

  //构造widget
  initWidget(map)

  //如果有xyz传参，进行定位
  if (haoutil.isutil.isNotNull(request.x) && haoutil.isutil.isNotNull(request.y)) {
    map.setCameraView(request, { duration: 0, isWgs84: true })
  }

  //开场动画
  map.openFlyAnimation()

  //针对不同终端的优化配置
  if (haoutil.system.isPCBroswer()) {
    // Cesium 1.61以后会默认关闭反走样，对于桌面端而言还是开启得好，
    map.scene.postProcessStages.fxaa.enabled = true

    //鼠标滚轮放大的步长参数
    map.scene.screenSpaceCameraController._zoomFactor = 2.0

    //IE浏览器优化
    if (window.navigator.userAgent.toLowerCase().indexOf('msie') >= 0) {
      map.viewer.targetFrameRate = 20 //限制帧率
      map.viewer.requestRenderMode = true //取消实时渲染
    }
  } else {
    //鼠标滚轮放大的步长参数
    map.scene.screenSpaceCameraController._zoomFactor = 5.0

    //移动设备上禁掉以下几个选项，可以相对更加流畅
    map.viewer.requestRenderMode = true //取消实时渲染
    map.scene.fog.enabled = false
    map.scene.skyAtmosphere.show = false
    map.scene.globe.showGroundAtmosphere = false
  }

  //二三维切换不用动画
  if (map.sceneModePicker) {
    map.sceneModePicker.viewModel.duration = 0.0
  }

  //webgl渲染失败后，刷新页面
  //map.scene.renderError.addEventListener(function (scene, error) {
  //    window.location.reload();
  //});

  //绑定单击显示BIM的构件树
  bindShowTilesParts()

  //下面可以继续加项目相关的其他代码
}

//初始化widget相关
function initWidget(map) {
  haoutil.loading.show()

  $.ajax({
    type: 'get',
    dataType: 'json',
    url: 'config/widget.json',
    timeout: 0,
    success: function (widgetCfg) {
      haoutil.loading.hide()

      //url如果有传参时的处理
      if (haoutil.isutil.isNotNull(request.widget)) {
        if (request.onlyStart) {
          widgetCfg.openAtStart = []
        }
        widgetCfg.openAtStart.push({
          uri: request.widget,
          name: request.name || '',
          windowOptions: {
            closeBtn: !request.onlyStart,
          },
          request: request,
        })
        map.flyHome({ duration: 0 })
      }

      //初始化widget管理器
      mars3d.widget.init(map, widgetCfg, './') //tip: 第3个参数支持定义widget目录的相对路径。

      if (window.lastWidgetItem) {
        activateWidget(lastWidgetItem)
        lastWidgetItem = null
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      haoutil.loading.hide()
      haoutil.alert('config/widget.json文件加载失败！')
    },
  })

  //widget相关事件监听
  // mars3d.widget.on(mars3d.widget.EventType.load, function (event) {
  //     console.log("引入加载了widget的js", event);
  // })
  // mars3d.widget.on(mars3d.widget.EventType.created, function (event) {
  //     console.log("创建了widet", event);
  // })
  mars3d.widget.on(mars3d.widget.EventType.activated, function (event) {
    console.log('激活了widget', event)
  })
  mars3d.widget.on(mars3d.widget.EventType.disabled, function (event) {
    console.log('释放了widget', event)
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

    var tilesParts = 'widgets/tilesParts/widget.js'

    if (mars3d.widget.isActivate(tilesParts)) {
      var parts = mars3d.widget.getClass(tilesParts)
      if (parts.config.layerCfg == layer.options) {
        //当前已激活,并且单击了相同模型时跳出
        return
      }
    }

    mars3d.widget.activate({
      name: layer.name + ' 构件',
      uri: tilesParts,
      layerCfg: layer.options,
      disableOther: false,
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
  mars3d.widget.activate(item)
}
function disableWidget(item) {
  mars3d.widget.disable(item)
}
function activateFunByMenu(fun) {
  eval(fun)
}

function goHome() {
  mars3d.widget.disableAll()
  map.flyHome()
}

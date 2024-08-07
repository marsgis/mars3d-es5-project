"use script" //开发环境建议开启严格模式
;(function (window, mars3d) {
  //创建widget类，需要继承BaseWidget
  class MyWidget extends es5widget.BaseWidget {
    //弹窗配置
    get view() {
      let index = this.getBasemaps().length

      let width, height
      if (index <= 4) {
        width = 190
        height = Math.ceil(index / 2) * 100 + 80
        // height = Math.ceil(index / 2) * 100 + 70   原本是70但是有的内容没有展示
      } else if (index > 4 && index <= 6) {
        width = 270
        height = Math.ceil(index / 3) * 100 + 80
      } else {
        width = 360
        height = Math.ceil(index / 4) * 105 + 80
      }

      return {
        type: "window",
        url: "view.html",
        windowOptions: {
          width: width,
          height: height
        }
      }
    }
    //初始化[仅执行1次]
    create() {}
    //每个窗口创建完成后调用
    winCreateOK(opt, result) {
      this.viewWindow = result
    }
    //打开激活
    activate() {}
    //关闭释放
    disable() {
      this.viewWindow = null
    }
    getBasemaps() {
      return this.map.getBasemaps(true)
    }

    updateBasemap(item) {
      this.map.basemap = item
      // this.disableBase()
    }
  }

  //注册到widget管理器中。
  es5widget.bindClass(MyWidget)

  //每个widet之间都是直接引入到index.html中，会存在彼此命名冲突，所以闭包处理下。
})(window, mars3d)

;(function (window, mars3d) {
  //创建widget类，需要继承BaseWidget
  class MyWidget extends es5widget.BaseWidget {
    //弹窗配置
    get view() {
      return {
        type: "window",
        url: "view.html",
        windowOptions: {
          width: 250
        }
      }
    }
    //每个窗口创建完成后调用
    winCreateOK(opt, result) {
      this.viewWindow = result
    }
    //激活插件
    activate() {}
    //释放插件
    disable() {
      this.viewWindow = null
    }
    showExtent(options) {
      this.map.setCameraView(options)

      console.log("视角定位：" + JSON.stringify(options))
    }
    getThisExtent() {
      return this.map.getCameraView()
    }
    getExtentImage() {
      return this.map.expImage({
        download: false,
        width: 300 //指定 高  或 宽
      })
    }
  }

  //注册到widget管理器中。
  es5widget.bindClass(MyWidget)

  //每个widet之间都是直接引入到index.html中，会存在彼此命名冲突，所以闭包处理下。
})(window, mars3d)

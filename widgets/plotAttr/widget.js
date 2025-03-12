"use script" //开发环境建议开启严格模式
;(function (window, mars3d) {
  //创建widget类，需要继承BaseWidget
  class MyWidget extends es5widget.BaseWidget {
    //弹窗配置
    get view() {
      return {
        type: "window",
        url: "view.html",
        style: "dark",
        windowOptions: {
          skin: "layer-mars-dialog animation-scale-up",
          width: 315,
          position: {
            top: 10,
            left: 5,
            bottom: 30
          }
        }
      }
    }

    //初始化[仅执行1次]
    create() {}

    //每个窗口创建完成后调用
    winCreateOK(opt, result) {
      this.viewWindow = result
    }
    //激活插件
    activate() {}
    //释放插件
    disable() {
      let graphic = this.config.graphic
      if (graphic && graphic._minPointNum) {
        graphic.stopEditing()

        if (this.config.sendSaveEntity) {
          this.config.sendSaveEntity()
        }
      }
    }
    getMinPointNum() {
      let graphic = this.config.graphic
      if (graphic && graphic._minPointNum) {
        return graphic._minPointNum
      }
      return 3
    }
    getMaxPointNum() {
      let graphic = this.config.graphic
      if (graphic && graphic._maxPointNum) {
        return graphic._maxPointNum
      }
      return 999
    }
    get defaultAttrList() {
      return [
        { name: "my_name", label: "业务名称", type: "text", defval: "", placeholder: "请输入名称" },
        { name: "my_remark", label: "业务备注", type: "textarea", defval: "", placeholder: "请输入备注" }
      ]
    }
    startEditing(graphic, appendHtml) {
      if (graphic) {
        this.config.graphic = graphic
      }
      if (this.viewWindow == null) {
        return
      }
      graphic = this.config.graphic

      if (!graphic) {
        return
      }
      const getPositionType = (options) => {
        let val = "static"
        if (options.position?.type) {
          val = options.position.type
        } else if (options.positions?.type) {
          val = options.positions.type
        }
        return val
      }

      const graphicOptions = graphic.toJSON()
      graphicOptions.isPoint = graphic.isPoint // 判断是否是点对象
      graphicOptions.positionType = getPositionType(graphicOptions)

      const aloneTypeStyle = {
        fixedRoute: ["label", "billboard", "point", "model", "circle", "coneTrack", "path", "polyline", "wall"],
        route: ["label", "billboard", "point", "model", "circle", "coneTrack", "path", "polyline", "wall"],
        satellite: [["tle1", "tle2"], "model", "label", "billboard", "point", "path"]
      }

      // 多参数样式
      const paraArr = aloneTypeStyle[graphicOptions.type]

      if (paraArr && paraArr.length) {
        const parentStyle = {}

        const parentItem = paraArr.find((item) => typeof item !== "string" && item.length)
        if (parentItem) {
          parentItem.forEach((item) => {
            parentStyle[item] = graphicOptions[item]
          })
        }

        // 初始化基础信息
        if ($.isFunction(appendHtml)) {
          appendHtml({ ...graphicOptions }, false)
        }

        setTimeout(() => {
          this.viewWindow.plotEdit.startEditing({ ...graphicOptions, style: { ...(graphicOptions.style ?? {}), ...parentStyle } })
        }, 500)

        paraArr.forEach((typeItem) => {
          const typeData = graphicOptions[typeItem]

          if (typeof typeItem === "string") {
            if ($.isFunction(appendHtml)) {
              appendHtml({ ...typeData, type: typeItem }, true)
            }

            setTimeout(() => {
              this.viewWindow.plotEdit.startEditing({
                style: { show: !!typeData, ...(typeData ?? {}) },
                type: typeItem,
                parentType: graphicOptions.type
              })
            }, 500)
          }
        })
      } else {
        if ($.isFunction(appendHtml)) {
          appendHtml({ ...graphicOptions }, false)
        }
        this.viewWindow.plotEdit.startEditing({ ...graphicOptions, style: graphicOptions.style ?? {} })
      }
    }

    //更新样式
    updateStyle2map(style) {
      console.log("更新style样式", style)
      let graphic = this.config.graphic
      graphic.setStyle({ ...style })
    }
    //更新坐标
    updatePoints2map(points) {
      console.log("更新坐标", points)
      let graphic = this.config.graphic

      if (graphic.isPoint) {
        graphic.setOptions({ position: points[0] })
      } else {
        graphic.setOptions({ positions: points })
      }
    }
    //更新属性
    updateAttr2map(attr) {
      let graphic = this.config.graphic
      graphic.attr = attr
    }
    //更新options
    updateOptions2map(options) {
      console.log("更新矢量options", options)
      let graphic = this.config.graphic
      graphic.setOptions(options)
    }
    centerCurrentEntity() {
      let graphic = this.config.graphic
      graphic.flyTo()
    }

    formatDate(time) {
      return mars3d.Util.formatDate(time, "yyyy-MM-dd HH:mm:ss")
    }

    deleteEntity() {
      let graphic = this.config.graphic
      if (graphic.stopEditing) {
        graphic.stopEditing()
      }
      graphic.remove()

      this.disableBase()
    }

    //文件处理
    getGeoJson() {
      let graphic = this.config.graphic
      let geojson = graphic.toGeoJSON()
      geojson.properties._layer = graphic._layer.name //记录分组信息

      return geojson
    }
  }

  //注册到widget管理器中。
  es5widget.bindClass(MyWidget)

  //每个widet之间都是直接引入到index.html中，会存在彼此命名冲突，所以闭包处理下。
})(window, mars3d)

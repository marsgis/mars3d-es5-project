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
        { name: "id", label: "主键", type: "label", defval: "" },
        { name: "name", label: "名称", type: "text", defval: "" },
        { name: "remark", label: "备注", type: "textarea", defval: "" }
      ]
    }
    getAttrList() {
      return this.config.attrList || this.defaultAttrList
    }
    getLayerName() {
      let graphic = this.config.graphic
      return graphic?._layer?.name || ""
    }
    startEditing(graphic, lonlats, appendHtml) {
      if (graphic) {
        this.config.graphic = graphic
      }
      if (lonlats) {
        this.config.lonlats = lonlats
      }

      if (this.viewWindow == null) {
        return
      }

      graphic = this.config.graphic
      lonlats = this.config.lonlats

      const graphicOptions = graphic.toJSON()

      const aloneTypeStyle = {
        fixedRoute: ["label", "billboard", "point", "model", "circle", "coneTrack", "path", "polyline", "wall"],
        route: ["label", "billboard", "point", "model", "circle", "coneTrack", "path", "polyline", "wall"],
        satellite: [["tle1", "tle2"], "model", "label", "billboard", "point", "path"]
      }

      // 原始样式
      if (appendHtml && graphicOptions.style) {
        appendHtml({ ...graphicOptions }, false)
      }

      this.viewWindow.plotEdit.startEditing({ ...graphicOptions, style: graphicOptions.style ?? {} }, lonlats)

      // 多参数样式
      let isParentStyle = false
      const paraArr = aloneTypeStyle[graphicOptions.type]

      if (paraArr && paraArr.length) {
        paraArr.forEach((typeItem) => {
          const typeData = graphicOptions[typeItem]

          if (typeof typeItem !== "string" && !isParentStyle && typeItem.length) {
            isParentStyle = true

            if (appendHtml) {
              appendHtml({ ...typeData, type: typeItem }, false)
            }

            setTimeout(() => {
              this.viewWindow.plotEdit.startEditing(graphicOptions)
            }, 500)
          } else {
            if (appendHtml) {
              appendHtml({ ...typeData, type: typeItem }, true)
            }

            setTimeout(() => {
              this.viewWindow.plotEdit.startEditing({
                style: { ...(typeData ?? {}), show: !!typeData },
                type: typeItem,
                parentType: graphicOptions.type
              })
            }, 500)
          }
        })
      } else {
        if (appendHtml) {
          appendHtml({ ...graphicOptions }, false)
        }
        this.viewWindow.plotEdit.startEditing(graphicOptions, lonlats)
      }
    }

    //更新样式
    updateStyle2map(style) {
      console.log("更新style样式", style)
      let graphic = this.config.graphic
      graphic.style = style
    }
    //更新坐标
    updatePoints2map(points) {
      console.log("更新坐标", points)

      let graphic = this.config.graphic
      graphic.positions = points
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

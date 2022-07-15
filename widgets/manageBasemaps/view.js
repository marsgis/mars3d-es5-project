"use script" //开发环境建议开启严格模式

//对应widget.js中MyWidget实例化后的对象
let thisWidget

//当前页面业务
function initWidgetView(_thisWidget) {
  thisWidget = _thisWidget

  let arrBasemaps = thisWidget.getBasemaps()

  let inhtml = ""
  for (let i = 0; i < arrBasemaps.length; i++) {
    let layer = arrBasemaps[i]

    let vhtml = ""
    if (layer.isAdded && layer.show) {
      vhtml = 'class="hover"'
    }

    let imgsrc = layer.options.icon || "img/basemaps/bingAerial.png"

    inhtml += `<li ${vhtml} onclick="changeBaseMaps(this,'${layer.id}')">
      <div><img src="../../${imgsrc}" /></div><div>${layer.name}</div>
    </li>`
  }
  $("#basemaps").html(inhtml)

  //地形开启控制
  $("#chkHasTerrain").prop("checked", thisWidget.map.hasTerrain)
  $("#chkHasTerrain").change(function () {
    let isStkTerrain = $(this).is(":checked")
    thisWidget.map.hasTerrain = isStkTerrain
  })
}

function changeBaseMaps(ele, id) {
  $("#basemaps")
    .children()
    .each(function () {
      $(this).removeClass("hover")
    })

  $(ele).addClass("hover")

  thisWidget.updateBasemap(id)
}

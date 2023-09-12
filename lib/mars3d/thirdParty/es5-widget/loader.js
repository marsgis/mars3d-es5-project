// cssExpr 用于判断资源是否是css
// eslint-disable-next-line prefer-regex-literals
const cssExpr = new RegExp("\\.css")
const nHead = document.head || document.getElementsByTagName("head")[0]
// `onload` 在WebKit < 535.23， Firefox < 9.0 不被支持
const isOldWebKit = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536

// 判断对应的node节点是否已经载入完成
function isReady(node) {
  return node.readyState === "complete" || node.readyState === "loaded"
}

// loadCss 用于载入css资源
function loadCss(url, setting, callback) {
  const node = document.createElement("link")

  node.rel = "stylesheet"
  addOnload(node, callback, "css")
  node.async = true
  node.href = url

  nHead.appendChild(node)
}

// loadJs 用于载入js资源
function loadJs(url, setting, callback) {
  const node = document.createElement("script")

  node.charset = "utf-8"
  addOnload(node, callback, "js")
  node.async = !setting.sync
  node.src = url

  nHead.appendChild(node)
}

// 在老的webkit中，因不支持load事件，这里用轮询sheet来保证
function pollCss(node, callback) {
  let isLoaded

  if (node.sheet) {
    isLoaded = true
  }

  setTimeout(function () {
    if (isLoaded) {
      // 在这里callback 是为了让样式有足够的时间渲染
      callback()
    } else {
      pollCss(node, callback)
    }
  }, 20)
}

// 用于给指定的节点绑定onload回调
// 监听元素载入完成事件
function addOnload(node, callback, type) {
  const supportOnload = "onload" in node
  const isCSS = type === "css"

  // 对老的webkit和老的firefox的兼容
  if (isCSS && (isOldWebKit || !supportOnload)) {
    setTimeout(function () {
      pollCss(node, callback)
    }, 1)
    return
  }

  if (supportOnload) {
    node.onload = onload
    node.onerror = function (e) {
      node.onerror = null
      if (type === "css") {
        console.error("该css文件不存在：" + node.href, e)
      } else {
        console.error("该js文件不存在：" + node.src, e)
      }
      onload()
    }
  } else {
    node.onreadystatechange = function () {
      if (isReady(node)) {
        onload()
      }
    }
  }

  function onload() {
    // 执行一次后清除，防止重复执行
    node.onload = node.onreadystatechange = null

    node = null

    callback()
  }
}

// 资源下载入口，根绝文件类型的不同，调用loadCss或者loadJs
function loadItem(url, list, setting, callback) {
  // 如果加载的url为空，就直接成功返回
  if (!url) {
    setTimeout(function () {
      onFinishLoading()
    })
    return
  }

  if (cssExpr.test(url)) {
    loadCss(url, setting, onFinishLoading)
  } else {
    loadJs(url, setting, onFinishLoading)
  }

  // 每次资源下载完成后，检验是否结束整个list下载过程
  // 若已经完成所有下载，执行回调函数
  function onFinishLoading() {
    const urlIndex = list.indexOf(url)
    if (urlIndex > -1) {
      list.splice(urlIndex, 1)
    }

    if (list.length === 0) {
      callback()
    }
  }
}

function doInit(list, setting, callback) {
  const cb = function () {
    callback && callback()
  }

  list = Array.prototype.slice.call(list || [])

  if (list.length === 0) {
    cb()
    return
  }

  for (let i = 0, len = list.length; i < len; i++) {
    loadItem(list[i], list, setting, cb)
  }
}

// 判断当前页面是否加载完
// 加载完，立刻执行下载
// 未加载完，等待页面load事件以后再进行下载
function ready(node, callback) {
  if (isReady(node)) {
    callback()
  } else {
    // 1500ms 以后，直接开始下载资源文件，不再等待load事件
    const timeLeft = 1500
    let isExecute = false
    window.addEventListener("load", function () {
      if (!isExecute) {
        callback()
        isExecute = true
      }
    })

    setTimeout(function () {
      if (!isExecute) {
        callback()
        isExecute = true
      }
    }, timeLeft)
  }
}

// 暴露出去的Loader
// 提供async, sync两个函数
// async 用作异步下载执行用，不阻塞页面渲染
// sync  用作异步下载，顺序执行，保证下载的js按照数组顺序执行
const Loader = {
  async: function (list, callback) {
    ready(document, function () {
      doInit(list, {}, callback)
    })
  },

  sync: function (list, callback) {
    ready(document, function () {
      doInit(
        list,
        {
          sync: true
        },
        callback
      )
    })
  }
}

window.Loader = Loader;


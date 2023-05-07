import { App } from 'vue'

export default {
  install: (app: App) => {
    const mars3d = window.mars3d
    app.config.globalProperties.mars3d = mars3d
    app.config.globalProperties.Cesium = mars3d.Cesium
  }
}

/**
 * mars3d-echarts 插件类型声明
 *
 * 图层成员类型来自主包 layer 命名空间；运行时代码由本插件导出。
 */
import { layer } from "mars3d"

export const EchartsLayer: typeof layer.EchartsLayer
export type EchartsLayer = layer.EchartsLayer

// 注意：运行时（src/plugins/mars3d-echarts/index.js）仍会透传 echarts 的全部成员，
// 但 echarts 的类型是 UMD（export =），在 module: esnext + skipLibCheck: false 下
// 任何形式的类型透传都会在 echarts 自己的 index.d.ts 报 TS1203，故这里不做类型透传。
// 需要 echarts 类型时请直接从 "echarts" 引入。

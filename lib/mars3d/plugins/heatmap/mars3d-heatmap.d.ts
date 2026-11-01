/**
 * mars3d-heatmap 插件类型声明
 *
 * 图层成员类型来自主包 layer 命名空间；运行时代码由本插件导出。
 */
import { layer } from "mars3d"

export const HeatLayer: typeof layer.HeatLayer
export type HeatLayer = layer.HeatLayer

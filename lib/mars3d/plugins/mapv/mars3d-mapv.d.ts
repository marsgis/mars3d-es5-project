/**
 * mars3d-mapv 插件类型声明
 *
 * 图层成员类型来自主包 layer 命名空间；运行时代码由本插件导出。
 * 说明：运行时还会 re-export mapv 的全部成员，但 mapv 未提供类型声明，故此处不生成对应类型。
 */
import { layer } from "mars3d"

export const MapVLayer: typeof layer.MapVLayer
export type MapVLayer = layer.MapVLayer

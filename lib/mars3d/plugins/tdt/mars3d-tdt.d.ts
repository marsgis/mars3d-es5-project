/**
 * mars3d-tdt 插件类型声明
 *
 * 图层类型来自主包 layer 命名空间；TdtTerrainProvider 由本插件自声明；运行时代码由本插件导出。
 */
import { layer } from "mars3d"
import type * as Cesium from "mars3d-cesium"

export const TdtDmLayer: typeof layer.TdtDmLayer
export type TdtDmLayer = layer.TdtDmLayer

export declare class TdtTerrainProvider extends Cesium.CesiumTerrainProvider {
    constructor(options?: {
        url?: string;
        subdomains?: string | string[];
        key?: string;
        urls?: string[];
        credit?: string | Cesium.Credit;
        ellipsoid?: Cesium.Ellipsoid;
        proxy?: Cesium.Proxy;
        topLevel?: number;
        bottomLevel?: number;
    });
}

/**
 * mars3d-wind 插件类型声明
 *
 * 图层成员类型来自主包 layer 命名空间；WindUtil 由本插件自声明；运行时代码由本插件导出。
 */
import { layer } from "mars3d"

export const WindLayer: typeof layer.WindLayer
export type WindLayer = layer.WindLayer
export const CanvasWindLayer: typeof layer.CanvasWindLayer
export type CanvasWindLayer = layer.CanvasWindLayer

export declare namespace WindUtil {
    /**
     * 风速风向 转 U值
     * @param speed - 风速
     * @param direction - 风向
     * @returns U值
     */
    function getU(speed: number, direction: number): number;
    /**
     * 风速风向 转 V值
     * @param speed - 风速
     * @param direction - 风向
     * @returns V值
     */
    function getV(speed: number, direction: number): number;
    /**
     * UV值 转 风速, 风速是uv分量的平方和
     * @param u - U值
     * @param v - V值
     * @returns 风速
     */
    function getSpeed(u: number, v: number): number;
    /**
     * UV 转 风向
     * @param u - U值
     * @param v - V值
     * @returns 风向
     */
    function getDirection(u: number, v: number): number;
}

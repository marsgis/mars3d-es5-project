/**
 * mars3d-space 插件类型声明
 *
 * 图元类型来自主包 graphic 命名空间；Tle 由本插件自声明；运行时代码由本插件导出。
 */
import { graphic, LngLatPoint } from "mars3d"
import type * as Cesium from "mars3d-cesium"

export const CamberRadar: typeof graphic.CamberRadar
export type CamberRadar = graphic.CamberRadar
export const JammingRadar: typeof graphic.JammingRadar
export type JammingRadar = graphic.JammingRadar
export const FixedJammingRadar: typeof graphic.FixedJammingRadar
export type FixedJammingRadar = graphic.FixedJammingRadar
export const ConicSensor: typeof graphic.ConicSensor
export type ConicSensor = graphic.ConicSensor
export const RectSensor: typeof graphic.RectSensor
export type RectSensor = graphic.RectSensor
export const SatelliteSensor: typeof graphic.SatelliteSensor
export type SatelliteSensor = graphic.SatelliteSensor
export const Satellite: typeof graphic.Satellite
export type Satellite = graphic.Satellite

export declare class Tle {
    constructor(tle1: string, tle2: string, name?: string);
    /**
     * COSPAR国际代号,国际空间研究委员会制定.
     */
    readonly cospar: string;
    /**
     * NORAD 空间目录号,北美空防司令部制定。
     * tle1的第3-7列
     */
    readonly norad: number;
    /**
     * 卫星类别（U表示不保密，可供公众使用的；C 表示保密，仅限NORAD使用；S表示保密的，仅限NORAD使用）,
     * tle1的第8列
     */
    readonly classification: string;
    /**
     * 返回发射年份(最后两位数字)，这是COSPAR id的一部分(国际指示器)，
     * tle1的第10–11列
     */
    readonly intDesignatorYear: number;
    /**
     * 返回当年的发射顺序编号，这是COSPAR id的一部分(国际指示器)，
     * tle1的第12–14列
     */
    readonly intDesignatorLaunchnumber: number;
    /**
     * 发射卫星个数（A表示是第一个，如果一次发射多颗卫星，使用26个英文字母排序；如果超过了26个编号，则使用两位字母，如AA、AB、AC编号），这是COSPAR id的一部分(国际指示器)，
     * tle1的第15–17列
     */
    readonly intDesignatorPieceOfLaunch: string;
    /**
     * TLE历时（年份后两位），
     * tle1的第19–20列
     */
    readonly epochYear: number;
    /**
     * TLE历时 (用十进制小数表示一年中的第几日和日中的小数部分)，
     * tle1的第21–32列
     */
    readonly epochDay: number;
    /**
     * 平均运动的一阶时间导数，用来计算每一天平均运动的变化带来的轨道漂移，提供给轨道计算软件预测卫星的位置。两行式轨道数据使用这个数据校准卫星的位置。
     * tle1的第34–43列
     */
    readonly firstTimeDerivative: number;
    /**
     * 平均运动的二阶时间导数，用来计算每一天平均运动的变化带来的轨道漂移，提供给轨道计算软件预测卫星的位置。
     * tle1的第45–52列
     */
    readonly secondTimeDerivative: number;
    /**
     * BSTAR阻力系数，用于大气阻力对卫星运动的影响。
     * tle1的第45–52列
     */
    readonly bstarDrag: number;
    /**
     * 美国空军空间指挥中心内部使用的为1；美国空军空间指挥中心以外公开使用标识为0。
     * tle1的第63列
     */
    readonly orbitModel: number;
    /**
     * 星历编号，TLE数据按新发现卫星的先后顺序的编号，
     * tle1的第65–68列
     */
    readonly tleSetnumber: number;
    /**
     * 校验和，指这一行的所有非数字字符，按照“字母、空格、句点、正号= 0；负号=1”的规则换算成0和1后，将这一行中原来的全部数字加起来，以10为模计算后所得的和。校验和可以检查出90%的数据存储或传送错误。按十进制加起来的个位数字的校验和，用于精确纠正误差。
     * tle1的第69列
     */
    readonly checksum1: number;
    /**
     * 轨道的交角是指天体的轨道面和地球赤道面之间的夹度，用0～90°来表示顺行轨道（从地球北极上空看是逆时针运行）；用90～180°表示逆行轨道（从地球北极上空看是顺时针运行）。
     * tle2的第09–16列
     */
    readonly inclination: number;
    /**
     * 升交点赤经，升交点赤经是指卫星由南到北穿过地球赤道平面时，与地球赤道平面的交点。
     * tle2的第18–25列
     */
    readonly rightAscension: number;
    /**
     * 轨道偏心率，轨道离心率是指卫星椭圆轨道的中心点到地球的球心点的距离（c）除以卫星轨道半长轴(a)得到的一个0（圆型）到1（抛物线）之间的小数值。
     * tle2的第27–33列
     */
    readonly eccentricity: number;
    /**
     * 近地点角矩(deg)
     * tle2的第35–42列
     */
    readonly perigee: number;
    /**
     * 平近点角，
     * tle2的第44–51列
     */
    readonly meanAnomaly: number;
    /**
     * 每天绕地球公转圈数(平均运动)，
     * tle2的第53–63列
     */
    readonly meanMotion: number;
    /**
     * 卫星的运行周期（单位：分钟）
     */
    readonly period: number;
    /**
     * 发射以来飞行的圈数，
     * tle2的第64–68列
     */
    readonly revnumberAtEpoch: number;
    /**
     * 校验和，
     * tle2的第69列
     */
    readonly checksum2: number;
    /**
     * 获取卫星指定时间所在的 ECEF地心地固坐标系
     * @param datetime - 指定的时间
     * @returns ECEF(地心地固坐标系) 坐标
     */
    getEcfPosition(datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3 | undefined;
    /**
     * 获取卫星指定时间所在的 ECI惯性坐标
     * @param datetime - 指定的时间
     * @returns ECI(地心惯性坐标系)坐标
     */
    getEciPosition(datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3 | undefined;
    /**
     * 获取卫星指定时间所在的坐标(用于cesium内property坐标)
     * @param time - 指定的时间
     * @param [isFixed] - 是否返回Cesium.ReferenceFrame.FIXED地固系坐标
     * @returns 坐标
     */
    getPosition(time: Date | Cesium.JulianDate | number, isFixed?: boolean): Cesium.Cartesian3 | undefined;
    /**
     * 获取卫星指定时间 所在的位置坐标(经纬度)
     * @param time - 指定的时间
     * @param [isFixed] - 是否返回Cesium.ReferenceFrame.FIXED地固系坐标
     * @returns 卫星当前经纬度位置
     */
    getPoint(time: Date | Cesium.JulianDate | number, isFixed?: boolean): LngLatPoint | undefined;
    /**
     * 获取 地面地点 对卫星的 天文观测值
     * @param point - 地面地点经纬度坐标
     * @param datetime - 指定的时间
     * @returns 观测值；未满足执行条件时可能无返回值。
     */
    getLookAngles(point: LngLatPoint, datetime: Date | Cesium.JulianDate | number): Tle.LookAngles | undefined;
    /**
     * 计算卫星指定时间所在的 经纬度位置
     * @param tle1 - 卫星TLE的第一行
     * @param tle2 - 卫星TLE的第二行
     * @param datetime - 指定的时间
     * @param [isFixed] - 是否返回Cesium.ReferenceFrame.FIXED地固系坐标
     * @returns 卫星当前经纬度位置
     */
    static getPoint(tle1: string, tle2: string, datetime: Date | Cesium.JulianDate | number, isFixed?: boolean): LngLatPoint | undefined;
    /**
     * 获取卫星指定时间所在的 ECEF地心地固坐标系
     * @param tle1 - 卫星TLE的第一行
     * @param tle2 - 卫星TLE的第二行
     * @param datetime - 指定的时间
     * @returns ECEF(地心地固坐标系) 坐标
     */
    static getEcfPosition(tle1: string, tle2: string, datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3 | undefined;
    /**
     * 获取卫星指定时间所在的 ECI惯性坐标
     * @param tle1 - 卫星TLE的第一行
     * @param tle2 - 卫星TLE的第二行
     * @param datetime - 指定的时间
     * @returns ECI(地心惯性坐标系)坐标
     */
    static getEciPosition(tle1: string, tle2: string, datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3 | undefined;
    /**
     * 获取 格林尼治恒星时(GMST)时间
     * @param datetime - 时间对象
     * @returns 格林尼治恒星时(GMST)时间
     */
    static gstime(datetime: Date | Cesium.JulianDate): number;
    /**
     * ECI惯性系坐标 转换为 经纬度坐标
     * @param positionEci - ECI(地心惯性坐标系) 坐标
     * @param datetime - 指定时间, number时请传入格林尼治恒星时(GMST)时间
     * @returns 经纬度坐标
     */
    static eciToGeodetic(positionEci: Cesium.Cartesian3, datetime: Date | Cesium.JulianDate | number): LngLatPoint;
    /**
     * ECI惯性系坐标 转换为 ECEF地心地固坐标系
     * @param positionEci - ECI(地心惯性坐标系)坐标
     * @param datetime - 指定时间, number时请传入格林尼治恒星时(GMST)时间
     * @param [positionEcf] - ECI(地心惯性坐标系)坐标
     * @returns ECEF(地心地固坐标系) 坐标
     */
    static eciToEcf(positionEci: Cesium.Cartesian3, datetime: Date | Cesium.JulianDate | number, positionEcf?: Cesium.Cartesian3): Cesium.Cartesian3;
    /**
     * ECEF地心地固坐标系 转换为 ECI惯性系坐标
     * @param positionEcf - ECEF(地心地固坐标系) 坐标
     * @param datetime - 指定时间, number时请传入格林尼治恒星时(GMST)时间
     * @returns ECI(地心惯性坐标系)坐标
     */
    static ecfToEci(positionEcf: Cesium.Cartesian3, datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3;
    /**
     * 两行轨道根数 转换到 开普勒六根数
     * @param tle1 - 两行轨道根数1
     * @param tle2 - 两行轨道根数2
     * @returns 卫星开普勒六根数对象
     */
    static tle2coe(tle1: string, tle2: string): any;
}

export declare namespace Tle {
    /**
     * 从地面上某点的天文观测角度等值。
     * @property position - 卫星的当前位置
     * @property range - 与卫星的距离，单位：米
     * @property azimuth - 方位角，角度值
     * @property elevation - 仰角，角度值
     */
    type LookAngles = {
        position: Cesium.Cartesian3;
        range: number;
        azimuth: number;
        elevation: number;
    };
}

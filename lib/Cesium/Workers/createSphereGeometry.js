/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.111.2
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as r}from"./chunk-ELA3JDQF.js";import"./chunk-HYJ2A6DI.js";import{a as m}from"./chunk-TNWTOL7J.js";import"./chunk-F3O5UI45.js";import"./chunk-HJQST5IS.js";import"./chunk-RWPXLFOP.js";import"./chunk-LWM3BMNG.js";import"./chunk-EFDBA3KE.js";import"./chunk-ZEQGVEUD.js";import"./chunk-Q4IJH5P3.js";import{a as s}from"./chunk-GGFR7OWI.js";import"./chunk-VYAHZOBT.js";import"./chunk-T7D7BKX3.js";import"./chunk-5L2S4J6H.js";import{a as l}from"./chunk-CQSBXRIT.js";import{b as p}from"./chunk-637K6T77.js";import{e as c}from"./chunk-2M4TCC7F.js";function n(e){let t=l(e.radius,1),o={radii:new s(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new r(o),this._workerName="createSphereGeometry"}n.packedLength=r.packedLength;n.pack=function(e,t,a){return p.typeOf.object("value",e),r.pack(e._ellipsoidGeometry,t,a)};var f=new r,i={radius:void 0,radii:new s,vertexFormat:new m,stackPartitions:void 0,slicePartitions:void 0};n.unpack=function(e,t,a){let o=r.unpack(e,t,f);return i.vertexFormat=m.clone(o._vertexFormat,i.vertexFormat),i.stackPartitions=o._stackPartitions,i.slicePartitions=o._slicePartitions,c(a)?(s.clone(o._radii,i.radii),a._ellipsoidGeometry=new r(i),a):(i.radius=o._radii.x,new n(i))};n.createGeometry=function(e){return r.createGeometry(e._ellipsoidGeometry)};var d=n;function u(e,t){return c(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}var v=u;export{v as default};

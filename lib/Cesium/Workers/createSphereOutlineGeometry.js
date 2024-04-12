/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.116.1
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

import{a as t}from"./chunk-E4SFEH5X.js";import"./chunk-XJCFZEZW.js";import"./chunk-ROROM35N.js";import"./chunk-F5TB5EI7.js";import"./chunk-VAPKZ5PR.js";import"./chunk-DXGEUDM7.js";import"./chunk-5IUHFVP3.js";import"./chunk-OE3P25NW.js";import"./chunk-HIT4T4MS.js";import"./chunk-3KRBUMEX.js";import{a as d}from"./chunk-PQ6NV4GA.js";import"./chunk-74I3QBVP.js";import"./chunk-BLVYEJBC.js";import"./chunk-A6PYE4JS.js";import{a as l}from"./chunk-T23IKWCM.js";import{b as u}from"./chunk-HJ33TVGP.js";import{e as a}from"./chunk-WL4PTXMO.js";function s(i){let e=l(i.radius,1),r={radii:new d(e,e,e),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,subdivisions:i.subdivisions};this._ellipsoidGeometry=new t(r),this._workerName="createSphereOutlineGeometry"}s.packedLength=t.packedLength;s.pack=function(i,e,o){return u.typeOf.object("value",i),t.pack(i._ellipsoidGeometry,e,o)};var m=new t,n={radius:void 0,radii:new d,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};s.unpack=function(i,e,o){let r=t.unpack(i,e,m);return n.stackPartitions=r._stackPartitions,n.slicePartitions=r._slicePartitions,n.subdivisions=r._subdivisions,a(o)?(d.clone(r._radii,n.radii),o._ellipsoidGeometry=new t(n),o):(n.radius=r._radii.x,new s(n))};s.createGeometry=function(i){return t.createGeometry(i._ellipsoidGeometry)};var c=s;function p(i,e){return a(e)&&(i=c.unpack(i,e)),c.createGeometry(i)}var w=p;export{w as default};

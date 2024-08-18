/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.120.2
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

import{a as t}from"./chunk-BT3ZEALL.js";import"./chunk-CDIJULSW.js";import"./chunk-MRPZH6IA.js";import"./chunk-6SD33GKZ.js";import"./chunk-Q4LOMMWX.js";import"./chunk-7ABUHU7X.js";import"./chunk-3Y3SAF2G.js";import"./chunk-U36ZJ433.js";import{a as d}from"./chunk-XLMIALB5.js";import"./chunk-XBIO23ZX.js";import"./chunk-PQF7YB7C.js";import"./chunk-TBESXZ5I.js";import{a as l}from"./chunk-L6F6UWMP.js";import{b as u}from"./chunk-J63AP2GZ.js";import{e as a}from"./chunk-LPL3F3FU.js";function s(i){let e=l(i.radius,1),r={radii:new d(e,e,e),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,subdivisions:i.subdivisions};this._ellipsoidGeometry=new t(r),this._workerName="createSphereOutlineGeometry"}s.packedLength=t.packedLength;s.pack=function(i,e,o){return u.typeOf.object("value",i),t.pack(i._ellipsoidGeometry,e,o)};var m=new t,n={radius:void 0,radii:new d,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};s.unpack=function(i,e,o){let r=t.unpack(i,e,m);return n.stackPartitions=r._stackPartitions,n.slicePartitions=r._slicePartitions,n.subdivisions=r._subdivisions,a(o)?(d.clone(r._radii,n.radii),o._ellipsoidGeometry=new t(n),o):(n.radius=r._radii.x,new s(n))};s.createGeometry=function(i){return t.createGeometry(i._ellipsoidGeometry)};var c=s;function p(i,e){return a(e)&&(i=c.unpack(i,e)),c.createGeometry(i)}var w=p;export{w as default};

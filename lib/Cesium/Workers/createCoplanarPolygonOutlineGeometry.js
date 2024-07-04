/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.119
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

import{a as T}from"./chunk-DMIF3TJ3.js";import"./chunk-VJTHPHYB.js";import{a as f}from"./chunk-DH3YQ56F.js";import"./chunk-BWSUBYAI.js";import{a as G}from"./chunk-3HJM4DNA.js";import{a as C}from"./chunk-6APME2VO.js";import"./chunk-ZVFSUDGR.js";import"./chunk-QJHYMZPL.js";import"./chunk-I33DDHVP.js";import"./chunk-7TYSIAS6.js";import"./chunk-VMVQRCQY.js";import{a as L}from"./chunk-L534BPPX.js";import"./chunk-4QTCIDG4.js";import"./chunk-4WSWBQPX.js";import"./chunk-PSM2OZFQ.js";import{a as w}from"./chunk-TPVKDNQ2.js";import{a as O}from"./chunk-L2WB5XBS.js";import{b,c as d,d as k}from"./chunk-MKOJDBDR.js";import{d as P}from"./chunk-6IEKOAAO.js";import"./chunk-FI7FQWFK.js";import{a as H}from"./chunk-QU7IDCXZ.js";import{a as l,d as g}from"./chunk-A37TTN4T.js";import"./chunk-U4UUGLXG.js";import"./chunk-3GUOVF7B.js";import"./chunk-ZWNHW2OC.js";import{a as c}from"./chunk-SQHFMRD4.js";import{b as a}from"./chunk-GDH3Q66C.js";import{e as u}from"./chunk-IWAQ2DE4.js";function E(o){let e=o.length,t=new Float64Array(e*3),r=w.createTypedArray(e,e*2),i=0,s=0;for(let n=0;n<e;n++){let p=o[n];t[i++]=p.x,t[i++]=p.y,t[i++]=p.z,r[s++]=n,r[s++]=(n+1)%e}let y=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:y,indices:r,primitiveType:b.LINES})}function m(o){o=c(o,c.EMPTY_OBJECT);let e=o.polygonHierarchy;a.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.computeHierarchyPackedLength(e,l)+1}m.fromPositions=function(o){o=c(o,c.EMPTY_OBJECT),a.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new m(e)};m.pack=function(o,e,t){return a.typeOf.object("value",o),a.defined("array",e),t=c(t,0),t=f.packPolygonHierarchy(o._polygonHierarchy,e,t,l),e[t]=o.packedLength,e};var v={polygonHierarchy:{}};m.unpack=function(o,e,t){a.defined("array",o),e=c(e,0);let r=f.unpackPolygonHierarchy(o,e,l);e=r.startingIndex,delete r.startingIndex;let i=o[e];return u(t)||(t=new m(v)),t._polygonHierarchy=r,t.packedLength=i,t};m.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=L(t,l.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let i=f.polygonOutlinesFromHierarchy(e,!1);if(i.length===0)return;let s=[];for(let p=0;p<i.length;p++){let _=new G({geometry:E(i[p])});s.push(_)}let y=C.combineInstances(s)[0],n=P.fromPoints(e.positions);return new d({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:n})};var h=m;function A(o,e){return u(e)&&(o=h.unpack(o,e)),o._ellipsoid=g.clone(o._ellipsoid),h.createGeometry(o)}var Z=A;export{Z as default};

/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.135.0
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

import{a as l}from"./chunk-HYR2MDP3.js";import"./chunk-ZPNMN6F6.js";import"./chunk-GTLYO3YS.js";import"./chunk-R7OEDP7O.js";import"./chunk-YIDWXUKZ.js";import"./chunk-KVN4S3W2.js";import"./chunk-CKMZFNDL.js";import{a as m}from"./chunk-75WDW3UA.js";import"./chunk-7DM4VRLC.js";import"./chunk-RQSOJS3W.js";import"./chunk-RVIN6KTA.js";import"./chunk-RPXUQ2AO.js";import"./chunk-P4CBSWTJ.js";import"./chunk-EKIWDFFL.js";import"./chunk-QUZOLRHP.js";import"./chunk-PVO6WFU6.js";import"./chunk-6INKH6TT.js";import"./chunk-CBDHYUZM.js";import{a,d as s,f as _}from"./chunk-WICKEAQ3.js";import"./chunk-VBZUTFOY.js";import{b as p}from"./chunk-SOJPBEDM.js";import{e as d}from"./chunk-74M7JUED.js";function n(e){e=e??_.EMPTY_OBJECT;let r=e.radius;p.typeOf.number("radius",r);let o={center:e.center,semiMajorAxis:r,semiMinorAxis:r,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new l(o),this._workerName="createCircleGeometry"}n.packedLength=l.packedLength;n.pack=function(e,r,o){return p.typeOf.object("value",e),l.pack(e._ellipseGeometry,r,o)};var h=new l({center:new a,semiMajorAxis:1,semiMinorAxis:1}),t={center:new a,radius:void 0,ellipsoid:s.clone(s.default),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new m,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};n.unpack=function(e,r,o){let i=l.unpack(e,r,h);return t.center=a.clone(i._center,t.center),t.ellipsoid=s.clone(i._ellipsoid,t.ellipsoid),t.ellipsoid=s.clone(i._ellipsoid,h._ellipsoid),t.height=i._height,t.extrudedHeight=i._extrudedHeight,t.granularity=i._granularity,t.vertexFormat=m.clone(i._vertexFormat,t.vertexFormat),t.stRotation=i._stRotation,t.shadowVolume=i._shadowVolume,d(o)?(t.semiMajorAxis=i._semiMajorAxis,t.semiMinorAxis=i._semiMinorAxis,o._ellipseGeometry=new l(t),o):(t.radius=i._semiMajorAxis,new n(t))};n.createGeometry=function(e){return l.createGeometry(e._ellipseGeometry)};n.createShadowVolume=function(e,r,o){let i=e._ellipseGeometry._granularity,u=e._ellipseGeometry._ellipsoid,f=r(i,u),x=o(i,u);return new n({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:u,stRotation:e._ellipseGeometry._stRotation,granularity:i,extrudedHeight:f,height:x,vertexFormat:m.POSITION_ONLY,shadowVolume:!0})};Object.defineProperties(n.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}});var c=n;function g(e,r){return d(r)&&(e=c.unpack(e,r)),e._ellipseGeometry._center=a.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=s.clone(e._ellipseGeometry._ellipsoid),c.createGeometry(e)}var V=g;export{V as default};

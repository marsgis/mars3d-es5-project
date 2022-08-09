/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96
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
define(["./Matrix2-735f0ea9","./RuntimeError-17a7ed3d","./defaultValue-6ed27e8d","./EllipseGeometry-197109d7","./VertexFormat-4362bb4a","./ComponentDatatype-6ff7d2c3","./WebGLConstants-d878ea52","./Transforms-b683baff","./_commonjsHelpers-c27c962c","./combine-c04aaa26","./EllipseGeometryLibrary-402d6780","./GeometryAttribute-29ed65a7","./GeometryAttributes-cb1bf806","./GeometryInstance-8a2d7ac1","./GeometryOffsetAttribute-ddcc2f7f","./GeometryPipeline-9eaa7fbb","./AttributeCompression-f967afc2","./EncodedCartesian3-1e797130","./IndexDatatype-d42fd89c","./IntersectionTests-1cdbb657","./Plane-6c77dfaf"],(function(e,t,i,r,o,n,s,a,l,d,m,c,u,p,y,_,G,f,x,h,g){"use strict";function E(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(o),this._workerName="createCircleGeometry"}E.packedLength=r.EllipseGeometry.packedLength,E.pack=function(e,t,i){return r.EllipseGeometry.pack(e._ellipseGeometry,t,i)};const b=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new o.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return E.unpack=function(t,n,s){const a=r.EllipseGeometry.unpack(t,n,b);return w.center=e.Cartesian3.clone(a._center,w.center),w.ellipsoid=e.Ellipsoid.clone(a._ellipsoid,w.ellipsoid),w.height=a._height,w.extrudedHeight=a._extrudedHeight,w.granularity=a._granularity,w.vertexFormat=o.VertexFormat.clone(a._vertexFormat,w.vertexFormat),w.stRotation=a._stRotation,w.shadowVolume=a._shadowVolume,i.defined(s)?(w.semiMajorAxis=a._semiMajorAxis,w.semiMinorAxis=a._semiMinorAxis,s._ellipseGeometry=new r.EllipseGeometry(w),s):(w.radius=a._semiMajorAxis,new E(w))},E.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},E.createShadowVolume=function(e,t,i){const r=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid,s=t(r,n),a=i(r,n);return new E({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:s,height:a,vertexFormat:o.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(E.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return i.defined(r)&&(t=E.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),E.createGeometry(t)}}));

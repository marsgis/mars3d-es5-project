/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96.3
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
define(["./Matrix2-c788e106","./RuntimeError-50f3c270","./defaultValue-77c08f32","./EllipseGeometry-7b3fe578","./VertexFormat-a34558d6","./ComponentDatatype-94a172c0","./WebGLConstants-cbf0dab7","./Transforms-fae4cdf7","./_commonjsHelpers-d90b2ade","./combine-4bf14979","./EllipseGeometryLibrary-ad4a5b4c","./GeometryAttribute-4daab906","./GeometryAttributes-a490dcf1","./GeometryInstance-19520f53","./GeometryOffsetAttribute-62f885db","./GeometryPipeline-f0a1ad88","./AttributeCompression-62b0e919","./EncodedCartesian3-222548c7","./IndexDatatype-33d13dff","./IntersectionTests-8b7c8657","./Plane-f81558db"],(function(e,t,i,r,o,n,s,l,a,d,m,c,u,p,y,_,G,f,x,h,g){"use strict";function b(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(o),this._workerName="createCircleGeometry"}b.packedLength=r.EllipseGeometry.packedLength,b.pack=function(e,t,i){return r.EllipseGeometry.pack(e._ellipseGeometry,t,i)};const E=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new o.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return b.unpack=function(t,n,s){const l=r.EllipseGeometry.unpack(t,n,E);return w.center=e.Cartesian3.clone(l._center,w.center),w.ellipsoid=e.Ellipsoid.clone(l._ellipsoid,w.ellipsoid),w.height=l._height,w.extrudedHeight=l._extrudedHeight,w.granularity=l._granularity,w.vertexFormat=o.VertexFormat.clone(l._vertexFormat,w.vertexFormat),w.stRotation=l._stRotation,w.shadowVolume=l._shadowVolume,i.defined(s)?(w.semiMajorAxis=l._semiMajorAxis,w.semiMinorAxis=l._semiMinorAxis,s._ellipseGeometry=new r.EllipseGeometry(w),s):(w.radius=l._semiMajorAxis,new b(w))},b.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},b.createShadowVolume=function(e,t,i){const r=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid,s=t(r,n),l=i(r,n);return new b({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:s,height:l,vertexFormat:o.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(b.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return i.defined(r)&&(t=b.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),b.createGeometry(t)}}));

/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.95.1
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
define(["./defaultValue-21bb911f","./Matrix2-9e784742","./RuntimeError-9120af11","./EllipsoidGeometry-486549d5","./VertexFormat-644f8dab","./ComponentDatatype-162d3ed7","./WebGLConstants-4c5efd09","./Transforms-32486356","./_commonjsHelpers-3aae1032-71d905b2","./combine-b848b11a","./GeometryAttribute-0d10a668","./GeometryAttributes-4d96e366","./GeometryOffsetAttribute-42fdb7dd","./IndexDatatype-2cb75364"],(function(e,t,i,r,o,a,n,s,d,c,l,m,u,p){"use strict";function y(i){const o=e.defaultValue(i.radius,1),a={radii:new t.Cartesian3(o,o,o),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,vertexFormat:i.vertexFormat};this._ellipsoidGeometry=new r.EllipsoidGeometry(a),this._workerName="createSphereGeometry"}y.packedLength=r.EllipsoidGeometry.packedLength,y.pack=function(e,t,i){return r.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,i)};const G=new r.EllipsoidGeometry,f={radius:void 0,radii:new t.Cartesian3,vertexFormat:new o.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return y.unpack=function(i,a,n){const s=r.EllipsoidGeometry.unpack(i,a,G);return f.vertexFormat=o.VertexFormat.clone(s._vertexFormat,f.vertexFormat),f.stackPartitions=s._stackPartitions,f.slicePartitions=s._slicePartitions,e.defined(n)?(t.Cartesian3.clone(s._radii,f.radii),n._ellipsoidGeometry=new r.EllipsoidGeometry(f),n):(f.radius=s._radii.x,new y(f))},y.createGeometry=function(e){return r.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,i){return e.defined(i)&&(t=y.unpack(t,i)),y.createGeometry(t)}}));

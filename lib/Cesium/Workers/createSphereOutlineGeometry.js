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
define(["./defaultValue-21bb911f","./Matrix2-9e784742","./RuntimeError-9120af11","./EllipsoidOutlineGeometry-4674a37e","./ComponentDatatype-162d3ed7","./WebGLConstants-4c5efd09","./Transforms-32486356","./_commonjsHelpers-3aae1032-71d905b2","./combine-b848b11a","./GeometryAttribute-0d10a668","./GeometryAttributes-4d96e366","./GeometryOffsetAttribute-42fdb7dd","./IndexDatatype-2cb75364"],(function(e,i,t,n,o,r,s,a,d,l,u,c,m){"use strict";function p(t){const o=e.defaultValue(t.radius,1),r={radii:new i.Cartesian3(o,o,o),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions};this._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(r),this._workerName="createSphereOutlineGeometry"}p.packedLength=n.EllipsoidOutlineGeometry.packedLength,p.pack=function(e,i,t){return n.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};const y=new n.EllipsoidOutlineGeometry,G={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return p.unpack=function(t,o,r){const s=n.EllipsoidOutlineGeometry.unpack(t,o,y);return G.stackPartitions=s._stackPartitions,G.slicePartitions=s._slicePartitions,G.subdivisions=s._subdivisions,e.defined(r)?(i.Cartesian3.clone(s._radii,G.radii),r._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(G),r):(G.radius=s._radii.x,new p(G))},p.createGeometry=function(e){return n.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=p.unpack(i,t)),p.createGeometry(i)}}));

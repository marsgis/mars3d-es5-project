/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.95
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
define(["./defaultValue-ac2201bb","./Matrix2-6555478a","./RuntimeError-d45af186","./EllipsoidOutlineGeometry-cdba69a2","./ComponentDatatype-43ab226f","./WebGLConstants-e12cdc8a","./Transforms-6c4dd71f","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./IndexDatatype-88be9f5a"],(function(e,i,t,n,o,r,s,a,d,l,c,u,m){"use strict";function p(t){const o=e.defaultValue(t.radius,1),r={radii:new i.Cartesian3(o,o,o),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions};this._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(r),this._workerName="createSphereOutlineGeometry"}p.packedLength=n.EllipsoidOutlineGeometry.packedLength,p.pack=function(e,i,t){return n.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};const y=new n.EllipsoidOutlineGeometry,f={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return p.unpack=function(t,o,r){const s=n.EllipsoidOutlineGeometry.unpack(t,o,y);return f.stackPartitions=s._stackPartitions,f.slicePartitions=s._slicePartitions,f.subdivisions=s._subdivisions,e.defined(r)?(i.Cartesian3.clone(s._radii,f.radii),r._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(f),r):(f.radius=s._radii.x,new p(f))},p.createGeometry=function(e){return n.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=p.unpack(i,t)),p.createGeometry(i)}}));

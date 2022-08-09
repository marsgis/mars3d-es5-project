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
define(["./Matrix2-735f0ea9","./defaultValue-6ed27e8d","./EllipseGeometry-197109d7","./RuntimeError-17a7ed3d","./ComponentDatatype-6ff7d2c3","./WebGLConstants-d878ea52","./Transforms-b683baff","./_commonjsHelpers-c27c962c","./combine-c04aaa26","./EllipseGeometryLibrary-402d6780","./GeometryAttribute-29ed65a7","./GeometryAttributes-cb1bf806","./GeometryInstance-8a2d7ac1","./GeometryOffsetAttribute-ddcc2f7f","./GeometryPipeline-9eaa7fbb","./AttributeCompression-f967afc2","./EncodedCartesian3-1e797130","./IndexDatatype-d42fd89c","./IntersectionTests-1cdbb657","./Plane-6c77dfaf","./VertexFormat-4362bb4a"],(function(e,t,r,a,n,o,i,c,d,s,f,l,m,b,p,u,y,G,E,C,_){"use strict";return function(a,n){return t.defined(n)&&(a=r.EllipseGeometry.unpack(a,n)),a._center=e.Cartesian3.clone(a._center),a._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),r.EllipseGeometry.createGeometry(a)}}));

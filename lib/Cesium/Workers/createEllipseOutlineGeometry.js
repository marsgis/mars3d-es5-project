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
define(["./Matrix2-735f0ea9","./defaultValue-6ed27e8d","./EllipseOutlineGeometry-bde24798","./RuntimeError-17a7ed3d","./ComponentDatatype-6ff7d2c3","./WebGLConstants-d878ea52","./Transforms-b683baff","./_commonjsHelpers-c27c962c","./combine-c04aaa26","./EllipseGeometryLibrary-402d6780","./GeometryAttribute-29ed65a7","./GeometryAttributes-cb1bf806","./GeometryOffsetAttribute-ddcc2f7f","./IndexDatatype-d42fd89c"],(function(e,t,r,i,n,o,a,l,d,c,s,f,u,m){"use strict";return function(i,n){return t.defined(n)&&(i=r.EllipseOutlineGeometry.unpack(i,n)),i._center=e.Cartesian3.clone(i._center),i._ellipsoid=e.Ellipsoid.clone(i._ellipsoid),r.EllipseOutlineGeometry.createGeometry(i)}}));

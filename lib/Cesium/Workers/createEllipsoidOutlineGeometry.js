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
define(["./defaultValue-21bb911f","./EllipsoidOutlineGeometry-4674a37e","./Transforms-32486356","./Matrix2-9e784742","./RuntimeError-9120af11","./ComponentDatatype-162d3ed7","./WebGLConstants-4c5efd09","./_commonjsHelpers-3aae1032-71d905b2","./combine-b848b11a","./GeometryAttribute-0d10a668","./GeometryAttributes-4d96e366","./GeometryOffsetAttribute-42fdb7dd","./IndexDatatype-2cb75364"],(function(e,t,r,n,i,o,a,d,u,f,b,m,s){"use strict";return function(r,n){return e.defined(r.buffer)&&(r=t.EllipsoidOutlineGeometry.unpack(r,n)),t.EllipsoidOutlineGeometry.createGeometry(r)}}));

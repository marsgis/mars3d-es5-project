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
define(["./defaultValue-77c08f32","./EllipsoidOutlineGeometry-ec57863c","./Transforms-fae4cdf7","./Matrix2-c788e106","./RuntimeError-50f3c270","./ComponentDatatype-94a172c0","./WebGLConstants-cbf0dab7","./_commonjsHelpers-d90b2ade","./combine-4bf14979","./GeometryAttribute-4daab906","./GeometryAttributes-a490dcf1","./GeometryOffsetAttribute-62f885db","./IndexDatatype-33d13dff"],(function(e,t,r,n,f,i,o,a,d,c,u,m,s){"use strict";return function(r,n){return e.defined(r.buffer)&&(r=t.EllipsoidOutlineGeometry.unpack(r,n)),t.EllipsoidOutlineGeometry.createGeometry(r)}}));

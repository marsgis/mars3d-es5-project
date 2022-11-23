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
define(["./defaultValue-ac2201bb","./FrustumGeometry-ea1e1a92","./Transforms-6c4dd71f","./Matrix2-6555478a","./RuntimeError-d45af186","./ComponentDatatype-43ab226f","./WebGLConstants-e12cdc8a","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./Plane-a0b66c27","./VertexFormat-d53ce9da"],(function(e,t,r,a,n,o,u,m,c,d,s,f,b){"use strict";return function(r,a){return e.defined(a)&&(r=t.FrustumGeometry.unpack(r,a)),t.FrustumGeometry.createGeometry(r)}}));

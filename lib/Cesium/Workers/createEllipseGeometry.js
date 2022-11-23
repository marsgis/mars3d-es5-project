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
define(["./Matrix2-6555478a","./defaultValue-ac2201bb","./EllipseGeometry-81d0a760","./RuntimeError-d45af186","./ComponentDatatype-43ab226f","./WebGLConstants-e12cdc8a","./Transforms-6c4dd71f","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./EllipseGeometryLibrary-70788c4f","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./GeometryInstance-9c4e19d7","./GeometryOffsetAttribute-a17b96d9","./GeometryPipeline-f5483757","./AttributeCompression-d9dabbfc","./EncodedCartesian3-3f5898d8","./IndexDatatype-88be9f5a","./IntersectionTests-4db2368e","./Plane-a0b66c27","./VertexFormat-d53ce9da"],(function(e,t,r,a,n,o,i,d,c,s,l,b,f,m,p,u,y,G,E,C,_){"use strict";return function(a,n){return t.defined(n)&&(a=r.EllipseGeometry.unpack(a,n)),a._center=e.Cartesian3.clone(a._center),a._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),r.EllipseGeometry.createGeometry(a)}}));

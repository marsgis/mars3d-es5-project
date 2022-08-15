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
define(["./Matrix2-c788e106","./defaultValue-77c08f32","./EllipseGeometry-7b3fe578","./RuntimeError-50f3c270","./ComponentDatatype-94a172c0","./WebGLConstants-cbf0dab7","./Transforms-fae4cdf7","./_commonjsHelpers-d90b2ade","./combine-4bf14979","./EllipseGeometryLibrary-ad4a5b4c","./GeometryAttribute-4daab906","./GeometryAttributes-a490dcf1","./GeometryInstance-19520f53","./GeometryOffsetAttribute-62f885db","./GeometryPipeline-f0a1ad88","./AttributeCompression-62b0e919","./EncodedCartesian3-222548c7","./IndexDatatype-33d13dff","./IntersectionTests-8b7c8657","./Plane-f81558db","./VertexFormat-a34558d6"],(function(e,t,r,n,a,o,i,s,c,d,f,l,b,m,p,u,y,G,E,C,_){"use strict";return function(n,a){return t.defined(a)&&(n=r.EllipseGeometry.unpack(n,a)),n._center=e.Cartesian3.clone(n._center),n._ellipsoid=e.Ellipsoid.clone(n._ellipsoid),r.EllipseGeometry.createGeometry(n)}}));

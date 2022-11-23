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
define(["./Matrix2-6555478a","./RuntimeError-d45af186","./defaultValue-ac2201bb","./EllipseOutlineGeometry-ef9f1c9f","./ComponentDatatype-43ab226f","./WebGLConstants-e12cdc8a","./Transforms-6c4dd71f","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./EllipseGeometryLibrary-70788c4f","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./IndexDatatype-88be9f5a"],(function(e,i,t,r,l,n,s,o,a,d,u,c,m,p){"use strict";function y(e){const i=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).radius,l={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new r.EllipseOutlineGeometry(l),this._workerName="createCircleOutlineGeometry"}y.packedLength=r.EllipseOutlineGeometry.packedLength,y.pack=function(e,i,t){return r.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};const f=new r.EllipseOutlineGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),G={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return y.unpack=function(i,l,n){const s=r.EllipseOutlineGeometry.unpack(i,l,f);return G.center=e.Cartesian3.clone(s._center,G.center),G.ellipsoid=e.Ellipsoid.clone(s._ellipsoid,G.ellipsoid),G.height=s._height,G.extrudedHeight=s._extrudedHeight,G.granularity=s._granularity,G.numberOfVerticalLines=s._numberOfVerticalLines,t.defined(n)?(G.semiMajorAxis=s._semiMajorAxis,G.semiMinorAxis=s._semiMinorAxis,n._ellipseGeometry=new r.EllipseOutlineGeometry(G),n):(G.radius=s._semiMajorAxis,new y(G))},y.createGeometry=function(e){return r.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(i,r){return t.defined(r)&&(i=y.unpack(i,r)),i._ellipseGeometry._center=e.Cartesian3.clone(i._ellipseGeometry._center),i._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(i._ellipseGeometry._ellipsoid),y.createGeometry(i)}}));

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
define(["./arrayRemoveDuplicates-47bdde2a","./Transforms-32486356","./Matrix2-9e784742","./RuntimeError-9120af11","./ComponentDatatype-162d3ed7","./CoplanarPolygonGeometryLibrary-ad444309","./defaultValue-21bb911f","./GeometryAttribute-0d10a668","./GeometryAttributes-4d96e366","./GeometryInstance-8afb910a","./GeometryPipeline-fe864367","./IndexDatatype-2cb75364","./PolygonGeometryLibrary-6fe849dd","./_commonjsHelpers-3aae1032-71d905b2","./combine-b848b11a","./WebGLConstants-4c5efd09","./OrientedBoundingBox-a23053f6","./EllipsoidTangentPlane-3e6487f3","./AxisAlignedBoundingBox-593e1bc0","./IntersectionTests-1c55b9ae","./Plane-d3876933","./AttributeCompression-cc24fe14","./EncodedCartesian3-787eabe7","./ArcType-3f30c89f","./EllipsoidRhumbLine-46f3022e","./PolygonPipeline-730d2db3"],(function(e,t,n,o,r,i,a,y,l,s,c,u,p,d,m,f,g,b,h,P,G,L,C,T,E,H){"use strict";function A(e){const t=e.length,n=new Float64Array(3*t),o=u.IndexDatatype.createTypedArray(t,2*t);let i=0,a=0;for(let r=0;r<t;r++){const y=e[r];n[i++]=y.x,n[i++]=y.y,n[i++]=y.z,o[a++]=r,o[a++]=(r+1)%t}const s=new l.GeometryAttributes({position:new y.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new y.Geometry({attributes:s,indices:o,primitiveType:y.PrimitiveType.LINES})}function k(e){const t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=p.PolygonGeometryLibrary.computeHierarchyPackedLength(t,n.Cartesian3)+1}k.fromPositions=function(e){return new k({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},k.pack=function(e,t,o){return o=a.defaultValue(o,0),t[o=p.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,o,n.Cartesian3)]=e.packedLength,t};const _={polygonHierarchy:{}};return k.unpack=function(e,t,o){t=a.defaultValue(t,0);const r=p.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,n.Cartesian3);t=r.startingIndex,delete r.startingIndex;const i=e[t];return a.defined(o)||(o=new k(_)),o._polygonHierarchy=r,o.packedLength=i,o},k.createGeometry=function(o){const r=o._polygonHierarchy;let a=r.positions;if(a=e.arrayRemoveDuplicates(a,n.Cartesian3.equalsEpsilon,!0),a.length<3)return;if(!i.CoplanarPolygonGeometryLibrary.validOutline(a))return;const l=p.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0===l.length)return;const u=[];for(let e=0;e<l.length;e++){const t=new s.GeometryInstance({geometry:A(l[e])});u.push(t)}const d=c.GeometryPipeline.combineInstances(u)[0],m=t.BoundingSphere.fromPoints(r.positions);return new y.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:m})},function(e,t){return a.defined(t)&&(e=k.unpack(e,t)),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}}));

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
define(["./defaultValue-ac2201bb","./Matrix2-6555478a","./Transforms-6c4dd71f","./ComponentDatatype-43ab226f","./RuntimeError-d45af186","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./IndexDatatype-88be9f5a","./WallGeometryLibrary-45fce2ce","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a","./arrayRemoveDuplicates-75feaa04","./PolylinePipeline-5d154ff9","./EllipsoidGeodesic-a67aa524","./EllipsoidRhumbLine-e7a75836","./IntersectionTests-4db2368e","./Plane-a0b66c27"],(function(e,i,t,n,a,o,s,r,l,m,d,u,c,p,f,h,g,y){"use strict";const _=new i.Cartesian3,E=new i.Cartesian3;function b(t){const a=(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions,o=t.maximumHeights,s=t.minimumHeights,r=e.defaultValue(t.granularity,n.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(t.ellipsoid,i.Ellipsoid.WGS84);this._positions=a,this._minimumHeights=s,this._maximumHeights=o,this._granularity=r,this._ellipsoid=i.Ellipsoid.clone(l),this._workerName="createWallOutlineGeometry";let m=1+a.length*i.Cartesian3.packedLength+2;e.defined(s)&&(m+=s.length),e.defined(o)&&(m+=o.length),this.packedLength=m+i.Ellipsoid.packedLength+1}b.pack=function(t,n,a){let o;a=e.defaultValue(a,0);const s=t._positions;let r=s.length;for(n[a++]=r,o=0;o<r;++o,a+=i.Cartesian3.packedLength)i.Cartesian3.pack(s[o],n,a);const l=t._minimumHeights;if(r=e.defined(l)?l.length:0,n[a++]=r,e.defined(l))for(o=0;o<r;++o)n[a++]=l[o];const m=t._maximumHeights;if(r=e.defined(m)?m.length:0,n[a++]=r,e.defined(m))for(o=0;o<r;++o)n[a++]=m[o];return i.Ellipsoid.pack(t._ellipsoid,n,a),n[a+=i.Ellipsoid.packedLength]=t._granularity,n};const H=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE),C={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:H,granularity:void 0};return b.unpack=function(t,n,a){let o;n=e.defaultValue(n,0);let s=t[n++];const r=new Array(s);for(o=0;o<s;++o,n+=i.Cartesian3.packedLength)r[o]=i.Cartesian3.unpack(t,n);let l,m;if(s=t[n++],s>0)for(l=new Array(s),o=0;o<s;++o)l[o]=t[n++];if(s=t[n++],s>0)for(m=new Array(s),o=0;o<s;++o)m[o]=t[n++];const d=i.Ellipsoid.unpack(t,n,H),u=t[n+=i.Ellipsoid.packedLength];return e.defined(a)?(a._positions=r,a._minimumHeights=l,a._maximumHeights=m,a._ellipsoid=i.Ellipsoid.clone(d,a._ellipsoid),a._granularity=u,a):(C.positions=r,C.minimumHeights=l,C.maximumHeights=m,C.granularity=u,new b(C))},b.fromConstantHeights=function(i){const t=(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT)).positions;let n,a;const o=i.minimumHeight,s=i.maximumHeight,r=e.defined(o),l=e.defined(s);if(r||l){const e=t.length;n=r?new Array(e):void 0,a=l?new Array(e):void 0;for(let i=0;i<e;++i)r&&(n[i]=o),l&&(a[i]=s)}return new b({positions:t,maximumHeights:a,minimumHeights:n,ellipsoid:i.ellipsoid})},b.createGeometry=function(a){const m=a._positions,d=a._minimumHeights,u=a._maximumHeights,c=a._granularity,p=a._ellipsoid,f=l.WallGeometryLibrary.computePositions(p,m,u,d,c,!1);if(!e.defined(f))return;const h=f.bottomPositions,g=f.topPositions;let y=g.length,b=2*y;const H=new Float64Array(b);let C,A=0;for(y/=3,C=0;C<y;++C){const e=3*C,t=i.Cartesian3.fromArray(g,e,_),n=i.Cartesian3.fromArray(h,e,E);H[A++]=n.x,H[A++]=n.y,H[A++]=n.z,H[A++]=t.x,H[A++]=t.y,H[A++]=t.z}const k=new s.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:H})}),w=b/3;b=2*w-4+w;const x=r.IndexDatatype.createTypedArray(w,b);let G=0;for(C=0;C<w-2;C+=2){const e=C,t=C+2,a=i.Cartesian3.fromArray(H,3*e,_),o=i.Cartesian3.fromArray(H,3*t,E);if(i.Cartesian3.equalsEpsilon(a,o,n.CesiumMath.EPSILON10))continue;const s=C+1,r=C+3;x[G++]=s,x[G++]=e,x[G++]=s,x[G++]=r,x[G++]=e,x[G++]=t}return x[G++]=w-2,x[G++]=w-1,new o.Geometry({attributes:k,indices:x,primitiveType:o.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere.fromVertices(H)})},function(t,n){return e.defined(n)&&(t=b.unpack(t,n)),t._ellipsoid=i.Ellipsoid.clone(t._ellipsoid),b.createGeometry(t)}}));

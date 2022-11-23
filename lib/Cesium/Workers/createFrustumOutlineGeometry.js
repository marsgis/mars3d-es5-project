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
define(["./defaultValue-ac2201bb","./Transforms-6c4dd71f","./Matrix2-6555478a","./RuntimeError-d45af186","./ComponentDatatype-43ab226f","./FrustumGeometry-ea1e1a92","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a","./Plane-a0b66c27","./VertexFormat-d53ce9da"],(function(e,t,r,n,a,u,i,o,c,s,p,m,d){"use strict";function f(n){const a=n.frustum,i=n.orientation,o=n.origin,c=e.defaultValue(n._drawNearPlane,!0);let s,p;a instanceof u.PerspectiveFrustum?(s=0,p=u.PerspectiveFrustum.packedLength):a instanceof u.OrthographicFrustum&&(s=1,p=u.OrthographicFrustum.packedLength),this._frustumType=s,this._frustum=a.clone(),this._origin=r.Cartesian3.clone(o),this._orientation=t.Quaternion.clone(i),this._drawNearPlane=c,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+r.Cartesian3.packedLength+t.Quaternion.packedLength}f.pack=function(n,a,i){i=e.defaultValue(i,0);const o=n._frustumType,c=n._frustum;return a[i++]=o,0===o?(u.PerspectiveFrustum.pack(c,a,i),i+=u.PerspectiveFrustum.packedLength):(u.OrthographicFrustum.pack(c,a,i),i+=u.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,a,i),i+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,a,i),a[i+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,a};const h=new u.PerspectiveFrustum,l=new u.OrthographicFrustum,g=new t.Quaternion,_=new r.Cartesian3;return f.unpack=function(n,a,i){a=e.defaultValue(a,0);const o=n[a++];let c;0===o?(c=u.PerspectiveFrustum.unpack(n,a,h),a+=u.PerspectiveFrustum.packedLength):(c=u.OrthographicFrustum.unpack(n,a,l),a+=u.OrthographicFrustum.packedLength);const s=r.Cartesian3.unpack(n,a,_);a+=r.Cartesian3.packedLength;const p=t.Quaternion.unpack(n,a,g),m=1===n[a+=t.Quaternion.packedLength];if(!e.defined(i))return new f({frustum:c,origin:s,orientation:p,_drawNearPlane:m});const d=o===i._frustumType?i._frustum:void 0;return i._frustum=c.clone(d),i._frustumType=o,i._origin=r.Cartesian3.clone(s,i._origin),i._orientation=t.Quaternion.clone(p,i._orientation),i._drawNearPlane=m,i},f.createGeometry=function(e){const r=e._frustumType,n=e._frustum,c=e._origin,s=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);u.FrustumGeometry._computeNearFarPlanes(c,s,r,n,m);const d=new o.GeometryAttributes({position:new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let f,h;const l=p?2:1,g=new Uint16Array(8*(l+1));let _=p?0:1;for(;_<2;++_)f=p?8*_:0,h=4*_,g[f]=h,g[f+1]=h+1,g[f+2]=h+1,g[f+3]=h+2,g[f+4]=h+2,g[f+5]=h+3,g[f+6]=h+3,g[f+7]=h;for(_=0;_<2;++_)f=8*(l+_),h=4*_,g[f]=h,g[f+1]=h+4,g[f+2]=h+1,g[f+3]=h+5,g[f+4]=h+2,g[f+5]=h+6,g[f+6]=h+3,g[f+7]=h+7;return new i.Geometry({attributes:d,indices:g,primitiveType:i.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=f.unpack(t,r)),f.createGeometry(t)}}));

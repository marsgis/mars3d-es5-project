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
define(["./Matrix2-6555478a","./combine-0dce9b0f","./AttributeCompression-d9dabbfc","./ComponentDatatype-43ab226f","./IndexDatatype-88be9f5a","./createTaskProcessorWorker","./RuntimeError-d45af186","./defaultValue-ac2201bb","./WebGLConstants-e12cdc8a"],(function(e,a,t,n,r,s,i,o,c){"use strict";const u=32767,f=new e.Cartographic,p=new e.Cartesian3;const d=new e.Rectangle,l=new e.Ellipsoid,b=new e.Cartesian3,C={min:void 0,max:void 0};const w=new e.Cartesian3,y=new e.Cartesian3,h=new e.Cartesian3,k=new e.Cartesian3,m=new e.Cartesian3;return s((function(s,i){const o=new Uint16Array(s.positions),c=new Uint16Array(s.widths),A=new Uint32Array(s.counts),g=new Uint16Array(s.batchIds);!function(a){a=new Float64Array(a);let t=0;C.min=a[t++],C.max=a[t++],e.Rectangle.unpack(a,t,d),t+=e.Rectangle.packedLength,e.Ellipsoid.unpack(a,t,l),t+=e.Ellipsoid.packedLength,e.Cartesian3.unpack(a,t,b)}(s.packedBuffer);const x=l,D=b,E=function(a,r,s,i,o){const c=a.length/3,d=a.subarray(0,c),l=a.subarray(c,2*c),b=a.subarray(2*c,3*c);t.AttributeCompression.zigZagDeltaDecode(d,l,b);const C=new Float64Array(a.length);for(let a=0;a<c;++a){const t=d[a],c=l[a],w=b[a],y=n.CesiumMath.lerp(r.west,r.east,t/u),h=n.CesiumMath.lerp(r.south,r.north,c/u),k=n.CesiumMath.lerp(s,i,w/u),m=e.Cartographic.fromRadians(y,h,k,f),A=o.cartographicToCartesian(m,p);e.Cartesian3.pack(A,C,3*a)}return C}(o,d,C.min,C.max,x),I=E.length/3,P=4*I-4,U=new Float32Array(3*P),R=new Float32Array(3*P),T=new Float32Array(3*P),F=new Float32Array(2*P),N=new Uint16Array(P);let M,L=0,S=0,_=0,v=0,G=A.length;for(M=0;M<G;++M){const a=A[M],t=c[M],n=g[M];for(let r=0;r<a;++r){let s;if(0===r){const a=e.Cartesian3.unpack(E,3*v,w),t=e.Cartesian3.unpack(E,3*(v+1),y);s=e.Cartesian3.subtract(a,t,h),e.Cartesian3.add(a,s,s)}else s=e.Cartesian3.unpack(E,3*(v+r-1),h);const i=e.Cartesian3.unpack(E,3*(v+r),k);let o;if(r===a-1){const t=e.Cartesian3.unpack(E,3*(v+a-1),w),n=e.Cartesian3.unpack(E,3*(v+a-2),y);o=e.Cartesian3.subtract(t,n,m),e.Cartesian3.add(t,o,o)}else o=e.Cartesian3.unpack(E,3*(v+r+1),m);e.Cartesian3.subtract(s,D,s),e.Cartesian3.subtract(i,D,i),e.Cartesian3.subtract(o,D,o);const c=r===a-1?2:4;for(let a=0===r?2:0;a<c;++a){e.Cartesian3.pack(i,U,L),e.Cartesian3.pack(s,R,L),e.Cartesian3.pack(o,T,L),L+=3;const r=a-2<0?-1:1;F[S++]=a%2*2-1,F[S++]=r*t,N[_++]=n}}v+=a}const W=r.IndexDatatype.createTypedArray(P,6*I-6);let B=0,O=0;for(G=I-1,M=0;M<G;++M)W[O++]=B,W[O++]=B+2,W[O++]=B+1,W[O++]=B+1,W[O++]=B+2,W[O++]=B+3,B+=4;i.push(U.buffer,R.buffer,T.buffer),i.push(F.buffer,N.buffer,W.buffer);let z={indexDatatype:2===W.BYTES_PER_ELEMENT?r.IndexDatatype.UNSIGNED_SHORT:r.IndexDatatype.UNSIGNED_INT,currentPositions:U.buffer,previousPositions:R.buffer,nextPositions:T.buffer,expandAndWidth:F.buffer,batchIds:N.buffer,indices:W.buffer};if(s.keepDecodedPositions){const e=function(e){const a=e.length,t=new Uint32Array(a+1);let n=0;for(let r=0;r<a;++r)t[r]=n,n+=e[r];return t[a]=n,t}(A);i.push(E.buffer,e.buffer),z=a.combine(z,{decodedPositions:E.buffer,decodedPositionOffsets:e.buffer})}return z}))}));

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
define(["./AttributeCompression-62b0e919","./Matrix2-c788e106","./ComponentDatatype-94a172c0","./createTaskProcessorWorker","./RuntimeError-50f3c270","./defaultValue-77c08f32","./WebGLConstants-cbf0dab7"],(function(e,t,a,r,n,o,i){"use strict";const s=32767,c=new t.Cartographic,u=new t.Cartesian3,p=new t.Rectangle,l=new t.Ellipsoid,f={min:void 0,max:void 0};return r((function(r,n){const o=new Uint16Array(r.positions);!function(e){e=new Float64Array(e);let a=0;f.min=e[a++],f.max=e[a++],t.Rectangle.unpack(e,a,p),a+=t.Rectangle.packedLength,t.Ellipsoid.unpack(e,a,l)}(r.packedBuffer);const i=p,m=l,h=f.min,C=f.max,b=o.length/3,d=o.subarray(0,b),g=o.subarray(b,2*b),w=o.subarray(2*b,3*b);e.AttributeCompression.zigZagDeltaDecode(d,g,w);const k=new Float64Array(o.length);for(let e=0;e<b;++e){const r=d[e],n=g[e],o=w[e],p=a.CesiumMath.lerp(i.west,i.east,r/s),l=a.CesiumMath.lerp(i.south,i.north,n/s),f=a.CesiumMath.lerp(h,C,o/s),b=t.Cartographic.fromRadians(p,l,f,c),y=m.cartographicToCartesian(b,u);t.Cartesian3.pack(y,k,3*e)}return n.push(k.buffer),{positions:k.buffer}}))}));

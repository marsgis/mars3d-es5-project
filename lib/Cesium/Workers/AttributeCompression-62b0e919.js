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
define(["exports","./Matrix2-c788e106","./ComponentDatatype-94a172c0","./RuntimeError-50f3c270","./defaultValue-77c08f32"],(function(t,e,n,o,a){"use strict";const c={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4",getMathType:function(t){switch(t){case c.SCALAR:return Number;case c.VEC2:return e.Cartesian2;case c.VEC3:return e.Cartesian3;case c.VEC4:return e.Cartesian4;case c.MAT2:return e.Matrix2;case c.MAT3:return e.Matrix3;case c.MAT4:return e.Matrix4}},getNumberOfComponents:function(t){switch(t){case c.SCALAR:return 1;case c.VEC2:return 2;case c.VEC3:return 3;case c.VEC4:case c.MAT2:return 4;case c.MAT3:return 9;case c.MAT4:return 16}},getAttributeLocationCount:function(t){switch(t){case c.SCALAR:case c.VEC2:case c.VEC3:case c.VEC4:return 1;case c.MAT2:return 2;case c.MAT3:return 3;case c.MAT4:return 4}},getGlslType:function(t){switch(t){case c.SCALAR:return"float";case c.VEC2:return"vec2";case c.VEC3:return"vec3";case c.VEC4:return"vec4";case c.MAT2:return"mat2";case c.MAT3:return"mat3";case c.MAT4:return"mat4"}}};var r=Object.freeze(c);const s=1/256,u={octEncodeInRange:function(t,e,o){if(o.x=t.x/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),o.y=t.y/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),t.z<0){const t=o.x,e=o.y;o.x=(1-Math.abs(e))*n.CesiumMath.signNotZero(t),o.y=(1-Math.abs(t))*n.CesiumMath.signNotZero(e)}return o.x=n.CesiumMath.toSNorm(o.x,e),o.y=n.CesiumMath.toSNorm(o.y,e),o},octEncode:function(t,e){return u.octEncodeInRange(t,255,e)}},i=new e.Cartesian2,C=new Uint8Array(1);function M(t){return C[0]=t,C[0]}u.octEncodeToCartesian4=function(t,e){return u.octEncodeInRange(t,65535,i),e.x=M(i.x*s),e.y=M(i.x),e.z=M(i.y*s),e.w=M(i.y),e},u.octDecodeInRange=function(t,o,a,c){if(c.x=n.CesiumMath.fromSNorm(t,a),c.y=n.CesiumMath.fromSNorm(o,a),c.z=1-(Math.abs(c.x)+Math.abs(c.y)),c.z<0){const t=c.x;c.x=(1-Math.abs(c.y))*n.CesiumMath.signNotZero(t),c.y=(1-Math.abs(t))*n.CesiumMath.signNotZero(c.y)}return e.Cartesian3.normalize(c,c)},u.octDecode=function(t,e,n){return u.octDecodeInRange(t,e,255,n)},u.octDecodeFromCartesian4=function(t,e){const n=256*t.x+t.y,o=256*t.z+t.w;return u.octDecodeInRange(n,o,65535,e)},u.octPackFloat=function(t){return 256*t.x+t.y};const f=new e.Cartesian2;function m(t){return t>>1^-(1&t)}u.octEncodeFloat=function(t){return u.octEncode(t,f),u.octPackFloat(f)},u.octDecodeFloat=function(t,e){const n=t/256,o=Math.floor(n),a=256*(n-o);return u.octDecode(o,a,e)},u.octPack=function(t,e,n,o){const a=u.octEncodeFloat(t),c=u.octEncodeFloat(e),r=u.octEncode(n,f);return o.x=65536*r.x+a,o.y=65536*r.y+c,o},u.octUnpack=function(t,e,n,o){let a=t.x/65536;const c=Math.floor(a),r=65536*(a-c);a=t.y/65536;const s=Math.floor(a),i=65536*(a-s);u.octDecodeFloat(r,e),u.octDecodeFloat(i,n),u.octDecode(c,s,o)},u.compressTextureCoordinates=function(t){return 4096*(4095*t.x|0)+(4095*t.y|0)},u.decompressTextureCoordinates=function(t,e){const n=t/4096,o=Math.floor(n);return e.x=o/4095,e.y=(t-4096*o)/4095,e},u.zigZagDeltaDecode=function(t,e,n){const o=t.length;let c=0,r=0,s=0;for(let u=0;u<o;++u)c+=m(t[u]),r+=m(e[u]),t[u]=c,e[u]=r,a.defined(n)&&(s+=m(n[u]),n[u]=s)},u.dequantize=function(t,e,o,a){const c=r.getNumberOfComponents(o);let s;switch(e){case n.ComponentDatatype.BYTE:s=127;break;case n.ComponentDatatype.UNSIGNED_BYTE:s=255;break;case n.ComponentDatatype.SHORT:s=32767;break;case n.ComponentDatatype.UNSIGNED_SHORT:s=65535;break;case n.ComponentDatatype.INT:s=2147483647;break;case n.ComponentDatatype.UNSIGNED_INT:s=4294967295}const u=new Float32Array(a*c);for(let e=0;e<a;e++)for(let n=0;n<c;n++){const o=e*c+n;u[o]=Math.max(t[o]/s,-1)}return u},u.decodeRGB565=function(t,e){const n=t.length;a.defined(e)||(e=new Float32Array(3*n));const o=1/31;for(let a=0;a<n;a++){const n=t[a],c=n>>11,r=n>>5&63,s=31&n,u=3*a;e[u]=c*o,e[u+1]=.015873015873015872*r,e[u+2]=s*o}return e},t.AttributeCompression=u}));

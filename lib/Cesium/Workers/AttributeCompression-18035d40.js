/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96.6
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

define(["exports","./Matrix2-4706dd70","./ComponentDatatype-438cad2a","./RuntimeError-a977b8e0","./defaultValue-028a8a27"],function(z,b,f,o,y){"use strict";const a={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4"};a.getMathType=function(e){switch(e){case a.SCALAR:return Number;case a.VEC2:return b.Cartesian2;case a.VEC3:return b.Cartesian3;case a.VEC4:return b.Cartesian4;case a.MAT2:return b.Matrix2;case a.MAT3:return b.Matrix3;case a.MAT4:return b.Matrix4;default:throw new o.DeveloperError("attributeType is not a valid value.")}},a.getNumberOfComponents=function(e){switch(e){case a.SCALAR:return 1;case a.VEC2:return 2;case a.VEC3:return 3;case a.VEC4:case a.MAT2:return 4;case a.MAT3:return 9;case a.MAT4:return 16;default:throw new o.DeveloperError("attributeType is not a valid value.")}},a.getAttributeLocationCount=function(e){switch(e){case a.SCALAR:case a.VEC2:case a.VEC3:case a.VEC4:return 1;case a.MAT2:return 2;case a.MAT3:return 3;case a.MAT4:return 4;default:throw new o.DeveloperError("attributeType is not a valid value.")}},a.getGlslType=function(e){switch(o.Check.typeOf.string("attributeType",e),e){case a.SCALAR:return"float";case a.VEC2:return"vec2";case a.VEC3:return"vec3";case a.VEC4:return"vec4";case a.MAT2:return"mat2";case a.MAT3:return"mat3";case a.MAT4:return"mat4";default:throw new o.DeveloperError("attributeType is not a valid value.")}};var S=Object.freeze(a);const u=1/256,w=256,s={};s.octEncodeInRange=function(e,n,t){o.Check.defined("vector",e),o.Check.defined("result",t);const c=b.Cartesian3.magnitudeSquared(e);if(Math.abs(c-1)>f.CesiumMath.EPSILON6)throw new o.DeveloperError("vector must be normalized.");if(t.x=e.x/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),t.y=e.y/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),e.z<0){const d=t.x,i=t.y;t.x=(1-Math.abs(i))*f.CesiumMath.signNotZero(d),t.y=(1-Math.abs(d))*f.CesiumMath.signNotZero(i)}return t.x=f.CesiumMath.toSNorm(t.x,n),t.y=f.CesiumMath.toSNorm(t.y,n),t},s.octEncode=function(e,n){return s.octEncodeInRange(e,255,n)};const k=new b.Cartesian2,x=new Uint8Array(1);function A(e){return x[0]=e,x[0]}s.octEncodeToCartesian4=function(e,n){return s.octEncodeInRange(e,65535,k),n.x=A(k.x*u),n.y=A(k.x),n.z=A(k.y*u),n.w=A(k.y),n},s.octDecodeInRange=function(e,n,t,c){if(o.Check.defined("result",c),e<0||e>t||n<0||n>t)throw new o.DeveloperError(`x and y must be unsigned normalized integers between 0 and ${t}`);if(c.x=f.CesiumMath.fromSNorm(e,t),c.y=f.CesiumMath.fromSNorm(n,t),c.z=1-(Math.abs(c.x)+Math.abs(c.y)),c.z<0){const d=c.x;c.x=(1-Math.abs(c.y))*f.CesiumMath.signNotZero(d),c.y=(1-Math.abs(d))*f.CesiumMath.signNotZero(c.y)}return b.Cartesian3.normalize(c,c)},s.octDecode=function(e,n,t){return s.octDecodeInRange(e,n,255,t)},s.octDecodeFromCartesian4=function(e,n){o.Check.typeOf.object("encoded",e),o.Check.typeOf.object("result",n);const t=e.x,c=e.y,d=e.z,i=e.w;if(t<0||t>255||c<0||c>255||d<0||d>255||i<0||i>255)throw new o.DeveloperError("x, y, z, and w must be unsigned normalized integers between 0 and 255");const C=t*w+c,h=d*w+i;return s.octDecodeInRange(C,h,65535,n)},s.octPackFloat=function(e){return o.Check.defined("encoded",e),256*e.x+e.y};const M=new b.Cartesian2;s.octEncodeFloat=function(e){return s.octEncode(e,M),s.octPackFloat(M)},s.octDecodeFloat=function(e,n){o.Check.defined("value",e);const t=e/256,c=Math.floor(t),d=(t-c)*256;return s.octDecode(c,d,n)},s.octPack=function(e,n,t,c){o.Check.defined("v1",e),o.Check.defined("v2",n),o.Check.defined("v3",t),o.Check.defined("result",c);const d=s.octEncodeFloat(e),i=s.octEncodeFloat(n),C=s.octEncode(t,M);return c.x=65536*C.x+d,c.y=65536*C.y+i,c},s.octUnpack=function(e,n,t,c){o.Check.defined("packed",e),o.Check.defined("v1",n),o.Check.defined("v2",t),o.Check.defined("v3",c);let d=e.x/65536;const i=Math.floor(d),C=(d-i)*65536;d=e.y/65536;const h=Math.floor(d),r=(d-h)*65536;s.octDecodeFloat(C,n),s.octDecodeFloat(r,t),s.octDecode(i,h,c)},s.compressTextureCoordinates=function(e){o.Check.defined("textureCoordinates",e);const n=e.x*4095|0,t=e.y*4095|0;return 4096*n+t},s.decompressTextureCoordinates=function(e,n){o.Check.defined("compressed",e),o.Check.defined("result",n);const t=e/4096,c=Math.floor(t);return n.x=c/4095,n.y=(e-c*4096)/4095,n};function g(e){return e>>1^-(e&1)}s.zigZagDeltaDecode=function(e,n,t){o.Check.defined("uBuffer",e),o.Check.defined("vBuffer",n),o.Check.typeOf.number.equals("uBuffer.length","vBuffer.length",e.length,n.length),y.defined(t)&&o.Check.typeOf.number.equals("uBuffer.length","heightBuffer.length",e.length,t.length);const c=e.length;let d=0,i=0,C=0;for(let h=0;h<c;++h)d+=g(e[h]),i+=g(n[h]),e[h]=d,n[h]=i,y.defined(t)&&(C+=g(t[h]),t[h]=C)},s.dequantize=function(e,n,t,c){o.Check.defined("typedArray",e),o.Check.defined("componentDatatype",n),o.Check.defined("type",t),o.Check.defined("count",c);const d=S.getNumberOfComponents(t);let i;switch(n){case f.ComponentDatatype.BYTE:i=127;break;case f.ComponentDatatype.UNSIGNED_BYTE:i=255;break;case f.ComponentDatatype.SHORT:i=32767;break;case f.ComponentDatatype.UNSIGNED_SHORT:i=65535;break;case f.ComponentDatatype.INT:i=2147483647;break;case f.ComponentDatatype.UNSIGNED_INT:i=4294967295;break;default:throw new o.DeveloperError(`Cannot dequantize component datatype: ${n}`)}const C=new Float32Array(c*d);for(let h=0;h<c;h++)for(let r=0;r<d;r++){const T=h*d+r;C[T]=Math.max(e[T]/i,-1)}return C},s.decodeRGB565=function(e,n){o.Check.defined("typedArray",e);const t=e.length*3;y.defined(n)&&o.Check.typeOf.number.equals("result.length","typedArray.length * 3",n.length,t);const c=e.length;y.defined(n)||(n=new Float32Array(c*3));const d=(1<<5)-1,i=(1<<6)-1,C=1/31,h=1/63;for(let r=0;r<c;r++){const T=e[r],N=T>>11,p=T>>5&i,F=T&d,l=3*r;n[l]=N*C,n[l+1]=p*h,n[l+2]=F*C}return n},z.AttributeCompression=s});
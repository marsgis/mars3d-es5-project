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
define(["exports","./defaultValue-77c08f32","./RuntimeError-50f3c270","./ComponentDatatype-94a172c0","./WebGLConstants-cbf0dab7"],(function(n,r,e,t,N){"use strict";const a={UNSIGNED_BYTE:N.WebGLConstants.UNSIGNED_BYTE,UNSIGNED_SHORT:N.WebGLConstants.UNSIGNED_SHORT,UNSIGNED_INT:N.WebGLConstants.UNSIGNED_INT,getSizeInBytes:function(n){switch(n){case a.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case a.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case a.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}},fromSizeInBytes:function(n){switch(n){case 2:return a.UNSIGNED_SHORT;case 4:return a.UNSIGNED_INT;case 1:return a.UNSIGNED_BYTE}},validate:function(n){return r.defined(n)&&(n===a.UNSIGNED_BYTE||n===a.UNSIGNED_SHORT||n===a.UNSIGNED_INT)},createTypedArray:function(n,r){return n>=t.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(r):new Uint16Array(r)},createTypedArrayFromArrayBuffer:function(n,r,e,N){return n>=t.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(r,e,N):new Uint16Array(r,e,N)},fromTypedArray:function(n){return n instanceof Uint8Array?a.UNSIGNED_BYTE:n instanceof Uint16Array?a.UNSIGNED_SHORT:n instanceof Uint32Array?a.UNSIGNED_INT:void 0}};var E=Object.freeze(a);n.IndexDatatype=E}));

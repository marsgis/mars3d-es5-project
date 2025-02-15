/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.126.1
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

import{e as f}from"./chunk-XCELY5ZL.js";function c(n){let o,a=n.name,e=n.message;f(a)&&f(e)?o=`${a}: ${e}`:o=n.toString();let r=n.stack;return f(r)&&(o+=`
${r}`),o}var i=c;function l(n){async function o({data:e}){let r=[],t={id:e.id,result:void 0,error:void 0};self.CESIUM_BASE_URL=e.baseUrl;try{let s=await n(e.parameters,r);t.result=s}catch(s){s instanceof Error?t.error={name:s.name,message:s.message,stack:s.stack}:t.error=s}e.canTransferArrayBuffer||(r.length=0);try{postMessage(t,r)}catch(s){t.result=void 0,t.error=`postMessage failed with error: ${i(s)}
  with responseMessage: ${JSON.stringify(t)}`,postMessage(t)}}function a(e){var r;postMessage({id:(r=e.data)==null?void 0:r.id,error:`postMessage failed with error: ${JSON.stringify(e)}`})}return self.onmessage=o,self.onmessageerror=a,self}var d=l;export{d as a};

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
define(["./defaultValue-ac2201bb","./PrimitivePipeline-4b589c04","./createTaskProcessorWorker","./Transforms-6c4dd71f","./Matrix2-6555478a","./RuntimeError-d45af186","./ComponentDatatype-43ab226f","./WebGLConstants-e12cdc8a","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./GeometryPipeline-f5483757","./AttributeCompression-d9dabbfc","./EncodedCartesian3-3f5898d8","./IndexDatatype-88be9f5a","./IntersectionTests-4db2368e","./Plane-a0b66c27","./WebMercatorProjection-a6181c09"],(function(e,t,r,n,o,i,a,s,c,f,d,u,b,m,l,p,y,P,k){"use strict";const C={};function G(t){let r=C[t];return e.defined(r)||("object"==typeof exports?C[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,C[r]=e}))),r}return r((function(r,n){const o=r.subTasks,i=o.length,a=new Array(i);for(let t=0;t<i;t++){const r=o[t],n=r.geometry,i=r.moduleName;if(e.defined(i)){const e=G(i);a[t]=e(n,r.offset)}else a[t]=n}return Promise.all(a).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));

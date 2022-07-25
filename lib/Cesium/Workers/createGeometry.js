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
define(["./defaultValue-21bb911f","./PrimitivePipeline-44672856","./createTaskProcessorWorker","./Transforms-32486356","./Matrix2-9e784742","./RuntimeError-9120af11","./ComponentDatatype-162d3ed7","./WebGLConstants-4c5efd09","./_commonjsHelpers-3aae1032-71d905b2","./combine-b848b11a","./GeometryAttribute-0d10a668","./GeometryAttributes-4d96e366","./GeometryPipeline-fe864367","./AttributeCompression-cc24fe14","./EncodedCartesian3-787eabe7","./IndexDatatype-2cb75364","./IntersectionTests-1c55b9ae","./Plane-d3876933","./WebMercatorProjection-fc6f10d4"],(function(e,t,r,n,o,i,s,a,c,f,u,d,m,b,l,p,y,P,k){"use strict";const C={};function G(t){let r=C[t];return e.defined(r)||("object"==typeof exports?C[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,C[r]=e}))),r}return r((function(r,n){const o=r.subTasks,i=o.length,s=new Array(i);for(let t=0;t<i;t++){const r=o[t],n=r.geometry,i=r.moduleName;if(e.defined(i)){const e=G(i);s[t]=e(n,r.offset)}else s[t]=n}return Promise.all(s).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));

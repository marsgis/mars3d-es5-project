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
define(["./defaultValue-77c08f32","./PrimitivePipeline-98819346","./createTaskProcessorWorker","./Transforms-fae4cdf7","./Matrix2-c788e106","./RuntimeError-50f3c270","./ComponentDatatype-94a172c0","./WebGLConstants-cbf0dab7","./_commonjsHelpers-d90b2ade","./combine-4bf14979","./GeometryAttribute-4daab906","./GeometryAttributes-a490dcf1","./GeometryPipeline-f0a1ad88","./AttributeCompression-62b0e919","./EncodedCartesian3-222548c7","./IndexDatatype-33d13dff","./IntersectionTests-8b7c8657","./Plane-f81558db","./WebMercatorProjection-3ff867a8"],(function(e,t,r,n,o,i,s,a,c,f,u,d,m,b,l,p,y,P,k){"use strict";const C={};function G(t){let r=C[t];return e.defined(r)||("object"==typeof exports?C[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,C[r]=e}))),r}return r((function(r,n){const o=r.subTasks,i=o.length,s=new Array(i);for(let t=0;t<i;t++){const r=o[t],n=r.geometry,i=r.moduleName;if(e.defined(i)){const e=G(i);s[t]=e(n,r.offset)}else s[t]=n}return Promise.all(s).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));

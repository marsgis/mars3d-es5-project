/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96
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
define(["./defaultValue-6ed27e8d","./PrimitivePipeline-6579baa1","./createTaskProcessorWorker","./Transforms-b683baff","./Matrix2-735f0ea9","./RuntimeError-17a7ed3d","./ComponentDatatype-6ff7d2c3","./WebGLConstants-d878ea52","./_commonjsHelpers-c27c962c","./combine-c04aaa26","./GeometryAttribute-29ed65a7","./GeometryAttributes-cb1bf806","./GeometryPipeline-9eaa7fbb","./AttributeCompression-f967afc2","./EncodedCartesian3-1e797130","./IndexDatatype-d42fd89c","./IntersectionTests-1cdbb657","./Plane-6c77dfaf","./WebMercatorProjection-4d21b562"],(function(e,t,r,n,o,a,i,s,c,f,d,u,b,m,l,p,y,P,k){"use strict";const C={};function G(t){let r=C[t];return e.defined(r)||("object"==typeof exports?C[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,C[r]=e}))),r}return r((function(r,n){const o=r.subTasks,a=o.length,i=new Array(a);for(let t=0;t<a;t++){const r=o[t],n=r.geometry,a=r.moduleName;if(e.defined(a)){const e=G(a);i[t]=e(n,r.offset)}else i[t]=n}return Promise.all(i).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));

/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.135.0
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

import{a as u}from"./chunk-S77XZCQ6.js";import"./chunk-SSQDOM4X.js";import"./chunk-HSO5NCO2.js";import{a as f}from"./chunk-V6M5VRUN.js";import"./chunk-4NESHLIW.js";import"./chunk-KJ2N7N2F.js";import"./chunk-YIDWXUKZ.js";import"./chunk-CUDDGE5L.js";import"./chunk-VUBH2SGE.js";import"./chunk-7DM4VRLC.js";import"./chunk-RQSOJS3W.js";import"./chunk-RVIN6KTA.js";import"./chunk-EKIWDFFL.js";import"./chunk-QUZOLRHP.js";import"./chunk-PVO6WFU6.js";import"./chunk-6INKH6TT.js";import"./chunk-CBDHYUZM.js";import"./chunk-WICKEAQ3.js";import"./chunk-VBZUTFOY.js";import"./chunk-SOJPBEDM.js";import"./chunk-74M7JUED.js";function a(c,d){return u.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=f(a);export{T as default};

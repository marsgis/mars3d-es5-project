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

define(["exports","./ComponentDatatype-98788316"],function(w,G){"use strict";const m={};m.computePositions=function(I,p,b,n,c){const i=I*.5,f=-i,s=n+n,L=c?2*s:s,t=new Float64Array(L*3);let r,e=0,o=0;const y=c?s*3:0,a=c?(s+n)*3:n*3;for(r=0;r<n;r++){const u=r/n*G.CesiumMath.TWO_PI,x=Math.cos(u),C=Math.sin(u),d=x*b,h=C*b,M=x*p,O=C*p;t[o+y]=d,t[o+y+1]=h,t[o+y+2]=f,t[o+a]=M,t[o+a+1]=O,t[o+a+2]=i,o+=3,c&&(t[e++]=d,t[e++]=h,t[e++]=f,t[e++]=M,t[e++]=O,t[e++]=i)}return t},w.CylinderGeometryLibrary=m});

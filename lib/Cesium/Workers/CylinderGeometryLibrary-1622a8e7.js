/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.94.3
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
define(["exports","./ComponentDatatype-30af1694"],(function(t,n){"use strict";const o={computePositions:function(t,o,e,s,r){const i=.5*t,a=-i,c=s+s,u=new Float64Array(3*(r?2*c:c));let f,y=0,m=0;const p=r?3*c:0,h=r?3*(c+s):3*s;for(f=0;f<s;f++){const t=f/s*n.CesiumMath.TWO_PI,c=Math.cos(t),l=Math.sin(t),C=c*e,M=l*e,d=c*o,P=l*o;u[m+p]=C,u[m+p+1]=M,u[m+p+2]=a,u[m+h]=d,u[m+h+1]=P,u[m+h+2]=i,m+=3,r&&(u[y++]=C,u[y++]=M,u[y++]=a,u[y++]=d,u[y++]=P,u[y++]=i)}return u}};t.CylinderGeometryLibrary=o}));

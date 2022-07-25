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
define(["exports","./ComponentDatatype-162d3ed7"],(function(t,n){"use strict";const o={computePositions:function(t,o,e,s,r){const i=.5*t,c=-i,a=s+s,u=new Float64Array(3*(r?2*a:a));let y,d=0,f=0;const m=r?3*a:0,p=r?3*(a+s):3*s;for(y=0;y<s;y++){const t=y/s*n.CesiumMath.TWO_PI,a=Math.cos(t),h=Math.sin(t),l=a*e,C=h*e,M=a*o,P=h*o;u[f+m]=l,u[f+m+1]=C,u[f+m+2]=c,u[f+p]=M,u[f+p+1]=P,u[f+p+2]=i,f+=3,r&&(u[d++]=l,u[d++]=C,u[d++]=c,u[d++]=M,u[d++]=P,u[d++]=i)}return u}};t.CylinderGeometryLibrary=o}));

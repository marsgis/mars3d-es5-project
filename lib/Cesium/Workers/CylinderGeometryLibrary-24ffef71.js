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
define(["exports","./ComponentDatatype-6ff7d2c3"],(function(t,n){"use strict";const o={computePositions:function(t,o,e,s,r){const c=.5*t,i=-c,a=s+s,f=new Float64Array(3*(r?2*a:a));let u,y=0,m=0;const p=r?3*a:0,d=r?3*(a+s):3*s;for(u=0;u<s;u++){const t=u/s*n.CesiumMath.TWO_PI,a=Math.cos(t),h=Math.sin(t),l=a*e,C=h*e,M=a*o,P=h*o;f[m+p]=l,f[m+p+1]=C,f[m+p+2]=i,f[m+d]=M,f[m+d+1]=P,f[m+d+2]=c,m+=3,r&&(f[y++]=l,f[y++]=C,f[y++]=i,f[y++]=M,f[y++]=P,f[y++]=c)}return f}};t.CylinderGeometryLibrary=o}));

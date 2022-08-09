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
define(["exports","./RuntimeError-17a7ed3d","./defaultValue-6ed27e8d","./ComponentDatatype-6ff7d2c3"],(function(e,n,d,t){"use strict";const i=t.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,t,f){if(!d.defined(e))return;t=d.defaultValue(t,!1);const u=d.defined(f),r=e.length;if(r<2)return e;let s,l,a,c=e[0],o=0,p=-1;for(s=1;s<r;++s)l=e[s],n(c,l,i)?(d.defined(a)||(a=e.slice(0,s),o=s-1,p=0),u&&f.push(s)):(d.defined(a)&&(a.push(l),o=s,u&&(p=f.length)),c=l);return t&&n(e[0],e[r-1],i)&&(u&&(d.defined(a)?f.splice(p,0,o):f.push(r-1)),d.defined(a)?a.length-=1:a=e.slice(0,-1)),d.defined(a)?a:e}}));

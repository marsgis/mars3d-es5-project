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
define(["exports","./RuntimeError-9120af11","./defaultValue-21bb911f","./ComponentDatatype-162d3ed7"],(function(e,n,t,d){"use strict";const i=d.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,d,f){if(!t.defined(e))return;d=t.defaultValue(d,!1);const u=t.defined(f),r=e.length;if(r<2)return e;let s,l,a,o=e[0],c=0,p=-1;for(s=1;s<r;++s)l=e[s],n(o,l,i)?(t.defined(a)||(a=e.slice(0,s),c=s-1,p=0),u&&f.push(s)):(t.defined(a)&&(a.push(l),c=s,u&&(p=f.length)),o=l);return d&&n(e[0],e[r-1],i)&&(u&&(t.defined(a)?f.splice(p,0,c):f.push(r-1)),t.defined(a)?a.length-=1:a=e.slice(0,-1)),t.defined(a)?a:e}}));

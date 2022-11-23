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
define(["exports","./RuntimeError-96a66650","./defaultValue-a4a8b5d2","./ComponentDatatype-30af1694"],(function(e,n,t,i){"use strict";const d=i.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,i,f){if(!t.defined(e))return;i=t.defaultValue(i,!1);const u=t.defined(f),a=e.length;if(a<2)return e;let r,s,l,o=e[0],c=0,p=-1;for(r=1;r<a;++r)s=e[r],n(o,s,d)?(t.defined(l)||(l=e.slice(0,r),c=r-1,p=0),u&&f.push(r)):(t.defined(l)&&(l.push(s),c=r,u&&(p=f.length)),o=s);return i&&n(e[0],e[a-1],d)&&(u&&(t.defined(l)?f.splice(p,0,c):f.push(a-1)),t.defined(l)?l.length-=1:l=e.slice(0,-1)),t.defined(l)?l:e}}));

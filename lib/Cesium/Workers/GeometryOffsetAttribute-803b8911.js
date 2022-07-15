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
define(["exports","./RuntimeError-96a66650","./defaultValue-a4a8b5d2"],(function(t,e,a){"use strict";var r=Object.freeze({NONE:0,TOP:1,ALL:2});t.GeometryOffsetAttribute=r,t.arrayFill=function(t,e,r,f){if("function"==typeof t.fill)return t.fill(e,r,f);const n=t.length>>>0,l=a.defaultValue(r,0);let u=l<0?Math.max(n+l,0):Math.min(l,n);const i=a.defaultValue(f,n),o=i<0?Math.max(n+i,0):Math.min(i,n);for(;u<o;)t[u]=e,u++;return t}}));

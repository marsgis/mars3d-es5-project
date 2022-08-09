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

define(["exports","./RuntimeError-a977b8e0","./defaultValue-028a8a27"],function(u,f,i){"use strict";function O(e,l,n,c){if(f.Check.defined("array",e),f.Check.defined("value",l),i.defined(n)&&f.Check.typeOf.number("start",n),i.defined(c)&&f.Check.typeOf.number("end",c),typeof e.fill=="function")return e.fill(l,n,c);const t=e.length>>>0,h=i.defaultValue(n,0);let o=h<0?Math.max(t+h,0):Math.min(h,t);const s=i.defaultValue(c,t),d=s<0?Math.max(t+s,0):Math.min(s,t);for(;o<d;)e[o]=l,o++;return e}var b=Object.freeze({NONE:0,TOP:1,ALL:2});u.GeometryOffsetAttribute=b,u.arrayFill=O});

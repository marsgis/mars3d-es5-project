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
define(["exports","./defaultValue-a4a8b5d2"],(function(e,t){"use strict";e.combine=function e(n,o,r){r=t.defaultValue(r,!1);const f={},i=t.defined(n),a=t.defined(o);let d,s,u;if(i)for(d in n)n.hasOwnProperty(d)&&(s=n[d],a&&r&&"object"==typeof s&&o.hasOwnProperty(d)?(u=o[d],f[d]="object"==typeof u?e(s,u,r):s):f[d]=s);if(a)for(d in o)o.hasOwnProperty(d)&&!f.hasOwnProperty(d)&&(u=o[d],f[d]=u);return f}}));

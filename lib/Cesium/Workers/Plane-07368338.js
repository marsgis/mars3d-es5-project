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
define(["exports","./Matrix2-ce52759f","./RuntimeError-96a66650","./defaultValue-a4a8b5d2","./ComponentDatatype-30af1694"],(function(n,e,a,t,r){"use strict";function i(n,a){this.normal=e.Cartesian3.clone(n),this.distance=a}i.fromPointNormal=function(n,a,r){const s=-e.Cartesian3.dot(a,n);return t.defined(r)?(e.Cartesian3.clone(a,r.normal),r.distance=s,r):new i(a,s)};const s=new e.Cartesian3;i.fromCartesian4=function(n,a){const r=e.Cartesian3.fromCartesian4(n,s),o=n.w;return t.defined(a)?(e.Cartesian3.clone(r,a.normal),a.distance=o,a):new i(r,o)},i.getPointDistance=function(n,a){return e.Cartesian3.dot(n.normal,a)+n.distance};const o=new e.Cartesian3;i.projectPointOntoPlane=function(n,a,r){t.defined(r)||(r=new e.Cartesian3);const s=i.getPointDistance(n,a),c=e.Cartesian3.multiplyByScalar(n.normal,s,o);return e.Cartesian3.subtract(a,c,r)};const c=new e.Matrix4,l=new e.Cartesian4,f=new e.Cartesian3;i.transform=function(n,a,t){const r=n.normal,s=n.distance,o=e.Matrix4.inverseTranspose(a,c);let C=e.Cartesian4.fromElements(r.x,r.y,r.z,s,l);C=e.Matrix4.multiplyByVector(o,C,C);const d=e.Cartesian3.fromCartesian4(C,f);return C=e.Cartesian4.divideByScalar(C,e.Cartesian3.magnitude(d),C),i.fromCartesian4(C,t)},i.clone=function(n,a){return t.defined(a)?(e.Cartesian3.clone(n.normal,a.normal),a.distance=n.distance,a):new i(n.normal,n.distance)},i.equals=function(n,a){return n.distance===a.distance&&e.Cartesian3.equals(n.normal,a.normal)},i.ORIGIN_XY_PLANE=Object.freeze(new i(e.Cartesian3.UNIT_Z,0)),i.ORIGIN_YZ_PLANE=Object.freeze(new i(e.Cartesian3.UNIT_X,0)),i.ORIGIN_ZX_PLANE=Object.freeze(new i(e.Cartesian3.UNIT_Y,0)),n.Plane=i}));

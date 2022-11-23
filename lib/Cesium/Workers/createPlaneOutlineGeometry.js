/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.95
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
define(["./defaultValue-ac2201bb","./Transforms-6c4dd71f","./Matrix2-6555478a","./RuntimeError-d45af186","./ComponentDatatype-43ab226f","./GeometryAttribute-a34d86d0","./GeometryAttributes-d060f8b5","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a"],(function(e,t,n,r,a,i,o,c,u,s){"use strict";function m(){this._workerName="createPlaneOutlineGeometry"}m.packedLength=0,m.pack=function(e,t){return t},m.unpack=function(t,n,r){return e.defined(r)?r:new m};const d=new n.Cartesian3(-.5,-.5,0),y=new n.Cartesian3(.5,.5,0);return m.createGeometry=function(){const e=new o.GeometryAttributes,r=new Uint16Array(8),c=new Float64Array(12);return c[0]=d.x,c[1]=d.y,c[2]=d.z,c[3]=y.x,c[4]=d.y,c[5]=d.z,c[6]=y.x,c[7]=y.y,c[8]=d.z,c[9]=d.x,c[10]=y.y,c[11]=d.z,e.position=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),r[0]=0,r[1]=1,r[2]=1,r[3]=2,r[4]=2,r[5]=3,r[6]=3,r[7]=0,new i.Geometry({attributes:e,indices:r,primitiveType:i.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=m.unpack(t,n)),m.createGeometry(t)}}));

/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.126.2
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

import{a as w}from"./chunk-EHAIRWUB.js";import{a as N,c as E}from"./chunk-4RE5TK7J.js";import"./chunk-DJD6JBSI.js";import"./chunk-P5AD4E2S.js";import"./chunk-YX3IB3TK.js";import"./chunk-TYCSUVZ4.js";import{a as v,b as G}from"./chunk-AB73NGS3.js";import{a as q}from"./chunk-7JXUEP4W.js";import"./chunk-D5LB274J.js";import"./chunk-YB2RTWOV.js";import"./chunk-CJHX6SWR.js";import{a as k}from"./chunk-VPLHXR2B.js";import{a as O}from"./chunk-BNNASHS5.js";import{b as A,c as R,d as S}from"./chunk-D3P7QTFD.js";import{d as C}from"./chunk-2ABBI2JG.js";import"./chunk-BJSU2TZZ.js";import{a as b}from"./chunk-C2P645MX.js";import{a,c as _,d as s}from"./chunk-VJ3OOPD5.js";import{a as D}from"./chunk-VEIGU5F3.js";import"./chunk-NUWAUNN2.js";import"./chunk-2XH33C4K.js";import{a as d}from"./chunk-NPKJLKTD.js";import{a as y}from"./chunk-CWP2SDHN.js";import{e as u}from"./chunk-KOK32Q4J.js";function W(o,i){let t=new O;t.position=new S({componentDatatype:b.DOUBLE,componentsPerAttribute:3,values:o});let e=i.length,r=t.position.values.length/3,f=o.length/3/e,p=k.createTypedArray(r,2*e*(f+1)),m,n,l=0;m=0;let h=m*e;for(n=0;n<e-1;n++)p[l++]=n+h,p[l++]=n+h+1;for(p[l++]=e-1+h,p[l++]=h,m=f-1,h=m*e,n=0;n<e-1;n++)p[l++]=n+h,p[l++]=n+h+1;for(p[l++]=e-1+h,p[l++]=h,m=0;m<f-1;m++){let T=e*m,U=T+e;for(n=0;n<e;n++)p[l++]=n+T,p[l++]=n+U}return new R({attributes:t,indices:k.createTypedArray(r,p),boundingSphere:C.fromVertices(o),primitiveType:A.LINES})}function g(o){o=d(o,d.EMPTY_OBJECT);let i=o.polylinePositions,t=o.shapePositions;if(!u(i))throw new y("options.polylinePositions is required.");if(!u(t))throw new y("options.shapePositions is required.");this._positions=i,this._shape=t,this._ellipsoid=s.clone(d(o.ellipsoid,s.default)),this._cornerType=d(o.cornerType,N.ROUNDED),this._granularity=d(o.granularity,D.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";let e=1+i.length*a.packedLength;e+=1+t.length*_.packedLength,this.packedLength=e+s.packedLength+2}g.pack=function(o,i,t){if(!u(o))throw new y("value is required");if(!u(i))throw new y("array is required");t=d(t,0);let e,r=o._positions,c=r.length;for(i[t++]=c,e=0;e<c;++e,t+=a.packedLength)a.pack(r[e],i,t);let f=o._shape;for(c=f.length,i[t++]=c,e=0;e<c;++e,t+=_.packedLength)_.pack(f[e],i,t);return s.pack(o._ellipsoid,i,t),t+=s.packedLength,i[t++]=o._cornerType,i[t]=o._granularity,i};var B=s.clone(s.UNIT_SPHERE),P={polylinePositions:void 0,shapePositions:void 0,ellipsoid:B,height:void 0,cornerType:void 0,granularity:void 0};g.unpack=function(o,i,t){if(!u(o))throw new y("array is required");i=d(i,0);let e,r=o[i++],c=new Array(r);for(e=0;e<r;++e,i+=a.packedLength)c[e]=a.unpack(o,i);r=o[i++];let f=new Array(r);for(e=0;e<r;++e,i+=_.packedLength)f[e]=_.unpack(o,i);let p=s.unpack(o,i,B);i+=s.packedLength;let m=o[i++],n=o[i];return u(t)?(t._positions=c,t._shape=f,t._ellipsoid=s.clone(p,t._ellipsoid),t._cornerType=m,t._granularity=n,t):(P.polylinePositions=c,P.shapePositions=f,P.cornerType=m,P.granularity=n,new g(P))};var M=new w;g.createGeometry=function(o){let i=o._positions,t=q(i,a.equalsEpsilon),e=o._shape;if(e=E.removeDuplicatesFromShape(e),t.length<2||e.length<3)return;G.computeWindingOrder2D(e)===v.CLOCKWISE&&e.reverse();let r=w.fromPoints(e,M),c=E.computePositions(t,e,r,o,!1);return W(c,e)};var L=g;function j(o,i){return u(i)&&(o=L.unpack(o,i)),o._ellipsoid=s.clone(o._ellipsoid),L.createGeometry(o)}var he=j;export{he as default};

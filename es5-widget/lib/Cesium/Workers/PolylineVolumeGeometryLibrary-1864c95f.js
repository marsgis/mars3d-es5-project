define(["exports","./Matrix2-d1511f33","./EllipsoidTangentPlane-7095b5e7","./ComponentDatatype-5f63ec93","./PolylinePipeline-d2c6257d","./Transforms-46cc38bd","./when-229515d6","./RuntimeError-8f3d96ee"],(function(e,t,a,n,r,i,o,s){"use strict";var l=Object.freeze({ROUNDED:0,MITERED:1,BEVELED:2});const c={};function C(e,t){o.defined(c[e])||(c[e]=!0,console.warn(o.defaultValue(t,e)))}C.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",C.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",C.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",C.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored";const u=[new t.Cartesian3,new t.Cartesian3],d=new t.Cartesian3,g=new t.Cartesian3,y=new t.Cartesian3,m=new t.Cartesian3,h=new t.Cartesian3,f=new t.Cartesian3,p=new t.Cartesian3,w=new t.Cartesian3,x=new t.Cartesian3,E=new t.Cartesian3,P=new t.Cartesian3,M={};let b=new t.Cartographic;function T(e,a,n,r){const i=e[0],o=e[1],s=t.Cartesian3.angleBetween(i,o),l=Math.ceil(s/r),c=new Array(l);let C;if(a===n){for(C=0;C<l;C++)c[C]=a;return c.push(n),c}const u=(n-a)/l;for(C=1;C<l;C++){const e=a+C*u;c[C]=e}return c[0]=a,c.push(n),c}const B=new t.Cartesian3,z=new t.Cartesian3;const S=new t.Cartesian3(-1,0,0);let A=new t.Matrix4;const D=new t.Matrix4;let R=new t.Matrix3;const O=t.Matrix3.IDENTITY.clone(),I=new t.Cartesian3,V=new t.Cartesian4,N=new t.Cartesian3;function v(e,n,r,o,s,l,c,C){let u=I,d=V;A=i.Transforms.eastNorthUpToFixedFrame(e,s,A),u=t.Matrix4.multiplyByPointAsVector(A,S,u),u=t.Cartesian3.normalize(u,u);const g=function(e,n,r,i){const o=new a.EllipsoidTangentPlane(r,i),s=o.projectPointOntoPlane(t.Cartesian3.add(r,e,B),B),l=o.projectPointOntoPlane(t.Cartesian3.add(r,n,z),z),c=t.Cartesian2.angleBetween(s,l);return l.x*s.y-l.y*s.x>=0?-c:c}(u,n,e,s);R=t.Matrix3.fromRotationZ(g,R),N.z=l,A=t.Matrix4.multiplyTransformation(A,t.Matrix4.fromRotationTranslation(R,N,D),A);const y=O;y[0]=c;for(let e=0;e<C;e++)for(let e=0;e<r.length;e+=3)d=t.Cartesian3.fromArray(r,e,d),d=t.Matrix3.multiplyByVector(y,d,d),d=t.Matrix4.multiplyByPoint(A,d,d),o.push(d.x,d.y,d.z);return o}const G=new t.Cartesian3;function H(e,a,n,r,i,o,s){for(let l=0;l<e.length;l+=3){r=v(t.Cartesian3.fromArray(e,l,G),a,n,r,i,o[l/3],s,1)}return r}function L(e,t){const a=e.length,n=new Array(3*a);let r=0;const i=t.x+t.width/2,o=t.y+t.height/2;for(let t=0;t<a;t++)n[r++]=e[t].x-i,n[r++]=0,n[r++]=e[t].y-o;return n}const j=new i.Quaternion,Q=new t.Cartesian3,q=new t.Matrix3;function F(e,a,r,o,s,c,C,u,d,g){const y=t.Cartesian3.angleBetween(t.Cartesian3.subtract(a,e,E),t.Cartesian3.subtract(r,e,P)),m=o===l.BEVELED?0:Math.ceil(y/n.CesiumMath.toRadians(5));let h,f,p;if(h=s?t.Matrix3.fromQuaternion(i.Quaternion.fromAxisAngle(t.Cartesian3.negate(e,E),y/(m+1),j),q):t.Matrix3.fromQuaternion(i.Quaternion.fromAxisAngle(e,y/(m+1),j),q),a=t.Cartesian3.clone(a,Q),m>0){const n=g?2:1;for(let r=0;r<m;r++)a=t.Matrix3.multiplyByVector(h,a,a),f=t.Cartesian3.subtract(a,e,E),f=t.Cartesian3.normalize(f,f),s||(f=t.Cartesian3.negate(f,f)),p=c.scaleToGeodeticSurface(a,P),C=v(p,f,u,C,c,d,1,n)}else f=t.Cartesian3.subtract(a,e,E),f=t.Cartesian3.normalize(f,f),s||(f=t.Cartesian3.negate(f,f)),p=c.scaleToGeodeticSurface(a,P),C=v(p,f,u,C,c,d,1,1),r=t.Cartesian3.clone(r,Q),f=t.Cartesian3.subtract(r,e,E),f=t.Cartesian3.normalize(f,f),s||(f=t.Cartesian3.negate(f,f)),p=c.scaleToGeodeticSurface(r,P),C=v(p,f,u,C,c,d,1,1);return C}M.removeDuplicatesFromShape=function(e){const a=e.length,n=[];for(let r=a-1,i=0;i<a;r=i++){const a=e[r],o=e[i];t.Cartesian2.equals(a,o)||n.push(o)}return n},M.angleIsGreaterThanPi=function(e,n,r,i){const o=new a.EllipsoidTangentPlane(r,i),s=o.projectPointOntoPlane(t.Cartesian3.add(r,e,B),B),l=o.projectPointOntoPlane(t.Cartesian3.add(r,n,z),z);return l.x*s.y-l.y*s.x>=0};const U=new t.Cartesian3,_=new t.Cartesian3;M.computePositions=function(e,a,i,o,s){const c=o._ellipsoid,P=function(e,t){const a=new Array(e.length);for(let n=0;n<e.length;n++){const r=e[n];b=t.cartesianToCartographic(r,b),a[n]=b.height,e[n]=t.scaleToGeodeticSurface(r,r)}return a}(e,c),B=o._granularity,z=o._cornerType,S=s?function(e,t){const a=e.length,n=new Array(6*a);let r=0;const i=t.x+t.width/2,o=t.y+t.height/2;let s=e[0];n[r++]=s.x-i,n[r++]=0,n[r++]=s.y-o;for(let t=1;t<a;t++){s=e[t];const a=s.x-i,l=s.y-o;n[r++]=a,n[r++]=0,n[r++]=l,n[r++]=a,n[r++]=0,n[r++]=l}return s=e[0],n[r++]=s.x-i,n[r++]=0,n[r++]=s.y-o,n}(a,i):L(a,i),A=s?L(a,i):void 0,D=i.height/2,R=i.width/2;let O=e.length,I=[],V=s?[]:void 0,N=d,G=g,j=y,Q=m,q=h,Z=f,W=p,Y=w,k=x,J=e[0],K=e[1];Q=c.geodeticSurfaceNormal(J,Q),N=t.Cartesian3.subtract(K,J,N),N=t.Cartesian3.normalize(N,N),Y=t.Cartesian3.cross(Q,N,Y),Y=t.Cartesian3.normalize(Y,Y);let X,$,ee=P[0],te=P[1];s&&(V=v(J,Y,A,V,c,ee+D,1,1)),k=t.Cartesian3.clone(J,k),J=K,G=t.Cartesian3.negate(N,G);for(let a=1;a<O-1;a++){const i=s?2:1;if(K=e[a+1],J.equals(K)){C("Positions are too close and are considered equivalent with rounding error.");continue}N=t.Cartesian3.subtract(K,J,N),N=t.Cartesian3.normalize(N,N),j=t.Cartesian3.add(N,G,j),j=t.Cartesian3.normalize(j,j),Q=c.geodeticSurfaceNormal(J,Q);const o=t.Cartesian3.multiplyByScalar(Q,t.Cartesian3.dot(N,Q),U);t.Cartesian3.subtract(N,o,o),t.Cartesian3.normalize(o,o);const d=t.Cartesian3.multiplyByScalar(Q,t.Cartesian3.dot(G,Q),_);t.Cartesian3.subtract(G,d,d),t.Cartesian3.normalize(d,d);if(!n.CesiumMath.equalsEpsilon(Math.abs(t.Cartesian3.dot(o,d)),1,n.CesiumMath.EPSILON7)){j=t.Cartesian3.cross(j,Q,j),j=t.Cartesian3.cross(Q,j,j),j=t.Cartesian3.normalize(j,j);const e=1/Math.max(.25,t.Cartesian3.magnitude(t.Cartesian3.cross(j,G,E))),a=M.angleIsGreaterThanPi(N,G,J,c);a?(q=t.Cartesian3.add(J,t.Cartesian3.multiplyByScalar(j,e*R,j),q),Z=t.Cartesian3.add(q,t.Cartesian3.multiplyByScalar(Y,R,Z),Z),u[0]=t.Cartesian3.clone(k,u[0]),u[1]=t.Cartesian3.clone(Z,u[1]),X=T(u,ee+D,te+D,B),$=r.PolylinePipeline.generateArc({positions:u,granularity:B,ellipsoid:c}),I=H($,Y,S,I,c,X,1),Y=t.Cartesian3.cross(Q,N,Y),Y=t.Cartesian3.normalize(Y,Y),W=t.Cartesian3.add(q,t.Cartesian3.multiplyByScalar(Y,R,W),W),z===l.ROUNDED||z===l.BEVELED?F(q,Z,W,z,a,c,I,S,te+D,s):(j=t.Cartesian3.negate(j,j),I=v(J,j,S,I,c,te+D,e,i)),k=t.Cartesian3.clone(W,k)):(q=t.Cartesian3.add(J,t.Cartesian3.multiplyByScalar(j,e*R,j),q),Z=t.Cartesian3.add(q,t.Cartesian3.multiplyByScalar(Y,-R,Z),Z),u[0]=t.Cartesian3.clone(k,u[0]),u[1]=t.Cartesian3.clone(Z,u[1]),X=T(u,ee+D,te+D,B),$=r.PolylinePipeline.generateArc({positions:u,granularity:B,ellipsoid:c}),I=H($,Y,S,I,c,X,1),Y=t.Cartesian3.cross(Q,N,Y),Y=t.Cartesian3.normalize(Y,Y),W=t.Cartesian3.add(q,t.Cartesian3.multiplyByScalar(Y,-R,W),W),z===l.ROUNDED||z===l.BEVELED?F(q,Z,W,z,a,c,I,S,te+D,s):I=v(J,j,S,I,c,te+D,e,i),k=t.Cartesian3.clone(W,k)),G=t.Cartesian3.negate(N,G)}else I=v(k,Y,S,I,c,ee+D,1,1),k=J;ee=te,te=P[a+1],J=K}u[0]=t.Cartesian3.clone(k,u[0]),u[1]=t.Cartesian3.clone(J,u[1]),X=T(u,ee+D,te+D,B),$=r.PolylinePipeline.generateArc({positions:u,granularity:B,ellipsoid:c}),I=H($,Y,S,I,c,X,1),s&&(V=v(J,Y,A,V,c,te+D,1,1)),O=I.length;const ae=s?O+V.length:O,ne=new Float64Array(ae);return ne.set(I),s&&ne.set(V,O),ne},e.CornerType=l,e.PolylineVolumeGeometryLibrary=M,e.oneTimeWarning=C}));
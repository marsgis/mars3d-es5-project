define(["./when-7b580518","./Transforms-70f396e0","./Cartesian2-40b13f31","./Check-3917d765","./ComponentDatatype-6c2e43c1","./GeometryAttribute-6e7c7644","./GeometryAttributes-fbd9a3fb","./Math-87254c13","./combine-83aa7971","./RuntimeError-fad4d3c6","./WebGLConstants-4e26b85a"],function(r,a,i,e,o,u,c,t,n,s,y){"use strict";function m(){this._workerName="createPlaneOutlineGeometry"}m.packedLength=0,m.pack=function(e,t){return t},m.unpack=function(e,t,n){return r.defined(n)?n:new m};var p=new i.Cartesian3(-.5,-.5,0),f=new i.Cartesian3(.5,.5,0);return m.createGeometry=function(){var e=new c.GeometryAttributes,t=new Uint16Array(8),n=new Float64Array(12);return n[0]=p.x,n[1]=p.y,n[2]=p.z,n[3]=f.x,n[4]=p.y,n[5]=p.z,n[6]=f.x,n[7]=f.y,n[8]=p.z,n[9]=p.x,n[10]=f.y,n[11]=p.z,e.position=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n}),t[0]=0,t[1]=1,t[2]=1,t[3]=2,t[4]=2,t[5]=3,t[6]=3,t[7]=0,new u.Geometry({attributes:e,indices:t,primitiveType:u.PrimitiveType.LINES,boundingSphere:new a.BoundingSphere(i.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return r.defined(t)&&(e=m.unpack(e,t)),m.createGeometry(e)}});
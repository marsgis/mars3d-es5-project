define(["./Matrix2-1ba2543c","./defaultValue-69ee94f4","./EllipseOutlineGeometry-cf92ef99","./RuntimeError-ac440aa5","./ComponentDatatype-07fbb0d4","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-4d39b441","./Transforms-3afcc791","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./EllipseGeometryLibrary-7d9d8578","./GeometryAttribute-ad6fe63d","./GeometryAttributes-1b4134a9","./IndexDatatype-0b020dfb"],(function(e,t,r,i,n,a,o,l,f,s,c,d,u,m){"use strict";return function(i,n){return t.defined(n)&&(i=r.EllipseOutlineGeometry.unpack(i,n)),i._center=e.Cartesian3.clone(i._center),i._ellipsoid=e.Ellipsoid.clone(i._ellipsoid),r.EllipseOutlineGeometry.createGeometry(i)}}));
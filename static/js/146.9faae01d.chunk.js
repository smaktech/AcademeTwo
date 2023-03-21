(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[146],{1837:function(t,e,o){"use strict";o.d(e,"e",(function(){return p})),o.d(e,"f",(function(){return d})),o.d(e,"c",(function(){return m})),o.d(e,"b",(function(){return f})),o.d(e,"a",(function(){return x})),o.d(e,"d",(function(){return w}));var n=o(4),r=o(25),a=o(1822),c=o(12),i=o(0),l=["children","onClose"],u=Object(c.a)(a.h)((function(t){var e=t.theme,o="rtl"===e.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:e.spacing(1),boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:e.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:e.palette.grey[800]}}}));function p(t){var e=t.children,o=t.onClose,a=Object(r.a)(t,l);return Object(i.jsx)(u,Object(n.a)(Object(n.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},a),{},{children:e}))}var s=["sx"],b=Object(c.a)("div")((function(t){var e=t.theme;return{zIndex:99,position:"absolute",left:e.spacing(1.5),bottom:e.spacing(3.5),boxShadow:e.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:e.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function d(t){var e=t.sx,o=Object(r.a)(t,s);return Object(i.jsx)(b,{sx:e,children:Object(i.jsx)(a.i,Object(n.a)({maxWidth:100,unit:"imperial"},o))})}var j=["onClick"],g=Object(c.a)("svg")((function(t){return{height:20,stroke:"none",cursor:"pointer",fill:t.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function m(t){var e=t.onClick,o=Object(r.a)(t,j);return Object(i.jsx)(a.f,Object(n.a)(Object(n.a)({},o),{},{children:Object(i.jsx)(g,{viewBox:"0 0 24 24",onClick:e,children:Object(i.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var h=Object(c.a)(a.c)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8}}));function f(t){var e=Object.assign({},t);return Object(i.jsx)(h,Object(n.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},e))}var O=Object(c.a)(a.b)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(1.5),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function x(t){var e=Object.assign({},t);return Object(i.jsx)(O,Object(n.a)({},e))}var v=Object(c.a)(a.g)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(e.palette.divider)}}}));function w(t){var e=Object.assign({},t);return Object(i.jsx)(v,Object(n.a)({},e))}},2824:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return s}));var n=o(4),r=o(3),a=o(1822),c=o(1),i=o(68),l=o(407),u=o(1837),p=o(0);function s(t){var e=Object.assign({},t),o=Object(i.a)(),s=Object(c.useState)(null),b=Object(r.a)(s,2),d=b[0],j=b[1],g=Object(c.useState)({latitude:38.88,longitude:-98,zoom:3,minZoom:2,bearing:0,pitch:0}),m=Object(r.a)(g,2),h=m[0],f=m[1],O=d&&d.countyName||"",x=Object(c.useMemo)((function(){return["in","COUNTY",O]}),[O]),v={id:"counties",type:"fill",source:"counties","source-layer":"original",paint:{"fill-outline-color":o.palette.grey[900],"fill-color":o.palette.grey[900],"fill-opacity":.12}},w={id:"counties-highlighted",type:"fill",source:"counties","source-layer":"original",paint:{"fill-outline-color":o.palette.error.main,"fill-color":o.palette.error.main,"fill-opacity":.48}},y=Object(c.useCallback)((function(t){var e=t.features&&t.features[0];j({longitude:t.lngLat[0],latitude:t.lngLat[1],countyName:e&&e.properties.COUNTY})}),[]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(a.l,Object(n.a)(Object(n.a)(Object(n.a)({},h),{},{onViewportChange:f,onHover:y,interactiveLayerIds:["counties"]},e),{},{children:[Object(p.jsx)(u.f,{}),Object(p.jsx)(u.d,{}),Object(p.jsx)(u.a,{}),Object(p.jsx)(u.b,{}),Object(p.jsxs)(a.j,{type:"vector",url:"mapbox://mapbox.82pkq93d",children:[Object(p.jsx)(a.d,Object(n.a)({beforeId:"waterway-label"},v)),Object(p.jsx)(a.d,Object(n.a)(Object(n.a)({beforeId:"waterway-label"},w),{},{filter:x}))]}),O&&Object(p.jsx)(u.e,{longitude:d.longitude,latitude:d.latitude,closeButton:!1,children:Object(p.jsx)(l.a,{variant:"body2",sx:{color:"common.white"},children:O})})]}))})}}}]);
//# sourceMappingURL=146.9faae01d.chunk.js.map
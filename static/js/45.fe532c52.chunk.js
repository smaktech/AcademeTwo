(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[45],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(4),i=a(25),r=a(136),c=a(27),o=a(407),s=a(1824),l=a(269),h=a(1681),d=a(0),u=["links","activeLast"];function b(e){var t,a=e.links,c=e.activeLast,h=void 0!==c&&c,b=Object(i.a)(e,u),p=null===(t=Object(r.last)(a))||void 0===t?void 0:t.name,m=a.map((function(e){return Object(d.jsx)(j,{link:e},e.name)})),x=a.map((function(e){return Object(d.jsx)("div",{children:e.name!==p?Object(d.jsx)(j,{link:e}):Object(d.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:p})},e.name)}));return Object(d.jsx)(s.a,Object(n.a)(Object(n.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:h?m:x}))}function j(e){var t=e.link,a=t.href,n=t.name,i=t.icon;return Object(d.jsxs)(h.a,{variant:"body2",component:c.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),n]},n)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(4),i=a(25),r=a(136),c=a(269),o=a(407),s=a(1681),l=a(1819),h=a(0),d=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,b=e.moreLink,j=void 0===b?[]:b,p=e.sx,m=Object(i.a)(e,d);return Object(h.jsxs)(c.a,{sx:Object(n.a)({mb:5},p),children:[Object(h.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(h.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(h.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:u}),Object(h.jsx)(l.a,Object(n.a)({links:t},m))]}),a&&Object(h.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(h.jsx)(c.a,{sx:{mt:2},children:Object(r.isString)(j)?Object(h.jsx)(s.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(h.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,a){"use strict";var n=a(16),i=a(3),r=a(10),c=a(2),o=a(13),s=a(1),l=(a(99),a(7),a(5)),h=a(300),d=a(12),u=a(18),b=a(407),j=a(98),p=a(59),m=a(0),x=Object(p.a)(Object(m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=a(1675),O=Object(d.a)(f.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(j.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(j.c)(t.palette.grey[600],.12)})})})),g=Object(d.a)(x)({width:24,height:16});var v=function(e){var t=e;return Object(m.jsx)("li",{children:Object(m.jsx)(O,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(m.jsx)(g,{ownerState:t})}))})},y=a(179),w=a(192);function M(e){return Object(y.a)("MuiBreadcrumbs",e)}var C=Object(w.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=Object(d.a)(b.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(r.a)({},"& .".concat(C.li),t.li),t.root]}})({}),P=Object(d.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=Object(d.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,t,a,n){return e.reduce((function(i,r,c){return c<e.length-1?i=i.concat(r,Object(m.jsx)(R,{"aria-hidden":!0,className:t,ownerState:n,children:a},"separator-".concat(c))):i.push(r),i}),[])}var I=s.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiBreadcrumbs"}),r=a.children,d=a.className,b=a.component,j=void 0===b?"nav":b,p=a.expandText,x=void 0===p?"Show path":p,f=a.itemsAfterCollapse,O=void 0===f?1:f,g=a.itemsBeforeCollapse,y=void 0===g?1:g,w=a.maxItems,C=void 0===w?8:w,R=a.separator,I=void 0===R?"/":R,z=Object(o.a)(a,S),E=s.useState(!1),B=Object(i.a)(E,2),W=B[0],A=B[1],H=Object(c.a)({},a,{component:j,expanded:W,expandText:x,itemsAfterCollapse:O,itemsBeforeCollapse:y,maxItems:C,separator:I}),L=function(e){var t=e.classes;return Object(h.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},M,t)}(H),T=s.useRef(null),F=s.Children.toArray(r).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return Object(m.jsx)("li",{className:L.li,children:e},"child-".concat(t))}));return Object(m.jsx)(k,Object(c.a)({ref:t,component:j,color:"text.secondary",className:Object(l.a)(L.root,d),ownerState:H},z,{children:Object(m.jsx)(P,{className:L.ol,ref:T,ownerState:H,children:N(W||C&&F.length<=C?F:function(e){return y+O>=e.length?e:[].concat(Object(n.a)(e.slice(0,y)),[Object(m.jsx)(v,{"aria-label":x,onClick:function(){A(!0);var e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(n.a)(e.slice(e.length-O,e.length)))}(F),L.separator,I,H)})}))}));t.a=I},1840:function(e,t,a){"use strict";a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return k}));var n=a(4),i=a(12),r=a(269),c=a(0),o=Object(i.a)(r.a,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":Object(n.a)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),s=Object(i.a)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=Object(i.a)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function h(e){var t=null===e||void 0===e?void 0:e.color,a=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o,Object(n.a)(Object(n.a)({rounded:a,component:"ul"},e),{},{children:t}))})},customPaging:function(){return Object(c.jsx)(s,{children:Object(c.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var d=a(25),u=a(68),b=a(1002),j=a(41),p=a(78),m=["filled","customIcon","onNext","onPrevious","children"],x=Object(i.a)(p.c,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,a=e.theme;return Object(n.a)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:a.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(a.shape.borderRadius),color:a.palette.common.white,backgroundColor:a.palette.grey[900],"&:hover":{opacity:1,color:a.palette.common.white,backgroundColor:a.palette.grey[900]}})}));function f(e){var t=e.filled,a=void 0!==t&&t,i=e.customIcon,o=e.onNext,s=e.onPrevious,l=e.children,h=Object(d.a)(e,m),j="rtl"===Object(u.a)().direction,p={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?Object(c.jsxs)(r.a,Object(n.a)(Object(n.a)({},h),{},{children:[Object(c.jsx)(r.a,{className:"arrow left",sx:Object(n.a)(Object(n.a)({},p),{},{left:0}),children:Object(c.jsx)(x,{filled:a,onClick:s,children:O(i,j)})}),l,Object(c.jsx)(r.a,{className:"arrow right",sx:Object(n.a)(Object(n.a)({},p),{},{right:0}),children:Object(c.jsx)(x,{filled:a,onClick:o,children:g(i,j)})})]})):Object(c.jsxs)(b.a,Object(n.a)(Object(n.a)({direction:"row",spacing:1},h),{},{children:[Object(c.jsx)(x,{className:"arrow left",filled:a,onClick:s,children:O(i,j)}),Object(c.jsx)(x,{className:"arrow right",filled:a,onClick:o,children:g(i,j)})]}))}var O=function(e,t){return Object(c.jsx)(j.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},g=function(e,t){return Object(c.jsx)(j.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},v=a(98),y=a(1682),w=a(407),M=["index","total","onNext","onPrevious","customIcon"],C=Object(i.a)(r.a)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:Object(v.a)(t.palette.grey[900],.48)}})),S=Object(i.a)(y.a)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function k(e){var t=e.index,a=e.total,i=e.onNext,r=e.onPrevious,o=e.customIcon,s=Object(d.a)(e,M),l="rtl"===Object(u.a)().direction;return Object(c.jsxs)(C,Object(n.a)(Object(n.a)({},s),{},{children:[Object(c.jsx)(S,{size:"small",onClick:r,children:P(o,l)}),Object(c.jsxs)(w.a,{variant:"subtitle2",children:[t+1,"/",a]}),Object(c.jsx)(S,{size:"small",onClick:i,children:R(o,l)})]}))}var P=function(e,t){return Object(c.jsx)(j.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},R=function(e,t){return Object(c.jsx)(j.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},1843:function(e,t,a){"use strict";var n=a(16),i=a(3),r=a(13),c=a(2),o=a(300),s=a(12),l=a(18),h=a(97),d=a(135),u=a(347),b=a(543),j=a(5),p=(a(7),a(1)),m=a(179),x=a(192);function f(e){return Object(m.a)("MuiMasonry",e)}Object(x.a)("MuiMasonry",["root"]);var O=a(0),g=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],v=function(e){return Number(e.replace("px",""))},y=Object(s.a)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,a=e.theme,n={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},i={};if(t.isSSR){for(var r={},o=Number(a.spacing(t.defaultSpacing).replace("px","")),s=1;s<=t.defaultColumns;s+=1)r["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return i.height=t.defaultHeight,i.margin=-o/2,i["& > *"]=Object(c.a)({},n["& > *"],r,{margin:o/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(o,"px)")}),Object(c.a)({},n,i)}var l=Object(h.d)({values:t.spacing,breakpoints:a.breakpoints.values}),b=Object(d.a)(a);n=Object(u.a)(n,Object(h.b)({theme:a},l,(function(e){var a=Number(e),n=Number(Object(d.d)(b,a).replace("px",""));return Object(c.a)({margin:-n/2,"& > *":{margin:n/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+n)})})));var j=Object(h.d)({values:t.columns,breakpoints:a.breakpoints.values});return n=Object(u.a)(n,Object(h.b)({theme:a},j,(function(e){var t=Number(e),a="".concat((100/t).toFixed(2),"%"),n="object"!==typeof l?Object(d.d)(b,Number(l)):"0px";return{"& > *":{width:"calc(".concat(a," - ").concat(n,")")}}}))),"object"===typeof l&&(n=Object(u.a)(n,Object(h.b)({theme:a},l,(function(e,t){if(t){var a=Number(e),n=Object.keys(j).pop(),i=Object(d.d)(b,a),r="object"===typeof j?j[t]||j[n]:j,c="".concat((100/r).toFixed(2),"%");return{"& > *":{width:"calc(".concat(c," - ").concat(i,")")}}}return null})))),n})),w=p.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiMasonry"}),s=a.children,h=a.className,d=a.component,u=void 0===d?"div":d,m=a.columns,x=void 0===m?4:m,w=a.spacing,M=void 0===w?1:w,C=a.defaultColumns,S=a.defaultHeight,k=a.defaultSpacing,P=Object(r.a)(a,g),R=p.useRef(),N=p.useState(),I=Object(i.a)(N,2),z=I[0],E=I[1],B=!z&&S&&void 0!==C&&void 0!==k,W=p.useState(B?C-1:0),A=Object(i.a)(W,2),H=A[0],L=A[1],T=Object(c.a)({},a,{spacing:M,columns:x,maxColumnHeight:z,defaultColumns:C,defaultHeight:S,defaultSpacing:k,isSSR:B}),F=function(e){var t=e.classes;return Object(o.a)({root:["root"]},f,t)}(T),D=p.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(e){var t,a,i,r,c,o,s,l,h,d;if(e[0].target.className.includes(F.root))t=e[0].target,i=e[0].contentRect.width,r=(null==(o=a=(null==(c=e[1])?void 0:c.target)||t.firstChild)||null==(s=o.contentRect)?void 0:s.width)||(null==(l=a)?void 0:l.clientWidth)||0;else a=e[0].target,r=e[0].contentRect.width,i=(null==(d=(t=(null==(h=e[1])?void 0:h.target)||a.parentElement).contentRect)?void 0:d.width)||t.clientWidth;if(0!==i&&0!==r&&t&&a){var u=window.getComputedStyle(a),b=v(u.marginLeft),j=v(u.marginRight),p=Math.round(i/(r+b+j)),m=new Array(p).fill(0),x=!1;if(t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!x){var t=window.getComputedStyle(e),a=v(t.marginTop),i=v(t.marginBottom),r=v(t.height)?Math.ceil(v(t.height))+a+i:0;if(0!==r){for(var c=0;c<e.childNodes.length;c+=1){var o=e.childNodes[c];if("IMG"===o.tagName&&0===o.clientHeight){x=!0;break}}if(!x){var s=m.indexOf(Math.min.apply(Math,Object(n.a)(m)));m[s]+=r;var l=s+1;e.style.order=l}}else x=!0}})),!x)E(Math.max.apply(Math,Object(n.a)(m))),L(p>0?p-1:0)}}})));p.useEffect((function(){var e=D.current;if(void 0!==e){var t=R.current;return t&&e&&(e.observe(t),t.firstChild&&e.observe(t.firstChild)),function(){return e?e.disconnect():{}}}}),[x,M,s]);var G=Object(b.a)(t,R),q={flexBasis:"100%",width:0,margin:0,padding:0},X=new Array(H).fill("").map((function(e,t){return Object(O.jsx)("span",{"data-class":"line-break",style:Object(c.a)({},q,{order:t+1})},t)}));return Object(O.jsxs)(y,Object(c.a)({as:u,className:Object(j.a)(F.root,h),ref:G,ownerState:T},P,{children:[s,X]}))}));t.a=w},1865:function(e,t,a){"use strict";var n=a(4),i=a(25),r=a(1),c=a(1681),o=a(407),s=a(109),l=a(0),h=["asLink","variant","line","persistent","children","sx"],d=Object(r.forwardRef)((function(e,t){var a=e.asLink,r=e.variant,d=void 0===r?"body1":r,u=e.line,b=void 0===u?2:u,j=e.persistent,p=void 0!==j&&j,m=e.children,x=e.sx,f=Object(i.a)(e,h),O=Object(s.a)(d).lineHeight,g=Object(n.a)(Object(n.a)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:b,WebkitBoxOrient:"vertical"},p&&{height:O*b}),x);return a?Object(l.jsx)(c.a,Object(n.a)(Object(n.a)({color:"inherit",ref:t,variant:d,sx:Object(n.a)({},g)},f),{},{children:m})):Object(l.jsx)(o.a,Object(n.a)(Object(n.a)({ref:t,variant:d,sx:Object(n.a)({},g)},f),{},{children:m}))}));t.a=d},2851:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return de}));var n=a(12),i=a(269),r=a(1785),c=a(1794),o=a(407),s=a(1002),l=a(1805),h=a(47),d=a(6),u=a(671),b=a(349),j=a(41),p=a(1820),m=a(3),x=a(4),f=a(25),O=a(1),g=a(27),v=a(1843),y=a(98),w=a(1788),M=a(1009),C=a(1681),S=a(1653),k=a(1786),P=a(0),R=["tags"];function N(e){var t=e.tags,a=Object(f.a)(e,R);return Object(P.jsxs)(i.a,Object(x.a)(Object(x.a)({},a),{},{children:[Object(P.jsx)(o.a,{variant:"caption",fontWeight:"fontWeightBold",children:"Hot Products:"}),"\xa0",t.map((function(e,t){return Object(P.jsx)(C.a,{component:g.b,to:e.path,underline:"none",variant:"caption",sx:{color:"text.secondary",transition:function(e){return e.transitions.create("all")},"&:hover":{color:"primary.main"}},children:0===t?e.name:", ".concat(e.name," ")},e.name)}))]}))}var I=a(1853),z=a.n(I),E=a(68),B=a(1865),W=a(1840);function A(e){var t=e.products,a=e.numberShow,n=e.sx,r=Object(E.a)(),c=Object(O.useRef)(null),o=Object(x.a)({dots:!0,arrows:!1,slidesToShow:a,slidesToScroll:a,rtl:Boolean("rtl"===r.direction)},Object(W.c)());return Object(P.jsx)(i.a,{sx:Object(x.a)({position:"relative"},n),children:Object(P.jsx)(W.b,{filled:!0,onNext:function(){var e;null===(e=c.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=c.current)||void 0===e||e.slickPrev()},sx:{"& .arrow button":{p:0,width:24,height:24,top:-20}},children:Object(P.jsx)(z.a,Object(x.a)(Object(x.a)({ref:c},o),{},{children:t.map((function(e){return Object(P.jsx)(i.a,{sx:{px:1,textAlign:"center"},children:Object(P.jsxs)(C.a,{component:g.c,color:"inherit",underline:"none",to:e.path,sx:{display:"block",transition:function(e){return e.transitions.create("all")},"&:hover":{color:"primary.main"}},children:[Object(P.jsx)(b.a,{src:e.image,ratio:"1/1",disabledEffect:!0,sx:{borderRadius:1,mb:1}}),Object(P.jsx)(B.a,{line:2,variant:"caption",sx:{fontWeight:"fontWeightMedium"},children:e.name})]})},e.name)}))}))})})}var H=["navConfig"],L=["path","title","open","hasSub"];function T(e){var t=e.navConfig,a=Object(f.a)(e,H);return Object(P.jsx)(w.a,Object(x.a)(Object(x.a)({disablePadding:!0},a),{},{children:t.map((function(e){return Object(P.jsx)(F,{parent:e},e.title)}))}))}function F(e){var t=e.parent,a=t.title,n=t.path,i=t.more,r=t.products,c=t.tags,l=t.children,h=Object(O.useState)(!1),u=Object(m.a)(h,2),b=u[0],j=u[1],p=function(){j(!0)},x=function(){j(!1)};return l?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(D,{onMouseEnter:p,onMouseLeave:x,path:n,title:a,open:b,hasSub:!0}),b&&Object(P.jsxs)(M.a,{onMouseEnter:p,onMouseLeave:x,sx:{p:3,top:-62,borderRadius:2,position:"absolute",left:d.h,width:800,boxShadow:function(e){return e.customShadows.z20}},children:[Object(P.jsx)(v.a,{columns:3,spacing:2,children:l.map((function(e){return Object(P.jsxs)(s.a,{spacing:1.25,sx:{mb:2.5},children:[Object(P.jsx)(o.a,{variant:"subtitle1",noWrap:!0,children:e.subheader}),e.items.map((function(e){return Object(P.jsx)(C.a,{noWrap:!0,component:g.c,to:e.path,underline:"none",sx:{typography:"body2",color:"text.primary",fontSize:13,transition:function(e){return e.transitions.create("all")},"&:hover":{color:"primary.main"}},children:e.title},e.title)}))]},e.subheader)}))}),!!i&&!!r&&!!c&&Object(P.jsxs)(s.a,{spacing:3,children:[Object(P.jsx)(C.a,{to:i.path,component:g.c,sx:{typography:"body2",display:"inline-flex",fontSize:13},children:i.title}),Object(P.jsx)(S.a,{}),Object(P.jsx)(A,{products:r,numberShow:6,sx:{"& .controlsArrows":{mt:5}}}),Object(P.jsx)(S.a,{}),Object(P.jsx)(N,{tags:c})]})]})]}):Object(P.jsx)(D,{path:n,title:a})}function D(e){var t=e.path,a=e.title,n=e.open,i=e.hasSub,r=Object(f.a)(e,L),c={color:"primary.main",bgcolor:function(e){return Object(y.a)(e.palette.primary.main,e.palette.action.hoverOpacity)}};return Object(P.jsxs)(k.a,Object(x.a)(Object(x.a)({to:t,component:g.c,sx:Object(x.a)({pl:2.5,pr:1.5,height:40,cursor:"pointer",color:"text.primary",typography:"subtitle2",textTransform:"capitalize",justifyContent:"space-between",transition:function(e){return e.transitions.create("all")},"&:hover":c},n&&c)},r),{},{children:[a,i&&Object(P.jsx)(j.a,{icon:"eva:chevron-right-fill",sx:{ml:1,width:20,height:20}})]}))}var G=["navConfig"],q=["title","path","open","hasSub"];function X(e){var t=e.navConfig,a=Object(f.a)(e,G);return Object(P.jsx)(s.a,Object(x.a)(Object(x.a)({direction:"row",spacing:4},a),{},{children:t.map((function(e){return Object(P.jsx)(V,{parent:e},e.title)}))}))}function V(e){var t=e.parent,a=t.title,n=t.path,i=t.more,r=t.products,c=t.tags,l=t.children,h=Object(O.useState)(!1),d=Object(m.a)(h,2),u=d[0],b=d[1],j=function(){b(!0)},p=function(){b(!1)};return l?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(_,{onMouseEnter:j,onMouseLeave:p,path:n,title:a,open:u,hasSub:!0}),u&&Object(P.jsxs)(M.a,{onMouseEnter:j,onMouseLeave:p,sx:{p:3,width:"100%",position:"absolute",borderRadius:2,top:64,left:-32,zIndex:function(e){return e.zIndex.modal},boxShadow:function(e){return e.customShadows.z20}},children:[Object(P.jsx)(v.a,{columns:3,spacing:2,children:l.map((function(e){return Object(P.jsxs)(s.a,{spacing:1.25,sx:{mb:2.5},children:[Object(P.jsx)(o.a,{variant:"subtitle1",sx:{fontWeight:"fontWeightBold"},noWrap:!0,children:e.subheader}),e.items.map((function(e){return Object(P.jsx)(C.a,{noWrap:!0,component:g.c,to:e.path,underline:"none",sx:{typography:"body2",color:"text.primary",fontSize:13,transition:function(e){return e.transitions.create("all")},"&:hover":{color:"primary.main"}},children:e.title},e.title)}))]},e.subheader)}))}),!!i&&!!c&&!!r&&Object(P.jsxs)(s.a,{spacing:3,children:[Object(P.jsx)(C.a,{to:null===i||void 0===i?void 0:i.path,component:g.c,sx:{typography:"body2",display:"inline-flex",fontSize:13},children:null===i||void 0===i?void 0:i.title}),Object(P.jsx)(S.a,{}),Object(P.jsx)(A,{products:r,numberShow:8}),Object(P.jsx)(S.a,{}),Object(P.jsx)(N,{tags:c})]})]})]}):Object(P.jsx)(_,{path:n,title:a})}function _(e){var t=e.title,a=e.path,n=e.open,i=e.hasSub,r=Object(f.a)(e,q),c={color:"primary.main"};return Object(P.jsxs)(C.a,Object(x.a)(Object(x.a)({to:a,component:g.c,underline:"none",color:"inherit",variant:"subtitle2",sx:Object(x.a)({display:"flex",cursor:"pointer",alignItems:"center",textTransform:"capitalize",height:64,lineHeight:"".concat(64,"px"),transition:function(e){return e.transitions.create("all")},"&:hover":c},n&&c)},r),{},{children:[t,i&&Object(P.jsx)(j.a,{icon:"eva:chevron-down-fill",sx:{ml:1,width:20,height:20}})]}))}var J=a(42),K=a(544),Q=a(1792),U=a(1741),Y=a(1743),Z=a(1742),$=a(1682),ee=a(145),te=a(203),ae=["icon","title","hasSub"];function ne(e){var t=e.navConfig,a=Object(J.f)().pathname,n=Object(O.useState)(!1),r=Object(m.a)(n,2),c=r[0],s=r[1];Object(O.useEffect)((function(){c&&l()}),[a]);var l=function(){s(!1)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(K.a,{variant:"contained",onClick:function(){s(!0)},startIcon:Object(P.jsx)(j.a,{icon:"eva:menu-2-fill"}),children:"Menu Mobile"}),Object(P.jsx)(Q.a,{open:c,onClose:l,ModalProps:{keepMounted:!0},PaperProps:{sx:{pb:5,width:d.g}},children:Object(P.jsxs)(te.a,{children:[Object(P.jsx)(ee.a,{sx:{mx:2.5,my:3}}),Object(P.jsxs)(o.a,{variant:"h6",sx:{px:2,mb:2,display:"flex",alignItems:"center"},children:[Object(P.jsx)(i.a,{component:j.a,icon:"eva:list-fill",sx:{mr:1,width:24,height:24}})," Categories"]}),t.map((function(e){return Object(P.jsx)(re,{parent:e,pathname:a},e.title)}))]})})]})}function ie(e){var t=e.icon,a=e.title,n=e.hasSub,r=Object(f.a)(e,ae);return Object(P.jsxs)(U.a,Object(x.a)(Object(x.a)({sx:{textTransform:"capitalize",height:44}},r),{},{children:[Object(P.jsx)(Y.a,{sx:{width:22,height:22},children:t}),Object(P.jsx)(Z.a,{primaryTypographyProps:{typography:"body2"},children:a}),n&&Object(P.jsx)(i.a,{component:j.a,icon:"eva:arrow-ios-forward-fill"})]}))}function re(e){var t=e.parent,a=e.pathname,n=Object(O.useState)(!1),r=Object(m.a)(n,2),c=r[0],l=r[1],h=t.title,u=t.icon,b=t.path,p=t.children;Object(O.useEffect)((function(){c&&x()}),[a]);var x=function(){l(!1)};return p?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ie,{title:h,icon:u,onClick:function(){l(!0)},hasSub:!0}),Object(P.jsxs)(Q.a,{open:c,onClose:x,ModalProps:{keepMounted:!0},PaperProps:{sx:{width:d.g-12}},children:[Object(P.jsxs)(s.a,{direction:"row",alignItems:"center",px:1,py:1.5,children:[Object(P.jsx)($.a,{onClick:x,children:Object(P.jsx)(j.a,{icon:"eva:arrow-ios-back-fill",width:20,height:20})}),Object(P.jsx)(o.a,{noWrap:!0,variant:"subtitle1",sx:{ml:1,textTransform:"capitalize"},children:h})]}),Object(P.jsx)(S.a,{}),Object(P.jsx)(te.a,{children:Object(P.jsx)(s.a,{spacing:5,py:3,children:p.map((function(e){var t=e.subheader,a=e.items;return Object(P.jsxs)(w.a,{disablePadding:!0,children:[Object(P.jsx)(o.a,{component:"div",variant:"overline",sx:{px:2.5,mb:1,color:"text.secondary"},noWrap:!0,children:t}),a.map((function(e){return Object(P.jsxs)(U.a,{component:g.c,to:e.path,sx:{px:1.5},children:[Object(P.jsx)(Y.a,{sx:{mr:.5,width:d.d,height:d.d,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(P.jsx)(i.a,{sx:{width:4,height:4,bgcolor:"currentColor",borderRadius:"50%"}})}),Object(P.jsx)(Z.a,{primary:e.title,primaryTypographyProps:{typography:"body2",noWrap:!0}})]},e.title)}))]},t)}))})})]})]}):Object(P.jsx)(ie,{component:g.c,title:h,icon:u,to:b})}var ce=a(350),oe={width:"100%",height:"100%"},se=[{name:"Paper Cup",path:"#"},{name:"Lotion Pump",path:"#"},{name:"Brush Cutter",path:"#"},{name:"Display Rack",path:"#"},{name:"Glass Bottle",path:"#"}],le=[{title:"Parent 1",path:"#",icon:Object(P.jsx)(j.a,Object(x.a)({icon:"eva:file-fill"},oe)),more:{title:"More Categories",path:"#"},products:ce.E,tags:se,children:[{subheader:"Agriculture Machinery",items:[{title:"Agriculture Machinery",path:"#"},{title:"Livestock MachineryFeed",path:"#"},{title:"Feed Processing Machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting Machine",path:"#"}]},{subheader:"Machine Tools",items:[{title:"CNC Machine Tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding Machine ",path:"#"},{title:"Drilling Machine ",path:"#"},{title:"Milling Machine ",path:"#"}]},{subheader:"Other Machinery & Parts",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]},{subheader:"Plastic & Woodworking Machinery",items:[{title:"Plastic Machinery",path:"#"},{title:"Woodworking Machinery",path:"#"},{title:"Blow Molding Machine",path:"#"},{title:"Plastic Recycling Machine",path:"#"},{title:"Injection Molding Machine",path:"#"}]},{subheader:"Construction Machinery",items:[{title:"Building Material Making Machinery",path:"#"},{title:"Lifting Equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete Machinery",path:"#"},{title:"Stone Processing Machinery",path:"#"}]}]},{title:"Parent 2",path:"#",icon:Object(P.jsx)(j.a,Object(x.a)({icon:"eva:file-fill"},oe)),more:{title:"More Categories",path:"#"},products:ce.E,tags:se,children:[{subheader:"Cellphone & Accessories",items:[{title:"Mobile Phone Charger",path:"#"},{title:"Power Bank",path:"#"},{title:"Mobile Phone LCD",path:"#"},{title:"Bluetooth Headset",path:"#"},{title:"Mobile Phone",path:"#"}]},{subheader:"Audio & Video",items:[{title:"Display & Accessories",path:"#"},{title:"Audio & Sets",path:"#"},{title:"Professional Audio",path:"#"},{title:"LCD Display",path:"#"},{title:"LCD Module",path:"#"},{title:"Video",path:"#"},{title:"TV & Parts",path:"#"},{title:"Amplifier",path:"#"},{title:"Portable Audio Appliance",path:"#"},{title:"Home Theatre System",path:"#"},{title:"HDMI Cable",path:"#"},{title:"Radio",path:"#"}]},{subheader:"Household Appliances",items:[{title:"Air Conditioner, Purifier & Humidifier",path:"#"},{title:"Refrigerator, Freezer & Parts",path:"#"},{title:"Water Heater & Components",path:"#"},{title:"Electrical Fan & Exhaust Fan",path:"#"},{title:"Household Water Treatment Equipment",path:"#"},{title:"Solar Water Heater",path:"#"},{title:"Photographic Apparatus",path:"#"},{title:"Gas Burner & Gas Stove",path:"#"},{title:"Entertainment Electronics",path:"#"},{title:"Electrical Kettle",path:"#"},{title:"Food Blender",path:"#"},{title:"Dehumidifier",path:"#"}]},{subheader:"Digital Devices",items:[{title:"Battery & Charger",path:"#"},{title:"Wearable Devices",path:"#"},{title:"Digital Photo Frame",path:"#"},{title:"Digital Camera",path:"#"},{title:"Smart Glasses",path:"#"}]}]},{title:"Parent 3",path:"#",icon:Object(P.jsx)(j.a,Object(x.a)({icon:"eva:file-fill"},oe))},{title:"Parent 4",path:"#",icon:Object(P.jsx)(j.a,Object(x.a)({icon:"eva:file-fill"},oe))}],he=Object(n.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function de(){return Object(P.jsx)(u.a,{title:"Mega Menu",children:Object(P.jsxs)(he,{children:[Object(P.jsx)(i.a,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(P.jsx)(r.a,{children:Object(P.jsx)(p.a,{heading:"Mega Menu",links:[{name:"Components",href:h.d.components},{name:"Mega Menu"}]})})}),Object(P.jsx)(c.a,{position:"static",color:"transparent",sx:{boxShadow:function(e){return e.customShadows.z8}},children:Object(P.jsxs)(r.a,{sx:{display:"flex",alignItems:"center",position:"relative"},children:[Object(P.jsx)(o.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Menu Horizon"}),Object(P.jsx)(X,{navConfig:le})]})}),Object(P.jsxs)(r.a,{sx:{mt:10},children:[Object(P.jsx)(ne,{navConfig:le}),Object(P.jsxs)(s.a,{direction:"row",spacing:3,mt:5,children:[Object(P.jsxs)(l.a,{sx:{width:d.h,flexShrink:0,overflow:"unset",zIndex:9},children:[Object(P.jsxs)(o.a,{variant:"h6",sx:{p:2,display:"flex",alignItems:"center"},children:[Object(P.jsx)(j.a,{icon:"eva:list-fill",sx:{mr:1,width:24,height:24}})," Menu Vertical"]}),Object(P.jsx)(T,{navConfig:le})]}),Object(P.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/images/feeds/feed_8.jpg",ratio:"21/9",sx:{borderRadius:1}})]})]})]})})}}}]);
//# sourceMappingURL=45.fe532c52.chunk.js.map
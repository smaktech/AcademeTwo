(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[83],{1819:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var a=i(4),n=i(25),s=i(136),c=i(27),l=i(407),r=i(1824),u=i(269),o=i(1681),j=i(0),d=["links","activeLast"];function b(e){var t,i=e.links,c=e.activeLast,o=void 0!==c&&c,b=Object(n.a)(e,d),x=null===(t=Object(s.last)(i))||void 0===t?void 0:t.name,h=i.map((function(e){return Object(j.jsx)(p,{link:e},e.name)})),O=i.map((function(e){return Object(j.jsx)("div",{children:e.name!==x?Object(j.jsx)(p,{link:e}):Object(j.jsx)(l.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return Object(j.jsx)(r.a,Object(a.a)(Object(a.a)({separator:Object(j.jsx)(u.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:o?h:O}))}function p(e){var t=e.link,i=t.href,a=t.name,n=t.icon;return Object(j.jsxs)(o.a,{variant:"body2",component:c.b,to:i||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(j.jsx)(u.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),a]},a)}},1820:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var a=i(4),n=i(25),s=i(136),c=i(269),l=i(407),r=i(1681),u=i(1819),o=i(0),j=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,i=e.action,d=e.heading,b=e.moreLink,p=void 0===b?[]:b,x=e.sx,h=Object(n.a)(e,j);return Object(o.jsxs)(c.a,{sx:Object(a.a)({mb:5},x),children:[Object(o.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(o.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(o.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:d}),Object(o.jsx)(u.a,Object(a.a)({links:t},h))]}),i&&Object(o.jsx)(c.a,{sx:{flexShrink:0},children:i})]}),Object(o.jsx)(c.a,{sx:{mt:2},children:Object(s.isString)(p)?Object(o.jsx)(r.a,{href:p,target:"_blank",rel:"noopener",variant:"body2",children:p}):p.map((function(e){return Object(o.jsx)(r.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1865:function(e,t,i){"use strict";var a=i(4),n=i(25),s=i(1),c=i(1681),l=i(407),r=i(109),u=i(0),o=["asLink","variant","line","persistent","children","sx"],j=Object(s.forwardRef)((function(e,t){var i=e.asLink,s=e.variant,j=void 0===s?"body1":s,d=e.line,b=void 0===d?2:d,p=e.persistent,x=void 0!==p&&p,h=e.children,O=e.sx,m=Object(n.a)(e,o),v=Object(r.a)(j).lineHeight,f=Object(a.a)(Object(a.a)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:b,WebkitBoxOrient:"vertical"},x&&{height:v*b}),O);return i?Object(u.jsx)(c.a,Object(a.a)(Object(a.a)({color:"inherit",ref:t,variant:j,sx:Object(a.a)({},f)},m),{},{children:h})):Object(u.jsx)(l.a,Object(a.a)(Object(a.a)({ref:t,variant:j,sx:Object(a.a)({},f)},m),{},{children:h}))}));t.a=j},2813:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return h}));var a=i(1843),n=i(12),s=i(269),c=i(1785),l=i(1805),r=i(1825),u=i(1808),o=i(47),j=i(671),d=i(1865),b=i(1820),p=i(0),x=Object(n.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function h(){return Object(p.jsx)(j.a,{title:"Components: TextMaxLine",children:Object(p.jsxs)(x,{children:[Object(p.jsx)(s.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(p.jsx)(c.a,{children:Object(p.jsx)(b.a,{heading:"TextMaxLine",links:[{name:"Components",href:o.d.components},{name:"TextMaxLine"}]})})}),Object(p.jsx)(c.a,{children:Object(p.jsxs)(a.a,{columns:3,spacing:3,children:[Object(p.jsxs)(l.a,{children:[Object(p.jsx)(r.a,{title:"1 Line"}),Object(p.jsx)(u.a,{children:Object(p.jsx)(d.a,{line:1,children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(r.a,{title:"2 Line"}),Object(p.jsx)(u.a,{children:Object(p.jsx)(d.a,{children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(r.a,{title:"3 Line"}),Object(p.jsx)(u.a,{children:Object(p.jsx)(d.a,{line:3,children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(r.a,{title:"4 Line"}),Object(p.jsx)(u.a,{children:Object(p.jsx)(d.a,{line:4,children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(r.a,{title:"As Link"}),Object(p.jsx)(u.a,{children:Object(p.jsx)(d.a,{asLink:!0,line:3,href:"#",color:"primary",sx:{maxWidth:300},children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(r.a,{title:"Persistent"}),Object(p.jsx)(u.a,{children:Object(p.jsx)(d.a,{persistent:!0,line:3,href:"#",sx:{bgcolor:"background.neutral"},children:"Donec posuere vulputate arcu."})})]})]})})]})})}}}]);
//# sourceMappingURL=83.d80a6cda.chunk.js.map
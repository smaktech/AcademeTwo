(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[95],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(4),i=n(25),c=n(136),s=n(27),r=n(407),l=n(1824),o=n(269),j=n(1681),d=n(0),b=["links","activeLast"];function x(e){var t,n=e.links,s=e.activeLast,j=void 0!==s&&s,x=Object(i.a)(e,b),m=null===(t=Object(c.last)(n))||void 0===t?void 0:t.name,O=n.map((function(e){return Object(d.jsx)(u,{link:e},e.name)})),h=n.map((function(e){return Object(d.jsx)("div",{children:e.name!==m?Object(d.jsx)(u,{link:e}):Object(d.jsx)(r.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:m})},e.name)}));return Object(d.jsx)(l.a,Object(a.a)(Object(a.a)({separator:Object(d.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},x),{},{children:j?O:h}))}function u(e){var t=e.link,n=t.href,a=t.name,i=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:s.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&Object(d.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),a]},a)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(4),i=n(25),c=n(136),s=n(269),r=n(407),l=n(1681),o=n(1819),j=n(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,x=e.moreLink,u=void 0===x?[]:x,m=e.sx,O=Object(i.a)(e,d);return Object(j.jsxs)(s.a,{sx:Object(a.a)({mb:5},m),children:[Object(j.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(j.jsx)(r.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(o.a,Object(a.a)({links:t},O))]}),n&&Object(j.jsx)(s.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(s.a,{sx:{mt:2},children:Object(c.isString)(u)?Object(j.jsx)(l.a,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return d}));var a=n(4),i=n(98),c=n(1009),s=n(1825),r=n(269),l=n(407),o=n(0);function j(e){var t=e.title,n=e.sx,l=e.children;return Object(o.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(i.a)(e.palette.grey[500],.04)}},children:[t&&Object(o.jsx)(s.a,{title:t}),Object(o.jsx)(r.a,{sx:Object(a.a)({p:5,minHeight:180},n),children:l})]})}function d(e){var t=e.title;return Object(o.jsx)(l.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2796:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(3),i=n(4),c=n(25),s=n(1),r=n(12),l=n(269),o=n(1785),j=n(1962),d=n(1843),b=n(47),x=n(671),u=n(41),m=n(1820),O=n(1823),h=n(0),f=["value"],p={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},v={1:{icon:Object(h.jsx)(u.a,{icon:"ic:round-sentiment-very-dissatisfied"}),label:"Very Dissatisfied"},2:{icon:Object(h.jsx)(u.a,{icon:"ic:round-sentiment-dissatisfied"}),label:"Dissatisfied"},3:{icon:Object(h.jsx)(u.a,{icon:"ic:round-sentiment-neutral"}),label:"Neutral"},4:{icon:Object(h.jsx)(u.a,{icon:"ic:round-sentiment-satisfied"}),label:"Satisfied"},5:{icon:Object(h.jsx)(u.a,{icon:"ic:round-sentiment-very-satisfied"}),label:"Very Satisfied"}},g={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},y=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function k(e){var t=e.value,n=Object(c.a)(e,f);return Object(h.jsx)("span",Object(i.a)(Object(i.a)({},n),{},{children:v[t].icon}))}function C(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(-1),r=Object(a.a)(c,2),f=r[0],C=r[1];return Object(h.jsx)(x.a,{title:"Components: Rating",children:Object(h.jsxs)(y,{children:[Object(h.jsx)(l.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(h.jsx)(o.a,{children:Object(h.jsx)(m.a,{heading:"Rating",links:[{name:"Components",href:b.d.components},{name:"Rating"}],moreLink:"https://mui.com/components/rating"})})}),Object(h.jsx)(o.a,{children:Object(h.jsxs)(d.a,{columns:{xs:1,sm:2,md:3},spacing:3,children:[Object(h.jsx)(O.a,{title:"Controlled",sx:g,children:Object(h.jsx)(j.a,{name:"simple-controlled",value:n,onChange:function(e,t){i(t)}})}),Object(h.jsx)(O.a,{title:"Read only",sx:g,children:Object(h.jsx)(j.a,{name:"read-only",value:n,readOnly:!0})}),Object(h.jsx)(O.a,{title:"Disabled",sx:g,children:Object(h.jsx)(j.a,{name:"disabled",value:n,disabled:!0})}),Object(h.jsx)(O.a,{title:"Pristine",sx:g,children:Object(h.jsx)(j.a,{name:"pristine",value:null})}),Object(h.jsx)(O.a,{title:"Custom empty icon",sx:g,children:Object(h.jsx)(j.a,{name:"customized-empty",defaultValue:2,precision:.5})}),Object(h.jsx)(O.a,{title:"Custom icon and color",sx:g,children:Object(h.jsx)(j.a,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(h.jsx)(u.a,{icon:"eva:heart-fill"}),emptyIcon:Object(h.jsx)(u.a,{icon:"eva:heart-fill"}),sx:{color:"info.main","&:hover":{color:"info.dark"}}})}),Object(h.jsx)(O.a,{title:"10 stars",sx:g,children:Object(h.jsx)(j.a,{name:"customized-10",defaultValue:2,max:10})}),Object(h.jsx)(O.a,{title:"Custom icon set",sx:g,children:Object(h.jsx)(j.a,{name:"customized-icons",defaultValue:2,getLabelText:function(e){return v[e].label},IconContainerComponent:k})}),Object(h.jsxs)(O.a,{title:"Hover feedback",sx:g,children:[Object(h.jsx)(j.a,{name:"hover-feedback",value:n,precision:.5,onChange:function(e,t){i(t)},onChangeActive:function(e,t){C(t)}}),null!==n&&Object(h.jsx)(l.a,{sx:{ml:2},children:p[-1!==f?f:n]})]}),Object(h.jsxs)(O.a,{title:"Half ratings",sx:g,children:[Object(h.jsx)(j.a,{name:"half-rating",defaultValue:2.5,precision:.5}),Object(h.jsx)("br",{}),Object(h.jsx)(j.a,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),Object(h.jsxs)(O.a,{title:"Sizes",sx:g,children:[Object(h.jsx)(j.a,{name:"size-small",defaultValue:2,size:"small"}),Object(h.jsx)("br",{}),Object(h.jsx)(j.a,{name:"size-medium",defaultValue:2}),Object(h.jsx)("br",{}),Object(h.jsx)(j.a,{name:"size-large",defaultValue:2,size:"large"})]})]})})]})})}}}]);
//# sourceMappingURL=95.bbb9fcce.chunk.js.map
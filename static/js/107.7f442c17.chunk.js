(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[107],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(4),c=n(25),r=n(136),i=n(27),o=n(407),s=n(1824),l=n(269),j=n(1681),d=n(0),b=["links","activeLast"];function u(e){var t,n=e.links,i=e.activeLast,j=void 0!==i&&i,u=Object(c.a)(e,b),x=null===(t=Object(r.last)(n))||void 0===t?void 0:t.name,p=n.map((function(e){return Object(d.jsx)(h,{link:e},e.name)})),O=n.map((function(e){return Object(d.jsx)("div",{children:e.name!==x?Object(d.jsx)(h,{link:e}):Object(d.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return Object(d.jsx)(s.a,Object(a.a)(Object(a.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},u),{},{children:j?p:O}))}function h(e){var t=e.link,n=t.href,a=t.name,c=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:i.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),a]},a)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(4),c=n(25),r=n(136),i=n(269),o=n(407),s=n(1681),l=n(1819),j=n(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,x=e.sx,p=Object(c.a)(e,d);return Object(j.jsxs)(i.a,{sx:Object(a.a)({mb:5},x),children:[Object(j.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(l.a,Object(a.a)({links:t},p))]}),n&&Object(j.jsx)(i.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(i.a,{sx:{mt:2},children:Object(r.isString)(h)?Object(j.jsx)(s.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return d}));var a=n(4),c=n(98),r=n(1009),i=n(1825),o=n(269),s=n(407),l=n(0);function j(e){var t=e.title,n=e.sx,s=e.children;return Object(l.jsxs)(r.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(c.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(i.a,{title:t}),Object(l.jsx)(o.a,{sx:Object(a.a)({p:5,minHeight:180},n),children:s})]})}function d(e){var t=e.title;return Object(l.jsx)(s.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2854:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ne}));var a=n(12),c=n(269),r=n(1785),i=n(1002),o=n(1009),s=n(47),l=n(671),j=n(1820),d=n(1823),b=n(3),u=n(4),h=n(10),x=n(1),p=n(2759),O=n(2312),m=n(2887),g=n(2888),f=n(2858),v=n(407),w=n(544),S=n(41),y=n(0),k=["Select campaign settings","Create an ad group","Create an ad"],C=Object(a.a)(p.a)((function(e){var t,n=e.theme;return t={},Object(h.a)(t,"&.".concat(O.a.alternativeLabel),{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"}),Object(h.a)(t,"&.".concat(O.a.active),Object(h.a)({},"& .".concat(O.a.line),{borderColor:n.palette.success.main})),Object(h.a)(t,"&.".concat(O.a.completed),Object(h.a)({},"& .".concat(O.a.line),{borderColor:n.palette.success.main})),Object(h.a)(t,"& .".concat(O.a.line),{borderRadius:1,borderTopWidth:3,borderColor:n.palette.divider}),t})),I=Object(a.a)("div")((function(e){var t=e.theme,n=e.ownerState;return Object(u.a)(Object(u.a)({height:22,display:"flex",alignItems:"center",color:t.palette.text.disabled},n.active&&{color:t.palette.success.main}),{},{"& .QontoStepIcon-completedIcon":{zIndex:1,fontSize:18,color:t.palette.success.main},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})}));function L(e){var t=e.active,n=e.completed,a=e.className;return Object(y.jsx)(I,{ownerState:{active:t},className:a,children:n?Object(y.jsx)(S.a,{icon:"eva:checkmark-fill",className:"QontoStepIcon-completedIcon",width:24,height:24}):Object(y.jsx)("div",{className:"QontoStepIcon-circle"})})}var F=Object(a.a)(p.a)((function(e){var t,n=e.theme;return t={},Object(h.a)(t,"&.".concat(O.a.alternativeLabel),{top:22}),Object(h.a)(t,"&.".concat(O.a.active),Object(h.a)({},"& .".concat(O.a.line),{backgroundImage:n.palette.gradients.error})),Object(h.a)(t,"&.".concat(O.a.completed),Object(h.a)({},"& .".concat(O.a.line),{backgroundImage:n.palette.gradients.error})),Object(h.a)(t,"& .".concat(O.a.line),{height:3,border:0,borderRadius:1,backgroundColor:n.palette.divider}),t})),R=Object(a.a)("div")((function(e){var t=e.theme,n=e.ownerState;return Object(u.a)(Object(u.a)({zIndex:1,width:50,height:50,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.text.disabled,backgroundColor:"light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[700]},n.active&&{boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)",color:t.palette.common.white,backgroundImage:t.palette.gradients.error}),n.completed&&{color:t.palette.common.white,backgroundImage:t.palette.gradients.error})}));function N(e){var t=e.active,n=e.completed,a=e.className,c={1:Object(y.jsx)(S.a,{icon:"eva:settings-2-outline",width:24,height:24}),2:Object(y.jsx)(S.a,{icon:"eva:person-add-outline",width:24,height:24}),3:Object(y.jsx)(S.a,{icon:"eva:monitor-outline",width:24,height:24})};return Object(y.jsx)(R,{ownerState:{completed:n,active:t},className:a,children:c[String(e.icon)]})}function z(e){switch(e){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}function H(){var e=Object(x.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m.a,{alternativeLabel:!0,activeStep:n,connector:Object(y.jsx)(C,{}),children:k.map((function(e){return Object(y.jsx)(g.a,{children:Object(y.jsx)(f.a,{StepIconComponent:L,children:e})},e)}))}),Object(y.jsx)(c.a,{sx:{mb:5}}),Object(y.jsx)(m.a,{alternativeLabel:!0,activeStep:n,connector:Object(y.jsx)(F,{}),children:k.map((function(e){return Object(y.jsx)(g.a,{children:Object(y.jsx)(f.a,{StepIconComponent:N,children:e})},e)}))}),n===k.length?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(y.jsx)(v.a,{sx:{my:1},children:"All steps completed - you're finished"})}),Object(y.jsx)(w.a,{color:"inherit",onClick:function(){a(0)},sx:{mr:1},children:"Reset"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(y.jsx)(v.a,{sx:{my:1},children:z(n)})}),Object(y.jsxs)(c.a,{sx:{textAlign:"right"},children:[Object(y.jsx)(w.a,{disabled:0===n,onClick:function(){a((function(e){return e-1}))},sx:{mr:1},children:"Back"}),Object(y.jsx)(w.a,{variant:"contained",onClick:function(){a((function(e){return e+1}))},sx:{mr:1},children:n===k.length-1?"Finish":"Next"})]})]})]})}var T=n(13),A=n(2),B=(n(7),n(5)),G=n(300),M=n(18),Q=n(1684),W=n(1970),E=n(1997),D=n(179),J=n(192);function P(e){return Object(D.a)("MuiStepContent",e)}Object(J.a)("MuiStepContent",["root","last","transition"]);var V=["children","className","TransitionComponent","transitionDuration","TransitionProps"],Y=Object(a.a)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.last&&t.last]}})((function(e){var t=e.ownerState,n=e.theme;return Object(A.a)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600])},t.last&&{borderLeft:"none"})})),_=Object(a.a)(Q.a,{name:"MuiStepContent",slot:"Transition",overridesResolver:function(e,t){return t.transition}})({}),U=x.forwardRef((function(e,t){var n=Object(M.a)({props:e,name:"MuiStepContent"}),a=n.children,c=n.className,r=n.TransitionComponent,i=void 0===r?Q.a:r,o=n.transitionDuration,s=void 0===o?"auto":o,l=n.TransitionProps,j=Object(T.a)(n,V),d=(x.useContext(W.a).orientation,x.useContext(E.a)),b=d.active,u=d.last,h=d.expanded,p=Object(A.a)({},n,{last:u}),O=function(e){var t=e.classes,n={root:["root",e.last&&"last"],transition:["transition"]};return Object(G.a)(n,P,t)}(p);var m=s;return"auto"!==s||i.muiSupportAuto||(m=void 0),Object(y.jsx)(Y,Object(A.a)({className:Object(B.a)(O.root,c),ref:t,ownerState:p},j,{children:Object(y.jsx)(_,Object(A.a)({as:i,in:b||h,className:O.transition,ownerState:p,timeout:m,unmountOnExit:!0},l,{children:a}))}))})),q=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."}];function K(){var e=Object(x.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1],r=function(){a((function(e){return e+1}))},i=function(){a((function(e){return e-1}))};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m.a,{activeStep:n,orientation:"vertical",children:q.map((function(e,t){return Object(y.jsxs)(g.a,{children:[Object(y.jsx)(f.a,{optional:2===t?Object(y.jsx)(v.a,{variant:"caption",children:"Last step"}):null,children:e.label}),Object(y.jsxs)(U,{children:[Object(y.jsx)(v.a,{children:e.description}),Object(y.jsxs)(c.a,{sx:{mt:3},children:[Object(y.jsx)(w.a,{variant:"contained",onClick:r,children:t===q.length-1?"Finish":"Continue"}),Object(y.jsx)(w.a,{disabled:0===t,onClick:i,children:"Back"})]})]})]},e.label)}))}),n===q.length&&Object(y.jsxs)(o.a,{sx:{p:3,mt:3,bgcolor:"grey.50012"},children:[Object(y.jsx)(v.a,{paragraph:!0,children:"All steps completed - you're finished"}),Object(y.jsx)(w.a,{onClick:function(){a(0)},children:"Reset"})]})]})}var X=["Select campaign settings","Create an ad group","Create an ad"];function Z(){var e=Object(x.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(x.useState)(new Set),i=Object(b.a)(r,2),s=i[0],l=i[1],j=function(e){return 1===e},d=function(e){return s.has(e)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m.a,{activeStep:n,alternativeLabel:!0,children:X.map((function(e,t){var n={};return d(t)&&(n.completed=!1),Object(y.jsx)(g.a,Object(u.a)(Object(u.a)({},n),{},{children:Object(y.jsx)(f.a,Object(u.a)(Object(u.a)({},{}),{},{children:e}))}),e)}))}),n===X.length?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(y.jsx)(v.a,{sx:{my:1},children:"All steps completed - you're finished"})}),Object(y.jsxs)(c.a,{sx:{display:"flex"},children:[Object(y.jsx)(c.a,{sx:{flexGrow:1}}),Object(y.jsx)(w.a,{onClick:function(){a(0)},children:"Reset"})]})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(y.jsxs)(v.a,{sx:{my:1},children:[" Step ",n+1]})}),Object(y.jsxs)(c.a,{sx:{display:"flex"},children:[Object(y.jsx)(w.a,{color:"inherit",disabled:0===n,onClick:function(){a((function(e){return e-1}))},sx:{mr:1},children:"Back"}),Object(y.jsx)(c.a,{sx:{flexGrow:1}}),j(n)&&Object(y.jsx)(w.a,{color:"inherit",onClick:function(){if(!j(n))throw new Error("You can't skip a step that isn't optional.");a((function(e){return e+1})),l((function(e){var t=new Set(e.values());return t.add(n),t}))},sx:{mr:1},children:"Skip"}),Object(y.jsx)(w.a,{variant:"contained",onClick:function(){var e=s;d(n)&&(e=new Set(e.values())).delete(n),a((function(e){return e+1})),l(e)},children:n===X.length-1?"Finish":"Next"})]})]})]})}var $=["Select campaign settings","Create an ad group","Create an ad"];function ee(){var e=Object(x.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(x.useState)(new Set),i=Object(b.a)(r,2),s=i[0],l=i[1],j=function(e){return 1===e},d=function(e){return s.has(e)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m.a,{activeStep:n,children:$.map((function(e,t){var n={},a={};return j(t)&&(a.optional=Object(y.jsx)(v.a,{variant:"caption",children:"Optional"})),d(t)&&(n.completed=!1),Object(y.jsx)(g.a,Object(u.a)(Object(u.a)({},n),{},{children:Object(y.jsx)(f.a,Object(u.a)(Object(u.a)({},a),{},{children:e}))}),e)}))}),n===$.length?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(y.jsx)(v.a,{sx:{my:1},children:"All steps completed - you're finished"})}),Object(y.jsxs)(c.a,{sx:{display:"flex"},children:[Object(y.jsx)(c.a,{sx:{flexGrow:1}}),Object(y.jsx)(w.a,{onClick:function(){a(0)},children:"Reset"})]})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(y.jsxs)(v.a,{sx:{my:1},children:[" Step ",n+1]})}),Object(y.jsxs)(c.a,{sx:{display:"flex"},children:[Object(y.jsx)(w.a,{color:"inherit",disabled:0===n,onClick:function(){a((function(e){return e-1}))},sx:{mr:1},children:"Back"}),Object(y.jsx)(c.a,{sx:{flexGrow:1}}),j(n)&&Object(y.jsx)(w.a,{color:"inherit",onClick:function(){if(!j(n))throw new Error("You can't skip a step that isn't optional.");a((function(e){return e+1})),l((function(e){var t=new Set(e.values());return t.add(n),t}))},sx:{mr:1},children:"Skip"}),Object(y.jsx)(w.a,{variant:"contained",onClick:function(){var e=s;d(n)&&(e=new Set(e.values())).delete(n),a((function(e){return e+1})),l(e)},children:n===$.length-1?"Finish":"Next"})]})]})]})}var te=Object(a.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function ne(){return Object(y.jsx)(l.a,{title:"Components: StepperView",children:Object(y.jsxs)(te,{children:[Object(y.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(y.jsx)(r.a,{children:Object(y.jsx)(j.a,{heading:"Stepper",links:[{name:"Components",href:s.d.components},{name:"Stepper"}],moreLink:"https://mui.com/components/steppers"})})}),Object(y.jsx)(r.a,{children:Object(y.jsxs)(i.a,{spacing:3,children:[Object(y.jsx)(d.a,{title:"Horizontal Linear Stepper",children:Object(y.jsx)(o.a,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:Object(y.jsx)(ee,{})})}),Object(y.jsx)(d.a,{title:"Linear Alternative Label",children:Object(y.jsx)(o.a,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:Object(y.jsx)(Z,{})})}),Object(y.jsx)(d.a,{title:"Vertical Linear Stepper",children:Object(y.jsx)(o.a,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:Object(y.jsx)(K,{})})}),Object(y.jsx)(d.a,{title:"Customized Stepper",children:Object(y.jsx)(o.a,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:Object(y.jsx)(H,{})})})]})})]})})}}}]);
//# sourceMappingURL=107.7f442c17.chunk.js.map
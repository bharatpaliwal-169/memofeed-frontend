(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{305:function(t,e,n){"use strict";n.r(e);var c=n(15),a=n(22),r=n(11),i=n(0),s=n.n(i),o=n(16),l=n(34),u=n(72),j=n(294),m=n(278),b=n(147),d=n(1),h=s.a.lazy((function(){return n.e(5).then(n.bind(null,301))}));e.default=function(t){var e=t.post,n=JSON.parse(localStorage.getItem("profile")),O=Object(b.a)(),v=Object(o.b)(),p=Object(i.useRef)(),x=Object(i.useState)(""),f=Object(r.a)(x,2),g=f[0],w=f[1],C=Object(i.useState)(null===e||void 0===e?void 0:e.comments),y=Object(r.a)(C,2),k=y[0],N=y[1],S=function(){var t=Object(a.a)(Object(c.a)().mark((function t(){var a,r,i;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=g,w(""),t.next=4,v(Object(l.a)("".concat(null===n||void 0===n||null===(a=n.result)||void 0===a?void 0:a.name,": ").concat(r),e._id));case 4:i=t.sent,N(i),p.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:O.commentsOuterContainer,children:[Object(d.jsxs)("div",{className:O.commentsInnerContainer,children:[Object(d.jsx)(u.a,{gutterBottom:!0,variant:"h4",children:"Comments"}),null===k||void 0===k?void 0:k.map((function(t,e){return Object(d.jsxs)(u.a,{gutterBottom:!0,variant:"subtitle1",children:[Object(d.jsxs)("strong",{className:O.commentName,children:[t.split(": ")[0]," : "]}),t.split(":")[1]]},e)})),Object(d.jsx)("div",{ref:p})]}),n?Object(d.jsxs)("div",{style:{width:"100%"},children:[Object(d.jsx)(u.a,{gutterBottom:!0,variant:"h5",style:{marginTop:"1.5rem"},children:"Write a comment"}),Object(d.jsx)(j.a,{fullWidth:!0,minRows:4,variant:"outlined",label:"Comment here",multiline:!0,value:g,onChange:function(t){return w(t.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)(m.a,{style:{marginTop:"10px"},fullWidth:!0,disabled:!g.length,color:"primary",variant:"contained",onClick:S,children:"Comment"})]}):Object(d.jsx)(s.a.Suspense,{children:Object(d.jsx)(h,{msg:", You can make comment on this post."})})]})})}}}]);
//# sourceMappingURL=8.a4e1f950.chunk.js.map
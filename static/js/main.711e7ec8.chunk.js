(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(12),a=c(31),r=c.n(a),i=(c(38),c(0)),s=c.n(i),o=c(2),u=c(10),j=(c(40),c(33)),b=c(19),p=c(20),d=c(32),h=c(13),O=j.a.initializeApp({apiKey:"AIzaSyDJmc_d2xiwHLDWjK-_FJqhOGoPf81GKSQ",authDomain:"chatappproj-5ebe6.firebaseapp.com",projectId:"chatappproj-5ebe6",storageBucket:"chatappproj-5ebe6.appspot.com",messagingSenderId:"327354501086",appId:"1:327354501086:web:a58fa4bac76c7168b7bf4f",measurementId:"G-N44RZE3R1Y"}),f=Object(p.c)(O),l=Object(b.c)(O);function m(){return Object(h.jsx)("button",{onClick:function(){var e=new p.a;Object(p.g)(f,e)},children:" Sign in with Google "})}function g(e){var t=e.message,c=t.text,n=t.uid,a=t.photoURL,r=(t.createdAt,n===f.currentUser.uid?"sent":"recieved");return Object(h.jsxs)("div",{className:"message ".concat(r),children:[Object(h.jsx)("p",{children:c}),Object(h.jsx)("img",{width:100,height:100,src:a})]})}function x(){var e=Object(n.useRef)(),t=Object(b.b)(l,"messages"),c=Object(b.g)(t,Object(b.f)("createdAt"),Object(b.d)(25)),a=[],r=Object(n.useState)([]),i=Object(u.a)(r,2),j=i[0],p=i[1];Object(b.e)(c,(function(e){e.forEach((function(e){a.push(e.data())})),console.log(a),p(a)}));var d=Object(n.useState)(),O=Object(u.a)(d,2),m=O[0],x=O[1],v=function(){var c=Object(o.a)(s.a.mark((function c(n){var a,r,i;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),a=f.currentUser,r=a.uid,i=a.photoURL,c.next=4,Object(b.a)(t,{uid:r,text:m,createdAt:new Date,photoURL:i});case 4:x(""),e.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[j&&j.map((function(e){return Object(h.jsx)(g,{message:e},e.id)})),Object(h.jsx)("div",{ref:e,children:" "})]}),Object(h.jsxs)("form",{value:m,onChange:function(e){return x(e.target.value)},onSubmit:v,children:[Object(h.jsx)("input",{}),Object(h.jsx)("button",{type:"submit",children:" \ud83d\udd4a\ufe0f "})]})]})}var v=function(){var e=Object(d.a)(f),t=Object(u.a)(e,1)[0];return Object(h.jsx)("div",{className:"App",children:t?Object(h.jsx)(x,{}):Object(h.jsx)(m,{})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};r.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.711e7ec8.chunk.js.map
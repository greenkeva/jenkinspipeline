(this.webpackJsonpinspoquotes=this.webpackJsonpinspoquotes||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(19),j=(c(49),c(50),c(37),c(25)),o=c(6),r=c(85),s=c(86),u=c(1),a=function(){return Object(u.jsx)(r.a,{bg:"light",variant:"light",children:Object(u.jsxs)(s.a,{className:"mr-auto",children:[Object(u.jsx)(j.b,{exact:!0,to:"/",children:"Home"}),"|",Object(u.jsx)(j.b,{to:"/about",children:"About"}),"|",Object(u.jsx)(j.b,{to:"/music",children:"Music"}),"|"]})})},b=c(8),d=(c(61),function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],i=t[1],j=Object(n.useState)(""),o=Object(b.a)(j,2),r=o[0],s=o[1];return Object(n.useEffect)((function(){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY)).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){i(e.content)})).catch((function(e){return s("A Good Day for a quote...!")}))}),[]),r?Object(u.jsxs)("div",{id:"div",children:[Object(u.jsx)("div",{id:"quotes",children:Object(u.jsx)("h2",{children:"Hello There Ani, Welcome to our site!"})}),Object(u.jsx)("div",{id:"quote",children:Object(u.jsx)("h2",{children:r})})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"quotes",children:[Object(u.jsx)("h2",{children:"Welcome"}),";"]}),Object(u.jsx)("div",{id:"container",children:Object(u.jsx)("h2",{children:c})})]})});var l=function(){return Object(u.jsx)("div",{color:"black",children:" 404 Page Not Found "})},O=(c(62),function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],i=t[1],j=Object(n.useState)(""),o=Object(b.a)(j,2),r=o[0],s=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{id:"About",children:"Daily Quotes is meant to be inspirational and make you think about your day"}),Object(u.jsx)("div",{id:"Form1",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Thank you! You will receive a welcome email shortly")},children:[Object(u.jsx)("h3",{children:"Sign Up For Updates"}),Object(u.jsxs)("label",{children:["Name:",Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("label",{children:["Email:",Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})})]})}),h=c(44),x=c.n(h),m=(c(81),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{id:"Jazz",children:Object(u.jsx)("h4",{children:"Enjoy Jazz During Your Day"})}),Object(u.jsx)("div",{id:"Music",children:Object(u.jsx)(x.a,{url:"https://youtu.be/CdnaJPPxQow"})})]})}),v=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(a,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{name:"Home",path:"/",exact:!0,component:d}),Object(u.jsx)(o.a,{name:"About",path:"/about",component:O}),Object(u.jsx)(o.a,{name:"Music",path:"/music",component:m}),Object(u.jsx)(o.a,{name:"*",component:l})]})]})})};var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v,{})})};Object(i.render)(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.799bba22.chunk.js.map
(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(37),c=n.n(a),r=n(16),s=n(35),i=n(65),o="[Auth] Login",u="[Auth] Logout",l="[UI] Set Error",j="[UI] Remove Error",d="[UI] Start loading",b="[UI] Finish loading",p="[Notes] New note",O="[Notes] Set active note",f="[Notes] Load notes",m="[Notes] Updated note",h="[Notes] Delete note",x="[Notes] Logout Cleaning",v=n(13),_={loading:!1,msgError:null},g=n(18),y={notes:[],active:null},w="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,N=Object(s.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return{uid:t.payload.uid,name:t.payload.displayName};case u:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(v.a)(Object(v.a)({},e),{},{msgError:t.payload});case j:return Object(v.a)(Object(v.a)({},e),{},{msgError:null});case d:return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case b:return Object(v.a)(Object(v.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(v.a)(Object(v.a)({},e),{},{active:Object(v.a)({},t.payload)});case p:return Object(v.a)(Object(v.a)({},e),{},{notes:[t.payload].concat(Object(g.a)(e.notes))});case f:return Object(v.a)(Object(v.a)({},e),{},{notes:Object(g.a)(t.payload)});case m:return Object(v.a)(Object(v.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case h:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case x:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:[]});default:return e}}}),k=Object(s.d)(N,w(Object(s.a)(i.a))),C=n(0),E=n.n(C),S=n(1),I=n(12),L=n(7),D=n(27),A=n(14),U=n(33),P=n(29),R=n.n(P),F=n(25),T=n(24),B=n(66);Object(B.a)({apiKey:"AIzaSyAgro7VcneUvb4_7gX339rvw89tEiku7ys",authDomain:"journal-app-1d2fa.firebaseapp.com",projectId:"journal-app-1d2fa",storageBucket:"journal-app-1d2fa.appspot.com",messagingSenderId:"398668733607",appId:"1:398668733607:web:cea71ebfdd37dc12914f82"});var X=Object(T.f)(),q=new F.a,z=function(e){return{type:l,payload:e}},G=function(){return{type:b}},J=function(){var e=Object(S.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.e)(Object(T.b)(X,"".concat(t,"/journal/notes")));case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(v.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(S.a)(E.a.mark((function e(t){var n,a,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/doj1bpd1j/upload",(n=new FormData).append("upload_preset","journal-app"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/doj1bpd1j/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t){return{type:O,payload:Object(v.a)({id:e},t)}},K=function(e,t){return{type:p,payload:Object(v.a)({id:e},t)}},M=function(e){return function(){var t=Object(S.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:a=t.sent,n(H(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H=function(e){return{type:f,payload:e}},Q=function(e){return function(){var t=Object(S.a)(E.a.mark((function t(n,a){var c,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(v.a)({},e)).id,t.next=6,Object(T.g)(Object(T.d)(X,"".concat(c,"/journal/notes/").concat(e.id)),r);case 6:n(Y(e.id,r)),R.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Y=function(e,t){return{type:m,payload:{id:e,note:Object(v.a)({id:e},t)}}},Z=function(e){return{type:h,payload:e}},$=function(e,t){return function(n){n({type:d});var a=Object(F.c)();Object(F.d)(a,e,t).then((function(e){var t=e.user;n(ee(t.uid,t.displayName)),n(G())})).catch((function(e){console.log(e),n(G()),R.a.fire("Error",e.message,"error")}))}},ee=function(e,t){return{type:o,payload:{uid:e,displayName:t}}},te=function(){return{type:u}},ne=n(4),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(L.useState)(e),n=Object(I.a)(t,2),a=n[0],c=n[1],r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},s=function(e){c(Object(v.a)(Object(v.a)({},a),{},Object(ne.a)({},e.target.name,e.target.value)))};return[a,s,r]},ce=n(6),re=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).loading,n=ae({email:"carlos@test.com",password:"123456"}),a=Object(I.a)(n,2),c=a[0],s=a[1],i=c.email,o=c.password;return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)("h3",{className:"auth__title",children:"Login"}),Object(ce.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e($(i,o))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(ce.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:s}),Object(ce.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:o,onChange:s}),Object(ce.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(ce.jsxs)("div",{className:"auth__social-networks",children:[Object(ce.jsx)("p",{children:"Login with social networks"}),Object(ce.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){var t=Object(F.c)();Object(F.e)(t,q).then((function(t){var n=t.user;e(ee(n.uid,n.displayName))}))}))},children:[Object(ce.jsx)("div",{className:"google-icon-wrapper",children:Object(ce.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(ce.jsx)("p",{className:"btn-text",children:Object(ce.jsx)("b",{children:"Sign in with google"})})]})]}),Object(ce.jsx)(D.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},se=n(67),ie=n.n(se),oe=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).msgError,n=ae({name:"carlos",email:"carlos@test.com",password:"123456",password2:"123456"}),a=Object(I.a)(n,2),c=a[0],s=a[1],i=c.name,o=c.email,u=c.password,l=c.password2,d=function(){return 0===i.trim().length?(e(z("Name is required")),!1):ie.a.isEmail(o)?u!==l||u.length<5?(e(z("Password should be at least 6 characters and match each other")),!1):(e({type:j}),!0):(e(z("Email is not valid")),!1)};return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)("h3",{className:"auth__title",children:"Register"}),Object(ce.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,n){return function(a){var c=Object(F.c)();Object(F.b)(c,e,t).then(function(){var e=Object(S.a)(E.a.mark((function e(t){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,Object(F.g)(c,{displayName:n});case 3:console.log(c),a(ee(c.uid,c.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=e.code,n=e.message;console.log(t,n),R.a.fire("Error",t+" "+n,"error")}))}}(o,u,i))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(ce.jsx)("div",{className:"auth__alert-error",children:t}),Object(ce.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:s}),Object(ce.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:s}),Object(ce.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:s}),Object(ce.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:l,onChange:s}),Object(ce.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(ce.jsx)(D.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},ue=function(){return Object(ce.jsx)("div",{className:"auth__main",children:Object(ce.jsx)("div",{className:"auth__box-container",children:Object(ce.jsxs)(A.d,{children:[Object(ce.jsx)(A.b,{path:"login",element:Object(ce.jsx)(re,{})}),Object(ce.jsx)(A.b,{path:"register",element:Object(ce.jsx)(oe,{})}),Object(ce.jsx)(A.b,{path:"/*",element:Object(ce.jsx)(A.a,{replace:!0,to:"login"})})]})})})},le=function(e){var t=e.children;return e.isAuthenticated?t:Object(ce.jsx)(A.a,{to:"/auth/login"})},je=function(e){var t=e.children;return e.isAuthenticated?Object(ce.jsx)(A.a,{to:"/"}):t},de=n(68),be=n.n(de),pe=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,s=e.url,i=be()(n),o=Object(r.b)();return Object(ce.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){o(W(t,{date:n,title:a,body:c,url:s}))},children:[s&&Object(ce.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(s,")")}}),Object(ce.jsxs)("div",{className:"journal__entry-body",children:[Object(ce.jsx)("p",{className:"journal__entry-title",children:a}),Object(ce.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(ce.jsxs)("div",{className:"journal__entry-date-box",children:[Object(ce.jsx)("span",{children:i.format("dddd")}),Object(ce.jsx)("h4",{children:i.format("Do")})]})]})},Oe=function(){var e=Object(r.c)((function(e){return e.notes})).notes;return Object(ce.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(ce.jsx)(pe,Object(v.a)({},e),e.id)}))})},fe=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.auth})).name;return Object(ce.jsxs)("aside",{className:"journal__sidebar",children:[Object(ce.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(ce.jsxs)("h3",{className:"mt-5",children:[Object(ce.jsx)("i",{className:"far fa-moon"}),Object(ce.jsxs)("span",{children:[" ",t]})]}),Object(ce.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(S.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(F.c)(),e.next=3,Object(F.f)(n);case 3:t(te()),t({type:x});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(ce.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(S.a)(E.a.mark((function e(t,n){var a,c,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,Object(T.a)(Object(T.b)(X,"".concat(a,"/journal/notes")),c);case 4:r=e.sent,t(W(r.id,c)),t(K(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ce.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(ce.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(ce.jsx)(Oe,{})]})},me=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.notes})).active;return Object(ce.jsxs)("div",{className:"notes__appbar",children:[Object(ce.jsx)("span",{children:"28 de agosto 2020"}),Object(ce.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(S.a)(E.a.mark((function t(n,a){var c,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,R.a.fire({title:"Uploading...",text:"Please wait...",showConfirmButton:!1,allowOutsideClick:!1,willOpen:function(){R.a.showLoading()}}),t.next=4,V(e);case 4:r=t.sent,c.url=r,n(Q(c)),R.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(ce.jsxs)("div",{children:[Object(ce.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(ce.jsx)("button",{className:"btn",onClick:function(){e(Q(t))},children:"Save"})]})]})},he=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.notes})).active,n=ae(t),a=Object(I.a)(n,3),c=a[0],s=a[1],i=a[2],o=c.body,u=c.title,l=c.id,j=Object(L.useRef)(t.id);Object(L.useEffect)((function(){t.id!==j.current&&(i(t),j.current=t.id)}),[t,i]),Object(L.useEffect)((function(){e(W(c.id,Object(v.a)({},c)))}),[c,e]);return Object(ce.jsxs)("div",{className:"notes__main-content",children:[Object(ce.jsx)(me,{}),Object(ce.jsxs)("div",{className:"notes__content",children:[Object(ce.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:u,onChange:s}),Object(ce.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:o,onChange:s}),t.url&&Object(ce.jsx)("div",{className:"notes__image",children:Object(ce.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(ce.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(S.a)(E.a.mark((function t(n,a){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,Object(T.c)(Object(T.d)(X,"".concat(c,"/journal/notes/").concat(e)));case 3:n(Z(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(l))},children:"Delete"})]})},xe=function(){return Object(ce.jsxs)("div",{className:"nothing__main-content",children:[Object(ce.jsxs)("p",{children:["Select something",Object(ce.jsx)("br",{}),"or create an entry!"]}),Object(ce.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ve=function(){var e=Object(r.c)((function(e){return e.notes})).active;return Object(ce.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(ce.jsx)(fe,{}),Object(ce.jsx)("main",{children:e?Object(ce.jsx)(he,{}):Object(ce.jsx)(xe,{})})]})},_e=function(){var e=Object(r.b)(),t=Object(L.useState)(!0),n=Object(I.a)(t,2),a=n[0],c=n[1],s=Object(L.useState)(!1),i=Object(I.a)(s,2),o=i[0],u=i[1];return Object(L.useEffect)((function(){var t=Object(U.c)();Object(U.d)(t,function(){var t=Object(S.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(ee(n.uid,n.displayName)),u(!0),e(M(n.uid))):u(!1),c(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,c,u]),a?Object(ce.jsx)("h1",{children:"Wait..."}):Object(ce.jsx)(D.a,{children:Object(ce.jsxs)(A.d,{children:[Object(ce.jsx)(A.b,{path:"/",element:Object(ce.jsx)(le,{isAuthenticated:o,children:Object(ce.jsx)(ve,{})})}),Object(ce.jsx)(A.b,{path:"/*",element:Object(ce.jsx)(A.a,{replace:!0,to:"auth/login"})}),Object(ce.jsx)(A.b,{path:"auth/*",element:Object(ce.jsx)(je,{isAuthenticated:o,children:Object(ce.jsx)(ue,{})})})]})})},ge=function(){return Object(ce.jsx)(r.a,{store:k,children:Object(ce.jsx)(_e,{})})};n(173);c.a.render(Object(ce.jsx)(ge,{}),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.53ead60a.chunk.js.map
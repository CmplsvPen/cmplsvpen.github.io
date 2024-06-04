import{S as F,i as H,s as j,a as O,e as d,y as Y,g as u,f as q,c as f,b as v,o as l,h as T,n as x,l as W,t as w,d as g,j as i,H as $,B as V,E as z}from"../chunks/index.0a40a80f.js";import{e as C}from"../chunks/forms.1cb0d4cd.js";import{p as G}from"../chunks/stores.f8f0b7d0.js";function J(p){let e,t,a,c,o;return{c(){e=d("p"),t=w("This password reset token either never existed or expired. You can "),a=d("a"),c=w("request a new one"),o=w("."),this.h()},l(r){e=f(r,"P",{class:!0});var s=v(e);t=g(s,"This password reset token either never existed or expired. You can "),a=f(s,"A",{href:!0});var n=v(a);c=g(n,"request a new one"),n.forEach(u),o=g(s,"."),s.forEach(u),this.h()},h(){l(a,"href","/login/reset-password"),l(e,"class","verify svelte-9fg2fd")},m(r,s){T(r,e,s),i(e,t),i(e,a),i(a,c),i(e,o)},p:x,d(r){r&&u(e)}}}function K(p){let e,t,a,c,o,r,s,n,h,m,k,E,B,I,N,b,R;function U(y,P){return y[0]?ee:Z}let L=U(p),_=L(p);return{c(){e=d("div"),t=d("form"),a=d("label"),c=w("Enter a new password ("),o=d("a"),_.c(),r=w("):"),s=O(),n=d("input"),m=O(),k=d("input"),B=O(),I=d("button"),N=w("Reset"),this.h()},l(y){e=f(y,"DIV",{class:!0});var P=v(e);t=f(P,"FORM",{method:!0,action:!0});var A=v(t);a=f(A,"LABEL",{for:!0,class:!0});var D=v(a);c=g(D,"Enter a new password ("),o=f(D,"A",{href:!0});var M=v(o);_.l(M),M.forEach(u),r=g(D,"):"),D.forEach(u),s=q(A),n=f(A,"INPUT",{type:!0,id:!0,name:!0,minlength:!0,autocomplete:!0,class:!0}),m=q(A),k=f(A,"INPUT",{type:!0,name:!0,class:!0}),B=q(A),I=f(A,"BUTTON",{type:!0,class:!0});var S=v(I);N=g(S,"Reset"),S.forEach(u),A.forEach(u),P.forEach(u),this.h()},h(){l(o,"href","javascript:;"),l(a,"for","password"),l(a,"class","svelte-9fg2fd"),l(n,"type",h=p[0]?"password":"text"),l(n,"id","password"),l(n,"name","password"),n.required=!0,l(n,"minlength","8"),l(n,"autocomplete","new-password"),l(n,"class","svelte-9fg2fd"),l(k,"type","hidden"),l(k,"name","token"),k.value=E=p[1].url.searchParams.get("token"),l(k,"class","svelte-9fg2fd"),l(I,"type","submit"),l(I,"class","svelte-9fg2fd"),l(t,"method","POST"),l(t,"action","?/reset"),l(e,"class","form svelte-9fg2fd")},m(y,P){T(y,e,P),i(e,t),i(t,a),i(a,c),i(a,o),_.m(o,null),i(a,r),i(t,s),i(t,n),i(t,m),i(t,k),i(t,B),i(t,I),i(I,N),b||(R=[$(o,"click",p[2]),V(C.call(null,t))],b=!0)},p(y,P){L!==(L=U(y))&&(_.d(1),_=L(y),_&&(_.c(),_.m(o,null))),P&1&&h!==(h=y[0]?"password":"text")&&l(n,"type",h),P&2&&E!==(E=y[1].url.searchParams.get("token"))&&(k.value=E)},d(y){y&&u(e),_.d(),b=!1,z(R)}}}function Q(p){let e,t,a,c,o,r,s;return{c(){e=d("p"),t=w(`If there is an account at the address you entered, an email has been sent with a single-use\r
			link to reset your password. It will expire in 10 minutes. Make sure to check your spam\r
			folder. If you do not receive an email, it may be because you signed up with a different\r
			address. `),a=d("br"),c=d("br"),o=w(`\r
			Already changed password? `),r=d("a"),s=w("Login here!"),this.h()},l(n){e=f(n,"P",{class:!0});var h=v(e);t=g(h,`If there is an account at the address you entered, an email has been sent with a single-use\r
			link to reset your password. It will expire in 10 minutes. Make sure to check your spam\r
			folder. If you do not receive an email, it may be because you signed up with a different\r
			address. `),a=f(h,"BR",{}),c=f(h,"BR",{}),o=g(h,`\r
			Already changed password? `),r=f(h,"A",{href:!0});var m=v(r);s=g(m,"Login here!"),m.forEach(u),h.forEach(u),this.h()},h(){l(r,"href","/login"),l(e,"class","verify svelte-9fg2fd")},m(n,h){T(n,e,h),i(e,t),i(e,a),i(e,c),i(e,o),i(e,r),i(r,s)},p:x,d(n){n&&u(e)}}}function X(p){let e,t,a,c,o,r,s,n,h,m,k,E,B,I,N;return{c(){e=d("div"),t=d("h1"),a=w("Reset Password"),c=O(),o=d("div"),r=d("form"),s=d("label"),n=w("Enter the email you used to register:"),h=O(),m=d("input"),k=O(),E=d("button"),B=w("Continue"),this.h()},l(b){e=f(b,"DIV",{class:!0});var R=v(e);t=f(R,"H1",{});var U=v(t);a=g(U,"Reset Password"),U.forEach(u),R.forEach(u),c=q(b),o=f(b,"DIV",{class:!0});var L=v(o);r=f(L,"FORM",{method:!0,action:!0});var _=v(r);s=f(_,"LABEL",{for:!0,class:!0});var y=v(s);n=g(y,"Enter the email you used to register:"),y.forEach(u),h=q(_),m=f(_,"INPUT",{id:!0,name:!0,type:!0,autocomplete:!0,class:!0}),k=q(_),E=f(_,"BUTTON",{class:!0});var P=v(E);B=g(P,"Continue"),P.forEach(u),_.forEach(u),L.forEach(u),this.h()},h(){l(e,"class","header svelte-9fg2fd"),l(s,"for","email"),l(s,"class","svelte-9fg2fd"),l(m,"id","email"),l(m,"name","email"),l(m,"type","email"),m.required=!0,l(m,"autocomplete","username"),l(m,"class","svelte-9fg2fd"),l(E,"class","svelte-9fg2fd"),l(r,"method","POST"),l(r,"action","?/email"),l(o,"class","form svelte-9fg2fd")},m(b,R){T(b,e,R),i(e,t),i(t,a),T(b,c,R),T(b,o,R),i(o,r),i(r,s),i(s,n),i(r,h),i(r,m),i(r,k),i(r,E),i(E,B),I||(N=V(C.call(null,r)),I=!0)},p:x,d(b){b&&u(e),b&&u(c),b&&u(o),I=!1,N()}}}function Z(p){let e;return{c(){e=w("hide")},l(t){e=g(t,"hide")},m(t,a){T(t,e,a)},d(t){t&&u(e)}}}function ee(p){let e;return{c(){e=w("show")},l(t){e=g(t,"show")},m(t,a){T(t,e,a)},d(t){t&&u(e)}}}function te(p){let e,t,a;function c(s,n){if(n&2&&(a=null),s[1].url.search==="")return X;if(s[1].url.search==="?submitted")return Q;if(a==null&&(a=!!s[1].url.search.startsWith("?token")),a)return K;if(s[1].url.search==="?invalid")return J}let o=c(p,-1),r=o&&o(p);return{c(){e=O(),t=d("div"),r&&r.c(),this.h()},l(s){Y("svelte-1n01puw",document.head).forEach(u),e=q(s),t=f(s,"DIV",{class:!0});var h=v(t);r&&r.l(h),h.forEach(u),this.h()},h(){document.title="Formula Hacks | Reset Password",l(t,"class","topographic-background svelte-9fg2fd")},m(s,n){T(s,e,n),T(s,t,n),r&&r.m(t,null)},p(s,[n]){o===(o=c(s,n))&&r?r.p(s,n):(r&&r.d(1),r=o&&o(s),r&&(r.c(),r.m(t,null)))},i:x,o:x,d(s){s&&u(e),s&&u(t),r&&r.d()}}}function re(p,e,t){let a;W(p,G,r=>t(1,a=r));let c=!0;return[c,a,()=>t(0,c=!c)]}class ne extends F{constructor(e){super(),H(this,e,re,te,j,{})}}export{ne as component};

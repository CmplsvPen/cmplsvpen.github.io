import{S as T,i as x,s as O,a as k,e as m,y as j,g as h,f as y,c as v,b as g,o as u,h as A,j as f,n as N,C as q,t as p,d as b,k as B}from"../chunks/index.0a40a80f.js";function S(r,a,l){const t=r.slice();return t[1]=a[l],t}function C(r){let a,l,t,o,s;return{c(){a=m("i"),l=p("No scan actions are configured. Add some in the "),t=m("a"),o=p("admin panel"),s=p("."),this.h()},l(c){a=v(c,"I",{});var e=g(a);l=b(e,"No scan actions are configured. Add some in the "),t=v(e,"A",{href:!0});var n=g(t);o=b(n,"admin panel"),n.forEach(h),s=b(e,"."),e.forEach(h),this.h()},h(){u(t,"href","/admin")},m(c,e){A(c,a,e),f(a,l),f(a,t),f(t,o),f(a,s)},d(c){c&&h(a)}}}function I(r){let a,l,t=r[1]+"",o,s;return{c(){a=m("a"),l=m("button"),o=p(t),this.h()},l(c){a=v(c,"A",{href:!0});var e=g(a);l=v(e,"BUTTON",{class:!0});var n=g(l);o=b(n,t),n.forEach(h),e.forEach(h),this.h()},h(){u(l,"class","svelte-1l72t3f"),u(a,"href",s="/scan/"+r[1])},m(c,e){A(c,a,e),f(a,l),f(l,o)},p(c,e){e&1&&t!==(t=c[1]+"")&&B(o,t),e&1&&s!==(s="/scan/"+c[1])&&u(a,"href",s)},d(c){c&&h(a)}}}function D(r){let a,l,t,o,s=r[0].scanActions.length===0&&C(),c=r[0].scanActions,e=[];for(let n=0;n<c.length;n+=1)e[n]=I(S(r,c,n));return{c(){a=k(),l=m("div"),t=m("section"),s&&s.c(),o=k();for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){j("svelte-1n12h7h",document.head).forEach(h),a=y(n),l=v(n,"DIV",{class:!0});var i=g(l);t=v(i,"SECTION",{class:!0});var d=g(t);s&&s.l(d),o=y(d);for(let E=0;E<e.length;E+=1)e[E].l(d);d.forEach(h),i.forEach(h),this.h()},h(){document.title="Formula Hacks | Scan",u(t,"class","svelte-1l72t3f"),u(l,"class","main-content")},m(n,_){A(n,a,_),A(n,l,_),f(l,t),s&&s.m(t,null),f(t,o);for(let i=0;i<e.length;i+=1)e[i].m(t,null)},p(n,[_]){if(n[0].scanActions.length===0?s||(s=C(),s.c(),s.m(t,o)):s&&(s.d(1),s=null),_&1){c=n[0].scanActions;let i;for(i=0;i<c.length;i+=1){const d=S(n,c,i);e[i]?e[i].p(d,_):(e[i]=I(d),e[i].c(),e[i].m(t,null))}for(;i<e.length;i+=1)e[i].d(1);e.length=c.length}},i:N,o:N,d(n){n&&h(a),n&&h(l),s&&s.d(),q(e,n)}}}function F(r,a,l){let{data:t}=a;return r.$$set=o=>{"data"in o&&l(0,t=o.data)},[t]}class P extends T{constructor(a){super(),x(this,a,F,D,O,{data:0})}}export{P as component};

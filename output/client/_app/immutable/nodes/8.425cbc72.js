import{S as ne,i as oe,s as re,a as v,e as r,t as k,x as ie,y as ue,g as i,f as _,c as u,b as p,d as O,z as ce,o as t,h as le,j as e,A as de,B as X,v as me,w as fe,D as ve,E as _e}from"../chunks/index.0a40a80f.js";import{e as se}from"../chunks/forms.1cb0d4cd.js";import{c as pe}from"../chunks/actions.c3a21eae.js";import{M as he}from"../chunks/markdown-editor.ec0ef13c.js";function be(m){let h,g,s,n,w,N,U,c,b,P,L,Q,M,H,a,A,S,C,T,R,V,d,D,j,$,z,G,E,J,q,K,y,W,Y;return document.title=h="Formula Hacks | Admin - FAQ - "+m[0].question.title,E=new he({props:{id:"response",name:"response",required:!0,value:m[0].question.response}}),{c(){g=v(),s=r("div"),n=r("div"),w=r("h1"),N=k("Edit FAQ"),U=v(),c=r("form"),b=r("input"),L=v(),Q=r("button"),M=k("Delete FAQ"),H=v(),a=r("form"),A=r("input"),C=v(),T=r("label"),R=k("Question"),V=v(),d=r("input"),j=v(),$=r("label"),z=k("Answer"),G=v(),ie(E.$$.fragment),J=v(),q=r("button"),K=k("Save"),this.h()},l(l){ue("svelte-15ta6h5",document.head).forEach(i),g=_(l),s=u(l,"DIV",{class:!0});var F=p(s);n=u(F,"DIV",{id:!0,class:!0});var B=p(n);w=u(B,"H1",{});var Z=p(w);N=O(Z,"Edit FAQ"),Z.forEach(i),U=_(B),c=u(B,"FORM",{method:!0,action:!0,class:!0});var I=p(c);b=u(I,"INPUT",{type:!0,name:!0,class:!0}),L=_(I),Q=u(I,"BUTTON",{});var x=p(Q);M=O(x,"Delete FAQ"),x.forEach(i),I.forEach(i),B.forEach(i),H=_(F),a=u(F,"FORM",{method:!0,action:!0,class:!0});var o=p(a);A=u(o,"INPUT",{type:!0,name:!0,class:!0}),C=_(o),T=u(o,"LABEL",{for:!0});var ee=p(T);R=O(ee,"Question"),ee.forEach(i),V=_(o),d=u(o,"INPUT",{type:!0,id:!0,name:!0,class:!0}),j=_(o),$=u(o,"LABEL",{for:!0});var te=p($);z=O(te,"Answer"),te.forEach(i),G=_(o),ce(E.$$.fragment,o),J=_(o),q=u(o,"BUTTON",{class:!0,type:!0});var ae=p(q);K=O(ae,"Save"),ae.forEach(i),o.forEach(i),F.forEach(i),this.h()},h(){t(b,"type","hidden"),t(b,"name","id"),b.value=P=m[0].question.id,t(b,"class","svelte-7f8t9l"),t(c,"method","POST"),t(c,"action","?/delete"),t(c,"class","svelte-7f8t9l"),t(n,"id","header"),t(n,"class","svelte-7f8t9l"),t(A,"type","hidden"),t(A,"name","id"),A.value=S=m[0].question.id,t(A,"class","svelte-7f8t9l"),t(T,"for","title"),t(d,"type","text"),t(d,"id","title"),t(d,"name","title"),d.required=!0,d.value=D=m[0].question.title,t(d,"class","svelte-7f8t9l"),t($,"for","response"),t(q,"class","submit svelte-7f8t9l"),t(q,"type","submit"),t(a,"method","POST"),t(a,"action","?/edit"),t(a,"class","svelte-7f8t9l"),t(s,"class","container")},m(l,f){le(l,g,f),le(l,s,f),e(s,n),e(n,w),e(w,N),e(n,U),e(n,c),e(c,b),e(c,L),e(c,Q),e(Q,M),e(s,H),e(s,a),e(a,A),e(a,C),e(a,T),e(T,R),e(a,V),e(a,d),e(a,j),e(a,$),e($,z),e(a,G),de(E,a,null),e(a,J),e(a,q),e(q,K),y=!0,W||(Y=[X(pe.call(null,Q,{text:"Are you sure you want to delete this FAQ?",cancel:"Cancel",ok:"Delete"})),X(se.call(null,c)),X(se.call(null,a,Ae))],W=!0)},p(l,[f]){(!y||f&1)&&h!==(h="Formula Hacks | Admin - FAQ - "+l[0].question.title)&&(document.title=h),(!y||f&1&&P!==(P=l[0].question.id))&&(b.value=P),(!y||f&1&&S!==(S=l[0].question.id))&&(A.value=S),(!y||f&1&&D!==(D=l[0].question.title)&&d.value!==D)&&(d.value=D);const F={};f&1&&(F.value=l[0].question.response),E.$set(F)},i(l){y||(me(E.$$.fragment,l),y=!0)},o(l){fe(E.$$.fragment,l),y=!1},d(l){l&&i(g),l&&i(s),ve(E),W=!1,_e(Y)}}}const Ae=()=>async({update:m})=>{m({reset:!1})};function Ee(m,h,g){let{data:s}=h;return m.$$set=n=>{"data"in n&&g(0,s=n.data)},[s]}class Qe extends ne{constructor(h){super(),oe(this,h,Ee,be,re,{data:0})}}export{Qe as component};
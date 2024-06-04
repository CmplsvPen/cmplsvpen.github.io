import{_ as ct}from"./preload-helper.a4192956.js";import{S as ft,i as dt,s as st,e as ut,c as yt,b as gt,g as q,o as V,a1 as z,p as I,h as mt,n as X,ac as bt,N as J,a6 as _t,O as ht}from"./index.0a40a80f.js";var pt=typeof global=="object"&&global&&global.Object===Object&&global;const Tt=pt;var wt=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Tt||wt||Function("return this")();const tt=Pt;var kt=tt.Symbol;const A=kt;var et=Object.prototype,jt=et.hasOwnProperty,St=et.toString,v=A?A.toStringTag:void 0;function It(t){var e=jt.call(t,v),n=t[v];try{t[v]=void 0;var r=!0}catch{}var l=St.call(t);return r&&(e?t[v]=n:delete t[v]),l}var Et=Object.prototype,Ot=Et.toString;function xt(t){return Ot.call(t)}var Ct="[object Null]",Wt="[object Undefined]",K=A?A.toStringTag:void 0;function vt(t){return t==null?t===void 0?Wt:Ct:K&&K in Object(t)?It(t):xt(t)}function Lt(t){return t!=null&&typeof t=="object"}var At="[object Symbol]";function Ht(t){return typeof t=="symbol"||Lt(t)&&vt(t)==At}var Dt=/\s/;function Ft(t){for(var e=t.length;e--&&Dt.test(t.charAt(e)););return e}var Rt=/^\s+/;function Nt(t){return t&&t.slice(0,Ft(t)+1).replace(Rt,"")}function U(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Q=0/0,Mt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,Gt=/^0o[0-7]+$/i,Bt=parseInt;function Y(t){if(typeof t=="number")return t;if(Ht(t))return Q;if(U(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=U(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Nt(t);var n=Ut.test(t);return n||Gt.test(t)?Bt(t.slice(2),n?2:8):Mt.test(t)?Q:+t}var qt=function(){return tt.Date.now()};const M=qt;var Vt="Expected a function",zt=Math.max,Xt=Math.min;function Jt(t,e,n){var r,l,m,y,a,u,b=0,g=!1,h=!1,E=!0;if(typeof t!="function")throw new TypeError(Vt);e=Y(e)||0,U(n)&&(g=!!n.leading,h="maxWait"in n,m=h?zt(Y(n.maxWait)||0,e):m,E="trailing"in n?!!n.trailing:E);function j(o){var d=r,p=l;return r=l=void 0,b=o,y=t.apply(p,d),y}function H(o){return b=o,a=setTimeout(s,e),g?j(o):y}function D(o){var d=o-u,p=o-b,P=e-d;return h?Xt(P,m-p):P}function c(o){var d=o-u,p=o-b;return u===void 0||d>=e||d<0||h&&p>=m}function s(){var o=M();if(c(o))return f(o);a=setTimeout(s,D(o))}function f(o){return a=void 0,E&&r?j(o):(r=l=void 0,y)}function O(){a!==void 0&&clearTimeout(a),b=0,r=u=l=a=void 0}function x(){return a===void 0?y:f(M())}function w(){var o=M(),d=c(o);if(r=arguments,l=this,u=o,d){if(a===void 0)return H(u);if(h)return clearTimeout(a),a=setTimeout(s,e),j(u)}return a===void 0&&(a=setTimeout(s,e)),y}return w.cancel=O,w.flush=x,w}function Kt(t){let e,n;return{c(){e=ut("div"),this.h()},l(r){e=yt(r,"DIV",{class:!0}),gt(e).forEach(q),this.h()},h(){V(e,"class",n=z(t[2])+" svelte-kyrhf8"),I(e,"fillParent",t[1]),I(e,"fillParentWidth",t[4]),I(e,"fillParentHeight",t[3])},m(r,l){mt(r,e,l),t[23](e)},p(r,l){l[0]&4&&n!==(n=z(r[2])+" svelte-kyrhf8")&&V(e,"class",n),l[0]&6&&I(e,"fillParent",r[1]),l[0]&20&&I(e,"fillParentWidth",r[4]),l[0]&12&&I(e,"fillParentHeight",r[3])},i:X,o:X,d(r){r&&q(e),t[23](null)}}}const Z=500,$=300;function Qt(t,e,n){let r,l,m,y,a,u,b,g;const h=typeof window=="object",E=h?requestAnimationFrame:()=>{};async function j(){if(h&&f===void 0)if(window.Plotly)n(6,f=window.Plotly);else{const i=await ct(()=>import("./plotly.636fcb96.js").then(_=>_.p),["./plotly.636fcb96.js","./_commonjsHelpers.725317a4.js"],import.meta.url);f===void 0&&n(6,f="default"in i?i.default:i)}}const H={plotly_afterexport:"afterExport",plotly_afterplot:"afterPlot",plotly_animated:"animated",plotly_animating:"animating",plotly_animatingframe:"animatingFrame",plotly_animationinterrupted:"animationInterrupted",plotly_autosize:"autoSize",plotly_beforeexport:"beforeExport",plotly_beforehover:"beforeHover",plotly_beforeplot:"beforePlot",plotly_buttonclicked:"buttonClicked",plotly_click:"click",plotly_clickannotation:"clickAnnotation",plotly_deselect:"deselect",plotly_doubleclick:"doubleClick",plotly_framework:"framework",plotly_hover:"hover",plotly_legendclick:"legendClick",plotly_legenddoubleclick:"legendDoubleClick",plotly_react:"react",plotly_redraw:"redraw",plotly_relayout:"relayout",plotly_relayouting:"relayouting",plotly_restyle:"restyle",plotly_selected:"selected",plotly_selecting:"selecting",plotly_sliderchange:"sliderChange",plotly_sliderend:"sliderEnd",plotly_sliderstart:"sliderStart",plotly_sunburstclick:"sunburstClick",plotly_transitioned:"transitioned",plotly_transitioning:"transitioning",plotly_transitioninterrupted:"transitionInterrupted",plotly_unhover:"unhover",plotly_update:"update",plotly_webglcontextlost:"webGLContextLost"},D=bt();let{element:c=void 0}=e,{plot:s=void 0}=e,{libPlotly:f=void 0}=e,{data:O}=e,{layout:x=void 0}=e,{config:w=void 0}=e,{fillParent:o=!1}=e,{debounce:d=0}=e,{class:p=""}=e;J(async()=>{window.global=window,await j()});let P=0,S=f,T=s,F=Z,R=$;const nt=(i,_,C,W,L)=>{_&&(i==null||i.react(_,C,W,L).then(B=>n(5,s=B)))};_t(()=>c&&(f==null?void 0:f.purge(c)));let N=null,k;J(()=>k=new ResizeObserver(G));const it=i=>i&&(k==null?void 0:k.observe(i)),ot=i=>i&&(k==null?void 0:k.unobserve(i));function G(){if(!g||!c)return;const{offsetHeight:i,offsetWidth:_}=g,{paddingLeft:C,paddingTop:W,paddingRight:L,paddingBottom:B}=window.getComputedStyle(g),lt=_-parseInt(C)-parseInt(L),at=i-parseInt(W)-parseInt(L);n(14,F=u?lt:Z),n(15,R=b?at:$)}function rt(i){ht[i?"unshift":"push"](()=>{c=i,n(0,c)})}return t.$$set=i=>{"element"in i&&n(0,c=i.element),"plot"in i&&n(5,s=i.plot),"libPlotly"in i&&n(6,f=i.libPlotly),"data"in i&&n(7,O=i.data),"layout"in i&&n(8,x=i.layout),"config"in i&&n(9,w=i.config),"fillParent"in i&&n(1,o=i.fillParent),"debounce"in i&&n(10,d=i.debounce),"class"in i&&n(2,p=i.class)},t.$$.update=()=>{var i;if(t.$$.dirty[0]&1024&&n(19,r=typeof d=="object"?d.wait:d??0),t.$$.dirty[0]&1024&&n(18,l=typeof d=="object"?d:{}),t.$$.dirty[0]&2176&&n(11,P=(P+1)%1e3),t.$$.dirty[0]&51456&&n(22,m={datarevision:P,width:F,height:R,...x}),t.$$.dirty[0]&512&&n(21,y={displaylogo:!1,...w}),t.$$.dirty[0]&786432&&n(20,a=Jt(nt,r,l)),t.$$.dirty[0]&7340225&&a(f,c,O,m,y),t.$$.dirty[0]&4161&&(c&&S!==f&&(S==null||S.purge(c),n(5,s=void 0)),n(12,S=f),j()),t.$$.dirty[0]&8224&&T!==s){for(const[_,C]of Object.entries(H))(i=T==null?void 0:T.removeAllListeners)==null||i.call(T,_),s==null||s.on(_,W=>D(C,W));n(13,T=s)}t.$$.dirty[0]&2&&E(G),t.$$.dirty[0]&2&&n(4,u=o===!0||o==="width"),t.$$.dirty[0]&2&&n(3,b=o===!0||o==="height"),t.$$.dirty[0]&1&&n(17,g=c==null?void 0:c.parentElement),t.$$.dirty[0]&196608&&(it(g),ot(N),n(16,N=g))},[c,o,p,b,u,s,f,O,x,w,d,P,S,T,F,R,N,g,l,r,a,y,m,rt]}class $t extends ft{constructor(e){super(),dt(this,e,Qt,Kt,st,{element:0,plot:5,libPlotly:6,data:7,layout:8,config:9,fillParent:1,debounce:10,class:2},null,[-1,-1])}}export{$t as P};
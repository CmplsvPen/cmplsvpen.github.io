import{S as Kt,i as Jt,s as Ot,a as V,e as v,t as $,y as Yt,g as _,f as K,c as L,b as D,d as G,o as F,h as pt,j as N,n as it,O as jt}from"../chunks/index.0a40a80f.js";var $t=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Tt={},M={};let mt;const Gt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};M.getSymbolTotalCodewords=function(t){return Gt[t]};M.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};M.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');mt=t};M.isKanjiModeEnabled=function(){return typeof mt<"u"};M.toSJIS=function(t){return mt(t)};var et={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(et);function bt(){this.buffer=[],this.length=0}bt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var qt=bt;function W(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}W.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};W.prototype.get=function(e,t){return this.data[e*this.size+t]};W.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};W.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Qt=W,St={};(function(e){const t=M.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let u=1;u<r-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||r.push([n[a],n[u]]);return r}})(St);var Mt={};const Wt=M.getSymbolSize,At=7;Mt.getPositions=function(t){const i=Wt(t);return[[0,0],[i-At,0],[0,i-At]]};var Pt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,u=0,l=null,c=null;for(let B=0;B<n;B++){a=u=0,l=c=null;for(let m=0;m<n;m++){let f=r.get(B,m);f===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=f,a=1),f=r.get(m,B),f===c?u++:(u>=5&&(s+=t.N1+(u-5)),c=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const l=r.get(a,u)+r.get(a,u+1)+r.get(a+1,u)+r.get(a+1,u+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,u=0;for(let l=0;l<n;l++){a=u=0;for(let c=0;c<n;c++)a=a<<1&2047|r.get(l,c),c>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|r.get(c,l),c>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let u=0;u<s;u++)n+=r.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,i(r,u,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let l=0;l<s;l++){n(l),e.applyMask(l,r);const c=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(l,r),c<u&&(u=c,a=l)}return a}})(Pt);var nt={};const H=et,Z=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],X=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];nt.getBlocksCount=function(t,i){switch(i){case H.L:return Z[(t-1)*4+0];case H.M:return Z[(t-1)*4+1];case H.Q:return Z[(t-1)*4+2];case H.H:return Z[(t-1)*4+3];default:return}};nt.getTotalCodewordsCount=function(t,i){switch(i){case H.L:return X[(t-1)*4+0];case H.M:return X[(t-1)*4+1];case H.Q:return X[(t-1)*4+2];case H.H:return X[(t-1)*4+3];default:return}};var _t={},rt={};const q=new Uint8Array(512),x=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)q[i]=t,x[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)q[i]=q[i-255]})();rt.log=function(t){if(t<1)throw new Error("log("+t+")");return x[t]};rt.exp=function(t){return q[t]};rt.mul=function(t,i){return t===0||i===0?0:q[x[t]+x[i]]};(function(e){const t=rt;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(o[s],r[a]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let u=0;u<r.length;u++)n[u]^=t.mul(r[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(_t);const Rt=_t;function wt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}wt.prototype.initialize=function(t){this.degree=t,this.genPoly=Rt.generateECPolynomial(this.degree)};wt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=Rt.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var Zt=wt,vt={},z={},yt={};yt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var R={};const Lt="[0-9]+",Xt="[A-Z $%*+\\-./:]+";let Q="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Q=Q.replace(/u/g,"\\u");const xt="(?:(?![A-Z0-9 $%*+\\-./:]|"+Q+`)(?:.|[\r
]))+`;R.KANJI=new RegExp(Q,"g");R.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");R.BYTE=new RegExp(xt,"g");R.NUMERIC=new RegExp(Lt,"g");R.ALPHANUMERIC=new RegExp(Xt,"g");const te=new RegExp("^"+Q+"$"),ee=new RegExp("^"+Lt+"$"),ne=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");R.testKanji=function(t){return te.test(t)};R.testNumeric=function(t){return ee.test(t)};R.testAlphanumeric=function(t){return ne.test(t)};(function(e){const t=yt,i=R;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(z);(function(e){const t=M,i=nt,o=et,r=z,n=yt,s=7973,a=t.getBCHDigit(s);function u(m,f,y){for(let w=1;w<=40;w++)if(f<=e.getCapacity(w,y,m))return w}function l(m,f){return r.getCharCountIndicator(m,f)+4}function c(m,f){let y=0;return m.forEach(function(w){const I=l(w.mode,f);y+=I+w.getBitsLength()}),y}function B(m,f){for(let y=1;y<=40;y++)if(c(m,y)<=e.getCapacity(y,f,r.MIXED))return y}e.from=function(f,y){return n.isValid(f)?parseInt(f,10):y},e.getCapacity=function(f,y,w){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=r.BYTE);const I=t.getSymbolTotalCodewords(f),g=i.getTotalCodewordsCount(f,y),E=(I-g)*8;if(w===r.MIXED)return E;const d=E-l(w,f);switch(w){case r.NUMERIC:return Math.floor(d/10*3);case r.ALPHANUMERIC:return Math.floor(d/11*2);case r.KANJI:return Math.floor(d/13);case r.BYTE:default:return Math.floor(d/8)}},e.getBestVersionForData=function(f,y){let w;const I=o.from(y,o.M);if(Array.isArray(f)){if(f.length>1)return B(f,I);if(f.length===0)return 1;w=f[0]}else w=f;return u(w.mode,w.getLength(),I)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let y=f<<12;for(;t.getBCHDigit(y)-a>=0;)y^=s<<t.getBCHDigit(y)-a;return f<<12|y}})(vt);var Dt={};const ft=M,Ft=1335,re=21522,It=ft.getBCHDigit(Ft);Dt.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;ft.getBCHDigit(r)-It>=0;)r^=Ft<<ft.getBCHDigit(r)-It;return(o<<10|r)^re};var Ut={};const oe=z;function J(e){this.mode=oe.NUMERIC,this.data=e.toString()}J.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};J.prototype.getLength=function(){return this.data.length};J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)};J.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var ie=J;const se=z,st=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function O(e){this.mode=se.ALPHANUMERIC,this.data=e}O.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};O.prototype.getLength=function(){return this.data.length};O.prototype.getBitsLength=function(){return O.getBitsLength(this.data.length)};O.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=st.indexOf(this.data[i])*45;o+=st.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(st.indexOf(this.data[i]),6)};var ae=O,ue=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const ce=ue,le=z;function Y(e){this.mode=le.BYTE,typeof e=="string"&&(e=ce(e)),this.data=new Uint8Array(e)}Y.getBitsLength=function(t){return t*8};Y.prototype.getLength=function(){return this.data.length};Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)};Y.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var fe=Y;const de=z,he=M;function j(e){this.mode=de.KANJI,this.data=e}j.getBitsLength=function(t){return t*13};j.prototype.getLength=function(){return this.data.length};j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)};j.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=he.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var ge=j,kt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var u,l,c,B,m,f,y,w,I;!a.empty();){u=a.pop(),l=u.value,B=u.cost,m=i[l]||{};for(c in m)m.hasOwnProperty(c)&&(f=m[c],y=B+f,w=s[c],I=typeof s[c]>"u",(I||w>y)&&(s[c]=y,a.push(c,y),n[c]=l))}if(typeof r<"u"&&typeof s[r]>"u"){var g=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(g)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(kt);var me=kt.exports;(function(e){const t=z,i=ie,o=ae,r=fe,n=ge,s=R,a=M,u=me;function l(g){return unescape(encodeURIComponent(g)).length}function c(g,E,d){const h=[];let C;for(;(C=g.exec(d))!==null;)h.push({data:C[0],index:C.index,mode:E,length:C[0].length});return h}function B(g){const E=c(s.NUMERIC,t.NUMERIC,g),d=c(s.ALPHANUMERIC,t.ALPHANUMERIC,g);let h,C;return a.isKanjiModeEnabled()?(h=c(s.BYTE,t.BYTE,g),C=c(s.KANJI,t.KANJI,g)):(h=c(s.BYTE_KANJI,t.BYTE,g),C=[]),E.concat(d,h,C).sort(function(A,b){return A.index-b.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function m(g,E){switch(E){case t.NUMERIC:return i.getBitsLength(g);case t.ALPHANUMERIC:return o.getBitsLength(g);case t.KANJI:return n.getBitsLength(g);case t.BYTE:return r.getBitsLength(g)}}function f(g){return g.reduce(function(E,d){const h=E.length-1>=0?E[E.length-1]:null;return h&&h.mode===d.mode?(E[E.length-1].data+=d.data,E):(E.push(d),E)},[])}function y(g){const E=[];for(let d=0;d<g.length;d++){const h=g[d];switch(h.mode){case t.NUMERIC:E.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:E.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:E.push([h,{data:h.data,mode:t.BYTE,length:l(h.data)}]);break;case t.BYTE:E.push([{data:h.data,mode:t.BYTE,length:l(h.data)}])}}return E}function w(g,E){const d={},h={start:{}};let C=["start"];for(let p=0;p<g.length;p++){const A=g[p],b=[];for(let T=0;T<A.length;T++){const S=A[T],U=""+p+T;b.push(U),d[U]={node:S,lastCount:0},h[U]={};for(let k=0;k<C.length;k++){const P=C[k];d[P]&&d[P].node.mode===S.mode?(h[P][U]=m(d[P].lastCount+S.length,S.mode)-m(d[P].lastCount,S.mode),d[P].lastCount+=S.length):(d[P]&&(d[P].lastCount=S.length),h[P][U]=m(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,E))}}C=b}for(let p=0;p<C.length;p++)h[C[p]].end=0;return{map:h,table:d}}function I(g,E){let d;const h=t.getBestModeForData(g);if(d=t.from(E,h),d!==t.BYTE&&d.bit<h.bit)throw new Error('"'+g+'" cannot be encoded with mode '+t.toString(d)+`.
 Suggested mode is: `+t.toString(h));switch(d===t.KANJI&&!a.isKanjiModeEnabled()&&(d=t.BYTE),d){case t.NUMERIC:return new i(g);case t.ALPHANUMERIC:return new o(g);case t.KANJI:return new n(g);case t.BYTE:return new r(g)}}e.fromArray=function(E){return E.reduce(function(d,h){return typeof h=="string"?d.push(I(h,null)):h.data&&d.push(I(h.data,h.mode)),d},[])},e.fromString=function(E,d){const h=B(E,a.isKanjiModeEnabled()),C=y(h),p=w(C,d),A=u.find_path(p.map,"start","end"),b=[];for(let T=1;T<A.length-1;T++)b.push(p.table[A[T]].node);return e.fromArray(f(b))},e.rawSplit=function(E){return e.fromArray(B(E,a.isKanjiModeEnabled()))}})(Ut);const ot=M,at=et,we=qt,ye=Qt,Ee=St,Ce=Mt,dt=Pt,ht=nt,Be=Zt,tt=vt,pe=Dt,Ae=z,ut=Ut;function Ie(e,t){const i=e.size,o=Ce.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function Ne(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function Te(e,t){const i=Ee.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function be(e,t){const i=e.size,o=tt.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+i-8-3,s=(o>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function ct(e,t,i){const o=e.size,r=pe.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function Se(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(r,a-u)){let l=!1;s<t.length&&(l=(t[s]>>>n&1)===1),e.set(r,a-u,l),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function Me(e,t,i){const o=new we;i.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),Ae.getCharCountIndicator(u.mode,e)),u.write(o)});const r=ot.getSymbolTotalCodewords(e),n=ht.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let u=0;u<a;u++)o.put(u%2?17:236,8);return Pe(o,e,t)}function Pe(e,t,i){const o=ot.getSymbolTotalCodewords(t),r=ht.getTotalCodewordsCount(t,i),n=o-r,s=ht.getBlocksCount(t,i),a=o%s,u=s-a,l=Math.floor(o/s),c=Math.floor(n/s),B=c+1,m=l-c,f=new Be(m);let y=0;const w=new Array(s),I=new Array(s);let g=0;const E=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const b=A<u?c:B;w[A]=E.slice(y,y+b),I[A]=f.encode(w[A]),y+=b,g=Math.max(g,b)}const d=new Uint8Array(o);let h=0,C,p;for(C=0;C<g;C++)for(p=0;p<s;p++)C<w[p].length&&(d[h++]=w[p][C]);for(C=0;C<m;C++)for(p=0;p<s;p++)d[h++]=I[p][C];return d}function _e(e,t,i,o){let r;if(Array.isArray(e))r=ut.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const c=ut.rawSplit(e);l=tt.getBestVersionForData(c,i)}r=ut.fromString(e,l||40)}else throw new Error("Invalid data");const n=tt.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Me(t,i,r),a=ot.getSymbolSize(t),u=new ye(a);return Ie(u,t),Ne(u),Te(u,t),ct(u,i,0),t>=7&&be(u,t),Se(u,s),isNaN(o)&&(o=dt.getBestMask(u,ct.bind(null,u,i))),dt.applyMask(o,u),ct(u,i,o),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}Tt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=at.M,r,n;return typeof i<"u"&&(o=at.from(i.errorCorrectionLevel,at.M),r=tt.from(i.version),n=dt.from(i.maskPattern),i.toSJISFunc&&ot.setToSJISFunction(i.toSJISFunc)),_e(t,r,o,n)};var Ht={},Et={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,a=r.modules.data,u=e.getScale(s,n),l=Math.floor((s+n.margin*2)*u),c=n.margin*u,B=[n.color.light,n.color.dark];for(let m=0;m<l;m++)for(let f=0;f<l;f++){let y=(m*l+f)*4,w=n.color.light;if(m>=c&&f>=c&&m<l-c&&f<l-c){const I=Math.floor((m-c)/u),g=Math.floor((f-c)/u);w=B[a[I*s+g]?1:0]}o[y++]=w.r,o[y++]=w.g,o[y++]=w.b,o[y]=w.a}}})(Et);(function(e){const t=Et;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,l=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(l=o()),u=t.getOptions(u);const c=t.getImageWidth(n.modules.size,u),B=l.getContext("2d"),m=B.createImageData(c,c);return t.qrToImageData(m.data,n,u),i(B,l,c),B.putImageData(m,0,0),l},e.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const l=e.render(n,s,u),c=u.type||"image/png",B=u.rendererOpts||{};return l.toDataURL(c,B.quality)}})(Ht);var zt={};const Re=Et;function Nt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function lt(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function ve(e,t,i){let o="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),l=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(o+=n?lt("M",u+i,.5+l+i):lt("m",r,0),r=0,n=!1),u+1<t&&e[a+1]||(o+=lt("h",s),s=0)):r++}return o}zt.render=function(t,i,o){const r=Re.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,u=r.color.light.a?"<path "+Nt(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Nt(r.color.dark,"stroke")+' d="'+ve(s,n,r.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+c+' shape-rendering="crispEdges">'+u+l+`</svg>
`;return typeof o=="function"&&o(null,m),m};const Le=$t,gt=Tt,Vt=Ht,De=zt;function Ct(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Le())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(u,l){try{const c=gt.create(i,o);u(e(c,t,o))}catch(c){l(c)}})}try{const u=gt.create(i,o);r(null,e(u,t,o))}catch(u){r(u)}}gt.create;Ct.bind(null,Vt.render);Ct.bind(null,Vt.renderToDataURL);Ct.bind(null,function(e,t,i){return De.render(e,i)});function Fe(e){let t,i,o,r,n,s,a,u,l,c,B,m,f,y,w,I,g,E,d,h;return{c(){t=V(),i=v("div"),o=v("h1"),r=$("HACKER ID"),n=V(),s=v("div"),a=v("h1"),u=$("Driver"),l=V(),c=v("h1"),B=$("License"),m=V(),f=v("canvas"),y=V(),w=v("div"),I=v("h4"),g=$("Are you ready?"),E=V(),d=v("h2"),h=$("Show to Scan"),this.h()},l(C){Yt("svelte-i9h62d",document.head).forEach(_),t=K(C),i=L(C,"DIV",{class:!0});var A=D(i);o=L(A,"H1",{class:!0});var b=D(o);r=G(b,"HACKER ID"),b.forEach(_),n=K(A),s=L(A,"DIV",{class:!0});var T=D(s);a=L(T,"H1",{class:!0});var S=D(a);u=G(S,"Driver"),S.forEach(_),l=K(T),c=L(T,"H1",{class:!0});var U=D(c);B=G(U,"License"),U.forEach(_),m=K(T),f=L(T,"CANVAS",{id:!0}),D(f).forEach(_),T.forEach(_),y=K(A),w=L(A,"DIV",{class:!0});var k=D(w);I=L(k,"H4",{class:!0});var P=D(I);g=G(P,"Are you ready?"),P.forEach(_),E=K(k),d=L(k,"H2",{class:!0});var Bt=D(d);h=G(Bt,"Show to Scan"),Bt.forEach(_),k.forEach(_),A.forEach(_),this.h()},h(){document.title="Formula Hacks | Hacker ID",F(o,"class","vertical-text svelte-161vb7i"),F(a,"class","driver-div-text svelte-161vb7i"),F(c,"class","driver-div-text red  svelte-161vb7i"),F(f,"id","qrcode"),F(s,"class","driver-div svelte-161vb7i"),F(I,"class","ready-to-scan-text-ready svelte-161vb7i"),F(d,"class","ready-to-scan-text-scan red svelte-161vb7i"),F(w,"class","ready-to-scan svelte-161vb7i"),F(i,"class","overall-container svelte-161vb7i")},m(C,p){pt(C,t,p),pt(C,i,p),N(i,o),N(o,r),N(i,n),N(i,s),N(s,a),N(a,u),N(s,l),N(s,c),N(c,B),N(s,m),N(s,f),e[2](f),N(i,y),N(i,w),N(w,I),N(I,g),N(w,E),N(w,d),N(d,h)},p:it,i:it,o:it,d(C){C&&_(t),C&&_(i),e[2](null)}}}function Ue(e,t,i){let{data:o}=t,r;function n(s){jt[s?"unshift":"push"](()=>{r=s,i(0,r)})}return e.$$set=s=>{"data"in s&&i(1,o=s.data)},[r,o,n]}class He extends Kt{constructor(t){super(),Jt(this,t,Ue,Fe,Ot,{data:1})}}export{He as component};

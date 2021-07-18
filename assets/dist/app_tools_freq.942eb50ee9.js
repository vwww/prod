(()=>{"use strict";var e,t={396:(e,t,o)=>{var n,r=o(0),s=o(7);function i(e,t){const o=function(e,t){const o=function(e,t){const{set:o,subscribe:n}=(0,s.fZ)(e,void 0);return{get:()=>e,set(t){o(e=t)},subscribe:n,update(t){o(e=t(e))}}}(t);return Object.assign(Object.assign({},o),{useLocalStorage:()=>{if(!window.localStorage)return;const t=localStorage.getItem(e);null!==t&&o.set("undefined"===t?void 0:JSON.parse(t)),o.subscribe((t=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}))}})}(e,t);return o.useLocalStorage(),o}function a(e){let t,o,n,s,i,a,c,l,d,b,g,v,T,m,p,x,L,R,G,h,$,F,y,q,j,w=(e[3]/1e3).toFixed(3)+"",D=(6e4/e[3]).toFixed(3)+"",O=(1e3/e[3]).toFixed(3)+"",C=(.001*e[3]).toFixed(3)+"";function I(e,t){return e[5]?u:f}let k=I(e),A=k(e);return{c(){t=(0,r.bG)("div"),o=(0,r.bG)("div"),n=(0,r.bG)("h2"),A.c(),s=(0,r.Dh)(),i=(0,r.bG)("div"),a=(0,r.bG)("h2"),c=(0,r.bG)("span"),l=(0,r.fL)("Last interval over "),d=(0,r.fL)(w),b=(0,r.fL)(" s"),g=(0,r.bG)("br"),v=(0,r.Dh)(),T=(0,r.bG)("span"),m=(0,r.fL)(D),p=(0,r.fL)("/min"),x=(0,r.bG)("br"),L=(0,r.Dh)(),R=(0,r.bG)("span"),G=(0,r.fL)(O),h=(0,r.fL)("/s"),$=(0,r.bG)("br"),F=(0,r.Dh)(),y=(0,r.bG)("span"),q=(0,r.fL)(C),j=(0,r.fL)(" s/event"),(0,r.Lj)(n,"class","result svelte-vdqeq1"),(0,r.Lj)(o,"class","col-12 col-md-6"),(0,r.Lj)(a,"class","result svelte-vdqeq1"),(0,r.Lj)(i,"class","col-12 col-md-6"),(0,r.Lj)(t,"class","row")},m(e,f){(0,r.$T)(e,t,f),(0,r.R3)(t,o),(0,r.R3)(o,n),A.m(n,null),(0,r.R3)(t,s),(0,r.R3)(t,i),(0,r.R3)(i,a),(0,r.R3)(a,c),(0,r.R3)(c,l),(0,r.R3)(c,d),(0,r.R3)(c,b),(0,r.R3)(a,g),(0,r.R3)(a,v),(0,r.R3)(a,T),(0,r.R3)(T,m),(0,r.R3)(a,p),(0,r.R3)(a,x),(0,r.R3)(a,L),(0,r.R3)(a,R),(0,r.R3)(R,G),(0,r.R3)(a,h),(0,r.R3)(a,$),(0,r.R3)(a,F),(0,r.R3)(a,y),(0,r.R3)(y,q),(0,r.R3)(y,j)},p(e,t){k===(k=I(e))&&A?A.p(e,t):(A.d(1),A=k(e),A&&(A.c(),A.m(n,null))),8&t&&w!==(w=(e[3]/1e3).toFixed(3)+"")&&(0,r.rT)(d,w),8&t&&D!==(D=(6e4/e[3]).toFixed(3)+"")&&(0,r.rT)(m,D),8&t&&O!==(O=(1e3/e[3]).toFixed(3)+"")&&(0,r.rT)(G,O),8&t&&C!==(C=(.001*e[3]).toFixed(3)+"")&&(0,r.rT)(q,C)},d(e){e&&(0,r.og)(t),A.d()}}}function c(e){let t;return{c(){t=(0,r.bG)("h2"),t.textContent="Add another event!"},m(e,o){(0,r.$T)(e,t,o)},p:r.ZT,d(e){e&&(0,r.og)(t)}}}function l(e){let t;return{c(){t=(0,r.bG)("h2"),t.textContent="Add two events!"},m(e,o){(0,r.$T)(e,t,o)},p:r.ZT,d(e){e&&(0,r.og)(t)}}}function f(e){let t,o,n,s,i,a,c,l,f,u,d,b,g,v,T,m,p,x,L,R,G,h=(1e3*e[0]/e[2]).toFixed(3)+"",$=1===e[0]?"":"s",F=(6e4*e[4]).toFixed(3)+"",y=(1e3*e[4]).toFixed(3)+"",q=(.001/e[4]).toFixed(3)+"";return{c(){t=(0,r.bG)("span"),o=(0,r.fL)(h),n=(0,r.fL)("/s over "),s=(0,r.fL)(e[0]),i=(0,r.fL)(" interval"),a=(0,r.fL)($),c=(0,r.bG)("br"),l=(0,r.Dh)(),f=(0,r.bG)("span"),u=(0,r.fL)(F),d=(0,r.fL)("/min"),b=(0,r.bG)("br"),g=(0,r.Dh)(),v=(0,r.bG)("span"),T=(0,r.fL)(y),m=(0,r.fL)("/s"),p=(0,r.bG)("br"),x=(0,r.Dh)(),L=(0,r.bG)("span"),R=(0,r.fL)(q),G=(0,r.fL)(" s/event")},m(e,h){(0,r.$T)(e,t,h),(0,r.R3)(t,o),(0,r.R3)(t,n),(0,r.R3)(t,s),(0,r.R3)(t,i),(0,r.R3)(t,a),(0,r.$T)(e,c,h),(0,r.$T)(e,l,h),(0,r.$T)(e,f,h),(0,r.R3)(f,u),(0,r.$T)(e,d,h),(0,r.$T)(e,b,h),(0,r.$T)(e,g,h),(0,r.$T)(e,v,h),(0,r.R3)(v,T),(0,r.$T)(e,m,h),(0,r.$T)(e,p,h),(0,r.$T)(e,x,h),(0,r.$T)(e,L,h),(0,r.R3)(L,R),(0,r.R3)(L,G)},p(e,t){5&t&&h!==(h=(1e3*e[0]/e[2]).toFixed(3)+"")&&(0,r.rT)(o,h),1&t&&(0,r.rT)(s,e[0]),1&t&&$!==($=1===e[0]?"":"s")&&(0,r.rT)(a,$),16&t&&F!==(F=(6e4*e[4]).toFixed(3)+"")&&(0,r.rT)(u,F),16&t&&y!==(y=(1e3*e[4]).toFixed(3)+"")&&(0,r.rT)(T,y),16&t&&q!==(q=(.001/e[4]).toFixed(3)+"")&&(0,r.rT)(R,q)},d(e){e&&(0,r.og)(t),e&&(0,r.og)(c),e&&(0,r.og)(l),e&&(0,r.og)(f),e&&(0,r.og)(d),e&&(0,r.og)(b),e&&(0,r.og)(g),e&&(0,r.og)(v),e&&(0,r.og)(m),e&&(0,r.og)(p),e&&(0,r.og)(x),e&&(0,r.og)(L)}}}function u(e){let t,o,n,s,i,a,c,l,f,u,d,b,g,v,T,m,p,x,L,R,G,h,$=1===e[0]?"":"s",F=(e[1]/1e3).toFixed(3)+"",y=(6e4/e[2]).toFixed(3)+"",q=(1e3/e[2]).toFixed(3)+"",j=(.001*e[2]).toFixed(3)+"";return{c(){t=(0,r.bG)("span"),o=(0,r.fL)(e[0]),n=(0,r.fL)(" interval"),s=(0,r.fL)($),i=(0,r.fL)(" over "),a=(0,r.fL)(F),c=(0,r.fL)(" s"),l=(0,r.bG)("br"),f=(0,r.Dh)(),u=(0,r.bG)("span"),d=(0,r.fL)(y),b=(0,r.fL)("/min"),g=(0,r.bG)("br"),v=(0,r.Dh)(),T=(0,r.bG)("span"),m=(0,r.fL)(q),p=(0,r.fL)("/s"),x=(0,r.bG)("br"),L=(0,r.Dh)(),R=(0,r.bG)("span"),G=(0,r.fL)(j),h=(0,r.fL)(" s/event")},m(e,$){(0,r.$T)(e,t,$),(0,r.R3)(t,o),(0,r.R3)(t,n),(0,r.R3)(t,s),(0,r.R3)(t,i),(0,r.R3)(t,a),(0,r.R3)(t,c),(0,r.$T)(e,l,$),(0,r.$T)(e,f,$),(0,r.$T)(e,u,$),(0,r.R3)(u,d),(0,r.$T)(e,b,$),(0,r.$T)(e,g,$),(0,r.$T)(e,v,$),(0,r.$T)(e,T,$),(0,r.R3)(T,m),(0,r.$T)(e,p,$),(0,r.$T)(e,x,$),(0,r.$T)(e,L,$),(0,r.$T)(e,R,$),(0,r.R3)(R,G),(0,r.R3)(R,h)},p(e,t){1&t&&(0,r.rT)(o,e[0]),1&t&&$!==($=1===e[0]?"":"s")&&(0,r.rT)(s,$),2&t&&F!==(F=(e[1]/1e3).toFixed(3)+"")&&(0,r.rT)(a,F),4&t&&y!==(y=(6e4/e[2]).toFixed(3)+"")&&(0,r.rT)(d,y),4&t&&q!==(q=(1e3/e[2]).toFixed(3)+"")&&(0,r.rT)(m,q),4&t&&j!==(j=(.001*e[2]).toFixed(3)+"")&&(0,r.rT)(G,j)},d(e){e&&(0,r.og)(t),e&&(0,r.og)(l),e&&(0,r.og)(f),e&&(0,r.og)(u),e&&(0,r.og)(b),e&&(0,r.og)(g),e&&(0,r.og)(v),e&&(0,r.og)(T),e&&(0,r.og)(p),e&&(0,r.og)(x),e&&(0,r.og)(L),e&&(0,r.og)(R)}}}function d(e){let t;return{c(){t=(0,r.bG)("p"),t.textContent="Average frequency shown = (sum of frequency) / count; average time = 1/(average frequency)"},m(e,o){(0,r.$T)(e,t,o)},d(e){e&&(0,r.og)(t)}}}function b(e){let t;return{c(){t=(0,r.bG)("p"),t.textContent="Average time shown = (sum of time) / count; average frequency = 1/(average time)"},m(e,o){(0,r.$T)(e,t,o)},d(e){e&&(0,r.og)(t)}}}function g(e){let t,o,n,s,i,f,u,g,v,T,m,p,x,L,R,G,h;function $(e,t){return e[0]<0?l:e[0]?a:c}let F=$(e),y=F(e);function q(e,t){return e[5]?b:d}let j=q(e),w=j(e);return{c(){t=(0,r.bG)("div"),o=(0,r.bG)("button"),o.textContent="Add Event",n=(0,r.Dh)(),s=(0,r.bG)("button"),s.textContent="Reset",i=(0,r.Dh)(),f=(0,r.bG)("div"),u=(0,r.bG)("span"),u.textContent="Average by",g=(0,r.Dh)(),v=(0,r.bG)("button"),v.textContent="Time",T=(0,r.Dh)(),m=(0,r.bG)("button"),m.textContent="Frequency",p=(0,r.Dh)(),y.c(),x=(0,r.Dh)(),w.c(),L=(0,r.Dh)(),R=(0,r.bG)("p"),R.textContent="Averaging time (frequency = 1/(average time)) and averaging frequency (time = 1/(average frequency)) are related by harmonic means.",(0,r.Lj)(o,"class","btn btn-outline-primary"),(0,r.Lj)(s,"class","btn btn-outline-secondary"),(0,r.Lj)(t,"class","btn-group d-flex mb-3"),(0,r.Lj)(t,"role","group"),(0,r.Lj)(u,"class","input-group-text"),(0,r.Lj)(v,"class","w-100 btn btn-outline-primary"),(0,r.VH)(v,"active",e[5]),(0,r.Lj)(m,"class","w-50 btn btn-outline-secondary"),(0,r.VH)(m,"active",!e[5]),(0,r.Lj)(f,"class","btn-group d-flex mb-3"),(0,r.Lj)(f,"role","group")},m(a,c){(0,r.$T)(a,t,c),(0,r.R3)(t,o),(0,r.R3)(t,n),(0,r.R3)(t,s),(0,r.$T)(a,i,c),(0,r.$T)(a,f,c),(0,r.R3)(f,u),(0,r.R3)(f,g),(0,r.R3)(f,v),(0,r.R3)(f,T),(0,r.R3)(f,m),(0,r.$T)(a,p,c),y.m(a,c),(0,r.$T)(a,x,c),w.m(a,c),(0,r.$T)(a,L,c),(0,r.$T)(a,R,c),G||(h=[(0,r.oL)(o,"click",e[14]),(0,r.oL)(s,"click",e[15]),(0,r.oL)(v,"click",e[16]),(0,r.oL)(m,"click",e[17])],G=!0)},p(e,[t]){32&t&&(0,r.VH)(v,"active",e[5]),32&t&&(0,r.VH)(m,"active",!e[5]),F===(F=$(e))&&y?y.p(e,t):(y.d(1),y=F(e),y&&(y.c(),y.m(x.parentNode,x))),j!==(j=q(e))&&(w.d(1),w=j(e),w&&(w.c(),w.m(L.parentNode,L)))},i:r.ZT,o:r.ZT,d(e){e&&(0,r.og)(t),e&&(0,r.og)(i),e&&(0,r.og)(f),e&&(0,r.og)(p),y.d(e),e&&(0,r.og)(x),w.d(e),e&&(0,r.og)(L),e&&(0,r.og)(R),G=!1,(0,r.j7)(h)}}}function v(e,t,o){let n,s,a,c,l,f,u,d;const b=i("tool/freq/avgByTime",!0);(0,r.FI)(e,b,(e=>o(5,d=e)));const g=i("tool/freq/intervalCount",-1);(0,r.FI)(e,g,(e=>o(0,n=e)));const v=i("tool/freq/startTime",0);(0,r.FI)(e,v,(e=>o(18,a=e)));const T=i("tool/freq/lastTime",0);(0,r.FI)(e,T,(e=>o(19,f=e)));const m=i("tool/freq/lastDelay",0);(0,r.FI)(e,m,(e=>o(3,l=e)));const p=i("tool/freq/eventTime",0);(0,r.FI)(e,p,(e=>o(1,s=e)));const x=i("tool/freq/eventAvgTime",0);(0,r.FI)(e,x,(e=>o(2,c=e)));const L=i("tool/freq/eventAvgFreq",0);return(0,r.FI)(e,L,(e=>o(4,u=e))),[n,s,c,l,u,d,b,g,v,T,m,p,x,L,function(){if((0,r.fx)(g,++n,n)){const e=Date.now();(0,r.fx)(p,s=e-a,s),(0,r.fx)(x,c=s/n,c),(0,r.fx)(m,l=e-f,l),(0,r.fx)(L,u+=(1/l-u)/n,u),(0,r.fx)(T,f=e,f)}else(0,r.fx)(v,a=(0,r.fx)(T,f=Date.now(),f),a)},function(){(0,r.fx)(g,n=-1,n)},()=>(0,r.fx)(b,d=!0,d),()=>(0,r.fx)(b,d=!1,d)]}class T extends r.f_{constructor(e){var t;super(),document.getElementById("svelte-vdqeq1-style")||((t=(0,r.bG)("style")).id="svelte-vdqeq1-style",t.textContent=".result.svelte-vdqeq1{font-family:monospace }",(0,r.R3)(document.head,t)),(0,r.S1)(this,e,v,g,r.N8,{})}}new T({target:document.getElementById("app")}),null===(n=document.getElementById("appLoading"))||void 0===n||n.remove()}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,o,r,s)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,r,s]=e[l],a=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(a=!1,s<i&&(i=s));a&&(e.splice(l--,1),t=r())}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,r,s]},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={32:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,s,[i,a,c]=o,l=0;for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var f=c(n);for(t&&t(o);l<i.length;l++)s=i[l],n.o(e,s)&&e[s]&&e[s][0](),e[i[l]]=0;return n.O(f)},o=self.webpackChunkvwww=self.webpackChunkvwww||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[96],(()=>n(396)));r=n.O(r)})();
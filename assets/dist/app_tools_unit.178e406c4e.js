(()=>{"use strict";var e,t={400:(e,t,n)=>{var o=n(0);const r={Angles:{Degree:[[1e3/360],"&deg;"],Arcminute:[[1e3/360/60],"&prime;"],Arcsecond:[[1e3/360/60/60],"&Prime;"],Gradian:[[2.5],"gon"],Radian:[[500*Math.PI],"rad"]},Area:{"US Acre":[[40468564.224],"ac"],Hectare:[[1e8],"ha"],"sq cm":[[1],"cm&sup2;"],"sq ft":[[929.0304],"ft&sup2;"],"sq in":[[6.4516],"in&sup2;"],"sq km":[[1e10],"km&sup2;"],"sq m":[[1e4],"m&sup2;"],"sq mile":[[25899881103.36],"mi&sup2;"],"sq mm":[[.01],"mm&sup2;"],"sq yd":[[8361.2736],"yd&sup2;"]},"Distance/Length":{Centimeter:[[1],"cm"],Inch:[[2.54],'"'],"Feet-Inch":[[2.54],'"',12,"'"],Angstrom:[[1e-8],"&Aring;"],Chain:[[2011.68],"chain"],Fathom:[[182.88],"ftm"],Feet:[[30.48],"ft"],Hand:[[10.16],""],Kilometer:[[1e5],"km"],Link:[[20.1168],"lnk."],Meter:[[100],"m"],Micron:[[1e-4],"&micro;m"],Mile:[[160934.4],"mi"],Millimeter:[[.1],"mm"],Nanometer:[[1e-7],"nm"],"Nautical Mile":[[185200],"nmi"],PICA:[[.42175176],"pc"],Rod:[[502.92],"rod"],Span:[[22.86],"span"],Yard:[[91.44],"yd"]},Energy:{"British Thermal Unit":[[1055.056],"Btu"],"IST Calorie":[[4.1868],"cal"],"Electon Volt":[[160217653e-27],"eV"],"Foot Pound":[[1.3558179483314],"ft&middot;lb"],Joule:[[1],"J"],Kilocalorie:[[4186.8],"kcal"],Kilojoule:[[1e3],"KJ"],"Kilowatt hour":[[36e5],"kWh"]},Mass:{Carat:[[2e-4],"CD"],Centigram:[[1e-5],"cg"],Decigram:[[1e-4],"dg"],Dekagram:[[.01],"dag"],Gram:[[.001],"g"],Hectogram:[[.1],"hg"],Kilogram:[[1],"kg"],"Long Ton":[[1016.0469088],"lg tn"],Milligram:[[1e-6],"mg"],Ounce:[[.028349523125],"oz"],Pound:[[.45359237],"lb"],"Short Ton":[[907.18474],"sh tn"],Stone:[[6.35029318],"st"],Tonne:[[1e3],"t"]},Power:{"BTU/Minute":[[17.5842642],"BTU/min"],"Foot-Pound/Minute":[[.0225969658055233],"ft&middot;lb/min"],Horsepower:[[745.6998715822702],"hp"],Kilowatt:[[1e3],"kW"],Watt:[[1],"W"]},Pressure:{Atmosphere:[[101325],"atm"],Bar:[[1e5],"bar"],Kilopascal:[[1e3],"kPa"],"Torr/mmHg":[[133.322387415],"mmHg"],Pascal:[[1],"Pa"],PSI:[[6894.757],"psi"]},"Speed/Velocity":{"cm/s":[[.01],"cm/s"],"ft/s":[[.3048],"ft/s"],"km/h":[[.2777777777777778],"km/h"],Knot:[[.5144444444444444],"Knot"],Mach:[[340.2933],"Ma"],"m/s":[[1],"m/s"],mph:[[.44704],"mi/h"]},Temperature:{Celsius:[[9,2458.35],"&deg;C"],Farenheit:[[5,2298.35],"&deg;F"],Kelvin:[[9],"&deg;K"]},Time:{Day:[[86400],"D"],Hour:[[3600],"H"],Microsecond:[[1e-6],"&micro;s"],Millisecond:[[.001],"ms"],Minute:[[60],"m"],Second:[[1],"s"],Week:[[604800],"W"]},Times:{"Week-Day":[[86400],"D",7,"W"],"Day-Hour":[[3600],"H",24,"D"],"Hour-Minute":[[60],"m",60,"H"],"Hour-Second":[[1],"s",3600,"H"],"Minute-Second":[[1],"s",60,"m"],Second:[[1],"s"]},Volume:{"Cubic cm":[[.001],"cm<sup>3</sup>"],"Cubic feet":[[28.316846592],"ft<sup>3</sup>"],"Cubic inch":[[.016387064],"in<sup>3</sup>"],"Cubic meter":[[1e3],"m<sup>3</sup>"],"Cubic yard":[[764.554857984],"yd<sup>3</sup>"],"Fluid Ounce (UK)":[[.0284130625],"UK oz fl"],"Fluid Ounce (US)":[[.0295735295625],"US oz fl"],"Gallon (UK)":[[4.54609],"UK gal"],"Gallon (US)":[[3.785411784],"US gal"],Liter:[[1],"L"],"Pint (UK)":[[.56826125],"UK pt"],"Pint (US)":[[.473176473],"US pt"],"Quart (UK)":[[1.1365225],"UK qt"],"Quart (US)":[[.946352946],"US qt"]}};function l(e,t,n){const o=e.slice();return o[19]=t[n],o}function i(e,t,n){const o=e.slice();return o[19]=t[n],o}function s(e,t,n){const o=e.slice();return o[24]=t[n],o}function c(e){let t,n,r,l=e[24]+"";return{c(){t=(0,o.bG)("option"),n=(0,o.fL)(l),t.__value=r=e[24],t.value=t.__value},m(e,r){(0,o.$T)(e,t,r),(0,o.R3)(t,n)},p:o.ZT,d(e){e&&(0,o.og)(t)}}}function a(e){let t,n,r,l=e[19]+"";return{c(){t=(0,o.bG)("option"),n=(0,o.fL)(l),t.__value=r=e[19],t.value=t.__value},m(e,r){(0,o.$T)(e,t,r),(0,o.R3)(t,n)},p(e,i){1&i&&l!==(l=e[19]+"")&&(0,o.rT)(n,l),1&i&&r!==(r=e[19])&&(t.__value=r,t.value=t.__value)},d(e){e&&(0,o.og)(t)}}}function u(e){let t,n,r,l=e[19]+"";return{c(){t=(0,o.bG)("option"),n=(0,o.fL)(l),t.__value=r=e[19],t.value=t.__value,(0,o.VH)(t,"d-none",e[19]==e[1])},m(e,r){(0,o.$T)(e,t,r),(0,o.R3)(t,n)},p(e,i){1&i&&l!==(l=e[19]+"")&&(0,o.rT)(n,l),1&i&&r!==(r=e[19])&&(t.__value=r,t.value=t.__value),3&i&&(0,o.VH)(t,"d-none",e[19]==e[1])},d(e){e&&(0,o.og)(t)}}}function m(e){let t,n,m,h,d,p,g,v,b,L,R,j,M,T,y,k,G,O,S,H,D,_,K,P,U,w,x,C,A,F,W,$,B,q,E,I,V,z,N,J,Z,Q,Y,X,ee,te,ne,oe=(e[7]?.[e[7]?.[2]?3:1]??"units")+"",re=(e[7]?.[1]??"")+"",le=e[11](e[7],e[8],e[3],e[4],0)+"",ie=e[11](e[7],e[8],e[3],e[4],1)+"",se=1==e[5]?"":"s",ce=e[11](e[7],e[8],e[3],e[4],2)+"",ae=1==e[6]?"":"s",ue=Object.keys(r),me=[];for(let t=0;t<ue.length;t+=1)me[t]=c(s(e,ue,t));let fe=f(r[e[0]]),he=[];for(let t=0;t<fe.length;t+=1)he[t]=a(i(e,fe,t));let de=f(r[e[0]]),pe=[];for(let t=0;t<de.length;t+=1)pe[t]=u(l(e,de,t));return{c(){t=(0,o.bG)("div"),n=(0,o.bG)("div"),m=(0,o.bG)("p"),m.textContent="Type",h=(0,o.Dh)(),d=(0,o.bG)("select");for(let e=0;e<me.length;e+=1)me[e].c();p=(0,o.Dh)(),g=(0,o.bG)("div"),v=(0,o.bG)("p"),v.textContent="From",b=(0,o.Dh)(),L=(0,o.bG)("select");for(let e=0;e<he.length;e+=1)he[e].c();R=(0,o.Dh)(),j=(0,o.bG)("div"),M=(0,o.bG)("p"),M.textContent="To",T=(0,o.Dh)(),y=(0,o.bG)("select");for(let e=0;e<pe.length;e+=1)pe[e].c();k=(0,o.Dh)(),G=(0,o.bG)("div"),O=(0,o.bG)("div"),S=(0,o.bG)("input"),H=(0,o.Dh)(),D=(0,o.bG)("span"),_=(0,o.Dh)(),K=(0,o.bG)("div"),P=(0,o.bG)("input"),U=(0,o.Dh)(),w=(0,o.bG)("span"),x=(0,o.Dh)(),C=(0,o.bG)("div"),A=(0,o.bG)("p"),F=(0,o.Dh)(),W=(0,o.bG)("p"),$=new o.FW,B=(0,o.fL)(" ("),q=(0,o.fL)(e[5]),E=(0,o.fL)(" significant figure"),I=(0,o.fL)(se),V=(0,o.fL)(")"),z=(0,o.Dh)(),N=(0,o.bG)("p"),J=new o.FW,Z=(0,o.fL)(" ("),Q=(0,o.fL)(e[6]),Y=(0,o.fL)(" decimal"),X=(0,o.fL)(ae),ee=(0,o.fL)(")"),(0,o.Lj)(d,"class","form-select"),(0,o.Lj)(d,"size","12"),void 0===e[0]&&(0,o.P$)((()=>e[14].call(d))),(0,o.Lj)(n,"class","col-sm-4 mb-2"),(0,o.Lj)(L,"class","form-select"),(0,o.Lj)(L,"size","12"),void 0===e[1]&&(0,o.P$)((()=>e[15].call(L))),(0,o.Lj)(g,"class","col-sm-4 mb-2"),(0,o.Lj)(y,"class","form-select"),(0,o.Lj)(y,"size","12"),void 0===e[2]&&(0,o.P$)((()=>e[16].call(y))),(0,o.Lj)(j,"class","col-sm-4 mb-2"),(0,o.Lj)(S,"type","text"),(0,o.Lj)(S,"class","form-control"),(0,o.Lj)(D,"class","input-group-text"),(0,o.Lj)(O,"class","input-group"),(0,o.Lj)(P,"type","text"),(0,o.Lj)(P,"class","form-control"),(0,o.Lj)(w,"class","input-group-text"),(0,o.Lj)(K,"class","input-group"),(0,o.VH)(K,"d-none",!e[7]?.[2]),(0,o.Lj)(G,"class","col-sm-6 mb-2"),$.a=B,J.a=Z,(0,o.Lj)(C,"class","col-sm-6"),(0,o.Lj)(t,"class","row")},m(r,l){(0,o.$T)(r,t,l),(0,o.R3)(t,n),(0,o.R3)(n,m),(0,o.R3)(n,h),(0,o.R3)(n,d);for(let e=0;e<me.length;e+=1)me[e].m(d,null);(0,o.oW)(d,e[0]),(0,o.R3)(t,p),(0,o.R3)(t,g),(0,o.R3)(g,v),(0,o.R3)(g,b),(0,o.R3)(g,L);for(let e=0;e<he.length;e+=1)he[e].m(L,null);(0,o.oW)(L,e[1]),(0,o.R3)(t,R),(0,o.R3)(t,j),(0,o.R3)(j,M),(0,o.R3)(j,T),(0,o.R3)(j,y);for(let e=0;e<pe.length;e+=1)pe[e].m(y,null);(0,o.oW)(y,e[2]),(0,o.R3)(t,k),(0,o.R3)(t,G),(0,o.R3)(G,O),(0,o.R3)(O,S),(0,o.Bm)(S,e[3]),(0,o.R3)(O,H),(0,o.R3)(O,D),D.innerHTML=oe,(0,o.R3)(G,_),(0,o.R3)(G,K),(0,o.R3)(K,P),(0,o.Bm)(P,e[4]),(0,o.R3)(K,U),(0,o.R3)(K,w),w.innerHTML=re,(0,o.R3)(t,x),(0,o.R3)(t,C),(0,o.R3)(C,A),A.innerHTML=le,(0,o.R3)(C,F),(0,o.R3)(C,W),$.m(ie,W),(0,o.R3)(W,B),(0,o.R3)(W,q),(0,o.R3)(W,E),(0,o.R3)(W,I),(0,o.R3)(W,V),(0,o.R3)(C,z),(0,o.R3)(C,N),J.m(ce,N),(0,o.R3)(N,Z),(0,o.R3)(N,Q),(0,o.R3)(N,Y),(0,o.R3)(N,X),(0,o.R3)(N,ee),te||(ne=[(0,o.oL)(d,"change",e[14]),(0,o.oL)(d,"change",e[9]),(0,o.oL)(L,"change",e[15]),(0,o.oL)(L,"change",e[10]),(0,o.oL)(y,"change",e[16]),(0,o.oL)(S,"input",e[17]),(0,o.oL)(P,"input",e[18])],te=!0)},p(e,[t]){if(0&t){let n;for(ue=Object.keys(r),n=0;n<ue.length;n+=1){const o=s(e,ue,n);me[n]?me[n].p(o,t):(me[n]=c(o),me[n].c(),me[n].m(d,null))}for(;n<me.length;n+=1)me[n].d(1);me.length=ue.length}if(1&t&&(0,o.oW)(d,e[0]),1&t){let n;for(fe=f(r[e[0]]),n=0;n<fe.length;n+=1){const o=i(e,fe,n);he[n]?he[n].p(o,t):(he[n]=a(o),he[n].c(),he[n].m(L,null))}for(;n<he.length;n+=1)he[n].d(1);he.length=fe.length}if(3&t&&(0,o.oW)(L,e[1]),3&t){let n;for(de=f(r[e[0]]),n=0;n<de.length;n+=1){const o=l(e,de,n);pe[n]?pe[n].p(o,t):(pe[n]=u(o),pe[n].c(),pe[n].m(y,null))}for(;n<pe.length;n+=1)pe[n].d(1);pe.length=de.length}5&t&&(0,o.oW)(y,e[2]),8&t&&S.value!==e[3]&&(0,o.Bm)(S,e[3]),128&t&&oe!==(oe=(e[7]?.[e[7]?.[2]?3:1]??"units")+"")&&(D.innerHTML=oe),16&t&&P.value!==e[4]&&(0,o.Bm)(P,e[4]),128&t&&re!==(re=(e[7]?.[1]??"")+"")&&(w.innerHTML=re),128&t&&(0,o.VH)(K,"d-none",!e[7]?.[2]),408&t&&le!==(le=e[11](e[7],e[8],e[3],e[4],0)+"")&&(A.innerHTML=le),408&t&&ie!==(ie=e[11](e[7],e[8],e[3],e[4],1)+"")&&$.p(ie),32&t&&(0,o.rT)(q,e[5]),32&t&&se!==(se=1==e[5]?"":"s")&&(0,o.rT)(I,se),408&t&&ce!==(ce=e[11](e[7],e[8],e[3],e[4],2)+"")&&J.p(ce),64&t&&(0,o.rT)(Q,e[6]),64&t&&ae!==(ae=1==e[6]?"":"s")&&(0,o.rT)(X,ae)},i:o.ZT,o:o.ZT,d(e){e&&(0,o.og)(t),(0,o.RM)(me,e),(0,o.RM)(he,e),(0,o.RM)(pe,e),te=!1,(0,o.j7)(ne)}}}function f(e){return e?Object.keys(e):[]}function h(e){let t=e.length;(function(e){return e.includes("e")||e.includes("E")})(e)&&(e.indexOf("e")>0?t=e.indexOf("e"):e.indexOf("E")>0&&(t=e.indexOf("E")));for(let n=0;n<e.length&&("0"===e.charAt(n)||"+"===e.charAt(n)||"-"===e.charAt(n)||"."===e.charAt(n));n++)"."!==e.charAt(n)&&--t;return function(e){return e.includes(".")}(e)&&--t,t}function d(e){const t=e+"";return t.includes(".")?t.split(".")[1].length:0}function p(e,t,n){switch(t){case 1:return function(e,t){if(0===e)return"0";if(t<0||(0|e)===e)return e.toString();if(h(e+"")>t&&t>=1&&t<=21)return e.toPrecision(t);const n=Math.round(-Math.log(Math.abs(e))/Math.LN10+(t||2));return e.toFixed(Math.max(n,0))}(e,n);case 2:return e.toFixed(n)}return e.toString()}function g(e,t,n){let l,i;var s,c;let a=Object.keys(r)[0],u=Object.keys(r[a])[0],m=Object.keys(r[a])[1],f="1337.1",g="0",v=0,b=0;return e.$$.update=()=>{4099&e.$$.dirty&&n(7,l=null===n(12,s=r[a])||void 0===s?void 0:s[u]),8197&e.$$.dirty&&n(8,i=null===n(13,c=r[a])||void 0===c?void 0:c[m])},[a,u,m,f,g,v,b,l,i,function(){const e=Object.keys(r[a]);n(1,u=e[0]),n(2,m=e[1])},function(){const e=Object.keys(r[a]);n(2,m=e[u===e[0]?1:0])},function(e,t,o,r,l){if(!e||!t)return"[no unit selected]";let i,s,c=-1;switch(l){case 1:c=h(o),e[2]&&(c=Math.min(c,h(r))),n(5,v=c);break;case 2:c=d(o),e[2]&&(c=Math.min(c,d(r))),n(6,b=c)}return i=e[2]?e[0][0]*e[2]*parseFloat(o)+e[0][0]*parseFloat(r):e[0][0]*parseFloat(o),e[0][1]&&(i+=e[0][1]),t[0][1]&&(i-=t[0][1]),i/=t[0][0],s=t[2]?Math.floor(i/t[2])+" "+t[3]+" "+p(i%t[2],l,c):p(i,l,c),s+" "+t[1]},s,c,function(){a=(0,o.SA)(this),n(0,a)},function(){u=(0,o.SA)(this),n(1,u),n(0,a)},function(){m=(0,o.SA)(this),n(2,m),n(0,a)},function(){f=this.value,n(3,f)},function(){g=this.value,n(4,g)}]}class v extends o.f_{constructor(e){super(),(0,o.S1)(this,e,g,m,o.N8,{})}}var b;new v({target:document.getElementById("app")}),null===(b=document.getElementById("appLoading"))||void 0===b||b.remove()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,n,r,l)=>{if(!n){var i=1/0;for(a=0;a<e.length;a++){for(var[n,r,l]=e[a],s=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,l<i&&(i=l));s&&(e.splice(a--,1),t=r())}return t}l=l||0;for(var a=e.length;a>0&&e[a-1][2]>l;a--)e[a]=e[a-1];e[a]=[n,r,l]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={36:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[i,s,c]=n,a=0;for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o);for(t&&t(n);a<i.length;a++)l=i[a],o.o(e,l)&&e[l]&&e[l][0](),e[i[a]]=0;return o.O(u)},n=self.webpackChunkvwww=self.webpackChunkvwww||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[100],(()=>o(400)));r=o.O(r)})();
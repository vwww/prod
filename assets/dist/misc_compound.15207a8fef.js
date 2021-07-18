(()=>{"use strict";var t,e={407:(t,e,o)=>{var r=o(15),n=o(177),a=o(182);let l;function i(){var t,e,o;const n=Date.parse(r("#startDate").val()+""),a=n+3156e7*+(null!==(t=r("#terms").val())&&void 0!==t?t:0),i=+(null!==(e=r("#principal").val())&&void 0!==e?e:0),s=1+ +(null!==(o=r("#interest").val())&&void 0!==o?o:0)/100;let p=n,u=i;const c=[[n,i]];for(;p<a;)p+=Math.max(18e5,3156e7*Math.log(1+.01/u)/Math.log(s)),p>a&&(p=a),u=i*Math.pow(s,(p-n)/3156e7),c.push([p,u]);l.setData(c)}function s(){i()}o.n(a)()(n),r((function(){r("#plotDataButton").on("click",s);const t=n.getOptions().colors,e={title:{text:"Compound Interest Graph"},yAxis:{type:"logarithmic"},rangeSelector:{buttons:[{type:"hour",count:1,text:"1h"},{type:"day",count:1,text:"1d"},{type:"week",count:1,text:"1w"},{type:"week",count:2,text:"2w"},{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],selected:9,inputEnabled:!1},series:[{name:"Value",type:"area",tooltip:{valueDecimals:2},fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,t[0]],[1,new n.Color(t[0]).setOpacity(0).get("rgba")]]},threshold:null},{type:"flags",onSeries:"dataseries",shape:"circlepin",width:16,data:[{x:Date.now(),title:"!",text:"Now"}]}]};n.stockChart("container",e,(t=>{l=t.series[0],i(),window.setInterval((function(){t.series[1].data[0].update({x:Date.now()})}),1e3)}))}))}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,t=[],r.O=(e,o,n,a)=>{if(!o){var l=1/0;for(p=0;p<t.length;p++){for(var[o,n,a]=t[p],i=!0,s=0;s<o.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((t=>r.O[t](o[s])))?o.splice(s--,1):(i=!1,a<l&&(l=a));i&&(t.splice(p--,1),e=n())}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[o,n,a]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={70:0};r.O.j=e=>0===t[e];var e=(e,o)=>{var n,a,[l,i,s]=o,p=0;for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var u=s(r);for(e&&e(o);p<l.length;p++)a=l[p],r.o(t,a)&&t[a]&&t[a][0](),t[l[p]]=0;return r.O(u)},o=self.webpackChunkvwww=self.webpackChunkvwww||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var n=r.O(void 0,[1,102],(()=>r(407)));n=r.O(n)})();
import{b as a}from"./p-add1e9ec.js";import{b as n,a as e,c as s,d as o,e as t,f as i,g as r,h as l,i as c,j as m,k as u,l as b,m as w,n as f,o as d,p as I,q as p}from"./p-55865e45.js";const T=n=>{a.hasWindow&&"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)},_=(a=0)=>new Promise((n=>{setTimeout((()=>n()),a)})),y=(a,n)=>{const e=a._original||a;return{_original:a,emit:P(e.emit.bind(e),n)}},P=(a,n=0)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(a,n,...s)}},v=(a,n)=>a&&a.tagName&&a.tagName===n.toUpperCase(),C=(a,n)=>{let e=n.parentNode;for(;null!=e;){if(e==a)return!0;e=e.parentNode}return!1},h=(a,n)=>{let e=n.parentNode;for(;null!=e;){if(e.tagName===a.toUpperCase())return!0;e=e.parentNode}return!1},k=a=>a.querySelector("bal-app")||a.body,q=(a,n)=>{null!=a.componentOnReady?a.componentOnReady().then((a=>n(a))):A((()=>n(a)))},A=a=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(a):"function"==typeof requestAnimationFrame?requestAnimationFrame(a):setTimeout(a),g=(a,n=0)=>new Promise((e=>{j(a,n,e)})),j=(a,n=0,e)=>{let s,o;const t={passive:!0},i=()=>{s&&s()},r=n=>{void 0!==n&&a!==n.target||(i(),e(n))};return a&&(a.addEventListener("webkitTransitionEnd",r,t),a.addEventListener("transitionend",r,t),o=setTimeout(r,n+500),s=()=>{o&&(clearTimeout(o),o=void 0),a.removeEventListener("webkitTransitionEnd",r,t),a.removeEventListener("transitionend",r,t)}),i},D=(a,n,e,s)=>a.addEventListener(n,e,s),F=(a,n,e,s)=>a.removeEventListener(n,e,s),G=a=>a?new Promise((n=>q(a,n))):Promise.resolve(),N=async(a,n=!1)=>{const e=a;if(e){if(null!=e.componentOnReady){const a=await e.componentOnReady();if(!n&&null!=a)return}await Promise.all(Array.from(e.children).map((a=>N(a,n))))}},E=async a=>{await N(a,!0),await L(),await U()},M=async(a,n,e)=>{a&&a.target&&n&&n!==a.target&&C(a.target,n)&&e()},z=async(a,T)=>{const _=Object.assign({animated:!1,icons:{balIconClose:n,balIconInfoCircle:e,balIconPlus:s,balIconMinus:o,balIconEdit:t,balIconTrash:i,balIconNavGoLeft:r,balIconNavGoRight:l,balIconNavGoDown:c,balIconNavGoUp:m,balIconCaretLeft:u,balIconCaretDown:b,balIconCheck:w,balIconDate:f,balIconDocument:d,balIconUpload:I,balIconMenuBars:p}},T),y=a;if(null!=y){await N(y,!0);const a=Array.prototype.slice.call(y.querySelectorAll("*")).filter((a=>a.tagName.match(/^bal/i)));await Promise.all(a.map((a=>{if(null!=a.configChanged)return a.configChanged(_)})))}await L(),await U()},L=()=>new Promise((a=>A((()=>x(a))))),U=()=>new Promise((a=>T((()=>x(a))))),x=n=>{if(a.hasWindow&&"MessageChannel"in window){const a=new window.MessageChannel;a.port1.onmessage=n,a.port2.postMessage(void 0)}else setTimeout(n,32)};export{z as a,L as b,q as c,P as d,U as e,N as f,k as g,_ as h,C as i,D as j,F as k,A as l,y as m,h as n,M as o,v as p,T as r,G as s,g as t,E as w}
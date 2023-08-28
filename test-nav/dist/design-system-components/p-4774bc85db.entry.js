import{r as n,h as t,H as e,g as r}from"./p-e85eaa4e.js";import{c as s}from"./p-3e8ff66b.js";const a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">\n<title>React Logo</title>\n<circle cx="0" cy="0" r="2.05" fill="#61dafb"/>\n<g stroke="#61dafb" stroke-width="1" fill="none">\n  <ellipse rx="11" ry="4.2"/>\n  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>\n  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>\n</g>\n</svg>',o=n=>{if(n.startsWith("```")){const t=n.split("\n");return t.splice(0,1),t.join("\n").replace("```","")}return n},i=async n=>{const t=await Promise.all(n.map((n=>fetch(`/assets/code/${n}`))));return await Promise.all(t.map((n=>n.text())))};var c=s((function(n){var t=function(){var n=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function s(n,t){if(!r[n]){r[n]={};for(var e=0;e<n.length;e++)r[n][n.charAt(e)]=e}return r[n][t]}var a={compressToBase64:function(n){if(null==n)return"";var e=a._compress(n,6,(function(n){return t.charAt(n)}));switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(n){return null==n?"":""==n?null:a._decompress(n.length,32,(function(e){return s(t,n.charAt(e))}))},compressToUTF16:function(t){return null==t?"":a._compress(t,15,(function(t){return n(t+32)}))+" "},decompressFromUTF16:function(n){return null==n?"":""==n?null:a._decompress(n.length,16384,(function(t){return n.charCodeAt(t)-32}))},compressToUint8Array:function(n){for(var t=a.compress(n),e=new Uint8Array(2*t.length),r=0,s=t.length;r<s;r++){var o=t.charCodeAt(r);e[2*r]=o>>>8,e[2*r+1]=o%256}return e},decompressFromUint8Array:function(t){if(null==t)return a.decompress(t);for(var e=new Array(t.length/2),r=0,s=e.length;r<s;r++)e[r]=256*t[2*r]+t[2*r+1];var o=[];return e.forEach((function(t){o.push(n(t))})),a.decompress(o.join(""))},compressToEncodedURIComponent:function(n){return null==n?"":a._compress(n,6,(function(n){return e.charAt(n)}))},decompressFromEncodedURIComponent:function(n){return null==n?"":""==n?null:(n=n.replace(/ /g,"+"),a._decompress(n.length,32,(function(t){return s(e,n.charAt(t))})))},compress:function(t){return a._compress(t,16,(function(t){return n(t)}))},_compress:function(n,t,e){if(null==n)return"";var r,s,a,o={},i={},c="",l="",p="",u=2,f=3,h=2,m=[],d=0,g=0;for(a=0;a<n.length;a+=1)if(c=n.charAt(a),Object.prototype.hasOwnProperty.call(o,c)||(o[c]=f++,i[c]=!0),l=p+c,Object.prototype.hasOwnProperty.call(o,l))p=l;else{if(Object.prototype.hasOwnProperty.call(i,p)){if(p.charCodeAt(0)<256){for(r=0;r<h;r++)d<<=1,g==t-1?(g=0,m.push(e(d)),d=0):g++;for(s=p.charCodeAt(0),r=0;r<8;r++)d=d<<1|1&s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s>>=1}else{for(s=1,r=0;r<h;r++)d=d<<1|s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s=0;for(s=p.charCodeAt(0),r=0;r<16;r++)d=d<<1|1&s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s>>=1}0==--u&&(u=Math.pow(2,h),h++),delete i[p]}else for(s=o[p],r=0;r<h;r++)d=d<<1|1&s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s>>=1;0==--u&&(u=Math.pow(2,h),h++),o[l]=f++,p=String(c)}if(""!==p){if(Object.prototype.hasOwnProperty.call(i,p)){if(p.charCodeAt(0)<256){for(r=0;r<h;r++)d<<=1,g==t-1?(g=0,m.push(e(d)),d=0):g++;for(s=p.charCodeAt(0),r=0;r<8;r++)d=d<<1|1&s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s>>=1}else{for(s=1,r=0;r<h;r++)d=d<<1|s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s=0;for(s=p.charCodeAt(0),r=0;r<16;r++)d=d<<1|1&s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s>>=1}0==--u&&(u=Math.pow(2,h),h++),delete i[p]}else for(s=o[p],r=0;r<h;r++)d=d<<1|1&s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s>>=1;0==--u&&(u=Math.pow(2,h),h++)}for(s=2,r=0;r<h;r++)d=d<<1|1&s,g==t-1?(g=0,m.push(e(d)),d=0):g++,s>>=1;for(;;){if(d<<=1,g==t-1){m.push(e(d));break}g++}return m.join("")},decompress:function(n){return null==n?"":""==n?null:a._decompress(n.length,32768,(function(t){return n.charCodeAt(t)}))},_decompress:function(t,e,r){var s,a,o,i,c,l,p,u=[],f=4,h=4,m=3,d="",g=[],x={val:r(0),position:e,index:1};for(s=0;s<3;s+=1)u[s]=s;for(o=0,c=Math.pow(2,2),l=1;l!=c;)i=x.val&x.position,x.position>>=1,0==x.position&&(x.position=e,x.val=r(x.index++)),o|=(i>0?1:0)*l,l<<=1;switch(o){case 0:for(o=0,c=Math.pow(2,8),l=1;l!=c;)i=x.val&x.position,x.position>>=1,0==x.position&&(x.position=e,x.val=r(x.index++)),o|=(i>0?1:0)*l,l<<=1;p=n(o);break;case 1:for(o=0,c=Math.pow(2,16),l=1;l!=c;)i=x.val&x.position,x.position>>=1,0==x.position&&(x.position=e,x.val=r(x.index++)),o|=(i>0?1:0)*l,l<<=1;p=n(o);break;case 2:return""}for(u[3]=p,a=p,g.push(p);;){if(x.index>t)return"";for(o=0,c=Math.pow(2,m),l=1;l!=c;)i=x.val&x.position,x.position>>=1,0==x.position&&(x.position=e,x.val=r(x.index++)),o|=(i>0?1:0)*l,l<<=1;switch(p=o){case 0:for(o=0,c=Math.pow(2,8),l=1;l!=c;)i=x.val&x.position,x.position>>=1,0==x.position&&(x.position=e,x.val=r(x.index++)),o|=(i>0?1:0)*l,l<<=1;u[h++]=n(o),p=h-1,f--;break;case 1:for(o=0,c=Math.pow(2,16),l=1;l!=c;)i=x.val&x.position,x.position>>=1,0==x.position&&(x.position=e,x.val=r(x.index++)),o|=(i>0?1:0)*l,l<<=1;u[h++]=n(o),p=h-1,f--;break;case 2:return g.join("")}if(0==f&&(f=Math.pow(2,m),m++),u[p])d=u[p];else{if(p!==h)return null;d=a+a.charAt(0)}g.push(d),u[h++]=a+d.charAt(0),a=d,0==--f&&(f=Math.pow(2,m),m++)}}};return a}();null!=n?n.exports=t:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",(function(){return t}))})),l=s((function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getParameters=void 0,t.getParameters=function(n){return t=JSON.stringify(n),c.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var t}})),p=s((function(n,t){t.__esModule=!0,t.getParameters=void 0,t.getParameters=l.getParameters}));const u=class{constructor(t){n(this,t),this.buildParameters=async()=>{"html"===this.framework&&(this.parameters=await(async n=>{const[t,e,r]=await i(["html/index.html","html/index.ts","html/example.ts"]);let s=r,a=t;var c;return n.component&&(s=o(n.component)),n.template&&(c=o(n.template),a=`<html>\n  <body>\n    <bal-app>\n      <main ${n.fullscreen?"":'class="container py-large"'}>\n\n${c}\n\n      </main>\n    </bal-app>\n  </body>\n</html>`),s=`${e}\n\n${s}`,p.getParameters({files:{"package.json":{isBinary:!1,content:{dependencies:{"@baloise/design-system-components":"latest"}}},"index.js":{isBinary:!1,content:s.trim()},"index.html":{isBinary:!1,content:a.trim()}}})})({template:this.template,component:this.component,fullscreen:this.fullscreen})),"react"===this.framework&&(this.parameters=await(async n=>{const[t,e,r,s,a,c,l,u]=await i(["react/public/index.html","react/src/App.tsx","react/src/AppProject.tsx","react/src/AppFullscreen.tsx","react/src/index.tsx","react/src/react-app-env.d.ts","react/package.json","react/tsconfig.json"]),f=!n.component,h=f?r:n.fullscreen?s:e;let m={};return f||(m={"src/Example.tsx":{isBinary:!1,content:n.component?o(n.component):"import React from 'react';\n\nexport default function Example() {\n  return <h1 className=\"title is-size-xxx-large\">Hello World</h1>;\n}\n"}}),p.getParameters({files:Object.assign({"package.json":{isBinary:!1,content:l},"tsconfig.json":{isBinary:!1,content:u},"public/index.html":{isBinary:!1,content:t},"src/index.tsx":{isBinary:!1,content:a},"src/react-app-env.d.ts":{isBinary:!1,content:c},"src/App.tsx":{isBinary:!1,content:h}},m)})})({component:this.component,fullscreen:this.fullscreen})),"angular"===this.framework&&(this.parameters=await(async n=>{const[t,e,r,s,a,c,l,u,f,h,m,d,g,x,v]=await i(["angular/src/app/app.component-fullscreen.html","angular/src/app/app.component-project.html","angular/src/app/app.component.html","angular/src/app/app.component.ts","angular/src/app/app.module-project.ts","angular/src/app/app.module.ts","angular/src/app/example.component.ts","angular/src/index.html","angular/src/main.ts","angular/src/polyfills.ts","angular/src/styles.scss","angular/src/zone-flags.ts","angular/angular-cli.json","angular/package.json","angular/tsconfig.json"]),y=!n.template;let w={},b={};if(!y){const t=n.template?o(n.template):'<h1 class="title is-size-xxx-large">Hello World</h1>';w={"src/app/example.component.ts":{isBinary:!1,content:n.component?o(n.component):l},"src/app/example.component.html":{isBinary:!1,content:t},"src/app/example.component.css":{isBinary:!1,content:""}},void 0!==n.name2&&(b={[`src/app/${n.name2}.component.ts`]:{isBinary:!1,content:o(n.component2)},[`src/app/${n.name2}.component.html`]:{isBinary:!1,content:o(n.template2)}})}return p.getParameters({files:Object.assign(Object.assign({"package.json":{isBinary:!1,content:x},"tsconfig.json":{isBinary:!1,content:v},".angular-cli.json":{isBinary:!1,content:g},"src/app/app.component.html":{isBinary:!1,content:y?e:n.fullscreen?t:r},"src/app/app.component.ts":{isBinary:!1,content:s},"src/app/app.module.ts":{isBinary:!1,content:y?a:c},"src/index.html":{isBinary:!1,content:u},"src/main.ts":{isBinary:!1,content:f},"src/polyfills.ts":{isBinary:!1,content:h},"src/styles.scss":{isBinary:!1,content:m},"src/zone-flags.ts":{isBinary:!1,content:d}},w),b)})})({template:this.template,component:this.component,name2:this.name2,template2:this.template2,component2:this.component2,fullscreen:this.fullscreen}))},this.fullscreen=!1,this.framework=void 0,this.modules=void 0,this.template=void 0,this.component=void 0,this.name2=void 0,this.template2=void 0,this.component2=void 0,this.visible=!1,this.primary=!1,this.logo=!1,this.label=void 0,this.parameters=""}frameworkWatcher(){this.buildParameters()}componentWillLoad(){this.buildParameters()}render(){if((()=>{var n;const t=new URLSearchParams(window.location.search);let e=null===(n=Object.fromEntries(t.entries()).globals)||void 0===n?void 0:n.replace("framework:","");if(e=["angular","html","react","vue"].includes(e)?e:void 0,void 0!==e)return localStorage.setItem("bal-docs-framework",JSON.stringify(e)),e;const r=localStorage.getItem("bal-docs-framework");return null===r?(localStorage.setItem("bal-docs-framework",JSON.stringify("angular")),"angular"):JSON.parse(r)})()!==this.framework&&!this.visible)return t(e,{style:{display:"none"}});const n={angular:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">\n <style type="text/css">\n .st0{fill:#DD0031;}\n .st1{fill:#C3002F;}\n .st2{fill:#FFFFFF;}\n </style>\n <g>\n <polygon class="st0" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 \t"/>\n <polygon class="st1" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 \t"/>\n <path class="st2" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1\n  L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/>\n </g>\n </svg>',react:a,html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">\n<rect width="630" height="630" fill="#f7df1e"/>\n<path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>\n</svg>',vue:a}[this.framework];return t(e,{class:{"bal-doc-code-sandbox":!0,[`bal-doc-code-sandbox--${this.framework}`]:!0}},t("bal-doc-app",null,t("form",{action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank"},t("input",{type:"hidden",name:"parameters",value:this.parameters}),t("bal-button",{elementType:"submit"},t("div",{class:"is-flex fg-xx-small"},t("div",{innerHTML:this.logo?'<svg width="24px" height="24px" viewBox="0 0 256 296" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M115.497674,261.08837 L115.497674,154.478845 L23.8139535,101.729261 L23.8139535,162.501763 L65.8104558,186.8486 L65.8104558,232.549219 L115.497674,261.08837 Z M139.311628,261.714907 L189.916577,232.563707 L189.916577,185.779949 L232.186047,161.285235 L232.186047,101.27387 L139.311628,154.895035 L139.311628,261.714907 Z M219.971965,80.8276886 L171.155386,52.5391067 L128.292316,77.4106841 L85.1040206,52.5141067 L35.8521355,81.1812296 L127.765737,134.063073 L219.971965,80.8276886 Z M0,222.211907 L0,74.4948807 L127.986799,0 L256,74.1820085 L256,221.978632 L127.983954,295.72283 L0,222.211907 Z" fill="#000000"></path></g></svg>':n,style:{width:"24px",height:"24px"}}),t("span",null,this.label?this.label:`${{angular:"Angular",html:"HTML & JS",react:"React",vue:"Vue.js"}[this.framework]||"Angular"} Code Sandbox`))))))}get el(){return r(this)}static get watchers(){return{framework:["frameworkWatcher"]}}};u.style=".bal-doc-code-sandbox--angular svg path{fill:#fff !important}.bal-doc-code-sandbox--react svg{fill:#fff !important}.bal-doc-code-sandbox--react ellipse{fill:rgba(0,0,0,0) !important}.bal-doc-code-sandbox--react circle{fill:#61dafb !important}";export{u as bal_doc_code_sandbox}
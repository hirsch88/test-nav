var __awaiter=this&&this.__awaiter||function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r["throw"](e))}catch(e){i(e)}}function s(e){e.done?t(e.value):a(e.value).then(o,u)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return s([e,n])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(o&&(o=0,u[0]&&(t=0)),t)try{if(r=1,a&&(i=u[0]&2?a["return"]:u[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;if(a=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:t.label++;return{value:u[1],done:false};case 5:t.label++;a=u[1];u=[0];continue;case 7:u=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){t.label=u[1];break}if(u[0]===6&&t.label<i[1]){t.label=i[1];i=u;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(u);break}if(i[2])t.ops.pop();t.trys.pop();continue}u=n.call(e,t)}catch(e){u=[6,e];a=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-7dff37f8.system.js","./p-972941e8.system.js"],(function(e){"use strict";var n,t,r;return{setters:[function(e){n=e.b},function(e){t=e.j;r=e.k}],execute:function(){var a=this;var i=0;var o="backdrop";var u=e("p",(function(e){if(n.hasDocument){l(document)}var t=i++;e.overlayIndex=t;if(!e.el.hasAttribute("id")){e.el.id="bal-overlay-".concat(t)}}));var s=e("g",(function(e,n){if(n===undefined){n="bal-modal,bal-snackbar,bal-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))}));var c=e("a",(function(e,n,t){var r=s(e,n);return t===undefined?r[r.length-1]:r.find((function(e){return e.id===t}))}));var l=function(e){if(i===0){i=1;e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var t=c(e);if(t){t.dismiss(undefined,o)}}}))}};var f=e("d",(function(e,n,t,r){return __awaiter(a,void 0,void 0,(function(){var a;return __generator(this,(function(i){switch(i.label){case 0:if(!e.presented){return[2,false]}i.label=1;case 1:i.trys.push([1,3,,4]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:n,role:t});return[4,r()];case 2:i.sent();e.presented=false;e.didDismiss.emit({data:n,role:t});return[3,4];case 3:a=i.sent();e.presented=false;console.error(a);return[3,4];case 4:e.el.remove();return[2,true]}}))}))}));var d=e("e",(function(e,n){var t;var r=new Promise((function(e){return t=e}));v(e,n,(function(e){t(e.detail)}));return r}));var v=function(e,n,a){var i=function(t){r(e,n,i);a(t)};t(e,n,i)}}}}));
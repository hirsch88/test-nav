var __spreadArray=this&&this.__spreadArray||function(r,t,e){if(e||arguments.length===2)for(var n=0,i=t.length,u;n<i;n++){if(u||!(n in t)){if(!u)u=Array.prototype.slice.call(t,0,n);u[n]=t[n]}}return r.concat(u||Array.prototype.slice.call(t))};System.register(["./p-6913b916.system.js"],(function(r){"use strict";var t;return{setters:[function(r){t=r.l}],execute:function(){r({a:u,b:o,f:s,g:e,i:c,l:n,p:v,r:i,s:l,v:a});function e(r){if(Array.isArray(r)){return r.filter((function(r){return!t(r)}))}return[]}function n(r){return e(r).length}function i(r,t){return e(r).filter((function(r){return r!==t}))}function u(r,t,n){var u=e(r);if(n){if(u.includes(t)){return i(r,t)}return __spreadArray(__spreadArray([],u,true),[t],false)}return[t]}function a(r,n,i){var a=e(r);if(a.length>0){var f=n.get(a[0]);if(t(f)||i!==f.label){return[]}}else{var s=o(n,i);if(!t(s)){return u(r,s.value,false)}}return a}function f(r,e){var n=r.next(),i=n.value,u=n.done;if(!t(i)&&i.label===e){return i}if(u){return undefined}return f(r,e)}function o(r,t){return f(r.values(),t)}function s(r,e){var n=r.get(e);if(!t(n)){return n.label}return""}function l(r,t){var e=r.trim().toLowerCase();var n=t.trim().toLowerCase();return e.startsWith(n)}function c(r,t){var e=r.trim().toLowerCase();var n=t.trim().toLowerCase();return e.includes(n)}function v(r){r.preventDefault();r.stopPropagation()}}}}));
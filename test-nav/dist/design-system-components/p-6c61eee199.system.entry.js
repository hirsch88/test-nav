var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(i.next(t))}catch(t){o(t)}}function a(t){try{c(i["throw"](t))}catch(t){o(t)}}function c(t){t.done?n(t.value):r(t.value).then(s,a)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(a){if(i)throw new TypeError("Generator is already executing.");while(s&&(s=0,a[0]&&(n=0)),n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-4eb578e4.system.js","./p-7dff37f8.system.js","./p-4c963f30.system.js","./p-cf04c148.system.js","./p-972941e8.system.js","./p-a77fefb8.system.js","./p-b4110083.system.js","./p-1e8a53fb.system.js"],(function(t,e){"use strict";var n,i,r,o,s,a,c,u,f,l,p,h;return{setters:[function(t){n=t.r;i=t.c;r=t.h;o=t.H;s=t.g},function(t){a=t.b},function(t){c=t.b},function(t){u=t.b},function(t){f=t.d;l=t.r},function(t){p=t.L},function(t){h=t.i},function(){}],execute:function(){var d=":root{--bal-app-height:100%}.bal-app{position:relative;display:block}.bal-body.is-ready{visibility:inherit}";var b=undefined&&undefined.__decorate||function(t,e,n,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)if(s=t[a])o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o;return r>3&&o&&Object.defineProperty(e,n,o),o};var y=t("bal_app",function(){function t(t){var e=this;n(this,t);this.balAppLoad=i(this,"balAppLoad",7);this.debouncedNotify=f((function(){return e.notifyResize()}),100);this.notifyResize=function(){return __awaiter(e,void 0,void 0,(function(){var t;return __generator(this,(function(e){if(a.hasDocument&&a.hasWindow){t=document.documentElement;t.style.setProperty("--bal-app-height","".concat(window.innerHeight,"px"))}return[2]}))}))};this.mode="css";this.animated=true;this.ready=false}t.prototype.createLogger=function(t){this.log=t};t.prototype.connectedCallback=function(){h(this.mode);u(this.animated);if(a.hasWindow){window.addEventListener("resize",this.debouncedNotify);this.debouncedNotify()}};t.prototype.componentDidLoad=function(){var t=this;l((function(){return __awaiter(t,void 0,void 0,(function(){var t=this;return __generator(this,(function(n){this.balAppLoad.emit(true);this.ready=true;e.import("./p-62d2e291.system.js").then((function(e){return t.focusVisible=e.startFocusVisible()}));return[2]}))}))}))};t.prototype.disconnectedCallback=function(){if(a.hasWindow){window.removeEventListener("resize",this.debouncedNotify)}};t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.focusVisible){this.focusVisible.setFocus(t)}return[2]}))}))};t.prototype.render=function(){return r(o,{role:"application",class:{"bal-app":true,"bal-app--safari":a.isSafari,"bal-app--touch":c.hasTouchScreen}},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());b([p("bal-app")],y.prototype,"createLogger",null);y.style={css:d}}}}));
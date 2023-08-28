import{__awaiter,__generator}from"tslib";import{r as registerInstance,h,g as getElement,H as Host}from"./index-e015dbc8.js";import{l as raf,r as rIC}from"./helpers-08b28736.js";import{L as Logger}from"./log-01623e2c.js";import"./browser-9199b5e2.js";import"./icons.constant-35253412.js";var balSpinnerCss="bal-spinner,.bal-spinner{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}bal-spinner svg,.bal-spinner svg{-webkit-transform:unset !important;transform:unset !important}";var __decorate=undefined&&undefined.__decorate||function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)if(a=e[s])o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o;return r>3&&o&&Object.defineProperty(t,n,o),o};var Spinner=function(){function e(e){var t=this;registerInstance(this,e);this.animate=function(){return __awaiter(t,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:t.sent();if(this.currentRaf!==undefined){cancelAnimationFrame(this.currentRaf)}if(this.shouldAnimate()){this.destroy();this.currentRaf=raf((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){if(this.animationFunction){this.animationFunction(this.el,this.getColor())}return[2]}))}))}))}return[2]}}))}))};this.destroy=function(){if(t.animationItem&&t.animationItem.destroy){t.animationItem.destroy()}t.el.innerHTML=""};this.shouldAnimate=function(){if(typeof window==="undefined"){return false}if(t.animationFunction===undefined){return false}return!t.deactivated};this.load=function(){return __awaiter(t,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){return[2,new Promise((function(t,n){if(e.animationFunction){return t()}else{rIC((function(){return __awaiter(e,void 0,void 0,(function(){var e=this;return __generator(this,(function(i){import("./bal-spinner.animation-fadee2e2.js").then((function(n){e.animationFunction=n.animate;t()})).catch(n);return[2]}))}))}))}}))]}))}))};this.inverted=false;this.deactivated=false;this.color="blue";this.small=false}e.prototype.createLogger=function(e){this.log=e};e.prototype.deactivatedWatcher=function(e,t){if(e!==t){if(this.deactivated){this.destroy()}else{this.animate()}}};e.prototype.componentDidLoad=function(){this.animate()};e.prototype.disconnectedCallback=function(){if(this.el&&!this.el.isConnected){this.destroy()}};e.prototype.getColor=function(){return this.inverted||this.color==="white"?"#ffffff":"#151f6d"};e.prototype.render=function(){return h(Host,{role:"progressbar","aria-hidden":"true",style:{width:this.small?"32px":"64px"}})};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{deactivated:["deactivatedWatcher"]}},enumerable:false,configurable:true});return e}();__decorate([Logger("bal-spinner")],Spinner.prototype,"createLogger",null);Spinner.style={css:balSpinnerCss};export{Spinner as bal_spinner};
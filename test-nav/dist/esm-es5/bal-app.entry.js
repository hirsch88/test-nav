import{__awaiter,__generator}from"tslib";import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-e015dbc8.js";import{b as balBrowser}from"./browser-9199b5e2.js";import{b as balDevice}from"./device-c28cde6d.js";import{b as updateBalAnimated}from"./index-8b8ed6bd.js";import{d as debounce,r as rIC}from"./helpers-08b28736.js";import{L as Logger}from"./log-01623e2c.js";import{i as initStyleMode}from"./mode-6b82a428.js";import"./icons.constant-35253412.js";var balAppCss=":root{--bal-app-height:100%}.bal-app{position:relative;display:block}.bal-body.is-ready{visibility:inherit}";var __decorate=undefined&&undefined.__decorate||function(e,t,o,r){var i=arguments.length,n=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])n=(i<3?a(n):i>3?a(t,o,n):a(t,o))||n;return i>3&&n&&Object.defineProperty(t,o,n),n};var App=function(){function e(e){var t=this;registerInstance(this,e);this.balAppLoad=createEvent(this,"balAppLoad",7);this.debouncedNotify=debounce((function(){return t.notifyResize()}),100);this.notifyResize=function(){return __awaiter(t,void 0,void 0,(function(){var e;return __generator(this,(function(t){if(balBrowser.hasDocument&&balBrowser.hasWindow){e=document.documentElement;e.style.setProperty("--bal-app-height","".concat(window.innerHeight,"px"))}return[2]}))}))};this.mode="css";this.animated=true;this.ready=false}e.prototype.createLogger=function(e){this.log=e};e.prototype.connectedCallback=function(){initStyleMode(this.mode);updateBalAnimated(this.animated);if(balBrowser.hasWindow){window.addEventListener("resize",this.debouncedNotify);this.debouncedNotify()}};e.prototype.componentDidLoad=function(){var e=this;rIC((function(){return __awaiter(e,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.balAppLoad.emit(true);this.ready=true;import("./focus-visible-06bce1ff.js").then((function(t){return e.focusVisible=t.startFocusVisible()}));return[2]}))}))}))};e.prototype.disconnectedCallback=function(){if(balBrowser.hasWindow){window.removeEventListener("resize",this.debouncedNotify)}};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.focusVisible){this.focusVisible.setFocus(e)}return[2]}))}))};e.prototype.render=function(){return h(Host,{role:"application",class:{"bal-app":true,"bal-app--safari":balBrowser.isSafari,"bal-app--touch":balDevice.hasTouchScreen}},h("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();__decorate([Logger("bal-app")],App.prototype,"createLogger",null);App.style={css:balAppCss};export{App as bal_app};
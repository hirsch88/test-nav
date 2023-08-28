var __extends=this&&this.__extends||function(){var t=function(e,n){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n]};return t(e,n)};return function(e,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function o(){this.constructor=e}e.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}}();System.register(["./p-a7c6873b.system.js","./p-7dff37f8.system.js"],(function(t){"use strict";var e,n,o;return{setters:[function(t){e=t.L;n=t.a},function(t){o=t.b}],execute:function(){t("L",r);var i=function(t){__extends(e,t);function e(){var n=t.apply(this,arguments)||this;n.state=e.DefaultState;n.onMouseEnter=function(){n.updateState({hovered:true})};n.onMouseLeave=function(){n.updateState({hovered:false})};n.onPointerDown=function(){n.updateState({pressed:true})};n.onPointerUp=function(){n.updateState({pressed:false})};return n}e.prototype.connect=function(n){t.prototype.connect.call(this,n);n.addEventListener("mouseenter",this.onMouseEnter,e.EventListenerOptions);n.addEventListener("mouseleave",this.onMouseLeave,e.EventListenerOptions);n.addEventListener("pointerdown",this.onPointerDown,e.EventListenerOptions);if(o.hasDocument){document.addEventListener("pointerup",this.onPointerUp,e.EventListenerOptions)}};e.prototype.disconnect=function(){t.prototype.disconnect.call(this);if(this.el){this.el.removeEventListener("mouseenter",this.onMouseEnter);this.el.removeEventListener("mouseleave",this.onMouseLeave);this.el.removeEventListener("pointerdown",this.onPointerDown);if(o.hasDocument){document.removeEventListener("pointerup",this.onPointerUp)}}};e.prototype.updateState=function(t){this.state=Object.assign(Object.assign({},this.state),t);this.notify(this.state)};return e}(e);t("B",i);i.EventListenerOptions={passive:true};i.DefaultState={hovered:false,pressed:false};var s=function(t){__extends(e,t);function e(){var e=t.call(this,(function(t,e){if(e){t.elementStateListener(e)}}))||this;e.listener=new i;return e}e.prototype.attach=function(e){var n=this;t.prototype.attach.call(this,e);this.listener.connect(e.el);this.listener.add((function(e){return t.prototype.notify.call(n,e)}))};e.prototype.detach=function(){t.prototype.detach.call(this);this.listener.disconnect()};return e}(n);function r(){return function(t,e,n){var o=t.connectedCallback,i=t.disconnectedCallback;t.connectedCallback=function(){this._balElementStateSubject=new s;this._balElementStateSubject.attach(this);return o&&o.call(this)};t.disconnectedCallback=function(){this._balElementStateSubject.detach();return i&&i.call(this)}}}}}}));
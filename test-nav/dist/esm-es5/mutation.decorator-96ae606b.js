import{__extends}from"tslib";import{d as debounce}from"./helpers-08b28736.js";import{L as ListenerAbstract,a as SingleSubject}from"./listener-ea90dc02.js";var BalMutationListener=function(t){__extends(e,t);function e(e){var n=t.call(this)||this;n.tags=[];n.mutationObserver=undefined;n.mutationObserverInit={childList:true,subtree:true,attributes:true,characterData:true};n.mutationCallback=function(t){var e=t.some((function(t){return n.tags.includes(t.target.nodeName)}));if(e){return n.notify(undefined)}var i=t.some((function(t){return Array.from(t.removedNodes).some((function(t){return n.tags.includes(t.nodeName)}))}));if(i){return n.notify(undefined)}var r=t.some((function(t){return t.type==="characterData"}));if(r){return n.notify(undefined)}if(n.tags.length===0&&t.length>0){return n.notify(undefined)}};n.tags=(e.tags||[]).map((function(t){return t.toUpperCase()}));n.mutationObserverInit={childList:e.childList===false?false:true,subtree:e.subtree===false?false:true,attributes:e.attributes===false?false:true,characterData:e.characterData===false?false:true};return n}e.prototype.connect=function(e){t.prototype.connect.call(this,e);if(typeof MutationObserver==="undefined"){return}this.destroyMutationObserver();this.mutationObserver=new MutationObserver(this.mutationCallback);this.mutationObserver.observe(e,this.mutationObserverInit)};e.prototype.disconnect=function(){t.prototype.disconnect.call(this);this.destroyMutationObserver()};e.prototype.destroyMutationObserver=function(){if(this.mutationObserver!==undefined){this.mutationObserver.disconnect();this.mutationObserver=undefined}};return e}(ListenerAbstract);var BalMutationSubject=function(t){__extends(e,t);function e(e){var n=t.call(this,(function(t){if(t.mutationObserverActive){t.mutationListener()}}))||this;n.options=e;n.debouncedNotify=debounce((function(){return n.notify()}),50);n.listener=new BalMutationListener(e);return n}e.prototype.attach=function(e){var n=this;var i,r,o;t.prototype.attach.call(this,e);if(this.options.closest){var a=e.el.closest(this.options.closest);if(a){(i=this.listener)===null||i===void 0?void 0:i.connect(a)}}else{(r=this.listener)===null||r===void 0?void 0:r.connect(e.el)}(o=this.listener)===null||o===void 0?void 0:o.add((function(){return n.debouncedNotify()}))};e.prototype.detach=function(){var e;t.prototype.detach.call(this);(e=this.listener)===null||e===void 0?void 0:e.disconnect()};return e}(SingleSubject);function ListenToMutation(t){return function(e,n,i){var r=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){this._balMutationSubject=new BalMutationSubject(t);this._balMutationSubject.attach(this);return r&&r.call(this)};e.disconnectedCallback=function(){this._balMutationSubject.detach();return o&&o.call(this)}}}export{ListenToMutation as L};
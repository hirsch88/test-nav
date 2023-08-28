import{__extends}from"tslib";import{L as ListenerAbstract,a as SingleSubject}from"./listener-ea90dc02.js";import{b as balBrowser}from"./browser-9199b5e2.js";var BalElementStateListener=function(e){__extends(t,e);function t(){var n=e.apply(this,arguments)||this;n.state=t.DefaultState;n.onMouseEnter=function(){n.updateState({hovered:true})};n.onMouseLeave=function(){n.updateState({hovered:false})};n.onPointerDown=function(){n.updateState({pressed:true})};n.onPointerUp=function(){n.updateState({pressed:false})};return n}t.prototype.connect=function(n){e.prototype.connect.call(this,n);n.addEventListener("mouseenter",this.onMouseEnter,t.EventListenerOptions);n.addEventListener("mouseleave",this.onMouseLeave,t.EventListenerOptions);n.addEventListener("pointerdown",this.onPointerDown,t.EventListenerOptions);if(balBrowser.hasDocument){document.addEventListener("pointerup",this.onPointerUp,t.EventListenerOptions)}};t.prototype.disconnect=function(){e.prototype.disconnect.call(this);if(this.el){this.el.removeEventListener("mouseenter",this.onMouseEnter);this.el.removeEventListener("mouseleave",this.onMouseLeave);this.el.removeEventListener("pointerdown",this.onPointerDown);if(balBrowser.hasDocument){document.removeEventListener("pointerup",this.onPointerUp)}}};t.prototype.updateState=function(e){this.state=Object.assign(Object.assign({},this.state),e);this.notify(this.state)};return t}(ListenerAbstract);BalElementStateListener.EventListenerOptions={passive:true};BalElementStateListener.DefaultState={hovered:false,pressed:false};var BalElementStateSubject=function(e){__extends(t,e);function t(){var t=e.call(this,(function(e,t){if(t){e.elementStateListener(t)}}))||this;t.listener=new BalElementStateListener;return t}t.prototype.attach=function(t){var n=this;e.prototype.attach.call(this,t);this.listener.connect(t.el);this.listener.add((function(t){return e.prototype.notify.call(n,t)}))};t.prototype.detach=function(){e.prototype.detach.call(this);this.listener.disconnect()};return t}(SingleSubject);function ListenToElementStates(){return function(e,t,n){var s=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){this._balElementStateSubject=new BalElementStateSubject;this._balElementStateSubject.attach(this);return s&&s.call(this)};e.disconnectedCallback=function(){this._balElementStateSubject.detach();return o&&o.call(this)}}}export{BalElementStateListener as B,ListenToElementStates as L};
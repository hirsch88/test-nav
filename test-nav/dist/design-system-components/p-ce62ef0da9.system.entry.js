System.register(["./p-4eb578e4.system.js","./p-0ab50155.system.js"],(function(a){"use strict";var e,r,l,o,b;return{setters:[function(a){e=a.r;r=a.h;l=a.H;o=a.g},function(a){b=a.B}],execute:function(){var n=":root{--bal-badge-background:var(--bal-color-red-3);--bal-badge-background-grey:var(--bal-color-grey-3);--bal-badge-background-red:var(--bal-color-red-3);--bal-badge-background-yellow:var(--bal-color-yellow-3);--bal-badge-background-green:var(--bal-color-green-3);--bal-badge-background-purple:var(--bal-color-purple-3);--bal-badge-radius:var(--bal-radius-rounded);--bal-badge-text-color:var(--bal-color-text-primary);--bal-badge-color-grey:var(--bal-color-text-grey-dark);--bal-badge-color-red:var(--bal-color-text-primary);--bal-badge-color-yellow:var(--bal-color-text-primary);--bal-badge-color-green:var(--bal-color-text-primary);--bal-badge-color-purple:var(--bal-color-text-primary)}.bal-badge{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:1.5rem;height:1.5rem;border-radius:var(--bal-badge-radius);background:var(--bal-badge-background)}.bal-badge--size-small{width:.75rem;height:.75rem}.bal-badge--size-large{width:2rem;height:2rem}.bal-badge--background-red,.bal-badge--background-danger{background:var(--bal-badge-background-red)}.bal-badge--background-yellow,.bal-badge--background-warning{background:var(--bal-badge-background-yellow)}.bal-badge--background-green,.bal-badge--background-success{background:var(--bal-badge-background-green)}.bal-badge--background-purple{background:var(--bal-badge-background-purple)}.bal-badge--background-grey{background:var(--bal-badge-background-grey)}.bal-badge--position-card,.bal-badge--position-button{position:absolute;right:-0.5rem;top:-0.5rem}.bal-badge--position-tabs{margin-top:-4px;position:absolute;right:-26px}.bal-badge--position-tabs.bal-badge--size-small{right:-16px}span.bal-badge__label{font-weight:var(--bal-weight-bold) !important;font-family:var(--bal-font-family-text) !important;font-size:var(--bal-size-small) !important;color:var(--bal-badge-text-color);line-height:1.5rem !important;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}span.bal-badge__label--hidden{display:none !important}span.bal-badge__label--color-red,span.bal-badge__label--color-danger{color:var(--bal-badge-color-red)}span.bal-badge__label--color-yellow,span.bal-badge__label--color-warning{color:var(--bal-badge-color-yellow)}span.bal-badge__label--color-green,span.bal-badge__label--color-success{color:var(--bal-badge-color-green)}span.bal-badge__label--color-grey{color:var(--bal-badge-color-grey)}span.bal-badge__label--color-purple{color:var(--bal-badge-color-purple)}.bal-badge__icon--hidden{display:none !important}";var s=a("bal_badge",function(){function a(a){e(this,a);this.icon=undefined;this.size="";this.color="";this.position=""}a.prototype.render=function(){var a=b.block("badge");var e=a.element("label");var o=a.element("icon");var n=this.color!=="";var s=this.size!=="";var t=this.position!=="";var i=!!this.icon||this.size==="small";return r(l,{class:Object.assign(Object.assign(Object.assign(Object.assign({},a.class()),a.modifier("background-".concat(this.color)).class(n)),a.modifier("position-".concat(this.position)).class(t)),a.modifier("size-".concat(this.size)).class(s))},r("span",{class:Object.assign(Object.assign(Object.assign({},e.class()),e.modifier("color-".concat(this.color)).class(n)),e.modifier("hidden").class(i)),"data-testid":"bal-badge-label"},r("slot",null)),r("bal-icon",{class:Object.assign(Object.assign({},o.class()),o.modifier("hidden").class(!i)),size:this.size===""?"small":"",name:this.icon,color:this.color==="grey"?"grey":"primary"}))};Object.defineProperty(a.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return a}());s.style={css:n}}}}));
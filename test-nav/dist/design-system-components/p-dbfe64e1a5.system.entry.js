System.register(["./p-4eb578e4.system.js","./p-4c4811f6.system.js","./p-0ab50155.system.js","./p-1a0806dc.system.js","./p-7dff37f8.system.js"],(function(t){"use strict";var i,e,s,o,n,a,c;return{setters:[function(t){i=t.r;e=t.h;s=t.H},function(t){o=t.s},function(t){n=t.B},function(t){a=t.B},function(t){c=t.b}],execute:function(){var r=t("bal_navigation_popover",function(){function t(t){var e=this;i(this,t);this.toggle=function(t){o(t);e.clearTimeouts();if(!e.isActive){a.disableSmoothScrolling();e.scrollToTopTimer=setTimeout((function(){if(c.hasWindow){window.scrollTo(0,0)}}),0)}e.setActiveTimer=setTimeout((function(){a.enableSmoothScrolling();e.isActive=!e.isActive}),100)};this.isActive=false;this.label="";this.inverted=false;this.icon=undefined;this.backdrop=false;this.size="";this.inactiveColor="light";this.activeColor="primary";this.heading=undefined;this.closable=true;this.contentRadius="normal";this.position="bottom-start";this.contentWidth=0;this.contentMinWidth=0;this.offsetY=0;this.square=false;this.contentNoShadow=false;this.contentExpanded=false;this.arrow=false;this.mobileTop=false}t.prototype.clearTimeouts=function(){if(this.scrollToTopTimer){clearTimeout(this.scrollToTopTimer)}if(this.setActiveTimer){clearTimeout(this.setActiveTimer)}};t.prototype.render=function(){var t=this;var i=n.block("nav").element("popover");return e(s,{class:Object.assign(Object.assign({},i.class()),{control:true})},e("bal-popover",{active:this.isActive,onBalChange:function(i){return t.isActive=i.detail},arrow:this.arrow,backdrop:this.backdrop,position:this.position,offsetY:this.offsetY,"mobile-top":this.mobileTop},e("bal-button",{"bal-popover-trigger":true,icon:this.icon,size:this.size,inverted:this.inverted,color:this.isActive?this.activeColor:this.inactiveColor,square:this.square,onClick:this.toggle,"aria-haspopup":"true",class:"bal-navigation-popover__button bal-navigation-popover__button-".concat(this.isActive?this.activeColor:this.inactiveColor)},this.label),e("bal-popover-content",{radius:this.contentRadius,"content-width":this.contentWidth,"content-min-width":this.contentMinWidth,"no-shadow":this.contentNoShadow,expanded:this.contentExpanded,"mobile-top":this.mobileTop},(this.closable||this.heading)&&e("div",{class:Object.assign({},i.element("head").class())},this.heading&&e("bal-heading",{space:"none",level:"h4"},this.heading),this.closable&&e("bal-close",{onClick:function(){return t.isActive=!t.isActive}})),e("slot",null))))};return t}())}}}));
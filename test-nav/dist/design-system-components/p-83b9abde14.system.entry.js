System.register(["./p-4eb578e4.system.js","./p-f1b4aa15.system.js"],(function(t){"use strict";var s,e,i,n;return{setters:[function(t){s=t.r;e=t.h;i=t.H},function(t){n=t.t}],execute:function(){var r=".sc-bal-doc-color-h p.sc-bal-doc-color{font-family:monospace;text-align:center}";var a=t("bal_doc_color",function(){function t(t){s(this,t);this.inverted=false;this.background=false;this.color="";this.subject="";this.description=""}t.prototype.render=function(){var t=this.subject!==""?this.subject:this.color;var s=n.color[this.color].hex;return e(i,{class:"bal-app"},e("div",{class:"has-radius-large has-shadow-normal"},e("div",{class:"has-background-".concat(this.color," has-radius-top-large is-flex is-justify-content-center is-align-items-center")},e("strong",{class:"".concat(this.inverted?"has-text-white":"has-text-blue"," has-font-title is-size-x-large py-normal"),style:{minHeight:"80px"}},this.background?"A-a":"")),e("div",{class:"is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-x-small"},e("h5",{class:"title is-size-normal m-none"},t),e("bal-text",{size:"small",style:{textAlign:"center"}},this.description),e("bal-text",{size:"small",color:"primary-light",style:{textAlign:"center"}},s))))};return t}());a.style=r}}}));
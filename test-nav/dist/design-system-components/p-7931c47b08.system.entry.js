System.register(["./p-4eb578e4.system.js","./p-f1b4aa15.system.js"],(function(t){"use strict";var e,l,n,s,a;return{setters:[function(t){e=t.r;l=t.h;n=t.H;s=t.g},function(t){a=t.t}],execute:function(){var i=t("bal_doc_tokens_z_index",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=a.zIndex;var e=[];for(var s in t){e.push({name:s,description:t[s].description,value:t[s].value})}return l(n,null,l("bal-doc-app",null,l("table",{class:"table tokens",style:{width:"100%"}},l("thead",null,l("tr",null,l("th",null,"Description"),l("th",{style:{minWidth:"220px"}},"Token"),l("th",{style:{minWidth:"230px"}},"Value"))),l("tbody",null,e.map((function(t){return l("tr",null,l("td",{style:{verticalAlign:"top"}},l("p",{class:"has-text-weight-bold is-size-large mt-none mb-x-small"},t.name),l("p",{class:"m-none is-size-small"},t.description)),l("td",{style:{verticalAlign:"top"}},l("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap"},"var(--bal-z-index","-".concat(t.name),")")),l("td",{style:{verticalAlign:"top"}},l("p",{class:"mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small"},t.value)))}))))))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}())}}}));
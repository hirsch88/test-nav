System.register(["./p-4eb578e4.system.js","./p-f1b4aa15.system.js"],(function(t){"use strict";var e,l,s,a,n;return{setters:[function(t){e=t.r;l=t.h;s=t.H;a=t.g},function(t){n=t.t}],execute:function(){var i=t("bal_doc_tokens_text_shadow",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=n.shadow.text;var e=[];for(var a in t){e.push({name:a,value:t[a]})}return l(s,null,l("bal-doc-app",null,l("table",{class:"table tokens",style:{width:"100%"}},l("thead",null,l("tr",null,l("th",{style:{minWidth:"120px"}},"Example"),l("th",null,"Description"),l("th",{style:{minWidth:"220px"}},"Token"),l("th",{style:{minWidth:"230px"}},"Value"))),l("tbody",null,e.map((function(t){return l("tr",null,l("td",{style:{verticalAlign:"top"}},l("div",{style:{height:"48px",width:"80px"},class:"mt-x-small has-background-yellow-1 p-x-small"},l("p",{class:"has-text-shadow".concat("-".concat(t.name))},"Shadow"))),l("td",{style:{verticalAlign:"top"}},l("p",{class:"has-text-weight-bold is-size-large mt-none mb-x-small"},t.name),l("p",{class:"m-none is-size-small"},t.value.description)),l("td",{style:{verticalAlign:"top"}},l("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap"},"var(--bal-text-shadow","-".concat(t.name),")")),l("td",{style:{verticalAlign:"top"}},l("p",{class:"mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small"},t.value.value)))}))))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}())}}}));
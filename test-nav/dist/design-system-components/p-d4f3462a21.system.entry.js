System.register(["./p-4eb578e4.system.js","./p-f1b4aa15.system.js"],(function(e){"use strict";var t,l,s,a,n;return{setters:[function(e){t=e.r;l=e.h;s=e.H;a=e.g},function(e){n=e.t}],execute:function(){var r=e("bal_doc_tokens_spacing_sizes",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=n.spacing;var t=[];var a=["xxxxx-large","xxxx-large","xxx-large","xx-large","x-large","large","medium","normal","small","x-small","xx-small"].reverse();for(var r in e){if(a.includes(r)){t.push({name:r,value:e[r]})}}return l(s,null,l("bal-doc-app",null,l("table",{class:"table tokens",style:{width:"100%"}},l("thead",null,l("tr",null,l("th",{style:{minWidth:"100px"}},"Example"),l("th",null,"Description"),l("th",{style:{minWidth:"90px"}},"Desktop"))),l("tbody",null,t.map((function(e){return l("tr",null,l("td",{style:{verticalAlign:"top"}},l("div",{class:"pt-".concat(e.name," mt-x-small has-background-green")})),l("td",{style:{verticalAlign:"top"}},l("p",{class:"has-text-weight-bold is-size-large mt-none mb-x-small"},e.name),l("p",{class:"m-none is-size-small"},e.value.description)),l("td",{style:{verticalAlign:"top"}},l("span",{class:"has-text-weight-bold is-size-small"},parseFloat(e.value.desktop.replace("rem"))*16,"px")))}))))))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return e}())}}}));
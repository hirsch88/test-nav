import{r as registerInstance,h,H as Host,g as getElement}from"./index-e015dbc8.js";import{t as tokens}from"./tokens.docs-b6e8e840.js";var DocTokensSpacing=function(){function e(e){registerInstance(this,e)}e.prototype.render=function(){var e=tokens.spacing;var t=[];var l=["xxxxx-large","xxxx-large","xxx-large","xx-large","x-large","large","medium","normal","small","x-small","xx-small","none","auto"].reverse();for(var s in e){if(l.includes(s)){t.push({name:s,value:e[s]})}}return h(Host,null,h("bal-doc-app",null,h("table",{class:"table tokens",style:{width:"100%"}},h("thead",null,h("tr",null,h("th",{style:{minWidth:"100px"}},"Example"),h("th",null,"Description"),h("th",{style:{minWidth:"240px"}},"Token"),h("th",{style:{minWidth:"90px"}},"Mobile"),h("th",{style:{minWidth:"90px"}},"Tablet"),h("th",{style:{minWidth:"90px"}},"Desktop"))),h("tbody",null,t.map((function(e){return h("tr",null,h("td",{style:{verticalAlign:"top"}},h("div",{class:"pt-".concat(e.name," mt-x-small has-background-green")})),h("td",{style:{verticalAlign:"top"}},h("p",{class:"has-text-weight-bold is-size-large mt-none mb-x-small"},e.name," ",h("span",{class:"is-size-medium"},"(",e.value.legacy,")")),h("p",{class:"m-none is-size-small"},e.value.description)),h("td",{style:{verticalAlign:"top"}},h("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap"},"var(--bal-space-",e.name,")")),h("td",{style:{verticalAlign:"top"}},h("span",{class:"has-text-weight-bold is-size-small"},e.value.mobile)),h("td",{style:{verticalAlign:"top"}},h("span",{class:"has-text-weight-bold is-size-small"},e.value.tablet)),h("td",{style:{verticalAlign:"top"}},h("span",{class:"has-text-weight-bold is-size-small"},e.value.desktop)))}))))))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{DocTokensSpacing as bal_doc_tokens_spacing};
import{r as l,h as s,H as a,g as t}from"./p-e85eaa4e.js";import{t as e}from"./p-6b5be41d.js";const n=class{constructor(s){l(this,s)}render(){const l=e.container,t=[];for(const s in l.size)t.push({name:s,value:l.size[s]});return s(a,null,s("bal-doc-app",null,s("table",{class:"table tokens",style:{width:"100%"}},s("thead",null,s("tr",null,s("th",null,"Description"),s("th",{style:{minWidth:"200px"}},"Token / CSS class"),s("th",{style:{minWidth:"100px"}},"Value"))),s("tbody",null,t.map((l=>s("tr",null,s("td",{style:{verticalAlign:"top"}},s("p",{class:"has-text-weight-bold is-size-large mt-none mb-x-small"},l.name)),s("td",{style:{verticalAlign:"top"}},s("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap"},"var(--bal-container-size-",l.name,")"),s("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap"},"container","normal"!==l.name?` is-${l.name}`:"")),s("td",{style:{verticalAlign:"top"}},s("p",{class:"has-text-weight-bold is-size-small py-xx-small"},l.value)))))))))}get el(){return t(this)}};export{n as bal_doc_tokens_containers}
import{r as l,h as t,H as s,g as a}from"./p-e85eaa4e.js";import{t as e}from"./p-6b5be41d.js";const n=class{constructor(t){l(this,t)}render(){const l=e.shadow.text,a=[];for(const t in l)a.push({name:t,value:l[t]});return t(s,null,t("bal-doc-app",null,t("table",{class:"table tokens",style:{width:"100%"}},t("thead",null,t("tr",null,t("th",{style:{minWidth:"120px"}},"Example"),t("th",null,"Description"),t("th",{style:{minWidth:"220px"}},"Token"),t("th",{style:{minWidth:"230px"}},"Value"))),t("tbody",null,a.map((l=>t("tr",null,t("td",{style:{verticalAlign:"top"}},t("div",{style:{height:"48px",width:"80px"},class:"mt-x-small has-background-yellow-1 p-x-small"},t("p",{class:`has-text-shadow-${l.name}`},"Shadow"))),t("td",{style:{verticalAlign:"top"}},t("p",{class:"has-text-weight-bold is-size-large mt-none mb-x-small"},l.name),t("p",{class:"m-none is-size-small"},l.value.description)),t("td",{style:{verticalAlign:"top"}},t("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap"},"var(--bal-text-shadow",`-${l.name}`,")")),t("td",{style:{verticalAlign:"top"}},t("p",{class:"mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small"},l.value.value)))))))))}get el(){return a(this)}};export{n as bal_doc_tokens_text_shadow}
import{r as s,h as l,H as t,g as e}from"./p-e85eaa4e.js";import{t as a}from"./p-6b5be41d.js";const r=class{constructor(l){s(this,l),this.overview=!1}render(){const s=a.border,e=Object.keys(s.colors),r=Object.values(s.colors),i={primary:"Use for focused or selected state.",grey:"Default border color for inactive state.","grey-dark":"Use for disabled state.",warning:"Use for warning/hint state.",success:"Use for valid state.",danger:"Use for invalid state.",white:"Default color on dark backgrounds.","primary-light":"Disabled or secondary color on dark backgrounds."};return l(t,null,l("bal-doc-app",null,l("table",{class:"table tokens",style:{width:"100%"}},l("thead",null,l("tr",null,l("th",{style:{width:"120px"}},"Example"),l("th",null,"Name"),l("th",null,"Description"),this.overview?"":l("th",{style:{minWidth:"200px"}},"Token"),this.overview?"":l("th",{style:{minWidth:"100px"}},"value"))),l("tbody",null,e.map(((s,t)=>{return l("tr",null,l("td",{style:{verticalAlign:"middle"},class:"has-background-"+(e=s,["white","primary-light"].includes(e)?"primary":"")},l("div",{class:`has-border-${s} has-radius-normal`,style:{width:"24px",height:"24px"}})),l("td",{style:{verticalAlign:"middle"}},l("p",{class:"has-text-weight-bold is-size-large m-none"},s)),l("td",{style:{verticalAlign:"middle"}},l("p",{class:"m-none is-size-small"},i[s])),this.overview?"":l("td",{style:{verticalAlign:"middle"}},l("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap"},"var(--bal-color-border-",s,")")),this.overview?"":l("td",{style:{verticalAlign:"middle"}},l("p",{class:"mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small"},r[t])));var e}))))))}get el(){return e(this)}};export{r as bal_doc_tokens_border_colors}
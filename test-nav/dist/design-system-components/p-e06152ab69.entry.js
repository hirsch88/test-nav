import{r as s,h as t,H as e}from"./p-e85eaa4e.js";import{t as i}from"./p-6b5be41d.js";const a=class{constructor(t){s(this,t),this.inverted=!1,this.background=!1,this.color="",this.subject="",this.description=""}render(){const s=""!==this.subject?this.subject:this.color,a=i.color[this.color].hex;return t(e,{class:"bal-app"},t("div",{class:"has-radius-large has-shadow-normal"},t("div",{class:`has-background-${this.color} has-radius-top-large is-flex is-justify-content-center is-align-items-center`},t("strong",{class:(this.inverted?"has-text-white":"has-text-blue")+" has-font-title is-size-x-large py-normal",style:{minHeight:"80px"}},this.background?"A-a":"")),t("div",{class:"is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-x-small"},t("h5",{class:"title is-size-normal m-none"},s),t("bal-text",{size:"small",style:{textAlign:"center"}},this.description),t("bal-text",{size:"small",color:"primary-light",style:{textAlign:"center"}},a))))}};a.style=".sc-bal-doc-color-h p.sc-bal-doc-color{font-family:monospace;text-align:center}";export{a as bal_doc_color}
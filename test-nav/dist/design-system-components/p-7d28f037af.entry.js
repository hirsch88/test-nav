import{r as t,c as s,h as i,H as e,g as a}from"./p-e85eaa4e.js";import{a as h}from"./p-9a929c20.js";const r=class{constructor(i){t(this,i),this.balNavigate=s(this,"balNavigate",7),this.inheritAttributes={},this.isActive=!1,this.active=!1,this.value="",this.label="",this.href="",this.target="_self",this.disabled=!1,this.done=!1,this.hidden=!1,this.failed=!1,this.prevent=!1}componentWillLoad(){this.inheritAttributes=h(this.el)}async getOptions(){return this.options}async setActive(t){this.isActive=t}get options(){return{value:this.value,label:this.label,href:this.href,target:this.target,active:this.active,disabled:this.disabled,done:this.done,hidden:this.hidden,failed:this.failed,passed:!1,prevent:this.prevent,navigate:this.balNavigate,trackingData:this.inheritAttributes}}render(){return i(e,{role:"tabpanel",class:{"bal-step-item":!0,"bal-step-item--active":this.isActive}},i("slot",null))}get el(){return a(this)}};export{r as bal_step_item}
import{r as t,h as i,H as s}from"./p-e85eaa4e.js";import{s as h}from"./p-785037ba.js";import{B as o}from"./p-61996a75.js";import{B as a}from"./p-be4dae99.js";import{b as e}from"./p-add1e9ec.js";const r=class{constructor(i){t(this,i),this.toggle=t=>{h(t),this.clearTimeouts(),this.isActive||(a.disableSmoothScrolling(),this.scrollToTopTimer=setTimeout((()=>{e.hasWindow&&window.scrollTo(0,0)}),0)),this.setActiveTimer=setTimeout((()=>{a.enableSmoothScrolling(),this.isActive=!this.isActive}),100)},this.isActive=!1,this.label="",this.inverted=!1,this.icon=void 0,this.backdrop=!1,this.size="",this.inactiveColor="light",this.activeColor="primary",this.heading=void 0,this.closable=!0,this.contentRadius="normal",this.position="bottom-start",this.contentWidth=0,this.contentMinWidth=0,this.offsetY=0,this.square=!1,this.contentNoShadow=!1,this.contentExpanded=!1,this.arrow=!1,this.mobileTop=!1}clearTimeouts(){this.scrollToTopTimer&&clearTimeout(this.scrollToTopTimer),this.setActiveTimer&&clearTimeout(this.setActiveTimer)}render(){const t=o.block("nav").element("popover");return i(s,{class:Object.assign(Object.assign({},t.class()),{control:!0})},i("bal-popover",{active:this.isActive,onBalChange:t=>this.isActive=t.detail,arrow:this.arrow,backdrop:this.backdrop,position:this.position,offsetY:this.offsetY,"mobile-top":this.mobileTop},i("bal-button",{"bal-popover-trigger":!0,icon:this.icon,size:this.size,inverted:this.inverted,color:this.isActive?this.activeColor:this.inactiveColor,square:this.square,onClick:this.toggle,"aria-haspopup":"true",class:`bal-navigation-popover__button bal-navigation-popover__button-${this.isActive?this.activeColor:this.inactiveColor}`},this.label),i("bal-popover-content",{radius:this.contentRadius,"content-width":this.contentWidth,"content-min-width":this.contentMinWidth,"no-shadow":this.contentNoShadow,expanded:this.contentExpanded,"mobile-top":this.mobileTop},(this.closable||this.heading)&&i("div",{class:Object.assign({},t.element("head").class())},this.heading&&i("bal-heading",{space:"none",level:"h4"},this.heading),this.closable&&i("bal-close",{onClick:()=>this.isActive=!this.isActive})),i("slot",null))))}};export{r as bal_navigation_popover}
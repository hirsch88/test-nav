import{r as t,h as s,H as e}from"./p-e85eaa4e.js";import{B as i}from"./p-61996a75.js";import{b as a}from"./p-12b924ac.js";import{L as c}from"./p-77363de8.js";import"./p-7f5e6a6c.js";import"./p-add1e9ec.js";import"./p-55865e45.js";import"./p-f146219b.js";import"./p-350daa19.js";import"./p-393ab408.js";const n=class{constructor(s){t(this,s),this.setHeadingLevel=()=>{this.headingLevel=a.isTouch?"h5":"h3"},this.color="white",this.headline=void 0,this.href=void 0,this.target="_self",this.tracking={},this.headingLevel=void 0}breakpointListener(t){this.setHeadingLevel()}connectedCallback(){this.setHeadingLevel()}render(){const t=i.block("nav").element("menu").element("list");return s(e,{class:Object.assign(Object.assign({},t.class()),t.modifier(`context-${this.color}`).class())},s("bal-card",{class:Object.assign({},t.element("card").class()),flat:!0,color:"grey"===this.color||"yellow"===this.color||"red"===this.color||"purple"===this.color||"green"===this.color?this.color:""},s("bal-card-content",null,this.href?s("a",Object.assign({href:this.href,target:this.target},this.tracking),s("bal-heading",{class:Object.assign({},t.element("card").element("heading").class()),level:this.headingLevel,space:"none"},this.headline)):s("bal-heading",{class:Object.assign({},t.element("card").element("heading").class()),level:this.headingLevel,space:"none"},this.headline),s("slot",{name:"links"}))))}};!function(t,s,e,i){var a,c=arguments.length,n=c<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,s,e,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(c<3?a(n):c>3?a(s,e,n):a(s,e))||n);c>3&&n&&Object.defineProperty(s,e,n)}([c()],n.prototype,"breakpointListener",null);const r=class{constructor(s){t(this,s),this.href=void 0,this.tracking={},this.target="_self"}render(){const t=i.block("nav").element("menu").element("list").element("item");return s(e,{class:Object.assign({},t.class())},s("a",Object.assign({class:Object.assign({},t.element("link").class()),href:this.href,target:this.target},this.tracking),s("slot",null)))}};export{n as bal_navigation_menu_list,r as bal_navigation_menu_list_item}
import{r as t,h as e,H as l}from"./p-e85eaa4e.js";import{B as n}from"./p-61996a75.js";import{L as a}from"./p-585cea76.js";import"./p-add1e9ec.js";const s=class{constructor(e){t(this,e),this.layout="vertical",this.align="start",this.space="xx-small",this.direction="",this.alignment=""}createLogger(t){this.log=t}render(){const t=n.block("content"),a=!!this.direction,s=!!this.layout,i=!!this.alignment,c=!!this.align,o=!!this.space;let r=this.layout;a&&(r="row"===this.direction?"horizontal":"vertical");let m=this.align.split(" ").join("-");return i&&(m=this.alignment.split(" ").join("-")),e(l,{class:Object.assign(Object.assign(Object.assign(Object.assign({},t.class()),t.modifier(`layout-${r}`).class(s||a)),t.modifier(`align-${m}`).class(c||i)),t.modifier(`space-${this.space}`).class(o))},e("slot",null))}};(function(t,e,l,n){var a,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,l,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(s<3?a(i):s>3?a(e,l,i):a(e,l))||i);s>3&&i&&Object.defineProperty(e,l,i)})([a("bal-content")],s.prototype,"createLogger",null),s.style={css:".bal-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;text-align:left;gap:.25rem}.bal-content--align-center{-ms-flex-align:center;align-items:center;text-align:center}.bal-content--align-end{-ms-flex-align:end;align-items:flex-end;text-align:right}.bal-content--layout-horizontal{-ms-flex-direction:row;flex-direction:row}.bal-content--layout-vertical{-ms-flex-direction:column;flex-direction:column}.bal-content--space-xx-small{gap:.25rem}.bal-content--space-x-small{gap:.5rem}.bal-content--space-small{gap:.75rem}.bal-content--space-normal{gap:1rem}.bal-content>.bal-text{margin:0}"};export{s as bal_content}
import{r as registerInstance,h,H as Host}from"./index-e015dbc8.js";import{B as BEM}from"./bem-1b28532d.js";import{L as Logger}from"./log-01623e2c.js";import"./browser-9199b5e2.js";var balStackCss=".bal-stack{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;height:100%;width:100%;gap:1rem;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bal-stack--use-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.bal-stack--fit-content{-ms-flex:unset;flex:unset;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.bal-stack--layout-horizontal{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.bal-stack--layout-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}.bal-stack--align-top-start{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}.bal-stack--align-top-center{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.bal-stack--align-top-end{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:end;justify-content:flex-end}.bal-stack--align-start{-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}.bal-stack--align-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.bal-stack--align-end{-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.bal-stack--align-bottom-start{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:start;justify-content:flex-start}.bal-stack--align-bottom-center{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center}.bal-stack--align-bottom-end{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}.bal-stack--layout-vertical.bal-stack--align-top-start{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}.bal-stack--layout-vertical.bal-stack--align-top-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}.bal-stack--layout-vertical.bal-stack--align-top-end{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:start;justify-content:flex-start}.bal-stack--layout-vertical.bal-stack--align-start{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.bal-stack--layout-vertical.bal-stack--align-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.bal-stack--layout-vertical.bal-stack--align-end{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center}.bal-stack--layout-vertical.bal-stack--align-bottom-start{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:end;justify-content:flex-end}.bal-stack--layout-vertical.bal-stack--align-bottom-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.bal-stack--layout-vertical.bal-stack--align-bottom-end{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}.bal-stack--px-none{padding-left:0;padding-right:0}.bal-stack--px-xx-small{padding-left:var(--bal-space-xx-small);padding-right:var(--bal-space-xx-small)}@media screen and (min-width: 769px),print{.bal-stack--px-xx-small{padding-left:var(--bal-space-tablet-xx-small);padding-right:var(--bal-space-tablet-xx-small)}}@media screen and (min-width: 1024px){.bal-stack--px-xx-small{padding-left:var(--bal-space-desktop-xx-small);padding-right:var(--bal-space-desktop-xx-small)}}.bal-stack--px-x-small{padding-left:var(--bal-space-x-small);padding-right:var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-stack--px-x-small{padding-left:var(--bal-space-tablet-x-small);padding-right:var(--bal-space-tablet-x-small)}}@media screen and (min-width: 1024px){.bal-stack--px-x-small{padding-left:var(--bal-space-desktop-x-small);padding-right:var(--bal-space-desktop-x-small)}}.bal-stack--px-small{padding-left:var(--bal-space-small);padding-right:var(--bal-space-small)}@media screen and (min-width: 769px),print{.bal-stack--px-small{padding-left:var(--bal-space-tablet-small);padding-right:var(--bal-space-tablet-small)}}@media screen and (min-width: 1024px){.bal-stack--px-small{padding-left:var(--bal-space-desktop-small);padding-right:var(--bal-space-desktop-small)}}.bal-stack--px-normal{padding-left:var(--bal-space-normal);padding-right:var(--bal-space-normal)}@media screen and (min-width: 769px),print{.bal-stack--px-normal{padding-left:var(--bal-space-tablet-normal);padding-right:var(--bal-space-tablet-normal)}}@media screen and (min-width: 1024px){.bal-stack--px-normal{padding-left:var(--bal-space-desktop-normal);padding-right:var(--bal-space-desktop-normal)}}.bal-stack--px-medium{padding-left:var(--bal-space-medium);padding-right:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-stack--px-medium{padding-left:var(--bal-space-tablet-medium);padding-right:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-stack--px-medium{padding-left:var(--bal-space-desktop-medium);padding-right:var(--bal-space-desktop-medium)}}.bal-stack--px-large{padding-left:var(--bal-space-large);padding-right:var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-stack--px-large{padding-left:var(--bal-space-tablet-large);padding-right:var(--bal-space-tablet-large)}}@media screen and (min-width: 1024px){.bal-stack--px-large{padding-left:var(--bal-space-desktop-large);padding-right:var(--bal-space-desktop-large)}}.bal-stack--px-x-large{padding-left:var(--bal-space-x-large);padding-right:var(--bal-space-x-large)}@media screen and (min-width: 769px),print{.bal-stack--px-x-large{padding-left:var(--bal-space-tablet-x-large);padding-right:var(--bal-space-tablet-x-large)}}@media screen and (min-width: 1024px){.bal-stack--px-x-large{padding-left:var(--bal-space-desktop-x-large);padding-right:var(--bal-space-desktop-x-large)}}.bal-stack--px-xx-large{padding-left:var(--bal-space-xx-large);padding-right:var(--bal-space-xx-large)}@media screen and (min-width: 769px),print{.bal-stack--px-xx-large{padding-left:var(--bal-space-tablet-xx-large);padding-right:var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-stack--px-xx-large{padding-left:var(--bal-space-desktop-xx-large);padding-right:var(--bal-space-desktop-xx-large)}}.bal-stack--py-none{padding-top:0;padding-bottom:0}.bal-stack--py-xx-small{padding-top:var(--bal-space-xx-small);padding-bottom:var(--bal-space-xx-small)}@media screen and (min-width: 769px),print{.bal-stack--py-xx-small{padding-top:var(--bal-space-tablet-xx-small);padding-bottom:var(--bal-space-tablet-xx-small)}}@media screen and (min-width: 1024px){.bal-stack--py-xx-small{padding-top:var(--bal-space-desktop-xx-small);padding-bottom:var(--bal-space-desktop-xx-small)}}.bal-stack--py-x-small{padding-top:var(--bal-space-x-small);padding-bottom:var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-stack--py-x-small{padding-top:var(--bal-space-tablet-x-small);padding-bottom:var(--bal-space-tablet-x-small)}}@media screen and (min-width: 1024px){.bal-stack--py-x-small{padding-top:var(--bal-space-desktop-x-small);padding-bottom:var(--bal-space-desktop-x-small)}}.bal-stack--py-small{padding-top:var(--bal-space-small);padding-bottom:var(--bal-space-small)}@media screen and (min-width: 769px),print{.bal-stack--py-small{padding-top:var(--bal-space-tablet-small);padding-bottom:var(--bal-space-tablet-small)}}@media screen and (min-width: 1024px){.bal-stack--py-small{padding-top:var(--bal-space-desktop-small);padding-bottom:var(--bal-space-desktop-small)}}.bal-stack--py-normal{padding-top:var(--bal-space-normal);padding-bottom:var(--bal-space-normal)}@media screen and (min-width: 769px),print{.bal-stack--py-normal{padding-top:var(--bal-space-tablet-normal);padding-bottom:var(--bal-space-tablet-normal)}}@media screen and (min-width: 1024px){.bal-stack--py-normal{padding-top:var(--bal-space-desktop-normal);padding-bottom:var(--bal-space-desktop-normal)}}.bal-stack--py-medium{padding-top:var(--bal-space-medium);padding-bottom:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-stack--py-medium{padding-top:var(--bal-space-tablet-medium);padding-bottom:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-stack--py-medium{padding-top:var(--bal-space-desktop-medium);padding-bottom:var(--bal-space-desktop-medium)}}.bal-stack--py-large{padding-top:var(--bal-space-large);padding-bottom:var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-stack--py-large{padding-top:var(--bal-space-tablet-large);padding-bottom:var(--bal-space-tablet-large)}}@media screen and (min-width: 1024px){.bal-stack--py-large{padding-top:var(--bal-space-desktop-large);padding-bottom:var(--bal-space-desktop-large)}}.bal-stack--py-x-large{padding-top:var(--bal-space-x-large);padding-bottom:var(--bal-space-x-large)}@media screen and (min-width: 769px),print{.bal-stack--py-x-large{padding-top:var(--bal-space-tablet-x-large);padding-bottom:var(--bal-space-tablet-x-large)}}@media screen and (min-width: 1024px){.bal-stack--py-x-large{padding-top:var(--bal-space-desktop-x-large);padding-bottom:var(--bal-space-desktop-x-large)}}.bal-stack--py-xx-large{padding-top:var(--bal-space-xx-large);padding-bottom:var(--bal-space-xx-large)}@media screen and (min-width: 769px),print{.bal-stack--py-xx-large{padding-top:var(--bal-space-tablet-xx-large);padding-bottom:var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-stack--py-xx-large{padding-top:var(--bal-space-desktop-xx-large);padding-bottom:var(--bal-space-desktop-xx-large)}}.bal-stack--space-auto{-ms-flex-pack:justify;justify-content:space-between}.bal-stack--space-none{gap:0}@media screen and (min-width: 769px),print{.bal-stack--space-none{gap:0}}@media screen and (min-width: 1024px){.bal-stack--space-none{gap:0}}.bal-stack--space-xx-small{gap:var(--bal-space-xx-small)}@media screen and (min-width: 769px),print{.bal-stack--space-xx-small{gap:var(--bal-space-tablet-xx-small)}}@media screen and (min-width: 1024px){.bal-stack--space-xx-small{gap:var(--bal-space-desktop-xx-small)}}.bal-stack--space-x-small{gap:var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-stack--space-x-small{gap:var(--bal-space-tablet-x-small)}}@media screen and (min-width: 1024px){.bal-stack--space-x-small{gap:var(--bal-space-desktop-x-small)}}.bal-stack--space-small{gap:var(--bal-space-small)}@media screen and (min-width: 769px),print{.bal-stack--space-small{gap:var(--bal-space-tablet-small)}}@media screen and (min-width: 1024px){.bal-stack--space-small{gap:var(--bal-space-desktop-small)}}.bal-stack--space-medium{gap:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-stack--space-medium{gap:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-stack--space-medium{gap:var(--bal-space-desktop-medium)}}.bal-stack--space-large{gap:var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-stack--space-large{gap:var(--bal-space-tablet-large)}}@media screen and (min-width: 1024px){.bal-stack--space-large{gap:var(--bal-space-desktop-large)}}.bal-stack--space-x-large{gap:var(--bal-space-x-large)}@media screen and (min-width: 769px),print{.bal-stack--space-x-large{gap:var(--bal-space-tablet-x-large)}}@media screen and (min-width: 1024px){.bal-stack--space-x-large{gap:var(--bal-space-desktop-x-large)}}.bal-stack--space-xx-large{gap:var(--bal-space-xx-large)}@media screen and (min-width: 769px),print{.bal-stack--space-xx-large{gap:var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-stack--space-xx-large{gap:var(--bal-space-desktop-xx-large)}}.bal-stack--space-row-auto{-ms-flex-pack:justify;justify-content:space-between}.bal-stack--space-row-none{row-gap:0}@media screen and (min-width: 769px),print{.bal-stack--space-row-none{row-gap:0}}@media screen and (min-width: 1024px){.bal-stack--space-row-none{row-gap:0}}.bal-stack--space-row-xx-small{row-gap:var(--bal-space-xx-small)}@media screen and (min-width: 769px),print{.bal-stack--space-row-xx-small{row-gap:var(--bal-space-tablet-xx-small)}}@media screen and (min-width: 1024px){.bal-stack--space-row-xx-small{row-gap:var(--bal-space-desktop-xx-small)}}.bal-stack--space-row-x-small{row-gap:var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-stack--space-row-x-small{row-gap:var(--bal-space-tablet-x-small)}}@media screen and (min-width: 1024px){.bal-stack--space-row-x-small{row-gap:var(--bal-space-desktop-x-small)}}.bal-stack--space-row-small{row-gap:var(--bal-space-small)}@media screen and (min-width: 769px),print{.bal-stack--space-row-small{row-gap:var(--bal-space-tablet-small)}}@media screen and (min-width: 1024px){.bal-stack--space-row-small{row-gap:var(--bal-space-desktop-small)}}.bal-stack--space-row-medium{row-gap:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-stack--space-row-medium{row-gap:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-stack--space-row-medium{row-gap:var(--bal-space-desktop-medium)}}.bal-stack--space-row-large{row-gap:var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-stack--space-row-large{row-gap:var(--bal-space-tablet-large)}}@media screen and (min-width: 1024px){.bal-stack--space-row-large{row-gap:var(--bal-space-desktop-large)}}.bal-stack--space-row-x-large{row-gap:var(--bal-space-x-large)}@media screen and (min-width: 769px),print{.bal-stack--space-row-x-large{row-gap:var(--bal-space-tablet-x-large)}}@media screen and (min-width: 1024px){.bal-stack--space-row-x-large{row-gap:var(--bal-space-desktop-x-large)}}.bal-stack--space-row-xx-large{row-gap:var(--bal-space-xx-large)}@media screen and (min-width: 769px),print{.bal-stack--space-row-xx-large{row-gap:var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-stack--space-row-xx-large{row-gap:var(--bal-space-desktop-xx-large)}}.bal-stack--space-column-auto{-ms-flex-pack:justify;justify-content:space-between}.bal-stack--space-column-none{-webkit-column-gap:0;-moz-column-gap:0;column-gap:0}@media screen and (min-width: 769px),print{.bal-stack--space-column-none{-webkit-column-gap:0;-moz-column-gap:0;column-gap:0}}@media screen and (min-width: 1024px){.bal-stack--space-column-none{-webkit-column-gap:0;-moz-column-gap:0;column-gap:0}}.bal-stack--space-column-xx-small{-webkit-column-gap:var(--bal-space-xx-small);-moz-column-gap:var(--bal-space-xx-small);column-gap:var(--bal-space-xx-small)}@media screen and (min-width: 769px),print{.bal-stack--space-column-xx-small{-webkit-column-gap:var(--bal-space-tablet-xx-small);-moz-column-gap:var(--bal-space-tablet-xx-small);column-gap:var(--bal-space-tablet-xx-small)}}@media screen and (min-width: 1024px){.bal-stack--space-column-xx-small{-webkit-column-gap:var(--bal-space-desktop-xx-small);-moz-column-gap:var(--bal-space-desktop-xx-small);column-gap:var(--bal-space-desktop-xx-small)}}.bal-stack--space-column-x-small{-webkit-column-gap:var(--bal-space-x-small);-moz-column-gap:var(--bal-space-x-small);column-gap:var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-stack--space-column-x-small{-webkit-column-gap:var(--bal-space-tablet-x-small);-moz-column-gap:var(--bal-space-tablet-x-small);column-gap:var(--bal-space-tablet-x-small)}}@media screen and (min-width: 1024px){.bal-stack--space-column-x-small{-webkit-column-gap:var(--bal-space-desktop-x-small);-moz-column-gap:var(--bal-space-desktop-x-small);column-gap:var(--bal-space-desktop-x-small)}}.bal-stack--space-column-small{-webkit-column-gap:var(--bal-space-small);-moz-column-gap:var(--bal-space-small);column-gap:var(--bal-space-small)}@media screen and (min-width: 769px),print{.bal-stack--space-column-small{-webkit-column-gap:var(--bal-space-tablet-small);-moz-column-gap:var(--bal-space-tablet-small);column-gap:var(--bal-space-tablet-small)}}@media screen and (min-width: 1024px){.bal-stack--space-column-small{-webkit-column-gap:var(--bal-space-desktop-small);-moz-column-gap:var(--bal-space-desktop-small);column-gap:var(--bal-space-desktop-small)}}.bal-stack--space-column-medium{-webkit-column-gap:var(--bal-space-medium);-moz-column-gap:var(--bal-space-medium);column-gap:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-stack--space-column-medium{-webkit-column-gap:var(--bal-space-tablet-medium);-moz-column-gap:var(--bal-space-tablet-medium);column-gap:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-stack--space-column-medium{-webkit-column-gap:var(--bal-space-desktop-medium);-moz-column-gap:var(--bal-space-desktop-medium);column-gap:var(--bal-space-desktop-medium)}}.bal-stack--space-column-large{-webkit-column-gap:var(--bal-space-large);-moz-column-gap:var(--bal-space-large);column-gap:var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-stack--space-column-large{-webkit-column-gap:var(--bal-space-tablet-large);-moz-column-gap:var(--bal-space-tablet-large);column-gap:var(--bal-space-tablet-large)}}@media screen and (min-width: 1024px){.bal-stack--space-column-large{-webkit-column-gap:var(--bal-space-desktop-large);-moz-column-gap:var(--bal-space-desktop-large);column-gap:var(--bal-space-desktop-large)}}.bal-stack--space-column-x-large{-webkit-column-gap:var(--bal-space-x-large);-moz-column-gap:var(--bal-space-x-large);column-gap:var(--bal-space-x-large)}@media screen and (min-width: 769px),print{.bal-stack--space-column-x-large{-webkit-column-gap:var(--bal-space-tablet-x-large);-moz-column-gap:var(--bal-space-tablet-x-large);column-gap:var(--bal-space-tablet-x-large)}}@media screen and (min-width: 1024px){.bal-stack--space-column-x-large{-webkit-column-gap:var(--bal-space-desktop-x-large);-moz-column-gap:var(--bal-space-desktop-x-large);column-gap:var(--bal-space-desktop-x-large)}}.bal-stack--space-column-xx-large{-webkit-column-gap:var(--bal-space-xx-large);-moz-column-gap:var(--bal-space-xx-large);column-gap:var(--bal-space-xx-large)}@media screen and (min-width: 769px),print{.bal-stack--space-column-xx-large{-webkit-column-gap:var(--bal-space-tablet-xx-large);-moz-column-gap:var(--bal-space-tablet-xx-large);column-gap:var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-stack--space-column-xx-large{-webkit-column-gap:var(--bal-space-desktop-xx-large);-moz-column-gap:var(--bal-space-desktop-xx-large);column-gap:var(--bal-space-desktop-xx-large)}}.bal-stack>bal-radio{margin-top:-4px}.bal-stack>.bal-text,.bal-stack>.bal-heading,.bal-stack>.bal-heading:not(:last-child),.bal-stack>.title,.bal-stack>.subtitle,.bal-stack>.is-link,.bal-stack>p{margin:0}";var __decorate=undefined&&undefined.__decorate||function(a,e,l,t){var s=arguments.length,p=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,l):t,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")p=Reflect.decorate(a,e,l,t);else for(var n=a.length-1;n>=0;n--)if(c=a[n])p=(s<3?c(p):s>3?c(e,l,p):c(e,l))||p;return s>3&&p&&Object.defineProperty(e,l,p),p};var BalStack=function(){function a(a){registerInstance(this,a);this.layout="horizontal";this.align="";this.space="normal";this.spaceRow=undefined;this.spaceColumn=undefined;this.px="";this.py="";this.useWrap=false;this.fitContent=false;this.direction="";this.alignment=""}a.prototype.createLogger=function(a){this.log=a};a.prototype.render=function(){var a=BEM.block("stack");var e=!!this.direction;var l=!!this.layout;var t=!!this.align;var s=!!this.alignment;var p=!!this.space;var c=!!this.spaceRow;var n=!!this.spaceColumn;var i=!!this.useWrap;var r=!!this.fitContent;var m=!!this.px;var d=!!this.py;var b=this.layout;if(e){b=this.direction==="row"?"horizontal":"vertical"}var o=this.align.split(" ").join("-");if(s){o=this.alignment.split(" ").join("-")}return h(Host,{class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},a.class()),a.modifier("use-wrap").class(i)),a.modifier("layout-".concat(b)).class(l||e)),a.modifier("align-".concat(o)).class(t||s)),a.modifier("space-".concat(this.space)).class(p)),a.modifier("space-row-".concat(this.spaceRow)).class(c)),a.modifier("space-row-".concat(this.spaceColumn)).class(n)),a.modifier("px-".concat(this.px)).class(m)),a.modifier("py-".concat(this.py)).class(d)),a.modifier("fit-content").class(r))},h("slot",null))};return a}();__decorate([Logger("bal-stack")],BalStack.prototype,"createLogger",null);BalStack.style={css:balStackCss};export{BalStack as bal_stack};
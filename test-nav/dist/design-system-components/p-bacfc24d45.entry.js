import{r as a,h as r,H as e}from"./p-e85eaa4e.js";import{B as i}from"./p-61996a75.js";import{L as d}from"./p-585cea76.js";import"./p-add1e9ec.js";const l=class{constructor(r){a(this,r),this.layout="horizontal",this.space="none",this.color="grey"}createLogger(a){this.log=a}render(){const a=i.block("divider"),d=!!this.layout,l=!!this.space,b=!!this.color;return r(e,{role:"separator",class:Object.assign(Object.assign(Object.assign(Object.assign({},a.class()),a.modifier(`layout-${this.layout}`).class(d)),a.modifier(`space-${this.space}`).class(l)),a.modifier(`color-${this.color}`).class(b))},r("slot",null))}};(function(a,r,e,i){var d,l=arguments.length,b=l<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)b=Reflect.decorate(a,r,e,i);else for(var n=a.length-1;n>=0;n--)(d=a[n])&&(b=(l<3?d(b):l>3?d(r,e,b):d(r,e))||b);l>3&&b&&Object.defineProperty(r,e,b)})([d("bal-divider")],l.prototype,"createLogger",null),l.style={css:":root{--bal-divider-border-width:var(--bal-border-width-normal);--bal-divider-background-primary:var(--bal-color-border-primary);--bal-divider-background-primary-light:var(--bal-color-border-primary-light);--bal-divider-background-primary-dark:var(--bal-color-border-primary-dark);--bal-divider-background-grey-light:var(--bal-color-border-grey-light);--bal-divider-background-grey:var(--bal-color-border-grey);--bal-divider-background-grey-dark:var(--bal-color-border-grey-dark);--bal-divider-background-warning:var(--bal-color-border-warning);--bal-divider-background-success:var(--bal-color-border-success);--bal-divider-background-danger:var(--bal-color-border-danger);--bal-divider-background-danger-dark:var(--bal-color-border-danger-dark);--bal-divider-background-danger-darker:var(--bal-color-border-danger-darker);--bal-divider-background-white:var(--bal-color-border-white);--bal-divider-background-light-blue:var(--bal-color-border-light-blue);--bal-divider-radius:var(--bal-radius-rounded)}.bal-divider{margin:0;display:block;border-radius:var(--bal-divider-radius)}.bal-divider--color-primary{background:var(--bal-divider-background-primary)}.bal-divider--color-primary-light{background:var(--bal-divider-background-primary-light)}.bal-divider--color-primary-dark{background:var(--bal-divider-background-primary-dark)}.bal-divider--color-grey-light{background:var(--bal-divider-background-grey-light)}.bal-divider--color-grey{background:var(--bal-divider-background-grey)}.bal-divider--color-grey-dark{background:var(--bal-divider-background-grey-dark)}.bal-divider--color-warning{background:var(--bal-divider-background-warning)}.bal-divider--color-success{background:var(--bal-divider-background-success)}.bal-divider--color-danger{background:var(--bal-divider-background-danger)}.bal-divider--color-danger-dark{background:var(--bal-divider-background-danger-dark)}.bal-divider--color-danger-darker{background:var(--bal-divider-background-danger-darker)}.bal-divider--color-white{background:var(--bal-divider-background-white)}.bal-divider--color-light-blue{background:var(--bal-divider-background-light-blue)}.bal-divider--layout-horizontal{-ms-flex:1 0 100%;flex:1 0 100%;width:100%;min-height:var(--bal-divider-border-width);height:var(--bal-divider-border-width)}.bal-divider--layout-vertical{height:auto;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:stretch;align-self:stretch;width:var(--bal-divider-border-width)}.bal-divider--space-none{margin:0}.bal-divider--space-xx-small{margin:var(--bal-space-xx-small) 0}@media screen and (min-width: 769px),print{.bal-divider--space-xx-small{margin:var(--bal-space-tablet-xx-small) 0}}@media screen and (min-width: 1024px){.bal-divider--space-xx-small{margin:var(--bal-space-desktop-xx-small) 0}}.bal-divider--space-x-small{margin:var(--bal-space-x-small) 0}@media screen and (min-width: 769px),print{.bal-divider--space-x-small{margin:var(--bal-space-tablet-x-small) 0}}@media screen and (min-width: 1024px){.bal-divider--space-x-small{margin:var(--bal-space-desktop-x-small) 0}}.bal-divider--space-small{margin:var(--bal-space-small) 0}@media screen and (min-width: 769px),print{.bal-divider--space-small{margin:var(--bal-space-tablet-small) 0}}@media screen and (min-width: 1024px){.bal-divider--space-small{margin:var(--bal-space-desktop-small) 0}}.bal-divider--space-normal{margin:var(--bal-space-normal) 0}@media screen and (min-width: 769px),print{.bal-divider--space-normal{margin:var(--bal-space-tablet-normal) 0}}@media screen and (min-width: 1024px){.bal-divider--space-normal{margin:var(--bal-space-desktop-normal) 0}}.bal-divider--space-medium{margin:var(--bal-space-medium) 0}@media screen and (min-width: 769px),print{.bal-divider--space-medium{margin:var(--bal-space-tablet-medium) 0}}@media screen and (min-width: 1024px){.bal-divider--space-medium{margin:var(--bal-space-desktop-medium) 0}}.bal-divider--space-large{margin:var(--bal-space-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-large{margin:var(--bal-space-tablet-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-large{margin:var(--bal-space-desktop-large) 0}}.bal-divider--space-x-large{margin:var(--bal-space-x-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-x-large{margin:var(--bal-space-tablet-x-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-x-large{margin:var(--bal-space-desktop-x-large) 0}}.bal-divider--space-xx-large{margin:var(--bal-space-xx-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-xx-large{margin:var(--bal-space-tablet-xx-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-xx-large{margin:var(--bal-space-desktop-xx-large) 0}}.bal-divider--space-xxx-large{margin:var(--bal-space-xxx-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-xxx-large{margin:var(--bal-space-tablet-xxx-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-xxx-large{margin:var(--bal-space-desktop-xxx-large) 0}}.bal-divider--layout-vertical.bal-divider--space-none{margin:0}.bal-divider--layout-vertical.bal-divider--space-xx-small{margin:0 var(--bal-space-xx-small)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-xx-small{margin:0 var(--bal-space-tablet-xx-small)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-xx-small{margin:0 var(--bal-space-desktop-xx-small)}}.bal-divider--layout-vertical.bal-divider--space-x-small{margin:0 var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-x-small{margin:0 var(--bal-space-tablet-x-small)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-x-small{margin:0 var(--bal-space-desktop-x-small)}}.bal-divider--layout-vertical.bal-divider--space-small{margin:0 var(--bal-space-small)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-small{margin:0 var(--bal-space-tablet-small)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-small{margin:0 var(--bal-space-desktop-small)}}.bal-divider--layout-vertical.bal-divider--space-normal{margin:0 var(--bal-space-normal)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-normal{margin:0 var(--bal-space-tablet-normal)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-normal{margin:0 var(--bal-space-desktop-normal)}}.bal-divider--layout-vertical.bal-divider--space-medium{margin:0 var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-medium{margin:0 var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-medium{margin:0 var(--bal-space-desktop-medium)}}.bal-divider--layout-vertical.bal-divider--space-large{margin:0 var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-large{margin:0 var(--bal-space-tablet-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-large{margin:0 var(--bal-space-desktop-large)}}.bal-divider--layout-vertical.bal-divider--space-x-large{margin:0 var(--bal-space-x-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-x-large{margin:0 var(--bal-space-tablet-x-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-x-large{margin:0 var(--bal-space-desktop-x-large)}}.bal-divider--layout-vertical.bal-divider--space-xx-large{margin:0 var(--bal-space-xx-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-xx-large{margin:0 var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-xx-large{margin:0 var(--bal-space-desktop-xx-large)}}.bal-divider--layout-vertical.bal-divider--space-xxx-large{margin:0 var(--bal-space-xxx-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-xxx-large{margin:0 var(--bal-space-tablet-xxx-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-xxx-large{margin:0 var(--bal-space-desktop-xxx-large)}}"};export{l as bal_divider}
import{r as e,h as a,H as l,g as i}from"./p-e85eaa4e.js";import{B as t}from"./p-61996a75.js";import{d as r}from"./p-1d3855f9.js";import{L as s}from"./p-585cea76.js";import{L as o}from"./p-4fe58c43.js";import{i as n}from"./p-345233f3.js";import{d as b}from"./p-ba7c87d4.js";import"./p-add1e9ec.js";import"./p-55865e45.js";import"./p-97b591c9.js";var h=function(e,a,l,i){var t,r=arguments.length,s=r<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,l):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,l,i);else for(var o=e.length-1;o>=0;o--)(t=e[o])&&(s=(r<3?t(s):r>3?t(a,l,s):t(a,l))||s);return r>3&&s&&Object.defineProperty(a,l,s),s};const c=class{constructor(a){e(this,a),this.inputId="bal-lbl-"+v++,this.language=r.language,this.region=r.region,this.ariaForm=b,this.htmlFor=void 0,this.required=!0,this.noWrap=!1,this.multiline=!1,this.valid=void 0,this.invalid=void 0,this.disabled=void 0,this.readonly=void 0,this.size="",this.weight="bold",this.hovered=!1,this.pressed=!1}createLogger(e){this.log=e}async configChanged(e){this.language=e.language,this.region=e.region}async setAriaForm(e){this.ariaForm=Object.assign({},e)}render(){const e=t.block("label"),i=!1===this.required&&n[this.language].optional||"",r=!!this.disabled||!!this.readonly,s=!!this.invalid,o=!!this.valid,b="regular"===this.weight,h="small"===this.size,c="large"===this.size,v=this.ariaForm.labelId||this.inputId,d=this.htmlFor||this.ariaForm.controlId;return a(l,{class:Object.assign({},e.class())},a("label",{id:v,htmlFor:d,class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e.element("native").class()),e.element("native").modifier("multiline").class(this.multiline)),e.element("native").modifier("no-wrap").class(this.noWrap)),e.element("native").modifier("disabled").class(r)),e.element("native").modifier("danger").class(s)),e.element("native").modifier("success").class(o)),e.element("native").modifier("regular").class(b)),e.element("native").modifier("small").class(h)),e.element("native").modifier("large").class(c)),e.element("native").modifier("hovered").class(this.hovered)),e.element("native").modifier("pressed").class(this.pressed))},a("slot",null),i))}get el(){return i(this)}};h([s("bal-label")],c.prototype,"createLogger",null),h([o()],c.prototype,"configChanged",null);let v=0;c.style={css:".bal-label{display:inline;-webkit-box-sizing:content-box;box-sizing:content-box;position:static;word-break:break-word}.bal-label__native{display:inline;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;white-space:pre;min-width:0;font-family:var(--bal-form-field-label-font-family);font-weight:var(--bal-form-field-label-font-weight);font-size:var(--bal-size-normal);line-height:var(--bal-line-height-normal)}.bal-label__native--multiline{white-space:normal}.bal-label__native--no-wrap{display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bal-label__native--small{font-family:var(--bal-font-family-text);font-size:var(--bal-size-small);line-height:var(--bal-line-height-small)}@media screen and (min-width: 769px),print{.bal-label__native--small{font-size:var(--bal-size-tablet-small);line-height:var(--bal-line-height-tablet-small)}}@media screen and (min-width: 1024px){.bal-label__native--small{font-size:var(--bal-size-desktop-small);line-height:var(--bal-line-height-desktop-small)}}.bal-label__native--large{font-family:var(--bal-font-family-title);font-size:var(--bal-size-large);line-height:var(--bal-line-height-large)}@media screen and (min-width: 769px),print{.bal-label__native--large{font-size:var(--bal-size-tablet-large);line-height:var(--bal-line-height-tablet-large)}}@media screen and (min-width: 1024px){.bal-label__native--large{font-size:var(--bal-size-desktop-large);line-height:var(--bal-line-height-desktop-large)}}.bal-label__native--success{color:var(--bal-form-field-label-success-color)}.bal-label__native--danger{color:var(--bal-form-field-label-danger-color)}.bal-label__native--disabled{color:var(--bal-form-field-label-disabled-color) !important}.bal-label__native--regular{font-weight:var(--bal-weight-regular)}.bal-label__native--hovered{color:var(--bal-form-field-label-color-hover)}.bal-label__native--pressed{color:var(--bal-form-field-label-color-active)}.bal-label__native--danger.bal-label__native--hovered{color:var(--bal-form-field-label-danger-color-hover)}.bal-label__native--danger.bal-label__native--pressed{color:var(--bal-form-field-label-danger-color-active)}"};export{c as bal_label}
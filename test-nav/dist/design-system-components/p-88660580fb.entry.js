import{r as t,c as s,h as i,H as e,g as h}from"./p-e85eaa4e.js";import{m as r}from"./p-7f5e6a6c.js";import{i as a}from"./p-9a929c20.js";import{i as n,e as o,f as c,s as u,h as l,a as d,b,j as f,c as m,d as p,g as $}from"./p-785037ba.js";import{l as v}from"./p-9a3d9e17.js";import{i as g,A as k,N as j}from"./p-6238764a.js";import{B as w}from"./p-61996a75.js";import{L as y}from"./p-585cea76.js";import{d as x}from"./p-ba7c87d4.js";import"./p-add1e9ec.js";import"./p-55865e45.js";function D(t){if(!t)return"";const s=`${t}`.trim().toUpperCase(),i=[s.substring(0,2),s.substring(2,8),s.substring(8,10),s.substring(10,11)].filter((t=>t.length>0));switch(i.length){case 1:return`${t}`;case 2:return`${i[0]}/${i[1]}`;case 3:return`${i[0]}/${i[1]}/${i[2]}`;default:return`${i[0]}/${i[1]}/${i[2]}.${i[3]}`}}function B(t){if(!t)return"";let s=`${t}`.trim();const i=[s.substring(0,9),s.substring(9,10)].filter((t=>t.length>0));return s=C(i[0]),i[1]?`${s}-${i[1]}`:s}function C(t){if(!t)return"";const s=`${t}`.trim(),i=[s.substring(0,2),s.substring(2,3),s.substring(3,6),s.substring(6,9)].filter((t=>t.length>0));switch(i.length){case 1:return`${s}`;case 2:return`${i[0]}/${i[1]}`;case 3:return`${i[0]}/${i[1]}.${i[2]}`;default:return`${i[0]}/${i[1]}.${i[2]}.${i[3]}`}}function E(t){if(!t)return"";const s=`${t}`.trim(),i=[s.substring(0,4),s.substring(4,7),s.substring(7,10)].filter((t=>t.length>0));switch(i.length){case 1:return`${s}`;case 2:return`${i[0]}.${i[1]}`;default:return`${i[0]}.${i[1]}.${i[2]}`}}function L(t){if(!t)return"";const s=`${t}`.trim(),i=[s.substring(0,2),s.substring(2,6),s.substring(6,10),s.substring(10,14)].filter((t=>t.length>0));switch(i.length){case 1:return`BE${s}`;case 2:return`BE${i[0]} ${i[1]}`;case 3:return`BE${i[0]} ${i[1]} ${i[2]}`;default:return`BE${i[0]} ${i[1]} ${i[2]} ${i[3]}`}}const O=class{constructor(i){t(this,i),this.balInput=s(this,"balInput",7),this.balBlur=s(this,"balBlur",7),this.balKeyPress=s(this,"balKeyPress",7),this.balFocus=s(this,"balFocus",7),this.balChange=s(this,"balChange",7),this.inputId="bal-input-"+R++,this.inheritedAttributes={},this.inputValue=this.value,this.initialValue=this.value||"",this.getInputValue=()=>{var t;const s=this.nativeInput;let i="";if(s){if(this.allowedKeyPress&&s&&!this.mask){const t=new RegExp("^"+this.allowedKeyPress+"$"),i=s.value.split("").filter((s=>t.test(s))).join("");return s.value=i,i}if(s.value){if(this.mask)switch(this.mask){case"contract-number":case"be-enterprise-number":return i=s.value.replace(/\D/g,""),i.length>10&&(i=i.substring(0,10)),i;case"offer-number":return i=s.value.replace(/\D/g,""),i.length>9&&(i=i.substring(0,9)),i;case"claim-number":{i=s.value.replace(/[^\dXx]/g,"");const e=[i.substring(0,10),i.substring(10,11),i.substring(11)].filter((t=>t.length>0));switch(e.length){case 1:i=`${e[0].replace(/\D/g,"")}`;break;case 2:i=`${e[0].replace(/\D/g,"")}${e[1]}`;break;default:i=`${e[0].replace(/\D/g,"")}${e[1]}${null===(t=e[2])||void 0===t?void 0:t.replace(/\D/g,"")}`}return i.length>11&&(i=i.substring(0,11)),i}case"be-iban":return i=s.value.replace(/\D/g,""),i.length>14&&(i=i.substring(0,14)),i;default:return s.value}}else this.inputValue=s.value}return""},this.onInput=t=>{var s,i;const e=$(t),h=null===(s=t.target)||void 0===s?void 0:s.selectionStart,r=null===(i=t.target)||void 0===i?void 0:i.selectionEnd;if(this.inputValue=this.getInputValue(),e)if(e.value)switch(this.mask){case"contract-number":e.value=B(this.inputValue),h<this.inputValue.length&&e.setSelectionRange(h,r);break;case"offer-number":e.value=C(this.inputValue),h<this.inputValue.length&&e.setSelectionRange(h,r);break;case"claim-number":e.value=D(this.inputValue),h<this.inputValue.length&&e.setSelectionRange(h,r);break;case"be-enterprise-number":e.value=E(this.inputValue),h<this.inputValue.length&&e.setSelectionRange(h,r);break;case"be-iban":e.value=L(this.inputValue),h<this.inputValue.length&&e.setSelectionRange(h,r);break;default:this.inputValue=e.value}else this.inputValue=e.value;this.balInput.emit(this.inputValue)},this.onFocus=t=>n(this,t),this.onBlur=t=>{o(this,t);const s=t.target;s&&(void 0===this.mask&&(s.value=this.getFormattedValue()),c(this))},this.onKeydown=t=>{if(void 0!==this.mask&&!v(t)&&!g(t)){let s=0;if(this.inputValue&&(s=this.inputValue.length),!(this.getMaskAllowedKeys().includes(t.key)||"claim-number"===this.mask&&("X"===t.key||"x"===t.key)&&s>=10))return u(t)}if(this.allowedKeyPress&&!this.mask&&!v(t)&&!g(t)&&!new RegExp("^"+this.allowedKeyPress+"$").test(t.key)&&![...k].includes(t.key))return u(t)},this.onClick=t=>l(this,t),this.handleClick=t=>d(this,t),this.focused=!1,this.ariaForm=x,this.name=this.inputId,this.invalid=!1,this.textAlign="left",this.type="text",this.accept=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.debounce=0,this.placeholder=void 0,this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=void 0,this.pattern=void 0,this.allowedKeyPress=void 0,this.required=!1,this.spellcheck=!1,this.disabled=!1,this.readonly=!1,this.clickable=!1,this.suffix=void 0,this.hasIconRight=!1,this.inputmode=void 0,this.value=void 0,this.mask=void 0}createLogger(t){this.log=t}debounceChanged(){this.balChange=r(this.balChange,this.debounce)}listenOnClick(t){b(this,t)}resetHandler(t){const s=t.target;(null==s?void 0:s.contains(this.el))&&f(this,this.initialValue,this.resetHandlerTimer)}connectedCallback(){this.debounceChanged(),this.initialValue=this.value||""}componentWillLoad(){this.inheritedAttributes=a(this.el,["aria-label","tabindex","title"])}componentDidLoad(){this.inputValue=this.value}async setFocus(){m(this)}async setBlur(){p(this)}getInputElement(){return Promise.resolve(this.nativeInput)}async setAriaForm(t){this.ariaForm=Object.assign({},t)}getRawValue(){return(this.value||"").toString()}getFormattedValue(){const t=this.getRawValue();return`${t}${void 0!==this.suffix&&void 0!==t&&""!==t?" "+this.suffix:""}`}getMaskAllowedKeys(){return[...j,...k]}render(){let t=this.focused?this.getRawValue():this.getFormattedValue();if(void 0!==this.mask)switch(this.mask){case"contract-number":t=B(t);break;case"claim-number":t=D(t);break;case"offer-number":t=C(t);break;case"be-enterprise-number":t=E(t);break;case"be-iban":t=L(t)}let s={};this.pattern&&(s={pattern:this.pattern});const h=w.block("input"),r=this.ariaForm.controlId||this.inputId;return i(e,{onClick:this.handleClick,"aria-disabled":this.disabled?"true":null,class:Object.assign({},h.class())},i("input",Object.assign({class:{input:!0,"is-disabled":this.disabled||this.readonly,"is-danger":this.invalid,clickable:this.clickable,"bal-focusable":!this.disabled,"has-icon-right":this.hasIconRight,"has-text-centered":"center"===this.textAlign,"has-text-right":"right"===this.textAlign},"data-testid":"bal-input",ref:t=>this.nativeInput=t,id:r,"aria-labelledby":this.ariaForm.labelId,"aria-describedby":this.ariaForm.messageId,"aria-invalid":!0===this.invalid?"true":"false","aria-disabled":this.disabled?"true":null,disabled:this.disabled,accept:this.accept,inputMode:this.inputmode,autoCapitalize:this.autocapitalize,autocomplete:this.autocomplete,autocorrect:this.autocorrect,autofocus:this.autofocus,min:this.min,max:this.max,minLength:this.minLength,maxLength:this.maxLength,multiple:this.multiple,name:this.name,placeholder:this.placeholder||"",readonly:this.readonly,required:this.required,spellcheck:this.spellcheck,type:this.type,value:t,onFocus:this.onFocus,onInput:t=>this.onInput(t),onKeyDown:t=>this.onKeydown(t),onBlur:this.onBlur,onClick:this.onClick,onKeyPress:t=>this.balKeyPress.emit(t)},s,this.inheritedAttributes)))}get el(){return h(this)}static get watchers(){return{debounce:["debounceChanged"]}}};!function(t,s,i,e){var h,r=arguments.length,a=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,s,i,e);else for(var n=t.length-1;n>=0;n--)(h=t[n])&&(a=(r<3?h(a):r>3?h(s,i,a):h(s,i))||a);r>3&&a&&Object.defineProperty(s,i,a)}([y("bal-input")],O.prototype,"createLogger",null);let R=0;O.style={css:".bal-input{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;width:100%;-ms-flex:1;flex:1;font-family:var(--bal-font-family-text);padding:0}"};export{O as bal_input}